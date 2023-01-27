import { PostModel } from '@/app/model/PostModel';

export interface CardProps {
  post: PostModel;
  classes?: {
    card?: string;
    title?: string;
    text?: string;
    link?: string;
  };
  onClick: (url: string) => void;
}
