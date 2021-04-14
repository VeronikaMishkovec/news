import React, { FC } from 'react';
import { HeaderView } from './HeaderView';
import { HeaderTypes } from './types';

export const Header: FC<HeaderTypes> = (props) => {
  const { title } = props;
  
  return <HeaderView title={title} />;
};
