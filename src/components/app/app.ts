import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    readonly controller: AppController;
    readonly view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        (document
            .querySelector('.sources') as Element)
            .addEventListener('click', (e: Event) => this.controller.getNews(e, (data: RespNews) => this.view.drawNews(data)));
        this.controller.getSources((data: RespSources) => this.view.drawSources(data));
    }
}

export default App;
