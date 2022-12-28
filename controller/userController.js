var users = [{"id": 37.13622705296211, "name": "user1", "username": "user1", "password": "123456", "email": "user1.user1@gmail.com"}, 
    {"id": 68.19941612133216, "name": "user2", "username": "user2", "password": "123456", "email": "user2.user2@gmail.com"}]

const rgex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const response = require("../helper/responses");
var userId

const getUsers= (req, res) => { 
    return response.success(res, 'all users', [...users])
}
const register = (req, res) => {

  const { name, username, email, password, passwordConfirmation } = req.body;

  if (name.length < 3 || username.length < 3) 
    return response.failedWithMessage(res, "Name and username should be more than 3 charchters")

  if (!String(email).toLowerCase().match(rgex))
    return response.failedWithMessage(res, "Email is not vaild")

  if (password.length < 6 || password != passwordConfirmation) 
    return response.failedWithMessage(res, "Password should be 6 charachters or passwrod and passsword confiramtion not match")

    while(true){
        const uniqeId = Math.random() * 100
        const user = users.find(user => user.id == uniqeId)
        if(!user) { 
            users.push({id: uniqeId, name , username, password, email})
            break
        }}
    return response.success(res ,"User registerd successfully", users[users.length -1])
};

const login =(req, res) => { 
    const {username, password} = req.body
    const user = users.find(user => user.username == username && user.password == password )
    
    if (!user ) return response.failedWithMessage(res, 'User not found')
    else {
        userId = user.id
        return response.success(res, 'logedin successfully' , [user])}
}

const getProfile = (req, res) => { 
    const user = users.find(user => user.id == userId )
    if (!user ) return response.failedWithMessage(res, 'User not found')
    else {
        return response.success(res, 'logedin successfully' , [user])}

}

module.exports = {
  register,
  getUsers,
  login,
  getProfile
};
