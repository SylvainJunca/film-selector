module.exports = mongoose => {
    const Film = mongoose.model(
      "film",
      mongoose.Schema(
        {
          title: String,
          description: String,
          year: Number,
          country: String,
          language: String
        },
        { timestamps: true }
      )
    );
  
    return Film;
  };