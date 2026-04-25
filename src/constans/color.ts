export const colors = {
  neutral: {
    0: '#FFFFFF',
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    400: '#9CA3AF',
    500: '#6B7280',
    700: '#374151',
    900: '#111827',
  },
  primary: {
    0: '#EEF9F7',
    50: '#DFF5F2',
    400: '#10B981',
    500: '#1D9E75',
    700: '#0F6E56',
  },
  error: {
    500: '#EF4444',
  },
  black: '#000000',
};

export const semanticColors = {
  textPrimary: colors.neutral[900],
  textSecondary: colors.neutral[500],
  border: colors.neutral[200],
  background: colors.neutral[0],
  primary: colors.primary[700],
  danger: colors.error[500],
};