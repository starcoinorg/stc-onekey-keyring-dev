'use strict';function a174_0x4f78(){var _0x2fd810=['7qFSzPY','hasOwnProperty','1662537nPVJtd','default','283464VJEqVV','633708ObQgMl','getOwnPropertyDescriptor','__esModule','set','function','116316qKJWQq','get','9jUDMGb','1240LajXcJ','defineProperty','object','has','45mXBoZy','15155072vjlzCO','2013492EQRHnR','12GsRIBo','47467442EIjdsB'];a174_0x4f78=function(){return _0x2fd810;};return a174_0x4f78();}(function(_0x5edf07,_0x1d509e){var _0x339d76=a174_0x3e73,_0x325caf=_0x5edf07();while(!![]){try{var _0x59f597=-parseInt(_0x339d76(0x92))/0x1+-parseInt(_0x339d76(0x95))/0x2+-parseInt(_0x339d76(0x86))/0x3*(parseInt(_0x339d76(0x8d))/0x4)+-parseInt(_0x339d76(0x8b))/0x5*(-parseInt(_0x339d76(0x94))/0x6)+parseInt(_0x339d76(0x90))/0x7*(-parseInt(_0x339d76(0x8c))/0x8)+parseInt(_0x339d76(0x9a))/0x9*(parseInt(_0x339d76(0x87))/0xa)+parseInt(_0x339d76(0x8f))/0xb*(parseInt(_0x339d76(0x8e))/0xc);if(_0x59f597===_0x1d509e)break;else _0x325caf['push'](_0x325caf['shift']());}catch(_0x528cf2){_0x325caf['push'](_0x325caf['shift']());}}}(a174_0x4f78,0xea27c));function a174_0x3e73(_0x473d04,_0x4f0eb2){var _0x4f78ee=a174_0x4f78();return a174_0x3e73=function(_0x3e7335,_0x227ee3){_0x3e7335=_0x3e7335-0x85;var _0x450a84=_0x4f78ee[_0x3e7335];return _0x450a84;},a174_0x3e73(_0x473d04,_0x4f0eb2);}var CONSTANTS=_interopRequireWildcard(require('../constants')),P=_interopRequireWildcard(require('./params')),Device=_interopRequireWildcard(require('./trezor/device')),Mgmnt=_interopRequireWildcard(require('./trezor/management')),Protobuf=_interopRequireWildcard(require('./trezor/protobuf')),Account=_interopRequireWildcard(require('./account')),Bitcoin=_interopRequireWildcard(require('./networks/bitcoin')),Binance=_interopRequireWildcard(require('./networks/binance')),Cardano=_interopRequireWildcard(require('./networks/cardano')),Conflux=_interopRequireWildcard(require('./networks/conflux')),CoinInfo=_interopRequireWildcard(require('./networks/coinInfo')),EOS=_interopRequireWildcard(require('./networks/eos')),Ethereum=_interopRequireWildcard(require('./networks/ethereum')),Lisk=_interopRequireWildcard(require('./networks/lisk')),NEM=_interopRequireWildcard(require('./networks/nem')),Ripple=_interopRequireWildcard(require('./networks/ripple')),Stellar=_interopRequireWildcard(require('./networks/stellar')),Tezos=_interopRequireWildcard(require('./networks/tezos')),Solana=_interopRequireWildcard(require('./networks/solana')),Starcoin=_interopRequireWildcard(require('./networks/starcoin')),Misc=_interopRequireWildcard(require('./misc')),Events=_interopRequireWildcard(require('./events')),Blockchain=_interopRequireWildcard(require('./backend/blockchain'));function _getRequireWildcardCache(_0x574dfc){if(typeof WeakMap!=='function')return null;var _0x5af0cb=new WeakMap(),_0x10ccb4=new WeakMap();return(_getRequireWildcardCache=function _0x2b5695(_0x50c851){return _0x50c851?_0x10ccb4:_0x5af0cb;})(_0x574dfc);}function _interopRequireWildcard(_0x4643a4,_0x19b701){var _0x1f4cdf=a174_0x3e73;if(!_0x19b701&&_0x4643a4&&_0x4643a4[_0x1f4cdf(0x97)])return _0x4643a4;if(_0x4643a4===null||typeof _0x4643a4!==_0x1f4cdf(0x89)&&typeof _0x4643a4!==_0x1f4cdf(0x99))return{'default':_0x4643a4};var _0x14dce5=_getRequireWildcardCache(_0x19b701);if(_0x14dce5&&_0x14dce5[_0x1f4cdf(0x8a)](_0x4643a4))return _0x14dce5[_0x1f4cdf(0x85)](_0x4643a4);var _0x2efbc4={},_0x419419=Object['defineProperty']&&Object['getOwnPropertyDescriptor'];for(var _0x5b2f68 in _0x4643a4){if(_0x5b2f68!=='default'&&Object['prototype'][_0x1f4cdf(0x91)]['call'](_0x4643a4,_0x5b2f68)){var _0x46445e=_0x419419?Object[_0x1f4cdf(0x96)](_0x4643a4,_0x5b2f68):null;_0x46445e&&(_0x46445e[_0x1f4cdf(0x85)]||_0x46445e[_0x1f4cdf(0x98)])?Object[_0x1f4cdf(0x88)](_0x2efbc4,_0x5b2f68,_0x46445e):_0x2efbc4[_0x5b2f68]=_0x4643a4[_0x5b2f68];}}return _0x2efbc4[_0x1f4cdf(0x93)]=_0x4643a4,_0x14dce5&&_0x14dce5[_0x1f4cdf(0x98)](_0x4643a4,_0x2efbc4),_0x2efbc4;}