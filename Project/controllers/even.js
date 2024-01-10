exports.newFunc = async(req, res)=>{
  let newarr= [];
  for(let i=0 ; i<=10 ; i++){
    if(i%2===0){
      newarr.push(i);
    }
  }
  res.json({
    num: newarr,
  })
}
