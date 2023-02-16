import React from "react";
import Story from "./Story";
import { savedPosts } from './postsSlice';
import { useSelector } from 'react-redux';
import { Container } from './styled/Container';
import { PostsCollection } from './styled/PostsCollection';

export default function Favorite() {
  const posts = useSelector((state) => savedPosts(state));

  return (
    <Container>
      <PostsCollection>
        {posts && posts.map(post => {
          return <Story key={post.id} story={post} />
        })}
        </PostsCollection>
    </Container>
  )
}