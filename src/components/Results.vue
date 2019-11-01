<template>
    <div class="container1">
        <div id="myResults" :style="{width: '500px', height: '500px'}"></div>
    </div>
</template>

<script>

    export default {
        name: 'results',
        data () {
            return {
              msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted () {
            this.drawLine()
        },
        methods: {

            drawLine () {
                // 基于准备好的dom，初始化echarts实例
                let myResults = this.$echarts.init(document.getElementById('myResults'))
                // 绘制图表
                let option = {
                    title: {
                        text: ' 情感极性百分比扇形图统计',
                        //link: 'http://www.google.com/trends/hottrends'
                    },

                    tooltip: {
                        show: true
                    },
                    legend: {
                      x: 'center',
                      y: 'bottom',
                      data: ['negative_num', 'positive_num']
                    },
                    toolbox: {
                      right: '40',
                      show: true,
                      feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: true, buttonColor:'#4682B4'},
                        magicType: {
                          show: true,
                          type: ['pie', 'funnel']
                        },
                        //restore: { show: true },
                        saveAsImage: { show: true }
                      }
                    },
                    calculable: true,

                    series: [{
                      name: '半径模式',
                      // roseType: 'radius',
                      type:'pie',
                      radius: ['10%', '50%'],
                      avoidLabelOverlap: false,
                      label: {
                        normal: {
                          backgroundColor: '#eee',
                          borderColor: '#aaa',
                          borderWidth: 1,
                          padding: 5,
                          borderRadius: 4,
                          rich: {
                            b: {
                              fontSize: 8,
                              lineHeight: 15
                            },
                            per: {
                              align: 'center'
                            }
                          }
                        }
                      },

                      data: [
                        { value: 21, name: 'negative_num' },
                        { value: 1443, name: 'positive_num' }
                      ]
                    }]
                    
                }

                // 为echarts对象加载数据
                myResults.setOption(option)
            }
        }
    }

</script>

<style>

 

</style>
