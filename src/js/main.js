import "./slider";
import showModals from './modules/modals';
import tabs from './modules/tabs';
// console.log('awd');

window.addEventListener('DOMContentLoaded', () => { 
    showModals();
    tabs( '.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    // tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
});