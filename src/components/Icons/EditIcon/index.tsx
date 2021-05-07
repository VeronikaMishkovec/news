import React, { FC } from 'react';
import { EditIconView } from './EditIconView';
import { EditIconTypes } from './types';

export const EditIcon: FC<EditIconTypes> = (props) => {
  const { onPress } = props;
  return <EditIconView onPress={onPress} />;
};
