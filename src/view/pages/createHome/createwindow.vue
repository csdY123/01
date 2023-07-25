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
        <button @click="addWikiURL" type="button" class="btn btn-primary">Add Wiki URL</button>
      </div>
      <div class="form-group">
        <label for="good_csvs">good_csvs:</label>
        <div v-for="(url, index) in role.data.good_csvs" :key="index">
          <input type="text" class="form-control" v-model="role.data.good_csvs[index]" required>
        </div>
        <button @click="addGood_csvs" type="button" class="btn btn-primary">Add good_csvs</button>
      </div>
      <div class="form-group">
        <label for="good_pdfs">good_pdfs:</label>
        <div v-for="(url, index) in role.data.good_pdfs" :key="index">
          <input type="text" class="form-control" v-model="role.data.good_pdfs[index]" required>
        </div>
        <button @click="addGood_pdfs" type="button" class="btn btn-primary">Add good_pdfs</button>
      </div>
      <div class="form-group">
        <label for="good_websit_dialogues">good_websit_dialogues:</label>
        <div v-for="(url, index) in role.data.good_websit_dialogues" :key="index">
          <input type="text" class="form-control" v-model="role.data.good_websit_dialogues[index]" required>
        </div>
        <button @click="addGood_websit_dialogues" type="button" class="btn btn-primary">Add good_websit_dialogues</button>

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
        <button @click="addBackground_story" type="button" class="btn btn-primary">Add background_story</button>
      </div> 
      <!-- Add other form inputs here based on the data structure -->
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <SuccessPopup ref="successPopup" />
  </div>
</template>

<script>
import { createCharactor } from "@/api/getData";
import SuccessPopup from "@/components/SuccessPopup.vue";
export default {
  components: {
    SuccessPopup,
  },
    //props是外部传参
    props: {
    userName: Object,
    default() {
      return {};
    },
  },
  data() {
    return {
      role: {
        name: "",
        create_user: this.userName,
        data: {
          wiki_urls: [],
          good_csvs: [],
          good_pdfs: [],
          good_websit_dialogues: [],
          self_instruct_seed: "seed_tasks_character.jsonl",
          self_instruct_num_instructions_to_generate: 40,
          self_instruct_max_instances_to_gen: 400,
          good_human_questions: ["good_human_questions.jsonl"],
          background_story: [],
        },
      },
    };
  },
  methods: {
    submitRole() {
      console.log(this.role)
      
      createCharactor(this.role).then((res) => {
        if(res.message=="Character created successfully")
        {
          console.log(res.message)
          this.$refs.successPopup.showSuccessPopup();
        }
        });
      // 在这里将角色信息提交给后端，使用axios或fetch等HTTP库
      // 示例代码（使用axios）:
      // import axios from "axios";
      // axios.post("/api/createRole", this.role).then((response) => {
      //   console.log(response.data);
      // }).catch((error) => {
      //   console.error(error);
      // });
    },
    addWikiURL() {
      this.role.data.wiki_urls.push(""); // 添加一个空白的URL输入框
    },
    addGood_csvs(){
      this.role.data.good_csvs.push(""); // 添加一个空白的URL输入框
    },
    addGood_pdfs(){
      this.role.data.good_pdfs.push("");
    },
    addGood_websit_dialogues(){
      this.role.data.good_websit_dialogues.push("")
    },
    addBackground_story(){
      this.role.data.background_story.push("")
    }
  },
};
</script>

<style>
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
  color: rgb(251, 251, 251);
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
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
