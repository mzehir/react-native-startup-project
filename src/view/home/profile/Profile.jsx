import React, {useState} from 'react';
import styled from '@emotion/native';
import ViewComp from '../../../components/core/View';
import TouchableOpacityComp from '../../../components/core/TouchableOpacity';
import BottomModalComp from '../../../components/custom/BottomModal';
import SettingsSection from '../../../components/custom/settings/Settings';
import {MaterialCommunityIconsDefaultComp} from '../../../components/custom/Icons';
import CustomTextComp from '../../../components/custom/CustomText';

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
      <CustomTextComp>Profile View</CustomTextComp>

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
