import IncrementalButton from "./components/IncrementalButton.js"
import InputLog from "./components/InputLog.js"

const root = document.getElementById('root')

root.render(IncrementalButton({value: 1}))
root.render(IncrementalButton({value: 10}))
root.render(InputLog({text: "value: "}))