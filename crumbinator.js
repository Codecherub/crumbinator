function crumbinate(elements,buttoncontainer,divider){
    $('.'+elements).hide();//hide all elements
    pageElements = $('.'+elements);
    elementsLength = pageElements.length; //fetch total numbers of page elements
    pageBreak = elementsLength/divider;
    
    //create page link buttons
    for(i=1; i<=pageBreak; i++){
        $('.'+buttoncontainer).append('<button class=crumbfiddl3r psid='+i+'>'+i+'</button>');
    }

    //initialise first page
    for(i=1; i<=divider; i++){
        $('#crumb-'+i).show();
    }

    //assign page id's to page link buttons
    $('.crumbfiddl3r').click(function(){
        btn_id = $(this).attr('psid'); // get button id
        $('.'+elements).hide();
        
        last_btn_id = Math.floor(elementsLength/divider); //GET LAST  PAGE NUMBER

        boundaryMin = (elementsLength*btn_id)/(elementsLength/divider)-(divider-1); //minimum element id in page elements boundary
        boundaryMax = (elementsLength*btn_id)/(elementsLength/divider); // maximum element id  in boundary
        
        //fetch elements within page boundary;
        if(btn_id != last_btn_id){
            for(i=boundaryMin; i<=boundaryMax; i++){
                $('#crumb-'+i).show();
            }
        }
        if(btn_id == last_btn_id){
            for(i=boundaryMin; i<=boundaryMax; i++){
                $('#crumb-'+i).show();
            }
            remainder = elementsLength - boundaryMax;
            //if there are remainders after the boundary of the pseudo last page create a page for remainders 
          
            
        }

      
        

    });
    last_btn_id = Math.floor(elementsLength/divider); //GET LAST  PAGE NUMBER
    boundaryMin = (elementsLength*last_btn_id)/(elementsLength/divider); // minimum element id  in boundary
    lastpageid=boundaryMin+1;
    $('.'+buttoncontainer).append('<button class="crumbfiddl3r lastcfd" psid="'+lastpageid+'">last page</button>');
    $('.lastcfd').click(function(){
        $('.'+elements).hide();
        boundaryMin = $(this).attr('psid');
        boundaryMax = elementsLength;
        for(i=boundaryMin; i<=boundaryMax; i++){
            $('#crumb-'+i).show();
        }
       
    });

}
