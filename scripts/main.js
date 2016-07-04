"use strict;"
jQuery(document).ready(function() {
	$('.carousel').carousel({
    	pause: "false",
    	interval: 7000
	});
        
        var ctx = $("#myChart");
//        var myChart = new Chart(ctx, {
//    type: 'bar',
//    data: {
//           labels: ["January", "February", "March", "April", "May", "June", "July"],
//    datasets: [
//        {
//            label: "My First dataset",
//            backgroundColor: "rgba(255,99,132,0.2)",
//            borderColor: "rgba(255,4,132,1)",
//            borderWidth: 1,
//            hoverBackgroundColor: "rgba(255,99,132,0.4)",
//            hoverBorderColor: "rgba(255,99,132,1)",
//            data: [65, 59, 80, 81, 56, 55, 40],
//        }
//    ]
//    },
//    options: {
// 
//        title: {
//            display: true,
//            text: 'Custom Chart Title',
//            fontColor: 'rgb(50, 99, 13)',
//            titleFontColor: 'rgb(0, 9, 132)',
//            footerFontColor: 'rgb(50, 99, 13)'
//        },
//        legend: {
//            display: true,
//            labels: {
//                fontColor: 'rgb(0, 99, 132)'
//            }
//        },
//        scales: {
//            yAxes: [{
//                ticks: {
//                    beginAtZero:true,
//                     fontColor: 'rgb(0, 99, 132)'
//                }
//            }],
//            
//            xAxes: [{
//                ticks: {
//                   
//                     fontColor: 'rgb(0, 99, 132)'
//                }
//            }]
//        }
//    }
//});



// For a pie chart
var myPieChart = new Chart(ctx,{
    type: 'doughnut',
    data:  {  
     labels: [
        "HTML",
        "CSS",
        "Javascript"
    ],
    datasets: [
        {
            label: "My First dataset",
             defaultFontColor :  "rgba(255,4,132,1)",     
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
 
       
},

    options: {
// 
////Boolean - Whether we should show a stroke on each segment
//	segmentShowStroke : true,
//	
//	//String - The colour of each segment stroke
//	segmentStrokeColor : "#fff",
//	
//	//Number - The width of each segment stroke
//	segmentStrokeWidth : 2,
//	
//	//The percentage of the chart that we cut out of the middle.
//	percentageInnerCutout : 50,
//	
//	//Boolean - Whether we should animate the chart	
	
//	
//	//Number - Amount of animation steps
//	animationSteps : 100,
//	
//	//String - Animation easing effect
//	animationEasing : "easeOutBounce",
//	
//	//Boolean - Whether we animate the rotation of the Doughnut
//	animateRotate : true,
//
//	//Boolean - Whether we animate scaling the Doughnut from the centre
//	animateScale : false,
//	
//	//Function - Will fire on animation completion.
//	onAnimationComplete : null,
        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(255, 255, 255)'
            }
        }
    }
      




});



   }); 
  

