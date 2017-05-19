export default {
  'app': {
    '$props': {
      'test': 10,
      'test2': 42
    },
    '$children': {
      'childtest': {
        '$type': 'Test',
        '$props': {
          'value': 'someval'
        }
      }
    }
  },
  'inspector': {
    '$props': {
      'lel':'lel'
    }
  }
}