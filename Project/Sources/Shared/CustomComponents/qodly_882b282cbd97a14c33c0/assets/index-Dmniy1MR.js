import { q as qodly_882b282cbd97a14c33c0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_882b282cbd97a14c33c0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-DUe103mV.js';
import { q as qodly_882b282cbd97a14c33c0__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_882b282cbd97a14c33c0__mf_v__runtimeInit__mf_v__-BIorW6lM.js';
import { F as F$1, q as qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__ } from './qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__-DwiObhOY.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_882b282cbd97a14c33c0__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@ws-ui/webform-editor", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^1.6.0"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ = exportModule;

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = F$1.createContext && F$1.createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return F$1.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return F$1.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return F$1.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && F$1.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? F$1.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function MdColorLens (props) {
  return GenIcon({"attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M12 3a9 9 0 000 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}}]})(props);
}

const commonSettings = [
  {
    key: "defaultColor",
    label: "Default Color",
    type: qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.COLOR_PICKER,
    defaultValue: "#000000"
  }
];
const Settings = [
  {
    key: "properties",
    label: "Properties",
    type: qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.ESetting.GROUP,
    components: commonSettings
  },
  ...qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.DEFAULT_SETTINGS
];
const BasicSettings = [
  ...commonSettings,
  ...qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.BASIC_SETTINGS).filter("style.overflow")
];

const config = {
  craft: {
    displayName: "Color Input",
    kind: qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EComponentKind.BASIC,
    props: {
      name: "",
      classNames: [],
      events: []
    },
    related: {
      settings: qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.Settings(Settings, BasicSettings)
    }
  },
  info: {
    displayName: "Color Input",
    exposed: true,
    icon: MdColorLens,
    events: [
      {
        label: "On Click",
        value: "onclick"
      },
      {
        label: "On Blur",
        value: "onblur"
      },
      {
        label: "On Focus",
        value: "onfocus"
      },
      {
        label: "On MouseEnter",
        value: "onmouseenter"
      },
      {
        label: "On MouseLeave",
        value: "onmouseleave"
      },
      {
        label: "On KeyDown",
        value: "onkeydown"
      },
      {
        label: "On KeyUp",
        value: "onkeyup"
      }
    ],
    datasources: {
      accept: ["string"]
    }
  },
  defaultProps: {
    defaultColor: "#fff"
  }
};

var classnames = {exports: {}};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg) {
					classes = appendClass(classes, parseValue(arg));
				}
			}

			return classes;
		}

		function parseValue (arg) {
			if (typeof arg === 'string' || typeof arg === 'number') {
				return arg;
			}

			if (typeof arg !== 'object') {
				return '';
			}

			if (Array.isArray(arg)) {
				return classNames.apply(null, arg);
			}

			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
				return arg.toString();
			}

			var classes = '';

			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes = appendClass(classes, key);
				}
			}

			return classes;
		}

		function appendClass (value, newClass) {
			if (!newClass) {
				return value;
			}
		
			if (value) {
				return value + ' ' + newClass;
			}
		
			return value + newClass;
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}()); 
} (classnames));

var classnamesExports = classnames.exports;
const cn = /*@__PURE__*/getDefaultExportFromCjs(classnamesExports);

function u(){return (u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);}return e}).apply(this,arguments)}function c(e,r){if(null==e)return {};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r.indexOf(t=a[n])>=0||(o[t]=e[t]);return o}function i(e){var t=qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useRef(e),n=qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useRef(function(e){t.current&&t.current(e);});return t.current=e,n.current}var s=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=1),e>t?t:e<r?r:e},f=function(e){return "touches"in e},v=function(e){return e&&e.ownerDocument.defaultView||self},d=function(e,r,t){var n=e.getBoundingClientRect(),o=f(r)?function(e,r){for(var t=0;t<e.length;t++)if(e[t].identifier===r)return e[t];return e[0]}(r.touches,t):r;return {left:s((o.pageX-(n.left+v(e).pageXOffset))/n.width),top:s((o.pageY-(n.top+v(e).pageYOffset))/n.height)}},h=function(e){!f(e)&&e.preventDefault();},m=F$1.memo(function(o){var a=o.onMove,l=o.onKey,s=c(o,["onMove","onKey"]),m=qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useRef(null),g=i(a),p=i(l),b=qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useRef(null),_=qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useRef(false),x=qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useMemo(function(){var e=function(e){h(e),(f(e)?e.touches.length>0:e.buttons>0)&&m.current?g(d(m.current,e,b.current)):t(false);},r=function(){return t(false)};function t(t){var n=_.current,o=v(m.current),a=t?o.addEventListener:o.removeEventListener;a(n?"touchmove":"mousemove",e),a(n?"touchend":"mouseup",r);}return [function(e){var r=e.nativeEvent,n=m.current;if(n&&(h(r),!function(e,r){return r&&!f(e)}(r,_.current)&&n)){if(f(r)){_.current=true;var o=r.changedTouches||[];o.length&&(b.current=o[0].identifier);}n.focus(),g(d(n,r,b.current)),t(true);}},function(e){var r=e.which||e.keyCode;r<37||r>40||(e.preventDefault(),p({left:39===r?.05:37===r?-0.05:0,top:40===r?.05:38===r?-0.05:0}));},t]},[p,g]),C=x[0],E=x[1],H=x[2];return qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useEffect(function(){return H},[H]),F$1.createElement("div",u({},s,{onTouchStart:C,onMouseDown:C,className:"react-colorful__interactive",ref:m,onKeyDown:E,tabIndex:0,role:"slider"}))}),g=function(e){return e.filter(Boolean).join(" ")},p=function(r){var t=r.color,n=r.left,o=r.top,a=void 0===o?.5:o,l=g(["react-colorful__pointer",r.className]);return F$1.createElement("div",{className:l,style:{top:100*a+"%",left:100*n+"%"}},F$1.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},b=function(e,r,t){return void 0===r&&(r=0),void 0===t&&(t=Math.pow(10,r)),Math.round(t*e)/t},x=function(e){return L(C(e))},C=function(e){return "#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?b(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?b(parseInt(e.substring(6,8),16)/255,2):1}},w=function(e){return K(I(e))},y=function(e){var r=e.s,t=e.v,n=e.a,o=(200-r)*t/100;return {h:b(e.h),s:b(o>0&&o<200?r*t/100/(o<=100?o:200-o)*100:0),l:b(o/2),a:b(n,2)}},q=function(e){var r=y(e);return "hsl("+r.h+", "+r.s+"%, "+r.l+"%)"},k=function(e){var r=y(e);return "hsla("+r.h+", "+r.s+"%, "+r.l+"%, "+r.a+")"},I=function(e){var r=e.h,t=e.s,n=e.v,o=e.a;r=r/360*6,t/=100,n/=100;var a=Math.floor(r),l=n*(1-t),u=n*(1-(r-a)*t),c=n*(1-(1-r+a)*t),i=a%6;return {r:b(255*[n,u,l,l,c,n][i]),g:b(255*[c,n,n,u,l,l][i]),b:b(255*[l,l,c,n,n,u][i]),a:b(o,2)}},D=function(e){var r=e.toString(16);return r.length<2?"0"+r:r},K=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,a=o<1?D(b(255*o)):"";return "#"+D(r)+D(t)+D(n)+a},L=function(e){var r=e.r,t=e.g,n=e.b,o=e.a,a=Math.max(r,t,n),l=a-Math.min(r,t,n),u=l?a===r?(t-n)/l:a===t?2+(n-r)/l:4+(r-t)/l:0;return {h:b(60*(u<0?u+6:u)),s:b(a?l/a*100:0),v:b(a/255*100),a:o}},S=F$1.memo(function(r){var t=r.hue,n=r.onChange,o=g(["react-colorful__hue",r.className]);return F$1.createElement("div",{className:o},F$1.createElement(m,{onMove:function(e){n({h:360*e.left});},onKey:function(e){n({h:s(t+360*e.left,0,360)});},"aria-label":"Hue","aria-valuenow":b(t),"aria-valuemax":"360","aria-valuemin":"0"},F$1.createElement(p,{className:"react-colorful__hue-pointer",left:t/360,color:q({h:t,s:100,v:100,a:1})})))}),T=F$1.memo(function(r){var t=r.hsva,n=r.onChange,o={backgroundColor:q({h:t.h,s:100,v:100,a:1})};return F$1.createElement("div",{className:"react-colorful__saturation",style:o},F$1.createElement(m,{onMove:function(e){n({s:100*e.left,v:100-100*e.top});},onKey:function(e){n({s:s(t.s+100*e.left,0,100),v:s(t.v-100*e.top,0,100)});},"aria-label":"Color","aria-valuetext":"Saturation "+b(t.s)+"%, Brightness "+b(t.v)+"%"},F$1.createElement(p,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:q(t)})))}),F=function(e,r){if(e===r)return  true;for(var t in e)if(e[t]!==r[t])return  false;return  true},X=function(e,r){return e.toLowerCase()===r.toLowerCase()||F(C(e),C(r))};function Y(e,t,l){var u=i(l),c=qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useState(function(){return e.toHsva(t)}),s=c[0],f=c[1],v=qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useRef({color:t,hsva:s});qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useEffect(function(){if(!e.equal(t,v.current.color)){var r=e.toHsva(t);v.current={hsva:r,color:t},f(r);}},[t,e]),qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useEffect(function(){var r;F(s,v.current.hsva)||e.equal(r=e.fromHsva(s),v.current.color)||(v.current={hsva:s,color:r},u(r));},[s,e,u]);var d=qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useCallback(function(e){f(function(r){return Object.assign({},r,e)});},[]);return [s,d]}var V="undefined"!=typeof window?qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useLayoutEffect:qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useEffect,$=function(){return ("undefined"!=typeof __webpack_nonce__?__webpack_nonce__:void 0)},J=new Map,Q=function(e){V(function(){var r=e.current?e.current.ownerDocument:document;if(void 0!==r&&!J.has(r)){var t=r.createElement("style");t.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',J.set(r,t);var n=$();n&&t.setAttribute("nonce",n),r.head.appendChild(t);}},[]);},ee=function(r){var t=r.className,n=r.hsva,o=r.onChange,a={backgroundImage:"linear-gradient(90deg, "+k(Object.assign({},n,{a:0}))+", "+k(Object.assign({},n,{a:1}))+")"},l=g(["react-colorful__alpha",t]),u=b(100*n.a);return F$1.createElement("div",{className:l},F$1.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),F$1.createElement(m,{onMove:function(e){o({a:e.left});},onKey:function(e){o({a:s(n.a+e.left)});},"aria-label":"Alpha","aria-valuetext":u+"%","aria-valuenow":u,"aria-valuemin":"0","aria-valuemax":"100"},F$1.createElement(p,{className:"react-colorful__alpha-pointer",left:n.a,color:k(n)})))},re=function(t){var n=t.className,o=t.colorModel,a=t.color,l=void 0===a?o.defaultColor:a,i=t.onChange,s=c(t,["className","colorModel","color","onChange"]),f=qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useRef(null);Q(f);var v=Y(o,l,i),d=v[0],h=v[1],m=g(["react-colorful",n]);return F$1.createElement("div",u({},s,{ref:f,className:m}),F$1.createElement(T,{hsva:d,onChange:h}),F$1.createElement(S,{hue:d.h,onChange:h}),F$1.createElement(ee,{hsva:d,onChange:h,className:"react-colorful__last-control"}))},te={defaultColor:"0001",toHsva:x,fromHsva:w,equal:X},ne=function(r){return F$1.createElement(re,u({},r,{colorModel:te}))};

const ColorInput$2 = ({ defaultColor, style, className, classNames = [] }) => {
  const {
    connectors: { connect }
  } = qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode();
  return /* @__PURE__ */ qodly_882b282cbd97a14c33c0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, className: cn("w-fit h-fit", className, classNames), children: /* @__PURE__ */ qodly_882b282cbd97a14c33c0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ne, { color: defaultColor, style }) });
};

const ColorInput$1 = ({ defaultColor, style, className, classNames = [] }) => {
  const { connect } = qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useRenderer();
  const [value, setValue] = qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useState(() => defaultColor);
  const {
    sources: { datasource: ds }
  } = qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useSources();
  qodly_882b282cbd97a14c33c0__loadShare__react__loadShare__.useEffect(() => {
    if (!ds) return;
    const listener = async () => {
      const v = await ds.getValue();
      setValue(v || defaultColor);
    };
    listener();
    ds.addListener("changed", listener);
    return () => {
      ds.removeListener("changed", listener);
    };
  }, [ds]);
  const changeColor = (color) => {
    ds ? ds.setValue(null, color) : setValue(color);
  };
  return /* @__PURE__ */ qodly_882b282cbd97a14c33c0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, className: cn("w-fit h-fit", className, classNames), children: /* @__PURE__ */ qodly_882b282cbd97a14c33c0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ne, { color: value, style, onChange: changeColor }) });
};

const ColorInput = (props) => {
  const { enabled } = qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ qodly_882b282cbd97a14c33c0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ColorInput$2, { ...props }) : /* @__PURE__ */ qodly_882b282cbd97a14c33c0__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(ColorInput$1, { ...props });
};
ColorInput.craft = config.craft;
ColorInput.info = config.info;
ColorInput.defaultProps = config.defaultProps;

const components = {
  // components
  ColorInput
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: components
}, Symbol.toStringTag, { value: 'Module' }));

export { components as c, index as i, qodly_882b282cbd97a14c33c0__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ as q };
