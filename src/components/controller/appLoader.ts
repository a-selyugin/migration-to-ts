import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            // apiKey: '9931a468f12141538e711343ee55fb56', // получите свой ключ https://newsapi.org/
            apiKey: 'fad4d85d15d444b68155b15f3f84e560',
        });
    }
}

export default AppLoader;
