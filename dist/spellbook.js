import { defineComponent as F, createElementBlock as D, openBlock as G, renderSlot as J, createTextVNode as Q, toDisplayString as X, unref as Z, createVNode as q } from "vue";
const _ = /* @__PURE__ */ F({
  __name: "SbButton",
  props: {
    label: {}
  },
  setup(w) {
    const A = function() {
      console.log("click!");
    };
    return (r, c) => (G(), D("button", { onClick: A }, [
      J(r.$slots, "default", {}, () => [
        Q(X(r.label), 1)
      ], !0)
    ]));
  }
}), k = (w, A) => {
  const r = w.__vccOpts || w;
  for (const [c, e] of A)
    r[c] = e;
  return r;
}, pe = /* @__PURE__ */ k(_, [["__scopeId", "data-v-2679b37a"]]);
function ee(w) {
  return w && w.__esModule && Object.prototype.hasOwnProperty.call(w, "default") ? w.default : w;
}
var L = { exports: {} }, ne = L.exports, Y;
function te() {
  return Y || (Y = 1, function(w, A) {
    (function(c, e) {
      w.exports = e();
    })(typeof self < "u" ? self : ne, function() {
      return (
        /******/
        function(r) {
          var c = {};
          function e(t) {
            if (c[t])
              return c[t].exports;
            var n = c[t] = {
              /******/
              i: t,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return r[t].call(n.exports, n, n.exports, e), n.l = !0, n.exports;
          }
          return e.m = r, e.c = c, e.d = function(t, n, o) {
            e.o(t, n) || Object.defineProperty(t, n, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: o
              /******/
            });
          }, e.r = function(t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
          }, e.n = function(t) {
            var n = t && t.__esModule ? (
              /******/
              function() {
                return t.default;
              }
            ) : (
              /******/
              function() {
                return t;
              }
            );
            return e.d(n, "a", n), n;
          }, e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n);
          }, e.p = "", e(e.s = 0);
        }({
          /***/
          "./dist/icons.json": (
            /*!*************************!*\
              !*** ./dist/icons.json ***!
              \*************************/
            /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, aperture, archive, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, award, bar-chart-2, bar-chart, battery-charging, battery, bell-off, bell, bluetooth, bold, book-open, book, bookmark, box, briefcase, calendar, camera-off, camera, cast, check-circle, check-square, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, chrome, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-off, cloud-rain, cloud-snow, cloud, code, codepen, codesandbox, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, divide-circle, divide-square, divide, dollar-sign, download-cloud, download, dribbble, droplet, edit-2, edit-3, edit, external-link, eye-off, eye, facebook, fast-forward, feather, figma, file-minus, file-plus, file-text, file, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, grid, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, info, instagram, italic, key, layers, layout, life-buoy, link-2, link, linkedin, list, loader, lock, log-in, log-out, mail, map-pin, map, maximize-2, maximize, meh, menu, message-circle, message-square, mic-off, mic, minimize-2, minimize, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation-2, navigation, octagon, package, paperclip, pause-circle, pause, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, pie-chart, play-circle, play, plus-circle, plus-square, plus, pocket, power, printer, radio, refresh-ccw, refresh-cw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, server, settings, share-2, share, shield-off, shield, shopping-bag, shopping-cart, shuffle, sidebar, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, square, star, stop-circle, sun, sunrise, sunset, table, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash-2, trash, trello, trending-down, trending-up, triangle, truck, tv, twitch, twitter, type, umbrella, underline, unlock, upload-cloud, upload, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume-1, volume-2, volume-x, volume, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
            /***/
            function(r) {
              r.exports = { activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>', airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>', "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>', "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>', "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>', "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>', "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>', "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>', "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>', anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>', aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>', archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>', "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>', "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>', "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>', "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>', "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>', "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>', "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>', "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>', "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>', "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>', "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>', "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>', "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>', award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>', "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>', "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>', "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>', battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>', "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>', bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>', bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>', bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>', "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>', book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>', bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>', box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>', calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>', "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>', camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>', cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>', "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>', "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>', check: '<polyline points="20 6 9 17 4 12"></polyline>', "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>', "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>', "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>', "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>', "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>', "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>', "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>', "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>', chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>', circle: '<circle cx="12" cy="12" r="10"></circle>', clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>', clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>', "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>', "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>', cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>', code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>', codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>', codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>', columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>', command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>', compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>', copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>', "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>', "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>', "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>', "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>', "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>', "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>', "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>', "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>', cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>', "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>', crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>', crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>', database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>', delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>', disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>', "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>', "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>', divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>', "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>', "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>', download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>', dribbble: '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>', droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>', "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>', "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>', edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>', "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>', "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>', eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>', facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>', "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>', feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>', figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>', "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>', "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>', "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>', file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>', film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>', filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>', flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>', "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>', "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>', folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>', framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>', frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>', "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>', "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>', "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>', "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>', github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>', gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>', globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>', grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>', "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>', hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>', headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>', heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>', "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>', hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>', home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>', image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>', inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>', info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>', instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>', italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>', key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>', layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>', layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>', "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>', "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>', link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>', linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>', list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>', loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>', lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>', "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>', "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>', mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>', "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>', map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>', "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>', maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>', meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>', "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>', "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>', "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>', minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>', "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>', "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>', minus: '<line x1="5" y1="12" x2="19" y2="12"></line>', monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>', moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>', "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>', "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>', "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>', move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>', music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>', "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>', navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>', octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>', package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>', "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>', pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>', "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>', percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>', "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>', "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>', "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>', play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>', "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>', pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>', power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>', printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>', radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>', "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>', "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>', repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>', rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>', "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>', "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>', rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>', save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>', scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>', search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>', send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>', server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>', settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>', "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>', share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>', "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>', shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>', "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>', "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>', shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>', sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>', "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>', "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>', slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>', slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>', sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>', smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>', smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>', square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>', star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>', "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>', sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>', sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>', table: '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>', tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>', tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>', target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>', terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>', thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>', "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>', "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>', "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>', "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>', tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>', "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>', trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>', trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>', "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>', "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>', triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>', truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>', tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>', twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>', twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>', type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>', umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>', underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>', unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>', "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>', upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>', "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>', "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>', "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>', "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>', user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>', users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>', "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>', video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>', voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>', "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>', volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>', watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>', "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>', wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>', wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>', "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>', x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>', youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>', "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>', zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>', "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>', "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>' };
            }
          ),
          /***/
          "./node_modules/classnames/dedupe.js": (
            /*!*******************************************!*\
              !*** ./node_modules/classnames/dedupe.js ***!
              \*******************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t, n;
              /*!
                Copyright (c) 2016 Jed Watson.
                Licensed under the MIT License (MIT), see
                http://jedwatson.github.io/classnames
              */
              (function() {
                var o = function() {
                  function l() {
                  }
                  l.prototype = /* @__PURE__ */ Object.create(null);
                  function i(x, u) {
                    for (var m = u.length, v = 0; v < m; ++v)
                      p(x, u[v]);
                  }
                  var s = {}.hasOwnProperty;
                  function a(x, u) {
                    x[u] = !0;
                  }
                  function d(x, u) {
                    for (var m in u)
                      s.call(u, m) && (x[m] = !!u[m]);
                  }
                  var h = /\s+/;
                  function y(x, u) {
                    for (var m = u.split(h), v = m.length, M = 0; M < v; ++M)
                      x[m[M]] = !0;
                  }
                  function p(x, u) {
                    if (u) {
                      var m = typeof u;
                      m === "string" ? y(x, u) : Array.isArray(u) ? i(x, u) : m === "object" ? d(x, u) : m === "number" && a(x, u);
                    }
                  }
                  function f() {
                    for (var x = arguments.length, u = Array(x), m = 0; m < x; m++)
                      u[m] = arguments[m];
                    var v = new l();
                    i(v, u);
                    var M = [];
                    for (var j in v)
                      v[j] && M.push(j);
                    return M.join(" ");
                  }
                  return f;
                }();
                typeof r < "u" && r.exports ? r.exports = o : (t = [], n = (function() {
                  return o;
                }).apply(c, t), n !== void 0 && (r.exports = n));
              })();
            }
          ),
          /***/
          "./node_modules/core-js/es/array/from.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/es/array/from.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              e(
                /*! ../../modules/es.string.iterator */
                "./node_modules/core-js/modules/es.string.iterator.js"
              ), e(
                /*! ../../modules/es.array.from */
                "./node_modules/core-js/modules/es.array.from.js"
              );
              var t = e(
                /*! ../../internals/path */
                "./node_modules/core-js/internals/path.js"
              );
              r.exports = t.Array.from;
            }
          ),
          /***/
          "./node_modules/core-js/internals/a-function.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/a-function.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              r.exports = function(e) {
                if (typeof e != "function")
                  throw TypeError(String(e) + " is not a function");
                return e;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/an-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/an-object.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              r.exports = function(n) {
                if (!t(n))
                  throw TypeError(String(n) + " is not an object");
                return n;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-from.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/array-from.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/bind-context */
                "./node_modules/core-js/internals/bind-context.js"
              ), n = e(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              ), o = e(
                /*! ../internals/call-with-safe-iteration-closing */
                "./node_modules/core-js/internals/call-with-safe-iteration-closing.js"
              ), l = e(
                /*! ../internals/is-array-iterator-method */
                "./node_modules/core-js/internals/is-array-iterator-method.js"
              ), i = e(
                /*! ../internals/to-length */
                "./node_modules/core-js/internals/to-length.js"
              ), s = e(
                /*! ../internals/create-property */
                "./node_modules/core-js/internals/create-property.js"
              ), a = e(
                /*! ../internals/get-iterator-method */
                "./node_modules/core-js/internals/get-iterator-method.js"
              );
              r.exports = function(h) {
                var y = n(h), p = typeof this == "function" ? this : Array, f = arguments.length, x = f > 1 ? arguments[1] : void 0, u = x !== void 0, m = 0, v = a(y), M, j, g, b;
                if (u && (x = t(x, f > 2 ? arguments[2] : void 0, 2)), v != null && !(p == Array && l(v)))
                  for (b = v.call(y), j = new p(); !(g = b.next()).done; m++)
                    s(
                      j,
                      m,
                      u ? o(b, x, [g.value, m], !0) : g.value
                    );
                else
                  for (M = i(y.length), j = new p(M); M > m; m++)
                    s(j, m, u ? x(y[m], m) : y[m]);
                return j.length = m, j;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/array-includes.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/array-includes.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              ), n = e(
                /*! ../internals/to-length */
                "./node_modules/core-js/internals/to-length.js"
              ), o = e(
                /*! ../internals/to-absolute-index */
                "./node_modules/core-js/internals/to-absolute-index.js"
              );
              r.exports = function(l) {
                return function(i, s, a) {
                  var d = t(i), h = n(d.length), y = o(a, h), p;
                  if (l && s != s) {
                    for (; h > y; )
                      if (p = d[y++], p != p) return !0;
                  } else for (; h > y; y++) if ((l || y in d) && d[y] === s)
                    return l || y || 0;
                  return !l && -1;
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/bind-context.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/internals/bind-context.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/a-function */
                "./node_modules/core-js/internals/a-function.js"
              );
              r.exports = function(n, o, l) {
                if (t(n), o === void 0) return n;
                switch (l) {
                  case 0:
                    return function() {
                      return n.call(o);
                    };
                  case 1:
                    return function(i) {
                      return n.call(o, i);
                    };
                  case 2:
                    return function(i, s) {
                      return n.call(o, i, s);
                    };
                  case 3:
                    return function(i, s, a) {
                      return n.call(o, i, s, a);
                    };
                }
                return function() {
                  return n.apply(o, arguments);
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/call-with-safe-iteration-closing.js": (
            /*!****************************************************************************!*\
              !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
              \****************************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              r.exports = function(n, o, l, i) {
                try {
                  return i ? o(t(l)[0], l[1]) : o(l);
                } catch (a) {
                  var s = n.return;
                  throw s !== void 0 && t(s.call(n)), a;
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/check-correctness-of-iteration.js": (
            /*!**************************************************************************!*\
              !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
              \**************************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), n = t("iterator"), o = !1;
              try {
                var l = 0, i = {
                  next: function() {
                    return { done: !!l++ };
                  },
                  return: function() {
                    o = !0;
                  }
                };
                i[n] = function() {
                  return this;
                }, Array.from(i, function() {
                  throw 2;
                });
              } catch {
              }
              r.exports = function(s, a) {
                if (!a && !o) return !1;
                var d = !1;
                try {
                  var h = {};
                  h[n] = function() {
                    return {
                      next: function() {
                        return { done: d = !0 };
                      }
                    };
                  }, s(h);
                } catch {
                }
                return d;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/classof-raw.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/classof-raw.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              var e = {}.toString;
              r.exports = function(t) {
                return e.call(t).slice(8, -1);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/classof.js": (
            /*!***************************************************!*\
              !*** ./node_modules/core-js/internals/classof.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/classof-raw */
                "./node_modules/core-js/internals/classof-raw.js"
              ), n = e(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), o = n("toStringTag"), l = t(/* @__PURE__ */ function() {
                return arguments;
              }()) == "Arguments", i = function(s, a) {
                try {
                  return s[a];
                } catch {
                }
              };
              r.exports = function(s) {
                var a, d, h;
                return s === void 0 ? "Undefined" : s === null ? "Null" : typeof (d = i(a = Object(s), o)) == "string" ? d : l ? t(a) : (h = t(a)) == "Object" && typeof a.callee == "function" ? "Arguments" : h;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/copy-constructor-properties.js": (
            /*!***********************************************************************!*\
              !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
              \***********************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), n = e(
                /*! ../internals/own-keys */
                "./node_modules/core-js/internals/own-keys.js"
              ), o = e(
                /*! ../internals/object-get-own-property-descriptor */
                "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
              ), l = e(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              );
              r.exports = function(i, s) {
                for (var a = n(s), d = l.f, h = o.f, y = 0; y < a.length; y++) {
                  var p = a[y];
                  t(i, p) || d(i, p, h(s, p));
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/correct-prototype-getter.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              r.exports = !t(function() {
                function n() {
                }
                return n.prototype.constructor = null, Object.getPrototypeOf(new n()) !== n.prototype;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-iterator-constructor.js": (
            /*!***********************************************************************!*\
              !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
              \***********************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/iterators-core */
                "./node_modules/core-js/internals/iterators-core.js"
              ).IteratorPrototype, n = e(
                /*! ../internals/object-create */
                "./node_modules/core-js/internals/object-create.js"
              ), o = e(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              ), l = e(
                /*! ../internals/set-to-string-tag */
                "./node_modules/core-js/internals/set-to-string-tag.js"
              ), i = e(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              ), s = function() {
                return this;
              };
              r.exports = function(a, d, h) {
                var y = d + " Iterator";
                return a.prototype = n(t, { next: o(1, h) }), l(a, y, !1, !0), i[y] = s, a;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-property-descriptor.js": (
            /*!**********************************************************************!*\
              !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
              \**********************************************************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              r.exports = function(e, t) {
                return {
                  enumerable: !(e & 1),
                  configurable: !(e & 2),
                  writable: !(e & 4),
                  value: t
                };
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/create-property.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/create-property.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js"
              ), n = e(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ), o = e(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              r.exports = function(l, i, s) {
                var a = t(i);
                a in l ? n.f(l, a, o(0, s)) : l[a] = s;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/define-iterator.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/define-iterator.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              ), n = e(
                /*! ../internals/create-iterator-constructor */
                "./node_modules/core-js/internals/create-iterator-constructor.js"
              ), o = e(
                /*! ../internals/object-get-prototype-of */
                "./node_modules/core-js/internals/object-get-prototype-of.js"
              ), l = e(
                /*! ../internals/object-set-prototype-of */
                "./node_modules/core-js/internals/object-set-prototype-of.js"
              ), i = e(
                /*! ../internals/set-to-string-tag */
                "./node_modules/core-js/internals/set-to-string-tag.js"
              ), s = e(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              ), a = e(
                /*! ../internals/redefine */
                "./node_modules/core-js/internals/redefine.js"
              ), d = e(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), h = e(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              ), y = e(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              ), p = e(
                /*! ../internals/iterators-core */
                "./node_modules/core-js/internals/iterators-core.js"
              ), f = p.IteratorPrototype, x = p.BUGGY_SAFARI_ITERATORS, u = d("iterator"), m = "keys", v = "values", M = "entries", j = function() {
                return this;
              };
              r.exports = function(g, b, z, $, I, U, K) {
                n(z, b, $);
                var E = function(S) {
                  if (S === I && P) return P;
                  if (!x && S in O) return O[S];
                  switch (S) {
                    case m:
                      return function() {
                        return new z(this, S);
                      };
                    case v:
                      return function() {
                        return new z(this, S);
                      };
                    case M:
                      return function() {
                        return new z(this, S);
                      };
                  }
                  return function() {
                    return new z(this);
                  };
                }, N = b + " Iterator", C = !1, O = g.prototype, T = O[u] || O["@@iterator"] || I && O[I], P = !x && T || E(I), B = b == "Array" && O.entries || T, H, V, R;
                if (B && (H = o(B.call(new g())), f !== Object.prototype && H.next && (!h && o(H) !== f && (l ? l(H, f) : typeof H[u] != "function" && s(H, u, j)), i(H, N, !0, !0), h && (y[N] = j))), I == v && T && T.name !== v && (C = !0, P = function() {
                  return T.call(this);
                }), (!h || K) && O[u] !== P && s(O, u, P), y[b] = P, I)
                  if (V = {
                    values: E(v),
                    keys: U ? P : E(m),
                    entries: E(M)
                  }, K) for (R in V)
                    (x || C || !(R in O)) && a(O, R, V[R]);
                  else t({ target: b, proto: !0, forced: x || C }, V);
                return V;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/descriptors.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/descriptors.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              r.exports = !t(function() {
                return Object.defineProperty({}, "a", { get: function() {
                  return 7;
                } }).a != 7;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/document-create-element.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/document-create-element.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), n = e(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              ), o = t.document, l = n(o) && n(o.createElement);
              r.exports = function(i) {
                return l ? o.createElement(i) : {};
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/enum-bug-keys.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              r.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf"
              ];
            }
          ),
          /***/
          "./node_modules/core-js/internals/export.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/export.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), n = e(
                /*! ../internals/object-get-own-property-descriptor */
                "./node_modules/core-js/internals/object-get-own-property-descriptor.js"
              ).f, o = e(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              ), l = e(
                /*! ../internals/redefine */
                "./node_modules/core-js/internals/redefine.js"
              ), i = e(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              ), s = e(
                /*! ../internals/copy-constructor-properties */
                "./node_modules/core-js/internals/copy-constructor-properties.js"
              ), a = e(
                /*! ../internals/is-forced */
                "./node_modules/core-js/internals/is-forced.js"
              );
              r.exports = function(d, h) {
                var y = d.target, p = d.global, f = d.stat, x, u, m, v, M, j;
                if (p ? u = t : f ? u = t[y] || i(y, {}) : u = (t[y] || {}).prototype, u) for (m in h) {
                  if (M = h[m], d.noTargetGet ? (j = n(u, m), v = j && j.value) : v = u[m], x = a(p ? m : y + (f ? "." : "#") + m, d.forced), !x && v !== void 0) {
                    if (typeof M == typeof v) continue;
                    s(M, v);
                  }
                  (d.sham || v && v.sham) && o(M, "sham", !0), l(u, m, M, d);
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/fails.js": (
            /*!*************************************************!*\
              !*** ./node_modules/core-js/internals/fails.js ***!
              \*************************************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              r.exports = function(e) {
                try {
                  return !!e();
                } catch {
                  return !0;
                }
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/function-to-string.js": (
            /*!**************************************************************!*\
              !*** ./node_modules/core-js/internals/function-to-string.js ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              );
              r.exports = t("native-function-to-string", Function.toString);
            }
          ),
          /***/
          "./node_modules/core-js/internals/get-iterator-method.js": (
            /*!***************************************************************!*\
              !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
              \***************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/classof */
                "./node_modules/core-js/internals/classof.js"
              ), n = e(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              ), o = e(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), l = o("iterator");
              r.exports = function(i) {
                if (i != null) return i[l] || i["@@iterator"] || n[t(i)];
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/global.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/global.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              (function(t) {
                var n = "object", o = function(l) {
                  return l && l.Math == Math && l;
                };
                r.exports = // eslint-disable-next-line no-undef
                o(typeof globalThis == n && globalThis) || o(typeof window == n && window) || o(typeof self == n && self) || o(typeof t == n && t) || // eslint-disable-next-line no-new-func
                Function("return this")();
              }).call(this, e(
                /*! ./../../webpack/buildin/global.js */
                "./node_modules/webpack/buildin/global.js"
              ));
            }
          ),
          /***/
          "./node_modules/core-js/internals/has.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/internals/has.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              var e = {}.hasOwnProperty;
              r.exports = function(t, n) {
                return e.call(t, n);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/hidden-keys.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/hidden-keys.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              r.exports = {};
            }
          ),
          /***/
          "./node_modules/core-js/internals/hide.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/internals/hide.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), n = e(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ), o = e(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              );
              r.exports = t ? function(l, i, s) {
                return n.f(l, i, o(1, s));
              } : function(l, i, s) {
                return l[i] = s, l;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/html.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/internals/html.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), n = t.document;
              r.exports = n && n.documentElement;
            }
          ),
          /***/
          "./node_modules/core-js/internals/ie8-dom-define.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), n = e(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              ), o = e(
                /*! ../internals/document-create-element */
                "./node_modules/core-js/internals/document-create-element.js"
              );
              r.exports = !t && !n(function() {
                return Object.defineProperty(o("div"), "a", {
                  get: function() {
                    return 7;
                  }
                }).a != 7;
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/indexed-object.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/indexed-object.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              ), n = e(
                /*! ../internals/classof-raw */
                "./node_modules/core-js/internals/classof-raw.js"
              ), o = "".split;
              r.exports = t(function() {
                return !Object("z").propertyIsEnumerable(0);
              }) ? function(l) {
                return n(l) == "String" ? o.call(l, "") : Object(l);
              } : Object;
            }
          ),
          /***/
          "./node_modules/core-js/internals/internal-state.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/internal-state.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/native-weak-map */
                "./node_modules/core-js/internals/native-weak-map.js"
              ), n = e(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), o = e(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              ), l = e(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              ), i = e(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), s = e(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              ), a = e(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              ), d = n.WeakMap, h, y, p, f = function(g) {
                return p(g) ? y(g) : h(g, {});
              }, x = function(g) {
                return function(b) {
                  var z;
                  if (!o(b) || (z = y(b)).type !== g)
                    throw TypeError("Incompatible receiver, " + g + " required");
                  return z;
                };
              };
              if (t) {
                var u = new d(), m = u.get, v = u.has, M = u.set;
                h = function(g, b) {
                  return M.call(u, g, b), b;
                }, y = function(g) {
                  return m.call(u, g) || {};
                }, p = function(g) {
                  return v.call(u, g);
                };
              } else {
                var j = s("state");
                a[j] = !0, h = function(g, b) {
                  return l(g, j, b), b;
                }, y = function(g) {
                  return i(g, j) ? g[j] : {};
                }, p = function(g) {
                  return i(g, j);
                };
              }
              r.exports = {
                set: h,
                get: y,
                has: p,
                enforce: f,
                getterFor: x
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-array-iterator-method.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), n = e(
                /*! ../internals/iterators */
                "./node_modules/core-js/internals/iterators.js"
              ), o = t("iterator"), l = Array.prototype;
              r.exports = function(i) {
                return i !== void 0 && (n.Array === i || l[o] === i);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-forced.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/is-forced.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              ), n = /#|\.prototype\./, o = function(d, h) {
                var y = i[l(d)];
                return y == a ? !0 : y == s ? !1 : typeof h == "function" ? t(h) : !!h;
              }, l = o.normalize = function(d) {
                return String(d).replace(n, ".").toLowerCase();
              }, i = o.data = {}, s = o.NATIVE = "N", a = o.POLYFILL = "P";
              r.exports = o;
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/is-object.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              r.exports = function(e) {
                return typeof e == "object" ? e !== null : typeof e == "function";
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/is-pure.js": (
            /*!***************************************************!*\
              !*** ./node_modules/core-js/internals/is-pure.js ***!
              \***************************************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              r.exports = !1;
            }
          ),
          /***/
          "./node_modules/core-js/internals/iterators-core.js": (
            /*!**********************************************************!*\
              !*** ./node_modules/core-js/internals/iterators-core.js ***!
              \**********************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/object-get-prototype-of */
                "./node_modules/core-js/internals/object-get-prototype-of.js"
              ), n = e(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              ), o = e(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), l = e(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), i = e(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              ), s = l("iterator"), a = !1, d = function() {
                return this;
              }, h, y, p;
              [].keys && (p = [].keys(), "next" in p ? (y = t(t(p)), y !== Object.prototype && (h = y)) : a = !0), h == null && (h = {}), !i && !o(h, s) && n(h, s, d), r.exports = {
                IteratorPrototype: h,
                BUGGY_SAFARI_ITERATORS: a
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/iterators.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/iterators.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              r.exports = {};
            }
          ),
          /***/
          "./node_modules/core-js/internals/native-symbol.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/native-symbol.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/fails */
                "./node_modules/core-js/internals/fails.js"
              );
              r.exports = !!Object.getOwnPropertySymbols && !t(function() {
                return !String(Symbol());
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/native-weak-map.js": (
            /*!***********************************************************!*\
              !*** ./node_modules/core-js/internals/native-weak-map.js ***!
              \***********************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), n = e(
                /*! ../internals/function-to-string */
                "./node_modules/core-js/internals/function-to-string.js"
              ), o = t.WeakMap;
              r.exports = typeof o == "function" && /native code/.test(n.call(o));
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-create.js": (
            /*!*********************************************************!*\
              !*** ./node_modules/core-js/internals/object-create.js ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              ), n = e(
                /*! ../internals/object-define-properties */
                "./node_modules/core-js/internals/object-define-properties.js"
              ), o = e(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              ), l = e(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              ), i = e(
                /*! ../internals/html */
                "./node_modules/core-js/internals/html.js"
              ), s = e(
                /*! ../internals/document-create-element */
                "./node_modules/core-js/internals/document-create-element.js"
              ), a = e(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              ), d = a("IE_PROTO"), h = "prototype", y = function() {
              }, p = function() {
                var f = s("iframe"), x = o.length, u = "<", m = "script", v = ">", M = "java" + m + ":", j;
                for (f.style.display = "none", i.appendChild(f), f.src = String(M), j = f.contentWindow.document, j.open(), j.write(u + m + v + "document.F=Object" + u + "/" + m + v), j.close(), p = j.F; x--; ) delete p[h][o[x]];
                return p();
              };
              r.exports = Object.create || function(x, u) {
                var m;
                return x !== null ? (y[h] = t(x), m = new y(), y[h] = null, m[d] = x) : m = p(), u === void 0 ? m : n(m, u);
              }, l[d] = !0;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-define-properties.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/object-define-properties.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), n = e(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ), o = e(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              ), l = e(
                /*! ../internals/object-keys */
                "./node_modules/core-js/internals/object-keys.js"
              );
              r.exports = t ? Object.defineProperties : function(s, a) {
                o(s);
                for (var d = l(a), h = d.length, y = 0, p; h > y; ) n.f(s, p = d[y++], a[p]);
                return s;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-define-property.js": (
            /*!******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-define-property.js ***!
              \******************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), n = e(
                /*! ../internals/ie8-dom-define */
                "./node_modules/core-js/internals/ie8-dom-define.js"
              ), o = e(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              ), l = e(
                /*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js"
              ), i = Object.defineProperty;
              c.f = t ? i : function(a, d, h) {
                if (o(a), d = l(d, !0), o(h), n) try {
                  return i(a, d, h);
                } catch {
                }
                if ("get" in h || "set" in h) throw TypeError("Accessors not supported");
                return "value" in h && (a[d] = h.value), a;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-descriptor.js": (
            /*!******************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
              \******************************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/descriptors */
                "./node_modules/core-js/internals/descriptors.js"
              ), n = e(
                /*! ../internals/object-property-is-enumerable */
                "./node_modules/core-js/internals/object-property-is-enumerable.js"
              ), o = e(
                /*! ../internals/create-property-descriptor */
                "./node_modules/core-js/internals/create-property-descriptor.js"
              ), l = e(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              ), i = e(
                /*! ../internals/to-primitive */
                "./node_modules/core-js/internals/to-primitive.js"
              ), s = e(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), a = e(
                /*! ../internals/ie8-dom-define */
                "./node_modules/core-js/internals/ie8-dom-define.js"
              ), d = Object.getOwnPropertyDescriptor;
              c.f = t ? d : function(y, p) {
                if (y = l(y), p = i(p, !0), a) try {
                  return d(y, p);
                } catch {
                }
                if (s(y, p)) return o(!n.f.call(y, p), y[p]);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-names.js": (
            /*!*************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
              \*************************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/object-keys-internal */
                "./node_modules/core-js/internals/object-keys-internal.js"
              ), n = e(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              ), o = n.concat("length", "prototype");
              c.f = Object.getOwnPropertyNames || function(i) {
                return t(i, o);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-own-property-symbols.js": (
            /*!***************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
              \***************************************************************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              c.f = Object.getOwnPropertySymbols;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-get-prototype-of.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), n = e(
                /*! ../internals/to-object */
                "./node_modules/core-js/internals/to-object.js"
              ), o = e(
                /*! ../internals/shared-key */
                "./node_modules/core-js/internals/shared-key.js"
              ), l = e(
                /*! ../internals/correct-prototype-getter */
                "./node_modules/core-js/internals/correct-prototype-getter.js"
              ), i = o("IE_PROTO"), s = Object.prototype;
              r.exports = l ? Object.getPrototypeOf : function(a) {
                return a = n(a), t(a, i) ? a[i] : typeof a.constructor == "function" && a instanceof a.constructor ? a.constructor.prototype : a instanceof Object ? s : null;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-keys-internal.js": (
            /*!****************************************************************!*\
              !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
              \****************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), n = e(
                /*! ../internals/to-indexed-object */
                "./node_modules/core-js/internals/to-indexed-object.js"
              ), o = e(
                /*! ../internals/array-includes */
                "./node_modules/core-js/internals/array-includes.js"
              ), l = e(
                /*! ../internals/hidden-keys */
                "./node_modules/core-js/internals/hidden-keys.js"
              ), i = o(!1);
              r.exports = function(s, a) {
                var d = n(s), h = 0, y = [], p;
                for (p in d) !t(l, p) && t(d, p) && y.push(p);
                for (; a.length > h; ) t(d, p = a[h++]) && (~i(y, p) || y.push(p));
                return y;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-keys.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/internals/object-keys.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/object-keys-internal */
                "./node_modules/core-js/internals/object-keys-internal.js"
              ), n = e(
                /*! ../internals/enum-bug-keys */
                "./node_modules/core-js/internals/enum-bug-keys.js"
              );
              r.exports = Object.keys || function(l) {
                return t(l, n);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-property-is-enumerable.js": (
            /*!*************************************************************************!*\
              !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
              \*************************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = {}.propertyIsEnumerable, n = Object.getOwnPropertyDescriptor, o = n && !t.call({ 1: 2 }, 1);
              c.f = o ? function(i) {
                var s = n(this, i);
                return !!s && s.enumerable;
              } : t;
            }
          ),
          /***/
          "./node_modules/core-js/internals/object-set-prototype-of.js": (
            /*!*******************************************************************!*\
              !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
              \*******************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/validate-set-prototype-of-arguments */
                "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js"
              );
              r.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var n = !1, o = {}, l;
                try {
                  l = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, l.call(o, []), n = o instanceof Array;
                } catch {
                }
                return function(s, a) {
                  return t(s, a), n ? l.call(s, a) : s.__proto__ = a, s;
                };
              }() : void 0);
            }
          ),
          /***/
          "./node_modules/core-js/internals/own-keys.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/internals/own-keys.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), n = e(
                /*! ../internals/object-get-own-property-names */
                "./node_modules/core-js/internals/object-get-own-property-names.js"
              ), o = e(
                /*! ../internals/object-get-own-property-symbols */
                "./node_modules/core-js/internals/object-get-own-property-symbols.js"
              ), l = e(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              ), i = t.Reflect;
              r.exports = i && i.ownKeys || function(a) {
                var d = n.f(l(a)), h = o.f;
                return h ? d.concat(h(a)) : d;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/path.js": (
            /*!************************************************!*\
              !*** ./node_modules/core-js/internals/path.js ***!
              \************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              r.exports = e(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              );
            }
          ),
          /***/
          "./node_modules/core-js/internals/redefine.js": (
            /*!****************************************************!*\
              !*** ./node_modules/core-js/internals/redefine.js ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), n = e(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              ), o = e(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              ), l = e(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), i = e(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              ), s = e(
                /*! ../internals/function-to-string */
                "./node_modules/core-js/internals/function-to-string.js"
              ), a = e(
                /*! ../internals/internal-state */
                "./node_modules/core-js/internals/internal-state.js"
              ), d = a.get, h = a.enforce, y = String(s).split("toString");
              n("inspectSource", function(p) {
                return s.call(p);
              }), (r.exports = function(p, f, x, u) {
                var m = u ? !!u.unsafe : !1, v = u ? !!u.enumerable : !1, M = u ? !!u.noTargetGet : !1;
                if (typeof x == "function" && (typeof f == "string" && !l(x, "name") && o(x, "name", f), h(x).source = y.join(typeof f == "string" ? f : "")), p === t) {
                  v ? p[f] = x : i(f, x);
                  return;
                } else m ? !M && p[f] && (v = !0) : delete p[f];
                v ? p[f] = x : o(p, f, x);
              })(Function.prototype, "toString", function() {
                return typeof this == "function" && d(this).source || s.call(this);
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/require-object-coercible.js": (
            /*!********************************************************************!*\
              !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              r.exports = function(e) {
                if (e == null) throw TypeError("Can't call method on " + e);
                return e;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/set-global.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/set-global.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), n = e(
                /*! ../internals/hide */
                "./node_modules/core-js/internals/hide.js"
              );
              r.exports = function(o, l) {
                try {
                  n(t, o, l);
                } catch {
                  t[o] = l;
                }
                return l;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/set-to-string-tag.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/object-define-property */
                "./node_modules/core-js/internals/object-define-property.js"
              ).f, n = e(
                /*! ../internals/has */
                "./node_modules/core-js/internals/has.js"
              ), o = e(
                /*! ../internals/well-known-symbol */
                "./node_modules/core-js/internals/well-known-symbol.js"
              ), l = o("toStringTag");
              r.exports = function(i, s, a) {
                i && !n(i = a ? i : i.prototype, l) && t(i, l, { configurable: !0, value: s });
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/shared-key.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/shared-key.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              ), n = e(
                /*! ../internals/uid */
                "./node_modules/core-js/internals/uid.js"
              ), o = t("keys");
              r.exports = function(l) {
                return o[l] || (o[l] = n(l));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/shared.js": (
            /*!**************************************************!*\
              !*** ./node_modules/core-js/internals/shared.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), n = e(
                /*! ../internals/set-global */
                "./node_modules/core-js/internals/set-global.js"
              ), o = e(
                /*! ../internals/is-pure */
                "./node_modules/core-js/internals/is-pure.js"
              ), l = "__core-js_shared__", i = t[l] || n(l, {});
              (r.exports = function(s, a) {
                return i[s] || (i[s] = a !== void 0 ? a : {});
              })("versions", []).push({
                version: "3.1.3",
                mode: o ? "pure" : "global",
                copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
              });
            }
          ),
          /***/
          "./node_modules/core-js/internals/string-at.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/string-at.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              ), n = e(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              );
              r.exports = function(o, l, i) {
                var s = String(n(o)), a = t(l), d = s.length, h, y;
                return a < 0 || a >= d ? i ? "" : void 0 : (h = s.charCodeAt(a), h < 55296 || h > 56319 || a + 1 === d || (y = s.charCodeAt(a + 1)) < 56320 || y > 57343 ? i ? s.charAt(a) : h : i ? s.slice(a, a + 2) : (h - 55296 << 10) + (y - 56320) + 65536);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-absolute-index.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              ), n = Math.max, o = Math.min;
              r.exports = function(l, i) {
                var s = t(l);
                return s < 0 ? n(s + i, 0) : o(s, i);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-indexed-object.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/indexed-object */
                "./node_modules/core-js/internals/indexed-object.js"
              ), n = e(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              );
              r.exports = function(o) {
                return t(n(o));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-integer.js": (
            /*!******************************************************!*\
              !*** ./node_modules/core-js/internals/to-integer.js ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              var e = Math.ceil, t = Math.floor;
              r.exports = function(n) {
                return isNaN(n = +n) ? 0 : (n > 0 ? t : e)(n);
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-length.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/to-length.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/to-integer */
                "./node_modules/core-js/internals/to-integer.js"
              ), n = Math.min;
              r.exports = function(o) {
                return o > 0 ? n(t(o), 9007199254740991) : 0;
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-object.js": (
            /*!*****************************************************!*\
              !*** ./node_modules/core-js/internals/to-object.js ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/require-object-coercible */
                "./node_modules/core-js/internals/require-object-coercible.js"
              );
              r.exports = function(n) {
                return Object(t(n));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/to-primitive.js": (
            /*!********************************************************!*\
              !*** ./node_modules/core-js/internals/to-primitive.js ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              );
              r.exports = function(n, o) {
                if (!t(n)) return n;
                var l, i;
                if (o && typeof (l = n.toString) == "function" && !t(i = l.call(n)) || typeof (l = n.valueOf) == "function" && !t(i = l.call(n)) || !o && typeof (l = n.toString) == "function" && !t(i = l.call(n))) return i;
                throw TypeError("Can't convert object to primitive value");
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/uid.js": (
            /*!***********************************************!*\
              !*** ./node_modules/core-js/internals/uid.js ***!
              \***********************************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              var e = 0, t = Math.random();
              r.exports = function(n) {
                return "Symbol(".concat(n === void 0 ? "" : n, ")_", (++e + t).toString(36));
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/validate-set-prototype-of-arguments.js": (
            /*!*******************************************************************************!*\
              !*** ./node_modules/core-js/internals/validate-set-prototype-of-arguments.js ***!
              \*******************************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/is-object */
                "./node_modules/core-js/internals/is-object.js"
              ), n = e(
                /*! ../internals/an-object */
                "./node_modules/core-js/internals/an-object.js"
              );
              r.exports = function(o, l) {
                if (n(o), !t(l) && l !== null)
                  throw TypeError("Can't set " + String(l) + " as a prototype");
              };
            }
          ),
          /***/
          "./node_modules/core-js/internals/well-known-symbol.js": (
            /*!*************************************************************!*\
              !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
              \*************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/global */
                "./node_modules/core-js/internals/global.js"
              ), n = e(
                /*! ../internals/shared */
                "./node_modules/core-js/internals/shared.js"
              ), o = e(
                /*! ../internals/uid */
                "./node_modules/core-js/internals/uid.js"
              ), l = e(
                /*! ../internals/native-symbol */
                "./node_modules/core-js/internals/native-symbol.js"
              ), i = t.Symbol, s = n("wks");
              r.exports = function(a) {
                return s[a] || (s[a] = l && i[a] || (l ? i : o)("Symbol." + a));
              };
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.array.from.js": (
            /*!*******************************************************!*\
              !*** ./node_modules/core-js/modules/es.array.from.js ***!
              \*******************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/export */
                "./node_modules/core-js/internals/export.js"
              ), n = e(
                /*! ../internals/array-from */
                "./node_modules/core-js/internals/array-from.js"
              ), o = e(
                /*! ../internals/check-correctness-of-iteration */
                "./node_modules/core-js/internals/check-correctness-of-iteration.js"
              ), l = !o(function(i) {
                Array.from(i);
              });
              t({ target: "Array", stat: !0, forced: l }, {
                from: n
              });
            }
          ),
          /***/
          "./node_modules/core-js/modules/es.string.iterator.js": (
            /*!************************************************************!*\
              !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
              \************************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ../internals/string-at */
                "./node_modules/core-js/internals/string-at.js"
              ), n = e(
                /*! ../internals/internal-state */
                "./node_modules/core-js/internals/internal-state.js"
              ), o = e(
                /*! ../internals/define-iterator */
                "./node_modules/core-js/internals/define-iterator.js"
              ), l = "String Iterator", i = n.set, s = n.getterFor(l);
              o(String, "String", function(a) {
                i(this, {
                  type: l,
                  string: String(a),
                  index: 0
                });
              }, function() {
                var d = s(this), h = d.string, y = d.index, p;
                return y >= h.length ? { value: void 0, done: !0 } : (p = t(h, y, !0), d.index += p.length, { value: p, done: !1 });
              });
            }
          ),
          /***/
          "./node_modules/webpack/buildin/global.js": (
            /*!***********************************!*\
              !*** (webpack)/buildin/global.js ***!
              \***********************************/
            /*! no static exports found */
            /***/
            function(r, c) {
              var e;
              e = /* @__PURE__ */ function() {
                return this;
              }();
              try {
                e = e || Function("return this")() || (0, eval)("this");
              } catch {
                typeof window == "object" && (e = window);
              }
              r.exports = e;
            }
          ),
          /***/
          "./src/default-attrs.json": (
            /*!********************************!*\
              !*** ./src/default-attrs.json ***!
              \********************************/
            /*! exports provided: xmlns, width, height, viewBox, fill, stroke, stroke-width, stroke-linecap, stroke-linejoin, default */
            /***/
            function(r) {
              r.exports = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };
            }
          ),
          /***/
          "./src/icon.js": (
            /*!*********************!*\
              !*** ./src/icon.js ***!
              \*********************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              Object.defineProperty(c, "__esModule", {
                value: !0
              });
              var t = Object.assign || function(p) {
                for (var f = 1; f < arguments.length; f++) {
                  var x = arguments[f];
                  for (var u in x)
                    Object.prototype.hasOwnProperty.call(x, u) && (p[u] = x[u]);
                }
                return p;
              }, n = /* @__PURE__ */ function() {
                function p(f, x) {
                  for (var u = 0; u < x.length; u++) {
                    var m = x[u];
                    m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(f, m.key, m);
                  }
                }
                return function(f, x, u) {
                  return x && p(f.prototype, x), u && p(f, u), f;
                };
              }(), o = e(
                /*! classnames/dedupe */
                "./node_modules/classnames/dedupe.js"
              ), l = a(o), i = e(
                /*! ./default-attrs.json */
                "./src/default-attrs.json"
              ), s = a(i);
              function a(p) {
                return p && p.__esModule ? p : { default: p };
              }
              function d(p, f) {
                if (!(p instanceof f))
                  throw new TypeError("Cannot call a class as a function");
              }
              var h = function() {
                function p(f, x) {
                  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                  d(this, p), this.name = f, this.contents = x, this.tags = u, this.attrs = t({}, s.default, { class: "feather feather-" + f });
                }
                return n(p, [{
                  key: "toSvg",
                  value: function() {
                    var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = t({}, this.attrs, x, { class: (0, l.default)(this.attrs.class, x.class) });
                    return "<svg " + y(u) + ">" + this.contents + "</svg>";
                  }
                  /**
                   * Return string representation of an `Icon`.
                   *
                   * Added for backward compatibility. If old code expects `feather.icons.<name>`
                   * to be a string, `toString()` will get implicitly called.
                   *
                   * @returns {string}
                   */
                }, {
                  key: "toString",
                  value: function() {
                    return this.contents;
                  }
                }]), p;
              }();
              function y(p) {
                return Object.keys(p).map(function(f) {
                  return f + '="' + p[f] + '"';
                }).join(" ");
              }
              c.default = h;
            }
          ),
          /***/
          "./src/icons.js": (
            /*!**********************!*\
              !*** ./src/icons.js ***!
              \**********************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              Object.defineProperty(c, "__esModule", {
                value: !0
              });
              var t = e(
                /*! ./icon */
                "./src/icon.js"
              ), n = a(t), o = e(
                /*! ../dist/icons.json */
                "./dist/icons.json"
              ), l = a(o), i = e(
                /*! ./tags.json */
                "./src/tags.json"
              ), s = a(i);
              function a(d) {
                return d && d.__esModule ? d : { default: d };
              }
              c.default = Object.keys(l.default).map(function(d) {
                return new n.default(d, l.default[d], s.default[d]);
              }).reduce(function(d, h) {
                return d[h.name] = h, d;
              }, {});
            }
          ),
          /***/
          "./src/index.js": (
            /*!**********************!*\
              !*** ./src/index.js ***!
              \**********************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              var t = e(
                /*! ./icons */
                "./src/icons.js"
              ), n = a(t), o = e(
                /*! ./to-svg */
                "./src/to-svg.js"
              ), l = a(o), i = e(
                /*! ./replace */
                "./src/replace.js"
              ), s = a(i);
              function a(d) {
                return d && d.__esModule ? d : { default: d };
              }
              r.exports = { icons: n.default, toSvg: l.default, replace: s.default };
            }
          ),
          /***/
          "./src/replace.js": (
            /*!************************!*\
              !*** ./src/replace.js ***!
              \************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              Object.defineProperty(c, "__esModule", {
                value: !0
              });
              var t = Object.assign || function(y) {
                for (var p = 1; p < arguments.length; p++) {
                  var f = arguments[p];
                  for (var x in f)
                    Object.prototype.hasOwnProperty.call(f, x) && (y[x] = f[x]);
                }
                return y;
              }, n = e(
                /*! classnames/dedupe */
                "./node_modules/classnames/dedupe.js"
              ), o = s(n), l = e(
                /*! ./icons */
                "./src/icons.js"
              ), i = s(l);
              function s(y) {
                return y && y.__esModule ? y : { default: y };
              }
              function a() {
                var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                if (typeof document > "u")
                  throw new Error("`feather.replace()` only works in a browser environment.");
                var p = document.querySelectorAll("[data-feather]");
                Array.from(p).forEach(function(f) {
                  return d(f, y);
                });
              }
              function d(y) {
                var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = h(y), x = f["data-feather"];
                if (delete f["data-feather"], i.default[x] === void 0) {
                  console.warn("feather: '" + x + "' is not a valid icon");
                  return;
                }
                var u = i.default[x].toSvg(t({}, p, f, { class: (0, o.default)(p.class, f.class) })), m = new DOMParser().parseFromString(u, "image/svg+xml"), v = m.querySelector("svg");
                y.parentNode.replaceChild(v, y);
              }
              function h(y) {
                return Array.from(y.attributes).reduce(function(p, f) {
                  return p[f.name] = f.value, p;
                }, {});
              }
              c.default = a;
            }
          ),
          /***/
          "./src/tags.json": (
            /*!***********************!*\
              !*** ./src/tags.json ***!
              \***********************/
            /*! exports provided: activity, airplay, alert-circle, alert-octagon, alert-triangle, align-center, align-justify, align-left, align-right, anchor, archive, at-sign, award, aperture, bar-chart, bar-chart-2, battery, battery-charging, bell, bell-off, bluetooth, book-open, book, bookmark, box, briefcase, calendar, camera, cast, chevron-down, chevron-up, circle, clipboard, clock, cloud-drizzle, cloud-lightning, cloud-rain, cloud-snow, cloud, codepen, codesandbox, code, coffee, columns, command, compass, copy, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, cpu, credit-card, crop, crosshair, database, delete, disc, dollar-sign, droplet, edit, edit-2, edit-3, eye, eye-off, external-link, facebook, fast-forward, figma, file-minus, file-plus, file-text, film, filter, flag, folder-minus, folder-plus, folder, framer, frown, gift, git-branch, git-commit, git-merge, git-pull-request, github, gitlab, globe, hard-drive, hash, headphones, heart, help-circle, hexagon, home, image, inbox, instagram, key, layers, layout, life-buoy, link, link-2, linkedin, list, lock, log-in, log-out, mail, map-pin, map, maximize, maximize-2, meh, menu, message-circle, message-square, mic-off, mic, minimize, minimize-2, minus, monitor, moon, more-horizontal, more-vertical, mouse-pointer, move, music, navigation, navigation-2, octagon, package, paperclip, pause, pause-circle, pen-tool, percent, phone-call, phone-forwarded, phone-incoming, phone-missed, phone-off, phone-outgoing, phone, play, pie-chart, play-circle, plus, plus-circle, plus-square, pocket, power, printer, radio, refresh-cw, refresh-ccw, repeat, rewind, rotate-ccw, rotate-cw, rss, save, scissors, search, send, settings, share-2, shield, shield-off, shopping-bag, shopping-cart, shuffle, skip-back, skip-forward, slack, slash, sliders, smartphone, smile, speaker, star, stop-circle, sun, sunrise, sunset, tablet, tag, target, terminal, thermometer, thumbs-down, thumbs-up, toggle-left, toggle-right, tool, trash, trash-2, triangle, truck, tv, twitch, twitter, type, umbrella, unlock, user-check, user-minus, user-plus, user-x, user, users, video-off, video, voicemail, volume, volume-1, volume-2, volume-x, watch, wifi-off, wifi, wind, x-circle, x-octagon, x-square, x, youtube, zap-off, zap, zoom-in, zoom-out, default */
            /***/
            function(r) {
              r.exports = { activity: ["pulse", "health", "action", "motion"], airplay: ["stream", "cast", "mirroring"], "alert-circle": ["warning", "alert", "danger"], "alert-octagon": ["warning", "alert", "danger"], "alert-triangle": ["warning", "alert", "danger"], "align-center": ["text alignment", "center"], "align-justify": ["text alignment", "justified"], "align-left": ["text alignment", "left"], "align-right": ["text alignment", "right"], anchor: [], archive: ["index", "box"], "at-sign": ["mention", "at", "email", "message"], award: ["achievement", "badge"], aperture: ["camera", "photo"], "bar-chart": ["statistics", "diagram", "graph"], "bar-chart-2": ["statistics", "diagram", "graph"], battery: ["power", "electricity"], "battery-charging": ["power", "electricity"], bell: ["alarm", "notification", "sound"], "bell-off": ["alarm", "notification", "silent"], bluetooth: ["wireless"], "book-open": ["read", "library"], book: ["read", "dictionary", "booklet", "magazine", "library"], bookmark: ["read", "clip", "marker", "tag"], box: ["cube"], briefcase: ["work", "bag", "baggage", "folder"], calendar: ["date"], camera: ["photo"], cast: ["chromecast", "airplay"], "chevron-down": ["expand"], "chevron-up": ["collapse"], circle: ["off", "zero", "record"], clipboard: ["copy"], clock: ["time", "watch", "alarm"], "cloud-drizzle": ["weather", "shower"], "cloud-lightning": ["weather", "bolt"], "cloud-rain": ["weather"], "cloud-snow": ["weather", "blizzard"], cloud: ["weather"], codepen: ["logo"], codesandbox: ["logo"], code: ["source", "programming"], coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"], columns: ["layout"], command: ["keyboard", "cmd", "terminal", "prompt"], compass: ["navigation", "safari", "travel", "direction"], copy: ["clone", "duplicate"], "corner-down-left": ["arrow", "return"], "corner-down-right": ["arrow"], "corner-left-down": ["arrow"], "corner-left-up": ["arrow"], "corner-right-down": ["arrow"], "corner-right-up": ["arrow"], "corner-up-left": ["arrow"], "corner-up-right": ["arrow"], cpu: ["processor", "technology"], "credit-card": ["purchase", "payment", "cc"], crop: ["photo", "image"], crosshair: ["aim", "target"], database: ["storage", "memory"], delete: ["remove"], disc: ["album", "cd", "dvd", "music"], "dollar-sign": ["currency", "money", "payment"], droplet: ["water"], edit: ["pencil", "change"], "edit-2": ["pencil", "change"], "edit-3": ["pencil", "change"], eye: ["view", "watch"], "eye-off": ["view", "watch", "hide", "hidden"], "external-link": ["outbound"], facebook: ["logo", "social"], "fast-forward": ["music"], figma: ["logo", "design", "tool"], "file-minus": ["delete", "remove", "erase"], "file-plus": ["add", "create", "new"], "file-text": ["data", "txt", "pdf"], film: ["movie", "video"], filter: ["funnel", "hopper"], flag: ["report"], "folder-minus": ["directory"], "folder-plus": ["directory"], folder: ["directory"], framer: ["logo", "design", "tool"], frown: ["emoji", "face", "bad", "sad", "emotion"], gift: ["present", "box", "birthday", "party"], "git-branch": ["code", "version control"], "git-commit": ["code", "version control"], "git-merge": ["code", "version control"], "git-pull-request": ["code", "version control"], github: ["logo", "version control"], gitlab: ["logo", "version control"], globe: ["world", "browser", "language", "translate"], "hard-drive": ["computer", "server", "memory", "data"], hash: ["hashtag", "number", "pound"], headphones: ["music", "audio", "sound"], heart: ["like", "love", "emotion"], "help-circle": ["question mark"], hexagon: ["shape", "node.js", "logo"], home: ["house", "living"], image: ["picture"], inbox: ["email"], instagram: ["logo", "camera"], key: ["password", "login", "authentication", "secure"], layers: ["stack"], layout: ["window", "webpage"], "life-buoy": ["help", "life ring", "support"], link: ["chain", "url"], "link-2": ["chain", "url"], linkedin: ["logo", "social media"], list: ["options"], lock: ["security", "password", "secure"], "log-in": ["sign in", "arrow", "enter"], "log-out": ["sign out", "arrow", "exit"], mail: ["email", "message"], "map-pin": ["location", "navigation", "travel", "marker"], map: ["location", "navigation", "travel"], maximize: ["fullscreen"], "maximize-2": ["fullscreen", "arrows", "expand"], meh: ["emoji", "face", "neutral", "emotion"], menu: ["bars", "navigation", "hamburger"], "message-circle": ["comment", "chat"], "message-square": ["comment", "chat"], "mic-off": ["record", "sound", "mute"], mic: ["record", "sound", "listen"], minimize: ["exit fullscreen", "close"], "minimize-2": ["exit fullscreen", "arrows", "close"], minus: ["subtract"], monitor: ["tv", "screen", "display"], moon: ["dark", "night"], "more-horizontal": ["ellipsis"], "more-vertical": ["ellipsis"], "mouse-pointer": ["arrow", "cursor"], move: ["arrows"], music: ["note"], navigation: ["location", "travel"], "navigation-2": ["location", "travel"], octagon: ["stop"], package: ["box", "container"], paperclip: ["attachment"], pause: ["music", "stop"], "pause-circle": ["music", "audio", "stop"], "pen-tool": ["vector", "drawing"], percent: ["discount"], "phone-call": ["ring"], "phone-forwarded": ["call"], "phone-incoming": ["call"], "phone-missed": ["call"], "phone-off": ["call", "mute"], "phone-outgoing": ["call"], phone: ["call"], play: ["music", "start"], "pie-chart": ["statistics", "diagram"], "play-circle": ["music", "start"], plus: ["add", "new"], "plus-circle": ["add", "new"], "plus-square": ["add", "new"], pocket: ["logo", "save"], power: ["on", "off"], printer: ["fax", "office", "device"], radio: ["signal"], "refresh-cw": ["synchronise", "arrows"], "refresh-ccw": ["arrows"], repeat: ["loop", "arrows"], rewind: ["music"], "rotate-ccw": ["arrow"], "rotate-cw": ["arrow"], rss: ["feed", "subscribe"], save: ["floppy disk"], scissors: ["cut"], search: ["find", "magnifier", "magnifying glass"], send: ["message", "mail", "email", "paper airplane", "paper aeroplane"], settings: ["cog", "edit", "gear", "preferences"], "share-2": ["network", "connections"], shield: ["security", "secure"], "shield-off": ["security", "insecure"], "shopping-bag": ["ecommerce", "cart", "purchase", "store"], "shopping-cart": ["ecommerce", "cart", "purchase", "store"], shuffle: ["music"], "skip-back": ["music"], "skip-forward": ["music"], slack: ["logo"], slash: ["ban", "no"], sliders: ["settings", "controls"], smartphone: ["cellphone", "device"], smile: ["emoji", "face", "happy", "good", "emotion"], speaker: ["audio", "music"], star: ["bookmark", "favorite", "like"], "stop-circle": ["media", "music"], sun: ["brightness", "weather", "light"], sunrise: ["weather", "time", "morning", "day"], sunset: ["weather", "time", "evening", "night"], tablet: ["device"], tag: ["label"], target: ["logo", "bullseye"], terminal: ["code", "command line", "prompt"], thermometer: ["temperature", "celsius", "fahrenheit", "weather"], "thumbs-down": ["dislike", "bad", "emotion"], "thumbs-up": ["like", "good", "emotion"], "toggle-left": ["on", "off", "switch"], "toggle-right": ["on", "off", "switch"], tool: ["settings", "spanner"], trash: ["garbage", "delete", "remove", "bin"], "trash-2": ["garbage", "delete", "remove", "bin"], triangle: ["delta"], truck: ["delivery", "van", "shipping", "transport", "lorry"], tv: ["television", "stream"], twitch: ["logo"], twitter: ["logo", "social"], type: ["text"], umbrella: ["rain", "weather"], unlock: ["security"], "user-check": ["followed", "subscribed"], "user-minus": ["delete", "remove", "unfollow", "unsubscribe"], "user-plus": ["new", "add", "create", "follow", "subscribe"], "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"], user: ["person", "account"], users: ["group"], "video-off": ["camera", "movie", "film"], video: ["camera", "movie", "film"], voicemail: ["phone"], volume: ["music", "sound", "mute"], "volume-1": ["music", "sound"], "volume-2": ["music", "sound"], "volume-x": ["music", "sound", "mute"], watch: ["clock", "time"], "wifi-off": ["disabled"], wifi: ["connection", "signal", "wireless"], wind: ["weather", "air"], "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"], "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"], "x-square": ["cancel", "close", "delete", "remove", "times", "clear"], x: ["cancel", "close", "delete", "remove", "times", "clear"], youtube: ["logo", "video", "play"], "zap-off": ["flash", "camera", "lightning"], zap: ["flash", "camera", "lightning"], "zoom-in": ["magnifying glass"], "zoom-out": ["magnifying glass"] };
            }
          ),
          /***/
          "./src/to-svg.js": (
            /*!***********************!*\
              !*** ./src/to-svg.js ***!
              \***********************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              Object.defineProperty(c, "__esModule", {
                value: !0
              });
              var t = e(
                /*! ./icons */
                "./src/icons.js"
              ), n = o(t);
              function o(i) {
                return i && i.__esModule ? i : { default: i };
              }
              function l(i) {
                var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !i)
                  throw new Error("The required `key` (icon name) parameter is missing.");
                if (!n.default[i])
                  throw new Error("No icon matching '" + i + "'. See the complete list of icons at https://feathericons.com");
                return n.default[i].toSvg(s);
              }
              c.default = l;
            }
          ),
          /***/
          0: (
            /*!**************************************************!*\
              !*** multi core-js/es/array/from ./src/index.js ***!
              \**************************************************/
            /*! no static exports found */
            /***/
            function(r, c, e) {
              e(
                /*! core-js/es/array/from */
                "./node_modules/core-js/es/array/from.js"
              ), r.exports = e(
                /*! /home/runner/work/feather/feather/src/index.js */
                "./src/index.js"
              );
            }
          )
          /******/
        })
      );
    });
  }(L)), L.exports;
}
var re = te();
const oe = /* @__PURE__ */ ee(re), le = ["innerHTML"], ie = /* @__PURE__ */ F({
  __name: "SbIcon",
  props: {
    icon: { default: "x" },
    size: { default: 24 },
    strokeWidth: { default: 2 },
    color: { default: "#000" }
  },
  setup(w) {
    return (A, r) => (G(), D("div", {
      innerHTML: Z(oe).icons[A.icon].toSvg({ "stroke-width": A.strokeWidth, width: A.size, height: A.size, color: A.color })
    }, null, 8, le));
  }
}), ae = { class: "sb-playing-card" }, se = /* @__PURE__ */ F({
  __name: "SbPlayingCard",
  props: {
    icon: {}
  },
  setup(w) {
    return (A, r) => (G(), D("div", ae, [
      q(ie, {
        icon: "box",
        color: "#333",
        "stroke-width": 1,
        size: 64
      })
    ]));
  }
}), ye = /* @__PURE__ */ k(se, [["__scopeId", "data-v-3a527d60"]]);
function de(w) {
  if (w.startsWith("Sb"))
    return { name: w, from: "spellbook" };
}
export {
  pe as SbButton,
  ie as SbIcon,
  ye as SbPlayingCard,
  de as SpellbookResolver
};
