import sengDisposable from 'seng-disposable';

/**
 * Utility class for handling various destructible things like timeouts, promises, knockout subscriptions, etc.
 *
 * @module Temple
 * @namespace temple.core
 * @class DestructibleHelper
 * @constructor
 */
export default class DisposableHelper extends sengDisposable {
  /**
   * list of registered intervals and timeouts, used for destruction
   *
   * @property _intervals
   * @protected
   */
  private _intervals: Array<number> = [];

  /**
   * list of disposables, like Event handlers, used for destruction
   *
   * @property _disposables
   * @protected
   */
  private _disposables: Array<sengDisposable> = [];

  /**
   * Add an item that implements IDestructible
   *
   * @method add
   * @param destructible {IDestructible}
   * @returns {IDestructible}
   */
  public add(destructible: sengDisposable): sengDisposable {
    this._disposables.push(destructible);

    return destructible;
  }

  /**
   * Adds an interval
   *
   * @method addInterval
   * @param interval {number} id of the interval
   * @returns {number} id of the interval
   */
  public addInterval(interval: number): number {
    this._intervals.push(interval);

    return interval;
  }

  /**
   * Destructs all registered objects
   *
   * @method destruct
   */
  public dispose(): void {
    // clear intervals
    if (this._intervals) {
      for (let i = 0; i < this._intervals.length; i++) {
        clearInterval(this._intervals[i]);
      }
      this._intervals.length = 0;
      this._intervals = null;
    }

    // clear disposables
    if (this._disposables) {
      for (let i = 0; i < this._disposables.length; i++) {
        const destructible = this._disposables[i];
        if (destructible) {
          destructible.dispose();
        }
      }
      this._disposables.length = 0;
      this._disposables = null;
    }

    super.dispose();
  }
}
