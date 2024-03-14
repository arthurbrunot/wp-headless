
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://bedrock.p82.dbm-local.com/wp/graphql",
  config: {
    withHooks: false,
    noNamespaces: true,
    withComponent: false,
    withHOC: false,
    withMutationFn: false,
    skipTypename: true,
    maybeValue: "T",
    scalars: {
      "DateTime": "string",
    }
  },
  generates: {
    "./src/graphql/models/generated/index.ts": {
      plugins: [
        {
          add: {
            content: "/* tslint:disable */ /* eslint-disable */"
          }
        },
        "typescript",
      ]
    },
    "./src/graphql/": {
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: "./models/generated/index.ts",
        extension: ".tsx",
        folder: "./generated",
      },
      documents: [
        "./src/graphql/mutations/*.graphql",
        "./src/graphql/queries/*.graphql",
        "./src/graphql/fragments/*.graphql"
      ],
      plugins: [
        {
          add: {
            content: "/* tslint:disable */ /* eslint-disable */"
          }
        },
        "typescript-operations",
        "typescript-react-apollo",
      ]
    }
  }
};

export default config;
