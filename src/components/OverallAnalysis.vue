<template>
    <div id="analysis">
        <p>{{msg}}</p>
        <p>{{$route.name}}</p>
        <el-row :gutter="20">
            <el-col :span="8">
                <div>
                  <overall-word-cloud></overall-word-cloud>
                </div>
            </el-col>
            <el-col :span="8">
                <div>
                  <overall-scores></overall-scores>
                </div>
            </el-col>
            <el-col :span="8">
                <div>
                    <overall-news-sum></overall-news-sum>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import Qs from 'qs'
  import OverallWordCloud from './OverallWordCloud'
  import OverallScores from './OverallScores'
  import OverallNewsSum from './OverallNewsSum'
  export default {
    name: 'analysis',
    components: {
      "overall-word-cloud":OverallWordCloud,
      "overall-scores":OverallScores,
      "overall-news-sum":OverallNewsSum,
    },
    data(){
      return{
        msg:"测试"
      }
    }
  }

</script>

<style scoped>

</style>


