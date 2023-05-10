var icon= document.getElementById("icon")
        icon.onclick = function(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                icon.src = "lighton.png";
            }
            else{
                icon.src = "lightoff.png";
            }
        }

        function loadCoupon(){
            document.getElementById('coupon').style.visibility = 'visible';
            document.getElementById('main').style.opacity = '0.7';
        }
        
        function closeCoupon(){
            document.getElementById('coupon').style.visibility = 'hidden';
            document.getElementById('main').style.opacity = '1';
        }
        document.querySelector("main").addEventListener("click",function(){
            document.querySelector("main").getElementsByClassName.style.display="none";

        });
        

        //Weather//
        
        