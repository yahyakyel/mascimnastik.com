function GetUsersOnAdmin() {
    debugger
    var table = $('#kt_table_UserList');
    var t = table.DataTable({
        ajax: {
            url: '/Users/AllUser',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: "json",
            data: {
                pagination: {
                    perpage: 50,
                },
            },
        },
        "pageLength": 50,
        'stripeClasses': ['stripe1', 'stripe2'],
        dom: `<'row'<'col-sm-3 text-left'f><'col-sm-9 text-right'B>>
			<'row'<'col-sm-12'tr>>
			<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>`,

        buttons: [{
            extend: 'collection',
            text: '<i class="flaticon2-gear" style= "font-size:16px; "></i>',
            className: 'btn btn-outline-info dropleft-inline  pt-2 mt-0 pb-2 mb-0',
            buttons: [
                'excel',
                'print',
                'csv',
                'pdf',
                'copy',
                'colvis',
            ],
        }],

        columns: [
            {
                data: 'SN',
                searchable: false,
                orderable: false,
                width: '4%',
                className: 'dt-center ml-3',
            },
            {
                data: 'UserName',
                className: 'font-weight-bold ',
            },
            {
                data: 'eMail',
                className: 'font-weight-bold ',
            },
            {
                data: 'Phone',
                className: 'font-weight-bold ',
            },
            {
                data: 'Message',
                className: 'font-weight-bold ',
            },
            {
                data: 'Gönderme Tarihi',
                className: 'font-weight-bold ',
            },
            {
                data: 'Talep Onay Durumu',
                className: 'font-weight-bold ',
            },
            { data: 'İşlemler' },
        ],

        columnDefs: [
            {
                targets: 0,
                render: function (data, type, full, meta) {
                    result = ``;
                    return result;
                }
            },

            {
                targets: 1,
                render: function (data, type, full, meta) {
                    var result = full['Name'];
                    return result;
                }
            },
            {
                targets: 2,
                render: function (data, type, full, meta) {
                    var result = full['Mail'];
                    return result;
                }
            },
            {
                targets: 3,
                render: function (data, type, full, meta) {
                    var result = full['Phone'];
                    return result;
                }
            },
            {
                targets: 4,
                render: function (data, type, full, meta) {
                    var result = full['Message'];
                    return result;
                }
            },
            {
                targets: 5,
                type: 'date-eu',
                render: function (data, type, full) {
                    debugger
                    return moment(full['CreatedTime']).format('DD/MM/YYYY');
                }
            },
            {
                targets: 6,
                render: function (data, type, full, meta) {
                    switch (full['userStatus']) {
                        case 0:
                            result = '<span style="width: 131px;"><span style="font-size: 1rem; padding:1rem;" class="kt-badge  kt-badge--primary kt-badge--inline kt-badge--pill   fw-bolder text-primary">Bekleniyor</span></span>';
                            break;
                        case 1:
                            result = '<span style="width: 131px;"><span style="font-size: 1rem; padding:1rem;" class="kt-badge  kt-badge--success kt-badge--inline kt-badge--pill   fw-bolder text-success">İletişime Geçildi</span></span>';
                            break;
                        case 2:
                            result = '<span style="width: 131px;"><span style="font-size: 1rem; padding:1rem;" class="kt-badge kt-badge--danger  kt-badge--inline kt-badge--pill   fw-bolder  text-danger">İletişime Geçilmedi</span></span>';
                            break;
                    }
                    return result;
                }
            },
            {
                targets: -1,
                title: 'İşlemler',
                orderable: false,
                "width": "14%",
                render: function (data, type, full, meta) {
                    result = `<a onclick="UpdateStatusForUser(` + full['ID'] + `,1)"  class="btn btn-sm btn-light btn-text-primary btn-icon mr-2" title="Onayla"  value="` + full['ID'] + `"><span class="svg-icon svg-icon-md"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <polygon points="0 0 24 0 24 24 0 24"/>
                                        <path d="M6.26193932,17.6476484 C5.90425297,18.0684559 5.27315905,18.1196257 4.85235158,17.7619393 C4.43154411,17.404253 4.38037434,16.773159 4.73806068,16.3523516 L13.2380607,6.35235158 C13.6013618,5.92493855 14.2451015,5.87991302 14.6643638,6.25259068 L19.1643638,10.2525907 C19.5771466,10.6195087 19.6143273,11.2515811 19.2474093,11.6643638 C18.8804913,12.0771466 18.2484189,12.1143273 17.8356362,11.7474093 L14.0997854,8.42665306 L6.26193932,17.6476484 Z" fill="#000000" fill-rule="nonzero" transform="translate(11.999995, 12.000002) rotate(-180.000000) translate(-11.999995, -12.000002) "/>
                                    </g>
                                 </svg></span>
                              </a>
                              <a onclick="UpdateStatusForUser(` + full['ID'] + `,2)"  class="btn btn-sm btn-light btn-text-primary btn-icon mr-2" title="Vazgeç"><span class="svg-icon svg-icon-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
                                                <rect x="0" y="7" width="16" height="2" rx="1"/>
                                                <rect transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000) " x="0" y="7" width="16" height="2" rx="1"/>
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                              </a>`;
                    return result;
                }
            },
        ],
        order: [1, 'asc'],
        responsive: false,
        "scrollX": true,
        orderCellsTop: true,
        "destroy": true,
    });
    t.on('draw.dt', function () {
        var PageInfo = $('#kt_table_UserList').DataTable().page.info();
        t.column(0, { page: 'current' }).nodes().each(function (cell, i) {
            cell.innerHTML = i + 1 + PageInfo.start;
        });
    });

};

function UpdateStatusForUser(UsersRequestID, Status) {
    var formData = new FormData();
    formData.append('UsersRequestID', UsersRequestID);
    formData.append('Status', Status);
    var table = $('#kt_table_UserList');

    $.ajax({
        type: "POST",
        url: '/Users/UpdateStatusForUser',
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            table.DataTable().ajax.reload();
        },
        error: function (request, status, error) {
            swal.fire("Hata!", "Bir sorun ile karşılaşıldı!", "error");
        }
    });
};
