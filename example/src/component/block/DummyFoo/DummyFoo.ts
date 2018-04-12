import MubanTransitionComponent from '../../../../../src/lib/component/MubanTransitionComponent';
import DummyFooTransitionController from './DummyFooTransitionController';
import getComponentForElement from 'muban-core/lib/utils/getComponentForElement';
import DummyFooPopup from '../../DummyFooPopup/DummyFooPopup';

export default class DummyFoo extends MubanTransitionComponent {
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



