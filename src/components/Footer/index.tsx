import React from 'react';

import { Container, Line, GithubLogo, Content, DevelopedBy } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Line />
      <Content>
        <GithubLogo />
        <DevelopedBy>Desenvolvido por: Gustavo Nogueira</DevelopedBy>
      </Content>
    </Container>
  );
};

export default Footer;
