import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/Header';
import { NewsList } from '../../components/NewsList';
import { Props } from './type';

export const NewsListScreen: FC<Props> = (props) => {
  const { route } = props;

  const { category, period } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header back={true} title={'News List'} />
      <NewsList category={category} period={period} />
    </SafeAreaView>
  );
};
