fetch('https://launchlibrary.net/1.4/launch/next/5')
    .then((res) => res.json())
    .then((data) => {
        document.getElementById('spaceHeader').innerHTML = data.launches[0].name;
        document.getElementById('launchDesc').innerHTML = data.launches[0].missions[0].description;
        setInterval(function(){

            //get launch date
            var date =new Date(data.launches[0].net);
            //get the current time
            var now = new Date();
            //get the difference between current time and launch time
            var timeDiff = Math.abs(date.getTime() - now.getTime());
            //Create the time variable to insert into the Dom
            var days=timeDiff/(24*60*60*1000);
            days = Math.trunc(days);
            var hours=(timeDiff-days*(24*60*60*1000))/(60*60*1000);
            hours = Math.trunc(hours);
            var minutes = (timeDiff - days * (24*60 * 60 * 1000)-hours*(60*60*1000)) / (60 * 1000);
            minutes=Math.trunc(minutes);
            var seconds = (timeDiff - days * (24 * 60 * 60 * 1000) - hours * (60 * 60 * 1000)-minutes*(60*1000)) / 1000;
            seconds= Math.trunc(seconds);
            var countdown=' '+ days+' Days, '+hours+' Hours, '+minutes+' Minutes, '+seconds+' Seconds';
            //Insert countdown into dom
            document.getElementById('launchTime').innerHTML=countdown;
        }, 1000);
        //Insert image into card
        document.getElementById('image1').src = data.launches[0].rocket.imageURL;
        //Insert Launching from
        var launchComplex1="Launching from: "+data.launches[0].location.name;
        document.getElementById('launchComplex1').innerHTML=launchComplex1;
    });
fetch('https://launchlibrary.net/1.4/launch/next/5')
    .then((res) => res.json())
    .then((data) => {
        document.getElementById('spaceHeader2').innerHTML = data.launches[1].name;
        document.getElementById('launchDesc2').innerHTML = data.launches[1].missions[0].description;
        setInterval(function(){
            //get launch date
            var date = new Date(data.launches[1].net);
            //get the current time
            var now = new Date();
            //get the difference between current time and launch time
            var timeDiff = Math.abs(date.getTime() - now.getTime());
            //Create the time variable to insert into the Dom
            var days = timeDiff / (24 * 60 * 60 * 1000);
            days = Math.trunc(days);
            var hours = (timeDiff - days * (24 * 60 * 60 * 1000)) / (60 * 60 * 1000);
            hours = Math.trunc(hours);
            var minutes = (timeDiff - days * (24 * 60 * 60 * 1000) - hours * (60 * 60 * 1000)) / (60 * 1000);
            minutes = Math.trunc(minutes);
            var seconds = (timeDiff - days * (24 * 60 * 60 * 1000) - hours * (60 * 60 * 1000) - minutes * (60 * 1000)) / 1000;
            seconds = Math.trunc(seconds);
            var countdown = days + ' Days, ' + hours + ' Hours, ' + minutes + ' Minutes, ' + seconds + ' Seconds';
            //Insert countdown into dom
            document.getElementById('launchTime2').innerHTML = countdown;
        }, 1000);
        document.getElementById('image2').src = data.launches[1].rocket.imageURL;
        //Insert Launching from
        var launchComplex1 = "Launching from: " + data.launches[1].location.name;
        document.getElementById('launchComplex2').innerHTML = launchComplex1;
    });
fetch('https://launchlibrary.net/1.4/launch/next/5')
    .then((res) => res.json())
    .then((data) => {
        document.getElementById('spaceHeader3').innerHTML = data.launches[2].name;
        document.getElementById('launchDesc3').innerHTML = data.launches[2].missions[0].description;
        setInterval(function () {
            //get launch date
            var date = new Date(data.launches[2].net);
            //get the current time
            var now = new Date();
            //get the difference between current time and launch time
            var timeDiff = Math.abs(date.getTime() - now.getTime());
            //Create the time variable to insert into the Dom
            var days = timeDiff / (24 * 60 * 60 * 1000);
            days = Math.trunc(days);
            var hours = (timeDiff - days * (24 * 60 * 60 * 1000)) / (60 * 60 * 1000);
            hours = Math.trunc(hours);
            var minutes = (timeDiff - days * (24 * 60 * 60 * 1000) - hours * (60 * 60 * 1000)) / (60 * 1000);
            minutes = Math.trunc(minutes);
            var seconds = (timeDiff - days * (24 * 60 * 60 * 1000) - hours * (60 * 60 * 1000) - minutes * (60 * 1000)) / 1000;
            seconds = Math.trunc(seconds);
            var countdown = days + ' Days, ' + hours + ' Hours, ' + minutes + ' Minutes, ' + seconds + ' Seconds';
            //Insert countdown into dom
            document.getElementById('launchTime3').innerHTML = countdown;
        }, 1000);
        document.getElementById('image3').src = data.launches[2].rocket.imageURL;
        //Insert Launching from
        var launchComplex1 = "Launching from: " + data.launches[2].location.name;
        document.getElementById('launchComplex3').innerHTML = launchComplex1;
    });
