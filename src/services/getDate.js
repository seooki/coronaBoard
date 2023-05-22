export function getDate() {
  const newDate = new Date();
  const year = String(newDate.getFullYear());
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const day = String(newDate.getDate() - 1).padStart(2, "0");

  const date = year + "-" + month + "-" + day;

  return date;
}
