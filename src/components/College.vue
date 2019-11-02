<template>
    <div id="charts">
        <p>{{$route.name}}</p>
        <el-row :gutter="20">
            <el-col :span="12">
                <div>
                    <word-cloud></word-cloud>
                </div>
            </el-col>
            <el-col :span="12">
                <div>
                  <results></results>
                </div>
            </el-col>
        </el-row>
        <br>
        <br>
        <el-row>
          <div>
            <sample-exhibition></sample-exhibition>
          </div>
        </el-row>
    </div>
</template>

<script>
  import Qs from 'qs'
  import WordCloud from './WordCloud'
  import Results from './Results'
  import SampleExhibition from './SampleExhibition'

  export default {
    name: 'charts',
    components: {
      "word-cloud":WordCloud,
      "results":Results,
      'sample-exhibition':SampleExhibition
    },
    data(){
      return{
        
      }
    }
  }

</script>

<style scoped>

</style>


