import PopUp from "./PopUp";
import PopUpContent from "./PopUpContent"

const Card = ({ w, h, title, desc, pic, btn }) => {
    return (
      <div className={`card w-${w} h-${h} bg-base-100 shadow-xl`}>
        <figure><img src={pic} alt="Picture" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            <PopUpContent />
            <PopUp />
          </div>
        </div>
      </div>
    );
}

export default Card;