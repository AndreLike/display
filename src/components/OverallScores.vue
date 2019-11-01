<template>
    <div class="container1">
        <div id="myOverallScores" :style="{width: '400px', height: '400px'}"></div>
    </div>
</template>

<script>

    export default {
        name: 'overall-scores',
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
                let myOverallScores = this.$echarts.init(document.getElementById('myOverallScores'))
                // 绘制图表
                let option = {
                    title: {
                        text: '高校新闻情感态势值统计',
                        //link: 'http://www.google.com/trends/hottrends'
                    },
                    color:['#4682B4'],
                    tooltip: {
                        show: true
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
                    // legend: {
                    //   data: ['情感态势值']
                    // },
                    xAxis: {
                      data: ["南大","复旦","中科大","西交","清华","浙大","上交","北大","哈工大"],
                      axisLabel: {
                        interval:0,
                        rotate:40
                        }
                    },
                    yAxis: {},

                    

                    series: [{
                      name: '情感态势值',
                      type: 'bar',
                      data: [82.53, 74.07, 62.23, 87.36, 94.41, 95.26, 88.64, 88.62, 83.03]
                    }]
      
                    
                }

                // 为echarts对象加载数据
                myOverallScores.setOption(option)
            }
        }
    }

</script>

<style>

 

</style>
