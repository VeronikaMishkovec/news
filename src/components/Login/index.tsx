import { useNavigation } from '@react-navigation/native';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SCREEN } from '../../constants';

import { userAction } from '../../store/actions/UserAction';
import { LoginView } from './LoginView';

export const Login: FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const toMainScreen = () => {
    navigation.navigate(SCREEN.HOME);
  };

  return (
    <LoginView
      onChangeText={(e: string) => setName(e)}
      onPress={() => {
        dispatch(userAction(name));
        toMainScreen();
      }}
    />
  );
};
