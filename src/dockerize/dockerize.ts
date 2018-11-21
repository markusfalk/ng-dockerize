import { strings } from '@angular-devkit/core';
import {
  apply, branchAndMerge, mergeWith, Rule, SchematicContext, template, Tree, url
} from '@angular-devkit/schematics';

import { readJsonFile } from '../utils/fs';
import { DockerizeOptions } from './options.interface';

export function ngDockerize(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {

    let packageJson = {
      name: _options.packagename,
      version: _options.version
    };

    // let packagename = _options.packagename;
    // let version = _options.version;

    if (!_options.packagename || !_options.version) {
      packageJson = { ...readJsonFile<{name: string, version: string}>(tree, './package.json') };
    }

    let options: DockerizeOptions = {
      angularport: _options.angularport || 9999,
      dockerport: _options.dockerport || 5000,
      packagename: packageJson.name,
      push: _options.push || true,
      registry: _options.registry || 'localhost',
      username: _options.username || '',
      version: packageJson.version,
    };

    const templateSource = apply(
      url('./files'),
      [
        template({
          ...strings,
          ...options
        })
      ]
    );

    return branchAndMerge(mergeWith(templateSource));

  };
}
