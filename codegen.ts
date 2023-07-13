import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema:
    'https://api-sa-east-1.hygraph.com/v2/clk03d7700tx001uhd14jgcm7/master',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
