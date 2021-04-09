import React, { FC } from 'react';

import { ButtonView } from './ButtonView';
import { ButtonType } from './types';

export const Button: FC<ButtonType> = (props) => {
  const { onPress, title } = props;
  return <ButtonView onPress={onPress} title={title}/>;
};
