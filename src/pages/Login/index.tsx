import { Text, TouchableOpacity } from 'react-native';
import { AuthStackProps } from '../../navigation/AuthNavigator';

const Login = ({ navigation }: AuthStackProps<'Login'>) => {
  return (
    <>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </>
  );
};

export default Login;
