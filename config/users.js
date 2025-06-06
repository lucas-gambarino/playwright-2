const users = {
    defaultUser: {
        username: process.env.DEFAULT_USER_USERNAME,
        password: process.env.DEFAULT_USER_PASSWORD
    },
    windowsAuth: {
        username: process.env.WINDOWS_AUTH_USERNAME,
        password: process.env.WINDOWS_AUTH_PASSWORD
    }
};

// Função para obter as credenciais de um usuário específico
function getUserCredentials(userType = 'defaultUser') {
    return users[userType] || users.defaultUser;
}

module.exports = {
    users,
    getUserCredentials
}; 