import { useNavigation } from '@react-navigation/core';
import React, { FC } from 'react';
import { BackIconView } from './BackIconView';

export const BackIcon: FC = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return <BackIconView onPress={() => goBack()} />;
};
