/**
 * Created by shangpanpan on 2017/9/21.
 */
import dateformat from 'dateformat';

function timeInListToFormate(list, key, rule) {
	if (list === undefined) {
		throw Error('list is not defined');
	}
	if (key === undefined) {
		throw Error('key is not defined');
	}
	if (list.length === 0) {
		return [];
	}
	let newList = [].concat(list);
	newList = newList.filter((item) => {
		if (item[key] === '') {
			return true;
		}
		let val = Number(item[key]);
		item[key] = dateformat(val, rule);
		return item;
	});
	return newList;
	/*console.log(list[0]['key']);
	let newList = [];
	list.forEach((item, index) => {
		if (item[key] === '') {
			return true;
		};
		newList.push(item);
		let curr = newList[index];
		let val = Number(curr[key]);
		curr[key] = dateformat(val, rule);
	});
	console.log(list[0]['key']);
	return newList;*/
}
export {
	timeInListToFormate
};
