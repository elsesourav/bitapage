import "../../../utils/css/work.css";

function Main(params) {
   return (
      <div className="card">
         <div className="thumbnail">
            <img alt={params.alt} src={params.src} />
         </div>
      </div>
   );
}

export default Main;
