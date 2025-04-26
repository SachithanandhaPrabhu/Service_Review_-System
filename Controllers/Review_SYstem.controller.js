const Service_Review = require("../Models/Review_System.models");
// Posting a Service_Review 
const create = async(req,res)=>{
  try{
    const Post_Service_Review = await Service_Review.create(req.body);
    res.status(200).json(Post_Service_Review)
  }
    catch(error){
    res.status(500).json({message : error.message});
  }
}
// Getting All Servive_Review
const Get_All =async(req,res)=>{
  try{
    const Getall_Service_Review = await Service_Review.find({});
    res.status(200).json(Getall_Service_Review)
  }
  catch(error){
    res.status(500).json({message : error.message});
  }
}
//Getting a Single Service_Review
const Get_One=async(req, res) => {
  try{
    const {id}=req.params;
    const Get_one_Service_Review = await Service_Review.findById(id);
    res.status(200).json(Get_one_Service_Review)
  }
  catch(error){
    res.status(500).json({message : error.message});
  }
}
//Updating a Service_Review
const Updated = async(req, res) => {
  try{
    const {id}=req.params;
    const Service_Review = await Service_Review.findByIdAndUpdate(id,req.body);
  if(!Service_Review)
    {
      return res.status(404).json({message :'Service_Review not found'});
    }
    const Updated_Service_Review = await Service_Review.findById(id);
    res.status(200).json(Updated_Service_Review)
  }
  catch(error){
    res.status(500).json({message : error.message});
  }
}
//Deleting a Service_Review
const deleted = async(req, res) => {
  try{
    const {id}=req.params;
    const Deleted_Service_Review = await Service_Review.findByIdAndDelete(id);
  if(!Deleted_Service_Review)
    {
      return res.status(404).json({message :'Service_Review not found'});
    }
    return res.status(200).json(Deleted_Service_Review)
    }
    catch(error){
    res.status(500).json({message : 'Service_Review deleted Sucessfully'});
    }
  }
module.exports={create,Get_All,Get_One,Updated,deleted}
  