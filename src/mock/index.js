import Mock from 'mockjs';
import url from '../http/url'

const Random = Mock.Random;

Mock.mock(url.baseUrl + 'login', 'post', {
  'code': 200,
  'msg': '',
  'data': Random.paragraph(1),
});