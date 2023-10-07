

const user = () => {
    if (localStorage.getItem("user"))
        return JSON.parse(localStorage.getItem('user'));
    else return null;
};
const login = async (email, password) => {
  
};

const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
};



export default { login,logout,user }