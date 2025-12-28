// 年齢を計算する関数
export const calculateAge = (birthDate: string): number => {
  const [yearStr, monthStr, dayStr] = birthDate.split("-");
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);

  if (!year || !month || !day) {
    return 0;
  }

  const birthUTC = new Date(Date.UTC(year, month - 1, day));
  const now = new Date();
  const todayUTC = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );

  let age = todayUTC.getUTCFullYear() - birthUTC.getUTCFullYear();
  const monthDiff = todayUTC.getUTCMonth() - birthUTC.getUTCMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && todayUTC.getUTCDate() < birthUTC.getUTCDate())
  ) {
    age--;
  }
  return age;
};
