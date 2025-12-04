import { format, parseISO, formatDistanceToNow, differenceInDays } from 'date-fns';

/**
 * Format date for display
 * Returns relative time if within 7 days, otherwise full date
 */
export function formatDate(dateString: string): string {
  const date = parseISO(dateString);
  const now = new Date();
  const daysDiff = differenceInDays(now, date);

  if (daysDiff < 7) {
    return formatDistanceToNow(date, { addSuffix: true });
  }

  return format(date, 'MMMM d, yyyy');
}

/**
 * Format date for datetime attribute (ISO)
 */
export function formatDateISO(dateString: string): string {
  return dateString;
}

/**
 * Get full formatted date (always full format)
 */
export function formatDateFull(dateString: string): string {
  const date = parseISO(dateString);
  return format(date, 'MMMM d, yyyy');
}
