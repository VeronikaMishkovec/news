import React, { FC } from 'react';
import { IconView } from './IconView';
import { IconTypes } from './types';

export const Icon: FC<IconTypes> = (props) => {
  const { name, onPress, size } = props;
  return <IconView name={name} size={size} onPress={onPress}/>;
};
