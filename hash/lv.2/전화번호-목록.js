function solution(phone_book) {
  const sorted = phone_book.sort();
  const map = new Map();
  let answer = true;

  for (let i = 0; i < phone_book.length; i++) {
    const phoneBook = sorted[i];

    phoneBook.split("").reduce((x, y) => {
      if (map.get(x + y) != null) {
        answer = false;
      } else {
        return x + y;
      }
    }, "");

    map.set(phoneBook, 1);
  }

  return answer;
}
