import { Text, View } from 'react-native';
import { useAuth } from '../../context/Auth';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IconLogout, IconUser } from '@tabler/icons-react-native';
import { styles } from './styles';
import HeaderScreen from '../../components/HeaderScreen';
import { colors } from '../../constans/color';
import Button from '../../components/Button';

const Home = () => {
  const { userInfo, logout } = useAuth();
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[colors.primary[50], colors.neutral[50], colors.neutral[100]]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.container, { paddingTop: insets.top }]}
    >
      <View style={[styles.content, { paddingBottom: insets.bottom + 24 }]}>
        <HeaderScreen
          appName={'Auth App'}
          title={'Hello 👋'}
          subtitle={'Welcome back to your account'}
        />

        <View style={styles.card}>
          <View style={styles.avatarWrapper}>
            <IconUser size={36} color={colors.neutral[700]} strokeWidth={1.5} />
          </View>

          <View style={styles.cardBody}>
            <View style={styles.cardRow}>
              <Text style={styles.cardLabel}>Username</Text>
              <Text style={styles.cardValue}>{userInfo?.username ?? '-'}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.cardRow}>
              <Text style={styles.cardLabel}>Email</Text>
              <Text style={styles.cardValue}>{userInfo?.email ?? '-'}</Text>
            </View>
          </View>
        </View>

        <Button
          label="Logout"
          onPress={logout}
          icon={
            <IconLogout size={18} color={colors.neutral[0]} strokeWidth={2} />
          }
          buttonContainerStyle={styles.logoutButton}
          textStyle={styles.logoutText}
        />
      </View>
    </LinearGradient>
  );
};

export default Home;
