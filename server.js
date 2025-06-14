require("dotenv").config();
const cors = require("cors");
const express = require("express");
const path = require("path");
const resumepost = require("./Cruds/resumepost");
const database = require("./My Database/database");
const resumeget = require("./Cruds/resumeget");
const aboutpage = require("./Cruds/aboutpage");
const aboutpageget = require("./Cruds/aboupageget");
const servicepost = require("./Cruds/Service/servicepost");
const serviceget = require("./Cruds/Service/serviceget");
const projectpost = require("./Cruds/My works/projectpost");
const projectget = require("./Cruds/My works/projectget");
const nodemailer = require("./Cruds/nodemailer");
const projectdelete = require("./Cruds/My works/projectdelete");
const projectupdate = require("./Cruds/My works/projectupdate");
const signup = require("./Authentication/signup");
const login = require("./Authentication/login");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

database();

app.use(cors());

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Backend is live");
});


app.use("/resumepost", resumepost);
app.use("/resumeget", resumeget);

app.use("/aboutupdate", aboutpage);
app.use("/aboutpageget", aboutpageget);

app.use("/servicepost", servicepost);
app.use("/serviceget", serviceget);

app.use("/projectpost", projectpost);
app.use("/projectget", projectget);
app.use("/projectdelete" , projectdelete)
app.use("/projectupdate" , projectupdate)



app.use("/signup", signup)
app.use("/login" , login)

app.use("/nodemailer", nodemailer);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
