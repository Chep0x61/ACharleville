import PopUp from "./PopUp";
import PopUpContent from "./PopUpContent";

const Card = ({ w, h, title, date, desc, pic, alt, ylink, ytitle, id }) => {
    return (
      <div className={`card card-compact w-${w} h-${h} bg-retry shadow-xl`}>
        <figure><img src={pic} alt={alt} className="w-full aspect-[16/9] h-full object-cover"/></figure>
        <div className="card-body">
          <h2 className="card-title text-snow">{title}
            <div className="badge bg-yellow text-[0.6rem] text-retry border-0 lg:text-base">{date}</div>
          </h2>
          <div className="card-actions justify-end">
            <PopUpContent id={id} title={title} description={desc} ylink={ylink} ytitle={ytitle}/>
            <PopUp id={id} />
          </div>
        </div>
      </div>
    );
}

export default Card;