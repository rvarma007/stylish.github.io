MANUAL_COPY_MSG = 'Press "Ctrl + C" to copy';
var NUMBER_OF_COPY_CLICKED_KEY = 'NUMBER_OF_COPY_CLICKED_KEY';
var numberOfCopyClicked = 0;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i ['test'](navigator['userAgent'])) {
    MANUAL_COPY_MSG = 'Selected for copying'
};
var isInMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i ['test'](navigator['userAgent']);
var isIniOS = /iPad|iPhone|iPod/ ['test'](navigator['userAgent']) && !window['MSStream'];
var ua = navigator['userAgent']['toLowerCase']();
var isInAndroid = ua['indexOf']('android') > -1;
var arrayStyleList = ['nostyle', 'bubble', 'smallCaps', 'doubleStruck', 'fraktur', 'boldFraktur', 'currency', 'antrophobia', 'paranormal', 'blackBubble', 'boldScript', 'handWriting1', 'handWriting2', 'bold', 'boldItalic', 'monospace', 'sorcerer', 'strikethrough', 'tildeStrikethrough', 'slash', 'underline', 'doubleUnderline', 'special', 'boxed', 'blurry', 'stinky', 'dirty', 'knight', 'emoji-text', 'fairy', 'square', 'thin', 'tiny', 'upsideDown', 'invisibleInk', 'rusify', 'h4k3r', 'fancySymbols', 'bridge_above', 'bridge_bellow', 'asterisk_bellow', 'plus_sign_bellow', 'x_above_bellow', 'upward_arrow_bellow', 'love', 'black-bracket', 'white-bracket', 'blackSquare', 'magic', 'fancyStyle1', 'fancyStyle2', 'fancyStyle3', 'fancyStyle4', 'fancyStyle5', 'fancyStyle6', 'fancyStyle7', 'fancyStyle8', 'fancyStyle9', 'fancyStyle10', 'fancyStyle11', 'fancyStyle12', 'fancyStyle13', 'fancyStyle14', 'fancyStyle15', 'fancyStyle16', 'fancyStyle17', 'fancyStyle18', 'fancyStyle19', 'fancyStyle20', 'fancyStyle21', 'fancyStyle22', 'fancyStyle23', 'fancyStyle24', 'fancyStyle25', 'fancyStyle26', 'fancyStyle27', 'fancyStyle28', 'fancyStyle29', 'fancyStyle30', 'fancyStyle31', 'fancyStyle32', 'fancyStyle33', 'fancyStyle34', 'fancyStyle35', 'fancyStyle36', 'fancyStyle37', 'fancyStyle38', 'fancyStyle39', 'fancyStyle40', 'fancyStyle41', 'fancyStyle42', 'fancyStyle43', 'fancyStyle44', 'fancyStyle45', 'fancyStyle46', 'fancyStyle47'];
var isHavingSourceParameter = false;
var text_style_name = '';
var text_to_convert = '';
var result_text_styles = [];
var result_converted_text = '';

function getRandomColor() {
    var _0x5f38xe = ['#FF006C', '#0000ff', '#F66E00', '#db3236', '#3cba54', '#048998', '#BC4F4F', '#4B2C34', '#511E78', '#453C38'];
    return _0x5f38xe[Math['floor'](Math['random']() * _0x5f38xe['length'])]
}

function putRandomColorOnTextboxes() {
    $('.font-preview-content-container input[type=\'text\']')['each'](function () {
        $(this)['css']('color', getRandomColor())
    })
}
$(document)['ready'](function () {
    text_to_convert = decodeURIComponent(getParameterByName('text'));
    if (text_to_convert == 'null') {
        text_to_convert = 'Preview Text'
    };
    $('#introduced-text-input')['val'](text_to_convert);
    text_style_name = decodeURIComponent(getParameterByName('style'));
    if (text_style_name == 'null') {
        text_style_name = 'noStyle'
    };
    if (arrayStyleList['indexOf'](text_style_name) < 0) {
        text_style_name = 'noStyle'
    };
    $('select#font_selection')['val'](text_style_name);
    var _0x5f38x10 = './text-decoration.html?style=' + text_style_name;
    $('#navbar-brand-logo')['attr']('href', _0x5f38x10);
    copyBtn = new Clipboard('#copy-converted-text-btn');
    copyBtn['on']('success', function (_0x5f38x11) {
        _0x5f38x11['clearSelection']();
    });
    copyBtn['on']('error', function (_0x5f38x11) {
        $(_0x5f38x11['trigger'])['find']('.copy_text')[0]['textContent'] = MANUAL_COPY_MSG;
        window['setTimeout'](function () {
            $(_0x5f38x11['trigger'])['find']('.copy_text')[0]['textContent'] = 'Copy'
        }, 1500)
    });
    var _0x5f38x12 = $('#introduced-text-input');
    _0x5f38x12['on']('input propertychange updateInfo', customizeText);
    _0x5f38x12['on']('paste', function () {
        setTimeout(function () {
            customizeText()
        }, 10)
    });
    customizeText();
    $('.style-decoration-side')['click'](function (_0x5f38x11) {
        var _0x5f38x13 = $(this)['html']();
        _0x5f38x13 += ' ' + result_converted_text + ' ';
        _0x5f38x13 += $(this)['data']('right');
        $('.converted-text')['html'](_0x5f38x13);
        $('.style-decoration-side')['removeClass']('active');
        $('.style-decoration-side-reset')['removeClass']('active');
        $(this)['addClass']('active');
        $('html,body')['animate']({
            scrollTop: 0
        }, 250)
    });
    $('.style-decoration-side-reset')['click'](function () {
        $('.converted-text')['html'](result_converted_text);
        $('.style-decoration-side')['removeClass']('active');
        $(this)['addClass']('active');
        $('html,body')['animate']({
            scrollTop: 0
        }, 250)
    });
    $('#font_selection')['on']('change', function (_0x5f38x14) {
        text_style_name = $('select#font_selection')['val']();
        var _0x5f38x15 = $('#introduced-text-input')['val']()['trim']();
        customizeText()
    })
});

function customizeText() {
    var _0x5f38x15 = $('#introduced-text-input')['val']()['trim']();
    if (_0x5f38x15['length'] == 0) {
        _0x5f38x15 = 'Preview Text'
    };
    if (text_style_name != 'noStyle') {
        $('#result_for_style')['text']('Result with ' + capitalizeFirstLetter(text_style_name) + ' style')
    } else {
        $('#result_for_style')['text']('Result with original style')
    };
    createStylishText();
    createFancyStyleText();
    if (text_style_name == 'null') {
        result_converted_text = _0x5f38x15
    } else {
        if (result_text_styles[text_style_name] != undefined) {
            result_converted_text = result_text_styles[text_style_name]
        } else {
            result_converted_text = _0x5f38x15
        }
    };
    $('.converted-text')['text'](result_converted_text);
    var _0x5f38x17 = $('.style-decoration-side.active');
    if (_0x5f38x17['length'] > 0) {
        var _0x5f38x13 = _0x5f38x17['html']();
        _0x5f38x13 += ' ' + result_converted_text + ' ';
        _0x5f38x13 += _0x5f38x17['data']('right');
        $('.converted-text')['html'](_0x5f38x13)
    }
}

function createStylistAndFancyText() {
    createStylishText();
    createFancyStyleText();
    var _0x5f38x15 = $('#converting_text')['val']()['trim']();
    if (_0x5f38x15['length'] == 0) {
        _0x5f38x15 = 'Preview Text'
    };
    var _0x5f38x19 = $('#bubble')['val']()['trim']();
    var _0x5f38x1a = $('#fancyStyle38')['val']()['trim']();
    var _0x5f38x1b = $('#smallCaps')['val']()['trim']();
    $('#textdecor_style1')['val']('\u2605\xB7.\xB7\xB4\xAF`\xB7.\xB7\u2605 ' + _0x5f38x19 + ' \u2605\xB7.\xB7\xB4\xAF`\xB7.\xB7\u2605');
    $('#textdecor_style2')['val']('▁ ▂ ▄ ▅ ▆ ▇ █ ' + _0x5f38x1a + ' █ ▇ ▆ ▅ ▄ ▂ ▁');
    $('#textdecor_style3')['val']('\xB0\xB0\xB0\xB7.\xB0\xB7..\xB7\xB0\xAF\xB0\xB7._.\xB7 ' + _0x5f38x1b + ' \xB7._.\xB7\xB0\xAF\xB0\xB7.\xB7\xB0 .\xB7\xB0\xB0\xB0')
}

function createFancyStyleText() {
    fancy_styles = [];
    fancy_styles['fancyStyle1'] = 'αвc∂εғgнιנкℓмησρqяsтυvωxүz';
    fancy_styles['fancyStyle2'] = '卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙';
    fancy_styles['fancyStyle3'] = '\u0102\u03B2\u010C\u010E\u0114\u0166\u011E\u0124\u0128\u0134\u0136\u0139\u041C\u0143\u0150\u0420Q\u0154\u015A\u0164\xDAV\u0174\u0416\u0176\u0179';
    fancy_styles['fancyStyle4'] = 'ᎪbᏟᎠᎬfᎶhᎥjᏦᏞmᏁᎾᏢqᏒsᏆuᏉᎳxᎽᏃ';
    fancy_styles['fancyStyle5'] = 'ᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ';
    fancy_styles['fancyStyle6'] = 'ɐqɔpǝɟƃɥ!ɾʞןɯuodbɹsʇnʌʍxʎz';
    fancy_styles['fancyStyle7'] = '\u0394\u03B2\u0106\u0110\u20AC\u20A3\u01E4\u0126\u0197\u0134\u049C\u0141\u039C\u0147\xD8\u01A4\u03A9\u0158\u015E\u0166\u1EEEV\u0174\u0416\xA5\u017D';
    fancy_styles['fancyStyle8'] = '\u03B1\u0253\u0AEE\u2202\u03B5\u0192\u0260\u0266\u0E40\u029D\u04A1\u2113\u0271\u0273\u03C3\u03C1\u03C6\u0AE8\u0E23\u01AD\xB5\u0475\u03C9\u05D0\u10E7\u01B6';
    fancy_styles['fancyStyle9'] = 'ᗩᗷᑕᗪᗴᖴǤᕼᎥᒎᛕᒪᗰᑎᗝᑭɊᖇᔕ丅ᑌᐯᗯ᙭Ƴ乙';
    fancy_styles['fancyStyle10'] = 'ค๒ς๔єŦﻮђเןкl๓ภ๏קợгรtยשฬץאz';
    fancy_styles['fancyStyle11'] = 'aвcdeғgнιjĸlмnopqrѕтυvwхyz';
    fancy_styles['fancyStyle12'] = '🇦​🇧​🇨​🇩​🇪​🇫​🇬​🇭​🇮​🇯​🇰​🇱​🇲​🇳​🇴​🇵​🇶​🇷​🇸​🇹​🇺​🇻​🇼​🇽​🇾​🇿​';
    fancy_styles['fancyStyle13'] = '\xE5\u03B2\xE7\u010F\xA3\u0192\u011F\u021F\u020Bj\u0137\u023D\u0271\xF1\xA4\u05E7\u01ED\u0211\xA7\u021B\u0265\u221A\u03A8\xD7\xFF\u017E';
    fancy_styles['fancyStyle14'] = '\u0105\u03B2\u023C\u010F\u20AC\u0192\u01E5h\u0268j\u040C\u2113\u028D\u0272\u0E4F\u03C1\u01ED\u044F$\u0163\xB5\u02C5\u03CE\u0436\xA5\u01B6';
    fancy_styles['fancyStyle15'] = '\u10DB\u10E9\u10D4\u10EB\u10DEf\u10EAh\u1F36\u10E5\u03BAl\u10DD\u1FC6\xF5\u03C1\u10D2\u0393\u10F0\u0F53\u03C5\u1F57w\u10EF\u10E7\u0240';
    fancy_styles['fancyStyle16'] = '\xC3\u03B2\u010C\u010E\u1EB8\u0191\u011E\u0124\u012E\u0134\u040C\u0139\u03FB\u0147\u1ED6\u01A4\u01EA\u0158\u015C\u0164\u01D7\u03CB\u0174\u0416\u040E\u017B';
    fancy_styles['fancyStyle17'] = 'ᗅᙘᑤᗫᙍᖴᘜᕼᓿᒙᖽᐸᒪᙢᘉᓎᕿᕴᖇSᖶᑗᐻᙎ᙭ᖻᙣ';
    fancy_styles['fancyStyle18'] = 'aвcdeғgнιjĸlмnopqrѕтυvwхyz';
    fancy_styles['fancyStyle19'] = '\u03B1\u0432cd\u0454fgh\xEDjklmn\u03C3pqr\u0455tuvw\u0445\u0447z';
    fancy_styles['fancyStyle20'] = '\u03AC\u0432\u03C2\u0221\u03AD\u0493\u0123\u0127\u03AF\u0458\u0137\u013B\u043C\u03AE\u03CC\u03C1q\u0155\u015F\u0163\xF9\u03BD\u03CEx\u0447\u017E';
    fancy_styles['fancyStyle21'] = 'ꋫꃃꏸꁕꍟꄘꁍꑛꂑꀭꀗ꒒ꁒꁹꆂꉣꁸ꒓ꌚ꓅ꐇꏝꅐꇓꐟꁴ';
    fancy_styles['fancyStyle22'] = '\u0414\u13F0\u2102\u2202\u018E\u0192\u13B6\u210D\xEE\u029D\u0198\u2113\u2133\u0418\xF8\u03C1\u01EA\u042F\u01A7\u271E\u03C5\u03D1\u13D4\u2718\u0423\u0540';
    fancy_styles['fancyStyle23'] = 'ДБCDΞFGHIJҜLMИФPǪЯSΓЦVЩЖУZ';
    fancy_styles['fancyStyle24'] = 'ǟɮƈɖɛʄɢɦɨʝᏦʟʍռօքզʀֆᏆʊʋաxʏʐ';
    fancy_styles['fancyStyle25'] = '\u0251\u048D\u03F2\u056A\u04BD\u0192\u0581\u0570\xED\u0575\u0198\u04C0\u028D\u0572\u0585\u0539\u0566\u027E\u054F\u0535\u0574\u0475\u0561\xD7\u057E\u0540';
    fancy_styles['fancyStyle26'] = 'ꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꂵꈤꂦꉣꆰꋪꌗ꓄ꀎꃴꅏꊼꌩꁴ';
    fancy_styles['fancyStyle27'] = 'ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵟᴿˢᵀᵁᵛᵂˣᵞᶻ';
    fancy_styles['fancyStyle28'] = 'ꋬꃳꉔ꒯ꏂꊰꍌꁝ꒐꒻ꀘ꒒ꂵꋊꄲꉣꆰꋪꇙ꓄꒤꒦ꅐꉧꌦꁴ';
    fancy_styles['fancyStyle29'] = '\u039B\u03E6\u3108\xD0\u0190F\u0193\u043D\u026A\uFF8C\u049A\u0141\u0BF1\u041B\xD8\xFE\u04A8\u5C3A\u3089\u0164\u0426\u0194\u019C\u03C7\u03E4\u1E94';
    fancy_styles['fancyStyle30'] = 'ƛƁƇƊЄƑƓӇƖʆƘԼMƝƠƤƢƦƧƬƲƔƜҲƳȤ';
    fancy_styles['fancyStyle31'] = 'ꁲꋰꀯꂠꈼꄞꁅꍩꂑ꒻ꀗ꒒ꂵꋊꂦꉣꁷꌅꌚꋖꐇꀰꅏꇒꐞꁴ';
    fancy_styles['fancyStyle32'] = 'ꋬꍗꏳꂟꏂꄟꍌꃬ꒐꒻ꀘ꒒ꂵꂚꉻꉣꋠꋪꑄ꓄ꀎ꒦ꅐꉼꐞꑓ';
    fancy_styles['fancyStyle33'] = 'ԹՅՇԺȝԲԳɧɿʝƙʅʍՌԾρφՐՏԵՄעաՃՎՀ';
    fancy_styles['fancyStyle34'] = 'ﾑ乃ᄃり乇ｷムんﾉﾌズﾚﾶ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙';
    fancy_styles['fancyStyle35'] = '\u03B1\xDF\u03C2d\u03B5\u0192gh\xEF\u0575\u03BA\uFF9Am\u03B7\u2295p\u03A9r\u0161\u2020u\u2200\u03C9x\u03C8z';
    fancy_styles['fancyStyle36'] = '\u0E04\u0E56\xA2\u0ED3\u0113f\u0E87hi\u0E27kl\u0E53\u0E96\u0ED0p\u0E51r\u015Et\u0E19\u0E07\u0E9Fx\u0E2F\u0E8A';
    fancy_styles['fancyStyle37'] = 'ąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑ';
    fancy_styles['fancyStyle38'] = 'ᗩᗷᑢᕲᘿᖴᘜᕼᓰᒚᖽᐸᒪᘻᘉᓍᕵᕴᖇSᖶᑘᐺᘺ᙭ᖻᗱ';
    fancy_styles['fancyStyle39'] = 'ꁲꃃꇃꂡꏹꄙꁍꀍꀤꀭꈵ꒒ꂵꋊꁏꉣꆰꋪꌚꋖꌈꃴꅐꋚꂖꁴ';
    fancy_styles['fancyStyle40'] = 'ᕱც꒝Ꭰꂅꊰg♅ᎥϳКլოภԾᎵգᏒᏕϮuᏉᎳꊼᎩᏃ';
    fancy_styles['fancyStyle41'] = 'ꁲꃳꏳꀷꑀꊯꁅꁝ꒐꒑ꈵ꒒ꂵꃔꊿꉣꋠꌅꈜꋖꌈ꒦ꅐꉤꐔꑒ';
    fancy_styles['fancyStyle42'] = 'αвcdeғɢнιjĸlмɴopqrѕтυvwхyz';
    fancy_styles['fancyStyle43'] = 'คც८ძ૯Բ૭ҺɿʆқՆɱՈ૦ƿҩՐς੮υ౮ω૪עઽ';
    fancy_styles['fancyStyle44'] = 'ᎪbᏟᎠᎬfᎶhᎥjᏦᏞmᏁᎾᏢqᏒsᏆuᏉᎳxᎽᏃ';
    fancy_styles['fancyStyle45'] = 'ꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꎭꈤꂦᖘꆰꋪꌗ꓄ꀎᐯꅏꊼꌩꁴ';
    fancy_styles['fancyStyle46'] = 'ልጌርዕቿቻኗዘጎጋጕረጠክዐየዒዪነፕሁሀሠሸሃጊ';
    fancy_styles['fancyStyle47'] = 'ꋫꃲꉓꃸꑾꄘꁅꃄ꒐꒑ꀗ꒒ꂵꁹꄱꉣꋟꋪꇘ꓅ꌇ꒦ꅏꋋꌥ꒗';
    var _0x5f38x1d = 'abcdefghijklmnopqrstuvwxyz';
    var _0x5f38x1e = $('#introduced-text-input')['val']()['trim']();
    if (_0x5f38x1e['length'] == 0) {
        _0x5f38x1e = 'Preview Text'
    };
    var _0x5f38x15 = _0x5f38x1e['toLowerCase']();
    for (styleIndex = 1; styleIndex <= Object['keys'](fancy_styles)['length']; styleIndex++) {
        var _0x5f38x1f = 'fancyStyle' + styleIndex;
        var _0x5f38x20 = fancy_styles[_0x5f38x1f];
        var _0x5f38x21 = _0x5f38x15;
        for (k = 0; k < _0x5f38x1d['length']; k++) {
            if (styleIndex == 17 || styleIndex == 38) {
                if (k < _0x5f38x1d['indexOf']('k')) {
                    unicode_char = getWholeChar(_0x5f38x20, k)
                } else {
                    if (k > _0x5f38x1d['indexOf']('k')) {
                        unicode_char = getWholeChar(_0x5f38x20, k + 1)
                    } else {
                        unicode_char = getWholeChar(_0x5f38x20, k) + getWholeChar(_0x5f38x20, k + 1)
                    }
                }
            } else {
                if (styleIndex == 12) {
                    unicode_char = getWholeChar(_0x5f38x20, k * 3) + '​'
                } else {
                    unicode_char = getWholeChar(_0x5f38x20, k)
                }
            };
            _0x5f38x21 = _0x5f38x21['replace'](new RegExp(_0x5f38x1d['charAt'](k), 'g'), unicode_char)
        };
        result_text_styles[_0x5f38x1f] = _0x5f38x21
    };
    _0x5f38x1d = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    _0x5f38x15 = _0x5f38x1e;
    named_fancy_styles = ['bridge_above', 'bridge_bellow', 'asterisk_bellow', 'plus_sign_bellow', 'x_above_bellow', 'upward_arrow_bellow', 'love', 'strikethrough', 'tildeStrikethrough', 'slash', 'underline', 'doubleUnderline', 'stinky', 'black-bracket', 'white-bracket', 'emoji-text', 'wideDaddy', 'invisibleInk'];
    var _0x5f38x22 = ['🅰', '🅱', '🌜', '🌛', '🎗', '🎏', '🌀', '♓', '🎐', '🎷', '🎋', '👢', '〽️', '🎵', '⚽', '🅿️', '🍳', '🌱', '💲', '🌴', '⛎', '✅', '🔱', '❎', '🍸', '💤'];
    for (nameStyleIndex = 0; nameStyleIndex <= named_fancy_styles['length']; nameStyleIndex++) {
        var _0x5f38x20 = named_fancy_styles[nameStyleIndex];
        var _0x5f38x21 = _0x5f38x15;
        for (k = 0; k < _0x5f38x1d['length']; k++) {
            unicode_char = _0x5f38x1d[k];
            switch (_0x5f38x20) {
            case 'bridge_above':
                unicode_char = _0x5f38x1d[k] + '͆';
                break;
            case 'bridge_bellow':
                unicode_char = _0x5f38x1d[k] + '̺';
                break;
            case 'asterisk_bellow':
                unicode_char = _0x5f38x1d[k] + '͙';
                break;
            case 'plus_sign_bellow':
                unicode_char = _0x5f38x1d[k] + '̟';
                break;
            case 'x_above_bellow':
                unicode_char = _0x5f38x1d[k] + '̽' + '͓';
                break;
            case 'upward_arrow_bellow':
                unicode_char = _0x5f38x1d[k] + '͎';
                break;
            case 'love':
                unicode_char = _0x5f38x1d[k] + '♥';
                break;
            case 'strikethrough':
                unicode_char = _0x5f38x1d[k] + '̶';
                break;
            case 'tildeStrikethrough':
                unicode_char = _0x5f38x1d[k] + '̴';
                break;
            case 'slash':
                unicode_char = _0x5f38x1d[k] + '̷';
                break;
            case 'underline':
                unicode_char = _0x5f38x1d[k] + '̲';
                break;
            case 'doubleUnderline':
                unicode_char = _0x5f38x1d[k] + '̳';
                break;
            case 'stinky':
                unicode_char = _0x5f38x1d[k] + '̾';
                break;
            case 'black-bracket':
                unicode_char = '【' + _0x5f38x1d[k] + '】';
                break;
            case 'white-bracket':
                unicode_char = '『' + _0x5f38x1d[k] + '』';
                break;
            case 'emoji-text':
                if (k <= 51) {
                    unicode_char = _0x5f38x22[k % 26]
                } else {
                    unicode_char = _0x5f38x1d[k]
                };
                break;
            case 'invisibleInk':
                unicode_char = _0x5f38x1d[k] + '҉';
                break
            };
            _0x5f38x21 = _0x5f38x21['replace'](new RegExp(_0x5f38x1d[k], 'g'), unicode_char)
        };
        switch (_0x5f38x20) {
        case 'strikethrough':
            _0x5f38x21 = _0x5f38x21['replace'](/ /g, ' ' + '̶');
            break;
        case 'tildeStrikethrough':
            _0x5f38x21 = _0x5f38x21['replace'](/ /g, ' ' + '̴');
            break;
        case 'slash':
            _0x5f38x21 = _0x5f38x21['replace'](/ /g, ' ' + '̷');
            break;
        case 'underline':
            _0x5f38x21 = _0x5f38x21['replace'](/ /g, ' ' + '̲');
            break;
        case 'doubleUnderline':
            _0x5f38x21 = _0x5f38x21['replace'](/ /g, ' ' + '̳');
            break;
        case 'emoji-text':
            _0x5f38x21 = _0x5f38x21['replace'](/ /g, '  ');
            break
        };
        result_text_styles[_0x5f38x20] = _0x5f38x21
    }
}

function createStylishText() {
    var _0x5f38x24 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var _0x5f38x25 = '0123456789';
    var _0x5f38x26 = new Array('ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ', '\u03B1\u0432\xA2\u2202\u0454fg\u043D\u03B9\u05E0\u043A\u2113\u043C\u0438\u03C3\u03C1q\u044F\u0455\u0442\u03C5\u03BD\u03C9\u03C7\u0443z\u03B1\u0432\xA2\u2202\u0454fg\u043D\u03B9\u05E0\u043A\u2113\u043C\u0438\u03C3\u03C1q\u044F\u0455\u0442\u03C5\u03BD\u03C9\u03C7\u0443z', '͏a͏b͏c͏d͏e͏f͏g͏h͏i͏j͏k͏l͏m͏n͏o͏p͏q͏r͏s͏t͏u͏v͏w͏x͏y͏z͏a͏b͏c͏d͏e͏f͏g͏h͏i͏j͏k͏l͏m͏n͏o͏p͏q͏r͏s͏t͏u͏v͏w͏x͏y͏z͏', '\u20B3\u0E3F\u20B5\u0110\u0246\u20A3\u20B2\u2C67\u0142J\u20AD\u2C60\u20A5\u20A6\xD8\u20B1Q\u2C64\u20B4\u20AE\u0244V\u20A9\u04FE\u024E\u2C6B\u20B3\u0E3F\u20B5\u0110\u0246\u20A3\u20B2\u2C67\u0142J\u20AD\u2C60\u20A5\u20A6\xD8\u20B1Q\u2C64\u20B4\u20AE\u0244V\u20A9\u04FE\u024E\u2C6B', 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', '\xE4\u1E05\u010B\u010F\u1EC7\u1E1F\u0121\u1E27\xEFj\u1E33\u0140\u1E43\u0144\xF6\u1E57q\u0155\u1E69\u1E97\xFC\u1E7F\u1E85\u1E8D\xFF\u1E93\xC4\u1E04\u010A\u010E\u1EC6\u1E1E\u0120\u1E26\xCFJ\u1E32\u013F\u1E42\u0143\xD6\u1E56Q\u0154\u1E68\u1E6E\xDC\u1E7E\u1E84\u1E8C\u0178\u1E92', 'ᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ', 'λϐςdεғϑнιϳκlϻπσρφгsτυvшϰψzΔƁCDΣFGHIJƘLΜ∏ΘƤႳΓЅƬƱƲШЖΨZ', 'ḀḃḉḊḕḟḠḧḭjḲḶṁṆṏṖqṙṠṮṳṼẇẌẏẒḀḂḈḊḔḞḠḦḬJḲḶṀṆṎṖQṘṠṮṲṼẆẌẎẒ', 'ᎪbᏟᎠᎬfᎶhᎥjᏦᏞmᏁᎾᏢqᏒsᏆuᏉᎳxᎽᏃᎪbᏟᎠᎬfᎶhᎥjᏦᏞmᏁᎾᏢqᏒsᏆuᏉᎳxᎽᏃ', '\u03B1\u0432cd\u0454fgh\xEDjklmn\u03C3pqrstuvw\u0445\u0447z\u03B1\u0432cd\u0454fgh\xEDjklmn\u03C3pqrstuvw\u0445\u0447z', 'ǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐ', '̾a̾b̾c̾d̾e̾f̾g̾h̾i̾j̾k̾l̾m̾n̾o̾p̾q̾r̾s̾t̾u̾v̾w̾x̾y̾z̾̾a̾b̾c̾d̾e̾f̾g̾h̾i̾j̾k̾l̾m̾n̾o̾p̾q̾r̾s̾t̾u̾v̾w̾x̾y̾z̾', 'ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ', 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘϙʀꜱᴛᴜᴠᴡxʏᴢABCDEFGHIJKLMNOPQRSTUVWXYZ', 'ɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎzɐqɔpǝɟƃɥıɾʞlɯuodbɹsʇnʌʍxʎz', 'ܣaܣܣbܣܣcܣܣdܣܣeܣܣfܣܣgܣܣhܣܣiܣܣjܣܣkܣܣlܣܣmܣܣnܣܣoܣܣpܣܣqܣܣrܣܣsܣܣtܣܣuܣܣvܣܣwܣܣxܣܣyܣܣzܣܣaܣܣbܣܣcܣܣdܣܣeܣܣfܣܣgܣܣhܣܣiܣܣjܣܣkܣܣlܣܣmܣܣnܣܣoܣܣpܣܣqܣܣrܣܣsܣܣtܣܣuܣܣvܣܣwܣܣxܣܣyܣܣzܣ', '♥a♥♥b♥♥c♥♥d♥♥e♥♥f♥♥g♥♥h♥♥i♥♥j♥♥k♥♥l♥♥m♥♥n♥♥o♥♥p♥♥q♥♥r♥♥s♥♥t♥♥u♥♥v♥♥w♥♥x♥♥y♥♥z♥♥a♥♥b♥♥c♥♥d♥♥e♥♥f♥♥g♥♥h♥♥i♥♥j♥♥k♥♥l♥♥m♥♥n♥♥o♥♥p♥♥q♥♥r♥♥s♥♥t♥♥u♥♥v♥♥w♥♥x♥♥y♥♥z♥', 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz', 'ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ', '🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩', '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙', '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡', '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕', '𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏', '𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩', '𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ​𝔻𝔼𝔽𝔾ℍ​𝕀𝕁𝕂𝕃𝕄ℕ​𝕆ℙ​ℚ​ℝ​𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ​', '𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ​𝔇𝔈𝔉𝔊ℌ​ℑ​𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ​𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ​', '𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅', '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉', '🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉', '𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵', 'αႦƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυʋɯxყȥABCDEFGHIJKLMNOPQRSTUVWXYZ', '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉', 'ꍏ♭☾◗€Ϝ❡♄♗♪ϰ↳♔♫⊙ρ☭☈ⓢ☂☋✓ω⌘☿☡ꍏ♭☾◗€Ϝ❡♄♗♪ϰ↳♔♫⊙ρ☭☈ⓢ☂☋✓ω⌘☿☡', 'абcдёfgнїjкгѫпѳpфя$тцѵщжчзАБCДЄFGHЇJКГѪЙѲPФЯ$TЦѴШЖЧЗ', '48(d3f9h!jk1mn0pqr57uvwxy248(D3F9H!JK1MN0PQR57UVWXY2');
    var _0x5f38x27 = _0x5f38x24['length'];
    var _0x5f38x28 = _0x5f38x26['length'];
    var _0x5f38x15 = $('#introduced-text-input')['val']()['trim']();
    if (_0x5f38x15['length'] == 0) {
        _0x5f38x15 = 'Preview Text'
    };
    result_text_styles['noStyle'] = _0x5f38x15;
    var _0x5f38x29 = new Array();
    var _0x5f38x2a = new Array();
    var _0x5f38x2b = new Array();
    for (k = 1; k <= _0x5f38x28; k++) {
        if (k == 1) {
            _0x5f38x2a[k] = 'special'
        };
        if (k == 2) {
            _0x5f38x2a[k] = 'boxed'
        };
        if (k == 3) {
            _0x5f38x2a[k] = 'bubble'
        };
        if (k == 4) {
            _0x5f38x2a[k] = 'antrophobia'
        };
        if (k == 5) {
            _0x5f38x2a[k] = 'blurry'
        };
        if (k == 6) {
            _0x5f38x2a[k] = 'currency'
        };
        if (k == 7) {
            _0x5f38x2a[k] = 'diamond'
        };
        if (k == 8) {
            _0x5f38x2a[k] = 'dirty'
        };
        if (k == 9) {
            _0x5f38x2a[k] = 'fairy'
        };
        if (k == 10) {
            _0x5f38x2a[k] = 'greek_style'
        };
        if (k == 11) {
            _0x5f38x2a[k] = 'knight'
        };
        if (k == 12) {
            _0x5f38x2a[k] = 'magic'
        };
        if (k == 13) {
            _0x5f38x2a[k] = 'paranormal'
        };
        if (k == 14) {
            _0x5f38x2a[k] = 'sorcerer'
        };
        if (k == 16) {
            _0x5f38x2a[k] = 'thin'
        };
        if (k == 17) {
            _0x5f38x2a[k] = 'tiny'
        };
        if (k == 18) {
            _0x5f38x2a[k] = 'upsideDown'
        };
        if (k == 22) {
            _0x5f38x2a[k] = 'smallCaps'
        };
        if (k == 23) {
            _0x5f38x2a[k] = 'blackBubble'
        };
        if (k == 24) {
            _0x5f38x2a[k] = 'bold'
        };
        if (k == 25) {
            _0x5f38x2a[k] = 'italic'
        };
        if (k == 26) {
            _0x5f38x2a[k] = 'boldItalic'
        };
        if (k == 27) {
            _0x5f38x2a[k] = 'script'
        };
        if (k == 28) {
            _0x5f38x2a[k] = 'boldScript'
        };
        if (k == 29) {
            _0x5f38x2a[k] = 'doubleStruck'
        };
        if (k == 30) {
            _0x5f38x2a[k] = 'fraktur'
        };
        if (k == 31) {
            _0x5f38x2a[k] = 'boldFraktur'
        };
        if (k == 32) {
            _0x5f38x2a[k] = 'square'
        };
        if (k == 33) {
            _0x5f38x2a[k] = 'blackSquare'
        };
        if (k == 34) {
            _0x5f38x2a[k] = 'handWriting1'
        };
        if (k == 35) {
            _0x5f38x2a[k] = 'handWriting2'
        };
        if (k == 36) {
            _0x5f38x2a[k] = 'monospace'
        };
        if (k == 37) {
            _0x5f38x2a[k] = 'fancySymbols'
        };
        if (k == 38) {
            _0x5f38x2a[k] = 'rusify'
        };
        if (k == 39) {
            _0x5f38x2a[k] = 'h4k3r'
        };
        _0x5f38x2b[k] = _0x5f38x15;
        var _0x5f38x2c = '';
        var _0x5f38x2d = '𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡';
        var _0x5f38x2e = '⓪①②③④⑤⑥⑦⑧⑨';
        var _0x5f38x2f = '⓿➊➋➌➍➎➏➐➑➒';
        var _0x5f38x30 = '0123456789';
        var _0x5f38x31 = '𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿';
        var _0x5f38x32 = '𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿';
        var _0x5f38x33 = '０１２３４５６７８９';
        var _0x5f38x34 = 'օյշՅկՏճԴՑգ';
        var _0x5f38x35 = '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗';
        var _0x5f38x36 = '⓪➊➋➌➍➎➏➐➑➒';
        for (i = 0; i < _0x5f38x27; i++) {
            if (k == 2) {
                _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), '[̲̅' + _0x5f38x26[k - 1]['charAt'](i) + '̲̅]');
                if (i < _0x5f38x25['length']) {
                    _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x25['charAt'](i), 'g'), '[̲̅' + _0x5f38x30['charAt'](i) + '̲̅]')
                }
            } else {
                if (k == 3) {
                    _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), _0x5f38x26[k - 1]['charAt'](i));
                    if (i < _0x5f38x25['length']) {
                        _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x25['charAt'](i), 'g'), _0x5f38x2e['charAt'](i))
                    }
                } else {
                    if (k == 5) {
                        _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), '͏' + _0x5f38x26[k - 1]['charAt'](2 * i + 1))
                    } else {
                        if (k == 7) {
                            _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), '۰۪۫' + _0x5f38x26[k - 1]['charAt'](i) + '۪۫۰')
                        } else {
                            if (k == 16) {
                                _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), _0x5f38x26[k - 1]['charAt'](i));
                                if (i < _0x5f38x25['length']) {
                                    _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x25['charAt'](i), 'g'), _0x5f38x33['charAt'](i))
                                }
                            } else {
                                if (k == 18) {
                                    _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), _0x5f38x26[k - 1]['charAt'](i)['split']('')['join'](''))
                                } else {
                                    if (k == 22) {
                                        _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), _0x5f38x26[k - 1]['charAt'](i));
                                        if (i < _0x5f38x25['length']) {
                                            var _0x5f38x37 = getWholeChar(_0x5f38x32, i * 2);
                                            _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x25['charAt'](i), 'g'), _0x5f38x37)
                                        }
                                    } else {
                                        if (k == 23) {
                                            var _0x5f38x38 = getWholeChar(_0x5f38x26[k - 1], i * 2);
                                            _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), _0x5f38x38);
                                            if (i < _0x5f38x25['length']) {
                                                _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x25['charAt'](i), 'g'), _0x5f38x2f['charAt'](i))
                                            }
                                        } else {
                                            if (k == 24) {
                                                var _0x5f38x38 = getWholeChar(_0x5f38x26[k - 1], i * 2);
                                                _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), _0x5f38x38);
                                                if (i < _0x5f38x25['length']) {
                                                    var _0x5f38x37 = getWholeChar(_0x5f38x35, i * 2);
                                                    _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x25['charAt'](i), 'g'), _0x5f38x37)
                                                }
                                            } else {
                                                if (k == 29) {
                                                    var _0x5f38x38 = getWholeChar(_0x5f38x26[k - 1], i * 2);
                                                    _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), _0x5f38x38);
                                                    if (i < _0x5f38x25['length']) {
                                                        var _0x5f38x37 = getWholeChar(_0x5f38x2d, i * 2);
                                                        _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x25['charAt'](i), 'g'), _0x5f38x37)
                                                    }
                                                } else {
                                                    if (k == 30 || k == 31) {
                                                        var _0x5f38x38 = getWholeChar(_0x5f38x26[k - 1], i * 2);
                                                        _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), _0x5f38x38);
                                                        if (i < _0x5f38x25['length']) {
                                                            _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x25['charAt'](i), 'g'), _0x5f38x34['charAt'](i))
                                                        }
                                                    } else {
                                                        if (k == 36) {
                                                            var _0x5f38x38 = getWholeChar(_0x5f38x26[k - 1], i * 2);
                                                            _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), _0x5f38x38);
                                                            if (i < _0x5f38x25['length']) {
                                                                var _0x5f38x37 = getWholeChar(_0x5f38x31, i * 2);
                                                                _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x25['charAt'](i), 'g'), _0x5f38x37)
                                                            }
                                                        } else {
                                                            if (k == 37) {
                                                                _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), _0x5f38x26[k - 1]['charAt'](i));
                                                                if (i < _0x5f38x25['length']) {
                                                                    _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x25['charAt'](i), 'g'), _0x5f38x36['charAt'](i))
                                                                }
                                                            } else {
                                                                if (k >= 23 && k <= 36 && k != 35) {
                                                                    var _0x5f38x38 = getWholeChar(_0x5f38x26[k - 1], i * 2);
                                                                    _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), _0x5f38x38)
                                                                } else {
                                                                    _0x5f38x2b[k] = _0x5f38x2b[k]['replace'](new RegExp(_0x5f38x24['charAt'](i), 'g'), _0x5f38x26[k - 1]['charAt'](i))
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        result_text_styles[_0x5f38x2a[k]] = _0x5f38x2b[k]
    }
}

function getWholeChar(_0x5f38x3a, _0x5f38x3b) {
    var _0x5f38x3c = _0x5f38x3a['charCodeAt'](_0x5f38x3b);
    if (Number['isNaN'](_0x5f38x3c)) {
        return ''
    };
    if (_0x5f38x3c < 0xD800 || _0x5f38x3c > 0xDFFF) {
        return _0x5f38x3a['charAt'](_0x5f38x3b)
    };
    if (0xD800 <= _0x5f38x3c && _0x5f38x3c <= 0xDBFF) {
        if (_0x5f38x3a['length'] <= (_0x5f38x3b + 1)) {
            throw 'High surrogate without following low surrogate'
        };
        var _0x5f38x3d = _0x5f38x3a['charCodeAt'](_0x5f38x3b + 1);
        if (0xDC00 > _0x5f38x3d || _0x5f38x3d > 0xDFFF) {
            throw 'High surrogate without following low surrogate'
        };
        return _0x5f38x3a['charAt'](_0x5f38x3b) + _0x5f38x3a['charAt'](_0x5f38x3b + 1)
    };
    if (_0x5f38x3b === 0) {
        throw 'Low surrogate without preceding high surrogate'
    };
    var _0x5f38x3e = _0x5f38x3a['charCodeAt'](_0x5f38x3b - 1);
    if (0xD800 > _0x5f38x3e || _0x5f38x3e > 0xDBFF) {
        throw 'Low surrogate without preceding high surrogate'
    };
    return false
}

function getParameterByName(_0x5f38x40, _0x5f38x41) {
    if (!_0x5f38x41) {
        _0x5f38x41 = window['location']['href']
    };
    _0x5f38x40 = _0x5f38x40['replace'](/[\[\]]/g, '\_0x994a[350]');
    var _0x5f38x42 = new RegExp('[?&]' + _0x5f38x40 + '(=([^&#]*)|&|#|$)'),
        _0x5f38x43 = _0x5f38x42['exec'](_0x5f38x41);
    if (!_0x5f38x43) {
        return null
    };
    if (!_0x5f38x43[2]) {
        return ''
    };
    return decodeURIComponent(_0x5f38x43[2]['replace'](/\+/g, ' '))
}

function capitalizeFirstLetter(_0x5f38x45) {
    return _0x5f38x45['charAt'](0)['toUpperCase']() + _0x5f38x45['slice'](1)
}




      function copyToClipboard(text) {
        var textArea = document.createElement( "textarea" );
        textArea.value = text;
        document.body.appendChild( textArea );
        textArea.select();
        try {
           var successful = document.execCommand( 'copy' );
           var msg = successful ? 'successful' : 'unsuccessful';
           console.log('Copying text command was ' + msg);
        } catch (err) {
           console.log('Oops, unable to copy');
        }
        document.body.removeChild( textArea );
      }
      
   
      
      
      
