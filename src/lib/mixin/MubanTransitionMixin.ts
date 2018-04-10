import AbstractTransitionController from 'transition-controller';
import IMubanTransitionCoreComponent from '../interface/IMubanTransitionCoreComponent';
import IMubanTransitionComponent from '../interface/IMubanTransitionComponent';
import DisposableHelper from '../event/DisposableHelper';
import EventDispatcher from 'seng-event/lib/EventDispatcher';
EventDispatcher;
DisposableHelper;

function mubanTransitionMixin<TBase extends Constructor<IMubanTransitionCoreComponent>>(
  Base: TBase,
) {
  return class MubanTransitionMixin extends Base {
    public transitionController: AbstractTransitionController<IMubanTransitionComponent>;
    public loopingAnimationsStarted: boolean = false;
    public transitionInThreshold: number = 0.25;

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
     * @method startLoopingAnimations
     */
    public startLoopingAnimations(): void {
      this.loopingAnimationsStarted = true;
    }

    /**
     * @public
     * @method stopLoopingAnimations
     */
    public stopLoopingAnimations(): void {
      this.loopingAnimationsStarted = false;
    }
  };
}

export default mubanTransitionMixin;
