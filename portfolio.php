<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Ahri Daniels</title>
<link rel="stylesheet" type="text/css" href="css/index.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
<meta name="description" content="Ahri Daniels is a Web Developer based in Central New Jersey with skills ranging from photoshop to front-end web development">
<meta name="keywords" content="Web Design, Web Developer, Digital Art, Graphic Design, Freelancer Developer, Freelance Web Designer, Freelance 3D Artist, Photoshop, Illustrator, Photo Manipulation Artist, New Jersey">
<meta name="author" content="Ahri Daniels">
<meta name="copyright" content="2020">

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-109019886-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-109019886-1');
</script>

</head>
<body>
    <?php include('includes/loader.inc'); ?>
    <div class="container">
        
        <div class="content portfolio">
            <header>
            <a href="index.php"><div class="logo"><img src="images/logo.svg"></div></a>
            <div class="mobile-nav">
                <div class="menu-container">
                <p id="menu-txt">Menu</p>
                <!--
                    <div class="menu-icon" id="menu-icon">
                        <div class="menu-line"></div>
                        <div class="menu-line"></div>
                        <div class="menu-line"></div>
                    </div>
                -->
                </div>
                <div class="navbar">
                    <a href="index.php" class="links"><div id="nav1">Hello</div></a>
                    <a href="about.php" class="links"><div id="nav2">About</div></a>
                    <a href="mailto:ahridaniels405@gmail.com" class="links"><div id="nav3">Contact</div></a>
                </div>
            </div>
        </header>
            <h1>- My Work -</h1>
            <!--
            <div class="showcase-thumbnail-container">
                <div class="thumbnail active"></div>
                <div class="thumbnail"></div>
                <div class="thumbnail"></div>
                <div class="thumbnail"></div>
                <div class="thumbnail"></div>

            </div>
            -->
            <div class="showcase-container">
            <div class="showcase-arrow left">  </div>
                <div class="showcase-content">
                    <h1></h1>
                    <h2 id="role">Role in Project <br /> Client</h2>
                    <!-- <h2>Description</h2> -->
                    <p> Some Content inserted with PHP</p>

                    <a href = " " target="_blank" class="link"><div class="showcase-cta"> View Project </div></a>
                </div>
                <div class="showcase-arrow right"> > </div>
                <div class="showcase-background"></div>
            </div>
            <?php include('includes/footer.inc')?>
        </div>
        
    </div> <!-- end container -->
    <script type="text/javascript" src="portfolio.js"> </script>
</body>
</html>