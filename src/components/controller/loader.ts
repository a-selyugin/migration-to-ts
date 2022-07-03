import '../../types/ResponseTypes';
import { Options } from '../../types/Interfaces';

class Loader {
    readonly baseLink: string;
    readonly options: Pick<Options, 'apiKey'>;

    constructor(baseLink: string, options: Pick<Options, 'apiKey'>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        { endpoint, options = {} }: { endpoint: string, options?: Partial<Options>},
        callback: (data: T) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        console.log('Error - ',res.status);
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Partial<Options>, endpoint: string): string {
        const urlOptions: { [index: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(method: string, endpoint: string, callback: (data: T) => void, options: Partial<Options> = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response): Promise<T> => res.json())
            .then((data: T): void => callback(data))
            .catch((err: Error): void => console.error(err));
    }
}

export default Loader;
