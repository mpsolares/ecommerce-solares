import './App.css';

function App() {
  let img = "hamburger.jpg"
  let title = "Grand Triple McBacon";
  let cal = "0 kcal";
  let description = "¡NUEVO PAN! Triple carne, inigualable queso cheddar, cebolla, kétchup y mostaza, y el increíble ingrediente que lo hace único: bacon premium";


  return (
   <div>"
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-2">
          <img src={img} alt={title} className="img-fluid"/>
        </div>
        <div className="col-md-4">
          <h1>{title}</h1>
          <p>{cal}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>

   </div>
  );
}

export default App;
