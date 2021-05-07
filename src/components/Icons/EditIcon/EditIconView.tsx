import React, { FC } from 'react';
import { Icon } from '../../Icon';
import { EditIconViewTypes } from './types';

export const EditIconView: FC<EditIconViewTypes> = (props) => {
  const { onPress } = props;
  return (
    <Icon name="account-edit" size={30} onPress={onPress} />
  );
};
