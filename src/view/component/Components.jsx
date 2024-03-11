import React from 'react';
import styled from '@emotion/native';
import ViewComp from '../../components/core/View';
import ThemeTextComp from '../../components/custom/ThemeText';
import PaperComp from '../../components/custom/Paper';
import ThemeTouchableOpacityComp from '../../components/custom/ThemeTouchableOpacity';
import {MaterialIconsDefaultComp} from '../../components/custom/Icons';
import {COMPONENT_NAVIGATORS} from '../../utils/constant/navigatorComponentConstant';

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
  padding-vertical: 5px;
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
        <ThemeTextComp variant="title" size="medium">
          {title}
        </ThemeTextComp>

        <ThemeTextComp variant="label" size="small">
          {content}
        </ThemeTextComp>
      </ItemContent>

      <ItemButtonContainer>
        <ViewComp
          style={{
            width: '50%',
          }}>
          <ThemeTouchableOpacityComp
            variant="text"
            color="info"
            size="small"
            iconFields={{
              component: MaterialIconsDefaultComp,
              name: 'arrow-forward',
              position: 'right',
            }}
            onPress={() => navigation.navigate(name)}>
            Go to Detail
          </ThemeTouchableOpacityComp>
        </ViewComp>
      </ItemButtonContainer>
    </ItemContainer>
  );
};
