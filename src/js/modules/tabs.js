const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);
        
    function hideTabContent () { 
        content.forEach(item => { 
            item.style.display = 'none';
        });

        tabs.forEach(item => { 
            item.classList.remove(activeClass);
        });

    }

    function showTabContent (i = 0) { 
        content[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => { 
        // console.log('awda');
        const target = e.target;
        if( target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) { 
                    console.log('awda');
            tabs.forEach((item, i) => { 
                if (target == item || target.parentNode == item) { 
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
        
    });
};

export default tabs;