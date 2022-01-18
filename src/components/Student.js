import Score from "./Score"
function Student(props){
    return(
       <div>
           <div>{props.name}</div>
           <div>{props.bio}</div>
           {/* <Score score={props.score[0].score} date={props.score[0].date}/> */}
         <table>
             <thead>
                 <tr>
                     <th>Score</th>
                     <th>Date</th>
                      </tr>
            </thead>
            <tbody>
         {props.score.map((scoreData,index)=>{
         return(
             < Score score={scoreData.score} date={scoreData.date} key={index}/>
         )})}
         </tbody>
         </table>
       </div> 
    )

}

export default Student;