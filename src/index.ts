 import { ValueWatcher } from "./ValueWatcher"

const test = document.getElementById('test') as HTMLElement
let testCounter = 0
let valueWatcher = new ValueWatcher(0)
test?.addEventListener("click",()=>{
    testCounter += 1
    console.log("発火！！！！")
    if(testCounter>=3){
        valueWatcher.setValue(valueWatcher.targetValue)
    }
})
console.log("一回目のブロッキングされています")
await valueWatcher.watchForValueChange()
console.log("一回目のブロッキングが解除されました")
valueWatcher.IncrementTargetValue()

console.log("二回目のブロッキングされています")

window.setTimeout(()=>{
    valueWatcher.setValue(valueWatcher.targetValue)
},5000)

await valueWatcher.watchForValueChange()

console.log("二回目のブロッキングが解除されました")



