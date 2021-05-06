import { Dimensions, StyleSheet } from 'react-native';
import {
  BORDER_RADIUS,
  FONT,
  FONT_SIZE,
  INNER_PADDING,
  MARGINS,
  PADDING,
} from '../../constants';
import { LoginViewStylesType } from './type';

export const styles = StyleSheet.create<LoginViewStylesType>({
  button: {
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    width: 200,
    marginTop: MARGINS.LOGIN,
  },
  buttonText: {
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.TITLE,
    padding: PADDING,
  },
  container: {
    flex: 1,
  },
  header: {
    fontFamily: FONT.BLACK,
    fontSize: FONT_SIZE.LOGIN,
  },
  input: {
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    fontSize: FONT_SIZE.TEXT,
    padding: PADDING,
  },
  inputContainer: {
    alignItems: 'center',
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    width: '100%',
  },
  inputHeader: {
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.TITLE,
  },
  inputsWrapper: {
    paddingHorizontal: MARGINS.BTN_HOR,
    width: '100%',
  },
});
