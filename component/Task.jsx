export const Task = (props) => {
  if(props.isdone == true){
    <div className="d-flex p-3 gap-2 align-items-center border-bottom text-decoration-line-through">
        <span>{props.title}</span>
        <button className="btn btn-success">Done</button>
        <button className="btn btn-danger">Delete</button>
      </div>
  }  
  else{return (
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
        <span>{props.title}</span>
        <button className="btn btn-success">Done</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    );
  }
};