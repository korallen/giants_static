console.log("giants.js is started!")

function getForecastCenterPage(){
    let mainBox = document.querySelector('#mainBox > div');
    let body = document.querySelector('body');
    mainBox.remove();

    fetch('/dashboard.html').then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
    
        // Convert the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        let newContent = doc.querySelector('body > div');
        body.append(newContent);

            
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}

function getComingSoonPage() {
    let mainBox = document.querySelector('#mainBox > div');
    let body = document.querySelector('body');
    mainBox.remove();

    fetch('/comingsoon.html').then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
    
        // Convert the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        let newContent = doc.querySelector('body > div');
        body.append(newContent);

    
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
  }

  function getSettingPage(){
    console.log("개발시작!");

    let mainBox = document.querySelector('#mainBox > div');
    let body = document.querySelector('body');
    mainBox.remove();

    fetch('/setting.html').then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
    
        // Convert the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        let newContent = doc.querySelector('body > div');
        body.append(newContent);

            
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

  }

