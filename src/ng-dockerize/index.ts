import { strings } from '@angular-devkit/core';
import {
  apply, branchAndMerge, mergeWith, Rule, SchematicContext, template, Tree, url
} from '@angular-devkit/schematics';

import { readJsonFile } from './utils/fs';

export function ngDockerize(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    const packageJson = readJsonFile<{name: string}>(tree, './package.json');
    _options.packageName = packageJson.name;

    const templateSource = apply(
      url('./files'),
      [
        template({
          ...strings,
          ..._options
        })
      ]
    );

    return branchAndMerge(mergeWith(templateSource));

  };
}
