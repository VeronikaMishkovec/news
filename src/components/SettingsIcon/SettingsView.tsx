import React, { FC } from 'react';
import { Icon } from '../Icon';
import { SettingIconViewTypes } from './type';

export const SettingIconView: FC<SettingIconViewTypes> = (props) => {
  const { onPress } = props;
  return <Icon name="cog" size={30} onPress={onPress}/>;
};
