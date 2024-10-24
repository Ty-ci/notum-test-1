import { cs } from "./cs"

export default {
  config: {
    locales: ["en", "cs"],
    translations: {
      cs,
    },
  },
  bootstrap(app) {
    console.log(app)
  },
}
