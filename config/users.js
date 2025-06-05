const users = {
    defaultUser: {
        username: 'test@fake.address.com',
        password: 'Passw0rd'
    },
    windowsAuth: {
        username: 'marc',
        password: 'regishannah1956'
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