const convert = document.getElementById("convert");
convert.addEventListener("click",converter);

function converter(){

     const id = [];
     var answer = 0;
     const from = document.getElementById("from").value;
     const units = document.querySelector('input[name="convertOps"]:checked').id;

     for (var number = 0; number < document.getElementsByName("convertOps").length; number ++)  {
         id[number] = document.getElementsByName("convertOps").item(number).id;
     }

    switch (units){
        case id[0]: 
                answer = from*3.28;
                document.getElementById("to").value = Math.round((answer + Number.EPSILON) * 100) / 100;
            break;
        
        case id[1]:
                answer = from/3.28;
                document.getElementById("to").value = Math.round((answer + Number.EPSILON) * 100) / 100;
            break;
        
        case id[2]:
                answer = from*0.62137119;
                document.getElementById("to").value = Math.round((answer + Number.EPSILON) * 100) / 100;
            break;

        case id[3]:
                answer = from*1.609344;
                document.getElementById("to").value = Math.round((answer + Number.EPSILON) * 100) / 100;
            break;

        case id[4]:
                answer = (from*1.8)+32;
                document.getElementById("to").value = Math.round((answer + Number.EPSILON) * 100) / 100;
            break;

        case id[5]:
                answer = ((from-32)*5)/9;
                document.getElementById("to").value = Math.round((answer + Number.EPSILON) * 100) / 100;
            break;

        case id[6]:
                answer = from*2.2046;
                document.getElementById("to").value = Math.round((answer + Number.EPSILON) * 100) / 100;
            break;

        case id[7]:
                answer = from/2.2046;
                document.getElementById("to").value = Math.round((answer + Number.EPSILON) * 100) / 100;
            break;

        case id[8]:
                answer = from/28.35;
                document.getElementById("to").value = Math.round((answer + Number.EPSILON) * 100) / 100;
            break;

        case id[9]:
                answer = from*28.35;
                document.getElementById("to").value = Math.round((answer + Number.EPSILON) * 100) / 100;
            break;
    }
}