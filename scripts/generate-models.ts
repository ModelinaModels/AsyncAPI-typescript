import versions from '@asyncapi/specs';
import { typeScriptDefaultModelNameConstraints, TypeScriptFileGenerator } from '@asyncapi/modelina';
import * as path from 'path';
import * as fs from 'fs';
import {  } from '@asyncapi/modelina/lib/types/generators/typescript/constrainer/ModelNameConstrainer';
const outputDirectoryPath = path.resolve(__dirname, '../src/models');

async function generateModelsForV2_0() {
  const outputDirForV2_0 = path.resolve(__dirname, outputDirectoryPath, 'asyncapi_2_0');
  //const input = versions['2.0.0'] as any;
  const inputFileContent = await fs.promises.readFile( path.resolve(__dirname, './asyncapi-2_0.json'));
  const input = JSON.parse(String(inputFileContent));
  if (fs.existsSync(outputDirForV2_0)) {
    fs.rmSync(outputDirForV2_0, { recursive: true });
  }
  const generator = new TypeScriptFileGenerator({ 
    modelType: 'class',
    constraints: {
      modelName: (options) => {
        const defaultName = typeScriptDefaultModelNameConstraints()(options);
        //Since we have no way of changing the input to generate more accurate names for the models, we manually match them here
        if(defaultName === 'AsyncApi_2Dot_0Dot_0SchemaDot') {
          // Root AsyncAPI object
          return 'AsyncAPI';
        } else if (defaultName === 'Asyncapi'){
          // AsyncAPI versions enum
          return 'AsyncAPIVersions';
        } else if (defaultName === 'MessageOneOf_1OneOf_0'){
          // AsyncAPI messages where it's defined with oneOf
          return 'MessageOneOf';
        } else if (defaultName === 'MessageOneOf_1OneOf_1'){
          // AsyncAPI message object
          return 'Message';
        } else if (defaultName === 'MessageOneOf_1OneOf_1ExamplesItem'){
          // AsyncAPI message example
          return 'MessageExample';
        } else if (defaultName === 'MessageOneOf_1OneOf_1HeadersObject'){
          // AsyncAPI message headers defined with JSON Schema object
          return 'MessageHeaders';
        }
        return defaultName;
      }
    }
  });
  
  await generator.generateToFiles(input, outputDirForV2_0, {});
}

generateModelsForV2_0();