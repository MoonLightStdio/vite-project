<template>
     <div class="competition-container">
       <el-card class="competition-card" v-for="(competition, index) in competitions" :key="index">
         <div class="competition-header">
           <h2>{{ competition.name }}</h2>
         </div>
         <div class="competition-content">
           <p><strong>比赛时间：</strong>{{ competition.date }}</p>
           <p><strong>比赛地点：</strong>{{ competition.location }}</p>
           <p><strong>比赛官网：</strong><a :href="competition.url" target="_blank">{{ competition.url }}</a></p>
           <p><strong>比赛简介：</strong>{{ competition.description }}</p>
         </div>
       </el-card>
     </div>
   </template>
   
   <script>
   export default {
     data() {
       return {
         competitions: [
           {
             name: '全国大学生数学建模竞赛',
             date: '2025年10月15日 - 2025年10月18日',
             location: '北京国际会议中心',
             url: 'https://www.mcm.edu.cn',
             description: '全国大学生数学建模竞赛是一项旨在提高学生数学建模能力的国家级竞赛。'
           },
           {
             name: '全国大学生电子设计竞赛',
             date: '2025年11月20日 - 2025年11月23日',
             location: '上海科技馆',
             url: 'https://www.eec.edu.cn',
             description: '全国大学生电子设计竞赛是一项展示学生电子设计和创新能力的国家级竞赛。'
           },
           {
             name: '全国大学生机器人大赛',
             date: '2025年12月5日 - 2025年12月8日',
             location: '广州国际会展中心',
             url: 'https://www.robot.edu.cn',
             description: '全国大学生机器人大赛是一项展示学生机器人设计和编程能力的国家级竞赛。'
           }
         ]
       };
     }
   };
   </script>
   
   <style scoped>
   .competition-container {
     display: flex;
     flex-wrap: wrap;
     gap: 20px;
     padding: 20px;
   }
   
   .competition-card {
     width: calc(33.333% - 20px);
     box-sizing: border-box;
   }
   
   .competition-header {
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   
   .competition-content {
     margin-top: 10px;
   }
   
   .competition-content a {
     color: #409eff;
     text-decoration: none;
   }
   
   .competition-content a:hover {
     text-decoration: underline;
   }
   </style>