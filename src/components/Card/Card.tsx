import React from 'react';
import cn from '@/app/helpers/cn';
import { CardProps } from './types';
import { getShortText } from '@/app/helpers/getShortText';

const Card: React.FC<CardProps> = ({ post, classes, onClick }) => {
  return (
    <div className={cn('card', classes?.card)}>
      <div className={cn('card__title', classes?.title)}>{post.title?.en}</div>
      <div className={cn('card__text', classes?.text)}>{getShortText(post.body?.en)}</div>
      <a
        href={post.link}
        className={cn('default-link card__link', classes?.link, {
          'card__link--red': post.id == 1,
        })}
        target={post.id == 1 ? '_blank' : ''}
        onClick={() => onClick(post.link)}
      >
        {post.link_title}
      </a>
    </div>
  );
};

export default Card;
