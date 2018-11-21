"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
function readFile(tree, filename) {
    const file = tree.read(filename);
    if (file === null) {
        throw new schematics_1.SchematicsException(`File "${filename}" does not exist.`);
    }
    const sourceText = file.toString('utf-8');
    return sourceText;
}
exports.readFile = readFile;
function readJsonFile(tree, filename) {
    return JSON.parse(readFile(tree, filename));
}
exports.readJsonFile = readJsonFile;
//# sourceMappingURL=fs.js.map