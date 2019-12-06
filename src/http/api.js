import action from './axios'

export default {
  // 创建用户
  login (data) {return action.commonPost('login', data).promise},
}