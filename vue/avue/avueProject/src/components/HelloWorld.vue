<template>
	<div class="hello">
		<div class="table">
			<avue-crud ref="crud" :search.sync="vard" :cell-class-name="tablecell" :header-cell-class-name="headerclass"
			 :before-open="beforeopen"
			 :data="tableData"
			 :span-method="spanM"
			 :table-loading="false"
			 :rowKey ="1"
			 :option="option">


			</avue-crud>
		</div>
		<el-button @click="show">点击我啊</el-button>
		<!-- <avue-echart-wordcloud ref="echart" :option="config" :data="data" width="1000"></avue-echart-wordcloud> -->


    <div id="myChart" :style="{width: '800px', height: '400px',marginTop:'100px'}" ></div>


	</div>
</template>

<script>
  import echarts from 'echarts'
	import dayjs from 'dayjs';

  console.log('echarts=====',echarts)

	export default {
		name: 'HelloWorld',
		data() {
			return {
				data:[
					{
					          "name": "Mac Pro",
					          "value": 18341
					        }, {
					          "name": "华为P20",
					          "value": 17319
					        }, {
					          "name": "小米手机",
					          "value": 12550
					        },
				],
				 config: {
				          "minFontSize": 30,
				          "maxFontSize": 80,
				          "split": 30,
				          "rotate": true
				        },
				vard: {}, // 搜索变量
				tableData: [{ // 表格数据
					name: '张三',
					sex: '男',
					date: '1994-02-23 00:00:00',

				}, {
					name: '李四',
					sex: '女',
					date: '1994-02-23 00:00:00'
				}, {
					name: '王五',
					sex: '女',
					date: '1994-02-23 00:00:00'
				}, {
					name: '赵六',
					sex: '男',
					date: '1994-02-23 00:00:00'
				}],
				option: { // 表格配置
					title: '表格的标题',
					page: false,
					align: 'center',
					menuAlign: 'center',
					addRowBtn:true,
					editBtn:false,
					dateDefault:new Date(),
					delBtn:false, // 行内删除按钮 默认是true
					enter:true, // 回 车提交表单
					border:true, // 边框
					calcHeight:100, // 表格高度差
					columnBtn:false, // 显隐按钮
					cellBtn:true, // 单元格是否可编辑 单元格配置cell :true
					dateBtn:true, //日期按钮
					dialogFullscreen:false, // 全屏的dialog 弹框
					dialogCloseBtn:true, // 是否显示dialog 关闭按钮 默认是true
					dialogType: 'drawer',//dialog 类型 dialog / drawer
					// expandRowKeys:[0,1],
					filterBtn:true,

					expand:true,
					column: [{
							label: '姓名',
							prop: 'name',
							cell:true,
							search: true,
						},
						{
							label: '性别',
							prop: 'sex'
						}, {
							label: "日期",
							prop: "date",
							type: "date",
							format: "yyyy-MM-dd hh:mm:ss",
							valueFormat: "yyyy-MM-dd hh:mm:ss",
						}
					]
				},

			}
		},
		mounted() {
			 // this.watermark('我是水印的文案888');
			 let date = dayjs('2020-01-12');
			 console.log(dayjs())
			 console.log(dayjs("12-25-1995", "MM-DD-YYYY"),dayjs('20222-12-255'))
			 console.log(dayjs().add(7, 'day'))

        this.drawLine();

		},
		methods: {
       drawLine(){
              // 基于准备好的dom，初始化echarts实例
              let myChart = this.$echarts.init(document.getElementById('myChart'))
              // var myChart = echarts.init(document.getElementById("myChart"));
              let option = {
                  title: {
                      text: '折线图堆叠1'
                  },
                  tooltip: {
                      trigger: 'axis' // axis  item none
                  },
                  legend: {
                      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎2']
                  },
                  grid: {
                      left: '30%',
                      right: '4%',
                      top: '23%',
                      containLabel: true
                  },
                  toolbox: {
                      feature: {
                          saveAsImage: {}
                      }
                  },
                  xAxis: {
                      type: 'category',
                      boundaryGap: false,
                      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                  },
                  yAxis: {
                      type: 'value'
                  },
                  series: [
                      {
                          name: '邮件营销',
                          type: 'line',
                          stack: '总量',
                          data: [120, 132, 101, 134, 90, 230, 210]
                      },
                      {
                          name: '联盟广告',
                          type: 'line',
                          stack: '总量',
                          data: [220, 182, 191, 234, 290, 330, 310]
                      },
                      {
                          name: '视频广告',
                          type: 'line',
                          stack: '总量',
                          data: [150, 232, 201, 154, 190, 330, 410]
                      },
                      {
                          name: '直接访问',
                          type: 'line',
                          stack: '总量',
                          data: [320, 332, 301, 334, 390, 330, 320]
                      },
                      {
                          name: '搜索引擎',
                          type: 'line',
                          stack: '总量',
                          data: [820, 932, 901, 934, 1290, 1330, 1320]
                      }
                  ]
              };
              // 绘制图表
              myChart.setOption(option);
          },
			tablecell({
				row,
				column,
				rowIndex,
				columnIndex
			}) { // 给单元格设置class 可以根据row 数据设置不一样的class
				// console.log(row,column,rowIndex,columnIndex)
				if (rowIndex % 2 == 0) {
					return 'red'
				}
				return ''
			},
			headerclass({
				row,
				column,
				rowIndex,
				columnIndex
			}) { // 给表头单元格设置class
				// console.log(row,column,rowIndex,columnIndex)
				if (columnIndex % 2 == 0) {
					return 'bold'
				}
				return ''
			},
			spanM({
				row,
				column,
				rowIndex,
				columnIndex
			}) { // 合并行或者列的方法
				// console.log(rowIndex,columnIndex)

				// if (columnIndex === 0) { //用于设置要合并的列
				// 	if (rowIndex % 2 === 0) { //用于设置合并开始的行号
				// 		return {
				// 			rowspan: 1, //合并的行数
				// 			colspan: 1 //合并的列数，设为０则直接不显示
				// 		};
				// 	} else {
				// 		return {
				// 			rowspan: 0,
				// 			colspan: 0
				// 		};
				// 	}
				// }
			},
			beforeopen(done, type) {
				console.log(done, type)
				// return true;
				done()
			},
			show() {
				this.$refs.crud.cellClassName = 'cell';
				// console.log(this.$refs.crud)
				console.log(this.vard,this.tableData)
			}
		}
	}
</script>

<style>
	.red {
		color: red !important;
	}

	.bold {
		font-size: 18px;
		color: #8cc;
	}
</style>
