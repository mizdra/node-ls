'use strict';

const fs          = require('fs');
const readdirSync = require('./readdirSync');
const classify    = require('./classify');
const isVisible   = require('./isVisible');

// 指定されたディレクトリ内のファイル名を出力する
function ls(options, dir) {
    // .と..を含むディレクトリ内の全てのファイル名を取得
    const files = readdirSync(dir);

    files
        // -aオプションが有効で無い場合、隠しファイルを除外する
        .filter(file => {
            if (!options.all) {
                return isVisible(file);
            }
            return true;
        })
        // -Fオプションが有効である場合、ファイルタイプごとに固有の識別子を付ける
        .map(file => {
            if (options.classify) {
                return classify(file, fs.lstatSync(`${dir}/${file}`));
            }
            return file;
        })
        .forEach(file => console.log(file));
}

module.exports = ls;
