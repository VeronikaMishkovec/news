import { useNavigation } from '@react-navigation/core';
import React, { FC } from 'react';
import { SCREEN } from '../../constants';
import { BackIconView } from './BackIconView';

export const BackIcon: FC = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.navigate(SCREEN.HOME);
  };
  return <BackIconView onPress={() => goBack()} />;
};
