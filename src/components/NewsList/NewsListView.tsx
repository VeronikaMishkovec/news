import React, { FC } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  View,
} from 'react-native';
import { COLOR } from '../constants';
import { NewsCard } from '../NewsCard';
import { styles } from './styles';
import { NewsListTypes, NewsListViewTypes } from './types';

export const NewsListView: FC<NewsListViewTypes> = (props) => {
  const { data, loading } = props;

  const renderItems: ListRenderItem<NewsListTypes> = ({ item }) => {
    const media_data = item.media[0];

    const newsImage = media_data && media_data['media-metadata'][2].url;

    return (
      <NewsCard
        author={item.byline}
        date={item.published_date}
        section={item.section}
        src={newsImage}
        subtitle={item.abstract}
        title={item.title}
        url={item.url}
      />
    );
  };

  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={COLOR.LOADING} />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItems}
          showsVerticalScrollIndicator={false}
        />
      )}
    </>
  );
};
