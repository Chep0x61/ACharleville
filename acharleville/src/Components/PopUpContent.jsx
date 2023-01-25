const PopupContent = ({ id }) => {
    return (
        <div>
<input type="checkbox" id="my-modal-1" className="modal-toggle" />
<div className="modal">
  <div className="modal-box w-11/12 max-w-7xl items-center justify-center">
    <label htmlFor="my-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">x</label>
    <h3 className="font-bold text-lg pl-12">Titre du projet</h3>
    <div className="px-12 py-4">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/MUwnVA6GNXo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <p className="pl-12">Ceci est une descri^tion du projet que peu de gens liront Ceci est une descri^tion du projet que peu de gens liront Ceci est une descri^tion du projet que peu de gens liront</p>
    <div className="modal-action">
      <label htmlFor="my-modal-1" className="btn">Yay!</label>
    </div>
  </div>
</div>
        </div>
    );
}

export default PopupContent;