
import Thumbnail from "./Thumbnail";

const Results = ({results}: any) => {
  return (
    <div>
     {results.map((result: any)=>(
        <Thumbnail key={result.id} result={result}/>
     ))}
    </div>
  )
}

export default Results
