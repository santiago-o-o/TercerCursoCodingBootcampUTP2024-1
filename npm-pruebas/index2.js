import express from "express"

const app = express();
app.get("/", ( req ,res ) => res.send("hello world"));
app.get("/nosotros", ( req ,res ) => res.send("nosotros"));
app.get("/contactos", ( req ,res ) => res.send("contactos"));

app.listen(3000);
console.log("server is listen on port",3000);

