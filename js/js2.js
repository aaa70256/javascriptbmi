var cm = document.querySelector(".cm");
var kg = document.querySelector(".kg");
var btn = document.querySelector(".btn");
var list = document.querySelector(".list");
let da = JSON.parse(localStorage.getItem('think')) || [];

function click(e){
    var str="";
    var height = cm.value;
    var weight = kg.value;
    var BMI = Math.floor((weight / Math.pow(height, 2) * 10000) * 10) / 10;
    var todo = {
        count1:BMI,
        count2:height,
        count3:weight
    };

    if(height==""){
        alert("請輸入身高");
    }else if(weight==""){
        alert("請輸入體重");
    }

    if(BMI>="18.5" && BMI<"24"){
        btn.setAttribute("class","btn1");
        str = "<p>"+BMI+"</p><p>理想</p>"
    }else if(BMI<"18.5"){
        btn.setAttribute("class","btn2");
        str = "<p>"+BMI+"</p><p>過瘦</p>"
    }else if(BMI>="24"&&BMI<"27"){
        btn.setAttribute("class","btn3");
        str = "<p>"+BMI+"</p><p>過重</p>"
    }else if(BMI>="27"&&BMI<"30"){
        btn.setAttribute("class","btn4");
        str = "<p>"+BMI+"</p><p>輕度肥胖</p>"
    }else if(BMI>="30"&&BMI<"35"){
        btn.setAttribute("class","btn5");
        str = "<p>"+BMI+"</p><p>中度肥胖</p>"
    }else{
        btn.setAttribute("class","btn6");
        str = "<p>"+BMI+"</p><p>重度肥胖</p>"
    }
    btn.innerHTML = str;
    da.push(todo);
    updatelist(da);
    localStorage.setItem("think",JSON.stringify(da));
}

function updatelist(items){
    var str1="";
    var len = items.length;
    list.innerHTML = '';
    var abc = document.querySelector(".box");
    for(var i=0;i<len;i++){
        if(items[i].count1>="18.5" &&items[i].count1<"24"){
    str1+="<li><div class='box'><small>BMI</small>"
    +items[i].count1+"</div><div class='box2'><small>width</small>"
    +items[i].count3+"</div><div class='box1'><small>height</small>"
    +items[i].count2+"</div><a href='#' data-index="+i+">刪除</a></li>"
    }else if(items[i].count1<"18.5"){
        str1+="<li><div class='boxa'><small>BMI</small>"
        +items[i].count1+"</div><div class='box2'><small>width</small>"
        +items[i].count3+"</div><div class='box1'><small>height</small>"
        +items[i].count2+"</div><a href='#' data-index="+i+">刪除</a></li>"
        }else if(items[i].count1>="24"&&items[i].count1<"27"){
            str1+="<li><div class='boxb'><small>BMI</small>"
            +items[i].count1+"</div><div class='box2'><small>width</small>"
            +items[i].count3+"</div><div class='box1'><small>height</small>"
            +items[i].count2+"</div><a href='#' data-index="+i+">刪除</a></li>"
            }else if(items[i].count1>="27"&& items[i].count1<"30"){
                str1+="<li><div class='boxc'><small>BMI</small>"
                +items[i].count1+"</div><div class='box2'><small>width</small>"
                +items[i].count3+"</div><div class='box1'><small>height</small>"
                +items[i].count2+"</div><a href='#' data-index="+i+">刪除</a></li>"
                }else if(items[i].count1>="30"&&items[i].count1<"35"){
                    str1+="<li><div class='boxd'><small>BMI</small>"
                    +items[i].count1+"</div><div class='box2'><small>width</small>"
                    +items[i].count3+"</div><div class='box1'><small>height</small>"
                    +items[i].count2+"</div><a href='#' data-index="+i+">刪除</a></li>"
                    }else{
                        str1+="<li><div class='boxe'><small>BMI</small>"
                        +items[i].count1+"</div><div class='box2'><small>width</small>"
                        +items[i].count3+"</div><div class='box1'><small>height</small>"
                        +items[i].count2+"</div><a href='#' data-index="+i+">刪除</a></li>"
                        }  

}
    list.innerHTML =str1;
}

function done(e){
    e.preventDefault();
    if(e.target.nodeName !=="A"){return};
    var index = e.target.dataset.index;
    da.splice(index, 1);
    localStorage.setItem("think",JSON.stringify(da));
    updatelist(da);
}

btn.addEventListener("click",click);
list.addEventListener("click",done);
updatelist(da);