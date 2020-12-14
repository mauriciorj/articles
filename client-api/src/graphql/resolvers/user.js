export default {
  Query: {
    users: async (root, args, {db}, info) => {
      const users = await db.user.findAll();
        if (!users) {
          throw new Error('No users found');
        }
        return users;
    },
  },
  Mutation: {
    createUser: async (root, {input}, {db}) => {
      const { username, email } = input;
      const userExists = await db.user.findOne({
        where: {
          [Op.or]: [{ email }, { username }],
        },
      });
      if (userExists) {
        throw new Error('A user with this email or username already exists');
      }
      const user = await db.user.create({
        ...input,
      });

      return user;
    },
  },
};
