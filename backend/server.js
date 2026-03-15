const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Home Food Startup Server Running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
