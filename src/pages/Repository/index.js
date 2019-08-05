import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

export default function Repository() {
  const repo = useSelector(state => state.repo);

  return (
    <ul>
      {repo && repo.items.map((r, index) => <li key={index}>{r.name}</li>)}
    </ul>
  );
}
