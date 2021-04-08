import { ViewStyle } from "react-native";

export type NewsListTypes = {
  title: string;
  abstract: string;
  published_date: string;
  section: string;
  byline: string;
  url: string;
  media: [
    {
      'media-metadata': [{ url: string }, { url: string }, { url: string }];
    },
  ];
  id: string;
};

export type NewsListStylesTypes = {
  container: ViewStyle
}

export type NewsListViewTypes = {
  data: NewsListTypes[];
  loading: boolean;
};

export type RootState = {
  newsList: {
    list: [];
    loading: boolean;
  };
};
