export type TTaskProps = {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  user: string;
};

export type TUserProps = {
  _id: string;
  googleId: string;
  name: string;
  email: string;
  picture: string;
};
