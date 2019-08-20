// // PART I
// $(document).ready(function () { // when page is ready, this annon function is fired
//     var urls = [
//         'https://dog.ceo/api/breed/beagle/images/random',
//         'https://dog.ceo/api/breed/chow/images/random',
//         'https://dog.ceo/api/breed/akita/images/random',
//         'https://dog.ceo/api/breed/eskimo/images/random',
//         'https://dog.ceo/api/breed/dingo/images/random'
//     ];
//     function buildPromiseFromUrl (url) {
//         const aPromise = $.get(url); // this is creating a promise object for one url at a time since it is being mapped
//         return aPromise; // this returns a promise object (5 promise objects total)
//     }

//     const arrayOfPromises = urls.map(buildPromiseFromUrl); // this maps the array of urls with the callback function and returns an array of promises
    
// // function printResponse (x) {
// //     console.log('promise resolved! and passed us x: ', x)
// //     return null
// // }

//     arrayOfPromises[0]
//         // .then(printResponse)
//         .then(arrayOfPromises[1])
//         // .then(printResponse)
//         .then(arrayOfPromises[2])
//         // .then(printResponse)
//         .then(arrayOfPromises[3])
//         // .then(printResponse)
//         .then(arrayOfPromises[4])
//         // .then(printResponse)
//         .then(function () { console.log('all the data was fetched!') })

// // PART II

//     Promise.all(arrayOfPromises)
//       .then(function (result) {
//           console.log('they all settled! ', result)
//           return $('body').html(`<img src="${result[0].message}"/><img src="${result[1].message}"/><img src="${result[2].message}"/><img src="${result[3].message}"/><img src="${result[4].message}"/>`)
//       })
//       .catch(function (problem) {
//           console.log('At least one fetch failed. Here is the problem: ', problem)
//       })
// });

// // PART III
// function addNumber (x,y) {
//     return new Promise (
//         function (resolve, reject) {
            
//         }
//     )
// }



// NEW NEW
$(document).ready(()=>{
    var urls = [
        'https://dog.ceo/api/breed/beagle/images/random',
        'https://dog.ceo/api/breed/chow/images/random',
        'https://dog.ceo/api/breed/akita/images/random',
        'https://dog.ceo/api/breed/dingo/images/random',
        'https://dog.ceo/api/breed/eskimo/images/random'
    ];
    function createPromiseObjectForEachLink (singleUrl) {
        let singlePromiseUrl = $.get(singleUrl)
        return singlePromiseUrl
    }
    const mapThroughEachIndex = urls.map(createPromiseObjectForEachLink)

    mapThroughEachIndex[0]
        .then(()=>{console.log('first data was fetched!')})
        .then(mapThroughEachIndex[1])
        .then(()=>{console.log('second data was fetched!')})
        .then(mapThroughEachIndex[2])
        .then(()=>{console.log('third data was fetched!')})
        .then(mapThroughEachIndex[3])
        .then(()=>{console.log('fourth data was fetched!')})
        .then(mapThroughEachIndex[4])
        .then(()=>{console.log('fifth data was fetched!')})

    Promise.all(mapThroughEachIndex)
        .then(function(result){console.log(result)})
        .then(()=>{console.log('all the data was fetched!')})
})