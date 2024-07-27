const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken
};

async function create(req, res) {
    try {
        // add the user to the database
        const user = await User.create(req.body);
        // toekn will be a string
        const token = createJWT(user);
        // yes, we can use res.json to send back just a string
        // the client code needs to take this into consideration
        res.json(token);
    } catch (err) {
        // client will check for non-2xx status code
        // 400 = bad request
        res.status(400).json(err);
        // // baby step...
        // res.json({
        //     user: {
        //         name: req.body.name,
        //         email: req.body.email,
        //     }
        // });
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
}

function createJWT(user) {
    return jwt.sign(
        // data paylod
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}

function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
}