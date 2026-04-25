import { StyleSheet } from 'react-native';
import { fontSize, horizontal, vertical } from '../../utils/designSystem';
import { colors } from '../../constans/color';

export const styles = StyleSheet.create({
  buttonWrapper: {
    marginBottom: vertical(24),
    borderRadius: horizontal(30),
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
});