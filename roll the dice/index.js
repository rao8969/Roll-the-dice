
let Winner=document.getElementById("winner");

    var A=document.getElementById("member-1");
    var S1= document.getElementById('s1');
    var S2= document.getElementById('s2');
    var S3= document.getElementById('s3');
    var B=document.getElementById("member-2");
    var C=document.getElementById("member-3");


    var roll=document.getElementById("roll");

    function tiedEl(a,b,c){
        const ties=[];
        if(a===b){
            ties.push('A');ties.push('B')
        }
        if(b===c){
            ties.push('B');ties.push('C');
        }
        if(a===c){
            ties.push('A');ties.push('C');
        }
        return [...new Set(ties)];
    }

    function getOrderedEle(a,b,c){
        const orders = ['A','B','C'];
        const arr = [a,b,c];
        arr.sort()
    }

    roll.addEventListener("click", function(){
        var a = Math.floor(Math.random() * 6);
        var b = Math.floor(Math.random() * 6);
        var c = Math.floor(Math.random() * 6);

        S1.innerHTML=a;
        S2.innerHTML=b;
        s3.innerHTML=c;

        const ties = tiedEl(a,b,c);

        if(a>=b && a>=c){
            console.log('case a')
            Winner.innerHTML = "Winner: Member A ";
            Winner.style.backgroundColor = "black";
            A.style.backgroundColor = "green";
            if(a==b || c==b || a==c){
                if(a==b){
                    A.style.backgroundColor="blue";
                B.style.backgroundColor = "blue";
                }
                if(c==b){
                    C.style.backgroundColor = "blue";
                    B.style.backgroundColor = "blue";
                }
                if(c==a){
                    C.style.backgroundColor = "blue";
                    A.style.backgroundColor = "blue";
                }
                
            }else{
                if(b>c){
                    
                    B.style.backgroundColor = "red";
                    C.style.backgroundColor = "yellow";
                }
                if(b<c){
                    B.style.backgroundColor = "red";
                    C.style.backgroundColor = "yellow";
                }
            }

        }

        if(b>a && b>=c){

            console.log('case b')

            Winner.innerHTML = "Winner: Member B ";
            Winner.style.backgroundColor = "black";
            B.style.backgroundColor = "green";

            if(a==c){
                B.style.backgroundColor = "blue";
                A.style.backgroundColor = "blue";
            }else{
                if(a>c){
                    A.style.backgroundColor = "yellow";
                    C.style.backgroundColor = "red";
                }
                if(a<c){
                    A.style.backgroundColor = "red";
                    C.style.backgroundColor = "yellow";
                }
            }

        }

        if(c>b && c>=a){

            console.log('case c')

            Winner.innerHTML = "Winner: Member C";
            Winner.style.backgroundColor = "black";
            C.style.backgroundColor = "green";

            if(a==b){
                B.style.backgroundColor = "blue";
                A.style.backgroundColor = "blue";
            }else{
                if(a>b){
                    A.style.backgroundColor = "yellow";
                    B.style.backgroundColor = "red";
                }
                if(a<b){
                    A.style.backgroundColor = "red";
                    B.style.backgroundColor = "yellow";
                }
            }
            
        }
        if(a==b && a==c && b==c){
            Winner.innerHTML = "Equal ";
            Winner.style.backgroundColor = "black";
            A.style.backgroundColor = "blue";
            B.style.backgroundColor = "blue";
            C.style.backgroundColor = "blue";
        }     
    });

    
