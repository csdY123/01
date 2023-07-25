const Mock = require("mockjs");

Mock.mock(/api\/characters\/chat\/history/, 'get', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    console.log()
    return historyList  
})
Mock.mock(/api\/characters\/chat/, 'post', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return characters_chat
})
Mock.mock(/api\/sys\/characters\/chat\/history/, 'get', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return system_chat
})
Mock.mock(/api\/sys\/characters\/chat/, 'post', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return sys_characters_chat
})
Mock.mock(/api\/characters/, 'get', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    console.log()
    return characterList
})
Mock.mock(/api\/characters/, 'post', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return {
        "id": "f7f96e55-f2a3-43d9-9209-967471782246",
        "message": "Character created successfully"
    }
})

Mock.mock(/friend\/friendList/, 'post', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return friendList
})
Mock.mock(/api\/sys\/characters/, 'get', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return sys_characters
})

// Mock.mock(/api\/characters\/chat/, 'post', (config) => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
//     return "svsdv";
// })  
// Mock.mock(/api\/characters\/chat\/history\/Elon_Musk\/saiwm623/, 'post', (config) => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
//     return historyList;
// })  
// Mock.mock(/api\/characters/, 'post', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
//     return characterList
// })  



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

let sys_characters_chat=Mock.mock(
    {
        "choices": [
            {
                "finish_reason": "stop",
                "index": 3,
                "message": {
                    "content": "Hello! How can I assist you today?",
                    "role": "assistant"
                }
            }
        ],
        "created": 1677652288,
        "id": "65f7dbd8-116d-4102-950e-4b41a3a8258b",
        "object": "chat.completion",
        "usage": {
            "completion_tokens": 12,
            "prompt_tokens": 5,
            "total_tokens": 17
        }
    }
)
let sys_characters=Mock.mock(
    {
        "characters": [
            {
            //     img: "",
            // name: "女娲 ",
            // detail: "万物.ai 的官方聊天机器人",
            // lastMsg: "",
            // id: "1000",
            // headImg: require("@/assets/img/女娲.png"),
                "avatar": "@/assets/img/女娲.png",
                "create_time": "2023-07-24T05:45:23",
                "create_user": "system",
                "data": "{\"test\": \"13\"}",
                "des": "女娲是万物.ai 的官方聊天机器人",
                "id": 1,
                "model": "gpt-3.5-turbo",
                "name": "女娲",
                "opby": "wanwu.ai",
                "update_time": "2023-07-24T05:45:23",
                "uuid": "65f7dbd8-116d-4102-950e-4b41a3a8258b"
            }
        ]
    }
    )
    let system_chat=Mock.mock(
        {
            "id": "65f7dbd8-116d-4102-950e-4b41a3a8258b",
            "messages": [
                {
                    "attachments": [],
                    "chat_feedback": null,
                    "content": "Hello!",
                    "created_at": "2023-07-24T12:48:05.595521+0000",
                    "edited_at": null,
                    "index": 0,
                    "role": "user",
                    "updated_at": "2023-07-24T12:48:05.595580+0000",
                    "uuid": "360143e5-7832-4b5d-bac9-ca63e56477ff"
                },
                {
                    "attachments": [],
                    "chat_feedback": null,
                    "content": "Hello! How can I assist you today?",
                    "created_at": "2023-07-24T12:48:05.595615+0000",
                    "edited_at": null,
                    "index": 1,
                    "role": "assistant",
                    "updated_at": "2023-07-24T12:48:05.595634+0000",
                    "uuid": "5dc6abc5-9397-4777-ab4c-e27eea470ba5"
                },
                {
                    "attachments": [],
                    "chat_feedback": null,
                    "content": "Hello!",
                    "created_at": "2023-07-24T13:17:40.295710+0000",
                    "edited_at": null,
                    "index": 2,
                    "role": "user",
                    "updated_at": "2023-07-24T13:17:40.295757+0000",
                    "uuid": "0aa9cbf7-6b20-417b-820c-09195492ee96"
                },
                {
                    "attachments": [],
                    "chat_feedback": null,
                    "content": "Hello! How can I assist you today?",
                    "created_at": "2023-07-24T13:17:40.295815+0000",
                    "edited_at": null,
                    "index": 3,
                    "role": "assistant",
                    "updated_at": "2023-07-24T13:17:40.295835+0000",
                    "uuid": "ff8d6fa6-55dd-4717-9638-40a75db49019"
                }
            ],
            "updated_at": "",
            "user": "saiwm623"
        }
    
    )
let historyList=Mock.mock(
    {
        "id": "Elon_Musk",
        "user": "saiwm623",
        "updated_at": "2023-07-19T08:16:44.460073+00:00",
        "messages": [
            {
                "uuid": "e42041a7-73b6-463f-93ad-fdb86671fb3a",
                "content": "你好!很高兴认识你。我是Claude,一个由Anthropic公司创建的AI助手。我会说一点中文。请告诉我,我如何能帮助你?",
                "role": "assistant",
                "index": 1,
                "created_at": "2023-07-19T08:16:44.460073+00:00",
                "updated_at": "2023-07-19T08:16:44.460073+00:00",
                "edited_at": null,
                "chat_feedback": null,
                "attachments": []
            },
            {
                "uuid": "d2d88b1d-2f32-443c-a879-e407f591079f",
                "content": "nihao",
                "role": "user",
                "index": 0,
                "created_at": "2023-07-19T08:16:44.388441+00:00",
                "updated_at": "2023-07-19T08:16:44.388441+00:00",
                "edited_at": null,
                "chat_feedback": null,
                "attachments": []
            }
        ]
    })

    let characters_chat=Mock.mock(
        {
            "id": "Elon_Musk",
            "object": "chat.completion",
            "created": 1677652288,
            "choices": [{
              "index": 0,
              "message": {
                "role": "character",
                "content": "Hello fellow Earthling, what can I help you with today?",
              },
              "finish_reason": "stop"
            }],
            "usage": {
              "prompt_tokens": 5,
              "completion_tokens": 12,
              "total_tokens": 17
            }
          }
        )
let characterList=Mock.mock(
    //还需要：id里面的内容需要考虑  需要图片链接   AI简单描述
    {
        "characters": [
            {
                "create_user": "saiwm623",
                "data": {
                    "background_story": [],
                    "good_csvs": [],
                    "good_human_questions": [
                        "good_human_questions.jsonl"
                    ],
                    "good_pdfs": [],
                    "good_websit_dialogues": [
                        "https://zamesin.me/clubhouse-elon-musk-interview"
                    ],
                    "self_instruct_max_instances_to_gen": 400,
                    "self_instruct_num_instructions_to_generate": 40,
                    "self_instruct_seed": "seed_tasks_character.jsonl",
                    "wiki_urls": [
                        "https://en.wikipedia.org/wiki/Elon_Musk",
                        "https://en.wikipedia.org/wiki/Elon_Musk_vs._Mark_Zuckerberg",
                        "https://en.wikipedia.org/wiki/Musk_family"
                    ]
                },
                "id": "48a0886a-0fd2-4a24-b266-0d23fc728c41",
                "name": "Elon Musk1"
            },
            {
                "create_user": "saiwm623",
                "data": {
                    "background_story": [],
                    "good_csvs": [],
                    "good_human_questions": [
                        "good_human_questions.jsonl"
                    ],
                    "good_pdfs": [],
                    "good_websit_dialogues": [
                        "https://zamesin.me/clubhouse-elon-musk-interview"
                    ],
                    "self_instruct_max_instances_to_gen": 400,
                    "self_instruct_num_instructions_to_generate": 40,
                    "self_instruct_seed": "seed_tasks_character.jsonl",
                    "wiki_urls": [
                        "https://en.wikipedia.org/wiki/Elon_Musk",
                        "https://en.wikipedia.org/wiki/Elon_Musk_vs._Mark_Zuckerberg",
                        "https://en.wikipedia.org/wiki/Musk_family"
                    ]
                },
                "id": "5ec71ba0-780b-4cca-84a3-6b17cacd5d8c",
                "name": "Elon_Musk2"
            },
            {
                "create_user": "saiwm623",
                "data": {
                    "background_story": [],
                    "good_csvs": [],
                    "good_human_questions": [
                        "good_human_questions.jsonl"
                    ],
                    "good_pdfs": [],
                    "good_websit_dialogues": [
                        "https://zamesin.me/clubhouse-elon-musk-interview"
                    ],
                    "self_instruct_max_instances_to_gen": 400,
                    "self_instruct_num_instructions_to_generate": 40,
                    "self_instruct_seed": "seed_tasks_character.jsonl",
                    "wiki_urls": [
                        "https://en.wikipedia.org/wiki/Elon_Musk",
                        "https://en.wikipedia.org/wiki/Elon_Musk_vs._Mark_Zuckerberg",
                        "https://en.wikipedia.org/wiki/Musk_family"
                    ]
                },
                "id": "0c569706-1b18-41aa-a825-4b887d550654",
                "name": "Elon Musk3"
            }
        ]
    }
)

let friendList = Mock.mock(
    [
        {
            img: "",
            name: "女娲 ",
            detail: "万物.ai 的官方聊天机器人",
            lastMsg: "",
            id: "1000",
            headImg: require("@/assets/img/女娲.png"),

        },
        {
            img: "",
            name: "GPT-3.5 Turbo",
            detail: "免费试用",
            lastMsg: "",
            id: "1002",
            headImg: require("@/assets/img/head_portrait1.png"),

        },
        {
            img: "",
            name: "GPT-4",
            detail: "限量访问",
            lastMsg: "",
            id: "1003",
            headImg: require("@/assets/img/GPT-4.jpg"),

        },
        {
            img: "",
            name: "Claude Instant 100k",
            detail: "限量访问",
            lastMsg: "",
            id: "1004",
            headImg: require("@/assets/img/100k.png"),

        },
        {
            img: "",
            name: "Claude-v1",
            detail: "限量访问",
            lastMsg: "",
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
            created_at: "09：12 AM",
            content: " 女娲模型为您服务",
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
            created_at: "09：12 AM",
            content: " gpt-3模型为您服务",
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
            created_at: "09：12 AM",
            content: "在干嘛呢",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1001", //uid
        },
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "CSD",
            created_at: "09：12 AM",
            content: require("@/assets/img/emoji/slightly-smiling-face.png"),
            chatType: 1, //信息类型，0文字，1图片
            extend: {
                imgType: 1, //(1表情，2本地图片)
            },
            uid: "1001",
        },
        {
            headImg: require("@/assets/img/GPT-4.jpg"),
            name: "GPT-4",
            created_at: "09：12 AM",
            content: "吃饭",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1003", //uid
        },
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "CSD",
            created_at: "09：12 AM",
            content: "吃的什么饭",
            chatType: 0, //信息类型，0文字，1图片, 2文件
            uid: "1001",
        },
        {
            headImg: require("@/assets/img/GPT-4.jpg"),
            name: "GPT-4",
            created_at: "09：12 AM",
            content: "蛋炒饭",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1003", //uid
        },
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "CSD",
            created_at: "09：12 AM",
            content: "加蛋了吗？",
            chatType: 0, //信息类型，0文字，1图片, 2文件
            uid: "1001",
        },
        {
            headImg: require("@/assets/img/GPT-4.jpg"),
            name: "GPT-4",
            created_at: "09：12 AM",
            content: "你说呢",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1003", //uid
        },
        {
            headImg: require("@/assets/img/GPT-4.jpg"),
            name: "GPT-4",
            created_at: "09：12 AM",
            content: require("@/assets/img/emoji/slightly-smiling-face.png"),
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
            created_at: "09：12 AM",
            content: " sadasdawdas sadsad sad sad as despite ofhaving so much to do",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1001", //uid
        },
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "CSD",
            created_at: "09：12 AM",
            content: require("@/assets/img/emoji/slightly-smiling-face.png"),
            chatType: 1, //信息类型，0文字，1图片
            extend: {
                imgType: 1, //(1表情，2本地图片)
            },
            uid: "1001",
        },
        {
            headImg: require("@/assets/img/100k.png"),
            name: "Claude Instant 100k",
            created_at: "09：12 AM",
            content: " 21312大萨达萨达",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1004", //uid
        },
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "CSD",
            created_at: "09：12 AM",
            content: "111212",
            chatType: 0, //信息类型，0文字，1图片, 2文件
            uid: "1001",
        },
        {
            headImg: require("@/assets/img/100k.png"),
            name: "Claude Instant 100k",
            created_at: "09：12 AM",
            content: "大萨达萨达所大大萨达",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1004", //uid
        },
    ]
)