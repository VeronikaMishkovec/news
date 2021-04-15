import { ViewStyle } from 'react-native';
import { NavParamsType } from '../../navigation/types';
import { List, RootType } from '../../store/type';

export type NewsListArrayTypes = {
  abstract: List['abstract'];
  byline: List['byline'];
  id: List['id'];
  media: List['media'];
  published_date: List['published_date'];
  section: List['section'];
  title: List['title'];
  url: List['url'];
};

export type NewsListStylesTypes = {
  container: ViewStyle;
  spinnerContainer: ViewStyle;
};

export type NewsListViewTypes = {
  data: NewsListArrayTypes[];
  loading: RootType['loading'];
};

export type NewsListType = {
  category: NavParamsType['category'];
  period: NavParamsType['period'];
};

export type RootState = {
  newsList: {
    list: List[];
    loading: RootType['loading'];
  };
  theme: {
    payload: boolean;
  };
};
