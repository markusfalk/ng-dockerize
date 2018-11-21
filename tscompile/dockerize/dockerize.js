"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const fs_1 = require("../utils/fs");
function ngDockerize(_options) {
    return (tree, _context) => {
        let packageJson = {
            name: _options.packagename,
            version: _options.version
        };
        // let packagename = _options.packagename;
        // let version = _options.version;
        if (!_options.packagename || !_options.version) {
            packageJson = Object.assign({}, fs_1.readJsonFile(tree, './package.json'));
        }
        let options = {
            angularport: _options.angularport || 9999,
            dockerport: _options.dockerport || 5000,
            packagename: packageJson.name,
            push: _options.push || true,
            registry: _options.registry || 'localhost',
            username: _options.username || '',
            version: packageJson.version,
        };
        const templateSource = schematics_1.apply(schematics_1.url('./files'), [
            schematics_1.template(Object.assign({}, core_1.strings, options))
        ]);
        return schematics_1.branchAndMerge(schematics_1.mergeWith(templateSource));
    };
}
exports.ngDockerize = ngDockerize;
//# sourceMappingURL=dockerize.js.map