import CoreComponent from 'muban-core/lib/CoreComponent';
import getComponentForElement from 'muban-core/lib/utils/getComponentForElement';
import DummyFooPopup from '../../DummyFooPopup/DummyFooPopup';
import DummyFooTransitionController from './DummyFooTransitionController';
import mubanTransitionMixin from '../../../../../src/lib/mixin/MubanTransitionMixin';
import mubanTransitionCoreMixin from '../../../../../src/lib/mixin/MubanTransitionCoreMixin';

export default class DummyFoo extends mubanTransitionMixin(mubanTransitionCoreMixin(CoreComponent)) {
  static displayName: string = 'dummy-foo';
  public transitionController: DummyFooTransitionController;

  private dummyFooPopup: DummyFoo;

  constructor(public element: HTMLElement) {
    super(element);

    this.transitionController = new DummyFooTransitionController(this);
    this.addEventListeners();
    this.dummyFooPopup = getComponentForElement(this.element.querySelector(`[data-component="${DummyFooPopup.displayName}"]`));
  }

  /**
   * @private
   * @method addEventListeners
   */
  private addEventListeners(): void {
    this.element.querySelector('.js-button-open').addEventListener('click', this.handleOpenPopupClick.bind(this));
  }

  /**
   * @private
   * @method handleOpenPopupClick
   */
  private handleOpenPopupClick(): void {
    this.dummyFooPopup.transitionIn();
  }

  /**
   * @public
   * @method stopLoopingAnimation
   */
  public stopLoopingAnimation(): void {
    super.stopLoopingAnimation();
  }

  /**
   * @public
   * @method startLoopingAnimations
   */
  public startLoopingAnimation(): void {
    super.startLoopingAnimation();
  }

  public dispose() {
    super.dispose();
  }
}



