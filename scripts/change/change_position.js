export function change_position(elementID, position) {
    console.log(position);

    const element_instance = document.getElementById(elementID);

    switch (position) {
        case 'bottom_left':
            element_instance.style.left = '70px';
            element_instance.style.bottom = '60px';
            element_instance.style.top = '';
            element_instance.style.right = '';
            element_instance.style.transform = '';
            break;
        case 'left':
            element_instance.style.top = '50%';
            element_instance.style.left = '70px';
            element_instance.style.bottom = '';
            element_instance.style.right = '';
            element_instance.style.transform = 'translateY(-50%)';
            break;
        case 'top_left':
            element_instance.style.top = '60px';
            element_instance.style.left = '70px';
            element_instance.style.bottom = '';
            element_instance.style.right = '';
            element_instance.style.transform = '';
            break;
        case 'top_center':
            element_instance.style.top = '60px';
            element_instance.style.left = '50%';
            element_instance.style.bottom = '';
            element_instance.style.right = '';
            element_instance.style.transform = 'translateX(-50%)';
            break;
        case 'top_right':
            element_instance.style.top = '60px';
            element_instance.style.right = '70px';
            element_instance.style.left = '';
            element_instance.style.bottom = '';
            element_instance.style.transform = '';
            break;
        case 'right':
            element_instance.style.top = '50%';
            element_instance.style.right = '70px';
            element_instance.style.left = '';
            element_instance.style.bottom = '';
            element_instance.style.transform = 'translateY(-50%)';
            break;
        case 'bottom_right':
            element_instance.style.bottom = '60px';
            element_instance.style.right = '70px';
            element_instance.style.top = '';
            element_instance.style.left = '';
            element_instance.style.transform = '';
            break;
        case 'bottom_center':
            element_instance.style.bottom = '60px';
            element_instance.style.right = '50%';
            element_instance.style.top = '';
            element_instance.style.left = '';
            element_instance.style.transform = 'translateX(50%)';
            break;
    }
}