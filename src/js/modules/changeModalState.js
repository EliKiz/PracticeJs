import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {

        // элементы дял получения данных

    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

        // валидация

    checkNumInputs('#width');
    checkNumInputs('#height');

        // Функция записи данных в глобальный стейт 

    function bindActionToElems(event, elem, prop) { 
        elem.forEach((item, i) => { 
            item.addEventListener(event, () => {
                switch(item.nodeName) { 
                    case 'SPAN' : 
                        state[prop] = i; // в state попадает номер картинки
                        break;
                    case "INPUT": 
                        if(item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((box, j) =>  {    // выбор 1 check box
                                box.checked = false; // Снять галку со всех check box
                                if(i == j) {     // check box === выбору пользователя
                                    box.checked = true;   // 
                                }
                            });
                        } else { 
                            state[prop] = item.value;
                        }
                        break;
                    case "SELECT" : 
                            state[prop] = item.value;
                        break;
                }
                // if(Object.keys(state).length == 3 ) { 
                //     document.querySelector('.popup_calc_button').removeAttribute('disabled');
                // }
                // if(Object.keys(state).length == 5 ) { 
                //     document.querySelector('.popup_calc_profile_button').removeAttribute('disabled');
                // }
                
                console.log(state);
            });
        });

    }

            // привязываем действия (обработчики) к определенным элементам на странице

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');


};

export default changeModalState;