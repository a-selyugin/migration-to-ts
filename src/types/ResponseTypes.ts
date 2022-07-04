export type RespNews = {
    status: Status;
    totalResults: number;
    articles: Array<Article>;
};

export type Article = {
    source: ArticleSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
};

type ArticleSource = {
    id: string;
    name: string;
};

export type RespSources = {
    status: Status;
    sources: Array<Source>;
};

export type Source = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
};

enum Status {
    ok,
    error,
}
