$(function() {
  //***********
  var ev = 1;
  var ev2 = 1;
  var i;
  var x;
  //données recupérer sous forme de tableaux
  var tabRes = [];
  var tabPrio = [];
  var tabPID = [];
  var tabDateCreation = [];
  var tabPrio = [];
  var tabEvents = [];
  //***********
  var nbre_proc;
  var nbre_res;
  var radio;
  //click qui affiche les formulaires des evennements
  $("#valider").on("click", function(e) {
    nbre_proc = parseInt($(".nbreproc").val());
    nbre_res = parseInt($(".nbreres").val());
    radio = $("fieldset input[type='radio']:checked").val();
    console.log(radio);
    //tableau de ressources pour remplir les semaphores
    for (i = 1; i <= nbre_res; i++) {
      var ch = "R" + i;
      tabRes.push(ch);
    }
    //reglage de processus
    for (i = 0; i < nbre_proc; i++) {
      if (ev2 != 1) {
        e.preventDefault();
      } else if ((nbre_proc >= 1) && (nbre_res >= 1)) {
        ev2++;
        for (i = 0; i < nbre_proc; i++) {
          $(".pp").append('<div class="P' + i + '"><label>P' + (i + 1) + ' :</label><br/><label>PID :</label><input type="text" id="PID' + i + '" /><br/><label>Date de creation :</label> <input type="text" class="ddc' + i + '" /><br/><label>Priorite :</label> <input type="text" class="priorite' + i + '" /><br/><label>Nombre d événements :</label> <input type="number" class="howmuch' + i + '"><button type="button" name="button" class="button" id="btn' + i + '">Valider nombre Events</button><br/><div class="events' + i + '"></div></div><hr><hr>');
        }

        //zk:chblzhevcbeo

        $(".pp :button").each(function(elt) {
          $(this).on("click", function(e1) {
            console.log("hhhhhh");
            //position du bouton valider nbre de click
            var i = ($(".pp :button").index($(this)));
            console.log(i);
            //x: nbre des evennements à ajouter
            var x = parseInt($('.pp [class="howmuch' + i + '"]').val());
            console.log(x);
            if (x >= 1) {
              var j;
              for (j = 0; j < x; j++) {
                console.log("vvvvvv");
                $(".events" + i).append('<label><b>Evennement' + (j + 1) + ' :</b></label>' + '<label>Temps :</label> <input type="text" id="temps' + j + '"/><label>Operations :</label><select id="operations' + j + '"><option value="choisir" selected>Choisir</option><option value="OP_CLAIM">OP_CLAIM</option><option value="OP_RELEASE">OP_RELEASE</option><option value="OP_STOP">OP_STOP</option></select><label>Semaphores :</label> <select id="semaphores' + j + '"><option value=choisir"">Choisir</option></select><br/>');
              }
              $(".events").append('<button type="button" id="verifier">Verifier</button><br/>');
              $("#verifier").on("click", function(e) {
                for (j = 0; j < x; j++) {
                  var y = parseInt($("#temps" + j).val());
                  console.log(y);
                }
              });
            }

          });
        });
        //jnzjk:djciledc
        $(".pp").append('<button type="button" id="envoyer">Envoyer</button>');
        $(".pp").append('<button type="reset" id="reset">Reset</button>');
        $("#envoyer").on("click", function() {
          console.log("7mdl");
        });

      }


    }
console.log(tabRes);
console.log(nbre_proc);
console.log(nbre_res);

  });

});
