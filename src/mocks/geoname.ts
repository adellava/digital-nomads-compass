const geoname = {
  _links: {
    'city:admin1_division': {
      href: 'https://api.teleport.org/api/countries/iso_alpha2:IT/admin1_divisions/geonames:07/',
      name: 'Latium',
    },
    'city:alternate-names': {
      href: 'https://api.teleport.org/api/cities/geonameid:3169070/alternate_names/',
    },
    'city:country': {
      href: 'https://api.teleport.org/api/countries/iso_alpha2:IT/',
      name: 'Italy',
    },
    'city:timezone': {
      href: 'https://api.teleport.org/api/timezones/iana:Europe%2FRome/',
      name: 'Europe/Rome',
    },
    'city:urban_area': {
      href: 'https://api.teleport.org/api/urban_areas/slug:rome/',
      name: 'Rome',
    },
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
    self: { href: 'https://api.teleport.org/api/cities/geonameid:3169070/' },
  },
  full_name: 'Rome, Latium, Italy',
  geoname_id: 3169070,
  location: {
    geohash: 'sr2ykdnqpjgb60ernwz3',
    latlon: { latitude: 41.89193, longitude: 12.51133 },
  },
  name: 'Rome',
  population: 2318895,
}

export default geoname
