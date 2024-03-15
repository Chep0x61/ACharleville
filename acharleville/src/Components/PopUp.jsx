import { useTranslation } from 'react-i18next'

const Popup = ({ id }) => {
    const { t } = useTranslation();
    return (
        <label htmlFor={`my-modal-${id}`} className="btn bg-flash text-retry hover:bg-orange">{t('projectbutton')}</label>
    );
}

export default Popup;