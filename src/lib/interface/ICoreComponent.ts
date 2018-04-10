import IDisposable from 'seng-disposable/lib/IDisposable';

interface ICoreComponent extends IDisposable {
  element: HTMLElement;
  /**
   * @public
   * @method getElement
   * @param {string} selector
   * @param {HTMLElement} container
   * @returns {HTMLElement}
   */
  getElement<T extends Element = HTMLElement>(selector: string, container?: HTMLElement): T;
  /**
   * @public
   * @method getElements
   * @param {string} selector
   * @param {HTMLElement} container
   * @returns {Array<HTMLElement>}
   */
  getElements<T extends Element = HTMLElement>(selector: string, container?: HTMLElement): Array<T>;
}

export default ICoreComponent;
