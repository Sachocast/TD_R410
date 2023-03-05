# M413 - TD1 : Réponses aux Questions  

# 6.1 
# ➢ Quel sera l’évènement qui déclenchera l’appelle de votre fonction ? 
# onload   

# ➢ Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise <h1> ? 
# document.getElementById("title").innerHTML = "Test";  

# ➢ Quelle propriété de l’objet représentant votre balise <h1> avez-vous utilisée pour récupérer le texte de celui-ci ? 
# title  

# ➢ Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant la première balise <h2> ?
# J'ai utilisé un querySelector  

# ➢ Comment faire pour connaitre le nombre de balise <h2> du document ?
# document.querySelectorAll('h2').length  

# ➢ Quelle méthode avez-vous utilisée pour récupérer les objets de votre classe ?
# J'ai utilisé document.getElementsByClassName()  

# ➢ Comment avez-vous déterminé si un nombre est pair ?
# tout d'abord : length = document.getElementsByClassName("firstOrLast").length
# puis : if(length%2 == 0)  

# 6.2
# ➢ Quelles différences existe-t-il entre les 3 propriétés innerHTML, innerText et textContent ?
# innerHTML renvoie ou modifie tout le contenu HTML d'un élément, innerText renvoie ou modifie uniquement le texte affiché à l'écran pour un élément, textContent renvoie ou modifie uniquement le texte brut de l'élément, sans tenir compte du balisage HTML.  

# 6.3
# ➢ Comment modifier votre code pour qu’il permette de sélectionner le 1er auteur de la liste 
# document.querySelector("meta\[name=author]")  

# ➢ Même question avec le dernier auteur de la liste.
# auteurs = document.querySelectorAll("meta\[name=author]");
# dernierAuteur = auteurs[auteurs.length - 1];  

# ➢ Comment obtenez-vous le nombre de jours ?
# var jour = Math.round(d.getTime()/(1000\*60\*60*24));
# var auj =Math.round(Date.now()/(1000*60*60*24));
# var jRestant = jour-auj;  

# ➢ Comment faites-vous la mise à jour du texte ?
# J'ajoute un eventListener sur la phrase qui appele la fonction lorsque l'on clique dessus :
# document.getElementById("clique").addEventListener("click",getNbDays);  

# 7.1
# ➢ Laquelle des deux méthodes de l’objet window avez-vous utilisé ? Pourquoi ?
# setInterval() appele une fonction avec un intervalles réguliers, alors que setTimeout() appele une fonction après un certain délai.
# J'ai utilisé les deux méthodes dans deux versions de updateClock différentes.  

# 8.1
# ➢ Quel évènement avez-vous utilisé ?  
# document.getElementById("form").addEventListener("input",changeColor)

# ➢ Comment avez-vous fait changer la couleur du champ texte ?  
# je compare le contenu du formulaire a un regex et en fonction du resultat je change sa classe css.
# if(regex.test(document.getElementById("change").value)) {
#	document.getElementById("change").className = "green";
#	}




