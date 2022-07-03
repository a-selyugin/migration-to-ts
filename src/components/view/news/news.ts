import './news.css';
import '../../../types/ResponseTypes';

class News {
    public draw(data: Array<Article>): void {
        const news: Array<Article> = data.length >= 10 ? data.filter((_item: Article, idx: number) => idx < 10) : data;
        const urlToPlaceholder: string = 'https://via.placeholder.com/600x400.png?text=No+image';
        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: Article, idx: number) => {
            const newsClone: HTMLTemplateElement = newsItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            if (idx % 2) (newsClone.querySelector('.news__item') as HTMLDivElement).classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLDivElement).style.backgroundImage = `url(${
                item.urlToImage || urlToPlaceholder
            })`;
            (newsClone.querySelector('.news__meta-author') as HTMLDivElement).textContent =
                item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as HTMLDivElement).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as HTMLDivElement).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as HTMLDivElement).textContent = item.source.name;
            (newsClone.querySelector('.news__description-content') as HTMLDivElement).textContent = item.description;
            (newsClone.querySelector('.news__read-more a') as HTMLDivElement).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLDivElement).innerHTML = '';
        (document.querySelector('.news') as HTMLDivElement).appendChild(fragment);
    }
}

export default News;
