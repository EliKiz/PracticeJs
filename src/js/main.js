import "./slider";
import showModals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
// console.log('awd');

window.addEventListener('DOMContentLoaded', () => { 
    
    let modalState = {    }; // состояние модального окна 

    changeModalState(modalState);  // передаем объект 

    showModals();
    tabs( '.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);


});