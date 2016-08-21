#!/usr/bin/env node
'use strict';

const program = require('commander');
const ls      = require('../lib/node-ls');

// コマンドの設定
program
    .version('0.0.1')
    .usage('[options] <dir>')
    .option('-a, --all', 'include hidden files and directories')
    .option('-F, --classify', 'classify files and directories')
    .parse(process.argv);

const options = program.opts(); // コマンドオプション
const dir = program.args[0];    // コマンド引数として渡されたディレクトリ名

// コマンド実行
ls(options, dir);
