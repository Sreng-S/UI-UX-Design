(function(window, document, $) {
  "use strict";

  /*
  NOTE:
  ------
  PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
  WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */
    $(document).ready(function() {
        $('.menu-toggle').click(function(){
            $('.logo-shop').toggle("fast", "linear");
            // $('.closed-nav').toggle();
        });
        $('.btn-actions').click(function () {
            $(this).toggleClass("btn-action-active");
            $('.dropdown-add-all').toggle();
        });
        $('.btn-add-user').click(function(){
            $('.dropdown-add-user').toggle();
        });
        $('.btn-manage-account').click(function(){
            $('.dropdown-manage-account').toggle();
        });
        $('.btn-add-money').click(function(){
            $('.dropdown-add-money').toggle();
        });
        $('.btn-add-order').click(function(){
            $('.dropdown-add-order').toggle();
        });
        $('.btn-dropdown-next').click(function(){
            $('.dropdown-add-money').hide();
            $('.dropdown-add-money-1').show()
        });
        $('.card-back').click(function(){
            $('.dropdown-add-money').show();
            $('.dropdown-add-money-1').hide()
        });
        $('#btn-submit').click(function(){
           $('.dropdown-add-money-1').hide();
        });
        // $('.btn-filter').click(function () {
        //     $(this).attr('src', 'assets/buttons/btn-filter-active.svg');
        // });
        $('.select2-search').after('<img src="assets/svg/icon-search.svg" style="position: absolute;">');
        $('.select2-search__field').addClass('filter-input-0');

        if($('#radioStacked1').checked === true){
            $('.panel-pickup').show();
        }
        $('.dataTables_paginate').show();

        if ($('#dt-dashboard').length) {

            $('#dt-dashboard').DataTable();
        }
        if ($('#dt-dashboard1').length) {
            $('#dt-dashboard1').DataTable();
        }
        if ($('#dt-orders').length){
            $('#dt-orders').DataTable({
                "aoColumnDefs": [
                    { "bSortable": false, "aTargets": [ 6 ] }
                ],
                "lengthMenu": [ 7, 25, 50, 75, 100 ],
                "pagingType": "simple_numbers",
                language: {
                    paginate: {
                        previous: " ",
                        next: " "
                    }
                }
            });
        }
        if ($('#dt-products').length){
            $('#dt-products').DataTable({
                "aoColumnDefs": [
                    { "bSortable": false, "aTargets": [ 6 ] }
                ],
                "lengthMenu": [ 7, 25, 50, 75, 100 ],
                "pagingType": "simple_numbers",
                language: {
                    paginate: {
                        previous: " ",
                        next: " "
                    }
                }
            });
        }
        if ($('#dt-shipments').length){
            $('#dt-shipments').DataTable({
                "aoColumnDefs": [
                    { "bSortable": false, "aTargets": [ 7 ] }
                ],
                "lengthMenu": [ 7, 25, 50, 75, 100 ],
                "pagingType": "simple_numbers",
                language: {
                    paginate: {
                        previous: " ",
                        next: " "
                    }
                }
            });
        }
        if ($('#dt-invoices').length){
            $('#dt-invoices').DataTable({
                "aoColumnDefs": [
                    { "bSortable": false, "aTargets": [ 5 ] }
                ],
                "lengthMenu": [ 7, 25, 50, 75, 100 ],
                "pagingType": "simple_numbers",
                language: {
                    paginate: {
                        previous: " ",
                        next: " "
                    }
                }
            });
        }
        if ($('#dt-transactions').length){
            $('#dt-transactions').DataTable({
                "aoColumnDefs": [
                    { "bSortable": false, "aTargets": [ 5 ] }
                ],
                "lengthMenu": [ 7, 25, 50, 75, 100 ],
                "pagingType": "simple_numbers",
                language: {
                    paginate: {
                        previous: " ",
                        next: " "
                    }
                }
            });
        }
        if ($('#dt-users').length){
            $('#dt-users').DataTable({
                "aoColumnDefs": [
                    { "bSortable": false, "aTargets": [ 5 ] }
                ],
                "lengthMenu": [ 7, 25, 50, 75, 100 ],
                "pagingType": "simple_numbers",
                language: {
                    paginate: {
                        previous: " ",
                        next: " "
                    }
                }
            });
        }
        if ($('#dt-directories').length){
            $('#dt-directories').DataTable({
                "aoColumnDefs": [
                    { "bSortable": false, "aTargets": [ 5 ] }
                ],
                "lengthMenu": [ 7, 25, 50, 75, 100 ],
                "pagingType": "simple_numbers",
                language: {
                    paginate: {
                        previous: " ",
                        next: " "
                    }
                }
            });
        }
        if ($('#dt-vouchers').length){
            $('#dt-vouchers').DataTable({
                "aoColumnDefs": [
                    { "bSortable": false, "aTargets": [ 3 ] }
                ],
                "lengthMenu": [ 7, 25, 50, 75, 100 ],
                "pagingType": "simple_numbers",
                language: {
                    paginate: {
                        previous: " ",
                        next: " "
                    }
                }
            });
        }
        if ($('#dt-billing').length){
            $('#dt-billing').DataTable({
                "aoColumnDefs": [
                    { "bSortable": false, "aTargets": [ 4 ] }
                ],
                "lengthMenu": [ 7, 25, 50, 75, 100 ],
                "pagingType": "simple_numbers",
                language: {
                    paginate: {
                        previous: " ",
                        next: " "
                    }
                }
            });
        }

        // language=JQuery-CSS
        $('.dataTables_filter,.dataTables_length, .dataTables_info').hide();

        $('th:first-child').css('padding-left','28px');
        $('.btn-edit').hover();

    });
})(window, document, jQuery);