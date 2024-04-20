function solution(elements) {
  const numberSet = new Set();

  function addNumbers(n) {
    for (let i = 0; i < elements.length; i++) {
      let num = 0;

      for (let j = i; j < i + n; j++) {
        num += elements[j % elements.length];
      }

      numberSet.add(num);
    }
  }

  for (let i = 1; i <= elements.length; i++) {
    addNumbers(i);
  }

  return numberSet.size;
}
