import { DefaultTheme } from '@react-navigation/native';
import { COLOR } from '../constants';
import { ThemeTypes } from './type';

export const DarkTheme: ThemeTypes = {
  ...DefaultTheme,
  dark: false,
  colors: {
    background: COLOR.DARK_BACKGROUND,
    btnBackground: COLOR.DARK_BTN,
    primary: COLOR.DARK_PRIMARY,
    text: COLOR.DARK_TEXT,
  },
};

export const LightTheme: ThemeTypes = {
  ...DefaultTheme,
  dark: false,
  colors: {
    background: COLOR.LIGHT_BACKGROUND,
    btnBackground: COLOR.LIGHT_BTN,
    primary: COLOR.LIGHT_PRIMARY,
    text: COLOR.LIGHT_TEXT,
  },
};
