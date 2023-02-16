import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  margin: 20px 36px;
`

export default function PageNotFound() {
  return (
    <Container>
      Page Not found. Go to <Link to="/">Home</Link>
    </Container>
  );
};