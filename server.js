const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const path = require('path');
const passport = require('passport');
const morgan = require('morgan');

const {router: storytellersRouter} = require('./client/src/storytellers');
const {router: authRouter, localStrategy, jwtStrategy} = require('./server/authStorytellers');
mongoose.Promise = global.Promise;

const {PORT, DATABASE_URL} = require("./server/config");
const {ChapterList} = require("./server/models");
const {Storyteller} = require("./client/src/storytellers/models");

const app = express();

app.use(morgan('common'));

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

//user api
passport.use(localStrategy);
passport.use(jwtStrategy);

app.use('/api/storytellers/', storytellersRouter);
app.use('/api/auth/', authRouter);

const jwtAuth = passport.authenticate('jwt', {session: false});

app.get('/api/protected', jwtAuth, (req, res) => {
  console.log('Login GET worked!');
   res.json({ data:'success' });
});

app.post('/api/storytellers/', (req, res) => {
  console.log(req.body);
  let storytellerData = new Storyteller(req.body);
  storytellerData.save()
  .then(member => {
    res.send(`Info passing through just fine: Username: ${req.body.username} Member name: ${req.body.firstName} ${req.body.lastName}, Email: ${req.body.email}`);
  })
  .catch(err => {
    res.status(400).send("unable to add the new member to the database.");
  });
});

app.get("/api/ChaptersForStory/:userId", (req, res) => {
  ChapterList.find({userId: req.params.userId})
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

app.post('/api/ChaptersForStory/all', (req, res) => {
  console.log(req.body);
  let chapterData = new ChapterList(req.body);
  chapterData.save()
  .then(item => {
    res.send(`Info passing through just fine: Chapter: ${req.body.chapterNum} Title: ${req.body.title} Content: ${req.body.content}`);
  })
  .catch(err => {
    res.status(400).send("unable to add the new chapter to the database.");
  });
});

app.delete('/api/FinalizeTheStory/:id', (req, res) => {
  ChapterList.findByIdAndRemove(req.params.id)
  .then(chapterlist => res.status(204).end())
  .catch(err => res.status(500).json({message: 'Something went wrong with app.delete area'}));
});

app.put('/api/FinalizeTheStory/:id', (req, res) => {
  if(!(req.params.id && req.body.id && req.params.id === req.body.id)){
    const message =
      `Request path id (${req.params.id}) and request body id ` + `(${req.body.id}) must match`;
      console.error(message);
      return res.status(400).json({message: message});
  }
  const toUpdate = {};
  const updateableFields = ["chapterNum", "title", "content"];
  updateableFields.forEach(field =>{
    if(field in req.body){
      toUpdate[field] = req.body[field];
    }
  });
  ChapterList
    .findByIdAndUpdate(req.params.id, {$set: toUpdate})
    .then(chapterlist => res.status(204).end())
    .catch(err => res.status(500).json({message: "Internal server error"}));
});

app.get('/api/*', (req, res) => {
  res.json({ok: true});
});
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
let server;

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

if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };
