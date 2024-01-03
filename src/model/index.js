const basicModels = import.meta.glob('./Basic/*.js', { eager: true, import: 'default' })

const allModels = [...Object.values(basicModels)].reduce((pre, next) => {
  pre[next.name] = next
  return pre
}, {})

export function createCompnent(name, data) {
  const Model = allModels[name]
  if (!Model) {
    throw new Error(`model ${name} not found`)
  }
  return new Model(data)
}
