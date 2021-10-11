'use strict';

export const ShoppingSelectors = {
    "buttons" : {
        "firstProductMore" : '#center_column  li:nth-child(1) .right-block > div.button-container > a.button.lnk_view.btn.btn-default',
        "wishlistButton" : "#wishlist_button",
        "" : "",
        "" : "",
        "" : ""
    },

    "messages" : {
        "wishlistError" : "#product > div.fancybox-overlay-fixed p",
        "" : "",
        "" : "",
        "" : "",
        "" : ""
    },

    "header" : {
        "women" : "#block_top_menu > ul > li.sfHoverForce > a"
    }
};

module.exports = ShoppingSelectors;