import React from 'react';
import styled from '@emotion/native';
import ScrollViewComp from '../core/ScrollView';

const StyledScrollViewDefault = styled(ScrollViewComp)``;

export const ScrollViewDefault = props => {
  const {children, ...other} = props;
  return (
    <StyledScrollViewDefault {...other}>{children}</StyledScrollViewDefault>
  );
};
