import { StyleSheet } from 'react-native';
import { fontSize } from '../../utils/designSystem';
import { semanticColors } from '../../constans/color';

export const styles = StyleSheet.create({
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