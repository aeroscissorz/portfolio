const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function showContent(contentType) {
    // Hide all content sections
    document.getElementById('skills-content').style.display = 'none';
    document.getElementById('education-content').style.display = 'none';
    document.getElementById('experience-content').style.display = 'none';

    // Show the selected content
    document.getElementById(`${contentType}-content`).style.display = 'block';
}

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
