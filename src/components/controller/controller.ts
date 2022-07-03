import AppLoader from './appLoader';

class AppController extends AppLoader {
    public getSources<T>(e: Event, callback: (data: T) => void): void {
        let target: Element = e.target as Element;
        const newsContainer: Element = e.currentTarget as Element;

        const categoriesContainer: Element = document.querySelector('.categories') as Element;
        const activeButton: Element | null = categoriesContainer.querySelector('.active');
        let activeCategory: string = 'All';

        if (e.type === 'DOMContentLoaded' || target.getAttribute('data-category-id') === 'All') {
            super.getResp(
                {
                    endpoint: 'sources',
                },
                callback
            );
            activeButton?.classList.remove('active');
            const newActiveButton: Element = document.querySelector(`div[data-category-id=${activeCategory}]`) as Element;
            newActiveButton.classList.add('active');
            return;
        } 
        else {
            while (target !== newsContainer) {
                if (target.classList.contains('category__item')) {
                    const categoryId: string = target.getAttribute('data-category-id') as string;
                    activeCategory = categoryId;
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
                    activeButton?.classList.remove('active');
                    const newActiveButton: Element = document.querySelector(`div[data-category-id=${activeCategory}]`) as Element;
                    newActiveButton.classList.add('active');
                    return;
                }
                target = target.parentNode as Element;
            }
        }
    }

    public getNews<T>(e: Event, callback: (data: T) => void): void {
        let target: Element = e.target as Element;
        const newsContainer: Element = e.currentTarget as Element;
        const sourcesContainer: Element = document.querySelector('.sources') as Element;
        const activeButton: Element | null = sourcesContainer.querySelector('.active');

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
                activeButton?.classList.remove('active');
                target.classList.add('active');
                return;
            }
            target = target.parentNode as Element;
        }
    }
}

export default AppController;
