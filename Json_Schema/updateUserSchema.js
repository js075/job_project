const updateUserSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', minLength: 2 },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 4 },
  },
  required: [], 
  additionalProperties: false,
};

export default updateUserSchema;
