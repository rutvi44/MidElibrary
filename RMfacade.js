function registrationValidation()
{
    if(isvalid_reg_data())
    {
        console.info('Subscriber Form is Valid');
    }
    else
    {
        console.info('Subscriber Form is invalid');
    }
}

function settingsValidation()
{
    if(isvalid_add_part_data())
    {
        console.info('Setting Form is Valid');
    }
    else
    {
        console.info('Setting Form is invalid');
    }
}

function CalculationforRatings() {
    var IntutiveUi = $("#intutiveUI").val();
    var ResponseTime = $("#reponseTime").val();
    var overallRatings = calculateOverallRatings(IntutiveUi, ResponseTime);
    $("#overallRating").val(overallRatings + "%");
}
