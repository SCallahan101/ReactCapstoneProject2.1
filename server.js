const express = require('express');
// const bodyParser = require('body-parser');
const mongoose = require("mongoose");
// const chaptersRepo = require('./server/chaptersForStory');
mongoose.Promise = global.Promise;


const {PORT, DATABASE_URL} = require("./server/config");
const {ChapterList} = require("./server/models");

const app = express();
app.use(express.json());

app.get("/api/ChaptersForStory/all", (req, res) => {
  ChapterList.find()
  .then((chapterlists, err) => {
    console.log(err);
    console.log(chapterlists);
    res.json({
      chapterlists: chapterlists.map(chapterlist => chapterlist.serialize())
    });
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({message: "Something Wrong"});
  });
});
app.get('/api/*', (req, res) => {
  res.json({ok: true});
});
app.use("*", function(req, res) {
  res.status(404).json({ message: "Not Found" });
});

// closeServer needs access to a server object, but that only
// gets created when `runServer` runs, so we declare `server` here
// and then assign a value to it in run
let server;

// this function connects to our database, then starts the server
function runServer(databaseUrl, port = PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(
      databaseUrl,
      err => {
        if (err) {
          return reject(err);
        }
        server = app
          .listen(port, () => {
            console.log(`Your app is listening on port ${port}`);
            resolve();
          })
          .on("error", err => {
            mongoose.disconnect();
            reject(err);
          });
      }
    );
  });
}

// this function closes the server, and returns a promise. we'll
// use it in our integration tests later.
mongoose.set('debug', true);
function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log("Closing server");
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };
// const app = express();
// const PORT = process.env.PORT || 4747;
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
// app.get('/api/ChaptersForStory/all', (req, res) => {
//   chaptersRepo.getAllChapters(res);
// });
//
// app.get('/api/*', (req, res) => {
//   res.json({ok: true});
// });
//
// // app.get('/api/hello', (req, res) => {
// //   res.send({ express: 'Hello From Express' });
// // });
//
// // app.post('/api/world', (req, res) => {
// //   console.log(req.body);
// //   res.send(
// //     `I received your POST request. This is what you sent me: ${req.body.post}`,
// //   );
// // });
//
// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
//
// module.exports = {app};
