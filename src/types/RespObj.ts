

type RespObj = {
  status: string,
  totalResults: number,
  articles: Array<Article>,
};

type Article = {
  source: SourceObj,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

type SourceObj = {
  id: number | null,
  name: string,
}