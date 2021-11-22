// Modal
const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelectorAll('[data-close]'),
    modalContent = document.querySelector('.filters-modal__wrap');

    // открытие модального окна
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.remove('hidden');
            modal.classList.add('show');
            modalContent.classList.remove('hidden');
            modalContent.classList.add('show');
            document.body.style.overflow = 'hidden';
        });

    });

    // закрытие модального окна
    function closeModal() {
        modalContent.classList.remove('show');
        modalContent.classList.add('hidden');
        modal.classList.remove('show');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    modalCloseBtn.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // закрытие модального окна кликом на подложку
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

// Custom select Sort
const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

    // Toggle menu
    selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
        } else {
            selectSingle.setAttribute('data-state', 'active');
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.querySelector('span').textContent = evt.target.textContent;
            selectSingle.setAttribute('data-state', '');

            switch (evt.target.textContent) {
                case 'Newest first':
                    console.log('run sort Newest first');
                    break;
                case 'Latest first':
                    console.log('run sort Latest first');
                    break;
                case 'A-Z':
                    console.log('run sort A-Z');
                    break;
                case 'Z-A':
                    console.log('run sort Z-A');
                    break;
                default:
                    break;
            }
        });
    }


// Кнопка ЕЩЕ
const buttonsMore = document.querySelectorAll('.video-item__more-img');
const videoItemMoreButtons = document.querySelector('.video-item__more-list');

    for (let i = 0; i < buttonsMore.length; i++) {
        buttonsMore[i].addEventListener('click', (e) => {
            const wrapbuttonsMore = e.currentTarget.parentNode;
            const videoItemMoreButtons = wrapbuttonsMore.querySelector('.video-item__more-list');
            videoItemMoreButtons.classList.toggle('show');
        })
    }

// Кнопка Upvote
const buttonsUpvote = document.querySelectorAll('.video-item__btn-upvote');

    for (let i = 0; i < buttonsUpvote.length; i++) {
        buttonsUpvote[i].addEventListener('click', (e) => {
            e.currentTarget.classList.toggle('active');
        })
    }
    
// Отрисовка фильтров
const schema = [
  {
    "type": "select",
    "required": false,
    "label": "Technological Area",
    "className": "form-control",
    "name": "select-1637079613427-0",
    "values": [
      {
        "label": "Production, transportation and disposal of hydrogen and ammonia",
        "value": "option-1",
        "selected": false
      },
      {
        "label": "Capture, storage and processing of greenhouse gases (including CO2)",
        "value": "option-2",
        "selected": false
      },
      {
        "label": "Renewable energy sources",
        "value": "option-3",
        "selected": false
      },
      {
        "label": "Circular economy (recycling, waste management, etc.)",
        "value": "",
        "selected": false
      },
      {
        "label": "Digital technologies for measuring, controlling and visualizing CO2 emissions",
        "value": "",
        "selected": false
      },
      {
        "label": "Mobility, unmanned vehicles",
        "value": "",
        "selected": false
      },
      {
        "label": "Decarbonization of supply chains and logistics processes",
        "value": "",
        "selected": false
      },
      {
        "label": "Energy-Saving solution and digital technology",
        "value": "",
        "selected": false
      },
      {
        "label": "Technologies for carbon offset and emissions trading (monitoring, certification, e-commerce technologies)",
        "value": "",
        "selected": false
      }
    ]
  },
  {
    "type": "select",
    "required": false,
    "label": "Growth Stage",
    "className": "form-control",
    "name": "select-1637079615734-0",
    "values": [
      {
        "label": "R&D",
        "value": "option-1",
        "selected": false
      },
      {
        "label": "Pre-Seed",
        "value": "option-2",
        "selected": false
      },
      {
        "label": "Seed/MVP",
        "value": "option-3",
        "selected": false
      },
      {
        "label": "Early",
        "value": "",
        "selected": false
      },
      {
        "label": "Growth",
        "value": "",
        "selected": false
      },
      {
        "label": "Global Expansion",
        "value": "",
        "selected": false
      }
    ]
  },
  {
    "type": "select",
    "required": false,
    "label": "Purposes for the participation in the program",
    "className": "form-control",
    "name": "select-1637079617183-0",
    "values": [
      {
        "label": "User research / Market validation",
        "value": "option-1",
        "selected": false
      },
      {
        "label": "Client search",
        "value": "option-2",
        "selected": false
      },
      {
        "label": "Partner/Distributor search",
        "value": "option-3",
        "selected": false
      },
      {
        "label": "Joint research with Japanese company / organization",
        "value": "",
        "selected": false
      },
      {
        "label": "Co-Development with Japanese company / organization",
        "value": "",
        "selected": false
      },
      {
        "label": "Find investments",
        "value": "",
        "selected": false
      },
      {
        "label": "Other",
        "value": "",
        "selected": false
      }
    ]
  },
]


class customSelect {
    constructor(data) {
        this.wrapper = document.querySelector('.filters-menu');
        this.data = data;

        // generate HTML block
        this.wrapper.append(this.generateBlock());
    }

    generateBlock() {
        const wrapBlock = document.createElement('form');
        wrapBlock.classList.add('__filters-select__wrap');
        wrapBlock.name = this.data.name;

        // generate label
        const label = document.createElement('label');
        label.innerText = `${this.data.label}`;
        label.htmlFor = this.data.name;
        label.classList.add('__filters-menu__title');

        // generate select block
        const selectBlock = document.createElement('div');
        selectBlock.classList.add('__filters-select');
        selectBlock.setAttribute('data-state', '');

        // generate select title
        const selectTitle = document.createElement('div');
        selectTitle.classList.add('__filters-select__title');

        // generate select content
        const selectContent = document.createElement('div');
        selectContent.classList.add('__filters-select__content');

        // generate options
        this.data.values.forEach(el => {
            const label = document.createElement('label');
            const input = document.createElement('input');

            label.innerText = `${el.label}`;
            label.classList.add('__filters-select__label');
            label.htmlFor = el.value;

            input.innerText = `${el.label}`;
            input.classList.add('__filters-select__input');
            input.name = el.value;
            input.setAttribute('type', 'radio');
            
            selectContent.append(label);
            selectContent.append(input);
        })

        // append elements to select block
        selectBlock.append(selectTitle);
        selectBlock.append(selectContent);
        
        // append elements to wrap block
        wrapBlock.append(label);
        wrapBlock.append(selectBlock);
        
        return wrapBlock;
    }
}


function generateFilters(schema) {
    schema.forEach(el => new customSelect(el));
}

generateFilters(schema);

// filters select 
const selectWrap = document.querySelectorAll('.__filters-select__wrap');

selectWrap.forEach(select => {
    const selectSingle = select.querySelector('.__filters-select');
    const selectSingle_title = selectSingle.querySelector('.__filters-select__title');
    const selectSingle_labels = selectSingle.querySelectorAll('.__filters-select__label');

    // Toggle menu
    selectSingle_title.addEventListener('click', () => {
        if ('active' === selectSingle.getAttribute('data-state')) {
            selectSingle.setAttribute('data-state', '');
        } else {
            selectSingle.setAttribute('data-state', 'active');
        }
    });

    // Close when click to option
    for (let i = 0; i < selectSingle_labels.length; i++) {
        selectSingle_labels[i].addEventListener('click', (evt) => {
            selectSingle_title.textContent = evt.target.textContent;
            selectSingle.setAttribute('data-state', '');
        });
    }
})

// Отобразить выбранные фильтры на странице
const onSelectedFiltersTrigger = document.querySelector('.filters-modal__btn');
const filtersMenu = document.querySelector('.filters-menu');
const allFilters = filtersMenu.querySelectorAll('.__filters-select__title');
const filtersSelectedWrap = document.querySelector('.filters-selected');



onSelectedFiltersTrigger.addEventListener( 'click' , () => {
    filtersSelectedWrap.innerHTML = '';
    allFilters.forEach(filter => {
        if (filter.textContent !== '') {
            const block = generateSelectedFiltersBlock(filter.textContent);
            filtersSelectedWrap.append(block);
        }
    })
})


filtersSelectedWrap.addEventListener( 'click', (e) => { 
    if (e.target.classList.contains('filters-selected__delete')) {
        deleteSelectedFilter (e)
    }
});


function generateSelectedFiltersBlock(label) {
    // generate selected block
    const block = document.createElement('div');
    block.classList.add('filters-selected__item');

    // generate selected block title
    const span = document.createElement('span');
    span.classList.add('filters-selected__name');
    span.innerText = label;

    // generate selected block img
    const img = document.createElement('img');
    img.classList.add('filters-selected__delete');
    img.src = 'https://www.dropbox.com/s/i2fh3hf4fwszes3/x.png?raw=1';
    img.alt = 'delete';

    // append to wrap block
    block.append(span);
    block.append(img)

    return block
}

function deleteSelectedFilter (e) {
    const selectedItem = e.target.parentNode;
    const selectedItemName = selectedItem.querySelector('span');
    selectedItem.remove();
    allFilters.forEach( filter => {
        if ( filter.textContent === selectedItemName.textContent) {
            filter.textContent = '';
        }
    })
}

// Links copied
const myLinksCopied = document.querySelectorAll('[data-copy-link]');
const linkCopiedBlock = document.querySelector('.link-copied');

myLinksCopied.forEach( btn => {
    btn.addEventListener('click', () => {
        linkCopiedBlock.classList.add('active');
        setTimeout(() => linkCopiedBlock.classList.remove('active'), 1000)
    })
})


// invite modal
const inviteModalTrigger = document.querySelector('.btn-invite');
const inviteModal = document.querySelector('.invite');
const inviteModalContent = document.querySelector('.invite__wrap');

    // открытие модального окна
    inviteModalTrigger.addEventListener('click', () => {
        inviteModal.classList.remove('hidden');
        inviteModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    // закрытие модального окна
    function closeInviteModal() {
        inviteModal.classList.remove('show');
        inviteModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    // закрытие модального окна кликом на подложку
    inviteModal.addEventListener('click', (e) => {
        if (e.target === inviteModal) {
            closeInviteModal();
        }
    });


// Tabs invite
function openInvite(evt, inviteSlide) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(inviteSlide).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// Tabs links
function openLinks(evt, linksSlide) {
    if(window.matchMedia('(max-width: 576px)').matches){
        const tabcontent = document.getElementsByClassName("my-links-item");
        for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
        const tablinks = document.getElementsByClassName("my-links__tab");
        for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(linksSlide).style.display = "block";
        evt.currentTarget.className += " active";
    }
    
}

if(window.matchMedia('(max-width: 576px)').matches){
	document.getElementById("defaultLink").click();
}


// button download all
const downloadAllBtn = document.querySelector('.filters__btn-download-all');

if(window.matchMedia('(max-width: 576px)').matches){
	downloadAllBtn.textContent = 'Download all';
}