import * as path from 'path'
import * as fs from 'fs'
// @ts-ignore
import fetch from 'node-fetch'

const API_HOST = 'http://prep.daave.dev';

fetch(`${API_HOST}/api/graphql`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `
  })
})
  .then((result: any) => result.json())
  .then((result: any) => {
    // here we're filtering out any type information unrelated to unions or interfaces
      result.data.__schema.types = result.data.__schema.types.filter(
          (type: any) => type.possibleTypes !== null
    );
    fs.writeFile(
      path.join(__dirname, '../fragmentTypes.json'),
      JSON.stringify(result.data),
      err => {
        if (err) {
          console.error('Error writing fragmentTypes file', err)
        } else {
          console.log('Fragment types successfully extracted!')
        }
      }
    )
  });
