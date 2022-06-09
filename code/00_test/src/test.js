var user;
(function (user) {
    var userName = /** @class */ (function () {
        function userName() {
            console.log('我是userName');
        }
        return userName;
    }());
    user.userName = userName;
    var userPwd = /** @class */ (function () {
        function userPwd() {
            console.log('我是userInfo');
        }
        return userPwd;
    }());
    user.userPwd = userPwd;
})(user || (user = {}));
var userInfo = /** @class */ (function () {
    function userInfo() {
        new user.userName();
        new user.userPwd();
    }
    return userInfo;
}());
new userInfo();
