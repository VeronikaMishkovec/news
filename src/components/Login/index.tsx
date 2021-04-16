import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userAction } from '../../store/actions/UserAction';
import { RootState } from '../NewsList/types';
import { LoginView } from './LoginView';

export const Login: FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <LoginView
      onChangeText={(e: string) => setName(e)}
      onPress={() => dispatch(userAction(name))}
    />
  );
};
