import PopUp from "./PopUp";
import PopUpContent from "./PopUpContent";

const Card = ({ w, h, title, date, role, desc, pic, alt, ylink, ytitle, id }) => {
    return (
      <div className={`card card-compact w-${w} h-${h} bg-retry shadow-xl`}>
        <figure><img src={pic} alt={alt} className="w-full aspect-[16/9] h-full object-cover"/></figure>
        <div className="card-body">
          <div className="flex flex-col items-start flex-col-reverse gap-2">
          <h2 className="card-title text-snow">{title}</h2>
          <div>
            <div className="badge bg-yellow text-[0.6rem] text-retry border-0 lg:text-base">{role}</div>
            <div className="badge bg-retry text-[0.6rem] text-snow border-0 lg:text-base">{date}</div>
          </div>
          </div>
          <div className="card-actions justify-end">
            <PopUpContent id={id} title={title} description={desc} ylink={ylink} ytitle={ytitle}/>
            <PopUp id={id} />
          </div>
        </div>
      </div>
    );
}

export default Card;