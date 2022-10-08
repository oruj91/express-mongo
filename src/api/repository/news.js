const News = require('../model/news')

exports.getList = async () => {
  return News.find()
}

exports.getOne = async (newsId) => {
  return News.findById(newsId).exec()
}

exports.post = async (data) => {
  const news = new News(data)
  return await news.save()
}

// mongoDb.collection('news').insertOne(news, function (err, result) {
//   if (err) {
//     console.error(err)
//     return res.sendStatus(500)
//   }
//   res.send(news)
// })
