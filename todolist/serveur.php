<?php
	$bdd = new PDO('mysql:host=localhost;dbname=todolist;charset=utf8', 'root', '');

	switch ($_REQUEST ['method']) {
		case 'getTodo':
		$req = $bdd->prepare('SELECT t.id, t.importance, categorie, texte, t.glyphicon FROM todolist t, importance i WHERE t.importance = i.importance ORDER BY ordre');
		$req->execute();
		$req = $req->fetchAll(PDO::FETCH_ASSOC);
		break;
		case 'getCat':
		$req = $bdd->prepare('SELECT * FROM categorie');
		$req->execute();
		$req = $req->fetchAll(PDO::FETCH_ASSOC);
		break;
		case 'getImp':
		$req = $bdd->prepare('SELECT * FROM importance');
		$req->execute();
		$req = $req->fetchAll(PDO::FETCH_ASSOC);
		break;
		case 'addTodo':
		$req = $bdd->prepare('INSERT INTO todolist (texte, categorie, importance, glyphicon) VALUES (?, ?, ?, ?)');
		$req->execute(array($_REQUEST['texte'], $_REQUEST['categorie'], $_REQUEST['importance'], $_REQUEST['glyphicon']));
		break;
		case 'deleteTodo': 
		$req = $bdd->prepare('DELETE FROM todolist WHERE id = ?');
		$req->execute(array($_REQUEST['id']));
		break;
	}
	echo json_encode($req);
?>