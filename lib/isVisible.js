'use strict';

// fileが隠しファイルでなければtrueを返す
function isVisible(file) {
    const hidden = /^\./;
    return !hidden.test(file);
}

module.exports = isVisible;
