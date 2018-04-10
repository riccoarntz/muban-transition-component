import CoreComponent from 'muban-core/lib/CoreComponent';
import mubanTransitionCoreMixin from '../mixin/MubanTransitionCoreMixin';
import mubanTransitionMixin from '../mixin/MubanTransitionMixin';
import IMubanTransitionComponent from 'lib/interface/IMubanTransitionComponent';

export const base: Constructor<IMubanTransitionComponent> &
  typeof CoreComponent = mubanTransitionMixin(mubanTransitionCoreMixin(CoreComponent));
export default class MubanTransitionComponent extends base {}
