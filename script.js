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


const scriptURL = 'https://script.google.com/macros/s/AKfycbzvZlmARNFvLOjh-VHRbM44EPkxypAOsJhNUIXX5r4f7XrV-pzNr01ao5gM0npvCBag/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 
 .catch(error => console.error('Error!', error.message))
})
