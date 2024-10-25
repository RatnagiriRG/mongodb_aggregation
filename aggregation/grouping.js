exports.grouping = async (collection) => {
  const result = await collection
    .aggregate([
      {
        $group: {
          _id: "$favoriteFruit", //get the favorite fruit

          count: {
            $sum: 1, // counting the frut by one
          },
        },
      },
      {
        $sort: {
          count: 1, // sorting the count
        },
      },
      {
        $limit: 1, // only show  first one element in
      },
    ])
    .toArray();

  return result;
};

exports.groupingSumAndMore = async (collection) => {
  const result = await collection.aggregate([
    {
      $group: {
        _id: "$company.location.country",
        usercount: {
          $sum: 1,
        },
      },
    },
    {
      $sort: {
        usercount: 1,
      },
    },
    {
      $limit: 2,
    },
  ]).toArray();
  return result;
};
