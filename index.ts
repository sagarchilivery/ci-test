import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("get API hit successfully");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("heyyyy");
  console.log(`Server is running on http://localhost:${port}`);
});
