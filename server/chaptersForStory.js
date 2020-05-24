const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  userId: String,
  chapterNum: Number,
  title: String,
  content: String,
});
  let ChaptersForStory = mongoose.model('ChaptersForStory', chapterSchema);

const addChapter = (userId, chapterNum, title, content) => {
  let newChapter = new ChaptersForStory({userId, chapterNum, title, content});
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
