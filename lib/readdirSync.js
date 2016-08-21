'use strict';

const fs = require('fs');

// .と..を含むディレクトリ内のファイル一覧を返す
function readdirSync(dir) {
    return ['.', '..', ...fs.readdirSync(dir)];
}

module.exports = readdirSync;
