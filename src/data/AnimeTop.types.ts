export interface IAnimeTop {
  title: string;
  image: string;
  id: number;
  description: string;
  link: string;
}

export interface IAnimeTopList {
  list: IAnimeTop[];
}
