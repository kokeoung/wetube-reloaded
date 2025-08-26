import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
    return res.send("<h1>I Love u</h1>");
}

const handleLogin = (req, res) => {
    return res.send({ message : "Login here" });
}

app.get("/", handleHome);
app.get("/login", handleLogin);

app.listen(PORT, () => 
    console.log(`🐱 Let's go! => http://localhost:${PORT}`));;
