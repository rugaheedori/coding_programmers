function solution(msg) {
  const answer = [];
  const dictionary = new Map();
  let cnt = 26;

  for (let i = 0; i < msg.length; i++) {
    let char = msg[i];

    for (let j = i + 1; j < msg.length; j++) {
      if (!dictionary.has(char + msg[j])) {
        answer.push(dictionary.get(char) || char.charCodeAt(0) - 64);
        dictionary.set(char, dictionary.get(char) || char.charCodeAt(0) - 64);
        cnt += 1;
        dictionary.set(char + msg[j], cnt);
        break;
      } else {
        char += msg[j];
        i++;
      }
    }

    if (i === msg.length - 1) {
      answer.push(dictionary.get(char) || char.charCodeAt(0) - 64);
    }
  }

  return answer;
}
