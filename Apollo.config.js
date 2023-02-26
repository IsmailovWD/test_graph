module.exports = {
  client: {
    services: {
      name: 'APolloClient',
      url: 'http://localhost:3355/graphql'
    },
    includes: [
      'src/**/*.js',
      'src/**/*.vue',
    ]
  }
}