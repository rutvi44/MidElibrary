    $(document).ready(function () {
        init();
    });

    function init(){
        $("#submitBtn").on('click', btnSubmit_click);
        $("#btnSave").on('click', btnSave_click);

        // Check the initial state of the checkbox on page load
        if ($("#chkBoxRate").prop("checked")) {
            $("#ratingfields").show();
        } else {
            $("#ratingfields").hide();
        }

        // Use the change event to show/hide the ratingfields div
        $("#chkBoxRate").change(function () {
            if ($(this).prop("checked")) {
                $("#ratingfields").show();
            } else {
                $("#ratingfields").hide();
            }
        });
    }

    function btnSubmit_click() {
        registrationValidation();
        CalculationforRatings();
    }

    function btnSave_click(){
        settingsValidation();
    }