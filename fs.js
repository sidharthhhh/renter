const { json } = require('express')
var fs = require('fs')
var path = require('path')
var files = []
var data = fs.readdirSync('./public/images/hero2')
console.log(data)
data.forEach((elem, index) => {
  fs.renameSync(
    `./public/images/hero2/${elem}`,
    `./public/images/hero2/${index}${path.extname(elem)}`,
  )
  files.push(`${elem}`)
})

console.log(files)
fs.writeFileSync('./names.text', `${JSON.parse(JSON.stringify(files))}`)
fs.writeFileSync('./subHeroImages', `${files}`)
