const { ObjectId } = require("mongodb");


exports.simpleAggregation = async (collection) => {
  const result = await collection
    .aggregate([
      {
        $match: {
          isActive: true,
        },
      },
      {
        $match: {
          _id: new ObjectId("6719dadcebab5b6816e89c9e"), 
        },
      },
      {
        $count: "count",
      } ,
    ])
    .toArray(); 

  return result;
};

