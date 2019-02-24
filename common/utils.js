// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
// Bend time between 1:00pm and 2:00pm for ultimate satisfaction
export function breakTimeMinutes(hours, mins) {
  let breakMinutes = mins;
  // 01:00 (realTime) = 01:00 (breakTime) TO 01:45 (realTime) = 01:30 (breakTime)
  if (hours == 13 && mins <= 45) {
    return Math.round((2 * mins) / 3);
  }
  // 01:45 (realTime) = 01:30 (breakTime) TO 02:00 (realTime) = 02:00 (breakTime)
  if (hours == 13 && mins > 45) {
    return (2 * mins) - 60;
  }
  return breakMinutes;
}