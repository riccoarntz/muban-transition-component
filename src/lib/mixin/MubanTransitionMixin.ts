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
    public enterViewThreshold: number = 0.25;
    public hasEntered: boolean = false;

    constructor(...args: any[]) {
      super(...args);
    }

    /**
     * @public
     * @description When a scrollComponent enters the view.
     * @method enterView
     */
    public enterView(): void {
      this.transitionIn();
      this.startLoopingAnimation();
    }

    /**
     * @public
     * @description When a scrollComponent leaves the view.
     * @method leaveView
     */
    public leaveView(): void {
      this.stopLoopingAnimation();
    }

    /**
     * @public
     * @method beyondView
     * @description When the scrollbar is dragged down super fast the default enter view event might not be
     * triggered therefor we have a beyondView event! If it's already transitioned in it will do nothing! But if
     * it's not transitioned in it will still try to transitionIn
     */
    public beyondView(): void {
      if (!this.hasEntered) {
        // Todo maybe seek to progress(1) to avoid (unnecessary) performance issue's
        this.transitionIn();
      }
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
    }

    /**
     * @public
     * @method stopLoopingAnimation
     */
    public stopLoopingAnimation(): void {
      this.transitionController.stopLoopingAnimation();
    }
  };
}

export default mubanTransitionMixin;
