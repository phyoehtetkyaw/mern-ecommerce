const router = require("express").Router()

const AuthController = require("../app/Auth")

router.post("/login", AuthController.login)

module.exports = router