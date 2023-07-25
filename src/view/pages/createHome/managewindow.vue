<template>
  <div class="container mt-5">
    <h1 style="color: #ccc;">Create Role</h1>
    <form @submit.prevent="submitRole" class="role-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" class="form-control" id="name" v-model="role.name" required>
      </div>
      <!-- <div class="form-group">
        <label for="create_user">Created By:</label>
        <input type="text" class="form-control" id="create_user" v-model="role.create_user" >
      </div> -->
      <div class="form-group">
        <label>Wiki URLs:</label>
        <div v-for="(url, index) in role.data.wiki_urls" :key="index">
          <input type="text" class="form-control" v-model="role.data.wiki_urls[index]" required>
        </div>
      </div>
      <div class="form-group">
        <label for="good_csvs">good_csvs:</label>
        <div v-for="(url, index) in role.data.good_csvs" :key="index">
          <input type="text" class="form-control" v-model="role.data.good_csvs[index]" required>
        </div>
      
      </div>
      <div class="form-group">
        <label for="good_pdfs">good_pdfs:</label>
        <div v-for="(url, index) in role.data.good_pdfs" :key="index">
          <input type="text" class="form-control" v-model="role.data.good_pdfs[index]" required>
        </div>
      
      </div>
      <div class="form-group">
        <label for="good_websit_dialogues">good_websit_dialogues:</label>
        <div v-for="(url, index) in role.data.good_websit_dialogues" :key="index">
          <input type="text" class="form-control" v-model="role.data.good_websit_dialogues[index]" required>
        </div>
      

      </div>
      <div class="form-group">
        <label for="self_instruct_seed">self_instruct_seed:</label>
        <input type="text" class="form-control"  v-model="role.data.self_instruct_seed" >
      </div>
      <div class="form-group">
        <label for="self_instruct_num_instructions_to_generate">self_instruct_num_instructions_to_generate:</label>
        <input type="text" class="form-control" id="self_instruct_num_instructions_to_generate" v-model="role.data.self_instruct_num_instructions_to_generate" >
      </div>
      <div class="form-group">
        <label for="self_instruct_max_instances_to_gen">self_instruct_max_instances_to_gen:</label>
        <input type="text" class="form-control" id="self_instruct_max_instances_to_gen" v-model="role.data.self_instruct_max_instances_to_gen" >
      </div>  
      <div class="form-group">
        <label for="good_human_questions">good_human_questions:</label>
        <input type="text" class="form-control" id="good_human_questions" v-model="role.data.good_human_questions" >
      </div> 
      <div class="form-group">
        <label for="background_story">background_story:</label>
        <div v-for="(url, index) in role.data.background_story" :key="index">
          <input type="text" class="form-control" v-model="role.data.background_story[index]" required>
        </div>
      </div> 
      <input type="file" ref="fileInput" @change="handleFileChange">
      <!-- Add other form inputs here based on the data structure -->
      <button type="button" class="btn btn-primary" @click="generateTrain" >生成训练数据</button>
      <button type="button" class="btn btn-primary" @click="downloadTrain">下载训练数据</button>
      <button type="button" class="btn btn-primary" @click="downloadFinish">下载已完成数据</button>
      <button type="button" class="btn btn-primary" @click="uploadTrain">上传训练文件</button>
      <button type="button" class="btn btn-primary" @click="training">训练模型</button>
    </form>
    
  </div>
</template>

<script>
import { getChatMsg,getSystemChatMsg,getSystemChat, getChat } from "@/api/getData";
import axios from 'axios';
import HeadPortrait from "@/components/HeadPortrait";
import Emoji from "@/components/Emoji";
import FileCard from "@/components/FileCard.vue";
export default {
  components: {
    HeadPortrait,
    Emoji,
    FileCard,
  },
  //props是外部传参
  props: {
    frinedInfo: Object,
    default() {
      return {};
    },
  },
  mounted() {
    console.log(this.frinedInfo)
    this.role=this.frinedInfo
  },
  watch: {
    frinedInfo() {
      console.log(this.frinedInfo)
      this.role=this.frinedInfo
    },
  },
  data() {
    return {
      selectedFile: null,
      role: {
        name: "",
        create_user: this.userName,
        data: {
          wiki_urls: [],
          good_csvs: [],
          good_pdfs: [],
          good_websit_dialogues: [],
          self_instruct_seed: "",
          self_instruct_num_instructions_to_generate: 0,
          self_instruct_max_instances_to_gen: 0,
          good_human_questions: [],
          background_story: [],
        },
      },
    };
  },
  methods: {
      async  generateTrain(){//生成训练数据
          try {
          let csd ='http://www.lingyiwanwu.com/chat/app/api/characters/generate_qa_list/'+this.frinedInfo.id
          console.log(csd)
          // 使用Axios发送GET请求，替换下面的URL为实际的API地址
          const response = await axios.get(csd);
          
          // 处理服务器端返回的响应数据
          let responseData = response.data;
          console.log("生成训练数据,请求返回：")
          console.log(responseData)
        } catch (error) {
          console.error('发送GET请求失败:', error);
        }
      },
      async downloadTrain(){//下载训练数据
        try {
          // 发送GET请求，获取文件数据
          let csd ='http://www.lingyiwanwu.com/chat/app/api/characters/download_json/'+this.frinedInfo.id
          console.log(csd)
          const response = await axios.get(csd, {
            responseType: 'arraybuffer', // 告诉axios返回一个ArrayBuffer类型的响应
          });

          // 处理文件下载
          const blob = new Blob([response.data], { type: 'application/octet-stream' });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', '训练数据.JSON'); // 替换成你希望的文件名和扩展名
          document.body.appendChild(link);
          link.click();

          // 清理URL对象，释放资源
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error('下载文件失败:', error);
        }
      },
      async downloadFinish(){//下载已完成训练数据
        try {
          // 发送GET请求，获取文件数据
          let csd ='http://www.lingyiwanwu.com/chat/app/api/characters/download_lastgenerated_json/'+this.frinedInfo.id
          console.log(csd)
          const response = await axios.get(csd, {
            responseType: 'arraybuffer', // 告诉axios返回一个ArrayBuffer类型的响应
          });

          // 处理文件下载
          const blob = new Blob([response.data], { type: 'application/octet-stream' });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', '已完成训练数据.JSON'); // 替换成你希望的文件名和扩展名
          document.body.appendChild(link);
          link.click();

          // 清理URL对象，释放资源
          window.URL.revokeObjectURL(url);
        } catch (error) {
          console.error('下载文件失败:', error);
        }
      },
      handleFileChange(event) {
      // 获取用户选择的文件
      this.selectedFile = event.target.files[0];
      },
      async uploadTrain() {
        try {
          if (!this.selectedFile) {
            alert('请先选择文件！');
            return;
          }

          // 创建FormData对象，用于上传文件数据
          const formData = new FormData();
          formData.append('file', this.selectedFile, this.selectedFile.name);
          let csd ='http://www.lingyiwanwu.com/chat/app/api/characters/upload_json/'+this.frinedInfo.id
          console.log(csd)
          // 使用Axios发送POST请求，上传文件数据
          const response = await axios.post(csd, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          // 处理服务器端返回的响应
          console.log('上传成功！服务器返回的数据：', response.data);
          // 可以根据需要进行后续操作，如显示上传成功消息等
        } catch (error) {
          console.error('上传文件失败:', error);
        }
      },
      async training(){//进行训练
        try {
          // 使用Axios发送GET请求，替换下面的URL为实际的API地址
          let csd='http://www.lingyiwanwu.com/chat/app/api/characters/train_character/'+this.frinedInfo.id
          console.log(csd)
          const response = await axios.post(csd,null);

          // 处理服务器端返回的响应数据
          let responseData = response.data;
        } catch (error) {
          console.error('发送GET请求失败:', error);
        }
      },
  },
};
</script>

<style lang="scss" scoped>
/* 添加自定义样式 */
.container {
  max-width: 600px;
  max-height: 600px;
  margin: 0 auto;
}

h1 {
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  margin: 1px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

</style>