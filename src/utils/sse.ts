const eventSource = new EventSource('/events') // 后端推送消息的路径

// 接收服务器推送的消息
eventSource.onmessage = function (event) {
  console.log('收到服务器推送的消息:', event.data)
}

// 处理连接打开
eventSource.onopen = function (event) {
  console.log('连接已建立')
}

// 处理错误
eventSource.onerror = function (event) {
  console.error('发生错误:', event)
}
