function lodashGet(object, path, defaultValue) {
    let obj = object
    
    //处理path
    if(typeof path === 'string') {
      const reg = /[^\[\]""''.]+/g
      path = path.match(reg)
    }
    for(let key of path) {
      if(!obj) {
        return defaultValue
      }
      obj = obj[key]
    }
    return obj
}