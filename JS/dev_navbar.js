$(document).ready(function(){
    // Load the navigation bar
    $('.load_navbar').html(`
    <div>
        <div>
            <section class="desktop_nav_bar justify-content-between position-relative">
                <div class="nav_left">
                    <div class="nav_logo_wrapper me-5">
                        <img src="../aseets/images/logo_developers.svg" alt="" id="nav_logo">
                    </div>
                    <ul class="nav_links_wrapper p-0 m-0 gap-5 align-items-center">
                        <li style="height: 100%; width: 1px; border: none; border-right: 1px solid #b9b9b9;"><hr></li>
                        <li><a href="../Developer/dashboard.html" class="nav_links problems">Problems</a></li>
                        <li><a href="../Developer/groups.html" class="nav_links groups">Groups</a></li>
                    </ul>
                </div>

                <div class="nav_right gap-3">
                    <div class="nav_profile_icon_wrapper">
                        <img src="../aseets/images/profile_icon.svg" alt="" id="nav_profile_icon">
                    </div>
                </div>
                
                <div class="menu_icon" style=" width: 20px; height: 20px;">
                    <input class="menu-icon__cheeckbox" type="checkbox" />
                    <div>
                    <span></span>
                    <span></span>
                    </div>
                </div>
            </section>

            <div class="profile_icon_links hide_menu border">
                <ul class="pil_wrapper p-0 m-0">
                    <li class="profile_link"><a href="../Developer/profile.html" class="profile">Profile</a></li>
                    <li class="profile_link"><a href="../Developer/pricing.html" class="pricing">Pricing</a></li>
                    <li class="profile_link"><a href="../Developer/settings.html" class="settings">Settings</a></li>
                    <li class="profile_link"><a href="../Developer/certificates.html" class="certificates"">Certificates</a></li>
                    <li class="profile_link"><a href="../Developer/contactUs.html" class="contactUs"">Contact Us</a></li>
                    <li class="profile_link"><a href="" class="text-danger" data-bs-toggle="modal" data-bs-target="#logoutModal">Logout</a></li>
                </ul>
            </div>
        </div>
        <!--  -->
        <div class="mobile_nav_bar bg-white border-top hidden_menu">
        <ul class="mobile_nav_bar_wrapper m-0 p-0">
            <li class="nav_link_wrapper"><a href="../Developer/dashboard.html" class="nav_link problems">Problems</a><span><img src="../aseets/images/arrow_right.svg" alt="" class="arrow"></span></li>
            <li class="nav_link_wrapper"><a href="../Developer/groups.html" class="nav_link groups">Groups</a><span><img src="../aseets/images/arrow_right.svg" alt="" class="arrow"></span></li>
            <li class="nav_link_wrapper"><a href="../Developer/profile.html" class="nav_link profile">Profile</a><span><img src="../aseets/images/arrow_right.svg" alt="" class="arrow"></span></li>
            <li class="nav_link_wrapper"><a href="../Developer/pricing.html" class="nav_link pricing">Pricing</a><span><img src="../aseets/images/arrow_right.svg" alt="" class="arrow"></span></li>
            <li class="nav_link_wrapper"><a href="../Developer/settings.html" class="nav_link settings">Settings</a><span><img src="../aseets/images/arrow_right.svg" alt="" class="arrow"></span></li>
            <li class="nav_link_wrapper"><a href="../Developer/certificates.html" class="nav_link certificates">Certificates</a><span><img src="../aseets/images/arrow_right.svg" alt="" class="arrow"></span></li>
            <li class="nav_link_wrapper"><a href="../Developer/contactUs.html" class="nav_link contactUs">Contact Us</a><span><img src="../aseets/images/arrow_right.svg" alt="" class="arrow"></span></li>
            <li class="nav_link_wrapper"><a href="" class="nav_link text-danger" data-bs-toggle="modal" data-bs-target="#logoutModal">Logout</a></li>
        </ul>
        </div>
    </div>
    `);

    // Toggle menu
    $('.nav_profile_icon_wrapper').click(function(event) {
        $('.profile_icon_links').toggleClass('show_menu');
        event.stopPropagation(); // Prevent event propagation
    });

    // Close menu when clicked outside the icon or menu
    $(document).click(function(event) {
        if ($('.profile_icon_links').hasClass('show_menu')) {
            $('.profile_icon_links').removeClass('show_menu');
        }
    });

    $(document).ready(function(){
        $('.menu_icon').click(function(){
            $('.mobile_nav_bar').toggleClass('visible_menu');
            $('body').toggleClass('no_scroll')
        });
    });
});