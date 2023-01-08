import express from "express";
import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  isProjectManager: Boolean,
  registrationTime: {
    type: Date,
    default: Date.now,
  },
});

let userModel = mongoose.model("user", userSchema);

let app: express = express();
let route = app.router();
