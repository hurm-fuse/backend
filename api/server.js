const app = require("./src/app.js");

// Pehle server start karo
const server = app.listen(1000, () => {
    console.log("Server is running on port 1000");
});