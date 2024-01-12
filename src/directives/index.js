const direactives = import.meta.glob('./*.js', { eager: true })

function installDirectives(app) {
  Object.keys(direactives).forEach((key) => {
    const name = key.match(/(\w+)\.js/)[1]
    const ns = name.slice(1).toLowerCase()
    app.directive(ns, direactives[key][name])
  })
}

export default installDirectives
