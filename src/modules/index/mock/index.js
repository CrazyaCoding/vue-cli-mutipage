/**
 * Created by shangpanpan on 2017/11/9.
 */

function getPagesByPageNumber({pageNum = 1, pageSize = 100}) {
	let promise = new Promise((resolve) => {
		let data = {
			success: true,
			data: [
				{
					name: 1
				},
				{
					name: 2
				},
				{
					name: 3
				},
				{
					name: 4
				},
				{
					name: 5
				}
			]
		};
		resolve(data);
	});
	return promise;
}
export {
	getPagesByPageNumber
};
