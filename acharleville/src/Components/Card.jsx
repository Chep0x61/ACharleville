import PopUp from "./PopUp";
import PopUpContent from "./PopUpContent";

const Card = ({ w, h, title, desc, pic, alt, ylink, ytitle, id }) => {
    return (
      <div className={`card card-compact w-${w} h-${h} bg-base-100 shadow-xl`}>
        <figure className="max-w-full max-h-[50%]"><img src={pic} alt={alt} className="h-auto max-w-full"/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <div className="card-actions justify-end">
            <PopUpContent id={id} title={title} description={desc} ylink={ylink} ytitle={ytitle}/>
            <PopUp id={id} />
          </div>
        </div>
      </div>
    );
}

export default Card;