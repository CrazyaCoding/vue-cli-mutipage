/**
 * Created by shangpanpan on 2017/9/18.
 */
function objToMap(obj) {
	var map = new Map();
	if (!obj || obj.length === 0) {
		return map;
		//throw new Error('obj is not empty');
	}
	let keys = Object.keys(obj[0]);
	keys.forEach((key, index) => {
		let vals = [];
		obj.forEach((item) => {
			vals.push(item[key]);
		});
		map.set(key, vals);
	});
	return map;
};
export {
	objToMap
};
