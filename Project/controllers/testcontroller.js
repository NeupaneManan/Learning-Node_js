exports.testfunction = async(req, res)=>{
    res.status(200).json({
        message:"this is from testfunction"
    })
}