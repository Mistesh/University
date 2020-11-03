
function toScroll(){
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors){
        anchor.addEventListener("click", function(event){
            event.preventDefault();
            const blockId = anchor.getAttribute('href')
            document.querySelector('' + blockId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    }
}





function changeBackground()
{
  let el = document.getElementsByClassName("block1");
  let el2 = document.getElementsByClassName("header_img");
  let el3 = document.getElementsByClassName("classnav");
  let el4 = document.getElementsByClassName("navullia");
  let el5 = document.getElementsByClassName("classfooter");
  if ((document.body.style.backgroundColor=="white") && (document.body.style.color=="white"))
  {
  document.body.style.backgroundColor="black";
  document.body.style.color="black";
  el[0].style.backgroundColor = 'white';
  el[1].style.backgroundColor = 'white';
  el[2].style.backgroundColor = 'white';
  el2[0].style.backgroundColor = 'white';
  el3[0].style.backgroundColor = 'white';
  el4[0].style.color="black";
  el4[1].style.color="black";
  el4[2].style.color="black";
  el4[3].style.color="black";
  el5[0].style.color = 'black';
  }
  else
  {
    document.body.style.backgroundColor="white";
    document.body.style.color="white";
    el[0].style.backgroundColor = 'black';
    el[1].style.backgroundColor = 'black';
    el[2].style.backgroundColor = 'black';
    el2[0].style.backgroundColor = 'black';
    el3[0].style.backgroundColor = 'black';
    el4[0].style.color="white";
    el4[1].style.color="white";
    el4[2].style.color="white";
    el4[3].style.color="white";
    el5[0].style.color = 'white';
  }
}



let flag=0;
function changePhoto()
{
  if (flag==0)
  {
  document.getElementById('photo1').src="images/Portret3.jpg";
  flag++;
  }
  else
  {
  document.getElementById('photo1').src="images/Portret1.jpg";
  flag--;
}

}
