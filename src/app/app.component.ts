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
    this.printData = this.dataSource.getbarcodeData();
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
      .container {
        padding: 0;
        height: 50mm;
        width: 100mm;
        margin: 0;
        border: 1px solid black;
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
<div id="'pageNumber'${pageNumber}" class="page-break" style="height: 25mm;width: 50mm;position: relative;">
  <div style="margin-right: 1mm;margin-left: 1mm;margin-top: 1mm;margin-bottom: 1mm;height: 23mm;width: 48mm">
      <div style="display: table;height: 23mm;width: 181px;border-spacing: 4px;">
        <div style="display: table-row;width: 176px;max-width: 176px;height: 23mm;max-height: 23mm">

          <div style="display: table-cell;max-width: 100px;width: 76px;background: red;height: 23mm;max-height: 23mm">
            <img src="${"https://chart.googleapis.com/chart?cht=qr&chl=" + item.boxCode + "&chs=73x73&chld=L|0"}">
          </div>
         
          <div style="display: table-cell;max-width: 100px;width: 100px;background: pink;height: 23mm;max-height: 23mm">
           ${item.flowers.map((item2, i) => `
      
                <span style="display: table-column">${item2.baseQuantity}</span>
                <div style="display: table-column">${item2.description}</div>
                <div style="display: table-column">${item2.color}</div>
                <div style="display: table-column">${item2.size}</div>
      
            `.trim()).join('')}
          </div>
        
        </div>
        <div></div>
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
