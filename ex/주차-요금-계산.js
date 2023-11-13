function solution(fees, records) {
  const answer = {};

  records.forEach((record) => {
    const [time, car, type] = record.split(' ');
    const [hour, minutes] = time.split(':');
    if (!answer[car]) answer[car] = 0;
    if (type === 'IN') {
      answer[car] += 1439 - (hour * 60 + minutes * 1);
    } else {
      answer[car] -= 1439 - (hour * 60 + minutes * 1);
    }
  });

  const result = Object.keys(answer)
    .sort((a, b) => a - b)
    .map((car) => {
      return answer[car] - fees[0] > 0
        ? fees[1] + Math.ceil((answer[car] - fees[0]) / fees[2]) * fees[3]
        : fees[1];
    });

  return result;
}
