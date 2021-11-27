function solution(s) {
  const answer = [];

  s.split(' ').map((texts) => {
    if (texts.length > 1) {
      answer.push(texts[0].toUpperCase() + texts.substr(1).toLowerCase());
    } else {
      answer.push(texts.toUpperCase());
    }
  });
  return answer.join(' ');
}

const s = '3people unFollowed me';
console.log(solution(s));
