

// $(document).ready(function () {
//     $("#color_mode2").on("change", function () {
//         colorModePreview(this);

//     });


// });

// $(document).ready(function () {


//     $("#color_mode3").on("change", function () {


//         toggleAnimation(this);
//     });
// });

// function colorModePreview(ele) {
//     if ($(ele).prop("checked") == true) {

//         $('#gallery-section').addClass('dark-preview');

//         $('#gallery-section').removeClass('white-preview');

//     }
//     else if ($(ele).prop("checked") == false) {
//         $('#gallery-section').addClass('white-preview');
//         $('#gallery-section').removeClass('dark-preview');
//     }
// }

//     function toggleAnimation(ele) {

//     if ($(ele).prop("checked") == true) {

//         $(".wave").addClass("turn-on-animation");
//         $(".wave").removeClass("turn-off-animation");

//     }
//     else if ($(ele).prop("checked") == false) {
//         $(".wave").addClass("turn-off-animation");
//         $(".wave").removeClass("turn-on-animation");

//     }
// }


// $("#gallery-section").addClass('dark-preview');

// $("#color_mode2").on("change", function () {
//     if ($("#gallery-section").hasClass("dark-preview")) {
//         $("#gallery-section").removeClass("dark-preview");
//         $("#gallery-section").addClass("white-preview");

//     } else if ($("#gallery-section").hasClass("white-preview")) {
//         $("#gallery-section").removeClass("white-preview");
//         $("#gallery-section").addClass("dark-preview");
//     }
//     else {

//         alert("here");
//     }

// });


// mermaid_clicked = false;
// var tween;
// var second_tween;
// var circle_tween;
// const val = { distance: 0 };

// window.onload = function () {

//     const svg = document.querySelector('#mermaid');
//     const fuse = svg.querySelector('#elipse');

//     //function turnOff() {
//     //    gsap.to(fuse, { rotation: 0, duration: 0 }, { rotation: 0, repeat: 0, duration: 0 });

//     //    /* Animate the fuse to reduce it */
//     //    fuse.setAttribute('stroke-dasharray', fuse.getTotalLength());
//     //    fuse.setAttribute('stroke-dashoffset', fuse.getTotalLength() * 2);
//     //    gsap.to(fuse, {
//     //        strokeDashoffset: 0, /*fuse.getTotalLength(),*/
//     //        duration: 0,
//     //        repeat: 0,
//     //        // Wait 1sec before repeating
//     //        repeatDelay: 0
//     //    });
//     //}

//     //$("button").click(function () {
//     //    turnOff();
//     //});

//     $('#mermaid').click(function (e) {

//         function toggleOff(tween1, tween2, tween3) {
//             if (mermaid_clicked) {
//                 //alert("toggling off");
//                 //alert("tween3 is:  " + tween3);
//                 // gsap.to(fuse, { rotation: 0, duration: 0 }, { rotation: 0, repeat: 0, duration: 0 });
//                 let tween_between = gsap.from(fuse, { distance: 0, duration: 0, repeat: 0, pause: true });
//                 let val_tween_between = gsap.from(val, { distance: 0, duration: 0, repeat: 0, pause: true });

//                 //tween1.kill();
//                 //tween2.kill();
//                 //tween3.kill();
//                 tween_between.pause();
//                 val_tween_between.pause();
//                 //tween1.pause();
//                 //tween2.pause();
//                 //tween3.pause();
//                 //tween_between.paused = true;
//                 //alert(typeof (tween1));
//                 if (tween_between.paused() && val_tween_between.paused()) {
//                     alert("tween is paused!");
//                 }
//                 else {
//                     //tween1.pause();
//                     //tween2.pause();
//                     //tween3.pause();
//                     alert("error");
//                 }


//                 mermaid_clicked = false;
//                 e.preventDefault();
//                 return;
//             }
//             else {
//                 mermaid_clicked = true;
//             }
//         }

//         // Create an object that gsap can animate
//         /*const val = { distance: 0 };*/
//         // Create a tween
//         let second_tween = gsap.to(val, {
//             // Animate from distance 0 to the total distance
//             distance: fuse.getTotalLength(),
//             // Loop the animation
//             repeat: 1,
//             // Wait 1sec before repeating
//             repeatDelay: 0,
//             // Make the animation lasts 5 seconds
//             duration: 5,
//             // Function call on each frame of the animation
//             onUpdate: () => {
//                 // Query a point at the new distance value
//                 const point = fuse.getPointAtLength(val.distance);
//                 createParticle(point);
//             }
//         });

//         function createParticle(point) {
//             // Create a new circle element
//             const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//             // Prepend the element to the SVG
//             svg.prepend(circle);
//             // Set the coordinates of that circle
//             circle.setAttribute('cx', point.x);
//             circle.setAttribute('cy', point.y);
//             // Define a random radius for each circle
//             circle.setAttribute('r', (Math.random() * 2) + .1);
//             // Define a random color
//             circle.setAttribute('fill', gsap.utils.random(['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000']));

//             // Animate the circle
//             let circle_tween = gsap.to(circle, {
//                 // Random cx based on its current position
//                 cx: '+=random(-20,20)',
//                 // Random cy based on its current position
//                 cy: '+=random(-20,20)',
//                 // Fade out
//                 opacity: 0,
//                 // Random duration for each circle
//                 duration: 'random(1, 2)',
//                 // Prevent gsap from rounding the cx & cy values
//                 autoRound: false,
//                 // Once the animation is complete
//                 onComplete: () => {
//                     // Remove the SVG element from its parent
//                     svg.removeChild(circle);
//                 }
//             });
//         }

//         /* Animate the fuse to reduce it */
//         fuse.setAttribute('stroke-dasharray', fuse.getTotalLength());
//         fuse.setAttribute('stroke-dashoffset', fuse.getTotalLength() * 2);
//         let tween = gsap.to(fuse, {
//             strokeDashoffset: fuse.getTotalLength(),
//             duration: 5,
//             repeat: -1,
//             // Wait 1sec before repeating
//             repeatDelay: 0


//         });

//         toggleOff(tween, second_tween, circle_tween);


//     });
// };



// //    $(window).scroll(function () {
// // debounce multiple requests
// // action takes place here.

// //$(document).ready(function () {
// //    $(window).scroll(function () {

// //        infinite_scroll_debouncer(infinite_scrolling, 1000);
// //        alert("here");
// //    });
// //});
// //Static variables - That do not change while scrolling
// var header = $("#nav-header"),
//     headerHeight = header.height(), // Get height of header
//     logo = $("#mermaid"), // Get the logo
//     logoHeight = logo.height(), // Get logo height
//     scrollTo = 120,
//     original_Yposition = logo.top, // Animation until scrolled to this point
//     original_XPosition = logo.left;
//     lastScrollTop = 0;
//     downDirection = true;
//     upDirection = false;
//     previousDownDirection = true;
//     previousUpDirection = false;
// /* toggleScroll = false;*/

// /*alert("logoHeight is: " + logoHeight);*/
// // Scroll function
// var scrolled = false;
// //page.on('scroll', function () {
// //    if (!scrolled) {
// //        scrolled = true;
// /*$(document).on('scroll', () => console.log('scroll'));*/
// /*$(document).ready(function () {*/

// function fadeLogo() {
//     ////$(window).on("scroll", function (event) {

//      //alert("You've scrolled: " + event.target.nodeName + ", id: " + event.target.id);

//         ////  Dynamic variables - That do change while scrolling
//          var yPos = $(this).scrollTop(), // Get the scroll Y-position
//              yPer = (yPos / scrollTo); // Calculate percenage of scroll


//         // // If percentage is over 100, set to 100
//          if (yPer > 1) {
//              yPer = 1;
//          }
//    // Dynamic variables for the elements
//     var logoPos = (-1 * (yPer * 50) + 50),
//              // Calculate position of logo (starting from 50%)
//         logoSize = ((headerHeight * yPer) - (logoHeight * yPer) + logoHeight),
//              // Calculate new size height for logo
//         headerPos = ((yPer * headerHeight) - headerHeight);

//         // Calculate position of header (starting from minus the height of itself)


//     //    // // Change the top, left, transform and height of the logo
//     //    // //if (scrollTo == 0) {
//     //    // //    logo.css({
//     //    // //        //top: logoPos + "%",
//     //    // //        //left: logoPos + "%",
//     //    // //        //top: 10,
//     //    // //        //left: 0,
//     //    // //        /*transform: "translate3d(-" + logoPos + "px,-" + logoPos + "px,0)",*/
//     //    // //        transform: "translate3d(-" + 12 + "vm,-" + 12 + "vm,0)",
//     //    // //        /*height: logoSize*/
//     //    // //        height: 60,
//     //    // //        opacity: 50

//     //    // //    });
//     //    // //    alert("scrollTo is 0 and logoPos is: " + logoPos + ", logoSize is: " + logoSize);
//     //    // //    logo.fadeIn("slow", function () {

//     //    // //    });
//     //    // //}
//     //    // //else {
//     //    // //    logo.css({
//     //    // //        //top: logoPos + "%",
//     //    // //        //left: logoPos + "%",
//     //    // //        //top: 10,
//     //    // //        //left: 0,
//     //    // //        //transform: "translate3d(-" + logoPos + "px,-" + logoPos + "px,0)",

//     //    // //        ///*height: logoSize*/
//     //    // //        //height: 60,
//     //    // //        //opacity: 50,
//     //    // //        //z: 1
//     //    // //    });
//     //    // //};

//          if (yPos >= 120) {


//              //logo.css({
//              //    //top: logoPos + "%",
//              //    //left: logoPos + "%",
//              //    //top: original_Yposition,
//              //    //left: original_Xposition,
//              //    /* transform: "translate3d(-" + 12 + "vm,-" + 12 + "vm,0)",*/
//              //    top: 2 + "vw",
//              //    left: "1vw",
//              //    /*height: logoSize*/
//              //    height: 60 + "px"
//              //    /*opacity: 50 + "%"*/
//              //    /* visibility: "visible"*/
//              //    /*fadeOut: "3000"*/
//              //    /*transition: "opacity 1s",*/
//              //    /* class: "path"*/
//              //    /* class: "path"*/


//              //});
//              //Logo.animate({
//              //    transition: "opacity 500ms ease-in"
//              //});
//              /*  logo.fadeIn(3000);*/
//              //if (!toggleScroll) {
//              //    alert("fading icon logo");


//              /*logo.animate({ opacity: '100%' }, 3000, Animate);*/
//              /*  logo.fadeIn(3000);*/

//              /* alert("yPos and is: " + yPos + " and logoPos is: " + logoPos + ", logoSize is: " + logoSize);*/
//          }
//          else {
//              /*if (!toggleScroll) { toggleScroll = false; }*/
//              /*else { toggleScroll = true; }*/
//              //logo.css({
//              //    //top: logoPos + "%",
//              //    //left: logoPos + "%",
//              //    //top: 10,
//              //    //left: 0,
//              //    //transform: "translate3d(-" + logoPos + "px,-" + logoPos + "px,0)",

//              //    ///*height: logoSize*/
//              //    //height: 60,
//              //    //opacity: 50,
//              //    //z: 1
//              //});
//     //         logo.css({
//     //             //top: logoPos + "%",
//     //             //left: logoPos + "%",
//     //             //top: 10,
//     //             //left: 0,
//     //             /*transform: "translate3d(-" + logoPos + "px,-" + logoPos + "px,0)",*/
//     //             /*transform: "translate3d(" + 9 + "vw," + 43 + "vw,0)",*/
//     //             /*height: logoSize*/

//     //             /*opacity: 100 + "%",*/
//     //             height: 100 + "%",
//     //             /*fadeIn: logo.fadeIn("slow"),*/
//     //             /* transition: opacity 0.2s ease- out, transform 0.2s,*/
//     //             /* transition: "transition('ease-out')",*/
//     //             /*transition: "opacity " + 50 + "%",*/
//     //             /* transition - timing-function: cubic- bezier(0, 0, 1, 1);*/
//     //             left: 43 + "vw",
//     //             top: 0 + "vw"
//     //             //animation: "reveal 0.4s ease-in"

//     //             /*visibility: "hidden"*/


//     ////         });
//     //         /*alert("scrollTo is 0 and logoPos is: " + logoPos + ", logoSize is: " + logoSize);*/
//     //         //if (!toggleScroll) {
//     //         //    alert("fading large logo");
//     //         //    logo.css({ opacity: '25%' })
//     //         //    logo.animate({ opacity: '100%' }, 3000, Animate);
//     //         //}



//     //         /*lastScrollTop = yPos;*/
//     //         //logo.fadeOut("slow", function () {


// Get the modal
var modal = document.getElementById("myModal");
var previousArrow = null;
var currentDivLeft;
var currentDivRight;
// let _array = []; //new Array($("#cards div").length);


$(document).ready(function () {

    let firstImageDiv = null;

    class Carousel {

        constructor(src) {
            this.nodes = [];
            this.wrangleImages();
            this.currentIndex = 5;
            this.initialize(this.currentIndex);
        }

        get currentIndex() {

            return this._currentIndex;
        }

        set currentIndex(index) {

            this._currentIndex = index;
        }

        decrementIndex(index) {

            if(this.currentIndex == 0)
                this.currentIndex = this.size - 1;
            else
                this.currentIndex--;
        }

        incrementIndex(index) {

            if(this.currentIndex == this.size - 1)
              this.currentIndex = 0;
            else
                this.currentIndex++;
        }

        get size() {
            return this.nodes.length;
        }
        get head() {
            return this.size ? this.nodes[0] : null;
        }

        get tail() {
            return this.size ? this.nodes[this.size - 1] : null;
        }

        insertAt(index, value) {

            const previousNode = this.nodes[index - 1] || null;
            const nextNode = this.nodes[index] || null;
            const node = { value, next: nextNode, previous: previousNode };

            if (previousNode) {
                previousNode.next = node;
            }

            this.nodes.splice(index, 0, node);
            const currentNode = this.nodes[index] || null;

            if (currentNode) {
                currentNode.previous = previousNode;
            }
        }

        connectCircular() {
            this.head.previous = this.tail;
            this.tail.next = this.head;
        }

        wrangleImages() {
            var self = this;
            $.each($("#cards div"), function () {
                self.insertAt(self.size, $(this).attr("id"));
            });
            this.connectCircular();
        }

        *[Symbol.iterator]() {
            yield* this.nodes;
        }

        initialize(index) {

            let leftDiv = this.nodes[index].previous.value;
            let centerDiv = this.nodes[index].value;
            let rightDiv = this.nodes[index].next.value;

            this.yeet(leftDiv, centerDiv, rightDiv);

            $("#" + leftDiv).removeAttr('class').addClass("translate-left-from-center");
            $("#" + leftDiv + " a").addClass("deactivate-link");

            $("#" + centerDiv).removeAttr('class').addClass('format-center');
            $("#" + centerDiv + " a").addClass("activate-link");

            $("#" + rightDiv).removeAttr('class').addClass('translate-right-from-center');
            $("#" + rightDiv + " a").addClass("deactivate-link");

            this.currentIndex = index;
        }

        rotateRight(index) {

            let _index = index;
            $("#" + this.nodes[_index].next.value).removeAttr('class');
            $("#" + this.nodes[_index].next.value).addClass("yeet");
            $("#" + this.nodes[_index].next.value + " a").removeAttr('class');
            $("#" + this.nodes[_index].next.value + " a").addClass("deactivate-link");

            $("#" + this.nodes[_index].value).removeAttr('class');
            $("#" + this.nodes[_index].value).addClass("translate-right-from-center");
            $("#" + this.nodes[_index].value + " a").removeAttr('class');
            $("#" + this.nodes[_index].value + " a").addClass("deactivate-link");

            $("#" + this.nodes[_index].previous.value).removeAttr('class');
            $("#" + this.nodes[_index].previous.value).addClass("translate-center-from-left");
            $("#" + this.nodes[_index].previous.value + " a").removeAttr('class');
            $("#" + this.nodes[_index].previous.value + " a").addClass("activate-link");

             $("#" + this.nodes[_index].previous.previous.value).removeAttr('class');
             $("#" + this.nodes[_index].previous.previous.value).addClass("add-from-yeet-left");
            this.decrementIndex(this.currentIndex);
        }

        rotateLeft(index) {

            let _index = index;
            $("#" + this.nodes[_index].previous.value).removeAttr('class');
            $("#" + this.nodes[_index].previous.value).addClass("yeet");
            $("#" + this.nodes[_index].previous.value + " a").removeAttr('class');
            $("#" + this.nodes[_index].previous.value + " a").addClass("deactivate-link");
          
            $("#" + this.nodes[_index].value).removeAttr('class');
            $("#" + this.nodes[_index].value).addClass("translate-left-from-center");
            $("#" + this.nodes[_index].value + " a").removeAttr('class');
            $("#" + this.nodes[_index].value + " a").addClass("deactivate-link");

            $("#" + this.nodes[_index].next.value).removeAttr('class');
            $("#" + this.nodes[_index].next.value).addClass("translate-center-from-right");
            $("#" + this.nodes[_index].next.value + " a").removeAttr('class');
            $("#" + this.nodes[_index].next.value + " a").addClass("activate-link");

            $("#" + this.nodes[_index].next.next.value).removeAttr('class');
            $("#" + this.nodes[_index].next.next.value).addClass("add-from-yeet-right");
            this.incrementIndex(this.currentIndex);
        }

        yeet(left, middle, right) {

             const thisMap = [...$("#cards div").map(e => $(e).removeAttr('class').addClass("yeet"))];
             console.log(thisMap);
            $("#cards div").each(function () {

                var newID = $(this).attr("id");
                //// find the images to be "sent to the back" or yeeted
                if (newID != left && newID != right && newID != middle) {

                    $(this).removeAttr('class').addClass("yeet");
                    $("#" + $(this).attr("id") + " a").removeAttr('class').addClass("deactivate-link");
                } //store the image that are to appear in the interface"
            });

        }
    }

    let _carousel = new Carousel();
    // const thisMap = [..._carousel.nodes.map(e => e.value)];
    // console.log(thisMap);

    $(".play-arrow").on("click", function (e) {

        var newArrow = $(this).attr("id");

        if (newArrow == "left-arrow") {
            _carousel.rotateLeft(_carousel.currentIndex);
        }

        else if (newArrow == "right-arrow") {
            _carousel.rotateRight(_carousel.currentIndex);
        }
       
    });

    function getReport() {

        $("#cards div").each(function () {
            console.log("list of classes for: " + $("#" + $(this).attr("id") + " img").attr("src") + " is: " + $(this).attr("class"));
        });
    }
});




$(document).ready(function (e) {

    $(".switch input").click(function (e) {
        // alert("here");
        if ($(".switch input").is(':checked')) {
            $('.bubble-video-background').get(0).play();
        }
        else {
            $('.bubble-video-background').get(0).pause();

        }
        // e.stopImmediatePropagation();
        // e.preventDefault();
    });

});

    // toggles the appearance of the scrolling menu bar
     $(document).scroll(function (e) {

      var $nav = $("#menu-header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    }); 

    // scrolls the window to the anchor location taking into account the scrollbar height
    // and position of the window
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 
    
            //alert("offsetHeight is: " + document.getElementById("menu-header").offsetHeight);
            let r = anchor.href.slice(anchor.href.indexOf("#"));
            let anchorHref = r.substring(1, r.length);

            /* document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });  */
            let box = document.getElementById(anchorHref);
            let top = box.getBoundingClientRect().top;

            window.scrollTo(0, top - 100 + window.scrollY);
           // box.getBoundingClientRect().top = 0;
        
         });
    }); 
   