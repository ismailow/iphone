const sendForm = () => {
    const btnOpenModal = document.querySelector('.card-details__button_delivery');
    const cardTitle = document.querySelector('.card-details__title');
    const modal = document.querySelector('.modal');
    const modalTitle = document.querySelector('.modal__title');
    const closeModal = document.querySelector('.modal__close');
    const modalForm = document.querySelector('form');

    btnOpenModal.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalTitle.textContent = cardTitle.textContent;
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'
    });

    modalForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const labels = modal.querySelectorAll('.modal__label');

        const sendMessage = {};

        labels.forEach(label => {
            const span = label.querySelector('span');
            const input = label.querySelector('input');

            sendMessage[span.textContent] = input.value;
        });

        modal.style.display = 'none';
        modalForm.reset();

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendMessage),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(() => {
            console.log('send');
        })
    });
};

sendForm();