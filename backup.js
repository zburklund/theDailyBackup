<script>
	// As soon as the page loads
    jQuery(document).ready(function() {
        // Add the CWRU logo to the top right of the page
        var topMenuLogo = jQuery('#cb-top-menu>div').prepend("<div style='position:absolute;top:10px;'><a href='http://case.edu/' style='padding-left:10px;'><img style='height:32px;' src='http://umc-devtest-cmsvpc-lb01-1519385574.us-east-1.elb.amazonaws.com/wp-content/uploads/2016/07/cwru-formal-logo-spotwhite-no-tag-1.svg'></a></div>");
        // Style the search bars (standard and mobile)
        var searchBarStyled = jQuery('#cb-logo-box').append("<div id='mainSearchBox'><form role='search' method='get' class='cb-search' action='http://umc-devtest-cmsvpc-lb01-1519385574.us-east-1.elb.amazonaws.com/'><label for='headersearch' style='display:none;'>Search</label><input id='headersearch' type='text' class='cb-search-field cb-font-header' placeholder='Search..' value='' name='s' title='' autocomplete='off'><button aria-label='Submit Search' class='cb-search-submit' type='submit' value=''><i class='fa fa-search'></i></button></form></div>");
        var mobSearchBarStyled = jQuery('ul.cb-mobile-nav').prepend("<li><div id='mobSearchBox'><form role='search' method='get' class='cb-search' action='http://umc-devtest-cmsvpc-lb01-1519385574.us-east-1.elb.amazonaws.com/'><label for='headersearch' style='display:none;'>Search</label><input id='headersearch' type='text' class='cb-search-field cb-font-header' placeholder='Search..' value='' name='s' title='' autocomplete='off'><button aria-label='Submit Search' class='cb-search-submit' type='submit' value=''><i class='fa fa-search'></i></button></form></div></li>");
        var mobSearchBarStyled = jQuery('#cb-nav-bar>div>ul>li.menu-item-has-children>a').append(" <i class='fa fa-angle-down' style='font-weight:600;'></i>");
        // Add buttons to the footer
        var subscriptionButton = jQuery('#subscribe-submit>input:last').addClass("base-btn button-primary");
        var exitMobileMenuButton = jQuery('#cb-mob-close>i').removeClass('cb-times').addClass('fa-times');
        // Add dropdown carets to the mobile menu
        var mobDropDownCaret = jQuery('#cb-mob-menu>div>ul>li.menu-item-has-children>a').append(" <i class='fa fa-angle-down' style='font-weight:600;'></i>");
        // Ensure that each page has proper top spacing
        var topSpacer = jQuery('#cb-section-a').addClass("cb-fis-pad");
        // Hold onto the details of the social feed
        var socialHolder = jQuery('#cb-footer div.cb-under-footer');
        // Flip the footer and instagram feed
        var socialFlipper = jQuery('#cb-footer').prepend(socialHolder);


        // Hold onto the details of the social feed
        var calendarHolder = jQuery('.stec');
        console.log(calendarHolder);
        // Flip the footer and instagram feed
        var calendarFlipper = jQuery('.cb-main div.cb-contents').prepend(calendarHolder);


        // Search for areas to drop buttons in the main content
        var hreftest = jQuery(location).attr('href').split('/');
        if ((hreftest[3] != '') && (hreftest[4] == '') && (hreftest[3] != 'events') && (hreftest[3] != 'about')) {
        	var mainContentButtons = jQuery('div.cb-main>div').each(function() {
        		var hrefholder = jQuery(this).find('div.cb-module-header>h2').text();
        		var cleanlink = (((hrefholder.replace(", ","-")).replace(" & ","-")).replace(" ","-")).toLowerCase();
	        	jQuery(this).append('<a href="' + cleanlink + '"><button class="base-btn button-primary module-btn">See all ' + hrefholder + ' Articles</button></a>');
	        });
        }
    });
    // Watch all of the clicks that happen in the document
    jQuery(document).on('click', function(event) {
	    // If the menu is open and you click away from it
	    if (!jQuery(event.target).closest('#cb-mob-menu, #cb-top-menu').length) {
	        // Hide the menus.
	        jQuery('body').removeClass('cb-mob-op');
	    }
	});

//Solution in progress for the mobile menu (Currently everything is
//displayed on the flyout)
/*
	var i=0;
	var hideMobileMenu = jQuery("#cb-mob-menu").find(">div.cb-mob-menu-wrap li.menu-item-has-children").each(function() {
	    jQuery(this).attr('data-id', i);
	    jQuery(this).find('>ul').hide();
	    i++;
	});
	i='';
	hideMobileMenu.click(function() {
	    clearit='';
	    if(jQuery(this).attr('data-id') != i) {
	        jQuery(this).find('>ul').show();
	        if(i != '') {
	            jQuery(this).find('>ul').hide();
	        }
	        i = jQuery(this).attr('data-id');
	    }
	});
	jQuery(document).on('click', function(event) {
	  if (!jQuery(event.target).closest('#cb-mob-menu>div>ul>li>ul>li, #cb-mob-menu>div>ul>li>').length) {
	    // Hide the menus.
	    jQuery(hideMobileMenu).hide();
	  }
	});
*/
</script>
