exports.simpleMatch = async (collection) => {
  const result = await collection
    .aggregate([
      {
        $match: {
          tags: "enim",
        },
      },
      {
        $count: "usersWithEnumTags",
      },
    ])
    .toArray();

  return result;
};

exports.matchAndProject = async (collection) => {
  const result = await collection
    .aggregate([
      {
        $match: {
          isActive: false,
          tags: "velit",
          age: 20,
        },
      },
      {
        $project: {
          name: 1,
        },
      },
    ])
    .toArray();

  return result;
};

exports.matchingSpecial = async (collection) => {
  const result = await collection
    .aggregate([
      {
        $match: {
          "company.phone": /^\+1 \(940\) /,
        },
      },
      {
        $count: "userswithSpecialPhoneNumber",
      },
    ])
    .toArray();

  return result;
};
