<script>
	// As soon as the page loads
    jQuery(document).ready(function() {
        // Add the CWRU logo to the top right of the page
        var topMenuLogo = jQuery('#cb-top-menu>div').prepend("<div style='position:absolute;top:10px;'><a href='http://case.edu/' style='padding-left:10px;'><img style='height:32px;' src='http://ec2-54-208-2-90.compute-1.amazonaws.com/wp-content/uploads/2016/07/cwru-formal-logo-spotwhite-no-tag-1.svg'></a></div>");
        // Style the search bars (standard and mobile)
        var searchBarStyled = jQuery('#cb-logo-box').append("<div id='mainSearchBox'><form role='search' method='get' class='cb-search' action='http://ec2-54-208-2-90.compute-1.amazonaws.com/'><label for='headersearch' style='display:none;'>Search</label><input id='headersearch' type='text' class='cb-search-field cb-font-header' placeholder='Search..' value='' name='s' title='' autocomplete='off'><button aria-label='Submit Search' class='cb-search-submit' type='submit' value=''><i class='fa fa-search'></i></button></form></div>");
        var mobSearchBarStyled = jQuery('ul.cb-mobile-nav').prepend("<li><div id='mobSearchBox'><form role='search' method='get' class='cb-search' action='http://ec2-54-208-2-90.compute-1.amazonaws.com/'><label for='headersearch' style='display:none;'>Search</label><input id='headersearch' type='text' class='cb-search-field cb-font-header' placeholder='Search..' value='' name='s' title='' autocomplete='off'><button aria-label='Submit Search' class='cb-search-submit' type='submit' value=''><i class='fa fa-search'></i></button></form></div></li>");
        var mobSearchBarStyled = jQuery('#cb-nav-bar>div>ul>li.menu-item-has-children>a').append(" <i class='fa fa-angle-down' style='font-weight:600;'></i>");
        // Add buttons to the footer
        var subscriptionButton = jQuery('#subscribe-submit>input:last').addClass("base-btn button-primary");
        var exitMobileMenuButton = jQuery('#cb-mob-close>i').removeClass('cb-times').addClass('fa-times');
        // Add dropdown carets to the mobile menu
        var mobDropDownCaret = jQuery('#cb-mob-menu>div>ul>li.menu-item-has-children>a').append(" <i class='fa fa-angle-down' style='font-weight:600;'></i>");
        // Ensure that each page has proper top spacing
        var topSpacer = jQuery('#cb-section-a').addClass("cb-fis-pad");
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
