import React from 'react';
import styled from '@emotion/native';
import LanguageUseContext from '../../../hooks/LanguageUseContext';
import ViewComp from '../../core/View';
import TouchableOpacityComp from '../../core/TouchableOpacity';
import CustomTextComp from '../CustomText';
import {getLanguagesConstantAsArray} from '../../../utils/constant/languageConstant';

const Container = styled(ViewComp)`
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const LanguageItemButton = styled(TouchableOpacityComp)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const languagesData = getLanguagesConstantAsArray();

const LanguageSelector = () => {
  const {language, setLanguage, translate} = LanguageUseContext();

  return (
    <Container>
      {languagesData.map((item, index) => (
        <LanguageItemButton
          key={index.toString()}
          onPress={() => setLanguage(item.key)}>
          <CustomTextComp>{translate(item.label)}</CustomTextComp>
        </LanguageItemButton>
      ))}
    </Container>
  );
};

export default LanguageSelector;
