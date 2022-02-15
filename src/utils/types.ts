export interface IUsers {
  id: string;
  username: string;
  age: number;
  posts: IPost[];
}

export interface IPost {
  id: string;
  title: string;
  content: string;
}
