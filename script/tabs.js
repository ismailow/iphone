const tabsFunc = () => {
    const tabs = document.querySelectorAll('.card-detail__change');
    const tabTitle = document.querySelector('.card-details__title');
    const tabPrice = document.querySelector('.card-details__price');
    const tabImage = document.querySelector('.card__image_item');
    const pageTitle = document.querySelector('title');

    const tabsOptions = [
        {
            name: 'Graphite',
            memory: '128',
            price: '60.000',
            image: 'img/iPhone-graphite.webp'
        },
        {
            name: 'Silver',
            memory: '256',
            price: '65.000',
            image: 'img/iPhone-silver.webp'
        },
        {
            name: 'Sierra Blue',
            memory: '512',
            price: '70.000',
            image: 'img/iPhone-sierra_blue.webp'
        }
    ];

    function changeContent(index){
        tabTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory}GB ${tabsOptions[index].name}`;
        tabPrice.textContent = `${tabsOptions[index].price}₽`;
        tabImage.setAttribute('src', tabsOptions[index].image);
        pageTitle.textContent = `iPhone 13 Pro ${tabsOptions[index].name}`
    }

    function changeActiveTab(indexClickedTab) {
        tabs.forEach((tab, index) =>{
            tab.classList.remove('active');

            if(index === indexClickedTab){
                tab.classList.add('active');
            };
        });

        changeContent(indexClickedTab);
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveTab(index);
        });
    });

    changeContent(0);
}

tabsFunc();