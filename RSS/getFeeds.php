<?php
	header("Content-type:text/xml");

	$feed = file_get_contents("http://localhost/Kriketo/RSS/rss.xml");

	echo $feed;
