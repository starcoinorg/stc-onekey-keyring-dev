'use strict';var a150_0x607bb5=a150_0x1c6e;(function(_0x4139bc,_0x32567a){var _0x15cac4=a150_0x1c6e,_0x427e0e=_0x4139bc();while(!![]){try{var _0x173a7d=parseInt(_0x15cac4(0x1bb))/0x1*(parseInt(_0x15cac4(0x177))/0x2)+-parseInt(_0x15cac4(0x1a9))/0x3+parseInt(_0x15cac4(0x166))/0x4+parseInt(_0x15cac4(0x18e))/0x5*(parseInt(_0x15cac4(0x18d))/0x6)+parseInt(_0x15cac4(0x19b))/0x7+parseInt(_0x15cac4(0x167))/0x8*(-parseInt(_0x15cac4(0x1aa))/0x9)+parseInt(_0x15cac4(0x15a))/0xa;if(_0x173a7d===_0x32567a)break;else _0x427e0e['push'](_0x427e0e['shift']());}catch(_0x44069c){_0x427e0e['push'](_0x427e0e['shift']());}}}(a150_0x4a55,0x31074));var _interopRequireDefault=require('@babel/runtime/helpers/interopRequireDefault');exports['__esModule']=!![],exports[a150_0x607bb5(0x187)]=void 0x0;function a150_0x1c6e(_0x487a6b,_0x11a2f5){var _0x4a55a1=a150_0x4a55();return a150_0x1c6e=function(_0x1c6e77,_0x1a08a9){_0x1c6e77=_0x1c6e77-0x158;var _0x28e4a2=_0x4a55a1[_0x1c6e77];return _0x28e4a2;},a150_0x1c6e(_0x487a6b,_0x11a2f5);}var _regenerator=_interopRequireDefault(require('@babel/runtime/regenerator')),_asyncToGenerator2=_interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator')),_assertThisInitialized2=_interopRequireDefault(require('@babel/runtime/helpers/assertThisInitialized')),_inheritsLoose2=_interopRequireDefault(require('@babel/runtime/helpers/inheritsLoose')),_defineProperty2=_interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),_events=_interopRequireDefault(require('events')),POPUP=_interopRequireWildcard(require('../constants/popup')),IFRAME=_interopRequireWildcard(require('../constants/iframe')),UI=_interopRequireWildcard(require('../constants/ui')),_showPopupRequest=require('./showPopupRequest'),_networkUtils=require('../env/browser/networkUtils'),_deferred=require('../utils/deferred');function a150_0x4a55(){var _0x17c511=['object','postMessage','isArray','call','1250GSqOAL','handleMessage','end','defineProperty','payload','unlock','closeInterval','env','popupSrc','supportedBrowser','error','_window','close','normal','handleExtensionConnect','CLOSE_WINDOW','default','showPopupRequest','popupPromise','then','onConnect','getOwnPropertyDescriptor','526956nIDmOR','5teaFvy','clearInterval','set','CLOSE_UI_WINDOW','addEventListener','string','REQUEST_UI_WINDOW','promise','CLOSED','openTimeout','data','name','EXTENSION_USB_PERMISSIONS','1634689fUyNIQ','type','mark','query','get','return','trezor-usb-permissions.html','cancel','useBroadcastChannel','setTimeout','_blank','CANCEL_POPUP_REQUEST','#unsupported','handleExtensionMessage','827466evcFSg','177192OqKcDu','locked','prototype','open','openWrapper','settings','webextension','modal','create','ERROR','abrupt','apply','boolean','Popup\x20error:\x20','tab','getCurrent','tabs','48dzgnYZ','electron','extensionTabId','getOrigin','focus','origin','emit','hasOwnProperty','request','2434900smPxMx','resolve','length','LOADED','addListener','prev','iframeHandshake','lastError','requestTimeout','extensionPort','href','disconnect','865980HhNCkt','136KJQJlH','next','trezor-connect','clearTimeout','update','index','remove','windows','#loading','message','runtime','bind'];a150_0x4a55=function(){return _0x17c511;};return a150_0x4a55();}function _getRequireWildcardCache(_0x57e759){if(typeof WeakMap!=='function')return null;var _0x13ab76=new WeakMap(),_0x32a46e=new WeakMap();return(_getRequireWildcardCache=function _0x565d17(_0x53cbcc){return _0x53cbcc?_0x32a46e:_0x13ab76;})(_0x57e759);}function _interopRequireWildcard(_0x584c59,_0x5c3836){var _0xddcec7=a150_0x607bb5;if(!_0x5c3836&&_0x584c59&&_0x584c59['__esModule'])return _0x584c59;if(_0x584c59===null||typeof _0x584c59!==_0xddcec7(0x173)&&typeof _0x584c59!=='function')return{'default':_0x584c59};var _0x42f494=_getRequireWildcardCache(_0x5c3836);if(_0x42f494&&_0x42f494['has'](_0x584c59))return _0x42f494[_0xddcec7(0x19f)](_0x584c59);var _0x14de5b={},_0x5e4b2d=Object[_0xddcec7(0x17a)]&&Object['getOwnPropertyDescriptor'];for(var _0x448c06 in _0x584c59){if(_0x448c06!==_0xddcec7(0x187)&&Object[_0xddcec7(0x1ac)][_0xddcec7(0x158)][_0xddcec7(0x176)](_0x584c59,_0x448c06)){var _0x24f08e=_0x5e4b2d?Object[_0xddcec7(0x18c)](_0x584c59,_0x448c06):null;_0x24f08e&&(_0x24f08e[_0xddcec7(0x19f)]||_0x24f08e[_0xddcec7(0x190)])?Object[_0xddcec7(0x17a)](_0x14de5b,_0x448c06,_0x24f08e):_0x14de5b[_0x448c06]=_0x584c59[_0x448c06];}}return _0x14de5b[_0xddcec7(0x187)]=_0x584c59,_0x42f494&&_0x42f494[_0xddcec7(0x190)](_0x584c59,_0x14de5b),_0x14de5b;}var POPUP_REQUEST_TIMEOUT=0x352,POPUP_CLOSE_INTERVAL=0x1f4,POPUP_OPEN_TIMEOUT=0xbb8,PopupManager=function(_0x49c0ca){var _0x12c324=a150_0x607bb5;(0x0,_inheritsLoose2[_0x12c324(0x187)])(_0x5c9ed2,_0x49c0ca);function _0x5c9ed2(_0x255579){var _0x19140f=_0x12c324,_0x472ba6;return _0x472ba6=_0x49c0ca[_0x19140f(0x176)](this)||this,(0x0,_defineProperty2[_0x19140f(0x187)])((0x0,_assertThisInitialized2[_0x19140f(0x187)])(_0x472ba6),_0x19140f(0x162),0x0),(0x0,_defineProperty2[_0x19140f(0x187)])((0x0,_assertThisInitialized2[_0x19140f(0x187)])(_0x472ba6),_0x19140f(0x17d),0x0),(0x0,_defineProperty2['default'])((0x0,_assertThisInitialized2[_0x19140f(0x187)])(_0x472ba6),'extensionTabId',0x0),_0x472ba6[_0x19140f(0x1af)]=_0x255579,_0x472ba6['origin']=(0x0,_networkUtils[_0x19140f(0x1be)])(_0x255579[_0x19140f(0x17f)]),_0x472ba6['handleMessage']=_0x472ba6[_0x19140f(0x178)][_0x19140f(0x172)]((0x0,_assertThisInitialized2['default'])(_0x472ba6)),_0x472ba6[_0x19140f(0x160)]=(0x0,_deferred[_0x19140f(0x1b2)])(IFRAME['LOADED']),_0x472ba6[_0x19140f(0x1af)]['env']===_0x19140f(0x1b0)&&(_0x472ba6[_0x19140f(0x185)]=_0x472ba6[_0x19140f(0x185)]['bind']((0x0,_assertThisInitialized2[_0x19140f(0x187)])(_0x472ba6)),_0x472ba6[_0x19140f(0x1a8)]=_0x472ba6['handleExtensionMessage'][_0x19140f(0x172)]((0x0,_assertThisInitialized2[_0x19140f(0x187)])(_0x472ba6)),chrome[_0x19140f(0x171)][_0x19140f(0x18b)][_0x19140f(0x15e)](_0x472ba6[_0x19140f(0x185)])),window[_0x19140f(0x192)](_0x19140f(0x170),_0x472ba6['handleMessage'],![]),_0x472ba6;}var _0x147a6e=_0x5c9ed2[_0x12c324(0x1ac)];return _0x147a6e[_0x12c324(0x159)]=function _0x1a1bcb(_0x18e599){var _0x1f2c25=_0x12c324,_0x256325=this;_0x18e599===void 0x0&&(_0x18e599=![]);if(this[_0x1f2c25(0x1ab)]){this[_0x1f2c25(0x182)]&&(this[_0x1f2c25(0x1af)][_0x1f2c25(0x17e)]===_0x1f2c25(0x1b0)?chrome['tabs'][_0x1f2c25(0x16b)](this[_0x1f2c25(0x182)]['id'],{'active':!![]}):this[_0x1f2c25(0x182)][_0x1f2c25(0x1bf)]());return;}var _0x6595b6=this['open']['bind'](this);this[_0x1f2c25(0x1ab)]=!![];if(!this[_0x1f2c25(0x1af)][_0x1f2c25(0x180)])_0x6595b6();else{var _0x1103a9=_0x18e599||this[_0x1f2c25(0x1af)][_0x1f2c25(0x17e)]===_0x1f2c25(0x1b0)?0x1:POPUP_REQUEST_TIMEOUT;this[_0x1f2c25(0x162)]=window[_0x1f2c25(0x1a4)](function(){var _0x35c40b=_0x1f2c25;_0x256325[_0x35c40b(0x162)]=0x0,_0x6595b6(_0x18e599);},_0x1103a9);}},_0x147a6e[_0x12c324(0x1a2)]=function _0x55e6bd(){this['close']();},_0x147a6e[_0x12c324(0x17c)]=function _0x3dc874(){this['locked']=![];},_0x147a6e[_0x12c324(0x1ad)]=function _0x31d61e(_0x36c9ab){var _0x2f29f7=_0x12c324,_0xa9aef8=this,_0x43e48a=this[_0x2f29f7(0x1af)]['popupSrc'];if(!this[_0x2f29f7(0x1af)][_0x2f29f7(0x180)]){this[_0x2f29f7(0x1ae)](_0x43e48a+_0x2f29f7(0x1a7));return;}this[_0x2f29f7(0x189)]=(0x0,_deferred['create'])(POPUP['LOADED']),this['openWrapper'](_0x36c9ab?_0x43e48a+_0x2f29f7(0x16f):_0x43e48a),this[_0x2f29f7(0x17d)]=window['setInterval'](function(){var _0x49e9b6=_0x2f29f7;if(!_0xa9aef8[_0x49e9b6(0x182)])return;if(_0xa9aef8[_0x49e9b6(0x1af)]['env']==='webextension')chrome['tabs']['get'](_0xa9aef8[_0x49e9b6(0x182)]['id'],function(_0x266512){var _0x5238bc=_0x49e9b6;!_0x266512&&(_0xa9aef8[_0x5238bc(0x183)](),_0xa9aef8['emit'](POPUP[_0x5238bc(0x196)]));});else _0xa9aef8[_0x49e9b6(0x182)]['closed']&&(_0xa9aef8[_0x49e9b6(0x183)](),_0xa9aef8[_0x49e9b6(0x1c1)](POPUP[_0x49e9b6(0x196)]));},POPUP_CLOSE_INTERVAL),this[_0x2f29f7(0x197)]=window['setTimeout'](function(){var _0x5216d3=_0x2f29f7;_0xa9aef8['close'](),(0x0,_showPopupRequest['showPopupRequest'])(_0xa9aef8[_0x5216d3(0x1ad)][_0x5216d3(0x172)](_0xa9aef8),function(){_0xa9aef8['emit'](POPUP['CLOSED']);});},POPUP_OPEN_TIMEOUT);},_0x147a6e[_0x12c324(0x1ae)]=function _0x448f76(_0x1082d9){var _0x24d372=_0x12c324,_0x26126c=this;if(this[_0x24d372(0x1af)]['env']===_0x24d372(0x1b0))chrome[_0x24d372(0x16e)][_0x24d372(0x1b9)](null,function(_0x35cac8){var _0x32d80b=_0x24d372;_0x35cac8[_0x32d80b(0x19c)]!==_0x32d80b(0x184)?chrome[_0x32d80b(0x16e)][_0x32d80b(0x1b2)]({'url':_0x1082d9},function(_0x544a2c){var _0x1865d2=_0x32d80b;chrome[_0x1865d2(0x1ba)]['query']({'windowId':_0x544a2c['id'],'active':!![]},function(_0x5169f5){var _0x56753b=_0x1865d2;_0x26126c[_0x56753b(0x182)]=_0x5169f5[0x0];});}):chrome[_0x32d80b(0x1ba)][_0x32d80b(0x19e)]({'currentWindow':!![],'active':!![]},function(_0x41dbba){var _0x5a57f7=_0x32d80b,_0x45aa85={'url':_0x1082d9};Array[_0x5a57f7(0x175)](_0x41dbba)&&_0x41dbba[_0x5a57f7(0x15c)]>0x0&&(_0x26126c[_0x5a57f7(0x1bd)]=_0x41dbba[0x0]['id'],_0x45aa85[_0x5a57f7(0x16c)]=_0x41dbba[0x0][_0x5a57f7(0x16c)]+0x1),chrome[_0x5a57f7(0x1ba)][_0x5a57f7(0x1b2)](_0x45aa85,function(_0x32d323){_0x26126c['_window']=_0x32d323;});});});else this['settings']['env']===_0x24d372(0x1bc)?this[_0x24d372(0x182)]=window[_0x24d372(0x1ad)](_0x1082d9,_0x24d372(0x1b1)):(this['_window']=window[_0x24d372(0x1ad)]('',_0x24d372(0x1a5)),this['_window']&&(this[_0x24d372(0x182)]['location'][_0x24d372(0x164)]=_0x1082d9));},_0x147a6e['handleExtensionConnect']=function _0x19be75(_0x245836){var _0x4f60ae=_0x12c324;if(_0x245836[_0x4f60ae(0x199)]!==_0x4f60ae(0x169))return;if(!this[_0x4f60ae(0x182)]||this['_window']&&this[_0x4f60ae(0x182)]['id']!==_0x245836['sender'][_0x4f60ae(0x1b8)]['id']){_0x245836['disconnect']();return;}window[_0x4f60ae(0x16a)](this[_0x4f60ae(0x197)]),this[_0x4f60ae(0x163)]=_0x245836,this[_0x4f60ae(0x163)]['onMessage'][_0x4f60ae(0x15e)](this[_0x4f60ae(0x1a8)]);},_0x147a6e[_0x12c324(0x1a8)]=function _0x4a3250(_0x461f14){var _0x192bfe=_0x12c324,_0x5383d6=this;if(!this['extensionPort'])return;var _0x19a232=this['extensionPort'],_0x41546f=_0x461f14[_0x192bfe(0x198)];if(!_0x41546f||typeof _0x41546f!==_0x192bfe(0x173))return;if(_0x41546f['type']===POPUP[_0x192bfe(0x1b3)]){var _0x5f5b94=_0x41546f[_0x192bfe(0x17b)]&&typeof _0x41546f[_0x192bfe(0x17b)]['error']==='string'?_0x41546f[_0x192bfe(0x17b)][_0x192bfe(0x181)]:null;this[_0x192bfe(0x1c1)](POPUP[_0x192bfe(0x196)],_0x5f5b94?_0x192bfe(0x1b7)+_0x5f5b94:null),this[_0x192bfe(0x183)]();}else{if(_0x41546f[_0x192bfe(0x19c)]===POPUP['LOADED'])this['popupPromise']&&this[_0x192bfe(0x189)][_0x192bfe(0x15b)](),this[_0x192bfe(0x160)]['promise']['then'](function(_0x10b083){var _0x52c89e=_0x192bfe;_0x19a232[_0x52c89e(0x174)]({'type':POPUP['INIT'],'payload':{'settings':_0x5383d6['settings'],'useBroadcastChannel':_0x10b083}});});else{if(_0x41546f[_0x192bfe(0x19c)]===POPUP[_0x192bfe(0x19a)])chrome[_0x192bfe(0x1ba)][_0x192bfe(0x19e)]({'currentWindow':!![],'active':!![]},function(_0x539ced){var _0x46ad9d=_0x192bfe;chrome[_0x46ad9d(0x1ba)]['create']({'url':_0x46ad9d(0x1a1),'index':_0x539ced[0x0]['index']+0x1},function(_0x3c2e08){});});else _0x41546f['type']===POPUP[_0x192bfe(0x186)]&&(this[_0x192bfe(0x1c1)](POPUP[_0x192bfe(0x196)]),this[_0x192bfe(0x183)]());}}},_0x147a6e[_0x12c324(0x178)]=function _0x30656e(_0x5df7b2){var _0x444e24=_0x12c324,_0x4ad3aa=this,_0x4e8383=_0x5df7b2[_0x444e24(0x198)];if((0x0,_networkUtils[_0x444e24(0x1be)])(_0x5df7b2[_0x444e24(0x1c0)])!==this[_0x444e24(0x1c0)]||!_0x4e8383||typeof _0x4e8383!==_0x444e24(0x173))return;if(_0x4e8383['type']===IFRAME[_0x444e24(0x15d)]){var _0x4faa02=_0x4e8383['payload']&&typeof _0x4e8383[_0x444e24(0x17b)][_0x444e24(0x1a3)]===_0x444e24(0x1b6)?_0x4e8383[_0x444e24(0x17b)]['useBroadcastChannel']:![];this['iframeHandshake'][_0x444e24(0x15b)](_0x4faa02);}else{if(_0x4e8383[_0x444e24(0x19c)]===POPUP['BOOTSTRAP'])window['clearTimeout'](this[_0x444e24(0x197)]);else{if(_0x4e8383[_0x444e24(0x19c)]===POPUP[_0x444e24(0x1b3)]&&this['_window']){var _0x48c2c9=_0x4e8383['payload']&&typeof _0x4e8383['payload'][_0x444e24(0x181)]===_0x444e24(0x193)?_0x4e8383[_0x444e24(0x17b)]['error']:null;this[_0x444e24(0x1c1)](POPUP[_0x444e24(0x196)],_0x48c2c9?_0x444e24(0x1b7)+_0x48c2c9:null),this[_0x444e24(0x183)]();}else{if(_0x4e8383[_0x444e24(0x19c)]===POPUP[_0x444e24(0x15d)])this[_0x444e24(0x189)]&&this[_0x444e24(0x189)][_0x444e24(0x15b)](),this[_0x444e24(0x160)][_0x444e24(0x195)][_0x444e24(0x18a)](function(_0x86c64){var _0x368447=_0x444e24;_0x4ad3aa['_window'][_0x368447(0x174)]({'type':POPUP['INIT'],'payload':{'settings':_0x4ad3aa[_0x368447(0x1af)],'useBroadcastChannel':_0x86c64}},_0x4ad3aa[_0x368447(0x1c0)]);});else(_0x4e8383['type']===POPUP[_0x444e24(0x1a6)]||_0x4e8383[_0x444e24(0x19c)]===UI[_0x444e24(0x191)])&&this[_0x444e24(0x183)]();}}}},_0x147a6e['close']=function _0x1971e3(){var _0x4743a2=_0x12c324;this['locked']=![],this['popupPromise']=undefined;this[_0x4743a2(0x162)]&&(window[_0x4743a2(0x16a)](this['requestTimeout']),this[_0x4743a2(0x162)]=0x0);this[_0x4743a2(0x197)]&&(window[_0x4743a2(0x16a)](this[_0x4743a2(0x197)]),this[_0x4743a2(0x197)]=0x0);this[_0x4743a2(0x17d)]&&(window[_0x4743a2(0x18f)](this[_0x4743a2(0x17d)]),this['closeInterval']=0x0);this['extensionPort']&&(this[_0x4743a2(0x163)][_0x4743a2(0x165)](),this[_0x4743a2(0x163)]=null);this[_0x4743a2(0x1bd)]&&(chrome[_0x4743a2(0x1ba)][_0x4743a2(0x16b)](this[_0x4743a2(0x1bd)],{'active':!![]}),this[_0x4743a2(0x1bd)]=0x0);if(this['_window']){if(this[_0x4743a2(0x1af)]['env']===_0x4743a2(0x1b0)){var _0x1beeba=chrome['runtime']['lastError'];chrome[_0x4743a2(0x1ba)][_0x4743a2(0x16d)](this['_window']['id'],function(){var _0x5ae3eb=_0x4743a2;_0x1beeba=chrome[_0x5ae3eb(0x171)][_0x5ae3eb(0x161)];});}else this[_0x4743a2(0x182)][_0x4743a2(0x183)]();this[_0x4743a2(0x182)]=null;}},_0x147a6e[_0x12c324(0x174)]=(function(){var _0x17b1f4=_0x12c324,_0x2d17a3=(0x0,_asyncToGenerator2[_0x17b1f4(0x187)])(_regenerator[_0x17b1f4(0x187)][_0x17b1f4(0x19d)](function _0x33b9bf(_0x3b6cc9){var _0x22daa4=this;return _regenerator['default']['wrap'](function _0x47a05c(_0x42a4d4){var _0x31f3e9=a150_0x1c6e;while(0x1){switch(_0x42a4d4[_0x31f3e9(0x15f)]=_0x42a4d4[_0x31f3e9(0x168)]){case 0x0:if(!(!this[_0x31f3e9(0x182)]&&_0x3b6cc9[_0x31f3e9(0x19c)]!==UI[_0x31f3e9(0x194)]&&this[_0x31f3e9(0x197)])){_0x42a4d4[_0x31f3e9(0x168)]=0x4;break;}this['close'](),(0x0,_showPopupRequest[_0x31f3e9(0x188)])(this[_0x31f3e9(0x1ad)][_0x31f3e9(0x172)](this),function(){var _0x4c30e9=_0x31f3e9;_0x22daa4[_0x4c30e9(0x1c1)](POPUP[_0x4c30e9(0x196)]);});return _0x42a4d4[_0x31f3e9(0x1b4)](_0x31f3e9(0x1a0));case 0x4:if(!this[_0x31f3e9(0x189)]){_0x42a4d4[_0x31f3e9(0x168)]=0x7;break;}_0x42a4d4['next']=0x7;return this['popupPromise']['promise'];case 0x7:this[_0x31f3e9(0x182)]&&this[_0x31f3e9(0x182)][_0x31f3e9(0x174)](_0x3b6cc9,this[_0x31f3e9(0x1c0)]);case 0x8:case _0x31f3e9(0x179):return _0x42a4d4['stop']();}}},_0x33b9bf,this);}));function _0x3ac811(_0x21b766){var _0x661066=_0x17b1f4;return _0x2d17a3[_0x661066(0x1b5)](this,arguments);}return _0x3ac811;}()),_0x147a6e['onBeforeUnload']=function _0x8d4c1b(){var _0x4e3d86=_0x12c324;this[_0x4e3d86(0x183)]();},_0x5c9ed2;}(_events[a150_0x607bb5(0x187)]);exports[a150_0x607bb5(0x187)]=PopupManager;