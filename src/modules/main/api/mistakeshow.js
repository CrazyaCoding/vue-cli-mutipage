/**
 * Created by shangpanpan on 2017/11/10.
 */
import fetch from './../../../util/fetch';
function getPagesByPageNumber({id, startTime, endTime, interval}) {
	return fetch.getJSON('http://10.252.210.252:5858/api/monitor/getDataCount.json?id=' + id + '&starttime=' + startTime + '&endtime=' + endTime + '&interval=' + interval);
}
export {
	getPagesByPageNumber
};
