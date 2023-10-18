const { Schema, model } = require("mongoose");
const teacherSchema = new Schema(
    {
        employeedni: {
            type: Number,
            require: true,
            unique: true,
        },
        name: String,
        lastname: String,
        degree: String,
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = model("teacher", teacherSchema);
