const mongoose =require("mongoose")

const reviewSchema = mongoose.Schema({
      firstName: String,
      lastName: String,
      review: String
})

module.exports =mongoose.model("Review", reviewSchema)