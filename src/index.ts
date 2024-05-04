import app from "./app.js"
import connectToDatabase from "./db/connections.js"

//connection and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
.then(()=>{
app.listen(5000, ()=> console.log("server open"));
})
.catch((err) => console.log(err));

