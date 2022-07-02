import Loader from './loader';

class AppLoader extends Loader {    
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '9931a468f12141538e711343ee55fb56', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
