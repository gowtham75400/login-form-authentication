export const emailValidation = (email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+S/;
    return emailRegex.test(email)
}
export const passValidator =(password)=>{
    const passwordRegex = /^(?=.?[A-Z](?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$/;
    return passwordRegex.test(password);
}