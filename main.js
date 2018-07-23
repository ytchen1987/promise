var timestamp = Date.parse(new Date());
var p = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000)
  })
  .then(() => setTimeout(function() {
    console.log('2s')
    console.log((Date.parse(new Date()) - timestamp) / 1000);
  }, 1000))
  .then(() => setTimeout(function() {
    console.log(11)
    console.log((Date.parse(new Date()) - timestamp) / 1000);
  }, 2000))


  输出 //2s  3 ->11 4

  
  
 //使用ajax书写一个promise
  
 function ajax (method,url,data){  
     var xhr = new XMLHttpRequest(); // 创建一个xml对象
     xhr.open(method,url);
     xhr.send(data);
     return new Promise(function(resolve,reject){
         xhr.onreadystatechange = function(){       
           if (xhr.readyState == 4) {
               if (xhr.status === 200){
                  resolve(xhr.responseText)
               }else{
                  reject(xhr.status)
               }              
           }
         }
     });
 }
