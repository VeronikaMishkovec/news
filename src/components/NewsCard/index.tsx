import React, { FC } from 'react';
import moment from 'moment';

import { NewsCardTypes } from './types';
import { NewsCardView } from './NewsCardView';

export const NewsCard: FC<NewsCardTypes> = (props) => {
  const { author, date, section, src, subtitle, title, url } = props;

  const formatDate = moment(date).format('DD.MM.YYYY');

  return (
    <NewsCardView
      author={author}
      date={formatDate}
      section={section}
      src={src}
      subtitle={subtitle}
      title={title}
      url={url}
    />
  );
};
