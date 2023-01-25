<!-- Events page --> 
<!DOCTYPE html>
<html lang="en-CA">
  <head> 
    <link rel="stylesheet" type="text/css" href="events.css"> 
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Events</title>
  </head>
  <body>
    <div class="header">
      <a href="home.html"><img src="images/nbbirdwatchers-logo.jpg" alt="Logo"></a> 
      <a href="home.html"><h1>NB Birdwatchers</h1></a>
    </div>
    <div class="content-title">
      <h2>Events</h2>
    </div>
    <div class="content-table">
 	  <table class="content-table-details">
	    <tr class="table-header">
	      <th>Location</th>
	      <th>Date</th>
	      <th>Time</th>
	      <th>Organizer</th>
   	      <th>Organizer Contact</th>
	    </tr> 
	    <!-- 
		  Connect to the database and populate the table with entries from 'events'.
          
		  Modified from source code:
	      Author: Jonnny 
	      Date: July 27 2013
	      Code: https://stackoverflow.com/a/17902527
	    -->
	    <?php 
	 	  //Connect to the database using guest account with only read access to 'events' table
		  $conn = mysqli_connect("localhost","nbbirdwatchersguest","","nbbirdwatchers");
		  //Display error message if connection error occurs
		  if (mysqli_connect_errno()) {
		    echo "Error connecting to database" . mysqli_connect_error();
		  }
		  //Obtain the entries in the 'events' table and store in 'result' variable
		  $result = mysqli_query($conn, "SELECT * FROM events");
		  //Loop through 'result' and create a new row with respective columns for each entry
		  while ($row = mysqli_fetch_assoc($result)) {
			echo "<tr>";
			echo "<td>" . $row["events_location"] . "</td>";
			echo "<td>" . $row["events_date"] . "</td>";
			echo "<td>" . $row["events_time"] . "</td>";
			echo "<td>" . $row["events_organizer"] . "</td>";
			echo "<td>" . $row["events_contact"] . "</td>";
			echo "</tr>";
		  }
		  //Close the connection
		  mysqli_close($conn);
		?>
	  </table>
    </div>
    <div class="footer">
      <p>Background image credit:<a href="https://unsplash.com/photos/d6XSEEEfSiw">Gary Bendig</a></p>
    </div> 
  </body>
</html>
