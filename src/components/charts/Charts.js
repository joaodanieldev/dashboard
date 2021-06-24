import '../../../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';


const Charts = () => {
  const data =[
    {x:0, y:8}, 
    {x:1, y:9}, 
    {x:2, y:10}, 
    {x:3, y:11}, 
    {x:4, y:5}, 
    {x:5, y:9}, 
    {x:6, y:14}, 
    {x:7, y:2},
    {x:8, y:1},  
  ]

  return(
    <div className={{marginTop: '15px'}}>
      <XYPlot height={300} width={300}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={data} color="red" />
        <LineSeries data={data} color="purple" />
        <LineSeries data={data} color="blue" />
      </XYPlot>
    </div>
  )
}


export default Charts;