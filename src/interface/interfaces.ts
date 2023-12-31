import axios from "axios"
import { RegisterUser } from "../page/register/Register"

const axiosInstance = axios.create({
	baseURL: "http://localhost:5500/",
	timeout: 3000,
})

axiosInstance.interceptors.response.use(
	response => {
		return response
	},
	error => {
		return error.response
	}
)

export async function login(username: string, password: string) {
	return await axiosInstance.post("/user/login", { username, password })
}

export async function register(registerUser: RegisterUser) {
	return await axiosInstance.post("/user/register", registerUser)
}

export async function registerCaptcha(email: string) {
	return await axiosInstance.get("/user/register-captcha", { params: { address: email } })
}
