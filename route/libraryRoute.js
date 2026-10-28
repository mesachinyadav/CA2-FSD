const express = require("express")
const router = express.Router()
const bookModel = require('../model/bookModel')


// add new book
router.post('/books',async(req,res)=>{
    try{
        const {title,author,category} = req.body
        if( !title.trim()){
            return res.status(401).json({
                message : "Provide required field"
            })
        }
        const newBook = await bookModel.create({
            title:title,
            author:author,
            category:category,
            availability:true,
            Date:Date.now()
        })
        
        res.status(201).json({
            message : "Book added successfully",
            book : newBook
        })
    }catch(err){
        return res.status(500).json({
            error : err,
            message : "Book not added"
        })
    }
})

// update book status
router.patch('/books/:id',async(req,res)=>{
    try{
        const id = req.params.id
        if(!id){
            return res.status(401).json({
                message : "provide id"
            })
        }
        const newAvail = req.body
        if(!newAvail.trim()){
            return res.status(401).json({
                message : "provide new status "
            }) 
        }
        const book = await bookModel.findById(id)
        book.availability = newAvail
        res.status(200).json({
            message : "status successfully updates"
        })
    }catch(err){
        return res.status(500).json({
            error : err,
            message : "not updated successfully"
        })
    }
})

router.get('/books',async(req,res)=>{
    try{
        const {page,limit} = req.body
        const skip = (page-1)*limit
        const books = await bookModel.find().skip(skip).limit(limit)
        const totalrecords = bookModel.countDocument()
        res.status(200).json({
            currentpage : books,
            totalpage : totalrecords
        })
    }catch(err){
        return res.status(500).json({
            error : err,
            message : "not fetched"
        })
    }

})

module.exports = router