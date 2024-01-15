const url = new URL('@/utils/stack-worker.js', import.meta.url)

let stackWorker
let isRecord = true
export function useStackWorker() {
  if (!stackWorker) {
    stackWorker = new Worker(url)
    console.log('初始化 stackWorker')
  }
  const postMessage = (data) => {
    if (!isRecord) return console.log('stackWorker 已暂停')
    stackWorker.postMessage(data)
  }

  const pause = () => {
    isRecord = false
    console.log('stackWorker 暂停')
  }

  const restore = () => {
    isRecord = true
    console.log('stackWorker 恢复')
  }
  return {
    postMessage,
    stackWorker,
    pause,
    restore
  }
}
