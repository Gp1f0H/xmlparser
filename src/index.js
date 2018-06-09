var fs = require('fs'),
    xml2js = require('xml2js');
var js2xmlparser = require("js2xmlparser");

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/xmls/HM032132T03_18041.XML', function(err, data) {
    parser.parseString(data, function(err, result) {
        var final = result;
        final.ZL_LIST.ZAP.forEach(function(element, key) {
            final.ZL_LIST.ZAP[key].Z_SL = {};
            final.ZL_LIST.ZAP[key].Z_SL.IDCASE = key + 1;
            final.ZL_LIST.ZAP[key].Z_SL.USL_OK = final.ZL_LIST.ZAP[key].SLUCH[0].USL_OK[0];
            final.ZL_LIST.ZAP[key].Z_SL.VIDPOM = final.ZL_LIST.ZAP[key].SLUCH[0].VIDPOM[0];
            final.ZL_LIST.ZAP[key].Z_SL.FOR_POM = final.ZL_LIST.ZAP[key].SLUCH[0].FOR_POM[0];
            final.ZL_LIST.ZAP[key].Z_SL.NPR_MO = final.ZL_LIST.ZAP[key].SLUCH[0].NPR_MO[0];
            final.ZL_LIST.ZAP[key].Z_SL.LPU = final.ZL_LIST.ZAP[key].SLUCH[0].LPU[0];
            final.ZL_LIST.ZAP[key].Z_SL.DATE_Z_1 = final.ZL_LIST.ZAP[key].SLUCH[0].DATE_1[0];
            final.ZL_LIST.ZAP[key].Z_SL.DATE_Z_2 = final.ZL_LIST.ZAP[key].SLUCH[0].DATE_2[0];
            final.ZL_LIST.ZAP[key].Z_SL.RSLT = final.ZL_LIST.ZAP[key].SLUCH[0].RSLT[0];
            final.ZL_LIST.ZAP[key].Z_SL.ISHOD = final.ZL_LIST.ZAP[key].SLUCH[0].ISHOD[0];

            delete final.ZL_LIST.ZAP[key].SLUCH[0].USL_OK;
            delete final.ZL_LIST.ZAP[key].SLUCH[0].VIDPOM;
            delete final.ZL_LIST.ZAP[key].SLUCH[0].FOR_POM;
            delete final.ZL_LIST.ZAP[key].SLUCH[0].NPR_MO;
            delete final.ZL_LIST.ZAP[key].SLUCH[0].LPU;
            delete final.ZL_LIST.ZAP[key].SLUCH[0].RSLT;
            delete final.ZL_LIST.ZAP[key].SLUCH[0].ISHOD;

            if (final.ZL_LIST.ZAP[key].SLUCH[1]) {
                delete final.ZL_LIST.ZAP[key].SLUCH[1].USL_OK;
                delete final.ZL_LIST.ZAP[key].SLUCH[1].VIDPOM;
                delete final.ZL_LIST.ZAP[key].SLUCH[1].FOR_POM;
                delete final.ZL_LIST.ZAP[key].SLUCH[1].NPR_MO;
                delete final.ZL_LIST.ZAP[key].SLUCH[1].LPU;
                delete final.ZL_LIST.ZAP[key].SLUCH[1].RSLT;
                delete final.ZL_LIST.ZAP[key].SLUCH[1].ISHOD;
            }

            if (final.ZL_LIST.ZAP[key].SLUCH[2]) {
                delete final.ZL_LIST.ZAP[key].SLUCH[2].USL_OK;
                delete final.ZL_LIST.ZAP[key].SLUCH[2].VIDPOM;
                delete final.ZL_LIST.ZAP[key].SLUCH[2].FOR_POM;
                delete final.ZL_LIST.ZAP[key].SLUCH[2].NPR_MO;
                delete final.ZL_LIST.ZAP[key].SLUCH[2].LPU;
                delete final.ZL_LIST.ZAP[key].SLUCH[2].RSLT;
                delete final.ZL_LIST.ZAP[key].SLUCH[2].ISHOD;
            }

            final.ZL_LIST.ZAP[key].Z_SL.SL = final.ZL_LIST.ZAP[key].SLUCH;
            final.ZL_LIST.ZAP[key].Z_SL.IDSP = final.ZL_LIST.ZAP[key].Z_SL.SL[0].IDSP[0];
            final.ZL_LIST.ZAP[key].Z_SL.SUMV = 0;
            final.ZL_LIST.ZAP[key].Z_SL.SL.forEach(function(el, k) {
                final.ZL_LIST.ZAP[key].Z_SL.SUMV = parseInt(final.ZL_LIST.ZAP[key].Z_SL.SUMV) + parseInt(el.SUMV[0]);
                // console.log(typeof(final.ZL_LIST.ZAP[key].Z_SL.SUMV));
                // console.log(typeof(el.SUMV[0]));
            });
            delete final.ZL_LIST.ZAP[key].SLUCH[0].IDSP;
            if (final.ZL_LIST.ZAP[key].SLUCH[1]) {
                delete final.ZL_LIST.ZAP[key].SLUCH[1].IDSP;
            }
            if (final.ZL_LIST.ZAP[key].SLUCH[2]) {
                delete final.ZL_LIST.ZAP[key].SLUCH[2].IDSP;
            }
            delete final.ZL_LIST.ZAP[key].SLUCH;
        });
        fs.appendFile('log.txt', js2xmlparser.parse("person", result), function(err) {
            if (err) {
                // append failed
            } else {
                // done
            }
        });
    });
    console.log('Done');
});




// final.ZL_LIST.ZAP[key].SLUCH.forEach(function(element, k) {
//     if (minDate1) {
//         if (element.DATE_1 < minDate1) {
//             minDate1 = element.DATE_1;
//         }
//     } else {
//         minDate1 = element.DATE_1;
//     };
//     if (minDate2) {
//         if (element.DATE_2 < minDate2) {
//             console.log(key);
//             console.log('works');
//             minDate2 = element.DATE_2;
//         }
//     } else {
//         minDate2 = element.DATE_2;
//     };
//     if (k > 0) {
//         console.log(key);
//     }
// });