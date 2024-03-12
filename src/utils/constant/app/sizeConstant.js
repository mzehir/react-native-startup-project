export const SIZES = {
  small: {value: 'small', label: 'small'},
  medium: {value: 'medium', label: 'medium'},
  large: {value: 'large', label: 'large'},
};

export const getSizesConstantAsArray = () => {
  return Object.values(SIZES);
};
