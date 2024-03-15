import React from 'react';
import ViewComp from '../../../components/core/View';
import CustomTouchableOpacityComp from '../../../components/custom/CustomTouchableOpacity';
import {MaterialIconsDefaultComp} from '../../../components/custom/Icons';

import {SIZES} from '../../../utils/constant/app/sizeConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {BUTTON_VARIANTS} from '../../../utils/constant/app/buttonVariantConstant';
import {BUTTON_RADIUS} from '../../../utils/constant/app/buttonRadiusConstant';

const ReadyComponentsSection = () => {
  return (
    <ViewComp
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15,
      }}>
      <CustomTouchableOpacityComp
        color={COLORS.ERROR.value}
        variant={BUTTON_VARIANTS.CONTAINED.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 1
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.INFO.value}
        variant={BUTTON_VARIANTS.CONTAINED.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 2
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.PRIMARY.value}
        variant={BUTTON_VARIANTS.CONTAINED.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 3
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.SECONDARY.value}
        variant={BUTTON_VARIANTS.CONTAINED.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 4
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.SUCCESS.value}
        variant={BUTTON_VARIANTS.CONTAINED.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 5
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.WARNING.value}
        variant={BUTTON_VARIANTS.CONTAINED.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 6
      </CustomTouchableOpacityComp>

      {/* --------------------------------------------- */}

      <CustomTouchableOpacityComp
        color={COLORS.ERROR.value}
        variant={BUTTON_VARIANTS.CONTAINED.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 1
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.INFO.value}
        variant={BUTTON_VARIANTS.CONTAINED.value}
        radius={BUTTON_RADIUS.NORMAL.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 2
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.PRIMARY.value}
        variant={BUTTON_VARIANTS.CONTAINED.value}
        radius={BUTTON_RADIUS.MORE.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 3
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.SECONDARY.value}
        variant={BUTTON_VARIANTS.CONTAINED.value}
        radius={BUTTON_RADIUS.MUCH.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 4
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.SUCCESS.value}
        variant={BUTTON_VARIANTS.CONTAINED.value}
        radius={BUTTON_RADIUS.PLENTY.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 5
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.WARNING.value}
        variant={BUTTON_VARIANTS.CONTAINED.value}
        radius={BUTTON_RADIUS.MANY.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 6
      </CustomTouchableOpacityComp>

      {/* --------------------------------------------- */}

      <CustomTouchableOpacityComp
        color={COLORS.ERROR.value}
        variant={BUTTON_VARIANTS.OUTLINED.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}>
        Button 1
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.INFO.value}
        variant={BUTTON_VARIANTS.OUTLINED.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}>
        Button 2
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.PRIMARY.value}
        variant={BUTTON_VARIANTS.OUTLINED.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}>
        Button 3
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.SECONDARY.value}
        variant={BUTTON_VARIANTS.OUTLINED.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}>
        Button 4
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.SUCCESS.value}
        variant={BUTTON_VARIANTS.OUTLINED.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}>
        Button 5
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.WARNING.value}
        variant={BUTTON_VARIANTS.OUTLINED.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}>
        Button 6
      </CustomTouchableOpacityComp>

      {/* --------------------------------------------- */}

      <CustomTouchableOpacityComp
        color={COLORS.ERROR.value}
        variant={BUTTON_VARIANTS.TEXT.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 1
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.INFO.value}
        variant={BUTTON_VARIANTS.TEXT.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 2
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.PRIMARY.value}
        variant={BUTTON_VARIANTS.TEXT.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 3
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.SECONDARY.value}
        variant={BUTTON_VARIANTS.TEXT.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 4
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.SUCCESS.value}
        variant={BUTTON_VARIANTS.TEXT.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 5
      </CustomTouchableOpacityComp>

      <CustomTouchableOpacityComp
        color={COLORS.WARNING.value}
        variant={BUTTON_VARIANTS.TEXT.value}
        radius={BUTTON_RADIUS.FEW.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}>
        Button 6
      </CustomTouchableOpacityComp>
    </ViewComp>
  );
};

export default ReadyComponentsSection;
