import { useState } from "react";

function PetItem({ pet, adopt}) {
  const [pic, setpic] = useState(pet.image);
  const handleClick = () => {
    if (pic === pet.image){
      setpic(pet.image2);
    }else {
      setpic(pet.image);
    };
  } 
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={pic} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button onClick = {handleClick} type="button" className="btn btn-info">
            Pet
          </button>
          <button onClick={(event) => adopt(pet.id)} type="button" className="btn btn-info  m-2">
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
