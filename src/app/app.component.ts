import { Component } from '@angular/core';
import { DataSource } from './datasource';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  codeType = '';

  printData = []

  constructor(private dataSource: DataSource) {
    this.printData = this.dataSource.getQrCodeData();
    //   for(let i = 0; i<= 1000; i++) {
    //   this.printData.push(this.data1);
    // }
  }


  print() {




     
 

   

   
    
    let pageNumber = 0;


    

   

 
    let printTemplate = '';
    if (this.codeType === 'barCode') {
      printTemplate = `

<html>

<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
	<style>
      @media print{
        body {
           margin-top:0 !important;
           margin-right: 2mm;
           margin-left: 2mm;
           margin-bottom: 0;
           }
      @page {
        margin: 0;
      }
      }
      .page-break {
        page-break-after:always;
      }
	</style>
  <script>
    const src = "https://chart.googleapis.com/chart?cht=qr&chl=" + "BPLUNRMW000015" + "&chs=160x160&chld=L|0";
    console.log();
  </script>
</head>

<body>
<div style="position: relative;display: flex;width: 100mm;maxwidth: 100mm;flex-wrap: wrap">
${this.printData.map((item, i) => `
<div id="barcode-label" class="page-break" style="height: 24mm;width: 50mm;position: relative;">


  <div style="margin-right: 1mm;margin-bottom: 1mm; margin-top: 1mm;marging-left: 4mm;height: 22mm;width: 45mm">


      <div id="table1" style="display: table;height: 22mm;width: 170px;border-spacing: 4px;background: yellow">
        <div style="display: table-row;width: 166px;max-width: 166px;height: 22mm;max-height: 22mm">

          <div style="display: table-cell;max-width: 60px;width: 60px;background: red;text-align: center;vertical-align: middle">
            <img src="${"https://chart.googleapis.com/chart?cht=qr&chl=" + item.boxCode + "&chs=53x62&chld=L|0"}">


            <div style="display: table-cell;text-align: center; width: 60px;max-width: 60px;overflow: hidden;">
            <span style="font-family: Impact;font-size: 12px;">ABCDEFGH</span>
          </div>


          </div>
         
          <div style="display: table-cell;max-width: 106px;width: 106px;background: pink;">            
           ${item.flowers.map((item2, i) => `
           <div style="display: table-row;font-family: Impact;font-size:10px;width: 106px;max-width: 106px;overflow-y: hidden">
                <span>${item2.baseQuantity}</span>
                <div>${item2.description}</div>
                <div>${item2.color}</div>
                <div>${item2.size}</div>
           </div>
            `.trim()).join('')}
            <div style="display: table">
               <div style="display: table-row">
               <div style="display: table-column">one</div>
               <div style="display: table-column">two</div>
             </div>
            </div>
             <div style=";background: purple;text-align: center;width: 106px;max-width: 106px;overflow: hidden;">
               <span style="font-family: Calibri;font-size: 13px;font-weight: bold">ULGKS@99</span>
            </div>
            
          </div>


        </div>
      </div>

  

  </div>


</div>
  `.trim()).join('')}
</div>
</body>
</html>
`;
    }

    var myWindow = window.open("", "BarCode Print");
    myWindow.document.write(printTemplate);
    setTimeout(() => {
      // myWindow.print();
      // myWindow.close();
    });
    return false;
  }
}
