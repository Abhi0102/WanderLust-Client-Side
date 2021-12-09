import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortData'
})
export class SortDataPipe implements PipeTransform {

  transform(stateName: any, coronaDataStateWise: any, coronaDataDistrictWise: any, sortBy: any, sortOrder: any): any {
    if (sortBy === 'confirmed') {
      if (sortOrder == false) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.confirmed > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.confirmed) {
            return -1;
          }
          return 1;
        })
      }

      else if (sortOrder == true) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.confirmed > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.confirmed) {
            return 1;
          }
          return -1;
        })
      }

    }
    else if (sortBy === 'active') {
      if (sortOrder == false) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.confirmed - coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.recovered - coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.deceased > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.confirmed - coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.recovered - coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.deceased) {
            return -1;
          }
          return 1;
        })
      }

      else if (sortOrder == true) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.confirmed > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.confirmed) {
            return 1;
          }
          return -1;
        })
      }

    }

    else if (sortBy === 'deceased') {
      if (sortOrder == false) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.deceased > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.deceased) {
            return -1;
          }
          return 1;
        })
      }

      else if (sortOrder == true) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.deceased > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.deceased) {
            return 1;
          }
          return -1;
        })
      }

    }

    else if (sortBy === 'recovered') {
      if (sortOrder == false) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.recovered > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.recovered) {
            return -1;
          }
          return 1;
        })
      }

      else if (sortOrder == true) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.recovered > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.recovered) {
            return 1;
          }
          return -1;
        })
      }

    }

    else if (sortBy === 'state') {

      if (sortOrder == false) {
        return stateName.sort((a, b) => {
          if (a > b) {
            return -1;
          }
          return 1;
        })
      }

      else if (sortOrder == true) {
        return stateName.sort((a, b) => {
          if (a > b) {
            return 1;
          }
          return -1;
        })
      }

    }

    else if (sortBy === 'tested') {
      if (sortOrder == false) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.tested > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.tested) {
            return -1;
          }
          return 1;
        })
      }

      else if (sortOrder == true) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.tested > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.tested) {
            return 1;
          }
          return -1;
        })
      }

    }

    else if (sortBy === 'activeRatio') {
      if (sortOrder == false) {
        return stateName.sort((a, b) => {
          if ((coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.confirmed - coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.recovered - coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.deceased) / coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.confirmed > (coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.confirmed - coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.recovered - coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.deceased) / coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.confirmed) {
            return -1;
          }
          return 1;
        })
      }

      else if (sortOrder == true) {
        return stateName.sort((a, b) => {
          if ((coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.confirmed - coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.recovered - coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.deceased) / coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.confirmed > (coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.confirmed - coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.recovered - coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.deceased) / coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.confirmed) {
            return 1;
          }
          return -1;
        })
      }

    }

    else if (sortBy === 'recoveryRatio') {
      if (sortOrder == false) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.recovered / coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.confirmed > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.recovered / coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.confirmed) {
            return -1;
          }
          return 1;
        })
      }

      else if (sortOrder == true) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.recovered / coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.confirmed > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.recovered / coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.confirmed) {
            return 1;
          }
          return -1;
        })
      }

    }

    else if (sortBy === 'fatalityRatio') {
      if (sortOrder == false) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.deceased / coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.confirmed > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.deceased / coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.confirmed) {
            return -1;
          }
          return 1;
        })
      }

      else if (sortOrder == true) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.deceased / coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.confirmed > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.deceased / coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.confirmed) {
            return 1;
          }
          return -1;
        })
      }

    }

    else if (sortBy === 'testPositivityRatio') {
      if (sortOrder == false) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.confirmed/coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.tested > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.confirmed/coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.tested) {
            return -1;
          }
          return 1;
        })
      }

      else if (sortOrder == true) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.confirmed/coronaDataStateWise[coronaDataDistrictWise[a].statecode].total.tested > coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.confirmed/coronaDataStateWise[coronaDataDistrictWise[b].statecode].total.tested) {
            return 1;
          }
          return -1;
        })
      }

    }

    else if (sortBy === 'population') {
      if (sortOrder == false) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].meta.population > coronaDataStateWise[coronaDataDistrictWise[b].statecode].meta.population) {
            return -1;
          }
          return 1;
        })
      }

      else if (sortOrder == true) {
        return stateName.sort((a, b) => {
          if (coronaDataStateWise[coronaDataDistrictWise[a].statecode].meta.population > coronaDataStateWise[coronaDataDistrictWise[b].statecode].meta.population) {
            return 1;
          }
          return -1;
        })
      }

    }
    // return null;
  }

}
