import { theme, useOpenapi } from 'vitepress-openapi'
import DefaultTheme from 'vitepress/theme'
import spec from '../../spec.json' assert {type: 'json'}
import 'vitepress-openapi/dist/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Set the OpenAPI specification.
    const openapi = useOpenapi({
      spec,
    })

    // Use the theme.
    theme.enhanceApp({ app, openapi })
  },
}