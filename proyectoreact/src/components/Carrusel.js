import Itemcarrusel from "./Itemcarrusel";

function Carrusel() {
    return(

            <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
            <ul className="uk-slider-items uk-child-width-1-4@s uk-grid">
                <Itemcarrusel/>
                <Itemcarrusel/>
                <Itemcarrusel/>
                <Itemcarrusel/>
            </ul>

            <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

            </div>
        );
    }
    export default Carrusel;