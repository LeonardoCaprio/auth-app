import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const Navigator = () => {
  const isAuthenticated = false;
  return <>{isAuthenticated ? <AppNavigator /> : <AuthNavigator />}</>;

};

export default Navigator;
