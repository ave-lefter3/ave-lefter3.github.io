(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Bownload"],{

/***/ "./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.29.7_webpack@4.47.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/index.js?!./src/views/download.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.29.7_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist??ref--1-1!./src/views/download.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var callapp_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! callapp-lib */ "./node_modules/.pnpm/callapp-lib@3.5.3/node_modules/callapp-lib/dist/index.umd.js");
/* harmony import */ var callapp_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(callapp_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_tracking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/tracking */ "./src/api/tracking.js");
/* harmony import */ var _api_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/download */ "./src/api/download.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      isIos_in: false,
      isAndroid_in: false,
      isIos: false,
      isAndroid: false,
      show: true,
      loading: false,
      iosAppStoreHK: 'https://apps.apple.com/hk/app/chainpulse/id6758416913',
      iosAppStoreUS: 'https://apps.apple.com/us/app/chainpulse/id6758416913?l=zh-Hans-CN',
      androidDownloadLink: _api_download__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_ANDROID_DOWNLOAD_LINK"]
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      let userAgent = navigator.userAgent;

      // let userAgent =
      //   'user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Ave.ai/2.2.0 OSType/2;'
      // let userAgent =
      //   'Mozilla/5.0 (Linux; Android 11;M2102K1C Build/RKQ1.201112.002; wv) AppleWebKit/537.36(KHTML, like Gecko) Version/4.0 Chrome/90.0.4430.210 Mobile Safari/537.36Ave.ai/113'

      if (userAgent.includes('Ave.ai')) {
        if (userAgent.includes('OSType')) {
          vm.isIos_in = true;
        } else {
          vm.isAndroid_in = true;
        }
      } else if (new RegExp('android', 'i').test(userAgent)) {
        vm.isAndroid = true;
      } else if (new RegExp('iphone', 'i').test(userAgent)) {
        vm.isIos = true;
      } else {
        this.isIos_in = false;
        this.isAndroid_in = false;
        this.isIos = false;
        this.isAndroid = false;
      }
    });
  },
  computed: {
    domain() {
      return this.$store.state.s3BaseUrl;
    }
  },
  mounted() {
    this.init();
    this.fetchAndroidVersion();
  },
  methods: {
    fetchAndroidVersion() {
      return Object(_api_download__WEBPACK_IMPORTED_MODULE_3__["getAndroidVersion"])().then(data => {
        if (data !== null && data !== void 0 && data.download_link) {
          this.androidDownloadLink = data.download_link;
        }
      }).catch(err => {
        console.error('Failed to fetch android version', err);
      });
    },
    init() {
      document.addEventListener('visibilitychange', () => {
        // 用户离开了当前页面
        if (document.visibilityState === 'hidden') {
          if (new RegExp('iPhone|iPad|iPod', 'i').test(navigator.userAgent)) {
            location.reload();
          }
        }
      });
      Object(_api_tracking__WEBPACK_IMPORTED_MODULE_2__["trackRef"])({
        category: 'view',
        extra: 'share'
      });
    },
    open() {
      this.track().finally(() => {
        const option = {
          scheme: {
            protocol: 'ave'
          },
          appstore: this.iosAppStoreUS,
          yingyongbao: this.androidDownloadLink,
          fallback: new RegExp('iPhone|iPad|iPod', 'i').test(navigator.userAgent) ? this.iosAppStoreUS : this.androidDownloadLink,
          timeout: 2000
        };
        const lib = new callapp_lib__WEBPACK_IMPORTED_MODULE_1___default.a(option);
        lib.open({
          path: ''
        });
      });

      // window.location = 'ave://'
      // this.loading = true
      // const t = 1000
      // const t1 = Date.now()
      // const ifr = document.createElement('iframe')
      // // 下面的this.url 是需要跳转到app的schema链接
      // ifr.setAttribute('src', 'ave://')
      // ifr.setAttribute('style', 'display:none')
      // document.body.appendChild(ifr)
      // setTimeout(function () {
      //   this.loading = false
      // 	// 启动app时间较长处理
      //   const t2 = Date.now()
      //   document.body.removeChild(ifr)
      //   if (t2 - t1 < t + 100) {
      //     console.log('hasApp', false, t2 - t1)
      //     // 没有安装App，跳转到对应的App下载页面。
      //     // 下面的例子App下载页面也是H5页面。
      //     if (new RegExp('iPhone|iPad|iPod', 'i').test(navigator.userAgent)) {
      //         window.location = 'https://apps.apple.com/sg/app/aveai/id1645676067'
      //     } else {
      //         window.location = 'https://www.avedownload.com/app/ave.ai.2.3.28.apk'
      //     }
      //   } else {
      //     console.log('hasApp', true)
      //     // 已经安装App，下面的this.url是需要跳转到app的schema链接。
      //     window.location = 'ave://'
      //   }
      // }, t)
    },
    track() {
      const extra = this.isAndroid ? 'Android apk' : 'IOS AppStore';
      return Object(_api_tracking__WEBPACK_IMPORTED_MODULE_2__["trackRef"])({
        category: 'download',
        extra: extra
      });
    },
    trackUrl(url, extra) {
      return Object(_api_tracking__WEBPACK_IMPORTED_MODULE_2__["trackRef"])({
        category: 'download',
        extra: extra
      }).finally(() => {
        // this.$f.openBrowser(url)
        location.href = url;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.29.7_webpack@4.47.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js?!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/index.js?!./src/views/download.vue?vue&type=template&id=6c4282a2&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.29.7_webpack@4.47.0/node_modules/babel-loader/lib!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist??ref--1-1!./src/views/download.vue?vue&type=template&id=6c4282a2&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _assets_images_ave_white_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/ave-white.png */ "./src/assets/images/ave-white.png");
/* harmony import */ var _assets_images_ave_white_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_ave_white_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_download_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/download/1.png */ "./src/assets/images/download/1.png");
/* harmony import */ var _assets_images_download_1_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_download_1_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_download_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/download/2.png */ "./src/assets/images/download/2.png");
/* harmony import */ var _assets_images_download_2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_download_2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_download_3_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/download/3.png */ "./src/assets/images/download/3.png");
/* harmony import */ var _assets_images_download_3_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_download_3_png__WEBPACK_IMPORTED_MODULE_5__);






const _hoisted_1 = {
  class: "download"
};
const _hoisted_2 = {
  key: 1,
  class: "header"
};
const _hoisted_3 = {
  class: "flex"
};
const _hoisted_4 = {
  class: "content"
};
const _hoisted_5 = {
  class: "item"
};
const _hoisted_6 = {
  class: "title"
};
const _hoisted_7 = {
  class: "item"
};
const _hoisted_8 = {
  class: "title"
};
const _hoisted_9 = {
  class: "item"
};
const _hoisted_10 = {
  class: "title"
};
const _hoisted_11 = {
  class: "footer"
};
const _hoisted_12 = {
  class: "flex"
};
const _hoisted_13 = {
  class: "right"
};
const _hoisted_14 = {
  class: "up"
};
const _hoisted_15 = {
  class: "down"
};
const _hoisted_16 = {
  class: "flex"
};
const _hoisted_17 = {
  class: "right"
};
const _hoisted_18 = {
  class: "up"
};
const _hoisted_19 = {
  class: "down"
};
const _hoisted_20 = {
  class: "flex"
};
const _hoisted_21 = {
  class: "right"
};
const _hoisted_22 = {
  class: "up"
};
const _hoisted_23 = {
  class: "flex"
};
const _hoisted_24 = {
  class: "right"
};
const _hoisted_25 = {
  class: "up"
};
const _hoisted_26 = {
  class: "down"
};
const _hoisted_27 = {
  class: "flex"
};
const _hoisted_28 = {
  class: "right"
};
const _hoisted_29 = {
  class: "up"
};
const _hoisted_30 = {
  class: "down"
};
const _hoisted_31 = {
  class: "flex"
};
const _hoisted_32 = {
  class: "right"
};
const _hoisted_33 = {
  class: "up"
};
const _hoisted_34 = {
  class: "down"
};
const _hoisted_35 = {
  class: "flex"
};
const _hoisted_36 = {
  class: "right"
};
const _hoisted_37 = {
  class: "up"
};
const _hoisted_38 = {
  class: "flex"
};
const _hoisted_39 = {
  class: "right"
};
const _hoisted_40 = {
  class: "up"
};
const _hoisted_41 = {
  class: "down"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_van_nav_bar = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-nav-bar");
  const _component_router_link = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("router-link");
  const _component_van_button = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-button");
  const _component_van_icon = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-icon");
  const _component_van_swipe_item = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-swipe-item");
  const _component_van_swipe = Object(vue__WEBPACK_IMPORTED_MODULE_1__["resolveComponent"])("van-swipe");
  return Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_1, [$data.isIos_in || $data.isAndroid_in || !$data.show ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createBlock"])(_component_van_nav_bar, {
    key: 0,
    title: _ctx.$t('download'),
    "left-text": "",
    "left-arrow": "",
    onClickLeft: _cache[0] || (_cache[0] = $event => _ctx.$f.goBack()),
    fixed: "",
    placeholder: "",
    "safe-area-inset-top": "",
    "z-index": "2"
  }, null, 8 /* PROPS */, ["title"])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), ($data.isIos || $data.isAndroid) && $data.show ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])("div", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_router_link, {
    to: "/"
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [...(_cache[10] || (_cache[10] = [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
      src: _assets_images_ave_white_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      alt: ""
    }, null, -1 /* CACHED */)]))]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_button, {
    class: "open",
    type: "primary",
    round: "",
    size: "mini",
    onClick: $options.open,
    loading: $data.loading
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])(Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('open1')), 1 /* TEXT */)]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick", "loading"]), _cache[11] || (_cache[11] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["createTextVNode"])("    ", -1 /* CACHED */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_icon, {
    name: "cross",
    size: "16",
    color: "#fff",
    onClick: _cache[1] || (_cache[1] = $event => $data.show = false)
  })])])) : Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_swipe, {
    class: "my-swipe",
    autoplay: 3000,
    "indicator-color": "white",
    "show-indicators": "",
    indicatorColor: "#0071ca",
    height: _ctx.$store.getters.language.includes('zh') ? 450 : 500
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_swipe_item, null, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_5, [_cache[12] || (_cache[12] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
        src: _assets_images_download_1_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        alt: ""
      }, null, -1 /* CACHED */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('downloadTitle1')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("p", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('downloadDes1')), 1 /* TEXT */)])])]),
      _: 1 /* STABLE */
    }), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_swipe_item, null, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_7, [_cache[13] || (_cache[13] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
        src: _assets_images_download_2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
        alt: ""
      }, null, -1 /* CACHED */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('downloadTitle2')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("p", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('downloadDes2')), 1 /* TEXT */)])])]),
      _: 1 /* STABLE */
    }), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_swipe_item, null, {
      default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_9, [_cache[14] || (_cache[14] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("img", {
        src: _assets_images_download_3_png__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: ""
      }, null, -1 /* CACHED */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", null, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_10, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('downloadTitle3')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("p", null, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('downloadDes3')), 1 /* TEXT */)])])]),
      _: 1 /* STABLE */
    })]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["height"]), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_11, [$data.isIos || $data.isIos_in ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 0
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" <van-button\n            class=\"btn black\"\n            type=\"primary\"\n            @click.stop=\"trackUrl('https://testflight.apple.com/join/BZ3XHS5f', 'IOS Testflight')\"\n          >\n            <div class=\"flex\">\n              <i class=\"iconfont icon-TF\"></i>\n              <div class=\"right\">\n                <span class=\"up\">{{ $t('aveLiteDownload') }}</span>\n                <span class=\"down\">{{ $t('aveLiteDownloadTip') }}</span>\n              </div>\n            </div>\n          </van-button> "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_button, {
    class: "btn",
    type: "primary",
    onClick: _cache[2] || (_cache[2] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.trackUrl($data.iosAppStoreHK, 'IOS AppStore HK'), ["stop"]))
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_12, [_cache[15] || (_cache[15] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", {
      class: "iconfont icon-pingguo2"
    }, null, -1 /* CACHED */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_13, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_14, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('aveAIDownload')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_15, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('aveAIDownloadHKTip')), 1 /* TEXT */)])])]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_button, {
    class: "btn",
    type: "primary",
    onClick: _cache[3] || (_cache[3] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.trackUrl($data.iosAppStoreUS, 'IOS AppStore US'), ["stop"]))
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_16, [_cache[16] || (_cache[16] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", {
      class: "iconfont icon-pingguo2"
    }, null, -1 /* CACHED */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_17, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_18, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('aveAIDownload')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_19, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('aveAIDownloadTip')), 1 /* TEXT */)])])]),
    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */)) : $data.isAndroid || $data.isAndroid_in ? (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 1
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_button, {
    class: "btn black",
    type: "primary",
    onClick: _cache[4] || (_cache[4] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.trackUrl($data.androidDownloadLink, 'Android apk'), ["stop"]))
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_20, [_cache[17] || (_cache[17] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("svg", {
      class: "icon-svg",
      "aria-hidden": "true"
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("use", {
      "xlink:href": "#icon-anzhuo1"
    })], -1 /* CACHED */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_21, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_22, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('androidDownload')), 1 /* TEXT */)])])]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_button, {
    class: "btn",
    type: "primary",
    onClick: _cache[5] || (_cache[5] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.trackUrl('https://play.google.com/store/apps/details?id=ai.ave.platform', 'Android googlePlay'), ["stop"]))
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_23, [_cache[18] || (_cache[18] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("svg", {
      class: "icon-svg",
      "aria-hidden": "true"
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("use", {
      "xlink:href": "#icon-a-Googleplay2"
    })], -1 /* CACHED */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_24, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_25, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('googleDownload')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_26, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('googleDownloadTip')), 1 /* TEXT */)])])]),
    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */)) : (Object(vue__WEBPACK_IMPORTED_MODULE_1__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementBlock"])(vue__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    key: 2
  }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createCommentVNode"])(" <van-button\n            class=\"btn black\"\n            type=\"primary\"\n            @click.stop=\"trackUrl('https://testflight.apple.com/join/BZ3XHS5f', 'IOS Testflight')\"\n          >\n            <div class=\"flex\">\n              <i class=\"iconfont icon-TF\"></i>\n              <div class=\"right\">\n                <span class=\"up\">{{ $t('aveLiteDownload') }}</span>\n                <span class=\"down\">{{ $t('aveLiteDownloadTip') }}</span>\n              </div>\n            </div>\n          </van-button> "), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_button, {
    class: "btn",
    type: "primary",
    onClick: _cache[6] || (_cache[6] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.trackUrl($data.iosAppStoreHK, 'IOS AppStore HK'), ["stop"]))
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_27, [_cache[19] || (_cache[19] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", {
      class: "iconfont icon-pingguo2"
    }, null, -1 /* CACHED */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_28, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_29, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('aveAIDownload')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_30, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('aveAIDownloadHKTip')), 1 /* TEXT */)])])]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_button, {
    class: "btn",
    type: "primary",
    onClick: _cache[7] || (_cache[7] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.trackUrl($data.iosAppStoreUS, 'IOS AppStore US'), ["stop"]))
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_31, [_cache[20] || (_cache[20] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("i", {
      class: "iconfont icon-pingguo2"
    }, null, -1 /* CACHED */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_32, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_33, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('aveAIDownload')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_34, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('aveAIDownloadTip')), 1 /* TEXT */)])])]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_button, {
    class: "btn",
    type: "primary",
    onClick: _cache[8] || (_cache[8] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.trackUrl($data.androidDownloadLink, 'Android apk'), ["stop"]))
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_35, [_cache[21] || (_cache[21] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("svg", {
      class: "icon-svg",
      "aria-hidden": "true"
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("use", {
      "xlink:href": "#icon-anzhuo1"
    })], -1 /* CACHED */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_36, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_37, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('androidDownload')), 1 /* TEXT */)])])]),
    _: 1 /* STABLE */
  }), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createVNode"])(_component_van_button, {
    class: "btn",
    type: "primary",
    onClick: _cache[9] || (_cache[9] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["withModifiers"])($event => $options.trackUrl('https://play.google.com/store/apps/details?id=ai.ave.platform', 'Android googlePlay'), ["stop"]))
  }, {
    default: Object(vue__WEBPACK_IMPORTED_MODULE_1__["withCtx"])(() => [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_38, [_cache[22] || (_cache[22] = Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("svg", {
      class: "icon-svg",
      "aria-hidden": "true"
    }, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("use", {
      "xlink:href": "#icon-a-Googleplay2"
    })], -1 /* CACHED */)), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("div", _hoisted_39, [Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_40, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('googleDownload')), 1 /* TEXT */), Object(vue__WEBPACK_IMPORTED_MODULE_1__["createElementVNode"])("span", _hoisted_41, Object(vue__WEBPACK_IMPORTED_MODULE_1__["toDisplayString"])(_ctx.$t('googleDownloadTip')), 1 /* TEXT */)])])]),
    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */))])])]);
}

/***/ }),

/***/ "./node_modules/.pnpm/callapp-lib@3.5.3/node_modules/callapp-lib/dist/index.umd.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/callapp-lib@3.5.3/node_modules/callapp-lib/dist/index.umd.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var ua = navigator.userAgent || ''; // 版本号比较

  var semverCompare = function semverCompare(verionA, versionB) {
    // eslint-disable-next-line no-restricted-properties
    var _window = window,
        isNaN = _window.isNaN;
    var splitA = verionA.split('.');
    var splitB = versionB.split('.');

    for (var i = 0; i < 3; i++) {
      var snippetA = Number(splitA[i]);
      var snippetB = Number(splitB[i]);
      if (snippetA > snippetB) return 1;
      if (snippetB > snippetA) return -1; // e.g. '1.0.0-rc' -- Number('0-rc') = NaN

      if (!isNaN(snippetA) && isNaN(snippetB)) return 1;
      if (isNaN(snippetA) && !isNaN(snippetB)) return -1;
    }

    return 0;
  };
  /**
   * 获取 ios 大版本号
   */

  var getIOSVersion = function getIOSVersion() {
    var version = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    return Number.parseInt(version[1], 10);
  };
  /**
   * 获取 微信 版本号
   */

  var getWeChatVersion = function getWeChatVersion() {
    var version = navigator.appVersion.match(/micromessenger\/(\d+\.\d+\.\d+)/i);
    return version[1];
  };
  var isAndroid = /android/i.test(ua);
  var isIos = /iphone|ipad|ipod/i.test(ua);
  var isWechat = /micromessenger\/([\d.]+)/i.test(ua);
  var isWeibo = /(weibo).*weibo__([\d.]+)/i.test(ua);
  var isBaidu = /(baiduboxapp)\/([\d.]+)/i.test(ua);
  var isQQ = /qq\/([\d.]+)/i.test(ua);
  var isQQBrowser = /(qqbrowser)\/([\d.]+)/i.test(ua);
  var isQzone = /qzone\/.*_qz_([\d.]+)/i.test(ua); // 安卓 chrome 浏览器，包含 原生chrome浏览器、三星自带浏览器、360浏览器以及早期国内厂商自带浏览器

  var isOriginalChrome = /chrome\/[\d.]+ mobile safari\/[\d.]+/i.test(ua) && isAndroid && ua.indexOf('Version') < 0;

  // 根据 param 生成 queryString
  function generateQS(param) {
    var qs = typeof param !== 'undefined' ? Object.keys(param).map(function (key) {
      return "".concat(key, "=").concat(param[key]);
    }).join('&') : '';
    return qs ? "?".concat(qs) : '';
  } // 生成基本的 url scheme


  function buildScheme(config, options) {
    var path = config.path,
        param = config.param;
    var scheme = options.scheme,
        customBuildScheme = options.buildScheme;

    if (typeof customBuildScheme !== 'undefined') {
      return customBuildScheme(config, options);
    }

    var host = scheme.host,
        port = scheme.port,
        protocol = scheme.protocol;
    var portPart = port ? ":".concat(port) : '';
    var hostPort = host ? "".concat(host).concat(portPart, "/") : '';
    var qs = generateQS(param);
    return "".concat(protocol, "://").concat(hostPort).concat(path).concat(qs);
  } // 生成业务需要的 url scheme（区分是否是外链）

  function generateScheme(config, options) {
    var outChain = options.outChain;
    var uri = buildScheme(config, options);

    if (typeof outChain !== 'undefined' && outChain) {
      var protocol = outChain.protocol,
          path = outChain.path,
          key = outChain.key;
      uri = "".concat(protocol, "://").concat(path, "?").concat(key, "=").concat(encodeURIComponent(uri));
    }

    return uri;
  } // 生成 android intent

  function generateIntent(config, options) {
    var outChain = options.outChain;
    var intent = options.intent,
        fallback = options.fallback;
    if (typeof intent === 'undefined') return '';
    var keys = Object.keys(intent);
    var intentParam = keys.map(function (key) {
      return "".concat(key, "=").concat(intent[key], ";");
    }).join('');
    var intentTail = "#Intent;".concat(intentParam, "S.browser_fallback_url=").concat(encodeURIComponent(fallback), ";end;");
    var urlPath = buildScheme(config, options);

    if (typeof outChain !== 'undefined' && outChain) {
      var path = outChain.path,
          key = outChain.key;
      return "intent://".concat(path, "?").concat(key, "=").concat(encodeURIComponent(urlPath)).concat(intentTail);
    }

    urlPath = urlPath.slice(urlPath.indexOf('//') + 2);
    return "intent://".concat(urlPath).concat(intentTail);
  } // 生成 universalLink

  function generateUniversalLink(config, options) {
    var universal = options.universal;
    if (typeof universal === 'undefined') return '';
    var host = universal.host,
        pathKey = universal.pathKey;
    var path = config.path,
        param = config.param;
    var qs = generateQS(param);
    var newUniversalLink = "https://".concat(host, "/").concat(path).concat(qs);
    var oldUniversalLink = "https://".concat(host, "?").concat(pathKey, "=").concat(path).concat(qs.replace('?', '&'));
    return pathKey ? oldUniversalLink : newUniversalLink;
  } // 生成 应用宝链接

  function generateYingYongBao(config, options) {
    var url = generateScheme(config, options); // 支持 AppLink

    return "".concat(options.yingyongbao, "&android_schema=").concat(encodeURIComponent(url));
  }

  var hidden;
  var visibilityChange;
  var iframe;

  function getSupportedProperty() {
    if (typeof document === 'undefined') return;

    if (typeof document.hidden !== 'undefined') {
      // Opera 12.10 and Firefox 18 and later support
      hidden = 'hidden';
      visibilityChange = 'visibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
      hidden = 'msHidden';
      visibilityChange = 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
      hidden = 'webkitHidden';
      visibilityChange = 'webkitvisibilitychange';
    }
  }

  getSupportedProperty();
  /**
   * 判断页面是否隐藏（进入后台）
   */

  function isPageHidden() {
    if (typeof hidden === 'undefined') return false;
    return document[hidden];
  }
  /**
   * 通过 top.location.href 跳转
   * @param {string}} [uri] - 需要打开的地址
   */


  function evokeByLocation(uri) {
    window.top.location.href = uri;
  }
  /**
   * 通过 A 标签唤起
   * @param {string} uri - 需要打开的地址
   */

  function evokeByTagA(uri) {
    var tagA = document.createElement('a');
    tagA.setAttribute('href', uri);
    tagA.style.display = 'none'; // append 在 android 6 系统中有兼容性问题
    // eslint-disable-next-line unicorn/prefer-node-append

    document.body.appendChild(tagA);
    tagA.click();
  }
  /**
   * 通过 iframe 唤起
   * @param {string} [uri] - 需要打开的地址
   */

  function evokeByIFrame(uri) {
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.style.cssText = 'display:none;border:0;width:0;height:0;';
      document.body.appendChild(iframe);
    }

    iframe.src = uri;
  }
  /**
   * 检测是否唤端成功
   * @param cb - 唤端失败回调函数
   * @param timeout
   */

  function checkOpen(failure, timeout) {
    var timer = setTimeout(function () {
      var pageHidden = isPageHidden();

      if (!pageHidden) {
        failure();
      }
    }, timeout);

    if (typeof visibilityChange !== 'undefined') {
      document.addEventListener(visibilityChange, function () {
        clearTimeout(timer);
      });
    } else {
      window.addEventListener('pagehide', function () {
        clearTimeout(timer);
      });
    }
  }

  var CallApp = /*#__PURE__*/function () {
    // Create an instance of CallApp
    function CallApp(options) {
      _classCallCheck(this, CallApp);

      _defineProperty(this, "options", void 0);

      var defaultOptions = {
        timeout: 2000
      };
      this.options = _extends(defaultOptions, options);
    }
    /**
     * 注册为方法
     * generateScheme | generateIntent | generateUniversalLink | generateYingYongBao | checkOpen
     */


    _createClass(CallApp, [{
      key: "generateScheme",
      value: function generateScheme$1(config) {
        return generateScheme(config, this.options);
      }
    }, {
      key: "generateIntent",
      value: function generateIntent$1(config) {
        return generateIntent(config, this.options);
      }
    }, {
      key: "generateUniversalLink",
      value: function generateUniversalLink$1(config) {
        return generateUniversalLink(config, this.options);
      }
    }, {
      key: "generateYingYongBao",
      value: function generateYingYongBao$1(config) {
        return generateYingYongBao(config, this.options);
      }
    }, {
      key: "checkOpen",
      value: function checkOpen$1(failure) {
        var _this$options = this.options,
            logFunc = _this$options.logFunc,
            timeout = _this$options.timeout;
        return checkOpen(function () {
          if (typeof logFunc !== 'undefined') {
            logFunc('failure');
          }

          failure();
        }, timeout);
      } // 唤端失败跳转 app store

    }, {
      key: "fallToAppStore",
      value: function fallToAppStore() {
        var _this = this;

        this.checkOpen(function () {
          evokeByLocation(_this.options.appstore);
        });
      } // 唤端失败跳转通用(下载)页

    }, {
      key: "fallToFbUrl",
      value: function fallToFbUrl() {
        var _this2 = this;

        this.checkOpen(function () {
          evokeByLocation(_this2.options.fallback);
        });
      } // 唤端失败调用自定义回调函数

    }, {
      key: "fallToCustomCb",
      value: function fallToCustomCb(callback) {
        this.checkOpen(function () {
          callback();
        });
      }
      /**
       * 唤起客户端
       * 根据不同 browser 执行不同唤端策略
       */

    }, {
      key: "open",
      value: function open(config) {
        var _this$options2 = this.options,
            universal = _this$options2.universal,
            appstore = _this$options2.appstore,
            logFunc = _this$options2.logFunc,
            intent = _this$options2.intent;
        var callback = config.callback;
        var supportUniversal = typeof universal !== 'undefined';
        var schemeURL = this.generateScheme(config);
        var checkOpenFall;

        if (typeof logFunc !== 'undefined') {
          logFunc('pending');
        }

        var isSupportWeibo = !!this.options.isSupportWeibo;

        if (isIos) {
          // ios qq 禁止了 universalLink 唤起app，安卓不受影响 - 18年12月23日
          // ios qq 浏览器禁止了 universalLink - 19年5月1日
          // ios 微信自 7.0.5 版本放开了 Universal Link 的限制
          // ios 微博禁止了 universalLink
          if (isWechat && semverCompare(getWeChatVersion(), '7.0.5') === -1 || isWeibo && !isSupportWeibo) {
            evokeByLocation(appstore);
          } else if (getIOSVersion() < 9) {
            evokeByIFrame(schemeURL);
            checkOpenFall = this.fallToAppStore;
          } else if (!supportUniversal || isQQ || isQQBrowser || isQzone) {
            evokeByTagA(schemeURL);
            checkOpenFall = this.fallToAppStore;
          } else {
            evokeByLocation(this.generateUniversalLink(config));
          } // Android
          // 在微信中且配置了应用宝链接

        } else if (isWechat && typeof this.options.yingyongbao !== 'undefined') {
          evokeByLocation(this.generateYingYongBao(config));
        } else if (isOriginalChrome) {
          if (typeof intent !== 'undefined') {
            evokeByLocation(this.generateIntent(config));
          } else {
            // scheme 在 andriod chrome 25+ 版本上iframe无法正常拉起
            evokeByLocation(schemeURL);
            checkOpenFall = this.fallToFbUrl;
          }
        } else if (isWechat || isBaidu || isWeibo && !isSupportWeibo || isQzone) {
          evokeByLocation(this.options.fallback);
        } else {
          evokeByIFrame(schemeURL);
          checkOpenFall = this.fallToFbUrl;
        }

        if (typeof callback !== 'undefined') {
          this.fallToCustomCb(callback);
          return;
        }

        if (!checkOpenFall) return;
        checkOpenFall.call(this);
      }
    }]);

    return CallApp;
  }();

  return CallApp;

})));


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@3.6.0_webpack@5.109.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js?!./node_modules/.pnpm/sass-loader@8.0.2_sass@1.102.0_webpack@5.109.0/node_modules/sass-loader/dist/cjs.js?!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/index.js?!./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@3.6.0_webpack@5.109.0/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/.pnpm/sass-loader@8.0.2_sass@1.102.0_webpack@5.109.0/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist??ref--1-1!./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/.pnpm/css-loader@3.6.0_webpack@5.109.0/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@3.6.0_webpack@5.109.0/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".download[data-v-6c4282a2] {\n  font-size: 0.28rem;\n  color: #333333;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 0.48rem;\n  font-weight: 500;\n  --van-swipe-indicator-inactive-background-color: #d8d8d8;\n}\n.download[data-v-6c4282a2] .van-swipe__indicator {\n  width: 0.4rem;\n  height: 0.08rem;\n  border-radius: 0.04rem;\n  margin-top: 1.3rem;\n}\n.download .content[data-v-6c4282a2] {\n  padding: 1.6rem 0.4rem 0.4rem;\n}\n.download .item[data-v-6c4282a2] {\n  text-align: center;\n}\n.download .item img[data-v-6c4282a2] {\n  width: 80%;\n}\n.download .item .title[data-v-6c4282a2] {\n  font-size: 0.4rem;\n  color: #1b1b1b;\n  margin-top: 0.52rem;\n  display: block;\n}\n.download .btn[data-v-6c4282a2] {\n  width: 100%;\n  border-radius: 0.4rem;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  border: 0.02rem solid #333333;\n  background: transparent;\n  margin-top: 0.32rem;\n}\n.download .btn.black i[data-v-6c4282a2] {\n  font-size: 0.44rem;\n  color: #fff;\n}\n.download .btn i[data-v-6c4282a2] {\n  font-size: 0.44rem;\n  color: #333333;\n}\n.download .btn .icon-svg[data-v-6c4282a2] {\n  height: 0.44rem;\n  width: 0.44rem;\n}\n.download .btn .right[data-v-6c4282a2] {\n  margin-left: 0.28rem;\n}\n.download .btn .up[data-v-6c4282a2] {\n  font-size: 0.28rem;\n  color: #333333;\n  letter-spacing: 0;\n  text-align: center;\n  line-height: 0.4rem;\n  font-weight: 400;\n  display: block;\n}\n.download .btn .down[data-v-6c4282a2] {\n  font-size: 0.24rem;\n  color: #999999;\n  letter-spacing: 0;\n  text-align: center;\n  font-weight: 400;\n  display: block;\n  zoom: 0.66;\n}\n.download .btn.black[data-v-6c4282a2] {\n  background: #333333;\n}\n.download .btn.black .up[data-v-6c4282a2] {\n  color: #fff;\n}\n.header[data-v-6c4282a2] {\n  background: #2c3254;\n  height: 1rem;\n  padding: 0.4rem 0.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: fixed;\n  width: 100%;\n  z-index: 2;\n}\n.header img[data-v-6c4282a2] {\n  width: 2.16rem;\n}\n.header .open[data-v-6c4282a2] {\n  padding: 0.08rem 0.4rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@3.6.0_webpack@5.109.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js?!./node_modules/.pnpm/sass-loader@8.0.2_sass@1.102.0_webpack@5.109.0/node_modules/sass-loader/dist/cjs.js?!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/index.js?!./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/.pnpm/css-loader@3.6.0_webpack@5.109.0/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/.pnpm/sass-loader@8.0.2_sass@1.102.0_webpack@5.109.0/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist??ref--1-1!./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.pnpm/css-loader@3.6.0_webpack@5.109.0/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/.pnpm/sass-loader@8.0.2_sass@1.102.0_webpack@5.109.0/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist??ref--1-1!./download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true */ "./node_modules/.pnpm/css-loader@3.6.0_webpack@5.109.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js?!./node_modules/.pnpm/sass-loader@8.0.2_sass@1.102.0_webpack@5.109.0/node_modules/sass-loader/dist/cjs.js?!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/index.js?!./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("79d36dc6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/images/ave-white.png":
/*!*****************************************!*\
  !*** ./src/assets/images/ave-white.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/ave-white.46ab30c8.png";

/***/ }),

/***/ "./src/assets/images/download/1.png":
/*!******************************************!*\
  !*** ./src/assets/images/download/1.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/1.c2cea025.png";

/***/ }),

/***/ "./src/assets/images/download/2.png":
/*!******************************************!*\
  !*** ./src/assets/images/download/2.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/2.a0c74112.png";

/***/ }),

/***/ "./src/assets/images/download/3.png":
/*!******************************************!*\
  !*** ./src/assets/images/download/3.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/3.980df93c.png";

/***/ }),

/***/ "./src/views/download.vue":
/*!********************************!*\
  !*** ./src/views/download.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _download_vue_vue_type_template_id_6c4282a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download.vue?vue&type=template&id=6c4282a2&scoped=true */ "./src/views/download.vue?vue&type=template&id=6c4282a2&scoped=true");
/* harmony import */ var _download_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./download.vue?vue&type=script&lang=js */ "./src/views/download.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _download_vue_vue_type_style_index_0_id_6c4282a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true */ "./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/exportHelper.js");
/* harmony import */ var _Users_luweijun_work_AVE_avedex_m_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_luweijun_work_AVE_avedex_m_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/_Users_luweijun_work_AVE_avedex_m_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_download_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_download_vue_vue_type_template_id_6c4282a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]],['__scopeId',"data-v-6c4282a2"],['__file',"src/views/download.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/download.vue?vue&type=script&lang=js":
/*!********************************************************!*\
  !*** ./src/views/download.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_pnpm_babel_loader_8_4_1_babel_core_7_29_7_webpack_4_47_0_node_modules_babel_loader_lib_index_js_node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_index_js_ref_1_1_download_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.29.7_webpack@4.47.0/node_modules/babel-loader/lib!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist??ref--1-1!./download.vue?vue&type=script&lang=js */ "./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.29.7_webpack@4.47.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/index.js?!./src/views/download.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_pnpm_babel_loader_8_4_1_babel_core_7_29_7_webpack_4_47_0_node_modules_babel_loader_lib_index_js_node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_index_js_ref_1_1_download_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true":
/*!*****************************************************************************************!*\
  !*** ./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_pnpm_css_loader_3_6_0_webpack_5_109_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_pnpm_sass_loader_8_0_2_sass_1_102_0_webpack_5_109_0_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_index_js_ref_1_1_download_vue_vue_type_style_index_0_id_6c4282a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/.pnpm/css-loader@3.6.0_webpack@5.109.0/node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/.pnpm/sass-loader@8.0.2_sass@1.102.0_webpack@5.109.0/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist??ref--1-1!./download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true */ "./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@3.6.0_webpack@5.109.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@3.0.0/node_modules/postcss-loader/src/index.js?!./node_modules/.pnpm/sass-loader@8.0.2_sass@1.102.0_webpack@5.109.0/node_modules/sass-loader/dist/cjs.js?!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/index.js?!./src/views/download.vue?vue&type=style&index=0&id=6c4282a2&lang=scss&scoped=true");
/* harmony import */ var _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_pnpm_css_loader_3_6_0_webpack_5_109_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_pnpm_sass_loader_8_0_2_sass_1_102_0_webpack_5_109_0_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_index_js_ref_1_1_download_vue_vue_type_style_index_0_id_6c4282a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_pnpm_css_loader_3_6_0_webpack_5_109_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_pnpm_sass_loader_8_0_2_sass_1_102_0_webpack_5_109_0_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_index_js_ref_1_1_download_vue_vue_type_style_index_0_id_6c4282a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_pnpm_css_loader_3_6_0_webpack_5_109_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_pnpm_sass_loader_8_0_2_sass_1_102_0_webpack_5_109_0_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_index_js_ref_1_1_download_vue_vue_type_style_index_0_id_6c4282a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_pnpm_vue_style_loader_4_1_3_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_pnpm_css_loader_3_6_0_webpack_5_109_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_pnpm_postcss_loader_3_0_0_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_pnpm_sass_loader_8_0_2_sass_1_102_0_webpack_5_109_0_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_index_js_ref_1_1_download_vue_vue_type_style_index_0_id_6c4282a2_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/download.vue?vue&type=template&id=6c4282a2&scoped=true":
/*!**************************************************************************!*\
  !*** ./src/views/download.vue?vue&type=template&id=6c4282a2&scoped=true ***!
  \**************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_pnpm_babel_loader_8_4_1_babel_core_7_29_7_webpack_4_47_0_node_modules_babel_loader_lib_index_js_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_index_js_ref_1_1_download_vue_vue_type_template_id_6c4282a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.29.7_webpack@4.47.0/node_modules/babel-loader/lib!../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js??ref--6!../../node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist??ref--1-1!./download.vue?vue&type=template&id=6c4282a2&scoped=true */ "./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/babel-loader@8.4.1_@babel+core@7.29.7_webpack@4.47.0/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/templateLoader.js?!./node_modules/.pnpm/cache-loader@4.1.0_webpack@4.47.0/node_modules/cache-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@16.8.3_@vue+compiler-sfc@3.5.40_vue@3.5.40_webpack@4.47.0/node_modules/vue-loader/dist/index.js?!./src/views/download.vue?vue&type=template&id=6c4282a2&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_pnpm_babel_loader_8_4_1_babel_core_7_29_7_webpack_4_47_0_node_modules_babel_loader_lib_index_js_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_templateLoader_js_ref_6_node_modules_pnpm_cache_loader_4_1_0_webpack_4_47_0_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_pnpm_vue_loader_16_8_3_vue_compiler_sfc_3_5_40_vue_3_5_40_webpack_4_47_0_node_modules_vue_loader_dist_index_js_ref_1_1_download_vue_vue_type_template_id_6c4282a2_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ })

}]);