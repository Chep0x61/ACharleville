import { useEffect, useState, useRef } from "react";

const PopupContent = ({ id, title, description, ytitle, ylink }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const popupRef = useRef(null);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          const checkbox = document.getElementById(`my-modal-${id}`);
          if (checkbox) {
            checkbox.checked = false;
          }
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [id]);

    const iframeWidth = width < 400 ? 300 : 700;
    const iframeHeight = height < 350 ? 150 : 400;

    return (
        <div>
          <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" />
          <div className="modal">
            <div ref={popupRef} className="modal-box w-[90%] max-w-4xl bg-retry">
              <label htmlFor={`my-modal-${id}`} className="btn btn-sm btn-circle absolute right-2 top-2 text-snow rotate-45">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              </label>
              <h3 className="font-bold text-center text-lg lg:text-2xl text-snow pb-4">{title}</h3>
              <div className="flex justify-center">
              <iframe width={iframeWidth} height={iframeHeight} src={ylink} title={ytitle} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-center text-sm text-snow pt-4 w-[75%]">{description}</p>
              </div>
            </div>
          </div>
        </div>
    );
}

export default PopupContent;
