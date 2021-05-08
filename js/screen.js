jQuery.noConflict();

$apex_highlightcolor = "#ff004e";


/* #On Document Ready
================================================== */



jQuery(document).ready(function() {	
		
	/* Menu */
	ddsmoothmenu.init({
		mainmenuid: "mainmenu", //menu DIV id
		orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
		classname: 'ddsmoothmenu', //class added to menu's outer DIV
		contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
	});	
	
	/* Hover Effects */
	hoverEffects();
	
	/* Tabs */
	tabsInit();
	
	/* Fit Videos */
	jQuery(".scalevid").fitVids();
	
	/* Portfolio 4 Column */
	jQuery('.portfolio4column').tpportfolio({
		speed:500,
		row:4,
		nonSelectedAlpha:15,
		portfolioContainer:'.portfolio'
	});
	
	/* Portfolio 2 Column */
	jQuery('.portfolio2column').tpportfolio({
		speed:500,
		row:2,
		nonSelectedAlpha:0,
		portfolioContainer:'.portfolio'
	});
	
	/* Responsive Select Menu */
	jQuery("#responsive-menu select").change(function() {
		window.location = jQuery(this).find("option:selected").val();
	});
	
	/* Contact Form */
	if(jQuery('#contactform').length != 0){
		addForm('#contactform');
	}
	
	/* Quick Contact */
	if(jQuery('#quickcontact').length != 0){
		addForm('#quickcontact');
	}
	
	/* Blog Comments */
	if(jQuery('#replyform').length != 0){
		addForm('#replyform');
	}
	
	/* Footer Position Calculator */
    footerHandler();
	
	/* Responsive Menu Generation */
    menuHandler();
    
    /* PrettyPhoto */
	addPrettyPhoto();
	
});



/* #On Window Load
================================================== */



jQuery(window).load(function() {	
			 
	jQuery("#background").fullBg();

	/* Init FlexSlider */
	jQuery('.flexslider').flexslider({
		touchSwipe: true,     
		controlNav: false,
		directionNav: true,
		slideshow: true,                
		slideshowSpeed: 7000,
		animationDuration: 600, 
		randomize: false, 
		pauseOnAction: true,    
		pauseOnHover: false  
	});
	
	/* FlexSlider Button Hover */
	jQuery(".flex-direction-nav li a.next, .flex-direction-nav li a.prev").hover(function() {
		jQuery(this).animate({ backgroundColor: $apex_highlightcolor },{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({ backgroundColor: "#222" },{duration:300,queue:false}, 'easeOutSine');
	});
	
	/* CSS fixes */
	jQuery('.tiledbackground').height(jQuery(document).height());
	jQuery('.whitebackground').height(jQuery(document).height());
	
	/* Google Maps */
	loadGoogleMaps();
	
});



/* #Menu Handler
================================================== */



function menuHandler() {
 jQuery('#mainmenu li >a').each(function() {
  var a=jQuery(this);
   jQuery('#responsive-menu select').append( new Option(a.text(),a.attr('href')) );
 });
}



/* #Footer Handler
================================================== */



/********************/
function footerHandler() {	
	setInterval(function() {
	
		var mainh = jQuery('body').find('.main:first').outerHeight();
		var footerh = jQuery('body').find('.footerwrap').outerHeight() + jQuery('body').find('.subfooterwrap').outerHeight();
		var windowh = jQuery(window).height();
		
		var dif = windowh - (mainh+footerh);
		if (dif>0) {
			jQuery('body').find('.footerwrap').stop();
			jQuery('body').find('.footerwrap').animate({'marginTop':dif+"px"},{duration:300,queue:false});
		}
		
		if (dif<0) {
			jQuery('body').find('.footerwrap').stop();
			jQuery('body').find('.footerwrap').animate({'marginTop':"0px"},{duration:300,queue:false});
			
		}
		// DEBUG jQuery('body').find('.khinfo').html('main:'+mainh+"  footer:"+footerh+" Window:"+windowh+"  dif:"+dif);
	},100);
	
	setInterval(function() {
		jQuery('.tiledbackground').height(jQuery(document).height());
		jQuery('.whitebackground').height(jQuery(document).height());
	},500);
}



/* #Pretty Photo
================================================== */



function addPrettyPhoto() {
	/* PrettyPhoto init */
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
		theme: 'pp_default',
		overlay_gallery: false,
		show_title: false,
        social_tools: false,
		hideflash: true
	});
}


/* #Site Tabs
================================================== */



function tabsInit() {
	
	/*
	* Skeleton V1.1
	* Copyright 2011, Dave Gamache
	* www.getskeleton.com
	* Free to use under the MIT license.
	* http://www.opensource.org/licenses/mit-license.php
	* 8/17/2011
	*/
	
	/* Tabs Activiation
	================================================== */

	var tabs = jQuery('ul.tabs');

	tabs.each(function(i) {

		//Get all tabs
		var tab = jQuery(this).find('> li > a');
		tab.click(function(e) {

			//Get Location of tab's content
			var contentLocation = jQuery(this).attr('href');

			//Let go if not a hashed one
			if(contentLocation.charAt(0)=="#") {

				e.preventDefault();

				//Make Tab Active
				tab.removeClass('active');
				jQuery(this).addClass('active');

				//Show Tab Content & add active class
				jQuery(contentLocation).show().addClass('active').siblings().hide().removeClass('active');

			}
		});
	});	
}



/* #Site Hover Effects
================================================== */



function hoverEffects() {
	
	/* Logo Hover */
	jQuery(".logo a").hover(function() {
		jQuery(this).animate({'opacity':'0.6'},{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({'opacity':'1'},{duration:300,queue:false}, 'easeOutSine');
	});
	
	/* Button Hover */
	jQuery("a.button, button").hover(function() {
		jQuery(this).animate({ backgroundColor: $apex_highlightcolor },{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({ backgroundColor: "#222" },{duration:300,queue:false}, 'easeOutSine');
	});
	jQuery("a.bigplus, a.bigdoc, a.bigcomment").hover(function() {
		jQuery(this).animate({ backgroundColor: $apex_highlightcolor },{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({ backgroundColor: "#d5d5d5" },{duration:300,queue:false}, 'easeOutSine');
	});
	
	/* Border Hover */
	jQuery(".footer a.borderhover img").hover(function() {
		jQuery(this).animate({ borderColor: $apex_highlightcolor },{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({ borderColor: "#222" },{duration:300,queue:false}, 'easeOutSine');
	});
	jQuery("a.borderhover img").not(".footer a.borderhover img").hover(function() {
		jQuery(this).animate({ borderColor: $apex_highlightcolor },{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({ borderColor: "#ddd" },{duration:300,queue:false}, 'easeOutSine');
	});
	
	/* Social Hover */
	jQuery("a.social_facebook").hover(function() {
		jQuery(this).animate({ backgroundColor: "#3b5998" },{duration:200,queue:false}, 'easeInSine');
	},function() {
		jQuery(this).animate({ backgroundColor: "#222" },{duration:300,queue:false}, 'easeOutSine');
	});
	jQuery("a.social_twitter").hover(function() {
		jQuery(this).animate({ backgroundColor: "#1dcaff" },{duration:200,queue:false}, 'easeInSine');
	},function() {
		jQuery(this).animate({ backgroundColor: "#222" },{duration:300,queue:false}, 'easeOutSine');
	});
	jQuery("a.social_rss").hover(function() {
		jQuery(this).animate({ backgroundColor: "#f37c14" },{duration:200,queue:false}, 'easeInSine');
	},function() {
		jQuery(this).animate({ backgroundColor: "#222" },{duration:300,queue:false}, 'easeOutSine');
	});
	jQuery("a.social_vimeo").hover(function() {
		jQuery(this).animate({ backgroundColor: "#86c9ef" },{duration:200,queue:false}, 'easeInSine');
	},function() {
		jQuery(this).animate({ backgroundColor: "#222" },{duration:300,queue:false}, 'easeOutSine');
	});
		jQuery("a.social_googleplus").hover(function() {
		jQuery(this).animate({ backgroundColor: "#da4a38" },{duration:200,queue:false}, 'easeInSine');
	},function() {
		jQuery(this).animate({ backgroundColor: "#222" },{duration:300,queue:false}, 'easeOutSine');
	});
	
	/* Link Hover */
	jQuery("a").not("a.button, a.bigplus, .footer a, .flex-caption a, .mainmenu a, a.titlelink, a.link, a.linkbg, .subline a, h6 a, h5 a, h4 a, h3 a, h2 a, h1 a, .blogpages li a").hover(function() {
		jQuery(this).animate({ color: $apex_highlightcolor },{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({ color: "#333" },{duration:300,queue:false}, 'easeOutSine');
	});
	jQuery(".blogpages li a").not(".blogpages li a.selected").hover(function() {
		jQuery(this).animate({ backgroundColor: $apex_highlightcolor },{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({ backgroundColor: "#222" },{duration:300,queue:false}, 'easeOutSine');
	});
	jQuery("h6 a, h5 a, h4 a, h3 a, h2 a, h1 a").hover(function() {
		jQuery(this).animate({ color: $apex_highlightcolor },{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({ color: "#000" },{duration:300,queue:false}, 'easeOutSine');
	});
	jQuery(".footer a").hover(function() {
		jQuery(this).animate({ color: $apex_highlightcolor },{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({ color: "#ccc" },{duration:300,queue:false}, 'easeOutSine');
	});
	jQuery(".flex-caption a").hover(function() {
		jQuery(this).animate({ color: $apex_highlightcolor },{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({ color: "#fff" },{duration:300,queue:false}, 'easeOutSine');
	});
	jQuery("a.link, .replylink a").hover(function() {
		jQuery(this).animate({ color: $apex_highlightcolor },{duration:200,queue:false}, 'easeOutSine');
		jQuery(this).css("border-bottom-color", $apex_highlightcolor);
	},function() {
		jQuery(this).animate({ color: "#333" },{duration:300,queue:false}, 'easeOutSine');
		jQuery(this).css("border-bottom-color", "#999");
	});
	jQuery("a.linkbg").hover(function() {
		jQuery(this).animate({ color: $apex_highlightcolor },{duration:200,queue:false}, 'easeOutSine');
		jQuery(this).css("backgroundColor", "#fff");
	},function() {
		jQuery(this).animate({ color: "#fff" },{duration:300,queue:false}, 'easeOutSine');
		jQuery(this).css("backgroundColor", $apex_highlightcolor);
	});
	jQuery(".subline a, .postinfo a").hover(function() {
		jQuery(this).animate({ color: $apex_highlightcolor },{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({ color: "#777" },{duration:300,queue:false}, 'easeOutSine');
	});
	jQuery("a.titlelink").hover(function() {
		jQuery(this).animate({ color: $apex_highlightcolor },{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({ color: "#b3b3b3" },{duration:300,queue:false}, 'easeOutSine');
	});
	
	/* Top Level Menu Hover 
	jQuery(".ddsmoothmenu ul li a").hover(function() {
		jQuery(this).animate({ color: "#000" },{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({ color: "#999" },{duration:200,queue:false}, 'easeOutSine');
	});*/
	
	/* Sub Menu Hover */
	jQuery(".ddsmoothmenu ul li ul li a").hover(function() {
		jQuery(this).animate({ color: "#000", backgroundColor: "#f7f7f7" },{duration:200,queue:false}, 'easeOutSine');
	},function() {
		jQuery(this).animate({ color: "#777", backgroundColor: "#fff" },{duration:200,queue:false}, 'easeOutSine');
	});
	
	/* Image Hover */
	jQuery('.hovering').hover(		
		function() {
			var $this=jQuery(this);
			
			if (jQuery.browser.msie && jQuery.browser.version==8) {
				jQuery('body').data('somethinghovered',1);				
			}
			
			if (!$this.find('img:first').hasClass("underanimation")) {
					if (jQuery.browser.msie && jQuery.browser.version<9 && $this.find('.overlay').length>0) {
						// IS ALREADY IN ACTION
						
					} else {
							
							var img = $this.find('img:first');
							var w=img.width();
							var h=img.height();
							var btw = parseInt(img.css('border-top-width'),0);
							var blw = parseInt(img.css('border-left-width'),0);
							if (btw>0 && btw<1000)	{
								} else {
									btw=0;
								}
							if (blw>0 && blw<1000)	{
								} else {
									blw=0;
								}
							
							
							var t=img.position().top + btw;
							var l=img.position().left + blw;
							
							
							// ADD THE OVERLAY ON THE A TAG BY HOVER
							
							$this.append('<div class="overlay" style="overflow:hidden;position:absolute;cursor:pointer;"></div>');
							$this.find('.overlay').css({'top':t+'px',
														'left':l+'px',
														'width':w+'px',
														'height':h+'px'});
							
							$this.find('.overlay').css({'opacity':0});
							$this.find('.overlay').animate({'opacity':0.25},{duration:350,queue:false}, 'easeOutSine');
							
							// ADD THE TEXT CAPTION ON THE HOVERED A TAG IMAGE
							if ($this.data('text')!=undefined) {
								$this.append('<div class="overlaytext" style="position:absolute;top:'+t+'px;left:'+(l+40)+'px;opacity:0.0">'+$this.data("text")+'</div>');
								var txt=$this.find('.overlaytext');				
								
								txt.css({'top':(t+h/2-parseInt(txt.outerHeight(),0)/2)+"px"});
								txt.animate({'opacity':'1.0','left':l+"px"},{duration:350,queue:false}, 'easeOutExpo');
							}
							
					}
			}
		},
		function() {
						
		
				
			var $this=jQuery(this);
			$this.find('.overlay').stop();
			$this.find('.overlay').animate({'opacity':0},{duration:350,queue:false}, 'easeOutSine');
			$this.find('.overlaytext').animate({'opacity':0},{duration:350,queue:false}, 'easeOutSine');
			$this.data('removetimer',setTimeout(function() {
					$this.find('.overlay').remove();
					$this.find('.overlaytext').remove();
					
				},350));
			
		});

	}




/* #Background Image
================================================== */



/**
 * jQuery.fullBg
 * Version 1.0
 * Copyright (c) 2010 c.bavota - http://bavotasan.com
 * Dual licensed under MIT and GPL.
 * Date: 02/23/2010
**/
(function($) {
  $.fn.fullBg = function(){
    var bgImg = $(this);		
 
    function resizeImg() {
      var imgwidth = bgImg.width();
      var imgheight = bgImg.height();
 
      var winwidth = $(window).width();
      var winheight = $(window).height();
 
      var widthratio = winwidth / imgwidth;
      var heightratio = winheight / imgheight;
 
      var widthdiff = heightratio * imgwidth;
      var heightdiff = widthratio * imgheight;
 
      if(heightdiff>winheight) {
        bgImg.css({
          width: winwidth+'px',
          height: heightdiff+'px'
        });
      } else {
        bgImg.css({
          width: widthdiff+'px',
          height: winheight+'px'
        });		
      }
    } 
    resizeImg();
	bgImg.fadeIn('slow');
    $(window).resize(function() {
      resizeImg();
    }); 
  };
})(jQuery)



/* #Contact Page Google Maps 
================================================== */



function initGoogleMaps() {
	/* Google Maps Init */
	var myLatlng = new google.maps.LatLng(50.935816, 6.961212);
	var myOptions = {
		zoom: 14,
		center: myLatlng,
		popup: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("googlemap"), myOptions);
	
	var marker = new google.maps.Marker({
		position: myLatlng, 
		map: map,
		title: "Our Office Location"
	});
	google.maps.event.addListener(marker, 'click', function() {
		map.setZoom(17);
	});
}
  
function loadGoogleMaps() {
	/* Google Maps Load */
	if(jQuery('#googlemap').length != 0){
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initGoogleMaps";
		document.body.appendChild(script);
	}
}



/* #Forms
================================================== */



function addForm(formtype) {

	var formid = jQuery(formtype);
	var emailsend = false;
	
	formid.find("button[name=send]").click(sendemail);
	
	function validator() {
		
		var emailcheck = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var othercheck = /.{4}/;
		var noerror = true;
		
		formid.find(".requiredfield").each(function () {
													 
			var fieldname = jQuery(this).attr('name');
			var value = jQuery(this).val();
			if(value == "Name *" || value == "Email *" || value == "Message *"){
				value = "";	
			}

			if(fieldname == "email"){
				if (!emailcheck.test(value)) {
					jQuery(this).addClass("formerror");
					noerror = false;
				} else {
					jQuery(this).removeClass("formerror");
				}	
			}else{
				if (!othercheck.test(value)) {
					jQuery(this).addClass("formerror");
					noerror = false;
				} else {
					jQuery(this).removeClass("formerror");
				}	
			}
		})
		
		if(!noerror){
			formid.find(".errormessage").fadeIn();
		}
		
		return noerror;
	}
	
	function resetform() {
		formid.find("input").each(function () {
			jQuery(this).val("");	
		})
		formid.find("textarea").val("");
		emailsend = false;
	}
	
	function sendemail() {
		formid.find(".successmessage").hide();
		var phpfile = "";
		if(formtype=="#contactform"){
			phpfile = "php/contact.php";
		}else if(formtype=="#quickcontact"){
			phpfile = "php/quickcontact.php";
		}else{
			phpfile = "";
		}
		if (validator()) {
			if(!emailsend){
				emailsend = true;
				formid.find(".errormessage").hide();
				formid.find(".sendingmessage").show();
				jQuery.post(phpfile, formid.serialize(), function() {
					formid.find(".sendingmessage").hide();
					formid.find(".successmessage").fadeIn();
					resetform();
				});
			}
		} 
		return false
	}
}



/* #Portfolio
================================================== */



(function($,undefined){	
	
	
	
	////////////////////////////
	// THE PLUGIN STARTS HERE //
	////////////////////////////
	
	$.fn.extend({
	
		
		// OUR PLUGIN HERE :)
		tpportfolio: function(options) {
	
		
			
		////////////////////////////////
		// SET DEFAULT VALUES OF ITEM //
		////////////////////////////////
		var defaults = {	
			speed:500,
			row:2,
			nonSelectedAlpha:0,
			portfolioContainer:".portfolio"
		};
		
			options = $.extend({}, $.fn.tpportfolio.defaults, options);
		

			return this.each(function() {
			
				var opt=options;				
				var bod= $(this);
				
				var start=0;				
				var many =bod.find('.all-group').length;
				var lasts = many - (Math.floor(many / opt.row) * opt.row);
				
				if (opt.nonSelectedAlpha===0) {
					bod.find(opt.portfolioContainer).wrap('<div class="portfoliooutterholder" style="position:relative;clear:both;overflow:hidden;"></div>');	
				}
				
				if (lasts==0) lasts=opt.row;
				
				
				
				// ADD ALPHA AND OMEGA CLASS FOR FIRST AND LAST ITEM !
				bod.find('.all-group').each(function(i) {
					start++;
					var item=$(this);					
					
					//alert(item.find('img:first').width());
					if (start==1)
						item.addClass('alpha');
						
						
					if (start===opt.row) {
						item.addClass('omega');
						start=0;										
					}
					
					if (i>=many-lasts) item.addClass('nopadding');
					
				});
				
				
				
				
				
				
				// SET UP THE CLICKS AND THE ANIMATIONS
				bod.find('.portfolio_selector').each(function(){
				
					// PREPARE THE FIRST START HERE
					var selector=$(this);
					if (selector.data('group') === "all-group") {
						selector.addClass('selected_selector');
					} else {
						selector.animate({'opacity':0.35},{duration:opt.speed,queue:false});
					}
					
					
					// HOVER EFFECT
					selector.hover(
						function() {
							var sels=$(this);
							sels.stop();
							sels.animate({'opacity':1},{duration:opt.speed,queue:false});
						},
						function() {
							var sels=$(this);
							if (!(sels.hasClass('selected_selector'))) {
								sels.stop();
								sels.animate({'opacity':0.35},{duration:opt.speed,queue:false});
							}
						});
						
						
						
					// CLICK EFFECT
					selector.click(function() {
						
						// FOR HIDING PORTFOLIO SET THE OUTER CONTAINER HEIGHT
						if (opt.nonSelectedAlpha===0) {
								// SET THE OUTTER  AND INNER HEIGHT OF THE CONTAINER DIV
								var oholder = bod.find('.portfoliooutterholder');
								var iholder = bod.find(opt.portfolioContainer);
								oholder.css({'width':'100%','height':iholder.height()+"px"});				
						
								if (!oholder.hasClass("row")) oholder.addClass("row");
						}

						
						// ADD AND REMOVE THE FADES FROM THE SELECTORS !!
						// FIRST REMOVE THE SELECTED SELECTORS
						bod.find('.portfolio_selector').each(function(){ 
							var sels=$(this);
							sels.removeClass('selected_selector');
						});
						
						// THAN ADD THE SELECTED SELECTOR TO THE NEW ONE
						selector.addClass("selected_selector");
						
						// THAN FADE OUT ALL NOT NEEDED SELECTOR
						bod.find('.portfolio_selector').each(function(){
							var sels=$(this);
							sels.stop();
							if (sels.hasClass('selected_selector')) {
								sels.animate({'opacity':1},{duration:opt.speed,queue:false});
							} else {
								sels.animate({'opacity':0.35},{duration:opt.speed,queue:false});
							}
						});
						
						
						
						
						// DEPENDING ON HOW FAR WE SHOUD HIDE THE REsT OF THE ITEMS, WE NEED TO REORGANISE THE FULL PORTFOLIO
						if (opt.nonSelectedAlpha===0) {
								
								var aoh = 0; // Amount Of Items to Hide
								var aos = 0; // Amount Of Items to Show
								
								$('body').find('.all-group').each(function(i) {
								
									var item=$(this);							
									item.stop();
									
									var img=item.find('img:first');

									// CALCULATE THE CURRENT IMAGE SIZES
									var l=img.position().left;
									var t=img.position().top;
									var iw=img.width();
									var ih=img.height();
									
									item.css({'position':'relative'});
									
									if (item.find('.deletemesoon').length==0)
										img.wrap('<div class="deletemesoon" style="position:relative;overflow:hidden;width:100%;height:'+ih+'px"></div>');
									img.css({'position':'absolute'});
								
									//if (item.css('display') != "none") aoh++;
									setTimeout(function() {
										img.animate({'top':ih+'px'},{duration:opt.speed,queue:false});
										item.animate({'opacity':0},{duration:opt.speed,queue:false});									
									},aoh*125);
									
								});
								
								
								// REMOVE THE ITEMS WE DONT NEED, AND REMOVE THE CLASSES
								setTimeout(function() {
									$('body').find('.all-group').each(function(i) {
										var item=$(this);	
										
										
										
										if (!item.hasClass(selector.data('group'))) 
											{
												item.css({'display':'none'}) 
											} else {
												item.css({'display':'block','opacity':0}) 
											}
										item.removeClass('alpha')
										item.removeClass('omega')
										item.remove('nopadding');

										
									 });
									},opt.speed+aoh*125);
								
								
								setTimeout(function() {
									
									var start=0;
									var many = $('body').find('.'+selector.data('group')).length;
									var lasts = many - (Math.floor(many / opt.row) * opt.row);
									if (lasts==0) lasts=opt.row;
									
									$('body').find('.'+selector.data('group')).each(function(i) {
										start++;
										var item=$(this);
										item.css({'display':'block','opacity':0});
										
										// STOP IMG ANIMATION
										var img=item.find('img:first');	
										var dele=item.find('.deletemesoon');
										dele.css({'width':'100%'});
										img.css({'top':'0px'});
										dele.css({'height':img.height()+"px"});
										
										img.stop();
										img.css({'position':'absolute','top':img.height()+"px"});
										img.animate({'top':'0px'},{duration:opt.speed,queue:false});
										
										var oholder = bod.find('.portfoliooutterholder');
										
										
										setTimeout(function() {
											img.prependTo(item.find('a:first'));
											img.css({'position':'relative','top':'0px'});
											item.find('.deletemesoon').remove();
											
											
										},opt.speed+10+aoh*125);
										
										
										
										item.stop();
										item.animate({'opacity':1},{duration:opt.speed,queue:false});
										
										if (start==1)
											item.addClass('alpha');											
											
										if (start===opt.row) {
											item.addClass('omega');
											start=0;
										}
										if (i>=many-lasts) {
											item.addClass('nopadding');
										} else {
											item.removeClass('nopadding');
										}
									});
									
									
									buildRows(opt);
																									
									// SET HEIGHT OF PORTFOLIO HOLDER
									
									
									var iholder = bod.find(opt.portfolioContainer);
									oholder.stop();
									
									oholder.animate({'height':iholder.outerHeight()+"px"},{duration:400,queue:false});																		
									
									},(opt.speed+20)+(aoh*125));

						 } else {
						 
						 
							$('body').find('.nonclickbar').remove();
							// IF UNSLECTED ARE STILL VISIBLE, WE DONT NEED TO REMOVE THEM... 
							
							
							$('body').find('.all-group').each(function() {
									
									var item=$(this);							
									item.stop();
									if (item.hasClass(selector.data('group'))) {										
										item.animate({'opacity':1},{duration:opt.speed,queue:false});
									} else {
										
										var w=item.outerWidth();
										var h=item.outerHeight();
										
										
										
										var t=item.position().top;
										var l=item.position().left;
										
										
										// ADD THE OVERLAY ON THE A TAG BY HOVER
										item.parent().append('<div class="nonclickbar" style="position:absolute;top:'+t+'px;left:'+l+'px;width:'+w+'px;height:'+h+'px;background:#000"></div>');
										
										item.parent().find('.nonclickbar').css({'opacity':0.0}).addClass(item.data('row'));
										
										
										item.animate({'opacity':opt.nonSelectedAlpha/100},{duration:opt.speed,queue:false});
										
										
									}
																			
								});
								setTimeout(function() {buildRows(opt);},100);
						 }
						return false;
					});
				});
				
				
				var lodedimg=0;
				bod.find('.all-group').waitForImages(
					function() {
						buildRows(opt);
						if (opt.nonSelectedAlpha===0) {
								// SET THE OUTTER  AND INNER HEIGHT OF THE CONTAINER DIV
								var oholder = bod.find('.portfoliooutterholder');
								var iholder = bod.find(opt.portfolioContainer);
								oholder.css({'width':'100%','height':iholder.height()+"px"});										
								if (!oholder.hasClass("row")) oholder.addClass("row");
						}
						
					},
					
					function() {
						lodedimg = lodedimg+1;
						buildRows(opt);
						
					}
					
				);
					
				buildRows(opt,true);
				$(window).resize(function() {
					
					clearTimeout(opt.resized);
					opt.resized=setTimeout(function() {
						buildRows(opt,true);
					},100);
					
				});		
												
			})
	}
})

		//////////////////////////////////////////////
		// BUILD THE ROWS ON RESCALING OR AT START //
		////////////////////////////////////////////
		function buildRows(opt,no) {
		
						
						var bod=$('body');
						
						// REMOVE ACTUAL ROWS (IF THERE IS ANY)
						bod.find('.rowwrap').each(function(i) {
							var item=$(this).find('.rowed:first');
							item.unwrap();
							
						});
						
						// REMOVE THE ROWED AND ROWx CLASSES
						bod.find('.rowed').each(function(i) {
							var item=$(this);
							item.removeClass(item.data('row'));
							item.removeClass('rowed');
						});
						
						var row=0;
						
						// GO THROUGH, AND CHECK ALPHAS AND OMEGAS
						bod.find('.all-group').each(function(i) {
							var item=$(this);
							item.addClass('row'+row);
							item.addClass('rowed');
							item.data('row','row'+row);
							if (item.hasClass('omega')) {
								row++;
							}
						});
						
						
						// CREATE ROWS AROUND THE ITEMS
						for (i=0;i<row;i++) {												
							bod.find('.row'+i).wrapAll('<div class="rowwrap" style="position:relative;height:0px;width:100%;"></div>');					
						}
						
						// SET HEIGHT OF EACH ROW HERE
						
						bod.find('.killerclear').remove();
						var maxrowa = bod.find('.rowwrap').length;
						
						bod.find('.rowwrap').each(function(j) {
							var $this=$(this);
							var max=0;
							$this.find('.rowed').each(function(i) {
									if ($(this).css('display')!="none") {
										//console.log(j+". Row Element "+i+". height:"+$(this).outerHeight());
										if (max<$(this).height()) max=$(this).outerHeight();
									}
							});
							//console.log(j+'. Row Berechnete:'+max);							
							$this.css({'height':(max)+"px"});  //max+"px"});
							//if (j<maxrowa-1) {
								//console.log('Added Clear');
								$this.after('<div style="clear:both" class="killerclear"></div>');
							//} else {
							//	console.log('Last Row has no Clear !!');
							//}
							
						});
						
						
						var oholder = bod.find('.portfoliooutterholder');						
						var iholder = bod.find(opt.portfolioContainer);
						oholder.stop();
						oholder.animate({'height':iholder.outerHeight()+"px"},{duration:400,queue:false});
						
				};
				
			
})(jQuery);	



/*
 * waitForImages 1.3.3
 * -----------------
 * Provides a callback when all images have loaded in your given selector.
 * http://www.alexanderdickson.com/
 *
 *
 * Copyright (c) 2011 Alex Dickson
 * Licensed under the MIT licenses.
 * See website for more info.
 *
 */

;(function($) {
    
    // CSS properties which contain references to images. 
    $.waitForImages = {
        hasImageProperties: [
        'backgroundImage',
        'listStyleImage',
        'borderImage',
        'borderCornerImage'
        ]
    };
    
    // Custom selector to find `img` elements that have a valid `src` attribute and have not already loaded.
    $.expr[':'].uncached = function(obj) {
        // Firefox will always return `true` even if the image has not been downloaded.
		// Doing it this way works in Firefox.
        var img = document.createElement('img');
        img.src = obj.src;
        return $(obj).is('img[src!=""]') && ! img.complete;
    };
    
    $.fn.waitForImages = function(finishedCallback, eachCallback, waitForAll) {

        // Handle options object.
        if ($.isPlainObject(arguments[0])) {
            eachCallback = finishedCallback.each;
            waitForAll = finishedCallback.waitForAll;
            finishedCallback = finishedCallback.finished;
        }

        // Handle missing callbacks.
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;

        // Convert waitForAll to Boolean
        waitForAll = !! waitForAll;

        // Ensure callbacks are functions.
        if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        };

        return this.each(function() {
            // Build a list of all imgs, dependent on what images will be considered.
            var obj = $(this),
                allImgs = [];

            if (waitForAll) {
                // CSS properties which may contain an image.
                var hasImgProperties = $.waitForImages.hasImageProperties || [],
                    matchUrl = /url\((['"]?)(.*?)\1\)/g;
                
                // Get all elements, as any one of them could have a background image.
                obj.find('*').each(function() {
                    var element = $(this);

                    // If an `img` element, add it. But keep iterating in case it has a background image too.
                    if (element.is('img:uncached')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        });
                    }

                    $.each(hasImgProperties, function(i, property) {
                        var propertyValue = element.css(property);
                        // If it doesn't contain this property, skip.
                        if ( ! propertyValue) {
                            return true;
                        }

                        // Get all url() of this element.
                        var match;
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            });
                        };
                    });
                });
            } else {
                // For images only, the task is simpler.
                obj
                 .find('img:uncached')
                 .each(function() {
                    allImgs.push({
                        src: this.src,
                        element: this
                    });
                });
            };

            var allImgsLength = allImgs.length,
                allImgsLoaded = 0;

            // If no images found, don't bother.
            if (allImgsLength == 0) {
                finishedCallback.call(obj[0]);
            };

            $.each(allImgs, function(i, img) {
                
                var image = new Image;
                
                // Handle the image loading and error with the same callback.
                $(image).bind('load error', function(event) {
                    allImgsLoaded++;
                    
                    // If an error occurred with loading the image, set the third argument accordingly.
                    eachCallback.call(img.element, allImgsLoaded, allImgsLength, event.type == 'load');
                    
                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        return false;
                    };
                    
                });

                image.src = img.src;
            });
        });
    };
})(jQuery);