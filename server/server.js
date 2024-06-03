const app = require("./app");

require("dotenv").config();
const connectDB = require("../server/db/config");

connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT,() => {
    console.log(`Server is running ${process.env.NODE_ENV} on port ${PORT}`);
});
