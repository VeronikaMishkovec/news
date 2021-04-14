import { useTheme } from '@react-navigation/native';
import React, { FC } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { ThemeTypes } from '../../theme/type';
import { Link } from '../Link';

import { styles } from './styles';
import { NewsCardTypes } from './types';

export const NewsCardView: FC<NewsCardTypes> = (props) => {
  const { author, date, section, src, subtitle, title, url } = props;
  const { colors }: ThemeTypes = useTheme();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: src }}
        style={styles.image}
        imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
      >
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={{ ...styles.subtitle, color: colors.text }}>
          {subtitle}
        </Text>
        <View style={styles.info}>
          <Text style={{ ...styles.text, color: colors.primary }}>{date}</Text>
          <Text style={{ ...styles.text, color: colors.primary }}>
            {section}
          </Text>
        </View>
        <Text style={{ ...styles.text, color: colors.primary }}>{author}</Text>
      </View>
      <Link url={url}>{'Read more'}</Link>
    </View>
  );
};
