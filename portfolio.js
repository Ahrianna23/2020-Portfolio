    // THIS IS THE SCRIPT FROM INDEX PAGE//

    //Fade Effect//
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

    //Preload all Images
    var image1=new Image()
    image1.src="images/AhriDaniels.jpg"

    var image2=new Image();
    image2.src="images/AhriDaniels-Adrians.jpeg";

    var image3=new Image();
    image3.src="images/AhriDaniels-appinterface.png";

    var image4=new Image();
    image4.src="images/AhriDaniels-Hero.jpg";

    var image5=new Image();
    image5.src="images/AhriDaniels-iGames.png";

    var image6=new Image();
    image6.src="images/AhriDaniels-InspiringNJ.png";

    var expanded = false;
    var menuIcon = document.getElementById("menu-icon");
    $('#menu-icon').click(function() {
        var menuLines = document.getElementsByClassName('menu-line');
        for (var i = 0; i < menuLines.length; i++){
          if (i === 0) {
            menuLines[i].classList.toggle("menuLineOne");
          }
          else if (i === 2){
            menuLines[i].classList.toggle("menuLineThree");
          }
          else if (i === 1) {
            menuLines[i].classList.toggle("menuLineTwo");
          }
        }
        menuIcon.classList.add("menu-icon-transform");
        function switchMenu() {
          menuIcon.classList.remove("menu-icon-transform");
        }
        $('.navbar').slideDown();
        setTimeout(checkStatus, 200);
        function checkStatus(){
            if(expanded === false) {
                expand();
            }
            else {
                $('#nav1').css('animation', 'collapse ease 200ms forwards');
                $('#nav2').css('animation', 'collapse ease 200ms forwards');
                $('#nav3').css('animation', 'collapse ease 200ms forwards');
                setTimeout(collapse, 300);
                function collapse() {
                    $('.navbar').slideUp();
                    document.getElementById('nav1').style.animation = '';
                    document.getElementById('nav2').style.animation = '';
                    document.getElementById('nav3').style.animation = '';
                    setTimeout(switchMenu, 300);
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

    // THIS IS THE SCRIPT FROM PORTFOLIO PAGE//

    var aboutImage = $('.showcase-background').css('background-image');
                    var showcase = [];
                    var showcaseIndex = 0;

                    showcase.push({
                        projectTitle: "FullBeauty Brands",
                        projectRole: "Web Designer",
                        projectClient: "FullBueaty Prands",
                        projectDescription: "Working with FullBeauty Brands, I help manage weekly campaigns for more than one of the company ’s many brands (most of which are in the fashion industry). These campaigns are often filled with new landing pages, emails, mobile website updates, and website banner changes that roll out on a weekly basis. As part of a team, I ensure the workflow within departments run smoothly and has fastturnover times.",
                        projectImg: "images/AhriDaniels-FBHP.png",
                        projectHref: "https://shop.fullbeauty.com/"
                    });
                    showcase.push({
                        projectTitle: "Adrian's Caterers",
                        projectRole: "Web Designer & Developer <br />", // <-- <br /> here seems out of place...
                        rojectClient: "Catering Business Owner",
                        projectDescription: "Adrian’s Caterers is a project completed with the help of my classmates during our senior year. The project was done for a local business owner (Adrian’s Caterers) and consisted of a business plan, logo redesign, brand redesign, and a fully functioning responsive website. Using Front-End Development techniques I achieved in creating the website and placing top 3 in a senior project showdown. The website was to be interactive and fun, so we included an interactive timeline on the about page. As a final touch to the package I created a website manual for the owner, which can be found <a href='AdriansCaterers_WebsiteManual.pdf' target='_blank' id='loneA'>here</a>. Feel free to check out the website yourself",
                        projectImg: "images/AhriDaniels-plp-Adrians.jpeg",
                        projectHref: "http://adrianscaterers.net/"
                    });

                    showcase.push({
                        projectTitle: "InspiringNJ",
                        projectRole: "Front-End Web Developer",
                        projectClient: "Medical Trasnport Start-up",
                        projectDescription: "InspiringNJ is a website completed for a client that a team, myself included, completed in 2015. The client requested a website in which users can use the website to schedule the medical transport service they are offering. Along with a website, the clients also requested business cards and a logo. I was tasked with implementing the new feature and building new pages.",
                        projectImg: "images/AhriDaniels-InspiringNJ.png",
                        projectHref: "http://inspiringnj.org/"
                    });


                    showcase.push({
                        projectTitle: "FrontEnd Mentor",
                        projectRole: "Front End Developer",
                        projectClient: "Bootcamp Project",
                        projectDescription: "SuperStarMe is a fictional music auto-tuning mobile application. The concept being that anyone should be able to sing a song to a tune of their favorite song, autotune the recording and/or add effects, and finally sharing their song with the world. It gives music lovers the chance to be their favorite artist and have fun! ",
                        projectImg: "images/AhriDaniels-FeaturesLP.png",
                        projectHref: "https://ahrianna23.github.io/FrontEndMentorC-2/"

                    });

                    showcase.push({
                        projectTitle: "Jazz at Lincoln Center",
                        projectRole: "Digital Designer",
                        projectClient: "NJ State Theatre",
                        projectDescription: "The Jazz at Lincoln center poster is a print design done during an internship I had in the summer of 2014 for the NJ State Theatre. My design process behind the project was to use colors that spoke the culture that powers Jazz music lovers with the combination of shapes.",
                        projectImg: "images/AhriDaniels-jazz.jpg",
                        projectHref: "images/AhriDaniels-jazz.jpg"
                    });

                    showcaseIndex = localStorage.test;

                    var tnIndex = 1;

                    $('.showcase-content h1').html(showcase[showcaseIndex].projectTitle);
                    $('.showcase-content #role').html(showcase[showcaseIndex].projectRole);
                    $('.showcase-background').css('background-image', 'url('+showcase[showcaseIndex].projectImg);
                    $('.showcase-content p').html(showcase[showcaseIndex].projectDescription);
                    $(".showcase-content .link").attr("href", showcase[showcaseIndex].projectHref);
                    $('#loneA').attr('href', 'AdriansCaterers_WebsiteManual.pdf');

                    $('.sa2').click(function() {
                        if(showcaseIndex == 4 ) {
                            showcaseIndex = 0;
                            $('.showcase-content h1').html(showcase[showcaseIndex].projectTitle);
                            $('.showcase-content #role').html(showcase[showcaseIndex].projectRole);
                            $('.showcase-content p').html(showcase[showcaseIndex].projectDescription);
                            $('.showcase-background').css('background-image', 'url('+showcase[showcaseIndex].projectImg);
                            $(".showcase-content .link").attr("href", showcase[showcaseIndex].projectHref);
                            $('#loneA').attr('href', 'AdriansCaterers_WebsiteManual.pdf');
                        }
                        else {
                            $('.showcase-content h1').css('opacity', '1');
                            $('.showcase-content h1').css('animation', 'slideOutFade ease 300ms forwards');


                            $('.showcase-content h2').css('opacity', '1');
                            $('.showcase-content h2').css('animation', 'slideOutFade ease 300ms 200ms forwards');


                            $('.showcase-content p').css('opacity', '1');
                            $('.showcase-content p').css('animation', 'slideOutFade ease 300ms 400ms forwards');

                            $('.showcase-content .showcase-cta').css('opacity', '1');
                            $('.showcase-content .showcase-cta').css('animation', 'slideOutFade ease 300ms 600ms forwards');



                            setTimeout(function() {
                                showcaseIndex++;
                                tnIndex++;
                                $('.showcase-content h1').css('animation', 'slideInFade ease 300ms forwards');
                                $('.showcase-content h1').html(showcase[showcaseIndex].projectTitle);

                                $('.showcase-content h2').css('opacity', '0');
                                $('.showcase-content #role').html(showcase[showcaseIndex].projectRole);
                                $('.showcase-content h2').css('animation', 'slideInFade ease 300ms 200ms forwards');

                                $('.showcase-content p').css('opacity', '0');
                                $('.showcase-content p').html(showcase[showcaseIndex].projectDescription);
                                $('.showcase-content p').css('animation', 'slideInFade ease 300ms 400ms forwards');

                                $('.showcase-content .showcase-cta').css('opacity', '0');
                                $(".showcase-content .link").attr("href", showcase[showcaseIndex].projectHref);
                                $('#loneA').attr('href', 'AdriansCaterers_WebsiteManual.pdf');
                                $('.showcase-content .showcase-cta').css('animation', 'slideInFade ease 300ms 600ms forwards');

                                $('.showcase-background').css('background-image', 'url('+showcase[showcaseIndex].projectImg);

                                if(tnIndex == 6) {
                                    tnIndex -= 5;
                                }
                                else { }
                                    $('.active').removeClass('active');

                                    $('.thumbnail:nth-child('+tnIndex+')').addClass('active');

                        }, 900)


                        }

                    }); // End Right Arrow Clicking Function

                    // Left Arrow Function

                    $('.sa1').click(function() {
                        if(showcaseIndex == 0 ) {
                            showcaseIndex = 5;
                            $('.showcase-content h1').html(showcase[showcaseIndex].projectTitle);
                            $('.showcase-content #role').html(showcase[showcaseIndex].projectRole);
                            //$('.showcase-content p').html(showcase[showcaseIndex].projectDescription);
                            $('.showcase-background').css('background-image', 'url('+showcase[showcaseIndex].projectImg);
                            $(".showcase-content a").attr("href", showcase[showcaseIndex].projectHref);
                            $('#loneA').attr('href', 'AdriansCaterers_WebsiteManual.pdf');
                        }
                        else {
                            $('.showcase-content h1').css('opacity', '1');
                            $('.showcase-content h1').css('animation', 'slideOutFade ease 300ms forwards');


                            $('.showcase-content h2').css('opacity', '1');
                            $('.showcase-content h2').css('animation', 'slideOutFade ease 300ms 200ms forwards');


                            $('.showcase-content p').css('opacity', '1');
                            $('.showcase-content p').css('animation', 'slideOutFade ease 300ms 400ms forwards');

                            $('.showcase-content .showcase-cta').css('opacity', '1');
                            $('.showcase-content .showcase-cta').css('animation', 'slideOutFade ease 300ms 600ms forwards');


                            setTimeout(function() {
                                showcaseIndex--;
                                $('.showcase-content h1').css('animation', 'slideInFade ease 300ms forwards');
                                $('.showcase-content h1').html(showcase[showcaseIndex].projectTitle);

                                $('.showcase-content h2').css('opacity', '0');
                                $('.showcase-content #role').html(showcase[showcaseIndex].projectRole);
                                $('.showcase-content h2').css('animation', 'slideInFade ease 300ms 400ms forwards');

                                $('.showcase-content p').css('opacity', '0');
                                $('.showcase-content p').html(showcase[showcaseIndex].projectDescription);
                                $('.showcase-content p').css('animation', 'slideInFade ease 300ms 400ms forwards');

                                $('.showcase-content .showcase-cta').css('opacity', '0');
                                $('.showcase-content .showcase-cta').css('animation', 'slideInFade ease 300ms 600ms forwards');

                                $('.showcase-background').css('background-image', 'url('+showcase[showcaseIndex].projectImg);
                                $(".showcase-content .link").attr("href", showcase[showcaseIndex].projectHref);
                                $('#loneA').attr('href', 'AdriansCaterers_WebsiteManual.pdf');
                        }, 900)


                        }

                    }); // End Right Arrow Clicking Function
