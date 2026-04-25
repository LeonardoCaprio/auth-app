import { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { AuthStackProps } from '../../navigation/AuthNavigator';
import { useAuth } from '../../context/Auth';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  IconEye,
  IconEyeOff,
  IconLock,
  IconMail,
} from '@tabler/icons-react-native';

import { styles } from './styles';
import FormInput from '../../components/FormInput';
import HeaderScreen from '../../components/HeaderScreen';
import { colors } from '../../constans/color';
import Button from '../../components/Button';
import FooterAuth from '../../components/FooterAuth';
import KeyboardDismissView from '../../components/KeyboardDismissView';

const Login = ({ navigation }: AuthStackProps<'Login'>) => {
  const { login } = useAuth();
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secure, setSecure] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false); // tambahkan ini

  const getEmailError = (value: string): string | undefined => {
    if (!value) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Invalid email format';
    return undefined;
  };

  const getPasswordError = (value: string): string | undefined => {
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters';
    return undefined;
  };

  const handleLogin = async () => {
    setSubmitted(true);

    const emailError = getEmailError(email);
    const passwordError = getPasswordError(password);

    if (emailError || passwordError) return;

    try {
      await login(email, password);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong.';
      Alert.alert('Error', message);
    }
  };

  return (
    <>
      <LinearGradient
        colors={[colors.primary[50], colors.neutral[50], colors.neutral[50]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.container, { paddingTop: insets.top }]}
      >
        <KeyboardDismissView>
        <View style={[styles.content, { paddingBottom: insets.bottom + 24 }]}>
          <HeaderScreen
            appName={'Auth App'}
            title={'Welcome\nBack ✨'}
            subtitle={'Enter your credentials to access your account'}
          />

          <View style={styles.form}>
            <FormInput
              label="Email Address"
              value={email}
              onChangeText={setEmail}
              placeholder="Input your email"
              keyboardType="email-address"
              autoCapitalize="none"
              leftIcon={<IconMail strokeWidth={1} />}
              error={getEmailError(email)}
              touched={submitted}
            />

            <FormInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={secure}
              placeholder="Input your password"
              leftIcon={<IconLock strokeWidth={1} />}
              rightIcon={
                secure ? (
                  <IconEye strokeWidth={1.5} />
                ) : (
                  <IconEyeOff strokeWidth={1.5} />
                )
              }
              onPressRightIcon={() => setSecure(!secure)}
              error={getPasswordError(password)}
              touched={submitted}
            />

            <TouchableOpacity style={styles.forgot}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Button label="Login" onPress={handleLogin} />
            <FooterAuth
              message="Don't have an account? "
              linkLabel="Sign Up"
              onPress={() => navigation.replace('SignUp')}
            />
          </View>
        </View>
        </KeyboardDismissView>
      </LinearGradient>
    </>
  );
};

export default Login;
