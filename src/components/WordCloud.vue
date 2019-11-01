<template>
    <div class="container">
        <div id="myWordCloud" :style="{width: '500px', height: '500px'}"></div>
    </div>
</template>

<script>

    export default {
        name: 'word-cloud',
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
                let myWordCloud = this.$echarts.init(document.getElementById('myWordCloud'))
                // 绘制图表
                let option = {
                    title: {
                        text: '词云',
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
                    series: [{
                        name: '词云',
                        type: 'wordCloud',
                        //size: ['80%', '80%'],
                        rotationRange: [ 0, 45],
                        rotationStep: 45,
                        textPadding: 0,
                        autoSize: {
                            enable: true,
                            minSize: 14
                        },

                        textStyle: {
                          normal: {
                            color: function() {
                              return (
                                "rgb(" +
                                Math.round(Math.random() * 255) +
                                ", " +
                                Math.round(Math.random() * 255) +
                                ", " +
                                Math.round(Math.random() * 255) +
                                ")"
                              );
                            }
                          }
                        },

                        data: [
                            {
                              name: "十九大精神",
                              value: 15000
                            },
                            {
                              name: "两学一做",
                              value: 10081
                            },
                            {
                              name: "中华民族",
                              value: 9386
                            },
                            {
                              name: "马克思主义",
                              value: 7500
                            },
                            {
                              name: "民族复兴",
                              value: 7500
                            },
                            {
                              name: "社会主义制度",
                              value: 6500
                            },
                            {
                              name: "国防白皮书",
                              value: 6500
                            },
                            {
                              name: "创新",
                              value: 6000
                            },
                            {
                              name: "民主革命",
                              value: 4500
                            },
                            {
                              name: "文化强国",
                              value: 3800
                            },
                            {
                              name: "国家主权",
                              value: 3000
                            },
                            {
                              name: "武装颠覆",
                              value: 2500
                            },
                            {
                              name: "领土完整",
                              value: 2300
                            },
                            {
                              name: "安全",
                              value: 2000
                            },
                            {
                              name: "从严治党",
                              value: 1900
                            },
                            {
                              name: "现代化经济体系",
                              value: 1800
                            },
                            {
                              name: "国防动员",
                              value: 1700
                            },
                            {
                              name: "信息化战争",
                              value: 1600
                            },
                            {
                              name: "局部战争",
                              value: 1500
                            },
                            {
                              name: "教育",
                              value: 1200
                            },
                            {
                              name: "职业教育",
                              value: 1100
                            },
                            {
                              name: "兵法",
                              value: 900
                            },
                            {
                              name: "一国两制",
                              value: 800
                            },
                            {
                              name: "特色社会主义思想",
                              value: 700
                            },
                        ]
                    }]
                }

                // 为echarts对象加载数据
                myWordCloud.setOption(option)
            }
        }
    }

</script>

<style>

 

</style>
