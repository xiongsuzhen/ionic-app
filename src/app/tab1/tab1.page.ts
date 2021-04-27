import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    tab:string = 'tab1';
    Id=0;
    date:any=new Date()
    startTime;
    endTime;
  segmentList=[
      {id:0,value:'tab1',title:'设备状态'},
      {id:1,value:'tab2',title:'当班进度'},
      {id:2,value:'tab3',title:'设备进度'},
      {id:3,value:'tab4',title:'工单进度'}
  ];
  percent = 50;
  barStyleDemo = {
    border: '2px solid #108ee9'
  };

  option1:any;
  option2:any;
  segmentClick(id){
      this.Id=id;
      console.log(this.Id)
  }

  constructor(
      private datePipe:DatePipe
  ) {

  }
  ngOnInit() {

    this.option1 = {
      series: [{
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
              show: false
          },
          radius:'85%',
          color:'#fff',
          progress: {
              show: true,
              overlap: false,
              roundCap: true,
              clip: false,
              itemStyle: {
                  borderWidth: 1,
              }
          },
          axisLine: {
  
              lineStyle: {
                  width: 3
              }
          },
          splitLine: {
              show: false,
              distance: 0,
              length: 5
          },
          axisTick: {
              show: false
          },
          axisLabel: {
              show: false,
              distance: 50
          },
          data: [{
              value: 60,
              name: '加工中\n\nCommonly\n\n555/56',
              title: {
                  offsetCenter: ['0%', '25%'],
                  color:'#fff'
              },
              detail: {
                  offsetCenter: ['0%', '-55%']
              }
          }
          ],
          title: {
              fontSize: 8
          },
          detail: {
              width: 14,
              height: 5,
              fontSize: 8,
              color: '#fff',
              borderColor: '#fff',
              formatter: '{value}%'
          }
      }]
  };
  console.log(this.option1)
  this.date=new Date();
  this.date=this.datePipe.transform(this.date,'yyyy-MM-dd')
  this.startTime=this.date +' ' + '6:00';
  this.endTime=this.date +' ' + '23:00';

  
  this.option2 = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '2012年',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};
}

}
