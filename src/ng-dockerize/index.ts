import { Rule, SchematicContext, Tree, apply, url, template, branchAndMerge, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
// import { Schema as ClassOptions } from './schema';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngDockerize(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    console.log(tree);
    
    const templateSource = apply(
      url('./files'),
      [
        template({
          ...strings,
          ..._options,
        }),
      ]
    );
 
    return branchAndMerge(mergeWith(templateSource));
  };
}
