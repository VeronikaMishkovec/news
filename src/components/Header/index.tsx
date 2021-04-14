import React, { FC } from 'react';
import { HeaderView } from './HeaderView';
import { HeaderTypes } from './types';

export const Header: FC<HeaderTypes> = (props) => {
  const { back, title } = props;
  
  return <HeaderView back={back} title={title}/>;
};
