const express = require ('express')
const router = express.Router()
const fs = require ('fs')

const pathRouter =`${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    
    const fileWithoutEXt = removeExtension(file)
    const skip = ['index'].includes(fileWithoutEXt)
    if (!skip){
        router.use(`/${fileWithoutEXt}`, require(`./${fileWithoutEXt}`))
        console.log('---->', fileWithoutEXt)
    }
})

router.get('*', (req, res) => {
    res.status(404)
    res.send({error: 'not found'})
})

module.exports = router