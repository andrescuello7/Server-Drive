const Router = require('express').Router()
const Controllers = require('../controllers/homeController')

Router.get('/', Controllers.SaveGet)
Router.post('/images/upload', Controllers.SavePost)

module.exports = Router;