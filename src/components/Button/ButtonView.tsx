import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { ButtonType } from './types';

export const ButtonView: FC<ButtonType> = (props) => {
  const { onPress, title } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
