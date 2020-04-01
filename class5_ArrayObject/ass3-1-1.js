// 주어진 객체에서 숫자타입으로만 구성된 요소 뽑아 배열 만들기
// 답:
// ["width", "height", "hOffset", "vOffset", "size", "hOffset", "vOffset"]

const obj = {
  debug: 'on',
  연습1: 10,
  window: {
    title: 'Sample Konfabulator Widget',
    name: 'main_window',
    width: 500,
    height: 500,
    재귀배열1: {
      연습2: 20,
      연습3: '오류',
      재귀배열2: {
        연습4: 30,
        연습5: '오류'
      }
    }
  },
  image: {
    src: 'Images/Sun.png',
    name: 'sun1',
    hOffset: 250,
    vOffset: 250,
    alignment: 'center'
  },
  text: {
    data: 'Click Here',
    size: 36,
    style: 'bold',
    name: 'text1',
    hOffset: 250,
    vOffset: 100,
    alignment: 'center',
    onMouseUp: 'sun1.opacity = (sun1.opacity / 100) * 90;'
  }
};

let numberTypeArr = [];

for (v in obj) {
  if (typeof obj[v] === 'object') {
    for (key in obj[v]) {
      if (typeof obj[v][key] === 'number') {
        numberTypeArr.push(key);
      }
    }
  }
}

console.log(numberTypeArr);
