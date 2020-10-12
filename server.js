// Dependencies
const express = require("express");
const inquirer = require("inquirer");
const fs = require("fs");

const app = express();
const PORT = 8080;

// Data
// ================================================
let characters = [
{
    routeName: ellie,
    name: "Ellie",
    class: "Monk",
    level: 6,
    ac: 16,
    passivePerception: 12
},{
    routeName: lindariel,
    name: "Lindariel",
    class: "Ranger/Rogue",
    level: 6,
    ac: 17,
    passivePerception: 16
},{
    routeName: psyche,
    name: "Psyche",
    class: "Sorcerer",
    level: 6,
    ac: 12,
    passivePerception: 11
},{
    routeName: tunuz,
    name: "Tunuz",
    class: "Paladin",
    level: 6,
    ac: 17,
    passivePerception: 6
}];

// Routes
// ======================================
app.get("/", function(req,res) {
    res.send("Welcome to my character tracker")
});

app.get("/ellie", function(req,res) {
    res.json(ellie);
});

app.get("/lindariel", function(req,res) {
    res.json(lindariel);
});

app.get("/psyche", function(req,res) {
    res.json(psyche);
});

app.get("/tunuz", function(req,res) {
    res.json(tunuz);
});




// Listener
// ==================================
app.listen(PORT, function() {
    console.log("App is listening on PORT" + PORT)
})