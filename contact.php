<html><!doctype html>
<head>
<meta charset="UTF-8">
<title>Ahri Daniels</title>
<link rel="stylesheet" type="text/css" href="CSS/normalize.css">
<link rel="stylesheet" type="text/css" href="css/index.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
<meta name="description" content="Ahri Daniels is a Web Developer based in Central New Jersey with skills ranging from photoshop to front-end web development">
<meta name="keywords" content="Web Design, Web Developer, Digital Art, Graphic Design, Freelancer Developer, Freelance Web Designer, Freelance 3D Artist, Photoshop, Illustrator, Photo Manipulation Artist, New Jersey">
<meta name="author" content="Jamell Daniels">
<meta name="copyright" content="2017">
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
        <div class="content contact">
            <header>
            <div class="logo"></div>
            <div class="mobile-nav">
                <div class="menu-container">
                    <div class="menu-icon" id="menu-icon">
                        <div class="menu-line"></div>
                        <div class="menu-line"></div>
                        <div class="menu-line"></div>
                    </div>
                </div>
                <div class="navbar">
                    <a href="index.php" class="links"><div id="nav1">Home</div></a>
                    <a href="about.php" class="links"><div id="nav2">About Ahri</div></a>
                    <a href="portfolio.php" class="links"><div id="nav3">Portfolio</div></a>
                </div>
            </div>
            
        </header>
            <h1>Connect with me</h1>
            <h5>Send a friendly message or let's talk projects/work :-)</h5>
            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
                <div class="table-row">
                    <div class="table-cell" id="small-cell">
                        <label>Name</label>
                    </div>
                    <div class="table-cell">
                        <input type="text" name="name" id="name" placeholder="Name..." required="">
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell" id="small-cell">
                        <label>Email</label>
                    </div>
                    <div class="table-cell">
                        <input type='email' name="email" id="email" placeholder="Email..." required="">
                    </div>
                </div>
                <div class="table-row">
                    <div class="table-cell small-cell">
                        <label id="label-msg">Message</label>
                    </div>
                    <div class="table-cell">
                        <textarea type="text" name="message" id="message" placeholder="Message to Ahrianna..." required=""></textarea>
                    </div>
                </div>
                <input type="submit" value="Send" name="submit" id="submit">
            </form>

            <?php
                error_reporting(0);

                $to = "ahridaniels405@gmail.com"; //There email address
                $from = $_POST['email']; //User's email address
                $name = $_POST['name'];
                $header = $name . " " . "has sent you a message, its contents are below";

                $msg = $_POST['message'];
                
                $subject = $name . " " . "has sent you a message from portfolio!";
                $message = $name . " " . "has sent a message" ."\n". $msg;

                $header = "From:" . $from;
                mail($to,$subject,$message,$header);
                $result = mail($to,$subject,$message,$header);

                if(!$result){ echo "alert('Error')"; }

                    else {
                        echo "<script type='text/javascript'>
                            $('#conclude').css('animation', 'slide .5s forwards');
                            setTimeout(function(){
                                $('#conclude').fadeOut(500);

                            }, 1000);

                        </script>";
                        header('Location: '.$_SERVER['PHP_SELF']);
                        die;
                    }


            ?>
            <div id="conclude"> 
                <div class="check-container">
                    <div id="small-ck"></div><div id="large-ck"></div>
                </div>
                <p>Message sent successfully, she'll get back to you shortly!
            </div>

            <h4>Or</h4>
            <div class="cta">
                <p>Hire<br />Me</p>
            </div>
            <?php include('includes/footer.inc')?>
        </div>
        
    </div> <!-- end container -->
    <script type="text/javascript">
            var expanded = false;
            $('.menu-icon').click(function() {
                $('.navbar').slideDown();
                setTimeout(checkStatus, 200);
                function checkStatus(){
                    if(expanded === false) {
                        expand();
                    }
                    else {
                        $('#nav1').css('animation', 'collapse ease 100ms forwards');
                        $('#nav2').css('animation', 'collapse ease 400ms forwards');
                        $('#nav3').css('animation', 'collapse ease 700ms forwards');
                        setTimeout(collapse, 1000);
                        function collapse() {
                            $('.navbar').slideUp();
                            document.getElementById('nav1').style.animation = '';
                            document.getElementById('nav2').style.animation = '';
                            document.getElementById('nav3').style.animation = '';
                        }
                        
                        expanded = false;
                    }//end else
                }//End check status
            });
            var i = 0,
                loopXTimes = 4;
            
            function expand() {
                
                var navName = '#nav';
                var delay = 200;
                
                i++;
                if(i < loopXTimes){
                    delay += 100;
                    navName += i;
                        $(navName).css('animation', 'expand ease 500ms forwards');
                        //$(navName).css('animation-delay', delay +'ms');
                        setTimeout(expand, 100);
                    
                } else {i = 0;}
                expanded = true;
            };
            </script>
    <script type="text/javascript">
        $(document).ready(function() {
            
            if($('.container').css("display", "none")){
              $('.container').fadeIn(1000);  
            };
                $('.links').click(function() {
                    $('.container').fadeOut(500);
                     var href = $(this).attr('href');
                     setTimeout(function() {window.location = href}, 500);
            return false;
                    $('.container').css("display", "none")
                }); 
        });
    </script>
    <script src="jquery.js" type="text/javascript"></script>
</body>
</html>