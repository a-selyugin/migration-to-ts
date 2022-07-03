import AppLoader from './appLoader';

class AppController extends AppLoader {
    public getSources<T>(e: Event, callback: (data: T) => void): void {
        let target: Element = e.target as Element;
        const newsContainer = e.currentTarget as Element;

        if (e.type === 'DOMContentLoaded' || target.getAttribute('data-category-id') === 'All') {
            super.getResp(
                {
                    endpoint: 'sources',
                },
                callback
            );
            return;
        } else {

            while (target !== newsContainer) {
                if (target.classList.contains('category__item')) {
                    const categoryId: string = target.getAttribute('data-category-id') as string;
                    if (newsContainer.getAttribute('chosen-category') !== categoryId) {
                        newsContainer.setAttribute('chosen-category', categoryId);
                        super.getResp(
                            {
                                endpoint: 'sources',
                                options: {
                                    category: categoryId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
                target = target.parentNode as Element;
            }
        }
    }

    public getNews<T>(e: Event, callback: (data: T) => void): void {
        let target: Element = e.target as Element;
        const newsContainer: Element = e.currentTarget as Element;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('chosen-source') !== sourceId) {
                    newsContainer.setAttribute('chosen-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as Element;
        }
    }
}

export default AppController;
