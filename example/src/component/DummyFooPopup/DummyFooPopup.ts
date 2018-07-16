import CoreComponent from 'muban-core/lib/CoreComponent';
import DummyFooPopupTransitionController from './DummyFooPopupTransitionController';
import mubanTransitionMixin from '../../../../src/lib/mixin/MubanTransitionMixin';
import mubanTransitionCoreMixin from '../../../../src/lib/mixin/MubanTransitionCoreMixin';

export default class DummyFooPopup extends mubanTransitionMixin(mubanTransitionCoreMixin(CoreComponent)) {
  static displayName: string = 'dummy-foo-popup';
  public transitionController: DummyFooPopupTransitionController;

  constructor(public element: HTMLElement) {
    super(element);

    this.transitionController = new DummyFooPopupTransitionController(this);
    this.addEventListeners();
  }

  /**
   * @private
   * @method addEventListeners
   */
  private addEventListeners(): void {
    this.element.querySelector('.js-button-close').addEventListener('click', this.handleClosePopupClick.bind(this));
  }

  /**
   * @private
   * @method handleClosePopupClick
   */
  private handleClosePopupClick(): void {
    this.transitionOut();
  }

  public dispose() {
    super.dispose();
  }
}



