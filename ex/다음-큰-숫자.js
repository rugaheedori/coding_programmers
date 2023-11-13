function solution(n) {
  const cntOne = n
    .toString(2)
    .split('')
    .filter((x) => x === '1').length;

  while (1) {
    n += 1;

    if (
      n
        .toString(2)
        .split('')
        .filter((x) => x === '1').length === cntOne
    )
      break;
  }
  return n;
}

// solution함수를 재귀함수로 이용하는 방법 (인자를 추가적 선언 가능)
// function solution(n, a = n + 1) {
//   return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
//     ? a
//     : solution(n, a + 1);
// } => a는 정의되지 않았기 때문에 undefined => 초기 설정인 n + 1이 됨
// 함수 사용 시 매개변수의 인자값이 undefined라면, 함수 정의 시의 매개변수 초기값으로 설정된다.
// const func = (a, b = 2) => {
//   console.log(a * b);
// };

// func(3, undefined); // 6
// func(3, 10); //30
