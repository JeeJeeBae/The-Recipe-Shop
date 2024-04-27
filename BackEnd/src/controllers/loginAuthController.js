const LoginAuthModel = require("../models/LoginAuthModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = async (req, res) => {
    try {
        const users = await LoginAuthModel.find();

        const outputUsersArray = [];

        for (const user of users) {
            outputUsersArray.push({
                email: user.email,
                staffId: user.staffId,
                role: user.role,
            });
        }

        res.json(outputUsersArray);
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ status: "error", msg: "error getting users" });
    }
};

const register = async (req, res) => {
    try {
        //check for duplicates
        const userAuth = await LoginAuthModel.findOne({
            email: req.body.email,
        });
        if (userAuth) {
            return res
                .status(400)
                .json({ statue: "error", msg: "duplicate email" });
        }

        const hash = await bcrypt.hash(req.body.password, 12);
        await LoginAuthModel.create({
            email: req.body.email,
            hash,
            // staffId: req.body.staffId,
            role: req.body.role || "manager",
        });

        res.json({ status: "ok", msg: "user created" });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ status: "error", msg: "invalid registration" });
    }
};

const login = async (req, res) => {
    try {
        // check if the email is already registered
        const userAuth = await LoginAuthModel.findOne({
            email: req.body.email,
        });
        if (!userAuth) {
            console.log("in usernot authorized statement!");
            return res
                .status(400)
                .json({ status: "error", msg: "not authorized" });
        }

        const result = await bcrypt.compare(req.body.password, userAuth.hash);

        if (!result) {
            console.error("email or password error");
            return res
                .status(401)
                .json({ status: "error", msg: "login failed" });
        }

        const claims = {
            email: userAuth.email,
            staffId: userAuth.staffId,
            role: userAuth.role,
        };

        const access = jwt.sign(claims, process.env.ACCESS_SECRET, {
            expiresIn: "20m",
            jwtid: uuidv4(),
        });

        console.log(`test: ${access}`);
        const refresh = jwt.sign(claims, process.env.REFRESH_SECRET, {
            expiresIn: "30d",
            jwtid: uuidv4(),
        });

        res.json({ access, refresh });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ status: " error", msg: "login failed" });
    }
};

// refresh the token
// const refresh = async (req, res) => {
//     try {
//         const decoded = jwt.verify(
//             req.body.refresh,
//             process.env.REFRESH_SECRET
//         );

//         const claims = {
//             email: decoded.email,
//             role: decoded.role,
//         };

//         const access = jwt.sign(claims, process.env.ACCESS_SECRET, {
//             expiresIn: "20m",
//             jwtid: uuidv4(),
//         });

//         res.json({ access });
//     } catch (error) {
//         console.error(error.message);
//         res.status(400).json({ status: "error", msg: "error refreshing token " });
//     }
// };

module.exports = { getAllUsers, register, login };
