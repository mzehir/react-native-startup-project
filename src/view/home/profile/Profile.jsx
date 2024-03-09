import React, {useState} from 'react';
import styled from '@emotion/native';
import ViewComp from '../../../components/core/View';
import TouchableOpacityComp from '../../../components/core/TouchableOpacity';
import BottomModalComp from '../../../components/custom/BottomModal';
import SettingsSection from '../../../components/custom/settings/Settings';
import ThemeTextComp from '../../../components/custom/ThemeText';
import {MaterialCommunityIconsDefaultComp} from '../../../components/custom/Icons';

const Container = styled(ViewComp)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ProfileView = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacityComp
          onPress={() => setModalVisible(!modalVisible)}
          style={{marginRight: 10}}>
          <MaterialCommunityIconsDefaultComp name="menu" size={20} />
        </TouchableOpacityComp>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <ThemeTextComp>Profile View</ThemeTextComp>

      <BottomModalComp
        visible={modalVisible}
        setVisible={setModalVisible}
        title="Ayarlar">
        <SettingsSection />
      </BottomModalComp>
    </Container>
  );
};

export default ProfileView;
