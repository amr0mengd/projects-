document.getElementById('btn').addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET',"plain.txt",false);
  xhr.onload = function(){
    if(this.status === 200 && this.readyState === 4){
      document.getElementById('Text').innerHTML = this.response;
    }
  };
  xhr.send();
  
})