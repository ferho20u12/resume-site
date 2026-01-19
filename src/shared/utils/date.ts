export function formatPeriod(
  start: Date,
  end?: Date,
  options?: Intl.DateTimeFormatOptions,
  locale = "en-US"
) {
  const format = (d: Date) => d.toLocaleDateString(locale, options ?? { month: "2-digit", year: "numeric" });
  return end ? `${format(start)} – ${format(end)}` : format(start);
}
