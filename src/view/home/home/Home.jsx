import React from 'react';
import styled from '@emotion/native';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';

const Container = styled(ViewComp)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const HomeView = () => {
  return (
    <Container>
      <CustomTextComp>Home View</CustomTextComp>
    </Container>
  );
};

export default HomeView;
