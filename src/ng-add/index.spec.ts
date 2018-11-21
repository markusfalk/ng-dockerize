import * as path from 'path';

import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';

const collectionPath = path.join(__dirname, '../collection.json');

describe('ng-add', () => {
  it('works', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('ng-add', {}, Tree.empty());

    expect(tree.files).toEqual([]);
  });
});
