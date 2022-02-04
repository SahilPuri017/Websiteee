const express= require("express")
const mongoose= require("mongoose")
const uri= require("./config/mongoURL")
const app= express()
const review= require("./modals/reviews")
const customer= require("./modals/contactSchema")

app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs")
app.use(express.static("static"))

mongoose.connect(uri, {useNewUrlParser : true, useUnifiedTopology: true}).then(()=>console.log("connected"))

app.get("/",(req, res)=>{
    var myreviews

    review.find({}, (err, data)=>{
        if (err) {
            console.log(err)
        }
        if (data) {
            console.log(data)
            myreviews= data;
        }
        res.render("index", {data:myreviews})
    })
})

app.get("/writeReview", (req,res)=>{
    res.render("writeReviews")
})

app.post("/submit", (req, res)=>{
    var fName=req.body.fName
    var lName=req.body.lName
    var reviews=req.body.review

   review({firstName: fName, lastName: lName, review : reviews }).save(function(err, doc){
        if (err){
            console.log(err)
        }
        res.redirect("/")
    })
})

app.get("/contact", (req, res)=>{
    res.render("contact")
})

app.post("/contact", (req, res)=>{
    var name=req.body.name
    var email=req.body.email
    var message=req.body.message

   customer({name: name, email: email, message : message }).save(function(err, doc){
        if (err){
            console.log(err)
        }
        res.redirect("/confirmation")
    })
})

app.get("/confirmation", (req, res)=>{
    res.render("confirmation")
})

const PORT= process.env.PORT || 5000
app.listen(PORT, ()=>console.log("Started on port: "+PORT))