<template>
    <div class="container2">
        <div id="myOverallNewsSum" :style="{width: '400px', height: '400px'}"></div>
    </div>
</template>

<script>

    export default {
        name: 'overall-news-sum',
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
                let myOverallNewsSum = this.$echarts.init(document.getElementById('myOverallNewsSum'))
                // 绘制图表
                let option = {
                    title: {
                        text: '新闻数量统计',
                        //link: 'http://www.google.com/trends/hottrends'
                    },

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
                    //   data: ['新闻数量']
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
                      name: '新闻数量',
                      type: 'bar',
                      data: [1078, 186, 1038, 2780, 1464, 178, 1254, 4174, 251]
                    }]
      
                    
                }

                // 为echarts对象加载数据
                myOverallNewsSum.setOption(option)
            }
        }
    }

</script>

<style>

 

</style>
