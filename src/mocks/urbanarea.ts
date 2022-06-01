const urbanarea = {
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
    self: { href: 'https://api.teleport.org/api/urban_areas/slug:rome/' },
    'ua:admin1-divisions': [
      {
        href: 'https://api.teleport.org/api/countries/iso_alpha2:IT/admin1_divisions/geonames:07/',
        name: 'Latium',
      },
    ],
    'ua:cities': {
      href: 'https://api.teleport.org/api/urban_areas/slug:rome/cities/',
    },
    'ua:continent': {
      href: 'https://api.teleport.org/api/continents/geonames:EU/',
      name: 'Europe',
    },
    'ua:countries': [
      {
        href: 'https://api.teleport.org/api/countries/iso_alpha2:IT/',
        name: 'Italy',
      },
      {
        href: 'https://api.teleport.org/api/countries/iso_alpha2:VA/',
        name: 'Vatican',
      },
    ],
    'ua:details': {
      href: 'https://api.teleport.org/api/urban_areas/slug:rome/details/',
    },
    'ua:identifying-city': {
      href: 'https://api.teleport.org/api/cities/geonameid:3169070/',
      name: 'Rome',
    },
    'ua:images': {
      href: 'https://api.teleport.org/api/urban_areas/slug:rome/images/',
    },
    'ua:primary-cities': [
      {
        href: 'https://api.teleport.org/api/cities/geonameid:3169070/',
        name: 'Rome',
      },
    ],
    'ua:salaries': {
      href: 'https://api.teleport.org/api/urban_areas/slug:rome/salaries/',
    },
    'ua:scores': {
      href: 'https://api.teleport.org/api/urban_areas/slug:rome/scores/',
    },
  },
  bounding_box: {
    latlon: { east: 12.845, north: 42.13, south: 41.578, west: 12.109 },
  },
  continent: 'Europe',
  full_name: 'Rome, Italy',
  is_government_partner: false,
  mayor: 'Virginia Raggi',
  name: 'Rome',
  slug: 'rome',
  teleport_city_url: 'https://teleport.org/cities/rome/',
  ua_id: 'sr2yk',
}

export default urbanarea
