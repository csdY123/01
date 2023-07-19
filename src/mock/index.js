const Mock = require("mockjs");

Mock.mock(/friend\/friendList/, 'post', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return friendList
})

Mock.mock(/friend\/chatMsg/, 'post', (config) => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    let params = JSON.parse(config.body)
    if (params.frinedId == "1000")
        return chatMsg1000
    if (params.frinedId == "1002")
        return chatMsg1002
    if (params.frinedId == "1003")
        return chatMsg1003
    if (params.frinedId == "1004")
        return chatMsg1004
})


let friendList = Mock.mock(
    [
        {
            img: "",
            name: "女娲 ",
            detail: "万物.ai 的官方聊天机器人",
            lastMsg: "大萨达萨达所大大萨达",
            id: "1000",
            headImg: require("@/assets/img/女娲.png"),

        },
        {
            img: "",
            name: "GPT-3.5 Turbo",
            detail: "免费试用",
            lastMsg: "to do",
            id: "1002",
            headImg: require("@/assets/img/head_portrait1.png"),

        },
        {
            img: "",
            name: "GPT-4",
            detail: "限量访问",
            lastMsg: "dada dw ertgthy j uy",
            id: "1003",
            headImg: require("@/assets/img/GPT-4.jpg"),

        },
        {
            img: "",
            name: "Claude Instant 100k",
            detail: "限量访问",
            lastMsg: "大萨达萨达所大大萨达",
            id: "1004",
            headImg: require("@/assets/img/100k.png"),

        },
        {
            img: "",
            name: "Claude-v1",
            detail: "限量访问",
            lastMsg: "大萨达萨达所大大萨达",
            id: "1005",
            headImg: require("@/assets/img/v1.png"),

        },
    ]
)

let chatMsg1000 = Mock.mock(
    [
        // {
        //     headImg: require("@/assets/img/head_portrait.jpg"),
        //     name: "大毛是小白",
        //     time: "09：12 AM",
        //     msg: " 在吗？",
        //     chatType: 0, //信息类型，0文字，1图片
        //     uid: "1001", //uid
        // },

        {
            headImg: require("@/assets/img/女娲.png"),
            name: "女娲",
            time: "09：12 AM",
            msg: " 女娲模型为您服务",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1000", //uid
        }
        // {
        //     headImg: require("@/assets/img/head_portrait.jpg"),
        //     name: "大毛是小白",
        //     time: "09：12 AM",
        //     msg: require("@/assets/img/emoji/slightly-smiling-face.png"),
        //     chatType: 1, //信息类型，0文字，1图片
        //     extend: {
        //         imgType: 1, //(1表情，2本地图片)
        //     },
        //     uid: "1001",
        // },
    ]
)

let chatMsg1002 = Mock.mock(
    [
        // {
        //     headImg: require("@/assets/img/head_portrait.jpg"),
        //     name: "大毛是小白",
        //     time: "09：12 AM",
        //     msg: " 在吗？",
        //     chatType: 0, //信息类型，0文字，1图片
        //     uid: "1001", //uid
        // },

        {
            headImg: require("@/assets/img/head_portrait1.png"),
            name: "GPT-3.5",
            time: "09：12 AM",
            msg: " gpt-3模型为您服务",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1002", //uid
        }
        // {
        //     headImg: require("@/assets/img/head_portrait.jpg"),
        //     name: "大毛是小白",
        //     time: "09：12 AM",
        //     msg: require("@/assets/img/emoji/slightly-smiling-face.png"),
        //     chatType: 1, //信息类型，0文字，1图片
        //     extend: {
        //         imgType: 1, //(1表情，2本地图片)
        //     },
        //     uid: "1001",
        // },
    ]
)
let chatMsg1003 = Mock.mock(
    [
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "CSD",
            time: "09：12 AM",
            msg: "在干嘛呢",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1001", //uid
        },
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "CSD",
            time: "09：12 AM",
            msg: require("@/assets/img/emoji/slightly-smiling-face.png"),
            chatType: 1, //信息类型，0文字，1图片
            extend: {
                imgType: 1, //(1表情，2本地图片)
            },
            uid: "1001",
        },
        {
            headImg: require("@/assets/img/GPT-4.jpg"),
            name: "GPT-4",
            time: "09：12 AM",
            msg: "吃饭",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1003", //uid
        },
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "CSD",
            time: "09：12 AM",
            msg: "吃的什么饭",
            chatType: 0, //信息类型，0文字，1图片, 2文件
            uid: "1001",
        },
        {
            headImg: require("@/assets/img/GPT-4.jpg"),
            name: "GPT-4",
            time: "09：12 AM",
            msg: "蛋炒饭",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1003", //uid
        },
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "CSD",
            time: "09：12 AM",
            msg: "加蛋了吗？",
            chatType: 0, //信息类型，0文字，1图片, 2文件
            uid: "1001",
        },
        {
            headImg: require("@/assets/img/GPT-4.jpg"),
            name: "GPT-4",
            time: "09：12 AM",
            msg: "你说呢",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1003", //uid
        },
        {
            headImg: require("@/assets/img/GPT-4.jpg"),
            name: "GPT-4",
            time: "09：12 AM",
            msg: require("@/assets/img/emoji/slightly-smiling-face.png"),
            chatType: 1, //信息类型，0文字，1图片
            extend: {
                imgType: 1, //(1表情，2本地图片)
            },
            uid: "1003", //uid
        },
    ]
)
let chatMsg1004 = Mock.mock(
    [
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "CSD",
            time: "09：12 AM",
            msg: " sadasdawdas sadsad sad sad as despite ofhaving so much to do",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1001", //uid
        },
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "CSD",
            time: "09：12 AM",
            msg: require("@/assets/img/emoji/slightly-smiling-face.png"),
            chatType: 1, //信息类型，0文字，1图片
            extend: {
                imgType: 1, //(1表情，2本地图片)
            },
            uid: "1001",
        },
        {
            headImg: require("@/assets/img/100k.png"),
            name: "Claude Instant 100k",
            time: "09：12 AM",
            msg: " 21312大萨达萨达",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1004", //uid
        },
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "CSD",
            time: "09：12 AM",
            msg: "111212",
            chatType: 0, //信息类型，0文字，1图片, 2文件
            uid: "1001",
        },
        {
            headImg: require("@/assets/img/100k.png"),
            name: "Claude Instant 100k",
            time: "09：12 AM",
            msg: "大萨达萨达所大大萨达",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1004", //uid
        },
    ]
)