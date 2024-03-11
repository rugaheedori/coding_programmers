function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let trunk = [0, 0];

  while (!trunk[0] && !trunk[1]) {
    for (let i = n - 1; i >= 0; i--) {
      let delivery = deliveries[i];
      let pickup = pickups[i];

      if ((delivery > 0 || pickup > 0) && !trunk[0] && !trunk[1]) {
        answer += (i + 1) * 2;
      }

      if (delivery) {
        if (trunk[0] + delivery >= cap) {
          deliveries[i] -= cap - trunk[0];
          trunk[0] = cap;
        } else {
          trunk[0] += delivery;
          deliveries[i] = 0;
        }
      }

      if (pickup) {
        if (trunk[1] + pickup >= cap) {
          pickups[i] -= cap - trunk[1];
          trunk = [0, 0];
          break;
        } else {
          pickups[i] = 0;
          trunk[1] += pickup;
        }
      }
    }
  }

  return answer;
}
