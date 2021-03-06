"use strict";

const path = require('path');

module.exports = (srcDir, entryTypes) => {
    const entryPatterns = entryTypes.map((type) => path.join(srcDir, type));

    return entryPatterns
}