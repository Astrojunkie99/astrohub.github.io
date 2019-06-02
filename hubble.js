//setInterval(function(){
var randomNumber= Math.floor(Math.random()*4500);
document.getElementById('image-refresh').addEventListener("click",newRandomNumber);
function newRandomNumber() {
    randomNumber= Math.floor(Math.random() * 4500);
    var proxy = 'https://cors-anywhere.herokuapp.com';
    var api = proxy + '/http://hubblesite.org/api/v3/image/' + randomNumber;
    fetch(api)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById('hubbleCap').innerText = data.name;
            document.getElementById('hubbleMission').innerText = data.mission;
            var arrayLength = data.image_files.length;
            document.getElementById('1').src = data.image_files[arrayLength - 1].file_url;
        });
}
var proxy = 'https://cors-anywhere.herokuapp.com';
var api = proxy+'/http://hubblesite.org/api/v3/image/'+randomNumber;
fetch(api)
    .then((res) => res.json())
    .then((data) => {
         document.getElementById('hubbleCap').innerText = data.name;
         document.getElementById('hubbleMission').innerText = data.mission;
        var arrayLength = data.image_files.length;
        document.getElementById('1').src = data.image_files[arrayLength - 1].file_url;
    });