const app = require("./app");
require("./database");

app.listen(app.get("PORT"), () => {
    console.log(`================[SERVER PORT]================\nServer on port: ${app.get("PORT")}\nURL: http://localhost:${app.get("PORT")}`);
});
