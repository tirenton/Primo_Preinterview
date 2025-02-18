"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
function merge(collection_1, collection_2, collection_3) {
    let merged = [...collection_1, ...collection_2, ...collection_3.reverse()];
    for (let i = 1; i < merged.length; i++) {
        let key = merged[i];
        let j = i - 1;
        while (j >= 0 && merged[j] > key) {
            merged[j + 1] = merged[j];
            j--;
        }
        merged[j + 1] = key;
    }
    return merged;
}
