import PopUp from "./PopUp";
import PopUpContent from "./PopUpContent";

const Card = ({ w, h, title, date, cdesc, desc, pic, alt, ylink, ytitle, id }) => {
    return (
      <div className={`card card-compact w-${w} h-${h} bg-base-100 shadow-xl`}>
        <figure className="max-w-full max-h-[50%]"><img src={pic} alt={alt} className="w-full max-h-[370px] object-cover"/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}
            <div className="badge badge-secondary text-[0.6rem] lg:text-base">{date}</div>
          </h2>
          <p>{cdesc}</p>
          <div className="card-actions justify-end">
            <PopUpContent id={id} title={title} description={desc} ylink={ylink} ytitle={ytitle}/>
            <PopUp id={id} />
          </div>
        </div>
      </div>
    );
}

export default Card;