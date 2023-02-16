import React, { useEffect } from "react";
import Story from './Story';
import { fetchPosts } from './postsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from './styled/Container';
import { PostsCollection } from './styled/PostsCollection';
import styled from "styled-components";

const Button = styled.button`
  background: rgba(254, 113, 57, 1);
  border: none;
  width: 104px;
  height: 40px;
  color: white;
  margin: 10px 20px 20px 50px;

`

export default function Stories(props) {
	const dispatch = useDispatch()
  const  {posts, loading}  = useSelector((state) => {
    return state.posts
  });

  useEffect(() => {
    dispatch(fetchPosts())
  },  [dispatch])

	if (loading) {
		return <div>Loading</div>
	}

	return (
    <Container>
      <PostsCollection>
        {posts && posts.map(post => {
          return <Story key={post.id} story={post} />
        })}
        </PostsCollection>
        <Button>show more</Button>
    </Container>
	)
}