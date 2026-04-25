import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface FooterAuthProps {
  message: string;
  linkLabel: string;
  onPress: () => void;
}

const FooterAuth = ({ message, linkLabel, onPress }: FooterAuthProps) => {
  return (
    <View style={styles.footerTextWrapper}>
      <Text style={styles.footerText}>{message}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.signUp}>{linkLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterAuth;