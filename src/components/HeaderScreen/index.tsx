import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

interface IHeaderScreen {
  appName?: string;
  title?: string;
  subtitle?: string;
}

const HeaderScreen = ({ appName, title, subtitle }: IHeaderScreen) => {
  return (
    <View style={styles.header}>
      {appName ? <Text style={styles.appName}>{appName}</Text> : null}
      {title ? <Text style={styles.title}>{title}</Text> : null}
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
};
export default HeaderScreen;
