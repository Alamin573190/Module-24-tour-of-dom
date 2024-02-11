const sections =document.querySelectorAll('section');
for(const section of sections){
 section.style.border='2px solid red';
 section.style.marginBottom='5px';
 section.style.paddingLeft ='5px';
 section.style.borderRadius ='10px';
 section.style.background ='gray';
};
// const section03 =document.getElementById('section-3');
// section03.style.background='silver';
const section03 =document.getElementById('section-3');
section03.classList.add('text-center');
section03.classList.remove('large-text');