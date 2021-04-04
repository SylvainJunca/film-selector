module.exports = mongoose => {
    const Bubble = mongoose.model(
      "bubble",
      mongoose.Schema(
        {
          nickname     : { type : String, required : true, unique : true },
          userId       : { type : String, required : true },
          membersId    : Array,
          request : [
            {
              userId       : String,
              name         : String,
              comment      : String
            }
          ]
        },
        { timestamps: true }
      )
    );
  
    return Bubble;
  };