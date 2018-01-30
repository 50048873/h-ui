<template>
  <div class="hzz-detail-theme1" id="form">
        <h3>南十里长沟三支</h3>
        <table>
            <tbody>
                <tr>
                    <td>状态：</td>
                    <td><span class="status p7465">调查核实中</span></td>
                    <td>上报人：</td>
                    <td>张三</td>
                    <td>上报时间：</td>
                    <td>2018-01-25 12:00</td>
                </tr>
                <tr>
                    <td>所在河道：</td>
                    <td>南十里长沟三支</td>
                    <td>事件内容：</td>
                    <td>垃圾太多</td>
                    <td>事件类型：</td>
                    <td>倾倒垃圾</td>
                </tr>
                <tr>
                    <td>处理前照片：</td>
                    <td colspan="5"></td>
                </tr>
                <tr>
                    <td colspan="6" class="photos">
                        <img src="static/image/photo.jpg" alt="">
                        <img src="static/image/photo.jpg" alt="">
                        <img src="static/image/photo.jpg" alt="">
                    </td>
                </tr>
            </tbody>
        </table>
        <h5>事件进度</h5>
        <ul>
            <li>
                <div class="circle p2925">1</div>
                <div class="content">
                    <h6>垃圾太多</h6>
                    <p>
                        <span>处理人：李四</span>
                        <span>电话：13000000000</span>
                    </p>
                    <p><time>2017-09-18 12:30</time></p>
                </div>
            </li>
            <li>
                <div class="circle p116">2</div>
                <div class="content">
                    <h6>垃圾太多</h6>
                    <p>
                        <span>处理人：李四</span>
                        <span>电话：13000000000</span>
                    </p>
                    <p><time>2017-09-18 12:30</time></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
	import $ from 'jquery'

	export default {
	    name: 'HDetail1',
	    mixins: [HZZ.mixin.dialog],
	    watch: {
	        filterText(val) {
	            this.$refs.tree2.filter(val);
	        }
	    },
	    data() {
	        return {
	            filterText: '',
	            typeData: [],
	            treeData: [],
	            defaultProps: {
	                children: 'children',
	                label: 'label'
	            },

	            form: {},
	            fileList: []
	        };
	    },
	    methods: {
	        filterNode(value, data) {
	            if (!value) return true;
	            return data.label.indexOf(value) !== -1;
	        },
	        onSubmit: function() { // 提交督办反馈操作弹出表单
	            this.close();
	            console.log('submit!');
	        },
	        handleRemove: function(file, fileList) {
	            console.log(file, fileList);
	        },
	        handlePreview: function(file) {
	            console.log(file);
	        },
	        handleExceed: function(files, fileList) {
	            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
	        },
	        beforeRemove: function(file, fileList) {
	            return this.$confirm(`确定移除 ${ file.name }？`);
	        },
	        init: function() {
	          var rowData = parent.HZZ.cache.getData('row'); // 调用者传入的缓存对象
	          if ($.isPlainObject(rowData)) {
	              this.rowData = rowData;
	          }
	          this.show({
	              title: '事件详情',
	              content: '#form',
	              area: '930px'
	          });
	        }
	    },
	    created: function() {
	        this.init();
	    }
	};
</script>

<style scoped>
	.hzz-detail-theme1 {
	    display: block;
	}
</style>
