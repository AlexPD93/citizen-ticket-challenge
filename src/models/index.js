// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Categories } = initSchema(schema);

export {
  Categories
};