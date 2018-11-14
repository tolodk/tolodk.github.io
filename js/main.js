window.addEventListener("load", function(){
    var html = "";
    
    var counter = 0;
    for (var i = 0; i < list.length; i++) {
        if(counter === 0){
            html += '<div class="row">';
        }
        
        html += '<div id="'+ list[i] +'" class="col">' + list[i] + '</div>';

        if(counter === MAX_COLUMNS_PER_ROW-1){
            html += '</div>';
            counter = 0;
        }else{
            counter++;
        }   
    }

    function filterList(value){
        var value = document.getElementById("ddlFilter").value;

        if(value === "all"){
            document.querySelectorAll(".col").forEach(function(element){
                element.style.display = "block";
            });
        }else if(value === "finished"){
            document.querySelectorAll(".col").forEach(function(element){
                if(element.classList.contains("success")){
                    element.style.display = "block";
                }else{
                    element.style.display = "none";
                }                
            });
        }else if(value === "notfinished"){
            document.querySelectorAll(".col").forEach(function(element){
                if(element.classList.contains("success") === false){
                    element.style.display = "block";
                }else{
                    element.style.display = "none";
                }                
            });
        }
    }
    
    document.getElementById("list").innerHTML += html;
    document.querySelectorAll(".col").forEach(function(element){
        element.addEventListener("click", function(event){
    
        event.target.classList.toggle("success");
        filterList();
      });
    
    })
    
    document.getElementById("btnToggleNumber").addEventListener("click", function(){
        var number = document.getElementById("txtNumber").value;
        if(number !== ""){
            var element = document.getElementById(number);
            if(element){
                element.classList.toggle("success");
                filterList();
            }
        }
        
    });

    document.getElementById("ddlFilter").addEventListener("change", filterList);
    
})
    