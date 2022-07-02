import News from './news/news';
import Sources from './sources/sources';
import '../../types/RespNews';
import '../../types/RespSources';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: RespNews): void {
        const values: Array<Article> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: RespSources): void {
        const values: Array<Source> = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
