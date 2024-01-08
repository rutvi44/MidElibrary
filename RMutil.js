function isvalid_reg_data()
{
    $("#frmSubscribe").validate({rules:{
            txtSubscriptionName:{
                required:true,
                rangelength:[2,20]
            },
            txtEmail:{
                required:true,
                fn_emailCheck:true
            },
            subDate: {
                required: true,
                shouldNotGreaterThanCurrentDate: true
            },
            intutiveUI:{
                required:true,
                range:[0,5]
            },
            reponseTime:{
                required:true,
                range:[0,5]
            }
        },
        messages:{
            txtSubscriptionName:{
                required:'Name is required',
                rangelength:'Length must be 2 to 20 characters long'
            },
            txtEmail:{
                required:'Email is required',
                fn_emailCheck:'Email must be valid'
            },
            subDate: {
                required: 'Date is required',
                shouldNotGreaterThanCurrentDate: 'Date cannot be greater than the current date'
            },
            intutiveUI:{
                required:'IntutiveUI rating is required',
                range:'Please enter a value between 0 to 5'
            },
            reponseTime:{
                required:'Response time is required',
                range:'Please enter a value between 0 to 5'
            }
        }});
    return $("#frmSubscribe").valid();
}
function isvalid_add_part_data() {
    $("#frmSettings").validate({
        rules: {
            subEmail: {
                required: true,
                fn_emailCheck: true
            }
        },
        messages: {
            subEmail: {
                required: 'Email is required',
                fn_emailCheck: 'Email must be valid'
            },
        }
    });
    return $("#frmSettings").valid();
}
jQuery.validator.addMethod("fn_emailCheck", function(value, element) {
    var regexp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return this.optional(element) || regexp.test(value);
}, "Invalid email format");

jQuery.validator.addMethod("shouldNotGreaterThanCurrentDate", function(value, element) {
    var inputDate = new Date(value);
    var currentDate = new Date();
    return inputDate <= currentDate;
})
function calculateOverallRatings(IntutiveUi, ResponseTime) {
    IntutiveUi = parseInt(IntutiveUi) || 0;
    ResponseTime = parseInt(ResponseTime) || 0;
    return ((IntutiveUi + ResponseTime) * 100 / 10);
}