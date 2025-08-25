type TFormat = "long" | "short" | "narrow";

export function getMonthList(locale = "en-US", format: TFormat = "long") {
  return Array.from({ length: 12 }, (_, i) => {
    const date = new Date(2000, i, 1); 
    return new Intl.DateTimeFormat(locale, { month: format }).format(date).toLocaleLowerCase();
  });
}
