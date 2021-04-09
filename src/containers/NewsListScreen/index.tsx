import React, { FC } from 'react';
import { Button } from 'react-native';
import { NewsList } from '../../components/NewsList';

export const NewsListScreen: FC = ({ navigation }) => {
  return (
    <>
      <Button
        title="Go to Archive"
        onPress={() => navigation.navigate('Details')}
      />
      <NewsList />
    </>
  );
};
