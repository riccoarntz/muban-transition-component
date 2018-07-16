import AbstractTransitionController from 'transition-controller';
import getComponentForElement from 'muban-core/lib/utils/getComponentForElement';
import isElement from 'lodash/isElement';
import isString from 'lodash/isString';
import { IMubanTransitionMixin } from '../interface/IMubanTransitionMixin';

export default abstract class MubanTransitionController<
  T extends IMubanTransitionMixin
> extends AbstractTransitionController<T> {
  /**
   * This method finds a component based on a string, a html element or the instance.
   *
   * @protected
   * @param {string | HTMLElement | IMubanTransitionMixin} component
   * @returns {IMubanTransitionMixin}
   */
  protected getComponent(component: string | HTMLElement | T): T {
    let instance: T;

    if (isElement(component)) {
      instance = getComponentForElement<T>(<HTMLElement>component);
    } else if (isString(component)) {
      instance = getComponentForElement<T>(this.parentController.getElement(<string>component));
    } else {
      instance = <T>component;
    }

    if (instance === undefined) {
      throw new Error(`The requested component [${component}] does not exist`);
    }

    return instance;
  }
}
