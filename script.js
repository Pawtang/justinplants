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
