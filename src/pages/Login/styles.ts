import { StyleSheet } from 'react-native';
import { horizontal, vertical, fontSize } from '../../utils/designSystem';
import { colors, semanticColors } from '../../constans/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: horizontal(28),
    paddingTop: vertical(24),
    justifyContent: 'space-between',
  },
  form: {
    flex: 1,
  },
  forgot: {
    alignItems: 'flex-end',
    marginBottom: vertical(24),
    marginTop: vertical(-4),
  },
  forgotText: {
    fontSize: fontSize(13),
    color: semanticColors.primary,
    fontWeight: '600',
  },
  buttonWrapper: {
    marginBottom: vertical(24),
    borderRadius: horizontal(30),
    shadowColor: colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  button: {
    backgroundColor: colors.neutral[900],
    borderRadius: horizontal(30),
    paddingVertical: vertical(16),
    alignItems: 'center',
  },
  buttonText: {
    color: colors.neutral[0],
    fontWeight: '600',
    fontSize: fontSize(16),
    letterSpacing: 0.3,
  },
  footerTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: fontSize(14),
    color: semanticColors.textSecondary,
  },
  signUp: {
    fontSize: fontSize(14),
    color: semanticColors.primary,
    fontWeight: '700',
  },
});
