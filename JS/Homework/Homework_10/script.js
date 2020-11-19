//////////////////////////////////////CALL BACK HELLLLLLLLLLLLLLLLLLLLLLLLLLLLLl
// function weakUp (son, next){
//     if(son === 'Im WeakUp'){
//         setTimeout(()=>{
//             console.log(son)
//             next('Go clean Teeth', (ev, next)=>{
//                 if(ev === 'Go to school'){
//                     setTimeout(()=>{
//                         console.log(ev)
//                         next("One more lesson and go home", (ev, next)=>{
//                             if(ev === "Go home now"){
//                                 setTimeout(()=>{
//                                     console.log(ev)
//                                     next("Go sleep")
//                                 },4000)
//                             }else{
//                                 console.log("Im dead")
//                             }
//                         })
//                     },2000)
//                 }else{
//                     console.log("Im dead")
//                 }
//
//             })
//         }, 500)
//     }else{
//         console.log("Im dead")
//     }
//
// }
// weakUp('Im WeakUp', (nextEv, next)=>{
//     if(nextEv === 'Go clean Teeth'){
//         setTimeout(()=>{
//             console.log(nextEv)
//             next('Go to school', (ev, next)=>{
//                 if(ev === "One more lesson and go home"){
//                     setTimeout(()=>{
//                         console.log(ev)
//                         next("Go home now", (ev)=>{
//                             if(ev === "Go sleep"){
//                                 setTimeout(()=>{
//                                     console.log(ev)
//                                 },5000)
//                             }else{
//                                 console.log('Im dead')
//                             }
//                         })
//                     },3000)
//                 }else {
//                     console.log('Im dead')
//                 }
//             })
//         },1000)
//     }else{
//         console.log('Im dead')
//     }
// })
//////////////////////////////////////CALL BACK HELLLLLLLLLLLLLLLLLLLLLLLLLLLLLl

////////////////////////////////////////Promise
// let energy = 1000
// function weakUp(ev){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             ev -= 200
//             if (ev <= 0){
//                 reject('Im Dead')
//             }
//             resolve(ev)
//         }, 2000)
//
//     })
// }
// function cleanTheth(ev){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             ev -= 300
//             if (ev <= 0){
//                 reject('Im Dead')
//             }
//             resolve(ev)
//         },4000)
//     })
// }
// function eat(ev){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             ev += 1000
//             if (ev <= 0){
//                 reject('Im Dead')
//             }
//             resolve(ev)
//         },1000)
//     })
// }
// function goBead(ev){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             ev -= 500
//             if (ev <= 0){
//                 reject('Im Dead')
//             }
//             resolve(ev)
//         },1000)
//     })
// }
// function doneForToday(ev){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             ev -= 500
//             if (ev <= 0){
//                 reject('Im Dead')
//             }
//             resolve(ev)
//         },5000)
//     })
// }
// weakUp(energy)
//     .then(ev => {console.log('Im WakeUp')
//         return cleanTheth(ev)})
//     .then(ev => {console.log('Clean Teeth')
//         return  eat(ev)})
//     .then(ev => {console.log('Im Full')
//         return  goBead(ev)})
//     .then(ev=>{
//         console.log('Long way to home')
//         return  doneForToday(ev)})
//     .then(ev=>{
//         console.log('Im Done for today')
//         console.log(ev)})
////////////////////////////////////////Promise