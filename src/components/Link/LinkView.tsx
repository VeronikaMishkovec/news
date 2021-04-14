import React, { FC } from 'react';
import { Button } from '../Button';

import { LinkViewTypes } from './types';

export const LinkView: FC<LinkViewTypes> = (props) => {
  const { handlePress, title } = props;

  return (
    <Button onPress={handlePress} title={title} />
  );
};
