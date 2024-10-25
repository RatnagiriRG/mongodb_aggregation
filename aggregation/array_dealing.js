exports.unwindingandGroupingArray = async (collection) => {
  const result = await collection
    .aggregate([
      {
        $unwind: "$tags",
      },
      {
        $group: {
          _id: "$_id",
          numberOfTags: {
            $sum: 1,
          },
        },
      },

      {
        $group: {
          _id: null,
          average: { $avg: "$numberOfTags" },
        },
      },
    ])
    .toArray();

  return result;
};

exports.unwindingandGroupingArray2 = async (collection) => {
  const result = await collection
    .aggregate([
      {
        $addFields: {
          numberOfTags: {
            $size: {
              $ifNull: ["$tags", []],
            },
          },
        },
      },

      {
        $group: {
          _id: null,
          averageTags: { $avg: "$numberOfTags" },
        },
      },
    ])
    .toArray();
  return result;
};
