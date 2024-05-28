const router = require("express").Router();
let Shop = require("../models/shop");
const express = require('express');
const path = require('path')
const multer= require('multer')


const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "../frontend/public/uploads")
    },
    filename: (req, file, callback) => {
        callback(null, `photo-${Date.now()}.${file.originalname}`)
    }
})

const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(new Error("only image is allow"))
    }
}
const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
})




router.post("/add", upload.single("image"), (req, res) => {
    const { shopName, shopId, location, contact, description } = req.body;
    const image = req.file ? req.file.filename : null;

    const newShop = new Shop({
        shopName,
        shopId,
        location,
        contact,
        description,
        image,
    });

    newShop.save()
        .then(() => {
            res.json("Shop Successfully Added");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ error: "An error occurred while adding the shop" });
        });
});
router.route("/display").get((req,res)=>{

    Shop.find().then((shops)=>{
        res.json(shops)
    }) .catch((err)=>{
        console.log(err)
    })     

})

router.route("/update/:id").put(async(req,res)=>{
    let sId = req.params.id;
    const {shopName,shopId,location,contact,description} = req.body;

    const updateshop = {
        shopName,
        shopId,
        location,
        contact,
        description
    }
    const update = await Shop.findByIdAndUpdate(sId,updateshop).then(()=>{

        res.status(200).send({status:"Shop updated"})
    }).catch(()=>{
        console.log(err);
        res.status(500).send({status:"Update Error"});
    })

   
})

router.route("/delete/:id").delete(async(req,res)=>{
    let sId = req.params.id;

    await Shop.findByIdAndDelete(sId).then(()=>{
        res.status(200).send({status:"Shop deleted"})
    }).catch(()=>{
        console.log(err);
        res.status(500).send({status:"Delete Error"});
    })
})



router.route("/get/:id").get(async(req,res)=>{
    let sId = req.params.id;
    const p = await Shop.findById(sId).then((shop)=>{
    res.status(200).send({status:"User fetched", shop}) //p= project
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"User fetched error"});
    })
})



module.exports = router;