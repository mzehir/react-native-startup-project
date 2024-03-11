import React, {useState} from 'react';
import styled from '@emotion/native';
import ViewComp from '../../../components/core/View';
import ThemeTextComp from '../../../components/custom/ThemeText';
import ReactNativeElementDropdownTS from '../../../components/core/reactNativeElementDropdown/ReactNativeElementDropdown';

const Container = styled(ViewComp)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

const ButtonView = () => {
  const [value, setValue] = useState('7');
  return (
    <Container>
      <ThemeTextComp>Button View</ThemeTextComp>

      <ReactNativeElementDropdownTS
        data={data}
        value={value}
        setValue={item => {
          if (typeof item === 'object') {
            setValue(item.value);
          }
        }}
      />
    </Container>
  );
};

export default ButtonView;
