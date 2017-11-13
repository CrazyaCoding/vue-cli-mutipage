<template>
	<div class="select-wrap">
		<DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间" style="width: 300px" placement="bottom-end" v-on:on-change="selected" v-on:on-ok="confirm"></DatePicker>
	</div>
</template>

<script type="text/ecmascript-6">
	import DatePicker from 'iview/src/components/date-picker';
	export default{
		name: '',
		components: {
			'DatePicker': DatePicker
		},
		methods: {
			selected(e) {
				this.timestampArr = [];
				e.forEach((item, index) => {
					let time = new Date(item);
					this.timestampArr.push(time.getTime());
				});
			},
			confirm() {
				this.$emit('dateSelect', this.timestampArr);
			}
		},
		data() {
			return {
				timestampArr: []
			};
		}
	};
</script>
<style>
	.select-wrap{
		position: fixed;
		top:30px;
		right:0px;
	}
</style>
