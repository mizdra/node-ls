# node-ls
夏のCLI commandsものまね大会 ~ls編~


## Installation
```bash
$ npm install -g mizdra/node-ls
```


## Usage

```bash
$ node-ls --help

  Usage: node-ls [options] <dir>

  Options:

    -h, --help      output usage information
    -V, --version   output the version number
    -a, --all       include hidden files and directories
    -F, --classify  classify files and directories

$ node-ls -aF sample-dir
./
../
.hidden-dir
.hidden-file
fifo|
sock=
sock-symlink@
visible-dir/
visible-dir-symlink@
visible-file
visible-file-symlink@
x-666-file
x-677-file*
x-767-file*
x-776-file*
x-777-file*
x-777-file-symlink@

$ ls -1 -aF sample-dir
./
../
.hidden-dir
.hidden-file
fifo|
sock=
sock-symlink@
visible-dir/
visible-dir-symlink@
visible-file
visible-file-symlink@
x-666-file
x-677-file*
x-767-file*
x-776-file*
x-777-file*
x-777-file-symlink@
```
