const axios = require("axios");

var $url="https://iptv345.com/";

var $code_arr= []

async function initPage(uri) {
    var headers = {
      Referer: $url,
      "User-Agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/124.0.0.0",
    };
    const response = await axios.get($url+uri, { headers: headers });
    var [, jsstr] = /<script>(var[^<]+)<\/script>/.exec(response.data);

    // var [,code]=/<option value="([^"]+)">/.exec(response.data)
    // $code = code

    const regex = /<option\s+value="([^"]+)"[^>]*>(.*?)<\/option>/g;  
    let match;  
    const values = [];  
    while ((match = regex.exec(response.data)) !== null) {  
        values.push(match[1]); 
    }
    $code_arr = values
    return jsstr
}


function execVm(jsstr) {
    //console.log(jsstr)
  eval(jsstr)
 // console.log(string)

  var document = {};
  document.write = (str) => {
    document.JS_STR = str;
  };

  var _0xod8 = "jsjiami.com.v7";
  function _0x417c(_0x582f21, _0x5489ab) {
    var _0xf20bc3 = _0x43a2();
    return (
      (_0x417c = function (_0x35b9da, _0x49e62f) {
        _0x35b9da = _0x35b9da - 0x103;
        var _0x3229c1 = _0xf20bc3[_0x35b9da];
        if (_0x417c["viVaJN"] === undefined) {
          var _0x43a2f3 = function (_0x32ebf8) {
            var _0x38f25c =
              "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
            var _0x453073 = "",
              _0xa60db9 = "";
            for (
              var _0x4bc8e9 = 0x0, _0x1390d7, _0x1600a6, _0x51f51b = 0x0;
              (_0x1600a6 = _0x32ebf8["charAt"](_0x51f51b++));
              ~_0x1600a6 &&
              ((_0x1390d7 =
                _0x4bc8e9 % 0x4 ? _0x1390d7 * 0x40 + _0x1600a6 : _0x1600a6),
              _0x4bc8e9++ % 0x4)
                ? (_0x453073 += String["fromCharCode"](
                    0xff & (_0x1390d7 >> ((-0x2 * _0x4bc8e9) & 0x6))
                  ))
                : 0x0
            ) {
              _0x1600a6 = _0x38f25c["indexOf"](_0x1600a6);
            }
            for (
              var _0x2abef7 = 0x0, _0x395222 = _0x453073["length"];
              _0x2abef7 < _0x395222;
              _0x2abef7++
            ) {
              _0xa60db9 +=
                "%" +
                ("00" + _0x453073["charCodeAt"](_0x2abef7)["toString"](0x10))[
                  "slice"
                ](-0x2);
            }
            return decodeURIComponent(_0xa60db9);
          };
          var _0x1f2be0 = function (_0x4447e9, _0x1be30a) {
            var _0x5e39da = [],
              _0x54022e = 0x0,
              _0x1c2cb0,
              _0x4c1511 = "";
            _0x4447e9 = _0x43a2f3(_0x4447e9);
            var _0x3c60c1;
            for (_0x3c60c1 = 0x0; _0x3c60c1 < 0x100; _0x3c60c1++) {
              _0x5e39da[_0x3c60c1] = _0x3c60c1;
            }
            for (_0x3c60c1 = 0x0; _0x3c60c1 < 0x100; _0x3c60c1++) {
              (_0x54022e =
                (_0x54022e +
                  _0x5e39da[_0x3c60c1] +
                  _0x1be30a["charCodeAt"](_0x3c60c1 % _0x1be30a["length"])) %
                0x100),
                (_0x1c2cb0 = _0x5e39da[_0x3c60c1]),
                (_0x5e39da[_0x3c60c1] = _0x5e39da[_0x54022e]),
                (_0x5e39da[_0x54022e] = _0x1c2cb0);
            }
            (_0x3c60c1 = 0x0), (_0x54022e = 0x0);
            for (
              var _0x50632f = 0x0;
              _0x50632f < _0x4447e9["length"];
              _0x50632f++
            ) {
              (_0x3c60c1 = (_0x3c60c1 + 0x1) % 0x100),
                (_0x54022e = (_0x54022e + _0x5e39da[_0x3c60c1]) % 0x100),
                (_0x1c2cb0 = _0x5e39da[_0x3c60c1]),
                (_0x5e39da[_0x3c60c1] = _0x5e39da[_0x54022e]),
                (_0x5e39da[_0x54022e] = _0x1c2cb0),
                (_0x4c1511 += String["fromCharCode"](
                  _0x4447e9["charCodeAt"](_0x50632f) ^
                    _0x5e39da[
                      (_0x5e39da[_0x3c60c1] + _0x5e39da[_0x54022e]) % 0x100
                    ]
                ));
            }
            return _0x4c1511;
          };
          (_0x417c["CxNkgD"] = _0x1f2be0),
            (_0x582f21 = arguments),
            (_0x417c["viVaJN"] = !![]);
        }
        var _0x417c47 = _0xf20bc3[0x0],
          _0x4ad534 = _0x35b9da + _0x417c47,
          _0x469c8b = _0x582f21[_0x4ad534];
        return (
          !_0x469c8b
            ? (_0x417c["bGYXel"] === undefined && (_0x417c["bGYXel"] = !![]),
              (_0x3229c1 = _0x417c["CxNkgD"](_0x3229c1, _0x49e62f)),
              (_0x582f21[_0x4ad534] = _0x3229c1))
            : (_0x3229c1 = _0x469c8b),
          _0x3229c1
        );
      }),
      _0x417c(_0x582f21, _0x5489ab)
    );
  }
  function _0x43a2() {
    var _0x336cb9 = (function () {
      return [
        _0xod8,
        "ujOIswjibyaUQmSLWiwRO.lYkcPoLmwL.SgOv7Hq==",
        "wmoAnSoZbW",
        "W5JdG1XAWRW",
        "W6zOdelcSq",
        "iCohWQm6wG",
        "W4Hbbg/cVZjfWPZcHmo5W6FdGSoEbJKwzZ5VlSk9fSozlmkUFCkAW5tdOSodW5VdRNGJFviiCSozW414bq1NWOWDWPOnW6tdPv7cOCkwWPXtieCEWPa9aGjHhSoRBmo5wGvzW4XuW6RdQCoeW5rGq1P3C2RcKCkYkq5TiYddMtpcILb9W6ibWP1JhSoOxmoyWQK6WPbXW6L6xL3cTSo4W5jbWQrhW4ddKfquW6iTW6VdHCoaiZ4qWQ8nWOFcOCoIfgq+rCohWOhdGZRdLmoPW7iCre3cTComdmkkWPVdQ17cOSkRWRZcPL/cUIWkBurLW6rQWRDkWPtdTSoknSoUtCk7WPxdJSoQB8oNWOSRWQzhW4fsW5fHW5CQWO45WQL8sML8WPpdISomW6/cIG/dQ0zQkWRdJt3cGN9zlmkZWOhdLqxcRa3dRCkrwJdcImkuW4GqWORcSHpdHujiFhxcQCojWQyLWOZcGLqPW4pdO1NdT3hdNmkTdSkZW6RdPwVdGLpcLSoLaSolW58ejrpdPfupb8oXr8oRomo1CComWQKLW6pdLCkXW5TseZq+W6vSr8o1W73cR8kGW44uW4eR",
        "hCk2WQlcVCks",
        "imkeW4jCbq",
        "wrVcTdGgyCojW5xcLCoyWQ1JWPjeW7ldJmo3W7JcL15CWO7dRGH0W6pcN2mhW64lB8kBD8kcz8o2FCofW7NcTKOtWRiVW60JqSk7sLXUCmoQWQhdK8kvAIOoW6FcRrDkWPeiW4jFW6GaoCogsgT7WQbuWRS4q8kJiNhdQ8k5W7pcSSkMhmkkWQSxWQClW5xcPx07W5ZdL1JdRSkHxM1veY3dHZddUSkmWOqNW53cL0OfWOJcHJVcKfeKbHJdRSo5wSkRiJNcO3T/WQBcSCotWPVcJ8kdxxj4W5dcGdZcVY4lr8oKBCkiw8koASkwW4jgWOZdVfi4bmkRoSkzrZTav3jXWOvwer7dRG7dRSkGWPDeW7ZcMmoVACk9p2hcNeBdHa1UWOtdN8ogW5eLW63dT2vxqSkQwv5YBSojWORdTKLCWPHdt8oFWQ9YWRGfBSoEbw8bW7iNW5mSW6WaEmkjvmoIvr7dN2K9W7zBwb/dSJxcQSkAlCoDW5udWQldSh1cjg3dJtlcS0DqWQ1jW7ddKSkLyblcHmo6W5yIqX3dUuiAWPRcHSkojSkTh3iwWO83fmoIW6hcVuxcUSkqWQ1IWQJdLhyvW47cHmo4WPpdT8oVW7pcKCkAWPhdRqddHwfaWOhdIsxdUdpdKCoVWRGpW4mIW6pdJ8olW65jW5L9W4BdRY8ykXTgW5FcQW/dSmkfCXBdU8k+icmOWRhcMXldMhWMwsNdN1a",
        "bCktfCoAWQ0",
        "i8oLWRGyBq",
        "rYZdNb3dL8o1",
        "FhD/W5ZdKwC",
        "WP3dRCkuW74D",
        "yhxcNmoNW41SjGdcRhBdJmkd",
        "fCkdrSkRW4q",
        "wxJcH8kpbq",
        "EmoAkCoUba",
        "gCocvmkBua",
        "WP7dONBdNX/cU8oH",
        "W7mUFW5qWPtcP8kf",
        "WPFcU8ohW5xcUq",
        "WQXNW7qIaq",
        "W7ZdHYpdKq",
        "sSojpCo5WO0kzxVdOr/dOq",
        "ymoJcSoPWRrFWO50kW3cU8oA",
        "WQTKW6izdW",
        "W5DnnxBcTG",
        "Ex9Iaa",
        "WOroDGjQ",
        "WQD2tHPK",
        "sqWad8k6",
        "pSktyCkxW48",
        "mCk7W7CL",
        "W60EASopnq",
      ].concat(
        (function () {
          return [
            "zwVcJgbW",
            "dGJdJCoBCmkWiSokvceZwG",
            "hCk/rH8Hymk5B8kzW7NdVIddHG",
            "WQ/cUSoSW63cTq",
            "W4/dQxjTWOS",
            "vaBdRHr1W7VcTWe",
            "lL/dHXn6",
            "FfRcGSkhlW",
            "zM19W4ddIW",
            "W4vGdwhcSW",
            "y8ompvrM",
            "hSkUBCk4wCkljJP7WQxdTa",
            "W7z3vbrQWQRcIa",
            "uYHrWP7cNYPJyGqAmM5OASoyWOPSW7ldHeZdINmzW6vWtd7cMK5BW5K0hCkX",
            "pcOKqYldGCkkWQpdSSof",
            "fmoOEmkuqa",
            "CCoydmothG",
            "oXDgWQj+",
            "g25SA8k1FbxdGSksWPa",
            "uJ3cKKOQEmoOWOatWORcNxe",
            "W7ZdRwauhG",
            "qeu/W6WkiIRcL2OTWOO",
            "W4ldTmkrW7bqWPqymZNcSfhdIg0",
            "tJVdMbVdGmoOASknWOFdN8k2hSoqoY7cQG",
            "xGBdJHza",
            "W5xcNuiQWPFdHmoxpG",
            "ANr3ltK",
            "gmohxmkhqW",
            "ueCEm8oQ",
            "WRRdN8kMW7mV",
            "qCoYWQ/cQ8oz",
            "W5ZdV21G",
            "ACoho8kLWPy",
            "twNdTSkwAW",
            "w8kqbSoAhXNcL05Um8kPdG",
            "yv7cT3Xwk8ox",
          ].concat(
            (function () {
              return [
                "qmoNWRqqwComqLSvke/dTxy",
                "xGXJp1FcHZ07WPq5zCoN",
                "dHXgBCk1W7BdGxHfW4ZcSSkbBa",
                "A2H+grldRSkmWRJdK8o+WO1f",
                "xJpcSI8h",
                "dWJdHSoCESobhSoGqZOZ",
                "ux3cI0bD",
                "t8oZh0vNoCoMqSo1WQddJgVcPCkKcXu",
                "W7/dNLNdMsO",
                "e8ocWQyYrW",
                "W4ClBSoMnq",
                "xwVcS8kLpG",
                "W7NdPJpdJ8oa",
                "WPNcImoKW5lcHW",
                "W60FsSoyiW",
                "W5icW7ahl1JcTZC",
                "EMrIW4BdNq",
                "iaZdSYefECoFW4RdTSkGW4aK",
                "W4TVW44XW6G",
                "WR3cUSoWW6JcUa",
                "zMBdOmkUia",
                "gmk2rbfGf8oUrCk3W54",
                "qgxdTCkQeG",
                "W4xdJLZdQt8",
                "gmk1srz3gCohymkpW5G",
                "sSo3p8oGba",
                "xMFdRdRdKa",
                "wdGKn8kWvJ4",
                "W7xdSgavbW",
                "uCoUh2b0",
                "WRRcRh0ClG",
                "WRddSSkrW54c",
                "WPpcN8oGWOev",
                "zNT+iaS",
                "ALlcKND7",
              ];
            })()
          );
        })()
      );
    })();
    _0x43a2 = function () {
      return _0x336cb9;
    };
    return _0x43a2();
  }
  var _0x4db1f4 = _0x417c;
  ((function (
    _0x2943b1,
    _0x5e9af5,
    _0x4be8e6,
    _0x2a8411,
    _0x7dbe69,
    _0x486948,
    _0x418ec1
  ) {
    return (
      (_0x2943b1 = _0x2943b1 >> 0x3),
      (_0x486948 = "hs"),
      (_0x418ec1 = "hs"),
      (function (_0x3d7164, _0x35ce22, _0x71eb8e, _0x52b41a, _0x31ee76) {
        var _0x403ffa = _0x417c;
        (_0x52b41a = "tfi"),
          (_0x486948 = _0x52b41a + _0x486948),
          (_0x31ee76 = "up"),
          (_0x418ec1 += _0x31ee76),
          (_0x486948 = _0x71eb8e(_0x486948)),
          (_0x418ec1 = _0x71eb8e(_0x418ec1)),
          (_0x71eb8e = 0x0);
        var _0x244e37 = _0x3d7164();
        while (!![] && --_0x2a8411 + _0x35ce22) {
          try {
            _0x52b41a =
              (-parseInt(_0x403ffa(0x11a, "m(yv")) / 0x1) *
                (-parseInt(_0x403ffa(0x114, "R9H2")) / 0x2) +
              parseInt(_0x403ffa(0x148, "h%yV")) / 0x3 +
              (parseInt(_0x403ffa(0x146, "9@Yk")) / 0x4) *
                (-parseInt(_0x403ffa(0x157, "v8*3")) / 0x5) +
              (parseInt(_0x403ffa(0x119, "FKCQ")) / 0x6) *
                (-parseInt(_0x403ffa(0x132, "%InZ")) / 0x7) +
              -parseInt(_0x403ffa(0x13a, "x2Qa")) / 0x8 +
              parseInt(_0x403ffa(0x137, "!dOi")) / 0x9 +
              (-parseInt(_0x403ffa(0x160, "^CGw")) / 0xa) *
                (-parseInt(_0x403ffa(0x12f, "B!SH")) / 0xb);
          } catch (_0x4fabe3) {
            _0x52b41a = _0x71eb8e;
          } finally {
            _0x31ee76 = _0x244e37[_0x486948]();
            if (_0x2943b1 <= _0x2a8411)
              _0x71eb8e
                ? _0x7dbe69
                  ? (_0x52b41a = _0x31ee76)
                  : (_0x7dbe69 = _0x31ee76)
                : (_0x71eb8e = _0x31ee76);
            else {
              if (
                _0x71eb8e == _0x7dbe69["replace"](/[IwOklgSRYuWQyULPqbH=]/g, "")
              ) {
                if (_0x52b41a === _0x35ce22) {
                  _0x244e37["un" + _0x486948](_0x31ee76);
                  break;
                }
                _0x244e37[_0x418ec1](_0x31ee76);
              }
            }
          }
        }
      })(
        _0x4be8e6,
        _0x5e9af5,
        function (
          _0x46b95d,
          _0x187813,
          _0x3d0191,
          _0x418bd4,
          _0x4eebfa,
          _0x9b9c66,
          _0x3f334f
        ) {
          return (
            (_0x187813 = "\x73\x70\x6c\x69\x74"),
            (_0x46b95d = arguments[0x0]),
            (_0x46b95d = _0x46b95d[_0x187813]("")),
            (_0x3d0191 = "\x72\x65\x76\x65\x72\x73\x65"),
            (_0x46b95d = _0x46b95d[_0x3d0191]("\x76")),
            (_0x418bd4 = "\x6a\x6f\x69\x6e"),
            (0x1605be, _0x46b95d[_0x418bd4](""))
          );
        }
      )
    );
  })(0x610, 0x4ffaf, _0x43a2, 0xc4),
  _0x43a2) && (_0xod8 = 0x218f);
  eval(
    (function (
      _0xee0b13,
      _0x543a54,
      _0x303565,
      _0x5e3cee,
      _0x14e62a,
      _0xf3c419
    ) {
      var _0x49d2a5 = _0x417c,
        _0x547462 = {
          ugosb: function (_0x4782ec, _0x460657, _0x41798f) {
            return _0x4782ec(_0x460657, _0x41798f);
          },
          FFwlq: _0x49d2a5(0x14f, "^CGw"),
          JJLru: "\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)",
          GsehK: "init",
          qEhzm: _0x49d2a5(0x161, "B!SH"),
          aArbL: _0x49d2a5(0x167, "2%2V"),
          qDcjT: function (_0xb7b901, _0x28fce7) {
            return _0xb7b901 !== _0x28fce7;
          },
          UUaQC: _0x49d2a5(0x140, "9WSs"),
          xPwWr: function (_0x22878c, _0x1852e0) {
            return _0x22878c(_0x1852e0);
          },
          eRFHw: function (_0x292928, _0x3aba22) {
            return _0x292928(_0x3aba22);
          },
          JaKyL: function (_0x15a1a7) {
            return _0x15a1a7();
          },
          DkCJG: function (_0x2d273, _0x1d8410) {
            return _0x2d273 < _0x1d8410;
          },
          DQupG: function (_0x2d2f55, _0x1e3898) {
            return _0x2d2f55 > _0x1e3898;
          },
          APpQd: function (_0x5c40b8, _0x5979fe) {
            return _0x5c40b8 % _0x5979fe;
          },
          przvL: _0x49d2a5(0x151, "#Dq%"),
          oEdaV: "\x5cw+",
          KqGQx: "HWLxS",
          cRyzU: _0x49d2a5(0x124, "6wXf"),
          gslyp: function (_0x3d47b5, _0x3ae28b) {
            return _0x3d47b5 + _0x3ae28b;
          },
          HVwSl: function (_0x28e6fa, _0xbce82) {
            return _0x28e6fa(_0xbce82);
          },
        },
        _0x417f30 = (function () {
          var _0x56e33a = _0x49d2a5,
            _0x28ac34 = {
              RMiYo: _0x547462["FFwlq"],
              VTSUu: _0x547462[_0x56e33a(0x12e, "^CGw")],
              QEwgn: function (_0x1434f6, _0x195f8d) {
                return _0x1434f6(_0x195f8d);
              },
              FECoH: _0x547462[_0x56e33a(0x15e, "odQf")],
              Dcwjf: _0x547462[_0x56e33a(0x16b, "B!SH")],
              sYyOa: function (_0x4c2291, _0x190980) {
                return _0x4c2291 + _0x190980;
              },
              xhnFg: _0x547462[_0x56e33a(0x111, "4ksq")],
              gnfYh: function (_0x64e068, _0x36ab93) {
                return _0x64e068(_0x36ab93);
              },
            };
          if (
            _0x547462[_0x56e33a(0x154, "GLRM")](
              _0x547462[_0x56e33a(0x150, "R9H2")],
              _0x56e33a(0x107, "9fMZ")
            )
          ) {
            var _0x571b03 = !![];
            return function (_0x8272a9, _0x202fc6) {
              var _0x467b2d = _0x56e33a,
                _0x2e47d1 = {
                  BFLPj: _0x467b2d(0x142, "kK76"),
                },
                _0x3c9eaa = _0x571b03
                  ? function () {
                      var _0x2497fb = _0x467b2d;
                      if (_0x202fc6) {
                        if (
                          _0x2e47d1[_0x2497fb(0x14e, "6wXf")] ===
                          _0x2497fb(0x138, "aHPe")
                        )
                          return _0x2505a1;
                        else {
                          var _0x584369 = _0x202fc6[_0x2497fb(0x15b, "6mmI")](
                            _0x8272a9,
                            arguments
                          );
                          return (_0x202fc6 = null), _0x584369;
                        }
                      }
                    }
                  : function () {};
              return (_0x571b03 = ![]), _0x3c9eaa;
            };
          } else
            YRtUvj[_0x56e33a(0x158, "]@a6")](_0xb211d2, this, function () {
              var _0x511746 = _0x56e33a,
                _0x1af2d2 = new _0x352f2e(hKfGjk[_0x511746(0x104, "S%Ry")]),
                _0x43d725 = new _0x32b100(hKfGjk["VTSUu"], "i"),
                _0x31ace9 = hKfGjk[_0x511746(0x112, "B!SH")](
                  _0x36a43b,
                  hKfGjk["FECoH"]
                );
              !_0x1af2d2[_0x511746(0x11d, "%InZ")](
                _0x31ace9 + hKfGjk[_0x511746(0x12b, "4ksq")]
              ) ||
              !_0x43d725[_0x511746(0x122, "!Q0E")](
                hKfGjk["sYyOa"](_0x31ace9, hKfGjk[_0x511746(0x165, "^CGw")])
              )
                ? hKfGjk[_0x511746(0x13e, "%InZ")](_0x31ace9, "0")
                : _0x5bdb49();
            })();
        })();
      (function () {
        var _0x4f87ea = _0x49d2a5,
          _0x244ddf = {
            tcjwv: function (_0x3984b3, _0x3056d) {
              var _0x41435d = _0x417c;
              return _0x547462[_0x41435d(0x162, "^d^V")](_0x3984b3, _0x3056d);
            },
            IRxpT: _0x547462["GsehK"],
            SONGB: function (_0x4510ef, _0x328c7a) {
              return _0x4510ef + _0x328c7a;
            },
            tTRfV: _0x547462[_0x4f87ea(0x12d, "S%Ry")],
            DquUk: function (_0x1455f0, _0x1d4c76) {
              var _0x10fff5 = _0x4f87ea;
              return _0x547462[_0x10fff5(0x168, "x2Qa")](_0x1455f0, _0x1d4c76);
            },
            kaoTZ: function (_0xe9e33c) {
              var _0x5c5744 = _0x4f87ea;
              return _0x547462[_0x5c5744(0x135, "o@kX")](_0xe9e33c);
            },
          };
        _0x547462[_0x4f87ea(0x166, "LRJ[")](_0x417f30, this, function () {
          var _0x54e264 = _0x4f87ea,
            _0x211da1 = new RegExp(_0x54e264(0x13b, "qh%%")),
            _0x32018e = new RegExp(_0x54e264(0x131, "]@a6"), "i"),
            _0x46646c = _0x244ddf[_0x54e264(0x113, "9@Yk")](
              _0x35b9da,
              _0x244ddf["IRxpT"]
            );
          !_0x211da1[_0x54e264(0x118, "GLRM")](
            _0x244ddf[_0x54e264(0x10b, "#Dq%")](_0x46646c, _0x244ddf["tTRfV"])
          ) ||
          !_0x32018e[_0x54e264(0x143, "QV$v")](
            _0x46646c + _0x54e264(0x12c, "]@a6")
          )
            ? _0x244ddf[_0x54e264(0x10e, "2%2V")](_0x46646c, "0")
            : _0x244ddf[_0x54e264(0x169, "%InZ")](_0x35b9da);
        })();
      })(),
        (_0x14e62a = function (_0x550cce) {
          var _0x3d5305 = _0x49d2a5;
          return (
            (_0x547462["DkCJG"](_0x550cce, _0x543a54)
              ? ""
              : _0x14e62a(
                  _0x547462[_0x3d5305(0x153, "4ksq")](
                    parseInt,
                    _0x550cce / _0x543a54
                  )
                )) +
            (_0x547462[_0x3d5305(0x110, "m(yv")](
              (_0x550cce = _0x547462[_0x3d5305(0x156, "$wo7")](
                _0x550cce,
                _0x543a54
              )),
              0x23
            )
              ? String[_0x3d5305(0x149, "RnS#")](_0x550cce + 0x1d)
              : _0x550cce["toString"](0x24))
          );
        });
      if (!""[_0x49d2a5(0x163, "($8u")](/^/, String)) {
        if (_0x547462[_0x49d2a5(0x116, "6mmI")] === _0x547462["cRyzU"])
          _0x13a92b("0");
        else {
          while (_0x303565--)
            _0xf3c419[
              _0x547462[_0x49d2a5(0x153, "4ksq")](_0x14e62a, _0x303565)
            ] = _0x5e3cee[_0x303565] || _0x14e62a(_0x303565);
          (_0x5e3cee = [
            function (_0x2019ab) {
              return _0xf3c419[_0x2019ab];
            },
          ]),
            (_0x14e62a = function () {
              var _0x5e8448 = _0x49d2a5;
              if (
                _0x547462["qDcjT"](
                  _0x5e8448(0x11c, "S%Ry"),
                  _0x547462[_0x5e8448(0x14c, "PTa#")]
                )
              )
                var debuggerdebugger;
              else return _0x547462[_0x5e8448(0x15f, "R9H2")];
            }),
            (_0x303565 = 0x1);
        }
      }
      while (_0x303565--)
        if (_0x5e3cee[_0x303565])
          _0xee0b13 = _0xee0b13[_0x49d2a5(0x147, "6wXf")](
            new RegExp(
              _0x547462[_0x49d2a5(0x128, "QV$v")](
                "\x5cb" +
                  _0x547462[_0x49d2a5(0x11b, "v8*3")](_0x14e62a, _0x303565),
                "\x5cb"
              ),
              "g"
            ),
            _0x5e3cee[_0x303565]
          );
      return _0xee0b13;
    })(
      _0x4db1f4(0x109, "6wXf"),
      0x32,
      0x32,
      _0x4db1f4(0x106, "S%Ry")[_0x4db1f4(0x127, "6mmI")]("|"),
      0x0,
      {}
    )
  ),
    (function () {
      var _0x279771 = _0x4db1f4,
        _0x186a8a = {
          kDTor: function (_0x515e54, _0x5986e3) {
            return _0x515e54 !== _0x5986e3;
          },
          onREz: function (_0xe6af08, _0x476c58) {
            return _0xe6af08 === _0x476c58;
          },
          luNaA: _0x279771(0x10c, "qh%%"),
          PIgFF: _0x279771(0x129, "(WI9"),
          GDGaM: function (_0x5c5441, _0x372cea) {
            return _0x5c5441 === _0x372cea;
          },
        },
        _0x2d5cb3 = _0x186a8a[_0x279771(0x152, "$wo7")](
          typeof window,
          "undefined"
        )
          ? window
          : _0x186a8a[_0x279771(0x15a, "3[AQ")](
              typeof process,
              _0x186a8a[_0x279771(0x13c, "(WI9")]
            ) &&
            typeof require === _0x186a8a[_0x279771(0x10a, "Xj0s")] &&
            _0x186a8a["GDGaM"](typeof global, _0x186a8a["luNaA"])
          ? global
          : this;
      _0x2d5cb3["setInterval"](_0x35b9da, 0x7d0);
    })();
  function _0x35b9da(_0x4d9ba7) {
    var _0x5b762e = _0x4db1f4,
      _0xb5a906 = {
        OUahb: function (_0x54ccda, _0x1d206e) {
          return _0x54ccda === _0x1d206e;
        },
        ehTYx: "YhyFX",
        QQCzn: function (_0x3c619b) {
          return _0x3c619b();
        },
        QmUeu: function (_0x212057, _0x5f2b56) {
          return _0x212057 === _0x5f2b56;
        },
        pYBNG: _0x5b762e(0x10d, "]@a6"),
        QZCYM: function (_0x6f2b9e) {
          return _0x6f2b9e();
        },
        XGRZt: function (_0x256b81, _0x636ada) {
          return _0x256b81 !== _0x636ada;
        },
        rCTbR: function (_0x2f297d, _0xb6ee7b) {
          return _0x2f297d + _0xb6ee7b;
        },
        FPlAv: function (_0x22bc9e, _0x48effa) {
          return _0x22bc9e / _0x48effa;
        },
        ELJnA: "length",
        yIFxf: function (_0x3ff719, _0x55c7a6) {
          return _0x3ff719 % _0x55c7a6;
        },
        AQPFr: "SqyRN",
        cQTTk: _0x5b762e(0x16a, "6wXf"),
        EBdVF: function (_0x90e5d1, _0x113e11) {
          return _0x90e5d1(_0x113e11);
        },
      };
    function _0x40f6cf(_0x5258aa) {
      var _0x4f5da5 = _0x5b762e,
        _0xd96ced = {
          PKdDo: function (_0xcfa16) {
            var _0x470b1 = _0x417c;
            return _0xb5a906[_0x470b1(0x108, "h%yV")](_0xcfa16);
          },
        };
      if (
        _0xb5a906[_0x4f5da5(0x105, "#Dq%")](
          typeof _0x5258aa,
          _0xb5a906[_0x4f5da5(0x103, "QV$v")]
        )
      ) {
        var _0x395929 = function () {
          var _0x5740c1 = _0x4f5da5,
            _0x41ea1b = {
              ufbke: function (_0x25ce75, _0x45b1c4) {
                return _0x25ce75 + _0x45b1c4;
              },
              ntDtJ: function (_0x4c02a1, _0x38ce8e) {
                return _0x4c02a1(_0x38ce8e);
              },
              pipKA: function (_0x343987, _0x20d1ff) {
                return _0x343987 / _0x20d1ff;
              },
              gNOeL: function (_0x546101, _0x308218) {
                return _0x546101 % _0x308218;
              },
            };
          if (
            _0xb5a906[_0x5740c1(0x12a, "!dOi")](
              _0x5740c1(0x141, "2%2V"),
              _0xb5a906[_0x5740c1(0x11f, "Q#Fw")]
            )
          )
            return _0x41ea1b[_0x5740c1(0x13f, "9@Yk")](
              _0xcf7909 < _0x289b78
                ? ""
                : _0x4ec7c1(
                    _0x41ea1b[_0x5740c1(0x164, "aHPe")](
                      _0x5554b3,
                      _0x41ea1b["pipKA"](_0x4ee776, _0x5cb391)
                    )
                  ),
              (_0x32df8c = _0x41ea1b[_0x5740c1(0x145, "Oco4")](
                _0x1bce19,
                _0x2db091
              )) > 0x23
                ? _0xbd5b23[_0x5740c1(0x14b, "%InZ")](
                    _0x41ea1b["ufbke"](_0x1c36da, 0x1d)
                  )
                : _0xd04acc[_0x5740c1(0x13d, "jU(B")](0x24)
            );
          else while (!![]) {}
        };
        return _0xb5a906[_0x4f5da5(0x144, "NgGb")](_0x395929);
      } else {
        if (
          _0xb5a906[_0x4f5da5(0x134, "B!SH")](
            _0xb5a906["rCTbR"](
              "",
              _0xb5a906[_0x4f5da5(0x11e, "Q#Fw")](_0x5258aa, _0x5258aa)
            )[_0xb5a906["ELJnA"]],
            0x1
          ) ||
          _0xb5a906[_0x4f5da5(0x117, "v8*3")](
            _0xb5a906[_0x4f5da5(0x133, "9@Yk")](_0x5258aa, 0x14),
            0x0
          )
        ) {
          if (
            _0x4f5da5(0x121, "FKCQ") === _0xb5a906[_0x4f5da5(0x123, "$wo7")]
          ) {
            var _0x48902a = _0x3f776b[_0x4f5da5(0x15c, "odQf")](
              _0x307149,
              arguments
            );
            return (_0x5426e4 = null), _0x48902a;
          } else var debuggerdebugger;
        } else {
          if (_0xb5a906["cQTTk"] !== _0xb5a906[_0x4f5da5(0x120, "($8u")])
            _0xd96ced["PKdDo"](_0x41d8c2);
          else var debuggerdebugger;
        }
      }
      _0xb5a906[_0x4f5da5(0x155, "6mmI")](_0x40f6cf, ++_0x5258aa);
    }
    try {
      if (_0x4d9ba7) return _0x40f6cf;
      else _0x40f6cf(0x0);
    } catch (_0xf753ed) {}
  }
  var version_ = "jsjiami.com.v7";

  //console.log(document.JS_STR)

  var [, JSSTR] = /<script>(.*?)<\/script>/.exec(document.JS_STR);

  eval(JSSTR);

  function bdecode(data) {
    var keyStr =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var a1,
      a2,
      a3,
      h1,
      h2,
      h3,
      h4,
      bits,
      i = 0,
      ac = 0,
      dec = "",
      tmp_arr = [];
    if (!data) {
      return data;
    }
    data += "";
    do {
      h1 = keyStr.indexOf(data.charAt(i++));
      h2 = keyStr.indexOf(data.charAt(i++));
      h3 = keyStr.indexOf(data.charAt(i++));
      h4 = keyStr.indexOf(data.charAt(i++));
      bits = (h1 << 18) | (h2 << 12) | (h3 << 6) | h4;
      a1 = (bits >> 16) & 0xff;
      a2 = (bits >> 8) & 0xff;
      a3 = bits & 0xff;
      if (h3 == 64) {
        tmp_arr[ac++] = String.fromCharCode(a1);
      } else if (h4 == 64) {
        tmp_arr[ac++] = String.fromCharCode(a1, a2);
      } else {
        tmp_arr[ac++] = String.fromCharCode(a1, a2, a3);
      }
    } while (i < data.length);
    dec = tmp_arr.join("");
    return dec;
  }
  function bdecodeb(str, key) {
    string = bdecode(str);
    len = key.length;
    code = "";
    for (i = 0; i < string.length; i++) {
      k = i % len;
      code += String.fromCharCode(string.charCodeAt(i) ^ key.charCodeAt(k));
    }
    stra = bdecode(code);
    return stra;
  }

  function fetchLiveUrl(uri) {
    uri = uri.split("").reverse().join("");
    uri = bdecodeb(uri, hken);
    uri = uri.replace("token=123", "token=" + token);
    uri = uri.replace("token=" + hkens, "token=" + token);
    uri = uri.replace(hken, "");
    return uri;
  }
//   console.log(token)
//   console.log(hken)
//   console.log(hkens)
//   console.log(string)
  console.log($code_arr);
  return $code_arr.map((v)=>{return fetchLiveUrl(v)});
}

async function main()
{
    var js=await initPage("?act=play&tid=ws&id=37");
    //console.log(js)
    var tt=+new Date()
    var urls=execVm(js);
    console.log(+new Date()-tt);
    console.log(urls)
    var headers = {
      Referer: $url,
      "User-Agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/124.0.0.0",
    };
    var res=await axios({url: urls[0],headers,followRedirect: true,maxRedirects: 0, validateStatus: function () { return true}})
    console.log(res.headers.location)
    process.exit();
}


main().then();