var txtList = [
    'Lorem ipsum', 'dolor', 'sit amet',
    'Lorem ipsum dolor sit amet'
], 	idx = 0,
    p = document.getElementById('p1');


//window.onload = function(){
//  fadein();
//}
// document.getElementById('btn1').addEventListener('click', fadein);

function fadein() {
    p.classList.add('hide');
    setTimeout(function() {
        p.textContent = txtList[idx];
        idx = (idx + 1) % txtList.length;
    }, 500);
    setTimeout(function() {
        p.classList.remove('hide')
    }, 500);
}


document.getElementById("bloom").addEventListener("click", function(){
    const  body = document.getElementsByTagName('body')[0];
    const  htmlb = document.getElementsByTagName('html')[0];
    body.style.backgroundImage = 'none';
    htmlb.style.backgroundImage = 'none';
    htmlb.style.background =  'rgba(212, 252, 121)';
    body.style.background = 'rgba(212, 252, 121)';
  });