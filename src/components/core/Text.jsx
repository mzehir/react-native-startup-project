import React from 'react';
import {Text} from 'react-native';

const TextComp = props => {
  const {children, ...other} = props;
  return <Text {...other}>{children}</Text>;
};

export default TextComp;
