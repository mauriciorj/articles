export default {
  Query: {
    users: async (root, args, {postgresConn}, info) => {
      // console.log('db', postgresConn);
      // console.log('args', args)
      const users = await postgresConn.user.findAll();
      //console.log('users', users);
        if (!users) {
          throw new Error('No users found');
        }
        return users;
    },
  },
  Mutation: {
    createUser: async (root, {input}, {postgresConn}) => {
      const { username, email } = input;
      const userExists = await postgresConn.user.findOne({
        where: {
          [Op.or]: [{ email }, { username }],
        },
      });
      if (userExists) {
        throw new Error('A user with this email or username already exists');
      }
      const user = await postgresConn.user.create({
        ...input,
      });

      return user;
    },
  },
};
