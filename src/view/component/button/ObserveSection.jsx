import React from 'react';
import PaperComp from '../../../components/custom/Paper';
import ThemeTouchableOpacityComp from '../../../components/custom/ThemeTouchableOpacity';

const ObserveSection = ({
  sectionPaperPadding,
  selectedSize,
  selectedColor,
  selectedVariant,
  selectedRadius,
}) => {
  return (
    <PaperComp {...sectionPaperPadding}>
      <ThemeTouchableOpacityComp
        size={selectedSize}
        color={selectedColor}
        variant={selectedVariant}
        radius={selectedRadius}>
        Custom Button
      </ThemeTouchableOpacityComp>
    </PaperComp>
  );
};

export default ObserveSection;
