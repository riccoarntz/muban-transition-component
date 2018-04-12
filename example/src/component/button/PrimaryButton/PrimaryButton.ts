import MubanTransitionComponent from '../../../../../src/lib/component/MubanTransitionComponent';
import PrimaryButtonTransitionController from './PrimaryButtonTransitionController';

export default class PrimaryButton extends MubanTransitionComponent {
  static displayName: string = 'primary-button';
  public transitionController: PrimaryButtonTransitionController;

  constructor(public element: HTMLElement) {
    super(element);

    this.transitionController = new PrimaryButtonTransitionController(this);
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



