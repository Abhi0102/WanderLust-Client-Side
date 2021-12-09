import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { element } from 'protractor';
import { CoronaService } from '../corona/corona.service';


declare var d3: any
declare var Datamap: any
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  selectedState = 10;
  stateWiseData;
  constructor(private coronaService: CoronaService) { }

  ngOnInit(): void {
    this.coronaService.getStateWise().subscribe((response) => {this.stateWiseData=response; this.drawMap(response) })
    // this.drawMapAgain();
    // var data:'hey';
    // this.drawMap(this.data);
    // this.drawAgain();
    // this.coronaService.getTestData().subscribe((response) => { this.draw_map([response]) })


  }

  // drawMapAgain(){
  //   var map = new Datamap({
  //     element: document.getElementById('india'),
  //     scope: 'usa'
  // });

  // }

  drawMap(data) {

    var refinedData = data;

    // console.log(refinedData);
    // console.log(Object.keys(data))
    // console.log(refinedData)
    for (var key in refinedData) {
      var temp;
      // console.log(key)
      if (refinedData.hasOwnProperty(key)) {
        temp = refinedData[key].total;
        delete refinedData[key];
        if (key === 'TG') {
          key = 'TS';
        }
        else if (key === 'UT') {
          key = 'UK';
        }
        else if (key === 'OR') {
          key = 'OD';
        }
        refinedData[key] = temp;
        // console.log(r)
      }
    }
    console.log(refinedData)
    // console.log(data);
    // var map = new Datamap({
    //   element: document.getElementById('india'),
    //   scope: 'india'
    // });

    var tempSelectedState = [];
    var tempSelectedData;
    var map = new Datamap({
      element: document.getElementById('india'),
      scope: 'india',
      responsive: true,
      data: refinedData,
      fills: {
        defaultFill: '#343a40'
      },
      geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        borderColor: '#dc3545',
        borderWidth: 1,
        highlightBorderWidth: 3,
        highlightBorderOpacity: 1,
        highlightFillColor: '#343a40',
        highlightBorderColor: '#db251b',
        popupTemplate: function (geo, data) {
          // console.log(geo)
          // console.log(data)
          sessionStorage.setItem('selectedState',geo.properties.name)
          document.getElementById('hey').innerHTML = `<h2>${geo.properties.name}</h2><h5>${data.confirmed}</h5>confirmed`;
          // tempSelectedState.push(geo.properties.name);

          // tempSelectedState[geo.properties.name]=data;
          // console.log(tempSelectedState);
          // this.selectedState=tempSelectedState;
          // console.log(tempSelectedState);
          // return `<div class="hoverinfo"><strong>Total ${data.confirmed} confirmed cases in ${geo.properties.name}</strong></div>`;
        },
        dataUrl: 'https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json'
      }, 

      done: function(datamap){
        datamap.svg.selectAll('.datamaps-subunit').on('mouseleave',function (geography) {
          console.log("YO");
        })
       
      },
      // done: function (datamap) {
        // datamap.svg.selectAll('.datamaps-subunit').on('mouseout', function (geography) {
          
          // this.selectedState=;
          // 
          // hey(geography.properties.name);
          // tempSelectedState=geography.properties.name;
          // console.log(this.selectedState);
          // console.log(tempSelectedState)
          // alert(geography.properties.name);
        // });

      // },
      setProjection: function (element) {
        // console.log(d3.geo);
        var projection = d3.geo.mercator()
          .center([78.9629, 23.5937]) // always in [East Latitude, North Longitude]
          .scale(1000);
        var path = d3.geo.path().projection(projection);
        return { path: path, projection: projection };
      }

    });


  }

  hey() {
    console.log(this.selectedState);
    // console.log(e.target.attr('class'))
  }

  //   drawAgain() {
  //     var map = new Datamap({
  //       element: document.getElementById('india'),
  //       scope: 'india',
  //       geographyConfig: {
  //           popupOnHover: true,
  //           highlightOnHover: true,
  //           borderColor: '#444',
  //           borderWidth: 0.5,
  //           dataUrl: 'https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json'
  //           //dataJson: topoJsonData
  //       },
  //       fills: {
  //           'MAJOR': '#306596',
  //           'MEDIUM': '#0fa0fa',
  //           'MINOR': '#bada55',
  //           defaultFill: '#343a40'
  //       },
  //       data: {
  //           'JH': { fillKey: 'MINOR' },
  //           'MH': { fillKey: 'MINOR' }
  //       },
  //       setProjection: function (element) {
  //         console.log(element)
  //           var projection = d3.geo.mercator()
  //               .center([78.9629, 23.5937]) // always in [East Latitude, North Longitude]
  //               .scale(1000);
  //           var path = d3.geo.path().projection(projection);
  //           return { path: path, projection: projection };
  //       }
  // });
  // }





  // draw_map(map_data) {

  //   var maximum = 0;
  //   map_data.forEach(element => {
  //     console.log(element.statewise.confirmed)
  //     if (element.confirmed_corona_cases > maximum) {
  //       maximum = element.confirmed_corona_cases
  //     }
  //     this.mapData.push(
  //       [element.state_name, element.confirmed_corona_cases]
  //     )
  //   });
  //   console.log(this.mapData);

  //   var batchSize = Math.floor(maximum / 6);


  //   this.ffff = {
  //     1: '#fff5f0',
  //     2: '#fdd5c3',
  //     3: '#fca487',
  //     4: '#fa7052',
  //     5: '#e8392c',
  //     6: '#bc171c',

  //   }
  //   var fillingColors = { defaultFill: 'white' }
  //   let upperBound = batchSize, lowerBound = 1
  //   for (let i = 1; i <= 5; i++) {
  //     fillingColors[`${lowerBound} - ${upperBound}`] = this.ffff[i]
  //     this.fill_keys[i] = `${lowerBound} - ${upperBound}`
  //     lowerBound = upperBound + 1
  //     upperBound += batchSize
  //   }

  //   fillingColors[`${lowerBound}+`] = this.ffff[6]
  //   this.fill_keys[6] = `${lowerBound}+`

  //   var d3DataMaps = {}
  //   console.log(fillingColors)
  //   this.mapData.forEach(element => {
  //     let stateId = this.state_name_id_map[element[0]]
  //     var colorCode = Math.ceil(element[1] / batchSize);
  //     colorCode = colorCode > 6 ? 6 : colorCode
  //     d3DataMaps[stateId] = {
  //       fillKey: this.fill_keys[colorCode],
  //       total_confirmed: element[1]
  //     }
  //   })


  //   console.log(d3DataMaps)
  //   var bubble_map = new Datamap({
  //     element: document.getElementById('india'),
  //     scope: 'india',
  //     responsive: true,
  //     geographyConfig: {
  // popupOnHover: true,
  // highlightOnHover: true,
  // borderColor: '#fa7052',
  // borderWidth: 1,
  // highlightBorderWidth: 2,
  // highlightBorderOpacity: 1,
  //       highlightFillColor: function (data) {
  //         if (data.fillKey) {
  //           return fillingColors[data.fillKey];
  //         }
  //         return '#FC8D59';
  //       },
  //       highlightBorderColor: '#bc171c',
  //       popupTemplate: function (geo, data) {

  //         var x = [
  //           '<div class="hoverinfo"><strong>',
  //           `Total ${data.total_confirmed} confirmed cases in ${data.geo} `,
  //           '</strong></div>'].join('')

  //         return x;
  //       },
  //       dataUrl: 'https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json'
  //       //dataJson: topoJsonData
  //     },
  //     fills: fillingColors,
  //     data: d3DataMaps,
  //     setProjection: function (element) {
  //       var projection = d3.geo.mercator()
  //         .center([96.9629, 10.5937]) // always in [East Latitude, North Longitude]
  //         .scale(element.clientWidth + 300).translate([(element.clientWidth + 300) / 2, (300 + element.clientWidth) / 2]);
  //       var path = d3.geo.path().projection(projection);
  //       return { path: path, projection: projection };
  //     }
  //   });
  //   let bubbles = [


  //   ]

  //   Datamap.prototype.resize = function () {

  //     var self = this;
  //     var options = self.options;

  //     if (options.responsive) {
  //       var newsize = options.element.clientWidth,
  //         oldsize = d3.select(options.element).select('svg').attr('data-width');
  //       if (newsize < 650)
  //         newsize += 100
  //       d3.select(options.element).select('svg').selectAll('g').attr('transform', 'scale(' + (newsize / oldsize) + ')');
  //     }
  //   }
  // }

  // bubble_map = new Datamap({
  //   element: document.getElementById('india'),
  //   scope: 'india',
  //   geographyConfig: {
  //     popupOnHover: true,
  //     highlightOnHover: true,
  //     borderColor: '#444',
  //     borderWidth: 0.5,
  //     dataUrl: 'https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json'
  //     //dataJson: topoJsonData
  //   },
  //   fills: {
  //     'MAJOR': '#306596',
  //     'MEDIUM': '#0fa0fa',
  //     'MINOR': '#bada55',
  //     defaultFill: '#dddddd'
  //   },
  //   data: {
  //     'JH': { fillKey: 'MINOR' },
  //     'MH': { fillKey: 'MINOR' }
  //   },
  //   setProjection: function (element) {
  //     var projection = d3.geo.mercator()
  //       .center([78.9629, 23.5937]) // always in [East Latitude, North Longitude]
  //       .scale(1000);
  //     var path = d3.geo.path().projection(projection);
  //     return { path: path, projection: projection };
  //   }
  // });

  // drawMap() {
  //   var bubble_map = new Datamap({
  //     element: document.getElementById('india'),
  //     scope: 'india',
  //     geographyConfig: {
  //       popupOnHover: true,
  //       highlightOnHover: true,
  //       borderColor: '#dc3545',
  //       borderWidth: 1,
  //       highlightBorderWidth: 3,
  //       highlightBorderOpacity: 1,
  //       highlightBorderColor: '#db251b',
  //       highlightFillColor: 'blu',
  //       dataUrl: 'https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json'
  //       //dataJson: topoJsonData
  //     },
  //     fills: {
  //       'MAJOR': '#306596',
  //       'MEDIUM': '#0fa0fa',
  //       'MINOR': '#bada55',
  //       defaultFill: '#343a40'
  //     },
  //     data: {
  //       // 'JH': { fillKey: 'MINOR' },
  //       // 'MH': { fillKey: 'MINOR' }
  //     },
  //     setProjection: function (element) {
  //       // console.log(element)
  //       var projection = d3.geo.mercator()
  //         .center([78.9629, 23.5937]) // always in [East Latitude, North Longitude]
  //         .scale(1000);
  //       var path = d3.geo.path().projection(projection);
  //       return { path: path, projection: projection };
  //     }
  //   });

  //   let bubbles = [

  //   ]
  //   // // ISO ID code for city or <state></state>
  //   setTimeout(() => { // only start drawing bubbles on the map when map has rendered completely.
  //     bubble_map.bubbles(bubbles, {
  //       popupTemplate: function (geo, data) {
  //         // console.log(data.sgt)
  //         return `<div class="hoverinfo">city: ${data.state}</div>`;
  //       }
  //     });
  //   }, 1000);
  // }
}
