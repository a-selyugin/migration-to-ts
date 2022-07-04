export interface Options {
    apiKey: string;
    sources: string;
    category: string;
}

export interface RequestResponse {
    baseLink: string;
    options: Pick<Options, 'apiKey'>;
    getResp: Function;
}
