import AJV from 'ajv';
import addFormats from 'ajv-formats';
const ajv=new AJV({ allErrors: true });
addFormats(ajv, ["email", "date", "uri"]);
const schemaValidate=(schema)=>{
const Validate=ajv.compile(schema);
return (req,res,next)=>{
const valid = Validate(req.body);

  if (!valid) {
    return res.status(400).json({ errors: Validate.errors });
  }
  next();
};
};
export default schemaValidate;