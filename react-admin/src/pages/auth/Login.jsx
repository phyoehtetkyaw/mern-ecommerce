import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const login = e => {
        e.preventDefault()

        const data = {
            email: email,
            password: password
        }

        !validation(data) && loginApi(data)
    }

    const validation = data => {
        let errorFlag = false
        resetErrorStates()

        if (data.email === "") {
            setEmailError("Email is required!")
            errorFlag = true
        }
        
        if (data.password === "") {
            setPasswordError("Password is required!")
            errorFlag = true
        }

        return errorFlag
    }

    const resetErrorStates = () => {
        setEmailError("")
        setPasswordError("")
    }

    const loginApi = data => {
        axios({
            method: "post",
            url: "http://127.0.0.1:5000/api/admin/login",
            data: data
        })
        .then(res => {
            let status = res.data.status
            if (status === 200) return navigate("/")
        })
        .catch(err => {
            let status = err.response.data.status
            
            if (status === 400) {
                resetErrorStates()
                
                let validate = err.response.data.validate
                "email" in validate && setEmailError(validate.email)
                "password" in validate && setPasswordError(validate.password)
            }
        })
    }

    return (
        <div className="bg-violet-800 h-screen flex justify-center items-center">
            <div className="bg-white w-4/12 p-10 rounded-md shadow-xl">
                <h1 className="font-bold text-center text-4xl">Log In</h1>
                <form method="post" onSubmit={login}>
                    <div className="mb-5">
                        <label className="font-bold block mb-1.5">Email <span className="text-red-500">*</span></label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="email" className="border-2 border-gray-500 w-full rounded-sm p-1" />
                        { emailError !== "" && <span className="text-red-500 text-sm">{emailError}</span> }
                    </div>
                    <div className="mb-5">
                        <label className="font-bold block mb-1.5">Password <span className="text-red-500">*</span></label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" className="border-2 border-gray-500 w-full rounded-sm p-1" />
                        { passwordError !== "" && <span className="text-red-500 text-sm">{passwordError}</span> }
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" name="submit" className="bg-violet-800 px-6 py-1.5 text-white rounded-sm hover:bg-violet-500 font-sm">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login