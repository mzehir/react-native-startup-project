import React, {useState} from 'react';
import styled from '@emotion/native';
import ViewComp from '../../core/View';
import TextComp from '../../core/Text';
import TouchableOpacityComp from '../../core/TouchableOpacity';
import BottomModalComp from '../BottomModal';
import LanguageSelector from './LanguageSelector';
import ThemeSelector from './ThemeSelector';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LanguageSelectorModal = ({visible, setVisible}) => {
  return (
    <BottomModalComp
      title="Uygulama dilini güncelle"
      visible={visible}
      setVisible={setVisible}>
      <LanguageSelector />
    </BottomModalComp>
  );
};

const ThemeSelectorModal = ({visible, setVisible}) => {
  return (
    <BottomModalComp
      title="Uygulama temasını güncelle"
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
        <MaterialCommunityIcons name="theme-light-dark" size={20} />
        <TextComp>Tema Ayarları</TextComp>
      </RowButton>

      <RowButton onPress={() => setLanguageSelectorModalVisible(true)}>
        <MaterialIcons name="language" size={20} />
        <TextComp>Dil Ayarları</TextComp>
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
