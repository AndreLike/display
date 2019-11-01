import Vue from 'vue'
import Router from 'vue-router'
import OverallAnalysis from '@/components/OverallAnalysis'
import Home from '@/components/Home'
import Tx from '@/components/Tx'
import College from '@/components/College'


Vue.use(Router)

export default new Router({
    routes: [
    {
        path: '/',
        name: 'OverallAnalysis',
        leaf: true,//只有一个节点
        component: Home,
        iconCls: 'el-icon-s-home',
        redirect: '/OverallAnalysis',
        children: [
            { path: '/OverallAnalysis', component: OverallAnalysis, name: '总体分析' },
        ]
    },


    {
        path: '/',
        name: '所有高校',
        component: Home,
        iconCls: 'el-icon-location',
        children: [
            { path: '/Tx', component: Tx, name: 'demo1' },
            { path: '/PKU', component: College, name: '北京大学' },
            { path: '/THU', component: College, name: '清华大学' },
            { path: '/FDU', component: College, name: '复旦大学' },
            { path: '/SJTU', component: College, name: '上海交通大学' },
            { path: '/NJU', component: College, name: '南京大学' },
            { path: '/ZJU', component: College, name: '浙江大学' },
            { path: '/USTC', component: College, name: '中国科学技术大学' },
            { path: '/HIT', component: College, name: '哈尔滨工业大学' },
            { path: '/XJTU', component: College, name: '西安交通大学' },
        ]
    },

    {
        path: '*',
        redirect: '/OverallAnalysis',
        hidden:true //控制是否在左边菜单栏目展示
    },
    ]
})
