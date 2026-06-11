const Log = require("./logger");

(async () => {
    await Log(
        "backend",
        "info",
        "controller",
        "Backend started successfully"
    );
})();