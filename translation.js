var hlpt_translation_config = {
  languages: {
    por: {
      code: "por",
      source:
        "https://script.google.com/macros/s/AKfycbz1bJVALU24zALSfsVz9VPwvVRXX0veUmJcQe0GeosIJyTTiWARld0vTrJX9Y4vto64/exec",
      label: "Português",
    },
    es: {
      code: "es",
      source:
        "https://script.google.com/macros/s/AKfycbyyZR6VgaUji19gBk6-gWIcMkoGYyuZU-GOJft8SXBrIl40NGXDHAlMQdswPgFPDWtf/exec",
      label: "Español",
    },
    fr: {
      code: "fr",
      source:
        "https://script.google.com/macros/s/AKfycbw9OYNrfFKA69Ws0fObCOFPa1rRQoczSoaP9OWvYk5ZdiIfbEnUo4JZGPYYgA-tX7CAjQ/exec",
      label: "Français",
    },
    cn: {
      code: "cn",
      source:
        "https://script.google.com/macros/s/AKfycbw9OYNrfFKA69Ws0fObCOFPa1rRQoczSoaP9OWvYk5ZdiIfbEnUo4JZGPYYgA-tX7CAjQ/exec",
      label: "China",
    },
  },
};

const hlpt_get_translation_location_id = function () {
  var location_id = "";
  var page_url = document.location.href;
  var page_url_Array = page_url.split("/");
  var location_pos = page_url_Array.indexOf("location");
  if (location_pos) {
    var location_id_pos = location_pos + 1;
    location_id = page_url_Array[location_id_pos];
  }
  return location_id;
};

const hlpt_change_translation = (new_language) => {
  if (new_language) {
    var location_id = hlpt_get_translation_location_id();
    var lang_cookie_name = "lang_" + location_id;
    var global_lang_cookie_name = "hlpt_user_lang";
    hlpt_translation_set_cookie(lang_cookie_name, new_language);
    hlpt_translation_set_cookie(global_lang_cookie_name, new_language);
    location.reload();
  }
};

const hlpt_translation_get_cookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

const hlpt_translation_set_cookie = (cname, cvalue) => {
  var exdays = 365;
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

(function () {
  window.translate_count = window.translate_count || 0;
  window.lang_data = window.lang_data || {};
  const min_translate_frequency = 5;
  const currentScript = document.currentScript;

  const hlpt_loadFR = function (url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function () {
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  const hlpt_loadEmbed = (url, cb) => {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        cb(xmlhttp.responseText);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  };
  const the_ark = function () {
    var ark = "";
    var ark_att = document.getElementById("hlpt-translate");
    if (document.body.contains(ark_att)) {
      if (ark_att.hasAttribute("data-translate-ark")) {
        ark = ark_att.getAttribute("data-translate-ark");
      }
    } else {
      if (currentScript.hasAttribute("data-translate-ark")) {
        ark = currentScript.getAttribute("data-translate-ark");
      }
    }
    return ark;
  };

  const hlpt_custom_request = (url, cb) => {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        cb(xmlhttp.responseText);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  };

  const hlpt_translation_update = function (j) {
    window.translate_count = window.translate_count || 0;
    window.lang_data = window.lang_data || {};
    if (window.translate_count >= min_translate_frequency) return "";
    window.translate_count = window.translate_count + 1;
    //console.log("Translation Count: " + window.translate_count);
    let a = JSON.parse(j);
    var i;
    var key;
    var value;
    var k = 0;
    for (i = 0; i < a.length; i++) {
      key = a[i].english;
      value = a[i].portuguese;

      findAndReplaceDOMText(document.body, {
        find: key,
        replace: value,
        wrap: "font",
        filterElements: function (el) {
          if (el.nodeName.toLowerCase() == "font") {
            return false;
          } else {
            if (el.className) {
              var el_class = el.className;
              const trandisabled = ["message-bubble", "message-wrapper"];
              for (k = 0; k < trandisabled.length; k++) {
                var selected_class = trandisabled[k];
                if (
                  el_class &&
                  typeof el_class == "string" &&
                  el_class.includes(selected_class)
                ) {
                  return false;
                }
              }
            }
            return true;
          }
        },
      });
    }
    hlpt_translation_input_placeholder(a);
    setTimeout(function () {
      hlpt_translation_update(j);
    }, 1000);
    //hlpt_translation_update(j);
  };

  const hlpt_translation_input_placeholder = (a) => {
    if (typeof a == "object") {
      var all_inputs = document.querySelectorAll(
        'input:not([hlpt_translated="yes"])'
      );
      if (all_inputs.length) {
        var lang_array = [];
        var lang_translation = {};
        var j;
        for (j = 0; j < a.length; j++) {
          var lang_eng = a[j].english;
          var lang_trans = a[j].portuguese;
          lang_array.push(lang_eng);
          lang_translation[lang_eng] = lang_trans;
        }
        if (Array.isArray(lang_array) && lang_array.length) {
          var i;
          for (i = 0; i < all_inputs.length; i++) {
            var current_input = all_inputs[i];
            var input_placeholder = current_input.getAttribute("placeholder");
            if (input_placeholder && lang_array.includes(input_placeholder)) {
              current_input.setAttribute(
                "placeholder",
                lang_translation[input_placeholder]
              );
              current_input.setAttribute("hlpt_translated", "yes");
            }
          }
        }
      }
    }
  };

  const hlpt_translation_icon = (hlpt_translation_config) => {
    var lid = "langTranslate";
    var location_id = hlpt_get_translation_location_id();
    var lang_cookie_name = "lang_" + location_id;

    var default_lang_title = "English";
    var default_lang_code = "en";
    var default_flag_url = hlpt_translation_get_flag_url(default_lang_code);

    var existing_language_code = hlpt_translation_get_cookie(lang_cookie_name);
    if (!existing_language_code) existing_language_code = default_lang_code;

    var translation_languages = {};
    if (
      typeof hlpt_translation_config !== "undefined" &&
      hlpt_translation_config.hasOwnProperty("languages")
    )
      translation_languages = hlpt_translation_config.languages;

    var existing_language_label = default_lang_title;
    if (translation_languages.hasOwnProperty(existing_language_code)) {
      var existing_language_details =
        translation_languages[existing_language_code];
      if (
        typeof existing_language_details == "object" &&
        existing_language_details.hasOwnProperty("source")
      ) {
        existing_language_label = existing_language_details.label;
      }
    }
    var existing_lang_flag_url = hlpt_translation_get_flag_url(
      existing_language_code
    );

    if (
      (document.body.contains(document.getElementById("nav-links")) ||
        document.body.contains(document.querySelector(".hl_nav-header nav")) ||
        document.body.contains(document.getElementById("sidebar-v2"))) &&
      !document.body.contains(document.querySelector("#" + lid))
    ) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href =
        "https://1793453544.rsc.cdn77.org/hlpttranslation/resources/style-1.1.css?v=" +
        Date.now();
      document.getElementsByTagName("HEAD")[0].appendChild(link);

      var recent_activities = document.querySelectorAll(".hl_header--dropdown");
      var dropdown_last_num = recent_activities.length - 1;
      const hdCtrlD = document.createElement("span");
      hdCtrlD.setAttribute("id", lid);
      hdCtrlD.setAttribute("class", "dropdown_lang language-selector");
      if (document.body.contains(recent_activities[dropdown_last_num]))
        recent_activities[dropdown_last_num].parentNode.insertBefore(
          hdCtrlD,
          recent_activities[dropdown_last_num]
        );

      var recent_activities2 = document.querySelector(".dropdown_lang");
      const hdCtrlD2 = document.createElement("a");
      hdCtrlD2.setAttribute("href", "javascript:void(0);");
      hdCtrlD2.setAttribute("id", "lang_translate_btn");
      hdCtrlD2.setAttribute("class", "btn btn-circle lang_btn lang_btn_ord");
      hdCtrlD2.innerHTML = '<i class="fa fa-language" aria-hidden="true"></i>';
      if (document.body.contains(recent_activities2))
        recent_activities2.appendChild(hdCtrlD2);

      var recent_activities3 = document.querySelector(".lang_btn");
      const hdCtrlD3 = document.createElement("label");
      hdCtrlD3.setAttribute("class", "lang_btn_label");
      if (document.body.contains(recent_activities3))
        recent_activities3.parentNode.insertBefore(
          hdCtrlD3,
          recent_activities3.nextSibling
        );

      var recent_activities4 = document.querySelector(".lang_btn_label");
      const hdCtrlD4 = document.createElement("input");
      hdCtrlD4.setAttribute("type", "checkbox");
      hdCtrlD4.setAttribute("name", "hlpt_lang_toggle");
      hdCtrlD4.setAttribute("class", "lang_btn_input");
      if (document.body.contains(recent_activities4))
        recent_activities4.appendChild(hdCtrlD4);

      var recent_activities5 = document.querySelector(".lang_btn_input");
      const hdCtrlD5 = document.createElement("ul");
      hdCtrlD5.setAttribute("class", "lang_btn_ul dropdown-menu");
      if (document.body.contains(recent_activities5))
        recent_activities5.parentNode.insertBefore(
          hdCtrlD5,
          recent_activities5.nextSibling
        );

      var i = 0;
      for (const [lang_code_left, lang_details] of Object.entries(
        translation_languages
      )) {
        var lang_title = "";
        if (
          typeof lang_details == "object" &&
          lang_details.hasOwnProperty("label")
        )
          lang_title = lang_details.label;
        var lang_src = "";
        if (
          typeof lang_details == "object" &&
          lang_details.hasOwnProperty("source")
        )
          lang_src = lang_details.source;

        var lang_code = "";
        if (
          typeof lang_details == "object" &&
          lang_details.hasOwnProperty("code")
        )
          lang_code = lang_details.code;
        var lang_flag_url = hlpt_translation_get_flag_url(lang_code);

        if (i == 0) {
          var recent_activities6 = document.querySelector(".lang_btn_ul");
          const hdCtrlD6 = document.createElement("li");
          if (existing_language_code == lang_code) {
            hdCtrlD6.setAttribute("class", "lang_iteml selected_lang");
          } else {
            hdCtrlD6.setAttribute("class", "lang_iteml");
          }
          hdCtrlD6.innerHTML =
            '<a href="javascript:void(0);"><img src="' +
            lang_flag_url +
            '"> ' +
            lang_title +
            "</a>";
          hdCtrlD6.setAttribute(
            "onclick",
            "hlpt_change_translation( '" + lang_code + "' );"
          );
          recent_activities6.appendChild(hdCtrlD6);
        } else {
          var recent_activities7 = document.querySelector(".lang_iteml");
          const hdCtrlD7 = document.createElement("li");
          hdCtrlD7.innerHTML =
            '<a href="javascript:void(0);"><img src="' +
            lang_flag_url +
            '"> ' +
            lang_title +
            "</a>";
          hdCtrlD7.setAttribute(
            "onclick",
            "hlpt_change_translation( '" + lang_code + "' );"
          );
          if (existing_language_code == lang_code) {
            hdCtrlD7.setAttribute("class", "selected_lang");
          }
          recent_activities7.parentNode.insertBefore(
            hdCtrlD7,
            recent_activities7.nextSibling
          );
        }

        i++;
      }

      if (existing_language_code != default_lang_code) {
        var recent_activities8 = document.querySelector(".lang_iteml");
        var hdCtrlD8 = document.createElement("li");
        hdCtrlD8.innerHTML =
          '<a href="javascript:void(0);"><img src="' +
          default_flag_url +
          '"> ' +
          default_lang_title +
          "</a>";
        hdCtrlD8.setAttribute(
          "onclick",
          "hlpt_change_translation( '" + default_lang_code + "' );"
        );
        recent_activities8.parentNode.insertBefore(
          hdCtrlD8,
          recent_activities8.nextSibling
        );
      }
    }
  };

  const hlpt_translation_get_flag_url = function (lang_code) {
    var flag_url = "";
    if (lang_code) {
      flag_url =
        "https://1793453544.rsc.cdn77.org/hlpttranslation/resources/flags/" +
        lang_code +
        ".png";
    }
    return flag_url;
  };

  const hlpt_translation_icon_setup = function (hlpt_translation_config) {
    hlpt_translation_icon(hlpt_translation_config);
    const targetNode = document.querySelector("#app");
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(function (mutations) {
      hlpt_translation_icon(hlpt_translation_config);
    });
    observer.observe(targetNode, config);
  };

  const hlpt_location_allowed = function (location_id) {
    var location_allowed = 1;
    var selected_locations_array = [];
    var lsp_att = document.getElementById("hlpt-translate");
    var selected_location = "";
    if (document.body.contains(lsp_att)) {
      if (lsp_att.hasAttribute("data-locations")) {
        location_allowed = 0;
        selected_location = lsp_att.getAttribute("data-locations");
      }
    }
    if (!selected_location) {
      if (currentScript.hasAttribute("data-locations")) {
        location_allowed = 0;
        selected_location = currentScript.getAttribute("data-locations");
      }
    }
    if (selected_location) {
      selected_locations_array = selected_location.split(",");
      if (location_id && !location_id.includes("http")) {
        if (location_id && selected_locations_array.includes(location_id)) {
          location_allowed = 1;
        }
      } else {
        location_allowed = 1;
      }
    }
    return location_allowed;
  };

  const reset_translate_count = function () {
    if (window.translate_count >= min_translate_frequency) {
      //console.log("Clicked for Translation!");
      window.translate_count = 0;
      hlpt_translation_update(window.lang_data);
    }
  };

  const hlpt_observe_location_change = function () {
    const targetNode = document.querySelector("#app");
    const config = { attributes: true };
    const observer = new MutationObserver(function (mutations) {
      reset_translate_count();
    });
    observer.observe(targetNode, config);
  };

  const hlpt_translation_execute = function () {
    var location_id = hlpt_get_translation_location_id();
    var lang_cookie_name = "lang_" + location_id;
    var existing_language = hlpt_translation_get_cookie(lang_cookie_name);

    if (hlpt_location_allowed(location_id)) {
      //console.log( "Translation Configuration: " + JSON.stringify(hlpt_translation_config) );
      hlpt_translation_icon_setup(hlpt_translation_config);
      var translation_languages = {};
      if (
        typeof hlpt_translation_config !== "undefined" &&
        hlpt_translation_config.hasOwnProperty("languages")
      )
        translation_languages = hlpt_translation_config.languages;
      //console.log( "Translation Languages: " + JSON.stringify(translation_languages) );

      if (translation_languages.hasOwnProperty(existing_language)) {
        var existing_language_details =
          translation_languages[existing_language];
        //console.log("Existing Language Details: " + JSON.stringify( existing_language_details) );
        if (
          typeof existing_language_details == "object" &&
          existing_language_details.hasOwnProperty("source")
        ) {
          var translation_src_url = existing_language_details.source;
          //console.log("Translation Source URL: " + translation_src_url);
          hlpt_custom_request(translation_src_url, (j) => {
            //console.log("Location ID inside custom request: " + location_id);
            hlpt_translation_update(j);
            window.lang_data = j;
            //document.getElementById('dashboard').addEventListener( 'click', reset_translate_count );
            //if(document.body.contains( document.querySelector(".hl_wrapper") )) { document.querySelector(".hl_wrapper").addEventListener( 'click', reset_translate_count ); }

            if (document.body.contains(document.querySelector(".hl_wrapper"))) {
              var myElementToCheckIfClicksAreInsideOf =
                document.querySelector(".hl_wrapper");
              document.body.addEventListener("click", function (event) {
                if (
                  myElementToCheckIfClicksAreInsideOf.contains(event.target) ||
                  myElementToCheckIfClicksAreInsideOf == event.target
                ) {
                  reset_translate_count();
                }
              });
            }
            if (document.body.contains(document.getElementById("navbar"))) {
              document
                .getElementById("navbar")
                .addEventListener("click", reset_translate_count);
            }
            if (document.body.contains(document.getElementById("sidebar-v2"))) {
              document
                .getElementById("sidebar-v2")
                .addEventListener("click", reset_translate_count);
            }
            //window.addEventListener( 'locationchange', reset_translate_count );
            hlpt_observe_location_change();
          });
        }
      }
    }
  };

  hlpt_loadEmbed(
    "https://cdn.hlprotools.com/resources/widgets/1/hlptapi/?k=" +
      the_ark() +
      "&s=translation&v=" +
      Date.now(),
    function (j) {
      let r = JSON.parse(j);
      if (r.e) {
        hlpt_loadFR(
          "https://1793453544.rsc.cdn77.org/hlpttranslation/resources/findAndReplaceDOMText.js",
          function () {
            hlpt_translation_execute();
          }
        );
      }
    }
  );
})();
