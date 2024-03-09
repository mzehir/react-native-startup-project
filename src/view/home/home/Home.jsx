import React from 'react';
import styled from '@emotion/native';
import ViewComp from '../../../components/core/View';
import ThemeTextComp from '../../../components/custom/ThemeText';

const Container = styled(ViewComp)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const HomeView = () => {
  return (
    <Container>
      <ThemeTextComp>Home View</ThemeTextComp>
    </Container>
  );
};

export default HomeView;
