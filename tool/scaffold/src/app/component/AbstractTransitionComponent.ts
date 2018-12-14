import { CoreComponent } from 'muban-core';
import { mubanTransitionCoreMixin, mubanTransitionMixin } from 'muban-transition-component';
import abstractComponentMixin from 'app/component/AbstractComponentMixin';
export const base = abstractComponentMixin(
  mubanTransitionMixin(mubanTransitionCoreMixin(CoreComponent)),
);
export default class AbstractTransitionComponent extends base {}
