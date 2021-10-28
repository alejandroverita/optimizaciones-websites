import {openModal} from './open-modal.js'

export const modalListener =(e) => {
    e.preventDefault()
    console.log('Click!')
    const img = e.target;
    const link = img.parentElement;

    if(link && link.classList.contains('js-video-link')){
        openModal(link.dataset.videoid)
        console.log(link.dataset.videoid);
    }
}