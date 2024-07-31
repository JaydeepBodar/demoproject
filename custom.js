import jQuery from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import Slick Carousel only on the client side
if (typeof window !== 'undefined') {
    require('slick-carousel');
}

// Run Slick Carousel initialization code only on the client side
// if (typeof window !== 'undefined') {
//     // Ensure code runs only on the client side
//     jQuery(document).ready(function() {
//         jQuery('.faq-heading').click(function() {  
//             jQuery(this).next('.faq-content').slideToggle();
//             jQuery(this).toggleClass('faq-heading-active');
//             jQuery(this).find('.vertical-line').slideToggle();
//         });
        
       
//     });
// }
