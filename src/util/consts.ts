import { EUserType, IBlogPost, IUser } from "@/util/types";

export const postList: IBlogPost[] = [
  {
    uid: "aa9cddaf-f426-4661-8c4b-ab9aa3d2d55b",
    url: "https://www.youtube.com/watch?v=ccvL_gdXbKM",
    title: "My first blog",
  },
  {
    uid: "b1454feb-0b2a-410b-ab0b-9ec172f7968b",
    url: "https://www.youtube.com/watch?v=YWQbJZxTZd4",
    title: "My second blog",
  },
  {
    uid: "6105ee58-2f34-45da-a65c-56c117f1e2fc",
    url: "https://www.youtube.com/watch?v=BlSXxA1o1-Y",
    title: "My third blog",
  },
];

export const users: IUser[] = [
  {
    name: "User 1",
    userId: "6b32fed5-64d5-4a73-a218-e0e32de2e3f1",
    userType: EUserType.USER,
    password: "12345678",
  },
  {
    name: "User 2",
    userId: "d47b5e8d-df9d-4eb0-be2c-7d0947974cf5",
    userType: EUserType.USER,
    password: "11111111",
  },
  {
    name: "Admin 1",
    userId: "29f12d08-d7fa-425e-aa19-9d1544cd0d0a",
    userType: EUserType.ADMIN,
    password: "99999999",
  },
];

export const myBlogUrl: string = "/my-blog";

export const userDataKey = "userData";

export const watchUrlKeyMap = "urlKeyMap";
