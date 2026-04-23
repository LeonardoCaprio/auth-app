import { Text, TouchableOpacity } from 'react-native';
import { AuthStackProps } from '../../navigation/AuthNavigator';
import { useAuth } from '../../context/Auth';

const Login = ({ navigation: _navigation }: AuthStackProps<'Login'>) => {
  const { login } = useAuth();
  return (
    <>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => login('testuser', 'password')}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;
