import { format as formatFn } from "date-fns-tz";

export const formatDate = (
  date: Date | string | undefined,
  format: string = "MMMM d, yyyy",
): string => {
  return date ? formatFn(new Date(date), format) : "";
};
