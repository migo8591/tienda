            console.log("herediano")
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            })
            var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
            var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
                return new bootstrap.Popover(popoverTriggerEl)
            })
            var carouselControls = document.querySelector('#carouselControls')
            var carousel = new bootstrap.Carousel(carouselControls, {
                interval: 5000,
                wrap: false
            });
            $(function () {
                $('#apartarVestidos2').on('show.bs.modal', function (e) {
                    console.log("el modal del boton apartar se muestra en formato jquery");
                    $("#apartarVestidos1").removeClass("btn btn-primary");
                    $("#apartarVestidos1").addClass("btn btn-warning");
                    $("#apartarVestidos1").prop("disabled", true);
                });
                $('#apartarVestidos2').on('shown.bs.modal', function (e) {
                    console.log("el modal del boton apartar se mostro en formato jquery");
                });
                $('#apartarVestidos2').on('hide.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTA en formato jquery");
                });
                $('#apartarVestidos2').on('hidden.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTO en formato jquery");
                    $("#apartarVestidos1").removeClass("btn btn-warning");
                    $("#apartarVestidos1").addClass("btn btn-primary");
                    $("#apartarVestidos1").prop("disabled", false)
                });
            });
            $(function () {
                $('#apartarPantalones2').on('show.bs.modal', function (e) {
                    console.log("el modal del boton apartar se muestra en formato jquery");
                    $("#apartarPantalones1").removeClass("btn btn-primary");
                    $("#apartarPantalones1").addClass("btn btn-warning");
                    $("#apartarPantalones1").prop("disabled", true);
                });
                $('#apartarPantalones2').on('shown.bs.modal', function (e) {
                    console.log("el modal del boton apartar se mostro en formato jquery");
                });
                $('#apartarPantalones2').on('hide.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTA en formato jquery");
                });
                $('#apartarPantalones2').on('hidden.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTO en formato jquery");
                    $("#apartarPantalones1").removeClass("btn btn-warning");
                    $("#apartarPantalones1").addClass("btn btn-primary");
                    $("#apartarPantalones1").prop("disabled", false)
                });
            });
            $(function () {
                $('#apartarBlusas2').on('show.bs.modal', function (e) {
                    console.log("el modal del boton apartar se muestra en formato jquery");
                    $("#apartarBlusas1").removeClass("btn btn-primary");
                    $("#apartarBlusas1").addClass("btn btn-warning");
                    $("#apartarBlusas1").prop("disabled", true);
                });
                $('#apartarBlusas2').on('shown.bs.modal', function (e) {
                    console.log("el modal del boton apartar se mostro en formato jquery");
                });
                $('#apartarBlusas2').on('hide.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTA en formato jquery");
                });
                $('#apartarBlusas2').on('hidden.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTO en formato jquery");
                    $("#apartarBlusas1").removeClass("btn btn-warning");
                    $("#apartarBlusas1").addClass("btn btn-primary");
                    $("#apartarBlusas1").prop("disabled", false)
                });
            });
            $(function () {
                $('#apartarBolsos2').on('show.bs.modal', function (e) {
                    console.log("el modal del boton apartar se muestra en formato jquery");
                    $("#apartarBolsos1").removeClass("btn btn-primary");
                    $("#apartarBolsos1").addClass("btn btn-warning");
                    $("#apartarBolsos1").prop("disabled", true);
                });
                $('#apartarBolsos2').on('shown.bs.modal', function (e) {
                    console.log("el modal del boton apartar se mostro en formato jquery");
                });
                $('#apartarBolsos2').on('hide.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTA en formato jquery");
                });
                $('#apartarBolsos2').on('hidden.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTO en formato jquery");
                    $("#apartarBolsos1").removeClass("btn btn-warning");
                    $("#apartarBolsos1").addClass("btn btn-primary");
                    $("#apartarBolsos1").prop("disabled", false)
                });
            });
            $(function () {
                $('#apartarZapatos2').on('show.bs.modal', function (e) {
                    console.log("el modal del boton apartar se muestra en formato jquery");
                    $("#apartarZapatos1").removeClass("btn btn-primary");
                    $("#apartarZapatos1").addClass("btn btn-warning");
                    $("#apartarZapatos1").prop("disabled", true);
                });
                $('#apartarZapatos2').on('shown.bs.modal', function (e) {
                    console.log("el modal del boton apartar se mostro en formato jquery");
                });
                $('#apartarZapatos2').on('hide.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTA en formato jquery");
                });
                $('#apartarZapatos2').on('hidden.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTO en formato jquery");
                    $("#apartarZapatos1").removeClass("btn btn-warning");
                    $("#apartarZapatos1").addClass("btn btn-primary");
                    $("#apartarZapatos1").prop("disabled", false)
                });
            });
            $(function () {
                $('#apartarTrajes2').on('show.bs.modal', function (e) {
                    console.log("el modal del boton apartar se muestra en formato jquery");
                    $("#apartarTrajes1").removeClass("btn btn-primary");
                    $("#apartarTrajes1").addClass("btn btn-warning");
                    $("#apartarTrajes1").prop("disabled", true);
                });
                $('#apartarTrajes2').on('shown.bs.modal', function (e) {
                    console.log("el modal del boton apartar se mostro en formato jquery");
                });
                $('#apartarTrajes2').on('hide.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTA en formato jquery");
                });
                $('#apartarTrajes2').on('hidden.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTO en formato jquery");
                    $("#apartarTrajes1").removeClass("btn btn-warning");
                    $("#apartarTrajes1").addClass("btn btn-primary");
                    $("#apartarTrajes1").prop("disabled", false)
                });
            });
            $(function () {
                $('#apartarPijamas2').on('show.bs.modal', function (e) {
                    console.log("el modal del boton apartar se muestra en formato jquery");
                    $("#apartarPijamas1").removeClass("btn btn-primary");
                    $("#apartarPijamas1").addClass("btn btn-warning");
                    $("#apartarPijamas1").prop("disabled", true);
                });
                $('#apartarPijamas2').on('shown.bs.modal', function (e) {
                    console.log("el modal del boton apartar se mostro en formato jquery");
                });
                $('#apartarPijamas2').on('hide.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTA en formato jquery");
                });
                $('#apartarPijamas2').on('hidden.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTO en formato jquery");
                    $("#exampleModalBtn").prop("disabled", false)
                });
            });
            $(function () {
                $('#apartarTdB2').on('show.bs.modal', function (e) {
                    console.log("el modal del boton apartar se muestra en formato jquery");
                    $("#apartarTdB1").removeClass("btn btn-primary");
                    $("#apartarTdB1").addClass("btn btn-warning");
                    $("#apartarTdB1").prop("disabled", true);
                });
                $('#apartarTdB2').on('shown.bs.modal', function (e) {
                    console.log("el modal del boton apartar se mostro en formato jquery");
                });
                $('#apartarTdB2').on('hide.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTA en formato jquery");
                });
                $('#apartarTdB2').on('hidden.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTO en formato jquery");
                    $("#apartarTdB1").removeClass("btn btn-warning");
                    $("#apartarTdB1").addClass("btn btn-primary");
                    $("#apartarTdB1").prop("disabled", false)
                });
            });
            $(function () {
                $('#apartarTdB2').on('show.bs.modal', function (e) {
                    console.log("el modal del boton apartar se muestra en formato jquery");
                    $("#apartarTdB1").removeClass("btn btn-primary");
                    $("#apartarTdB1").addClass("btn btn-warning");
                    $("#apartarTdB1").prop("disabled", true);
                });
                $('#apartarTdB2').on('shown.bs.modal', function (e) {
                    console.log("el modal del boton apartar se mostro en formato jquery");
                });
                $('#apartarTdB2').on('hide.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTA en formato jquery");
                });
                $('#apartarTdB2').on('hidden.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTO en formato jquery");
                    $("#exampleModalBtn").prop("disabled", false)
                });
            });
            $(function () {
                $('#apartarMaquillaje2').on('show.bs.modal', function (e) {
                    console.log("el modal del boton apartar se muestra en formato jquery");
                    $("#apartarMaquillaje1").removeClass("btn btn-primary");
                    $("#apartarMaquillaje1").addClass("btn btn-warning");
                    $("#apartarMaquillaje1").prop("disabled", true);
                });
                $('#apartarMaquillaje2').on('shown.bs.modal', function (e) {
                    console.log("el modal del boton apartar se mostro en formato jquery");
                });
                $('#apartarMaquillaje2').on('hide.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTA en formato jquery");
                });
                $('#apartarMaquillaje2').on('hidden.bs.modal', function (e) {
                    console.log("el modal del boton apartar se OCULTO en formato jquery");
                    $("#apartarMaquillaje1").removeClass("btn btn-warning");
                    $("#apartarMaquillaje1").addClass("btn btn-primary");
                    $("#apartarMaquillaje1").prop("disabled", false)
                });
            });