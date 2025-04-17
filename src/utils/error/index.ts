export const handleError = (
  error: unknown,
): { isSuccess: false; error: string } => {
  if (error instanceof Error) {
    return { isSuccess: false, error: error.message };
  }
  return { isSuccess: false, error: 'Unknown error' };
};
