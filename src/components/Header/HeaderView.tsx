import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { ThemeTypes } from '../../theme/type';
import { SettingsIcon } from '../SettingsIcon';
import { styles } from './styles';

import { HeaderViewTypes } from './types';

export const HeaderView: FC<HeaderViewTypes> = (props) => {
  const { title } = props;
  const { colors }: ThemeTypes = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, color: colors.text }}>{title}</Text>
      <SettingsIcon />
    </View>
  );
};
