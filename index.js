const express = require("express");
const swaggerUI = require("swagger-ui-express")
const YAML = require("yamljs")
const swaggerFile = YAML.load("./studentApi.yaml")
const port = process.env.PORT || 8000
const app = express();
const studentRouter = require("./routers/studentRouter")

app.use(express.json())
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile) )

app.use("/student", studentRouter)


app.listen(port, (req,res)=>{
    console.log(`Server started successfully on port ${port}`)
})






