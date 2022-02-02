// var currentDomain = new URL(location.href).hostname;
//
// document.addEventListener("click", e => {
//     increaseEventCounter("click");
// })
//
// function increaseEventCounter(event) {
//
//     chrome.storage.local.get(['Named1'],(result) => {
//         let Named1 = result.Named1;
//         let currentWebsiteEventCounter = Named1.get(currentDomain).get(event);
//         Named1.get(currentDomain).set(event, currentWebsiteEventCounter + 1);
//
//         chrome.storage.local.set({'Named1' : Named1});
//     })
// }


// var link = document.createElement("a");
// link.textContent = "Save as CSV";
// link.download = "file.csv";
// link.href = "data:text/csv,h1;All Questions\n"
// document.body.appendChild(link);

// function getCSVLinkElement(arr){
//
//     var link = document.createElement("a");
//     link.textContent = "Save as CSV";
//     link.download = "file.csv";
//     var csv = arr.map(function(v){return v.join(',')}).join('\n');
//     link.href = encodeURI("data:text/csv,"+csv);
//
//     return link;
//
// }
//
// var el = getCSVLinkElement([['num','sq'],[2,4],[3,9]]);
// document.body.appendChild(el);

// function getCSVLinkElement(arr){
//
//     var link = document.createElement("a");
//     link.textContent = "Save as a CSV";
//     link.download = "file.csv";
//     var csv = arr.map(function(v){return v.join(',')}).join('\n');
//     link.href = encodeURI("data:text/csv," +csv);
//
//     return link;
// }
//
// var el = getCSVLinkElement([['num','sq'],[2,4],[3,9]]);
// document.body.appendChild(el);
