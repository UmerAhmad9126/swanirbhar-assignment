const express = require('express');
const cors = require('cors');
const { connections } = require('./configs/db');
const userRouter = require('./routers/UserRouter');




const app = express();
app.use(cors());
app.use(express.json());


// Routes

app.use("/users", userRouter);



app.listen(8080, async () => {
    try {
        await connections
        console.log("Connected to DB")
    } catch (error) {
        console.log('error:', error);
    }
    console.log("Server listening");
})