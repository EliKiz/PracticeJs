export default function closeModalDone(selector, time) { 
        setTimeout(()=> { 
            document.querySelector(selector).style.display = 'none';
            document.body.style.overflow = '';
        }, time);
    }