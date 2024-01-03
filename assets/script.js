  $(document).ready(function() {
   $("#owl-example").owlCarousel();
  $('.listing-detail span').tooltip('hide');
        $('.carousel').carousel({
            interval: 3000
        }); 
        $('.carousel').carousel('cycle');
 }); 













  $(function() {
      
        var Page = (function() {

        	
          var $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
              onBeforeChange : function( slide, pos ) {

                $nav.removeClass( 'nav-dot-current' );
                $nav.eq( pos ).addClass( 'nav-dot-current' );

              }
            } ),

            init = function() {

              initEvents();
              
            },
            initEvents = function() {

              $nav.each( function( i ) {
              
                $( this ).on( 'click', function( event ) {
                  
                  var $dot = $( this );
                  
                  if( !slitslider.isActive() ) {

                    $nav.removeClass( 'nav-dot-current' );
                    $dot.addClass( 'nav-dot-current' );
                  
                  }
                  
                  slitslider.jump( i + 1 );
                  return false;
                
                } );
                
              } );

            };

            return { init : init };

        })();

        Page.init();
		
		



// popup examples
$( document ).on( "pagecreate", function() {
    // The window width and height are decreased by 30 to take the tolerance of 15 pixels at each side into account
    function scale( width, height, padding, border ) {
        var scrWidth = $( window ).width() - 30,
            scrHeight = $( window ).height() - 30,
            ifrPadding = 2 * padding,
            ifrBorder = 2 * border,
            ifrWidth = width + ifrPadding + ifrBorder,
            ifrHeight = height + ifrPadding + ifrBorder,
            h, w;
        if ( ifrWidth < scrWidth && ifrHeight < scrHeight ) {
            w = ifrWidth;
            h = ifrHeight;
        } else if ( ( ifrWidth / scrWidth ) > ( ifrHeight / scrHeight ) ) {
            w = scrWidth;
            h = ( scrWidth / ifrWidth ) * ifrHeight;
        } else {
            h = scrHeight;
            w = ( scrHeight / ifrHeight ) * ifrWidth;
        }
        return {
            'width': w - ( ifrPadding + ifrBorder ),
            'height': h - ( ifrPadding + ifrBorder )
        };
    };
    $( ".ui-popup iframe" )
        .attr( "width", 0 )
        .attr( "height", "auto" );
    $( "#popupMap iframe" ).contents().find( "#map_canvas" )
        .css( { "width" : 0, "height" : 0 } );
    $( "#popupMap" ).on({
        popupbeforeposition: function() {
            var size = scale( 480, 320, 0, 1 ),
                w = size.width,
                h = size.height;
            $( "#popupMap iframe" )
                .attr( "width", w )
                .attr( "height", h );
            $( "#popupMap iframe" ).contents().find( "#map_canvas" )
                .css( { "width": w, "height" : h } );
        },
        popupafterclose: function() {
            $( "#popupMap iframe" )
                .attr( "width", 0 )
                .attr( "height", 0 );
            $( "#popupMap iframe" ).contents().find( "#map_canvas" )
                .css( { "width": 0, "height" : 0 } );
        }
    });
});
		
		
		
		
		
		
		
		

		
		
		
		


var modal = document.getElementById('myModal1');
var img = document.getElementById('myImg1');
var modalImg = document.getElementById("img1");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal2');
var img = document.getElementById('myImg2');
var modalImg = document.getElementById("img2");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[1];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal3');
var img = document.getElementById('myImg3');
var modalImg = document.getElementById("img3");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[2];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal4');
var img = document.getElementById('myImg4');
var modalImg = document.getElementById("img4");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[3];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal5');
var img = document.getElementById('myImg5');
var modalImg = document.getElementById("img5");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[4];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal6');
var img = document.getElementById('myImg6');
var modalImg = document.getElementById("img6");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[5];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal7');
var img = document.getElementById('myImg7');
var modalImg = document.getElementById("img7");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[6];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal8');
var img = document.getElementById('myImg8');
var modalImg = document.getElementById("img8");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[7];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal9');
var img = document.getElementById('myImg9');
var modalImg = document.getElementById("img9");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[8];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal10');
var img = document.getElementById('myImg10');
var modalImg = document.getElementById("img10");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[9];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal11');
var img = document.getElementById('myImg11');
var modalImg = document.getElementById("img11");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[10];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal12');
var img = document.getElementById('myImg12');
var modalImg = document.getElementById("img12");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[11];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal13');
var img = document.getElementById('myImg13');
var modalImg = document.getElementById("img13");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[12];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal14');
var img = document.getElementById('myImg14');
var modalImg = document.getElementById("img14");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[13];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal15');
var img = document.getElementById('myImg15');
var modalImg = document.getElementById("img15");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[14];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal16');
var img = document.getElementById('myImg16');
var modalImg = document.getElementById("img16");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[15];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal17');
var img = document.getElementById('myImg17');
var modalImg = document.getElementById("img17");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[16];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal18');
var img = document.getElementById('myImg18');
var modalImg = document.getElementById("img18");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[17];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal19');
var img = document.getElementById('myImg19');
var modalImg = document.getElementById("img19");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[18];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal20');
var img = document.getElementById('myImg20');
var modalImg = document.getElementById("img20");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[19];
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById('myModal21');
var img = document.getElementById('myImg21');
var modalImg = document.getElementById("img21");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[20];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal22');
var img = document.getElementById('myImg22');
var modalImg = document.getElementById("img22");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[21];
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById('myModal23');
var img = document.getElementById('myImg23');
var modalImg = document.getElementById("img23");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[22];
span.onclick = function() {
  modal.style.display = "none";
} 

var modal = document.getElementById('myModal24');
var img = document.getElementById('myImg24');
var modalImg = document.getElementById("img24");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[23];
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById('myModal25');
var img = document.getElementById('myImg25');
var modalImg = document.getElementById("img25");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[24];
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById('myModal26');
var img = document.getElementById('myImg26');
var modalImg = document.getElementById("img26");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[25];
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById('myModal27');
var img = document.getElementById('myImg27');
var modalImg = document.getElementById("img27");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[26];
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById('myModal28');
var img = document.getElementById('myImg28');
var modalImg = document.getElementById("img28");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[27];
span.onclick = function() {
  modal.style.display = "none";
}
var modal = document.getElementById('myModal29');
var img = document.getElementById('myImg29');
var modalImg = document.getElementById("img29");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[28];
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById('myModal30');
var img = document.getElementById('myImg30');
var modalImg = document.getElementById("img30");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[29];
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById('myModal31');
var img = document.getElementById('myImg31');
var modalImg = document.getElementById("img31");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[30];
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById('myModal32');
var img = document.getElementById('myImg32');
var modalImg = document.getElementById("img32");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[31];
span.onclick = function() {
  modal.style.display = "none";
}


var modal = document.getElementById('myModal33');
var img = document.getElementById('myImg33');
var modalImg = document.getElementById("img33");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[32];
span.onclick = function() {
  modal.style.display = "none";
}



var modal = document.getElementById('myModal34');
var img = document.getElementById('myImg34');
var modalImg = document.getElementById("img34");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[33];
span.onclick = function() {
  modal.style.display = "none";
}


var modal = document.getElementById('myModal35');
var img = document.getElementById('myImg35');
var modalImg = document.getElementById("img35");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[34];
span.onclick = function() {
  modal.style.display = "none";
}




var modal = document.getElementById('myModal36');
var img = document.getElementById('myImg36');
var modalImg = document.getElementById("img36");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[35];
span.onclick = function() {
  modal.style.display = "none";
}


















































		

        /**
         * Notes: 
         * 
         * example how to add items:
         */

        /*
        
        var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');
        
        // call the plugin's add method
        ss.add($items);

        */
      
      });
	  
	  
	  
	  
	  
	  