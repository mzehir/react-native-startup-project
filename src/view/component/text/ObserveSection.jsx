import React from 'react';
//* components
import PaperComp from '../../../components/custom/Paper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
//* utils
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';

const ObserveSection = ({
  sectionPaperPadding,
  selectedSize,
  selectedColor,
  selectedVariant,
}) => {
  return (
    <PaperComp {...sectionPaperPadding}>
      <ViewComp style={{display: 'flex', flexDirection: 'column', gap: 15}}>
        <CustomTextComp
          style={{textAlign: 'center'}}
          variant={TEXT_VARIANTS.TITLE.value}
          color={COLORS.INFO.value}>
          components.observeComponent
        </CustomTextComp>

        <CustomTextComp
          variant={selectedVariant}
          size={selectedSize}
          color={selectedColor}>
          Lorem ipsum
        </CustomTextComp>
      </ViewComp>
    </PaperComp>
  );
};

export default ObserveSection;
