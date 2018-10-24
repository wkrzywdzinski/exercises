(function() {
  inithandlebars();
  ////////////first click setup/////////
  $("button").on("click", function(e) {
    e.preventDefault();
    var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();
    var search = $("input[name='search']").val();
    var baseurl = "https://api.github.com";
    var endpoint = "/users/" + search + "/repos";
    ///////////////first click request////////////////
    $.ajax({
      url: baseurl + endpoint,
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password) //classic syntax for basic Authorization 'basic ' with space after, btoa/b
      },
      success: function(data) {
        $("#repolist").html(
          Handlebars.templates.repotemplate({
            data: data
          })
        );
        ///////////////second click////////////////
        $(".name").on("click", function(e) {
          var submitpoint = "/repos/" + $(e.target).html() + "/commits";
          ///////////////////second request///////////
          $.ajax({
            url: baseurl + submitpoint,
            headers: {
              Authorization: "Basic " + btoa(username + ":" + password)
            },
            success: function(data2) {
              commit = true;
              $(e.target).append(
                Handlebars.templates.submittemplate({
                  data: data2
                })
              );
            }
          });
        });
      }
    });
  });
  ////////////////// do not touch/////////////////
  function inithandlebars() {
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
      'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function(script) {
      Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
  }
})();
