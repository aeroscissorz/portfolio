function loadingAnimation(){
    
gsap.from("#page1 h2,p,img",
{ y:-80,
 opacity:0,
 delay:0.1,
 duration:0.8,
 stagger:0.3

})
}
loadingAnimation()