//this function helps to create a Bill and rating based tip generator.
function calculateTip() {
    //select each input values to perform operation.
    //using queryselector to fetch values
    const amount = document.querySelector('#billAmount').value;
    const persons = document.querySelector('#noOfPersons').value;
    const rating = document.querySelector('#ratingForTip').value;

    if (amount === '' || rating === '0') {
        alert("Please enter valid values");
        return;
    }

    if (persons === '' || persons === '0') {
        alert("Please enter the minmum person");
        return;
    }

    const tips = amount * rating;
    document.getElementById("totalTips").innerText = tips;


    const totals = +amount + +tips;
    document.getElementById("totalAmount").innerText = totals;

    document.getElementById("peopleShare").innerText = totals / persons;

}

document.getElementById("calculate").onclick = function () {
    calculateTip();

/*     const app = navigator.geolocation;
    app.getCurrentPosition(success, failure);

    function success(position)
    {
        const myLat = position.coords.latitude;
        const myLong = position.coords.longitude;

        const coords = new google.maps.LatLng(myLat,myLong);

        const mapOptions = {
            zoom : 9,
            center : coords,
            mapTypeId : google.maps.MapTypeId.ROADMAP
        } 
        const map = new google.maps.Map(document.getElementById("map"),mapOptions);
        const marker = new google.map.Marker({map:map, position:coords});
    }
    
    function failure(){}
    
 */
};