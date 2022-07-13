
// muuttujat
const x = 1
let y = 5

console.log(x, y)
y += 10

console.log(x ,y)
y = "teksti"

console.log(x, y)
x = 4

// taulukot
const t = [1, -1, 3]
console.log(t.length)
console.log(t[1])

t.push(5)

console.log(t.length)

t.forEach(value => {
    console.log(value)
})