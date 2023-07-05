import { Prism } from "prismjs"
import { Autoloader } from "prismjs/dist/plugins/autoloader/prism-autoloader.js"
import TypeScript from "prismjs/dist/languages/prism-typescript.js"

const prism = new Prism()

if (typeof prism.highlightAll !== "function")
  throw new Error("Unable to import Prism via Node ESM.")

const autoloader = new Autoloader(prism)

if (typeof autoloader.loadLanguages !== "function")
  throw new Error("Unable to import plugin via Node ESM.")

if (typeof TypeScript.grammar !== "function")
  throw new Error("Unable to import language definition via Node ESM.")

console.log("Node ESM import test passed.")
