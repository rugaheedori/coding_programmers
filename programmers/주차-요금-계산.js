function solution(fees, records) {
  const answer = {};
  const times = {};

  records.forEach((record) => {
    const data = record.split(' ');
    if (data[2] === 'IN') {
      answer[data[1]] = data[0];
      if (!Object.keys(times).includes(data[1])) times[data[1]] = 0;
    } else {
      times[data[1]] += getMinutes(answer[data[1]], data[0]);
      delete answer[data[1]];
    }
  });

  for (let car in answer) {
    times[car] += getMinutes(answer[car], '23:59');
  }

  const result = Object.keys(times)
    .sort((a, b) => a - b)
    .map((time) => {
      return calculationFee(times[time], fees);
    });

  return result;
}

function getMinutes(inTime, outTime) {
  const inTimes = inTime.split(':');
  const outTimes = outTime.split(':');

  return (outTimes[0] - inTimes[0]) * 60 + (outTimes[1] - inTimes[1]) * 1;
}

function calculationFee(time, fees) {
  return time - fees[0] > 0
    ? fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3]
    : fees[1];
}
