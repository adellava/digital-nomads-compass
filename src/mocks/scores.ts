const scores = {
  _links: {
    curies: [
      {
        href: 'https://developers.teleport.org/api/resources/Location/#!/relations/{rel}/',
        name: 'location',
        templated: true,
      },
      {
        href: 'https://developers.teleport.org/api/resources/City/#!/relations/{rel}/',
        name: 'city',
        templated: true,
      },
      {
        href: 'https://developers.teleport.org/api/resources/UrbanArea/#!/relations/{rel}/',
        name: 'ua',
        templated: true,
      },
      {
        href: 'https://developers.teleport.org/api/resources/Country/#!/relations/{rel}/',
        name: 'country',
        templated: true,
      },
      {
        href: 'https://developers.teleport.org/api/resources/Admin1Division/#!/relations/{rel}/',
        name: 'a1',
        templated: true,
      },
      {
        href: 'https://developers.teleport.org/api/resources/Timezone/#!/relations/{rel}/',
        name: 'tz',
        templated: true,
      },
    ],
    self: {
      href: 'https://api.teleport.org/api/urban_areas/slug:rome/scores/',
    },
  },
  categories: [
    { color: '#f3c32c', name: 'Housing', score_out_of_10: 5.6025 },
    { color: '#f3d630', name: 'Cost of Living', score_out_of_10: 5.323 },
    { color: '#f4eb33', name: 'Startups', score_out_of_10: 4.6745 },
    {
      color: '#d2ed31',
      name: 'Venture Capital',
      score_out_of_10: 1.0130000000000001,
    },
    { color: '#7adc29', name: 'Travel Connectivity', score_out_of_10: 6.4335 },
    { color: '#36cc24', name: 'Commute', score_out_of_10: 4.533250000000001 },
    {
      color: '#19ad51',
      name: 'Business Freedom',
      score_out_of_10: 6.189666666666666,
    },
    { color: '#0d6999', name: 'Safety', score_out_of_10: 6.604500000000001 },
    {
      color: '#051fa5',
      name: 'Healthcare',
      score_out_of_10: 8.178333333333331,
    },
    { color: '#150e78', name: 'Education', score_out_of_10: 4.157000000000001 },
    {
      color: '#3d14a4',
      name: 'Environmental Quality',
      score_out_of_10: 4.2764999999999995,
    },
    { color: '#5c14a1', name: 'Economy', score_out_of_10: 3.3625 },
    { color: '#88149f', name: 'Taxation', score_out_of_10: 2.4365 },
    { color: '#b9117d', name: 'Internet Access', score_out_of_10: 4.491 },
    { color: '#d10d54', name: 'Leisure \u0026 Culture', score_out_of_10: 9.11 },
    { color: '#e70c26', name: 'Tolerance', score_out_of_10: 6.2215 },
    { color: '#f1351b', name: 'Outdoors', score_out_of_10: 6.396000000000001 },
  ],
  summary:
    '\u003cp\u003e\n    Rome, the Eternal City, is a historic marvel with \u003cb\u003egreat travel connections\u003c/b\u003e mild Mediterranean climate and intense urban energy. Its outgoing society is known for its style, fondness for football and the world-famous restaurants and cafes that can be sampled on every corner. Rome also hosts an independent country—Vatican City—within its borders. Its long history and modern achievements make Rome one of the most visited cities in the world.\n\u003c/p\u003e\n\n',
  teleport_city_score: 55.08729729729729,
}

export default scores
