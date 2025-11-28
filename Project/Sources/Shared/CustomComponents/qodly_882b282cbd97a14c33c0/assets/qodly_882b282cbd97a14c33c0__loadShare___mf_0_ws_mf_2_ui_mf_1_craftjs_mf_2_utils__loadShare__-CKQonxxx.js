import { q as qodly_882b282cbd97a14c33c0__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_882b282cbd97a14c33c0__mf_v__runtimeInit__mf_v__-BIorW6lM.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_882b282cbd97a14c33c0__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@ws-ui/craftjs-utils", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^0.2.3"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__ = exportModule;

export { qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__ as q };
