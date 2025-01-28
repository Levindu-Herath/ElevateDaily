//api/users/register
//UNPROTECTED
const registerUser = (req, res, next) => {
    res.json("Register user");
};


//api/users/login
//UNPROTECTED
const loginUser = (req, res, next) => {
    res.json("Login user");
};

//api/users/:id
//PROTECTED
const getUser = (req, res, next) => {
    res.json("User Profile");
};

//api/users/update-avatar
//PROTECTED
const updateAvatar = (req, res, next) => {
    res.json("Update Profile Picture");
};

//api/users/update-user
//PROTECTED
const updateUser = (req, res, next) => {
    res.json("Update User");
};

//api/users/authors
//UNPROTECTED
const getAuthors = (req, res, next) => {
    res.json("Get all users/authors");
};

module.exports = {
    registerUser,
    loginUser,
    getUser,
    updateAvatar,
    updateUser,
    getAuthors
}
