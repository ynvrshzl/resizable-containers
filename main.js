const containers = document.querySelectorAll('section');

containers.forEach((container) => {
    // craete vertical resizer
    const resizer = document.createElement('hr');
    resizer.classList.add('resizer');
    container.insertAdjacentElement("afterend", resizer)

    // initial event listener
    resizer.addEventListener('mousedown', init);
    let init_x, init_w

    function init(event) {
        event.preventDefault();

        init_x = event.clientX;
        init_w = parseInt(window.getComputedStyle(container).width);
        document.documentElement.addEventListener('mousemove', resize_begin);
        document.documentElement.addEventListener('mouseup', resize_stop);
    };
    function resize_begin(event) {
        const width_new = init_w + (event.clientX - init_x)
        console.log(width_new);
        container.style.width = width_new + 'px';
    };
    function resize_stop() {
        document.documentElement.removeEventListener('mousemove', resize_begin);
        document.documentElement.removeEventListener('mouseup', resize_stop);
    }
})
