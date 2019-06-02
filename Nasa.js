
fetch('https://api.nasa.gov/planetary/apod?api_key=2YfkmWKLeBzN0bdxPOb02fmWThMNIe9udbZU1LeI')
    .then((res) => res.json())
    .then((data) => {
        document.getElementById('apodImage').src = data.url;
        document.getElementById('apodHeader').innerHTML = data.title;
        document.getElementById('apodDesc').innerHTML = data.explanation;
        document.getElementById('apodLink').href = data.hdurl;
    });
    fetch('https://epic.gsfc.nasa.gov/api/natural')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            var epicImage = 'https://epic.gsfc.nasa.gov/epic-archive/jpg/'+data[0].image+'.jpg';
            document.getElementById('epicImage').src = epicImage;
            document.getElementById('epicHeader').innerHTML = data[0].title;
            document.getElementById('epicDesc').innerHTML = data[0].caption;
            document.getElementById('epicComment').innerHTML = 'Image Name: '+ data[0].image;
        });
    