<?php

//echo $_POST['genre'] . ' ' . $_POST['search'];

include('Database API\tmdb-api.php');

$tmdb = new TMDB($conf);

$genres = $tmdb->getMovieGenres();
foreach($genres as $genre)
{
	if($genre->getID() == $_POST['genre'])
		$filter = $genre->getName();
}
echo $filter;

$search = $_POST['search'];
$movies = $tmdb->searchMovie($search);
$i = 0;
$j = 0;

foreach($movies as $movie)
{
	$info = $tmdb->getMovie($movie->getID());

	$m_genres = $info->getGenres();
	foreach($m_genres as $mgenres)
	{
		if($mgenres->getName() == $filter)
			$j = $j+1;
	}
}

echo '<h3>MOVIES ' . $filter . ':</h3><br>';
foreach($movies as $movie)
{
	$info = $tmdb->getMovie($movie->getID());

	$m_genres = $info->getGenres();
	foreach($m_genres as $mgenres)
	{
		if($mgenres->getName() == $filter)
		{
			if($i == 0)
				echo '<div class="row">';
			if($i !=0 && $i%3 == 0)
				echo '</div><br><br><div class="row">';
			echo 
			'<div class="col-md-4">
				<img src="'. $tmdb->getImageURL('w185') . $info->getPoster() .'" alt="' . $info->getTitle() . '">
				<br>
				<b>'. $info->getTitle() .'</b>
			</div>';

			$i = $i+1;

			if($i == $j)
				echo '</div>';
		}
	}	
}

?>
