import { useAuth } from '../context/Auth';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const Navigator = () => {
  const { isAuthenticated } = useAuth();
  return <>{isAuthenticated ? <AppNavigator /> : <AuthNavigator />}</>;

};

export default Navigator;
