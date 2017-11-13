<template>
	<div class="permission-wrap">
		<p class="permission-tit">权限申请</p>
		<i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
			<form-item label="姓名" prop="name">
				<i-input v-model="formValidate.name" placeholder="请输入姓名"></i-input>
			</form-item>
			<form-item label="邮箱" prop="mail">
				<i-input v-model="formValidate.mail" placeholder="请输入邮箱"></i-input>
			</form-item>
			<form-item label="城市" prop="city">
				<i-select v-model="formValidate.city" placeholder="请选择所在地">
					<!--<i-option v-for="item in permissionSelect" :value=item.value :key=item.pageId>{{item.name}}</i-option>-->
					<i-option value="beijing">item</i-option>
					<i-option value="shanghai">上海市</i-option>
					<i-option value="shenzhen">深圳市</i-option>
				</i-select>
			</form-item>
			<form-item label="开关">
				<i-switch v-model="formValidate.switch" size="large">
					<span slot="open">开启</span>
					<span slot="close">关闭</span>
				</i-switch>
			</form-item>
			<form-item label="介绍" prop="desc">
				<i-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></i-input>
			</form-item>
			<form-item>
				<i-button type="primary" @click="handleSubmit('formValidate')">提交</i-button>
				<i-button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</i-button>
			</form-item>
		</i-form>
	</div>
</template>

<script type="text/ecmascript-6">
	import form from 'iview/src/components/form';
	import formItem from 'iview/src/components/form/form-item';
	import input from 'iview/src/components/input';
	import row from 'iview/src/components/grid/row.vue';
	import col from 'iview/src/components/grid/col.vue';
	import sSwitch from 'iview/src/components/switch';
	import btn from 'iview/src/components/button/button.vue';
	import select from 'iview/src/components/select/select.vue';
	import option from 'iview/src/components/select/option.vue';
	/*import {mapGetters} from 'vuex';*/
	export default{
		name: 'permission',
		computed: {
			/*...mapGetters([
				'permissionSelect'
			])*/
		},
		components: {
			'i-form': form,
			'form-item': formItem,
			'i-input': input,
			'row': row,
			'i-col': col,
			'i-switch': sSwitch,
			'i-button': btn,
			'i-select': select,
			'i-option': option
		},
		data() {
			return {
				formValidate: {
					name: '',
					mail: '',
					city: '',
					desc: '',
					switch: true
				},
				ruleValidate: {
					name: [
						{required: true, message: '姓名不能为空', trigger: 'blur'}
					],
					mail: [
						{required: true, message: '邮箱不能为空', trigger: 'blur'},
						{type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
					],
					city: [
						{required: true, message: '请选择城市', trigger: 'change'}
					],
					desc: [
						{required: true, message: '请输入个人介绍', trigger: 'blur'},
						{type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur'}
					]
				}
			};
		}
	};
</script>
<style>
	html, .box, #app{
		background: #EDEDED;
	}
	.permission-wrap{
		margin: 50px auto;
		width: 600px;
		background: #fff;
		padding:20px;
		overflow: hidden;
	}
	.permission-tit{
		text-align: center;
		color:#323232;
		font-size: 20px;
		margin-bottom: 20px;
	}
</style>
