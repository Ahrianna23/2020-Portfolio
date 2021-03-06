<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Ahri Daniels</title>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">

<meta name="description" content="Ahri Daniels is a Web Developer based in Central New Jersey with skills ranging from photoshop to front-end web development">

<meta name="keywords" content="Web Design, Web Developer, Digital Art, Graphic Design, Freelancer Developer, Freelance Web Designer, Freelance 3D Artist, Photoshop, Illustrator, Photo Manipulation Artist, New Jersey">
<link rel="stylesheet" href="css/index.css" type="text/css">
<meta name="author" content="Ahrianna Daniels">
<meta name="copyright" content="2017">

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
  <script src="ahriannaApp.js"></script>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-109019886-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-109019886-1');
</script>
<style>
    #page {width: 100%; padding:5% background:blue}
</style>
</head>
<body>
        <div class="container" id="page">
           <div class="content index">
                <header>
                    <a href="index.php"><div class="logo"><img src="images/logo.svg"></div></a>
                    <div class="menu-container">
                        <p id="menu-txt">Menu</p>
                        <!-- Hamburger Icon
                        <div class="menu-icon" id="menu-icon">
                            <div class="menu-line"></div>
                            <div class="menu-line"></div>
                            <div class="menu-line"></div>
                        </div>
                        -->
                    </div> <!-- End Menu Container -->
                    
                    <div class="navbar">
                        <a href="about.php" class="links"><div id="nav1">About</div></a>
                        <a href="portfolio.php" class="links"><div id="nav2" >Work</div></a>
                        <a href="mailto:ahridaniels405@gmail.com" class="links"><div id="nav3">Contact</div></a>
                    </div><!-- End Navbar -->
                    
               </header><!-- End Header -->
                <h1 id="script">Hi, I'm</h1>
                <h1 >Ahrianna</h1>
                <h3>Web Developer</h3>

                <a href="portfolio.php">
                    <div class="cta">
                        <p>see my work</p>
                    </div>
                </a>
               <div class="bg"></div>
               
               <footer> <small> &copy; <?php echo date("Y"); ?> Copyright Ahrianna Daniels</small> </footer>
               
            </div><!-- End Content Container --> 
            
        </div><!-- End Main Container -->
        
        <script type="text/javascript" src="portfolio.js"></script>  
    </body>
</html>