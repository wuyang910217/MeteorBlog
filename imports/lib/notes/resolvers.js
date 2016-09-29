import { Notes } from './notes.js';

const notesResolvers = {
  Query: {
    async notes(root, args, context) {
      return await Notes.find({}).fetch();
    },
  },
  Mutation: {

  },
};

export default notesResolvers;
