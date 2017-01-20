<script>
    // As soon as the page loads
    jQuery(document).ready(function() {
        // Add GTM code just after the first body tag
        var gtmCodeAdd = jQuery('body').prepend('<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6NQD8" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->');
        // Add the CWRU logo to the top right of the page
        var topMenuLogo = jQuery('#cb-top-menu>div').prepend("<div style='position:absolute;top:10px;'><a href='http://case.edu/' style='padding-left:10px;'><img style='height:32px;' src='http://dailymedia.case.edu/wp-content/uploads/2016/07/18155038/cwru-formal-logo-spotwhite-no-tag-1.svg'></a></div>");
        // Style the search bars (standard and mobile)
        var searchBarStyled = jQuery('#cb-logo-box').append("<div id='mainSearchBox'><form role='search' method='get' class='cb-search' action='http://thedaily.case.edu/'><label for='headersearch' style='display:none;'>Search</label><input id='headersearch' type='text' class='cb-search-field cb-font-header' placeholder='Search..' value='' name='s' title='' autocomplete='off'><button aria-label='Submit Search' class='cb-search-submit' type='submit' value=''><i class='fa fa-search'></i></button></form></div>");
        var mobSearchBarStyled = jQuery('ul.cb-mobile-nav').prepend("<li><div id='mobSearchBox'><form role='search' method='get' class='cb-search' action='http://thedaily.case.edu/'><label for='headersearch' style='display:none;'>Search</label><input id='headersearch' type='text' class='cb-search-field cb-font-header' placeholder='Search..' value='' name='s' title='' autocomplete='off'><button aria-label='Submit Search' class='cb-search-submit' type='submit' value=''><i class='fa fa-search'></i></button></form></div></li>");
        var mobSearchBarStyled = jQuery('#cb-nav-bar>div>ul>li.menu-item-has-children>a').append(" <i class='fa fa-angle-down' style='font-weight:600;'></i>");
        // Mobile menu buttons
        var mobdropdownbuttons = jQuery('span.cb-icon-plus').each(function() {
            jQuery(this).addClass('fa');
        });
        // Add buttons to the footer
        var subscriptionButton = jQuery('#subscribe-submit>input:last').addClass("base-btn button-primary");
        var exitMobileMenuButton = jQuery('#cb-mob-close>i').removeClass('cb-times').addClass('fa-times');
        // Ensure that each page has proper top spacing
        var topSpacer = jQuery('#cb-section-a').addClass("cb-fis-pad");
        // Hold onto the details of the social feed
        var socialHolder = jQuery('#cb-footer div.cb-under-footer');
        // Flip the footer and instagram feed
        var socialFlipper = jQuery('#cb-footer').prepend(socialHolder);
        // // Remove all placeholder images
        var placeholderRemover = jQuery("div.cb-mask:has(img[alt*='placeholder'])").each(function() {
            jQuery(this).css("display", "none");
            jQuery(this).next().css({"width": "100%", "padding-left": "0px"});
        });
        // Adjust page title dynamically
        var pagetitle = jQuery('title');
        if (pagetitle[0].innerHTML != 'The Daily | Case Western Reserve University') {
            //adjust the title
            var pagetitleholder = pagetitle[0].innerHTML;
            if (pagetitle[0].innerHTML.search(" Archives") == -1) {
                pagetitleholder += " The Daily";
            }
            pagetitleholder = pagetitleholder.replace(" Archives", "");
            if (pagetitleholder.length < 22) {
                pagetitleholder += " | Case Western Reserve University";
            }
            pagetitle[0].innerHTML = pagetitleholder;
        }
        // If the page is a Community Posting - add the disclaimer to the page
        var checkTheCategory = jQuery('.cb-category').each(function() {
            // console.log(jQuery(this).find('a').attr('href'));
            if (jQuery(this).find('a').attr('href') == 'http://thedaily.case.edu/category/community-postings/') {
                // append the disclaimer
                // console.log(jQuery(this).parent());
                // jQuery(this).parent().before('<div class="community-postings-disclaimer"><p><em>Community Postings Disclaimer</em></p></div>');
            }
        });
        // Search for areas to drop buttons in the main content
        var hreftest = jQuery(location).attr('href').split('/');
        if (hreftest[3] != '') {
            var logoAdjuster = jQuery('#logo>a').wrap('<h1></h1>');
        };
        if ((hreftest[3] != '') && (hreftest[4] == '') && ((hreftest[3] != 'events') && (hreftest[3] != 'about') && (hreftest[3] != 'community-postings') && (hreftest[3] != 'community-postings-form') && (hreftest[3] != 'connect'))) {
            var mainContentButtons = jQuery('div.cb-main>div').each(function() {
                var hrefholder = jQuery(this).find('div.cb-module-header>h2').text();
                var cleanlink = ((((hrefholder.replace(", ","-")).replace(" & ","-")).replace(" ","-")).toLowerCase());
                switch (cleanlink) {
                    case 'athletics':
                        jQuery(this).append('<a href="/tag/' + cleanlink + '"><button class="base-btn button-primary module-btn">See all ' + hrefholder + ' Articles</button></a>');
                        break;
                    case 'featured':
                        jQuery(this).append('<a href="/category/' + cleanlink + '"><button class="base-btn button-primary module-btn">See all ' + hrefholder + ' Articles</button></a>');
                        break;
                    case 'media-mentions':
                        jQuery(this).append('<a href="/category/media"><button class="base-btn button-primary module-btn">See all ' + hrefholder + '</button></a>');
                        break;
                    case 'people':
                        jQuery(this).append('<a href="/category/5questions"><button class="base-btn button-primary module-btn">See all ' + hrefholder + ' Articles</button></a>');
                        break;
                    case 'in-memory':
                        jQuery(this).append('<a href="/tag/obituary"><button class="base-btn button-primary module-btn">See all Articles Written in Memory</button></a>');
                        break;
                    case 'campus-updates':
                        jQuery(this).append('<a href="/category/' + hreftest[3] + "/" + cleanlink + '"><button class="base-btn button-primary module-btn">See all ' + hrefholder + '</button></a>');
                        break;
                    case 'awards':
                        jQuery(this).append('<a href="/category/' + hreftest[3] + "/" + cleanlink + '"><button class="base-btn button-primary module-btn">See all Award Recognitions</button></a>');
                        break;
                    case 'publications-presentations':
                        jQuery(this).append('<a href="/category/' + hreftest[3] + "/" + cleanlink + '"><button class="base-btn button-primary module-btn">See all ' + hrefholder + '</button></a>');
                        break;
                    case 'appointments':
                        jQuery(this).append('<a href="/category/' + hreftest[3] + "/" + cleanlink + '"><button class="base-btn button-primary module-btn">See all ' + hrefholder + '</button></a>');
                        break;
                    default:
                        jQuery(this).append('<a href="/category/' + hreftest[3] + "/" + cleanlink + '"><button class="base-btn button-primary module-btn">See all ' + hrefholder + ' Articles</button></a>');
                        break;
                };
            });
        };
        if ((hreftest[3] == 'category') && (hreftest[4] == 'community-postings')) {
            var fixTheSidebar = jQuery('aside.cb-sidebar').empty();
            fixTheSidebar.append('<div id="text-32" class="cb-sidebar-widget widget_text"><h3 class="cb-sidebar-widget-title cb-widget-title">Quick Links</h3><div class="textwidget"><div><a href="/community-postings-form"><button class="base-btn button-primary btn-block" type="button">Submit a Posting</button></a></div></div></div>');
        };
        if (jQuery('#cb-featured-image.cb-gallery-post-wrap').length > 0) {
            var fixTheTitle = jQuery('#cb-featured-image>div.cb-entry-header.cb-meta');
            var placeTheTitle = jQuery('div.cb-post-wrap div.cb-main').prepend(fixTheTitle);
            var fixTheCaption = jQuery('span.cb-caption').css({"width": "100%", "max-width": "100%", "text-align": "center"});
        };
        if (hreftest[3] == 'events') {
            // Hold onto the details of the calendar
            var calendarHolder = jQuery('.stec').parent();
            // Change places for the calendar on the Calendar Page
            var calendarFlipper = jQuery('.cb-main div.cb-contents').prepend(calendarHolder);
            // Change places for the calendar on the Events Page
            var calendarFlipper = jQuery('#cb-section-a div.cb-contents').prepend(calendarHolder);
            // Choose not to display day and week views
            var calendarViewFlipper = jQuery("li[data-view='day'], li[data-view='week']").each(function() {
                jQuery(this).css("display", "none");
            });
            // Change the filter icon to text
            var calendarFilterIconChanger = jQuery('i.fa-calendar').replaceWith("<p>Filter by Subject</p>");
            // Final Removals
            var calendarMonthOrderChanger = jQuery('.stec-top-menu-layouts li:first-child').insertAfter('.stec-top-menu-layouts li:nth-child(2)');
            jQuery(window).on("load, resize", function() {
                var viewportWidth = jQuery(window).width();
                if (viewportWidth < 768) {
                    jQuery("li[data-view='month']").removeClass("active");
                    jQuery("li[data-view='agenda']").addClass("active");
                } else {
                    jQuery("li[data-view='month']").addClass("active");
                    jQuery("li[data-view='agenda']").removeClass("active");
                }
            });  
        };
    });
    // Watch all of the clicks that happen in the document
    jQuery(document).on('click', function(event) {
        // If the menu is open and you click away from it
        if (!jQuery(event.target).closest('#cb-mob-menu, #cb-top-menu').length) {
            // Hide the menus.
            jQuery('body').removeClass('cb-mob-op');
        }
    });
    var urlHolder = window.location.href;
    jQuery("li a[href='" + urlHolder + "']").addClass('current').parentsUntil('ul.cb-main-nav').slice(3).find(">a").addClass('current');

</script>
