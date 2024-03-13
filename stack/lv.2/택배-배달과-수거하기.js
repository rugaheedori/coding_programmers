function solution(cap, n, deliveries, pickups) {
  let answer = 0;

  while (deliveries.length || pickups.length) {
    let truck = [0, 0];
    let path = [0, 0];

    for (let i = deliveries.length - 1; i >= 0; i--) {
      if (deliveries[i] && !truck[0]) {
        path[0] = i + 1; // 제일 멀리 배달온 거리
      }

      if (deliveries[i] >= cap - truck[0]) {
        deliveries[i] -= cap - truck[0];
        truck[0] = cap;
        break;
      } else {
        truck[0] += deliveries[i];
        deliveries[i] = 0;
      }
    }

    for (let j = pickups.length - 1; j >= 0; j--) {
      if (pickups[j] && !truck[1]) {
        path[1] = j + 1; // 제일 멀리 수거한 거리
      }

      if (pickups[j] >= cap - truck[1]) {
        pickups[j] -= cap - truck[1];
        truck[1] = cap;
        break;
      } else {
        truck[1] += pickups[j];
        pickups[j] = 0;
      }
    }

    answer += Math.max(...path) * 2;

    // 배달 완료 & 수거 완료한 끝 지역 삭제
    while (!deliveries[deliveries.length - 1] && deliveries.length) {
      deliveries.pop();
    }

    while (!pickups[pickups.length - 1] && pickups.length) {
      pickups.pop();
    }
  }

  return answer;
}
