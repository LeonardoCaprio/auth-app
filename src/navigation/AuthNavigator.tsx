import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

export type AuthStackProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: 'transparent',
       },
    }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
