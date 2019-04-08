let bigDiv,watch,head,str1,str2,str3,str4,bool,word_wrap;
let id=0;
init();
function init() {
    watch=document.getElementById("watch");
    head=document.getElementById("head_wrap");
    str1="全场包邮（默认发顺丰快递）";
    str2="如超出顺丰配送范围，我们会使用EMS快递为您配送，请您保持手机畅通，以方便快递人员给您派送货物。<br>\n" +
        "近期北京，新疆对全区物流，快递企业实施严苛的监管，收件需要凭借取件密码和身份证，投递时效将受到影响，感谢您的耐心等待。祝您购物愉快！";
    str3="注册有礼";
    str4="即日起，成功注册会员即可获得新客优惠券：50元满499使用，100元满699使用，200元满1399使用;（温馨提示：注册成功后，优惠券将以邮件的形式发送到您的注册邮箱，还请点击领取使用，祝您购物愉快！）";
    watch.addEventListener("click",clickHandler);
    bool=true;
    bigDiv=document.createElement("div");
    Object.assign(bigDiv.style,{
        height:"0",
        transition:"0.35s",
    });
    document.querySelector("header").insertBefore(bigDiv,head);
}

function clickHandler(e) {
    if(!bool){
        console.log(bool);
        document.querySelector("header").firstElementChild.style.height=0;
        document.querySelector("header").firstElementChild.textContent="";
        bool=!bool;
        return;
    }
    Object.assign(bigDiv.style,{
        height:"292px",
        backgroundColor:"#000",
        position:"relative",
    });
        word_wrap=document.createElement("div");
        Object.assign(word_wrap.style,{
            width:"703px",
            height:"202px",
            position:"absolute",
            top:"0",
            bottom:"0",
            left:"0",
            right:"0",
            margin:"auto",
            transition:"0.35s"
        });
    createCont(word_wrap,"100px","60px",str1,str2);
    createCont(word_wrap,"80px","40px",str3,str4);
    createDelete(bigDiv);
    bigDiv.appendChild(word_wrap);
    if(e.target===HTMLSpanElement){
        this.parentElement.style.height="0";
        this.nextElementSibling.textContent="";
        this.remove();
    }
    if(e.target===HTMLDivElement){
        console.log(e.target);
        watch.style.color="red";
    }
}


function createCont(parent,h1,h2,text1,text2) {
    bool=false;
    let div=document.createElement("div");
    let p1=document.createElement("p");
    let p2=document.createElement("p");
    Object.assign(div.style,{
        width:"652px",
        padding:"0 0 0 20px",
        height:h1,
        marginBottom:"10px",
        borderLeft:"1px solid #ccc"
    });
    Object.assign(p1.style,{
        width:"652px",
        height:"30px",
        color:"#f7f7f7",
        fontSize:"30px",
        marginBottom:"10px",
        fontWeight:"700"
    });
    Object.assign(p2.style,{
        width:"652px",
        height:h2,
        fontSize:"13px",
        color:"#999",
        lineHeight:"1.6",
        marginBottom:"16.5px",
    });
    p1.textContent=text1;
    p2.innerHTML=text2;
    div.appendChild(p1);
    div.appendChild(p2);
    div.addEventListener("click",clickHandler);
    parent.appendChild(div);
}

function createDelete(parent) {
    let span=document.createElement("span");
    span.setAttribute("class","iconfont icon-fork");
    Object.assign(span.style,{
        position:"absolute",
        right:"15px",
        top:"4px"
    });
    span.getAttribute("class","icon-fork");
    span.addEventListener("click",clickHandler);
    span.addEventListener("mouseenter",mouseHandler);
    span.addEventListener("mouseleave",mouseHandler);
    parent.appendChild(span);
}

function mouseHandler(e) {
    if(e.type==="mouseenter"){
        this.style.color="red";
    }else {
        this.style.color="white";
    }
}
