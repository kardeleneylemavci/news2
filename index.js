//const { Router } = require("express");
//const express=require("express");
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import Users from "./model/users.js";
import Stamps from "./model/stamps.js";
import News from "./model/news.js";

mongoose.connect("mongodb://localhost/course");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "hata oluştu"));
db.once("open", () => {
    console.log("connection ok");
});
const urlencodedParser=bodyParser.urlencoded({
    extended:false
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public")); //kullanıcının ulaşabileceği güvenlik zaafiyatına sebep olmayacak herşey burda saklanır
app.listen(5000, () => {
    console.log("server 5000 portunu çalıştır")
});

app.get("/", (req, res) => {
    console.log("/path")
    //res.send("welcome myapp")
    res.status(200);
    //res.sendFile(__dirname+"/index.html")
    //res.sendFile("index.html");
});

app.get("/about", (req, res) => {
    let aboutArray = {
        name: "kurs programı 2021",
        content: "node js",
        range: "2021-10-01 2022-03-30",
    }
    res.json(aboutArray)
});

app.post("/newsSave",urlencodedParser, (req, res, next) => {
    console.log(req.body);
    let getData = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    }
    const registeredNews = new News(getData);
    registeredNews.save((err, item) => {
        if (err) {
            next(err)
        } else {
            res.send(item)
        }
    });
});
app.get("/newsList", (req, res,next) => {
     News.find({}, function (err, result) {
        if (err) {
            next(err)
        } else { res.send(result) }
    });
});

app.post("/postdata",urlencodedParser, (req, res) => {

    console.log(req.body);
    //res.send("ok");
    //return false;
    let userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    }


    const user = new Users(userData); //importla bağ oluşturmayı sağladı.
    user.save((err, user) => {
        if (err) {
            console.log(err)
        } else {
            res.send(user)
        }
    });
});




app.get("/search-user", (req, res) => {
    let query = {
        name: req.query.name
    }
    Users.find(query, (err, users) => {
        if (err) {
            console.log(err)
        } else {
            res.send(users)
        }
    })

});

app.post("/eklenti", urlencodedParser,(req, res) => {
    let deneyData = {
        stampName: req.body.stampName,
        stampYear: req.body.stampYear,
        stampPrice: req.body.stampPrice,
    }
    const pul = new Stamps(deneyData);
    pul.save((err, pul) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(pul)
        }
    });
});

app.get("/search-stamp", (req, res) => {
    let x = {
        stampYear: req.query.stampYear
    }
    Stamps.find(x, (err, stamps) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(stamps)
        }
    })
})
app.post("/newuserdata",urlencodedParser, (req, res) => {

    let newUserData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    const newUser = new NewUsers(newUserData);
    newUser.save((err, user) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(newUser)
        }
    });
});





