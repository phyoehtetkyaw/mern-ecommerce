const User = require("../models/User")

exports.login = async (req, res) => {
    if (req.method == "POST") {
        const data = {
            email: req.body.email,
            password: req.body.password
        }

        if (!validateInput(data, res)) {
            const user = await User.findOne({email: data.email})
            if (!validateCredential(data, res, user)) {
                res.status(200).json({
                    status: 200,
                    message: "success"
                })
            }
        }
    }
}

const validateInput = (data, res) => {
    let errorFlag = false
    let errors = {}

    if (data.email == "") {
        errors["email"] = "Email is required!"
        errorFlag = true
    }

    if (data.password == "") {
        errors["password"] = "Password is required!"
        errorFlag = true
    }
    
    if (errorFlag) {
        errorFlag = false
        res.status(400).json({
            status: 400,
            message: "fail",
            validate: errors
        })
    }

    return errorFlag
}

const validateCredential = (data, res, user) => {
    let errorFlag = false
    let errors = {}

    if (user == null) {
        errors["email"] = "Email is invalid!"
        errorFlag = true
    }

    if (user != null && user.password != data.password) {
        errors["password"] = "Password is invalid!"
        errorFlag = true
    }

    if (errorFlag) {
        errorFlag = false
        res.status(400).json({
            status: 400,
            message: "fail",
            validate: errors
        })
    }
    
    return errorFlag
}