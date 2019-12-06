let url = {}

switch (process.env.VUE_APP_MODE) {
  case 'development':
    url = {
      // 测试
      baseUrl: "https://192.168.20.234:8003/"
    }
    break
  case 'dev':
    url = {
      baseUrl: "https://192.168.20.234:8003/"
    }
    break
  case 'prod':
    url = {
      baseUrl: "http://192.168.20.9:8545/"
    }
    break
  default:
    url = {
      baseUrl: `${window.location.protocol}//${window.location.hostname}/`
    }
}

export default url