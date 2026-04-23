import { Text, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/Auth';

const Home = () => {
  const { logout } = useAuth();
  return (
    <>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => logout()}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </>
  );
};

export default Home;
