let links=document.querySelectorAll(".navElements");
let nav=document.querySelector("#navbar");
let companyName=document.querySelector("#companyName");
let aboutUs=document.querySelector("#tag");
let hovered=false;

tag.addEventListener("mouseenter",()=>{
    aboutUs.style.backgroundColor="red";
});

tag.addEventListener("mouseleave",()=>{
    aboutUs.style.backgroundColor="rgb(54, 54, 234)";
})

for(link of links)
{
    link.addEventListener("mouseenter",(evt)=>{
        if(hovered==false)
        {
            evt.target.style.color="yellow";
        }
        else
        {
            evt.target.style.color="red";
        }
    });

    link.addEventListener("mouseleave",(evt)=>{
        if(hovered==false)
        {
            evt.target.style.color="white";
        }
        else
        {
            evt.target.style.color="rgb(81, 165, 220)";
        }
    });
}

function colorChange()
{
    if(window.scrollY>0)
    {
        companyName.style.color="rgb(81, 165, 220)";
        for(link of links)
        {
            link.style.color="rgb(81, 165, 220)";
        }
        nav.style.backgroundColor="white";
        hovered=true;
    }
    else
    {
        companyName.style.color="white";
        for(link of links)
        {
            link.style.color="white";
        }
        nav.style.backgroundColor="#3636ea";
        hovered=false;
    }
}


window.addEventListener("scroll",colorChange);