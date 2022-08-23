import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-sfilter'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
