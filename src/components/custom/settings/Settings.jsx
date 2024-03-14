import React, {useState} from 'react';
import styled from '@emotion/native';
import ViewComp from '../../core/View';
import TouchableOpacityComp from '../../core/TouchableOpacity';
import CustomTextComp from '../CustomText';
import BottomModalComp from '../BottomModal';
import LanguageSelector from './LanguageSelector';
import ThemeSelector from './ThemeSelector';
import {
  MaterialCommunityIconsDefaultComp,
  MaterialIconsDefaultComp,
} from '../Icons';

const LanguageSelectorModal = ({visible, setVisible}) => {
  return (
    <BottomModalComp
      title="common.selectALanguage"
      visible={visible}
      setVisible={setVisible}>
      <LanguageSelector />
    </BottomModalComp>
  );
};

const ThemeSelectorModal = ({visible, setVisible}) => {
  return (
    <BottomModalComp
      title="common.selectATheme"
      visible={visible}
      setVisible={setVisible}>
      <ThemeSelector />
    </BottomModalComp>
  );
};

const Container = styled(ViewComp)`
  width: 100%;
  gap: ${props => props.theme.spacing.byHeight(10)};
`;

const RowButton = styled(TouchableOpacityComp)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const SettingsSection = () => {
  const [themeSelectorModalVisible, setThemeSelectorModalVisible] =
    useState(false);

  const [languageSelectorModalVisible, setLanguageSelectorModalVisible] =
    useState(false);

  return (
    <Container>
      <RowButton onPress={() => setThemeSelectorModalVisible(true)}>
        <MaterialCommunityIconsDefaultComp name="theme-light-dark" size={20} />
        <CustomTextComp>common.themeSettings</CustomTextComp>
      </RowButton>

      <RowButton onPress={() => setLanguageSelectorModalVisible(true)}>
        <MaterialIconsDefaultComp name="language" size={20} />
        <CustomTextComp>common.languageSettings</CustomTextComp>
      </RowButton>

      <ThemeSelectorModal
        visible={themeSelectorModalVisible}
        setVisible={setThemeSelectorModalVisible}
      />

      <LanguageSelectorModal
        visible={languageSelectorModalVisible}
        setVisible={setLanguageSelectorModalVisible}
      />
    </Container>
  );
};

export default SettingsSection;
