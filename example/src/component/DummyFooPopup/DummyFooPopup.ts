import MubanTransitionComponent from '../../../../src/lib/component/MubanTransitionComponent';
import DummyFooPopupTransitionController from './DummyFooPopupTransitionController';

export default class DummyFooPopup extends MubanTransitionComponent {
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

  /**
   * @public
   * @method stopLoopingAnimation
   */
  public stopLoopingAnimation(): void {
    super.stopLoopingAnimation();
  }

  /**
   * @public
   * @method startLoopingAnimation
   */
  public startLoopingAnimation(): void {
    super.startLoopingAnimation();
  }

  public dispose() {
    super.dispose();
  }
}



