// crumbinator-2 by chida

const crumbinator = {
  'build': (data) => {
    const NI = Math.floor(Math.random()*1000); //new instance id
    let  items = document.getElementsByClassName(data.items);
    id = 1;
    items.forEach((item)=> { 
      item.style.display = 'none' //hide all items
     item.setAttribute('data-crumb-instance',NI)
     item.setAttribute('data-crumb-'+NI,id++)
    })
   
   let pageItems = document.querySelectorAll('[data-crumb-instance="'+NI+'"]');
   
    // get page length
    let pageLength = pageItems.length/data.limit
    pageLength % 1 != 0 ? fraction = {'state':true, 'point':(pageLength % 1).toFixed(4)} : fraction = {'state':false}
    fraction.state ? pages = Math.floor(pageLength+1): pages = pageLength //if page length has a fraction round up to the nearest and get decimal. 
    
    //insert buttons
     pageDesc = document.createElement('div')
    document.getElementById(data.pageID).appendChild(pageDesc)
    for(i=0; i<pages; i++){
     
     pageBtn = document.createElement('button')
     pageNo = document.createTextNode(i+1)
     pageBtn.appendChild(pageNo)
     pageDesc.appendChild(pageBtn)
     pageBtn.setAttribute('data-page-id',i+1)
     pageBtn.setAttribute('data-instance-id',NI)
    }
    
  const  description = document.createElement('div')
    description.innerText = 'showing pages 1 -'+data.limit
    pageDesc.appendChild(description)
    
    btns = document.querySelectorAll('[data-instance-id="'+NI+'"]')

    btns.forEach((btn)=> {
      console.log(btn)
      btn.addEventListener('click',()=>{
        
        btnPage = btn.getAttribute('data-page-id')
        max = Math.floor((pageItems.length/pageLength)*btnPage)
        min = (data.limit*btnPage)-data.limit+1
         
         pageItems.forEach((item)=>{
           item.style.display='none'
           if(item.getAttribute('data-crumb-'+NI) >= min && item.getAttribute('data-crumb-'+NI) <= max){
             item.style.display='block'
           }
           
           description.innerText = 'showing pages '+min+' - '+max+' '
           
         })
        })
    })
    
     pageItems.forEach((item)=>{
           item.style.display='none'
           if(item.getAttribute('data-crumb-'+NI) >= 1 && item.getAttribute('data-crumb-'+NI) <= data.limit){
             item.style.display='block'
           }
     })
  }

}