import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BORDERRADIUS, SPACING} from '../theme/theme';
import CustomIcon from './CustomIcon';

interface BGIconProps {
  name: string;
  color: string;
  size: number;
  BGcolor: string;
}
const BGIcon: React.FC<BGIconProps> = ({name, color, size, BGcolor}) => {
  return (
    <View style={[styles.IconBG, {backgroundColor: BGcolor}]}>
      <CustomIcon name={name} color={color} size={size} />
    </View>
  );
};

export default BGIcon;

const styles = StyleSheet.create({
  IconBG: {
    width: SPACING.space_30,
    height: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
