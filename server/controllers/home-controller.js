const homeController = async(req,res)=>{
    try{
        res.status(201).send("welcome to the home page")
    }catch(error){
        res.status(404).send("page not found")
    }
}
module.exports = homeController;
