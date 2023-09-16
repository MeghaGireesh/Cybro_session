//Here the functioning of tabs in website view is set,like hide and show
odoo.define('construction_projects_on_website.website_project', function (require) {
"use strict";
    $(document).ready(function(){
        $('#bologna_list a').on('click', function (e) {
            console.warn("hai megha")
          e.preventDefault();
//          $(this).tab('show');
        });
    });
});
