import express from "express"
import mongoose from "mongoose"
import User from "./models/Item.js";
const app = express();
const PORT =  5000;

mongoose.connect("mongodb+srv://bidhu1024av:xtcExB158Ura1Wod@cluster0.ouyhqmw.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.get("/", async (req, res) => {
  try {
    const items = await User.find();
    res.json(items);
    console.log(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));