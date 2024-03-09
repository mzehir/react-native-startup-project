import React from 'react';
import styled from '@emotion/native';
import ModalComp from '../core/Modal';
import ViewComp from '../core/View';
import TouchableOpacityComp from '../core/TouchableOpacity';
import TextComp from '../core/Text';
import CloseSvg from '../../assets/icons/close.svg';

const Container = styled(ViewComp)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Wrapper = styled(ViewComp)`
  width: 100%;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: white;
`;

const TitleWrapper = styled(ViewComp)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContentWrapper = styled(ViewComp)`
  width: 100%;
  align-items: flex-start;
`;

const Line = styled(ViewComp)`
  width: 46px;
  border: 2px solid rgba(110, 127, 152, 1);
  opacity: 0.2;
  border-radius: 3px;
`;

const CloseButton = styled(TouchableOpacityComp)`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const SpacerOne = styled(ViewComp)`
  margin-bottom: ${props => props.theme.spacing.byHeight(10)};
`;

const SpacerTwo = styled(ViewComp)`
  margin-bottom: ${props => props.theme.spacing.byHeight(15)};
`;

const BottomModalComp = props => {
  const {visible, setVisible, title, children, ...other} = props;
  return (
    <ModalComp
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
      {...other}>
      <Container>
        <Wrapper>
          <Line />

          <SpacerOne />

          <TitleWrapper>
            <TextComp>{title ? title : ''}</TextComp>

            <CloseButton onPress={() => setVisible(false)}>
              <CloseSvg />
            </CloseButton>
          </TitleWrapper>

          <SpacerTwo />

          <ContentWrapper>{children}</ContentWrapper>
        </Wrapper>
      </Container>
    </ModalComp>
  );
};

export default BottomModalComp;
