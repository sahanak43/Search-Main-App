module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      _id: Number,
      companyId:Number,
      primaryText: String,
      headline: String,
      CTA:String,
      imageUrl:String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Ads = mongoose.model("ads", schema);
  return Ads;
};
