export interface IMainRoute {
  href: string;
  tabName: string;
  keyword: string;
  des: string;
}

export type ISubRoute = Omit<IMainRoute, 'des'>;

interface IBaseItem {
  id: number;
  name: string;
  thumbnail: string;
  price: number;
}

export interface IGarden extends IBaseItem {
  size: number;
}

export interface ICrop extends IBaseItem {
  location: string;
}

export interface IWhipser {
  id: number;
  title: string;
  thumbnail: string | null;
  userName: string;
  userProfile: string | null;
  likeCount: number;
  commentCount: number;
  payload: string;
}
