import {Command } from 'commander'


const program = new Command()

program
  .command('copy <path>')
  .description('拷贝文件(夹)')
  .option('-g, --group <string>','设置分组名称')
  .action((path,options,command)=>{
    console.log({path});
    console.log({options});
  })

program
  .command('paste [name]')
  .description('粘贴文件(夹)')
  .option('-t, --tag <string>','标签名称')
  .option('-i, --index <number>','拷贝列表索引')
  .action((name,options,command)=>{
    console.log({name});
    console.log({options});
  })



program.parse(process.argv)