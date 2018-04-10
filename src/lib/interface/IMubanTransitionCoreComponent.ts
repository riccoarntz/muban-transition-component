import CoreComponent from 'muban-core/lib/CoreComponent';
import DisposableHelper from 'lib/event/DisposableHelper';
import EventDispatcher from 'seng-event/lib/EventDispatcher';

interface IMubanTransitionCoreComponent extends CoreComponent {
  eventNamespace: string;
  disposable: DisposableHelper;
  dispatcher: EventDispatcher;
  displayName: string;
}

export default IMubanTransitionCoreComponent;
