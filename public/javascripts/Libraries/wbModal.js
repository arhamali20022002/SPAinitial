/**
 * Created with JetBrains WebStorm.
 * User: Arham Ali Qureshi
 * Date: 2/2/13
 * Time: 1:24 AM
 * To change this template use File | Settings | File Templates.
 */

<!-- Modal Start -->
define("wbModal", function(){
        function Modal(heading,foot){
               this.modal="<!-- Modal Start --><div id='exceptionModal' class='modal hide fade' tabindex='-1' role='dialog' aria-labelledby='modalLabel' aria-hidden='true'>\n<div class='modal-header'>\n<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>X</button>\n<h3 id='modalLabel'>"+heading+"</h3>\n</div>\n<div class='modal-body'></div>\n<div class='modal-footer'>\n<h3 id='modalFoot'>"+foot+"</h3>\n<button class='btn' data-dismiss='modal' aria-hidden='true'>Close</button>\n</div>\n</div><!-- Modal End-->";
               $('body').append(this.modal);
            Modal.prototype.show = function(){ //Display modal
                $('#exceptionModal').modal('show');
            }
            Modal.prototype.close = function(){ //Close
                $('.modal-header').find(".close").click();
            }
            Modal.prototype.closeDelay = function(delay){ //Close with delay
                setTimeout(function() {         //written  to get some delay
                    $('.modal-header').find(".close").click();
                }, delay);
            }
            Modal.prototype.putRed = function (redMessage){
                var head = 'head' in redMessage ? redMessage.head : 'Error..!'; //If head index is in array it will assign the redMessage.head value to head variable othervise defual value will be assgined.
                var redHTML = "<div class='alert alert-block alert-error'>\n<a class='close' data-dismiss='alert'>X</a>\n<h4 class='alert-heading'>"+ head +"</h4>\n<span></span>\n</div>";
                $('.modal-body').append(redHTML);  //To create alert box in model and errorHTML is a varible define in document.ready
                $('div[class="alert alert-block alert-error"] > span').text(redMessage.body); //To place error message in alert box of model.
            }
            Modal.prototype.putBlue = function (blueMessage){
                var head = 'head' in blueMessage ? blueMessage.head : 'Information'; //If head index is in array it will assign the blueMessage.head value to head variable othervise defual value will be assgined.
                var blueHTML="<div class='alert alert-block alert-info'>\n<a class='close' data-dismiss='alert'>X</a>\n<h4 class='alert-heading'>"+ head +"</h4>\n<span>No more messages to display..!</span>\n</div>";
                $('.modal-body').append(blueHTML);  //To inform there are no error message left in model body and infoHTML is a varible define in document.ready
                $('div[class="alert alert-block alert-info"] > span').text(blueMessage.body); //To place error message in alert box of model.
            }
            Modal.prototype.putGreen = function (greenMessage){
                var head = 'head' in greenMessage ? greenMessage.head : 'Success'; //If head index is in array it will assign the greenMessage.head value to head variable othervise defual value will be assgined.
                var greenHTML="<div class='alert alert-block alert-success'>\n<a class='close' data-dismiss='alert' href='#'>X</a>\n<h4 class='alert-heading'>"+ head +"</h4>\n<span></span>\n</div>";
                $('.modal-body').append(greenHTML);  //To inform there are no error message left in model body and infoHTML is a varible define in document.ready
                $('div[class="alert alert-block alert-success"] > span').text(greenMessage.body); //To place error message in alert box of model.
            }
            Modal.prototype.putHTML = function (HTML){
                $('div[id="exceptionModal"] > div[class="modal-body"]').append(HTML);
            }

        }
    return Modal;
});
<!-- Modal End-->
//var test;
//$(function(){
 //     test = new Modal("Heading");
//   test.putRed({'body':"This is putRed"});
//    test.putBlue({'head':'Information','body':'This is putBlue'});
//    test.putGreen({'body':"This is putGreen"});
//    test.putHTML("This is putHTML");
//    test.show();
//});
