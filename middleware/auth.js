import  jwt from 'jsonwebtoken';
const secret_key="jdgwufg";
const authmiddleware=async(req,res,next)=>{
  try {
    const token = req.header("Authorization");
    
    if (!token) {
      return res.status(401).send("Token is missing");
    }


    const tokenValue = token.split(" ")[1];
    
    if (!tokenValue) {
      return res.status(401).send("Invalid token format");
    }


    const decodedToken = jwt.verify(tokenValue, secret_key);

    if (!decodedToken) {
      return res.status(401).send("Token is invalid");
    }


    req.user = decodedToken;
    console.log("Decoded User:", req.user);
    next(); 
  } 
  catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export default authmiddleware;
