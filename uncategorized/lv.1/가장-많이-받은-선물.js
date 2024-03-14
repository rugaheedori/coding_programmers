function solution(friends, gifts) {
  let answer = 0;
  const arr = Array.from(Array(friends.length), () =>
    Array(friends.length).fill(0)
  );

  gifts.forEach((x) => {
    const [sender, receiver] = x.split(" ");
    const senderIdx = friends.indexOf(sender);
    const receiverIdx = friends.indexOf(receiver);

    arr[senderIdx][senderIdx] += 1;
    arr[senderIdx][receiverIdx] += 1;
    arr[receiverIdx][receiverIdx] -= 1;
  });

  arr.forEach((x, idx) => {
    let cnt = 0;

    for (let i = 0; i < arr.length; i++) {
      if (idx === i) continue;

      if (x[i] > arr[i][idx]) {
        cnt += 1;
      } else if (x[i] === arr[i][idx]) {
        if (x[idx] > arr[i][i]) {
          cnt += 1;
        }
      }
    }

    if (cnt > answer) answer = cnt;
  });

  return answer;
}
