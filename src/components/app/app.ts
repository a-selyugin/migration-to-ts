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
        this.view.drawCategories();
        document.addEventListener('DOMContentLoaded', (e: Event) =>
            this.controller.getSources(e, (data: RespSources) => this.view.drawSources(data))
        );
        (document.querySelector('.sources') as Element).addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data: RespNews) => this.view.drawNews(data))
        );
        (document.querySelector('.categories') as Element).addEventListener('click', (e: Event) =>
            this.controller.getSources(e, (data: RespSources) => this.view.drawSources(data))
        );
    }
}

export default App;
