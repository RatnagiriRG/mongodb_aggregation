exports.simpleLookup = async (bookCollection) => {
  const result = await bookCollection
    .aggregate([
      {
        $lookup: {
          from: "authors",//from collection name
          localField: "author_id",//this collecction identity
          foreignField: "_id",//that field identity
          as: "author_details",//how to show in this collection fields
        },
      },
    ])
    .toArray();
  return result;
};

exports.lookupAndArrayElements = async (bookCollection) => {
  const result = await bookCollection
    .aggregate([
      {
        $lookup: {
          from: "authors",
          localField: "author_id",
          foreignField: "_id",
          as: "author_details",
        },
      },
      {
        $addFields: {
          author_details: {
            $arrayElemAt: ["author_details", 0],
          },
        },
      },
    ])
    .toArray();
  return result;
};
