import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { ThemeTypes } from '../../theme/type';
import { IconViewTypes } from './types';

export const IconView: FC<IconViewTypes> = (props) => {
  const { name, size, onPress } = props;

  const { colors }: ThemeTypes = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons name={name} size={size} color={colors.text} />
    </TouchableOpacity>
  );
};
