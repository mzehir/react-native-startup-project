import React from 'react';
import styled from '@emotion/native';
import ViewComp from '../../../components/core/View';
import ThemeTextComp from '../../../components/custom/ThemeText';

const Container = styled(ViewComp)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ButtonView = () => {
  return (
    <Container>
      <ThemeTextComp>Button View</ThemeTextComp>
    </Container>
  );
};

export default ButtonView;
