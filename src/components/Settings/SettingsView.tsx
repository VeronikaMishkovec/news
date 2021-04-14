import { useTheme } from '@react-navigation/native';
import React, { FC, useEffect, useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { ThemeTypes } from '../../theme/type';

import { styles } from './style';

export const SettingsView: FC = () => {
  const { colors }: ThemeTypes = useTheme();

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  useEffect(() => {
    isEnabled ? console.log('dark') : console.log('light');
  }, [isEnabled]);

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={{ ...styles.title, color: colors.text }}>
          {'Color theme '}
          <Text style={styles.comment}>
            {isEnabled ? '( Dark )' : '( Light )'}
          </Text>
        </Text>
        <Switch
          // trackColor={{ false: "#767577", true: "#81b0ff" }}
          // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          // ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};
