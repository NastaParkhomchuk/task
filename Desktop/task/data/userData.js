const users = {
    validUser: {
        username: "standard_user",
        password: "secret_sauce",
    },
    performanceUser: {
        username: "performance_glitch_user",
        password: "secret_sauce",
    },
    lockedOutUser: {
        username: "locked_out_user",
        password: "secret_sauce",
    },
    emptyCredentials: {
        username: "",
        password: "",
    },
    usernameOnly: {
        username: "standard_user",
        password: "",
    }
    
};

module.exports = users;
