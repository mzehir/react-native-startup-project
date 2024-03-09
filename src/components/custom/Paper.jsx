import React from 'react';
import styled from '@emotion/native';
import ViewComp from '../core/View';

const Container = styled(ViewComp)`
  border-radius: 6px;
  background-color: rgb(35, 48, 68);
  shadow-color: #32325d;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.024;
  shadow-radius: 5px;
  elevation: 1;
  transition-property: 'box-shadow';
  transition-duration: '300ms';
  transition-timing-function: 'cubic-bezier(0.4, 0, 0.2, 1)';
`;

const PaperComp = props => {
  const {children} = props;

  return <Container>{children}</Container>;
};

export default PaperComp;
