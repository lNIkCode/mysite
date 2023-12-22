window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


window.addEventListener('load', function(event) {
    let chat = document.getElementById('embeddedMessagingConversationButton');
    console.log('Chat', chat);
    chat.style.display = 'none';
    
    var myButton = document.getElementById('greenButton');
    console.log('BUTTON', myButton);
    myButton.addEventListener('click', function(event) { 
        chat.click();
        let chat2 = document.getElementById('embeddedMessagingConversationButton');
        chat2.style.display = 'none !important';
        //var newBody = document.getElementById('newBody');
        //var newChat = document.querySelector('embeddedmessaging-container');
        //console.log('New Chat', newChat);
        //newBody.appendChild(newChat);     
    });

    chat.addEventListener('click', () => {
        let chat2 = document.getElementById('embeddedMessagingConversationButton');
        chat2.style.display = 'none !important';
        console.log('Chat', chat2);
    });

 
});
