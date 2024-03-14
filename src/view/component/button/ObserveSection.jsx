import React from 'react';
import PaperComp from '../../../components/custom/Paper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import CustomTouchableOpacityComp from '../../../components/custom/CustomTouchableOpacity';
import {MaterialIconsDefaultComp} from '../../../components/custom/Icons';
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';

const ObserveSection = ({
  sectionPaperPadding,
  selectedSize,
  selectedColor,
  selectedVariant,
  selectedRadius,
  selectedIconPosition,
  iconVisible,
}) => {
  return (
    <PaperComp {...sectionPaperPadding}>
      <ViewComp style={{display: 'flex', flexDirection: 'column', gap: 15}}>
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          color={COLORS.INFO.value}>
          components.observeComponent
        </CustomTextComp>

        <CustomTouchableOpacityComp
          size={selectedSize}
          color={selectedColor}
          variant={selectedVariant}
          radius={selectedRadius}
          {...(iconVisible
            ? {
                iconFields: {
                  component: MaterialIconsDefaultComp,
                  name: 'arrow-forward',
                  position: selectedIconPosition,
                },
              }
            : {})}>
          Custom Button
        </CustomTouchableOpacityComp>
      </ViewComp>
    </PaperComp>
  );
};

export default ObserveSection;
