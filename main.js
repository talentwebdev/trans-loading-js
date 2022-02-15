//Admin Cls
const _0x364d = [
  "body",
  "classList",
  "contains",
  "querySelectorAll",
  "1069kyynBk",
  "readyState",
  "loading",
  "getAttribute",
  "301zbiwkV",
  "541eQbono",
  "add",
  "140429hmLssr",
  "3754PfBGUX",
  ".hl_header--controls\x20a",
  "#app",
  "1804XuCkoe",
  "DOMContentLoaded",
  "3073HViFze",
  "href",
  "IsAdmin",
  "11672NelXYS",
  "78CvlvuJ",
  "addEventListener",
  "534989pbrZgS",
  "7SBSICT",
  "--agency",
];
const _0x1267 = function (_0x5343d6, _0x18ed81) {
  _0x5343d6 = _0x5343d6 - 0x7d;
  let _0x364dcb = _0x364d[_0x5343d6];
  return _0x364dcb;
};
(function (_0xddd62b, _0x52873d) {
  const _0x40d39e = _0x1267;
  while (!![]) {
    try {
      const _0x57ffda =
        -parseInt(_0x40d39e(0x95)) +
        -parseInt(_0x40d39e(0x85)) * -parseInt(_0x40d39e(0x81)) +
        -parseInt(_0x40d39e(0x8e)) * parseInt(_0x40d39e(0x92)) +
        parseInt(_0x40d39e(0x96)) +
        parseInt(_0x40d39e(0x88)) * parseInt(_0x40d39e(0x84)) +
        -parseInt(_0x40d39e(0x87)) +
        parseInt(_0x40d39e(0x93)) * parseInt(_0x40d39e(0x7f));
      if (_0x57ffda === _0x52873d) break;
      else _0xddd62b["push"](_0xddd62b["shift"]());
    } catch (_0x4db144) {
      _0xddd62b["push"](_0xddd62b["shift"]());
    }
  }
})(_0x364d, 0x4a339);
class hlpt_agency_user_style {
  ["i"]() {
    const _0x4f4394 = (_0xa55e3e) => {
        const _0x2b853a = _0x1267;
        document[_0x2b853a(0x8f)] != _0x2b853a(0x90)
          ? _0xa55e3e()
          : document[_0x2b853a(0x86)](_0x2b853a(0x80), _0xa55e3e);
      },
      _0x78b63f = () => {
        const _0x28d712 = _0x1267,
          _0x300105 = document["querySelector"](_0x28d712(0x7e)),
          _0x284c0c = { attributes: !![] },
          _0x8cacf1 = new MutationObserver(function (_0x35bd2a) {
            _0x543e5c(), _0x5b89c2();
          });
        _0x8cacf1["observe"](_0x300105, _0x284c0c);
      },
      _0x543e5c = () => {
        const _0x5215fd = _0x1267;
        var _0x568469 = document[_0x5215fd(0x8d)](_0x5215fd(0x7d)),
          _0x40c845,
          _0x51f6ba = "",
          _0x55bf3b = 0x0;
        for (_0x40c845 = 0x0; _0x40c845 < _0x568469["length"]; _0x40c845++) {
          _0x51f6ba = _0x568469[_0x40c845][_0x5215fd(0x91)](_0x5215fd(0x82));
          if (_0x51f6ba == "/accounts/") {
            _0x55bf3b = 0x1;
            break;
          }
        }
        _0x55bf3b && _0x4842fa();
      },
      _0x5b89c2 = () => {
        const _0x4594c1 = _0x1267;
        var _0x2d93d7 = document["querySelector"](".hl_header");
        document[_0x4594c1(0x8a)][_0x4594c1(0x8c)](_0x2d93d7) &&
          _0x2d93d7["classList"]["contains"](_0x4594c1(0x89)) &&
          _0x4842fa();
      },
      _0x4842fa = () => {
        const _0x162bff = _0x1267;
        document[_0x162bff(0x8a)][_0x162bff(0x8b)][_0x162bff(0x94)](
          _0x162bff(0x83)
        );
      };
    _0x4f4394(() => {
      _0x543e5c(), _0x5b89c2(), _0x78b63f();
    });
  }
}
new hlpt_agency_user_style()["i"]();

const hlpt_help_get_cookie = (cname) => {
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

//Multiple SH
window.hlpt = window.hlpt || {};
window.hlpt.cws = {
  23621616052535:
    "Y2xpZW50SWQ9NTA1MCZob3N0TmFtZT1zZXRzaG93c29sZC5zdXBwb3J0aGVyby5pbw==",
  39871616052655:
    "Y2xpZW50SWQ9NTA1MiZob3N0TmFtZT1jaGlyb2RvbWluYW5jZS5zdXBwb3J0aGVyby5pbw==",
  92831616052676:
    "Y2xpZW50SWQ9NTA1MyZob3N0TmFtZT1hdXRvbWF0ZW15cHJhY3RpY2Uuc3VwcG9ydGhlcm8uaW8=",
  45941616052675:
    "Y2xpZW50SWQ9NTA1NiZob3N0TmFtZT1yb3NlcmV2ZW51ZS5zdXBwb3J0aGVyby5pbw==",
  57471616052823:
    "Y2xpZW50SWQ9NTA1NyZob3N0TmFtZT1pbGlzdHRlY2guc3VwcG9ydGhlcm8uaW8=",
  31181616052729:
    "Y2xpZW50SWQ9NTA1OCZob3N0TmFtZT1nb3BpcGVsaW5lcHJvLnN1cHBvcnRoZXJvLmlv",
  10521616052551:
    "Y2xpZW50SWQ9NTA1MSZob3N0TmFtZT1sZWFkczJjbGllbnRzLnN1cHBvcnRoZXJvLmlv",
  73341616052485:
    "Y2xpZW50SWQ9NTA4OCZob3N0TmFtZT1yZWlyZXBseS5zdXBwb3J0aGVyby5pbw==",
  44911616052741:
    "Y2xpZW50SWQ9NTA1NSZob3N0TmFtZT12aXAzNjAuc3VwcG9ydGhlcm8uaW8=",
  53401616052739:
    "Y2xpZW50SWQ9NTA1NCZob3N0TmFtZT1zd2ltbGF1bmNoLnN1cHBvcnRoZXJvLmlv",
  15651620237287:
    "Y2xpZW50SWQ9NTEyMSZob3N0TmFtZT1mb2xsb3d1cGdlbmVpdXMuc3VwcG9ydGhlcm8uaW8=",
  90801616052654:
    "Y2xpZW50SWQ9NTEwNyZob3N0TmFtZT1wcm9kdWNlcmZ1bm5lbHMuc3VwcG9ydGhlcm8uaW8=",
  23921618858921:
    "Y2xpZW50SWQ9NTE0OSZob3N0TmFtZT1hZ2VudGh1Yi5zdXBwb3J0aGVyby5pbw==",
  44871616052686:
    "Y2xpZW50SWQ9NTE0NyZob3N0TmFtZT10aGVibHVwcmludC5zdXBwb3J0aGVyby5pbw==",
  21121622659110:
    "Y2xpZW50SWQ9NTE0OCZob3N0TmFtZT10dXJiby10ZXh0LnN1cHBvcnRoZXJvLmlv",
  40781616052494:
    "Y2xpZW50SWQ9NTE1NyZob3N0TmFtZT1nb2RhcHByLnN1cHBvcnRoZXJvLmlv",
  57981626899601:
    "Y2xpZW50SWQ9NTE3NiZob3N0TmFtZT1hdHRyYWN0emVuLnN1cHBvcnRoZXJvLmlv",
  30291624053449:
    "Y2xpZW50SWQ9NTE3OSZob3N0TmFtZT1icmVhY2hlcmNybS5zdXBwb3J0aGVyby5pbw==",
  73851623459126:
    "Y2xpZW50SWQ9NTE3OCZob3N0TmFtZT1idXN0bGluLnN1cHBvcnRoZXJvLmlv",
  23371628214861:
    "Y2xpZW50SWQ9NTE5MCZob3N0TmFtZT1sZWFkYm9zcy5zdXBwb3J0aGVyby5pbw==",
  39311617907706:
    "Y2xpZW50SWQ9NTE5NCZob3N0TmFtZT1sZWFkZHJhZ29uLnN1cHBvcnRoZXJvLmlv",
  51411629994773:
    "Y2xpZW50SWQ9NTIyMSZob3N0TmFtZT11cGJpenAuc3VwcG9ydGhlcm8uaW8=",
  88351616052640:
    "Y2xpZW50SWQ9NTIyMiZob3N0TmFtZT1jb2FjaGJveC5zdXBwb3J0aGVyby5pbw==",
  75731625855440:
    "Y2xpZW50SWQ9NTE5MSZob3N0TmFtZT1ydWxleW91cmJ1c2luZXNzLnN1cHBvcnRoZXJvLmlv",
  99381629500670:
    "Y2xpZW50SWQ9NTIzNyZob3N0TmFtZT1tb3VudGFpbnJpZGdlbWFya2V0aW5nLnN1cHBvcnRoZXJvLmlv",
  17281632825202:
    "Y2xpZW50SWQ9NTIzNiZob3N0TmFtZT1jYWFtYXJrZXRlcnMuc3VwcG9ydGhlcm8uaW8=",
  95701630010081:
    "Y2xpZW50SWQ9NTI0NSZob3N0TmFtZT1zeWJyd2FyZS5zdXBwb3J0aGVyby5pbw==",
  95241626907258:
    "Y2xpZW50SWQ9NTI1NyZob3N0TmFtZT1tYXNob3JlbWV0aG9kLnN1cHBvcnRoZXJvLmlv",
  75421632510238:
    "Y2xpZW50SWQ9NTI2NCZob3N0TmFtZT1wdXJlZHJlYW1idWlsZGVyLnN1cHBvcnRoZXJvLmlv",
  42961616052509:
    "Y2xpZW50SWQ9NTI4OCZob3N0TmFtZT1tb3ZlbWVudGZvcm11bGEuc3VwcG9ydGhlcm8uaW8=",
  51421639333304:
    "Y2xpZW50SWQ9NTI5NiZob3N0TmFtZT1jb2FjaG1hdGl4LnN1cHBvcnRoZXJvLmlv",
  25841638565918:
    "Y2xpZW50SWQ9NTMwOCZob3N0TmFtZT10aGlyZGVudHJ5LnN1cHBvcnRoZXJvLmlv",
  95341636843317:
    "Y2xpZW50SWQ9NTMxOSZob3N0TmFtZT1qb3VybmV5Y2FyZS5zdXBwb3J0aGVyby5pbw==",
};

var custom_key =
  "Y2xpZW50SWQ9NDc4MyZob3N0TmFtZT1oZWxwZGVza3RlYW0uc3VwcG9ydGhlcm8uaW8"; //Default

var custom_key_multilang = {};
custom_key_multilang["es"] =
  "Y2xpZW50SWQ9NTEzOCZob3N0TmFtZT1lcXVpcG9kZWF5dWRhLnN1cHBvcnRoZXJvLmlv";
custom_key_multilang["fr"] =
  "Y2xpZW50SWQ9NTIzMCZob3N0TmFtZT1mcmVuY2guc3VwcG9ydGhlcm8uaW8=";

var custom_key_lw = {};
custom_key_lw["1"] =
  "Y2xpZW50SWQ9NTA4OCZob3N0TmFtZT1yZWlyZXBseS5zdXBwb3J0aGVyby5pbw=="; //Default

var hlpt_help_selected_lang = hlpt_help_get_cookie("hlpt_user_lang");
if (
  hlpt_help_selected_lang &&
  custom_key_multilang.hasOwnProperty(hlpt_help_selected_lang)
) {
  custom_key = custom_key_multilang[hlpt_help_selected_lang];
}

const currentScript = document.currentScript;
const translation_src_url =
  "https://cdn.jsdelivr.net/gh/talentwebdev/trans-loading-js@1.0.4/translation.js?v=" +
  Date.now();
const hlpt_load_translation_support = function (ref_key) {
  if (currentScript.hasAttribute("data-translations")) {
    do_translation = currentScript.getAttribute("data-translations");
    if (do_translation == "true") {
      var script = document.createElement("script");
      script.setAttribute("id", "hlpt-translate");
      script.type = "text/javascript";
      script.src = translation_src_url;
      script.setAttribute("data-translate-ark", ref_key);
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  }
};

//Implement
let dh = 0;
let cl = location.host;
const wurl =
  "https://cdn.hlprotools.com/resources/widgets/1/?d=" +
  cl +
  "&v=" +
  Date.now();
$.getJSON(wurl).done(function (a) {
  if (a.e) {
    hlpt_SupportPopupFix();
    if (a.rk) {
      var ref_key = a.rk;
      hlpt_load_translation_support(ref_key);
      if (window.hlpt.cws.hasOwnProperty(ref_key)) {
        custom_key = window.hlpt.cws[ref_key];
      }
      if (a.lw) {
        custom_key = custom_key_lw[a.lw];
      }
    }
    $.getScript(
      "https://d29l98y0pmei9d.cloudfront.net/js/widget.min.js?k=" + custom_key
    ).done(function (s, t) {
      dh = 1;
      hlpt_jq_cccss();
      d();
      hlpt_autoload_support();
    });
    hlpt_SupportPopupFix();
  }
});
var _0xd0f3 = [
  "\x44\x4F\x4D\x53\x75\x62\x74\x72\x65\x65\x4D\x6F\x64\x69\x66\x69\x65\x64",
  "\x23\x61\x70\x70",
  "\x68\x65\x6C\x70\x44\x65\x73\x6B\x2D\x6C\x69",
  "\x48\x65\x6C\x70\x20\x4C\x69\x62\x72\x61\x72\x79",
  "\x66\x61\x73\x20\x66\x61\x2D\x71\x75\x65\x73\x74\x69\x6F\x6E\x2D\x63\x69\x72\x63\x6C\x65",
  "\x23",
  "\x69\x64",
  "\x6C\x65\x6E\x67\x74\x68",
  "\x69\x66\x72\x61\x6D\x65",
  "\x3C\x6C\x69\x20\x69\x64\x3D\x22",
  "\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x23\x22\x3E\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22",
  "\x69\x63\x6F\x6E",
  "\x22\x3E\x3C\x2F\x69\x3E\x3C\x73\x70\x61\x6E\x3E",
  "\x6E\x61\x6D\x65",
  "\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x61\x3E\x3C\x2F\x6C\x69\x3E",
  "\x61\x70\x70\x65\x6E\x64",
  "\x23\x61\x70\x70\x20\x23\x6E\x61\x76\x2D\x6C\x69\x6E\x6B\x73",
  "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74",
  "\x63\x75\x72\x72\x65\x6E\x74\x54\x61\x72\x67\x65\x74",
  "\x6C\x6F\x67",
  "\x2E\x68\x6C\x5F\x77\x72\x61\x70\x70\x65\x72",
  "\x65\x6D\x70\x74\x79",
  "\x3C\x73\x65\x63\x74\x69\x6F\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x68\x6C\x5F\x77\x72\x61\x70\x70\x65\x72\x2D\x2D\x69\x6E\x6E\x65\x72\x20\x22\x3E\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72\x2D\x66\x6C\x75\x69\x64\x22\x3E\x3C\x69\x66\x72\x61\x6D\x65\x20\x73\x74\x79\x6C\x65\x3D\x22\x77\x69\x64\x74\x68\x3A\x20\x31\x30\x30\x25\x3B\x20\x68\x65\x69\x67\x68\x74\x3A\x20\x31\x30\x30\x76\x68\x3B\x20\x6F\x76\x65\x72\x66\x6C\x6F\x77\x3A\x20\x73\x68\x6F\x77\x3B\x22\x20\x73\x72\x63\x3D\x22",
  "\x75\x72\x6C",
  "\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x30\x30\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x31\x30\x30\x22\x20\x73\x63\x72\x6F\x6C\x6C\x69\x6E\x67\x3D\x22\x79\x65\x73\x22\x3E\x49\x66\x72\x61\x6D\x65\x73\x20\x6E\x6F\x74\x20\x73\x75\x70\x70\x6F\x72\x74\x65\x64\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E\x3C\x2F\x64\x69\x76\x3E\x3C\x2F\x73\x65\x63\x74\x69\x6F\x6E\x3E",
  "\x6C\x6F\x63\x61\x74\x69\x6F\x6E",
  "\x68\x72\x65\x66",
  "\x63\x6C\x69\x63\x6B",
  "\x2E\x72\x6F\x75\x74\x65\x72\x2D\x6C\x69\x6E\x6B\x2D\x65\x78\x61\x63\x74\x2D\x61\x63\x74\x69\x76\x65",
  "\x61\x63\x74\x69\x76\x65",
  "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73",
  "\x72\x6F\x75\x74\x65\x72\x2D\x6C\x69\x6E\x6B\x2D\x65\x78\x61\x63\x74\x2D\x61\x63\x74\x69\x76\x65",
  "\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65",
  "\x20\x72\x6F\x75\x74\x65\x72\x2D\x6C\x69\x6E\x6B\x2D\x65\x78\x61\x63\x74\x2D\x61\x63\x74\x69\x76\x65\x20\x61\x63\x74\x69\x76\x65",
  "\x22\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22",
  "\x22\x20\x6F\x6E\x43\x6C\x69\x63\x6B\x3D\x22\x77\x69\x6E\x64\x6F\x77\x2E\x73\x75\x70\x70\x6F\x72\x74\x48\x65\x72\x6F\x57\x69\x64\x67\x65\x74\x2E\x73\x68\x6F\x77\x28\x29\x3B\x22\x3E\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22",
  "\x72\x65\x6D\x6F\x76\x65",
  "\x65\x61\x63\x68",
  "\x6F\x6E",
  "\x62\x6F\x64\x79",
  "\x72\x65\x61\x64\x79",
];
$(document)[_0xd0f3[40]](function () {
  $(_0xd0f3[39])[_0xd0f3[38]](_0xd0f3[0], _0xd0f3[1], function () {
    $[_0xd0f3[37]](
      [
        {
          id: _0xd0f3[2],
          name: _0xd0f3[3],
          icon: _0xd0f3[4],
          url: _0xd0f3[5],
          iframe: !1,
        },
      ],
      function (_0x5988x1, _0x5988x2) {
        var _0x5988x3 = $(_0xd0f3[5] + _0x5988x2[_0xd0f3[6]]);
        (show = !0),
          !_0x5988x3[_0xd0f3[7]] && show
            ? _0x5988x2[_0xd0f3[8]]
              ? ($(_0xd0f3[16])[_0xd0f3[15]](
                  _0xd0f3[9] +
                    _0x5988x2[_0xd0f3[6]] +
                    _0xd0f3[10] +
                    _0x5988x2[_0xd0f3[11]] +
                    _0xd0f3[12] +
                    _0x5988x2[_0xd0f3[13]] +
                    _0xd0f3[14]
                ),
                $(_0xd0f3[5] + _0x5988x2[_0xd0f3[6]])[_0xd0f3[27]](function (
                  _0x5988x1
                ) {
                  _0x5988x1[_0xd0f3[17]](),
                    console[_0xd0f3[19]](_0x5988x1[_0xd0f3[18]], _0x5988x2);
                  var _0x5988x3 = $(_0xd0f3[20]);
                  _0x5988x3[_0xd0f3[21]](),
                    _0x5988x3[_0xd0f3[15]](
                      _0xd0f3[22] + _0x5988x2[_0xd0f3[23]] + _0xd0f3[24]
                    ),
                    $(_0xd0f3[28])[_0xd0f3[27]](function (_0x5988x1) {
                      _0x5988x1[_0xd0f3[17]](),
                        (window[_0xd0f3[25]] =
                          window[_0xd0f3[25]][_0xd0f3[26]]);
                    }),
                    $(_0xd0f3[28])[_0xd0f3[30]](_0xd0f3[29]),
                    $(_0xd0f3[28])[_0xd0f3[30]](_0xd0f3[31]),
                    (_0x5988x1[_0xd0f3[18]][_0xd0f3[32]] += _0xd0f3[33]);
                }))
              : $(_0xd0f3[16])[_0xd0f3[15]](
                  _0xd0f3[9] +
                    _0x5988x2[_0xd0f3[6]] +
                    _0xd0f3[34] +
                    _0x5988x2[_0xd0f3[23]] +
                    _0xd0f3[35] +
                    _0x5988x2[_0xd0f3[11]] +
                    _0xd0f3[12] +
                    _0x5988x2[_0xd0f3[13]] +
                    _0xd0f3[14]
                )
            : _0x5988x3[_0xd0f3[7]] && !show && _0x5988x3[_0xd0f3[36]]();
      }
    );
  });
});
function d() {
  $(document).ready(function () {
    if (dh) {
      hlpt_sd();
      $("body").on("DOMSubtreeModified", "#app", function () {
        hlpt_sd();
      });
    }
  });
}
function hlpt_sd() {
  var linkId = "helpDeskCtrl";
  var linkIcon = "fas fa-question";
  var linkURL = "javascript:void(0);";
  var linkName = "Help Library";
  var div = $("#" + linkId);
  if (!div.length) {
    let nh =
      '<a id="' +
      linkId +
      '" href="' +
      linkURL +
      '" onclick="window.supportHeroWidget.show();" class="btn btn-circle hdctrl hdctrlOrd"><i class="' +
      linkIcon +
      '"></i><span class="sr-only">' +
      linkName +
      "</span></a>";
    $(".hl_header--controls").prepend(nh);
  }
}

var _0x13d1 = [
  "1148641lXrAfF",
  "2065759NAgGkf",
  "55219CFLEdv",
  "380229neqbBg",
  "data-email",
  "content@default.com",
  "body",
  "48803YKucmC",
  "b6168da9bb1fb5fa4d7b25c39d6d3fd7",
  "supportHeroWidget",
  "getAttribute",
  "contains",
  "1279792MOJwxC",
  "11oHWPQB",
  "hlpt-njq-sso",
  "undefined",
  "13cwjuDW",
  "2dbhaGd",
  "31649cAbFBM",
  "7nxUfTg",
];
var _0x4fe5 = function (_0x5db47b, _0x3e0215) {
  _0x5db47b = _0x5db47b - 0x1a7;
  var _0x13d11c = _0x13d1[_0x5db47b];
  return _0x13d11c;
};
var _0x3a246c = _0x4fe5;
(function (_0x5ca4d3, _0x435be2) {
  var _0x584778 = _0x4fe5;
  while (!![]) {
    try {
      var _0x19cb88 =
        -parseInt(_0x584778(0x1b0)) +
        parseInt(_0x584778(0x1b1)) * -parseInt(_0x584778(0x1b6)) +
        parseInt(_0x584778(0x1a7)) +
        parseInt(_0x584778(0x1ba)) * -parseInt(_0x584778(0x1b4)) +
        -parseInt(_0x584778(0x1b8)) +
        -parseInt(_0x584778(0x1b7)) * parseInt(_0x584778(0x1ab)) +
        parseInt(_0x584778(0x1b9)) * parseInt(_0x584778(0x1b5));
      if (_0x19cb88 === _0x435be2) break;
      else _0x5ca4d3["push"](_0x5ca4d3["shift"]());
    } catch (_0x28eb06) {
      _0x5ca4d3["push"](_0x5ca4d3["shift"]());
    }
  }
})(_0x13d1, 0xa4f7b);
function hlptSsoForSuppportHero(_0x4b1303, _0x414ca6) {
  var _0x3e12fd = _0x4fe5;
  if (typeof window[_0x3e12fd(0x1ad)] !== _0x3e12fd(0x1b3)) {
    var _0x5e16c9 = { sso: { ssoAuthKey: _0x4b1303, ssoUser: _0x414ca6 } };
    window[_0x3e12fd(0x1ad)]["onShow"](function () {
      var _0x2b06a0 = _0x3e12fd;
      window[_0x2b06a0(0x1ad)]["track"](_0x5e16c9);
    });
  } else
    setTimeout(function () {
      hlptSsoForSuppportHero(_0x4b1303, _0x414ca6);
    }, 0xfa);
}
var hlpt_sso_uemail = _0x3a246c(0x1a9),
  hlpt_sso_att = document["getElementById"](_0x3a246c(0x1b2));
document[_0x3a246c(0x1aa)][_0x3a246c(0x1af)](hlpt_sso_att) &&
  hlpt_sso_att["hasAttribute"](_0x3a246c(0x1a8)) &&
  (hlpt_sso_uemail = hlpt_sso_att[_0x3a246c(0x1ae)](_0x3a246c(0x1a8)));
hlpt_sso_uemail && hlptSsoForSuppportHero(_0x3a246c(0x1ac), hlpt_sso_uemail);

function hlpt_jq_cccss() {
  var t = document.createElement("style");
  t.id = "checkin_css";
  s = `.hdctrl{
        color:#FFFFFF; 
        background-color:#000000; 
        border-color:rgba(0, 0, 0, 0.1);
    }
    .hdctrl:hover{
        
    }
    @media (max-width: 768px){
        
    }`;
  t.innerHTML = s;
  document.getElementsByTagName("head")[0].appendChild(t);
}

const openSupportPopup = function () {
  var hlpt_s_button = document.querySelector("#helpDeskCtrl");
  if (!document.body.contains(hlpt_s_button)) {
    setTimeout(openSupportPopup, 250);
  } else {
    if (!document.body.classList.contains("spopened")) {
      hlpt_s_button.click();
      var hlpt_import_popup = document.querySelector("#supporthero-iframe");
      if (document.body.contains(hlpt_import_popup)) {
        document.body.classList.add("spopened");
      }
    }
  }
};

const hlpt_autoload_support = function () {
  var page_url = document.location.href;
  if (page_url.includes("view=support")) {
    openSupportPopup();
  }
};

//SH Fix
const _0x7571 = [
  ".supporthero-button",
  "#supporthero-container",
  "448879JGlMPl",
  "164ThUJlz",
  "3524jkgdez",
  "1vdVtqr",
  "body",
  "none",
  "1691917OjyeJX",
  "style",
  "supporthero-hide",
  "284954ndKPvS",
  "getElementById",
  "297033fLSIuE",
  "423625ZBnGMp",
  "658689BZEqrG",
  "display",
  "inline",
  "contains",
  "querySelector",
];
(function (_0x170f51, _0x59410b) {
  const _0x52e823 = _0x1a83;
  while (!![]) {
    try {
      const _0x5ef325 =
        -parseInt(_0x52e823(0xf1)) +
        parseInt(_0x52e823(0xfd)) +
        -parseInt(_0x52e823(0xea)) +
        -parseInt(_0x52e823(0xf2)) * parseInt(_0x52e823(0xf3)) +
        -parseInt(_0x52e823(0xfc)) +
        parseInt(_0x52e823(0xfa)) +
        parseInt(_0x52e823(0xf7)) * parseInt(_0x52e823(0xf4));
      if (_0x5ef325 === _0x59410b) break;
      else _0x170f51["push"](_0x170f51["shift"]());
    } catch (_0x1bb6d7) {
      _0x170f51["push"](_0x170f51["shift"]());
    }
  }
})(_0x7571, 0x660a7);
function _0x1a83(_0x58a153, _0x1dbcf3) {
  _0x58a153 = _0x58a153 - 0xea;
  let _0x75710f = _0x7571[_0x58a153];
  return _0x75710f;
}
function hlpt_SupportPopupFix() {
  const _0x37771b = _0x1a83;
  if (
    document["body"][_0x37771b(0xed)](
      document["querySelector"](_0x37771b(0xf0))
    )
  ) {
    const _0x4d8873 = document[_0x37771b(0xee)](_0x37771b(0xf0)),
      _0x45663e = document["querySelector"](_0x37771b(0xef)),
      _0x2f7efd = { attributes: !![], childList: !![] },
      _0x438053 = new MutationObserver(function (_0x50f2e9) {
        const _0x5c6380 = _0x37771b;
        if (document[_0x5c6380(0xf5)][_0x5c6380(0xed)](_0x4d8873)) {
          var _0x21f87e = _0x4d8873["style"][_0x5c6380(0xeb)],
            _0x584888 = _0x4d8873[_0x5c6380(0xf8)]["opacity"];
          _0x584888 == 0x0 &&
            _0x21f87e == _0x5c6380(0xec) &&
            ((_0x4d8873[_0x5c6380(0xf8)][_0x5c6380(0xeb)] = _0x5c6380(0xf6)),
            document[_0x5c6380(0xf5)][_0x5c6380(0xed)](_0x45663e) &&
              (document[_0x5c6380(0xfb)](_0x5c6380(0xf9))["style"][
                _0x5c6380(0xeb)
              ] = "none"));
        }
      });
    _0x438053["observe"](_0x4d8873, _0x2f7efd);
  } else
    setTimeout(function () {
      hlpt_SupportPopupFix();
    }, 0xfa);
}
