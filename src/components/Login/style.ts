import { StyleSheet } from 'react-native';
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
    marginTop: MARGINS.LOGIN
  },
  buttonText: {
    fontFamily: FONT.BOLD,
    fontSize: FONT_SIZE.TITLE,
    padding: PADDING,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontFamily: FONT.BLACK,
    fontSize: FONT_SIZE.LOGIN,
  },
  input: {
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    fontFamily: FONT.REGULAR,
    padding: PADDING,
  },
  inputHeader: {
    fontFamily: FONT.MEDIUM,
    fontSize: FONT_SIZE.TITLE,
    marginVertical: MARGINS.HEADER,
  },
  inputsWrapper: {
    paddingHorizontal: MARGINS.BTN_HOR,
    paddingVertical: MARGINS.BTN_VER,
    width: '100%',
  },
});
