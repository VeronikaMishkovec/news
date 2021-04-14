import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ThemeTypes } from '../../theme/type';

import { styles } from './styles';
import { ButtonType } from './types';

export const ButtonView: FC<ButtonType> = (props) => {
  const { onPress, title } = props;
  const { colors }: ThemeTypes = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: colors.btnBackground,
        borderColor: colors.primary,
        shadowColor: colors.primary,
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
