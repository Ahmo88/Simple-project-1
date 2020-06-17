///<reference path="../Ajax-PHP-save-and-read-text-value/node_modules/@types/jquery/index.d.ts" />

window.onload = function () {


    $(function () {
    
        $("#saveBtn").click(function (e) {
            //Get value from textBox
            var dataset = { "text1Value": document.getElementById('text1').value };

            //Use Ajax and send data to PHP("save-load-value.php") server side.
            $.ajax({
                type: "POST",
                url: "save-load-value.php",
                data: dataset,
                success: function () {

                    //if "alertDiv" not exist,cretae "alertDiv"
                    if ($('#alertDiv').length === 0) {

                        $('#contentDiv').append('<div id="alertDiv" class="alert alert-success" role="alert" style="width:400px; margin:20px" >Text saved!</div>')
                        $('#alertDiv').hide(100).slideDown(1000).delay(1000).slideUp(1000);
                        $.when($("#alertDiv").slideUp(1000)).done(function () {
                            $('#alertDiv').remove();
                        });

                        $('#alertDiv').css({ "display": "none" })
                    }
                    else {
                        // code to run if exist
                    }

                }
            });

            e.preventDefault();
        });

        //when button delete is clicked 
        $("#clearBtn").click(function (e) {

            //Use Ajax and send "empty" value to PHP("save-load-value.php") server side.
            var dataset = { "clear": "" };
            $.ajax({
                url: 'save-load-value.php',
                type: 'POST',
                data: dataset,
                success: function () {

                    //if "alertDiv" not exist,cretae "alertDiv"
                    if ($('#alertDiv').length === 0) {

                        $('#contentDiv').append('<div id="alertDiv" class="alert alert-danger" role="alert" style="width:400px; margin:20px" >Text deleted!</div>')
                        $('#text1').val("");
                        $('#alertDiv').hide(100).slideDown(1000).delay(1000).slideUp(1000);
                        $.when($("#alertDiv").slideUp(1000)).done(function () {
                            $('#alertDiv').remove();
                        });

                        $('#alertDiv').css({ "display": "none" })
                    }
                    else {
                        // code to run if exist
                    }

                }
            });
            e.preventDefault();

        });

        //if checkBox1 is checked set textarea (textBox) height to 300px and uncheck checkBox2
        $("#checkBox1").change(function () {
            if ($(this).prop('checked')) {
                $("#text1").css({ "height": "300px" });
                $("#checkBox2").prop('checked', false)

                // if checkBox1 is unchecked set textarea (textBox) height to 200px
            } else {
                $("#text1").css({ "height": "200px" });

            }
        });

        //if checkBox2 is checked set textarea (textBox) height to 400px and uncheck checkBox1
        $("#checkBox2").change(function () {
            if ($(this).prop('checked')) {
                $("#text1").css({ "height": "400px" });
                $("#checkBox1").prop('checked', false)

                // if checkBox2 is unchecked set textarea (textBox) height to 200px
            } else {
                $("#text1").css({ "height": "200px" });
            }
        });



    });


}

