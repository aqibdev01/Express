import express from "express";
import mongoose from "mongoose";
import { Todo } from "./models/Todo.js";
import blog from "./routes/blog.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/blog", blog);
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  let siteName = "Trail Express";
  let search = "Search Here";
  res.render("index", { siteName: siteName, search: search });
});

app.get("/", (req, res) => {
  const todo = new Todo({
    title: "1st Insertion, Hey!",
    desc: "Here will go the description of Todo",
    isDone: false,
  });
  todo.save()
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`This application is running on port ${port}`);
});
