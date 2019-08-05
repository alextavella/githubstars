import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { MdSearch } from 'react-icons/md';

import { Container, Content, Button, Input } from './styles';

import * as RepoActions from '../../store/modules/repo/actions';

export default function Home() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const hasUsername = useMemo(() => username, [username]);

  function handleSubmit(e) {
    e.preventDefault();

    if (username) {
      dispatch(RepoActions.addUsernameRequest(username));
    }
  }

  return (
    <Container>
      <Content onSubmit={handleSubmit}>
        <span>https://github.com/</span>
        <div>
          <Input
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
          />
          <Button disabled={!hasUsername}>
            <MdSearch />
          </Button>
        </div>
      </Content>
    </Container>
  );
}
