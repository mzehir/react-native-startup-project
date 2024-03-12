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
  const [selectedIconPosition, setSelectedIconPosition] = useState("left");
  const [iconVisible, setIconVisible] = useState(true)
  return (
    <Container>
      <ObserveSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        selectedVariant={selectedVariant}
        selectedRadius={selectedRadius}
        selectedIconPosition={selectedIconPosition}
        iconVisible={iconVisible}
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
        selectedIconPosition={selectedIconPosition}
        setSelectedIconPosition={setSelectedIconPosition}
        iconVisible={iconVisible}
        setIconVisible={setIconVisible}
      />
    </Container>
  );
};

export default ButtonPlayground;
