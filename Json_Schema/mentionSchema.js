const mentionSchema = {
  type: "object",
  properties: {
    mentionedCommentId: { type: "integer" },
    mentionPostId: { type: "integer" }, 
    mentionedUserId: { type: "integer" }, 
  },
  required: ["mentionedUserId", "mentionPostId", "mentionedCommentId"],
};

export default mentionSchema;
