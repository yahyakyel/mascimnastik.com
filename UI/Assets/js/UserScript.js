function AddUser() {
    debugger
    var FirstName = $('#firstname').val();
    var LastName = $('#lastname').val();
    var Email = $('#email').val();
    var Phone = $('#phone').val();
    var Message = $('#message').val();
    if (FirstName == "") {
        swal.fire("Hata!", "Adınızı Giriniz!", "error");
    }
    else if (LastName == "") {
        swal.fire("Hata!", "Soyadınızı Giriniz!", "error");
    }

    else if (Email == "") {
        swal.fire("Hata!", "Emailinizi Giriniz!", "error");
    }

    else if (Phone == "") {
        swal.fire("Hata!", "Telefonunuzu Giriniz!", "error");
    }

    else {
        debugger
        var formData = new FormData();
        //formData.append('avatar', newImage, FirstName + '_' + LastName + '.jpg');
        formData.append('FirstName', FirstName);
        formData.append('LastName', LastName);
        formData.append('Email', Email);
        formData.append('Phone', Phone);
        formData.append('Message', Message);
        $.ajax({
            type: "POST",
            url: '/Home/AddUser',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                swal.fire("Başarılı!", "Ön Kayıt İşleminiz Gerçekleştirildi.", "success");
                $('#firstname').val("");
                $('#lastname').val("");
                $('#email').val("");
                $('#phone').val("");
                $('#message').val("");
            },
            error: function (request, status, error) {
                swal.fire("Hata!", "Bir sorun ile karşılaşıldı!", "error");
            }
        });
    }
};
