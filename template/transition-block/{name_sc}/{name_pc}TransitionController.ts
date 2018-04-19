import { MubanTransitionController } from 'muban-transition-component';
import {{name_pc}} from './{{name_pc}}';

class {{name_pc}}TransitionController extends MubanTransitionController<{{name_pc}}>
{
	/**
	 * @public
	 * @method setupTransitionInTimeline
	 * @description Use this method to setup your transition in timeline
	 * */
	protected setupTransitionInTimeline(): void {
	}

	/**
	* @public
	* @method setupTransitionOutTimeline
	* @description Use this method to setup your transition out timeline
	* */
	protected setupTransitionOutTimeline(): void {
	}

  /**
   * @protected
   * @method setupLoopingAnimationTimeline
   * @description Use this method to setup your looping animation timeline
   * */
  protected setupLoopingAnimationTimeline(): void {
  }
}

export default {{name_pc}}TransitionController;
