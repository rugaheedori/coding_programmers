function solution(arr) {
  return arr.reduce((a, b) => {
    const recursive = (min, max) => {
      return min % max === 0 ? max : recursive(max, min % max);
    };

    return (a * b) / recursive(a, b);
  });
}
