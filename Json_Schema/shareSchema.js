const shareSchema = {
  type: 'object',
  properties: {
    
    shareType: {
      type: 'string'  
    }
  },
  required: ['shareType']  
};

export default shareSchema;