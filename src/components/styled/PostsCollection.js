import styled from "styled-components";

export const PostsCollection = styled.ol`
  li::marker {
    color: ${({ theme }) => theme.colors.metaItem};
    font-size: 18px;
    font-weight: 900;
  }
`