const http=require('http')
const data=[
    {name:'anil',mail:'anil@test.com'},
    {name:'sam',mail:'peter@test.com'},
    {name:'peter',mail:'peter@test.com'}
]
http.createServer((req,resp)=>{
  /*   resp.writeHead(500,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end(); */
resp.writeHead(500,{'Content-Type':'application\json'})
resp.write(JSON.stringify(data));
    resp.end(); 

}).listen(5010);