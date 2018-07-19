import CoreComponent from 'muban-core/lib/CoreComponent';
import ChildComponentATransitionController, { TransitionId } from './ChildComponentATransitionController';
import mubanTransitionMixin from '../../../../src/lib/mixin/MubanTransitionMixin';
import mubanTransitionCoreMixin from '../../../../src/lib/mixin/MubanTransitionCoreMixin';
import TransitionDirection from 'transition-controller/lib/enum/TransitionDirection';

export default class ChildComponentA extends mubanTransitionMixin(mubanTransitionCoreMixin(CoreComponent)) {
  static displayName: string = 'child-component-a';
  public transitionController: ChildComponentATransitionController;

  constructor(public element: HTMLElement) {
    super(element);

    this.transitionController = new ChildComponentATransitionController(this, {
      transitionInId: TransitionId[TransitionDirection.IN].TRANSITION_ID_1,
      transitionOutId: TransitionId[TransitionDirection.OUT].TRANSITION_ID_1,
      loopId: TransitionId.LOOP_1,
    });
  }
}
