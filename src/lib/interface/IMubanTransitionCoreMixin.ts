import DisposableHelper from '../event/DisposableHelper';
import EventDispatcher from 'seng-event/lib/EventDispatcher';
import ICoreComponent from 'muban-core/lib/interface/ICoreComponent';

export interface IMubanTransitionCoreMixin extends ICoreComponent {
  eventNamespace: string;
  disposable: DisposableHelper;
  dispatcher: EventDispatcher;
  displayName: string;
  componentId: string;
}
