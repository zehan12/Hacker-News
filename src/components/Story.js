import React from 'react';
import TimeAgo from 'timeago-react';
import { useDispatch } from 'react-redux'
import saved from './icons//saved.png';
import unsaved from './icons//unsaved.png';
import { likePost } from './postsSlice'
import styled from 'styled-components';
import { formatURL } from './../utils/helpers';

const PostContainer = styled.div`
  padding: 16px;
  width: 100%;
`

const PostTitle = styled.li`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  
  a:link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
  a:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  &:link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.metaItem};
  }

  &:hover {
    text-decoration: underline;
  }
  &:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.metaItem};
  }
`

const PostMeta = styled.div`
  padding: 0;
  margin-bottom: 0;
`

const PostMetaItem = styled.span`
  font-family: 'Open Sans';
  display: inline-block;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.metaItem};
  padding-top: 8px;

  &:not(:last-of-type):after {
    content: '\\007c';
    padding: 0 5px;
  }
`

const Link = ({ url, title }) => (
  <StyledLink href={url} target="_blank" rel="noreferrer">
    {title}
  </StyledLink>
);

export default function Story ({ story: { id, by, score, title, kids, time, url, starred } }) {
  const dispatch = useDispatch();

  return (
    <PostContainer>
      <PostTitle>
        <Link url={url} title={title} /> (<Link type="light" url={url} title={formatURL(url)} />)
      </PostTitle>
      <PostMeta>
      <PostMetaItem>{score} points</PostMetaItem>
      <PostMetaItem>by <Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} /></PostMetaItem>
      <PostMetaItem><TimeAgo datetime={new Date(time * 1000)}/></PostMetaItem>
      <PostMetaItem>
        <Link
          url={`https://news.ycombinator.com/item?id=${id}`}
          title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
        />
      </PostMetaItem>
      <PostMetaItem role="button" onClick={() => dispatch(likePost({ postId: id }))}>
        {starred ? <><img src={saved}  alt="saved" /> saved</> : <><img src={unsaved} alt="not saved" /> save</>}
      </PostMetaItem>
      </PostMeta>
    </PostContainer>
  );
};