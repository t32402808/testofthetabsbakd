export function leadingZero(num, size) {
  let int = num + "";
  while (int.length < size) int = "0" + int;
  return int;
}