'use strict';

const canExecute = require('./canExecute');

// ディレクトリは/, シンボリックリンクは@, 実行可能ファイルは*,
// UNIXドメインソケットは=, FIFO(名前付きパイプ)は|を
// それぞれのファイル名の前に付ける
function classify(file, stats) {
    if (stats.isDirectory()) {
        return `${file}/`;
    } else if (stats.isSymbolicLink()) {
        return `${file}@`;
    } else if (stats.isSocket()) {
        return `${file}=`;
    } else if (stats.isFIFO()) {
        return `${file}|`;
    } else if (canExecute(stats.mode)) {
        return `${file}*`;
    }
    return file;
}

module.exports = classify;
