type RespSources = {
  status: string,
  sources: Array<Source>
}

type Source = {
  id: string,
  name: string,
  description: string,
  url: string,
  category: string,
  language: string,
  country: string,
}
