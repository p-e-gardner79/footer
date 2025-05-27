document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Check if the screen width is less than 1000px
            if (window.innerWidth < 1000) {
                const accordionItem = header.closest('.accordion-item');

                // Toggle the 'active' class on the accordion item
                // This class controls the visibility of content and icon rotation via CSS
                accordionItem.classList.toggle('active');

                // Optional: Close other open accordions if you only want one open at a time
                // accordionHeaders.forEach(otherHeader => {
                //     const otherAccordionItem = otherHeader.closest('.accordion-item');
                //     if (otherAccordionItem !== accordionItem && otherAccordionItem.classList.contains('active')) {
                //         otherAccordionItem.classList.remove('active');
                //     }
                // });
            }
        });
    });
});