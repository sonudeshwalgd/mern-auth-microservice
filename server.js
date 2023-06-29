const {app} =require("./app.js")
const config=require("./config")
config.mongooseConfig()

app.listen(config.envConfig.PORT,()=>console.log("app started at "+config.envConfig.PORT))
