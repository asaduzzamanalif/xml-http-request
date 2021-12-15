'use strict';

// DOM Selector
let textData = document.querySelector('.textData');

// Create Element 
let section,img,appName,company;


// Create Function for XML Request

function xmlRequest () {
    
    // Create XHR Object => XML Http Request

    let dataReq = new XMLHttpRequest;

    // Open Function
    dataReq.open( 'GET', 'data.json', true );

    dataReq.onload = function () {
        if ( this.status === 200 ) {

            // Get Response Data
            let jsonData = this.responseText;

            // Convert JSON to Object
            let allItems = JSON.parse(jsonData);

            // For Loop
            for ( let x in allItems ) {

                let item = allItems[x];

                // Create Element
                section = document.createElement('section');

                // Get Images
                img = document.createElement('img');
                img.setAttribute('src', `${item.icon}`);

                // Get App Name
                appName = document.createElement('div');
                appName.textContent =  item.name

                // Get Company Name
                company = document.createElement('div');
                company.textContent = item.company;
                
                section.append(img, appName, company);
                textData.appendChild(section);

            };
        };
    }; 

    // Send Request

    dataReq.send();
}

xmlRequest();