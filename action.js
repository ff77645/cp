import request from "./utils/request.js"

export const copyAction = async (path, options,command)=>{
  const res = await request.post('/copy',{data:{
    path,
    options
  }})
}