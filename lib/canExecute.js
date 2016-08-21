'use strict';

const fs = require('fs');

// modeの実行権限からそのファイルが実行可能であればtrueを返す
// 所有者、グループ、その他のユーザの内、1ユーザでも実行可能であればtrueを返す
function canExecute(mode) {
    // 実行可能マスク(0o111)を作成
    const executionMask = fs.constants.S_IXUSR | fs.constants.S_IXGRP | fs.constants.S_IXOTH;
    return !!((mode & 0o777) & executionMask);
}

module.exports = canExecute;
