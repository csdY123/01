import base from './index'
let axios = base.axios
let baseUrl = base.baseUrl

// 获取好友
export const getFriend = params => {
    return axios({
      method: 'post',
      baseURL: `${baseUrl}/friend/friendList`,
      data: params
    }).then(res => res.data)
}

export const getSys_Characters = params => {
  return axios({
    method: 'get',
    baseURL: `${baseUrl}/api/sys/characters`,
    data: params
  }).then(res => res.data["characters"])
}
//`${baseUrl}/api/characters`
export const getCharacter = params => {
  return axios({
    method: 'get',
    baseURL: `${baseUrl}/api/characters`,
    data: params
  }).then(res => res.data)
}
export const createCharactor = params => {
  return axios({
    method: 'post',
    baseURL: `${baseUrl}/api/characters`,
    data: params
  }).then(res => res.data)
}


  // 获取聊天历史信息
export const getChatMsg = params => {
  // console.log(`${baseUrl}/api/characters/chat/history/`+params["frinedId"]+'/'+params["user_id"])
  return axios({
    method: 'get',
    baseURL: `${baseUrl}/api/characters/chat/history/`+params["frinedId"]+'/'+params["user_id"],
  }).then(res => res.data)
}
export const getSystemChatMsg = params => {
  // console.log(`${baseUrl}/api/sys/characters/chat/history/`+params["frinedId"]+'/'+params["user_id"])
  return axios({
    method: 'get',
    baseURL: `${baseUrl}/api/sys/characters/chat/history/`+params["frinedId"]+'/'+params["user_id"],
  }).then(res => res.data)
}
export const getChat = params => {
  return axios({
    method: 'post',
    baseURL: `${baseUrl}/api/characters/chat`,
    data: params
  }).then(res => res.data)
}
export const getSystemChat = params => {
  return axios({
    method: 'post',
    baseURL: `${baseUrl}/api/sys/characters/chat`,
    data: params
  }).then(res => res.data)
}

  // // 获取聊天信息
  // export const chatgpt = params => {
  //   return axios({
  //     method: 'post',
  //     url: `https://api.openai.com/v1/completions`,
  //     data: params,
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': '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'//`Bearer ${process.env.VUE_APP_CHATGPT_KEY}`,
  //     }
  //   }).then(res => res.data)
  // }
