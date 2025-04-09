<template>
    <div class="personal-center">
      <el-tabs v-model="activeTab" @tab-click="handleTabClick">
        <el-tab-pane label="个人信息" name="profile">
          <div class="profile">
            <h2>个人信息</h2>
            <el-form label-width="120px">
              <el-form-item label="学号">
                <el-input v-model="studentInfo.studentId" disabled></el-input>
              </el-form-item>
              <el-form-item label="姓名">
                <el-input v-model="studentInfo.name" disabled></el-input>
              </el-form-item>
              <el-form-item label="专业">
                <el-input v-model="studentInfo.major" disabled></el-input>
              </el-form-item>
              <el-form-item label="联系方式">
                <el-input v-model="studentInfo.contact" disabled></el-input>
              </el-form-item>
              <el-form-item label="个人简介">
                <el-input type="textarea" v-model="studentInfo.bio"></el-input>
              </el-form-item>
              <el-form-item label="科创学分">
                <el-input v-model="studentInfo.innovationCredits" disabled></el-input>
                <el-button type="text" @click="viewInnovationCredits">查看</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的项目" name="projects">
          <div class="projects">
            <h2>我的项目</h2>
            <el-table :data="studentInfo.projects" style="width: 100%">
              <el-table-column prop="name" label="项目名称"></el-table-column>
              <el-table-column prop="status" label="项目状态"></el-table-column>
              <el-table-column prop="leader" label="项目负责人"></el-table-column>
              <el-table-column prop="startDate" label="开始时间"></el-table-column>
              <el-table-column prop="endDate" label="结束时间"></el-table-column>
              <el-table-column label="操作">
                <template #default="scope">
                  <el-button type="text" @click="viewProject(scope.row)">查看</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="学习资源" name="resources">
          <div class="resources">
            <h2>学习资源</h2>
            <el-card class="resource-card" v-for="(resource, index) in resources" :key="index">
              <div class="resource-content">
                <h3>{{ resource.title }}</h3>
                <p>{{ resource.description }}</p>
                <el-button type="text" @click="viewResource(resource)">查看</el-button>
              </div>
            </el-card>
          </div>
        </el-tab-pane>
        <el-tab-pane label="消息中心" name="messages">
          <div class="messages">
            <h2>消息中心</h2>
            <el-card class="message-card" v-for="(message, index) in messages" :key="index">
              <div class="message-content">
                <p><strong>{{ message.title }}</strong></p>
                <p>{{ message.content }}</p>
                <p><small>{{ message.time }}</small></p>
              </div>
            </el-card>
          </div>
        </el-tab-pane>
        <el-tab-pane label="成就与荣誉" name="achievements">
          <div class="achievements">
            <h2>成就与荣誉</h2>
            <el-card class="achievement-card" v-for="(achievement, index) in achievements" :key="index">
              <div class="achievement-content">
                <h3>{{ achievement.title }}</h3>
                <p>{{ achievement.description }}</p>
                <p><small>{{ achievement.time }}</small></p>
              </div>
            </el-card>
          </div>
        </el-tab-pane>
        <el-tab-pane label="个人设置" name="settings">
          <div class="settings">
            <h2>个人设置</h2>
            <el-form label-width="120px">
              <el-form-item label="密码">
                <el-input type="password" v-model="studentInfo.password"></el-input>
              </el-form-item>
              <el-form-item label="联系方式">
                <el-input v-model="studentInfo.contact"></el-input>
              </el-form-item>
              <el-form-item label="通知设置">
                <el-switch v-model="studentInfo.notify"></el-switch>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: 'profile',
        studentInfo: {
          studentId: '20251001',
          name: '张三',
          major: '计算机科学与技术',
          contact: '1234567890',
          bio: '热爱科技创新，擅长编程和数据分析。',
          password: '',
          notify: true,
          innovationCredits: 10, // 初始科创学分
          projects: [
            {
              name: '智能交通系统',
              status: '进行中',
              leader: '李四',
              startDate: '2025-03-01',
              endDate: '2025-09-01'
            },
            {
              name: '机器学习算法研究',
              status: '已完成',
              leader: '王五',
              startDate: '2024-05-01',
              endDate: '2024-12-01'
            }
          ]
        },
        resources: [
          {
            title: 'Python 编程基础',
            description: '适合初学者的 Python 编程课程。'
          },
          {
            title: '数据结构与算法',
            description: '深入学习数据结构和算法的高级课程。'
          }
        ],
        messages: [
          {
            title: '项目进度提醒',
            content: '请尽快提交智能交通系统的进度报告。',
            time: '2025-03-20'
          },
          {
            title: '学术讲座通知',
            content: '本周五将举行人工智能学术讲座，欢迎参加。',
            time: '2025-03-18'
          }
        ],
        achievements: [
          {
            title: '全国大学生数学建模竞赛二等奖',
            description: '在2025年全国大学生数学建模竞赛中获得二等奖。',
            time: '2025-03-15'
          },
          {
            title: '校级优秀学生干部',
            description: '被评为2024-2025学年校级优秀学生干部。',
            time: '2025-01-10'
          }
        ]
      };
    },
    methods: {
      handleTabClick(tab) {
        this.activeTab = tab.name;
      },
      viewProject(project) {
        console.log('查看项目详情:', project);
      },
      viewResource(resource) {
        console.log('查看学习资源:', resource);
      },
      viewInnovationCredits() {
        alert(`当前科创学分: ${this.studentInfo.innovationCredits}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .personal-center {
    padding: 20px;
  }
  
  .profile,
  .projects,
  .resources,
  .messages,
  .achievements,
  .settings {
    margin-top: 20px;
  }
  
  .resource-card,
  .message-card,
  .achievement-card {
    margin-bottom: 10px;
  }
  </style>