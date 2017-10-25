$(document).ready(function() {
  $("#submit").click(function(event) {
    event.preventDefault();
    $("#submit").fadeOut();
    $("#partOne").fadeIn(3000, function() {
      $("#replicant").fadeIn(1000, function() {
        $("#partTwo").fadeIn(1000, function() {
          $("#partThree").fadeIn(1000, function() {
            $("#partFour").fadeIn(1000, function() {
              $("#bladeRunner").fadeIn(1000, function() {
                $("#partFive").fadeIn(1000, function() {
                  $("#partSix").fadeIn(1000, function() {
                    $("#partSeven").fadeIn(1000, function() {
                      $("#retirement").fadeIn(1000, function() {
                        $("#partSix").fadeOut();
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
    $
  });
});
