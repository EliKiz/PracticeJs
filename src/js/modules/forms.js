import checkNumInputs from "./checkNumInputs";
// import closeModalDone from "./closemodalTest";

const forms = (state) => { 
    const form = document.querySelectorAll('form'),
            inputs = document.querySelectorAll('input');

    checkNumInputs('input[name = "user_phone"]');
    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро с вами свяжемся',
        failure: 'Что то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, { 
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => { 
        inputs.forEach(item => { 
            item.value = '';
        });
    };

    function closeModalDone(selector, time) { 
        setTimeout(()=> { 
            document.querySelector(selector).style.display = 'none';
            document.body.style.overflow = '';
        }, time);
    }

    form.forEach(item => { 
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            //  блок сообщения 

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            // сбор данных

            const formData = new FormData(item);
            if(item.getAttribute('data-calc') === 'end') { 
                for(let key in state) {  // перебор данных из state'та
                    formData.append(key, state[key]); // добавление пары ключ значение в formData
                }
                
            }

            postData('assets/server.php', formData)
                .then(res => { 
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => { 
                    clearInputs();
                    setTimeout(() => { 
                        statusMessage.remove();
                        closeModalDone('.popup_calc_end');
                    }, 3000);
                    for(const key in state) { 
                        delete state[key];
                    }
                }); 


        });
    });

};

export default forms;