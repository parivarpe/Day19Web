/**
 *
 * @returns
 */
let list1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default function App() {
  return (
    <div>
      <Header1></Header1>
      <div className="container-fluid">
        <div className="row">
          {list1.map(() => (
            <div className="col-sm-12 col-md-4 mt-2">
              <CardDesign></CardDesign>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header1() {
  return (
    <div className=" container-fluid sticky-top">
      <div className="row bg-secondary  text-light p-3">
        <div className="col-12 ">
          <h3>My Gallary</h3>
        </div>
      </div>
    </div>
  );
}

export function CardDesign() {
  let cardtitle = "MyPhoto";
  return (
    <div>
      <div className="card">
        <div className="card-header"> {cardtitle}</div>
        <div className="card-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          expedita nostrum distinctio necessitatibus eaque ad perspiciatis in
          repellat fuga impedit.
        </div>
        <div className="card-footer">
          <input
            type="button"
            value="Add To Cart"
            className="btn btn-success"
          />
        </div>
      </div>
    </div>
  );
}
