/**
 * Created by shangpanpan on 2017/11/9.
 */
import fetch from './../../../util/fetch';
/*let api;
if (process.env.NODE_ENV === 'production') {
	api = {
		getPagesByPageNumber: 'http://10.252.210.252:5858/page/getPageByPageNumber.json'
	};
} else {
	api = {
		getPagesByPageNumber: 'getPageByPageNumber'
	};
}*/

function getPagesByPageNumber({pageNum = 1, pageSize = 100}) {
	return fetch.getJSON('http://10.252.210.252:5858/page/getPageByPageNumber.json?pageNum=' + pageNum + '&pageSize=' + pageSize);
}
export {
	getPagesByPageNumber
};
