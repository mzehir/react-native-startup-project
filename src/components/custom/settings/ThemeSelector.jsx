import React from 'react';
import styled from '@emotion/native';
import ThemeUseContext from '../../../hooks/ThemeUseContext';
import ViewComp from '../../core/View';
import TextComp from '../../core/Text';
import TouchableOpacityComp from '../../core/TouchableOpacity';
import RadioComp from '../Radio';
import {getThemesConstantAsArray} from '../../../utils/constant/themeConstant';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Container = styled(ViewComp)`
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const ThemeItemButton = styled(TouchableOpacityComp)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const themesData = getThemesConstantAsArray();

const ThemeSelector = () => {
  const {theme, setTheme} = ThemeUseContext();

  return (
    <Container>
      {themesData.map((item, index) => (
        <ThemeItemButton
          key={index.toString()}
          onPress={() => setTheme(item.key)}>
          <RadioComp active={theme === item.key} />
          <MaterialIcons name={item.svgName} size={20} />
          <TextComp>{item.label}</TextComp>
        </ThemeItemButton>
      ))}
    </Container>
  );
};

export default ThemeSelector;
