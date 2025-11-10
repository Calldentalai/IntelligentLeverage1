/**
 * Calendar booking configuration
 * Centralized configuration for YouCanBook.me calendar integration
 */

/**
 * Calendar booking URL for strategy calls and consultations
 */
export const CALENDAR_BOOKING_URL = "https://jake-your-board-of-advisors.youcanbook.me";

/**
 * Link props for calendar booking CTAs
 * Opens in new tab with security attributes
 */
export const calendarLinkProps = {
  href: CALENDAR_BOOKING_URL,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

/**
 * Helper function to get calendar link with optional UTM parameters
 */
export function getCalendarLink(utmSource?: string): string {
  if (!utmSource) return CALENDAR_BOOKING_URL;

  const url = new URL(CALENDAR_BOOKING_URL);
  url.searchParams.set("utm_source", utmSource);
  return url.toString();
}
