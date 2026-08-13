export function localize(field, locale) {
  if (field == null) return field;
  if (typeof field === "string") return field;
  return field[locale] ?? field.en ?? Object.values(field)[0];
}
