var vorur = ["blíantur", "blað", "bók", "pennaveski", "strokleður"];
var texti = "";
var i;
for (i = 0; i < vorur.length; i++) {
    texti += vorur[i] + "<br>";
}
document.getElementById("vorur").innerHTML = texti;