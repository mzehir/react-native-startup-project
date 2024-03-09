import React from 'react';
import styled from '@emotion/native';
import ViewComp from '../core/View';

const RadioContainer = styled(ViewComp)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: black;
  justify-content: center;
  align-items: center;
`;

const RadioInner = styled(ViewComp)`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: black;
`;

const RadioComp = ({active}) => {
  return <RadioContainer>{active && <RadioInner />}</RadioContainer>;
};

export default RadioComp;
