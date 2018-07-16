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

    public enterView(): void {
      this.transitionIn();
      this.startLoopingAnimation();
    }

    public leaveView(): void {
      this.stopLoopingAnimation();
    }

    public beyondView(): void {
      if (!this.hasEntered) {
        // Todo maybe seek to progress(1) to avoid (unnecessary) performance issue's
        this.transitionIn();
      }
    }

    public transitionIn(forceTransition: boolean = false): Promise<any> {
      return this.transitionController.transitionIn(forceTransition);
    }

    public transitionOut(
      forceTransition: boolean = false,
      id?: string,
      reset?: boolean,
    ): Promise<any> {
      return this.transitionController.transitionOut(forceTransition, id, reset);
    }

    public startLoopingAnimation(id?: string, reset?: boolean): void {
      this.transitionController.startLoopingAnimation(id, reset);
    }

    public stopLoopingAnimation(): void {
      this.transitionController.stopLoopingAnimation();
    }
  };
}

export default mubanTransitionMixin;
