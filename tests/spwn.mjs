#!/usr/bin/env zx


await $`git status --show-stash -s`
  .pipe(fs.createWriteStream('status.txt'))


await $`cat status.txt`