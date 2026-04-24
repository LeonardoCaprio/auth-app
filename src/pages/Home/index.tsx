import { Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/Auth';

const Home = () => {
  const { logout, userInfo } = useAuth();
  return (
    <>
      <Text>Home</Text>
      <Text>Welcome, {userInfo?.username}</Text>
      <TouchableOpacity onPress={() => logout()}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </>
  );
};

export default Home;
