import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  icon?: React.ReactNode;
  buttonContainerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const Button = ({
  label,
  icon,
  buttonContainerStyle,
  textStyle,
  activeOpacity = 0.85,
  style,
  ...rest
}: ButtonProps) => {
  return (
    <View style={[styles.buttonWrapper, style as ViewStyle]}>
      <TouchableOpacity
        activeOpacity={activeOpacity}
        style={[styles.button, buttonContainerStyle]}
        {...rest}
      >
        {icon && <View>{icon}</View>}
        <Text style={[styles.buttonText, textStyle]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;