import CoreComponent from 'muban-core/lib/CoreComponent';
import { mubanTransitionCoreMixin, mubanTransitionMixin } from 'muban-transition-component';
import abstractBlockMixin from 'app/component/block/AbstractBlockMixin';
import abstractComponentMixin from 'app/component/AbstractComponentMixin';
export const base = abstractBlockMixin(
  abstractComponentMixin(mubanTransitionMixin(mubanTransitionCoreMixin(CoreComponent))),
);
export default class AbstractTransitionBlock extends base {}
