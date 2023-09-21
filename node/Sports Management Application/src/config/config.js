const joi = require('joi');
const dotenv = require('dotenv');

dotenv.config();

const envVarSchema = joi.object({
    PORT:joi.number().default(3000),
    MONGODB_URL:joi.string().trim().description("Mongodb url"),
});
const {value:envVars,erroe} = envVarSchema
    .prefs({errors:{label:"key"}})
    .validate(process.env);

    module.exports = {
        port:envVars.PORT,
        mongodb:{
            url:envVars.MONGODB_URL,
            options:{
                useNewUrlParser:true,
                useUnifiedTopology:true,
            },
        },
    };