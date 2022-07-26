// require('dotenv').config()
var jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT || 'Ashish';

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    console.log(token)
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        console.log(data);
        req.user = data.users;//sending the user in the request to the client side
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token 2" })
    }

}

module.exports = fetchuser;