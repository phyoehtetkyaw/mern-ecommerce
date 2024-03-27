exports.login = (req, res) => {
    if (req.method == "POST") {
        const data = {
            email: req.body.email,
            password: req.body.password
        }

        if (!validate(data, res)) {
            res.status(200).json({
                status: 200,
                message: "success"
            })
        }
    }
}

const validate = (data, res) => {
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
        res.status(400).json({
            status: 400,
            message: "fail",
            validate: errors
        })
    }

    return errorFlag
}