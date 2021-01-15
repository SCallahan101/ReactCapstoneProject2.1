const mongoose = require('mongoose');

// old connection - 'mongodb://ReactUser123:ReactPw123@ds259207.mlab.com:59207/react-cap-project-db'
mongoose.connect("mongodb+srv://ReactUser123:ReactPw123@react-cap-project-db.ay47g.mongodb.net/react-cap-project-db?retryWrites=true&w=majority", {userNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection issue error:'));

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  chapterNum: Number,
  title: String,
  content: String,
});
  let ChaptersForStory = mongoose.model('ChaptersForStory', chapterSchema);

const addChapter = (chapterNum, title, content) => {
  let newChapter = new ChaptersForStory({chapterNum, title, content});
  newChapter.save();
}

const getAllChapters = (res) => {
  ChaptersForStory.find({}, function(err, chapters) {
    let chaptersMap = {};
    console.log("testing " + chapters);
    chapters.forEach(function(chapter) {
      chaptersMap[chapter] = chapter;
    });

    res.send(chaptersMap);
  });
}

module.exports = {
  addChapter,
  getAllChapters
}
