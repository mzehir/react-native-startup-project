import {useContext} from 'react';
import {AccessToGlobalSettingsContext} from '../contexts/AccessToGlobalSettingsContext';

const AccessToGlobalSettingsUseContext = () =>
  useContext(AccessToGlobalSettingsContext);

export default AccessToGlobalSettingsUseContext;
