import { IMubanTransitionMixin, MubanTransitionVariable } from 'muban-transition-component';
import { ScrollTrackerComponentManager } from 'scroll-tracker-component-manager';
import AbstractComponent from 'app/component/AbstractComponent';
import getComponentForElement from 'muban-core/lib/utils/getComponentForElement';

export default class App extends AbstractComponent {
  static displayName: string = 'app-root';

  public scrollTrackerComponentManager: ScrollTrackerComponentManager<IMubanTransitionMixin> = new ScrollTrackerComponentManager<IMubanTransitionMixin>({
    config: {
      setDebugLabel: true,
      debugBorderColor: 'red',
      resizeDebounce: 100,
    }
  });

  constructor(element: HTMLElement) {
    super(element);
    // for generic app logic
  }

  /**
   * @public
   * @method allComponentsConstructed
   */
  public adopted(): void {
    this.getElements(`[${MubanTransitionVariable.scrollComponentAttribute}]`).forEach(
      (element: HTMLElement) => {
        this.scrollTrackerComponentManager.addComponentToScrollTracker(<IMubanTransitionMixin>getComponentForElement(element));
      },
    );
  }

  public dispose() {
    // clean up stuff when hot reloading
    if (this.scrollTrackerComponentManager) {
      this.scrollTrackerComponentManager.dispose();
      this.scrollTrackerComponentManager = null;
    }
  }
}
