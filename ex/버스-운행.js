function solution(busList) {
  const busNumber = busSchedules.map((v) => v.number);
  const results = [];
  const date = new Date();
  const nowDate = `${date.getHours()}:${date.getMinutes()}`;

  busList.split(' ').forEach((bus) => {
    if (busNumber.includes(bus)) {
      const time =
        date.getDay() !== 0 && date.getDay() !== 6
          ? busSchedules[busNumber.indexOf(bus)].timetable.weekday
          : busSchedules[busNumber.indexOf(bus)].timetable.weekend;

      if (!time.length) {
        results.push(`${bus}번 버스는 운행하지 않습니다.`);
        return false;
      }

      if (nowDate > time[time.length - 1].arrive) {
        results.push(`${bus}번 버스는 운행이 종료되었습니다.`);
      }

      for (let i = 0; i < time.length; i++) {
        if (nowDate < time[i].arrive) {
          results.push(
            `${bus}번 버스는 ${time[i].name}를 향해 운행하고 있습니다.`
          );
          return false;
        }
      }
    } else {
      results.push(`${bus}번 버스는 존재하지 않습니다.`);
    }
  });
  return results;
}

solution('50 1-1 30');
