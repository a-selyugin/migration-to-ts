import './categories.css';
import '../../../types/ResponseTypes';

class Categories {
    public draw(data: Array<string>): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const categoryItemTemp: HTMLTemplateElement = document.querySelector('#categoryItemTemp') as HTMLTemplateElement;

        data.forEach((item: string) => {
            const categoryClone: HTMLTemplateElement = categoryItemTemp.content.cloneNode(true) as HTMLTemplateElement;

            (categoryClone.querySelector('.category__item-name') as HTMLDivElement).textContent = item;
            (categoryClone.querySelector('.category__item') as HTMLDivElement).setAttribute('data-category-id', item);

            fragment.append(categoryClone);
        });

        (document.querySelector('.categories') as HTMLDivElement).append(fragment);
    }
}

export default Categories;
