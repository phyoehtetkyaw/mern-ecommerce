const router = require("express").Router()

const AuthController = require("../app/controllers/Auth")

router.post("/login", AuthController.login)

module.exports = router