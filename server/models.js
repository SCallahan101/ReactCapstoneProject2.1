const mongoose = require('mongoose');

const chapterSchema =  mongoose.Schema({
  chapterNum: Number,
  title: String,
  content: String,
});

chapterSchema.methods.serialize = function(){
  return{
    id: this._id,
    chapterNum: this.chapterNum,
    title: this.title,
    content: this.content
  };
};

const ChapterList = mongoose.model("ChapterList", chapterSchema);

module.exports = { ChapterList };
