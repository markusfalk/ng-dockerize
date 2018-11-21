import { Tree, SchematicsException } from '@angular-devkit/schematics';

export function readFile(tree: Tree, filename: string): string {
  const file = tree.read(filename);
  if (file === null) {
    throw new SchematicsException(`File "${filename}" does not exist.`);
  }
  const sourceText = file.toString('utf-8');
  return sourceText;
}

export function readJsonFile<T>(tree: Tree, filename: string): T {
  return JSON.parse(readFile(tree, filename));
}
