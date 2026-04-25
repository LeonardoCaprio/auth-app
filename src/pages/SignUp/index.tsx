import { useState } from 'react';
import { Alert, View } from 'react-native';
import { AuthStackProps } from '../../navigation/AuthNavigator';
import { useAuth } from '../../context/Auth';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  IconEye,
  IconEyeOff,
  IconLock,
  IconMail,
  IconUser,
} from '@tabler/icons-react-native';

import { styles } from './styles';
import FormInput from '../../components/FormInput';
import HeaderScreen from '../../components/HeaderScreen';
import { colors } from '../../constans/color';
import Button from '../../components/Button';
import FooterAuth from '../../components/FooterAuth';
import KeyboardDismissView from '../../components/KeyboardDismissView';

const SignUp = ({ navigation }: AuthStackProps<'SignUp'>) => {
  const { signUp } = useAuth();
  const insets = useSafeAreaInsets();

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secure, setSecure] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const getUsernameError = (value: string): string | undefined => {
    if (!value) return 'Username is required';
    return undefined;
  };

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

  const handleSignUp = async () => {
    setSubmitted(true);

    const usernameError = getUsernameError(username);
    const emailError = getEmailError(email);
    const passwordError = getPasswordError(password);

    if (usernameError || emailError || passwordError) return;

    try {
      await signUp(username, email, password);
      Alert.alert('Success', 'Account created successfully. Please log in.', [
        {
          text: 'OK',
          onPress: () => navigation.replace('Login'),
        },
      ]);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Something went wrong.';
      Alert.alert('Error', message);
    }
  };

  return (
    <>
      <LinearGradient
        colors={[colors.primary[50], colors.neutral[50], colors.neutral[100]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.container, { paddingTop: insets.top }]}
      >
        <KeyboardDismissView>
        <View style={[styles.content, { paddingBottom: insets.bottom + 24 }]}>
          <HeaderScreen
            appName={'Auth App'}
            title={'Create\nAccount ✨'}
            subtitle={'Fill in the details below to get started'}
          />

          <View style={styles.form}>
            <FormInput
              label="Username"
              value={username}
              onChangeText={setUsername}
              placeholder="Input your username"
              autoCapitalize="none"
              leftIcon={<IconUser strokeWidth={1} />}
              error={getUsernameError(username)}
              touched={submitted}
            />

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
              placeholder="Create your password"
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
          </View>

          <View>
            <Button label="Sign Up" onPress={handleSignUp} />
            <FooterAuth
              message="Already have an account? "
              linkLabel="Login"
              onPress={() => navigation.replace('Login')}
            />
          </View>
        </View>
        </KeyboardDismissView>
      </LinearGradient>
    </>
  );
};

export default SignUp;
