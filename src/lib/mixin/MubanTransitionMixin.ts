import AbstractTransitionController from 'transition-controller';
import { IMubanTransitionCoreMixin } from '../interface/IMubanTransitionCoreMixin';
import { IMubanTransitionMixin } from '../interface/IMubanTransitionMixin';
import DisposableHelper from '../event/DisposableHelper';
import EventDispatcher from 'seng-event/lib/EventDispatcher';
EventDispatcher;
DisposableHelper;

function mubanTransitionMixin<TBase extends Constructor<IMubanTransitionCoreMixin>>(Base: TBase) {
  return class MubanTransitionMixin extends Base {
    public transitionController: AbstractTransitionController<IMubanTransitionMixin>;
    public loopingAnimationsStarted: boolean = false;
    public transitionInThreshold: number = 0.25;
    public inView: boolean = false;

    constructor(...args: any[]) {
      super(...args);
    }

    /**
     * @public
     * @method transitionIn
     */
    public transitionIn(forceTransition = false): Promise<any> {
      return this.transitionController.transitionIn(forceTransition);
    }

    /**
     * @public
     * @method transitionOut
     */
    public transitionOut(forceTransition = false): Promise<any> {
      return this.transitionController.transitionOut(forceTransition);
    }

    /**
     * @public
     * @method startLoopingAnimation
     */
    public startLoopingAnimation(): void {
      this.transitionController.startLoopingAnimation();
      this.loopingAnimationsStarted = true;
    }

    /**
     * @public
     * @method stopLoopingAnimation
     */
    public stopLoopingAnimation(): void {
      this.transitionController.stopLoopingAnimation();
      this.loopingAnimationsStarted = false;
    }
  };
}

export default mubanTransitionMixin;
