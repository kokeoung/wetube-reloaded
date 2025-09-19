import "./db";
import "./models/Video";
import app from "./server";

const PORT = 4000;

const handleListening = () => {
    return console.log(`✅ Let's Go!! => http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);