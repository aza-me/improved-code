interface PostModelLang {
  en: string;
  id: string;
}

export interface PostModel {
  id: number;
  title?: PostModelLang;
  body?: PostModelLang;
  link_title: string;
  link: string;
}
