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
