function solution(name) {
  const nonAname = name.replace(/A/g, "");

  // 모든 문자가 'A'로 구성되어 있는 경우
  if (nonAname == "") {
    return 0;
  }

  // 제일 오른쪽의 'A'가 아닌 문자 위치 찾기
  const lastCharIdx = name.lastIndexOf(nonAname[nonAname.length - 1]);
  // 오른쪽으로 쭉 가서 한 경우
  let minMovement = lastCharIdx;

  let answer = 0;
  name.split("").forEach((char, idx) => {
    // A - Z 의 기준은 'N'이 됨
    if (char <= "N") {
      answer += char.charCodeAt() - "A".charCodeAt();
    } else {
      answer += "Z".charCodeAt() - char.charCodeAt() + 1;
    }

    let nextCursor = idx + 1;
    while (nextCursor < name.length && name[nextCursor] === "A") nextCursor++;

    // 왼쪽, 오른쪽 여러방면으로 진행하는 경우
    const minSideMovment = Math.min(
      idx * 2 + name.length - nextCursor,
      idx + 2 * (name.length - nextCursor)
    );
    minMovement = Math.min(minSideMovment, minMovement);
  });

  answer += minMovement;

  return answer;
}
