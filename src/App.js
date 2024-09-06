import { Chart as ChartJS,defaults } from "chart.js/auto";
import {Bar,Doughnut, Line} from "react-chartjs-2";
import sourceData from "./data/chartData.json";
import revenueData from "./data/revenueData.json";
defaults.maintainAspectRatio=false
defaults.responsive=true;

defaults.plugins.title.display= true;
defaults.plugins.title.align="start";
defaults.plugins.title.font.size=20;
defaults.plugins.title.color="black"

function App() {
  return (
    < >
    <div className="line" style={{width:"30rem",height:"20rem"}}>
      <Line
      data={
        {
          labels:revenueData.map((data)=>data.label),
          datasets:[
            {
              label:"Revenue",
              data:revenueData.map((data)=>data.reveue),
              backgroundColor:"#C70039",
              borderColor:"#C70039"
            },
            {
              label:"Cost",
              data:revenueData.map((data)=>data.cost),
              backgroundColor:"#FFC300",
              borderColor:"#FFC300"
            }
          ],
         
        }
      }
      options={{
        elements:{
        line:{
          tension:0.5
        }
        },
        plugins:{
          title:{

            text:"Monthly Revenue & Cost"
          }
        }
      }}
      />
      
    </div>
      <div className="bar" style={{width:"30rem",height:"20rem",margin:"20px"}}>
        <Bar
        data={{
          labels: sourceData.map((data)=>data.label),
          datasets:[
           { 
            label:"Count",
          data: sourceData.map((data)=>data.value),
          backgroundColor:[
            "#C70039",
            "#FFC300",
            "#581845"
          ],
          
          }
          ]
        }}
        options={{
          plugins:{
            title:{
  
              text:"Revenue Source"
            }
          }
        }}
        />
      </div>

      <div className="bar" style={{width:"30rem",height:"20rem"}}>
        <Doughnut
        data={{
          labels: sourceData.map((data)=>data.label),
          datasets:[
           { 
            label:"Count",
          data: sourceData.map((data)=>data.value),
          }
          ]
        }}
        options={{
          plugins:{
            title:{
  
              text:"Revenue Source"
            }
          }
        }}
        />
      </div>
    
    </>
  );
}

export default App;
