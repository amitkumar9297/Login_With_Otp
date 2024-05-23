const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRECT_KEY = "48LawsOfPower"

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Not Valid Email")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
});

// hash password
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12)
    }
    next()
});

// generate Token
userSchema.methods.generateAuthtoken = async function () {
    try {
        // hum payload pass krte hai like email, _id , etc.. in jwt.sign({payload},SECRECT_KEY,{})
        let newtoken = jwt.sign({ _id: this._id }, SECRECT_KEY, {
            expiresIn: "1d"
        })

        this.tokens = this.tokens.concat({ token: newtoken });
        await this.save();
        return newtoken;


    } catch (err) {
        res.status(400).json(err);
    }
}


// schema model created
const users = new mongoose.model("users", userSchema);

module.exports = users;