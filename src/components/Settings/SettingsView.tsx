import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { ThemeTypes } from '../../theme/type';

import { styles } from './style';

export const SettingsView: FC = () => {
  const { colors }: ThemeTypes = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, color: colors.text}}>{'Color theme'}</Text>
    </View>
  );
};
