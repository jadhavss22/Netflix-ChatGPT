export const checkValidate = (email,password)=>{
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email)

const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,15}$/.test(password)

if(!isEmailValid) return "Email is not valid"
if(!isPasswordValid) return "Password is not valid"
}
