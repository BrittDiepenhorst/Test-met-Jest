// // #1 
// const functions = {
//     add: (num1, num2) => num1 + num2
// }

// #2 #3 
const functions = {
    isNull: function () {
        return null;
    },
    checkValue: function (x) {
        return x;
    },
    createUser: function () {
        const user = {
            firstName: 'Brad'
        };
        user['lastName'] = 'Traversy';
        return user;
    }
};

module.exports = functions;