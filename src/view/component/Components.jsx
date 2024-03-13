import React from 'react';
import styled from '@emotion/native';
import ViewComp from '../../components/core/View';
import PaperComp from '../../components/custom/Paper';
import CustomTouchableOpacityComp from '../../components/custom/CustomTouchableOpacity';
import {MaterialIconsDefaultComp} from '../../components/custom/Icons';
import CustomTextComp from '../../components/custom/CustomText';
import {COMPONENT_NAVIGATORS} from '../../utils/constant/navigatorComponentConstant';
import {BUTTON_VARIANTS} from '../../utils/constant/app/buttonVariantConstant';
import {COLORS} from '../../utils/constant/app/colorConstant';
import {SIZES} from '../../utils/constant/app/sizeConstant';
import {TEXT_VARIANTS} from '../../utils/constant/app/textVariantConstant';

const Container = styled(ViewComp)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
`;

const ItemContainer = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-vertical: 15px;
  padding-horizontal: 15px;
  height: 200px;
  width: 170px;
`;

const ItemContent = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ItemButtonContainer = styled(ViewComp)`
  flex-direction: row;
  justify-content: flex-end;
`;

const ComponentsView = ({navigation}) => {
  const items = [
    {
      title: 'Button',
      content: 'Uygulamanın sunduğu butonları görmek için tıkla',
      name: COMPONENT_NAVIGATORS.BUTTON.name,
    },
  ];
  return (
    <Container>
      {items.map((item, index) => (
        <PaperComp key={index.toString()}>
          <Item
            navigation={navigation}
            title={item.title}
            content={item.content}
            name={item.name}
          />
        </PaperComp>
      ))}
    </Container>
  );
};

export default ComponentsView;

const Item = ({navigation, title, content, name}) => {
  return (
    <ItemContainer>
      <ItemContent>
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {title}
        </CustomTextComp>

        <CustomTextComp
          variant={TEXT_VARIANTS.LABEL.value}
          size={SIZES.small.value}>
          {content}
        </CustomTextComp>
      </ItemContent>

      <ItemButtonContainer>
        <ViewComp
          style={{
            width: '50%',
          }}>
          <CustomTouchableOpacityComp
            variant={BUTTON_VARIANTS.TEXT.value}
            color={COLORS.INFO.value}
            size={SIZES.small.value}
            iconFields={{
              component: MaterialIconsDefaultComp,
              name: 'arrow-forward',
              position: 'right',
            }}
            onPress={() => navigation.navigate(name)}>
            Go to Detail
          </CustomTouchableOpacityComp>
        </ViewComp>
      </ItemButtonContainer>
    </ItemContainer>
  );
};
