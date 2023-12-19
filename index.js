import {Command } from 'commander'
import {copyFile} from './src/copyFile.js'

const program = new Command()

// 拷贝文件/文件夹
program
  .command('copy [path]')
  .description('拷贝文件(夹)')
  .option('-t, --tag <string>','设置标签')
  .option('-g, --group <string>','设置分组')
  .action(copyFile)

// 粘贴文件夹/文件夹
program
  .command('paste [name]')
  .description('粘贴文件(夹)')
  .option('-t, --tag <string>','指定标签')
  .option('-i, --index <number>','拷贝列表索引')
  .action((name,options,command)=>{
    console.log({name});
    console.log({options});
  })

// 删除拷贝
program
  .command('delete [name]')
  .description('删除拷贝记录')
  .option('-t, --tag <string>','指定标签')
  .option('-g, --group <string>','指定分组')
  .action((name,options,command)=>{
    console.log({name});
    console.log({options});
  })

program.parse(process.argv)