import { StyleSheet } from 'react-native';
import { colors } from '../../constans/color';
import { semanticColors } from '../../constans/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 24,
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: semanticColors.background,
    borderRadius: 20,
    padding: 24,
    shadowColor: colors.black,
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    borderWidth: 1,
    borderColor: semanticColors.border,
    alignSelf: 'stretch',
    maxHeight: 220,
  },
  avatarWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primary[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  cardBody: {
    gap: 12,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.neutral[400],
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  cardValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.neutral[900],
    maxWidth: '70%',
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: colors.neutral[100],
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: colors.neutral[900],
    borderRadius: 30,
    paddingVertical: 16,
    marginTop: 24,
  },
  logoutText: {
    color: colors.neutral[0],
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.3,
  },
});