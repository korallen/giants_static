console.log("giants.js is started!")

function getForecastCenterPage(){
    let mainBox = document.querySelector('#mainBox > div');
    let body = document.querySelector('body');
    const newContent = fetch('/dashboard.html').then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
        // Convert the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newContent = doc.querySelector('body > div');
        return newContent              
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });

    const changeScreen = () => {
        newContent.then((appData) => {
        mainBox.remove();
        body.append(appData);
        });
      }
      changeScreen();
}

function getComingSoonPage() {
    let mainBox = document.querySelector('#mainBox > div');
    let body = document.querySelector('body');
    const newContent = fetch('/comingsoon.html').then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {    
        // Convert the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newContent = doc.querySelector('body > div');
        return newContent    
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
    
    const changeScreen = () => {
        newContent.then((appData) => {
        mainBox.remove();
        body.append(appData);
        });
      }
      changeScreen();
  }


  function getSettingPage(){
    let mainBox = document.querySelector('#mainBox > div');
    let body = document.querySelector('body');

    const newContent = fetch('/setting.html').then(function (response) {
        // The API call was successful!
        return response.text();
    }).then(function (html) {
        // Convert the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const newContent = doc.querySelector('body > div');
        return newContent             
    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
    const changeScreen = () => {
        newContent.then((appData) => {
        mainBox.remove();
        body.append(appData);
        });
      }
      changeScreen();
  }

