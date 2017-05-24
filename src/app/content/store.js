export default {
  'app': {
    '$children': [
      {
        '$type': 'Test',
        '$props': {
          'value': 'defaulttext'
        }
      },
      {
        '$type': 'Columns',
        '$props': {
          'gutter': 0,
          'columns': [5, 1, 2],
          'breakpoint': 1000
        },
        '$children': [
          [{
            '$type':'Test',
            '$props': {
              'value':'c1'
            }
          }],
          [{
            '$type':'Test',
            '$props': {
              'value':'c2'
            }
          },{
            '$type':'Test',
            '$props': {
              'value':'c2.2'
            }
          }],
          [{
            '$type':'Test',
            '$props': {
              'value':'c3'
            }
          }]
        ]
      }
    ]
  },
  'inspector': {
    '$props': {
      'lel':'lel'
    }
  }
}