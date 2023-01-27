import { AxiosPromise } from 'axios';
import { PostModel } from 'app/model/PostModel';

export interface GetPosts {
  (): AxiosPromise<PostModel[]>;
}
