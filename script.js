let getJSON = new XMLHttpRequest();
getJSON.open('get', 'data.json', true);
getJSON.send();

getJSON.onload = function(){
  if (this.readyState == 4 && this.status == 200) {
    let spents = JSON.parse(this.responseText);
   
    let days = spents.map(function(elem) {
      return elem.day
    })
    // console.log(days)

    let amounts = spents.map(function(elem) {
      return elem.amount
    })
    // console.log(amounts)

    const maxAmount = Math.max(...amounts)
    // console.log(maxAmount)
    
    const sumAmount = amounts.reduce(function(sum, i){
      return sum + i;
    })
    // console.log(sumAmount)

    document.getElementById('sumAmount').innerHTML = "$" + sumAmount;

    const barColors = "hsl(10, 79%, 65%)";
    const hoverBarColor = "hsl(186, 34%, 60%)";

    new Chart("myChart", {
      type: "bar",
      data: {
        labels: days,        
        datasets: [{
          backgroundColor: barColors,
          data: amounts,
        }]
      },

      options: {

        plugins: {
          legend: {
            display: false,
          }
        },

        borderRadius: 2,
        hoverBackgroundColor: hoverBarColor,
          
        scales: {
          x: {
              grid: {
                display: false,
                drawBorder: false,
              },
          },
          y: {
              beginAtZero: true,
              ticks: {
                display: false
              },
              grid: {
                display: false,
                drawBorder: false, 
              }   
          }
        }
      }
    });
  }
}


// ====================== FUNCIONANDO =========================

// const xmlhttp = new XMLHttpRequest();
// const url = './data.json';
// xmlhttp.open("GET", url, true);
// xmlhttp.send();
// xmlhttp.onreadystatechange = function(){
//   if (this.readyState === 4 && this.status === 200) {
//     const data = JSON.parse(this.responseText);
//     console.log(data)

//     const amounts = data.spents?.map(function(dados) {
//       return dados.amount;
//     });
//     const days = data.spents?.map(function(dados) {
//       return dados.day;
//     });
//     console.log(days)
    
//     console.log(amounts)

// const barColors = ["#ec775f"];

    
//     new Chart("myChart", {
//       type: "bar",
//       data: {
//         labels: days,
//         datasets: [{
//           backgroundColor: barColors,
//           data: amounts,
//         }]
//       },

//       options: {

//         plugins: {
//           legend: {
//             display: false,
//           }
//         },

//         borderRadius: 2,

        
        
//         scales: {
//           x: {
//               grid: {
//                 display: false
//               }
//           },
//           y: {
//               beginAtZero: true,
//               ticks: {
//                 display: false
//               },
//               grid: {
//                 display: false,
//               }   
//           }
//         }
//       }
//     });
//   } 
// }

// ====================== FUNCIONANDO =========================


// ====================== ESTÁTICO =========================

// var xValues = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// var yValues = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
// var barColors = ["#ec775f", "#ec775f","#76b5bc","#ec775f","#ec775f","#ec775f","#ec775f","#ec775f"];

// new Chart("myChart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues,
//     }]
//   },

//   options: {

//     plugins: {
//       legend: {
//         display: false,
//       }
//     },

//     borderRadius: 2,

    
    
//     scales: {
//       x: {
//           grid: {
//             display: false
//           }
//       },
//       y: {
//           beginAtZero: true,
//           ticks: {
//             display: false
//           },
//           grid: {
//             display: false,
//           }   
//       }
//     }


//   }
// });

// ====================== ESTÁTICO =========================


// ====================== SÓ TESTES =========================

// const $template = document.getElementById("template").content,
//     $fragment = document.createDocumentFragment(),
//     amounts= []

// const getDataAmounts = async () => {
//   const res = await fetch('./data.json')
//   const dataAmount = await res.json()

//   dataAmount.forEach(el => {
//     amounts.push(el.amount)
//   })

//   const maxAmount = Math.max(...amounts)

//   dataAmount.forEach(el => {
//     $template.querySelector(".amount-day").textContent = `$${el.amount.toFixed(2)}`;

//     $template.querySelector(".bar-day").style.height = `${(120/maxAmount)*el.amount}px`;

//     $template.querySelector(".day").textContent = `{el.day}`

//     $clone = $template.cloneNode(true)
//     if (el.amount === maxAmount) $clone.querySelector(".bar-day").classList.add('isMaxAmount')
//     $fragment.appendChild($clone)
//   })
//   document.getElementById("bar-chart").appendChild($fragment)
// }
// getDataAmounts()


// const myRequest = new Request('./data.json');

// // const obj = JSON.parse('./data.json')


// fetch(myRequest)
//   .then(response => response.json())
//   .then(data => {
//     const day = data.key;
//     const amount = data;

//     console.log(day)
//     console.log(amount)


//   })


// const dados = fetch('./data.json')

// console.log(dados)

// // Replace ./data.json with your JSON feed
// fetch('./data.json').then(response => {
//   return response.json();
// }).then(data => {

//   let dados = JSON.parse(data.values)
//   console.log(dados);
// }).catch(err => {
//   // Do something for an error here
// });

// $.getJSON("./data.json", function( data ) {
//   new Chart("myChart", {
//   type: 'bar',
//   data: data,
//   options: {
//      scales: {
//          yAxes: [{
//              ticks: {
//                  beginAtZero: true
//              }
//          }]
//      }
//    }
//   }); 
// }

