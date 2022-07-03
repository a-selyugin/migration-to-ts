import News from './news/news';
import Sources from './buttons/sources';
import '../../types/ResponseTypes';
import Categories from './buttons/categories';

export class AppView {
    readonly news: News;
    readonly sources: Sources;
    readonly categories: Categories;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.categories = new Categories();
    }

    public drawNews(data: RespNews): void {
        const values: Array<Article> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: RespSources): void {
        const values: Array<Source> = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    public drawCategories(): void {
        const values: Array<string> = ['All', 'Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];
        this.categories.draw(values);
    }
}

export default AppView;
