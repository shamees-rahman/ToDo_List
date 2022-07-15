var counter = 0;

function ajax(){
    var xhttp = new XMLHttpRequest();
    // Eventlistener
    
    xhttp.onreadystatechange = function()
    {
        // condition
        if(this.readyState==4&&this.status==200)
        {
            var responses = JSON.parse(this.responseText);
            var items = responses.list ;
            var output = "<table style='margin-left:auto;margin-right:auto;'> <tr><th>No.</th><th style='text-align:center'>Task Description</th><th>Status</th></tr>";
            for(var i = 0; i<items.length; i++)
            {
                if (items[i].completed)
               { output += `<tr>
                <td style="text-align:center">${items[i].id}</td>
                <td>${items[i].title}</td>
                <td style="text-align:center"><input type="checkbox" checked disabled id="c${i}"></td>
                </tr>`;}
                else 
                {output += `<tr>
                <td style="text-align:center">${items[i].id}</td>
                <td>${items[i].title}</td>
                <td style="text-align:center"><input type="checkbox" onclick="counterf(${i});" id="c${i}"></td>
                </tr>`;}
            }
            
            document.getElementById("table_body").innerHTML = output;

            for(var i = 0; i<items.length; i++)
            {

                document.getElementById(`c${i}`).checked = items[i].completed;
            }
            
            
            

        }
        
    
    }
    xhttp.open("GET", "list.json", true);
        xhttp.send();
        document.getElementById("table_body").style.display="";

    }
    
    function counterf(x) {
        if (document.getElementById(`c${x}`).checked == true){
            counter++;
          } else {
          counter--;
          }
          console.log(counter);
          if (counter==5){
        var promise = new Promise(function(resolve){
                  if (counter>4)
                  {resolve ("Congrats! More than 5 tasks completed :)");}
            })
            promise.then(function (s){alert(s);})
          }}