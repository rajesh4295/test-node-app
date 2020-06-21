const express = require("express");
const app = express();

const PORT = process.env.port || 4000;
const envName = process.env.envName || "Local";

const logger = (req, res, next) => {
    console.log(`${Date().toString()} ${req.method} ${req.url}`);
    next();
}

app.use(logger);

app.get("/", (req, res) => {
    res.send(`
        <h4>Server is up and running.<br /><br />
        Environment: <b>${envName}</b><br />
        Hostname: <b>${req.headers.host}</b><br />
        Port: <b>${PORT}</b></h4>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on ${envName} environment and Port: ${PORT}`);
});