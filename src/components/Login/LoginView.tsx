import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

import { ThemeTypes } from '../../theme/type';
import { RootState } from '../NewsList/types';
import { styles } from './style';
import { LoginViewType } from './type';

export const LoginView: FC<LoginViewType> = (props) => {
  const { onChangeText, onPress } = props;

  const { colors }: ThemeTypes = useTheme();
  const theme = useSelector((state: RootState) => state.theme.payload);

  const themeColors = {
    backgroundColor: colors.text,
    borderColor: colors.background,
    color: colors.btnBackground,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={theme ? 'light-content' : 'dark-content'} />
      <Text style={{ ...styles.header, color: colors.primary }}>
        {'Log in'}
      </Text>
      <View style={styles.inputsWrapper}>
        <Text style={{ ...styles.inputHeader, color: colors.primary }}>
          {'Username'}
        </Text>
        <TextInput
          onChangeText={onChangeText}
          style={{
            ...styles.input,
            ...themeColors,
          }}
        />
        {/* <Text style={{ ...styles.inputHeader, color: colors.primary }}>
          {'Password'}
        </Text>
        <TextInput
          style={{
            ...styles.input,
            ...themeColors,
          }}
        /> */}
      </View>
      <TouchableOpacity
      onPress={onPress}
        style={{ ...styles.button, backgroundColor: colors.primary }}
      >
        <Text style={{ ...styles.buttonText }}>{'Submit'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
