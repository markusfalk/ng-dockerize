"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const dockerize_1 = require("../dockerize/dockerize");
function ngAdd(_options) {
    return schematics_1.chain([
        dockerize_1.ngDockerize(_options)
    ]);
}
exports.ngAdd = ngAdd;
//# sourceMappingURL=ng-add.js.map