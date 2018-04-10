import mubanTransitionMixin from 'lib/mixin/MubanTransitionMixin';
import CoreComponent from 'muban-core/lib/CoreComponent';
import mubanTransitionCoreMixin from 'lib/mixin/MubanTransitionCoreMixin';

export default class MubanTransitionComponent extends mubanTransitionMixin(
  mubanTransitionCoreMixin(CoreComponent),
) {}
