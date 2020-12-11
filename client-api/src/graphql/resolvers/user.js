// import { User } from '../../models/User';

export default {
  Query: {
    users: () => {},
    profile: () => {},
    login: () => {},
    refreshToken: () => {},
  },
  Mutation: {
    register: (root, args, { req }, info) => {},
  },
};
