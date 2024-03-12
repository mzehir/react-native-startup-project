import React, {useState} from 'react';
import styled from '@emotion/native';
import ViewComp from '../../../components/core/View';
import ObserveSection from './ObserveSection';
import CustomizeSection from './CustomizeSection';

const Container = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const sectionPaperPadding = {
  paddingHorizontal: '15',
  paddingVertical: '15',
};

const ButtonPlayground = () => {
  const [selectedSize, setSelectedSize] = useState('small');
  const [selectedColor, setSelectedColor] = useState('success');
  const [selectedVariant, setSelectedVariant] = useState('contained');
  const [selectedRadius, setSelectedRadius] = useState('few');
  return (
    <Container>
      <ObserveSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        selectedVariant={selectedVariant}
        selectedRadius={selectedRadius}
      />

      <CustomizeSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
        selectedRadius={selectedRadius}
        setSelectedRadius={setSelectedRadius}
      />
    </Container>
  );
};

export default ButtonPlayground;
