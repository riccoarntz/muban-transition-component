import CoreComponent from 'muban-core/lib/CoreComponent';
import {
  mubanTransitionCoreMixin,
  mubanTransitionMixin,
  IMubanTransitionMixin,
} from 'muban-transition-component';
import abstractComponentMixin from 'app/component/AbstractComponentMixin';

export const base: Constructor<IMubanTransitionMixin> &
  typeof CoreComponent = abstractComponentMixin(
  mubanTransitionMixin(mubanTransitionCoreMixin(CoreComponent)),
);
export default class AbstractTransitionComponent extends base {}
