import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// ChartJS.register({
//     afterUpdate: function (chart) {
//         console.log('chart.js', chart.config.data.datasets)
//             var a=chart.config.data.datasets.length -1;
//             for (let i in chart.config.data.datasets) {
//                 for(var j = chart.config.data.datasets[i].data.length - 1; j>= 0;--j) { 
//                     if (Number(j) == (chart.config.data.datasets[i].data.length - 1))
//                         continue;
//                     var arc = chart.getDatasetMeta(i).data[j];
//                     arc.round = {
//                         x: (chart.chartArea.left + chart.chartArea.right) / 2,
//                         y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
//                         radius: chart.innerRadius + chart.radiusLength / 2 + (a * chart.radiusLength),
//                         thickness: chart.radiusLength / 2 - 1,
//                         backgroundColor: arc._model.backgroundColor
//                     }
//                 }
//                 a--;
//             }
//     },

//     afterDraw: function (chart) {
//             var ctx = chart.chart.ctx;
//             for (let i in chart.config.data.datasets) {
//                 for(var j = chart.config.data.datasets[i].data.length - 1; j>= 0;--j) { 
//                     if (Number(j) == (chart.config.data.datasets[i].data.length - 1))
//                         continue;
//                     var arc = chart.getDatasetMeta(i).data[j];
//                     var startAngle = Math.PI / 2 - arc._view.startAngle;
//                     var endAngle = Math.PI / 2 - arc._view.endAngle;

//                     ctx.save();
//                     ctx.translate(arc.round.x, arc.round.y);
//                     console.log(arc.round.startAngle)
//                     ctx.fillStyle = arc.round.backgroundColor;
//                     ctx.beginPath();
//                     //ctx.arc(arc.round.radius * Math.sin(startAngle), arc.round.radius * Math.cos(startAngle), arc.round.thickness, 0, 2 * Math.PI);
//                     ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
//                     ctx.closePath();
//                     ctx.fill();
//                     ctx.restore();
//                 }
//             }
//     },
// });


// Note: changes to the plugin code is not reflected to the chart, because the plugin is loaded at chart construction time and editor changes only trigger an chart.update().
// const image = new Image();
// image.src = 'https://www.chartjs.org/img/chartjs-logo.svg';

// export const plugin = {
//   id: 'customCanvasBackgroundImage',
//   beforeDraw: (chart) => {
//     if (image.complete) {
//       const ctx = chart.ctx;
//       const {top, left, width, height} = chart.chartArea;
//       const x = left + width / 2 - image.width / 2;
//       const y = top + height / 2 - image.height / 2;
//       ctx.drawImage(image, x, y);
//     } else {
//       image.onload = () => chart.draw();
//     }
//   }
// };
export const options = {
  plugins: {
    legend: {
      position: 'bottom', // Position de la légende au bas
      maxHeight: 40,
      maxWidth: 40,
    },

  },

  layout: {
    padding: {
      // Réglez le padding du graphique
  
      top: 30,    // Marge en haut
      bottom: 10, // Marge en bas
    },
  },
  // plugins: [plugin],
};


export function DonutChart({data}) {
  return <Doughnut data={data} options={options}  />;
}
