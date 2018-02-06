$(function() {

  var tab_rec = [];

  var processus_p1 = '<label for="P">P'
  var processus_p2 = '</label></div><div class="form-group"><label for="pid">PID</label><input type="text" id="pid" class="form-control mx-sm-2" size="20" aria-describedby="PID"><small id="pidhelpinline" class="text-muted">doit etre un numero.</small></div><br/><hr color="red"/>';
  var btn = '<button type="submit" class="btn btn-primary" id="envoyer">Envoyer</button><button type="reset" class="btn btn-primary" id="reset">Reset</button></form>';
  $("#valider").on("click", function() {
    var nbre_proc = parseInt($("#nbreproc").val());
    var nbre_res = parseInt($("#nbrerec").val());
    $("#dynamique").append('<form class="form-inline" action="fichier.php" method="post"><div class="form-group">');
    for (var i = 1; i <= nbre_proc; i++) {
      $("#dynamique").append(processus_p1 + i + processus_p2);
    }
    $("#dynamique").append(btn);
    for (var i = 1; i <= nbre_res; i++) {
      var ch = "R" + i;
      tab_rec.push(ch);
    }
    $(".statique").hide();
  });


});
