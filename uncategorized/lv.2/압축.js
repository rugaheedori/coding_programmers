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

function solution(msg) {
  const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce((dict, c, i) => {
    dict[c] = i + 1;
    return dict;
  }, {});
  dict.nextId = 27;
  const ans = [];
  for (let i = 0, j = 0; i < msg.length; i = j) {
    j = msg.length;
    let longest = "";
    while (dict[(longest = msg.substring(i, j))] === undefined) --j;
    ans.push(dict[longest]);
    dict[longest + msg[j]] = dict.nextId++;
  }

  return ans;
}
