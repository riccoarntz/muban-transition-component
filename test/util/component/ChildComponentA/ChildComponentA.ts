import CoreComponent from 'muban-core/lib/CoreComponent';
import ChildComponentATransitionController from './ChildComponentATransitionController';
import mubanTransitionMixin from '../../../../src/lib/mixin/MubanTransitionMixin';
import mubanTransitionCoreMixin from '../../../../src/lib/mixin/MubanTransitionCoreMixin';

export default class ChildComponentA extends mubanTransitionMixin(mubanTransitionCoreMixin(CoreComponent)) {
  static displayName: string = 'child-component-a';
  public transitionController: ChildComponentATransitionController;

  constructor(public element: HTMLElement) {
    super(element);

    this.transitionController = new ChildComponentATransitionController(this);
  }
}
