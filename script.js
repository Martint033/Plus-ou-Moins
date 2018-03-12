// function partie ()
// {
//     var max = 100;
//     var min = 0;
//     var continuer = 1;
//     var nombreMystere = 0;
//     var nombreactuel = 0;
//     var coups = 0;
//     nombreMystere = (Math.floor((max-min)*Math.random())+min);
    
//     while (continuer)
//     {
//         nombreActuel = prompt("Choisis un chiffre entre 0 et 100");

//         if (nombreActuel>nombreMystere && nombreActuel<=max)
//         { alert("C'est moins");
//             coups++; }

//         else if (nombreActuel<nombreMystere && nombreActuel>=min)
//         { alert("C'est plus");
//             coups++; }

//         else if (nombreActuel == nombreMystere)
//         { alert("bien ouèj bonhomme ! et en seulement " + coups + " coups !");
//             continuer = 0; }

//         else
//         { alert("On avais dit entre 0 et 100 andouille !"); }
//     }
// }


var nbJoueurs = 0;

function lancement (nb)
{
    nbJoueurs = nb;
    if (nbJoueurs == 1)
    {
        document.getElementById("modeJeu").innerHTML ="Mode Solo, c'est parti :";
    }

    else if (nbJoueurs == 2)
    {
        document.getElementById("modeJeu").innerHTML ="Mode Multi, c'est parti :";
        document.getElementById("jeu").innerHTML = "Au joueur 1 de jouer"
    }

}




var coups = 0;
var nombreMystere = 0;
var scoreJoueur = new Array (0);
var scoreFinal = new Array (0);
var a = 0;

function partie1 ()
{
    var max = 100;
    var min = 0;
    var nombreActuel = document.getElementById("nombre").value;
    var paragraphe = document.getElementById("para");
    var nombreCoups = document.getElementById("nbCoups");
    var historique = document.getElementById("histo");
    var score = document.getElementById("score");
    var b = a + 1;

    if (nbJoueurs == 1)
    {
        if (coups === 0)
        {
            nombreMystere = (Math.floor((max-min)*Math.random())+min);
            para.innerHTML = "";
            nombreCoups.innerHTML = "";
            historique.innerHTML = "";
            score.innerHTML = "";
        }
        
        if (nombreActuel>nombreMystere && nombreActuel<=max)
        {   coups++; 
            para.innerHTML = "C'est moins";
            nombreCoups.innerHTML = coups;
            historique.innerHTML += nombreActuel + ", ";
        }

        else if (nombreActuel<nombreMystere && nombreActuel>=min)
        {   coups++;
            para.innerHTML = "C'est plus";
            nombreCoups.innerHTML = coups;
            historique.innerHTML += nombreActuel + ", "; }

        else if (nombreActuel == nombreMystere)
        {   coups++;
            para.innerHTML = "Bravo !";
            nombreCoups.innerHTML = coups;
            historique.innerHTML += nombreActuel;
            score.innerHTML += "bien ouèj bonhomme ! et en seulement " + coups + " coups !";
            coups = 0; }

        else
        { alert("On avais dit entre 0 et 100 andouille !"); }
    }



    else if (nbJoueurs == 2)
    {   

        if (coups === 0)
        {
            nombreMystere = (Math.floor((max-min)*Math.random())+min);
            para.innerHTML = "";
            nombreCoups.innerHTML = "";
            historique.innerHTML = "";
            score.innerHTML = "";
        }
        
        if (nombreActuel>nombreMystere && nombreActuel<=max)
        {   coups++; 
            para.innerHTML = "C'est moins";
            nombreCoups.innerHTML = coups;
            historique.innerHTML += nombreActuel + ", ";
        }

        else if (nombreActuel<nombreMystere && nombreActuel>=min)
        {   coups++;
            para.innerHTML = "C'est plus";
            nombreCoups.innerHTML = coups;
            historique.innerHTML += nombreActuel + ", "; }

        else if (nombreActuel == nombreMystere)
        {   coups++;
            para.innerHTML = "Bravo !";
            nombreCoups.innerHTML = coups;
            historique.innerHTML += nombreActuel;
            score.innerHTML += "Bien ouèj bonhomme ! Et en seulement " + coups + " coups !";
            scoreJoueur[a] = coups;
            document.getElementById("scoreFinal").innerHTML+="Coups joueur " + b + " = " + scoreJoueur[a] + "<br>";
            a++;
            coups = 0;
            
            if (a > 1)
            {
                a = 0;

                if (scoreJoueur[0] > scoreJoueur[1])
                {
                    scoreFinal[0] ++;
                    document.getElementById("scorePartieJ1").innerHTML = "Joueur 1 à gagné " + scoreFinal[0] + " parties";
                    document.getElementById("scorePartieJ2").innerHTML = "Joueur 2 à gagné "+ scoreFinal[1] +" parties";
                }

                else if (scoreJoueur[0] < scoreJoueur[1])
                {
                    scoreFinal[1] ++;
                    document.getElementById("scorePartieJ1").innerHTML = "Joueur 1 à gagné " + scoreFinal[0] + " parties";
                    document.getElementById("scorePartieJ2").innerHTML = "Joueur 2 à gagné "+ scoreFinal[1] +" parties";
                }

                else
                {  
                    scoreFinal[0] ++;
                    scoreFinal[1] ++;
                    document.getElementById("scorePartieJ1").innerHTML = "Joueur 1 à gagné "+scoreFinal[0]+" parties";
                    document.getElementById("scorePartieJ2").innerHTML = "Joueur 2 à gagné "+scoreFinal[1]+" parties";
                }

                
            }
        }

        else
        { alert("On avais dit entre 0 et 100 andouille !"); }
        
        
        document.getElementById("jeu").innerHTML = "Au joueur " + b + " de jouer";
    }

    else 
    {
        alert("Veuillez choisir le nombre de joueurs");
    }
}


