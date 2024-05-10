const express = require("express");
const get_live_url = require("./get_live_url");
const app = express();
const PORT = 9090;

app.get("/live/:tid/:id", async (req, res) => {
  const tid = req.params.tid
  const id = req.params.id
  const data = await get_live_url(`?act=play&tid=${tid}&id=${id}`);
  res.setHeader("Content-Type", "text/plain");
  res.send(data);
});


app.get("/m3u", async (req, res) => {
  const data = `频道1,http://192.168.88.3:9090/live/ws/1\r\n频道2,http://192.168.88.3:9090/live/ws/2`;
  res.setHeader("Content-Type", "text/plain");
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
