type RespNews = {
  status: string,
  totalResults: number,
  articles: Array<Article>,
};

type Article = {
  source: ArticleSource,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

type ArticleSource = {
  id: string,
  name: string,
}