import { strings } from '@angular-devkit/core';
import {
  apply, branchAndMerge, chain, mergeWith, Rule, SchematicContext, SchematicsException, template,
  Tree, url
} from '@angular-devkit/schematics';

function readFile(tree: Tree, filename: string): string {
  const file = tree.read(filename);
  if (file === null) {
    throw new SchematicsException(`File "${filename}" does not exist.`);
  }
  const sourceText = file.toString('utf-8');
  return sourceText;
}

function readJsonFile<T>(tree: Tree, filename: string): T {
  return JSON.parse(readFile(tree, filename));
}

function ngDockerize(_options: any): Rule {
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

export function ngAdd(_options: any): Rule {
  return chain(
    [
      ngDockerize(_options)
    ]
  );
}
