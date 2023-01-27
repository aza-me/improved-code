import instance from '../instance';
import { GetPosts } from './types';

export const getPosts: GetPosts = () => {
  return instance.get('/savayer/demo/posts');
};
