const users = [
    {
            id : 1,
            name : chamod,
    },
    {
        id : 2,
        name : kasun,
    },
];

const getUsers = (cb) => {
    cd(users);
};

const getUserById = (id, cb) => {
    const user = users.find(user => user.id == id);
    cb(user);
};

exports.getUsers = getUsers;
exports.getUserById = getUserById;
