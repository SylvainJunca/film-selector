module.exports = mongoose => {
    const Film = mongoose.model(
      "film",
      mongoose.Schema(
        {
          title        : { type : String, required : true },
          userId       : { type : String, required : true },
          bubbleId     : { type : String, required : true },
          watched      : { type : Boolean, default: false },
          comment      : String,
          data         : Object, 
          anticipation : [
            {
              userId       : String,
              anticipation : Number,
              watched      : Boolean
            }
          ]
        },
        { timestamps: true }
      )
    );
  
    return Film;
  };