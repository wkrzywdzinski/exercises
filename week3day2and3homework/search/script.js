var bigbox = $(".bigbox");
var input = $("input");
var resultbox = $(".resultbox");
/////////////////////////////////////// mouseover
bigbox.on("mouseover", function(e) {
  $(".highlight").removeClass("highlight");
  $(e.target).addClass("highlight");
});
/////////////////////////////////////////mousedown
bigbox.on("mousedown", function(e) {
  bigbox.empty();
  input.val($(e.target).text());
});
/////////////////////////////////////////keyboard
$(document).on("keydown", function(e) {
  if (e.keyCode == 40) {
    //keyup//
    if ($(".highlight").length == 0) {
      $(".resultbox")
        .first()
        .addClass("highlight");
    } else {
      $(".highlight")
        .next()
        .addClass("highlight");
      $(".highlight")
        .first()
        .removeClass("highlight");
    }
  }
  if (e.keyCode == 38) {
    //keydown//
    if ($(".highlight").length == 0) {
      $(".resultbox")
        .last()
        .addClass("highlight");
    } else {
      $(".highlight")
        .prev()
        .addClass("highlight");
      $(".highlight")
        .last()
        .removeClass("highlight");
    }
  }
  if (e.keyCode == 13) {
    //enter//
    input.val($(".highlight").text());
    bigbox.empty();
  }
});
//////////////////////////////////// blur focus
input.on("blur", function(e) {
  $(".resultbox").hide();
});
input.on("focus", function(e) {
  $(".resultbox").show();
});
/////////////////////////////////////////////////////////main part
input.on("input", function(e) {
  var resultsHTML = "";
  var results = [];
  var val = input.val();
  if (val == "") {
    return;
  }
  for (var i = 0; i < countries.length; i++) {
    if (countries[i].toLowerCase().indexOf(val.toLowerCase()) == 0) {
      if (results.push(countries[i]) >= 4) {
        break;
      }
    }
  }
  for (var i = 0; i < results.length; i++) {
    resultsHTML += '<div class="resultbox">' + results[i] + "</div>";
  }
  bigbox.html(resultsHTML);
  if (resultsHTML == "") {
    bigbox.html("NO RESULTS");
  }
});
/////////////////////////////////////////
var countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Angola",
  "Anguilla",
  "Antigua",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bonaire (Netherlands Antilles)",
  "Bosnia Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo, The Democratic Republic of",
  "Cook Islands",
  "Costa Rica",
  "Croatia",
  "Curacao (Netherlands Antilles)",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iraq",
  "Ireland (Republic of)",
  "Israel",
  "Italy",
  "Ivory Coast",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kosrae Island",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia (FYROM)",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Moldova",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Ponape",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Rota",
  "Russia",
  "Rwanda",
  "Saba (Netherlands Antilles)",
  "Saipan",
  "Samoa",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St. Barthelemy",
  "St. Croix",
  "St. Eustatius (Netherlands Antilles)",
  "St. John",
  "St. Kitts and Nevis",
  "St. Lucia",
  "St. Maarten (Netherlands Antilles)",
  "St. Thomas",
  "St. Vincent and the Grenadines",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Tinian",
  "Togo",
  "Tonga",
  "Tortola",
  "Trinidad and Tobago",
  "Truk",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos",
  "Tuvalu",
  "US Virgin Islands",
  "Uganda",
  "Ukraine",
  "Union Island",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Virgin Gorda",
  "Wallis and Futuna",
  "Yap",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];
