
// products

let products = [

  {
    id: 1,
    number: 1001,
    img1: 'img-products/popper-1a.png',
    img2: 'img-products/popper-1b.png',
    img3: 'img-products/popper-1c.png',
    title: 'Popper 50F-5',
    type: 'Поппер',
    diving: 'Поверхностный',
    length: 50,
    weight: 5,
    color: '#01c',
    availability: 'В наличии',
    price: 600,
  },
  {
    id: 2,
    number: 1002,
    img1: 'img-products/popper-2a.png',
    img2: 'img-products/popper-2b.png',
    img3: 'img-products/popper-2c.png',
    title: 'Popper 60F-10',
    type: 'Поппер',
    diving: 'Поверхностный',
    length: 60,
    weight: 10,
    color: '#02c',
    availability: 'В наличии',
    price: 650,
  },
  {
    id: 3,
    number: 1003,
    img1: 'img-products/popper-3a.png',
    img2: 'img-products/popper-3b.png',
    img3: 'img-products/popper-3c.png',
    title: 'Popper 70F-15',
    type: 'Поппер',
    diving: 'Поверхностный',
    length: 70,
    weight: 15,
    color: '#03c',
    availability: 'Нет в наличии',
    price: 700,
  },
  {
    id: 4,
    number: 1004,
    img1: 'img-products/popper-4a.png',
    img2: 'img-products/popper-4b.png',
    img3: 'img-products/popper-4c.png',
    title: 'Popper 80F-20',
    type: 'Поппер',
    diving: 'Поверхностный',
    length: 80,
    weight: 20,
    color: '#04c',
    availability: 'В наличии',
    price: 750,
  },
  {
    id: 5,
    number: 2001,
    img1: 'img-products/walker-1a.png',
    img2: 'img-products/walker-1b.png',
    img3: 'img-products/walker-1c.png',
    title: 'Walker 70F-5',
    type: 'Волкер',
    diving: 'Поверхностный',
    length: 70,
    weight: 5,
    color: '#01w',
    availability: 'Нет в наличии',
    price: 700,
  },
  {
    id: 6,
    number: 2002,
    img1: 'img-products/walker-2a.png',
    img2: 'img-products/walker-2b.png',
    img3: 'img-products/walker-2c.png',
    title: 'Walker 80F-10',
    type: 'Волкер',
    diving: 'Поверхностный',
    length: 80,
    weight: 10,
    color: '#02w',
    availability: 'В наличии',
    price: 750,
  },
  {
    id: 7,
    number: 2003,
    img1: 'img-products/walker-3a.png',
    img2: 'img-products/walker-3b.png',
    img3: 'img-products/walker-3c.png',
    title: 'Walker 90F-15',
    type: 'Волкер',
    diving: 'Поверхностный',
    length: 90,
    weight: 15,
    color: '#03w',
    availability: 'В наличии',
    price: 850,
  },
  {
    id: 8,
    number: 2004,
    img1: 'img-products/walker-4a.png',
    img2: 'img-products/walker-4b.png',
    img3: 'img-products/walker-4c.png',
    title: 'Walker 100F-20',
    type: 'Волкер',
    diving: 'Поверхностный',
    length: 100,
    weight: 20,
    color: '#04w',
    availability: 'В наличии',
    price: 1000,
  },
  {
    id: 9,
    number: 3001,
    img1: 'img-products/jerkbait-1a.png',
    img2: 'img-products/jerkbait-1b.png',
    img3: 'img-products/jerkbait-1c.png',
    title: 'Jerkbait 80M-25',
    type: 'Джеркбейт',
    diving: 'Мелководный',
    length: 80,
    weight: 25,
    color: '#01j',
    availability: 'Нет в наличии',
    price: 800,
  },
  {
    id: 10,
    number: 3002,
    img1: 'img-products/jerkbait-2a.png',
    img2: 'img-products/jerkbait-2b.png',
    img3: 'img-products/jerkbait-2c.png',
    title: 'Jerkbait 100M-35',
    type: 'Джеркбейт',
    diving: 'Мелководный',
    length: 100,
    weight: 35,
    color: '#02j',
    availability: 'Нет в наличии',
    price: 1000,
  },
  {
    id: 11,
    number: 3003,
    img1: 'img-products/jerkbait-3a.png',
    img2: 'img-products/jerkbait-3b.png',
    img3: 'img-products/jerkbait-3c.png',
    title: 'Jerkbait 130S-50',
    type: 'Джеркбейт',
    diving: 'Глубоководный',
    length: 130,
    weight: 50,
    color: '#03j',
    availability: 'В наличии',
    price: 1250,
  },
  {
    id: 12,
    number: 3004,
    img1: 'img-products/jerkbait-4a.png',
    img2: 'img-products/jerkbait-4b.png',
    img3: 'img-products/jerkbait-4c.png',
    title: 'Jerkbait 150S-60',
    type: 'Джеркбейт',
    diving: 'Глубоководный',
    length: 150,
    weight: 60,
    color: '#04j',
    availability: 'В наличии',
    price: 1500,
  },
  {
    id: 13,
    number: 4001,
    img1: 'img-products/rattlin-1a.png',
    img2: 'img-products/rattlin-1b.png',
    img3: 'img-products/rattlin-1c.png',
    title: 'Rattlin 60M-10',
    type: 'Раттлин',
    diving: 'Мелководный',
    length: 60,
    weight: 10,
    color: '#01r',
    availability: 'В наличии',
    price: 600,
  },
  {
    id: 14,
    number: 4002,
    img1: 'img-products/rattlin-2a.png',
    img2: 'img-products/rattlin-2b.png',
    img3: 'img-products/rattlin-2c.png',
    title: 'Rattlin 70M-15',
    type: 'Раттлин',
    diving: 'Мелководный',
    length: 70,
    weight: 15,
    color: '#02r',
    availability: 'Нет в наличии',
    price: 650,
  },
  {
    id: 15,
    number: 4003,
    img1: 'img-products/rattlin-3a.png',
    img2: 'img-products/rattlin-3b.png',
    img3: 'img-products/rattlin-3c.png',
    title: 'Rattlin 80S-20',
    type: 'Раттлин',
    diving: 'Глубоководный',
    length: 80,
    weight: 20,
    color: '#03r',
    availability: 'Нет в наличии',
    price: 700,
  },
  {
    id: 16,
    number: 4004,
    img1: 'img-products/rattlin-4a.png',
    img2: 'img-products/rattlin-4b.png',
    img3: 'img-products/rattlin-4c.png',
    title: 'Rattlin 90S-25',
    type: 'Раттлин',
    diving: 'Глубоководный',
    length: 90,
    weight: 25,
    color: '#04r',
    availability: 'Нет в наличии',
    price: 750,
  },
  {
    id: 17,
    number: 5001,
    img1: 'img-products/shad-1a.png',
    img2: 'img-products/shad-1b.png',
    img3: 'img-products/shad-1c.png',
    title: 'Shad 70M-10',
    type: 'Шэд',
    diving: 'Мелководный',
    length: 70,
    weight: 10,
    color: '#01s',
    availability: 'В наличии',
    price: 800,
  },
  {
    id: 18,
    number: 5002,
    img1: 'img-products/shad-2a.png',
    img2: 'img-products/shad-2b.png',
    img3: 'img-products/shad-2c.png',
    title: 'Shad 80S-15',
    type: 'Шэд',
    diving: 'Глубоководный',
    length: 80,
    weight: 15,
    color: '#02s',
    availability: 'В наличии',
    price: 850,
  },
  {
    id: 19,
    number: 5003,
    img1: 'img-products/shad-3a.png',
    img2: 'img-products/shad-3b.png',
    img3: 'img-products/shad-3c.png',
    title: 'Shad 90S-20',
    type: 'Шэд',
    diving: 'Глубоководный',
    length: 90,
    weight: 20,
    color: '#03s',
    availability: 'Нет в наличии',
    price: 1000,
  },
  {
    id: 20,
    number: 5004,
    img1: 'img-products/shad-4a.png',
    img2: 'img-products/shad-4b.png',
    img3: 'img-products/shad-4c.png',
    title: 'Shad 100S-25',
    type: 'Шэд',
    diving: 'Глубоководный',
    length: 100,
    weight: 25,
    color: '#04s',
    availability: 'В наличии',
    price: 1100,
  },
  {
    id: 21,
    number: 6001,
    img1: 'img-products/crank-1a.png',
    img2: 'img-products/crank-1b.png',
    img3: 'img-products/crank-1c.png',
    title: 'Crank 50M-10',
    type: 'Крэнк',
    diving: 'Мелководный',
    length: 50,
    weight: 10,
    color: '#01c',
    availability: 'В наличии',
    price: 700,
  },
  {
    id: 22,
    number: 6002,
    img1: 'img-products/crank-2a.png',
    img2: 'img-products/crank-2b.png',
    img3: 'img-products/crank-2c.png',
    title: 'Crank 60M-15',
    type: 'Крэнк',
    diving: 'Мелководный',
    length: 60,
    weight: 15,
    color: '#02c',
    availability: 'Нет в наличии',
    price: 750,
  },
  {
    id: 23,
    number: 6003,
    img1: 'img-products/crank-3a.png',
    img2: 'img-products/crank-3b.png',
    img3: 'img-products/crank-3c.png',
    title: 'Crank 70S-20',
    type: 'Крэнк',
    diving: 'Глубоководный',
    length: 70,
    weight: 20,
    color: '#03c',
    availability: 'В наличии',
    price: 800,
  },
  {
    id: 24,
    number: 6004,
    img1: 'img-products/crank-4a.png',
    img2: 'img-products/crank-4b.png',
    img3: 'img-products/crank-4c.png',
    title: 'Crank 80S-20',
    type: 'Крэнк',
    diving: 'Глубоководный',
    length: 80,
    weight: 20,
    color: '#04c',
    availability: 'Нет в наличии',
    price: 850,
  },
  {
    id: 25,
    number: 7001,
    img1: 'img-products/minnow-1a.png',
    img2: 'img-products/minnow-1b.png',
    img3: 'img-products/minnow-1c.png',
    title: 'Minnow 65M-5',
    type: 'Минноу',
    diving: 'Мелководный',
    length: 65,
    weight: 5,
    color: '#01m',
    availability: 'Нет в наличии',
    price: 700,
  },
  {
    id: 26,
    number: 7002,
    img1: 'img-products/minnow-2a.png',
    img2: 'img-products/minnow-2b.png',
    img3: 'img-products/minnow-2c.png',
    title: 'Minnow 85M-10',
    type: 'Минноу',
    diving: 'Мелководный',
    length: 85,
    weight: 10,
    color: '#02m',
    availability: 'В наличии',
    price: 750,
  },
  {
    id: 27,
    number: 7003,
    img1: 'img-products/minnow-3a.png',
    img2: 'img-products/minnow-3b.png',
    img3: 'img-products/minnow-3c.png',
    title: 'Minnow 100S-20',
    type: 'Минноу',
    diving: 'Глубоководный',
    length: 100,
    weight: 20,
    color: '#03m',
    availability: 'В наличии',
    price: 750,
  },
  {
    id: 28,
    number: 7004,
    img1: 'img-products/minnow-4a.png',
    img2: 'img-products/minnow-4b.png',
    img3: 'img-products/minnow-4c.png',
    title: 'Minnow 120S-25',
    type: 'Минноу',
    diving: 'Глубоководный',
    length: 120,
    weight: 25,
    color: '#04m',
    availability: 'Нет в наличии',
    price: 850,
  },
  {
    id: 29,
    number: 8001,
    img1: 'img-products/swimbait-1a.png',
    img2: 'img-products/swimbait-1b.png',
    img3: 'img-products/swimbait-1c.png',
    title: 'Swimbait 80M-10',
    type: 'Свимбейт',
    diving: 'Мелководный',
    length: 80,
    weight: 10,
    color: '#01sw',
    availability: 'Нет в наличии',
    price: 900,
  },
  {
    id: 30,
    number: 8002,
    img1: 'img-products/swimbait-2a.png',
    img2: 'img-products/swimbait-2b.png',
    img3: 'img-products/swimbait-2c.png',
    title: 'Swimbait 90M-15',
    type: 'Свимбейт',
    diving: 'Мелководный',
    length: 90,
    weight: 15,
    color: '#02sw',
    availability: 'Нет в наличии',
    price: 950,
  },
  {
    id: 31,
    number: 8003,
    img1: 'img-products/swimbait-3a.png',
    img2: 'img-products/swimbait-3b.png',
    img3: 'img-products/swimbait-3c.png',
    title: 'Swimbait 100S-25',
    type: 'Свимбейт',
    diving: 'Глубоководный',
    length: 100,
    weight: 25,
    color: '#03sw',
    availability: 'Нет в наличии',
    price: 1200,
  },
  {
    id: 32,
    number: 8004,
    img1: 'img-products/swimbait-4a.png',
    img2: 'img-products/swimbait-4b.png',
    img3: 'img-products/swimbait-4c.png',
    title: 'Swimbait 120S-30',
    type: 'Свимбейт',
    diving: 'Глубоководный',
    length: 120,
    weight: 30,
    color: '#04sw',
    availability: 'В наличии',
    price: 1300,
  },
  {
    id: 33,
    number: 9001,
    img1: 'img-products/glisser-1a.png',
    img2: 'img-products/glisser-1b.png',
    img3: 'img-products/glisser-1c.png',
    title: 'Glisser 40F-5',
    type: 'Глиссер',
    diving: 'Поверхностный',
    length: 40,
    weight: 5,
    color: '#01g',
    availability: 'В наличии',
    price: 400,
  },
  {
    id: 34,
    number: 9002,
    img1: 'img-products/glisser-2a.png',
    img2: 'img-products/glisser-2b.png',
    img3: 'img-products/glisser-2c.png',
    title: 'Glisser 50F-8',
    type: 'Глиссер',
    diving: 'Поверхностный',
    length: 50,
    weight: 8,
    color: '#02g',
    availability: 'Нет в наличии',
    price: 450,
  },
  {
    id: 35,
    number: 9003,
    img1: 'img-products/glisser-3a.png',
    img2: 'img-products/glisser-3b.png',
    img3: 'img-products/glisser-3c.png',
    title: 'Glisser 60F-12',
    type: 'Глиссер',
    diving: 'Поверхностный',
    length: 60,
    weight: 12,
    color: '#03g',
    availability: 'В наличии',
    price: 500,
  },
  {
    id: 36,
    number: 9004,
    img1: 'img-products/glisser-4a.png',
    img2: 'img-products/glisser-4b.png',
    img3: 'img-products/glisser-4c.png',
    title: 'Glisser 70F-15',
    type: 'Глиссер',
    diving: 'Поверхностный',
    length: 70,
    weight: 15,
    color: '#04g',
    availability: 'В наличии',
    price: 550,
  },

]

export default products; // export products
