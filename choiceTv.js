$(document).ready(function(){           
    $(".direct").click(function(){
        // $("button").removeClass("selected");
        // $(this).addClass("selected");
        var flickerAPI="https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var amimal=$(this).text();
        var flickrOptions={
            tags:amimal,
            format:"json",
    
    
    
        };
        function displayPhotos(data){
             console.log('Data', data)  
            var photoHTML='<ul> ';
            $.each(data.items,function(i,photo){
                // photoHTML+='<div class="card">';
                console.log(photo)

// var $=("link");
// var $=("media.m");
                photoHTML+='<li>';
                photoHTML+='<p>'+photo.title+'</p>';
                // photoHTML+='<a href="'+photo.link+'" class="image" ></a>';
                photoHTML+='<img src='+photo.media.m+'/></li>';
            });
            photoHTML+='</ul>';
            console.log(photoHTML)
            $("#photos").html(photoHTML);
        }
        $.getJSON(flickerAPI,flickrOptions,displayPhotos)
        
    });
});