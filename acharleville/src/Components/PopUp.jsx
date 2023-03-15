const Popup = ({ id }) => {
    return (
        <label htmlFor={`my-modal-${id}`} className="btn bg-flash text-retry hover:bg-orange">Voir ce projet</label>
    );
}

export default Popup;