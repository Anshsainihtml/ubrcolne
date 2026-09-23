import userModel from "../models/user.model.js";
import { createUser } from '../services/user.service.js';
import { validationResult } from "express-validator";

export const registerUser = async (req, res, next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const { fullname, email, password } = req.body;

    const hashPassword = await userModel.hashPassword(password);

    const user = await createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword
    });

    const token = user.generateAuthToken();

    const userObj = user.toObject();
    delete userObj.password;

res.status(201).json({ token, user: userObj });

}
