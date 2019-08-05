import React from 'react';
import { Link } from 'react-router-dom';
import { MdStar } from 'react-icons/md';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <MdStar alt="GithubStars" />
        <h1>githubstars</h1>
      </Link>
    </Container>
  );
}
