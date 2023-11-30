const express = require("express")
const cors = require("cors")

const {route} = require("./Route/Route");

const app = express();

app.use(cors({
    origin:"*"
}))

app.use("/dataapi",route)

app.listen(7000,() => {
    try{
        console.log("server starting");
    }
    catch{
        console.log("error server");
    }
})
