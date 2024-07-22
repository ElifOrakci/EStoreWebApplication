$(() => {
    $('.remove-btn').on('click', (evt) => {

        Swal.fire({
            icon: 'warning',
            title: 'UYARI',
            html: 'Bu kay�t <b>TAMAMEN</b> silinecektir. Devam etmek istiyor mususnuz?',
            confirmButtonText: '<i class="bi bi-trash text-danger"></i>S�L',
            showCancelButton: true,
            cancelButtonText: '�PTAL',
        })
            .then((result) => {
                if (result.isConfirmed) {
                    window.location = $(evt.currentTarget).attr('href');
                }

            });;
        return false;

    });

})