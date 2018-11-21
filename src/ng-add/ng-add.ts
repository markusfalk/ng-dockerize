import { chain, Rule } from '@angular-devkit/schematics';

import { ngDockerize } from '../dockerize/dockerize';

export function ngAdd(_options: any): Rule {
  return chain(
    [
      ngDockerize(_options)
    ]
  );
}
