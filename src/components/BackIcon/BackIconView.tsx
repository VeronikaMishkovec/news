import React, { FC } from 'react';
import { Icon } from '../Icon';
import { BackIconViewTypes } from './types';

export const BackIconView: FC<BackIconViewTypes> = (props) => {
  const { onPress } = props;
  return <Icon name="arrow-left" size={30} onPress={onPress} />;
};
