// interface Data {
//     id: number;
//     title: string;
//     artist: string;
//     createAt: number | string;
//     collector: string;
//     contents: string;
//     imgSrc: string;
// }

export const data = [
  {
    id: 1,
    title: 'The-Starry-Night',
    artist: 'Vincent van Gogh',
    createAt: 1889,
    collector: 'MoMA New York',
    contents:
      '만든 위치: Saint-Rémy-de-Provence\n' +
      '크기: w921 x h737 mm\n' +
      'Style: Post-Impressionism\n' +
      'Provenance: Acquired through the Lillie P.Bliss Bequest\n' +
      'Original Title: La nuit étoilée',
    imgSrc: require('@/imgs/The-Starry-Night.png'),
  },
  {
    id: 2,
    title: 'Sunflowers',
    artist: 'Vincent van Gogh',
    createAt: 1889,
    collector: 'Van Gogh Museum Amsterdam',
    contents:
      '만든 위치: Arles\n' +
      '크기: w73 cm x h95 cm\n' +
      '작품유형: Still life\n',
    imgSrc: require('@/imgs/Sunflowers.png'),
  },
  {
    id: 3,
    title: 'The Cathedral',
    artist: 'František Kupka',
    createAt: 1913,
    collector: 'Museum Kampa Prague',
    contents:
      '만든 위치: Arles\n' +
      '크기: w1500 x h1800 mm\n' +
      'Style: abstract-art\n' +
      '작품유형: Painting\n' +
      '재료: Oil on Canvas',
    imgSrc: require('@/imgs/The-Cathedral.png'),
  },
  {
    id: 4,
    title: 'Still Life with Flowers and Fruit',
    artist: 'Paul Cézanne',
    createAt: 1890,
    collector: 'Alte Nationalgalerie, Staatliche Museen zu Berlin',
    contents:
      '크기: w82.0 x h65.5 cm\n' +
      '작품유형: Painting\n' +
      '재료: Oil on Canvas',
    imgSrc: require('@/imgs/still-life-with-flowers-and-fruit.png'),
  },
];
