import News from './news/news';
import Sources from './sources/sources';
import '../../types/ResponseTypes';

export class AppView {
    readonly news: News;
    readonly sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: RespNews): void {
        const values: Array<Article> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: RespSources): void {
        const values: Array<Source> = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
