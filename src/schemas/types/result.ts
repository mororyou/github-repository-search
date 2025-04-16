export type ActionResult<T> = {
  isSuccess: boolean;
  data?: T;
  error?: string;
};
