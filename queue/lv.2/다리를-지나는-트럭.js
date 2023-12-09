function solution(bridge_length, weight, truck_weights) {
  const bridge = Array.from({ length: bridge_length }).fill(0);
  let answer = 0;
  let current_weight = 0;

  while (truck_weights.length > 0) {
    answer += 1;
    current_weight -= bridge.shift();

    if (truck_weights[0] + current_weight > weight) {
      bridge.push(0);
    } else {
      current_weight += truck_weights[0];
      bridge.push(truck_weights.shift());
    }
  }

  // 마지막 트럭이 빠져나가는 시간은 bridge_length와 동일
  return answer + bridge_length;
}
