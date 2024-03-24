$(document).ready(function() {
    // scroll resources
        var container = $('#swiper_wrapper');
        var leftButton = $('#scrollLeftBtn');
        var rightButton = $('#scrollRightBtn');
        checkScrollPosition(container, leftButton, rightButton);
        // Add click event handlers to scroll buttons
        $('#scrollLeftBtn').click(function() {
            var newPosition = container.scrollLeft() - 500; // Adjust the scroll amount as needed
            container.stop().animate({ scrollLeft: newPosition }, 300, function() {
                // Update button visibility after the animation completes
                checkScrollPosition(container, leftButton, rightButton);
            });
        });
        $('#scrollRightBtn').click(function() {
            var newPosition = container.scrollLeft() + 500; // Adjust the scroll amount as needed
            container.stop().animate({ scrollLeft: newPosition }, 300, function() {
                // Update button visibility after the animation completes
                checkScrollPosition(container, leftButton, rightButton);
            });
        });
        // Check scroll position on scroll event
        container.scroll(function() {
            checkScrollPosition(container, leftButton, rightButton);
        });
    // scroll resources
});

// Function to check scroll position and hide/show scroll buttons
function checkScrollPosition(container, leftButton, rightButton) {
    var scrollLeft = container.scrollLeft();
    var scrollWidth = container[0].scrollWidth;
    var clientWidth = container[0].clientWidth;

    // Hide or show left scroll button
    if (scrollLeft === 0) {
        leftButton.hide();
    } else {
        leftButton.show();
    }

    // Hide or show right scroll button
    if (scrollLeft + clientWidth >= scrollWidth) {
        rightButton.hide();
    } else {
        rightButton.show();
    }
}
