// DEPENDENCIES
import app from "./app";

// CONFIGURATION
import dotenv from "dotenv";
dotenv.config();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
