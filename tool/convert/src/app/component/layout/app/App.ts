import { MubanTransitionContentPage } from 'muban-transition-component';

export default class App extends MubanTransitionContentPage {
  static displayName: string = 'app-root';

  constructor(element: HTMLElement) {
    super(element);

    // for generic app logic
  }

  public dispose() {
    // clean up stuff when hot reloading
  }
}
