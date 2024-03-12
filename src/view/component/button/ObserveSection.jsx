import React from 'react';
import PaperComp from '../../../components/custom/Paper';
import ThemeTouchableOpacityComp from '../../../components/custom/ThemeTouchableOpacity';
import {MaterialIconsDefaultComp} from '../../../components/custom/Icons';

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
      <ThemeTouchableOpacityComp
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
      </ThemeTouchableOpacityComp>
    </PaperComp>
  );
};

export default ObserveSection;
