const fs = require('fs')
const path = require('path')

const glob = require('glob')

module.exports = (hbs, rootDir) => {
    glob
        .sync(`${rootDir}/**/*`, {
            nodir: true
        })
        .forEach((m) => {
            const partialName = path.relative(rootDir, m).split(path.sep).join('/')
            hbs.registerPartial(partialName, fs.readFileSync(m, 'utf8')) // eslint-disable-line no-sync, comment: тут необходимо синхронно
        })
}
