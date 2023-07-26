function Search()
{
    //debugger;
    let clientId="wC0UKIXhUoFvMFEHeqUYCXRfspmKjLwatlJhRC6xUMw";
    let query=document.getElementById("search").value;
    let url="https://api.unsplash.com/search/photos/?client_id="+clientId+"&query="+query;

    fetch(url)
    
        .then(function(data)
        {
return data.json();
        })
        .then(function(data){
            console.log(data);
//             var a=0;
//             if(a==0)
//             {
// var result=`<tr>`;
//             }
            data.results.forEach(photo=>{
              
                let result=`<div class="grid-item"><a href="${photo.links.html}"><img src="${photo.urls.small}" width="500" height="300"></a>
                <p>Description:${photo.description}</p>
                <p>Author:${photo.user.name}</p></div>`;
                //  a+=1;
                //  if(a==3)
                //  {
                //      result+=`</tr>`;
                //      a=0;
                //  } 
                $("#result").append(result);
            });

              
        })
    
}