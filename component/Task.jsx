<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

export const Task =(props)=>{
  if(props.isdone == true){
    return(
        <div className="d-flex p-3 gap-2 align-items-center border-bottom ">
        <span class="text-decoration-line-through">{props.title}</span>
        <button className="btn btn-success">Done</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    )
  }  
  else{
    return (
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
        <span>{props.title}</span>
        <button className="btn btn-success">Done</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    );
  }
};