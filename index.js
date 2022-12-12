const http=require("http");
const fs=require("fs");
const filecontent=fs.readFileSync('index.html');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-type':'text/html'
    })
    res.end(filecontent)
})
server.listen(5000,()=>{console.log("The server is up at port 5000");})