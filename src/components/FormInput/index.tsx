import { useState } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';

import { styles } from './styles';

type Props = {
  label: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onPressRightIcon?: () => void;
  touched?: boolean; // tambahkan prop ini
} & TextInputProps;

const FormInput = ({
  label,
  error,
  leftIcon,
  rightIcon,
  onPressRightIcon,
  touched: touchedProp = false, // rename agar tidak konflik
  ...props
}: Props) => {
  const [focused, setFocused] = useState(false);
  const [touchedLocal, setTouchedLocal] = useState(false);

  // touched = true jika salah satu bernilai true
  const isTouched = touchedLocal || touchedProp;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View
        style={[
          styles.inputWrapper,
          focused && styles.inputWrapperFocused,
          isTouched && error && styles.inputWrapperError,
        ]}
      >
        {leftIcon && <View style={styles.inputIcon}>{leftIcon}</View>}

        <TextInput
          {...props}
          style={styles.input}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false);
            setTouchedLocal(true);
          }}
          placeholderTextColor="#9CA3AF"
        />

        {rightIcon && (
          <TouchableOpacity onPress={onPressRightIcon} style={styles.rightIcon}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>

      {isTouched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};
export default FormInput;
