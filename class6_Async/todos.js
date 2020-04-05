const todos = [
  {
    name: '자바스크립트 공부하기',
    tags: ['programming', 'javascript'],
    status: 'todo',
    id: 1,
  },
  {
    name: '리덕스 공부하기',
    tags: ['programming', 'redux'],
    status: 'doing',
    id: 2,
  },
  {
    name: '그림 그리기',
    tags: ['picture', 'favorite'],
    status: 'done',
    id: 3,
  },
  {
    name: '유튜브 업로드',
    tags: ['youtube', 'favorite'],
    status: 'todo',
    id: 3,
  },
];

const show = obj => {
  switch (obj) {
    case 'all':
      let todo = todos.filter(el => el.status === 'todo').length;
      let doing = todos.filter(el => el.status === 'doing').length;
      let done = todos.filter(el => el.status === 'done').length;
      console.log(`현재상태: todo: ${todo}개, doing: ${doing}개, done: ${done}개`);
      break;
    case 'todo':
      let todolist = todos.filter(el => el.status === 'todo');
      console.log(`총 ${todolist.length}건: ${todolist.map(el => el.name)}`);
      break;
    default:
      console.log(`'all' 혹은 'todo'를 입력하세요`);
  }
};

show('all');
show('todo');
