const fs=require('fs')

fs.writeFileSync('hello.txt','satyam sharma')
const path=require('path');
const dirPath= path.join(__dirname,'files');
console.log(dirPath)


fs.writeFileSync(dirPath+'/hello1.txt','satyam sharma is the key of the ')
for(let i=0;i<4;i++){
    //fs.writeFileSync(dirPath+'/hello1.txt','satyam sharma is the key of the ')
    fs.writeFileSync(`${dirPath}/hello${i}txt`,"satyam sharma is the key pair of the seach of the ")

}
fs.readdir(dirPath,(err,files)=>{
   files.forEach((item)=>{
    console.log(item)
   })

})