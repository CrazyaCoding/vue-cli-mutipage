/**
 * Created by shangpanpan on 2017/9/28.
 */
function clone(arrObj) {
	let newobj = [];
	let keys = Object.keys(arrObj[0]);
	arrObj.forEach((item, index) => {
		let obj = {};
		keys.forEach(key => {
			let tmpkey = key,
				temval = item[key];
			obj[tmpkey] = temval;
		});
		newobj.push(obj);
	});
	return newobj;
};
export {
	clone
};
