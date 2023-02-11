import { useEffect, useState } from "react";

const PopupContent = ({ id, title, description, ytitle, ylink }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const iframeWidth = width < 400 ? 300 : 700;
    const iframeHeight = height < 350 ? 150 : 400;


    return (
        <div>
          <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" />
          <div className="modal">
            <div className="modal-box w-[90%] max-w-4xl">
              <label htmlFor={`my-modal-${id}`} className="btn btn-sm btn-circle absolute right-2 top-2">x</label>
              <h3 className="font-bold text-lg">{title}</h3>
              <div className="flex justify-center">
              <iframe width={iframeWidth} height={iframeHeight} src={ylink} title={ytitle} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <p className="">{description}</p>
            </div>
          </div>
        </div>
    );
}

export default PopupContent;