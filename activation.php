<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <meta name="viewport" content="width=640">

    <link rel="stylesheet" href="stylesheets/core.css" media="screen">
    <link rel="stylesheet" href="stylesheets/mobile.css" media="handheld, only screen and (max-device-width:640px)">
    <link rel="stylesheet" href="stylesheets/pygment_trac.css">

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <title>Vérification du mail</title>
  </head>

  <body>
   
    <div class="shell">

      <header>
        <span class="ribbon-outer">
          <span class="ribbon-inner">
            <h1>Vérification de votre adresse mail</h1>
            <h2></h2>
          </span>
          <span class="left-tail"></span>
          <span class="right-tail"></span>
        </span>
      </header>

      <div id="no-downloads">
        <span class="inner">
        </span>
      </div>


      <span class="banner-fix"></span>
       
      <?php
      function CallAPI($method, $url, $data = false)
      {
          $curl = curl_init();

          switch ($method)
          {
              case "POST":
                  curl_setopt($curl, CURLOPT_POST, 1);

                  if ($data)
                      curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
                  break;
              case "PUT":
                  curl_setopt($curl, CURLOPT_PUT, 1);
                  break;
              default:
                  if ($data)
                      $url = sprintf("%s?%s", $url, http_build_query($data));
          }

          curl_setopt($curl, CURLOPT_URL, $url);
          curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

          $result = curl_exec($curl);

          curl_close($curl);

          return $result;
      }
      ?>
      <?php
      echo "My first PHP script!";
      ?>
      <p><?php echo $_GET['email']; ?></p>
      <p><?php echo CallAPI("GET","http://192.168.1.27:8000/activation/"+$_GET['code']+"/"+$_GET['email']; ?></p>
      <section id="main_content">
    
		 </section>

    </div>

  </body>
</html>
