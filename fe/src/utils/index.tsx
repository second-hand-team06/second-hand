const getTimeStamp = (time: Date) => {
  const TIME_UNIT = {
    SECONDS: 60,
    MINUTES: 60,
    HOURS: 24,
    ONE_DAY: 1,
    ONE_WEEK: 7,
  };

  const now = new Date();
  const diffInMilliseconds = now.getTime() - time.getTime();
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / TIME_UNIT.SECONDS);
  const diffInHours = Math.floor(diffInMinutes / TIME_UNIT.MINUTES);
  const diffInDays = Math.floor(diffInHours / TIME_UNIT.HOURS);

  if (diffInDays > 2 * TIME_UNIT.ONE_WEEK) {
    return time.toLocaleDateString();
  }
  if (diffInDays >= TIME_UNIT.ONE_WEEK) {
    return `${Math.floor(diffInDays / TIME_UNIT.ONE_WEEK)}주 전`;
  }
  if (diffInDays >= TIME_UNIT.ONE_DAY) {
    return `${diffInDays}일 전`;
  }
  if (diffInHours < TIME_UNIT.HOURS) {
    return `${diffInHours}시간 전`;
  }
  if (diffInMinutes < TIME_UNIT.MINUTES) {
    return `${diffInMinutes}분 전`;
  }

  return `${diffInSeconds}초 전`;
};

const getTextWithTimeStamp = ({ text, time }: { text: string; time: Date }) => {
  return `${text} · ${getTimeStamp(time)}`;
};

const forMatMoney = (money: number) => {
  return `${money.toLocaleString()}원`;
};

const getRegion = (address: string) => {
  return address.split(' ').at(-1);
};

export { getTextWithTimeStamp, forMatMoney, getRegion };
