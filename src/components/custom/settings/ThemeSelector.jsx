import React from 'react';
import styled from '@emotion/native';
import ThemeUseContext from '../../../hooks/ThemeUseContext';
import TouchableOpacityComp from '../../core/TouchableOpacity';
import ViewComp from '../../core/View';
import CustomTextComp from '../CustomText';
import {getThemesConstantAsArray} from '../../../utils/constant/themeConstant';
import {MaterialIconsDefaultComp} from '../Icons';

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
          <MaterialIconsDefaultComp name={item.svgName} size={20} />
          <CustomTextComp>{item.label}</CustomTextComp>
        </ThemeItemButton>
      ))}
    </Container>
  );
};

export default ThemeSelector;
