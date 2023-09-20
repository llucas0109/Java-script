function tabuada(){
    var num=document.getElementById('txtn')
    var se=document.getElementById('isel')
    var n=Number(num.value)
    if(num.value.length <=0){
        window.alert('digite algum numero')
    }else{
        se.innerHTML=('')
        for(let c=0;c<=10;c++){
            var item=document.createElement('option')
            item.text =` ${n} x ${c} = ${n*c}`
            se.appendChild(item)
        }
    }
    
}