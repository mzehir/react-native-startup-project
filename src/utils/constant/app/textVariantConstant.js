export const TEXT_VARIANTS = {
  DISPLAY: {value: 'display', label: 'Display'},
  HEADLINE: {value: 'headline', label: 'Headline'},
  TITLE: {value: 'title', label: 'Title'},
  LABEL: {value: 'label', label: 'Label'},
  BODY: {value: 'body', label: 'Body'},
  FOR_BUTTON: {value: 'forButton', label: 'ForButton'},
  FOR_SELECT: {value: 'forSelect', label: 'ForSelect'},
};

export const getTextVariantsConstantAsArray = () => {
  return Object.values(TEXT_VARIANTS);
};
