require("dotenv").config();
const express = require("express");
const path = require("path");
const resumepost = require("./Cruds/resumepost");
const cors = require("cors");
const database = require("./My Database/database");
const resumeget = require("./Cruds/resumeget");
const aboutpage = require("./Cruds/aboutpage");
const aboutpageget = require("./Cruds/aboupageget");
const servicepost = require("./Cruds/Service/servicepost");
const serviceget = require("./Cruds/Service/serviceget");
const projectpost = require("./Cruds/My works/projectpost");
const projectget = require("./Cruds/My works/projectget");
const nodemailer = require("./Cruds/nodemailer");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

database();

app.use(cors({
   origin: 'https://my-portfolio-sooty-iota-53.vercel.app/', 
  credentials: true,
}));
app.use("/resumepost", resumepost);
app.use("/resumeget", resumeget);


app.use("/aboutupdate" , aboutpage)
app.use("/aboutpageget" , aboutpageget)

app.use("/servicepost" , servicepost)
app.use("/serviceget", serviceget)

app.use("/projectpost", projectpost)
app.use("/projectget", projectget)

app.use("/nodemailer" , nodemailer)


app.use("/upload", express.static(path.join(__dirname, "upload")));

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
