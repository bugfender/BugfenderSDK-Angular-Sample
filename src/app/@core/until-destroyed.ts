import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const untilDestroyedSymbol = Symbol('untilDestroyed');

type DestroyCallback = (...args: unknown[]) => void;

interface IndexedInstance {
  [key: string]: unknown;
  [key: symbol]: unknown;
  [untilDestroyedSymbol]?: Subject<void>;
}

/**
 * RxJS operator that unsubscribe from observables on destory.
 * Code forked from https://github.com/NetanelBasal/ngx-take-until-destroy
 *
 * IMPORTANT: Add the `untilDestroyed` operator as the last one to prevent leaks with intermediate observables in the
 * operator chain.
 *
 * @param instance The parent Angular component or object instance.
 * @param destroyMethodName The method to hook on (default: 'ngOnDestroy').
 * @example
 * ```
 * import { untilDestroyed } from '@core';
 *
 * @Component({
 *   selector: 'app-example',
 *   templateUrl: './example.component.html'
 * })
 * export class ExampleComponent implements OnInit, OnDestroy {
 *   ngOnInit() {
 *     interval(1000)
 *       .pipe(untilDestroyed(this))
 *       .subscribe(val => console.log(val));
 *   }
 *
 *   // This method must be present, even if empty.
 *   ngOnDestroy() {
 *     // To protect you, an error will be thrown if it doesn't exist.
 *   }
 * }
 * ```
 */
export function untilDestroyed(
  instance: object,
  destroyMethodName: string = 'ngOnDestroy'
) {
  return <T>(source: Observable<T>) => {
    const target = instance as IndexedInstance;
    const originalDestroy = target[destroyMethodName] as
      | DestroyCallback
      | undefined;
    const hasDestroyFunction = typeof originalDestroy === 'function';

    if (!hasDestroyFunction) {
      throw new Error(
        `${instance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`
      );
    }

    if (!target[untilDestroyedSymbol]) {
      target[untilDestroyedSymbol] = new Subject<void>();

      target[destroyMethodName] = function (...args: unknown[]) {
        if (hasDestroyFunction) {
          originalDestroy.apply(this, args);
        }
        target[untilDestroyedSymbol]?.next();
        target[untilDestroyedSymbol]?.complete();
      } as DestroyCallback;
    }

    return source.pipe(takeUntil<T>(target[untilDestroyedSymbol]!));
  };
}
