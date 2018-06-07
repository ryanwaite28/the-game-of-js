function backToTop(){
	$('html, body').animate({
            		scrollTop: 0 // $("#sdl").offset().top
        	}, 1000);
}

function headers_one() {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  return myHeaders;
}

// got from: https://stackoverflow.com/questions/523266/how-can-i-get-a-specific-parameter-from-location-search
var parseQueryString = function() {

    var str = window.location.search;
    var objURL = {};

    str.replace(
        new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
        function( $0, $1, $2, $3 ){
            objURL[ $1 ] = $3;
        }
    );
    return objURL;
};

// got from: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function GeturlParams() {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
}

// got from: https://davidwalsh.name/query-string-javascript
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i=0;i<vars.length;i++) {
		var pair = vars[i].split("=");
		if(pair[0] == variable){return pair[1];}
	}
	return false;
}

// i made this
function get_url_params() {
	var query = {};
	var params = location.search.substr(1).split("&");
	params.forEach(param => {
  		var splitter = param.split("=");
  		var key = splitter[0];
  		var value = splitter[1];
  		query[key] = value;
	});
	return query;
}

Date.prototype.addDays = function (number_of_days) {
   var dat = new Date(this.valueOf())
   dat.setDate(dat.getDate() + number_of_days);
   return dat;
}

Date.prototype.backDays = function (number_of_days) {
   var dat = new Date(this.valueOf())
   dat.setDate(dat.getDate() - number_of_days);
   return dat;
}

// Shuffle Array
function shuffleArray(array) {
    var input = $.type(array);
    
    if( array == undefined || input != "array" ) { 
    	console.log("Error - Input Is Either Empty Or Not An Array Object."); 
    	return;
    }
    
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function get_xml(link) {
  return new Promise((resolve, reject) => {
    fetch(link)
    .then(resp => {
      if(resp.status == 503){
        reject("No Results Matches Your Search");
        return;
      }
      resp.text();
    })
    .then(xmlString => { jQuery ? $.parseXML(xmlString) : (new window.DOMParser()).parseFromString(str, "text/xml")})
    .then(xml => resolve(xml))
    .catch(e => { console.log(e); reject("Error Fetching..."); })
  });
}

function flash_msg(id, msg) {
  if(id == undefined) {throw new Error('element id was not given');}
  if(msg == undefined) {throw new Error('msg was not given');}
  document.getElementById(id).innerHTML = msg;

  setTimeout(function(){
    document.getElementById(id).innerHTML = '';
  } , 3000);
}


		function getDates(startDate, stopDate) {
			var dateArray = [];
			var currentDate = startDate;
			while (currentDate <= stopDate) {
				dateArray.push(new Date(currentDate))
				currentDate = currentDate.addDays(1);
			}
			// console.log(dateArray);
			return dateArray;
		}


String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
}

function getFileContents(file) {
        return new Promise((res) => {
          var reader  = new FileReader();

          reader.addEventListener("load", () => {
            res(reader.result);
          }, false);

          if (file) {
            reader.readAsDataURL(file);
          }
        });
      }

function randomValue(){
  return Math.random().toString(36).substr(2, 34);
}

function randomValueLong(){
  return Math.random().toString(36).substr(2, 34) + Math.random().toString(36).substr(2, 34);
}

function uniqueValue() {
    return String(Date.now()) + 
	    Math.random().toString(36).substr(2, 34) +
	    Math.random().toString(36).substr(2, 34) +
	    Math.random().toString(36).substr(2, 34)
}

function string_insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

function file_is_image_type(file) {

    // Make sure `file.name` matches our extensions criteria
    if ( /\.(jpeg|png|jpg)$/i.test(file.name) ) {
      return true
    }
	else {
		return false;
	}

  }

function file_is_music_type(file) {

    // Make sure `file.name` matches our extensions criteria
    if ( /\.(mp3|wav)$/i.test(file.name) ) {
      return true
    }
	else {
		return false;
	}

  }

function file_is_video_type(file) {

    // Make sure `file.name` matches our extensions criteria
    if ( /\.mp4$/i.test(file.name) ) {
      return true
    }
	else {
		return false;
	}

  }

var numLetters = function(input) {
    if(!input) { alert("Input is required"); return; }
    if(typeof(input) !== "string") { alert("Input must be of type: string"); return; }
    var letter = input;
    return function(multiplier) {
        if(!multiplier) { alert("multiplier is required"); return; }
        if(typeof(multiplier) !== "number") { alert("Input must be of type: number"); return; }
        let multi = Math.floor(multiplier);
        var value = "";
        while(multi > 0) {
            value = value + letter
            multi--;
        }
         
        console.log("value:", value)
        console.log("length:", value.length)
        return value; 
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

// Angular interpolation
/*

App.config(['$interpolateProvider', function($interpolateProvider) {
	$interpolateProvider.startSymbol('((');
	$interpolateProvider.endSymbol('))');
}]);

*/
