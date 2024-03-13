import React from 'react';
import PaperComp from '../../../components/custom/Paper';
import {MaterialIconsDefaultComp} from '../../../components/custom/Icons';
import CustomTouchableOpacityComp from '../../../components/custom/CustomTouchableOpacity';

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
    </PaperComp>
  );
};

export default ObserveSection;
