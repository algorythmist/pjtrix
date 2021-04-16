/* Detect if AdBlock or other is blocking Adsense or other 
	Copyright Jeff Baker 2018
	Version 1.0 - Created 2/19/2018
	seabreezecomputers.com/block_detect

	NOTE: 
	(1) Set your ads to display = "none".
	(2) Don't name your images with "ad" in the title or a dimension of an ad like "728x90" or adblock will block it.

*/

/* EDIT THE FOLLOWING VARIABLES */

var your_class = "sra_div"; // Put the class name of the div elements that contain your local ads here
var other_class = "adsbygoogle"; // Put the class name of the ad network elements here. Use "adsbygoogle" for Adsense

/* DO NOT EDIT BELOW THIS LINE */

var block_interval = setInterval(function(){ 
	
	var google_ads = document.getElementsByClassName(other_class);
	var your_ads = document.getElementsByClassName(your_class);
	
	//console.log(google_ads[0].offsetHeight); // The height of the first google ad will be 0 if not displaying
	//console.log(adsbygoogle.loaded); // adsbygoogle.loaded will be false if google adsense is not showing ads
	
	if ((google_ads[0] && google_ads[0].offsetHeight > 0) || (adsbygoogle && adsbygoogle.loaded)) {
		for (var i = 0; i < your_ads.length; i++) 
			your_ads[i].style.display = "none"; // Don't display your ad
		for (var i = 0; i < google_ads.length; i++) 
			google_ads[i].style.display = "block"; // Display Google Ads or other Ad Network
	}
	else {
		for (var i = 0; i < your_ads.length; i++)
			your_ads[i].style.display = "block"; // Display your ad
		for (var i = 0; i < google_ads.length; i++) 
			google_ads[i].style.display = "none"; // Don't display Google Ads or other Ad Network
	}
	
	setTimeout(function() { clearInterval(block_interval); }, 10000); // After 10 seconds stop checking
	
}, 1000); // Check every second
