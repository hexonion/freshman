export const ecosystem = {
  magazine: {
    issue: 1,
    date: 'Июнь 2026',
    track: {
      title: 'ROTTEN BLOOM: unplugged',
      artist: 'silvain',
      artistUrl: 'https://tagger.gambit-rp.com/silvain',
      cover: 'images/covers/rb.jpg',
      label: 'OLYMPIC SOUND',
      producer: 'Brian Ritter (inferno), Dylan Brady (100gecs)',
    },
    interview: {
      avatar: 'images/artists/-',
      name: '-',
      role: '-',
      qa: [
        { q: '-', a: '-' },
        { q: '-', a: '-' },
        { q: '-', a: '-' },
      ],
      blogNote: '<strong>Блог редакции:</strong> Это блок для публикации интервью. К сожалению, мы пока не успели его у кого-нибудь взять... :(',
    },
    streetVoice: [
      'Легендарная Лилит Сильвейн планирует возвращаться! Был анонсирован альбом ROTTEN BLOOM: unplugged. Ждем целым штатом!',
      'Среди артистов растут негодования в адрес местных крупных площадок и их организаторов, таких, например, как LAST SPRING.',
      'Sanboard, OLYMPIC SOUND и журнал #FRESHMAN объединились под эгидой одного холдинга — FRESHMAN MEDIA GROUP! Новый этап для музыкального медиапространства?',
    ],
  },
  label: {
    name: 'OLYMPIC SOUND',
    description: 'Музыкальный лейбл и дистрибьютор',
    founded: 'Основан в 2025',
    artists: [
      { id: 1, name: 'silvain', photo: 'images/artists/silvain.jpg', genre: 'rock / heavy-shoegaze', description: 'Лучший рок-артист штата. 2025-2026' },
      { id: 2, name: 'lunaa.', photo: 'images/artists/lunaa.jpg', genre: 'alternative pop', description: 'Лучший поп-исполнитель штата. 2025-2026' },
    ],
    releases: [
      { id: 1, title: 'ROTTEN BLOOM: unplugged', artist: 'silvain', cover: 'images/covers/rb.jpg', date: 'Июнь 2026', type: 'Альбом' },
      { id: 2, title: 'INVISION Deluxe', artist: 'lunaa.', cover: 'images/covers/invision.jpg', date: 'Май 2026', type: 'Альбом' },
      { id: 3, title: 'SEX NARCISSIST', artist: 'silvain', cover: 'images/covers/sn.jpg', date: 'Март 2026', type: 'Альбом' },
	  { id: 4, title: 'Time To Kill', artist: 'lunaa. & MoizeNeck', cover: 'images/covers/ttk.jpg', date: 'Апрель 2026', type: 'Сингл' },
    ],
    studio: {
      services: ['Запись вокала', 'Сведение', 'Мастеринг', 'Продакшн под ключ', 'Аренда студии'],
      equipment: 'Neumann U87, Avalon VT-737SP, Yamaha NS-10, Pro Tools HDX',
      slogan: 'Звук, которому верит улица.',
    },
  },
  charts: {
    top10: [
      { position: 1, title: 'BANG! BANG!', artist: 'lunaa.', cover: 'images/covers/invision.jpg', lastWeek: 6, weeks: 2 },
      { position: 2, title: 'Lil Crush', artist: 'silvain', cover: 'images/covers/sn.jpg', lastWeek: 1, weeks: 13 },
      { position: 3, title: 'run it up', artist: 'silentbleak', cover: 'images/covers/wave.jpg', lastWeek: 10, weeks: 1 },
      { position: 4, title: 'The Butcher', artist: 'MoizeNeck feat. TeXing', cover: 'images/covers/al1.jpg', lastWeek: 3, weeks: 1 },
      { position: 5, title: ' Selling Rocks', artist: 'MoizeNeck feat. feat. WNTD.LOC', cover: 'images/covers/sr.jpg', lastWeek: 3, weeks: 3 },
    ],
    hallOfFame: [
      { id: 1, name: 'inferno', photo: 'images/artists/inferno.jpg', nomination: 'Brian Ritter', description: 'Главный артист прошлых лет (2024). Непревзойденный продюсер из Сан-Андреаса, занимает эту роль по сей день.' },
      { id: 2, name: '2SMILEY', photo: 'images/artists/2smiley.jpg', nomination: 'Lorenzo Casaus', description: 'Лучший видеоклип 2024 (EBK), лучший совместный трек 2024 (West Coast Connect), Зал Славы OLYMPIC 2025.' },
    ],
  },
  events: [
    { id: 1, day: '06-20', month: 'Июнь', name: 'ARL USA Grand prix', venue: 'Angel Pine, Winter ST.', tag: 'Гонка', tagType: 'auto' },
  ],
};