$(document).ready(function () {
    var ans = 0;
    var counter = "";
    $("button").on("click",function () {
        var text = $(this).text();
        if(text !== 'AC' && text !== 'CE' && text !== '=' && text !== '+/-'){
            counter += text;
            $("#outputValue").val(counter);
        }
        else if(text === 'AC'){
            counter = "";
            $("#inputValue").val(counter);
            $("#outputValue").val(counter);
        }else if(text ==='CE'){
            counter = counter.slice(0,-1);
            $("#outputValue").val(counter);
        }else if(text ==='+/-'){
            counter = -counter;
            $("#outputValue").val(counter);
        }else if(text === '='){
            $("#inputValue").val(counter);
            ans = eval(counter);
            $("#outputValue").val(ans);
        }
    });
});