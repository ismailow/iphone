const accordeon = () => {
    const chItem = document.querySelectorAll('.characteristics__item');

    chItem.forEach((item) => {
        const chButton = item.querySelector('.characteristics__title');
        const chContent = item.querySelector('.characteristics__description');

        chButton.addEventListener('click', () => {
            const closeContent = () => {
                const activeButton = document.querySelector('.characteristics__title.active');
                const openContent = document.querySelector('.characteristics__description.open');
                if (activeButton) {
                    activeButton.classList.remove('active');
                }
                if (openContent) {
                    openContent.classList.remove('open');
                    openContent.style.height = '';
                }
            };

            if(chContent.classList.contains('open')){
                chContent.style.height = ``;
            } else{
                chContent.style.height = `${chContent.scrollHeight}px`;
                closeContent();
            }

            chButton.classList.toggle('active');
            chContent.classList.toggle('open');
        });
    });
};

accordeon();