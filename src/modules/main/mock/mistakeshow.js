/**
 * Created by shangpanpan on 2017/11/10.
 */

function getErrorJsByTimeList({id = 1, starttime, endtime, interval}) {
	let promise = new Promise((resolve) => {
		let data = {
			success: true,
			messgae: '',
			data: [
				{
					'key': 1505876400000,
					'count': 16
				},
				{
					'key': 1505876700000,
					'count': 15
				},
				{
					'key': 1505877300000,
					'count': 20
				},
				{
					'key': 1505877000000,
					'count': 13
				},
				{
					'key': 1505877600000,
					'count': 10
				},
				{
					'key': 1505877900000,
					'count': 2
				},
				{
					'key': 1505878500000,
					'count': 8
				},
				{
					'key': 1505878800000,
					'count': 9
				},
				{
					'key': 1505879100000,
					'count': 11
				}
			]
		};
		resolve(data);
	});
	return promise;
}
function getJsErrorTableListByTime({id = 1, starttime, endtime}) {
	let promise = new Promise((resolve) => {
		let data = {
			success: true,
			messgae: '',
			data: [
				{
					'key': 'EvalError',
					'count': 14425
				},
				{
					'key': 'ReferenceError',
					'count': 14371
				},
				{
					'key': 'SyntaxError',
					'count': 14368
				},
				{
					'key': 'RangeError',
					'count': 14320
				},
				{
					'key': 'URIError',
					'count': 14273
				},
				{
					'key': '出错了',
					'count': 14226
				},
				{
					'key': 'InternalError',
					'count': 14176
				},
				{
					'key': 'TypeError',
					'count': 14134
				}
			]
		};
		resolve(data);
	});
	return promise;
}
function getJsErrorDetail({id = 1, starttime, endtime}) {
	let promise = new Promise((resolve) => {
		let data = {
			success: true,
			messgae: '',
			data: [
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:14:45.688Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:17:07.663Z',
					'url': 'http://localhost:5858/',
					'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:17:20.879Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:17:31.881Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:18:59.664Z',
					'url': 'http://localhost:5858/',
					'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:17:54.857Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:18:53.878Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:21:16.993Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:23:02.676Z',
					'url': 'http://localhost:5858/',
					'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:23:37.919Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:23:51.681Z',
					'url': 'http://localhost:5858/',
					'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:23:56.882Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:24:26.893Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:24:47.902Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:26:15.891Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:26:09.894Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:30:59.906Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:31:08.888Z',
					'url': 'http://localhost:5858/',
					'userAgent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:31:57.904Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
					'v': 0
				},
				{
					'col': 0,
					'file': 'app.js',
					'hostname': 'MacBook-Pro.local',
					'id': '110',
					'level': 30,
					'levl': 'error',
					'msg': 'TypeError',
					'name': 'monitor',
					'pid': 37244,
					'platform': 'MacIntel',
					'row': 0,
					'time': '2017-09-21T02:32:53.925Z',
					'url': 'http://localhost:9100/',
					'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
					'v': 0
				}
			]
		};
		resolve(data);
	});
	return promise;
}
export {
	getErrorJsByTimeList,
	getJsErrorTableListByTime,
	getJsErrorDetail
};
