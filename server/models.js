const mongoose = require('mongoose');

const chapterSchema =  mongoose.Schema({
  userId: String,
  chapterNum: Number,
  title: String,
  content: String,
});

chapterSchema.methods.serialize = function(){
  return{
    id: this._id,
    userId: this.userId,
    chapterNum: this.chapterNum,
    title: this.title,
    content: this.content
  };
};

const ChapterList = mongoose.model("ChapterList", chapterSchema);

module.exports = { ChapterList };
