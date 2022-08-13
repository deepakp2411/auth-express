const UserController = (req,res) =>{
    res.render("index")
}
const registController = (req,res) =>{
    res.render("registration")
}
const loginController = (req,res) =>{
    res.render("login")
}



export {UserController,registController,loginController}