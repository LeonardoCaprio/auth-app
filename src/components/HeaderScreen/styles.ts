import { StyleSheet } from 'react-native';
import { fontSize, horizontal } from '../../utils/designSystem';
import { semanticColors } from '../../constans/color';

export const styles = StyleSheet.create({
  header: {
    marginBottom: horizontal(32),
  },
  appName: {
    fontSize: fontSize(10),
    fontWeight: '600',
    color: semanticColors.primary,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: horizontal(12),
  },
  title: {
    fontSize: fontSize(42),
    fontWeight: '700',
    color: semanticColors.textPrimary,
    lineHeight: horizontal(50),
    marginBottom: horizontal(8),
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: fontSize(14),
    color: semanticColors.textSecondary,
    lineHeight: horizontal(22),
  },
});