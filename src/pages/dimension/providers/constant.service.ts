import { Injectable } from '@angular/core';


@Injectable()
export class ConstantService {
  DATABASES: String[] = [];
  HEATSYSTEMS: Object[] = [];

  constructor() {
    this.DATABASES = [
                "Proline.sqlite",
                "Lline.sqlite",
                "Skyline.sqlite",
                "Finned.sqlite",
                "Convectors.sqlite",
                "Vertical.sqlite"
              ];

    //dropdown values dimensions
    this.HEATSYSTEMS = [
      {dbName: "Proline.sqlite", displayName: "Proline"},
      {dbName: "Lline.sqlite", displayName: "L-line"},
      {dbName: "Skyline.sqlite", displayName: "Skyline"},
      {dbName: "Finned.sqlite", displayName: "Kamrör"},
      {dbName: "Convectors.sqlite", displayName: "Konvektorer + Radiatorer"},
      {dbName: "Vertical.sqlite", displayName: "Vertical"}
    ];
    //dropdown values dimensions
  /*  this.HEATSYSTEMS = [
      "Proline",
      "L-line",
      "Skyline",
      "Kamrör",
      "Konvektorer + Radiatorer",
      "Vertical"
    ];*/
  }
}
