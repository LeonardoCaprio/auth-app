import { StyleSheet } from 'react-native';
import { fontSize, horizontal, vertical } from '../../utils/designSystem';
import { colors, semanticColors } from '../../constans/color';

export const styles = StyleSheet.create({
  container: {
    marginBottom: vertical(16),
  },
  label: {
    fontSize: fontSize(14),
    fontWeight: '500',
    color: semanticColors.textSecondary,
    marginBottom: vertical(8),
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: semanticColors.background,
    borderRadius: horizontal(12),
    paddingHorizontal: horizontal(8),
    paddingVertical: vertical(8),

    borderWidth: 1,
    borderColor: semanticColors.border,

    shadowColor: colors.black,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  inputWrapperFocused: {
    borderColor: semanticColors.textSecondary,
    shadowOpacity: 0.1,
    shadowColor: semanticColors.textSecondary,
  },
  inputWrapperError: {
    borderColor: semanticColors.danger,
  },
  inputIcon: {
    marginRight: horizontal(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: fontSize(12),
    color: semanticColors.textPrimary,
  },
  rightIcon: {
    marginLeft: horizontal(10),
  },
  errorText: {
    marginTop: vertical(4),
    fontSize: fontSize(10),
    color: semanticColors.danger,
  },
});