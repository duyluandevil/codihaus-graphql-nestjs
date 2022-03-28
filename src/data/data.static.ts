/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
let users: Array<{ id: number; name: string; articleId: number }> = [
  {
    id: 1,
    name: 'Luan',
    articleId: 1,
  },
  {
    id: 2,
    name: 'Truc',
    articleId: 1,
  },
  {
    id: 3,
    name: 'Quynh',
    articleId: 2,
  },
  {
    id: 4,
    name: 'Khai',
    articleId: 3,
  },
  {
    id: 5,
    name: 'Tu',
    articleId: 2,
  },
];

let article: Array<{ id: number; name: string; categoryId: number }> = [
    {
      id: 1,
      name: 'Tri',
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Khang',
      categoryId: 1,
    },
    {
      id: 3,
      name: 'Bao',
      categoryId: 1,
    }
];



export default { users, article };
