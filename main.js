import express from "express";
import blog from "./routes/blog.js";
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

app.post("/", (req, res) => {
  res.send("Post Request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
