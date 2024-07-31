module.exports = function (req, res, next) {
    console.log('User is not logged in');
    // status code of 401 is Unauthorized
    if (!req.user) return res.status(401).json('Unauthorized');
    // A OK
    console.log('User is logged in:', req.user);
    next();
};