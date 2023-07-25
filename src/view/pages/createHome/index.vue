<template>
  <div class="chatHome">
    <div class="chatLeft">
      <div class="title">
        <h1>万物.ai</h1>
        <el-tag type="success">欢迎关注零一万物</el-tag>
        <br/>
      </div>
      <div class="online-person">
        
        <div class="person-cards-wrapper">


          <span class="onlin-text">AI 角色管理</span>
          <div align="center">
            <button class="beautiful-button" @click="addClick">+ 创建角色</button>
          </div>
          <div
            class="personList"
            v-for="characterInfo in characterList"
            
            @click="clickCharacter(characterInfo)"
          >
            <PersonCard
              :personInfo="characterInfo"
              :pcCurrent="characterpcCurrent"
            ></PersonCard>
          </div>

        </div>
        
      </div>
    </div>
    <div class="chatRight">
      <!-- <router-view></router-view> -->
      <div v-if="showChatWindow">
        <ManageWindow
          :frinedInfo="chatWindowInfo"
          @personCardSort="personCardSort"
        ></ManageWindow>
      </div>
      <div v-else-if="createChatWindow">
        <CreateWindow
        :userName="user_Name">
        </CreateWindow>
      </div>
      <div class="showIcon" v-else="showChatWindow">
       
        <img src="@/assets/img/snapchat.png" alt="" />
      </div>
    </div>
    <!-- <el-col :span="4"><div class="grid-content bg-purple"></div></el-col> -->
  </div>
</template>

<script>
import PersonCard from "@/components/PersonCard.vue";
import ManageWindow from "./managewindow.vue";
import CreateWindow from "./createwindow.vue";
import { getSys_Characters } from "@/api/getData";
import { getCharacter } from "@/api/getData";
export default {
  name: "App",
  components: {
    PersonCard,
    ManageWindow,
    CreateWindow,
  },
  data() {
    return {
      pcCurrent: "",
      characterpcCurrent:"",
      personList: [],
      characterOriginalInfo:[],
      characterList:[],
      showChatWindow: false,
      createChatWindow: false,
      chatWindowInfo: {},
      user_Name:"saiwm623"
    };
  },
  mounted() {
    getSys_Characters().then((res) => {
      console.log(res); 
      this.personList = res;
    });

    getCharacter().then((res) => {
      console.log(res); 
      this.characterOriginalInfo = res;
      this.characterList=res["characters"];
      console.log(this.characterList);
    });

  },
  methods: {
    // [
    //     {
    //         img: "",
    //         name: "女娲 ",
    //         detail: "万物.ai 的官方聊天机器人",
    //         lastMsg: "大萨达萨达所大大萨达",
    //         id: "1000",
    //         headImg: require("@/assets/img/女娲.png"),

    //     }
    //   ]
    clickCharacter(info) {
      this.showChatWindow = true;
      this.chatWindowInfo = info;
      this.characterInfo = info;
      this.characterpcCurrent = info.id;
      console.log("this.characterpcCurrent:",this.characterpcCurrent)
      this.pcCurrent = "";
    },
    clickPerson(info) {
      this.showChatWindow = true;
      this.chatWindowInfo = info;
      this.personInfo = info;
      this.pcCurrent = info.id;
      this.characterpcCurrent = "";
    },
    personCardSort(id) {
      if (this.characterpcCurrent!=""&& id !== this.personList[0].id) {
        console.log(id);
        let nowPersonInfo;
        for (let i = 0; i < this.personList.length; i++) {
          if (this.personList[i].id == id) {
            nowPersonInfo = this.personList[i];
            this.personList.splice(i, 1);
            break;
          }
        }
        this.personList.unshift(nowPersonInfo);
      }
    },
    addClick(){
      this.showChatWindow=false
      this.createChatWindow=true
      console.log('按钮被点击了！');
    }
  },
};
</script>

<style lang="scss" scoped>
.chatHome {
  // margin-top: 20px;
  display: flex;
  .chatLeft {
    width: 280px;
    .title {
      color: #fff;
      padding-left: 10px;
    }
    .online-person {
      margin-top: 60px;
      .onlin-text {
        padding-left: 10px;
        color: rgb(176, 178, 189);
      }
      .person-cards-wrapper {
        padding-left: 10px;
        height: 65vh;
        margin-top: 20px;
        overflow: hidden;
        overflow-y: scroll;
        box-sizing: border-box;
        &::-webkit-scrollbar {
          width: 0; /* Safari,Chrome 隐藏滚动条 */
          height: 0; /* Safari,Chrome 隐藏滚动条 */
          display: none; /* 移动端、pad 上Safari，Chrome，隐藏滚动条 */
        }
      }
    }
  }

  .chatRight {
    flex: 1;
    padding-right: 30px;
    .showIcon {
      position: absolute;
      top: calc(35% - 150px); /*垂直居中 */
      left: calc(35% - 50px); /*水平居中 */
      .icon-snapchat {
        width: 300px;
        height: 300px;
        font-size: 300px;
        // color: rgb(28, 30, 44);
      }
    }
  }

  .beautiful-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 200px;
    height: 50px;
    border-radius: 0%;
    background-color: #42b983;
    color: #fff;
    font-size: 24px;
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;
  }

  .beautiful-button:hover {
    background-color: #36a174;
  }

  .beautiful-button:active {
    background-color: #2b7c5a;
  }
}
</style>
