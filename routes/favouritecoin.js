const express=require("express")
const router=express.Router();

const {favcoinList,addcoin,removecoin}=require("../controllers/favouritecoincontroller");

router.get("/getcoinlist",favcoinList);

router.post("/addcoin",addcoin);

router.post("/removecoin",removecoin);

module.exports=router;