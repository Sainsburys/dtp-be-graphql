import { assert } from 'chai';
import { server } from './api';
import { gql } from 'apollo-server';

describe('Media API', () => {
  it('supports schema introspection', async () => {
    const query = gql`
      {
        __schema {
          types {
            name
          }
        }
      }
    `;
    const result = await server.executeOperation({ query });
    assert.isOk(result.data);
  });
});
