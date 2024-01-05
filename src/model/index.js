const basicModels = import.meta.glob('./Basic/*.js', { eager: true, import: 'default' })

const allModels = [...Object.values(basicModels)].reduce((pre, next) => {
  pre[next.name] = next
  return pre
}, {})

export function createCompnent(name, data) {
  const Model = allModels[name]
  if (!Model) {
    console.error(`没有找到 ${name} 组件`)
    const t = new allModels['BaseText']()
    t.config.text = `组件 ${name} 暂未开发`
    t.style.color = 'red'
    t.style.borderColor = 'red'
    return t
  }
  return new Model(data)
}
