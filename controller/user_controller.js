const User = require('../model/user_model');

async function signin(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password });
        if (user) {
            console.log(user);
            res.json(user);
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function signup(req, res) {
    try {
        console.log(req.body);
        const query  = User.where({ email: req.body.email });
        const existingUser = await query.findOne();
        console.log(existingUser);

        if (existingUser) {
            res.status(409).json({ error: 'Email already exists' }); // HTTP status code 409 for conflict
        } else {
            const newUser = new User({
                email: req.body.email,
                password: req.body.password,
                fname: req.body.fname,
                lname: req.body.lname,       
            });
            const savedUser = await newUser.save();
            console.log(savedUser);
            res.json(savedUser);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}
module.exports = {
    signin,
    signup,
};
