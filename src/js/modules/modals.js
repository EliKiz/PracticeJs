import disabledModal from "./disableModal";
const modals = () =>  {
    function showModals(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        trigger.forEach(item => { 
            item.addEventListener('click', (e) =>  {
                if(e.target) { 
                    e.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";

            });
            disabledModal('.form-control', '.popup_calc_button', '#width', '#height', 'input');
        });

            close.addEventListener('click', () => { 
                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open')
            });
            
        
        modal.addEventListener('click', (e) => { 
            if(e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
            }
        });

    }

    function showModalsByTime(selector, time) {
        setTimeout((function() { 
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }), time);
    }
 
    showModals('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    showModals('.phone_link', '.popup', '.popup .popup_close' );
    showModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    showModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    showModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalsByTime('.popup', 3000);
    // closeModalDone('.popup_calc_end', 1000);
};

export default modals;
