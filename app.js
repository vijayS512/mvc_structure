// import express from "express"
// import mongoose from "mongoose";
// const app = express();



// export default app

import express from "express"
import cors from "cors"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGINE,
    credentials:true
}))


//router import
//user route import

import userRouter from "./controller/user.controller.js"

// routes declaretion 

app.use("/app/user",userRouter)
// localhost:4000/api/users


export default app