"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const fs_1 = require("../utils/fs");
function ngDockerize(_options) {
    return (tree, _context) => {
        const packageJson = fs_1.readJsonFile(tree, './package.json');
        _options.packageName = packageJson.name;
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.template(Object.assign({}, core_1.strings, _options))
        ]);
        return schematics_1.branchAndMerge(schematics_1.mergeWith(templateSource));
    };
}
exports.ngDockerize = ngDockerize;
//# sourceMappingURL=dockerize.js.map