'use strict';var a212_0x35a159=a212_0x3d69;(function(_0x2cbaae,_0x41bfc0){var _0x241b4d=a212_0x3d69,_0x3a604c=_0x2cbaae();while(!![]){try{var _0x24ad85=parseInt(_0x241b4d(0x1fb))/0x1*(-parseInt(_0x241b4d(0x1ed))/0x2)+parseInt(_0x241b4d(0x1db))/0x3*(parseInt(_0x241b4d(0x1d7))/0x4)+-parseInt(_0x241b4d(0x204))/0x5+-parseInt(_0x241b4d(0x209))/0x6*(-parseInt(_0x241b4d(0x1f8))/0x7)+parseInt(_0x241b4d(0x207))/0x8+-parseInt(_0x241b4d(0x1ee))/0x9+parseInt(_0x241b4d(0x20a))/0xa*(parseInt(_0x241b4d(0x1da))/0xb);if(_0x24ad85===_0x41bfc0)break;else _0x3a604c['push'](_0x3a604c['shift']());}catch(_0x1780d4){_0x3a604c['push'](_0x3a604c['shift']());}}}(a212_0x2ce8,0x913ce));exports[a212_0x35a159(0x211)]=!![],exports[a212_0x35a159(0x206)]=exports[a212_0x35a159(0x1e8)]=exports[a212_0x35a159(0x20f)]=exports[a212_0x35a159(0x1fe)]=exports[a212_0x35a159(0x1e6)]=exports[a212_0x35a159(0x1f4)]=exports[a212_0x35a159(0x1e7)]=exports[a212_0x35a159(0x1d2)]=exports['getScriptType']=exports[a212_0x35a159(0x1ec)]=exports[a212_0x35a159(0x1d6)]=exports['isMultisigPath']=exports[a212_0x35a159(0x1e9)]=exports[a212_0x35a159(0x20c)]=exports[a212_0x35a159(0x1e3)]=exports[a212_0x35a159(0x1e0)]=void 0x0;var _CoinInfo=require('../data/CoinInfo'),_constants=require('../constants'),HD_HARDENED=0x80000000;exports['HD_HARDENED']=HD_HARDENED;var toHardened=function toHardened(_0x30068c){return(_0x30068c|HD_HARDENED)>>>0x0;};exports['toHardened']=toHardened;var fromHardened=function fromHardened(_0x3f2188){return(_0x3f2188&~HD_HARDENED)>>>0x0;};exports[a212_0x35a159(0x20c)]=fromHardened;var PATH_NOT_VALID=_constants[a212_0x35a159(0x1dd)]['TypedError'](a212_0x35a159(0x1d5),a212_0x35a159(0x1ff)),PATH_NEGATIVE_VALUES=_constants[a212_0x35a159(0x1dd)][a212_0x35a159(0x1ea)](a212_0x35a159(0x1d5),a212_0x35a159(0x205)),getHDPath=function getHDPath(_0x4b6069){var _0x180cfb=a212_0x35a159,_0x4f08ac=_0x4b6069[_0x180cfb(0x1df)]()[_0x180cfb(0x20b)]('/');if(_0x4f08ac[0x0]!=='m')throw PATH_NOT_VALID;return _0x4f08ac[_0x180cfb(0x208)](function(_0x111ccb){return _0x111ccb!=='m'&&_0x111ccb!=='';})[_0x180cfb(0x210)](function(_0x262f4d){var _0x12d25c=_0x180cfb,_0x3f39b6=![];_0x262f4d['substr'](_0x262f4d['length']-0x1)==='\x27'&&(_0x3f39b6=!![],_0x262f4d=_0x262f4d[_0x12d25c(0x1e4)](0x0,_0x262f4d[_0x12d25c(0x20e)]-0x1));var _0x42beae=parseInt(_0x262f4d);if(isNaN(_0x42beae))throw PATH_NOT_VALID;else{if(_0x42beae<0x0)throw PATH_NEGATIVE_VALUES;}return _0x3f39b6&&(_0x42beae=toHardened(_0x42beae)),_0x42beae;});};exports[a212_0x35a159(0x1e9)]=getHDPath;var isMultisigPath=function isMultisigPath(_0x4a2404){var _0x17e4ad=a212_0x35a159;return Array[_0x17e4ad(0x1d1)](_0x4a2404)&&_0x4a2404[0x0]===toHardened(0x30);};exports[a212_0x35a159(0x1f5)]=isMultisigPath;var isSegwitPath=function isSegwitPath(_0x4cae35){var _0x1adc18=a212_0x35a159;return Array[_0x1adc18(0x1d1)](_0x4cae35)&&_0x4cae35[0x0]===toHardened(0x31);};exports['isSegwitPath']=isSegwitPath;var isBech32Path=function isBech32Path(_0x47fdcd){var _0x17dd21=a212_0x35a159;return Array[_0x17dd21(0x1d1)](_0x47fdcd)&&_0x47fdcd[0x0]===toHardened(0x54);};exports[a212_0x35a159(0x1ec)]=isBech32Path;var getScriptType=function getScriptType(_0x36a39c){var _0x4b963a=a212_0x35a159;if(!Array[_0x4b963a(0x1d1)](_0x36a39c)||_0x36a39c[_0x4b963a(0x20e)]<0x1)return _0x4b963a(0x1dc);var _0x17bcc5=fromHardened(_0x36a39c[0x0]);switch(_0x17bcc5){case 0x30:return _0x4b963a(0x200);case 0x31:return _0x4b963a(0x1f9);case 0x54:return'SPENDWITNESS';default:return _0x4b963a(0x1dc);}};exports[a212_0x35a159(0x1f3)]=getScriptType;function a212_0x2ce8(){var _0x321ee7=['</span>','label','toHardened','substr','replace','getPathFromIndex','validatePath','getPublicKeyLabel','getHDPath','TypedError','\x20<span>账户\x20#','isBech32Path','5794gikPuY','8896032xjocaM','segwit','join','toString','\x20<span>account\x20#','getScriptType','getSerializedPath','isMultisigPath','#NETWORK','\x20multisig','47068gRQNCc','SPENDP2SHWITNESS','PAYTOWITNESS','361WEFMht','PAYTOMULTISIG','PAYTOP2SHWITNESS','getIndexFromPath','Not\x20a\x20valid\x20path','SPENDMULTISIG','string','授权查看','legacy','2524960dfTYIh','Path\x20cannot\x20contain\x20negative\x20values','getLabel','9321656hcoZHO','filter','372TUBVrd','650knkZPt','split','fromHardened','\x20legacy','length','getAccountLabel','map','__esModule','PAYTOADDRESS','isArray','getOutputScriptType','getCoinName','splice','Method_InvalidParameter','isSegwitPath','4GMoHAw','Export\x20Copay\x20ID\x20of','Unknown\x20coin','203423TlTuFg','1050033VYvoZR','SPENDADDRESS','ERRORS','\x20:\x20','toLowerCase','HD_HARDENED'];a212_0x2ce8=function(){return _0x321ee7;};return a212_0x2ce8();}var getOutputScriptType=function getOutputScriptType(_0x2d1b9d){var _0x1df394=a212_0x35a159;if(!Array['isArray'](_0x2d1b9d)||_0x2d1b9d[_0x1df394(0x20e)]<0x1)return _0x1df394(0x1d0);if(_0x2d1b9d[0x0]===0x31)return _0x1df394(0x1fd);var _0x32a053=fromHardened(_0x2d1b9d[0x0]);switch(_0x32a053){case 0x30:return _0x1df394(0x1fc);case 0x31:return _0x1df394(0x1fd);case 0x54:return _0x1df394(0x1fa);default:return _0x1df394(0x1d0);}};function a212_0x3d69(_0x4a84ce,_0x34bc5a){var _0x2ce87f=a212_0x2ce8();return a212_0x3d69=function(_0x3d6936,_0x58f633){_0x3d6936=_0x3d6936-0x1d0;var _0xa2f280=_0x2ce87f[_0x3d6936];return _0xa2f280;},a212_0x3d69(_0x4a84ce,_0x34bc5a);}exports[a212_0x35a159(0x1d2)]=getOutputScriptType;var validatePath=function validatePath(_0x66912a,_0x3f1bdc,_0x56a712){var _0xe316ea=a212_0x35a159;_0x3f1bdc===void 0x0&&(_0x3f1bdc=0x0);_0x56a712===void 0x0&&(_0x56a712=![]);var _0x2aa907;if(typeof _0x66912a===_0xe316ea(0x201))_0x2aa907=getHDPath(_0x66912a);else Array[_0xe316ea(0x1d1)](_0x66912a)&&(_0x2aa907=_0x66912a[_0xe316ea(0x210)](function(_0x4b84fe){var _0x4965fe=parseInt(_0x4b84fe);if(isNaN(_0x4965fe))throw PATH_NOT_VALID;else{if(_0x4965fe<0x0)throw PATH_NEGATIVE_VALUES;}return _0x4965fe;}));if(!_0x2aa907)throw PATH_NOT_VALID;if(_0x3f1bdc>0x0&&_0x2aa907['length']<_0x3f1bdc)throw PATH_NOT_VALID;return _0x56a712?_0x2aa907[_0xe316ea(0x1d4)](0x0,0x3):_0x2aa907;};exports[a212_0x35a159(0x1e7)]=validatePath;var getSerializedPath=function getSerializedPath(_0x27b4de){var _0x4f7789=a212_0x35a159;return'm/'+_0x27b4de[_0x4f7789(0x210)](function(_0x556afc){var _0x3a7c55=(_0x556afc&~HD_HARDENED)['toString']();return _0x556afc&HD_HARDENED?_0x3a7c55+'\x27':_0x3a7c55;})[_0x4f7789(0x1f0)]('/');};exports[a212_0x35a159(0x1f4)]=getSerializedPath;var getPathFromIndex=function getPathFromIndex(_0x4edf75,_0x25ed9c,_0x5130b1){return[toHardened(_0x4edf75),toHardened(_0x25ed9c),toHardened(_0x5130b1)];};exports[a212_0x35a159(0x1e6)]=getPathFromIndex;var getIndexFromPath=function getIndexFromPath(_0x8b779d){var _0x4a3d50=a212_0x35a159;if(_0x8b779d[_0x4a3d50(0x20e)]<0x3)throw _constants[_0x4a3d50(0x1dd)][_0x4a3d50(0x1ea)](_0x4a3d50(0x1d5),'getIndexFromPath:\x20invalid\x20path\x20length\x20'+_0x8b779d[_0x4a3d50(0x1f1)]());return fromHardened(_0x8b779d[0x2]);};exports[a212_0x35a159(0x1fe)]=getIndexFromPath;var getAccountLabel=function getAccountLabel(_0x437ea3,_0x2d2a18){var _0x440483=a212_0x35a159,_0x3a2062=_0x2d2a18[_0x440483(0x1e2)],_0x4c20a9=fromHardened(_0x437ea3[0x0]),_0x2f76d3=fromHardened(_0x437ea3[0x2]),_0xbd0216=_0x2f76d3+0x1,_0x2edcf4='Export\x20info\x20of',_0x3bcc41='';if(_0x4c20a9===0x30)_0x3bcc41=_0x3a2062+_0x440483(0x1f7);else _0x4c20a9===0x2c&&_0x2d2a18[_0x440483(0x1ef)]?_0x3bcc41=_0x3a2062+_0x440483(0x20d):_0x3bcc41=_0x3a2062;return _0x2edcf4+'\x20'+_0x3bcc41+_0x440483(0x1f2)+_0xbd0216+'</span>';};exports['getAccountLabel']=getAccountLabel;var getPublicKeyLabel=function getPublicKeyLabel(_0x3ddf85,_0xaf9ed0){var _0x363e61=a212_0x35a159,_0x42ab83=![],_0x16f195=_0x363e61(0x1d9);_0xaf9ed0?(_0x16f195=_0xaf9ed0[_0x363e61(0x1e2)],_0x42ab83=_0xaf9ed0[_0x363e61(0x1ef)]):_0x16f195=(0x0,_CoinInfo[_0x363e61(0x1d3)])(_0x3ddf85);var _0x221650=fromHardened(_0x3ddf85[0x0]),_0x54fdf3=_0x3ddf85[_0x363e61(0x20e)]>=0x3?fromHardened(_0x3ddf85[0x2]):-0x1,_0x3f4334=_0x54fdf3+0x1,_0x570066=_0x363e61(0x202),_0x2d5af6='';if(_0x221650===0xb11e){var _0x44abde=fromHardened(_0x3ddf85[0x1]);_0x54fdf3=fromHardened(_0x3ddf85[0x3]),_0x3f4334=_0x54fdf3+0x1,_0x570066=_0x363e61(0x1d8);if(_0x44abde===0x30)_0x2d5af6='multisig';else _0x44abde===0x2c&&(_0x2d5af6=_0x363e61(0x203));}else{if(_0x221650===0x30)_0x2d5af6=_0x16f195+_0x363e61(0x1f7);else{if(_0x221650===0x2c&&_0x42ab83)_0x2d5af6=_0x16f195+_0x363e61(0x20d);else _0x221650===0x54&&_0x42ab83?_0x2d5af6=_0x16f195+'\x20native\x20segwit':_0x2d5af6=_0x16f195;}}return _0x3f4334>0x0?_0x570066+_0x363e61(0x1de)+_0x2d5af6+_0x363e61(0x1eb)+_0x3f4334+_0x363e61(0x1e1):_0x570066;};exports[a212_0x35a159(0x1e8)]=getPublicKeyLabel;var getLabel=function getLabel(_0x5581e0,_0x5eabd1){var _0x309e7c=a212_0x35a159;if(_0x5eabd1)return _0x5581e0[_0x309e7c(0x1e5)](_0x309e7c(0x1f6),_0x5eabd1[_0x309e7c(0x1e2)]);return _0x5581e0['replace'](_0x309e7c(0x1f6),'');};exports[a212_0x35a159(0x206)]=getLabel;