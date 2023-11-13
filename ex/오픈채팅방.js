function solution(record) {
  const answer = [];
  const ids = {};
  const messages = { Enter: '님이 들어왔습니다.', Leave: '님이 나갔습니다.' };

  for (let el of record) {
    if (el.split(' ')[0] !== 'Leave') {
      ids[el.split(' ')[1]] = el.split(' ')[2];
    }
  }

  record.map((people) => {
    const peopelInfo = people.split(' ');
    if (Object.keys(messages).includes(peopelInfo[0])) {
      answer.push(`${ids[peopelInfo[1]]}${messages[peopelInfo[0]]}`);
    }
  });

  return answer;
}
