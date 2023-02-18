var fs = require('fs')
var path = require('path')
var files = []
var data = fs.readdirSync('./public/images/subHero')
console.log(data)
data.forEach((elem, index) => {
  fs.renameSync(
    `./public/images/subHero/${elem}`,
    `./public/images/subHero/${index}${path.extname(elem)}`,
  )
  files.push(`${elem}`)
})
console.log(files)
fs.writeFileSync('./subHeroImages', `${files}`)
