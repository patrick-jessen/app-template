var shared = require('./shared').default

export default {
  'app': {
    '$children': [
      {
        '$type': 'NavMenu',
        '$props': {
          'logo': {
            'link': '/',
            'image': 'https://d1vhcvzji58n1j.cloudfront.net/assets/logo-1c27efee7b.png'
          },
          'menus': [
            {text:'laptops',link:'/laptops'},
            {text:'desktops',link:'/desktops'},
            {text:'servers',link:'/servers'},
            {text:'swag',link:'/swag'}
          ],
          'actions': [
            {icon:'fa-comments',link:'/contact'},
            {icon:'fa-life-ring',link:'/support'},
            {icon:'fa-user',link:'/my-account'}
          ]
        }
      },
      {
        '$type': 'NavMenu',
        '$props': {
          'logo': {
            'link': '/',
            'image': 'https://d1vhcvzji58n1j.cloudfront.net/assets/logo-1c27efee7b.png'
          },
          'menus': [
            {text:'laptops',link:'/laptops'},
            {text:'desktops',link:'/desktops'},
            {text:'servers',link:'/servers'},
            {text:'swag',link:'/swag'}
          ],
          'actions': [
            {icon:'fa-comments',link:'/contact'},
            {icon:'fa-life-ring',link:'/support'},
            {icon:'fa-user',link:'/my-account'}
          ]
        }
      },
      {
        '$type': 'NavMenu',
        '$props': {
          'logo': {
            'link': '/',
            'image': 'https://d1vhcvzji58n1j.cloudfront.net/assets/logo-1c27efee7b.png'
          },
          'menus': [
            {text:'laptops',link:'/laptops'},
            {text:'desktops',link:'/desktops'},
            {text:'servers',link:'/servers'},
            {text:'swag',link:'/swag'}
          ],
          'actions': [
            {icon:'fa-comments',link:'/contact'},
            {icon:'fa-life-ring',link:'/support'},
            {icon:'fa-user',link:'/my-account'}
          ]
        }
      },
      // {
      //   '$type': 'Page',
      //   '$routes': {
      //     '/laptops': [
      //       {
      //         '$type': 'CarouselHero',
      //         '$props': {
      //           'duration': 7000,
      //           'transition': 'slide',
      //           'items': [
      //             {
      //               "image": "https://d1vhcvzji58n1j.cloudfront.net/assets/products/gaze12/hero_wide_1280-e5a14a6c72.jpg",
      //               "link": "#0"
      //             },
      //             {
      //               "image": "https://d1vhcvzji58n1j.cloudfront.net/assets/products/oryp3/hero_wide_1280-02cc3e6cba.jpg",
      //               "link": "#1"
      //             },
      //             {
      //               "image": "https://d1vhcvzji58n1j.cloudfront.net/assets/products/kudu4/hero_wide_1280-d3924b7405.jpg",
      //               "link": "#2"
      //             },
      //             {
      //               "image": "https://d1vhcvzji58n1j.cloudfront.net/assets/products/galp2/hero_wide_1280-f762ff343f.jpg",
      //               "link": "#3"
      //             },
      //             {
      //               "image": "https://d1vhcvzji58n1j.cloudfront.net/assets/products/lemu7/hero_wide_1280-cbc61456c5.jpg",
      //               "link": "#4"
      //             }
      //           ]
      //         }
      //       },
      //       {
      //         '$type': 'Columns',
      //         '$props': {
      //           'gutter': 100,
      //           'columns': [
      //             1,1,1,1
      //           ],
      //           'breakpoint': 1000
      //         },
      //         '$columns': [
      //           [{
      //             '$type': 'ProductSummary',
      //             '$props': {
      //               'laptop': shared.laptops.lemur.summary
      //             }
      //           },],
      //           [{
      //             '$type': 'ProductSummary',
      //             '$props': {
      //               'laptop': shared.laptops.gazelle.summary
      //             }
      //           }],
      //           [{
      //             '$type': 'ProductSummary',
      //             '$props': {
      //               'laptop': shared.laptops.gazelle.summary
      //             }
      //           }],
      //           [{
      //             '$type': 'ProductSummary',
      //             '$props': {
      //               'laptop': shared.laptops.gazelle.summary
      //             }
      //           }]
      //         ]
      //       }
      //     ]
      //   }
      // }
    ]
  },
  'inspector': {
    '$props': {
      'lel':'lel'
    }
  }
}