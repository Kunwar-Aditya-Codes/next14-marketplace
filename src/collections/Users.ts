import { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        // TODO: change the email!
        return `<p>Hello please verify</p>`;
      },
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'role',
      required: true,
      defaultValue: 'user',
      //   admin: {
      //     condition: () => false,
      //   },
      type: 'select',
      options: [
        { label: 'ADMIN', value: 'admin' },
        { label: 'USER', value: 'user' },
      ],
    },
  ],
};
