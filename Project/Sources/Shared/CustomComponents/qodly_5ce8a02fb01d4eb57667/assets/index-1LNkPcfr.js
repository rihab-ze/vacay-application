import { q as qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-BkIshbwQ.js';
import { q as qodly_5ce8a02fb01d4eb57667__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_5ce8a02fb01d4eb57667__mf_v__runtimeInit__mf_v__-ONSZE_L_.js';
import { $, q as qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__ } from './qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__-DcycRsyb.js';
import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_5ce8a02fb01d4eb57667__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("@ws-ui/webform-editor", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^1.6.3"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ = exportModule;

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = $.createContext && $.createContext(DefaultContext);

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
    return $.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return $.createElement(IconBase, __assign({
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
    return $.createElement("svg", __assign({
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
    }), title && $.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? $.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function FaRegFilePdf$1 (props) {
  return GenIcon({"attr":{"viewBox":"0 0 512 512"},"child":[{"tag":"path","attr":{"d":"M64 464H96v48H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V288H336V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"}}]})(props);
}

const commonSettings = [];
const Settings = [
  ...qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.DEFAULT_SETTINGS).filter("style.overflow", "background", "color", "font")
];
const BasicSettings = [
  ...commonSettings,
  ...qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.load(qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.BASIC_SETTINGS).filter("style.overflow", "background", "color", "font")
];

const config = {
  craft: {
    displayName: "PdfViewer",
    sanityCheck: {
      keys: [{ name: "datasource", require: true, isDatasource: true }]
    },
    requiredFields: {
      keys: ["datasource"],
      all: false
    },
    kind: qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.EComponentKind.BASIC,
    props: {
      name: "",
      classNames: [],
      events: []
    },
    related: {
      settings: qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.Settings(Settings, BasicSettings)
    }
  },
  info: {
    displayName: "PdfViewer",
    exposed: true,
    icon: FaRegFilePdf$1,
    events: [
      {
        label: "On Click",
        value: "onclick"
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
      }
    ],
    datasources: {
      accept: ["blob", "string"]
    }
  },
  defaultProps: {}
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

// THIS FILE IS AUTO GENERATED
function FaFilePdf (props) {
  return GenIcon({"attr":{"viewBox":"0 0 384 512"},"child":[{"tag":"path","attr":{"d":"M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"}}]})(props);
}function FaRegFilePdf (props) {
  return GenIcon({"attr":{"viewBox":"0 0 384 512"},"child":[{"tag":"path","attr":{"d":"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"}}]})(props);
}

const PdfViewer$2 = ({ datasource, style, className, classNames = [] }) => {
  const {
    connectors: { connect }
  } = qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedNode();
  return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, style, className: cn(className, classNames, "flex items-center justify-center border-dashed border border-gray-400 h-10"), children: datasource ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-center", children: [
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(FaFilePdf, { className: "mr-2" }),
    " PDF File..."
  ] }) : /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex items-center", children: [
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(FaRegFilePdf, { className: "mr-2" }),
    " No files to display..."
  ] }) });
};

const PdfViewer$1 = ({ style, className, classNames = [] }) => {
  const { connect } = qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useRenderer();
  const [value, setValue] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(null);
  const [pdfSource, setPdfSource] = qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useState(null);
  const {
    sources: { datasource: ds }
  } = qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useSources();
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    if (!ds) return;
    const listener = async () => {
      const v = await ds.getValue();
      setValue(v);
    };
    listener();
    ds.addListener("changed", listener);
    return () => {
      ds.removeListener("changed", listener);
    };
  }, [ds]);
  qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    const getPdf = async () => {
      if (!value) return;
      let url = null;
      try {
        const val = JSON.parse(value);
        const resp = await fetch(val.__deferred.uri);
        const arrayBuffer = await resp.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: "application/pdf" });
        url = URL.createObjectURL(blob);
        setPdfSource(url);
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };
    getPdf();
  }, [value]);
  return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { ref: connect, style, className: cn(className, classNames), children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "w-full h-full border border-gray-300", children: pdfSource ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("iframe", { src: pdfSource, width: "100%", height: "100%" }) : value ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("iframe", { src: value, width: "100%", height: "100%" }) : /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx("div", { className: "w-full h-full flex items-center justify-center text-gray-500", children: "No files to display..." }) }) });
};

const PdfViewer = (props) => {
  const { enabled } = qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__.useEnhancedEditor((state) => ({
    enabled: state.options.enabled
  }));
  return enabled ? /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(PdfViewer$2, { ...props }) : /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(PdfViewer$1, { ...props });
};
PdfViewer.craft = config.craft;
PdfViewer.info = config.info;
PdfViewer.defaultProps = config.defaultProps;

const components = {
  // components
  PdfViewer
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: components
}, Symbol.toStringTag, { value: 'Module' }));

export { components as c, index as i, qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_webform_mf_2_editor__loadShare__ as q };
