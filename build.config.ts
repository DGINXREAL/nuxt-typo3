import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/module'
  ],
  declaration: 'compatible'
})
