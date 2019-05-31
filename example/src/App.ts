import getComponentForElement from 'muban-core/lib/utils/getComponentForElement';
import MubanTransitionVariable from '../../src/lib/data/MubanTransitionVariable';
import { IMubanTransitionMixin } from '../../src/lib/interface/IMubanTransitionMixin';
import { ScrollTrackerComponentManager } from 'scroll-tracker-component-manager';
import CoreComponent from 'muban-core/lib/CoreComponent';

export default class App extends CoreComponent{
  static displayName: string = 'app-root';

  public scrollTrackerComponentManager: ScrollTrackerComponentManager<IMubanTransitionMixin> = new ScrollTrackerComponentManager<IMubanTransitionMixin>({
    container: window,
    inViewProgressEnabled: true,
    setDebugLabel: true,
    debugBorderColor: 'red',
    scrollThrottle: 100,
    resizeDebounce: 100,

    enableSmoothScroll: true,
    smoothScrollOptions: {
      damping: 0.1,
      thumbMinSize: 20,
      renderByPixels: true,
      alwaysShowTracks: false,
      continuousScrolling: true,
      wheelEventTarget: null,
      plugins: {},
    },
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
    }
  }
}
