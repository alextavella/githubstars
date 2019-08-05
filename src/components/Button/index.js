import React from 'react';

import { Container } from './styles';

export default function Button({ children, icon, ...rest }) {
  return (
    <Container {...rest}>
      {icon && <div>{icon}</div>}
      {children && <span>{children}</span>}
    </Container>
  );
}
