import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { Switch, Text, View } from 'react-native';
import { COLOR } from '../../constants';

import { ThemeTypes } from '../../theme/type';
import { styles } from './style';
import { SettingsViewType } from './type';

export const SettingsView: FC<SettingsViewType> = (props) => {
  const { theme, toggleSwitch } = props;
  const { colors }: ThemeTypes = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={{ ...styles.title, color: colors.text }}>
          {'Color theme '}
          <Text style={styles.comment}>{theme ? '( Dark )' : '( Light )'}</Text>
        </Text>
        <Switch
          trackColor={{ false: COLOR.LIGHT_PRIMARY, true: COLOR.DARK_PRIMARY }}
          thumbColor={theme ? COLOR.DARK_BTN : COLOR.LIGHT_TEXT}
          onValueChange={(value) => toggleSwitch(value)}
          value={theme}
        />
      </View>
    </View>
  );
};
