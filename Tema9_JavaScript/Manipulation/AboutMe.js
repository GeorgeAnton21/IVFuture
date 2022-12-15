document.body.style.fontFamily = 'Arial, sans-serif';
document.getElementById('nickname').textContent = 'Stitch ';
document.getElementById('favorites').textContent = 'music, Lilo';
document.getElementById('hometown').textContent = ' Kauaʻi, Hawaii';
var items = document.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
   items[i].className = 'list-item';
}

 var myPic = document.createElement('img');
 myPic.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/800px-Stitch_%28Lilo_%26_Stitch%29.svg.png';
 document.body.appendChild(myPic);