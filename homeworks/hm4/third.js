var id = setInterval(function(){window.scrollBy(0, 1)}, 1);

setTimeout(function(){console.log(1);clearInterval(id);}, 20000);
