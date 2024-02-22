// DEPENDENCIES
import app from "./app";
import dotenv from "dotenv";
import { serverDebugger } from "./utils/debugConfig";

// CONFIGURATION
dotenv.config();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

// LISTEN
app.listen(PORT, () => {
    serverDebugger(`Listening on port ${PORT}`);
});
