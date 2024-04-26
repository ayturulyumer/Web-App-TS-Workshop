import { Post } from "../type/post";
import { httpServices } from "./httpServices";

export class PostServices extends httpServices<Post> {
  constructor(baseUrl: string) {
    // super refers to the constructor of the parent class so in our case it's httpServices constructor
    super(`${baseUrl}/posts`)
  }
  getUserPost(userId: number) {}
}
