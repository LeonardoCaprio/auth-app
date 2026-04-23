import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';

type AppStackParamList = {
  Home: undefined;
};

const AppStack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
