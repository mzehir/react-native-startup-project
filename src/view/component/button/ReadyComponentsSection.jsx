import React from 'react';
import styled from '@emotion/native';
import PaperComp from '../../../components/custom/Paper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import CustomTouchableOpacityComp from '../../../components/custom/CustomTouchableOpacity';
import {MaterialIconsDefaultComp} from '../../../components/custom/Icons';
import {SIZES} from '../../../utils/constant/app/sizeConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {BUTTON_VARIANTS} from '../../../utils/constant/app/buttonVariantConstant';
import {BUTTON_RADIUS} from '../../../utils/constant/app/buttonRadiusConstant';
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';

const Container = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContentWrapper = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Row = styled(ViewComp)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`;

const ReadyComponentsSection = ({sectionPaperPadding}) => {
  return (
    <PaperComp {...sectionPaperPadding}>
      <Container style={{display: 'flex', flexDirection: 'column', gap: 15}}>
        <CustomTextComp
          style={{textAlign: 'center'}}
          variant={TEXT_VARIANTS.TITLE.value}
          color={COLORS.INFO.value}>
          components.readyComponents
        </CustomTextComp>

        <ContentWrapper>
          <Row>
            <CustomTouchableOpacityComp
              color={COLORS.ERROR.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: 'right',
              }}>
              Button 1
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.INFO.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: 'right',
              }}>
              Button 2
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.PRIMARY.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: 'right',
              }}>
              Button 3
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.SECONDARY.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: 'right',
              }}>
              Button 4
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.SUCCESS.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: 'right',
              }}>
              Button 5
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.WARNING.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: 'right',
              }}>
              Button 6
            </CustomTouchableOpacityComp>
          </Row>

          <Row>
            <CustomTouchableOpacityComp
              color={COLORS.ERROR.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}>
              Button 1
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.INFO.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.NORMAL.value}
              size={SIZES.small.value}>
              Button 2
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.PRIMARY.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.MORE.value}
              size={SIZES.small.value}>
              Button 3
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.SECONDARY.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.MUCH.value}
              size={SIZES.small.value}>
              Button 4
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.SUCCESS.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.PLENTY.value}
              size={SIZES.small.value}>
              Button 5
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.WARNING.value}
              variant={BUTTON_VARIANTS.CONTAINED.value}
              radius={BUTTON_RADIUS.MANY.value}
              size={SIZES.small.value}>
              Button 6
            </CustomTouchableOpacityComp>
          </Row>

          <Row>
            <CustomTouchableOpacityComp
              color={COLORS.ERROR.value}
              variant={BUTTON_VARIANTS.OUTLINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}>
              Button 1
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.INFO.value}
              variant={BUTTON_VARIANTS.OUTLINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}>
              Button 2
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.PRIMARY.value}
              variant={BUTTON_VARIANTS.OUTLINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}>
              Button 3
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.SECONDARY.value}
              variant={BUTTON_VARIANTS.OUTLINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}>
              Button 4
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.SUCCESS.value}
              variant={BUTTON_VARIANTS.OUTLINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}>
              Button 5
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.WARNING.value}
              variant={BUTTON_VARIANTS.OUTLINED.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}>
              Button 6
            </CustomTouchableOpacityComp>
          </Row>

          <Row>
            <CustomTouchableOpacityComp
              color={COLORS.ERROR.value}
              variant={BUTTON_VARIANTS.TEXT.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: 'right',
              }}>
              Button 1
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.INFO.value}
              variant={BUTTON_VARIANTS.TEXT.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: 'right',
              }}>
              Button 2
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.PRIMARY.value}
              variant={BUTTON_VARIANTS.TEXT.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: 'right',
              }}>
              Button 3
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.SECONDARY.value}
              variant={BUTTON_VARIANTS.TEXT.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: 'right',
              }}>
              Button 4
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.SUCCESS.value}
              variant={BUTTON_VARIANTS.TEXT.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: 'right',
              }}>
              Button 5
            </CustomTouchableOpacityComp>

            <CustomTouchableOpacityComp
              color={COLORS.WARNING.value}
              variant={BUTTON_VARIANTS.TEXT.value}
              radius={BUTTON_RADIUS.FEW.value}
              size={SIZES.small.value}
              iconFields={{
                component: MaterialIconsDefaultComp,
                name: 'arrow-forward',
                position: 'right',
              }}>
              Button 6
            </CustomTouchableOpacityComp>
          </Row>
        </ContentWrapper>
      </Container>
    </PaperComp>
  );
};

export default ReadyComponentsSection;
