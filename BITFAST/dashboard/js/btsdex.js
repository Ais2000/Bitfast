! function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).BitShares = e()
    }
}(function () {
    return function s(o, a, u) {
        function f(t, e) {
            if (!a[t]) {
                if (!o[t]) {
                    var r = "function" == typeof require && require;
                    if (!e && r) return r(t, !0);
                    if (c) return c(t, !0);
                    var n = new Error("Cannot find module '" + t + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                var i = a[t] = {
                    exports: {}
                };
                o[t][0].call(i.exports, function (e) {
                    return f(o[t][1][e] || e)
                }, i, i.exports, s, o, a, u)
            }
            return a[t].exports
        }
        for (var c = "function" == typeof require && require, e = 0; e < u.length; e++) f(u[e]);
        return f
    }({
        "/home/nozdrin/workspace/bitshares/btsdex/dist/account.js": [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var s = n(e("@babel/runtime/regenerator")),
                i = n(e("@babel/runtime/helpers/asyncToGenerator")),
                o = n(e("@babel/runtime/helpers/classCallCheck")),
                a = n(e("@babel/runtime/helpers/createClass")),
                u = function () {
                    var e, t, r;

                    function n(e) {
                        (0, o.default)(this, n), Object.assign(this, e)
                    }
                    return (0, a.default)(n, null, [{
                        key: "init",
                        value: function (e) {
                            return this.instance || (this.db = e, this.map = {}, this.instance = new Proxy(this, this)), this.instance
                        }
                    }, {
                        key: "get",
                        value: function (e, t) {
                            return e[t] ? e[t] : /^1\.2\.\d+$/.test(t) || !isNaN(t) ? this.id(t) : this.getAccout(t)
                        }
                    }, {
                        key: "getAccout",
                        value: (t = (0, i.default)(s.default.mark(function e(t) {
                            var r, n;
                            return s.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.toLowerCase(), this.map[r]) return e.abrupt("return", this.map[r]);
                                        e.next = 3;
                                        break;
                                    case 3:
                                        return e.next = 5, this.db.get_account_by_name(r);
                                    case 5:
                                        if ((n = e.sent) && n.name === r) {
                                            e.next = 8;
                                            break
                                        }
                                        throw new Error("Not found account ".concat(r, "! Blockchain return ").concat(n ? n.name : n));
                                    case 8:
                                        return this.map[r] = new this(n), e.abrupt("return", this.map[r]);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function (e) {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "id",
                        value: function (t) {
                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e.toString = function () {
                                return t.toString()
                            }, e
                        }(function () {
                            var t = (0, i.default)(s.default.mark(function e(t) {
                                var r, n, i = this;
                                return s.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (isNaN(t) || (t = "1.2.".concat(t)), r = Object.keys(this.map).find(function (e) {
                                                    return i.map[e].id == t
                                                })) return e.abrupt("return", this.map[r]);
                                            e.next = 4;
                                            break;
                                        case 4:
                                            return e.next = 6, this.db.get_accounts([t]);
                                        case 6:
                                            if (n = e.sent[0]) {
                                                e.next = 9;
                                                break
                                            }
                                            throw new Error("Not found account by id ".concat(t, "!"));
                                        case 9:
                                            return this.map[n.name] = new this(n), e.abrupt("return", this.map[n.name]);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }, {
                        key: "update",
                        value: (e = (0, i.default)(s.default.mark(function e() {
                            var t = this;
                            return s.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.db.get_accounts(Object.keys(this.map).map(function (e) {
                                            return t.map[e].id
                                        }));
                                    case 2:
                                        e.sent.forEach(function (e) {
                                            return Object.assign(t.map[e.name], e)
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function () {
                            return e.apply(this, arguments)
                        })
                    }]), (0, a.default)(n, [{
                        key: "update",
                        value: (r = (0, i.default)(s.default.mark(function e() {
                            return s.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = Object, e.t1 = this, e.next = 4, n.db.get_accounts([id]);
                                    case 4:
                                        e.t2 = e.sent[0], e.t0.assign.call(e.t0, e.t1, e.t2);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function () {
                            return r.apply(this, arguments)
                        })
                    }]), n
                }();
            r.default = u
        }, {
            "@babel/runtime/helpers/asyncToGenerator": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/asyncToGenerator.js",
            "@babel/runtime/helpers/classCallCheck": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/classCallCheck.js",
            "@babel/runtime/helpers/createClass": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/createClass.js",
            "@babel/runtime/helpers/interopRequireDefault": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/interopRequireDefault.js",
            "@babel/runtime/regenerator": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/regenerator/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/dist/api.js": [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var i = n(e("@babel/runtime/helpers/classCallCheck")),
                s = n(e("@babel/runtime/helpers/createClass")),
                o = e("bitsharesjs-ws"),
                a = function () {
                    function t(e) {
                        (0, i.default)(this, t), this.api = e
                    }
                    return (0, s.default)(t, null, [{
                        key: "new",
                        value: function (e) {
                            return new Proxy(o.Apis, new t(e))
                        }
                    }, {
                        key: "getApis",
                        value: function () {
                            return o.Apis
                        }
                    }]), (0, s.default)(t, [{
                        key: "get",
                        value: function (e, t) {
                            var r = this.api;
                            return function () {
                                return e.instance()[r]().exec(t, Array.prototype.slice.call(arguments))
                            }
                        }
                    }]), t
                }();
            r.default = a
        }, {
            "@babel/runtime/helpers/classCallCheck": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/classCallCheck.js",
            "@babel/runtime/helpers/createClass": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/createClass.js",
            "@babel/runtime/helpers/interopRequireDefault": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/interopRequireDefault.js",
            "bitsharesjs-ws": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/dist/asset.js": [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var o = n(e("@babel/runtime/regenerator")),
                a = n(e("@babel/runtime/helpers/asyncToGenerator")),
                u = n(e("@babel/runtime/helpers/classCallCheck")),
                f = n(e("@babel/runtime/helpers/createClass")),
                i = function () {
                    var e, t, r, n, i;

                    function s(e) {
                        (0, u.default)(this, s), Object.assign(this, e)
                    }
                    return (0, f.default)(s, null, [{
                        key: "init",
                        value: function (e) {
                            return this.instance || (this.db = e, this.map = {}, this.instance = new Proxy(this, this)), this.instance
                        }
                    }, {
                        key: "get",
                        value: function (e, t) {
                            return e[t] ? e[t] : /^1\.3\.\d+$/.test(t) || !isNaN(t) ? this.id(t) : this.getAsset(t)
                        }
                    }, {
                        key: "getAsset",
                        value: (n = (0, a.default)(o.default.mark(function e(t) {
                            var r, n;
                            return o.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.toUpperCase(), this.map[r]) return e.abrupt("return", this.map[r]);
                                        e.next = 3;
                                        break;
                                    case 3:
                                        return e.next = 5, this.db.list_assets(r, 1);
                                    case 5:
                                        if ((n = e.sent[0]) && n.symbol === r) {
                                            e.next = 8;
                                            break
                                        }
                                        throw new Error("Not found asset ".concat(r, "! Blockchain return ").concat(n ? n.symbol : n));
                                    case 8:
                                        return this.map[r] = new this(n), e.abrupt("return", this.map[r]);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function (e) {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "id",
                        value: (r = (0, a.default)(o.default.mark(function e(t) {
                            var r, n = this;
                            return o.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (isNaN(t) || (t = "1.3.".concat(t)), r = Object.keys(this.map).find(function (e) {
                                                return n.map[e].id == t
                                            })) return e.abrupt("return", this.map[r]);
                                        e.next = 4;
                                        break;
                                    case 4:
                                        return e.next = 6, this.db.get_assets([t]);
                                    case 6:
                                        if (r = e.sent[0]) {
                                            e.next = 9;
                                            break
                                        }
                                        throw new Error("Not found asset by id ".concat(t, "!"));
                                    case 9:
                                        return this.map[r.symbol] = new this(r), e.abrupt("return", this.map[r.symbol]);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function (e) {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "fromParam",
                        value: (t = (0, a.default)(o.default.mark(function e(t) {
                            return o.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = t.amount, e.next = 3, this.id(t.asset_id);
                                    case 3:
                                        return e.t1 = e.sent, e.abrupt("return", {
                                            amount: e.t0,
                                            asset: e.t1
                                        });
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function (e) {
                            return t.apply(this, arguments)
                        })
                    }, {
                        key: "update",
                        value: (e = (0, a.default)(o.default.mark(function e() {
                            var t = this;
                            return o.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.db.get_assets(Object.keys(this.map).map(function (e) {
                                            return t.map[e].id
                                        }));
                                    case 2:
                                        e.sent.forEach(function (e) {
                                            return Object.assign(t.map[e.symbol], e)
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function () {
                            return e.apply(this, arguments)
                        })
                    }]), (0, f.default)(s, [{
                        key: "toParam",
                        value: function () {
                            return {
                                amount: 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                                asset_id: this.id
                            }
                        }
                    }, {
                        key: "fee",
                        value: function () {
                            return this.options.market_fee_percent / 100 / 100
                        }
                    }, {
                        key: "update",
                        value: (i = (0, a.default)(o.default.mark(function e() {
                            return o.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = Object, e.t1 = this, e.next = 4, s.db.get_assets([this.id]);
                                    case 4:
                                        e.t2 = e.sent[0], e.t0.assign.call(e.t0, e.t1, e.t2);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function () {
                            return i.apply(this, arguments)
                        })
                    }]), s
                }();
            r.default = i
        }, {
            "@babel/runtime/helpers/asyncToGenerator": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/asyncToGenerator.js",
            "@babel/runtime/helpers/classCallCheck": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/classCallCheck.js",
            "@babel/runtime/helpers/createClass": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/createClass.js",
            "@babel/runtime/helpers/interopRequireDefault": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/interopRequireDefault.js",
            "@babel/runtime/regenerator": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/regenerator/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/dist/bitshares.js": [function (n, e, i) {
            (function (v) {
                "use strict";
                var e = n("@babel/runtime/helpers/interopRequireDefault");
                Object.defineProperty(i, "__esModule", {
                    value: !0
                }), i.default = void 0;
                var u = e(n("@babel/runtime/helpers/slicedToArray")),
                    g = e(n("@babel/runtime/regenerator")),
                    f = e(n("@babel/runtime/helpers/asyncToGenerator")),
                    c = e(n("@babel/runtime/helpers/classCallCheck")),
                    h = e(n("@babel/runtime/helpers/createClass")),
                    l = e(n("@babel/runtime/helpers/defineProperty")),
                    d = e(n("./event.js")),
                    p = e(n("./asset.js")),
                    _ = e(n("./account.js")),
                    b = e(n("./api.js")),
                    m = e(n("./fees.js")),
                    w = e(n("./transaction.js")),
                    x = n("lzma/src/lzma-d-min"),
                    k = e(n("bignumber.js")),
                    j = n("bitsharesjs"),
                    t = function () {
                        var r, n, s, i, o, e, t, a;

                        function y(e, t) {
                            var d = this,
                                r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : y.chain.core_asset;
                            (0, c.default)(this, y), (0, l.default)(this, "setFeeAsset", function () {
                                var t = (0, f.default)(g.default.mark(function e(t) {
                                    return g.default.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, d.initPromise;
                                            case 2:
                                                return e.next = 4, y.assets[t];
                                            case 4:
                                                d.feeAsset = e.sent;
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this)
                                }));
                                return function (e) {
                                    return t.apply(this, arguments)
                                }
                            }()), (0, l.default)(this, "setMemoKey", function (e) {
                                d.memoKey = j.PrivateKey.fromWif(e)
                            }), (0, l.default)(this, "broadcast", function (e) {
                                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [d.activeKey];
                                return e.broadcast(t)
                            }), (0, l.default)(this, "sendOperation", function (e) {
                                var t = d.newTx();
                                return t.add(e), t.broadcast()
                            }), (0, l.default)(this, "balances", (0, f.default)(g.default.mark(function e() {
                                var t, r, n, i, s, o = arguments;
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d.initPromise;
                                        case 2:
                                            for (t = o.length, r = new Array(t), n = 0; n < t; n++) r[n] = o[n];
                                            return e.next = 5, Promise.all(r.map(function () {
                                                var t = (0, f.default)(g.default.mark(function e(t) {
                                                    return g.default.wrap(function (e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, y.assets[t];
                                                            case 2:
                                                                return e.abrupt("return", e.sent.id);
                                                            case 3:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }, e, this)
                                                }));
                                                return function (e) {
                                                    return t.apply(this, arguments)
                                                }
                                            }()));
                                        case 5:
                                            return i = e.sent, e.next = 8, y.db.get_account_balances(d.account.id, i);
                                        case 8:
                                            return s = e.sent, e.abrupt("return", Promise.all(s.map(function (e) {
                                                return y.assets.fromParam(e)
                                            })));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))), (0, l.default)(this, "buyOperation", function () {
                                var i = (0, f.default)(g.default.mark(function e(t, r, n, i) {
                                    var s, o, a, u, f, c, h, l = arguments;
                                    return g.default.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return s = 4 < l.length && void 0 !== l[4] && l[4], o = 5 < l.length && void 0 !== l[5] ? l[5] : "2020-02-02T02:02:02", e.next = 4, d.initPromise;
                                            case 4:
                                                return e.next = 6, y.assets[t];
                                            case 6:
                                                return a = e.sent, e.next = 9, y.assets[r];
                                            case 9:
                                                if (u = e.sent, f = Math.floor(n * Math.pow(10, a.precision)), c = Math.floor((0, k.default)(n).times(i * Math.pow(10, u.precision)).toString()), 0 == f || 0 == c) throw new Error("Amount equal 0!");
                                                e.next = 14;
                                                break;
                                            case 14:
                                                return h = {
                                                    fee: d.feeAsset.toParam(),
                                                    seller: d.account.id,
                                                    amount_to_sell: u.toParam(c),
                                                    min_to_receive: a.toParam(f),
                                                    expiration: o,
                                                    fill_or_kill: s,
                                                    extensions: []
                                                }, e.abrupt("return", {
                                                    limit_order_create: h
                                                });
                                            case 16:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this)
                                }));
                                return function (e, t, r, n) {
                                    return i.apply(this, arguments)
                                }
                            }()), (0, l.default)(this, "buy", (0, f.default)(g.default.mark(function e() {
                                var t, r = arguments;
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.t0 = d, e.next = 3, d.buyOperation.apply(d, r);
                                        case 3:
                                            return e.t1 = e.sent, e.next = 6, e.t0.sendOperation.call(e.t0, e.t1);
                                        case 6:
                                            return t = e.sent, e.next = 9, y.db.get_objects([t[0].trx.operation_results[0][1]]);
                                        case 9:
                                            return e.abrupt("return", e.sent[0]);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))), (0, l.default)(this, "sellOperation", function () {
                                var i = (0, f.default)(g.default.mark(function e(t, r, n, i) {
                                    var s, o, a, u, f, c, h, l = arguments;
                                    return g.default.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return s = 4 < l.length && void 0 !== l[4] && l[4], o = 5 < l.length && void 0 !== l[5] ? l[5] : "2020-02-02T02:02:02", e.next = 4, d.initPromise;
                                            case 4:
                                                return e.next = 6, y.assets[t];
                                            case 6:
                                                return a = e.sent, e.next = 9, y.assets[r];
                                            case 9:
                                                if (u = e.sent, f = Math.floor(n * Math.pow(10, a.precision)), 0 == (c = Math.floor((0, k.default)(n).times(i * Math.pow(10, u.precision)).toString())) || 0 == f) throw new Error("Amount equal 0!");
                                                e.next = 14;
                                                break;
                                            case 14:
                                                return h = {
                                                    fee: d.feeAsset.toParam(),
                                                    seller: d.account.id,
                                                    amount_to_sell: a.toParam(f),
                                                    min_to_receive: u.toParam(c),
                                                    expiration: o,
                                                    fill_or_kill: s,
                                                    extensions: []
                                                }, e.abrupt("return", {
                                                    limit_order_create: h
                                                });
                                            case 16:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this)
                                }));
                                return function (e, t, r, n) {
                                    return i.apply(this, arguments)
                                }
                            }()), (0, l.default)(this, "sell", (0, f.default)(g.default.mark(function e() {
                                var t, r = arguments;
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.t0 = d, e.next = 3, d.sellOperation.apply(d, r);
                                        case 3:
                                            return e.t1 = e.sent, e.next = 6, e.t0.sendOperation.call(e.t0, e.t1);
                                        case 6:
                                            return t = e.sent, e.next = 9, y.db.get_objects([t[0].trx.operation_results[0][1]]);
                                        case 9:
                                            return e.abrupt("return", e.sent[0]);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))), (0, l.default)(this, "orders", (0, f.default)(g.default.mark(function e() {
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, d.initPromise;
                                        case 2:
                                            return e.next = 4, y.db.get_full_accounts([d.account.id], !1);
                                        case 4:
                                            return e.abrupt("return", e.sent[0][1].limit_orders);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))), (0, l.default)(this, "getOrder", function () {
                                var t = (0, f.default)(g.default.mark(function e(t) {
                                    return g.default.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, d.initPromise;
                                            case 2:
                                                return e.next = 4, y.db.get_objects([t]);
                                            case 4:
                                                return e.abrupt("return", e.sent[0]);
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this)
                                }));
                                return function (e) {
                                    return t.apply(this, arguments)
                                }
                            }()), (0, l.default)(this, "cancelOrderOperation", function () {
                                var t = (0, f.default)(g.default.mark(function e(t) {
                                    var r;
                                    return g.default.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, d.initPromise;
                                            case 2:
                                                return r = {
                                                    fee: d.feeAsset.toParam(),
                                                    fee_paying_account: d.account.id,
                                                    order: t,
                                                    extensions: []
                                                }, e.abrupt("return", {
                                                    limit_order_cancel: r
                                                });
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this)
                                }));
                                return function (e) {
                                    return t.apply(this, arguments)
                                }
                            }()), (0, l.default)(this, "cancelOrder", (0, f.default)(g.default.mark(function e() {
                                var t = arguments;
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.t0 = d, e.next = 3, d.cancelOrderOperation.apply(d, t);
                                        case 3:
                                            return e.t1 = e.sent, e.abrupt("return", e.t0.sendOperation.call(e.t0, e.t1));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))), (0, l.default)(this, "memo", function () {
                                var r = (0, f.default)(g.default.mark(function e(t, r) {
                                    var n, i;
                                    return g.default.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (d.memoKey) {
                                                    e.next = 2;
                                                    break
                                                }
                                                throw new Error("Not set memoKey!");
                                            case 2:
                                                return n = Date.now().toString(), e.next = 5, y.accounts[t];
                                            case 5:
                                                return i = e.sent.options.memo_key, e.abrupt("return", {
                                                    from: d.memoKey.toPublicKey().toPublicKeyString(),
                                                    to: i,
                                                    nonce: n,
                                                    message: j.Aes.encrypt_with_checksum(d.memoKey, i, n, new v(r, "utf-8"))
                                                });
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this)
                                }));
                                return function (e, t) {
                                    return r.apply(this, arguments)
                                }
                            }()), (0, l.default)(this, "memoDecode", function (e) {
                                if (!d.memoKey) throw new Error("Not set memoKey!");
                                return j.Aes.decrypt_with_checksum(d.memoKey, e.from, e.nonce, e.message).toString("utf-8")
                            }), (0, l.default)(this, "transferOperation", function () {
                                var i = (0, f.default)(g.default.mark(function e(t, r, n, i) {
                                    var s, o, a;
                                    return g.default.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, d.initPromise;
                                            case 2:
                                                return e.next = 4, y.assets[r];
                                            case 4:
                                                if (s = e.sent, 0 == (o = Math.floor(n * Math.pow(10, s.precision)))) throw new Error("Amount equal 0!");
                                                e.next = 8;
                                                break;
                                            case 8:
                                                return e.t0 = d.feeAsset.toParam(), e.t1 = d.account.id, e.next = 12, y.accounts[t];
                                            case 12:
                                                if (e.t2 = e.sent.id, e.t3 = s.toParam(o), e.t4 = [], a = {
                                                        fee: e.t0,
                                                        from: e.t1,
                                                        to: e.t2,
                                                        amount: e.t3,
                                                        extensions: e.t4
                                                    }, !i) {
                                                    e.next = 25;
                                                    break
                                                }
                                                if ("string" == typeof i) return e.next = 20, d.memo(t, i);
                                                e.next = 23;
                                                break;
                                            case 20:
                                                e.t5 = e.sent, e.next = 24;
                                                break;
                                            case 23:
                                                e.t5 = i;
                                            case 24:
                                                a.memo = e.t5;
                                            case 25:
                                                return e.abrupt("return", {
                                                    transfer: a
                                                });
                                            case 26:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this)
                                }));
                                return function (e, t, r, n) {
                                    return i.apply(this, arguments)
                                }
                            }()), (0, l.default)(this, "transfer", (0, f.default)(g.default.mark(function e() {
                                var t = arguments;
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.t0 = d, e.next = 3, d.transferOperation.apply(d, t);
                                        case 3:
                                            return e.t1 = e.sent, e.abrupt("return", e.t0.sendOperation.call(e.t0, e.t1));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))), (0, l.default)(this, "assetIssueOperation", function () {
                                var i = (0, f.default)(g.default.mark(function e(t, r, n, i) {
                                    var s, o, a;
                                    return g.default.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, d.initPromise;
                                            case 2:
                                                return e.next = 4, y.assets[r];
                                            case 4:
                                                if (s = e.sent, 0 === (o = Math.floor(n * Math.pow(10, s.precision)))) throw new Error("Amount equal 0!");
                                                e.next = 8;
                                                break;
                                            case 8:
                                                return e.t0 = d.feeAsset.toParam(), e.t1 = d.account.id, e.t2 = s.toParam(o), e.next = 13, y.accounts[t];
                                            case 13:
                                                if (e.t3 = e.sent.id, a = {
                                                        fee: e.t0,
                                                        issuer: e.t1,
                                                        asset_to_issue: e.t2,
                                                        issue_to_account: e.t3
                                                    }, !i) {
                                                    e.next = 24;
                                                    break
                                                }
                                                if ("string" == typeof i) return e.next = 19, d.memo(t, i);
                                                e.next = 22;
                                                break;
                                            case 19:
                                                e.t4 = e.sent, e.next = 23;
                                                break;
                                            case 22:
                                                e.t4 = i;
                                            case 23:
                                                a.memo = e.t4;
                                            case 24:
                                                return e.abrupt("return", {
                                                    asset_issue: a
                                                });
                                            case 25:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this)
                                }));
                                return function (e, t, r, n) {
                                    return i.apply(this, arguments)
                                }
                            }()), (0, l.default)(this, "assetIssue", (0, f.default)(g.default.mark(function e() {
                                var t = arguments;
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.t0 = d, e.next = 3, d.assetIssueOperation.apply(d, t);
                                        case 3:
                                            return e.t1 = e.sent, e.abrupt("return", e.t0.sendOperation.call(e.t0, e.t1));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))), (0, l.default)(this, "assetReserveOperation", function () {
                                var r = (0, f.default)(g.default.mark(function e(t, r) {
                                    var n, i, s, o;
                                    return g.default.wrap(function (e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, d.initPromise;
                                            case 2:
                                                return n = d.account.id, e.next = 5, y.assets[t];
                                            case 5:
                                                if (i = e.sent, 0 === (s = Math.floor(r * Math.pow(10, i.precision)))) throw new Error("Amount equal 0!");
                                                e.next = 9;
                                                break;
                                            case 9:
                                                return o = {
                                                    fee: d.feeAsset.toParam(),
                                                    amount_to_reserve: i.toParam(s),
                                                    payer: n,
                                                    extensions: []
                                                }, e.abrupt("return", {
                                                    asset_reserve: o
                                                });
                                            case 11:
                                            case "end":
                                                return e.stop()
                                        }
                                    }, e, this)
                                }));
                                return function (e, t) {
                                    return r.apply(this, arguments)
                                }
                            }()), (0, l.default)(this, "assetReserve", (0, f.default)(g.default.mark(function e() {
                                var t = arguments;
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.t0 = d, e.next = 3, d.assetReserveOperation.apply(d, t);
                                        case 3:
                                            return e.t1 = e.sent, e.abrupt("return", e.t0.sendOperation.call(e.t0, e.t1));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }))), t && (this.activeKey = j.PrivateKey.fromWif(t)), this.newTx = function () {
                                return w.default.newTx([d.activeKey])
                            }, this.initPromise = Promise.all([y.accounts[e], y.assets[r]]).then(function (e) {
                                var t = (0, u.default)(e, 2);
                                d.account = t[0], d.feeAsset = t[1]
                            })
                        }
                        return (0, h.default)(y, null, [{
                            key: "connect",
                            value: (a = (0, f.default)(g.default.mark(function e(t) {
                                var r, n = arguments;
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (r = 1 < n.length && void 0 !== n[1] ? n[1] : y.autoreconnect, y.connectPromise || y.connectedPromise) return e.abrupt("return", Promise.all([y.connectPromise, y.connectedPromise]));
                                            e.next = 3;
                                            break;
                                        case 3:
                                            return r && b.default.getApis().setRpcConnectionStatusCallback(y.statusCallBack), e.next = 6, y.connectPromise = y.reconnect(t);
                                        case 6:
                                            return e.next = 8, y.connectedPromise = y.connectedInit();
                                        case 8:
                                            return d.default.connectedNotify(), e.abrupt("return", !0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            })), function (e) {
                                return a.apply(this, arguments)
                            })
                        }, {
                            key: "disconnect",
                            value: function () {
                                y.connectPromise = y.connectedPromise = void 0, y.autoreconnect = !1, b.default.getApis().close()
                            }
                        }, {
                            key: "reconnect",
                            value: (t = (0, f.default)(g.default.mark(function e() {
                                var t, r, n = arguments;
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = 0 < n.length && void 0 !== n[0] ? n[0] : y.node, e.next = 3, b.default.getApis().instance(t, !0).init_promise;
                                        case 3:
                                            return r = e.sent, y.chain = r[0].network, y.node = t, e.abrupt("return", r);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            })), function () {
                                return t.apply(this, arguments)
                            })
                        }, {
                            key: "statusCallBack",
                            value: function (e) {
                                y.logger.log("WebSocket status:", e), y.autoreconnect && "closed" === e && (y.logger.log("WebSocket status, try to connect..."), setTimeout(function () {
                                    y.reconnect().then(d.default.resubscribe.bind(d.default)).catch(y.logger.error)
                                }, 2e3))
                            }
                        }, {
                            key: "connectedInit",
                            value: (e = (0, f.default)(g.default.mark(function e() {
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!this.connectPromise || this.blockReCall) return e.abrupt("return");
                                            e.next = 2;
                                            break;
                                        case 2:
                                            return this.blockReCall = !0, this.db = b.default.new("db_api"), this.history = b.default.new("history_api"), this.network = b.default.new("network_api"), w.default.setDB(this.db), this.newTx = w.default.newTx, this.assets = p.default.init(this.db), this.accounts = _.default.init(this.db), this.fees = m.default.init(this.db), e.next = 13, this.fees.update();
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            })), function () {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "login",
                            value: (o = (0, f.default)(g.default.mark(function e(t, r) {
                                var n, i, s, o, a, u = arguments;
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = 2 < u.length && void 0 !== u[2] ? u[2] : y.chain.core_asset, e.next = 3, y.accounts[t];
                                        case 3:
                                            if (i = e.sent, s = j.PrivateKey.fromSeed("".concat(t, "active").concat(r)), (o = s.toPublicKey().toString()) != i.active.key_auths[0][0]) throw new Error("The pair of login and password do not match!");
                                            e.next = 8;
                                            break;
                                        case 8:
                                            return (a = new y(t, s.toWif(), n)).setMemoKey((i.options.memo_key === o ? s : j.PrivateKey.fromSeed("".concat(t, "memo").concat(r))).toWif()), e.next = 12, a.initPromise;
                                        case 12:
                                            return e.abrupt("return", a);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            })), function (e, t) {
                                return o.apply(this, arguments)
                            })
                        }, {
                            key: "loginFromFile",
                            value: (i = (0, f.default)(g.default.mark(function e(t, r, n) {
                                var i, s, o, a, u, f, c, h, l, d, p, _, b, m = arguments;
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return i = 3 < m.length && void 0 !== m[3] ? m[3] : y.chain.core_asset, s = j.Aes.decrypt_with_checksum(j.PrivateKey.fromSeed(r), j.PublicKey.fromBuffer(t.slice(0, 33)), null, t.slice(33)), o = JSON.parse(x.LZMA.decompress(s)), a = o.wallet[0], u = j.Aes.fromSeed(r), f = u.decryptHexToBuffer(a.encryption_key), c = j.Aes.fromSeed(f), e.next = 5, y.accounts[n];
                                        case 5:
                                            if (h = e.sent, l = o.private_keys.find(function (e) {
                                                    return e.pubkey === h.active.key_auths[0][0]
                                                })) {
                                                e.next = 9;
                                                break
                                            }
                                            throw new Error("Not found active key for account ".concat(n));
                                        case 9:
                                            return d = c.decryptHex(l.encrypted_key), p = j.PrivateKey.fromBuffer(new v(d, "hex")), _ = new y(n, p.toWif(), i), h.options.memo_key === h.active.key_auths[0][0] ? b = p : (l = o.private_keys.find(function (e) {
                                                return e.pubkey === h.options.memo_key
                                            })) || (d = c.decryptHex(l.encrypted_key), b = j.PrivateKey.fromBuffer(new v(d, "hex"))), b && _.setMemoKey(b.toWif()), e.next = 16, _.initPromise;
                                        case 16:
                                            return e.abrupt("return", _);
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            })), function (e, t, r) {
                                return i.apply(this, arguments)
                            })
                        }, {
                            key: "ticker",
                            value: function (e, t) {
                                return y.db.get_ticker(e.toUpperCase(), t.toUpperCase())
                            }
                        }, {
                            key: "tradeHistory",
                            value: (s = (0, f.default)(g.default.mark(function e(t, r, n, i, s) {
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.t0 = y.history, e.next = 3, y.assets[t];
                                        case 3:
                                            return e.t1 = e.sent.id, e.next = 6, y.assets[r];
                                        case 6:
                                            return e.t2 = e.sent.id, e.t3 = s, e.t4 = n.toISOString().slice(0, -5), e.t5 = i.toISOString().slice(0, -5), e.abrupt("return", e.t0.get_market_history.call(e.t0, e.t1, e.t2, e.t3, e.t4, e.t5));
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            })), function (e, t, r, n, i) {
                                return s.apply(this, arguments)
                            })
                        }, {
                            key: "getLimitOrders",
                            value: (n = (0, f.default)(g.default.mark(function e(t, r) {
                                var n, i = arguments;
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = 2 < i.length && void 0 !== i[2] ? i[2] : 50, e.t0 = y.db, e.next = 4, y.assets[t];
                                        case 4:
                                            return e.t1 = e.sent.id, e.next = 7, y.assets[r];
                                        case 7:
                                            return e.t2 = e.sent.id, e.t3 = 100 < n ? 100 : n, e.abrupt("return", e.t0.get_limit_orders.call(e.t0, e.t1, e.t2, e.t3));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            })), function (e, t) {
                                return n.apply(this, arguments)
                            })
                        }, {
                            key: "getOrderBook",
                            value: (r = (0, f.default)(g.default.mark(function e(t, r) {
                                var n, i = arguments;
                                return g.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = 2 < i.length && void 0 !== i[2] ? i[2] : 50, e.t0 = y.db, e.next = 4, y.assets[t];
                                        case 4:
                                            return e.t1 = e.sent.id, e.next = 7, y.assets[r];
                                        case 7:
                                            return e.t2 = e.sent.id, e.t3 = 50 < n ? 50 : n, e.abrupt("return", e.t0.get_order_book.call(e.t0, e.t1, e.t2, e.t3));
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            })), function (e, t) {
                                return r.apply(this, arguments)
                            })
                        }]), y
                    }();
                (0, l.default)(t, "node", "wss://bitshares.openledger.info/ws"), (0, l.default)(t, "autoreconnect", !0), (0, l.default)(t, "logger", console), (0, l.default)(t, "subscribe", d.default.subscribe), (0, l.default)(t, "generateKeys", j.Login.generateKeys.bind(j.Login)), d.default.init(t);
                var r = t;
                i.default = r
            }).call(this, n("buffer").Buffer)
        }, {
            "./account.js": "/home/nozdrin/workspace/bitshares/btsdex/dist/account.js",
            "./api.js": "/home/nozdrin/workspace/bitshares/btsdex/dist/api.js",
            "./asset.js": "/home/nozdrin/workspace/bitshares/btsdex/dist/asset.js",
            "./event.js": "/home/nozdrin/workspace/bitshares/btsdex/dist/event.js",
            "./fees.js": "/home/nozdrin/workspace/bitshares/btsdex/dist/fees.js",
            "./transaction.js": "/home/nozdrin/workspace/bitshares/btsdex/dist/transaction.js",
            "@babel/runtime/helpers/asyncToGenerator": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/asyncToGenerator.js",
            "@babel/runtime/helpers/classCallCheck": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/classCallCheck.js",
            "@babel/runtime/helpers/createClass": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/createClass.js",
            "@babel/runtime/helpers/defineProperty": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/defineProperty.js",
            "@babel/runtime/helpers/interopRequireDefault": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/interopRequireDefault.js",
            "@babel/runtime/helpers/slicedToArray": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/slicedToArray.js",
            "@babel/runtime/regenerator": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/regenerator/index.js",
            "bignumber.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bignumber.js/bignumber.js",
            bitsharesjs: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/index.js",
            buffer: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/buffer/index.js",
            "lzma/src/lzma-d-min": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/lzma/src/lzma-d-min.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/dist/event.js": [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var h = n(e("@babel/runtime/regenerator")),
                o = n(e("@babel/runtime/helpers/asyncToGenerator")),
                a = n(e("@babel/runtime/helpers/classCallCheck")),
                i = n(e("@babel/runtime/helpers/createClass")),
                u = n(e("@babel/runtime/helpers/defineProperty")),
                s = function () {
                    var t, e, r, n;

                    function s(e, t) {
                        var i = this;
                        (0, a.default)(this, s), (0, u.default)(this, "subscribe", function () {
                            var r = (0, o.default)(h.default.mark(function e(t, r) {
                                var n;
                                return h.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            r = r || "all", (n = i.map[r]) || (i.newSubs.push(r), i.map[r] = n = {
                                                subs: new Set,
                                                events: []
                                            }, i.subFunc && i.subFunc(i.notifyFunc)), n.subs.add(t), i.init && t && t();
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function (e, t) {
                                return r.apply(this, arguments)
                            }
                        }()), (0, u.default)(this, "unsubscribe", function (e, t) {
                            t = t || "all";
                            var r = i.map[t];
                            if (!r) throw new Error("Error when unsubscribe: handler ".concat(t, " not found"));
                            r.subs.delete(e)
                        }), (0, u.default)(this, "notify", function (e) {
                            (e || Object.keys(i.map)).forEach(function (e) {
                                var r = i.map[e];
                                r.subs.forEach(function () {
                                    var t = (0, o.default)(h.default.mark(function e(t) {
                                        return h.default.wrap(function (e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    t && 0 != r.events.length && t(r.events);
                                                case 1:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }, e, this)
                                    }));
                                    return function (e) {
                                        return t.apply(this, arguments)
                                    }
                                }())
                            })
                        }), this.init = !1, this.subFunc = e, this.notifyFunc = t, this.map = {}, this.newSubs = []
                    }
                    return (0, i.default)(s, null, [{
                        key: "init",
                        value: function (e) {
                            this.bts = e, this.connected = new this(e.connect), this.block = new this(this.connected.subscribe, this.subscribeBlock.bind(this)), this.bindAccount = this.subscribeAccount.bind(this), this.account = new this(this.block.subscribe, this.bindAccount)
                        }
                    }, {
                        key: "connectedNotify",
                        value: function () {
                            this.connected.init = !0, this.connected.map.all ? this.connected.map.all.events.push(void 0) : this.connected.map.all = {
                                subs: new Set([void 0]),
                                events: [void 0]
                            }, this.connected.notify()
                        }
                    }, {
                        key: "resubscribe",
                        value: (n = (0, o.default)(h.default.mark(function e() {
                            return h.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.subscribeBlock();
                                    case 2:
                                        return this.account.newSubs = Object.keys(this.account.map), e.next = 5, this.subscribeAccount();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function () {
                            return n.apply(this, arguments)
                        })
                    }, {
                        key: "subscribeBlock",
                        value: (r = (0, o.default)(h.default.mark(function e() {
                            return h.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.bts.db.set_subscribe_callback(this.getUpdate.bind(this), !1);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function () {
                            return r.apply(this, arguments)
                        })
                    }, {
                        key: "subscribeAccount",
                        value: (e = (0, o.default)(h.default.mark(function e() {
                            var n = this;
                            return h.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (0 == this.account.newSubs.length) return e.abrupt("return");
                                        e.next = 2;
                                        break;
                                    case 2:
                                        return e.next = 4, this.bts.db.get_full_accounts(this.account.newSubs, !0);
                                    case 4:
                                        this.account.newSubs = [], this.block.unsubscribe(this.bindAccount), Object.keys(this.account.map).forEach(function () {
                                            var t = (0, o.default)(h.default.mark(function e(t) {
                                                var r;
                                                return h.default.wrap(function (e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if ((r = n.account.map[t]).id) {
                                                                e.next = 5;
                                                                break
                                                            }
                                                            return e.next = 4, n.bts.accounts[t];
                                                        case 4:
                                                            r.id = e.sent.id;
                                                        case 5:
                                                            if (r.history) {
                                                                e.next = 9;
                                                                break
                                                            }
                                                            return e.next = 8, n.bts.history.get_account_history(r.id, "1.11.0", 1, "1.11.0");
                                                        case 8:
                                                            r.history = e.sent[0].id;
                                                        case 9:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }, e, this)
                                            }));
                                            return function (e) {
                                                return t.apply(this, arguments)
                                            }
                                        }());
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function () {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "subscribe",
                        value: function (e, t, r) {
                            if (!s[e]) throw new Error("Event ".concat(e, " not found"));
                            "account" == e ? s[e].subscribe(t, r) : s[e].subscribe(t)
                        }
                    }, {
                        key: "getUpdate",
                        value: function (e) {
                            var t = this;
                            this.block.map.all.events = [];
                            var r = Object.keys(this.account.map).map(function (e) {
                                    return t.account.map[e].id
                                }).filter(function (e) {
                                    return e
                                }),
                                n = new Set;
                            e.forEach(function (e) {
                                return e.forEach(function (e) {
                                    e.id && ("2.1.0" == e.id ? t.block.map.all.events.push(e) : /^2\.5\./.test(e.id) && r.includes(e.owner) && n.add(e.owner))
                                })
                            }), this.block.notify(), 0 < n.size && this.updateAccounts(n)
                        }
                    }, {
                        key: "updateAccounts",
                        value: (t = (0, o.default)(h.default.mark(function e(t) {
                            var r, n, i, s, o, a, u, f, c;
                            return h.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        r = new Set, i = !(n = !0), s = void 0, e.prev = 4, o = t[Symbol.iterator]();
                                    case 6:
                                        if (n = (a = o.next()).done) {
                                            e.next = 21;
                                            break
                                        }
                                        return u = a.value, e.next = 10, this.bts.accounts.id(u);
                                    case 10:
                                        return f = e.sent.name, (c = this.account.map[f]).history || (c.history = "1.11.0"), e.next = 15, this.bts.history.get_account_history(u, c.history, 100, "1.11.0");
                                    case 15:
                                        c.events = e.sent, c.history = c.events[0].id, r.add(f);
                                    case 18:
                                        n = !0, e.next = 6;
                                        break;
                                    case 21:
                                        e.next = 27;
                                        break;
                                    case 23:
                                        e.prev = 23, e.t0 = e.catch(4), i = !0, s = e.t0;
                                    case 27:
                                        e.prev = 27, e.prev = 28, n || null == o.return || o.return();
                                    case 30:
                                        if (e.prev = 30, i) throw s;
                                        e.next = 33;
                                        break;
                                    case 33:
                                        return e.finish(30);
                                    case 34:
                                        return e.finish(27);
                                    case 35:
                                        this.account.notify(r);
                                    case 36:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this, [
                                [4, 23, 27, 35],
                                [28, , 30, 34]
                            ])
                        })), function (e) {
                            return t.apply(this, arguments)
                        })
                    }]), s
                }();
            r.default = s
        }, {
            "@babel/runtime/helpers/asyncToGenerator": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/asyncToGenerator.js",
            "@babel/runtime/helpers/classCallCheck": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/classCallCheck.js",
            "@babel/runtime/helpers/createClass": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/createClass.js",
            "@babel/runtime/helpers/defineProperty": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/defineProperty.js",
            "@babel/runtime/helpers/interopRequireDefault": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/interopRequireDefault.js",
            "@babel/runtime/regenerator": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/regenerator/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/dist/fees.js": [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var i = n(e("@babel/runtime/regenerator")),
                s = n(e("@babel/runtime/helpers/asyncToGenerator")),
                o = n(e("@babel/runtime/helpers/classCallCheck")),
                a = n(e("@babel/runtime/helpers/createClass")),
                u = n(e("bignumber.js")),
                f = ["transfer", "limit_order_create", "limit_order_cancel", "call_order_update", "fill_order", "account_create", "account_update", "account_whitelist", "account_upgrade", "account_transfer", "asset_create", "asset_update", "asset_update_bitasset", "asset_update_feed_producers", "asset_issue", "asset_reserve", "asset_fund_fee_pool", "asset_settle", "asset_global_settle", "asset_publish_feed", "witness_create", "witness_update", "proposal_create", "proposal_update", "proposal_delete", "withdraw_permission_create", "withdraw_permission_update", "withdraw_permission_claim", "withdraw_permission_delete", "committee_member_create", "committee_member_update", "committee_member_update_global_parameters", "vesting_balance_create", "vesting_balance_withdraw", "worker_create", "custom", "assert", "balance_claim", "override_transfer", "transfer_to_blind", "blind_transfer", "transfer_from_blind", "asset_settle_cancel", "asset_claim_fees", "fba_distribute", "bid_collateral", "execute_bid"],
                c = function () {
                    function t() {
                        (0, o.default)(this, t)
                    }
                    var e;
                    return (0, a.default)(t, [{
                        key: "update",
                        value: (e = (0, s.default)(i.default.mark(function e() {
                            var r = this;
                            return i.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.db.get_global_properties();
                                    case 2:
                                        e.sent.parameters.current_fees.parameters.forEach(function (e, t) {
                                            r[f[t]] = e[1].fee ? Number((0, u.default)(e[1].fee).div(Math.pow(10, 5)).toString()) : e[1]
                                        });
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })), function () {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "operations",
                        value: function (e) {
                            return e ? f[e] : f
                        }
                    }], [{
                        key: "init",
                        value: function (e) {
                            return this.db = e, this.instance || (this.instance = new this), this.instance
                        }
                    }]), t
                }();
            r.default = c
        }, {
            "@babel/runtime/helpers/asyncToGenerator": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/asyncToGenerator.js",
            "@babel/runtime/helpers/classCallCheck": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/classCallCheck.js",
            "@babel/runtime/helpers/createClass": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/createClass.js",
            "@babel/runtime/helpers/interopRequireDefault": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/interopRequireDefault.js",
            "@babel/runtime/regenerator": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/regenerator/index.js",
            "bignumber.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bignumber.js/bignumber.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/dist/transaction.js": [function (e, t, r) {
            "use strict";
            var n = e("@babel/runtime/helpers/interopRequireDefault");
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var s = n(e("@babel/runtime/regenerator")),
                o = n(e("@babel/runtime/helpers/asyncToGenerator")),
                a = n(e("@babel/runtime/helpers/classCallCheck")),
                u = n(e("@babel/runtime/helpers/createClass")),
                f = n(e("@babel/runtime/helpers/defineProperty")),
                c = e("bitsharesjs"),
                i = function () {
                    function i(e) {
                        var n = this;
                        (0, a.default)(this, i), (0, f.default)(this, "get", function (e, t) {
                            return e[t] ? e[t] : function (e) {
                                n.add((0, f.default)({}, t, e))
                            }
                        }), (0, f.default)(this, "add", function (t) {
                            Object.keys(t).forEach(function (e) {
                                return n.tx.add_type_operation(e, t[e])
                            })
                        }), (0, f.default)(this, "broadcast", function () {
                            var t = (0, o.default)(s.default.mark(function e(t) {
                                return s.default.wrap(function (e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, n.tx.set_required_fees();
                                        case 2:
                                            return (t || n.keys).forEach(function (e) {
                                                return n.tx.add_signer(e, e.toPublicKey().toPublicKeyString())
                                            }), e.abrupt("return", n.tx.broadcast());
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }()), (0, f.default)(this, "cost", (0, o.default)(s.default.mark(function e() {
                            var r, t;
                            return s.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.tx.set_required_fees();
                                    case 2:
                                        return r = {}, n.tx.operations.forEach(function (e) {
                                            r[e[1].fee.asset_id] = r[e[1].fee.asset_id] || 0, r[e[1].fee.asset_id] += +e[1].fee.amount
                                        }), e.next = 6, i.db.get_assets(Object.keys(r));
                                    case 6:
                                        return t = e.sent, e.abrupt("return", t.reduce(function (e, t) {
                                            return e[t.symbol] = r[t.id] / Math.pow(10, t.precision), e
                                        }, {}));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }))), this.tx = new c.TransactionBuilder, this.keys = e
                    }
                    return (0, u.default)(i, null, [{
                        key: "newTx",
                        value: function (e) {
                            var t = new i(e);
                            return new Proxy(t, t)
                        }
                    }, {
                        key: "setDB",
                        value: function (e) {
                            i.db = e
                        }
                    }]), i
                }();
            r.default = i
        }, {
            "@babel/runtime/helpers/asyncToGenerator": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/asyncToGenerator.js",
            "@babel/runtime/helpers/classCallCheck": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/classCallCheck.js",
            "@babel/runtime/helpers/createClass": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/createClass.js",
            "@babel/runtime/helpers/defineProperty": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/defineProperty.js",
            "@babel/runtime/helpers/interopRequireDefault": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/interopRequireDefault.js",
            "@babel/runtime/regenerator": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/regenerator/index.js",
            bitsharesjs: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/index.js": [function (e, t, r) {
            t.exports = e("./dist/bitshares").default
        }, {
            "./dist/bitshares": "/home/nozdrin/workspace/bitshares/btsdex/dist/bitshares.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/arrayWithHoles.js": [function (e, t, r) {
            t.exports = function (e) {
                if (Array.isArray(e)) return e
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/asyncToGenerator.js": [function (e, t, r) {
            function u(e, t, r, n, i, s, o) {
                try {
                    var a = e[s](o),
                        u = a.value
                } catch (e) {
                    return void r(e)
                }
                a.done ? t(u) : Promise.resolve(u).then(n, i)
            }
            t.exports = function (a) {
                return function () {
                    var e = this,
                        o = arguments;
                    return new Promise(function (t, r) {
                        var n = a.apply(e, o);

                        function i(e) {
                            u(n, t, r, i, s, "next", e)
                        }

                        function s(e) {
                            u(n, t, r, i, s, "throw", e)
                        }
                        i(void 0)
                    })
                }
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/classCallCheck.js": [function (e, t, r) {
            t.exports = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/createClass.js": [function (e, t, r) {
            function n(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            t.exports = function (e, t, r) {
                return t && n(e.prototype, t), r && n(e, r), e
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/defineProperty.js": [function (e, t, r) {
            t.exports = function (e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/interopRequireDefault.js": [function (e, t, r) {
            t.exports = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js": [function (e, t, r) {
            t.exports = function (e, t) {
                var r = [],
                    n = !0,
                    i = !1,
                    s = void 0;
                try {
                    for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                } catch (e) {
                    i = !0, s = e
                } finally {
                    try {
                        n || null == a.return || a.return()
                    } finally {
                        if (i) throw s
                    }
                }
                return r
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/nonIterableRest.js": [function (e, t, r) {
            t.exports = function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/slicedToArray.js": [function (e, t, r) {
            var n = e("./arrayWithHoles"),
                i = e("./iterableToArrayLimit"),
                s = e("./nonIterableRest");
            t.exports = function (e, t) {
                return n(e) || i(e, t) || s()
            }
        }, {
            "./arrayWithHoles": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/arrayWithHoles.js",
            "./iterableToArrayLimit": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js",
            "./nonIterableRest": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/helpers/nonIterableRest.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/@babel/runtime/regenerator/index.js": [function (e, t, r) {
            t.exports = e("regenerator-runtime")
        }, {
            "regenerator-runtime": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/regenerator-runtime/runtime-module.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/assert.js": [function (w, x, e) {
            (function (t) {
                "use strict";

                function s(e, t) {
                    if (e === t) return 0;
                    for (var r = e.length, n = t.length, i = 0, s = Math.min(r, n); i < s; ++i)
                        if (e[i] !== t[i]) {
                            r = e[i], n = t[i];
                            break
                        } return r < n ? -1 : n < r ? 1 : 0
                }

                function o(e) {
                    return t.Buffer && "function" == typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer)
                }
                var c = w("util/"),
                    n = Object.prototype.hasOwnProperty,
                    h = Array.prototype.slice,
                    r = "foo" === function () {}.name;

                function a(e) {
                    return Object.prototype.toString.call(e)
                }

                function u(e) {
                    return !o(e) && ("function" == typeof t.ArrayBuffer && ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer))))
                }
                var f = x.exports = e,
                    i = /\s*function\s+([^\(\s]*)\s*/;

                function l(e) {
                    if (c.isFunction(e)) {
                        if (r) return e.name;
                        var t = e.toString().match(i);
                        return t && t[1]
                    }
                }

                function d(e, t) {
                    return "string" == typeof e ? e.length < t ? e : e.slice(0, t) : e
                }

                function p(e) {
                    if (r || !c.isFunction(e)) return c.inspect(e);
                    var t = l(e);
                    return "[Function" + (t ? ": " + t : "") + "]"
                }

                function _(e, t, r, n, i) {
                    throw new f.AssertionError({
                        message: r,
                        actual: e,
                        expected: t,
                        operator: n,
                        stackStartFunction: i
                    })
                }

                function e(e, t) {
                    e || _(e, !0, t, "==", f.ok)
                }

                function b(e, t, r, n) {
                    if (e === t) return !0;
                    if (o(e) && o(t)) return 0 === s(e, t);
                    if (c.isDate(e) && c.isDate(t)) return e.getTime() === t.getTime();
                    if (c.isRegExp(e) && c.isRegExp(t)) return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
                    if (null !== e && "object" == typeof e || null !== t && "object" == typeof t) {
                        if (u(e) && u(t) && a(e) === a(t) && !(e instanceof Float32Array || e instanceof Float64Array)) return 0 === s(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
                        if (o(e) !== o(t)) return !1;
                        var i = (n = n || {
                            actual: [],
                            expected: []
                        }).actual.indexOf(e);
                        return -1 !== i && i === n.expected.indexOf(t) || (n.actual.push(e), n.expected.push(t), function (e, t, r, n) {
                            if (null == e || null == t) return !1;
                            if (c.isPrimitive(e) || c.isPrimitive(t)) return e === t;
                            if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
                            var i = m(e),
                                s = m(t);
                            if (i && !s || !i && s) return !1;
                            if (i) return e = h.call(e), t = h.call(t), b(e, t, r);
                            var o, a, u = g(e),
                                f = g(t);
                            if (u.length !== f.length) return !1;
                            for (u.sort(), f.sort(), a = u.length - 1; 0 <= a; a--)
                                if (u[a] !== f[a]) return !1;
                            for (a = u.length - 1; 0 <= a; a--)
                                if (o = u[a], !b(e[o], t[o], r, n)) return !1;
                            return !0
                        }(e, t, r, n))
                    }
                    return r ? e === t : e == t
                }

                function m(e) {
                    return "[object Arguments]" == Object.prototype.toString.call(e)
                }

                function y(e, t) {
                    if (!e || !t) return !1;
                    if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e);
                    try {
                        if (e instanceof t) return !0
                    } catch (e) {}
                    return !Error.isPrototypeOf(t) && !0 === t.call({}, e)
                }

                function v(e, t, r, n) {
                    var i;
                    if ("function" != typeof t) throw new TypeError('"block" argument must be a function');
                    "string" == typeof r && (n = r, r = null), i = function (e) {
                        var t;
                        try {
                            e()
                        } catch (e) {
                            t = e
                        }
                        return t
                    }(t), n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : "."), e && !i && _(i, r, "Missing expected exception" + n);
                    var s = "string" == typeof n,
                        o = !e && i && !r;
                    if ((!e && c.isError(i) && s && y(i, r) || o) && _(i, r, "Got unwanted exception" + n), e && i && r && !y(i, r) || !e && i) throw i
                }
                f.AssertionError = function (e) {
                    var t;
                    this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = d(p((t = this).actual), 128) + " " + t.operator + " " + d(p(t.expected), 128), this.generatedMessage = !0);
                    var r = e.stackStartFunction || _;
                    if (Error.captureStackTrace) Error.captureStackTrace(this, r);
                    else {
                        var n = new Error;
                        if (n.stack) {
                            var i = n.stack,
                                s = l(r),
                                o = i.indexOf("\n" + s);
                            if (0 <= o) {
                                var a = i.indexOf("\n", o + 1);
                                i = i.substring(a + 1)
                            }
                            this.stack = i
                        }
                    }
                }, c.inherits(f.AssertionError, Error), f.fail = _, f.ok = e, f.equal = function (e, t, r) {
                    e != t && _(e, t, r, "==", f.equal)
                }, f.notEqual = function (e, t, r) {
                    e == t && _(e, t, r, "!=", f.notEqual)
                }, f.deepEqual = function (e, t, r) {
                    b(e, t, !1) || _(e, t, r, "deepEqual", f.deepEqual)
                }, f.deepStrictEqual = function (e, t, r) {
                    b(e, t, !0) || _(e, t, r, "deepStrictEqual", f.deepStrictEqual)
                }, f.notDeepEqual = function (e, t, r) {
                    b(e, t, !1) && _(e, t, r, "notDeepEqual", f.notDeepEqual)
                }, f.notDeepStrictEqual = function e(t, r, n) {
                    b(t, r, !0) && _(t, r, n, "notDeepStrictEqual", e)
                }, f.strictEqual = function (e, t, r) {
                    e !== t && _(e, t, r, "===", f.strictEqual)
                }, f.notStrictEqual = function (e, t, r) {
                    e === t && _(e, t, r, "!==", f.notStrictEqual)
                }, f.throws = function (e, t, r) {
                    v(!0, e, t, r)
                }, f.doesNotThrow = function (e, t, r) {
                    v(!1, e, t, r)
                }, f.ifError = function (e) {
                    if (e) throw e
                };
                var g = Object.keys || function (e) {
                    var t = [];
                    for (var r in e) n.call(e, r) && t.push(r);
                    return t
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "util/": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/node_modules/util/util.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/node_modules/inherits/inherits_browser.js": [function (e, t, r) {
            "function" == typeof Object.create ? t.exports = function (e, t) {
                e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })
            } : t.exports = function (e, t) {
                e.super_ = t;
                var r = function () {};
                r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/node_modules/util/support/isBufferBrowser.js": [function (e, t, r) {
            t.exports = function (e) {
                return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/node_modules/util/util.js": [function (l, e, S) {
            (function (n, i) {
                var a = /%[sdj%]/g;
                S.format = function (e) {
                    if (!g(e)) {
                        for (var t = [], r = 0; r < arguments.length; r++) t.push(u(arguments[r]));
                        return t.join(" ")
                    }
                    r = 1;
                    for (var n = arguments, i = n.length, s = String(e).replace(a, function (e) {
                            if ("%%" === e) return "%";
                            if (i <= r) return e;
                            switch (e) {
                                case "%s":
                                    return String(n[r++]);
                                case "%d":
                                    return Number(n[r++]);
                                case "%j":
                                    try {
                                        return JSON.stringify(n[r++])
                                    } catch (e) {
                                        return "[Circular]"
                                    }
                                    default:
                                        return e
                            }
                        }), o = n[r]; r < i; o = n[++r]) y(o) || !c(o) ? s += " " + o : s += " " + u(o);
                    return s
                }, S.deprecate = function (e, t) {
                    if (w(i.process)) return function () {
                        return S.deprecate(e, t).apply(this, arguments)
                    };
                    if (!0 === n.noDeprecation) return e;
                    var r = !1;
                    return function () {
                        if (!r) {
                            if (n.throwDeprecation) throw new Error(t);
                            n.traceDeprecation ? console.trace(t) : console.error(t), r = !0
                        }
                        return e.apply(this, arguments)
                    }
                };
                var e, s = {};

                function u(e, t) {
                    var r = {
                        seen: [],
                        stylize: f
                    };
                    return 3 <= arguments.length && (r.depth = arguments[2]), 4 <= arguments.length && (r.colors = arguments[3]), m(t) ? r.showHidden = t : t && S._extend(r, t), w(r.showHidden) && (r.showHidden = !1), w(r.depth) && (r.depth = 2), w(r.colors) && (r.colors = !1), w(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = o), d(r, e, r.depth)
                }

                function o(e, t) {
                    var r = u.styles[t];
                    return r ? "[" + u.colors[r][0] + "m" + e + "[" + u.colors[r][1] + "m" : e
                }

                function f(e, t) {
                    return e
                }

                function d(t, r, n) {
                    if (t.customInspect && r && E(r.inspect) && r.inspect !== S.inspect && (!r.constructor || r.constructor.prototype !== r)) {
                        var e = r.inspect(n, t);
                        return g(e) || (e = d(t, e, n)), e
                    }
                    var i = function (e, t) {
                        if (w(t)) return e.stylize("undefined", "undefined");
                        if (g(t)) {
                            var r = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                            return e.stylize(r, "string")
                        }
                        if (v(t)) return e.stylize("" + t, "number");
                        if (m(t)) return e.stylize("" + t, "boolean");
                        if (y(t)) return e.stylize("null", "null")
                    }(t, r);
                    if (i) return i;
                    var s, o = Object.keys(r),
                        a = (s = {}, o.forEach(function (e, t) {
                            s[e] = !0
                        }), s);
                    if (t.showHidden && (o = Object.getOwnPropertyNames(r)), j(r) && (0 <= o.indexOf("message") || 0 <= o.indexOf("description"))) return p(r);
                    if (0 === o.length) {
                        if (E(r)) {
                            var u = r.name ? ": " + r.name : "";
                            return t.stylize("[Function" + u + "]", "special")
                        }
                        if (x(r)) return t.stylize(RegExp.prototype.toString.call(r), "regexp");
                        if (k(r)) return t.stylize(Date.prototype.toString.call(r), "date");
                        if (j(r)) return p(r)
                    }
                    var f, c = "",
                        h = !1,
                        l = ["{", "}"];
                    (b(r) && (h = !0, l = ["[", "]"]), E(r)) && (c = " [Function" + (r.name ? ": " + r.name : "") + "]");
                    return x(r) && (c = " " + RegExp.prototype.toString.call(r)), k(r) && (c = " " + Date.prototype.toUTCString.call(r)), j(r) && (c = " " + p(r)), 0 !== o.length || h && 0 != r.length ? n < 0 ? x(r) ? t.stylize(RegExp.prototype.toString.call(r), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(r), f = h ? function (t, r, n, i, e) {
                        for (var s = [], o = 0, a = r.length; o < a; ++o) z(r, String(o)) ? s.push(_(t, r, n, i, String(o), !0)) : s.push("");
                        return e.forEach(function (e) {
                            e.match(/^\d+$/) || s.push(_(t, r, n, i, e, !0))
                        }), s
                    }(t, r, n, a, o) : o.map(function (e) {
                        return _(t, r, n, a, e, h)
                    }), t.seen.pop(), function (e, t, r) {
                        if (60 < e.reduce(function (e, t) {
                                return 0, 0 <= t.indexOf("\n") && 0, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                            }, 0)) return r[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + r[1];
                        return r[0] + t + " " + e.join(", ") + " " + r[1]
                    }(f, c, l)) : l[0] + c + l[1]
                }

                function p(e) {
                    return "[" + Error.prototype.toString.call(e) + "]"
                }

                function _(e, t, r, n, i, s) {
                    var o, a, u;
                    if ((u = Object.getOwnPropertyDescriptor(t, i) || {
                            value: t[i]
                        }).get ? a = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (a = e.stylize("[Setter]", "special")), z(n, i) || (o = "[" + i + "]"), a || (e.seen.indexOf(u.value) < 0 ? -1 < (a = y(r) ? d(e, u.value, null) : d(e, u.value, r - 1)).indexOf("\n") && (a = s ? a.split("\n").map(function (e) {
                            return "  " + e
                        }).join("\n").substr(2) : "\n" + a.split("\n").map(function (e) {
                            return "   " + e
                        }).join("\n")) : a = e.stylize("[Circular]", "special")), w(o)) {
                        if (s && i.match(/^\d+$/)) return a;
                        o = (o = JSON.stringify("" + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), e.stylize(o, "string"))
                    }
                    return o + ": " + a
                }

                function b(e) {
                    return Array.isArray(e)
                }

                function m(e) {
                    return "boolean" == typeof e
                }

                function y(e) {
                    return null === e
                }

                function v(e) {
                    return "number" == typeof e
                }

                function g(e) {
                    return "string" == typeof e
                }

                function w(e) {
                    return void 0 === e
                }

                function x(e) {
                    return c(e) && "[object RegExp]" === t(e)
                }

                function c(e) {
                    return "object" == typeof e && null !== e
                }

                function k(e) {
                    return c(e) && "[object Date]" === t(e)
                }

                function j(e) {
                    return c(e) && ("[object Error]" === t(e) || e instanceof Error)
                }

                function E(e) {
                    return "function" == typeof e
                }

                function t(e) {
                    return Object.prototype.toString.call(e)
                }

                function r(e) {
                    return e < 10 ? "0" + e.toString(10) : e.toString(10)
                }
                S.debuglog = function (t) {
                    if (w(e) && (e = n.env.NODE_DEBUG || ""), t = t.toUpperCase(), !s[t])
                        if (new RegExp("\\b" + t + "\\b", "i").test(e)) {
                            var r = n.pid;
                            s[t] = function () {
                                var e = S.format.apply(S, arguments);
                                console.error("%s %d: %s", t, r, e)
                            }
                        } else s[t] = function () {};
                    return s[t]
                }, (S.inspect = u).colors = {
                    bold: [1, 22],
                    italic: [3, 23],
                    underline: [4, 24],
                    inverse: [7, 27],
                    white: [37, 39],
                    grey: [90, 39],
                    black: [30, 39],
                    blue: [34, 39],
                    cyan: [36, 39],
                    green: [32, 39],
                    magenta: [35, 39],
                    red: [31, 39],
                    yellow: [33, 39]
                }, u.styles = {
                    special: "cyan",
                    number: "yellow",
                    boolean: "yellow",
                    undefined: "grey",
                    null: "bold",
                    string: "green",
                    date: "magenta",
                    regexp: "red"
                }, S.isArray = b, S.isBoolean = m, S.isNull = y, S.isNullOrUndefined = function (e) {
                    return null == e
                }, S.isNumber = v, S.isString = g, S.isSymbol = function (e) {
                    return "symbol" == typeof e
                }, S.isUndefined = w, S.isRegExp = x, S.isObject = c, S.isDate = k, S.isError = j, S.isFunction = E, S.isPrimitive = function (e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
                }, S.isBuffer = l("./support/isBuffer");
                var h = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                function z(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                S.log = function () {
                    var e, t;
                    console.log("%s - %s", (e = new Date, t = [r(e.getHours()), r(e.getMinutes()), r(e.getSeconds())].join(":"), [e.getDate(), h[e.getMonth()], t].join(" ")), S.format.apply(S, arguments))
                }, S.inherits = l("inherits"), S._extend = function (e, t) {
                    if (!t || !c(t)) return e;
                    for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
                    return e
                }
            }).call(this, l("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./support/isBuffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/node_modules/util/support/isBufferBrowser.js",
            _process: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process/browser.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/node_modules/inherits/inherits_browser.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/base-x/index.js": [function (e, t, r) {
            var h = e("safe-buffer").Buffer;
            t.exports = function (u) {
                for (var a = {}, f = u.length, c = u.charAt(0), e = 0; e < u.length; e++) {
                    var t = u.charAt(e);
                    if (void 0 !== a[t]) throw new TypeError(t + " is ambiguous");
                    a[t] = e
                }

                function r(e) {
                    if ("string" != typeof e) throw new TypeError("Expected String");
                    if (0 === e.length) return h.allocUnsafe(0);
                    for (var t = [0], r = 0; r < e.length; r++) {
                        var n = a[e[r]];
                        if (void 0 === n) return;
                        for (var i = 0, s = n; i < t.length; ++i) s += t[i] * f, t[i] = 255 & s, s >>= 8;
                        for (; 0 < s;) t.push(255 & s), s >>= 8
                    }
                    for (var o = 0; e[o] === c && o < e.length - 1; ++o) t.push(0);
                    return h.from(t.reverse())
                }
                return {
                    encode: function (e) {
                        if (0 === e.length) return "";
                        for (var t = [0], r = 0; r < e.length; ++r) {
                            for (var n = 0, i = e[r]; n < t.length; ++n) i += t[n] << 8, t[n] = i % f, i = i / f | 0;
                            for (; 0 < i;) t.push(i % f), i = i / f | 0
                        }
                        for (var s = "", o = 0; 0 === e[o] && o < e.length - 1; ++o) s += c;
                        for (var a = t.length - 1; 0 <= a; --a) s += u[t[a]];
                        return s
                    },
                    decodeUnsafe: r,
                    decode: function (e) {
                        var t = r(e);
                        if (t) return t;
                        throw new Error("Non-base" + f + " character")
                    }
                }
            }
        }, {
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/base64-js/index.js": [function (e, t, r) {
            "use strict";
            r.byteLength = function (e) {
                var t = d(e),
                    r = t[0],
                    n = t[1];
                return 3 * (r + n) / 4 - n
            }, r.toByteArray = function (e) {
                for (var t, r = d(e), n = r[0], i = r[1], s = new l((f = n, c = i, 3 * (f + c) / 4 - c)), o = 0, a = 0 < i ? n - 4 : n, u = 0; u < a; u += 4) t = h[e.charCodeAt(u)] << 18 | h[e.charCodeAt(u + 1)] << 12 | h[e.charCodeAt(u + 2)] << 6 | h[e.charCodeAt(u + 3)], s[o++] = t >> 16 & 255, s[o++] = t >> 8 & 255, s[o++] = 255 & t;
                var f, c;
                2 === i && (t = h[e.charCodeAt(u)] << 2 | h[e.charCodeAt(u + 1)] >> 4, s[o++] = 255 & t);
                1 === i && (t = h[e.charCodeAt(u)] << 10 | h[e.charCodeAt(u + 1)] << 4 | h[e.charCodeAt(u + 2)] >> 2, s[o++] = t >> 8 & 255, s[o++] = 255 & t);
                return s
            }, r.fromByteArray = function (e) {
                for (var t, r = e.length, n = r % 3, i = [], s = 0, o = r - n; s < o; s += 16383) i.push(u(e, s, o < s + 16383 ? o : s + 16383));
                1 === n ? (t = e[r - 1], i.push(a[t >> 2] + a[t << 4 & 63] + "==")) : 2 === n && (t = (e[r - 2] << 8) + e[r - 1], i.push(a[t >> 10] + a[t >> 4 & 63] + a[t << 2 & 63] + "="));
                return i.join("")
            };
            for (var a = [], h = [], l = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, s = n.length; i < s; ++i) a[i] = n[i], h[n.charCodeAt(i)] = i;

            function d(e) {
                var t = e.length;
                if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("=");
                return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
            }

            function u(e, t, r) {
                for (var n, i, s = [], o = t; o < r; o += 3) n = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), s.push(a[(i = n) >> 18 & 63] + a[i >> 12 & 63] + a[i >> 6 & 63] + a[63 & i]);
                return s.join("")
            }
            h["-".charCodeAt(0)] = 62, h["_".charCodeAt(0)] = 63
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/bigi.js": [function (e, t, r) {
            function g(e, t, r) {
                if (!(this instanceof g)) return new g(e, t, r);
                null != e && ("number" == typeof e ? this.fromNumber(e, t, r) : null == t && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
            }
            var n = g.prototype;
            n.__bigi = e("../package.json").version, g.isBigInteger = function (e, t) {
                return e && e.__bigi && (!t || e.__bigi === n.__bigi)
            }, g.prototype.am = function (e, t, r, n, i, s) {
                for (; 0 <= --s;) {
                    var o = t * this[e++] + r[n] + i;
                    i = Math.floor(o / 67108864), r[n++] = 67108863 & o
                }
                return i
            }, g.prototype.DB = 26, g.prototype.DM = 67108863;
            var i = g.prototype.DV = 1 << 26;
            g.prototype.FV = Math.pow(2, 52), g.prototype.F1 = 26, g.prototype.F2 = 0;
            var s, o, a = "0123456789abcdefghijklmnopqrstuvwxyz",
                u = new Array;
            for (s = "0".charCodeAt(0), o = 0; o <= 9; ++o) u[s++] = o;
            for (s = "a".charCodeAt(0), o = 10; o < 36; ++o) u[s++] = o;
            for (s = "A".charCodeAt(0), o = 10; o < 36; ++o) u[s++] = o;

            function f(e) {
                return a.charAt(e)
            }

            function c(e, t) {
                var r = u[e.charCodeAt(t)];
                return null == r ? -1 : r
            }

            function b(e) {
                var t = new g;
                return t.fromInt(e), t
            }

            function w(e) {
                var t, r = 1;
                return 0 != (t = e >>> 16) && (e = t, r += 16), 0 != (t = e >> 8) && (e = t, r += 8), 0 != (t = e >> 4) && (e = t, r += 4), 0 != (t = e >> 2) && (e = t, r += 2), 0 != (t = e >> 1) && (e = t, r += 1), r
            }

            function m(e) {
                this.m = e
            }

            function y(e) {
                this.m = e, this.mp = e.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t
            }

            function h(e, t) {
                return e & t
            }

            function l(e, t) {
                return e | t
            }

            function d(e, t) {
                return e ^ t
            }

            function p(e, t) {
                return e & ~t
            }

            function _(e) {
                if (0 == e) return -1;
                var t = 0;
                return 0 == (65535 & e) && (e >>= 16, t += 16), 0 == (255 & e) && (e >>= 8, t += 8), 0 == (15 & e) && (e >>= 4, t += 4), 0 == (3 & e) && (e >>= 2, t += 2), 0 == (1 & e) && ++t, t
            }

            function v(e) {
                for (var t = 0; 0 != e;) e &= e - 1, ++t;
                return t
            }

            function x() {}

            function k(e) {
                return e
            }

            function j(e) {
                this.r2 = new g, this.q3 = new g, g.ONE.dlShiftTo(2 * e.t, this.r2), this.mu = this.r2.divide(e), this.m = e
            }
            m.prototype.convert = function (e) {
                return e.s < 0 || 0 <= e.compareTo(this.m) ? e.mod(this.m) : e
            }, m.prototype.revert = function (e) {
                return e
            }, m.prototype.reduce = function (e) {
                e.divRemTo(this.m, null, e)
            }, m.prototype.mulTo = function (e, t, r) {
                e.multiplyTo(t, r), this.reduce(r)
            }, m.prototype.sqrTo = function (e, t) {
                e.squareTo(t), this.reduce(t)
            }, y.prototype.convert = function (e) {
                var t = new g;
                return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && 0 < t.compareTo(g.ZERO) && this.m.subTo(t, t), t
            }, y.prototype.revert = function (e) {
                var t = new g;
                return e.copyTo(t), this.reduce(t), t
            }, y.prototype.reduce = function (e) {
                for (; e.t <= this.mt2;) e[e.t++] = 0;
                for (var t = 0; t < this.m.t; ++t) {
                    var r = 32767 & e[t],
                        n = r * this.mpl + ((r * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                    for (e[r = t + this.m.t] += this.m.am(0, n, e, t, 0, this.m.t); e[r] >= e.DV;) e[r] -= e.DV, e[++r]++
                }
                e.clamp(), e.drShiftTo(this.m.t, e), 0 <= e.compareTo(this.m) && e.subTo(this.m, e)
            }, y.prototype.mulTo = function (e, t, r) {
                e.multiplyTo(t, r), this.reduce(r)
            }, y.prototype.sqrTo = function (e, t) {
                e.squareTo(t), this.reduce(t)
            }, n.copyTo = function (e) {
                for (var t = this.t - 1; 0 <= t; --t) e[t] = this[t];
                e.t = this.t, e.s = this.s
            }, n.fromInt = function (e) {
                this.t = 1, this.s = e < 0 ? -1 : 0, 0 < e ? this[0] = e : e < -1 ? this[0] = e + i : this.t = 0
            }, n.fromString = function (e, t) {
                var r, n = this;
                if (16 == t) r = 4;
                else if (8 == t) r = 3;
                else if (256 == t) r = 8;
                else if (2 == t) r = 1;
                else if (32 == t) r = 5;
                else {
                    if (4 != t) return void n.fromRadix(e, t);
                    r = 2
                }
                n.t = 0, n.s = 0;
                for (var i = e.length, s = !1, o = 0; 0 <= --i;) {
                    var a = 8 == r ? 255 & e[i] : c(e, i);
                    a < 0 ? "-" == e.charAt(i) && (s = !0) : (s = !1, 0 == o ? n[n.t++] = a : o + r > n.DB ? (n[n.t - 1] |= (a & (1 << n.DB - o) - 1) << o, n[n.t++] = a >> n.DB - o) : n[n.t - 1] |= a << o, (o += r) >= n.DB && (o -= n.DB))
                }
                8 == r && 0 != (128 & e[0]) && (n.s = -1, 0 < o && (n[n.t - 1] |= (1 << n.DB - o) - 1 << o)), n.clamp(), s && g.ZERO.subTo(n, n)
            }, n.clamp = function () {
                for (var e = this.s & this.DM; 0 < this.t && this[this.t - 1] == e;) --this.t
            }, n.dlShiftTo = function (e, t) {
                var r;
                for (r = this.t - 1; 0 <= r; --r) t[r + e] = this[r];
                for (r = e - 1; 0 <= r; --r) t[r] = 0;
                t.t = this.t + e, t.s = this.s
            }, n.drShiftTo = function (e, t) {
                for (var r = e; r < this.t; ++r) t[r - e] = this[r];
                t.t = Math.max(this.t - e, 0), t.s = this.s
            }, n.lShiftTo = function (e, t) {
                var r, n = this,
                    i = e % n.DB,
                    s = n.DB - i,
                    o = (1 << s) - 1,
                    a = Math.floor(e / n.DB),
                    u = n.s << i & n.DM;
                for (r = n.t - 1; 0 <= r; --r) t[r + a + 1] = n[r] >> s | u, u = (n[r] & o) << i;
                for (r = a - 1; 0 <= r; --r) t[r] = 0;
                t[a] = u, t.t = n.t + a + 1, t.s = n.s, t.clamp()
            }, n.rShiftTo = function (e, t) {
                var r = this;
                t.s = r.s;
                var n = Math.floor(e / r.DB);
                if (n >= r.t) t.t = 0;
                else {
                    var i = e % r.DB,
                        s = r.DB - i,
                        o = (1 << i) - 1;
                    t[0] = r[n] >> i;
                    for (var a = n + 1; a < r.t; ++a) t[a - n - 1] |= (r[a] & o) << s, t[a - n] = r[a] >> i;
                    0 < i && (t[r.t - n - 1] |= (r.s & o) << s), t.t = r.t - n, t.clamp()
                }
            }, n.subTo = function (e, t) {
                for (var r = this, n = 0, i = 0, s = Math.min(e.t, r.t); n < s;) i += r[n] - e[n], t[n++] = i & r.DM, i >>= r.DB;
                if (e.t < r.t) {
                    for (i -= e.s; n < r.t;) i += r[n], t[n++] = i & r.DM, i >>= r.DB;
                    i += r.s
                } else {
                    for (i += r.s; n < e.t;) i -= e[n], t[n++] = i & r.DM, i >>= r.DB;
                    i -= e.s
                }
                t.s = i < 0 ? -1 : 0, i < -1 ? t[n++] = r.DV + i : 0 < i && (t[n++] = i), t.t = n, t.clamp()
            }, n.multiplyTo = function (e, t) {
                var r = this.abs(),
                    n = e.abs(),
                    i = r.t;
                for (t.t = i + n.t; 0 <= --i;) t[i] = 0;
                for (i = 0; i < n.t; ++i) t[i + r.t] = r.am(0, n[i], t, i, 0, r.t);
                t.s = 0, t.clamp(), this.s != e.s && g.ZERO.subTo(t, t)
            }, n.squareTo = function (e) {
                for (var t = this.abs(), r = e.t = 2 * t.t; 0 <= --r;) e[r] = 0;
                for (r = 0; r < t.t - 1; ++r) {
                    var n = t.am(r, t[r], e, 2 * r, 0, 1);
                    (e[r + t.t] += t.am(r + 1, 2 * t[r], e, 2 * r + 1, n, t.t - r - 1)) >= t.DV && (e[r + t.t] -= t.DV, e[r + t.t + 1] = 1)
                }
                0 < e.t && (e[e.t - 1] += t.am(r, t[r], e, 2 * r, 0, 1)), e.s = 0, e.clamp()
            }, n.divRemTo = function (e, t, r) {
                var n = this,
                    i = e.abs();
                if (!(i.t <= 0)) {
                    var s = n.abs();
                    if (s.t < i.t) return null != t && t.fromInt(0), void(null != r && n.copyTo(r));
                    null == r && (r = new g);
                    var o = new g,
                        a = n.s,
                        u = e.s,
                        f = n.DB - w(i[i.t - 1]);
                    0 < f ? (i.lShiftTo(f, o), s.lShiftTo(f, r)) : (i.copyTo(o), s.copyTo(r));
                    var c = o.t,
                        h = o[c - 1];
                    if (0 != h) {
                        var l = h * (1 << n.F1) + (1 < c ? o[c - 2] >> n.F2 : 0),
                            d = n.FV / l,
                            p = (1 << n.F1) / l,
                            _ = 1 << n.F2,
                            b = r.t,
                            m = b - c,
                            y = null == t ? new g : t;
                        for (o.dlShiftTo(m, y), 0 <= r.compareTo(y) && (r[r.t++] = 1, r.subTo(y, r)), g.ONE.dlShiftTo(c, y), y.subTo(o, o); o.t < c;) o[o.t++] = 0;
                        for (; 0 <= --m;) {
                            var v = r[--b] == h ? n.DM : Math.floor(r[b] * d + (r[b - 1] + _) * p);
                            if ((r[b] += o.am(0, v, r, m, 0, c)) < v)
                                for (o.dlShiftTo(m, y), r.subTo(y, r); r[b] < --v;) r.subTo(y, r)
                        }
                        null != t && (r.drShiftTo(c, t), a != u && g.ZERO.subTo(t, t)), r.t = c, r.clamp(), 0 < f && r.rShiftTo(f, r), a < 0 && g.ZERO.subTo(r, r)
                    }
                }
            }, n.invDigit = function () {
                if (this.t < 1) return 0;
                var e = this[0];
                if (0 == (1 & e)) return 0;
                var t = 3 & e;
                return 0 < (t = (t = (t = (t = t * (2 - (15 & e) * t) & 15) * (2 - (255 & e) * t) & 255) * (2 - ((65535 & e) * t & 65535)) & 65535) * (2 - e * t % this.DV) % this.DV) ? this.DV - t : -t
            }, n.isEven = function () {
                return 0 == (0 < this.t ? 1 & this[0] : this.s)
            }, n.exp = function (e, t) {
                if (4294967295 < e || e < 1) return g.ONE;
                var r = new g,
                    n = new g,
                    i = t.convert(this),
                    s = w(e) - 1;
                for (i.copyTo(r); 0 <= --s;)
                    if (t.sqrTo(r, n), 0 < (e & 1 << s)) t.mulTo(n, i, r);
                    else {
                        var o = r;
                        r = n, n = o
                    } return t.revert(r)
            }, n.toString = function (e) {
                var t, r = this;
                if (r.s < 0) return "-" + r.negate().toString(e);
                if (16 == e) t = 4;
                else if (8 == e) t = 3;
                else if (2 == e) t = 1;
                else if (32 == e) t = 5;
                else {
                    if (4 != e) return r.toRadix(e);
                    t = 2
                }
                var n, i = (1 << t) - 1,
                    s = !1,
                    o = "",
                    a = r.t,
                    u = r.DB - a * r.DB % t;
                if (0 < a--)
                    for (u < r.DB && 0 < (n = r[a] >> u) && (s = !0, o = f(n)); 0 <= a;) u < t ? (n = (r[a] & (1 << u) - 1) << t - u, n |= r[--a] >> (u += r.DB - t)) : (n = r[a] >> (u -= t) & i, u <= 0 && (u += r.DB, --a)), 0 < n && (s = !0), s && (o += f(n));
                return s ? o : "0"
            }, n.negate = function () {
                var e = new g;
                return g.ZERO.subTo(this, e), e
            }, n.abs = function () {
                return this.s < 0 ? this.negate() : this
            }, n.compareTo = function (e) {
                var t = this.s - e.s;
                if (0 != t) return t;
                var r = this.t;
                if (0 != (t = r - e.t)) return this.s < 0 ? -t : t;
                for (; 0 <= --r;)
                    if (0 != (t = this[r] - e[r])) return t;
                return 0
            }, n.bitLength = function () {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + w(this[this.t - 1] ^ this.s & this.DM)
            }, n.byteLength = function () {
                return this.bitLength() >> 3
            }, n.mod = function (e) {
                var t = new g;
                return this.abs().divRemTo(e, null, t), this.s < 0 && 0 < t.compareTo(g.ZERO) && e.subTo(t, t), t
            }, n.modPowInt = function (e, t) {
                var r;
                return r = e < 256 || t.isEven() ? new m(t) : new y(t), this.exp(e, r)
            }, x.prototype.convert = k, x.prototype.revert = k, x.prototype.mulTo = function (e, t, r) {
                e.multiplyTo(t, r)
            }, x.prototype.sqrTo = function (e, t) {
                e.squareTo(t)
            }, j.prototype.convert = function (e) {
                if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
                if (e.compareTo(this.m) < 0) return e;
                var t = new g;
                return e.copyTo(t), this.reduce(t), t
            }, j.prototype.revert = function (e) {
                return e
            }, j.prototype.reduce = function (e) {
                var t = this;
                for (e.drShiftTo(t.m.t - 1, t.r2), e.t > t.m.t + 1 && (e.t = t.m.t + 1, e.clamp()), t.mu.multiplyUpperTo(t.r2, t.m.t + 1, t.q3), t.m.multiplyLowerTo(t.q3, t.m.t + 1, t.r2); e.compareTo(t.r2) < 0;) e.dAddOffset(1, t.m.t + 1);
                for (e.subTo(t.r2, e); 0 <= e.compareTo(t.m);) e.subTo(t.m, e)
            }, j.prototype.mulTo = function (e, t, r) {
                e.multiplyTo(t, r), this.reduce(r)
            }, j.prototype.sqrTo = function (e, t) {
                e.squareTo(t), this.reduce(t)
            };
            var E = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                z = (1 << 26) / E[E.length - 1];
            n.chunkSize = function (e) {
                return Math.floor(Math.LN2 * this.DB / Math.log(e))
            }, n.toRadix = function (e) {
                if (null == e && (e = 10), 0 == this.signum() || e < 2 || 36 < e) return "0";
                var t = this.chunkSize(e),
                    r = Math.pow(e, t),
                    n = b(r),
                    i = new g,
                    s = new g,
                    o = "";
                for (this.divRemTo(n, i, s); 0 < i.signum();) o = (r + s.intValue()).toString(e).substr(1) + o, i.divRemTo(n, i, s);
                return s.intValue().toString(e) + o
            }, n.fromRadix = function (e, t) {
                var r = this;
                r.fromInt(0), null == t && (t = 10);
                for (var n = r.chunkSize(t), i = Math.pow(t, n), s = !1, o = 0, a = 0, u = 0; u < e.length; ++u) {
                    var f = c(e, u);
                    f < 0 ? "-" == e.charAt(u) && 0 == r.signum() && (s = !0) : (a = t * a + f, ++o >= n && (r.dMultiply(i), r.dAddOffset(a, 0), a = o = 0))
                }
                0 < o && (r.dMultiply(Math.pow(t, o)), r.dAddOffset(a, 0)), s && g.ZERO.subTo(r, r)
            }, n.fromNumber = function (e, t, r) {
                var n = this;
                if ("number" == typeof t)
                    if (e < 2) n.fromInt(1);
                    else
                        for (n.fromNumber(e, r), n.testBit(e - 1) || n.bitwiseTo(g.ONE.shiftLeft(e - 1), l, n), n.isEven() && n.dAddOffset(1, 0); !n.isProbablePrime(t);) n.dAddOffset(2, 0), n.bitLength() > e && n.subTo(g.ONE.shiftLeft(e - 1), n);
                else {
                    var i = new Array,
                        s = 7 & e;
                    i.length = 1 + (e >> 3), t.nextBytes(i), 0 < s ? i[0] &= (1 << s) - 1 : i[0] = 0, n.fromString(i, 256)
                }
            }, n.bitwiseTo = function (e, t, r) {
                var n, i, s = this,
                    o = Math.min(e.t, s.t);
                for (n = 0; n < o; ++n) r[n] = t(s[n], e[n]);
                if (e.t < s.t) {
                    for (i = e.s & s.DM, n = o; n < s.t; ++n) r[n] = t(s[n], i);
                    r.t = s.t
                } else {
                    for (i = s.s & s.DM, n = o; n < e.t; ++n) r[n] = t(i, e[n]);
                    r.t = e.t
                }
                r.s = t(s.s, e.s), r.clamp()
            }, n.changeBit = function (e, t) {
                var r = g.ONE.shiftLeft(e);
                return this.bitwiseTo(r, t, r), r
            }, n.addTo = function (e, t) {
                for (var r = this, n = 0, i = 0, s = Math.min(e.t, r.t); n < s;) i += r[n] + e[n], t[n++] = i & r.DM, i >>= r.DB;
                if (e.t < r.t) {
                    for (i += e.s; n < r.t;) i += r[n], t[n++] = i & r.DM, i >>= r.DB;
                    i += r.s
                } else {
                    for (i += r.s; n < e.t;) i += e[n], t[n++] = i & r.DM, i >>= r.DB;
                    i += e.s
                }
                t.s = i < 0 ? -1 : 0, 0 < i ? t[n++] = i : i < -1 && (t[n++] = r.DV + i), t.t = n, t.clamp()
            }, n.dMultiply = function (e) {
                this[this.t] = this.am(0, e - 1, this, 0, 0, this.t), ++this.t, this.clamp()
            }, n.dAddOffset = function (e, t) {
                if (0 != e) {
                    for (; this.t <= t;) this[this.t++] = 0;
                    for (this[t] += e; this[t] >= this.DV;) this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0), ++this[t]
                }
            }, n.multiplyLowerTo = function (e, t, r) {
                var n, i = Math.min(this.t + e.t, t);
                for (r.s = 0, r.t = i; 0 < i;) r[--i] = 0;
                for (n = r.t - this.t; i < n; ++i) r[i + this.t] = this.am(0, e[i], r, i, 0, this.t);
                for (n = Math.min(e.t, t); i < n; ++i) this.am(0, e[i], r, i, 0, t - i);
                r.clamp()
            }, n.multiplyUpperTo = function (e, t, r) {
                --t;
                var n = r.t = this.t + e.t - t;
                for (r.s = 0; 0 <= --n;) r[n] = 0;
                for (n = Math.max(t - this.t, 0); n < e.t; ++n) r[this.t + n - t] = this.am(t - n, e[n], r, 0, 0, this.t + n - t);
                r.clamp(), r.drShiftTo(1, r)
            }, n.modInt = function (e) {
                if (e <= 0) return 0;
                var t = this.DV % e,
                    r = this.s < 0 ? e - 1 : 0;
                if (0 < this.t)
                    if (0 == t) r = this[0] % e;
                    else
                        for (var n = this.t - 1; 0 <= n; --n) r = (t * r + this[n]) % e;
                return r
            }, n.millerRabin = function (e) {
                var t = this.subtract(g.ONE),
                    r = t.getLowestSetBit();
                if (r <= 0) return !1;
                var n = t.shiftRight(r);
                E.length < (e = e + 1 >> 1) && (e = E.length);
                for (var i = new g(null), s = [], o = 0; o < e; ++o) {
                    for (; u = E[Math.floor(Math.random() * E.length)], -1 != s.indexOf(u););
                    s.push(u), i.fromInt(u);
                    var a = i.modPow(n, this);
                    if (0 != a.compareTo(g.ONE) && 0 != a.compareTo(t)) {
                        for (var u = 1; u++ < r && 0 != a.compareTo(t);)
                            if (0 == (a = a.modPowInt(2, this)).compareTo(g.ONE)) return !1;
                        if (0 != a.compareTo(t)) return !1
                    }
                }
                return !0
            }, n.clone = function () {
                var e = new g;
                return this.copyTo(e), e
            }, n.intValue = function () {
                if (this.s < 0) {
                    if (1 == this.t) return this[0] - this.DV;
                    if (0 == this.t) return -1
                } else {
                    if (1 == this.t) return this[0];
                    if (0 == this.t) return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            }, n.byteValue = function () {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            }, n.shortValue = function () {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            }, n.signum = function () {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
            }, n.toByteArray = function () {
                var e = this,
                    t = e.t,
                    r = new Array;
                r[0] = e.s;
                var n, i = e.DB - t * e.DB % 8,
                    s = 0;
                if (0 < t--)
                    for (i < e.DB && (n = e[t] >> i) != (e.s & e.DM) >> i && (r[s++] = n | e.s << e.DB - i); 0 <= t;) i < 8 ? (n = (e[t] & (1 << i) - 1) << 8 - i, n |= e[--t] >> (i += e.DB - 8)) : (n = e[t] >> (i -= 8) & 255, i <= 0 && (i += e.DB, --t)), 0 != (128 & n) && (n |= -256), 0 === s && (128 & e.s) != (128 & n) && ++s, (0 < s || n != e.s) && (r[s++] = n);
                return r
            }, n.equals = function (e) {
                return 0 == this.compareTo(e)
            }, n.min = function (e) {
                return this.compareTo(e) < 0 ? this : e
            }, n.max = function (e) {
                return 0 < this.compareTo(e) ? this : e
            }, n.and = function (e) {
                var t = new g;
                return this.bitwiseTo(e, h, t), t
            }, n.or = function (e) {
                var t = new g;
                return this.bitwiseTo(e, l, t), t
            }, n.xor = function (e) {
                var t = new g;
                return this.bitwiseTo(e, d, t), t
            }, n.andNot = function (e) {
                var t = new g;
                return this.bitwiseTo(e, p, t), t
            }, n.not = function () {
                for (var e = new g, t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
                return e.t = this.t, e.s = ~this.s, e
            }, n.shiftLeft = function (e) {
                var t = new g;
                return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t
            }, n.shiftRight = function (e) {
                var t = new g;
                return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t
            }, n.getLowestSetBit = function () {
                for (var e = 0; e < this.t; ++e)
                    if (0 != this[e]) return e * this.DB + _(this[e]);
                return this.s < 0 ? this.t * this.DB : -1
            }, n.bitCount = function () {
                for (var e = 0, t = this.s & this.DM, r = 0; r < this.t; ++r) e += v(this[r] ^ t);
                return e
            }, n.testBit = function (e) {
                var t = Math.floor(e / this.DB);
                return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB)
            }, n.setBit = function (e) {
                return this.changeBit(e, l)
            }, n.clearBit = function (e) {
                return this.changeBit(e, p)
            }, n.flipBit = function (e) {
                return this.changeBit(e, d)
            }, n.add = function (e) {
                var t = new g;
                return this.addTo(e, t), t
            }, n.subtract = function (e) {
                var t = new g;
                return this.subTo(e, t), t
            }, n.multiply = function (e) {
                var t = new g;
                return this.multiplyTo(e, t), t
            }, n.divide = function (e) {
                var t = new g;
                return this.divRemTo(e, t, null), t
            }, n.remainder = function (e) {
                var t = new g;
                return this.divRemTo(e, null, t), t
            }, n.divideAndRemainder = function (e) {
                var t = new g,
                    r = new g;
                return this.divRemTo(e, t, r), new Array(t, r)
            }, n.modPow = function (e, t) {
                var r, n, i = e.bitLength(),
                    s = b(1);
                if (i <= 0) return s;
                r = i < 18 ? 1 : i < 48 ? 3 : i < 144 ? 4 : i < 768 ? 5 : 6, n = i < 8 ? new m(t) : t.isEven() ? new j(t) : new y(t);
                var o = new Array,
                    a = 3,
                    u = r - 1,
                    f = (1 << r) - 1;
                if (o[1] = n.convert(this), 1 < r) {
                    var c = new g;
                    for (n.sqrTo(o[1], c); a <= f;) o[a] = new g, n.mulTo(c, o[a - 2], o[a]), a += 2
                }
                var h, l, d = e.t - 1,
                    p = !0,
                    _ = new g;
                for (i = w(e[d]) - 1; 0 <= d;) {
                    for (u <= i ? h = e[d] >> i - u & f : (h = (e[d] & (1 << i + 1) - 1) << u - i, 0 < d && (h |= e[d - 1] >> this.DB + i - u)), a = r; 0 == (1 & h);) h >>= 1, --a;
                    if ((i -= a) < 0 && (i += this.DB, --d), p) o[h].copyTo(s), p = !1;
                    else {
                        for (; 1 < a;) n.sqrTo(s, _), n.sqrTo(_, s), a -= 2;
                        0 < a ? n.sqrTo(s, _) : (l = s, s = _, _ = l), n.mulTo(_, o[h], s)
                    }
                    for (; 0 <= d && 0 == (e[d] & 1 << i);) n.sqrTo(s, _), l = s, s = _, _ = l, --i < 0 && (i = this.DB - 1, --d)
                }
                return n.revert(s)
            }, n.modInverse = function (e) {
                var t = e.isEven();
                if (0 === this.signum()) throw new Error("division by zero");
                if (this.isEven() && t || 0 == e.signum()) return g.ZERO;
                for (var r = e.clone(), n = this.clone(), i = b(1), s = b(0), o = b(0), a = b(1); 0 != r.signum();) {
                    for (; r.isEven();) r.rShiftTo(1, r), t ? (i.isEven() && s.isEven() || (i.addTo(this, i), s.subTo(e, s)), i.rShiftTo(1, i)) : s.isEven() || s.subTo(e, s), s.rShiftTo(1, s);
                    for (; n.isEven();) n.rShiftTo(1, n), t ? (o.isEven() && a.isEven() || (o.addTo(this, o), a.subTo(e, a)), o.rShiftTo(1, o)) : a.isEven() || a.subTo(e, a), a.rShiftTo(1, a);
                    0 <= r.compareTo(n) ? (r.subTo(n, r), t && i.subTo(o, i), s.subTo(a, s)) : (n.subTo(r, n), t && o.subTo(i, o), a.subTo(s, a))
                }
                if (0 != n.compareTo(g.ONE)) return g.ZERO;
                for (; 0 <= a.compareTo(e);) a.subTo(e, a);
                for (; a.signum() < 0;) a.addTo(e, a);
                return a
            }, n.pow = function (e) {
                return this.exp(e, new x)
            }, n.gcd = function (e) {
                var t = this.s < 0 ? this.negate() : this.clone(),
                    r = e.s < 0 ? e.negate() : e.clone();
                if (t.compareTo(r) < 0) {
                    var n = t;
                    t = r, r = n
                }
                var i = t.getLowestSetBit(),
                    s = r.getLowestSetBit();
                if (s < 0) return t;
                for (i < s && (s = i), 0 < s && (t.rShiftTo(s, t), r.rShiftTo(s, r)); 0 < t.signum();) 0 < (i = t.getLowestSetBit()) && t.rShiftTo(i, t), 0 < (i = r.getLowestSetBit()) && r.rShiftTo(i, r), 0 <= t.compareTo(r) ? (t.subTo(r, t), t.rShiftTo(1, t)) : (r.subTo(t, r), r.rShiftTo(1, r));
                return 0 < s && r.lShiftTo(s, r), r
            }, n.isProbablePrime = function (e) {
                var t, r = this.abs();
                if (1 == r.t && r[0] <= E[E.length - 1]) {
                    for (t = 0; t < E.length; ++t)
                        if (r[0] == E[t]) return !0;
                    return !1
                }
                if (r.isEven()) return !1;
                for (t = 1; t < E.length;) {
                    for (var n = E[t], i = t + 1; i < E.length && n < z;) n *= E[i++];
                    for (n = r.modInt(n); t < i;)
                        if (n % E[t++] == 0) return !1
                }
                return r.millerRabin(e)
            }, n.square = function () {
                var e = new g;
                return this.squareTo(e), e
            }, g.ZERO = b(0), g.ONE = b(1), g.valueOf = b, t.exports = g
        }, {
            "../package.json": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/package.json"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/convert.js": [function (e, t, r) {
            (function (i) {
                var t = e("assert"),
                    r = e("./bigi");
                r.fromByteArrayUnsigned = function (e) {
                    return 128 & e[0] ? new r([0].concat(e)) : new r(e)
                }, r.prototype.toByteArrayUnsigned = function () {
                    var e = this.toByteArray();
                    return 0 === e[0] ? e.slice(1) : e
                }, r.fromDERInteger = function (e) {
                    return new r(e)
                }, r.prototype.toDERInteger = r.prototype.toByteArray, r.fromBuffer = function (e) {
                    if (128 & e[0]) {
                        var t = Array.prototype.slice.call(e);
                        return new r([0].concat(t))
                    }
                    return new r(e)
                }, r.fromHex = function (e) {
                    return "" === e ? r.ZERO : (t.equal(e, e.match(/^[A-Fa-f0-9]+/), "Invalid hex string"), t.equal(e.length % 2, 0, "Incomplete hex"), new r(e, 16))
                }, r.prototype.toBuffer = function (e) {
                    for (var t = this.toByteArrayUnsigned(), r = [], n = e - t.length; r.length < n;) r.push(0);
                    return new i(r.concat(t))
                }, r.prototype.toHex = function (e) {
                    return this.toBuffer(e).toString("hex")
                }
            }).call(this, e("buffer").Buffer)
        }, {
            "./bigi": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/bigi.js",
            assert: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/assert.js",
            buffer: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/index.js": [function (e, t, r) {
            var n = e("./bigi");
            e("./convert"), t.exports = n
        }, {
            "./bigi": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/bigi.js",
            "./convert": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/convert.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/package.json": [function (e, t, r) {
            t.exports = {
                name: "bigi",
                version: "1.4.2",
                description: "Big integers.",
                keywords: ["cryptography", "math", "bitcoin", "arbitrary", "precision", "arithmetic", "big", "integer", "int", "number", "biginteger", "bigint", "bignumber", "decimal", "float"],
                devDependencies: {
                    coveralls: "^2.11.2",
                    istanbul: "^0.3.5",
                    jshint: "^2.5.1",
                    mocha: "^2.1.0",
                    mochify: "^2.1.0"
                },
                repository: {
                    url: "https://github.com/cryptocoinjs/bigi",
                    type: "git"
                },
                main: "./lib/index.js",
                scripts: {
                    "browser-test": "./node_modules/.bin/mochify --wd -R spec",
                    test: "./node_modules/.bin/_mocha -- test/*.js",
                    jshint: "./node_modules/.bin/jshint --config jshint.json lib/*.js ; true",
                    unit: "./node_modules/.bin/mocha",
                    coverage: "./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter list test/*.js",
                    coveralls: "npm run-script coverage && node ./node_modules/.bin/coveralls < coverage/lcov.info"
                },
                dependencies: {},
                testling: {
                    files: "test/*.js",
                    harness: "mocha",
                    browsers: ["ie/9..latest", "firefox/latest", "chrome/latest", "safari/6.0..latest", "iphone/6.0..latest", "android-browser/4.2..latest"]
                }
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bignumber.js/bignumber.js": [function (e, r, t) {
            ! function (e) {
                "use strict";
                var t, I = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    A = Math.ceil,
                    O = Math.floor,
                    C = "[BigNumber Error] ",
                    M = C + "Number primitive has more than 15 significant digits: ",
                    L = 1e14,
                    q = 14,
                    D = 9007199254740991,
                    U = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    R = 1e7,
                    P = 1e9;

                function N(e) {
                    var t = 0 | e;
                    return 0 < e || e === t ? t : t - 1
                }

                function F(e) {
                    for (var t, r, n = 1, i = e.length, s = e[0] + ""; n < i;) {
                        for (t = e[n++] + "", r = q - t.length; r--; t = "0" + t);
                        s += t
                    }
                    for (i = s.length; 48 === s.charCodeAt(--i););
                    return s.slice(0, i + 1 || 1)
                }

                function K(e, t) {
                    var r, n, i = e.c,
                        s = t.c,
                        o = e.s,
                        a = t.s,
                        u = e.e,
                        f = t.e;
                    if (!o || !a) return null;
                    if (r = i && !i[0], n = s && !s[0], r || n) return r ? n ? 0 : -a : o;
                    if (o != a) return o;
                    if (r = o < 0, n = u == f, !i || !s) return n ? 0 : !i ^ r ? 1 : -1;
                    if (!n) return f < u ^ r ? 1 : -1;
                    for (a = (u = i.length) < (f = s.length) ? u : f, o = 0; o < a; o++)
                        if (i[o] != s[o]) return i[o] > s[o] ^ r ? 1 : -1;
                    return u == f ? 0 : f < u ^ r ? 1 : -1
                }

                function H(e, t, r, n) {
                    if (e < t || r < e || e !== (e < 0 ? A(e) : O(e))) throw Error(C + (n || "Argument") + ("number" == typeof e ? e < t || r < e ? " out of range: " : " not an integer: " : " not a primitive number: ") + e)
                }

                function V(e) {
                    return "[object Array]" == Object.prototype.toString.call(e)
                }

                function W(e) {
                    var t = e.c.length - 1;
                    return N(e.e / q) == t && e.c[t] % 2 != 0
                }

                function G(e, t) {
                    return (1 < e.length ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
                }

                function Z(e, t, r) {
                    var n, i;
                    if (t < 0) {
                        for (i = r + "."; ++t; i += r);
                        e = i + e
                    } else if (++t > (n = e.length)) {
                        for (i = r, t -= n; --t; i += r);
                        e += i
                    } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
                    return e
                }(t = function e(t) {
                    var y, h, l, r, f, o, a, u, c, d, n = B.prototype = {
                            constructor: B,
                            toString: null,
                            valueOf: null
                        },
                        _ = new B(1),
                        v = 20,
                        g = 4,
                        p = -7,
                        i = 21,
                        b = -1e7,
                        m = 1e7,
                        w = !1,
                        s = 1,
                        x = 0,
                        k = {
                            decimalSeparator: ".",
                            groupSeparator: ",",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            fractionGroupSeparator: " ",
                            fractionGroupSize: 0
                        },
                        j = "0123456789abcdefghijklmnopqrstuvwxyz";

                    function B(e, t) {
                        var r, n, i, s, o, a, u, f, c = this;
                        if (!(c instanceof B)) return new B(e, t);
                        if (null == t) {
                            if (e instanceof B) return c.s = e.s, c.e = e.e, void(c.c = (e = e.c) ? e.slice() : e);
                            if ((a = "number" == typeof e) && 0 * e == 0) {
                                if (c.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (s = 0, o = e; 10 <= o; o /= 10, s++);
                                    return c.e = s, void(c.c = [e])
                                }
                                f = e + ""
                            } else {
                                if (!I.test(f = e + "")) return l(c, f, a);
                                c.s = 45 == f.charCodeAt(0) ? (f = f.slice(1), -1) : 1
                            } - 1 < (s = f.indexOf(".")) && (f = f.replace(".", "")), 0 < (o = f.search(/e/i)) ? (s < 0 && (s = o), s += +f.slice(o + 1), f = f.substring(0, o)) : s < 0 && (s = f.length)
                        } else {
                            if (H(t, 2, j.length, "Base"), f = e + "", 10 == t) return T(c = new B(e instanceof B ? e : f), v + c.e + 1, g);
                            if (a = "number" == typeof e) {
                                if (0 * e != 0) return l(c, f, a, t);
                                if (c.s = 1 / e < 0 ? (f = f.slice(1), -1) : 1, B.DEBUG && 15 < f.replace(/^0\.0*|\./, "").length) throw Error(M + e);
                                a = !1
                            } else c.s = 45 === f.charCodeAt(0) ? (f = f.slice(1), -1) : 1;
                            for (r = j.slice(0, t), s = o = 0, u = f.length; o < u; o++)
                                if (r.indexOf(n = f.charAt(o)) < 0) {
                                    if ("." == n) {
                                        if (s < o) {
                                            s = u;
                                            continue
                                        }
                                    } else if (!i && (f == f.toUpperCase() && (f = f.toLowerCase()) || f == f.toLowerCase() && (f = f.toUpperCase()))) {
                                        i = !0, o = -1, s = 0;
                                        continue
                                    }
                                    return l(c, e + "", a, t)
                                } - 1 < (s = (f = h(f, t, 10, c.s)).indexOf(".")) ? f = f.replace(".", "") : s = f.length
                        }
                        for (o = 0; 48 === f.charCodeAt(o); o++);
                        for (u = f.length; 48 === f.charCodeAt(--u););
                        if (f = f.slice(o, ++u)) {
                            if (u -= o, a && B.DEBUG && 15 < u && (D < e || e !== O(e))) throw Error(M + c.s * e);
                            if (m < (s = s - o - 1)) c.c = c.e = null;
                            else if (s < b) c.c = [c.e = 0];
                            else {
                                if (c.e = s, c.c = [], o = (s + 1) % q, s < 0 && (o += q), o < u) {
                                    for (o && c.c.push(+f.slice(0, o)), u -= q; o < u;) c.c.push(+f.slice(o, o += q));
                                    f = f.slice(o), o = q - f.length
                                } else o -= u;
                                for (; o--; f += "0");
                                c.c.push(+f)
                            }
                        } else c.c = [c.e = 0]
                    }

                    function E(e, t, r, n) {
                        var i, s, o, a, u;
                        if (null == r ? r = g : H(r, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], o = e.e, null == t) u = F(e.c), u = 1 == n || 2 == n && o <= p ? G(u, o) : Z(u, o, "0");
                        else if (s = (e = T(new B(e), t, r)).e, a = (u = F(e.c)).length, 1 == n || 2 == n && (t <= s || s <= p)) {
                            for (; a < t; u += "0", a++);
                            u = G(u, s)
                        } else if (t -= o, u = Z(u, s, "0"), a < s + 1) {
                            if (0 < --t)
                                for (u += "."; t--; u += "0");
                        } else if (0 < (t += s - a))
                            for (s + 1 == a && (u += "."); t--; u += "0");
                        return e.s < 0 && i ? "-" + u : u
                    }

                    function z(e, t) {
                        var r, n, i = 0;
                        for (V(e[0]) && (e = e[0]), r = new B(e[0]); ++i < e.length;) {
                            if (!(n = new B(e[i])).s) {
                                r = n;
                                break
                            }
                            t.call(r, n) && (r = n)
                        }
                        return r
                    }

                    function S(e, t, r) {
                        for (var n = 1, i = t.length; !t[--i]; t.pop());
                        for (i = t[0]; 10 <= i; i /= 10, n++);
                        return (r = n + r * q - 1) > m ? e.c = e.e = null : e.c = r < b ? [e.e = 0] : (e.e = r, t), e
                    }

                    function T(e, t, r, n) {
                        var i, s, o, a, u, f, c, h = e.c,
                            l = U;
                        if (h) {
                            e: {
                                for (i = 1, a = h[0]; 10 <= a; a /= 10, i++);
                                if ((s = t - i) < 0) s += q,
                                o = t,
                                c = (u = h[f = 0]) / l[i - o - 1] % 10 | 0;
                                else if ((f = A((s + 1) / q)) >= h.length) {
                                    if (!n) break e;
                                    for (; h.length <= f; h.push(0));
                                    u = c = 0, o = (s %= q) - q + (i = 1)
                                } else {
                                    for (u = a = h[f], i = 1; 10 <= a; a /= 10, i++);
                                    c = (o = (s %= q) - q + i) < 0 ? 0 : u / l[i - o - 1] % 10 | 0
                                }
                                if (n = n || t < 0 || null != h[f + 1] || (o < 0 ? u : u % l[i - o - 1]), n = r < 4 ? (c || n) && (0 == r || r == (e.s < 0 ? 3 : 2)) : 5 < c || 5 == c && (4 == r || n || 6 == r && (0 < s ? 0 < o ? u / l[i - o] : 0 : h[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !h[0]) return h.length = 0,
                                n ? (t -= e.e + 1, h[0] = l[(q - t % q) % q], e.e = -t || 0) : h[0] = e.e = 0,
                                e;
                                if (0 == s ? (h.length = f, a = 1, f--) : (h.length = f + 1, a = l[q - s], h[f] = 0 < o ? O(u / l[i - o] % l[o]) * a : 0), n)
                                    for (;;) {
                                        if (0 == f) {
                                            for (s = 1, o = h[0]; 10 <= o; o /= 10, s++);
                                            for (o = h[0] += a, a = 1; 10 <= o; o /= 10, a++);
                                            s != a && (e.e++, h[0] == L && (h[0] = 1));
                                            break
                                        }
                                        if (h[f] += a, h[f] != L) break;
                                        h[f--] = 0, a = 1
                                    }
                                for (s = h.length; 0 === h[--s]; h.pop());
                            }
                            e.e > m ? e.c = e.e = null : e.e < b && (e.c = [e.e = 0])
                        }
                        return e
                    }
                    return B.clone = e, B.ROUND_UP = 0, B.ROUND_DOWN = 1, B.ROUND_CEIL = 2, B.ROUND_FLOOR = 3, B.ROUND_HALF_UP = 4, B.ROUND_HALF_DOWN = 5, B.ROUND_HALF_EVEN = 6, B.ROUND_HALF_CEIL = 7, B.ROUND_HALF_FLOOR = 8, B.EUCLID = 9, B.config = B.set = function (e) {
                        var t, r;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(C + "Object expected: " + e);
                            if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (H(r = e[t], 0, P, t), v = r), e.hasOwnProperty(t = "ROUNDING_MODE") && (H(r = e[t], 0, 8, t), g = r), e.hasOwnProperty(t = "EXPONENTIAL_AT") && (V(r = e[t]) ? (H(r[0], -P, 0, t), H(r[1], 0, P, t), p = r[0], i = r[1]) : (H(r, -P, P, t), p = -(i = r < 0 ? -r : r))), e.hasOwnProperty(t = "RANGE"))
                                if (V(r = e[t])) H(r[0], -P, -1, t), H(r[1], 1, P, t), b = r[0], m = r[1];
                                else {
                                    if (H(r, -P, P, t), !r) throw Error(C + t + " cannot be zero: " + r);
                                    b = -(m = r < 0 ? -r : r)
                                } if (e.hasOwnProperty(t = "CRYPTO")) {
                                if ((r = e[t]) !== !!r) throw Error(C + t + " not true or false: " + r);
                                if (r) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw w = !r, Error(C + "crypto unavailable");
                                    w = r
                                } else w = r
                            }
                            if (e.hasOwnProperty(t = "MODULO_MODE") && (H(r = e[t], 0, 9, t), s = r), e.hasOwnProperty(t = "POW_PRECISION") && (H(r = e[t], 0, P, t), x = r), e.hasOwnProperty(t = "FORMAT")) {
                                if ("object" != typeof (r = e[t])) throw Error(C + t + " not an object: " + r);
                                k = r
                            }
                            if (e.hasOwnProperty(t = "ALPHABET")) {
                                if ("string" != typeof (r = e[t]) || /^.$|\.|(.).*\1/.test(r)) throw Error(C + t + " invalid: " + r);
                                j = r
                            }
                        }
                        return {
                            DECIMAL_PLACES: v,
                            ROUNDING_MODE: g,
                            EXPONENTIAL_AT: [p, i],
                            RANGE: [b, m],
                            CRYPTO: w,
                            MODULO_MODE: s,
                            POW_PRECISION: x,
                            FORMAT: k,
                            ALPHABET: j
                        }
                    }, B.isBigNumber = function (e) {
                        return e instanceof B || e && !0 === e._isBigNumber || !1
                    }, B.maximum = B.max = function () {
                        return z(arguments, n.lt)
                    }, B.minimum = B.min = function () {
                        return z(arguments, n.gt)
                    }, B.random = (r = 9007199254740992, f = Math.random() * r & 2097151 ? function () {
                        return O(Math.random() * r)
                    } : function () {
                        return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                    }, function (e) {
                        var t, r, n, i, s, o = 0,
                            a = [],
                            u = new B(_);
                        if (null == e ? e = v : H(e, 0, P), i = A(e / q), w)
                            if (crypto.getRandomValues) {
                                for (t = crypto.getRandomValues(new Uint32Array(i *= 2)); o < i;) 9e15 <= (s = 131072 * t[o] + (t[o + 1] >>> 11)) ? (r = crypto.getRandomValues(new Uint32Array(2)), t[o] = r[0], t[o + 1] = r[1]) : (a.push(s % 1e14), o += 2);
                                o = i / 2
                            } else {
                                if (!crypto.randomBytes) throw w = !1, Error(C + "crypto unavailable");
                                for (t = crypto.randomBytes(i *= 7); o < i;) 9e15 <= (s = 281474976710656 * (31 & t[o]) + 1099511627776 * t[o + 1] + 4294967296 * t[o + 2] + 16777216 * t[o + 3] + (t[o + 4] << 16) + (t[o + 5] << 8) + t[o + 6]) ? crypto.randomBytes(7).copy(t, o) : (a.push(s % 1e14), o += 7);
                                o = i / 7
                            } if (!w)
                            for (; o < i;)(s = f()) < 9e15 && (a[o++] = s % 1e14);
                        for (i = a[--o], e %= q, i && e && (s = U[q - e], a[o] = O(i / s) * s); 0 === a[o]; a.pop(), o--);
                        if (o < 0) a = [n = 0];
                        else {
                            for (n = -1; 0 === a[0]; a.splice(0, 1), n -= q);
                            for (o = 1, s = a[0]; 10 <= s; s /= 10, o++);
                            o < q && (n -= q - o)
                        }
                        return u.e = n, u.c = a, u
                    }), h = function () {
                        var b = "0123456789";

                        function m(e, t, r, n) {
                            for (var i, s, o = [0], a = 0, u = e.length; a < u;) {
                                for (s = o.length; s--; o[s] *= t);
                                for (o[0] += n.indexOf(e.charAt(a++)), i = 0; i < o.length; i++) o[i] > r - 1 && (null == o[i + 1] && (o[i + 1] = 0), o[i + 1] += o[i] / r | 0, o[i] %= r)
                            }
                            return o.reverse()
                        }
                        return function (e, t, r, n, i) {
                            var s, o, a, u, f, c, h, l, d = e.indexOf("."),
                                p = v,
                                _ = g;
                            for (0 <= d && (u = x, x = 0, e = e.replace(".", ""), c = (l = new B(t)).pow(e.length - d), x = u, l.c = m(Z(F(c.c), c.e, "0"), 10, r, b), l.e = l.c.length), a = u = (h = m(e, t, r, i ? (s = j, b) : (s = b, j))).length; 0 == h[--u]; h.pop());
                            if (!h[0]) return s.charAt(0);
                            if (d < 0 ? --a : (c.c = h, c.e = a, c.s = n, h = (c = y(c, l, p, _, r)).c, f = c.r, a = c.e), d = h[o = a + p + 1], u = r / 2, f = f || o < 0 || null != h[o + 1], f = _ < 4 ? (null != d || f) && (0 == _ || _ == (c.s < 0 ? 3 : 2)) : u < d || d == u && (4 == _ || f || 6 == _ && 1 & h[o - 1] || _ == (c.s < 0 ? 8 : 7)), o < 1 || !h[0]) e = f ? Z(s.charAt(1), -p, s.charAt(0)) : s.charAt(0);
                            else {
                                if (h.length = o, f)
                                    for (--r; ++h[--o] > r;) h[o] = 0, o || (++a, h = [1].concat(h));
                                for (u = h.length; !h[--u];);
                                for (d = 0, e = ""; d <= u; e += s.charAt(h[d++]));
                                e = Z(e, a, s.charAt(0))
                            }
                            return e
                        }
                    }(), y = function () {
                        function E(e, t, r) {
                            var n, i, s, o, a = 0,
                                u = e.length,
                                f = t % R,
                                c = t / R | 0;
                            for (e = e.slice(); u--;) a = ((i = f * (s = e[u] % R) + (n = c * s + (o = e[u] / R | 0) * f) % R * R + a) / r | 0) + (n / R | 0) + c * o, e[u] = i % r;
                            return a && (e = [a].concat(e)), e
                        }

                        function z(e, t, r, n) {
                            var i, s;
                            if (r != n) s = n < r ? 1 : -1;
                            else
                                for (i = s = 0; i < r; i++)
                                    if (e[i] != t[i]) {
                                        s = e[i] > t[i] ? 1 : -1;
                                        break
                                    } return s
                        }

                        function S(e, t, r, n) {
                            for (var i = 0; r--;) e[r] -= i, i = e[r] < t[r] ? 1 : 0, e[r] = i * n + e[r] - t[r];
                            for (; !e[0] && 1 < e.length; e.splice(0, 1));
                        }
                        return function (e, t, r, n, i) {
                            var s, o, a, u, f, c, h, l, d, p, _, b, m, y, v, g, w, x = e.s == t.s ? 1 : -1,
                                k = e.c,
                                j = t.c;
                            if (!(k && k[0] && j && j[0])) return new B(e.s && t.s && (k ? !j || k[0] != j[0] : j) ? k && 0 == k[0] || !j ? 0 * x : x / 0 : NaN);
                            for (d = (l = new B(x)).c = [], x = r + (o = e.e - t.e) + 1, i || (i = L, o = N(e.e / q) - N(t.e / q), x = x / q | 0), a = 0; j[a] == (k[a] || 0); a++);
                            if (j[a] > (k[a] || 0) && o--, x < 0) d.push(1), u = !0;
                            else {
                                for (y = k.length, g = j.length, x += 2, 1 < (f = O(i / (j[a = 0] + 1))) && (j = E(j, f, i), k = E(k, f, i), g = j.length, y = k.length), m = g, _ = (p = k.slice(0, g)).length; _ < g; p[_++] = 0);
                                w = j.slice(), w = [0].concat(w), v = j[0], j[1] >= i / 2 && v++;
                                do {
                                    if (f = 0, (s = z(j, p, g, _)) < 0) {
                                        if (b = p[0], g != _ && (b = b * i + (p[1] || 0)), 1 < (f = O(b / v)))
                                            for (i <= f && (f = i - 1), h = (c = E(j, f, i)).length, _ = p.length; 1 == z(c, p, h, _);) f--, S(c, g < h ? w : j, h, i), h = c.length, s = 1;
                                        else 0 == f && (s = f = 1), h = (c = j.slice()).length;
                                        if (h < _ && (c = [0].concat(c)), S(p, c, _, i), _ = p.length, -1 == s)
                                            for (; z(j, p, g, _) < 1;) f++, S(p, g < _ ? w : j, _, i), _ = p.length
                                    } else 0 === s && (f++, p = [0]);
                                    d[a++] = f, p[0] ? p[_++] = k[m] || 0 : (p = [k[m]], _ = 1)
                                } while ((m++ < y || null != p[0]) && x--);
                                u = null != p[0], d[0] || d.splice(0, 1)
                            }
                            if (i == L) {
                                for (a = 1, x = d[0]; 10 <= x; x /= 10, a++);
                                T(l, r + (l.e = a + o * q - 1) + 1, n, u)
                            } else l.e = o, l.r = +u;
                            return l
                        }
                    }(), o = /^(-?)0([xbo])(?=\w[\w.]*$)/i, a = /^([^.]+)\.$/, u = /^\.([^.]+)$/, c = /^-?(Infinity|NaN)$/, d = /^\s*\+(?=[\w.])|^\s+|\s+$/g, l = function (e, t, r, n) {
                        var i, s = r ? t : t.replace(d, "");
                        if (c.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1, e.c = e.e = null;
                        else {
                            if (!r && (s = s.replace(o, function (e, t, r) {
                                    return i = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8, n && n != i ? e : t
                                }), n && (i = n, s = s.replace(a, "$1").replace(u, "0.$1")), t != s)) return new B(s, i);
                            if (B.DEBUG) throw Error(C + "Not a" + (n ? " base " + n : "") + " number: " + t);
                            e.c = e.e = e.s = null
                        }
                    }, n.absoluteValue = n.abs = function () {
                        var e = new B(this);
                        return e.s < 0 && (e.s = 1), e
                    }, n.comparedTo = function (e, t) {
                        return K(this, new B(e, t))
                    }, n.decimalPlaces = n.dp = function (e, t) {
                        var r, n, i;
                        if (null != e) return H(e, 0, P), null == t ? t = g : H(t, 0, 8), T(new B(this), e + this.e + 1, t);
                        if (!(r = this.c)) return null;
                        if (n = ((i = r.length - 1) - N(this.e / q)) * q, i = r[i])
                            for (; i % 10 == 0; i /= 10, n--);
                        return n < 0 && (n = 0), n
                    }, n.dividedBy = n.div = function (e, t) {
                        return y(this, new B(e, t), v, g)
                    }, n.dividedToIntegerBy = n.idiv = function (e, t) {
                        return y(this, new B(e, t), 0, 1)
                    }, n.exponentiatedBy = n.pow = function (e, t) {
                        var r, n, i, s, o, a, u, f = this;
                        if ((e = new B(e)).c && !e.isInteger()) throw Error(C + "Exponent not an integer: " + e);
                        if (null != t && (t = new B(t)), s = 14 < e.e, !f.c || !f.c[0] || 1 == f.c[0] && !f.e && 1 == f.c.length || !e.c || !e.c[0]) return u = new B(Math.pow(+f.valueOf(), s ? 2 - W(e) : +e)), t ? u.mod(t) : u;
                        if (o = e.s < 0, t) {
                            if (t.c ? !t.c[0] : !t.s) return new B(NaN);
                            (n = !o && f.isInteger() && t.isInteger()) && (f = f.mod(t))
                        } else {
                            if (9 < e.e && (0 < f.e || f.e < -1 || (0 == f.e ? 1 < f.c[0] || s && 24e7 <= f.c[1] : f.c[0] < 8e13 || s && f.c[0] <= 9999975e7))) return i = f.s < 0 && W(e) ? -0 : 0, -1 < f.e && (i = 1 / i), new B(o ? 1 / i : i);
                            x && (i = A(x / q + 2))
                        }
                        for (a = s ? (r = new B(.5), W(e)) : e % 2, o && (e.s = 1), u = new B(_);;) {
                            if (a) {
                                if (!(u = u.times(f)).c) break;
                                i ? u.c.length > i && (u.c.length = i) : n && (u = u.mod(t))
                            }
                            if (s) {
                                if (T(e = e.times(r), e.e + 1, 1), !e.c[0]) break;
                                s = 14 < e.e, a = W(e)
                            } else {
                                if (!(e = O(e / 2))) break;
                                a = e % 2
                            }
                            f = f.times(f), i ? f.c && f.c.length > i && (f.c.length = i) : n && (f = f.mod(t))
                        }
                        return n ? u : (o && (u = _.div(u)), t ? u.mod(t) : i ? T(u, x, g, void 0) : u)
                    }, n.integerValue = function (e) {
                        var t = new B(this);
                        return null == e ? e = g : H(e, 0, 8), T(t, t.e + 1, e)
                    }, n.isEqualTo = n.eq = function (e, t) {
                        return 0 === K(this, new B(e, t))
                    }, n.isFinite = function () {
                        return !!this.c
                    }, n.isGreaterThan = n.gt = function (e, t) {
                        return 0 < K(this, new B(e, t))
                    }, n.isGreaterThanOrEqualTo = n.gte = function (e, t) {
                        return 1 === (t = K(this, new B(e, t))) || 0 === t
                    }, n.isInteger = function () {
                        return !!this.c && N(this.e / q) > this.c.length - 2
                    }, n.isLessThan = n.lt = function (e, t) {
                        return K(this, new B(e, t)) < 0
                    }, n.isLessThanOrEqualTo = n.lte = function (e, t) {
                        return -1 === (t = K(this, new B(e, t))) || 0 === t
                    }, n.isNaN = function () {
                        return !this.s
                    }, n.isNegative = function () {
                        return this.s < 0
                    }, n.isPositive = function () {
                        return 0 < this.s
                    }, n.isZero = function () {
                        return !!this.c && 0 == this.c[0]
                    }, n.minus = function (e, t) {
                        var r, n, i, s, o = this,
                            a = o.s;
                        if (t = (e = new B(e, t)).s, !a || !t) return new B(NaN);
                        if (a != t) return e.s = -t, o.plus(e);
                        var u = o.e / q,
                            f = e.e / q,
                            c = o.c,
                            h = e.c;
                        if (!u || !f) {
                            if (!c || !h) return c ? (e.s = -t, e) : new B(h ? o : NaN);
                            if (!c[0] || !h[0]) return h[0] ? (e.s = -t, e) : new B(c[0] ? o : 3 == g ? -0 : 0)
                        }
                        if (u = N(u), f = N(f), c = c.slice(), a = u - f) {
                            for ((i = (s = a < 0) ? (a = -a, c) : (f = u, h)).reverse(), t = a; t--; i.push(0));
                            i.reverse()
                        } else
                            for (n = (s = (a = c.length) < (t = h.length)) ? a : t, a = t = 0; t < n; t++)
                                if (c[t] != h[t]) {
                                    s = c[t] < h[t];
                                    break
                                } if (s && (i = c, c = h, h = i, e.s = -e.s), 0 < (t = (n = h.length) - (r = c.length)))
                            for (; t--; c[r++] = 0);
                        for (t = L - 1; a < n;) {
                            if (c[--n] < h[n]) {
                                for (r = n; r && !c[--r]; c[r] = t);
                                --c[r], c[n] += L
                            }
                            c[n] -= h[n]
                        }
                        for (; 0 == c[0]; c.splice(0, 1), --f);
                        return c[0] ? S(e, c, f) : (e.s = 3 == g ? -1 : 1, e.c = [e.e = 0], e)
                    }, n.modulo = n.mod = function (e, t) {
                        var r, n, i = this;
                        return e = new B(e, t), !i.c || !e.s || e.c && !e.c[0] ? new B(NaN) : !e.c || i.c && !i.c[0] ? new B(i) : (9 == s ? (n = e.s, e.s = 1, r = y(i, e, 0, 3), e.s = n, r.s *= n) : r = y(i, e, 0, s), (e = i.minus(r.times(e))).c[0] || 1 != s || (e.s = i.s), e)
                    }, n.multipliedBy = n.times = function (e, t) {
                        var r, n, i, s, o, a, u, f, c, h, l, d, p, _, b, m = this,
                            y = m.c,
                            v = (e = new B(e, t)).c;
                        if (!(y && v && y[0] && v[0])) return !m.s || !e.s || y && !y[0] && !v || v && !v[0] && !y ? e.c = e.e = e.s = null : (e.s *= m.s, y && v ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (n = N(m.e / q) + N(e.e / q), e.s *= m.s, (u = y.length) < (h = v.length) && (p = y, y = v, v = p, i = u, u = h, h = i), i = u + h, p = []; i--; p.push(0));
                        for (_ = L, b = R, i = h; 0 <= --i;) {
                            for (r = 0, l = v[i] % b, d = v[i] / b | 0, s = i + (o = u); i < s;) r = ((f = l * (f = y[--o] % b) + (a = d * f + (c = y[o] / b | 0) * l) % b * b + p[s] + r) / _ | 0) + (a / b | 0) + d * c, p[s--] = f % _;
                            p[s] = r
                        }
                        return r ? ++n : p.splice(0, 1), S(e, p, n)
                    }, n.negated = function () {
                        var e = new B(this);
                        return e.s = -e.s || null, e
                    }, n.plus = function (e, t) {
                        var r, n = this,
                            i = n.s;
                        if (t = (e = new B(e, t)).s, !i || !t) return new B(NaN);
                        if (i != t) return e.s = -t, n.minus(e);
                        var s = n.e / q,
                            o = e.e / q,
                            a = n.c,
                            u = e.c;
                        if (!s || !o) {
                            if (!a || !u) return new B(i / 0);
                            if (!a[0] || !u[0]) return u[0] ? e : new B(a[0] ? n : 0 * i)
                        }
                        if (s = N(s), o = N(o), a = a.slice(), i = s - o) {
                            for ((r = 0 < i ? (o = s, u) : (i = -i, a)).reverse(); i--; r.push(0));
                            r.reverse()
                        }
                        for ((i = a.length) - (t = u.length) < 0 && (r = u, u = a, a = r, t = i), i = 0; t;) i = (a[--t] = a[t] + u[t] + i) / L | 0, a[t] = L === a[t] ? 0 : a[t] % L;
                        return i && (a = [i].concat(a), ++o), S(e, a, o)
                    }, n.precision = n.sd = function (e, t) {
                        var r, n, i;
                        if (null != e && e !== !!e) return H(e, 1, P), null == t ? t = g : H(t, 0, 8), T(new B(this), e, t);
                        if (!(r = this.c)) return null;
                        if (n = (i = r.length - 1) * q + 1, i = r[i]) {
                            for (; i % 10 == 0; i /= 10, n--);
                            for (i = r[0]; 10 <= i; i /= 10, n++);
                        }
                        return e && this.e + 1 > n && (n = this.e + 1), n
                    }, n.shiftedBy = function (e) {
                        return H(e, -D, D), this.times("1e" + e)
                    }, n.squareRoot = n.sqrt = function () {
                        var e, t, r, n, i, s = this,
                            o = s.c,
                            a = s.s,
                            u = s.e,
                            f = v + 4,
                            c = new B("0.5");
                        if (1 !== a || !o || !o[0]) return new B(!a || a < 0 && (!o || o[0]) ? NaN : o ? s : 1 / 0);
                        if ((r = 0 == (a = Math.sqrt(+s)) || a == 1 / 0 ? (((t = F(o)).length + u) % 2 == 0 && (t += "0"), a = Math.sqrt(t), u = N((u + 1) / 2) - (u < 0 || u % 2), new B(t = a == 1 / 0 ? "1e" + u : (t = a.toExponential()).slice(0, t.indexOf("e") + 1) + u)) : new B(a + "")).c[0])
                            for ((a = (u = r.e) + f) < 3 && (a = 0);;)
                                if (i = r, r = c.times(i.plus(y(s, i, f, 1))), F(i.c).slice(0, a) === (t = F(r.c)).slice(0, a)) {
                                    if (r.e < u && --a, "9999" != (t = t.slice(a - 3, a + 1)) && (n || "4999" != t)) {
                                        +t && (+t.slice(1) || "5" != t.charAt(0)) || (T(r, r.e + v + 2, 1), e = !r.times(r).eq(s));
                                        break
                                    }
                                    if (!n && (T(i, i.e + v + 2, 0), i.times(i).eq(s))) {
                                        r = i;
                                        break
                                    }
                                    f += 4, a += 4, n = 1
                                } return T(r, r.e + v + 1, g, e)
                    }, n.toExponential = function (e, t) {
                        return null != e && (H(e, 0, P), e++), E(this, e, t, 1)
                    }, n.toFixed = function (e, t) {
                        return null != e && (H(e, 0, P), e = e + this.e + 1), E(this, e, t)
                    }, n.toFormat = function (e, t) {
                        var r = this.toFixed(e, t);
                        if (this.c) {
                            var n, i = r.split("."),
                                s = +k.groupSize,
                                o = +k.secondaryGroupSize,
                                a = k.groupSeparator,
                                u = i[0],
                                f = i[1],
                                c = this.s < 0,
                                h = c ? u.slice(1) : u,
                                l = h.length;
                            if (o && (n = s, s = o, l -= o = n), 0 < s && 0 < l) {
                                for (n = l % s || s, u = h.substr(0, n); n < l; n += s) u += a + h.substr(n, s);
                                0 < o && (u += a + h.slice(n)), c && (u = "-" + u)
                            }
                            r = f ? u + k.decimalSeparator + ((o = +k.fractionGroupSize) ? f.replace(new RegExp("\\d{" + o + "}\\B", "g"), "$&" + k.fractionGroupSeparator) : f) : u
                        }
                        return r
                    }, n.toFraction = function (e) {
                        var t, r, n, i, s, o, a, u, f, c, h, l, d = this,
                            p = d.c;
                        if (null != e && (!(u = new B(e)).isInteger() && (u.c || 1 !== u.s) || u.lt(_))) throw Error(C + "Argument " + (u.isInteger() ? "out of range: " : "not an integer: ") + e);
                        if (!p) return d.toString();
                        for (r = new B(_), c = n = new B(_), i = f = new B(_), l = F(p), o = r.e = l.length - d.e - 1, r.c[0] = U[(a = o % q) < 0 ? q + a : a], e = !e || 0 < u.comparedTo(r) ? 0 < o ? r : c : u, a = m, m = 1 / 0, u = new B(l), f.c[0] = 0; h = y(u, r, 0, 1), 1 != (s = n.plus(h.times(i))).comparedTo(e);) n = i, i = s, c = f.plus(h.times(s = c)), f = s, r = u.minus(h.times(s = r)), u = s;
                        return s = y(e.minus(n), i, 0, 1), f = f.plus(s.times(c)), n = n.plus(s.times(i)), f.s = c.s = d.s, t = y(c, i, o *= 2, g).minus(d).abs().comparedTo(y(f, n, o, g).minus(d).abs()) < 1 ? [c.toString(), i.toString()] : [f.toString(), n.toString()], m = a, t
                    }, n.toNumber = function () {
                        return +this
                    }, n.toPrecision = function (e, t) {
                        return null != e && H(e, 1, P), E(this, e, t, 2)
                    }, n.toString = function (e) {
                        var t, r = this.s,
                            n = this.e;
                        return null === n ? r ? (t = "Infinity", r < 0 && (t = "-" + t)) : t = "NaN" : (t = F(this.c), t = null == e ? n <= p || i <= n ? G(t, n) : Z(t, n, "0") : (H(e, 2, j.length, "Base"), h(Z(t, n, "0"), 10, e, r, !0)), r < 0 && this.c[0] && (t = "-" + t)), t
                    }, n.valueOf = n.toJSON = function () {
                        var e, t = this.e;
                        return null === t ? this.toString() : (e = F(this.c), e = t <= p || i <= t ? G(e, t) : Z(e, t, "0"), this.s < 0 ? "-" + e : e)
                    }, n._isBigNumber = !0, null != t && B.set(t), B
                }()).default = t.BigNumber = t, void 0 !== r && r.exports ? r.exports = t : (e || (e = "undefined" != typeof self && self ? self : window), e.BigNumber = t)
            }(this)
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/index.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0, r.Manager = r.ChainConfig = r.Apis = void 0;
            var n = o(e("./src/ApiInstances")),
                i = o(e("./src/ConnectionManager")),
                s = o(e("./src/ChainConfig"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            r.Apis = n.default, r.ChainConfig = s.default, r.Manager = i.default
        }, {
            "./src/ApiInstances": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/src/ApiInstances.js",
            "./src/ChainConfig": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/src/ChainConfig.js",
            "./src/ConnectionManager": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/src/ConnectionManager.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/src/ApiInstances.js": [function (r, n, f) {
            (function (e) {
                "use strict";
                f.__esModule = !0;
                var i = t(r("./ChainWebSocket")),
                    s = t(r("./GrapheneApi")),
                    o = t(r("./ChainConfig"));

                function t(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                if (e) e.inst = "";
                else;
                var a = !1;
                f.default = {
                    setRpcConnectionStatusCallback: function (e) {
                        this.statusCb = e, inst && inst.setRpcConnectionStatusCallback(e)
                    },
                    setAutoReconnect: function (e) {
                        a = e
                    },
                    reset: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "ws://localhost:8090",
                            t = arguments[1],
                            r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 4e3,
                            n = this,
                            i = arguments[3],
                            s = arguments[4];
                        return this.close().then(function () {
                            return inst = new u, inst.setRpcConnectionStatusCallback(n.statusCb), inst && t && inst.connect(e, r, i, s), inst
                        })
                    },
                    instance: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "ws://localhost:8090",
                            t = arguments[1],
                            r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 4e3,
                            n = arguments[3],
                            i = arguments[4];
                        return inst || (inst = new u, inst.setRpcConnectionStatusCallback(this.statusCb)), inst && t && inst.connect(e, r, n), i && (inst.closeCb = i), inst
                    },
                    chainId: function () {
                        return Apis.instance().chain_id
                    },
                    close: function () {
                        return inst ? new Promise(function (e) {
                            inst.close().then(function () {
                                inst = null, e()
                            })
                        }) : Promise.resolve()
                    }
                };
                var u = function () {
                    function e() {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    return e.prototype.connect = function (t, e) {
                        var r = this,
                            n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {
                                enableCrypto: !1,
                                enableOrders: !1
                            };
                        this.url = t;
                        if ("undefined" != typeof window && window.location && "https:" === window.location.protocol && t.indexOf("wss://") < 0) throw new Error("Secure domains require wss connection");
                        this.ws_rpc && (this.ws_rpc.statusCb = null, this.ws_rpc.keepAliveCb = null, this.ws_rpc.on_close = null, this.ws_rpc.on_reconnect = null), this.ws_rpc = new i.default(t, this.statusCb, e, a, function (e) {
                            r._db && !e && r._db.exec("get_objects", [
                                ["2.1.0"]
                            ]).catch(function (e) {})
                        }), this.init_promise = this.ws_rpc.login("", "").then(function () {
                            r._db = new s.default(r.ws_rpc, "database"), r._net = new s.default(r.ws_rpc, "network_broadcast"), r._hist = new s.default(r.ws_rpc, "history"), n.enableOrders && (r._orders = new s.default(r.ws_rpc, "orders")), n.enableCrypto && (r._crypt = new s.default(r.ws_rpc, "crypto"));
                            var e = r._db.init().then(function () {
                                return r._db.exec("get_chain_id", []).then(function (e) {
                                    return r.chain_id = e, o.default.setChainId(e)
                                })
                            });
                            r.ws_rpc.on_reconnect = function () {
                                r.ws_rpc && r.ws_rpc.login("", "").then(function () {
                                    r._db.init().then(function () {
                                        r.statusCb && r.statusCb("reconnect")
                                    }), r._net.init(), r._hist.init(), n.enableOrders && r._orders.init(), n.enableCrypto && r._crypt.init()
                                })
                            }, r.ws_rpc.on_close = function () {
                                r.close().then(function () {
                                    r.closeCb && r.closeCb()
                                })
                            };
                            var t = [e, r._net.init(), r._hist.init()];
                            return n.enableOrders && t.push(r._orders.init()), n.enableCrypto && t.push(r._crypt.init()), Promise.all(t)
                        }).catch(function (e) {
                            return console.error(t, "Failed to initialize with error", e && e.message), r.close().then(function () {
                                throw e
                            })
                        })
                    }, e.prototype.close = function () {
                        var e = this;
                        return this.ws_rpc && 1 === this.ws_rpc.ws.readyState ? this.ws_rpc.close().then(function () {
                            e.ws_rpc = null
                        }) : (this.ws_rpc = null, Promise.resolve())
                    }, e.prototype.db_api = function () {
                        return this._db
                    }, e.prototype.network_api = function () {
                        return this._net
                    }, e.prototype.history_api = function () {
                        return this._hist
                    }, e.prototype.crypto_api = function () {
                        return this._crypt
                    }, e.prototype.orders_api = function () {
                        return this._orders
                    }, e.prototype.setRpcConnectionStatusCallback = function (e) {
                        this.statusCb = e
                    }, e
                }();
                n.exports = f.default
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./ChainConfig": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/src/ChainConfig.js",
            "./ChainWebSocket": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/src/ChainWebSocket.js",
            "./GrapheneApi": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/src/GrapheneApi.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/src/ChainConfig.js": [function (e, t, r) {
            (function (e) {
                "use strict";
                r.__esModule = !0;
                var o = void 0,
                    a = {
                        address_prefix: e.env.npm_config__graphene_ecc_default_address_prefix || "GPH"
                    };
                o = {
                    core_asset: "CORE",
                    address_prefix: "GPH",
                    expire_in_secs: 15,
                    expire_in_secs_proposal: 86400,
                    review_in_secs_committee: 86400,
                    networks: {
                        BitShares: {
                            core_asset: "BTS",
                            address_prefix: "BTS",
                            chain_id: "4018d7844c78f6a6c41c6a552b898022310fc5dec06da467ee7905a8dad512c8"
                        },
                        Muse: {
                            core_asset: "MUSE",
                            address_prefix: "MUSE",
                            chain_id: "45ad2d3f9ef92a49b55c2227eb06123f613bb35dd08bd876f2aea21925a67a67"
                        },
                        Test: {
                            core_asset: "TEST",
                            address_prefix: "TEST",
                            chain_id: "39f5e2ede1f8bc1a3a54a7914414e3779e33193f1f5693510e73cb7a87617447"
                        },
                        Obelisk: {
                            core_asset: "GOV",
                            address_prefix: "FEW",
                            chain_id: "1cfde7c388b9e8ac06462d68aadbd966b58f88797637d9af805b4560b0e9661e"
                        }
                    },
                    setChainId: function (e) {
                        var t, r, n = void 0,
                            i = void 0,
                            s = void 0;
                        for (n = 0, t = (r = Object.keys(o.networks)).length; n < t; n++)
                            if (s = r[n], (i = o.networks[s]).chain_id === e) return o.network_name = s, i.address_prefix && (o.address_prefix = i.address_prefix, a.address_prefix = i.address_prefix), {
                                network_name: s,
                                network: i
                            };
                        o.network_name || console.log("Unknown chain id (this may be a testnet)", e)
                    },
                    reset: function () {
                        o.core_asset = "CORE", o.address_prefix = "GPH", a.address_prefix = "GPH", o.expire_in_secs = 15, o.expire_in_secs_proposal = 86400, console.log("Chain config reset")
                    },
                    setPrefix: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "GPH";
                        o.address_prefix = e, a.address_prefix = e
                    }
                }, r.default = o, t.exports = r.default
            }).call(this, e("_process"))
        }, {
            _process: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process/browser.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/src/ChainWebSocket.js": [function (r, n, i) {
            (function (e) {
                "use strict";
                i.__esModule = !0;
                var a = void 0;
                a = "undefined" != typeof WebSocket || e.env.browser ? WebSocket : r("ws");
                var t = function () {
                    function o(n, e) {
                        var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 5e3,
                            i = this,
                            s = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                            r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null;
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), this.url = n, this.statusCb = e, this.connectionTimeout = setTimeout(function () {
                            if (i.current_reject) {
                                var e = i.current_reject;
                                i.current_reject = null, i.close(), e(new Error("Connection attempt timed out after " + t / 1e3 + "s"))
                            }
                        }, t), this.current_reject = null, this.on_reconnect = null, this.closed = !1, this.send_life = 5, this.recv_life = 10, this.keepAliveCb = r, this.connect_promise = new Promise(function (e, t) {
                            i.current_reject = t;
                            var r = s || "undefined" == typeof WebSocket || "undefined" == typeof document ? a : WebSocket;
                            try {
                                i.ws = new r(n)
                            } catch (e) {
                                i.ws = {
                                    readyState: 3,
                                    close: function () {}
                                }, t(new Error("Invalid url", n, " closed"))
                            }
                            i.ws.onopen = function () {
                                clearTimeout(i.connectionTimeout), i.statusCb && i.statusCb("open"), i.on_reconnect && i.on_reconnect(), i.keepalive_timer = setInterval(function () {
                                    if (i.recv_life--, 0 == i.recv_life) return console.error(i.url + " connection is dead, terminating ws"), void i.close();
                                    i.send_life--, 0 == i.send_life && (i.keepAliveCb && i.keepAliveCb(i.closed), i.send_life = 5)
                                }, 5e3), i.current_reject = null, e()
                            }, i.ws.onerror = function (e) {
                                i.keepalive_timer && (clearInterval(i.keepalive_timer), i.keepalive_timer = void 0), clearTimeout(i.connectionTimeout), i.statusCb && i.statusCb("error"), i.current_reject && i.current_reject(e)
                            }, i.ws.onmessage = function (e) {
                                i.recv_life = 10, i.listener(JSON.parse(e.data))
                            }, i.ws.onclose = function () {
                                i.closed = !0, i.keepalive_timer && (clearInterval(i.keepalive_timer), i.keepalive_timer = void 0);
                                for (var e = new Error("connection closed"), t = i.responseCbId + 1; t <= i.cbId; t += 1) i.cbs[t].reject(e);
                                i.statusCb && i.statusCb("closed"), i._closeCb && i._closeCb(), i.on_close && i.on_close()
                            }
                        }), this.cbId = 0, this.responseCbId = 0, this.cbs = {}, this.subs = {}, this.unsub = {}
                    }
                    return o.prototype.call = function (e) {
                        var r = this;
                        if (1 !== this.ws.readyState) return Promise.reject(new Error("websocket state error:" + this.ws.readyState));
                        var t = e[1];
                        if (this.cbId += 1, "set_subscribe_callback" !== t && "subscribe_to_market" !== t && "broadcast_transaction_with_callback" !== t && "set_pending_transaction_callback" !== t || (this.subs[this.cbId] = {
                                callback: e[2][0]
                            }, e[2][0] = this.cbId), "unsubscribe_from_market" === t || "unsubscribe_from_accounts" === t) {
                            if ("function" != typeof e[2][0]) throw new Error("First parameter of unsub must be the original callback");
                            var n = e[2].splice(0, 1)[0];
                            for (var i in this.subs)
                                if (this.subs[i].callback === n) {
                                    this.unsub[this.cbId] = i;
                                    break
                                }
                        }
                        var s = {
                            method: "call",
                            params: e
                        };
                        return s.id = this.cbId, this.send_life = 5, new Promise(function (e, t) {
                            r.cbs[r.cbId] = {
                                time: new Date,
                                resolve: e,
                                reject: t
                            }, r.ws.send(JSON.stringify(s))
                        })
                    }, o.prototype.listener = function (e) {
                        var t = !1,
                            r = null;
                        "notice" === e.method && (t = !0, e.id = e.params[0]), t ? r = this.subs[e.id].callback : (r = this.cbs[e.id], this.responseCbId = e.id), r && !t ? (e.error ? r.reject(e.error) : r.resolve(e.result), delete this.cbs[e.id], this.unsub[e.id] && (delete this.subs[this.unsub[e.id]], delete this.unsub[e.id])) : r && t ? r(e.params[1]) : console.log("Warning: unknown websocket response: ", e)
                    }, o.prototype.login = function (e, t) {
                        var r = this;
                        return this.connect_promise.then(function () {
                            return r.call([1, "login", [e, t]])
                        })
                    }, o.prototype.close = function () {
                        var t = this;
                        return new Promise(function (e) {
                            if (clearInterval(t.keepalive_timer), t.keepalive_timer = void 0, t._closeCb = function () {
                                    e(), t._closeCb = null
                                }, !t.ws) return console.log("Websocket already cleared", t), e();
                            t.ws.terminate ? t.ws.terminate() : t.ws.close(), 3 === t.ws.readyState && e()
                        })
                    }, o
                }();
                i.default = t, n.exports = i.default
            }).call(this, r("_process"))
        }, {
            _process: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process/browser.js",
            ws: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/browser-resolve/empty.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/src/ConnectionManager.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var s = n(e("./ApiInstances")),
                c = n(e("./ChainWebSocket"));

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = function () {
                function a(e) {
                    var t = e.url,
                        r = e.urls,
                        n = e.autoFallback,
                        i = e.closeCb,
                        s = e.optionalApis,
                        o = e.urlChangeCallback;
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, a), this.url = t, this.urls = r.filter(function (e) {
                        return e !== t
                    }), this.autoFallback = n, this.closeCb = i, this.optionalApis = s || {}, this.isConnected = !1, this.urlChangeCallback = o
                }
                return a.prototype.setCloseCb = function (e) {
                    this.closeCb = e
                }, a.close = function () {
                    return s.default.close()
                }, a.prototype.logFailure = function (e, t, r) {
                    var n = r && r.message ? r.message : "";
                    console.error(e, "Failed to connect to " + t + (n ? " Error: " + JSON.stringify(n) : ""))
                }, a.prototype._onClose = function () {
                    this.isConnected = !1, this.closeCb && (this.closeCb(), this.setCloseCb(null)), this.autoFallback && this.connectWithFallback()
                }, a.prototype.connect = function () {
                    var n = this,
                        e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                        i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.url;
                    return new Promise(function (t, r) {
                        s.default.instance(i, e, void 0, n.optionalApis, n._onClose.bind(n)).init_promise.then(function (e) {
                            n.url = i, n.isConnected = !0, t(e)
                        }).catch(function (e) {
                            s.default.close().then(function () {
                                r(e)
                            })
                        })
                    })
                }, a.prototype.connectWithFallback = function () {
                    var n = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.url,
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                        s = this,
                        t = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                        r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null;
                    if (r && i > this.urls.length) return r(new Error("Tried " + i + " connections, none of which worked: " + JSON.stringify(this.urls.concat(this.url))));
                    var o = function (e, t, r) {
                        return s.urlChangeCallback && s.urlChangeCallback(s.urls[i]), s.connectWithFallback(n, s.urls[i], i + 1, t, r)
                    };
                    return t && r ? this.connect(n, e).then(t).catch(function (e) {
                        o(0, t, r)
                    }) : new Promise(function (t, r) {
                        s.connect(n, void 0).then(t).catch(function (e) {
                            o(0, t, r)
                        })
                    })
                }, a.prototype.checkConnections = function () {
                    var o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                        u = this,
                        e = arguments[2],
                        t = arguments[3],
                        f = {},
                        r = function (r, e) {
                            var t = u.urls.concat(u.url),
                                s = [];
                            t.forEach(function (n) {
                                var i = new c.default(n, function () {}, void 0, !1);
                                f[n] = (new Date).getTime(), s.push(function () {
                                    return i.login(o, a).then(function (e) {
                                        var t, r = ((t = {})[n] = (new Date).getTime() - f[n], t);
                                        return i.close().then(function () {
                                            return r
                                        })
                                    }).catch(function (e) {
                                        return u.logFailure("checkConnections", n, e), n === u.url ? u.url = u.urls[0] : u.urls = u.urls.filter(function (e) {
                                            return e !== n
                                        }), i.close().then(function () {
                                            return null
                                        })
                                    })
                                })
                            }), Promise.all(s.map(function (e) {
                                return e()
                            })).then(function (e) {
                                var t = e.filter(function (e) {
                                    return !!e
                                }).sort(function (e, t) {
                                    return Object.values(e)[0] - Object.values(t)[0]
                                }).reduce(function (e, t) {
                                    var r = Object.keys(t)[0];
                                    return e[r] = t[r], e
                                }, {});
                                return console.log("Checked " + e.length + " connections, " + (e.length - Object.keys(t).length) + " failed"), r(t)
                            }).catch(function () {
                                return u.checkConnections(o, a, r, e)
                            })
                        };
                    if (!e || !t) return new Promise(r);
                    r(e, t)
                }, a
            }();
            r.default = i, t.exports = r.default
        }, {
            "./ApiInstances": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/src/ApiInstances.js",
            "./ChainWebSocket": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/src/ChainWebSocket.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/src/GrapheneApi.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function r(e, t) {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), this.ws_rpc = e, this.api_name = t
                }
                return r.prototype.init = function () {
                    var t = this;
                    return this.ws_rpc.call([1, this.api_name, []]).then(function (e) {
                        return t.api_id = e, t
                    })
                }, r.prototype.exec = function (e, t) {
                    return this.ws_rpc.call([this.api_id, e, t]).catch(function (e) {
                        throw e
                    })
                }, r
            }();
            r.default = n, t.exports = r.default
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/AccountLogin.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var u = i(e("../../ecc/src/PrivateKey")),
                f = i(e("../../ecc/src/KeyUtils")),
                n = e("./state");

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = {},
                h = {},
                s = new(function () {
                    function t() {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var e = {
                            loggedIn: !1,
                            roles: ["active", "owner", "memo"]
                        };
                        this.get = (0, n.get)(e), this.set = (0, n.set)(e), this.subs = {}
                    }
                    return t.prototype.addSubscription = function (e) {
                        this.subs[e] = e
                    }, t.prototype.setRoles = function (e) {
                        this.set("roles", e)
                    }, t.prototype.generateKeys = function (n, i, e, s) {
                        (new Date).getTime();
                        if (!n || !i) throw new Error("Account name or password required");
                        if (i.length < 12) throw new Error("Password must have at least 12 characters");
                        var o = {},
                            a = {};
                        return (e || this.get("roles")).forEach(function (e) {
                            var t = n + e + i,
                                r = c[t] ? c[t] : u.default.fromSeed(f.default.normalize_brainKey(t));
                            c[t] = r, o[e] = r, a[e] = h[t] ? h[t] : r.toPublicKey().toString(s), h[t] = a[e]
                        }), {
                            privKeys: o,
                            pubKeys: a
                        }
                    }, t.prototype.checkKeys = function (e) {
                        var i = this,
                            s = e.accountName,
                            o = e.password,
                            a = e.auths;
                        if (!s || !o || !a) throw new Error("checkKeys: Missing inputs");
                        var u = !1,
                            t = function (t) {
                                var e = i.generateKeys(s, o, [t]),
                                    r = e.privKeys,
                                    n = e.pubKeys;
                                a[t].forEach(function (e) {
                                    e[0] === n[t] && (u = !0, i.set(t, {
                                        priv: r[t],
                                        pub: n[t]
                                    }))
                                })
                            };
                        for (var r in a) t(r);
                        return u && this.set("name", s), this.set("loggedIn", u), u
                    }, t.prototype.signTransaction = function (r) {
                        var n = this,
                            i = !1;
                        if (this.get("roles").forEach(function (e) {
                                var t = n.get(e);
                                t && (i = !0, console.log("adding signer:", t.pub), r.add_signer(t.priv, t.pub))
                            }), !i) throw new Error("You do not have any private keys to sign this transaction")
                    }, t
                }());
            r.default = s, t.exports = r.default
        }, {
            "../../ecc/src/KeyUtils": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/KeyUtils.js",
            "../../ecc/src/PrivateKey": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/PrivateKey.js",
            "./state": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/state.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/ChainStore.js": [function (E, z, S) {
            (function (e) {
                "use strict";
                S.__esModule = !0;
                var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    g = n(E("immutable")),
                    w = E("bitsharesjs-ws"),
                    t = n(E("./ChainTypes")),
                    l = n(E("./ChainValidation")),
                    p = n(E("bigi")),
                    r = n(E("./EmitterInstance"));

                function n(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var s = t.default.object_type,
                    o = t.default.impl_object_type,
                    _ = (0, r.default)(),
                    a = parseInt(s.operation_history, 10),
                    u = parseInt(s.witness, 10),
                    f = parseInt(s.committee_member, 10),
                    c = parseInt(s.account, 10),
                    h = "1." + u + ".",
                    d = "1." + f + ".",
                    b = "1." + c + ".",
                    x = JSON.parse(e.env.npm_config__graphene_chain_chain_debug || !1),
                    m = Object.keys(s),
                    y = Object.keys(o);

                function v(e) {
                    var t = e.split("."),
                        r = t[0],
                        n = t[1];
                    switch (n = parseInt(n, 10), r) {
                        case "0":
                            return "unknown";
                        case "1":
                            return m[n];
                        case "2":
                            return y[n];
                        case "5":
                            return "market"
                    }
                }
                var k = new(function () {
                    function e() {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.subscribers = new Set, this.subscribed = !1, this.clearCache(), this.chain_time_offset = [], this.dispatchFrequency = 40
                    }
                    return e.prototype.clearCache = function () {
                        this.subbed_accounts = new Set, this.subbed_witnesses = new Set, this.subbed_committee = new Set, this.objects_by_id = new Map, this.accounts_by_name = new Map, this.assets_by_symbol = new Map, this.account_ids_by_key = g.default.Map(), this.account_ids_by_account = g.default.Map(), this.balance_objects_by_address = new Map, this.get_account_refs_of_keys_calls = new Set, this.get_account_refs_of_accounts_calls = new Set, this.account_history_requests = new Map, this.witness_by_account_id = new Map, this.workers = new Set, this.committee_by_account_id = new Map, this.objects_by_vote_id = new Map, this.fetching_get_full_accounts = new Map, this.get_full_accounts_subscriptions = new Map, clearTimeout(this.timeout), this.dispatched = !1
                    }, e.prototype.resetCache = function (e) {
                        return this.subscribed = !1, this.subError = null, this.clearCache(), this.head_block_time_string = null, this.init(e).catch(function (e) {
                            throw e
                        })
                    }, e.prototype.setDispatchFrequency = function (e) {
                        this.dispatchFrequency = e
                    }, e.prototype.init = function () {
                        var a = this,
                            u = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0],
                            f = 0;
                        return new Promise(function (e, t) {
                            return function i(s, o) {
                                if (a.subscribed) return s();
                                var e = w.Apis.instance().db_api();
                                return e ? e.exec("get_objects", [
                                    ["2.1.0"]
                                ]).then(function (e) {
                                    for (var t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        if (r) {
                                            var n = new Date(r.time + "+00:00").getTime();
                                            if (a.head_block_time_string = r.time, a.chain_time_offset.push((new Date).getTime() - j(r.time).getTime()), ((new Date).getTime() - n) / 1e3 < 60) w.Apis.instance().db_api().exec("set_subscribe_callback", [a.onUpdate.bind(a), u]).then(function () {
                                                console.log("synced and subscribed, chainstore ready"), a.subscribed = !0, a.subError = null, a.notifySubscribers(), s()
                                            }).catch(function (e) {
                                                a.subscribed = !1, a.subError = e, a.notifySubscribers(), o(e), console.log("Error: ", e)
                                            });
                                            else {
                                                if (console.log("not yet synced, retrying in 1s"), a.subscribed = !1, f++, a.notifySubscribers(), 5 < f) return a.subError = new Error("ChainStore sync error, please check your system clock"), o(a.subError);
                                                setTimeout(i.bind(a, s, o), 1e3)
                                            }
                                        } else setTimeout(i.bind(a, s, o), 1e3)
                                    }
                                }).catch(function (e) {
                                    console.log("!!! Chain API error", e), a.objects_by_id.delete("2.1.0"), o(e)
                                }) : o(new Error("Api not found, please initialize the api instance before calling the ChainStore"))
                            }(e, t)
                        })
                    }, e.prototype._subTo = function (e, t) {
                        var r = "subbed_" + e;
                        this[r].has(t) || this[r].add(t)
                    }, e.prototype.unSubFrom = function (e, t) {
                        this["subbed_" + e].delete(t), this.objects_by_id.delete(t)
                    }, e.prototype._isSubbedTo = function (e, t) {
                        return this["subbed_" + e].has(t)
                    }, e.prototype.onUpdate = function (a) {
                        for (var u = this, f = [], c = [], h = 0; h < a.length; ++h)
                            for (var e = function (e) {
                                    var n = a[h][e];
                                    if (l.default.is_object_id(n)) {
                                        var t = u.objects_by_id.get(n);
                                        switch (v(n)) {
                                            case "limit_order":
                                                if (f.push(n), t) {
                                                    var r = u.objects_by_id.get(t.get("seller"));
                                                    if (r && r.has("orders")) {
                                                        var i = r.get("orders");
                                                        r.get("orders").has(n) && (r = r.set("orders", i.delete(n)), u.objects_by_id.set(r.get("id"), r))
                                                    }
                                                }
                                                break;
                                            case "call_order":
                                                if (c.push(n), t) {
                                                    var s = u.objects_by_id.get(t.get("borrower"));
                                                    if (s && s.has("call_orders")) {
                                                        var o = s.get("call_orders");
                                                        s.get("call_orders").has(n) && (s = s.set("call_orders", o.delete(n)), u.objects_by_id.set(s.get("id"), s))
                                                    }
                                                }
                                                break;
                                            case "proposal":
                                                u.subbed_accounts.forEach(function (e) {
                                                    var t = u.objects_by_id.get(e);
                                                    if (t) {
                                                        var r = t.get("proposals", g.default.Set());
                                                        r.includes(n) && (r = r.delete(n), t = t.set("proposals", r), u.objects_by_id.set(t.get("id"), t))
                                                    }
                                                })
                                        }
                                        t && u.objects_by_id.set(n, null)
                                    } else u._updateObject(n)
                                }, t = 0; t < a[h].length; ++t) e(t);
                        f.length && _.emit("cancel-order", f), c.length && _.emit("close-call", c), this.notifySubscribers()
                    }, e.prototype.notifySubscribers = function () {
                        var e = this;
                        this.dispatched || (this.dispatched = !0, this.timeout = setTimeout(function () {
                            e.dispatched = !1, e.subscribers.forEach(function (e) {
                                e()
                            })
                        }, this.dispatchFrequency))
                    }, e.prototype.subscribe = function (e) {
                        if (this.subscribers.has(e)) return console.error("Subscribe callback already exists", e);
                        this.subscribers.add(e)
                    }, e.prototype.unsubscribe = function (e) {
                        if (!this.subscribers.has(e)) return console.error("Unsubscribe callback does not exists", e);
                        this.subscribers.delete(e)
                    }, e.prototype.clearObjectCache = function (e) {
                        this.objects_by_id.delete(e)
                    }, e.prototype.getObject = function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            r = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                            n = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                        if (!l.default.is_object_id(e)) throw Error("argument is not an object id: " + JSON.stringify(e));
                        var i = this.objects_by_id.get(e),
                            s = e.substring(0, b.length) == b && !this.get_full_accounts_subscriptions.get(e, !1) && r;
                        return null !== i || t ? void 0 === i || t || s ? this.fetchObject(e, t, r, n) : !0 !== i ? i : void 0 : i
                    }, e.prototype.getAsset = function (t) {
                        var r = this;
                        if (!t) return null;
                        if (l.default.is_object_id(t)) {
                            var e = this.getObject(t);
                            if (e && e.get("bitasset") && !e.getIn(["bitasset", "current_feed"])) return;
                            return e
                        }
                        var n = this.assets_by_symbol.get(t);
                        if (l.default.is_object_id(n)) {
                            var i = this.getObject(n);
                            if (i && i.get("bitasset") && !i.getIn(["bitasset", "current_feed"])) return;
                            return i
                        }
                        if (null === n) return null;
                        !0 !== n && w.Apis.instance().db_api().exec("lookup_asset_symbols", [
                            [t]
                        ]).then(function (e) {
                            e.length && e[0] ? r._updateObject(e[0], !0) : (r.assets_by_symbol.set(t, null), r.notifySubscribers())
                        }).catch(function (e) {
                            console.log("Error: ", e), r.assets_by_symbol.delete(t)
                        })
                    }, e.prototype.getAccountRefsOfKey = function (t) {
                        var n = this;
                        return this.get_account_refs_of_keys_calls.has(t) ? this.account_ids_by_key.get(t) : (this.get_account_refs_of_keys_calls.add(t), void w.Apis.instance().db_api().exec("get_key_references", [
                            [t]
                        ]).then(function (r) {
                            var e = g.default.Set();
                            r = r[0], e = e.withMutations(function (e) {
                                for (var t = 0; t < r.length; ++t) e.add(r[t])
                            }), n.account_ids_by_key = n.account_ids_by_key.set(t, e), n.notifySubscribers()
                        }).catch(function (e) {
                            console.error("get_key_references", e), n.account_ids_by_key = n.account_ids_by_key.delete(t), n.get_account_refs_of_keys_calls.delete(t)
                        }))
                    }, e.prototype.getAccountRefsOfAccount = function (t) {
                        var n = this;
                        return this.get_account_refs_of_accounts_calls.has(t) ? this.account_ids_by_account.get(t) : (this.get_account_refs_of_accounts_calls.add(t), void w.Apis.instance().db_api().exec("get_account_references", [t]).then(function (r) {
                            var e = g.default.Set();
                            e = e.withMutations(function (e) {
                                for (var t = 0; t < r.length; ++t) e.add(r[t])
                            }), n.account_ids_by_account = n.account_ids_by_account.set(t, e), n.notifySubscribers()
                        }).catch(function (e) {
                            console.error("get_account_references", e), n.account_ids_by_account = n.account_ids_by_account.delete(t), n.get_account_refs_of_accounts_calls.delete(t)
                        }))
                    }, e.prototype.getBalanceObjects = function (n) {
                        var i = this;
                        return void 0 === this.balance_objects_by_address.get(n) && (this.balance_objects_by_address.set(n, g.default.Set()), w.Apis.instance().db_api().exec("get_balance_objects", [
                            [n]
                        ]).then(function (e) {
                            for (var t = new Set, r = 0; r < e.length; ++r) i._updateObject(e[r]), t.add(e[r].id);
                            i.balance_objects_by_address.set(n, g.default.Set(t)), i.notifySubscribers()
                        }, function () {
                            i.balance_objects_by_address.delete(n)
                        })), this.balance_objects_by_address.get(n)
                    }, e.prototype.fetchObject = function (n) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            i = this,
                            t = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                            r = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                        if ("string" != typeof n) {
                            for (var s = [], o = 0; o < n.length; ++o) s.push(this.fetchObject(n[o], e, t));
                            return s
                        }
                        if (x && console.log("!!! fetchObject: ", n, this.subscribed, !this.subscribed && !e), this.subscribed || e) {
                            if (x && console.log("maybe fetch object: ", n), !l.default.is_object_id(n)) throw Error("argument is not an object id: " + n);
                            if (0 === n.search("1.2.") && !r) return this.fetchFullAccount(n, t);
                            0 === n.search(h) && this._subTo("witnesses", n), 0 === n.search(d) && this._subTo("committee", n);
                            var a = this.objects_by_id.get(n);
                            if (void 0 === a) {
                                if (x && console.log("fetching object: ", n), this.objects_by_id.set(n, !0), !w.Apis.instance().db_api()) return null;
                                w.Apis.instance().db_api().exec("get_objects", [
                                    [n]
                                ]).then(function (e) {
                                    for (var t = 0; t < e.length; t++) {
                                        var r = e[t];
                                        r ? i._updateObject(r, !0) : (i.objects_by_id.set(n, null), i.notifySubscribers())
                                    }
                                }).catch(function (e) {
                                    console.log("!!! Chain API error", e), i.objects_by_id.delete(n)
                                })
                            } else if (!0 === a) return;
                            return a
                        }
                    }, e.prototype.getAccount = function (e) {
                        var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                        if (!e) return null;
                        if ("object" === (void 0 === e ? "undefined" : i(e))) return e.id ? this.getAccount(e.id, t) : e.get ? this.getAccount(e.get("id"), t) : void 0;
                        if (l.default.is_object_id(e)) {
                            var r = this.getObject(e, !1, t);
                            return null === r ? null : !this.get_full_accounts_subscriptions.get(e, !1) && t || void 0 === r || void 0 === r.get("name") ? this.fetchFullAccount(e, t) : r
                        }
                        if (l.default.is_account_name(e, !0)) {
                            var n = this.accounts_by_name.get(e);
                            return null === n ? null : void 0 === n ? this.fetchFullAccount(e, t) : this.getObject(n, !1, t)
                        }
                        return null
                    }, e.prototype.getAccountName = function (e) {
                        var t = this.objects_by_id.get(e);
                        if (!0 !== t) {
                            if (t) return t.get("name");
                            this.getObject(e, !1, !1, !0)
                        }
                    }, e.prototype.getWitnessById = function (e) {
                        var t = this.witness_by_account_id.get(e);
                        if (void 0 !== t) return t && this._subTo("witnesses", t), t ? this.getObject(t) : null;
                        this.fetchWitnessByAccount(e)
                    }, e.prototype.getCommitteeMemberById = function (e) {
                        var t = this.committee_by_account_id.get(e);
                        if (void 0 !== t) return t && this._subTo("committee", t), t ? this.getObject(t) : null;
                        this.fetchCommitteeMemberByAccount(e)
                    }, e.prototype.fetchAllWorkers = function () {
                        var r = this;
                        return new Promise(function (t, e) {
                            w.Apis.instance().db_api().exec("get_all_workers", []).then(function (e) {
                                e && e.length ? (e.forEach(function (e) {
                                    r._updateObject(e, !1)
                                }), t(e), r.notifySubscribers()) : t([])
                            }, e)
                        })
                    }, e.prototype.fetchWitnessByAccount = function (n) {
                        var i = this;
                        return new Promise(function (r, e) {
                            w.Apis.instance().db_api().exec("get_witness_by_account", [n]).then(function (e) {
                                if (e) {
                                    i._subTo("witnesses", e.id), i.witness_by_account_id = i.witness_by_account_id.set(e.witness_account, e.id);
                                    var t = i._updateObject(e, !0);
                                    r(t)
                                } else i.witness_by_account_id = i.witness_by_account_id.set(n, null), i.notifySubscribers(), r(null)
                            }, e)
                        })
                    }, e.prototype.fetchCommitteeMemberByAccount = function (n) {
                        var i = this;
                        return new Promise(function (r, e) {
                            w.Apis.instance().db_api().exec("get_committee_member_by_account", [n]).then(function (e) {
                                if (e) {
                                    i._subTo("committee", e.id), i.committee_by_account_id = i.committee_by_account_id.set(e.committee_member_account, e.id);
                                    var t = i._updateObject(e, !0);
                                    r(t)
                                } else i.committee_by_account_id = i.committee_by_account_id.set(n, null), i.notifySubscribers(), r(null)
                            }, e)
                        })
                    }, e.prototype.fetchFullAccount = function (_) {
                        var b = this,
                            m = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                        x && console.log("Fetch full account: ", _);
                        var e = this.get_full_accounts_subscriptions.has(_) && !1 === this.get_full_accounts_subscriptions.get(_) && m,
                            y = l.default.is_object_id(_),
                            v = !y && l.default.is_account_name(_, !0);
                        if (y && !e) {
                            var t = this.objects_by_id.get(_);
                            if (!(void 0 === t) && t && t.get("name") && t.has("balances")) return t
                        } else if (!e) {
                            if (!v) throw Error("argument is not an account name: " + _);
                            var r = this.accounts_by_name.get(_);
                            if (l.default.is_object_id(r)) return this.getAccount(r, m)
                        }(e || !this.fetching_get_full_accounts.has(_) || 5e3 < Date.now() - this.fetching_get_full_accounts.get(_)) && (this.fetching_get_full_accounts.set(_, Date.now()), w.Apis.instance().db_api().exec("get_full_accounts", [
                            [_], m
                        ]).then(function (e) {
                            if (0 !== e.length) {
                                var r = e[0][1];
                                b.get_full_accounts_subscriptions.set(r.account.name, m), b.get_full_accounts_subscriptions.set(r.account.id, m), x && console.log("full_account: ", r), b._subTo("accounts", r.account.id);
                                var t = r.account,
                                    n = r.assets,
                                    i = r.vesting_balances,
                                    s = r.statistics,
                                    o = r.call_orders,
                                    a = r.limit_orders,
                                    u = r.referrer_name,
                                    f = r.registrar_name,
                                    c = r.lifetime_referrer_name,
                                    h = r.votes,
                                    l = r.proposals;
                                b.accounts_by_name.set(t.name, t.id), t.assets = new g.default.List(n || []), t.referrer_name = u, t.lifetime_referrer_name = c, t.registrar_name = f, t.balances = {}, t.orders = new g.default.Set, t.vesting_balances = new g.default.Set, t.balances = new g.default.Map, t.call_orders = new g.default.Set, t.proposals = new g.default.Set, t.vesting_balances = t.vesting_balances.withMutations(function (t) {
                                    i.forEach(function (e) {
                                        b._updateObject(e), t.add(e.id)
                                    })
                                });
                                var d = [];
                                h.forEach(function (e) {
                                    return b._updateObject(e)
                                }), t.balances = t.balances.withMutations(function (t) {
                                    r.balances.forEach(function (e) {
                                        b._updateObject(e), t.set(e.asset_type, e.id), m && d.push(e.id)
                                    })
                                }), t.orders = t.orders.withMutations(function (t) {
                                    a.forEach(function (e) {
                                        b._updateObject(e), t.add(e.id), m && d.push(e.id)
                                    })
                                }), t.call_orders = t.call_orders.withMutations(function (t) {
                                    o.forEach(function (e) {
                                        b._updateObject(e), t.add(e.id), m && d.push(e.id)
                                    })
                                }), t.proposals = t.proposals.withMutations(function (t) {
                                    l.forEach(function (e) {
                                        b._updateObject(e), t.add(e.id), m && d.push(e.id)
                                    })
                                }), d.length && w.Apis.instance().db_api().exec("get_objects", [d]), b._updateObject(s);
                                var p = b._updateObject(t);
                                b.fetchRecentHistory(p), b.notifySubscribers()
                            } else y ? (b.objects_by_id.set(_, null), b.notifySubscribers()) : v && (b.accounts_by_name.set(_, null), b.notifySubscribers())
                        }).catch(function (e) {
                            e && "Assert Exception: account: no such account" === e.message ? y ? (b.objects_by_id.set(_, null), b.notifySubscribers()) : v && (b.accounts_by_name.set(_, null), b.notifySubscribers()) : y ? b.objects_by_id.delete(_) : b.accounts_by_name.delete(_)
                        }))
                    }, e.prototype.getAccountMemberStatus = function (e) {
                        if (void 0 !== e) return null === e ? "unknown" : e.get("lifetime_referrer") == e.get("id") ? "lifetime" : new Date(e.get("membership_expiration_date")).getTime() < (new Date).getTime() ? "basic" : "annual"
                    }, e.prototype.getAccountBalance = function (e, t) {
                        var r = e.get("balances");
                        if (!r) return 0;
                        var n = r.get(t);
                        if (n) {
                            var i = this.objects_by_id.get(n);
                            if (i) return i.get("balance")
                        }
                        return 0
                    }, e.prototype.fetchRecentHistory = function (e) {
                        var u = this,
                            f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 100,
                            c = e;
                        if (!l.default.is_object_id(c) && e.toJS && (c = e.get("id")), l.default.is_object_id(c) && (e = this.objects_by_id.get(c)) && !0 !== e) {
                            var t = this.account_history_requests.get(c);
                            if (t) return t.requests++, t.promise;
                            t = {
                                requests: 0
                            };
                            var r = "1." + a + ".0",
                                n = e.get("history");
                            n && n.size && (r = n.first().get("id"));
                            var i = "1." + a + ".0";
                            return t.promise = new Promise(function (o, a) {
                                w.Apis.instance().history_api().exec("get_account_history", [c, r, f, i]).then(function (e) {
                                    var t = u.objects_by_id.get(c);
                                    if (t) {
                                        var r = t.get("history");
                                        r || (r = g.default.List());
                                        var n = g.default.fromJS(e);
                                        n = n.withMutations(function (e) {
                                            for (var t = 0; t < r.size; ++t) e.push(r.get(t))
                                        });
                                        var i = t.set("history", n);
                                        u.objects_by_id.set(c, i);
                                        var s = u.account_history_requests.get(c);
                                        u.account_history_requests.delete(c), 0 < s.requests ? u.fetchRecentHistory(i, f).then(o, a) : o(i)
                                    }
                                })
                            }), this.account_history_requests.set(c, t), t.promise
                        }
                    }, e.prototype._updateObject = function (t) {
                        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            r = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                        if (!("id" in t)) return console.log("object with no id:", t), void("balance" in t && "owner" in t && "settlement_date" in t && _.emit("settle-order-update", t));
                        var n = v(t.id);
                        switch (n) {
                            case "transaction":
                            case "operation_history":
                            case "block_summary":
                                return;
                            case "account_transaction_history":
                            case "limit_order":
                            case "call_order":
                            case "account_balance":
                            case "account_stats":
                                if (!this._isSubbedTo("accounts", t.account || t.seller || t.borrower || t.owner)) return;
                                break;
                            case "witness":
                                if (!this._isSubbedTo("witnesses", t.id)) return;
                                break;
                            case "committee_member":
                                if (!this._isSubbedTo("committee", t.id)) return;
                                break;
                            case "unknown":
                            case "market":
                                return
                        }
                        "2.1.0" == t.id && (t.participation = (0, p.default)(t.recent_slots_filled).bitCount() / 128 * 100, this.head_block_time_string = t.time, this.chain_time_offset.push(Date.now() - j(t.time).getTime()), 10 < this.chain_time_offset.length && this.chain_time_offset.shift());
                        var i = this.objects_by_id.get(t.id);
                        i || (i = g.default.Map());
                        var s = i;
                        if (void 0 === i || !0 === i) this.objects_by_id.set(t.id, i = g.default.fromJS(t));
                        else switch (n) {
                            case "account":
                            case "asset":
                            case "asset_bitasset_data":
                                this.objects_by_id.set(t.id, i = i.mergeDeep(g.default.fromJS(t)));
                                break;
                            default:
                                this.objects_by_id.set(t.id, i = g.default.fromJS(t))
                        }
                        switch (n) {
                            case "account_balance":
                                var o = this.objects_by_id.get(t.owner);
                                if (null == o || !0 === o) return;
                                o.get("balances") || (o = o.set("balances", g.default.Map())), o = o.setIn(["balances", t.asset_type], t.id), this.objects_by_id.set(t.owner, o);
                                break;
                            case "account_statistics":
                                try {
                                    s.get("most_recent_op", "2.9.0") != t.most_recent_op && this.fetchRecentHistory(t.owner)
                                } catch (e) {
                                    console.log("object:", t, "prior", s, "err:", e)
                                }
                                break;
                            case "witness":
                                if (!this._isSubbedTo("witnesses", t.id)) return;
                                this.witness_by_account_id.set(t.witness_account, t.id), this.objects_by_vote_id.set(t.vote_id, t.id);
                                break;
                            case "committee_member":
                                if (!this._isSubbedTo("committee", t.id)) return;
                                this.committee_by_account_id.set(t.committee_member_account, t.id), this.objects_by_vote_id.set(t.vote_id, t.id);
                                break;
                            case "worker":
                                this.objects_by_vote_id.set(t.vote_for, t.id), this.objects_by_vote_id.set(t.vote_against, t.id), this.workers.has(t.id) || this.workers.add(t.id);
                                break;
                            case "account":
                                i = (i = (i = (i = (i = (i = (i = i.set("active", g.default.fromJS(t.active))).set("owner", g.default.fromJS(t.owner))).set("options", g.default.fromJS(t.options))).set("whitelisting_accounts", g.default.fromJS(t.whitelisting_accounts))).set("blacklisting_accounts", g.default.fromJS(t.blacklisting_accounts))).set("whitelisted_accounts", g.default.fromJS(t.whitelisted_accounts))).set("blacklisted_accounts", g.default.fromJS(t.blacklisted_accounts)), this.objects_by_id.set(t.id, i), this.accounts_by_name.set(t.name, t.id);
                                break;
                            case "asset":
                                if (this.assets_by_symbol.set(t.symbol, t.id), !i.get("bitasset") && "bitasset_data_id" in t) {
                                    var a = this.getObject(t.bitasset_data_id, !0);
                                    a || (a = g.default.Map()), a.get("asset_id") || (a = a.set("asset_id", t.id)), this.objects_by_id.set(t.bitasset_data_id, a), i = i.set("bitasset", a), this.objects_by_id.set(t.id, i)
                                }
                                break;
                            case "asset_bitasset_data":
                                var u = i.get("asset_id");
                                if (u) {
                                    var f = this.getObject(u);
                                    f && (f = f.set("bitasset", i), _.emit("bitasset-update", f), this.objects_by_id.set(u, f))
                                }
                                break;
                            case "call_order":
                                r && _.emit("call-order-update", t);
                                var c = this.objects_by_id.get(t.borrower);
                                if (c && !0 !== c) {
                                    c.has("call_orders") || (c = c.set("call_orders", new g.default.Set));
                                    var h = c.get("call_orders");
                                    h.has(t.id) || (c = c.set("call_orders", h.add(t.id)), this.objects_by_id.set(c.get("id"), c), w.Apis.instance().db_api().exec("get_objects", [
                                        [t.id]
                                    ]))
                                }
                                break;
                            case "limit_order":
                                var l = this.objects_by_id.get(t.seller);
                                if (l && !0 !== l) {
                                    l.has("orders") || (l = l.set("orders", new g.default.Set));
                                    var d = l.get("orders");
                                    d.has(t.id) || (l = l.set("orders", d.add(t.id)), this.objects_by_id.set(l.get("id"), l), w.Apis.instance().db_api().exec("get_objects", [
                                        [t.id]
                                    ]))
                                }
                                break;
                            case "proposal":
                                e = (e = e || this.addProposalData(t.required_active_approvals, t.id)) || this.addProposalData(t.required_owner_approvals, t.id)
                        }
                        return e && this.notifySubscribers(), i
                    }, e.prototype.getObjectsByVoteIds = function (e) {
                        for (var n = this, t = [], r = [], i = 0; i < e.length; ++i) {
                            var s = this.objects_by_vote_id.get(e[i]);
                            s ? t.push(this.getObject(s)) : (t.push(null), r.push(e[i]))
                        }
                        return r.length && w.Apis.instance().db_api().exec("lookup_vote_ids", [r]).then(function (e) {
                            for (var t = 0; t < e.length; ++t)
                                if (e[t]) {
                                    var r = e[t].id.substring(0, h.length) == h;
                                    n._subTo(r ? "witnesses" : "committee", e[t].id), n._updateObject(e[t])
                                }
                        }).catch(function (e) {
                            console.log("Error looking up vote ids: ", e)
                        }), t
                    }, e.prototype.getObjectByVoteID = function (e) {
                        var t = this.objects_by_vote_id.get(e);
                        if (t) return this.getObject(t)
                    }, e.prototype.getHeadBlockDate = function () {
                        return j(this.head_block_time_string)
                    }, e.prototype.getEstimatedChainTimeOffset = function () {
                        return 0 === this.chain_time_offset.length ? 0 : g.default.List(this.chain_time_offset).sort().get(Math.floor((this.chain_time_offset.length - 1) / 2))
                    }, e.prototype.addProposalData = function (e, n) {
                        var i = this,
                            s = !1;
                        return e.forEach(function (e) {
                            var t = i.objects_by_id.get(e);
                            if (t && !0 !== t) {
                                s = !0;
                                var r = t.get("proposals", g.default.Set());
                                r.includes(n) || (r = r.add(n), t = t.set("proposals", r), i.objects_by_id.set(t.get("id"), t))
                            }
                        }), s
                    }, e
                }());

                function j(e) {
                    return e ? (/Z$/.test(e) || (e += "Z"), new Date(e)) : new Date("1970-01-01T00:00:00.000Z")
                }
                k.FetchChainObjects = function (s, o, a, u) {
                    var f = s.bind(k);
                    return new Promise(function (r, e) {
                        var n = null;

                        function i() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                                t = o.map(function (e) {
                                    return "getAccount" === s.name ? f(e, u[e]) : "getObject" === s.name ? f(e, !1, u[e]) : f(e)
                                });
                            return -1 === t.findIndex(function (e) {
                                return void 0 === e
                            }) && (n && clearTimeout(n), e || k.unsubscribe(i), r(t), !0)
                        }
                        var t = i(!0);
                        t || k.subscribe(i), a && !t && (n = setTimeout(function () {
                            k.unsubscribe(i), e(s.name + " request timed out after " + a + "ms with object ids: " + JSON.stringify(o))
                        }, a))
                    })
                }, k.FetchChain = function (e, t) {
                    var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 3e3,
                        n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
                        i = k[e];
                    if (!i) throw new Error("ChainStore does not have method " + e);
                    var s = Array.isArray(t);
                    return s || (t = [t]), k.FetchChainObjects(i, g.default.List(t), r, n).then(function (e) {
                        return s ? e : e.get(0)
                    })
                }, S.default = k, z.exports = S.default
            }).call(this, E("_process"))
        }, {
            "./ChainTypes": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/ChainTypes.js",
            "./ChainValidation": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/ChainValidation.js",
            "./EmitterInstance": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/EmitterInstance.js",
            _process: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process/browser.js",
            bigi: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/index.js",
            "bitsharesjs-ws": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/index.js",
            immutable: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/immutable/dist/immutable.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/ChainTypes.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var n = {
                reserved_spaces: {
                    relative_protocol_ids: 0,
                    protocol_ids: 1,
                    implementation_ids: 2
                },
                object_type: {
                    null: 0,
                    base: 1,
                    account: 2,
                    asset: 3,
                    force_settlement: 4,
                    committee_member: 5,
                    witness: 6,
                    limit_order: 7,
                    call_order: 8,
                    custom: 9,
                    proposal: 10,
                    operation_history: 11,
                    withdraw_permission: 12,
                    vesting_balance: 13,
                    worker: 14,
                    balance: 15
                },
                impl_object_type: {
                    global_property: 0,
                    dynamic_global_property: 1,
                    index_meta: 2,
                    asset_dynamic_data: 3,
                    asset_bitasset_data: 4,
                    account_balance: 5,
                    account_statistics: 6,
                    transaction: 7,
                    block_summary: 8,
                    account_transaction_history: 9,
                    blinded_balance: 10,
                    chain_property: 11,
                    witness_schedule: 12,
                    budget_record: 13
                },
                vote_type: {
                    committee: 0,
                    witness: 1,
                    worker: 2
                },
                operations: {
                    transfer: 0,
                    limit_order_create: 1,
                    limit_order_cancel: 2,
                    call_order_update: 3,
                    fill_order: 4,
                    account_create: 5,
                    account_update: 6,
                    account_whitelist: 7,
                    account_upgrade: 8,
                    account_transfer: 9,
                    asset_create: 10,
                    asset_update: 11,
                    asset_update_bitasset: 12,
                    asset_update_feed_producers: 13,
                    asset_issue: 14,
                    asset_reserve: 15,
                    asset_fund_fee_pool: 16,
                    asset_settle: 17,
                    asset_global_settle: 18,
                    asset_publish_feed: 19,
                    witness_create: 20,
                    witness_update: 21,
                    proposal_create: 22,
                    proposal_update: 23,
                    proposal_delete: 24,
                    withdraw_permission_create: 25,
                    withdraw_permission_update: 26,
                    withdraw_permission_claim: 27,
                    withdraw_permission_delete: 28,
                    committee_member_create: 29,
                    committee_member_update: 30,
                    committee_member_update_global_parameters: 31,
                    vesting_balance_create: 32,
                    vesting_balance_withdraw: 33,
                    worker_create: 34,
                    custom: 35,
                    assert: 36,
                    balance_claim: 37,
                    override_transfer: 38,
                    transfer_to_blind: 39,
                    blind_transfer: 40,
                    transfer_from_blind: 41,
                    asset_settle_cancel: 42,
                    asset_claim_fees: 43,
                    fba_distribute: 44,
                    bid_collateral: 45,
                    execute_bid: 46,
                    asset_claim_pool: 47,
                    asset_update_issuer: 48
                }
            };
            r.default = n, t.exports = r.default
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/ChainValidation.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var n = /\b\d+\.\d+\.(\d+)\b/,
                i = {
                    is_account_name: function (e) {
                        var t, r, n, i, s, o = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                        if (this.is_empty(e)) return !1;
                        if (i = e.length, !o && i < 3 || 63 < i) return !1;
                        for (t = 0, n = (s = e.split(".")).length; t < n; t++)
                            if (r = s[t], !/^[a-z][a-z0-9-]*$/.test(r) || /--/.test(r) || !/[a-z0-9]$/.test(r)) return !1;
                        return !0
                    },
                    is_object_id: function (e) {
                        return "string" == typeof e && (null !== n.exec(e) && 3 === e.split(".").length)
                    },
                    is_empty: function (e) {
                        return null == e || 0 === e.length
                    },
                    is_account_name_error: function (e, t) {
                        var r, n, i, s, o, a;
                        if (null == t && (t = !1), a = "Account name should ", this.is_empty(e)) return a + "not be empty.";
                        if (s = e.length, !t && s < 3) return a + "be longer.";
                        if (63 < s) return a + "be shorter.";
                        for (/\./.test(e) && (a = "Each account segment should "), r = 0, i = (o = e.split(".")).length; r < i; r++) {
                            if (n = o[r], !/^[~a-z]/.test(n)) return a + "start with a letter.";
                            if (!/^[~a-z0-9-]*$/.test(n)) return a + "have only letters, digits, or dashes.";
                            if (/--/.test(n)) return a + "have only one dash in a row.";
                            if (!/[a-z0-9]$/.test(n)) return a + "end with a letter or digit.";
                            if (!(3 <= n.length)) return a + "be longer"
                        }
                        return null
                    },
                    is_cheap_name: function (e) {
                        return /[0-9-]/.test(e) || !/[aeiouy]/.test(e)
                    },
                    is_empty_user_input: function (e) {
                        return !!this.is_empty(e) || "" === (e + "").trim()
                    },
                    required: function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                        if (this.is_empty(e)) throw new Error("value required for " + t + ": " + e);
                        return e
                    },
                    is_valid_symbol_error: function (e) {
                        var t = "Asset name should ";
                        return this.is_empty(e) ? t + "not be empty." : 2 < e.split(".").length ? t + "have only one dot." : e.length < 3 ? t + "be longer." : 16 < e.length ? t + "be shorter." : /^[A-Z]/.test(e) ? /[A-Z0-9]$/.test(e) ? /^[A-Z0-9\.]$/.test(e) ? t + "contain only letters numbers and perhaps a dot." : null : t + "end with a letter or number" : t + "start with a letter"
                    }
                };
            r.default = i, t.exports = r.default
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/EmitterInstance.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0, r.default = function () {
                i || (i = (0, o.default)({}));
                return i
            };
            var n, i, s = e("event-emitter"),
                o = (n = s) && n.__esModule ? n : {
                    default: n
                };
            t.exports = r.default
        }, {
            "event-emitter": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/event-emitter/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/NumberUtils.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var n, f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                i = e("assert"),
                c = (n = i) && n.__esModule ? n : {
                    default: n
                };
            var s = {
                toImpliedDecimal: function (e, t) {
                    "number" == typeof e ? ((0, c.default)(e <= 9007199254740991, "overflow"), e = "" + e) : e.toString && (e = e.toString()), (0, c.default)("string" == typeof e, "number should be an actual number or string: " + (void 0 === e ? "undefined" : f(e))), e = e.trim(), (0, c.default)(/^[0-9]*\.?[0-9]*$/.test(e), "Invalid decimal number " + e);
                    var r = e.split("."),
                        n = r[0],
                        i = void 0 === n ? "" : n,
                        s = r[1],
                        o = void 0 === s ? "" : s,
                        a = t - o.length;
                    (0, c.default)(0 <= a, "Too many decimal digits in " + e + " to create an implied decimal of " + t);
                    for (var u = 0; u < a; u++) o += "0";
                    for (;
                        "0" === i.charAt(0);) i = i.substring(1);
                    return i + o
                }
            };
            r.default = s, t.exports = r.default
        }, {
            assert: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/assert.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/ObjectId.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = e("bytebuffer"),
                s = e("../../serializer/src/SerializerValidation"),
                o = (n = s) && n.__esModule ? n : {
                    default: n
                };
            var a = i.Long.fromNumber(Math.pow(2, 48) - 1),
                u = function () {
                    function s(e, t, r) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, s), this.space = e, this.type = t, this.instance = r;
                        var n = this.instance.toString(),
                            i = this.space + "." + this.type + "." + n;
                        if (!o.default.is_digits(n)) throw new("Invalid object id " + i)
                    }
                    return s.fromString = function (e) {
                        if (void 0 !== e.space && void 0 !== e.type && void 0 !== e.instance) return e;
                        var t = o.default.require_match(/^([0-9]+)\.([0-9]+)\.([0-9]+)$/, o.default.required(e, "ObjectId"), "ObjectId");
                        return new s(parseInt(t[1]), parseInt(t[2]), i.Long.fromString(t[3]))
                    }, s.fromLong = function (e) {
                        return new s(e.shiftRight(56).toInt(), 255 & e.shiftRight(48).toInt(), e.and(a))
                    }, s.fromByteBuffer = function (e) {
                        return s.fromLong(e.readUint64())
                    }, s.prototype.toLong = function () {
                        return i.Long.fromNumber(this.space).shiftLeft(56).or(i.Long.fromNumber(this.type).shiftLeft(48).or(this.instance))
                    }, s.prototype.appendByteBuffer = function (e) {
                        return e.writeUint64(this.toLong())
                    }, s.prototype.toString = function () {
                        return this.space + "." + this.type + "." + this.instance.toString()
                    }, s
                }();
            r.default = u, t.exports = r.default
        }, {
            "../../serializer/src/SerializerValidation": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/SerializerValidation.js",
            bytebuffer: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bytebuffer/dist/bytebuffer.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/TransactionBuilder.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var a = n(e("assert")),
                u = e("../../ecc"),
                j = e("../../serializer"),
                l = e("bitsharesjs-ws"),
                o = n(e("./ChainTypes"));

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s, f, c = e("safe-buffer").Buffer,
                i = function () {
                    function e() {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.ref_block_num = 0, this.ref_block_prefix = 0, this.expiration = 0, this.operations = [], this.signatures = [], this.signer_private_keys = [], this._broadcast = function (e) {
                            var i = this;
                            return new Promise(function (t, r) {
                                if (i.signed || i.sign(), !i.tr_buffer) throw new Error("not finalized");
                                if (!i.signatures.length) throw new Error("not signed");
                                if (!i.operations.length) throw new Error("no operations");
                                var n = j.ops.signed_transaction.toObject(i);
                                l.Apis.instance().network_api().exec("broadcast_transaction_with_callback", [function (e) {
                                    return t(e)
                                }, n]).then(function () {
                                    e && e()
                                }).catch(function (e) {
                                    console.log(e);
                                    var t = e.message;
                                    t || (t = ""), r(new Error(t + "\nbitshares-crypto  digest " + u.hash.sha256(i.tr_buffer).toString("hex") + " transaction " + i.tr_buffer.toString("hex") + " " + JSON.stringify(n)))
                                })
                            })
                        }.bind(this)
                    }
                    return e.prototype.add_type_operation = function (e, t) {
                        this.add_operation(this.get_type_operation(e, t))
                    }, e.prototype.process_transaction = function (u) {
                        var f = this,
                            c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                            h = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                            e = u.wallet.wallet_object;
                        return l.Apis.instance().chain_id !== e.get("chain_id") ? Promise.reject("Mismatched chain_id; expecting " + e.get("chain_id") + ", but got " + l.Apis.instance().chain_id) : this.set_required_fees().then(function () {
                            var a = {};
                            if (c) {
                                var e = u.getPubkeys_having_PrivateKey(c);
                                if (!e.length) throw new Error("Missing signing key");
                                var t = e,
                                    r = Array.isArray(t),
                                    n = 0;
                                for (t = r ? t : t[Symbol.iterator]();;) {
                                    var i;
                                    if (r) {
                                        if (n >= t.length) break;
                                        i = t[n++]
                                    } else {
                                        if ((n = t.next()).done) break;
                                        i = n.value
                                    }
                                    var s = i,
                                        o = u.getPrivateKey(s);
                                    f.add_signer(o, s), a[s] = !0
                                }
                            }
                            return f.get_potential_signatures().then(function (e) {
                                var t = e.pubkeys,
                                    r = e.addys,
                                    n = u.getPubkeys_having_PrivateKey(t, r);
                                return f.get_required_signatures(n).then(function (e) {
                                    var t = e,
                                        r = Array.isArray(t),
                                        n = 0;
                                    for (t = r ? t : t[Symbol.iterator]();;) {
                                        var i;
                                        if (r) {
                                            if (n >= t.length) break;
                                            i = t[n++]
                                        } else {
                                            if ((n = t.next()).done) break;
                                            i = n.value
                                        }
                                        var s = i;
                                        if (!a[s]) {
                                            var o = u.getPrivateKey(s);
                                            if (!o) throw new Error("Missing signing key for " + s);
                                            f.add_signer(o, s)
                                        }
                                    }
                                })
                            }).then(function () {
                                return h ? f.broadcast() : f.serialize()
                            })
                        })
                    }, e.prototype.finalize = function () {
                        var i = this;
                        return new Promise(function (e, t) {
                            if (i.tr_buffer) throw new Error("already finalized");
                            e(l.Apis.instance().db_api().exec("get_objects", [
                                ["2.1.0"]
                            ]).then(function (e) {
                                s = e[0].time, 0 === i.expiration && (i.expiration = h() + l.ChainConfig.expire_in_secs), i.ref_block_num = 65535 & e[0].head_block_number, i.ref_block_prefix = new c(e[0].head_block_id, "hex").readUInt32LE(4);
                                for (var t, r = i.operations, n = 0; n < r.length; n++)(t = r[n])[1].finalize && t[1].finalize();
                                i.tr_buffer = j.ops.transaction.toBuffer(i)
                            }))
                        })
                    }, e.prototype.id = function () {
                        if (!this.tr_buffer) throw new Error("not finalized");
                        return u.hash.sha256(this.tr_buffer).toString("hex").substring(0, 40)
                    }, e.prototype.add_operation = function (e) {
                        if (this.tr_buffer) throw new Error("already finalized");
                        if ((0, a.default)(e, "operation"), !Array.isArray(e)) throw new Error("Expecting array [operation_id, operation]");
                        this.operations.push(e)
                    }, e.prototype.get_type_operation = function (e, t) {
                        if (this.tr_buffer) throw new Error("already finalized");
                        (0, a.default)(e, "name"), (0, a.default)(t, "operation");
                        var r = j.ops[e];
                        (0, a.default)(r, "Unknown operation " + e);
                        var n = o.default.operations[r.operation_name];
                        if (void 0 === n) throw new Error("unknown operation: " + r.operation_name);
                        if (t.fee || (t.fee = {
                                amount: 0,
                                asset_id: 0
                            }), "proposal_create" === e) {
                            var i = !1,
                                s = 0;
                            t.proposed_ops.forEach(function (e) {
                                var t = void 0;
                                switch (e.op[0]) {
                                    case 0:
                                        t = "from";
                                        break;
                                    case 6:
                                    case 17:
                                        t = "account";
                                        break;
                                    case 10:
                                    case 11:
                                    case 12:
                                    case 13:
                                    case 14:
                                    case 18:
                                    case 43:
                                        t = "issuer";
                                        break;
                                    case 15:
                                        t = "payer";
                                        break;
                                    case 16:
                                        t = "from_account";
                                        break;
                                    case 22:
                                    case 23:
                                    case 24:
                                        t = "fee_paying_account";
                                        break;
                                    case 31:
                                        i = !0, s = 1123200
                                }
                                t in e.op[1] && 0 === e.op[1][t] && (i = !0)
                            }), t.expiration_time || (t.expiration_time = h() + l.ChainConfig.expire_in_secs_proposal), i && (t.review_period_seconds = s + Math.max(f, 86400), t.expiration_time += 3600 + s)
                        }
                        return [n, r.fromObject(t)]
                    }, e.prototype.update_head_block = function () {
                        return Promise.all([l.Apis.instance().db_api().exec("get_objects", [
                            ["2.0.0"]
                        ]), l.Apis.instance().db_api().exec("get_objects", [
                            ["2.1.0"]
                        ])]).then(function (e) {
                            var t = e[0],
                                r = e[1];
                            s = r[0].time, f = t[0].parameters.committee_proposal_review_period
                        })
                    }, e.prototype.set_expire_seconds = function (e) {
                        if (this.tr_buffer) throw new Error("already finalized");
                        return this.expiration = h() + e
                    }, e.prototype.propose = function (e) {
                        if (this.tr_buffer) throw new Error("already finalized");
                        if (!this.operations.length) throw new Error("add operation first");
                        (0, a.default)(e, "proposal_create_options"), (0, a.default)(e.fee_paying_account, "proposal_create_options.fee_paying_account");
                        var t = this.operations.map(function (e) {
                            return {
                                op: e
                            }
                        });
                        return this.operations = [], this.signatures = [], this.signer_private_keys = [], e.proposed_ops = t, this.add_type_operation("proposal_create", e), this
                    }, e.prototype.has_proposed_operation = function () {
                        for (var e = !1, t = 0; t < this.operations.length; t++)
                            if ("proposed_ops" in this.operations[t][1]) {
                                e = !0;
                                break
                            } return e
                    }, e.prototype.set_required_fees = function (e, y) {
                        var v = this;
                        if (this.tr_buffer) throw new Error("already finalized");
                        if (!this.operations.length) throw new Error("add operations first");

                        function g(e) {
                            return 22 === e[0]
                        }
                        var w = [],
                            t = [],
                            r = [],
                            n = [],
                            x = {};

                        function k(e) {
                            var t = null;
                            switch (e[0]) {
                                case 0:
                                    var r = new Array(e[1].memo.message.length + 1).join("a");
                                    t = e[0] + "_" + e[1].amount.asset_id + "_" + r
                            }
                            return t
                        }
                        for (var i, s = 0; s < this.operations.length; s++) {
                            i = this.operations[s];
                            var o = j.ops.operation.toObject(i),
                                a = !1;
                            if (y) {
                                var u = k(o);
                                u && (x[u] ? (x[u].duplicates.push(s), a = !0) : x[u] = {
                                    original: s,
                                    duplicates: []
                                })
                            }
                            g(i) && i[1].proposed_ops.forEach(function (e) {
                                t.push(e), -1 === n.indexOf(e.op[1].fee.asset_id) && n.push("1.3." + e.op[1].fee.asset_id)
                            }), a || (w.push(o), -1 === r.indexOf(w[s][1].fee.asset_id) && r.push(w[s][1].fee.asset_id))
                        }
                        if (!e) {
                            var f = w[0][1].fee;
                            e = f && null !== f.asset_id ? f.asset_id : "1.3.0"
                        }
                        n.length && n.forEach(function (e) {
                            -1 === r.indexOf(e) && r.push(e)
                        });
                        var c = [];
                        if (c.push(Promise.all(r.map(function (e) {
                                return l.Apis.instance().db_api().exec("get_required_fees", [w, e])
                            })).catch(function (e) {
                                console.error("get_required_fees API error: ", e.message)
                            })), 1 < r.length || "1.3.0" !== r[0]) {
                            var h = r.map(function (e) {
                                return e.replace(/^1\./, "2.")
                            });
                            c.push(l.Apis.instance().db_api().exec("get_required_fees", [w, "1.3.0"])), c.push(l.Apis.instance().db_api().exec("get_objects", [h]))
                        }
                        return Promise.all(c).then(function (e) {
                            var t = e[0],
                                s = e[1],
                                r = e[2];
                            void 0 === t && (t = s), s || (s = t[0]);
                            var o = {},
                                a = {};
                            t.forEach(function (e) {
                                var t = e.map(function (e) {
                                        return Array.isArray(e) ? (a[e[1][0].asset_id] = e[1], e[0]) : e
                                    }),
                                    r = t[0].asset_id;
                                o[r] = t
                            }, {});
                            var u = r ? r.reduce(function (e, t) {
                                    return e[t.id.replace(/^2\./, "1.")] = t, e
                                }, {}) : {},
                                i = {},
                                f = {};

                            function c(e, t, r, n) {
                                return e[t] || (e[t] = {
                                    total: 0,
                                    ops: []
                                }), e[t].propIdx ? e[t].propIdx.push(r) : e[t].ops.push(r), "1.3.0" !== t && (e[t].total += n.length ? n[r].amount : n.amount), e
                            }
                            for (var n = function (n) {
                                    var e = w[n],
                                        t = e[1].fee.asset_id;
                                    g(e) ? (i = c(i, t, n, s[n][0]), e[1].proposed_ops.forEach(function (e, t) {
                                        var r = e.op[1].fee.asset_id;
                                        f[n] || (f[n] = {}), f[n][r] || (f[n][r] = {
                                            total: 0,
                                            ops: [n],
                                            propIdx: []
                                        }), f[n] = c(f[n], r, t, s[n][1])
                                    })) : i = c(i, t, n, s[n])
                                }, h = 0; h < w.length; h++) n(h);

                            function l(n) {
                                if (!Object.keys(n).length) return [];
                                var i = [],
                                    e = function (r) {
                                        var e = u[r] ? parseInt(u[r].fee_pool, 10) : 0;
                                        n[r].total > e ? n[r].ops.forEach(function (t) {
                                            2 === s[t].length && "propIdx" in n[r] ? n[r].propIdx.forEach(function (e) {
                                                i[e] = s[t][1][e]
                                            }) : 2 === s[t].length ? i[t] = s[t][0] : i[t] = s[t]
                                        }) : n[r].ops.forEach(function (e) {
                                            2 === s[e].length && "propIdx" in n[r] ? n[r].propIdx.forEach(function (e) {
                                                i[e] = a[r][e]
                                            }) : i[e] = o[r][e]
                                        })
                                    };
                                for (var t in n) e(t);
                                return i
                            }
                            var d = l(i),
                                p = {};
                            for (var _ in f) p[_] = l(f[_]);
                            for (var b = function (e, t) {
                                    if (!e.fee || 0 === e.fee.amount || e.fee.amount.toString && "0" === e.fee.amount.toString())
                                        if (y) {
                                            var r = function (e, t) {
                                                var r = k(e),
                                                    n = x[r];
                                                if (n) {
                                                    if (n.original === t) return t;
                                                    if (-1 !== n.duplicates.indexOf(t)) return n.original
                                                }
                                            }(j.ops.operation.toObject(v.operations[t]), t);
                                            e.fee = 0 <= r ? d[r] : d[t]
                                        } else e.fee = d[t];
                                    if (e.proposed_ops) {
                                        for (var n = 0; n < e.proposed_ops.length; n++) e.proposed_ops[n].op[1].fee.asset_id = p[t][n].asset_id;
                                        return []
                                    }
                                }, m = 0; m < v.operations.length; m++) b(v.operations[m][1], m)
                        })
                    }, e.prototype.get_potential_signatures = function () {
                        var e = j.ops.signed_transaction.toObject(this);
                        return Promise.all([l.Apis.instance().db_api().exec("get_potential_signatures", [e]), l.Apis.instance().db_api().exec("get_potential_address_signatures", [e])]).then(function (e) {
                            return {
                                pubkeys: e[0],
                                addys: e[1]
                            }
                        })
                    }, e.prototype.get_required_signatures = function (e) {
                        if (!e.length) return Promise.resolve([]);
                        var t = j.ops.signed_transaction.toObject(this);
                        return l.Apis.instance().db_api().exec("get_required_signatures", [t, e]).then(function (e) {
                            return e
                        })
                    }, e.prototype.add_signer = function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : e.toPublicKey();
                        if ((0, a.default)(e.d, "required PrivateKey object"), this.signed) throw new Error("already signed");
                        t.Q || (t = u.PublicKey.fromPublicKeyString(t));
                        var r = e.toHex(),
                            n = this.signer_private_keys,
                            i = Array.isArray(n),
                            s = 0;
                        for (n = i ? n : n[Symbol.iterator]();;) {
                            var o;
                            if (i) {
                                if (s >= n.length) break;
                                o = n[s++]
                            } else {
                                if ((s = n.next()).done) break;
                                o = s.value
                            }
                            if (o[0].toHex() === r) return
                        }
                        this.signer_private_keys.push([e, t])
                    }, e.prototype.sign = function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : l.Apis.instance().chain_id;
                        if (!this.tr_buffer) throw new Error("not finalized");
                        if (this.signed) throw new Error("already signed");
                        if (!this.signer_private_keys.length) throw new Error("Transaction was not signed. Do you have a private key? [no_signers]");
                        for (var t = this.signer_private_keys.length, r = 0; 0 < t ? r < t : t < r; r++) {
                            var n = this.signer_private_keys[r],
                                i = n[0],
                                s = n[1],
                                o = u.Signature.signBuffer(c.concat([new c(e, "hex"), this.tr_buffer]), i, s);
                            this.signatures.push(o.toBuffer())
                        }
                        this.signer_private_keys = [], this.signed = !0
                    }, e.prototype.serialize = function () {
                        return j.ops.signed_transaction.toObject(this)
                    }, e.prototype.toObject = function () {
                        return j.ops.signed_transaction.toObject(this)
                    }, e.prototype.broadcast = function (e) {
                        var t = this;
                        return this.tr_buffer ? this._broadcast(e) : this.finalize().then(function () {
                            return t._broadcast(e)
                        })
                    }, e
                }(),
                h = function () {
                    var e = Math.ceil(function (e) {
                            return e ? (/Z$/.test(e) || (e += "Z"), new Date(e)) : new Date("1970-01-01T00:00:00.000Z")
                        }(s).getTime() / 1e3),
                        t = Math.ceil(Date.now() / 1e3);
                    return 30 < t - e ? e : Math.max(t, e)
                };
            r.default = i, t.exports = r.default
        }, {
            "../../ecc": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/index.js",
            "../../serializer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/index.js",
            "./ChainTypes": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/ChainTypes.js",
            assert: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/assert.js",
            "bitsharesjs-ws": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/index.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/TransactionHelper.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = e("secure-random"),
                s = (n = i) && n.__esModule ? n : {
                    default: n
                },
                o = e("bytebuffer"),
                a = e("../../ecc"),
                u = e("../../serializer"),
                f = e("bitsharesjs-ws");
            var c = {
                unique_nonce_entropy: null,
                unique_nonce_uint64: function () {
                    var e = c.unique_nonce_entropy = null === c.unique_nonce_entropy ? parseInt(s.default.randomUint8Array(1)[0]) : ++c.unique_nonce_entropy % 256,
                        t = o.Long.fromNumber(Date.now());
                    return (t = t.shiftLeft(8).or(o.Long.fromNumber(e))).toString()
                },
                to_json: function (e) {
                    return function (e, t) {
                        var r = u.ops.signed_transaction.toObject(e);
                        if (t) {
                            var n = f.Apis.instance().network_api();
                            return console.log("... tr_object", JSON.stringify(r)), n.exec("broadcast_transaction", [r])
                        }
                        return r
                    }(e, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
                },
                signed_tr_json: function (e, n) {
                    var i = u.ops.transaction.toBuffer(e);
                    return (e = u.ops.transaction.toObject(e)).signatures = function () {
                        for (var e = [], t = 0; 0 < n.length ? t < n.length : t > n.length; n.length, t++) {
                            var r = n[t];
                            e.push(a.Signature.signBuffer(i, r).toHex())
                        }
                        return e
                    }(), e
                },
                expire_in_min: function (e) {
                    return Math.round(Date.now() / 1e3) + 60 * e
                },
                seconds_from_now: function (e) {
                    return Math.round(Date.now() / 1e3) + e
                },
                template: function (e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                            use_default: !0,
                            annotate: !0
                        },
                        r = u.ops[e];
                    if (!r) throw new Error("unknown serializer_operation_type " + e);
                    return r.toObject(void 0, t)
                },
                new_operation: function (e) {
                    var t = u.ops[e];
                    if (!t) throw new Error("unknown serializer_operation_type " + e);
                    var r = t.toObject(void 0, {
                        use_default: !0,
                        annotate: !0
                    });
                    return t.fromObject(r)
                },
                instance: function (e) {
                    return e.substring("0.0.".length)
                }
            };
            r.default = c, t.exports = r.default
        }, {
            "../../ecc": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/index.js",
            "../../serializer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/index.js",
            "bitsharesjs-ws": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/index.js",
            bytebuffer: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bytebuffer/dist/bytebuffer.js",
            "secure-random": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/secure-random/lib/secure-random.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/state.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0, r.get = function (t) {
                return function (e) {
                    return t[e] || ""
                }
            }, r.set = function (r) {
                return function (e, t) {
                    return r[e] = t, this
                }
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/index.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0, r.key = r.hash = r.brainKey = r.Signature = r.PublicKey = r.PrivateKey = r.Aes = r.Address = void 0;
            var n = h(e("./src/address")),
                i = h(e("./src/aes")),
                s = h(e("./src/PrivateKey")),
                o = h(e("./src/PublicKey")),
                a = h(e("./src/signature")),
                u = h(e("./src/BrainKey")),
                f = function (e) {
                    {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t.default = e, t
                    }
                }(e("./src/hash")),
                c = h(e("./src/KeyUtils"));

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            r.Address = n.default, r.Aes = i.default, r.PrivateKey = s.default, r.PublicKey = o.default, r.Signature = a.default, r.brainKey = u.default, r.hash = f, r.key = c.default
        }, {
            "./src/BrainKey": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/BrainKey.js",
            "./src/KeyUtils": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/KeyUtils.js",
            "./src/PrivateKey": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/PrivateKey.js",
            "./src/PublicKey": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/PublicKey.js",
            "./src/address": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/address.js",
            "./src/aes": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/aes.js",
            "./src/hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/hash.js",
            "./src/signature": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/signature.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/BrainKey.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0, r.default = function (e) {
                if ("string" == typeof e) return (e = e.trim()).split(/[\t\n\v\f\r ]+/).join(" ");
                throw new Error("string required for brainKey")
            }, t.exports = r.default
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/KeyUtils.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var n = c(e("./PrivateKey")),
                i = c(e("./PublicKey")),
                s = c(e("./address")),
                u = c(e("./aes")),
                f = e("./hash"),
                a = c(e("secure-random")),
                o = e("bitsharesjs-ws");

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var h = e("safe-buffer").Buffer,
                l = {
                    aes_checksum: function (e) {
                        if ("string" != typeof e) throw new "password string required";
                        for (var t = a.default.randomBuffer(4).toString("hex"), r = 0, n = t + e, i = Date.now(); Date.now() - i < 250;) n = (0, f.sha256)(n), r += 1;
                        var s = (0, f.sha256)(n),
                            o = [r, t.toString("hex"), s.slice(0, 4).toString("hex")].join(",");
                        return {
                            aes_private: u.default.fromSeed(n),
                            checksum: o
                        }
                    },
                    aes_private: function (e, t) {
                        for (var r = t.split(","), n = r[0], i = r[1], s = r[2], o = i + e, a = 0; 0 < n ? a < n : n < a; a++) o = (0, f.sha256)(o);
                        if ((0, f.sha256)(o).slice(0, 4).toString("hex") !== s) throw new Error("wrong password");
                        return u.default.fromSeed(o)
                    },
                    random32ByteBuffer: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.browserEntropy();
                        if ("string" != typeof e) throw new Error("string required for entropy");
                        if (e.length < 32) throw new Error("expecting at least 32 bytes of entropy");
                        for (var t = Date.now(); Date.now() - t < 250;) e = (0, f.sha256)(e);
                        var r = [];
                        return r.push(e), r.push(a.default.randomBuffer(32)), (0, f.sha256)(h.concat(r))
                    },
                    suggest_brain_key: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ",",
                            t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.browserEntropy(),
                            r = this.random32ByteBuffer(t),
                            n = e.split(",");
                        if (49744 !== n.length) throw new Error("expecting 49744 but got " + n.length + " dictionary words");
                        for (var i = [], s = 0; s < 32; s += 2) {
                            var o = ((r[s] << 8) + r[s + 1]) / Math.pow(2, 16),
                                a = Math.round(n.length * o);
                            i.push(n[a])
                        }
                        return this.normalize_brainKey(i.join(" "))
                    },
                    get_random_key: function (e) {
                        return n.default.fromBuffer(this.random32ByteBuffer(e))
                    },
                    get_brainPrivateKey: function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (t < 0) throw new Error("invalid sequence");
                        if ("" === e.trim()) throw new Error("empty brain key");
                        return e = l.normalize_brainKey(e), n.default.fromBuffer((0, f.sha256)((0, f.sha512)(e + " " + t)))
                    },
                    normalize_brainKey: function (e) {
                        if ("string" != typeof e) throw new Error("string required for brainKey");
                        if ("" === (e = e.trim())) throw new Error("empty brain key");
                        return e.split(/[\t\n\v\f\r ]+/).join(" ")
                    },
                    browserEntropy: function () {
                        var t = "";
                        try {
                            t = (new Date).toString() + " " + window.screen.height + " " + window.screen.width + " " + window.screen.colorDepth + "  " + window.screen.availHeight + " " + window.screen.availWidth + " " + window.screen.pixelDepth + navigator.language + " " + window.location + " " + window.history.length;
                            for (var e, r = 0; r < navigator.mimeTypes.length; r++) t += (e = navigator.mimeTypes[r]).description + " " + e.type + " " + e.suffixes + " ";
                            console.log("INFO\tbrowserEntropy gathered")
                        } catch (e) {
                            t = (0, f.sha256)((new Date).toString())
                        }
                        return t += h.from(t).toString("binary") + " " + (new Date).toString()
                    },
                    addresses: function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : o.ChainConfig.address_prefix,
                            r = i.default.fromPublicKeyString(e, t);
                        return [s.default.fromPublic(r, !1, 0).toString(t), s.default.fromPublic(r, !0, 0).toString(t), s.default.fromPublic(r, !1, 56).toString(t), s.default.fromPublic(r, !0, 56).toString(t), r.toAddressString(t)]
                    }
                };
            r.default = l, t.exports = r.default
        }, {
            "./PrivateKey": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/PrivateKey.js",
            "./PublicKey": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/PublicKey.js",
            "./address": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/address.js",
            "./aes": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/aes.js",
            "./hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/hash.js",
            "bitsharesjs-ws": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/index.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js",
            "secure-random": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/secure-random/lib/secure-random.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/PrivateKey.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var a = e("ecurve"),
                u = i(e("bigi")),
                f = e("bs58"),
                c = e("./hash"),
                n = i(e("./PublicKey")),
                h = i(e("deep-equal")),
                l = i(e("assert"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = (0, a.getCurveByName)("secp256k1"),
                s = d.n,
                p = e("safe-buffer").Buffer,
                o = function () {
                    function o(e) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, o), this.d = e
                    }
                    return o.fromBuffer = function (e) {
                        if (!p.isBuffer(e)) throw new Error("Expecting paramter to be a Buffer type");
                        if (32 !== e.length && console.log("WARN: Expecting 32 bytes, instead got " + e.length + ", stack trace:", (new Error).stack), 0 === e.length) throw new Error("Empty buffer");
                        return new o(u.default.fromBuffer(e))
                    }, o.fromSeed = function (e) {
                        if ("string" != typeof e) throw new Error("seed must be of type string");
                        return o.fromBuffer((0, c.sha256)(e))
                    }, o.fromWif = function (e) {
                        var t = p.from((0, f.decode)(e)),
                            r = t.readUInt8(0);
                        l.default.equal(128, r, "Expected version 128, instead got " + r);
                        var n = t.slice(0, -4),
                            i = t.slice(-4),
                            s = (0, c.sha256)(n);
                        if (s = (s = (0, c.sha256)(s)).slice(0, 4), !(0, h.default)(i, s)) throw new Error("Checksum did not match");
                        return n = n.slice(1), o.fromBuffer(n)
                    }, o.prototype.toWif = function () {
                        var e = this.toBuffer();
                        e = p.concat([p.from([128]), e]);
                        var t = (0, c.sha256)(e);
                        t = (t = (0, c.sha256)(t)).slice(0, 4);
                        var r = p.concat([e, t]);
                        return (0, f.encode)(r)
                    }, o.prototype.toPublicKeyPoint = function () {
                        return d.G.multiply(this.d)
                    }, o.prototype.toPublicKey = function () {
                        return this.public_key ? this.public_key : this.public_key = n.default.fromPoint(this.toPublicKeyPoint())
                    }, o.prototype.toBuffer = function () {
                        return this.d.toBuffer(32)
                    }, o.prototype.get_shared_secret = function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            r = (e = _(e)).toUncompressed().toBuffer(),
                            n = a.Point.fromAffine(d, u.default.fromBuffer(r.slice(1, 33)), u.default.fromBuffer(r.slice(33, 65))),
                            i = this.toBuffer(),
                            s = n.multiply(u.default.fromBuffer(i)).affineX.toBuffer({
                                size: 32
                            });
                        if (!t && s.length < 32) {
                            var o = p.alloc(32 - s.length).fill(0);
                            s = p.concat([o, s])
                        }
                        return (0, c.sha512)(s)
                    }, o.prototype.child = function (e) {
                        e = p.concat([this.toPublicKey().toBuffer(), e]), e = (0, c.sha256)(e);
                        var t = u.default.fromBuffer(e);
                        if (0 <= t.compareTo(s)) throw new Error("Child offset went out of bounds, try again");
                        var r = this.d.add(t);
                        if (0 === r.signum()) throw new Error("Child offset derived to an invalid key, try again");
                        return new o(r)
                    }, o.prototype.toByteBuffer = function () {
                        var e = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
                        return this.appendByteBuffer(e), e.copy(0, e.offset)
                    }, o.fromHex = function (e) {
                        return o.fromBuffer(new p(e, "hex"))
                    }, o.prototype.toHex = function () {
                        return this.toBuffer().toString("hex")
                    }, o
                }();
            r.default = o;
            var _ = function (e) {
                return null == e ? e : e.Q ? e : n.default.fromStringOrThrow(e)
            };
            t.exports = r.default
        }, {
            "./PublicKey": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/PublicKey.js",
            "./hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/hash.js",
            assert: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/assert.js",
            bigi: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/index.js",
            bs58: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bs58/index.js",
            "deep-equal": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/deep-equal/index.js",
            ecurve: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ecurve/lib/index.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/PublicKey.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var i = s(e("bigi")),
                n = e("ecurve"),
                o = e("bs58"),
                a = e("./hash"),
                u = e("bitsharesjs-ws"),
                f = s(e("assert")),
                c = s(e("deep-equal"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var h = (0, n.getCurveByName)("secp256k1"),
                l = e("safe-buffer").Buffer,
                d = h.G,
                p = h.n,
                _ = function () {
                    function s(e) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, s), this.Q = e
                    }
                    return s.fromBinary = function (e) {
                        return s.fromBuffer(l.from(e, "binary"))
                    }, s.fromBuffer = function (e) {
                        return "000000000000000000000000000000000000000000000000000000000000000000" === e.toString("hex") ? new s(null) : new s(n.Point.decodeFrom(h, e))
                    }, s.prototype.toBuffer = function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.Q ? this.Q.compressed : null;
                        return null === this.Q ? l.from("000000000000000000000000000000000000000000000000000000000000000000", "hex") : this.Q.getEncoded(e)
                    }, s.fromPoint = function (e) {
                        return new s(e)
                    }, s.prototype.toUncompressed = function () {
                        var e = this.Q.getEncoded(!1),
                            t = n.Point.decodeFrom(h, e);
                        return s.fromPoint(t)
                    }, s.prototype.toBlockchainAddress = function () {
                        var e = this.toBuffer(),
                            t = (0, a.sha512)(e);
                        return (0, a.ripemd160)(t)
                    }, s.prototype.toString = function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : u.ChainConfig.address_prefix;
                        return this.toPublicKeyString(e)
                    }, s.prototype.toPublicKeyString = function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : u.ChainConfig.address_prefix,
                            t = this.toBuffer(),
                            r = (0, a.ripemd160)(t),
                            n = l.concat([t, r.slice(0, 4)]);
                        return e + (0, o.encode)(n)
                    }, s.fromPublicKeyString = function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : u.ChainConfig.address_prefix;
                        try {
                            return s.fromStringOrThrow(e, t)
                        } catch (e) {
                            return null
                        }
                    }, s.fromStringOrThrow = function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : u.ChainConfig.address_prefix;
                        null === e.Q && (e = t + "1111111111111111111111111111111114T1Anm");
                        var r = e.slice(0, t.length);
                        f.default.equal(t, r, "Expecting key to begin with " + t + ", instead got " + r), e = e.slice(t.length);
                        var n = (e = l.from((0, o.decode)(e), "binary")).slice(-4);
                        e = e.slice(0, -4);
                        var i = (0, a.ripemd160)(e);
                        if (i = i.slice(0, 4), !(0, c.default)(n, i)) throw new Error("Checksum did not match");
                        return s.fromBuffer(e)
                    }, s.prototype.toAddressString = function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : u.ChainConfig.address_prefix,
                            t = this.toBuffer(),
                            r = (0, a.sha512)(t),
                            n = (0, a.ripemd160)(r),
                            i = (0, a.ripemd160)(n);
                        return n = l.concat([n, i.slice(0, 4)]), e + (0, o.encode)(n)
                    }, s.prototype.toPtsAddy = function () {
                        var e = this.toBuffer(),
                            t = (0, a.sha256)(e),
                            r = (0, a.ripemd160)(t);
                        r = l.concat([l.from([56]), r]);
                        var n = (0, a.sha256)(r);
                        return n = (0, a.sha256)(n), r = l.concat([r, n.slice(0, 4)]), (0, o.encode)(r)
                    }, s.prototype.child = function (e) {
                        (0, f.default)(l.isBuffer(e), "Buffer required: offset"), f.default.equal(e.length, 32, "offset length"), e = l.concat([this.toBuffer(), e]), e = (0, a.sha256)(e);
                        var t = i.default.fromBuffer(e);
                        if (0 <= t.compareTo(p)) throw new Error("Child offset went out of bounds, try again");
                        var r = d.multiply(t),
                            n = this.Q.add(r);
                        if (h.isInfinity(n)) throw new Error("Child offset derived to an invalid key, try again");
                        return s.fromPoint(n)
                    }, s.prototype.toByteBuffer = function () {
                        var e = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN);
                        return this.appendByteBuffer(e), e.copy(0, e.offset)
                    }, s.fromHex = function (e) {
                        return s.fromBuffer(l.from(e, "hex"))
                    }, s.prototype.toHex = function () {
                        return this.toBuffer().toString("hex")
                    }, s.fromPublicKeyStringHex = function (e) {
                        return s.fromPublicKeyString(l.from(e, "hex"))
                    }, s
                }();
            r.default = _, t.exports = r.default
        }, {
            "./hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/hash.js",
            assert: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/assert.js",
            bigi: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/index.js",
            "bitsharesjs-ws": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/index.js",
            bs58: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bs58/index.js",
            "deep-equal": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/deep-equal/index.js",
            ecurve: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ecurve/lib/index.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/address.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var o = n(e("assert")),
                a = e("bitsharesjs-ws"),
                c = e("./hash"),
                u = e("bs58"),
                h = n(e("deep-equal"));

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = e("safe-buffer").Buffer,
                i = function () {
                    function f(e) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, f), this.addy = e
                    }
                    return f.fromBuffer = function (e) {
                        var t = (0, c.sha512)(e);
                        return new f((0, c.ripemd160)(t))
                    }, f.fromString = function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : a.ChainConfig.address_prefix,
                            r = e.slice(0, t.length);
                        o.default.equal(t, r, "Expecting key to begin with " + t + ", instead got " + r);
                        var n = e.slice(t.length),
                            i = (n = new l((0, u.decode)(n), "binary")).slice(-4);
                        n = n.slice(0, -4);
                        var s = (0, c.ripemd160)(n);
                        if (s = s.slice(0, 4), !(0, h.default)(i, s)) throw new Error("Checksum did not match");
                        return new f(n)
                    }, f.fromPublic = function (e) {
                        var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                            r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 56,
                            n = (0, c.sha256)(e.toBuffer(t)),
                            i = (0, c.ripemd160)(n),
                            s = l.alloc(1);
                        s.writeUInt8(255 & r, 0);
                        var o = l.concat([s, i]),
                            a = (0, c.sha256)(o);
                        a = (0, c.sha256)(a);
                        var u = l.concat([o, a.slice(0, 4)]);
                        return new f((0, c.ripemd160)(u))
                    }, f.prototype.toBuffer = function () {
                        return this.addy
                    }, f.prototype.toString = function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : a.ChainConfig.address_prefix,
                            t = (0, c.ripemd160)(this.addy),
                            r = l.concat([this.addy, t.slice(0, 4)]);
                        return e + (0, u.encode)(r)
                    }, f
                }();
            r.default = i, t.exports = r.default
        }, {
            "./hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/hash.js",
            assert: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/assert.js",
            "bitsharesjs-ws": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/index.js",
            bs58: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bs58/index.js",
            "deep-equal": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/deep-equal/index.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/aes.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var n = a(e("crypto-js/aes")),
                i = a(e("crypto-js/enc-hex")),
                s = a(e("crypto-js/enc-base64")),
                o = a(e("assert")),
                h = e("./hash");

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = e("safe-buffer").Buffer,
                u = function () {
                    function c(e, t) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, c), this.iv = e, this.key = t
                    }
                    return c.prototype.clear = function () {
                        return this.iv = this.key = void 0
                    }, c.fromSeed = function (e) {
                        if (void 0 === e) throw new Error("seed is required");
                        var t = (0, h.sha512)(e);
                        return t = t.toString("hex"), c.fromSha512(t)
                    }, c.fromSha512 = function (e) {
                        return o.default.equal(e.length, 128, "A Sha512 in HEX should be 128 characters long, instead got " + e.length), new c(i.default.parse(e.substring(64, 96)), i.default.parse(e.substring(0, 64)))
                    }, c.fromBuffer = function (e) {
                        return (0, o.default)(l.isBuffer(e), "Expecting Buffer"), o.default.equal(e.length, 64, "A Sha512 Buffer should be 64 characters long, instead got " + e.length), c.fromSha512(e.toString("hex"))
                    }, c.decrypt_with_checksum = function (e, t, r, n) {
                        var i = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
                        null == r && (r = ""), l.isBuffer(n) || (n = new l(n, "hex"));
                        var s = e.get_shared_secret(t, i),
                            o = c.fromSeed(l.concat([l.from("" + r), l.from(s.toString("hex"))])).decrypt(n);
                        if (!(4 <= o.length)) throw new Error("Invalid key, could not decrypt message(1)");
                        var a = o.slice(0, 4),
                            u = o.slice(4),
                            f = (0, h.sha256)(u);
                        if (f = (f = f.slice(0, 4)).toString("hex"), a.toString("hex") !== f) throw new Error("Invalid key, could not decrypt message(2)");
                        return u
                    }, c.encrypt_with_checksum = function (e, t, r, n) {
                        null == r && (r = ""), l.isBuffer(n) || (n = new l(n, "binary"));
                        var i = e.get_shared_secret(t),
                            s = c.fromSeed(l.concat([l.from("" + r), l.from(i.toString("hex"))])),
                            o = (0, h.sha256)(n).slice(0, 4),
                            a = l.concat([o, n]);
                        return s.encrypt(a)
                    }, c.prototype._decrypt_word_array = function (e) {
                        return n.default.decrypt({
                            ciphertext: e,
                            salt: null
                        }, this.key, {
                            iv: this.iv
                        })
                    }, c.prototype._encrypt_word_array = function (e) {
                        var t = n.default.encrypt(e, this.key, {
                            iv: this.iv
                        });
                        return s.default.parse(t.toString())
                    }, c.prototype.decrypt = function (e) {
                        if ("string" == typeof e && (e = new l(e, "binary")), !l.isBuffer(e)) throw new Error("buffer required");
                        (0, o.default)(e, "Missing cipher text");
                        var t = this.decryptHex(e.toString("hex"));
                        return new l(t, "hex")
                    }, c.prototype.encrypt = function (e) {
                        if ("string" == typeof e && (e = new l(e, "binary")), !l.isBuffer(e)) throw new Error("buffer required");
                        var t = this.encryptHex(e.toString("hex"));
                        return new l(t, "hex")
                    }, c.prototype.encryptToHex = function (e) {
                        if ("string" == typeof e && (e = new l(e, "binary")), !l.isBuffer(e)) throw new Error("buffer required");
                        return this.encryptHex(e.toString("hex"))
                    }, c.prototype.decryptHex = function (e) {
                        (0, o.default)(e, "Missing cipher text");
                        var t = i.default.parse(e),
                            r = this._decrypt_word_array(t);
                        return i.default.stringify(r)
                    }, c.prototype.decryptHexToBuffer = function (e) {
                        (0, o.default)(e, "Missing cipher text");
                        var t = i.default.parse(e),
                            r = this._decrypt_word_array(t),
                            n = i.default.stringify(r);
                        return new l(n, "hex")
                    }, c.prototype.decryptHexToText = function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "binary";
                        return this.decryptHexToBuffer(e).toString(t)
                    }, c.prototype.encryptHex = function (e) {
                        var t = i.default.parse(e),
                            r = this._encrypt_word_array(t);
                        return i.default.stringify(r)
                    }, c
                }();
            r.default = u, t.exports = r.default
        }, {
            "./hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/hash.js",
            assert: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/assert.js",
            "crypto-js/aes": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/aes.js",
            "crypto-js/enc-base64": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/enc-base64.js",
            "crypto-js/enc-hex": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/enc-hex.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/ecdsa.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0, r.verifyRaw = r.verify = r.sign = r.recoverPubKey = r.deterministicGenerateK = r.calcPubKeyRecoveryParam = void 0;
            var _ = n(e("assert")),
                f = e("./hash"),
                c = n(e("./enforce_types")),
                h = n(e("bigi")),
                l = n(e("./ecsignature"));

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var d = e("safe-buffer").Buffer;

            function p(e, t, r, n, i) {
                (0, c.default)("Buffer", t), (0, c.default)(h.default, r), i && (t = (0, f.sha256)(d.concat([t, d.alloc(i)]))), _.default.equal(t.length, 32, "Hash must be 256 bit");
                var s = r.toBuffer(32),
                    o = d.alloc(32),
                    a = d.alloc(32);
                a.fill(1), o.fill(0), o = (0, f.HmacSHA256)(d.concat([a, new d([0]), s, t]), o), a = (0, f.HmacSHA256)(a, o), o = (0, f.HmacSHA256)(d.concat([a, new d([1]), s, t]), o), a = (0, f.HmacSHA256)(a, o), a = (0, f.HmacSHA256)(a, o);
                for (var u = h.default.fromBuffer(a); u.signum() <= 0 || 0 <= u.compareTo(e.n) || !n(u);) o = (0, f.HmacSHA256)(d.concat([a, new d([0])]), o), a = (0, f.HmacSHA256)(a, o), a = (0, f.HmacSHA256)(a, o), u = h.default.fromBuffer(a);
                return u
            }

            function i(e, t, r, n) {
                var i = e.n,
                    s = e.G,
                    o = r.r,
                    a = r.s;
                if (o.signum() <= 0 || 0 <= o.compareTo(i)) return !1;
                if (a.signum() <= 0 || 0 <= a.compareTo(i)) return !1;
                var u = a.modInverse(i),
                    f = t.multiply(u).mod(i),
                    c = o.multiply(u).mod(i),
                    h = s.multiplyTwo(f, n, c);
                return !e.isInfinity(h) && h.affineX.mod(i).equals(o)
            }

            function s(e, t, r, n) {
                _.default.strictEqual(3 & n, n, "Recovery param is more than two bits");
                var i = e.n,
                    s = e.G,
                    o = r.r,
                    a = r.s;
                (0, _.default)(0 < o.signum() && o.compareTo(i) < 0, "Invalid r value"), (0, _.default)(0 < a.signum() && a.compareTo(i) < 0, "Invalid s value");
                var u = 1 & n,
                    f = n >> 1 ? o.add(i) : o,
                    c = e.pointFromX(u, f),
                    h = c.multiply(i);
                (0, _.default)(e.isInfinity(h), "nR is not a valid curve point");
                var l = t.negate().mod(i),
                    d = o.modInverse(i),
                    p = c.multiplyTwo(a, s, l).multiply(d);
                return e.validate(p), p
            }
            r.calcPubKeyRecoveryParam = function (e, t, r, n) {
                for (var i = 0; i < 4; i++)
                    if (s(e, t, r, i).equals(n)) return i;
                throw new Error("Unable to find valid recovery factor")
            }, r.deterministicGenerateK = p, r.recoverPubKey = s, r.sign = function (r, e, n, t) {
                var i = h.default.fromBuffer(e),
                    s = r.n,
                    o = r.G,
                    a = void 0,
                    u = void 0;
                p(r, e, n, function (e) {
                    var t = o.multiply(e);
                    return !r.isInfinity(t) && 0 !== (a = t.affineX.mod(s)).signum() && 0 !== (u = e.modInverse(s).multiply(i.add(n.multiply(a))).mod(s)).signum()
                }, t);
                var f = s.shiftRight(1);
                return 0 < u.compareTo(f) && (u = s.subtract(u)), new l.default(a, u)
            }, r.verify = function (e, t, r, n) {
                return i(e, h.default.fromBuffer(t), r, n)
            }, r.verifyRaw = i
        }, {
            "./ecsignature": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/ecsignature.js",
            "./enforce_types": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/enforce_types.js",
            "./hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/hash.js",
            assert: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/assert.js",
            bigi: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/index.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/ecsignature.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var u = i(e("assert")),
                n = i(e("./enforce_types")),
                f = i(e("bigi"));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = e("safe-buffer").Buffer;

            function c(e, t) {
                (0, n.default)(f.default, e), (0, n.default)(f.default, t), this.r = e, this.s = t
            }
            c.parseCompact = function (e) {
                u.default.equal(e.length, 65, "Invalid signature length");
                var t = e.readUInt8(0) - 27;
                return u.default.equal(t, 7 & t, "Invalid signature parameter"), {
                    compressed: !!(4 & t),
                    i: t &= 3,
                    signature: new c(f.default.fromBuffer(e.slice(1, 33)), f.default.fromBuffer(e.slice(33)))
                }
            }, c.fromDER = function (e) {
                u.default.equal(e.readUInt8(0), 48, "Not a DER sequence"), u.default.equal(e.readUInt8(1), e.length - 2, "Invalid sequence length"), u.default.equal(e.readUInt8(2), 2, "Expected a DER integer");
                var t = e.readUInt8(3);
                (0, u.default)(0 < t, "R length is zero");
                var r = 4 + t;
                u.default.equal(e.readUInt8(r), 2, "Expected a DER integer (2)");
                var n = e.readUInt8(r + 1);
                (0, u.default)(0 < n, "S length is zero");
                var i = e.slice(4, r),
                    s = e.slice(r + 2);
                r += 2 + n, 1 < t && 0 === i.readUInt8(0) && (0, u.default)(128 & i.readUInt8(1), "R value excessively padded"), 1 < n && 0 === s.readUInt8(0) && (0, u.default)(128 & s.readUInt8(1), "S value excessively padded"), u.default.equal(r, e.length, "Invalid DER encoding");
                var o = f.default.fromDERInteger(i),
                    a = f.default.fromDERInteger(s);
                return (0, u.default)(0 <= o.signum(), "R value is negative"), (0, u.default)(0 <= a.signum(), "S value is negative"), new c(o, a)
            }, c.parseScriptSignature = function (e) {
                var t = e.readUInt8(e.length - 1),
                    r = -129 & t;
                return (0, u.default)(0 < r && r < 4, "Invalid hashType"), {
                    signature: c.fromDER(e.slice(0, -1)),
                    hashType: t
                }
            }, c.prototype.toCompact = function (e, t) {
                t && (e += 4), e += 27;
                var r = s.alloc(65);
                return r.writeUInt8(e, 0), this.r.toBuffer(32).copy(r, 1), this.s.toBuffer(32).copy(r, 33), r
            }, c.prototype.toDER = function () {
                var e = this.r.toDERInteger(),
                    t = this.s.toDERInteger(),
                    r = [];
                return r.push(2, e.length), (r = r.concat(e)).push(2, t.length), (r = r.concat(t)).unshift(48, r.length), s.from(r)
            }, c.prototype.toScriptSignature = function (e) {
                var t = s.alloc(1);
                return t.writeUInt8(e, 0), s.concat([this.toDER(), t])
            }, r.default = c, t.exports = r.default
        }, {
            "./enforce_types": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/enforce_types.js",
            assert: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/assert.js",
            bigi: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/index.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/enforce_types.js": [function (e, t, i) {
            (function (r) {
                "use strict";

                function n(e) {
                    var t = e.toString().match(/function (.*?)\(/);
                    return t ? t[1] : null
                }
                i.__esModule = !0, i.default = function (e, t) {
                    switch (e) {
                        case "Array":
                            if (Array.isArray(t)) return;
                            break;
                        case "Boolean":
                            if ("boolean" == typeof t) return;
                            break;
                        case "Buffer":
                            if (r.isBuffer(t)) return;
                            break;
                        case "Number":
                            if ("number" == typeof t) return;
                            break;
                        case "String":
                            if ("string" == typeof t) return;
                            break;
                        default:
                            if (n(t.constructor) === n(e)) return
                    }
                    throw new TypeError("Expected " + (n(e) || e) + ", got " + t)
                }, t.exports = i.default
            }).call(this, {
                isBuffer: e("../../../../is-buffer/index.js")
            })
        }, {
            "../../../../is-buffer/index.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/is-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/hash.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0, r.ripemd160 = r.HmacSHA256 = r.sha512 = r.sha256 = r.sha1 = void 0;
            var n = s(e("create-hash")),
                i = s(e("create-hmac"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            r.sha1 = function (e, t) {
                return (0, n.default)("sha1").update(e).digest(t)
            }, r.sha256 = function (e, t) {
                return (0, n.default)("sha256").update(e).digest(t)
            }, r.sha512 = function (e, t) {
                return (0, n.default)("sha512").update(e).digest(t)
            }, r.HmacSHA256 = function (e, t) {
                return (0, i.default)("sha256", t).update(e).digest()
            }, r.ripemd160 = function (e) {
                return (0, n.default)("rmd160").update(e).digest()
            }
        }, {
            "create-hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/create-hash/browser.js",
            "create-hmac": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/create-hmac/browser.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/signature.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var c = e("./ecdsa"),
                n = e("./hash"),
                i = e("ecurve"),
                s = a(e("assert")),
                h = a(e("bigi")),
                o = a(e("./PublicKey"));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = (0, i.getCurveByName)("secp256k1"),
                d = e("safe-buffer").Buffer,
                u = function () {
                    function f(e, t, r) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, f), this.r = e, this.s = t, this.i = r, s.default.equal(null != this.r, !0, "Missing parameter"), s.default.equal(null != this.s, !0, "Missing parameter"), s.default.equal(null != this.i, !0, "Missing parameter")
                    }
                    return f.fromBuffer = function (e) {
                        var t;
                        return s.default.equal(e.length, 65, "Invalid signature length"), t = e.readUInt8(0), s.default.equal(t - 27, t - 27 & 7, "Invalid signature parameter"), new f(h.default.fromBuffer(e.slice(1, 33)), h.default.fromBuffer(e.slice(33)), t)
                    }, f.prototype.toBuffer = function () {
                        var e;
                        return (e = d.alloc(65)).writeUInt8(this.i, 0), this.r.toBuffer(32).copy(e, 1), this.s.toBuffer(32).copy(e, 33), e
                    }, f.prototype.recoverPublicKeyFromBuffer = function (e) {
                        return this.recoverPublicKey((0, n.sha256)(e))
                    }, f.prototype.recoverPublicKey = function (e) {
                        var t, r, n = void 0;
                        return r = h.default.fromBuffer(e), n = this.i, n -= 27, n &= 3, t = (0, c.recoverPubKey)(l, r, this, n), o.default.fromPoint(t)
                    }, f.signBuffer = function (e, t) {
                        var r = (0, n.sha256)(e);
                        return f.signBufferSha256(r, t)
                    }, f.signBufferSha256 = function (e, t) {
                        if (32 !== e.length || !d.isBuffer(e)) throw new Error("buf_sha256: 32 byte buffer requred");
                        var r, n, i, s, o, a, u;
                        for (s = null, u = 0, n = h.default.fromBuffer(e);;) {
                            if (a = (r = (i = (0, c.sign)(l, e, t.d, u++)).toDER())[5 + (o = r[3])], 32 === o && 32 === a) {
                                s = (0, c.calcPubKeyRecoveryParam)(l, n, i, t.toPublicKey().Q), s += 4, s += 27;
                                break
                            }
                            u % 10 == 0 && console.log("WARN: " + u + " attempts to find canonical signature")
                        }
                        return new f(i.r, i.s, s)
                    }, f.sign = function (e, t) {
                        return f.signBuffer(d.from(e), t)
                    }, f.prototype.verifyBuffer = function (e, t) {
                        var r = (0, n.sha256)(e);
                        return this.verifyHash(r, t)
                    }, f.prototype.verifyHash = function (e, t) {
                        return s.default.equal(e.length, 32, "A SHA 256 should be 32 bytes long, instead got " + e.length), (0, c.verify)(l, e, {
                            r: this.r,
                            s: this.s
                        }, t.Q)
                    }, f.prototype.toByteBuffer = function () {
                        var e;
                        return e = new ByteBuffer(ByteBuffer.DEFAULT_CAPACITY, ByteBuffer.LITTLE_ENDIAN), this.appendByteBuffer(e), e.copy(0, e.offset)
                    }, f.fromHex = function (e) {
                        return f.fromBuffer(d.from(e, "hex"))
                    }, f.prototype.toHex = function () {
                        return this.toBuffer().toString("hex")
                    }, f.signHex = function (e, t) {
                        var r;
                        return r = d.from(e, "hex"), f.signBuffer(r, t)
                    }, f.prototype.verifyHex = function (e, t) {
                        var r;
                        return r = d.from(e, "hex"), this.verifyBuffer(r, t)
                    }, f
                }();
            r.default = u, t.exports = r.default
        }, {
            "./PublicKey": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/PublicKey.js",
            "./ecdsa": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/ecdsa.js",
            "./hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/hash.js",
            assert: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/assert.js",
            bigi: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/index.js",
            ecurve: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ecurve/lib/index.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/index.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0, r.Login = r.FetchChain = r.ChainValidation = r.TransactionHelper = r.NumberUtils = r.ObjectId = r.EmitterInstance = r.ChainTypes = r.FetchChainObjects = r.TransactionBuilder = r.ChainStore = r.key = r.hash = r.brainKey = r.Signature = r.PublicKey = r.PrivateKey = r.Aes = r.Address = r.SerializerValidation = r.template = r.ops = r.types = r.fp = r.Serializer = void 0;
            var n = S(e("./serializer/src/serializer")),
                i = S(e("./serializer/src/FastParser")),
                s = S(e("./serializer/src/types")),
                o = z(e("./serializer/src/operations")),
                a = S(e("./serializer/src/template")),
                u = S(e("./serializer/src/SerializerValidation")),
                f = S(e("./ecc/src/address")),
                c = S(e("./ecc/src/aes")),
                h = S(e("./ecc/src/PrivateKey")),
                l = S(e("./ecc/src/PublicKey")),
                d = S(e("./ecc/src/signature")),
                p = S(e("./ecc/src/BrainKey")),
                _ = z(e("./ecc/src/hash")),
                b = S(e("./ecc/src/KeyUtils")),
                m = S(e("./chain/src/ChainStore")),
                y = S(e("./chain/src/TransactionBuilder")),
                v = S(e("./chain/src/ChainTypes")),
                g = S(e("./chain/src/ObjectId")),
                w = S(e("./chain/src/NumberUtils")),
                x = S(e("./chain/src/TransactionHelper")),
                k = S(e("./chain/src/ChainValidation")),
                j = S(e("./chain/src/EmitterInstance")),
                E = S(e("./chain/src/AccountLogin"));

            function z(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            r.Serializer = n.default, r.fp = i.default, r.types = s.default, r.ops = o, r.template = a.default, r.SerializerValidation = u.default, r.Address = f.default, r.Aes = c.default, r.PrivateKey = h.default, r.PublicKey = l.default, r.Signature = d.default, r.brainKey = p.default, r.hash = _, r.key = b.default;
            var B = m.default.FetchChainObjects,
                T = m.default.FetchChain;
            r.ChainStore = m.default, r.TransactionBuilder = y.default, r.FetchChainObjects = B, r.ChainTypes = v.default, r.EmitterInstance = j.default, r.ObjectId = g.default, r.NumberUtils = w.default, r.TransactionHelper = x.default, r.ChainValidation = k.default, r.FetchChain = T, r.Login = E.default
        }, {
            "./chain/src/AccountLogin": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/AccountLogin.js",
            "./chain/src/ChainStore": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/ChainStore.js",
            "./chain/src/ChainTypes": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/ChainTypes.js",
            "./chain/src/ChainValidation": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/ChainValidation.js",
            "./chain/src/EmitterInstance": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/EmitterInstance.js",
            "./chain/src/NumberUtils": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/NumberUtils.js",
            "./chain/src/ObjectId": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/ObjectId.js",
            "./chain/src/TransactionBuilder": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/TransactionBuilder.js",
            "./chain/src/TransactionHelper": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/TransactionHelper.js",
            "./ecc/src/BrainKey": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/BrainKey.js",
            "./ecc/src/KeyUtils": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/KeyUtils.js",
            "./ecc/src/PrivateKey": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/PrivateKey.js",
            "./ecc/src/PublicKey": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/PublicKey.js",
            "./ecc/src/address": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/address.js",
            "./ecc/src/aes": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/aes.js",
            "./ecc/src/hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/hash.js",
            "./ecc/src/signature": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/signature.js",
            "./serializer/src/FastParser": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/FastParser.js",
            "./serializer/src/SerializerValidation": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/SerializerValidation.js",
            "./serializer/src/operations": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/operations.js",
            "./serializer/src/serializer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/serializer.js",
            "./serializer/src/template": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/template.js",
            "./serializer/src/types": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/types.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/index.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0, r.SerializerValidation = r.template = r.ops = r.types = r.fp = r.Serializer = void 0;
            var n = f(e("./src/serializer")),
                i = f(e("./src/FastParser")),
                s = f(e("./src/types")),
                o = function (e) {
                    {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                        return t.default = e, t
                    }
                }(e("./src/operations")),
                a = f(e("./src/template")),
                u = f(e("./src/SerializerValidation"));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            r.Serializer = n.default, r.fp = i.default, r.types = s.default, r.ops = o, r.template = a.default, r.SerializerValidation = u.default
        }, {
            "./src/FastParser": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/FastParser.js",
            "./src/SerializerValidation": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/SerializerValidation.js",
            "./src/operations": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/operations.js",
            "./src/serializer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/serializer.js",
            "./src/template": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/template.js",
            "./src/types": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/types.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/FastParser.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = e("../../ecc/src/PublicKey"),
                s = (n = i) && n.__esModule ? n : {
                    default: n
                };
            var o = e("safe-buffer").Buffer,
                a = function () {
                    function n() {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, n)
                    }
                    return n.fixed_data = function (e, t, r) {
                        if (e) {
                            if (!r) {
                                var n = e.copy(e.offset, e.offset + t);
                                return e.skip(t), o.from(n.toBinary(), "binary")
                            }
                            var i = r.slice(0, t).toString("binary");
                            for (e.append(i, "binary"); t-- > i.length;) e.writeUint8(0)
                        }
                    }, n.public_key = function (e, t) {
                        if (e) {
                            if (!t) return r = n.fixed_data(e, 33), s.default.fromBuffer(r);
                            var r = t.toBuffer();
                            e.append(r.toString("binary"), "binary")
                        }
                    }, n.ripemd160 = function (e, t) {
                        if (e) return t ? void n.fixed_data(e, 20, t) : n.fixed_data(e, 20)
                    }, n.time_point_sec = function (e, t) {
                        return t ? (t = Math.ceil(t / 1e3), void e.writeInt32(t)) : (t = e.readInt32(), new Date(1e3 * t))
                    }, n
                }();
            r.default = a, t.exports = r.default
        }, {
            "../../ecc/src/PublicKey": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/src/PublicKey.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/SerializerValidation.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var n, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                s = e("bytebuffer"),
                o = e("../../chain/src/ChainTypes"),
                a = (n = o) && n.__esModule ? n : {
                    default: n
                };
            var u = 9007199254740991,
                f = -9007199254740991,
                c = {
                    is_empty: function (e) {
                        return null == e
                    },
                    required: function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                        if (this.is_empty(e)) throw new Error("value required " + t + " " + e);
                        return e
                    },
                    require_array: function (e, t) {
                        if (!(e instanceof Array)) throw new Error("array required");
                        return t && e.forEach(function (e) {
                            t(e)
                        }), e
                    },
                    require_long: function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                        if (!s.Long.isLong(e)) throw new Error("Long value required " + t + " " + e);
                        return e
                    },
                    string: function (e) {
                        if (this.is_empty(e)) return e;
                        if ("string" != typeof e) throw new Error("string required: " + e);
                        return e
                    },
                    number: function (e) {
                        if (this.is_empty(e)) return e;
                        if ("number" != typeof e) throw new Error("number required: " + e);
                        return e
                    },
                    whole_number: function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                        if (this.is_empty(e)) return e;
                        if (/\./.test(e)) throw new Error("whole number required " + t + " " + e);
                        return e
                    },
                    unsigned: function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                        if (this.is_empty(e)) return e;
                        if (/-/.test(e)) throw new Error("unsigned required " + t + " " + e);
                        return e
                    },
                    is_digits: function (e) {
                        return "numeric" == typeof e || /^[0-9]+$/.test(e)
                    },
                    to_number: function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                        return this.is_empty(e) ? e : (this.no_overflow53(e, t), "number" == typeof e ? e : parseInt(e))
                    },
                    to_long: function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                            r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                        return this.is_empty(e) ? e : s.Long.isLong(e) ? e : (this.no_overflow64(e, t, r), "number" == typeof e && (e = "" + e), s.Long.fromString(e, r))
                    },
                    to_string: function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                        if (this.is_empty(e)) return e;
                        if ("string" == typeof e) return e;
                        if ("number" == typeof e) return this.no_overflow53(e, t), "" + e;
                        if (s.Long.isLong(e)) return e.toString();
                        throw "unsupported type " + t + ": (" + (void 0 === e ? "undefined" : i(e)) + ") " + e
                    },
                    require_test: function (e, t) {
                        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
                        if (this.is_empty(t)) return t;
                        if (!e.test(t)) throw new Error("unmatched " + e + " " + r + " " + t);
                        return t
                    },
                    require_match: function (e, t) {
                        var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
                        if (this.is_empty(t)) return t;
                        var n = t.match(e);
                        if (null === n) throw new Error("unmatched " + e + " " + r + " " + t);
                        return n
                    },
                    require_object_id: function (e, t) {
                        return require_match(/^([0-9]+)\.([0-9]+)\.([0-9]+)$/, e, t)
                    },
                    require_range: function (e, t, r) {
                        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "";
                        if (this.is_empty(r)) return r;
                        this.to_number(r);
                        if (r < e || t < r) throw new Error("out of range " + r + " " + n + " " + r);
                        return r
                    },
                    require_object_type: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1,
                            t = arguments[1],
                            r = arguments[2],
                            n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "";
                        if (this.is_empty(r)) return r;
                        var i = a.default.object_type[t];
                        if (!i) throw new Error("Unknown object type " + t + " " + n + " " + r);
                        if (!new RegExp(e + "." + i + ".[0-9]+$").test(r)) throw new Error("Expecting " + t + " in format " + e + "." + i + ".[0-9]+ instead of " + r + " " + n + " " + r);
                        return r
                    },
                    get_instance: function (e, t, r, n) {
                        return this.is_empty(r) ? r : (this.require_object_type(e, t, r, n), this.to_number(r.split(".")[2]))
                    },
                    require_relative_type: function (e, t, r) {
                        return this.require_object_type(0, e, t, r), t
                    },
                    get_relative_instance: function (e, t, r) {
                        return this.is_empty(t) ? t : (this.require_object_type(0, e, t, r), this.to_number(t.split(".")[2]))
                    },
                    require_protocol_type: function (e, t, r) {
                        return this.require_object_type(1, e, t, r), t
                    },
                    get_protocol_instance: function (e, t, r) {
                        return this.is_empty(t) ? t : (this.require_object_type(1, e, t, r), this.to_number(t.split(".")[2]))
                    },
                    get_protocol_type: function (e, t) {
                        if (this.is_empty(e)) return e;
                        this.require_object_id(e, t);
                        var r = e.split(".");
                        return this.to_number(r[1])
                    },
                    get_protocol_type_name: function (e, t) {
                        if (this.is_empty(e)) return e;
                        var r = this.get_protocol_type(e, t);
                        return Object.keys(a.default.object_type)[r]
                    },
                    require_implementation_type: function (e, t, r) {
                        return this.require_object_type(2, e, t, r), t
                    },
                    get_implementation_instance: function (e, t, r) {
                        return this.is_empty(t) ? t : (this.require_object_type(2, e, t, r), this.to_number(t.split(".")[2]))
                    },
                    no_overflow53: function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "";
                        if ("number" != typeof e)
                            if ("string" != typeof e) {
                                if (!s.Long.isLong(e)) throw "unsupported type " + t + ": (" + (void 0 === e ? "undefined" : i(e)) + ") " + e;
                                this.no_overflow53(e.toInt(), t)
                            } else {
                                parseInt(e);
                                if (u < e || e < f) throw new Error("overflow " + t + " " + e)
                            }
                        else if (u < e || e < f) throw new Error("overflow " + t + " " + e)
                    },
                    no_overflow64: function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                            r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                        if (!s.Long.isLong(e))
                            if (void 0 === e.t || void 0 === e.s)
                                if ("string" != typeof e) {
                                    if ("number" != typeof e) throw "unsupported type " + t + ": (" + (void 0 === e ? "undefined" : i(e)) + ") " + e;
                                    if (u < e || e < f) throw new Error("overflow " + t + " " + e)
                                } else {
                                    for (e = e.replace(/^0+/, "");
                                        /0$/.test(e);) e = e.substring(0, e.length - 1);
                                    if (/\.$/.test(e) && (e = e.substring(0, e.length - 1)), "" === e && (e = "0"), s.Long.fromString(e, r).toString() !== e.trim()) throw new Error("overflow " + t + " " + e)
                                }
                        else this.no_overflow64(e.toString(), t, r)
                    }
                };
            r.default = c, t.exports = r.default
        }, {
            "../../chain/src/ChainTypes": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/ChainTypes.js",
            bytebuffer: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bytebuffer/dist/bytebuffer.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/error_with_cause.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0;
            var n = function () {
                function n(e, t) {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), this.message = e, (null != t ? t.message : void 0) && (this.message = "cause\t" + t.message + "\t" + this.message);
                    var r = "";
                    (null != t ? t.stack : void 0) && (r = "caused by\n\t" + t.stack + "\t" + r), this.stack = this.message + "\n" + r
                }
                return n.throw = function (e, t) {
                    var r = e;
                    throw (null != t ? t.message : void 0) && (r += "\t cause: " + t.message + " "), (null != t ? t.stack : void 0) && (r += "\n stack: " + t.stack + " "), new Error(r)
                }, n
            }();
            r.default = n, t.exports = r.default
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/operations.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0, r.stealth_memo_data = r.signed_transaction = r.transaction = r.asset_update_issuer = r.asset_claim_pool = r.execute_bid = r.bid_collateral = r.fba_distribute = r.asset_claim_fees = r.asset_settle_cancel = r.transfer_from_blind = r.blind_transfer = r.blind_input = r.transfer_to_blind = r.blind_output = r.stealth_confirmation = r.override_transfer = r.balance_claim = r.assert = r.block_id_predicate = r.asset_symbol_eq_lit_predicate = r.account_name_eq_lit_predicate = r.custom = r.worker_create = r.burn_worker_initializer = r.vesting_balance_worker_initializer = r.refund_worker_initializer = r.vesting_balance_withdraw = r.vesting_balance_create = void 0, r.cdd_vesting_policy_initializer = r.linear_vesting_policy_initializer = r.committee_member_update_global_parameters = r.chain_parameters = r.committee_member_update = r.committee_member_create = r.withdraw_permission_delete = r.withdraw_permission_claim = r.withdraw_permission_update = r.withdraw_permission_create = r.proposal_delete = r.proposal_update = r.proposal_create = r.op_wrapper = r.witness_update = r.witness_create = r.asset_publish_feed = r.price_feed = r.asset_global_settle = r.asset_settle = r.asset_fund_fee_pool = r.asset_reserve = r.asset_issue = r.asset_update_feed_producers = r.asset_update_bitasset = r.asset_update = r.asset_create = r.bitasset_options = r.asset_options = r.price = r.account_transfer = r.account_upgrade = r.account_whitelist = r.account_update = r.account_create = r.account_options = r.authority = r.fill_order = r.call_order_update = r.limit_order_cancel = r.limit_order_create = r.transfer = r.memo_data = r.signed_block_header = r.block_header = r.signed_block = r.processed_transaction = r.asset = r.void_result = r.fee_schedule = r.asset_update_issuer_operation_fee_parameters = r.asset_claim_pool_operation_fee_parameters = r.execute_bid_operation_fee_parameters = r.bid_collateral_operation_fee_parameters = r.fba_distribute_operation_fee_parameters = r.asset_claim_fees_operation_fee_parameters = r.asset_settle_cancel_operation_fee_parameters = r.transfer_from_blind_operation_fee_parameters = r.blind_transfer_operation_fee_parameters = r.transfer_to_blind_operation_fee_parameters = r.override_transfer_operation_fee_parameters = r.balance_claim_operation_fee_parameters = r.assert_operation_fee_parameters = r.custom_operation_fee_parameters = r.worker_create_operation_fee_parameters = r.vesting_balance_withdraw_operation_fee_parameters = r.vesting_balance_create_operation_fee_parameters = r.committee_member_update_global_parameters_operation_fee_parameters = r.committee_member_update_operation_fee_parameters = r.committee_member_create_operation_fee_parameters = r.withdraw_permission_delete_operation_fee_parameters = r.withdraw_permission_claim_operation_fee_parameters = r.withdraw_permission_update_operation_fee_parameters = r.withdraw_permission_create_operation_fee_parameters = r.proposal_delete_operation_fee_parameters = r.proposal_update_operation_fee_parameters = r.proposal_create_operation_fee_parameters = r.witness_update_operation_fee_parameters = r.witness_create_operation_fee_parameters = r.asset_publish_feed_operation_fee_parameters = r.asset_global_settle_operation_fee_parameters = r.asset_settle_operation_fee_parameters = r.asset_fund_fee_pool_operation_fee_parameters = r.asset_reserve_operation_fee_parameters = r.asset_issue_operation_fee_parameters = r.asset_update_feed_producers_operation_fee_parameters = r.asset_update_bitasset_operation_fee_parameters = r.asset_update_operation_fee_parameters = r.asset_create_operation_fee_parameters = r.account_transfer_operation_fee_parameters = r.account_upgrade_operation_fee_parameters = r.account_whitelist_operation_fee_parameters = r.account_update_operation_fee_parameters = r.account_create_operation_fee_parameters = r.fill_order_operation_fee_parameters = r.call_order_update_operation_fee_parameters = r.limit_order_cancel_operation_fee_parameters = r.limit_order_create_operation_fee_parameters = r.transfer_operation_fee_parameters = r.operation = void 0;
            var n = s(e("./types")),
                i = s(e("./serializer"));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = n.default.uint8,
                a = n.default.uint16,
                u = n.default.uint32,
                f = n.default.int64,
                c = n.default.uint64,
                h = n.default.string,
                l = n.default.bytes,
                d = n.default.bool,
                p = n.default.array,
                _ = n.default.protocol_id_type,
                b = n.default.object_id_type,
                m = n.default.vote_id,
                y = n.default.future_extensions,
                v = n.default.static_variant,
                g = n.default.map,
                w = n.default.set,
                x = n.default.public_key,
                k = n.default.address,
                j = n.default.time_point_sec,
                E = n.default.optional,
                z = n.default.extension;
            y = n.default.void;
            var S = v();
            r.operation = S;
            var B = function (e, t) {
                    return new i.default(e, t)
                },
                T = v([r.transfer_operation_fee_parameters = new B("transfer_operation_fee_parameters", {
                    fee: c,
                    price_per_kbyte: u
                }), r.limit_order_create_operation_fee_parameters = new B("limit_order_create_operation_fee_parameters", {
                    fee: c
                }), r.limit_order_cancel_operation_fee_parameters = new B("limit_order_cancel_operation_fee_parameters", {
                    fee: c
                }), r.call_order_update_operation_fee_parameters = new B("call_order_update_operation_fee_parameters", {
                    fee: c
                }), r.fill_order_operation_fee_parameters = new B("fill_order_operation_fee_parameters"), r.account_create_operation_fee_parameters = new B("account_create_operation_fee_parameters", {
                    basic_fee: c,
                    premium_fee: c,
                    price_per_kbyte: u
                }), r.account_update_operation_fee_parameters = new B("account_update_operation_fee_parameters", {
                    fee: f,
                    price_per_kbyte: u
                }), r.account_whitelist_operation_fee_parameters = new B("account_whitelist_operation_fee_parameters", {
                    fee: f
                }), r.account_upgrade_operation_fee_parameters = new B("account_upgrade_operation_fee_parameters", {
                    membership_annual_fee: c,
                    membership_lifetime_fee: c
                }), r.account_transfer_operation_fee_parameters = new B("account_transfer_operation_fee_parameters", {
                    fee: c
                }), r.asset_create_operation_fee_parameters = new B("asset_create_operation_fee_parameters", {
                    symbol3: c,
                    symbol4: c,
                    long_symbol: c,
                    price_per_kbyte: u
                }), r.asset_update_operation_fee_parameters = new B("asset_update_operation_fee_parameters", {
                    fee: c,
                    price_per_kbyte: u
                }), r.asset_update_bitasset_operation_fee_parameters = new B("asset_update_bitasset_operation_fee_parameters", {
                    fee: c
                }), r.asset_update_feed_producers_operation_fee_parameters = new B("asset_update_feed_producers_operation_fee_parameters", {
                    fee: c
                }), r.asset_issue_operation_fee_parameters = new B("asset_issue_operation_fee_parameters", {
                    fee: c,
                    price_per_kbyte: u
                }), r.asset_reserve_operation_fee_parameters = new B("asset_reserve_operation_fee_parameters", {
                    fee: c
                }), r.asset_fund_fee_pool_operation_fee_parameters = new B("asset_fund_fee_pool_operation_fee_parameters", {
                    fee: c
                }), r.asset_settle_operation_fee_parameters = new B("asset_settle_operation_fee_parameters", {
                    fee: c
                }), r.asset_global_settle_operation_fee_parameters = new B("asset_global_settle_operation_fee_parameters", {
                    fee: c
                }), r.asset_publish_feed_operation_fee_parameters = new B("asset_publish_feed_operation_fee_parameters", {
                    fee: c
                }), r.witness_create_operation_fee_parameters = new B("witness_create_operation_fee_parameters", {
                    fee: c
                }), r.witness_update_operation_fee_parameters = new B("witness_update_operation_fee_parameters", {
                    fee: f
                }), r.proposal_create_operation_fee_parameters = new B("proposal_create_operation_fee_parameters", {
                    fee: c,
                    price_per_kbyte: u
                }), r.proposal_update_operation_fee_parameters = new B("proposal_update_operation_fee_parameters", {
                    fee: c,
                    price_per_kbyte: u
                }), r.proposal_delete_operation_fee_parameters = new B("proposal_delete_operation_fee_parameters", {
                    fee: c
                }), r.withdraw_permission_create_operation_fee_parameters = new B("withdraw_permission_create_operation_fee_parameters", {
                    fee: c
                }), r.withdraw_permission_update_operation_fee_parameters = new B("withdraw_permission_update_operation_fee_parameters", {
                    fee: c
                }), r.withdraw_permission_claim_operation_fee_parameters = new B("withdraw_permission_claim_operation_fee_parameters", {
                    fee: c,
                    price_per_kbyte: u
                }), r.withdraw_permission_delete_operation_fee_parameters = new B("withdraw_permission_delete_operation_fee_parameters", {
                    fee: c
                }), r.committee_member_create_operation_fee_parameters = new B("committee_member_create_operation_fee_parameters", {
                    fee: c
                }), r.committee_member_update_operation_fee_parameters = new B("committee_member_update_operation_fee_parameters", {
                    fee: c
                }), r.committee_member_update_global_parameters_operation_fee_parameters = new B("committee_member_update_global_parameters_operation_fee_parameters", {
                    fee: c
                }), r.vesting_balance_create_operation_fee_parameters = new B("vesting_balance_create_operation_fee_parameters", {
                    fee: c
                }), r.vesting_balance_withdraw_operation_fee_parameters = new B("vesting_balance_withdraw_operation_fee_parameters", {
                    fee: c
                }), r.worker_create_operation_fee_parameters = new B("worker_create_operation_fee_parameters", {
                    fee: c
                }), r.custom_operation_fee_parameters = new B("custom_operation_fee_parameters", {
                    fee: c,
                    price_per_kbyte: u
                }), r.assert_operation_fee_parameters = new B("assert_operation_fee_parameters", {
                    fee: c
                }), r.balance_claim_operation_fee_parameters = new B("balance_claim_operation_fee_parameters"), r.override_transfer_operation_fee_parameters = new B("override_transfer_operation_fee_parameters", {
                    fee: c,
                    price_per_kbyte: u
                }), r.transfer_to_blind_operation_fee_parameters = new B("transfer_to_blind_operation_fee_parameters", {
                    fee: c,
                    price_per_output: u
                }), r.blind_transfer_operation_fee_parameters = new B("blind_transfer_operation_fee_parameters", {
                    fee: c,
                    price_per_output: u
                }), r.transfer_from_blind_operation_fee_parameters = new B("transfer_from_blind_operation_fee_parameters", {
                    fee: c
                }), r.asset_settle_cancel_operation_fee_parameters = new B("asset_settle_cancel_operation_fee_parameters"), r.asset_claim_fees_operation_fee_parameters = new B("asset_claim_fees_operation_fee_parameters", {
                    fee: c
                }), r.fba_distribute_operation_fee_parameters = new B("fba_distribute_operation_fee_parameters"), r.bid_collateral_operation_fee_parameters = new B("bid_collateral_operation_fee_parameters", {
                    fee: c
                }), r.execute_bid_operation_fee_parameters = new B("execute_bid_operation_fee_parameters"), r.asset_claim_pool_operation_fee_parameters = new B("asset_claim_pool_operation_fee_parameters", {
                    fee: c
                }), r.asset_update_issuer_operation_fee_parameters = new B("asset_update_issuer_operation_fee_parameters", {
                    fee: c
                })]),
                I = r.fee_schedule = new B("fee_schedule", {
                    parameters: w(T),
                    scale: u
                }),
                A = r.void_result = new B("void_result"),
                O = r.asset = new B("asset", {
                    amount: f,
                    asset_id: _("asset")
                }),
                C = v([A, b, O]),
                M = r.processed_transaction = new B("processed_transaction", {
                    ref_block_num: a,
                    ref_block_prefix: u,
                    expiration: j,
                    operations: p(S),
                    extensions: w(y),
                    signatures: p(l(65)),
                    operation_results: p(C)
                }),
                L = (r.signed_block = new B("signed_block", {
                    previous: l(20),
                    timestamp: j,
                    witness: _("witness"),
                    transaction_merkle_root: l(20),
                    extensions: w(y),
                    witness_signature: l(65),
                    transactions: p(M)
                }), r.block_header = new B("block_header", {
                    previous: l(20),
                    timestamp: j,
                    witness: _("witness"),
                    transaction_merkle_root: l(20),
                    extensions: w(y)
                }), r.signed_block_header = new B("signed_block_header", {
                    previous: l(20),
                    timestamp: j,
                    witness: _("witness"),
                    transaction_merkle_root: l(20),
                    extensions: w(y),
                    witness_signature: l(65)
                }), r.memo_data = new B("memo_data", {
                    from: x,
                    to: x,
                    nonce: c,
                    message: l()
                })),
                q = r.transfer = new B("transfer", {
                    fee: O,
                    from: _("account"),
                    to: _("account"),
                    amount: O,
                    memo: E(L),
                    extensions: w(y)
                }),
                D = r.limit_order_create = new B("limit_order_create", {
                    fee: O,
                    seller: _("account"),
                    amount_to_sell: O,
                    min_to_receive: O,
                    expiration: j,
                    fill_or_kill: d,
                    extensions: w(y)
                }),
                U = r.limit_order_cancel = new B("limit_order_cancel", {
                    fee: O,
                    fee_paying_account: _("account"),
                    order: _("limit_order"),
                    extensions: w(y)
                }),
                R = r.call_order_update = new B("call_order_update", {
                    fee: O,
                    funding_account: _("account"),
                    delta_collateral: O,
                    delta_debt: O,
                    extensions: z([{
                        name: "target_collateral_ratio",
                        type: a
                    }])
                }),
                P = r.fill_order = new B("fill_order", {
                    fee: O,
                    order_id: b,
                    account_id: _("account"),
                    pays: O,
                    receives: O
                }),
                N = r.authority = new B("authority", {
                    weight_threshold: u,
                    account_auths: g(_("account"), a),
                    key_auths: g(x, a),
                    address_auths: g(k, a)
                }),
                F = r.account_options = new B("account_options", {
                    memo_key: x,
                    voting_account: _("account"),
                    num_witness: a,
                    num_committee: a,
                    votes: w(m),
                    extensions: w(y)
                }),
                K = r.account_create = new B("account_create", {
                    fee: O,
                    registrar: _("account"),
                    referrer: _("account"),
                    referrer_percent: a,
                    name: h,
                    owner: N,
                    active: N,
                    options: F,
                    extensions: w(y)
                }),
                H = r.account_update = new B("account_update", {
                    fee: O,
                    account: _("account"),
                    owner: E(N),
                    active: E(N),
                    new_options: E(F),
                    extensions: w(y)
                }),
                V = r.account_whitelist = new B("account_whitelist", {
                    fee: O,
                    authorizing_account: _("account"),
                    account_to_list: _("account"),
                    new_listing: o,
                    extensions: w(y)
                }),
                W = r.account_upgrade = new B("account_upgrade", {
                    fee: O,
                    account_to_upgrade: _("account"),
                    upgrade_to_lifetime_member: d,
                    extensions: w(y)
                }),
                G = r.account_transfer = new B("account_transfer", {
                    fee: O,
                    account_id: _("account"),
                    new_owner: _("account"),
                    extensions: w(y)
                }),
                Z = r.price = new B("price", {
                    base: O,
                    quote: O
                }),
                J = r.asset_options = new B("asset_options", {
                    max_supply: f,
                    market_fee_percent: a,
                    max_market_fee: f,
                    issuer_permissions: a,
                    flags: a,
                    core_exchange_rate: Z,
                    whitelist_authorities: w(_("account")),
                    blacklist_authorities: w(_("account")),
                    whitelist_markets: w(_("asset")),
                    blacklist_markets: w(_("asset")),
                    description: h,
                    extensions: w(y)
                }),
                $ = r.bitasset_options = new B("bitasset_options", {
                    feed_lifetime_sec: u,
                    minimum_feeds: o,
                    force_settlement_delay_sec: u,
                    force_settlement_offset_percent: a,
                    maximum_force_settlement_volume: a,
                    short_backing_asset: _("asset"),
                    extensions: w(y)
                }),
                Y = r.asset_create = new B("asset_create", {
                    fee: O,
                    issuer: _("account"),
                    symbol: h,
                    precision: o,
                    common_options: J,
                    bitasset_opts: E($),
                    is_prediction_market: d,
                    extensions: w(y)
                }),
                X = r.asset_update = new B("asset_update", {
                    fee: O,
                    issuer: _("account"),
                    asset_to_update: _("asset"),
                    new_issuer: E(_("account")),
                    new_options: J,
                    extensions: w(y)
                }),
                Q = r.asset_update_bitasset = new B("asset_update_bitasset", {
                    fee: O,
                    issuer: _("account"),
                    asset_to_update: _("asset"),
                    new_options: $,
                    extensions: w(y)
                }),
                ee = r.asset_update_feed_producers = new B("asset_update_feed_producers", {
                    fee: O,
                    issuer: _("account"),
                    asset_to_update: _("asset"),
                    new_feed_producers: w(_("account")),
                    extensions: w(y)
                }),
                te = r.asset_issue = new B("asset_issue", {
                    fee: O,
                    issuer: _("account"),
                    asset_to_issue: O,
                    issue_to_account: _("account"),
                    memo: E(L),
                    extensions: w(y)
                }),
                re = r.asset_reserve = new B("asset_reserve", {
                    fee: O,
                    payer: _("account"),
                    amount_to_reserve: O,
                    extensions: w(y)
                }),
                ne = r.asset_fund_fee_pool = new B("asset_fund_fee_pool", {
                    fee: O,
                    from_account: _("account"),
                    asset_id: _("asset"),
                    amount: f,
                    extensions: w(y)
                }),
                ie = r.asset_settle = new B("asset_settle", {
                    fee: O,
                    account: _("account"),
                    amount: O,
                    extensions: w(y)
                }),
                se = r.asset_global_settle = new B("asset_global_settle", {
                    fee: O,
                    issuer: _("account"),
                    asset_to_settle: _("asset"),
                    settle_price: Z,
                    extensions: w(y)
                }),
                oe = r.price_feed = new B("price_feed", {
                    settlement_price: Z,
                    maintenance_collateral_ratio: a,
                    maximum_short_squeeze_ratio: a,
                    core_exchange_rate: Z
                }),
                ae = r.asset_publish_feed = new B("asset_publish_feed", {
                    fee: O,
                    publisher: _("account"),
                    asset_id: _("asset"),
                    feed: oe,
                    extensions: w(y)
                }),
                ue = r.witness_create = new B("witness_create", {
                    fee: O,
                    witness_account: _("account"),
                    url: h,
                    block_signing_key: x
                }),
                fe = r.witness_update = new B("witness_update", {
                    fee: O,
                    witness: _("witness"),
                    witness_account: _("account"),
                    new_url: E(h),
                    new_signing_key: E(x)
                }),
                ce = r.op_wrapper = new B("op_wrapper", {
                    op: S
                }),
                he = r.proposal_create = new B("proposal_create", {
                    fee: O,
                    fee_paying_account: _("account"),
                    expiration_time: j,
                    proposed_ops: p(ce),
                    review_period_seconds: E(u),
                    extensions: w(y)
                }),
                le = r.proposal_update = new B("proposal_update", {
                    fee: O,
                    fee_paying_account: _("account"),
                    proposal: _("proposal"),
                    active_approvals_to_add: w(_("account")),
                    active_approvals_to_remove: w(_("account")),
                    owner_approvals_to_add: w(_("account")),
                    owner_approvals_to_remove: w(_("account")),
                    key_approvals_to_add: w(x),
                    key_approvals_to_remove: w(x),
                    extensions: w(y)
                }),
                de = r.proposal_delete = new B("proposal_delete", {
                    fee: O,
                    fee_paying_account: _("account"),
                    using_owner_authority: d,
                    proposal: _("proposal"),
                    extensions: w(y)
                }),
                pe = r.withdraw_permission_create = new B("withdraw_permission_create", {
                    fee: O,
                    withdraw_from_account: _("account"),
                    authorized_account: _("account"),
                    withdrawal_limit: O,
                    withdrawal_period_sec: u,
                    periods_until_expiration: u,
                    period_start_time: j
                }),
                _e = r.withdraw_permission_update = new B("withdraw_permission_update", {
                    fee: O,
                    withdraw_from_account: _("account"),
                    authorized_account: _("account"),
                    permission_to_update: _("withdraw_permission"),
                    withdrawal_limit: O,
                    withdrawal_period_sec: u,
                    period_start_time: j,
                    periods_until_expiration: u
                }),
                be = r.withdraw_permission_claim = new B("withdraw_permission_claim", {
                    fee: O,
                    withdraw_permission: _("withdraw_permission"),
                    withdraw_from_account: _("account"),
                    withdraw_to_account: _("account"),
                    amount_to_withdraw: O,
                    memo: E(L)
                }),
                me = r.withdraw_permission_delete = new B("withdraw_permission_delete", {
                    fee: O,
                    withdraw_from_account: _("account"),
                    authorized_account: _("account"),
                    withdrawal_permission: _("withdraw_permission")
                }),
                ye = r.committee_member_create = new B("committee_member_create", {
                    fee: O,
                    committee_member_account: _("account"),
                    url: h
                }),
                ve = r.committee_member_update = new B("committee_member_update", {
                    fee: O,
                    committee_member: _("committee_member"),
                    committee_member_account: _("account"),
                    new_url: E(h)
                }),
                ge = r.chain_parameters = new B("chain_parameters", {
                    current_fees: I,
                    block_interval: o,
                    maintenance_interval: u,
                    maintenance_skip_slots: o,
                    committee_proposal_review_period: u,
                    maximum_transaction_size: u,
                    maximum_block_size: u,
                    maximum_time_until_expiration: u,
                    maximum_proposal_lifetime: u,
                    maximum_asset_whitelist_authorities: o,
                    maximum_asset_feed_publishers: o,
                    maximum_witness_count: a,
                    maximum_committee_count: a,
                    maximum_authority_membership: a,
                    reserve_percent_of_fee: a,
                    network_percent_of_fee: a,
                    lifetime_referrer_percent_of_fee: a,
                    cashback_vesting_period_seconds: u,
                    cashback_vesting_threshold: f,
                    count_non_member_votes: d,
                    allow_non_member_whitelists: d,
                    witness_pay_per_block: f,
                    worker_budget_per_day: f,
                    max_predicate_opcode: a,
                    fee_liquidation_threshold: f,
                    accounts_per_fee_scale: a,
                    account_fee_scale_bitshifts: o,
                    max_authority_depth: o,
                    extensions: w(y)
                }),
                we = r.committee_member_update_global_parameters = new B("committee_member_update_global_parameters", {
                    fee: O,
                    new_parameters: ge
                }),
                xe = v([r.linear_vesting_policy_initializer = new B("linear_vesting_policy_initializer", {
                    begin_timestamp: j,
                    vesting_cliff_seconds: u,
                    vesting_duration_seconds: u
                }), r.cdd_vesting_policy_initializer = new B("cdd_vesting_policy_initializer", {
                    start_claim: j,
                    vesting_seconds: u
                })]),
                ke = r.vesting_balance_create = new B("vesting_balance_create", {
                    fee: O,
                    creator: _("account"),
                    owner: _("account"),
                    amount: O,
                    policy: xe
                }),
                je = r.vesting_balance_withdraw = new B("vesting_balance_withdraw", {
                    fee: O,
                    vesting_balance: _("vesting_balance"),
                    owner: _("account"),
                    amount: O
                }),
                Ee = v([r.refund_worker_initializer = new B("refund_worker_initializer"), r.vesting_balance_worker_initializer = new B("vesting_balance_worker_initializer", {
                    pay_vesting_period_days: a
                }), r.burn_worker_initializer = new B("burn_worker_initializer")]),
                ze = r.worker_create = new B("worker_create", {
                    fee: O,
                    owner: _("account"),
                    work_begin_date: j,
                    work_end_date: j,
                    daily_pay: f,
                    name: h,
                    url: h,
                    initializer: Ee
                }),
                Se = r.custom = new B("custom", {
                    fee: O,
                    payer: _("account"),
                    required_auths: w(_("account")),
                    id: a,
                    data: l()
                }),
                Be = v([r.account_name_eq_lit_predicate = new B("account_name_eq_lit_predicate", {
                    account_id: _("account"),
                    name: h
                }), r.asset_symbol_eq_lit_predicate = new B("asset_symbol_eq_lit_predicate", {
                    asset_id: _("asset"),
                    symbol: h
                }), r.block_id_predicate = new B("block_id_predicate", {
                    id: l(20)
                })]),
                Te = r.assert = new B("assert", {
                    fee: O,
                    fee_paying_account: _("account"),
                    predicates: p(Be),
                    required_auths: w(_("account")),
                    extensions: w(y)
                }),
                Ie = r.balance_claim = new B("balance_claim", {
                    fee: O,
                    deposit_to_account: _("account"),
                    balance_to_claim: _("balance"),
                    balance_owner_key: x,
                    total_claimed: O
                }),
                Ae = r.override_transfer = new B("override_transfer", {
                    fee: O,
                    issuer: _("account"),
                    from: _("account"),
                    to: _("account"),
                    amount: O,
                    memo: E(L),
                    extensions: w(y)
                }),
                Oe = r.stealth_confirmation = new B("stealth_confirmation", {
                    one_time_key: x,
                    to: E(x),
                    encrypted_memo: l()
                }),
                Ce = r.blind_output = new B("blind_output", {
                    commitment: l(33),
                    range_proof: l(),
                    owner: N,
                    stealth_memo: E(Oe)
                }),
                Me = r.transfer_to_blind = new B("transfer_to_blind", {
                    fee: O,
                    amount: O,
                    from: _("account"),
                    blinding_factor: l(32),
                    outputs: p(Ce)
                }),
                Le = r.blind_input = new B("blind_input", {
                    commitment: l(33),
                    owner: N
                }),
                qe = r.blind_transfer = new B("blind_transfer", {
                    fee: O,
                    inputs: p(Le),
                    outputs: p(Ce)
                }),
                De = r.transfer_from_blind = new B("transfer_from_blind", {
                    fee: O,
                    amount: O,
                    to: _("account"),
                    blinding_factor: l(32),
                    inputs: p(Le)
                }),
                Ue = r.asset_settle_cancel = new B("asset_settle_cancel", {
                    fee: O,
                    settlement: _("force_settlement"),
                    account: _("account"),
                    amount: O,
                    extensions: w(y)
                }),
                Re = r.asset_claim_fees = new B("asset_claim_fees", {
                    fee: O,
                    issuer: _("account"),
                    amount_to_claim: O,
                    extensions: w(y)
                }),
                Pe = r.fba_distribute = new B("fba_distribute", {
                    fee: O,
                    account_id: _("account"),
                    fba_id: _("fba_accumulator"),
                    amount: f
                }),
                Ne = r.bid_collateral = new B("bid_collateral", {
                    fee: O,
                    bidder: _("account"),
                    additional_collateral: O,
                    debt_covered: O,
                    extensions: w(y)
                }),
                Fe = r.execute_bid = new B("execute_bid", {
                    fee: O,
                    bidder: _("account"),
                    debt: O,
                    collateral: O
                }),
                Ke = r.asset_claim_pool = new B("asset_claim_pool", {
                    fee: O,
                    issuer: _("account"),
                    asset_id: _("asset"),
                    amount_to_claim: O,
                    extensions: w(y)
                }),
                He = r.asset_update_issuer = new B("asset_update_issuer", {
                    fee: O,
                    issuer: _("account"),
                    asset_to_update: _("asset"),
                    new_issuer: _("account"),
                    extensions: w(y)
                });
            S.st_operations = [q, D, U, R, P, K, H, V, W, G, Y, X, Q, ee, te, re, ne, ie, se, ae, ue, fe, he, le, de, pe, _e, be, me, ye, ve, we, ke, je, ze, Se, Te, Ie, Ae, Me, qe, De, Ue, Re, Pe, Ne, Fe, Ke, He];
            r.transaction = new B("transaction", {
                ref_block_num: a,
                ref_block_prefix: u,
                expiration: j,
                operations: p(S),
                extensions: w(y)
            }), r.signed_transaction = new B("signed_transaction", {
                ref_block_num: a,
                ref_block_prefix: u,
                expiration: j,
                operations: p(S),
                extensions: w(y),
                signatures: p(l(65))
            }), r.stealth_memo_data = new B("stealth_memo_data", {
                from: E(x),
                amount: O,
                blinding_factor: l(32),
                commitment: l(33),
                check: u
            })
        }, {
            "./serializer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/serializer.js",
            "./types": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/types.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/serializer.js": [function (n, i, s) {
            (function (e) {
                "use strict";
                s.__esModule = !0;
                var c = t(n("bytebuffer")),
                    h = t(n("./error_with_cause"));

                function t(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var l = n("safe-buffer").Buffer,
                    d = e.env.npm_config__graphene_serializer_hex_dump,
                    r = function () {
                        function f(e, t) {
                            ! function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, f), this.operation_name = e, this.types = t, this.types && (this.keys = Object.keys(this.types)), f.printDebug = !0
                        }
                        return f.prototype.fromByteBuffer = function (t) {
                            var e = {},
                                r = null;
                            try {
                                for (var n = this.keys, i = 0; i < n.length; i++) {
                                    r = n[i];
                                    var s = this.types[r];
                                    try {
                                        if (d)
                                            if (s.operation_name) console.error(s.operation_name);
                                            else {
                                                var o = t.offset;
                                                s.fromByteBuffer(t);
                                                var a = t.offset;
                                                t.offset = o;
                                                var u = t.copy(o, a);
                                                console.error(this.operation_name + "." + r + "\t", u.toHex())
                                            } e[r] = s.fromByteBuffer(t)
                                    } catch (e) {
                                        throw f.printDebug && (console.error("Error reading " + this.operation_name + "." + r + " in data:"), t.printDebug()), e
                                    }
                                }
                            } catch (e) {
                                h.default.throw(this.operation_name + "." + r, e)
                            }
                            return e
                        }, f.prototype.appendByteBuffer = function (e, r) {
                            var n = null;
                            try {
                                for (var t = this.keys, i = 0; i < t.length; i++) {
                                    n = t[i], this.types[n].appendByteBuffer(e, r[n])
                                }
                            } catch (t) {
                                try {
                                    h.default.throw(this.operation_name + "." + n + " = " + JSON.stringify(r[n]), t)
                                } catch (e) {
                                    h.default.throw(this.operation_name + "." + n + " = " + r[n], t)
                                }
                            }
                        }, f.prototype.fromObject = function (e) {
                            var t = {},
                                r = null;
                            try {
                                for (var n = this.keys, i = 0; i < n.length; i++) {
                                    r = n[i];
                                    var s = this.types[r],
                                        o = e[r],
                                        a = s.fromObject(o);
                                    t[r] = a
                                }
                            } catch (e) {
                                h.default.throw(this.operation_name + "." + r, e)
                            }
                            return t
                        }, f.prototype.toObject = function () {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                                    use_default: !1,
                                    annotate: !1
                                },
                                r = {},
                                n = null;
                            try {
                                if (!this.types) return r;
                                for (var i = this.keys, s = 0; s < i.length; s++) {
                                    n = i[s];
                                    var o = this.types[n],
                                        a = o.toObject(null != e ? e[n] : void 0, t);
                                    if (r[n] = a, d) {
                                        var u = new c.default(c.default.DEFAULT_CAPACITY, c.default.LITTLE_ENDIAN);
                                        o.appendByteBuffer(u, null != e ? e[n] : void 0), u = u.copy(0, u.offset), console.error(this.operation_name + "." + n, u.toHex())
                                    }
                                }
                            } catch (e) {
                                h.default.throw(this.operation_name + "." + n, e)
                            }
                            return r
                        }, f.prototype.compare = function (e, t) {
                            var r = this.keys[0],
                                n = this.types[r],
                                i = e[r],
                                s = t[r];
                            if (n.compare) return n.compare(i, s);
                            if ("number" == typeof i && "number" == typeof s) return i - s;
                            var o = void 0;
                            l.isBuffer(i) && l.isBuffer(s) && (o = "hex");
                            var a = i.toString(o),
                                u = s.toString(o);
                            return u < a ? 1 : a < u ? -1 : 0
                        }, f.prototype.fromHex = function (e) {
                            var t = c.default.fromHex(e, c.default.LITTLE_ENDIAN);
                            return this.fromByteBuffer(t)
                        }, f.prototype.fromBuffer = function (e) {
                            var t = c.default.fromBinary(e.toString("binary"), c.default.LITTLE_ENDIAN);
                            return this.fromByteBuffer(t)
                        }, f.prototype.toHex = function (e) {
                            return this.toByteBuffer(e).toHex()
                        }, f.prototype.toByteBuffer = function (e) {
                            var t = new c.default(c.default.DEFAULT_CAPACITY, c.default.LITTLE_ENDIAN);
                            return this.appendByteBuffer(t, e), t.copy(0, t.offset)
                        }, f.prototype.toBuffer = function (e) {
                            return l.from(this.toByteBuffer(e).toBinary(), "binary")
                        }, f
                    }();
                s.default = r, i.exports = s.default
            }).call(this, n("_process"))
        }, {
            "./error_with_cause": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/error_with_cause.js",
            _process: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process/browser.js",
            bytebuffer: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bytebuffer/dist/bytebuffer.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/template.js": [function (e, t, r) {
            "use strict";
            r.__esModule = !0, r.default = function (e) {
                var t = e.toObject(void 0, {
                    use_default: !0,
                    annotate: !0
                });
                console.error(JSON.stringify(t, null, 4)), t = e.toObject(void 0, {
                    use_default: !0,
                    annotate: !1
                }), console.error(JSON.stringify(t))
            }, t.exports = r.default
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/types.js": [function (y, v, g) {
            (function (e) {
                "use strict";
                g.__esModule = !0;
                var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    h = u(y("./SerializerValidation")),
                    r = u(y("./FastParser")),
                    s = u(y("../../chain/src/ChainTypes")),
                    n = u(y("../../chain/src/ObjectId")),
                    t = y("../../ecc"),
                    i = y("bitsharesjs-ws"),
                    o = u(y("bytebuffer"));

                function u(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var f = y("safe-buffer").Buffer,
                    c = {},
                    l = e.env.npm_config__graphene_serializer_hex_dump;
                c.uint8 = {
                    fromByteBuffer: function (e) {
                        return e.readUint8()
                    },
                    appendByteBuffer: function (e, t) {
                        h.default.require_range(0, 255, t, "uint8 " + t), e.writeUint8(t)
                    },
                    fromObject: function (e) {
                        return h.default.require_range(0, 255, e, "uint8 " + e), e
                    },
                    toObject: function (e) {
                        return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default && void 0 === e ? 0 : (h.default.require_range(0, 255, e, "uint8 " + e), parseInt(e))
                    }
                }, c.uint16 = {
                    fromByteBuffer: function (e) {
                        return e.readUint16()
                    },
                    appendByteBuffer: function (e, t) {
                        h.default.require_range(0, 65535, t, "uint16 " + t), e.writeUint16(t)
                    },
                    fromObject: function (e) {
                        return h.default.require_range(0, 65535, e, "uint16 " + e), e
                    },
                    toObject: function (e) {
                        return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default && void 0 === e ? 0 : (h.default.require_range(0, 65535, e, "uint16 " + e), parseInt(e))
                    }
                }, c.uint32 = {
                    fromByteBuffer: function (e) {
                        return e.readUint32()
                    },
                    appendByteBuffer: function (e, t) {
                        h.default.require_range(0, 4294967295, t, "uint32 " + t), e.writeUint32(t)
                    },
                    fromObject: function (e) {
                        return h.default.require_range(0, 4294967295, e, "uint32 " + e), e
                    },
                    toObject: function (e) {
                        return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default && void 0 === e ? 0 : (h.default.require_range(0, 4294967295, e, "uint32 " + e), parseInt(e))
                    }
                };
                var d = -1 * Math.pow(2, 31),
                    p = Math.pow(2, 31) - 1;
                c.varint32 = {
                    fromByteBuffer: function (e) {
                        return e.readVarint32()
                    },
                    appendByteBuffer: function (e, t) {
                        h.default.require_range(d, p, t, "uint32 " + t), e.writeVarint32(t)
                    },
                    fromObject: function (e) {
                        return h.default.require_range(d, p, e, "uint32 " + e), e
                    },
                    toObject: function (e) {
                        return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default && void 0 === e ? 0 : (h.default.require_range(d, p, e, "uint32 " + e), parseInt(e))
                    }
                }, c.int64 = {
                    fromByteBuffer: function (e) {
                        return e.readInt64()
                    },
                    appendByteBuffer: function (e, t) {
                        h.default.required(t), e.writeInt64(h.default.to_long(t))
                    },
                    fromObject: function (e) {
                        return h.default.required(e), h.default.to_long(e)
                    },
                    toObject: function (e) {
                        return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default && void 0 === e ? "0" : (h.default.required(e), h.default.to_long(e).toString())
                    }
                }, c.uint64 = {
                    fromByteBuffer: function (e) {
                        return e.readUint64()
                    },
                    appendByteBuffer: function (e, t) {
                        e.writeUint64(h.default.to_long(h.default.unsigned(t), void 0, !0))
                    },
                    fromObject: function (e) {
                        return h.default.to_long(h.default.unsigned(e), void 0, !0)
                    },
                    toObject: function (e) {
                        return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default && void 0 === e ? "0" : h.default.to_long(e, void 0, !0).toString()
                    }
                }, c.string = {
                    fromByteBuffer: function (e) {
                        var t, r = e.readVarint32();
                        return t = e.copy(e.offset, e.offset + r), e.skip(r), f.from(t.toBinary(), "binary")
                    },
                    appendByteBuffer: function (e, t) {
                        h.default.required(t), e.writeVarint32(t.length), e.append(t.toString("binary"), "binary")
                    },
                    fromObject: function (e) {
                        return h.default.required(e), f.from(e)
                    },
                    toObject: function (e) {
                        return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default && void 0 === e ? "" : e.toString()
                    }
                }, c.bytes = function (n) {
                    return {
                        fromByteBuffer: function (e) {
                            if (void 0 !== n) return t = e.copy(e.offset, e.offset + n), e.skip(n), f.from(t.toBinary(), "binary");
                            var t, r = e.readVarint32();
                            return t = e.copy(e.offset, e.offset + r), e.skip(r), f.from(t.toBinary(), "binary")
                        },
                        appendByteBuffer: function (e, t) {
                            h.default.required(t), "string" == typeof t && (t = f.from(t, "hex")), void 0 === n && e.writeVarint32(t.length), e.append(t.toString("binary"), "binary")
                        },
                        fromObject: function (e) {
                            return h.default.required(e), f.isBuffer(e) ? e : f.from(e, "hex")
                        },
                        toObject: function (e) {
                            if ((1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default && void 0 === e) {
                                return new Array(n).join("00")
                            }
                            return h.default.required(e), e.toString("hex")
                        }
                    }
                }, c.bool = {
                    fromByteBuffer: function (e) {
                        return 1 === e.readUint8()
                    },
                    appendByteBuffer: function (e, t) {
                        e.writeUint8(JSON.parse(t) ? 1 : 0)
                    },
                    fromObject: function (e) {
                        return !!JSON.parse(e)
                    },
                    toObject: function (e) {
                        return (!(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default || void 0 !== e) && !!JSON.parse(e)
                    }
                }, c.void = {
                    fromByteBuffer: function (e) {
                        throw new Error("(void) undefined type")
                    },
                    appendByteBuffer: function (e, t) {
                        throw new Error("(void) undefined type")
                    },
                    fromObject: function (e) {
                        throw new Error("(void) undefined type")
                    },
                    toObject: function (e) {
                        if (!(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default || void 0 !== e) throw new Error("(void) undefined type")
                    }
                }, c.array = function (s) {
                    return {
                        fromByteBuffer: function (e) {
                            var t = e.readVarint32();
                            l && console.log("varint32 size = " + t.toString(16));
                            for (var r = [], n = 0; 0 < t ? n < t : t < n; n++) r.push(s.fromByteBuffer(e));
                            return m(r, s)
                        },
                        appendByteBuffer: function (e, t) {
                            h.default.required(t), t = m(t, s), e.writeVarint32(t.length);
                            for (var r, n = 0; n < t.length; n++) r = t[n], s.appendByteBuffer(e, r)
                        },
                        fromObject: function (e) {
                            h.default.required(e), e = m(e, s);
                            for (var t, r = [], n = 0; n < e.length; n++) t = e[n], r.push(s.fromObject(t));
                            return r
                        },
                        toObject: function (e) {
                            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            if (t.use_default && void 0 === e) return [s.toObject(e, t)];
                            h.default.required(e), e = m(e, s);
                            for (var r, n = [], i = 0; i < e.length; i++) r = e[i], n.push(s.toObject(r, t));
                            return n
                        }
                    }
                }, c.time_point_sec = {
                    fromByteBuffer: function (e) {
                        return e.readUint32()
                    },
                    appendByteBuffer: function (e, t) {
                        "number" != typeof t && (t = c.time_point_sec.fromObject(t)), e.writeUint32(t)
                    },
                    fromObject: function (e) {
                        if (h.default.required(e), "number" == typeof e) return e;
                        if (e.getTime) return Math.floor(e.getTime() / 1e3);
                        if ("string" != typeof e) throw new Error("Unknown date type: " + e);
                        return /T[0-2][0-9]:[0-5][0-9]:[0-5][0-9]$/.test(e) && (e += "Z"), Math.floor(new Date(e).getTime() / 1e3)
                    },
                    toObject: function (e) {
                        if ((1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default && void 0 === e) return new Date(0).toISOString().split(".")[0];
                        if (h.default.required(e), "string" == typeof e) return e;
                        if (e.getTime) return e.toISOString().split(".")[0];
                        var t = parseInt(e);
                        return h.default.require_range(0, 4294967295, t, "uint32 " + e), new Date(1e3 * t).toISOString().split(".")[0]
                    }
                }, c.set = function (s) {
                    return {
                        validate: function (e) {
                            for (var t, r = {}, n = 0; n < e.length; n++) {
                                var i;
                                if (i = void 0 === (t = e[n]) ? "undefined" : a(t), 0 <= ["string", "number"].indexOf(i)) {
                                    if (void 0 !== r[t]) throw new Error("duplicate (set)");
                                    r[t] = !0
                                }
                            }
                            return m(e, s)
                        },
                        fromByteBuffer: function (r) {
                            var n = r.readVarint32();
                            return l && console.log("varint32 size = " + n.toString(16)), this.validate(function () {
                                for (var e = [], t = 0; 0 < n ? t < n : n < t; t++) e.push(s.fromByteBuffer(r));
                                return e
                            }())
                        },
                        appendByteBuffer: function (e, t) {
                            t || (t = []), e.writeVarint32(t.length);
                            for (var r, n = this.validate(t), i = 0; i < n.length; i++) r = n[i], s.appendByteBuffer(e, r)
                        },
                        fromObject: function (n) {
                            return n || (n = []), this.validate(function () {
                                for (var e, t = [], r = 0; r < n.length; r++) e = n[r], t.push(s.fromObject(e));
                                return t
                            }())
                        },
                        toObject: function (n) {
                            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            return i.use_default && void 0 === n ? [s.toObject(n, i)] : (n || (n = []), this.validate(function () {
                                for (var e, t = [], r = 0; r < n.length; r++) e = n[r], t.push(s.toObject(e, i));
                                return t
                            }()))
                        }
                    }
                }, c.fixed_array = function (f, c) {
                    return {
                        fromByteBuffer: function (e) {
                            var t, r, n;
                            for (n = [], t = 0, r = f; t < r; t += 1) n.push(c.fromByteBuffer(e));
                            return m(n, c)
                        },
                        appendByteBuffer: function (e, t) {
                            var r, n, i;
                            for (0 !== f && (h.default.required(t), t = m(t, c)), r = n = 0, i = f; n < i; r = n += 1) c.appendByteBuffer(e, t[r])
                        },
                        fromObject: function (e) {
                            var t, r, n, i;
                            for (0 !== f && h.default.required(e), i = [], t = r = 0, n = f; r < n; t = r += 1) i.push(c.fromObject(e[t]));
                            return i
                        },
                        toObject: function (e, t) {
                            var r, n, i, s, o, a, u;
                            if (null == t && (t = {}), t.use_default && void 0 === e) {
                                for (a = [], r = n = 0, s = f; n < s; r = n += 1) a.push(c.toObject(void 0, t));
                                return a
                            }
                            for (0 !== f && h.default.required(e), u = [], r = i = 0, o = f; i < o; r = i += 1) u.push(c.toObject(e[r], t));
                            return u
                        }
                    }
                };
                c.protocol_id_type = function (e) {
                    return h.default.required(e, "name"), n = s.default.reserved_spaces.protocol_ids, i = e, h.default.required(n, "reserved_spaces"), h.default.required(i, "object_type"), {
                        fromByteBuffer: function (e) {
                            return e.readVarint32()
                        },
                        appendByteBuffer: function (e, t) {
                            h.default.required(t), void 0 !== t.resolve && (t = t.resolve), /^[0-9]+\.[0-9]+\.[0-9]+$/.test(t) && (t = h.default.get_instance(n, i, t)), e.writeVarint32(h.default.to_number(t))
                        },
                        fromObject: function (e) {
                            return h.default.required(e), void 0 !== e.resolve && (e = e.resolve), h.default.is_digits(e) ? h.default.to_number(e) : h.default.get_instance(n, i, e)
                        },
                        toObject: function (e) {
                            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                r = s.default.object_type[i];
                            return t.use_default && void 0 === e ? n + "." + r + ".0" : (h.default.required(e), void 0 !== e.resolve && (e = e.resolve), /^[0-9]+\.[0-9]+\.[0-9]+$/.test(e) && (e = h.default.get_instance(n, i, e)), n + "." + r + "." + e)
                        }
                    };
                    var n, i
                }, c.object_id_type = {
                    fromByteBuffer: function (e) {
                        return n.default.fromByteBuffer(e)
                    },
                    appendByteBuffer: function (e, t) {
                        h.default.required(t), void 0 !== t.resolve && (t = t.resolve), (t = n.default.fromString(t)).appendByteBuffer(e)
                    },
                    fromObject: function (e) {
                        return h.default.required(e), void 0 !== e.resolve && (e = e.resolve), n.default.fromString(e)
                    },
                    toObject: function (e) {
                        return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default && void 0 === e ? "0.0.0" : (h.default.required(e), void 0 !== e.resolve && (e = e.resolve), (e = n.default.fromString(e)).toString())
                    }
                }, c.vote_id = {
                    TYPE: 255,
                    ID: 4294967040,
                    fromByteBuffer: function (e) {
                        var t = e.readUint32();
                        return {
                            type: t & this.TYPE,
                            id: t & this.ID
                        }
                    },
                    appendByteBuffer: function (e, t) {
                        h.default.required(t), "string" === t && (t = c.vote_id.fromObject(t));
                        var r = t.id << 8 | t.type;
                        e.writeUint32(r)
                    },
                    fromObject: function (e) {
                        if (h.default.required(e, "(type vote_id)"), "object" === (void 0 === e ? "undefined" : a(e))) return h.default.required(e.type, "type"), h.default.required(e.id, "id"), e;
                        h.default.require_test(/^[0-9]+:[0-9]+$/, e, "vote_id format " + e);
                        var t = e.split(":"),
                            r = t[0],
                            n = t[1];
                        return h.default.require_range(0, 255, r, "vote type " + e), h.default.require_range(0, 16777215, n, "vote id " + e), {
                            type: r,
                            id: n
                        }
                    },
                    toObject: function (e) {
                        return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default && void 0 === e ? "0:0" : (h.default.required(e), "string" == typeof e && (e = c.vote_id.fromObject(e)), e.type + ":" + e.id)
                    },
                    compare: function (e, t) {
                        return "object" !== (void 0 === e ? "undefined" : a(e)) && (e = c.vote_id.fromObject(e)), "object" !== (void 0 === t ? "undefined" : a(t)) && (t = c.vote_id.fromObject(t)), parseInt(e.id) - parseInt(t.id)
                    }
                }, c.optional = function (n) {
                    return h.default.required(n, "st_operation"), {
                        fromByteBuffer: function (e) {
                            if (1 === e.readUint8()) return n.fromByteBuffer(e)
                        },
                        appendByteBuffer: function (e, t) {
                            null != t ? (e.writeUint8(1), n.appendByteBuffer(e, t)) : e.writeUint8(0)
                        },
                        fromObject: function (e) {
                            if (void 0 !== e) return n.fromObject(e)
                        },
                        toObject: function (e) {
                            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                r = t.use_default || void 0 !== e ? n.toObject(e, t) : void 0;
                            return t.annotate && ("object" === (void 0 === r ? "undefined" : a(r)) ? r.__optional = "parent is optional" : r = {
                                __optional: r
                            }), r
                        }
                    }
                }, c.extension = function (s) {
                    return h.default.require_array(s, function (e) {
                        h.default.string(e.name), h.default.required(e.type, "st_operation")
                    }), {
                        fromByteBuffer: function (e) {
                            var t = e.readVarint32();
                            if (0 !== t) {
                                var r = {};
                                if (t > s.length) throw new Error("two many fields");
                                for (; 0 < t;) {
                                    var n = e.readVarint32();
                                    if (n >= s.length) throw new Error("index out of range");
                                    var i = s[n];
                                    r[i.name] = i.type.fromByteBuffer(e), t--
                                }
                                return r
                            }
                        },
                        appendByteBuffer: function (e, r) {
                            var n = new o.default(o.default.DEFAULT_CAPACITY, o.default.LITTLE_ENDIAN),
                                i = 0;
                            r && s.forEach(function (e, t) {
                                void 0 !== r[e.name] && null !== r[e.name] && (n.writeVarint32(t), e.type.appendByteBuffer(n, r[e.name]), i++)
                            }), e.writeVarint32(i), n.flip(), e.append(n)
                        },
                        fromObject: function (t) {
                            if (void 0 !== t) {
                                var r = {};
                                return s.forEach(function (e) {
                                    void 0 !== t[e.name] && null !== t[e.name] && (r[e.name] = e.type.fromObject(t[e.name]))
                                }), r
                            }
                        },
                        toObject: function (r) {
                            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                                e = function () {
                                    if (void 0 !== r) {
                                        var t = {};
                                        return s.forEach(function (e) {
                                            void 0 !== r[e.name] && null !== r[e.name] && (t[e.name] = e.type.toObject(r[e.name], n))
                                        }), t
                                    }
                                }();
                            return n.annotate && ("object" === (void 0 === e ? "undefined" : a(e)) ? e.__optional = "parent is optional" : e = {
                                __optional: e
                            }), e
                        }
                    }
                }, c.static_variant = function (e) {
                    return {
                        nosort: !0,
                        st_operations: e,
                        fromByteBuffer: function (e) {
                            var t = e.readVarint32(),
                                r = this.st_operations[t];
                            return l && console.error("static_variant id 0x" + t.toString(16) + " (" + t + ")"), h.default.required(r, "operation " + t), [t, r.fromByteBuffer(e)]
                        },
                        appendByteBuffer: function (e, t) {
                            h.default.required(t);
                            var r = t[0],
                                n = this.st_operations[r];
                            h.default.required(n, "operation " + r), e.writeVarint32(r), n.appendByteBuffer(e, t[1])
                        },
                        fromObject: function (e) {
                            h.default.required(e);
                            var t = e[0],
                                r = this.st_operations[t];
                            return h.default.required(r, "operation " + t), [t, r.fromObject(e[1])]
                        },
                        toObject: function (e) {
                            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            if (t.use_default && void 0 === e) return [0, this.st_operations[0].toObject(void 0, t)];
                            h.default.required(e);
                            var r = e[0],
                                n = this.st_operations[r];
                            return h.default.required(n, "operation " + r), [r, n.toObject(e[1], t)]
                        }
                    }
                }, c.map = function (s, o) {
                    return {
                        validate: function (e) {
                            if (!Array.isArray(e)) throw new Error("expecting array");
                            for (var t, r = {}, n = 0; n < e.length; n++) {
                                var i;
                                if (2 !== (t = e[n]).length) throw new Error("expecting two elements");
                                if (i = a(t[0]), 0 <= ["number", "string"].indexOf(i)) {
                                    if (void 0 !== r[t[0]]) throw new Error("duplicate (map)");
                                    r[t[0]] = !0
                                }
                            }
                            return m(e, s)
                        },
                        fromByteBuffer: function (e) {
                            for (var t = [], r = e.readVarint32(), n = 0; 0 < r ? n < r : r < n; n++) t.push([s.fromByteBuffer(e), o.fromByteBuffer(e)]);
                            return this.validate(t)
                        },
                        appendByteBuffer: function (e, t) {
                            this.validate(t), e.writeVarint32(t.length);
                            for (var r, n = 0; n < t.length; n++) r = t[n], s.appendByteBuffer(e, r[0]), o.appendByteBuffer(e, r[1])
                        },
                        fromObject: function (e) {
                            h.default.required(e);
                            for (var t, r = [], n = 0; n < e.length; n++) t = e[n], r.push([s.fromObject(t[0]), o.fromObject(t[1])]);
                            return this.validate(r)
                        },
                        toObject: function (e) {
                            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                            if (t.use_default && void 0 === e) return [
                                [s.toObject(void 0, t), o.toObject(void 0, t)]
                            ];
                            h.default.required(e), e = this.validate(e);
                            for (var r, n = [], i = 0; i < e.length; i++) r = e[i], n.push([s.toObject(r[0], t), o.toObject(r[1], t)]);
                            return n
                        }
                    }
                }, c.public_key = {
                    toPublic: function (e) {
                        return void 0 !== e.resolve && (e = e.resolve), null == e ? e : e.Q ? e : t.PublicKey.fromStringOrThrow(e)
                    },
                    fromByteBuffer: function (e) {
                        return r.default.public_key(e)
                    },
                    appendByteBuffer: function (e, t) {
                        h.default.required(t), r.default.public_key(e, c.public_key.toPublic(t))
                    },
                    fromObject: function (e) {
                        return h.default.required(e), e.Q ? e : c.public_key.toPublic(e)
                    },
                    toObject: function (e) {
                        return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default && void 0 === e ? i.ChainConfig.address_prefix + "859gxfnXyUriMgUeThh1fWv3oqcpLFyHa3TfFYC4PK2HqhToVM" : (h.default.required(e), e.toString())
                    },
                    compare: function (e, t) {
                        return c.public_key.fromObject(e).toBlockchainAddress().compare(c.public_key.fromObject(t).toBlockchainAddress())
                    }
                }, c.address = {
                    _to_address: function (e) {
                        return h.default.required(e), e.addy ? e : t.Address.fromString(e)
                    },
                    fromByteBuffer: function (e) {
                        return new t.Address(r.default.ripemd160(e))
                    },
                    appendByteBuffer: function (e, t) {
                        r.default.ripemd160(e, c.address._to_address(t).toBuffer())
                    },
                    fromObject: function (e) {
                        return c.address._to_address(e)
                    },
                    toObject: function (e) {
                        return (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).use_default && void 0 === e ? i.ChainConfig.address_prefix + "664KmHxSuQyDsfwo4WEJvWpzg1QKdg67S" : c.address._to_address(e).toString()
                    },
                    compare: function (e, t) {
                        return _(e.toString(), t.toString())
                    }
                };
                var _ = function (e, t) {
                        return t < e ? 1 : e < t ? -1 : 0
                    },
                    b = function (e) {
                        return Array.isArray(e) ? e[0] : e
                    },
                    m = function (e, r) {
                        return r.nosort ? e : r.compare ? e.sort(function (e, t) {
                            return r.compare(b(e), b(t))
                        }) : e.sort(function (e, t) {
                            return "number" == typeof b(e) && "number" == typeof b(t) ? b(e) - b(t) : f.isBuffer(b(e)) && f.isBuffer(b(t)) ? _(b(e).toString("hex"), b(t).toString("hex")) : _(b(e).toString(), b(t).toString())
                        })
                    };
                g.default = c, v.exports = g.default
            }).call(this, y("_process"))
        }, {
            "../../chain/src/ChainTypes": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/ChainTypes.js",
            "../../chain/src/ObjectId": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/chain/src/ObjectId.js",
            "../../ecc": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/ecc/index.js",
            "./FastParser": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/FastParser.js",
            "./SerializerValidation": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs/dist/serializer/src/SerializerValidation.js",
            _process: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process/browser.js",
            "bitsharesjs-ws": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bitsharesjs-ws/cjs/index.js",
            bytebuffer: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bytebuffer/dist/bytebuffer.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/browser-resolve/empty.js": [function (e, t, r) {}, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bs58/index.js": [function (e, t, r) {
            var n = e("base-x");
            t.exports = n("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
        }, {
            "base-x": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/base-x/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/buffer/index.js": [function (e, t, r) {
            "use strict";
            var n = e("base64-js"),
                s = e("ieee754");
            r.Buffer = h, r.SlowBuffer = function (e) {
                +e != e && (e = 0);
                return h.alloc(+e)
            }, r.INSPECT_MAX_BYTES = 50;
            var i = 2147483647;

            function o(e) {
                if (i < e) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                var t = new Uint8Array(e);
                return t.__proto__ = h.prototype, t
            }

            function h(e, t, r) {
                if ("number" != typeof e) return a(e, t, r);
                if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                return f(e)
            }

            function a(e, t, r) {
                if ("string" == typeof e) return function (e, t) {
                    "string" == typeof t && "" !== t || (t = "utf8");
                    if (!h.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                    var r = 0 | d(e, t),
                        n = o(r),
                        i = n.write(e, t);
                    i !== r && (n = n.slice(0, i));
                    return n
                }(e, t);
                if (ArrayBuffer.isView(e)) return c(e);
                if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if (q(e, ArrayBuffer) || e && q(e.buffer, ArrayBuffer)) return function (e, t, r) {
                    if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    var n;
                    n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r);
                    return n.__proto__ = h.prototype, n
                }(e, t, r);
                if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                var n = e.valueOf && e.valueOf();
                if (null != n && n !== e) return h.from(n, t, r);
                var i = function (e) {
                    if (h.isBuffer(e)) {
                        var t = 0 | l(e.length),
                            r = o(t);
                        return 0 === r.length || e.copy(r, 0, 0, t), r
                    }
                    if (void 0 !== e.length) return "number" != typeof e.length || D(e.length) ? o(0) : c(e);
                    if ("Buffer" === e.type && Array.isArray(e.data)) return c(e.data)
                }(e);
                if (i) return i;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return h.from(e[Symbol.toPrimitive]("string"), t, r);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
            }

            function u(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
            }

            function f(e) {
                return u(e), o(e < 0 ? 0 : 0 | l(e))
            }

            function c(e) {
                for (var t = e.length < 0 ? 0 : 0 | l(e.length), r = o(t), n = 0; n < t; n += 1) r[n] = 255 & e[n];
                return r
            }

            function l(e) {
                if (i <= e) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
                return 0 | e
            }

            function d(e, t) {
                if (h.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || q(e, ArrayBuffer)) return e.byteLength;
                if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                var r = e.length,
                    n = 2 < arguments.length && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                for (var i = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return C(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return M(e).length;
                    default:
                        if (i) return n ? -1 : C(e).length;
                        t = ("" + t).toLowerCase(), i = !0
                }
            }

            function p(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n
            }

            function _(e, t, r, n, i) {
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : 2147483647 < r ? r = 2147483647 : r < -2147483648 && (r = -2147483648), D(r = +r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (i) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = h.from(t, n)), h.isBuffer(t)) return 0 === t.length ? -1 : b(e, t, r, n, i);
                if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : b(e, [t], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function b(e, t, r, n, i) {
                var s, o = 1,
                    a = e.length,
                    u = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a /= o = 2, u /= 2, r /= 2
                }

                function f(e, t) {
                    return 1 === o ? e[t] : e.readUInt16BE(t * o)
                }
                if (i) {
                    var c = -1;
                    for (s = r; s < a; s++)
                        if (f(e, s) === f(t, -1 === c ? 0 : s - c)) {
                            if (-1 === c && (c = s), s - c + 1 === u) return c * o
                        } else -1 !== c && (s -= s - c), c = -1
                } else
                    for (a < r + u && (r = a - u), s = r; 0 <= s; s--) {
                        for (var h = !0, l = 0; l < u; l++)
                            if (f(e, s + l) !== f(t, l)) {
                                h = !1;
                                break
                            } if (h) return s
                    }
                return -1
            }

            function m(e, t, r, n) {
                r = Number(r) || 0;
                var i = e.length - r;
                n ? i < (n = Number(n)) && (n = i) : n = i;
                var s = t.length;
                s / 2 < n && (n = s / 2);
                for (var o = 0; o < n; ++o) {
                    var a = parseInt(t.substr(2 * o, 2), 16);
                    if (D(a)) return o;
                    e[r + o] = a
                }
                return o
            }

            function y(e, t, r, n) {
                return L(function (e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }(t), e, r, n)
            }

            function v(e, t, r) {
                return 0 === t && r === e.length ? n.fromByteArray(e) : n.fromByteArray(e.slice(t, r))
            }

            function g(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], i = t; i < r;) {
                    var s, o, a, u, f = e[i],
                        c = null,
                        h = 239 < f ? 4 : 223 < f ? 3 : 191 < f ? 2 : 1;
                    if (i + h <= r) switch (h) {
                        case 1:
                            f < 128 && (c = f);
                            break;
                        case 2:
                            128 == (192 & (s = e[i + 1])) && 127 < (u = (31 & f) << 6 | 63 & s) && (c = u);
                            break;
                        case 3:
                            s = e[i + 1], o = e[i + 2], 128 == (192 & s) && 128 == (192 & o) && 2047 < (u = (15 & f) << 12 | (63 & s) << 6 | 63 & o) && (u < 55296 || 57343 < u) && (c = u);
                            break;
                        case 4:
                            s = e[i + 1], o = e[i + 2], a = e[i + 3], 128 == (192 & s) && 128 == (192 & o) && 128 == (192 & a) && 65535 < (u = (15 & f) << 18 | (63 & s) << 12 | (63 & o) << 6 | 63 & a) && u < 1114112 && (c = u)
                    }
                    null === c ? (c = 65533, h = 1) : 65535 < c && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), i += h
                }
                return function (e) {
                    var t = e.length;
                    if (t <= w) return String.fromCharCode.apply(String, e);
                    var r = "",
                        n = 0;
                    for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += w));
                    return r
                }(n)
            }
            r.kMaxLength = i, (h.TYPED_ARRAY_SUPPORT = function () {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                            return 42
                        }
                    }, 42 === e.foo()
                } catch (e) {
                    return !1
                }
            }()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(h.prototype, "parent", {
                enumerable: !0,
                get: function () {
                    if (h.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(h.prototype, "offset", {
                enumerable: !0,
                get: function () {
                    if (h.isBuffer(this)) return this.byteOffset
                }
            }), "undefined" != typeof Symbol && null != Symbol.species && h[Symbol.species] === h && Object.defineProperty(h, Symbol.species, {
                value: null,
                configurable: !0,
                enumerable: !1,
                writable: !1
            }), h.poolSize = 8192, h.from = function (e, t, r) {
                return a(e, t, r)
            }, h.prototype.__proto__ = Uint8Array.prototype, h.__proto__ = Uint8Array, h.alloc = function (e, t, r) {
                return i = t, s = r, u(n = e), n <= 0 ? o(n) : void 0 !== i ? "string" == typeof s ? o(n).fill(i, s) : o(n).fill(i) : o(n);
                var n, i, s
            }, h.allocUnsafe = function (e) {
                return f(e)
            }, h.allocUnsafeSlow = function (e) {
                return f(e)
            }, h.isBuffer = function (e) {
                return null != e && !0 === e._isBuffer && e !== h.prototype
            }, h.compare = function (e, t) {
                if (q(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), q(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(e) || !h.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === t) return 0;
                for (var r = e.length, n = t.length, i = 0, s = Math.min(r, n); i < s; ++i)
                    if (e[i] !== t[i]) {
                        r = e[i], n = t[i];
                        break
                    } return r < n ? -1 : n < r ? 1 : 0
            }, h.isEncoding = function (e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, h.concat = function (e, t) {
                if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return h.alloc(0);
                var r;
                if (void 0 === t)
                    for (r = t = 0; r < e.length; ++r) t += e[r].length;
                var n = h.allocUnsafe(t),
                    i = 0;
                for (r = 0; r < e.length; ++r) {
                    var s = e[r];
                    if (q(s, Uint8Array) && (s = h.from(s)), !h.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(n, i), i += s.length
                }
                return n
            }, h.byteLength = d, h.prototype._isBuffer = !0, h.prototype.swap16 = function () {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) p(this, t, t + 1);
                return this
            }, h.prototype.swap32 = function () {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
                return this
            }, h.prototype.swap64 = function () {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
                return this
            }, h.prototype.toLocaleString = h.prototype.toString = function () {
                var e = this.length;
                return 0 === e ? "" : 0 === arguments.length ? g(this, 0, e) : function (e, t, r) {
                    var n = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                    if ((r >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return j(this, t, r);
                        case "utf8":
                        case "utf-8":
                            return g(this, t, r);
                        case "ascii":
                            return x(this, t, r);
                        case "latin1":
                        case "binary":
                            return k(this, t, r);
                        case "base64":
                            return v(this, t, r);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return E(this, t, r);
                        default:
                            if (n) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), n = !0
                    }
                }.apply(this, arguments)
            }, h.prototype.equals = function (e) {
                if (!h.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === h.compare(this, e)
            }, h.prototype.inspect = function () {
                var e = "",
                    t = r.INSPECT_MAX_BYTES;
                return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
            }, h.prototype.compare = function (e, t, r, n, i) {
                if (q(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)), !h.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (i <= n && r <= t) return 0;
                if (i <= n) return -1;
                if (r <= t) return 1;
                if (this === e) return 0;
                for (var s = (i >>>= 0) - (n >>>= 0), o = (r >>>= 0) - (t >>>= 0), a = Math.min(s, o), u = this.slice(n, i), f = e.slice(t, r), c = 0; c < a; ++c)
                    if (u[c] !== f[c]) {
                        s = u[c], o = f[c];
                        break
                    } return s < o ? -1 : o < s ? 1 : 0
            }, h.prototype.includes = function (e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, h.prototype.indexOf = function (e, t, r) {
                return _(this, e, t, r, !0)
            }, h.prototype.lastIndexOf = function (e, t, r) {
                return _(this, e, t, r, !1)
            }, h.prototype.write = function (e, t, r, n) {
                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                var i = this.length - t;
                if ((void 0 === r || i < r) && (r = i), 0 < e.length && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                for (var s, o, a, u, f, c, h, l, d, p = !1;;) switch (n) {
                    case "hex":
                        return m(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return l = t, d = r, L(C(e, (h = this).length - l), h, l, d);
                    case "ascii":
                        return y(this, e, t, r);
                    case "latin1":
                    case "binary":
                        return y(this, e, t, r);
                    case "base64":
                        return u = this, f = t, c = r, L(M(e), u, f, c);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return o = t, a = r, L(function (e, t) {
                            for (var r, n, i, s = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) r = e.charCodeAt(o), n = r >> 8, i = r % 256, s.push(i), s.push(n);
                            return s
                        }(e, (s = this).length - o), s, o, a);
                    default:
                        if (p) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), p = !0
                }
            }, h.prototype.toJSON = function () {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var w = 4096;

            function x(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                return n
            }

            function k(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                return n
            }

            function j(e, t, r) {
                var n = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || n < r) && (r = n);
                for (var i = "", s = t; s < r; ++s) i += O(e[s]);
                return i
            }

            function E(e, t, r) {
                for (var n = e.slice(t, r), i = "", s = 0; s < n.length; s += 2) i += String.fromCharCode(n[s] + 256 * n[s + 1]);
                return i
            }

            function z(e, t, r) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (r < e + t) throw new RangeError("Trying to access beyond buffer length")
            }

            function S(e, t, r, n, i, s) {
                if (!h.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (i < t || t < s) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError("Index out of range")
            }

            function B(e, t, r, n, i, s) {
                if (r + n > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function T(e, t, r, n, i) {
                return t = +t, r >>>= 0, i || B(e, 0, r, 4), s.write(e, t, r, n, 23, 4), r + 4
            }

            function I(e, t, r, n, i) {
                return t = +t, r >>>= 0, i || B(e, 0, r, 8), s.write(e, t, r, n, 52, 8), r + 8
            }
            h.prototype.slice = function (e, t) {
                var r = this.length;
                (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r), t < e && (t = e);
                var n = this.subarray(e, t);
                return n.__proto__ = h.prototype, n
            }, h.prototype.readUIntLE = function (e, t, r) {
                e >>>= 0, t >>>= 0, r || z(e, t, this.length);
                for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256);) n += this[e + s] * i;
                return n
            }, h.prototype.readUIntBE = function (e, t, r) {
                e >>>= 0, t >>>= 0, r || z(e, t, this.length);
                for (var n = this[e + --t], i = 1; 0 < t && (i *= 256);) n += this[e + --t] * i;
                return n
            }, h.prototype.readUInt8 = function (e, t) {
                return e >>>= 0, t || z(e, 1, this.length), this[e]
            }, h.prototype.readUInt16LE = function (e, t) {
                return e >>>= 0, t || z(e, 2, this.length), this[e] | this[e + 1] << 8
            }, h.prototype.readUInt16BE = function (e, t) {
                return e >>>= 0, t || z(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, h.prototype.readUInt32LE = function (e, t) {
                return e >>>= 0, t || z(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, h.prototype.readUInt32BE = function (e, t) {
                return e >>>= 0, t || z(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, h.prototype.readIntLE = function (e, t, r) {
                e >>>= 0, t >>>= 0, r || z(e, t, this.length);
                for (var n = this[e], i = 1, s = 0; ++s < t && (i *= 256);) n += this[e + s] * i;
                return (i *= 128) <= n && (n -= Math.pow(2, 8 * t)), n
            }, h.prototype.readIntBE = function (e, t, r) {
                e >>>= 0, t >>>= 0, r || z(e, t, this.length);
                for (var n = t, i = 1, s = this[e + --n]; 0 < n && (i *= 256);) s += this[e + --n] * i;
                return (i *= 128) <= s && (s -= Math.pow(2, 8 * t)), s
            }, h.prototype.readInt8 = function (e, t) {
                return e >>>= 0, t || z(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, h.prototype.readInt16LE = function (e, t) {
                e >>>= 0, t || z(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, h.prototype.readInt16BE = function (e, t) {
                e >>>= 0, t || z(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, h.prototype.readInt32LE = function (e, t) {
                return e >>>= 0, t || z(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, h.prototype.readInt32BE = function (e, t) {
                return e >>>= 0, t || z(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, h.prototype.readFloatLE = function (e, t) {
                return e >>>= 0, t || z(e, 4, this.length), s.read(this, e, !0, 23, 4)
            }, h.prototype.readFloatBE = function (e, t) {
                return e >>>= 0, t || z(e, 4, this.length), s.read(this, e, !1, 23, 4)
            }, h.prototype.readDoubleLE = function (e, t) {
                return e >>>= 0, t || z(e, 8, this.length), s.read(this, e, !0, 52, 8)
            }, h.prototype.readDoubleBE = function (e, t) {
                return e >>>= 0, t || z(e, 8, this.length), s.read(this, e, !1, 52, 8)
            }, h.prototype.writeUIntLE = function (e, t, r, n) {
                (e = +e, t >>>= 0, r >>>= 0, n) || S(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = 1,
                    s = 0;
                for (this[t] = 255 & e; ++s < r && (i *= 256);) this[t + s] = e / i & 255;
                return t + r
            }, h.prototype.writeUIntBE = function (e, t, r, n) {
                (e = +e, t >>>= 0, r >>>= 0, n) || S(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = r - 1,
                    s = 1;
                for (this[t + i] = 255 & e; 0 <= --i && (s *= 256);) this[t + i] = e / s & 255;
                return t + r
            }, h.prototype.writeUInt8 = function (e, t, r) {
                return e = +e, t >>>= 0, r || S(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
            }, h.prototype.writeUInt16LE = function (e, t, r) {
                return e = +e, t >>>= 0, r || S(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, h.prototype.writeUInt16BE = function (e, t, r) {
                return e = +e, t >>>= 0, r || S(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, h.prototype.writeUInt32LE = function (e, t, r) {
                return e = +e, t >>>= 0, r || S(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
            }, h.prototype.writeUInt32BE = function (e, t, r) {
                return e = +e, t >>>= 0, r || S(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, h.prototype.writeIntLE = function (e, t, r, n) {
                if (e = +e, t >>>= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    S(this, e, t, r, i - 1, -i)
                }
                var s = 0,
                    o = 1,
                    a = 0;
                for (this[t] = 255 & e; ++s < r && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s - 1] && (a = 1), this[t + s] = (e / o >> 0) - a & 255;
                return t + r
            }, h.prototype.writeIntBE = function (e, t, r, n) {
                if (e = +e, t >>>= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    S(this, e, t, r, i - 1, -i)
                }
                var s = r - 1,
                    o = 1,
                    a = 0;
                for (this[t + s] = 255 & e; 0 <= --s && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + s + 1] && (a = 1), this[t + s] = (e / o >> 0) - a & 255;
                return t + r
            }, h.prototype.writeInt8 = function (e, t, r) {
                return e = +e, t >>>= 0, r || S(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, h.prototype.writeInt16LE = function (e, t, r) {
                return e = +e, t >>>= 0, r || S(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, h.prototype.writeInt16BE = function (e, t, r) {
                return e = +e, t >>>= 0, r || S(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, h.prototype.writeInt32LE = function (e, t, r) {
                return e = +e, t >>>= 0, r || S(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
            }, h.prototype.writeInt32BE = function (e, t, r) {
                return e = +e, t >>>= 0, r || S(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, h.prototype.writeFloatLE = function (e, t, r) {
                return T(this, e, t, !0, r)
            }, h.prototype.writeFloatBE = function (e, t, r) {
                return T(this, e, t, !1, r)
            }, h.prototype.writeDoubleLE = function (e, t, r) {
                return I(this, e, t, !0, r)
            }, h.prototype.writeDoubleBE = function (e, t, r) {
                return I(this, e, t, !1, r)
            }, h.prototype.copy = function (e, t, r, n) {
                if (!h.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), 0 < n && n < r && (n = r), n === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                var i = n - r;
                if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, n);
                else if (this === e && r < t && t < n)
                    for (var s = i - 1; 0 <= s; --s) e[s + t] = this[s + r];
                else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
                return i
            }, h.prototype.fill = function (e, t, r, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !h.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                    if (1 === e.length) {
                        var i = e.charCodeAt(0);
                        ("utf8" === n && i < 128 || "latin1" === n) && (e = i)
                    }
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                if (r <= t) return this;
                var s;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                    for (s = t; s < r; ++s) this[s] = e;
                else {
                    var o = h.isBuffer(e) ? e : h.from(e, n),
                        a = o.length;
                    if (0 === a) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (s = 0; s < r - t; ++s) this[s + t] = o[s % a]
                }
                return this
            };
            var A = /[^+/0-9A-Za-z-_]/g;

            function O(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function C(e, t) {
                var r;
                t = t || 1 / 0;
                for (var n = e.length, i = null, s = [], o = 0; o < n; ++o) {
                    if (55295 < (r = e.charCodeAt(o)) && r < 57344) {
                        if (!i) {
                            if (56319 < r) {
                                -1 < (t -= 3) && s.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === n) {
                                -1 < (t -= 3) && s.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            -1 < (t -= 3) && s.push(239, 191, 189), i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else i && -1 < (t -= 3) && s.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        s.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        s.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return s
            }

            function M(e) {
                return n.toByteArray(function (e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(A, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function L(e, t, r, n) {
                for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                return i
            }

            function q(e, t) {
                return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
            }

            function D(e) {
                return e != e
            }
        }, {
            "base64-js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/base64-js/index.js",
            ieee754: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ieee754/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bytebuffer/dist/bytebuffer.js": [function (t, e, r) {
            var n, i;
            n = this, i = function (u) {
                "use strict";
                var p = function (e, t, r) {
                    if (void 0 === e && (e = p.DEFAULT_CAPACITY), void 0 === t && (t = p.DEFAULT_ENDIAN), void 0 === r && (r = p.DEFAULT_NOASSERT), !r) {
                        if ((e |= 0) < 0) throw RangeError("Illegal capacity");
                        t = !!t, r = !!r
                    }
                    this.buffer = 0 === e ? s : new ArrayBuffer(e), this.view = 0 === e ? null : new Uint8Array(this.buffer), this.offset = 0, this.markedOffset = -1, this.limit = e, this.littleEndian = t, this.noAssert = r
                };
                p.VERSION = "5.0.1", p.LITTLE_ENDIAN = !0, p.BIG_ENDIAN = !1, p.DEFAULT_CAPACITY = 16, p.DEFAULT_ENDIAN = p.BIG_ENDIAN, p.DEFAULT_NOASSERT = !1, p.Long = u || null;
                var o = p.prototype;
                o.__isByteBuffer__, Object.defineProperty(o, "__isByteBuffer__", {
                    value: !0,
                    enumerable: !1,
                    configurable: !1
                });
                var s = new ArrayBuffer(0),
                    r = String.fromCharCode;

                function a(e) {
                    var t = 0;
                    return function () {
                        return t < e.length ? e.charCodeAt(t++) : null
                    }
                }

                function f() {
                    var e = [],
                        t = [];
                    return function () {
                        if (0 === arguments.length) return t.join("") + r.apply(String, e);
                        1024 < e.length + arguments.length && (t.push(r.apply(String, e)), e.length = 0), Array.prototype.push.apply(e, arguments)
                    }
                }

                function n(e, t, r, n, i) {
                    var s, o, a = 8 * i - n - 1,
                        u = (1 << a) - 1,
                        f = u >> 1,
                        c = -7,
                        h = r ? i - 1 : 0,
                        l = r ? -1 : 1,
                        d = e[t + h];
                    for (h += l, s = d & (1 << -c) - 1, d >>= -c, c += a; 0 < c; s = 256 * s + e[t + h], h += l, c -= 8);
                    for (o = s & (1 << -c) - 1, s >>= -c, c += n; 0 < c; o = 256 * o + e[t + h], h += l, c -= 8);
                    if (0 === s) s = 1 - f;
                    else {
                        if (s === u) return o ? NaN : 1 / 0 * (d ? -1 : 1);
                        o += Math.pow(2, n), s -= f
                    }
                    return (d ? -1 : 1) * o * Math.pow(2, s - n)
                }

                function i(e, t, r, n, i, s) {
                    var o, a, u, f = 8 * s - i - 1,
                        c = (1 << f) - 1,
                        h = c >> 1,
                        l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        d = n ? 0 : s - 1,
                        p = n ? 1 : -1,
                        _ = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = c) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), 2 <= (t += 1 <= o + h ? l / u : l * Math.pow(2, 1 - h)) * u && (o++, u /= 2), c <= o + h ? (a = 0, o = c) : 1 <= o + h ? (a = (t * u - 1) * Math.pow(2, i), o += h) : (a = t * Math.pow(2, h - 1) * Math.pow(2, i), o = 0)); 8 <= i; e[r + d] = 255 & a, d += p, a /= 256, i -= 8);
                    for (o = o << i | a, f += i; 0 < f; e[r + d] = 255 & o, d += p, o /= 256, f -= 8);
                    e[r + d - p] |= 128 * _
                }
                p.accessor = function () {
                    return Uint8Array
                }, p.allocate = function (e, t, r) {
                    return new p(e, t, r)
                }, p.concat = function (e, t, r, n) {
                    "boolean" != typeof t && "string" == typeof t || (n = r, r = t, t = void 0);
                    for (var i, s = 0, o = 0, a = e.length; o < a; ++o) p.isByteBuffer(e[o]) || (e[o] = p.wrap(e[o], t)), 0 < (i = e[o].limit - e[o].offset) && (s += i);
                    if (0 === s) return new p(0, r, n);
                    var u, f = new p(s, r, n);
                    for (o = 0; o < a;)(i = (u = e[o++]).limit - u.offset) <= 0 || (f.view.set(u.view.subarray(u.offset, u.limit), f.offset), f.offset += i);
                    return f.limit = f.offset, f.offset = 0, f
                }, p.isByteBuffer = function (e) {
                    return !0 === (e && e.__isByteBuffer__)
                }, p.type = function () {
                    return ArrayBuffer
                }, p.wrap = function (e, t, r, n) {
                    if ("string" != typeof t && (n = r, r = t, t = void 0), "string" == typeof e) switch (void 0 === t && (t = "utf8"), t) {
                        case "base64":
                            return p.fromBase64(e, r);
                        case "hex":
                            return p.fromHex(e, r);
                        case "binary":
                            return p.fromBinary(e, r);
                        case "utf8":
                            return p.fromUTF8(e, r);
                        case "debug":
                            return p.fromDebug(e, r);
                        default:
                            throw Error("Unsupported encoding: " + t)
                    }
                    if (null === e || "object" != typeof e) throw TypeError("Illegal buffer");
                    var i;
                    if (p.isByteBuffer(e)) return (i = o.clone.call(e)).markedOffset = -1, i;
                    if (e instanceof Uint8Array) i = new p(0, r, n), 0 < e.length && (i.buffer = e.buffer, i.offset = e.byteOffset, i.limit = e.byteOffset + e.byteLength, i.view = new Uint8Array(e.buffer));
                    else if (e instanceof ArrayBuffer) i = new p(0, r, n), 0 < e.byteLength && (i.buffer = e, i.offset = 0, i.limit = e.byteLength, i.view = 0 < e.byteLength ? new Uint8Array(e) : null);
                    else {
                        if ("[object Array]" !== Object.prototype.toString.call(e)) throw TypeError("Illegal buffer");
                        (i = new p(e.length, r, n)).limit = e.length;
                        for (var s = 0; s < e.length; ++s) i.view[s] = e[s]
                    }
                    return i
                }, o.writeBitSet = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if (!(e instanceof Array)) throw TypeError("Illegal BitSet: Not an array");
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    var n, i = t,
                        s = e.length,
                        o = s >> 3,
                        a = 0;
                    for (t += this.writeVarint32(s, t); o--;) n = 1 & !!e[a++] | (1 & !!e[a++]) << 1 | (1 & !!e[a++]) << 2 | (1 & !!e[a++]) << 3 | (1 & !!e[a++]) << 4 | (1 & !!e[a++]) << 5 | (1 & !!e[a++]) << 6 | (1 & !!e[a++]) << 7, this.writeByte(n, t++);
                    if (a < s) {
                        var u = 0;
                        for (n = 0; a < s;) n |= (1 & !!e[a++]) << u++;
                        this.writeByte(n, t++)
                    }
                    return r ? (this.offset = t, this) : t - i
                }, o.readBitSet = function (e) {
                    var t = void 0 === e;
                    t && (e = this.offset);
                    var r, n = this.readVarint32(e),
                        i = n.value,
                        s = i >> 3,
                        o = 0,
                        a = [];
                    for (e += n.length; s--;) r = this.readByte(e++), a[o++] = !!(1 & r), a[o++] = !!(2 & r), a[o++] = !!(4 & r), a[o++] = !!(8 & r), a[o++] = !!(16 & r), a[o++] = !!(32 & r), a[o++] = !!(64 & r), a[o++] = !!(128 & r);
                    if (o < i) {
                        var u = 0;
                        for (r = this.readByte(e++); o < i;) a[o++] = !!(r >> u++ & 1)
                    }
                    return t && (this.offset = e), a
                }, o.readBytes = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+" + e + ") <= " + this.buffer.byteLength)
                    }
                    var n = this.slice(t, t + e);
                    return r && (this.offset += e), n
                }, o.writeBytes = o.append, o.writeInt8 = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                        if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    t += 1;
                    var n = this.buffer.byteLength;
                    return n < t && this.resize((n *= 2) > t ? n : t), t -= 1, this.view[t] = e, r && (this.offset += 1), this
                }, o.writeByte = o.writeInt8, o.readInt8 = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                    }
                    var r = this.view[e];
                    return 128 == (128 & r) && (r = -(255 - r + 1)), t && (this.offset += 1), r
                }, o.readByte = o.readInt8, o.writeUint8 = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                        if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    t += 1;
                    var n = this.buffer.byteLength;
                    return n < t && this.resize((n *= 2) > t ? n : t), t -= 1, this.view[t] = e, r && (this.offset += 1), this
                }, o.writeUInt8 = o.writeUint8, o.readUint8 = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                    }
                    var r = this.view[e];
                    return t && (this.offset += 1), r
                }, o.readUInt8 = o.readUint8, o.writeInt16 = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                        if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    t += 2;
                    var n = this.buffer.byteLength;
                    return n < t && this.resize((n *= 2) > t ? n : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), r && (this.offset += 2), this
                }, o.writeShort = o.writeInt16, o.readInt16 = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength)
                    }
                    var r = 0;
                    return this.littleEndian ? (r = this.view[e], r |= this.view[e + 1] << 8) : (r = this.view[e] << 8, r |= this.view[e + 1]), 32768 == (32768 & r) && (r = -(65535 - r + 1)), t && (this.offset += 2), r
                }, o.readShort = o.readInt16, o.writeUint16 = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                        if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    t += 2;
                    var n = this.buffer.byteLength;
                    return n < t && this.resize((n *= 2) > t ? n : t), t -= 2, this.littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), r && (this.offset += 2), this
                }, o.writeUInt16 = o.writeUint16, o.readUint16 = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+2) <= " + this.buffer.byteLength)
                    }
                    var r = 0;
                    return this.littleEndian ? (r = this.view[e], r |= this.view[e + 1] << 8) : (r = this.view[e] << 8, r |= this.view[e + 1]), t && (this.offset += 2), r
                }, o.readUInt16 = o.readUint16, o.writeInt32 = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                        if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    t += 4;
                    var n = this.buffer.byteLength;
                    return n < t && this.resize((n *= 2) > t ? n : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), r && (this.offset += 4), this
                }, o.writeInt = o.writeInt32, o.readInt32 = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                    }
                    var r = 0;
                    return this.littleEndian ? (r = this.view[e + 2] << 16, r |= this.view[e + 1] << 8, r |= this.view[e], r += this.view[e + 3] << 24 >>> 0) : (r = this.view[e + 1] << 16, r |= this.view[e + 2] << 8, r |= this.view[e + 3], r += this.view[e] << 24 >>> 0), r |= 0, t && (this.offset += 4), r
                }, o.readInt = o.readInt32, o.writeUint32 = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                        if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    t += 4;
                    var n = this.buffer.byteLength;
                    return n < t && this.resize((n *= 2) > t ? n : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[t + 3] = 255 & e), r && (this.offset += 4), this
                }, o.writeUInt32 = o.writeUint32, o.readUint32 = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                    }
                    var r = 0;
                    return this.littleEndian ? (r = this.view[e + 2] << 16, r |= this.view[e + 1] << 8, r |= this.view[e], r += this.view[e + 3] << 24 >>> 0) : (r = this.view[e + 1] << 16, r |= this.view[e + 2] << 8, r |= this.view[e + 3], r += this.view[e] << 24 >>> 0), t && (this.offset += 4), r
                }, o.readUInt32 = o.readUint32, u && (o.writeInt64 = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("number" == typeof e) e = u.fromNumber(e);
                        else if ("string" == typeof e) e = u.fromString(e);
                        else if (!(e && e instanceof u)) throw TypeError("Illegal value: " + e + " (not an integer or Long)");
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    "number" == typeof e ? e = u.fromNumber(e) : "string" == typeof e && (e = u.fromString(e)), t += 8;
                    var n = this.buffer.byteLength;
                    n < t && this.resize((n *= 2) > t ? n : t), t -= 8;
                    var i = e.low,
                        s = e.high;
                    return this.littleEndian ? (this.view[t + 3] = i >>> 24 & 255, this.view[t + 2] = i >>> 16 & 255, this.view[t + 1] = i >>> 8 & 255, this.view[t] = 255 & i, t += 4, this.view[t + 3] = s >>> 24 & 255, this.view[t + 2] = s >>> 16 & 255, this.view[t + 1] = s >>> 8 & 255, this.view[t] = 255 & s) : (this.view[t] = s >>> 24 & 255, this.view[t + 1] = s >>> 16 & 255, this.view[t + 2] = s >>> 8 & 255, this.view[t + 3] = 255 & s, t += 4, this.view[t] = i >>> 24 & 255, this.view[t + 1] = i >>> 16 & 255, this.view[t + 2] = i >>> 8 & 255, this.view[t + 3] = 255 & i), r && (this.offset += 8), this
                }, o.writeLong = o.writeInt64, o.readInt64 = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
                    }
                    var r = 0,
                        n = 0;
                    this.littleEndian ? (r = this.view[e + 2] << 16, r |= this.view[e + 1] << 8, r |= this.view[e], r += this.view[e + 3] << 24 >>> 0, e += 4, n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0, e += 4, r = this.view[e + 1] << 16, r |= this.view[e + 2] << 8, r |= this.view[e + 3], r += this.view[e] << 24 >>> 0);
                    var i = new u(r, n, !1);
                    return t && (this.offset += 8), i
                }, o.readLong = o.readInt64, o.writeUint64 = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("number" == typeof e) e = u.fromNumber(e);
                        else if ("string" == typeof e) e = u.fromString(e);
                        else if (!(e && e instanceof u)) throw TypeError("Illegal value: " + e + " (not an integer or Long)");
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    "number" == typeof e ? e = u.fromNumber(e) : "string" == typeof e && (e = u.fromString(e)), t += 8;
                    var n = this.buffer.byteLength;
                    n < t && this.resize((n *= 2) > t ? n : t), t -= 8;
                    var i = e.low,
                        s = e.high;
                    return this.littleEndian ? (this.view[t + 3] = i >>> 24 & 255, this.view[t + 2] = i >>> 16 & 255, this.view[t + 1] = i >>> 8 & 255, this.view[t] = 255 & i, t += 4, this.view[t + 3] = s >>> 24 & 255, this.view[t + 2] = s >>> 16 & 255, this.view[t + 1] = s >>> 8 & 255, this.view[t] = 255 & s) : (this.view[t] = s >>> 24 & 255, this.view[t + 1] = s >>> 16 & 255, this.view[t + 2] = s >>> 8 & 255, this.view[t + 3] = 255 & s, t += 4, this.view[t] = i >>> 24 & 255, this.view[t + 1] = i >>> 16 & 255, this.view[t + 2] = i >>> 8 & 255, this.view[t + 3] = 255 & i), r && (this.offset += 8), this
                }, o.writeUInt64 = o.writeUint64, o.readUint64 = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
                    }
                    var r = 0,
                        n = 0;
                    this.littleEndian ? (r = this.view[e + 2] << 16, r |= this.view[e + 1] << 8, r |= this.view[e], r += this.view[e + 3] << 24 >>> 0, e += 4, n = this.view[e + 2] << 16, n |= this.view[e + 1] << 8, n |= this.view[e], n += this.view[e + 3] << 24 >>> 0) : (n = this.view[e + 1] << 16, n |= this.view[e + 2] << 8, n |= this.view[e + 3], n += this.view[e] << 24 >>> 0, e += 4, r = this.view[e + 1] << 16, r |= this.view[e + 2] << 8, r |= this.view[e + 3], r += this.view[e] << 24 >>> 0);
                    var i = new u(r, n, !0);
                    return t && (this.offset += 8), i
                }, o.readUInt64 = o.readUint64), o.writeFloat32 = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    t += 4;
                    var n = this.buffer.byteLength;
                    return n < t && this.resize((n *= 2) > t ? n : t), t -= 4, i(this.view, e, t, this.littleEndian, 23, 4), r && (this.offset += 4), this
                }, o.writeFloat = o.writeFloat32, o.readFloat32 = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                    }
                    var r = n(this.view, e, this.littleEndian, 23, 4);
                    return t && (this.offset += 4), r
                }, o.readFloat = o.readFloat32, o.writeFloat64 = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    t += 8;
                    var n = this.buffer.byteLength;
                    return n < t && this.resize((n *= 2) > t ? n : t), t -= 8, i(this.view, e, t, this.littleEndian, 52, 8), r && (this.offset += 8), this
                }, o.writeDouble = o.writeFloat64, o.readFloat64 = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
                    }
                    var r = n(this.view, e, this.littleEndian, 52, 8);
                    return t && (this.offset += 8), r
                }, o.readDouble = o.readFloat64, p.MAX_VARINT32_BYTES = 5, p.calculateVarint32 = function (e) {
                    return (e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 1 << 21 ? 3 : e < 1 << 28 ? 4 : 5
                }, p.zigZagEncode32 = function (e) {
                    return ((e |= 0) << 1 ^ e >> 31) >>> 0
                }, p.zigZagDecode32 = function (e) {
                    return e >>> 1 ^ -(1 & e) | 0
                }, o.writeVarint32 = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                        if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    var n, i = p.calculateVarint32(e);
                    t += i;
                    var s = this.buffer.byteLength;
                    for (s < t && this.resize((s *= 2) > t ? s : t), t -= i, e >>>= 0; 128 <= e;) n = 127 & e | 128, this.view[t++] = n, e >>>= 7;
                    return this.view[t++] = e, r ? (this.offset = t, this) : i
                }, o.writeVarint32ZigZag = function (e, t) {
                    return this.writeVarint32(p.zigZagEncode32(e), t)
                }, o.readVarint32 = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                    }
                    var r, n = 0,
                        i = 0;
                    do {
                        if (!this.noAssert && e > this.limit) {
                            var s = Error("Truncated");
                            throw s.truncated = !0, s
                        }
                        r = this.view[e++], n < 5 && (i |= (127 & r) << 7 * n), ++n
                    } while (0 != (128 & r));
                    return i |= 0, t ? (this.offset = e, i) : {
                        value: i,
                        length: n
                    }
                }, o.readVarint32ZigZag = function (e) {
                    var t = this.readVarint32(e);
                    return "object" == typeof t ? t.value = p.zigZagDecode32(t.value) : t = p.zigZagDecode32(t), t
                }, u && (p.MAX_VARINT64_BYTES = 10, p.calculateVarint64 = function (e) {
                    "number" == typeof e ? e = u.fromNumber(e) : "string" == typeof e && (e = u.fromString(e));
                    var t = e.toInt() >>> 0,
                        r = e.shiftRightUnsigned(28).toInt() >>> 0,
                        n = e.shiftRightUnsigned(56).toInt() >>> 0;
                    return 0 == n ? 0 == r ? t < 16384 ? t < 128 ? 1 : 2 : t < 1 << 21 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 1 << 21 ? 7 : 8 : n < 128 ? 9 : 10
                }, p.zigZagEncode64 = function (e) {
                    return "number" == typeof e ? e = u.fromNumber(e, !1) : "string" == typeof e ? e = u.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned()), e.shiftLeft(1).xor(e.shiftRight(63)).toUnsigned()
                }, p.zigZagDecode64 = function (e) {
                    return "number" == typeof e ? e = u.fromNumber(e, !1) : "string" == typeof e ? e = u.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned()), e.shiftRightUnsigned(1).xor(e.and(u.ONE).toSigned().negate()).toSigned()
                }, o.writeVarint64 = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("number" == typeof e) e = u.fromNumber(e);
                        else if ("string" == typeof e) e = u.fromString(e);
                        else if (!(e && e instanceof u)) throw TypeError("Illegal value: " + e + " (not an integer or Long)");
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    "number" == typeof e ? e = u.fromNumber(e, !1) : "string" == typeof e ? e = u.fromString(e, !1) : !1 !== e.unsigned && (e = e.toSigned());
                    var n = p.calculateVarint64(e),
                        i = e.toInt() >>> 0,
                        s = e.shiftRightUnsigned(28).toInt() >>> 0,
                        o = e.shiftRightUnsigned(56).toInt() >>> 0;
                    t += n;
                    var a = this.buffer.byteLength;
                    switch (a < t && this.resize((a *= 2) > t ? a : t), t -= n, n) {
                        case 10:
                            this.view[t + 9] = o >>> 7 & 1;
                        case 9:
                            this.view[t + 8] = 9 !== n ? 128 | o : 127 & o;
                        case 8:
                            this.view[t + 7] = 8 !== n ? s >>> 21 | 128 : s >>> 21 & 127;
                        case 7:
                            this.view[t + 6] = 7 !== n ? s >>> 14 | 128 : s >>> 14 & 127;
                        case 6:
                            this.view[t + 5] = 6 !== n ? s >>> 7 | 128 : s >>> 7 & 127;
                        case 5:
                            this.view[t + 4] = 5 !== n ? 128 | s : 127 & s;
                        case 4:
                            this.view[t + 3] = 4 !== n ? i >>> 21 | 128 : i >>> 21 & 127;
                        case 3:
                            this.view[t + 2] = 3 !== n ? i >>> 14 | 128 : i >>> 14 & 127;
                        case 2:
                            this.view[t + 1] = 2 !== n ? i >>> 7 | 128 : i >>> 7 & 127;
                        case 1:
                            this.view[t] = 1 !== n ? 128 | i : 127 & i
                    }
                    return r ? (this.offset += n, this) : n
                }, o.writeVarint64ZigZag = function (e, t) {
                    return this.writeVarint64(p.zigZagEncode64(e), t)
                }, o.readVarint64 = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                    }
                    var r = e,
                        n = 0,
                        i = 0,
                        s = 0,
                        o = 0;
                    if (n = 127 & (o = this.view[e++]), 128 & o && (n |= (127 & (o = this.view[e++])) << 7, (128 & o || this.noAssert && void 0 === o) && (n |= (127 & (o = this.view[e++])) << 14, (128 & o || this.noAssert && void 0 === o) && (n |= (127 & (o = this.view[e++])) << 21, (128 & o || this.noAssert && void 0 === o) && (i = 127 & (o = this.view[e++]), (128 & o || this.noAssert && void 0 === o) && (i |= (127 & (o = this.view[e++])) << 7, (128 & o || this.noAssert && void 0 === o) && (i |= (127 & (o = this.view[e++])) << 14, (128 & o || this.noAssert && void 0 === o) && (i |= (127 & (o = this.view[e++])) << 21, (128 & o || this.noAssert && void 0 === o) && (s = 127 & (o = this.view[e++]), (128 & o || this.noAssert && void 0 === o) && (s |= (127 & (o = this.view[e++])) << 7, 128 & o || this.noAssert && void 0 === o)))))))))) throw Error("Buffer overrun");
                    var a = u.fromBits(n | i << 28, i >>> 4 | s << 24, !1);
                    return t ? (this.offset = e, a) : {
                        value: a,
                        length: e - r
                    }
                }, o.readVarint64ZigZag = function (e) {
                    var t = this.readVarint64(e);
                    return t && t.value instanceof u ? t.value = p.zigZagDecode64(t.value) : t = p.zigZagDecode64(t), t
                }), o.writeCString = function (e, t) {
                    var r = void 0 === t;
                    r && (t = this.offset);
                    var n, i = e.length;
                    if (!this.noAssert) {
                        if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                        for (n = 0; n < i; ++n)
                            if (0 === e.charCodeAt(n)) throw RangeError("Illegal str: Contains NULL-characters");
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    i = l.calculateUTF16asUTF8(a(e))[1], t += i + 1;
                    var s = this.buffer.byteLength;
                    return s < t && this.resize((s *= 2) > t ? s : t), t -= i + 1, l.encodeUTF16toUTF8(a(e), function (e) {
                        this.view[t++] = e
                    }.bind(this)), this.view[t++] = 0, r ? (this.offset = t, this) : i
                }, o.readCString = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                    }
                    var r, n = e,
                        i = -1;
                    return l.decodeUTF8toUTF16(function () {
                        if (0 === i) return null;
                        if (e >= this.limit) throw RangeError("Illegal range: Truncated data, " + e + " < " + this.limit);
                        return 0 === (i = this.view[e++]) ? null : i
                    }.bind(this), r = f(), !0), t ? (this.offset = e, r()) : {
                        string: r(),
                        length: e - n
                    }
                }, o.writeIString = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    var n, i = t;
                    n = l.calculateUTF16asUTF8(a(e), this.noAssert)[1], t += 4 + n;
                    var s = this.buffer.byteLength;
                    if (s < t && this.resize((s *= 2) > t ? s : t), t -= 4 + n, this.littleEndian ? (this.view[t + 3] = n >>> 24 & 255, this.view[t + 2] = n >>> 16 & 255, this.view[t + 1] = n >>> 8 & 255, this.view[t] = 255 & n) : (this.view[t] = n >>> 24 & 255, this.view[t + 1] = n >>> 16 & 255, this.view[t + 2] = n >>> 8 & 255, this.view[t + 3] = 255 & n), t += 4, l.encodeUTF16toUTF8(a(e), function (e) {
                            this.view[t++] = e
                        }.bind(this)), t !== i + 4 + n) throw RangeError("Illegal range: Truncated data, " + t + " == " + (t + 4 + n));
                    return r ? (this.offset = t, this) : t - i
                }, o.readIString = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
                    }
                    var r = e,
                        n = this.readUint32(e),
                        i = this.readUTF8String(n, p.METRICS_BYTES, e += 4);
                    return e += i.length, t ? (this.offset = e, i.string) : {
                        string: i.string,
                        length: e - r
                    }
                }, p.METRICS_CHARS = "c", p.METRICS_BYTES = "b", o.writeUTF8String = function (e, t) {
                    var r, n = void 0 === t;
                    if (n && (t = this.offset), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    var i = t;
                    r = l.calculateUTF16asUTF8(a(e))[1], t += r;
                    var s = this.buffer.byteLength;
                    return s < t && this.resize((s *= 2) > t ? s : t), t -= r, l.encodeUTF16toUTF8(a(e), function (e) {
                        this.view[t++] = e
                    }.bind(this)), n ? (this.offset = t, this) : t - i
                }, o.writeString = o.writeUTF8String, p.calculateUTF8Chars = function (e) {
                    return l.calculateUTF16asUTF8(a(e))[0]
                }, p.calculateUTF8Bytes = function (e) {
                    return l.calculateUTF16asUTF8(a(e))[1]
                }, p.calculateString = p.calculateUTF8Bytes, o.readUTF8String = function (e, t, r) {
                    "number" == typeof t && (r = t, t = void 0);
                    var n = void 0 === r;
                    if (n && (r = this.offset), void 0 === t && (t = p.METRICS_CHARS), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
                        if (e |= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                        if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                    }
                    var i, s = 0,
                        o = r;
                    if (t === p.METRICS_CHARS) {
                        if (i = f(), l.decodeUTF8(function () {
                                return s < e && r < this.limit ? this.view[r++] : null
                            }.bind(this), function (e) {
                                ++s, l.UTF8toUTF16(e, i)
                            }), s !== e) throw RangeError("Illegal range: Truncated data, " + s + " == " + e);
                        return n ? (this.offset = r, i()) : {
                            string: i(),
                            length: r - o
                        }
                    }
                    if (t !== p.METRICS_BYTES) throw TypeError("Unsupported metrics: " + t);
                    if (!this.noAssert) {
                        if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                        if ((r >>>= 0) < 0 || r + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+" + e + ") <= " + this.buffer.byteLength)
                    }
                    var a = r + e;
                    if (l.decodeUTF8toUTF16(function () {
                            return r < a ? this.view[r++] : null
                        }.bind(this), i = f(), this.noAssert), r !== a) throw RangeError("Illegal range: Truncated data, " + r + " == " + a);
                    return n ? (this.offset = r, i()) : {
                        string: i(),
                        length: r - o
                    }
                }, o.readString = o.readUTF8String, o.writeVString = function (e, t) {
                    var r = void 0 === t;
                    if (r && (t = this.offset), !this.noAssert) {
                        if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
                        if ((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
                    }
                    var n, i, s = t;
                    n = l.calculateUTF16asUTF8(a(e), this.noAssert)[1], i = p.calculateVarint32(n), t += i + n;
                    var o = this.buffer.byteLength;
                    if (o < t && this.resize((o *= 2) > t ? o : t), t -= i + n, t += this.writeVarint32(n, t), l.encodeUTF16toUTF8(a(e), function (e) {
                            this.view[t++] = e
                        }.bind(this)), t !== s + n + i) throw RangeError("Illegal range: Truncated data, " + t + " == " + (t + n + i));
                    return r ? (this.offset = t, this) : t - s
                }, o.readVString = function (e) {
                    var t = void 0 === e;
                    if (t && (e = this.offset), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
                    }
                    var r = e,
                        n = this.readVarint32(e),
                        i = this.readUTF8String(n.value, p.METRICS_BYTES, e += n.length);
                    return e += i.length, t ? (this.offset = e, i.string) : {
                        string: i.string,
                        length: e - r
                    }
                }, o.append = function (e, t, r) {
                    "number" != typeof t && "string" == typeof t || (r = t, t = void 0);
                    var n = void 0 === r;
                    if (n && (r = this.offset), !this.noAssert) {
                        if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                        if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                    }
                    e instanceof p || (e = p.wrap(e, t));
                    var i = e.limit - e.offset;
                    if (i <= 0) return this;
                    r += i;
                    var s = this.buffer.byteLength;
                    return s < r && this.resize((s *= 2) > r ? s : r), r -= i, this.view.set(e.view.subarray(e.offset, e.limit), r), e.offset += i, n && (this.offset += i), this
                }, o.appendTo = function (e, t) {
                    return e.append(this, t), this
                }, o.assert = function (e) {
                    return this.noAssert = !e, this
                }, o.capacity = function () {
                    return this.buffer.byteLength
                }, o.clear = function () {
                    return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, this
                }, o.clone = function (e) {
                    var t = new p(0, this.littleEndian, this.noAssert);
                    return t.view = e ? (t.buffer = new ArrayBuffer(this.buffer.byteLength), new Uint8Array(t.buffer)) : (t.buffer = this.buffer, this.view), t.offset = this.offset, t.markedOffset = this.markedOffset, t.limit = this.limit, t
                }, o.compact = function (e, t) {
                    if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                        if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                        if (t >>>= 0, e < 0 || t < e || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                    }
                    if (0 === e && t === this.buffer.byteLength) return this;
                    var r = t - e;
                    if (0 === r) return this.buffer = s, this.view = null, 0 <= this.markedOffset && (this.markedOffset -= e), this.offset = 0, this.limit = 0, this;
                    var n = new ArrayBuffer(r),
                        i = new Uint8Array(n);
                    return i.set(this.view.subarray(e, t)), this.buffer = n, this.view = i, 0 <= this.markedOffset && (this.markedOffset -= e), this.offset = 0, this.limit = r, this
                }, o.copy = function (e, t) {
                    if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                        if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                        if (t >>>= 0, e < 0 || t < e || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                    }
                    if (e === t) return new p(0, this.littleEndian, this.noAssert);
                    var r = t - e,
                        n = new p(r, this.littleEndian, this.noAssert);
                    return n.offset = 0, n.limit = r, 0 <= n.markedOffset && (n.markedOffset -= e), this.copyTo(n, 0, e, t), n
                }, o.copyTo = function (e, t, r, n) {
                    var i, s;
                    if (!this.noAssert && !p.isByteBuffer(e)) throw TypeError("Illegal target: Not a ByteBuffer");
                    if (t = (s = void 0 === t) ? e.offset : 0 | t, r = (i = void 0 === r) ? this.offset : 0 | r, n = void 0 === n ? this.limit : 0 | n, t < 0 || t > e.buffer.byteLength) throw RangeError("Illegal target range: 0 <= " + t + " <= " + e.buffer.byteLength);
                    if (r < 0 || n > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + r + " <= " + this.buffer.byteLength);
                    var o = n - r;
                    return 0 === o ? e : (e.ensureCapacity(t + o), e.view.set(this.view.subarray(r, n), t), i && (this.offset += o), s && (e.offset += o), this)
                }, o.ensureCapacity = function (e) {
                    var t = this.buffer.byteLength;
                    return t < e ? this.resize((t *= 2) > e ? t : e) : this
                }, o.fill = function (e, t, r) {
                    var n = void 0 === t;
                    if (n && (t = this.offset), "string" == typeof e && 0 < e.length && (e = e.charCodeAt(0)), void 0 === t && (t = this.offset), void 0 === r && (r = this.limit), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
                        if (e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                        if (t >>>= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal end: Not an integer");
                        if (r >>>= 0, t < 0 || r < t || r > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + r + " <= " + this.buffer.byteLength)
                    }
                    if (r <= t) return this;
                    for (; t < r;) this.view[t++] = e;
                    return n && (this.offset = t), this
                }, o.flip = function () {
                    return this.limit = this.offset, this.offset = 0, this
                }, o.mark = function (e) {
                    if (e = void 0 === e ? this.offset : e, !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
                        if ((e >>>= 0) < 0 || e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
                    }
                    return this.markedOffset = e, this
                }, o.order = function (e) {
                    if (!this.noAssert && "boolean" != typeof e) throw TypeError("Illegal littleEndian: Not a boolean");
                    return this.littleEndian = !!e, this
                }, o.LE = function (e) {
                    return this.littleEndian = void 0 === e || !!e, this
                }, o.BE = function (e) {
                    return this.littleEndian = void 0 !== e && !e, this
                }, o.prepend = function (e, t, r) {
                    "number" != typeof t && "string" == typeof t || (r = t, t = void 0);
                    var n = void 0 === r;
                    if (n && (r = this.offset), !this.noAssert) {
                        if ("number" != typeof r || r % 1 != 0) throw TypeError("Illegal offset: " + r + " (not an integer)");
                        if ((r >>>= 0) < 0 || r + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + r + " (+0) <= " + this.buffer.byteLength)
                    }
                    e instanceof p || (e = p.wrap(e, t));
                    var i = e.limit - e.offset;
                    if (i <= 0) return this;
                    var s = i - r;
                    if (0 < s) {
                        var o = new ArrayBuffer(this.buffer.byteLength + s),
                            a = new Uint8Array(o);
                        a.set(this.view.subarray(r, this.buffer.byteLength), i), this.buffer = o, this.view = a, this.offset += s, 0 <= this.markedOffset && (this.markedOffset += s), this.limit += s, r += s
                    } else new Uint8Array(this.buffer);
                    return this.view.set(e.view.subarray(e.offset, e.limit), r - i), e.offset = e.limit, n && (this.offset -= i), this
                }, o.prependTo = function (e, t) {
                    return e.prepend(this, t), this
                }, o.printDebug = function (e) {
                    "function" != typeof e && (e = console.log.bind(console)), e(this.toString() + "\n-------------------------------------------------------------------\n" + this.toDebug(!0))
                }, o.remaining = function () {
                    return this.limit - this.offset
                }, o.reset = function () {
                    return 0 <= this.markedOffset ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0, this
                }, o.resize = function (e) {
                    if (!this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal capacity: " + e + " (not an integer)");
                        if ((e |= 0) < 0) throw RangeError("Illegal capacity: 0 <= " + e)
                    }
                    if (this.buffer.byteLength < e) {
                        var t = new ArrayBuffer(e),
                            r = new Uint8Array(t);
                        r.set(this.view), this.buffer = t, this.view = r
                    }
                    return this
                }, o.reverse = function (e, t) {
                    if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                        if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                        if (t >>>= 0, e < 0 || t < e || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                    }
                    return e === t || Array.prototype.reverse.call(this.view.subarray(e, t)), this
                }, o.skip = function (e) {
                    if (!this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e + " (not an integer)");
                        e |= 0
                    }
                    var t = this.offset + e;
                    if (!this.noAssert && (t < 0 || t > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + e + " <= " + this.buffer.byteLength);
                    return this.offset = t, this
                }, o.slice = function (e, t) {
                    if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                        if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                        if (t >>>= 0, e < 0 || t < e || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                    }
                    var r = this.clone();
                    return r.offset = e, r.limit = t, r
                }, o.toBuffer = function (e) {
                    var t = this.offset,
                        r = this.limit;
                    if (!this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: Not an integer");
                        if (t >>>= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal limit: Not an integer");
                        if (r >>>= 0, t < 0 || r < t || r > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + r + " <= " + this.buffer.byteLength)
                    }
                    if (!e && 0 === t && r === this.buffer.byteLength) return this.buffer;
                    if (t === r) return s;
                    var n = new ArrayBuffer(r - t);
                    return new Uint8Array(n).set(new Uint8Array(this.buffer).subarray(t, r), 0), n
                }, o.toArrayBuffer = o.toBuffer, o.toString = function (e, t, r) {
                    if (void 0 === e) return "ByteBufferAB(offset=" + this.offset + ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
                    switch ("number" == typeof e && (r = t = e = "utf8"), e) {
                        case "utf8":
                            return this.toUTF8(t, r);
                        case "base64":
                            return this.toBase64(t, r);
                        case "hex":
                            return this.toHex(t, r);
                        case "binary":
                            return this.toBinary(t, r);
                        case "debug":
                            return this.toDebug();
                        case "columns":
                            return this.toColumns();
                        default:
                            throw Error("Unsupported encoding: " + e)
                    }
                };
                var c = function () {
                    for (var e = {}, i = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47], o = [], t = 0, r = i.length; t < r; ++t) o[i[t]] = t;
                    return e.encode = function (e, t) {
                        for (var r, n; null !== (r = e());) t(i[r >> 2 & 63]), n = (3 & r) << 4, null !== (r = e()) ? (t(i[63 & ((n |= r >> 4 & 15) | r >> 4 & 15)]), n = (15 & r) << 2, null !== (r = e()) ? (t(i[63 & (n | r >> 6 & 3)]), t(i[63 & r])) : (t(i[63 & n]), t(61))) : (t(i[63 & n]), t(61), t(61))
                    }, e.decode = function (e, t) {
                        var r, n, i;

                        function s(e) {
                            throw Error("Illegal character code: " + e)
                        }
                        for (; null !== (r = e());)
                            if (void 0 === (n = o[r]) && s(r), null !== (r = e()) && (void 0 === (i = o[r]) && s(r), t(n << 2 >>> 0 | (48 & i) >> 4), null !== (r = e()))) {
                                if (void 0 === (n = o[r])) {
                                    if (61 === r) break;
                                    s(r)
                                }
                                if (t((15 & i) << 4 >>> 0 | (60 & n) >> 2), null !== (r = e())) {
                                    if (void 0 === (i = o[r])) {
                                        if (61 === r) break;
                                        s(r)
                                    }
                                    t((3 & n) << 6 >>> 0 | i)
                                }
                            }
                    }, e.test = function (e) {
                        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e)
                    }, e
                }();
                o.toBase64 = function (e, t) {
                    if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), t |= 0, (e |= 0) < 0 || t > this.capacity || t < e) throw RangeError("begin, end");
                    var r;
                    return c.encode(function () {
                        return e < t ? this.view[e++] : null
                    }.bind(this), r = f()), r()
                }, p.fromBase64 = function (e, t) {
                    if ("string" != typeof e) throw TypeError("str");
                    var r = new p(e.length / 4 * 3, t),
                        n = 0;
                    return c.decode(a(e), function (e) {
                        r.view[n++] = e
                    }), r.limit = n, r
                }, p.btoa = function (e) {
                    return p.fromBinary(e).toBase64()
                }, p.atob = function (e) {
                    return p.fromBase64(e).toBinary()
                }, o.toBinary = function (e, t) {
                    if (void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), t |= 0, (e |= 0) < 0 || t > this.capacity() || t < e) throw RangeError("begin, end");
                    if (e === t) return "";
                    for (var r = [], n = []; e < t;) r.push(this.view[e++]), 1024 <= r.length && (n.push(String.fromCharCode.apply(String, r)), r = []);
                    return n.join("") + String.fromCharCode.apply(String, r)
                }, p.fromBinary = function (e, t) {
                    if ("string" != typeof e) throw TypeError("str");
                    for (var r, n = 0, i = e.length, s = new p(i, t); n < i;) {
                        if (255 < (r = e.charCodeAt(n))) throw RangeError("illegal char code: " + r);
                        s.view[n++] = r
                    }
                    return s.limit = i, s
                }, o.toDebug = function (e) {
                    for (var t, r = -1, n = this.buffer.byteLength, i = "", s = "", o = ""; r < n;) {
                        if (-1 !== r && (i += (t = this.view[r]) < 16 ? "0" + t.toString(16).toUpperCase() : t.toString(16).toUpperCase(), e && (s += 32 < t && t < 127 ? String.fromCharCode(t) : ".")), ++r, e && 0 < r && r % 16 == 0 && r !== n) {
                            for (; i.length < 51;) i += " ";
                            o += i + s + "\n", i = s = ""
                        }
                        r === this.offset && r === this.limit ? i += r === this.markedOffset ? "!" : "|" : r === this.offset ? i += r === this.markedOffset ? "[" : "<" : r === this.limit ? i += r === this.markedOffset ? "]" : ">" : i += r === this.markedOffset ? "'" : e || 0 !== r && r !== n ? " " : ""
                    }
                    if (e && " " !== i) {
                        for (; i.length < 51;) i += " ";
                        o += i + s + "\n"
                    }
                    return e ? o : i
                }, p.fromDebug = function (e, t, r) {
                    for (var n, i, s = e.length, o = new p((s + 1) / 3 | 0, t, r), a = 0, u = 0, f = !1, c = !1, h = !1, l = !1, d = !1; a < s;) {
                        switch (n = e.charAt(a++)) {
                            case "!":
                                if (!r) {
                                    if (c || h || l) {
                                        d = !0;
                                        break
                                    }
                                    c = h = l = !0
                                }
                                o.offset = o.markedOffset = o.limit = u, f = !1;
                                break;
                            case "|":
                                if (!r) {
                                    if (c || l) {
                                        d = !0;
                                        break
                                    }
                                    c = l = !0
                                }
                                o.offset = o.limit = u, f = !1;
                                break;
                            case "[":
                                if (!r) {
                                    if (c || h) {
                                        d = !0;
                                        break
                                    }
                                    c = h = !0
                                }
                                o.offset = o.markedOffset = u, f = !1;
                                break;
                            case "<":
                                if (!r) {
                                    if (c) {
                                        d = !0;
                                        break
                                    }
                                    c = !0
                                }
                                o.offset = u, f = !1;
                                break;
                            case "]":
                                if (!r) {
                                    if (l || h) {
                                        d = !0;
                                        break
                                    }
                                    l = h = !0
                                }
                                o.limit = o.markedOffset = u, f = !1;
                                break;
                            case ">":
                                if (!r) {
                                    if (l) {
                                        d = !0;
                                        break
                                    }
                                    l = !0
                                }
                                o.limit = u, f = !1;
                                break;
                            case "'":
                                if (!r) {
                                    if (h) {
                                        d = !0;
                                        break
                                    }
                                    h = !0
                                }
                                o.markedOffset = u, f = !1;
                                break;
                            case " ":
                                f = !1;
                                break;
                            default:
                                if (!r && f) {
                                    d = !0;
                                    break
                                }
                                if (i = parseInt(n + e.charAt(a++), 16), !r && (isNaN(i) || i < 0 || 255 < i)) throw TypeError("Illegal str: Not a debug encoded string");
                                o.view[u++] = i, f = !0
                        }
                        if (d) throw TypeError("Illegal str: Invalid symbol at " + a)
                    }
                    if (!r) {
                        if (!c || !l) throw TypeError("Illegal str: Missing offset or limit");
                        if (u < o.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + u + " < " + s)
                    }
                    return o
                }, o.toHex = function (e, t) {
                    if (e = void 0 === e ? this.offset : e, t = void 0 === t ? this.limit : t, !this.noAssert) {
                        if ("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                        if (e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
                        if (t >>>= 0, e < 0 || t < e || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
                    }
                    for (var r, n = new Array(t - e); e < t;)(r = this.view[e++]) < 16 ? n.push("0", r.toString(16)) : n.push(r.toString(16));
                    return n.join("")
                }, p.fromHex = function (e, t, r) {
                    if (!r) {
                        if ("string" != typeof e) throw TypeError("Illegal str: Not a string");
                        if (e.length % 2 != 0) throw TypeError("Illegal str: Length not a multiple of 2")
                    }
                    for (var n, i = e.length, s = new p(i / 2 | 0, t), o = 0, a = 0; o < i; o += 2) {
                        if (n = parseInt(e.substring(o, o + 2), 16), !r && (!isFinite(n) || n < 0 || 255 < n)) throw TypeError("Illegal str: Contains non-hex characters");
                        s.view[a++] = n
                    }
                    return s.limit = a, s
                };
                var h, l = h = {
                    MAX_CODEPOINT: 1114111,
                    encodeUTF8: function (e, t) {
                        var r = null;
                        for ("number" == typeof e && (r = e, e = function () {
                                return null
                            }); null !== r || null !== (r = e());) r < 128 ? t(127 & r) : (r < 2048 ? t(r >> 6 & 31 | 192) : (r < 65536 ? t(r >> 12 & 15 | 224) : (t(r >> 18 & 7 | 240), t(r >> 12 & 63 | 128)), t(r >> 6 & 63 | 128)), t(63 & r | 128)), r = null
                    },
                    decodeUTF8: function (e, t) {
                        for (var r, n, i, s, o = function (e) {
                                e = e.slice(0, e.indexOf(null));
                                var t = Error(e.toString());
                                throw t.name = "TruncatedError", t.bytes = e, t
                            }; null !== (r = e());)
                            if (0 == (128 & r)) t(r);
                            else if (192 == (224 & r)) null === (n = e()) && o([r, n]), t((31 & r) << 6 | 63 & n);
                        else if (224 == (240 & r))(null === (n = e()) || null === (i = e())) && o([r, n, i]), t((15 & r) << 12 | (63 & n) << 6 | 63 & i);
                        else {
                            if (240 != (248 & r)) throw RangeError("Illegal starting byte: " + r);
                            (null === (n = e()) || null === (i = e()) || null === (s = e())) && o([r, n, i, s]), t((7 & r) << 18 | (63 & n) << 12 | (63 & i) << 6 | 63 & s)
                        }
                    },
                    UTF16toUTF8: function (e, t) {
                        for (var r, n = null; null !== (r = null !== n ? n : e());) 55296 <= r && r <= 57343 && null !== (n = e()) && 56320 <= n && n <= 57343 ? (t(1024 * (r - 55296) + n - 56320 + 65536), n = null) : t(r);
                        null !== n && t(n)
                    },
                    UTF8toUTF16: function (e, t) {
                        var r = null;
                        for ("number" == typeof e && (r = e, e = function () {
                                return null
                            }); null !== r || null !== (r = e());) r <= 65535 ? t(r) : (t(55296 + ((r -= 65536) >> 10)), t(r % 1024 + 56320)), r = null
                    },
                    encodeUTF16toUTF8: function (e, t) {
                        h.UTF16toUTF8(e, function (e) {
                            h.encodeUTF8(e, t)
                        })
                    },
                    decodeUTF8toUTF16: function (e, t) {
                        h.decodeUTF8(e, function (e) {
                            h.UTF8toUTF16(e, t)
                        })
                    },
                    calculateCodePoint: function (e) {
                        return e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4
                    },
                    calculateUTF8: function (e) {
                        for (var t, r = 0; null !== (t = e());) r += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
                        return r
                    },
                    calculateUTF16asUTF8: function (e) {
                        var t = 0,
                            r = 0;
                        return h.UTF16toUTF8(e, function (e) {
                            ++t, r += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4
                        }), [t, r]
                    }
                };
                return o.toUTF8 = function (t, r) {
                    if (void 0 === t && (t = this.offset), void 0 === r && (r = this.limit), !this.noAssert) {
                        if ("number" != typeof t || t % 1 != 0) throw TypeError("Illegal begin: Not an integer");
                        if (t >>>= 0, "number" != typeof r || r % 1 != 0) throw TypeError("Illegal end: Not an integer");
                        if (r >>>= 0, t < 0 || r < t || r > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + r + " <= " + this.buffer.byteLength)
                    }
                    var e;
                    try {
                        l.decodeUTF8toUTF16(function () {
                            return t < r ? this.view[t++] : null
                        }.bind(this), e = f())
                    } catch (e) {
                        if (t !== r) throw RangeError("Illegal range: Truncated data, " + t + " != " + r)
                    }
                    return e()
                }, p.fromUTF8 = function (e, t, r) {
                    if (!r && "string" != typeof e) throw TypeError("Illegal str: Not a string");
                    var n = new p(l.calculateUTF16asUTF8(a(e), !0)[1], t, r),
                        i = 0;
                    return l.encodeUTF16toUTF8(a(e), function (e) {
                        n.view[i++] = e
                    }), n.limit = i, n
                }, p
            }, "function" == typeof t && "object" == typeof e && e && e.exports ? e.exports = function () {
                var e;
                try {
                    e = t("long")
                } catch (e) {}
                return i(e)
            }() : (n.dcodeIO = n.dcodeIO || {}).ByteBuffer = i(n.dcodeIO.Long)
        }, {
            long: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/long/dist/long.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/cipher-base/index.js": [function (e, t, r) {
            var i = e("safe-buffer").Buffer,
                n = e("stream").Transform,
                s = e("string_decoder").StringDecoder;

            function o(e) {
                n.call(this), this.hashMode = "string" == typeof e, this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
            }
            e("inherits")(o, n), o.prototype.update = function (e, t, r) {
                "string" == typeof e && (e = i.from(e, t));
                var n = this._update(e);
                return this.hashMode ? this : (r && (n = this._toString(n, r)), n)
            }, o.prototype.setAutoPadding = function () {}, o.prototype.getAuthTag = function () {
                throw new Error("trying to get auth tag in unsupported state")
            }, o.prototype.setAuthTag = function () {
                throw new Error("trying to set auth tag in unsupported state")
            }, o.prototype.setAAD = function () {
                throw new Error("trying to set aad in unsupported state")
            }, o.prototype._transform = function (e, t, r) {
                var n;
                try {
                    this.hashMode ? this._update(e) : this.push(this._update(e))
                } catch (e) {
                    n = e
                } finally {
                    r(n)
                }
            }, o.prototype._flush = function (e) {
                var t;
                try {
                    this.push(this.__final())
                } catch (e) {
                    t = e
                }
                e(t)
            }, o.prototype._finalOrDigest = function (e) {
                var t = this.__final() || i.alloc(0);
                return e && (t = this._toString(t, e, !0)), t
            }, o.prototype._toString = function (e, t, r) {
                if (this._decoder || (this._decoder = new s(t), this._encoding = t), this._encoding !== t) throw new Error("can't switch encodings");
                var n = this._decoder.write(e);
                return r && (n += this._decoder.end()), n
            }, t.exports = o
        }, {
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js",
            stream: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/stream-browserify/index.js",
            string_decoder: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/string_decoder/lib/string_decoder.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/core-util-is/lib/util.js": [function (e, t, r) {
            (function (e) {
                function t(e) {
                    return Object.prototype.toString.call(e)
                }
                r.isArray = function (e) {
                    return Array.isArray ? Array.isArray(e) : "[object Array]" === t(e)
                }, r.isBoolean = function (e) {
                    return "boolean" == typeof e
                }, r.isNull = function (e) {
                    return null === e
                }, r.isNullOrUndefined = function (e) {
                    return null == e
                }, r.isNumber = function (e) {
                    return "number" == typeof e
                }, r.isString = function (e) {
                    return "string" == typeof e
                }, r.isSymbol = function (e) {
                    return "symbol" == typeof e
                }, r.isUndefined = function (e) {
                    return void 0 === e
                }, r.isRegExp = function (e) {
                    return "[object RegExp]" === t(e)
                }, r.isObject = function (e) {
                    return "object" == typeof e && null !== e
                }, r.isDate = function (e) {
                    return "[object Date]" === t(e)
                }, r.isError = function (e) {
                    return "[object Error]" === t(e) || e instanceof Error
                }, r.isFunction = function (e) {
                    return "function" == typeof e
                }, r.isPrimitive = function (e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
                }, r.isBuffer = e.isBuffer
            }).call(this, {
                isBuffer: e("../../is-buffer/index.js")
            })
        }, {
            "../../is-buffer/index.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/is-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/create-hash/browser.js": [function (e, t, r) {
            "use strict";
            var n = e("inherits"),
                i = e("md5.js"),
                s = e("ripemd160"),
                o = e("sha.js"),
                a = e("cipher-base");

            function u(e) {
                a.call(this, "digest"), this._hash = e
            }
            n(u, a), u.prototype._update = function (e) {
                this._hash.update(e)
            }, u.prototype._final = function () {
                return this._hash.digest()
            }, t.exports = function (e) {
                return "md5" === (e = e.toLowerCase()) ? new i : "rmd160" === e || "ripemd160" === e ? new s : new u(o(e))
            }
        }, {
            "cipher-base": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/cipher-base/index.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            "md5.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/md5.js/index.js",
            ripemd160: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ripemd160/index.js",
            "sha.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/create-hash/md5.js": [function (e, t, r) {
            var n = e("md5.js");
            t.exports = function (e) {
                return (new n).update(e).digest()
            }
        }, {
            "md5.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/md5.js/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/create-hmac/browser.js": [function (e, t, r) {
            "use strict";
            var n = e("inherits"),
                i = e("./legacy"),
                o = e("cipher-base"),
                a = e("safe-buffer").Buffer,
                s = e("create-hash/md5"),
                u = e("ripemd160"),
                f = e("sha.js"),
                c = a.alloc(128);

            function h(e, t) {
                o.call(this, "digest"), "string" == typeof t && (t = a.from(t));
                var r = "sha512" === e || "sha384" === e ? 128 : 64;
                (this._alg = e, (this._key = t).length > r) ? t = ("rmd160" === e ? new u : f(e)).update(t).digest(): t.length < r && (t = a.concat([t, c], r));
                for (var n = this._ipad = a.allocUnsafe(r), i = this._opad = a.allocUnsafe(r), s = 0; s < r; s++) n[s] = 54 ^ t[s], i[s] = 92 ^ t[s];
                this._hash = "rmd160" === e ? new u : f(e), this._hash.update(n)
            }
            n(h, o), h.prototype._update = function (e) {
                this._hash.update(e)
            }, h.prototype._final = function () {
                var e = this._hash.digest();
                return ("rmd160" === this._alg ? new u : f(this._alg)).update(this._opad).update(e).digest()
            }, t.exports = function (e, t) {
                return "rmd160" === (e = e.toLowerCase()) || "ripemd160" === e ? new h("rmd160", t) : "md5" === e ? new i(s, t) : new h(e, t)
            }
        }, {
            "./legacy": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/create-hmac/legacy.js",
            "cipher-base": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/cipher-base/index.js",
            "create-hash/md5": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/create-hash/md5.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            ripemd160: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ripemd160/index.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js",
            "sha.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/create-hmac/legacy.js": [function (e, t, r) {
            "use strict";
            var n = e("inherits"),
                s = e("safe-buffer").Buffer,
                o = e("cipher-base"),
                a = s.alloc(128);

            function i(e, t) {
                o.call(this, "digest"), "string" == typeof t && (t = s.from(t)), this._alg = e, 64 < (this._key = t).length ? t = e(t) : t.length < 64 && (t = s.concat([t, a], 64));
                for (var r = this._ipad = s.allocUnsafe(64), n = this._opad = s.allocUnsafe(64), i = 0; i < 64; i++) r[i] = 54 ^ t[i], n[i] = 92 ^ t[i];
                this._hash = [r]
            }
            n(i, o), i.prototype._update = function (e) {
                this._hash.push(e)
            }, i.prototype._final = function () {
                var e = this._alg(s.concat(this._hash));
                return this._alg(s.concat([this._opad, e]))
            }, t.exports = i
        }, {
            "cipher-base": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/cipher-base/index.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/aes.js": [function (e, t, r) {
            var n, i;
            n = this, i = function (i) {
                return function () {
                    var e = i,
                        t = e.lib.BlockCipher,
                        r = e.algo,
                        f = [],
                        c = [],
                        h = [],
                        l = [],
                        d = [],
                        p = [],
                        _ = [],
                        b = [],
                        m = [],
                        y = [];
                    ! function () {
                        for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                        var r = 0,
                            n = 0;
                        for (t = 0; t < 256; t++) {
                            var i = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                            i = i >>> 8 ^ 255 & i ^ 99, f[r] = i;
                            var s = e[c[i] = r],
                                o = e[s],
                                a = e[o],
                                u = 257 * e[i] ^ 16843008 * i;
                            h[r] = u << 24 | u >>> 8, l[r] = u << 16 | u >>> 16, d[r] = u << 8 | u >>> 24, p[r] = u;
                            u = 16843009 * a ^ 65537 * o ^ 257 * s ^ 16843008 * r;
                            _[i] = u << 24 | u >>> 8, b[i] = u << 16 | u >>> 16, m[i] = u << 8 | u >>> 24, y[i] = u, r ? (r = s ^ e[e[e[a ^ s]]], n ^= e[e[n]]) : r = n = 1
                        }
                    }();
                    var v = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                        n = r.AES = t.extend({
                            _doReset: function () {
                                if (!this._nRounds || this._keyPriorReset !== this._key) {
                                    for (var e = this._keyPriorReset = this._key, t = e.words, r = e.sigBytes / 4, n = 4 * ((this._nRounds = r + 6) + 1), i = this._keySchedule = [], s = 0; s < n; s++)
                                        if (s < r) i[s] = t[s];
                                        else {
                                            var o = i[s - 1];
                                            s % r ? 6 < r && s % r == 4 && (o = f[o >>> 24] << 24 | f[o >>> 16 & 255] << 16 | f[o >>> 8 & 255] << 8 | f[255 & o]) : (o = f[(o = o << 8 | o >>> 24) >>> 24] << 24 | f[o >>> 16 & 255] << 16 | f[o >>> 8 & 255] << 8 | f[255 & o], o ^= v[s / r | 0] << 24), i[s] = i[s - r] ^ o
                                        } for (var a = this._invKeySchedule = [], u = 0; u < n; u++) {
                                        s = n - u;
                                        if (u % 4) o = i[s];
                                        else o = i[s - 4];
                                        a[u] = u < 4 || s <= 4 ? o : _[f[o >>> 24]] ^ b[f[o >>> 16 & 255]] ^ m[f[o >>> 8 & 255]] ^ y[f[255 & o]]
                                    }
                                }
                            },
                            encryptBlock: function (e, t) {
                                this._doCryptBlock(e, t, this._keySchedule, h, l, d, p, f)
                            },
                            decryptBlock: function (e, t) {
                                var r = e[t + 1];
                                e[t + 1] = e[t + 3], e[t + 3] = r, this._doCryptBlock(e, t, this._invKeySchedule, _, b, m, y, c);
                                r = e[t + 1];
                                e[t + 1] = e[t + 3], e[t + 3] = r
                            },
                            _doCryptBlock: function (e, t, r, n, i, s, o, a) {
                                for (var u = this._nRounds, f = e[t] ^ r[0], c = e[t + 1] ^ r[1], h = e[t + 2] ^ r[2], l = e[t + 3] ^ r[3], d = 4, p = 1; p < u; p++) {
                                    var _ = n[f >>> 24] ^ i[c >>> 16 & 255] ^ s[h >>> 8 & 255] ^ o[255 & l] ^ r[d++],
                                        b = n[c >>> 24] ^ i[h >>> 16 & 255] ^ s[l >>> 8 & 255] ^ o[255 & f] ^ r[d++],
                                        m = n[h >>> 24] ^ i[l >>> 16 & 255] ^ s[f >>> 8 & 255] ^ o[255 & c] ^ r[d++],
                                        y = n[l >>> 24] ^ i[f >>> 16 & 255] ^ s[c >>> 8 & 255] ^ o[255 & h] ^ r[d++];
                                    f = _, c = b, h = m, l = y
                                }
                                _ = (a[f >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & l]) ^ r[d++], b = (a[c >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & f]) ^ r[d++], m = (a[h >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & c]) ^ r[d++], y = (a[l >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & h]) ^ r[d++];
                                e[t] = _, e[t + 1] = b, e[t + 2] = m, e[t + 3] = y
                            },
                            keySize: 8
                        });
                    e.AES = t._createHelper(n)
                }(), i.AES
            }, "object" == typeof r ? t.exports = r = i(e("./core"), e("./enc-base64"), e("./md5"), e("./evpkdf"), e("./cipher-core")) : i(n.CryptoJS)
        }, {
            "./cipher-core": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/cipher-core.js",
            "./core": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/core.js",
            "./enc-base64": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/enc-base64.js",
            "./evpkdf": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/evpkdf.js",
            "./md5": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/md5.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/cipher-core.js": [function (e, t, r) {
            var n, i;
            n = this, i = function (e) {
                var t, r, n, u, i, s, o, a, f, c, h, l, d, p, _, b, m, y;
                e.lib.Cipher || (r = (t = e).lib, n = r.Base, u = r.WordArray, i = r.BufferedBlockAlgorithm, (s = t.enc).Utf8, o = s.Base64, a = t.algo.EvpKDF, f = r.Cipher = i.extend({
                    cfg: n.extend(),
                    createEncryptor: function (e, t) {
                        return this.create(this._ENC_XFORM_MODE, e, t)
                    },
                    createDecryptor: function (e, t) {
                        return this.create(this._DEC_XFORM_MODE, e, t)
                    },
                    init: function (e, t, r) {
                        this.cfg = this.cfg.extend(r), this._xformMode = e, this._key = t, this.reset()
                    },
                    reset: function () {
                        i.reset.call(this), this._doReset()
                    },
                    process: function (e) {
                        return this._append(e), this._process()
                    },
                    finalize: function (e) {
                        return e && this._append(e), this._doFinalize()
                    },
                    keySize: 4,
                    ivSize: 4,
                    _ENC_XFORM_MODE: 1,
                    _DEC_XFORM_MODE: 2,
                    _createHelper: function () {
                        function i(e) {
                            return "string" == typeof e ? y : b
                        }
                        return function (n) {
                            return {
                                encrypt: function (e, t, r) {
                                    return i(t).encrypt(n, e, t, r)
                                },
                                decrypt: function (e, t, r) {
                                    return i(t).decrypt(n, e, t, r)
                                }
                            }
                        }
                    }()
                }), r.StreamCipher = f.extend({
                    _doFinalize: function () {
                        return this._process(!0)
                    },
                    blockSize: 1
                }), c = t.mode = {}, h = r.BlockCipherMode = n.extend({
                    createEncryptor: function (e, t) {
                        return this.Encryptor.create(e, t)
                    },
                    createDecryptor: function (e, t) {
                        return this.Decryptor.create(e, t)
                    },
                    init: function (e, t) {
                        this._cipher = e, this._iv = t
                    }
                }), l = c.CBC = function () {
                    var e = h.extend();

                    function s(e, t, r) {
                        var n = this._iv;
                        if (n) {
                            var i = n;
                            this._iv = void 0
                        } else i = this._prevBlock;
                        for (var s = 0; s < r; s++) e[t + s] ^= i[s]
                    }
                    return e.Encryptor = e.extend({
                        processBlock: function (e, t) {
                            var r = this._cipher,
                                n = r.blockSize;
                            s.call(this, e, t, n), r.encryptBlock(e, t), this._prevBlock = e.slice(t, t + n)
                        }
                    }), e.Decryptor = e.extend({
                        processBlock: function (e, t) {
                            var r = this._cipher,
                                n = r.blockSize,
                                i = e.slice(t, t + n);
                            r.decryptBlock(e, t), s.call(this, e, t, n), this._prevBlock = i
                        }
                    }), e
                }(), d = (t.pad = {}).Pkcs7 = {
                    pad: function (e, t) {
                        for (var r = 4 * t, n = r - e.sigBytes % r, i = n << 24 | n << 16 | n << 8 | n, s = [], o = 0; o < n; o += 4) s.push(i);
                        var a = u.create(s, n);
                        e.concat(a)
                    },
                    unpad: function (e) {
                        var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                        e.sigBytes -= t
                    }
                }, r.BlockCipher = f.extend({
                    cfg: f.cfg.extend({
                        mode: l,
                        padding: d
                    }),
                    reset: function () {
                        f.reset.call(this);
                        var e = this.cfg,
                            t = e.iv,
                            r = e.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE) var n = r.createEncryptor;
                        else {
                            n = r.createDecryptor;
                            this._minBufferSize = 1
                        }
                        this._mode && this._mode.__creator == n ? this._mode.init(this, t && t.words) : (this._mode = n.call(r, this, t && t.words), this._mode.__creator = n)
                    },
                    _doProcessBlock: function (e, t) {
                        this._mode.processBlock(e, t)
                    },
                    _doFinalize: function () {
                        var e = this.cfg.padding;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            e.pad(this._data, this.blockSize);
                            var t = this._process(!0)
                        } else {
                            t = this._process(!0);
                            e.unpad(t)
                        }
                        return t
                    },
                    blockSize: 4
                }), p = r.CipherParams = n.extend({
                    init: function (e) {
                        this.mixIn(e)
                    },
                    toString: function (e) {
                        return (e || this.formatter).stringify(this)
                    }
                }), _ = (t.format = {}).OpenSSL = {
                    stringify: function (e) {
                        var t = e.ciphertext,
                            r = e.salt;
                        if (r) var n = u.create([1398893684, 1701076831]).concat(r).concat(t);
                        else n = t;
                        return n.toString(o)
                    },
                    parse: function (e) {
                        var t = o.parse(e),
                            r = t.words;
                        if (1398893684 == r[0] && 1701076831 == r[1]) {
                            var n = u.create(r.slice(2, 4));
                            r.splice(0, 4), t.sigBytes -= 16
                        }
                        return p.create({
                            ciphertext: t,
                            salt: n
                        })
                    }
                }, b = r.SerializableCipher = n.extend({
                    cfg: n.extend({
                        format: _
                    }),
                    encrypt: function (e, t, r, n) {
                        n = this.cfg.extend(n);
                        var i = e.createEncryptor(r, n),
                            s = i.finalize(t),
                            o = i.cfg;
                        return p.create({
                            ciphertext: s,
                            key: r,
                            iv: o.iv,
                            algorithm: e,
                            mode: o.mode,
                            padding: o.padding,
                            blockSize: e.blockSize,
                            formatter: n.format
                        })
                    },
                    decrypt: function (e, t, r, n) {
                        return n = this.cfg.extend(n), t = this._parse(t, n.format), e.createDecryptor(r, n).finalize(t.ciphertext)
                    },
                    _parse: function (e, t) {
                        return "string" == typeof e ? t.parse(e, this) : e
                    }
                }), m = (t.kdf = {}).OpenSSL = {
                    execute: function (e, t, r, n) {
                        n || (n = u.random(8));
                        var i = a.create({
                                keySize: t + r
                            }).compute(e, n),
                            s = u.create(i.words.slice(t), 4 * r);
                        return i.sigBytes = 4 * t, p.create({
                            key: i,
                            iv: s,
                            salt: n
                        })
                    }
                }, y = r.PasswordBasedCipher = b.extend({
                    cfg: b.cfg.extend({
                        kdf: m
                    }),
                    encrypt: function (e, t, r, n) {
                        var i = (n = this.cfg.extend(n)).kdf.execute(r, e.keySize, e.ivSize);
                        n.iv = i.iv;
                        var s = b.encrypt.call(this, e, t, i.key, n);
                        return s.mixIn(i), s
                    },
                    decrypt: function (e, t, r, n) {
                        n = this.cfg.extend(n), t = this._parse(t, n.format);
                        var i = n.kdf.execute(r, e.keySize, e.ivSize, t.salt);
                        return n.iv = i.iv, b.decrypt.call(this, e, t, i.key, n)
                    }
                }))
            }, "object" == typeof r ? t.exports = r = i(e("./core"), e("./evpkdf")) : i(n.CryptoJS)
        }, {
            "./core": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/core.js",
            "./evpkdf": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/evpkdf.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/core.js": [function (e, t, r) {
            var n, i;
            n = this, i = function () {
                var c, r, e, t, n, h, i, s, o, a, u, f, l = l || (c = Math, r = Object.create || function () {
                    function r() {}
                    return function (e) {
                        var t;
                        return r.prototype = e, t = new r, r.prototype = null, t
                    }
                }(), t = (e = {}).lib = {}, n = t.Base = {
                    extend: function (e) {
                        var t = r(this);
                        return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
                            t.$super.init.apply(this, arguments)
                        }), (t.init.prototype = t).$super = this, t
                    },
                    create: function () {
                        var e = this.extend();
                        return e.init.apply(e, arguments), e
                    },
                    init: function () {},
                    mixIn: function (e) {
                        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                    },
                    clone: function () {
                        return this.init.prototype.extend(this)
                    }
                }, h = t.WordArray = n.extend({
                    init: function (e, t) {
                        e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
                    },
                    toString: function (e) {
                        return (e || s).stringify(this)
                    },
                    concat: function (e) {
                        var t = this.words,
                            r = e.words,
                            n = this.sigBytes,
                            i = e.sigBytes;
                        if (this.clamp(), n % 4)
                            for (var s = 0; s < i; s++) {
                                var o = r[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                                t[n + s >>> 2] |= o << 24 - (n + s) % 4 * 8
                            } else
                                for (s = 0; s < i; s += 4) t[n + s >>> 2] = r[s >>> 2];
                        return this.sigBytes += i, this
                    },
                    clamp: function () {
                        var e = this.words,
                            t = this.sigBytes;
                        e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, e.length = c.ceil(t / 4)
                    },
                    clone: function () {
                        var e = n.clone.call(this);
                        return e.words = this.words.slice(0), e
                    },
                    random: function (e) {
                        for (var t, r = [], n = function (t) {
                                t = t;
                                var r = 987654321,
                                    n = 4294967295;
                                return function () {
                                    var e = ((r = 36969 * (65535 & r) + (r >> 16) & n) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & n) & n;
                                    return e /= 4294967296, (e += .5) * (.5 < c.random() ? 1 : -1)
                                }
                            }, i = 0; i < e; i += 4) {
                            var s = n(4294967296 * (t || c.random()));
                            t = 987654071 * s(), r.push(4294967296 * s() | 0)
                        }
                        return new h.init(r, e)
                    }
                }), i = e.enc = {}, s = i.Hex = {
                    stringify: function (e) {
                        for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
                            var s = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            n.push((s >>> 4).toString(16)), n.push((15 & s).toString(16))
                        }
                        return n.join("")
                    },
                    parse: function (e) {
                        for (var t = e.length, r = [], n = 0; n < t; n += 2) r[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
                        return new h.init(r, t / 2)
                    }
                }, o = i.Latin1 = {
                    stringify: function (e) {
                        for (var t = e.words, r = e.sigBytes, n = [], i = 0; i < r; i++) {
                            var s = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            n.push(String.fromCharCode(s))
                        }
                        return n.join("")
                    },
                    parse: function (e) {
                        for (var t = e.length, r = [], n = 0; n < t; n++) r[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
                        return new h.init(r, t)
                    }
                }, a = i.Utf8 = {
                    stringify: function (e) {
                        try {
                            return decodeURIComponent(escape(o.stringify(e)))
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function (e) {
                        return o.parse(unescape(encodeURIComponent(e)))
                    }
                }, u = t.BufferedBlockAlgorithm = n.extend({
                    reset: function () {
                        this._data = new h.init, this._nDataBytes = 0
                    },
                    _append: function (e) {
                        "string" == typeof e && (e = a.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                    },
                    _process: function (e) {
                        var t = this._data,
                            r = t.words,
                            n = t.sigBytes,
                            i = this.blockSize,
                            s = n / (4 * i),
                            o = (s = e ? c.ceil(s) : c.max((0 | s) - this._minBufferSize, 0)) * i,
                            a = c.min(4 * o, n);
                        if (o) {
                            for (var u = 0; u < o; u += i) this._doProcessBlock(r, u);
                            var f = r.splice(0, o);
                            t.sigBytes -= a
                        }
                        return new h.init(f, a)
                    },
                    clone: function () {
                        var e = n.clone.call(this);
                        return e._data = this._data.clone(), e
                    },
                    _minBufferSize: 0
                }), t.Hasher = u.extend({
                    cfg: n.extend(),
                    init: function (e) {
                        this.cfg = this.cfg.extend(e), this.reset()
                    },
                    reset: function () {
                        u.reset.call(this), this._doReset()
                    },
                    update: function (e) {
                        return this._append(e), this._process(), this
                    },
                    finalize: function (e) {
                        return e && this._append(e), this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function (r) {
                        return function (e, t) {
                            return new r.init(t).finalize(e)
                        }
                    },
                    _createHmacHelper: function (r) {
                        return function (e, t) {
                            return new f.HMAC.init(r, t).finalize(e)
                        }
                    }
                }), f = e.algo = {}, e);
                return l
            }, "object" == typeof r ? t.exports = r = i() : n.CryptoJS = i()
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/enc-base64.js": [function (e, t, r) {
            var n, i;
            n = this, i = function (e) {
                var t, u;
                return u = (t = e).lib.WordArray, t.enc.Base64 = {
                    stringify: function (e) {
                        var t = e.words,
                            r = e.sigBytes,
                            n = this._map;
                        e.clamp();
                        for (var i = [], s = 0; s < r; s += 3)
                            for (var o = (t[s >>> 2] >>> 24 - s % 4 * 8 & 255) << 16 | (t[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255) << 8 | t[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255, a = 0; a < 4 && s + .75 * a < r; a++) i.push(n.charAt(o >>> 6 * (3 - a) & 63));
                        var u = n.charAt(64);
                        if (u)
                            for (; i.length % 4;) i.push(u);
                        return i.join("")
                    },
                    parse: function (e) {
                        var t = e.length,
                            r = this._map,
                            n = this._reverseMap;
                        if (!n) {
                            n = this._reverseMap = [];
                            for (var i = 0; i < r.length; i++) n[r.charCodeAt(i)] = i
                        }
                        var s = r.charAt(64);
                        if (s) {
                            var o = e.indexOf(s); - 1 !== o && (t = o)
                        }
                        return function (e, t, r) {
                            for (var n = [], i = 0, s = 0; s < t; s++)
                                if (s % 4) {
                                    var o = r[e.charCodeAt(s - 1)] << s % 4 * 2,
                                        a = r[e.charCodeAt(s)] >>> 6 - s % 4 * 2;
                                    n[i >>> 2] |= (o | a) << 24 - i % 4 * 8, i++
                                } return u.create(n, i)
                        }(e, t, n)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }, e.enc.Base64
            }, "object" == typeof r ? t.exports = r = i(e("./core")) : i(n.CryptoJS)
        }, {
            "./core": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/core.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/enc-hex.js": [function (e, t, r) {
            var n, i;
            n = this, i = function (e) {
                return e.enc.Hex
            }, "object" == typeof r ? t.exports = r = i(e("./core")) : i(n.CryptoJS)
        }, {
            "./core": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/core.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/evpkdf.js": [function (e, t, r) {
            var n, i;
            n = this, i = function (e) {
                var t, r, n, c, i, s, o;
                return r = (t = e).lib, n = r.Base, c = r.WordArray, i = t.algo, s = i.MD5, o = i.EvpKDF = n.extend({
                    cfg: n.extend({
                        keySize: 4,
                        hasher: s,
                        iterations: 1
                    }),
                    init: function (e) {
                        this.cfg = this.cfg.extend(e)
                    },
                    compute: function (e, t) {
                        for (var r = this.cfg, n = r.hasher.create(), i = c.create(), s = i.words, o = r.keySize, a = r.iterations; s.length < o;) {
                            u && n.update(u);
                            var u = n.update(e).finalize(t);
                            n.reset();
                            for (var f = 1; f < a; f++) u = n.finalize(u), n.reset();
                            i.concat(u)
                        }
                        return i.sigBytes = 4 * o, i
                    }
                }), t.EvpKDF = function (e, t, r) {
                    return o.create(r).compute(e, t)
                }, e.EvpKDF
            }, "object" == typeof r ? t.exports = r = i(e("./core"), e("./sha1"), e("./hmac")) : i(n.CryptoJS)
        }, {
            "./core": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/core.js",
            "./hmac": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/hmac.js",
            "./sha1": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/sha1.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/hmac.js": [function (e, t, r) {
            var n, i;
            n = this, i = function (e) {
                var t, r, f;
                r = (t = e).lib.Base, f = t.enc.Utf8, t.algo.HMAC = r.extend({
                    init: function (e, t) {
                        e = this._hasher = new e.init, "string" == typeof t && (t = f.parse(t));
                        var r = e.blockSize,
                            n = 4 * r;
                        t.sigBytes > n && (t = e.finalize(t)), t.clamp();
                        for (var i = this._oKey = t.clone(), s = this._iKey = t.clone(), o = i.words, a = s.words, u = 0; u < r; u++) o[u] ^= 1549556828, a[u] ^= 909522486;
                        i.sigBytes = s.sigBytes = n, this.reset()
                    },
                    reset: function () {
                        var e = this._hasher;
                        e.reset(), e.update(this._iKey)
                    },
                    update: function (e) {
                        return this._hasher.update(e), this
                    },
                    finalize: function (e) {
                        var t = this._hasher,
                            r = t.finalize(e);
                        return t.reset(), t.finalize(this._oKey.clone().concat(r))
                    }
                })
            }, "object" == typeof r ? t.exports = r = i(e("./core")) : i(n.CryptoJS)
        }, {
            "./core": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/core.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/md5.js": [function (e, t, r) {
            var n, i;
            n = this, i = function (o) {
                return function (c) {
                    var e = o,
                        t = e.lib,
                        r = t.WordArray,
                        n = t.Hasher,
                        i = e.algo,
                        z = [];
                    ! function () {
                        for (var e = 0; e < 64; e++) z[e] = 4294967296 * c.abs(c.sin(e + 1)) | 0
                    }();
                    var s = i.MD5 = n.extend({
                        _doReset: function () {
                            this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878])
                        },
                        _doProcessBlock: function (e, t) {
                            for (var r = 0; r < 16; r++) {
                                var n = t + r,
                                    i = e[n];
                                e[n] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
                            }
                            var s = this._hash.words,
                                o = e[t + 0],
                                a = e[t + 1],
                                u = e[t + 2],
                                f = e[t + 3],
                                c = e[t + 4],
                                h = e[t + 5],
                                l = e[t + 6],
                                d = e[t + 7],
                                p = e[t + 8],
                                _ = e[t + 9],
                                b = e[t + 10],
                                m = e[t + 11],
                                y = e[t + 12],
                                v = e[t + 13],
                                g = e[t + 14],
                                w = e[t + 15],
                                x = s[0],
                                k = s[1],
                                j = s[2],
                                E = s[3];
                            k = I(k = I(k = I(k = I(k = T(k = T(k = T(k = T(k = B(k = B(k = B(k = B(k = S(k = S(k = S(k = S(k, j = S(j, E = S(E, x = S(x, k, j, E, o, 7, z[0]), k, j, a, 12, z[1]), x, k, u, 17, z[2]), E, x, f, 22, z[3]), j = S(j, E = S(E, x = S(x, k, j, E, c, 7, z[4]), k, j, h, 12, z[5]), x, k, l, 17, z[6]), E, x, d, 22, z[7]), j = S(j, E = S(E, x = S(x, k, j, E, p, 7, z[8]), k, j, _, 12, z[9]), x, k, b, 17, z[10]), E, x, m, 22, z[11]), j = S(j, E = S(E, x = S(x, k, j, E, y, 7, z[12]), k, j, v, 12, z[13]), x, k, g, 17, z[14]), E, x, w, 22, z[15]), j = B(j, E = B(E, x = B(x, k, j, E, a, 5, z[16]), k, j, l, 9, z[17]), x, k, m, 14, z[18]), E, x, o, 20, z[19]), j = B(j, E = B(E, x = B(x, k, j, E, h, 5, z[20]), k, j, b, 9, z[21]), x, k, w, 14, z[22]), E, x, c, 20, z[23]), j = B(j, E = B(E, x = B(x, k, j, E, _, 5, z[24]), k, j, g, 9, z[25]), x, k, f, 14, z[26]), E, x, p, 20, z[27]), j = B(j, E = B(E, x = B(x, k, j, E, v, 5, z[28]), k, j, u, 9, z[29]), x, k, d, 14, z[30]), E, x, y, 20, z[31]), j = T(j, E = T(E, x = T(x, k, j, E, h, 4, z[32]), k, j, p, 11, z[33]), x, k, m, 16, z[34]), E, x, g, 23, z[35]), j = T(j, E = T(E, x = T(x, k, j, E, a, 4, z[36]), k, j, c, 11, z[37]), x, k, d, 16, z[38]), E, x, b, 23, z[39]), j = T(j, E = T(E, x = T(x, k, j, E, v, 4, z[40]), k, j, o, 11, z[41]), x, k, f, 16, z[42]), E, x, l, 23, z[43]), j = T(j, E = T(E, x = T(x, k, j, E, _, 4, z[44]), k, j, y, 11, z[45]), x, k, w, 16, z[46]), E, x, u, 23, z[47]), j = I(j, E = I(E, x = I(x, k, j, E, o, 6, z[48]), k, j, d, 10, z[49]), x, k, g, 15, z[50]), E, x, h, 21, z[51]), j = I(j, E = I(E, x = I(x, k, j, E, y, 6, z[52]), k, j, f, 10, z[53]), x, k, b, 15, z[54]), E, x, a, 21, z[55]), j = I(j, E = I(E, x = I(x, k, j, E, p, 6, z[56]), k, j, w, 10, z[57]), x, k, l, 15, z[58]), E, x, v, 21, z[59]), j = I(j, E = I(E, x = I(x, k, j, E, c, 6, z[60]), k, j, m, 10, z[61]), x, k, u, 15, z[62]), E, x, _, 21, z[63]), s[0] = s[0] + x | 0, s[1] = s[1] + k | 0, s[2] = s[2] + j | 0, s[3] = s[3] + E | 0
                        },
                        _doFinalize: function () {
                            var e = this._data,
                                t = e.words,
                                r = 8 * this._nDataBytes,
                                n = 8 * e.sigBytes;
                            t[n >>> 5] |= 128 << 24 - n % 32;
                            var i = c.floor(r / 4294967296),
                                s = r;
                            t[15 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), e.sigBytes = 4 * (t.length + 1), this._process();
                            for (var o = this._hash, a = o.words, u = 0; u < 4; u++) {
                                var f = a[u];
                                a[u] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8)
                            }
                            return o
                        },
                        clone: function () {
                            var e = n.clone.call(this);
                            return e._hash = this._hash.clone(), e
                        }
                    });

                    function S(e, t, r, n, i, s, o) {
                        var a = e + (t & r | ~t & n) + i + o;
                        return (a << s | a >>> 32 - s) + t
                    }

                    function B(e, t, r, n, i, s, o) {
                        var a = e + (t & n | r & ~n) + i + o;
                        return (a << s | a >>> 32 - s) + t
                    }

                    function T(e, t, r, n, i, s, o) {
                        var a = e + (t ^ r ^ n) + i + o;
                        return (a << s | a >>> 32 - s) + t
                    }

                    function I(e, t, r, n, i, s, o) {
                        var a = e + (r ^ (t | ~n)) + i + o;
                        return (a << s | a >>> 32 - s) + t
                    }
                    e.MD5 = n._createHelper(s), e.HmacMD5 = n._createHmacHelper(s)
                }(Math), o.MD5
            }, "object" == typeof r ? t.exports = r = i(e("./core")) : i(n.CryptoJS)
        }, {
            "./core": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/core.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/sha1.js": [function (e, t, r) {
            var n, i;
            n = this, i = function (e) {
                var t, r, n, i, s, h, o;
                return r = (t = e).lib, n = r.WordArray, i = r.Hasher, s = t.algo, h = [], o = s.SHA1 = i.extend({
                    _doReset: function () {
                        this._hash = new n.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function (e, t) {
                        for (var r = this._hash.words, n = r[0], i = r[1], s = r[2], o = r[3], a = r[4], u = 0; u < 80; u++) {
                            if (u < 16) h[u] = 0 | e[t + u];
                            else {
                                var f = h[u - 3] ^ h[u - 8] ^ h[u - 14] ^ h[u - 16];
                                h[u] = f << 1 | f >>> 31
                            }
                            var c = (n << 5 | n >>> 27) + a + h[u];
                            c += u < 20 ? 1518500249 + (i & s | ~i & o) : u < 40 ? 1859775393 + (i ^ s ^ o) : u < 60 ? (i & s | i & o | s & o) - 1894007588 : (i ^ s ^ o) - 899497514, a = o, o = s, s = i << 30 | i >>> 2, i = n, n = c
                        }
                        r[0] = r[0] + n | 0, r[1] = r[1] + i | 0, r[2] = r[2] + s | 0, r[3] = r[3] + o | 0, r[4] = r[4] + a | 0
                    },
                    _doFinalize: function () {
                        var e = this._data,
                            t = e.words,
                            r = 8 * this._nDataBytes,
                            n = 8 * e.sigBytes;
                        return t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = Math.floor(r / 4294967296), t[15 + (n + 64 >>> 9 << 4)] = r, e.sigBytes = 4 * t.length, this._process(), this._hash
                    },
                    clone: function () {
                        var e = i.clone.call(this);
                        return e._hash = this._hash.clone(), e
                    }
                }), t.SHA1 = i._createHelper(o), t.HmacSHA1 = i._createHmacHelper(o), e.SHA1
            }, "object" == typeof r ? t.exports = r = i(e("./core")) : i(n.CryptoJS)
        }, {
            "./core": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/crypto-js/core.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/d/index.js": [function (e, t, r) {
            "use strict";
            var a = e("es5-ext/object/assign"),
                u = e("es5-ext/object/normalize-options"),
                f = e("es5-ext/object/is-callable"),
                c = e("es5-ext/string/#/contains");
            (t.exports = function (e, t) {
                var r, n, i, s, o;
                return arguments.length < 2 || "string" != typeof e ? (s = t, t = e, e = null) : s = arguments[2], null == e ? (r = i = !0, n = !1) : (r = c.call(e, "c"), n = c.call(e, "e"), i = c.call(e, "w")), o = {
                    value: t,
                    configurable: r,
                    enumerable: n,
                    writable: i
                }, s ? a(u(s), o) : o
            }).gs = function (e, t, r) {
                var n, i, s, o;
                return "string" != typeof e ? (s = r, r = t, t = e, e = null) : s = arguments[3], null == t ? t = void 0 : f(t) ? null == r ? r = void 0 : f(r) || (s = r, r = void 0) : (s = t, t = r = void 0), i = null == e ? !(n = !0) : (n = c.call(e, "c"), c.call(e, "e")), o = {
                    get: t,
                    set: r,
                    configurable: n,
                    enumerable: i
                }, s ? a(u(s), o) : o
            }
        }, {
            "es5-ext/object/assign": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/assign/index.js",
            "es5-ext/object/is-callable": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/is-callable.js",
            "es5-ext/object/normalize-options": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/normalize-options.js",
            "es5-ext/string/#/contains": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/string/#/contains/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/deep-equal/index.js": [function (e, t, r) {
            var a = Array.prototype.slice,
                u = e("./lib/keys.js"),
                f = e("./lib/is_arguments.js"),
                c = t.exports = function (e, t, r) {
                    return r || (r = {}), e === t || (e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !e || !t || "object" != typeof e && "object" != typeof t ? r.strict ? e === t : e == t : function (e, t, r) {
                        var n, i;
                        if (h(e) || h(t)) return !1;
                        if (e.prototype !== t.prototype) return !1;
                        if (f(e)) return !!f(t) && (e = a.call(e), t = a.call(t), c(e, t, r));
                        if (l(e)) {
                            if (!l(t)) return !1;
                            if (e.length !== t.length) return !1;
                            for (n = 0; n < e.length; n++)
                                if (e[n] !== t[n]) return !1;
                            return !0
                        }
                        try {
                            var s = u(e),
                                o = u(t)
                        } catch (e) {
                            return !1
                        }
                        if (s.length != o.length) return !1;
                        for (s.sort(), o.sort(), n = s.length - 1; 0 <= n; n--)
                            if (s[n] != o[n]) return !1;
                        for (n = s.length - 1; 0 <= n; n--)
                            if (i = s[n], !c(e[i], t[i], r)) return !1;
                        return typeof e == typeof t
                    }(e, t, r))
                };

            function h(e) {
                return null == e
            }

            function l(e) {
                return !(!e || "object" != typeof e || "number" != typeof e.length) && ("function" == typeof e.copy && "function" == typeof e.slice && !(0 < e.length && "number" != typeof e[0]))
            }
        }, {
            "./lib/is_arguments.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/deep-equal/lib/is_arguments.js",
            "./lib/keys.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/deep-equal/lib/keys.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/deep-equal/lib/is_arguments.js": [function (e, t, r) {
            var n = "[object Arguments]" == function () {
                return Object.prototype.toString.call(arguments)
            }();

            function i(e) {
                return "[object Arguments]" == Object.prototype.toString.call(e)
            }

            function s(e) {
                return e && "object" == typeof e && "number" == typeof e.length && Object.prototype.hasOwnProperty.call(e, "callee") && !Object.prototype.propertyIsEnumerable.call(e, "callee") || !1
            }(r = t.exports = n ? i : s).supported = i, r.unsupported = s
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/deep-equal/lib/keys.js": [function (e, t, r) {
            function n(e) {
                var t = [];
                for (var r in e) t.push(r);
                return t
            }(t.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ecurve/lib/curve.js": [function (e, t, r) {
            var n = e("assert"),
                a = e("bigi"),
                u = e("./point");

            function i(e, t, r, n, i, s, o) {
                this.p = e, this.a = t, this.b = r, this.G = u.fromAffine(this, n, i), this.n = s, this.h = o, this.infinity = new u(this, null, null, a.ZERO), this.pOverFour = e.add(a.ONE).shiftRight(2), this.pLength = Math.floor((this.p.bitLength() + 7) / 8)
            }
            i.prototype.pointFromX = function (e, t) {
                var r = t.pow(3).add(this.a.multiply(t)).add(this.b).mod(this.p).modPow(this.pOverFour, this.p),
                    n = r;
                return r.isEven() ^ !e && (n = this.p.subtract(n)), u.fromAffine(this, t, n)
            }, i.prototype.isInfinity = function (e) {
                return e === this.infinity || 0 === e.z.signum() && 0 !== e.y.signum()
            }, i.prototype.isOnCurve = function (e) {
                if (this.isInfinity(e)) return !0;
                var t = e.affineX,
                    r = e.affineY,
                    n = this.a,
                    i = this.b,
                    s = this.p;
                if (t.signum() < 0 || 0 <= t.compareTo(s)) return !1;
                if (r.signum() < 0 || 0 <= r.compareTo(s)) return !1;
                var o = r.square().mod(s),
                    a = t.pow(3).add(n.multiply(t)).add(i).mod(s);
                return o.equals(a)
            }, i.prototype.validate = function (e) {
                n(!this.isInfinity(e), "Point is at infinity"), n(this.isOnCurve(e), "Point is not on the curve");
                var t = e.multiply(this.n);
                return n(this.isInfinity(t), "Point is not a scalar multiple of G"), !0
            }, t.exports = i
        }, {
            "./point": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ecurve/lib/point.js",
            assert: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/assert.js",
            bigi: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ecurve/lib/curves.json": [function (e, t, r) {
            t.exports = {
                secp128r1: {
                    p: "fffffffdffffffffffffffffffffffff",
                    a: "fffffffdfffffffffffffffffffffffc",
                    b: "e87579c11079f43dd824993c2cee5ed3",
                    n: "fffffffe0000000075a30d1b9038a115",
                    h: "01",
                    Gx: "161ff7528b899b2d0c28607ca52c5b86",
                    Gy: "cf5ac8395bafeb13c02da292dded7a83"
                },
                secp160k1: {
                    p: "fffffffffffffffffffffffffffffffeffffac73",
                    a: "00",
                    b: "07",
                    n: "0100000000000000000001b8fa16dfab9aca16b6b3",
                    h: "01",
                    Gx: "3b4c382ce37aa192a4019e763036f4f5dd4d7ebb",
                    Gy: "938cf935318fdced6bc28286531733c3f03c4fee"
                },
                secp160r1: {
                    p: "ffffffffffffffffffffffffffffffff7fffffff",
                    a: "ffffffffffffffffffffffffffffffff7ffffffc",
                    b: "1c97befc54bd7a8b65acf89f81d4d4adc565fa45",
                    n: "0100000000000000000001f4c8f927aed3ca752257",
                    h: "01",
                    Gx: "4a96b5688ef573284664698968c38bb913cbfc82",
                    Gy: "23a628553168947d59dcc912042351377ac5fb32"
                },
                secp192k1: {
                    p: "fffffffffffffffffffffffffffffffffffffffeffffee37",
                    a: "00",
                    b: "03",
                    n: "fffffffffffffffffffffffe26f2fc170f69466a74defd8d",
                    h: "01",
                    Gx: "db4ff10ec057e9ae26b07d0280b7f4341da5d1b1eae06c7d",
                    Gy: "9b2f2f6d9c5628a7844163d015be86344082aa88d95e2f9d"
                },
                secp192r1: {
                    p: "fffffffffffffffffffffffffffffffeffffffffffffffff",
                    a: "fffffffffffffffffffffffffffffffefffffffffffffffc",
                    b: "64210519e59c80e70fa7e9ab72243049feb8deecc146b9b1",
                    n: "ffffffffffffffffffffffff99def836146bc9b1b4d22831",
                    h: "01",
                    Gx: "188da80eb03090f67cbf20eb43a18800f4ff0afd82ff1012",
                    Gy: "07192b95ffc8da78631011ed6b24cdd573f977a11e794811"
                },
                secp256k1: {
                    p: "fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f",
                    a: "00",
                    b: "07",
                    n: "fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141",
                    h: "01",
                    Gx: "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
                    Gy: "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
                },
                secp256r1: {
                    p: "ffffffff00000001000000000000000000000000ffffffffffffffffffffffff",
                    a: "ffffffff00000001000000000000000000000000fffffffffffffffffffffffc",
                    b: "5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b",
                    n: "ffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551",
                    h: "01",
                    Gx: "6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296",
                    Gy: "4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"
                }
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ecurve/lib/index.js": [function (e, t, r) {
            var n = e("./point"),
                i = e("./curve"),
                s = e("./names");
            t.exports = {
                Curve: i,
                Point: n,
                getCurveByName: s
            }
        }, {
            "./curve": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ecurve/lib/curve.js",
            "./names": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ecurve/lib/names.js",
            "./point": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ecurve/lib/point.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ecurve/lib/names.js": [function (e, t, r) {
            var f = e("bigi"),
                c = e("./curves.json"),
                h = e("./curve");
            t.exports = function (e) {
                var t = c[e];
                if (!t) return null;
                var r = new f(t.p, 16),
                    n = new f(t.a, 16),
                    i = new f(t.b, 16),
                    s = new f(t.n, 16),
                    o = new f(t.h, 16),
                    a = new f(t.Gx, 16),
                    u = new f(t.Gy, 16);
                return new h(r, n, i, a, u, s, o)
            }
        }, {
            "./curve": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ecurve/lib/curve.js",
            "./curves.json": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ecurve/lib/curves.json",
            bigi: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ecurve/lib/point.js": [function (e, t, r) {
            var f = e("assert"),
                s = e("safe-buffer").Buffer,
                c = e("bigi"),
                d = c.valueOf(3);

            function p(e, t, r, n) {
                f.notStrictEqual(n, void 0, "Missing Z coordinate"), this.curve = e, this.x = t, this.y = r, this.z = n, this._zInv = null, this.compressed = !0
            }
            Object.defineProperty(p.prototype, "zInv", {
                get: function () {
                    return null === this._zInv && (this._zInv = this.z.modInverse(this.curve.p)), this._zInv
                }
            }), Object.defineProperty(p.prototype, "affineX", {
                get: function () {
                    return this.x.multiply(this.zInv).mod(this.curve.p)
                }
            }), Object.defineProperty(p.prototype, "affineY", {
                get: function () {
                    return this.y.multiply(this.zInv).mod(this.curve.p)
                }
            }), p.fromAffine = function (e, t, r) {
                return new p(e, t, r, c.ONE)
            }, p.prototype.equals = function (e) {
                return e === this || (this.curve.isInfinity(this) ? this.curve.isInfinity(e) : this.curve.isInfinity(e) ? this.curve.isInfinity(this) : 0 === e.y.multiply(this.z).subtract(this.y.multiply(e.z)).mod(this.curve.p).signum() && 0 === e.x.multiply(this.z).subtract(this.x.multiply(e.z)).mod(this.curve.p).signum())
            }, p.prototype.negate = function () {
                var e = this.curve.p.subtract(this.y);
                return new p(this.curve, this.x, e, this.z)
            }, p.prototype.add = function (e) {
                if (this.curve.isInfinity(this)) return e;
                if (this.curve.isInfinity(e)) return this;
                var t = this.x,
                    r = this.y,
                    n = e.x,
                    i = e.y.multiply(this.z).subtract(r.multiply(e.z)).mod(this.curve.p),
                    s = n.multiply(this.z).subtract(t.multiply(e.z)).mod(this.curve.p);
                if (0 === s.signum()) return 0 === i.signum() ? this.twice() : this.curve.infinity;
                var o = s.square(),
                    a = o.multiply(s),
                    u = t.multiply(o),
                    f = i.square().multiply(this.z),
                    c = f.subtract(u.shiftLeft(1)).multiply(e.z).subtract(a).multiply(s).mod(this.curve.p),
                    h = u.multiply(d).multiply(i).subtract(r.multiply(a)).subtract(f.multiply(i)).multiply(e.z).add(i.multiply(a)).mod(this.curve.p),
                    l = a.multiply(this.z).multiply(e.z).mod(this.curve.p);
                return new p(this.curve, c, h, l)
            }, p.prototype.twice = function () {
                if (this.curve.isInfinity(this)) return this;
                if (0 === this.y.signum()) return this.curve.infinity;
                var e = this.x,
                    t = this.y,
                    r = t.multiply(this.z).mod(this.curve.p),
                    n = r.multiply(t).mod(this.curve.p),
                    i = this.curve.a,
                    s = e.square().multiply(d);
                0 !== i.signum() && (s = s.add(this.z.square().multiply(i)));
                var o = (s = s.mod(this.curve.p)).square().subtract(e.shiftLeft(3).multiply(n)).shiftLeft(1).multiply(r).mod(this.curve.p),
                    a = s.multiply(d).multiply(e).subtract(n.shiftLeft(1)).shiftLeft(2).multiply(n).subtract(s.pow(3)).mod(this.curve.p),
                    u = r.pow(3).shiftLeft(3).mod(this.curve.p);
                return new p(this.curve, o, a, u)
            }, p.prototype.multiply = function (e) {
                if (this.curve.isInfinity(this)) return this;
                if (0 === e.signum()) return this.curve.infinity;
                for (var t = e, r = t.multiply(d), n = this.negate(), i = this, s = r.bitLength() - 2; 0 < s; --s) {
                    var o = r.testBit(s),
                        a = t.testBit(s);
                    i = i.twice(), o !== a && (i = i.add(o ? this : n))
                }
                return i
            }, p.prototype.multiplyTwo = function (e, t, r) {
                for (var n = Math.max(e.bitLength(), r.bitLength()) - 1, i = this.curve.infinity, s = this.add(t); 0 <= n;) {
                    var o = e.testBit(n),
                        a = r.testBit(n);
                    i = i.twice(), o ? i = a ? i.add(s) : i.add(this) : a && (i = i.add(t)), --n
                }
                return i
            }, p.prototype.getEncoded = function (e) {
                if (null == e && (e = this.compressed), this.curve.isInfinity(this)) return s.alloc(1, 0);
                var t, r = this.affineX,
                    n = this.affineY,
                    i = this.curve.pLength;
                return e ? (t = s.allocUnsafe(1 + i)).writeUInt8(n.isEven() ? 2 : 3, 0) : ((t = s.allocUnsafe(1 + i + i)).writeUInt8(4, 0), n.toBuffer(i).copy(t, 1 + i)), r.toBuffer(i).copy(t, 1), t
            }, p.decodeFrom = function (e, t) {
                var r, n = t.readUInt8(0),
                    i = 4 !== n,
                    s = Math.floor((e.p.bitLength() + 7) / 8),
                    o = c.fromBuffer(t.slice(1, 1 + s));
                if (i) {
                    f.equal(t.length, s + 1, "Invalid sequence length"), f(2 === n || 3 === n, "Invalid sequence tag");
                    var a = 3 === n;
                    r = e.pointFromX(a, o)
                } else {
                    f.equal(t.length, 1 + s + s, "Invalid sequence length");
                    var u = c.fromBuffer(t.slice(1 + s));
                    r = p.fromAffine(e, o, u)
                }
                return r.compressed = i, r
            }, p.prototype.toString = function () {
                return this.curve.isInfinity(this) ? "(INFINITY)" : "(" + this.affineX.toString() + "," + this.affineY.toString() + ")"
            }, t.exports = p
        }, {
            assert: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/assert.js",
            bigi: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/bigi/lib/index.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/function/noop.js": [function (e, t, r) {
            "use strict";
            t.exports = function () {}
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/assign/index.js": [function (e, t, r) {
            "use strict";
            t.exports = e("./is-implemented")() ? Object.assign : e("./shim")
        }, {
            "./is-implemented": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/assign/is-implemented.js",
            "./shim": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/assign/shim.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/assign/is-implemented.js": [function (e, t, r) {
            "use strict";
            t.exports = function () {
                var e, t = Object.assign;
                return "function" == typeof t && (t(e = {
                    foo: "raz"
                }, {
                    bar: "dwa"
                }, {
                    trzy: "trzy"
                }), e.foo + e.bar + e.trzy === "razdwatrzy")
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/assign/shim.js": [function (e, t, r) {
            "use strict";
            var o = e("../keys"),
                a = e("../valid-value"),
                u = Math.max;
            t.exports = function (t, r) {
                var n, e, i, s = u(arguments.length, 2);
                for (t = Object(a(t)), i = function (e) {
                        try {
                            t[e] = r[e]
                        } catch (e) {
                            n || (n = e)
                        }
                    }, e = 1; e < s; ++e) r = arguments[e], o(r).forEach(i);
                if (void 0 !== n) throw n;
                return t
            }
        }, {
            "../keys": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/keys/index.js",
            "../valid-value": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/valid-value.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/is-callable.js": [function (e, t, r) {
            "use strict";
            t.exports = function (e) {
                return "function" == typeof e
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/is-value.js": [function (e, t, r) {
            "use strict";
            var n = e("../function/noop")();
            t.exports = function (e) {
                return e !== n && null !== e
            }
        }, {
            "../function/noop": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/function/noop.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/keys/index.js": [function (e, t, r) {
            "use strict";
            t.exports = e("./is-implemented")() ? Object.keys : e("./shim")
        }, {
            "./is-implemented": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/keys/is-implemented.js",
            "./shim": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/keys/shim.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/keys/is-implemented.js": [function (e, t, r) {
            "use strict";
            t.exports = function () {
                try {
                    return Object.keys("primitive"), !0
                } catch (e) {
                    return !1
                }
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/keys/shim.js": [function (e, t, r) {
            "use strict";
            var n = e("../is-value"),
                i = Object.keys;
            t.exports = function (e) {
                return i(n(e) ? Object(e) : e)
            }
        }, {
            "../is-value": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/is-value.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/normalize-options.js": [function (e, t, r) {
            "use strict";
            var n = e("./is-value"),
                i = Array.prototype.forEach,
                s = Object.create;
            t.exports = function (e) {
                var t = s(null);
                return i.call(arguments, function (e) {
                    n(e) && function (e, t) {
                        var r;
                        for (r in e) t[r] = e[r]
                    }(Object(e), t)
                }), t
            }
        }, {
            "./is-value": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/is-value.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/valid-callable.js": [function (e, t, r) {
            "use strict";
            t.exports = function (e) {
                if ("function" != typeof e) throw new TypeError(e + " is not a function");
                return e
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/valid-value.js": [function (e, t, r) {
            "use strict";
            var n = e("./is-value");
            t.exports = function (e) {
                if (!n(e)) throw new TypeError("Cannot use null or undefined");
                return e
            }
        }, {
            "./is-value": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/is-value.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/string/#/contains/index.js": [function (e, t, r) {
            "use strict";
            t.exports = e("./is-implemented")() ? String.prototype.contains : e("./shim")
        }, {
            "./is-implemented": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/string/#/contains/is-implemented.js",
            "./shim": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/string/#/contains/shim.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/string/#/contains/is-implemented.js": [function (e, t, r) {
            "use strict";
            var n = "razdwatrzy";
            t.exports = function () {
                return "function" == typeof n.contains && (!0 === n.contains("dwa") && !1 === n.contains("foo"))
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/string/#/contains/shim.js": [function (e, t, r) {
            "use strict";
            var n = String.prototype.indexOf;
            t.exports = function (e) {
                return -1 < n.call(this, e, arguments[1])
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/event-emitter/index.js": [function (e, t, r) {
            "use strict";
            var i, n, s, o, a, u, f, c = e("d"),
                h = e("es5-ext/object/valid-callable"),
                l = Function.prototype.apply,
                d = Function.prototype.call,
                p = Object.create,
                _ = Object.defineProperty,
                b = Object.defineProperties,
                m = Object.prototype.hasOwnProperty,
                y = {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                };
            n = function (e, t) {
                var r, n;
                return h(t), i.call(n = this, e, r = function () {
                    s.call(n, e, r), l.call(t, this, arguments)
                }), r.__eeOnceListener__ = t, this
            }, a = {
                on: i = function (e, t) {
                    var r;
                    return h(t), m.call(this, "__ee__") ? r = this.__ee__ : (r = y.value = p(null), _(this, "__ee__", y), y.value = null), r[e] ? "object" == typeof r[e] ? r[e].push(t) : r[e] = [r[e], t] : r[e] = t, this
                },
                once: n,
                off: s = function (e, t) {
                    var r, n, i, s;
                    if (h(t), !m.call(this, "__ee__")) return this;
                    if (!(r = this.__ee__)[e]) return this;
                    if ("object" == typeof (n = r[e]))
                        for (s = 0; i = n[s]; ++s) i !== t && i.__eeOnceListener__ !== t || (2 === n.length ? r[e] = n[s ? 0 : 1] : n.splice(s, 1));
                    else n !== t && n.__eeOnceListener__ !== t || delete r[e];
                    return this
                },
                emit: o = function (e) {
                    var t, r, n, i, s;
                    if (m.call(this, "__ee__") && (i = this.__ee__[e]))
                        if ("object" == typeof i) {
                            for (r = arguments.length, s = new Array(r - 1), t = 1; t < r; ++t) s[t - 1] = arguments[t];
                            for (i = i.slice(), t = 0; n = i[t]; ++t) l.call(n, this, s)
                        } else switch (arguments.length) {
                            case 1:
                                d.call(i, this);
                                break;
                            case 2:
                                d.call(i, this, arguments[1]);
                                break;
                            case 3:
                                d.call(i, this, arguments[1], arguments[2]);
                                break;
                            default:
                                for (r = arguments.length, s = new Array(r - 1), t = 1; t < r; ++t) s[t - 1] = arguments[t];
                                l.call(i, this, s)
                        }
                }
            }, u = {
                on: c(i),
                once: c(n),
                off: c(s),
                emit: c(o)
            }, f = b({}, u), t.exports = r = function (e) {
                return null == e ? p(f) : b(Object(e), u)
            }, r.methods = a
        }, {
            d: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/d/index.js",
            "es5-ext/object/valid-callable": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/es5-ext/object/valid-callable.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/events/events.js": [function (e, t, r) {
            var u = Object.create || function (e) {
                    var t = function () {};
                    return t.prototype = e, new t
                },
                o = Object.keys || function (e) {
                    var t = [];
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                    return r
                },
                s = Function.prototype.bind || function (e) {
                    var t = this;
                    return function () {
                        return t.apply(e, arguments)
                    }
                };

            function n() {
                this._events && Object.prototype.hasOwnProperty.call(this, "_events") || (this._events = u(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }((t.exports = n).EventEmitter = n).prototype._events = void 0, n.prototype._maxListeners = void 0;
            var i, a = 10;
            try {
                var f = {};
                Object.defineProperty && Object.defineProperty(f, "x", {
                    value: 0
                }), i = 0 === f.x
            } catch (e) {
                i = !1
            }

            function c(e) {
                return void 0 === e._maxListeners ? n.defaultMaxListeners : e._maxListeners
            }

            function h(e, t, r, n) {
                var i, s, o;
                if ("function" != typeof r) throw new TypeError('"listener" argument must be a function');
                if ((s = e._events) ? (s.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), s = e._events), o = s[t]) : (s = e._events = u(null), e._eventsCount = 0), o) {
                    if ("function" == typeof o ? o = s[t] = n ? [r, o] : [o, r] : n ? o.unshift(r) : o.push(r), !o.warned && (i = c(e)) && 0 < i && o.length > i) {
                        o.warned = !0;
                        var a = new Error("Possible EventEmitter memory leak detected. " + o.length + ' "' + String(t) + '" listeners added. Use emitter.setMaxListeners() to increase limit.');
                        a.name = "MaxListenersExceededWarning", a.emitter = e, a.type = t, a.count = o.length, "object" == typeof console && console.warn && console.warn("%s: %s", a.name, a.message)
                    }
                } else o = s[t] = r, ++e._eventsCount;
                return e
            }

            function l() {
                if (!this.fired) switch (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length) {
                    case 0:
                        return this.listener.call(this.target);
                    case 1:
                        return this.listener.call(this.target, arguments[0]);
                    case 2:
                        return this.listener.call(this.target, arguments[0], arguments[1]);
                    case 3:
                        return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
                    default:
                        for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
                        this.listener.apply(this.target, e)
                }
            }

            function d(e, t, r) {
                var n = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: r
                    },
                    i = s.call(l, n);
                return i.listener = r, n.wrapFn = i
            }

            function p(e, t, r) {
                var n = e._events;
                if (!n) return [];
                var i = n[t];
                return i ? "function" == typeof i ? r ? [i.listener || i] : [i] : r ? function (e) {
                    for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
                    return t
                }(i) : b(i, i.length) : []
            }

            function _(e) {
                var t = this._events;
                if (t) {
                    var r = t[e];
                    if ("function" == typeof r) return 1;
                    if (r) return r.length
                }
                return 0
            }

            function b(e, t) {
                for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
                return r
            }
            i ? Object.defineProperty(n, "defaultMaxListeners", {
                enumerable: !0,
                get: function () {
                    return a
                },
                set: function (e) {
                    if ("number" != typeof e || e < 0 || e != e) throw new TypeError('"defaultMaxListeners" must be a positive number');
                    a = e
                }
            }) : n.defaultMaxListeners = a, n.prototype.setMaxListeners = function (e) {
                if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
                return this._maxListeners = e, this
            }, n.prototype.getMaxListeners = function () {
                return c(this)
            }, n.prototype.emit = function (e) {
                var t, r, n, i, s, o, a = "error" === e;
                if (o = this._events) a = a && null == o.error;
                else if (!a) return !1;
                if (a) {
                    if (1 < arguments.length && (t = arguments[1]), t instanceof Error) throw t;
                    var u = new Error('Unhandled "error" event. (' + t + ")");
                    throw u.context = t, u
                }
                if (!(r = o[e])) return !1;
                var f = "function" == typeof r;
                switch (n = arguments.length) {
                    case 1:
                        ! function (e, t, r) {
                            if (t) e.call(r);
                            else
                                for (var n = e.length, i = b(e, n), s = 0; s < n; ++s) i[s].call(r)
                        }(r, f, this);
                        break;
                    case 2:
                        ! function (e, t, r, n) {
                            if (t) e.call(r, n);
                            else
                                for (var i = e.length, s = b(e, i), o = 0; o < i; ++o) s[o].call(r, n)
                        }(r, f, this, arguments[1]);
                        break;
                    case 3:
                        ! function (e, t, r, n, i) {
                            if (t) e.call(r, n, i);
                            else
                                for (var s = e.length, o = b(e, s), a = 0; a < s; ++a) o[a].call(r, n, i)
                        }(r, f, this, arguments[1], arguments[2]);
                        break;
                    case 4:
                        ! function (e, t, r, n, i, s) {
                            if (t) e.call(r, n, i, s);
                            else
                                for (var o = e.length, a = b(e, o), u = 0; u < o; ++u) a[u].call(r, n, i, s)
                        }(r, f, this, arguments[1], arguments[2], arguments[3]);
                        break;
                    default:
                        for (i = new Array(n - 1), s = 1; s < n; s++) i[s - 1] = arguments[s];
                        ! function (e, t, r, n) {
                            if (t) e.apply(r, n);
                            else
                                for (var i = e.length, s = b(e, i), o = 0; o < i; ++o) s[o].apply(r, n)
                        }(r, f, this, i)
                }
                return !0
            }, n.prototype.on = n.prototype.addListener = function (e, t) {
                return h(this, e, t, !1)
            }, n.prototype.prependListener = function (e, t) {
                return h(this, e, t, !0)
            }, n.prototype.once = function (e, t) {
                if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
                return this.on(e, d(this, e, t)), this
            }, n.prototype.prependOnceListener = function (e, t) {
                if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
                return this.prependListener(e, d(this, e, t)), this
            }, n.prototype.removeListener = function (e, t) {
                var r, n, i, s, o;
                if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
                if (!(n = this._events)) return this;
                if (!(r = n[e])) return this;
                if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = u(null) : (delete n[e], n.removeListener && this.emit("removeListener", e, r.listener || t));
                else if ("function" != typeof r) {
                    for (i = -1, s = r.length - 1; 0 <= s; s--)
                        if (r[s] === t || r[s].listener === t) {
                            o = r[s].listener, i = s;
                            break
                        } if (i < 0) return this;
                    0 === i ? r.shift() : function (e, t) {
                        for (var r = t, n = r + 1, i = e.length; n < i; r += 1, n += 1) e[r] = e[n];
                        e.pop()
                    }(r, i), 1 === r.length && (n[e] = r[0]), n.removeListener && this.emit("removeListener", e, o || t)
                }
                return this
            }, n.prototype.removeAllListeners = function (e) {
                var t, r, n;
                if (!(r = this._events)) return this;
                if (!r.removeListener) return 0 === arguments.length ? (this._events = u(null), this._eventsCount = 0) : r[e] && (0 == --this._eventsCount ? this._events = u(null) : delete r[e]), this;
                if (0 === arguments.length) {
                    var i, s = o(r);
                    for (n = 0; n < s.length; ++n) "removeListener" !== (i = s[n]) && this.removeAllListeners(i);
                    return this.removeAllListeners("removeListener"), this._events = u(null), this._eventsCount = 0, this
                }
                if ("function" == typeof (t = r[e])) this.removeListener(e, t);
                else if (t)
                    for (n = t.length - 1; 0 <= n; n--) this.removeListener(e, t[n]);
                return this
            }, n.prototype.listeners = function (e) {
                return p(this, e, !0)
            }, n.prototype.rawListeners = function (e) {
                return p(this, e, !1)
            }, n.listenerCount = function (e, t) {
                return "function" == typeof e.listenerCount ? e.listenerCount(t) : _.call(e, t)
            }, n.prototype.listenerCount = _, n.prototype.eventNames = function () {
                return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : []
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/hash-base/index.js": [function (e, t, r) {
            "use strict";
            var a = e("safe-buffer").Buffer,
                n = e("stream").Transform;

            function i(e) {
                n.call(this), this._block = a.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
            }
            e("inherits")(i, n), i.prototype._transform = function (e, t, r) {
                var n = null;
                try {
                    this.update(e, t)
                } catch (e) {
                    n = e
                }
                r(n)
            }, i.prototype._flush = function (e) {
                var t = null;
                try {
                    this.push(this.digest())
                } catch (e) {
                    t = e
                }
                e(t)
            }, i.prototype.update = function (e, t) {
                if (function (e, t) {
                        if (!a.isBuffer(e) && "string" != typeof e) throw new TypeError(t + " must be a string or a buffer")
                    }(e, "Data"), this._finalized) throw new Error("Digest already called");
                a.isBuffer(e) || (e = a.from(e, t));
                for (var r = this._block, n = 0; this._blockOffset + e.length - n >= this._blockSize;) {
                    for (var i = this._blockOffset; i < this._blockSize;) r[i++] = e[n++];
                    this._update(), this._blockOffset = 0
                }
                for (; n < e.length;) r[this._blockOffset++] = e[n++];
                for (var s = 0, o = 8 * e.length; 0 < o; ++s) this._length[s] += o, 0 < (o = this._length[s] / 4294967296 | 0) && (this._length[s] -= 4294967296 * o);
                return this
            }, i.prototype._update = function () {
                throw new Error("_update is not implemented")
            }, i.prototype.digest = function (e) {
                if (this._finalized) throw new Error("Digest already called");
                this._finalized = !0;
                var t = this._digest();
                void 0 !== e && (t = t.toString(e)), this._block.fill(0);
                for (var r = this._blockOffset = 0; r < 4; ++r) this._length[r] = 0;
                return t
            }, i.prototype._digest = function () {
                throw new Error("_digest is not implemented")
            }, t.exports = i
        }, {
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js",
            stream: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/stream-browserify/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ieee754/index.js": [function (e, t, r) {
            r.read = function (e, t, r, n, i) {
                var s, o, a = 8 * i - n - 1,
                    u = (1 << a) - 1,
                    f = u >> 1,
                    c = -7,
                    h = r ? i - 1 : 0,
                    l = r ? -1 : 1,
                    d = e[t + h];
                for (h += l, s = d & (1 << -c) - 1, d >>= -c, c += a; 0 < c; s = 256 * s + e[t + h], h += l, c -= 8);
                for (o = s & (1 << -c) - 1, s >>= -c, c += n; 0 < c; o = 256 * o + e[t + h], h += l, c -= 8);
                if (0 === s) s = 1 - f;
                else {
                    if (s === u) return o ? NaN : 1 / 0 * (d ? -1 : 1);
                    o += Math.pow(2, n), s -= f
                }
                return (d ? -1 : 1) * o * Math.pow(2, s - n)
            }, r.write = function (e, t, r, n, i, s) {
                var o, a, u, f = 8 * s - i - 1,
                    c = (1 << f) - 1,
                    h = c >> 1,
                    l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    d = n ? 0 : s - 1,
                    p = n ? 1 : -1,
                    _ = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = c) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), 2 <= (t += 1 <= o + h ? l / u : l * Math.pow(2, 1 - h)) * u && (o++, u /= 2), c <= o + h ? (a = 0, o = c) : 1 <= o + h ? (a = (t * u - 1) * Math.pow(2, i), o += h) : (a = t * Math.pow(2, h - 1) * Math.pow(2, i), o = 0)); 8 <= i; e[r + d] = 255 & a, d += p, a /= 256, i -= 8);
                for (o = o << i | a, f += i; 0 < f; e[r + d] = 255 & o, d += p, o /= 256, f -= 8);
                e[r + d - p] |= 128 * _
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/immutable/dist/immutable.js": [function (e, t, r) {
            var n, i;
            n = this, i = function () {
                "use strict";
                var n = Array.prototype.slice;

                function e(e, t) {
                    t && (e.prototype = Object.create(t.prototype)), e.prototype.constructor = e
                }

                function u(e) {
                    return c(e) ? e : G(e)
                }

                function a(e) {
                    return h(e) ? e : Z(e)
                }

                function f(e) {
                    return l(e) ? e : J(e)
                }

                function i(e) {
                    return c(e) && !d(e) ? e : $(e)
                }

                function c(e) {
                    return !(!e || !e[t])
                }

                function h(e) {
                    return !(!e || !e[r])
                }

                function l(e) {
                    return !(!e || !e[s])
                }

                function d(e) {
                    return h(e) || l(e)
                }

                function p(e) {
                    return !(!e || !e[o])
                }
                e(a, u), e(f, u), e(i, u), u.isIterable = c, u.isKeyed = h, u.isIndexed = l, u.isAssociative = d, u.isOrdered = p, u.Keyed = a, u.Indexed = f, u.Set = i;
                var t = "@@__IMMUTABLE_ITERABLE__@@",
                    r = "@@__IMMUTABLE_KEYED__@@",
                    s = "@@__IMMUTABLE_INDEXED__@@",
                    o = "@@__IMMUTABLE_ORDERED__@@",
                    _ = "delete",
                    v = 5,
                    y = 1 << v,
                    g = y - 1,
                    w = {},
                    b = {
                        value: !1
                    },
                    m = {
                        value: !1
                    };

                function x(e) {
                    return e.value = !1, e
                }

                function k(e) {
                    e && (e.value = !0)
                }

                function j() {}

                function E(e, t) {
                    t = t || 0;
                    for (var r = Math.max(0, e.length - t), n = new Array(r), i = 0; i < r; i++) n[i] = e[i + t];
                    return n
                }

                function z(e) {
                    return void 0 === e.size && (e.size = e.__iterate(B)), e.size
                }

                function S(e, t) {
                    if ("number" != typeof t) {
                        var r = t >>> 0;
                        if ("" + r !== t || 4294967295 === r) return NaN;
                        t = r
                    }
                    return t < 0 ? z(e) + t : t
                }

                function B() {
                    return !0
                }

                function T(e, t, r) {
                    return (0 === e || void 0 !== r && e <= -r) && (void 0 === t || void 0 !== r && r <= t)
                }

                function I(e, t) {
                    return O(e, t, 0)
                }

                function A(e, t) {
                    return O(e, t, t)
                }

                function O(e, t, r) {
                    return void 0 === e ? r : e < 0 ? Math.max(0, t + e) : void 0 === t ? e : Math.min(t, e)
                }
                var C = 0,
                    M = 1,
                    L = 2,
                    q = "function" == typeof Symbol && Symbol.iterator,
                    D = "@@iterator",
                    U = q || D;

                function R(e) {
                    this.next = e
                }

                function P(e, t, r, n) {
                    var i = 0 === e ? t : 1 === e ? r : [t, r];
                    return n ? n.value = i : n = {
                        value: i,
                        done: !1
                    }, n
                }

                function N() {
                    return {
                        value: void 0,
                        done: !0
                    }
                }

                function F(e) {
                    return !!V(e)
                }

                function K(e) {
                    return e && "function" == typeof e.next
                }

                function H(e) {
                    var t = V(e);
                    return t && t.call(e)
                }

                function V(e) {
                    var t = e && (q && e[q] || e[D]);
                    if ("function" == typeof t) return t
                }

                function W(e) {
                    return e && "number" == typeof e.length
                }

                function G(e) {
                    return null == e ? oe() : c(e) ? e.toSeq() : function (e) {
                        var t = fe(e) || "object" == typeof e && new re(e);
                        if (t) return t;
                        throw new TypeError("Expected Array or iterable object of values, or keyed object: " + e)
                    }(e)
                }

                function Z(e) {
                    return null == e ? oe().toKeyedSeq() : c(e) ? h(e) ? e.toSeq() : e.fromEntrySeq() : ae(e)
                }

                function J(e) {
                    return null == e ? oe() : c(e) ? h(e) ? e.entrySeq() : e.toIndexedSeq() : ue(e)
                }

                function $(e) {
                    return (null == e ? oe() : c(e) ? h(e) ? e.entrySeq() : e : ue(e)).toSetSeq()
                }
                R.prototype.toString = function () {
                    return "[Iterator]"
                }, R.KEYS = C, R.VALUES = M, R.ENTRIES = L, R.prototype.inspect = R.prototype.toSource = function () {
                    return this.toString()
                }, R.prototype[U] = function () {
                    return this
                }, e(G, u), G.of = function () {
                    return G(arguments)
                }, G.prototype.toSeq = function () {
                    return this
                }, G.prototype.toString = function () {
                    return this.__toString("Seq {", "}")
                }, G.prototype.cacheResult = function () {
                    return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this
                }, G.prototype.__iterate = function (e, t) {
                    return ce(this, e, t, !0)
                }, G.prototype.__iterator = function (e, t) {
                    return he(this, e, t, !0)
                }, e(Z, G), Z.prototype.toKeyedSeq = function () {
                    return this
                }, e(J, G), J.of = function () {
                    return J(arguments)
                }, J.prototype.toIndexedSeq = function () {
                    return this
                }, J.prototype.toString = function () {
                    return this.__toString("Seq [", "]")
                }, J.prototype.__iterate = function (e, t) {
                    return ce(this, e, t, !1)
                }, J.prototype.__iterator = function (e, t) {
                    return he(this, e, t, !1)
                }, e($, G), $.of = function () {
                    return $(arguments)
                }, $.prototype.toSetSeq = function () {
                    return this
                }, G.isSeq = se, G.Keyed = Z, G.Set = $, G.Indexed = J;
                var Y, X, Q, ee = "@@__IMMUTABLE_SEQ__@@";

                function te(e) {
                    this._array = e, this.size = e.length
                }

                function re(e) {
                    var t = Object.keys(e);
                    this._object = e, this._keys = t, this.size = t.length
                }

                function ne(e) {
                    this._iterable = e, this.size = e.length || e.size
                }

                function ie(e) {
                    this._iterator = e, this._iteratorCache = []
                }

                function se(e) {
                    return !(!e || !e[ee])
                }

                function oe() {
                    return Y || (Y = new te([]))
                }

                function ae(e) {
                    var t = Array.isArray(e) ? new te(e).fromEntrySeq() : K(e) ? new ie(e).fromEntrySeq() : F(e) ? new ne(e).fromEntrySeq() : "object" == typeof e ? new re(e) : void 0;
                    if (!t) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + e);
                    return t
                }

                function ue(e) {
                    var t = fe(e);
                    if (!t) throw new TypeError("Expected Array or iterable object of values: " + e);
                    return t
                }

                function fe(e) {
                    return W(e) ? new te(e) : K(e) ? new ie(e) : F(e) ? new ne(e) : void 0
                }

                function ce(e, t, r, n) {
                    var i = e._cache;
                    if (i) {
                        for (var s = i.length - 1, o = 0; o <= s; o++) {
                            var a = i[r ? s - o : o];
                            if (!1 === t(a[1], n ? a[0] : o, e)) return o + 1
                        }
                        return o
                    }
                    return e.__iterateUncached(t, r)
                }

                function he(e, t, r, n) {
                    var i = e._cache;
                    if (i) {
                        var s = i.length - 1,
                            o = 0;
                        return new R(function () {
                            var e = i[r ? s - o : o];
                            return o++ > s ? {
                                value: void 0,
                                done: !0
                            } : P(t, n ? e[0] : o - 1, e[1])
                        })
                    }
                    return e.__iteratorUncached(t, r)
                }

                function le(e, t) {
                    return t ? function r(n, i, e, t) {
                        if (Array.isArray(i)) return n.call(t, e, J(i).map(function (e, t) {
                            return r(n, e, t, i)
                        }));
                        if (pe(i)) return n.call(t, e, Z(i).map(function (e, t) {
                            return r(n, e, t, i)
                        }));
                        return i
                    }(t, e, "", {
                        "": e
                    }) : de(e)
                }

                function de(e) {
                    return Array.isArray(e) ? J(e).map(de).toList() : pe(e) ? Z(e).map(de).toMap() : e
                }

                function pe(e) {
                    return e && (e.constructor === Object || void 0 === e.constructor)
                }

                function _e(e, t) {
                    if (e === t || e != e && t != t) return !0;
                    if (!e || !t) return !1;
                    if ("function" == typeof e.valueOf && "function" == typeof t.valueOf) {
                        if ((e = e.valueOf()) === (t = t.valueOf()) || e != e && t != t) return !0;
                        if (!e || !t) return !1
                    }
                    return !("function" != typeof e.equals || "function" != typeof t.equals || !e.equals(t))
                }

                function be(r, e) {
                    if (r === e) return !0;
                    if (!c(e) || void 0 !== r.size && void 0 !== e.size && r.size !== e.size || void 0 !== r.__hash && void 0 !== e.__hash && r.__hash !== e.__hash || h(r) !== h(e) || l(r) !== l(e) || p(r) !== p(e)) return !1;
                    if (0 === r.size && 0 === e.size) return !0;
                    var n = !d(r);
                    if (p(r)) {
                        var i = r.entries();
                        return e.every(function (e, t) {
                            var r = i.next().value;
                            return r && _e(r[1], e) && (n || _e(r[0], t))
                        }) && i.next().done
                    }
                    var s = !1;
                    if (void 0 === r.size)
                        if (void 0 === e.size) "function" == typeof r.cacheResult && r.cacheResult();
                        else {
                            s = !0;
                            var t = r;
                            r = e, e = t
                        } var o = !0,
                        a = e.__iterate(function (e, t) {
                            if (n ? !r.has(e) : s ? !_e(e, r.get(t, w)) : !_e(r.get(t, w), e)) return o = !1
                        });
                    return o && r.size === a
                }

                function me(e, t) {
                    if (!(this instanceof me)) return new me(e, t);
                    if (this._value = e, this.size = void 0 === t ? 1 / 0 : Math.max(0, t), 0 === this.size) {
                        if (X) return X;
                        X = this
                    }
                }

                function ye(e, t) {
                    if (!e) throw new Error(t)
                }

                function ve(e, t, r) {
                    if (!(this instanceof ve)) return new ve(e, t, r);
                    if (ye(0 !== r, "Cannot step a Range by 0"), e = e || 0, void 0 === t && (t = 1 / 0), r = void 0 === r ? 1 : Math.abs(r), t < e && (r = -r), this._start = e, this._end = t, this._step = r, this.size = Math.max(0, Math.ceil((t - e) / r - 1) + 1), 0 === this.size) {
                        if (Q) return Q;
                        Q = this
                    }
                }

                function ge() {
                    throw TypeError("Abstract")
                }

                function we() {}

                function xe() {}

                function ke() {}
                G.prototype[ee] = !0, e(te, J), te.prototype.get = function (e, t) {
                    return this.has(e) ? this._array[S(this, e)] : t
                }, te.prototype.__iterate = function (e, t) {
                    for (var r = this._array, n = r.length - 1, i = 0; i <= n; i++)
                        if (!1 === e(r[t ? n - i : i], i, this)) return i + 1;
                    return i
                }, te.prototype.__iterator = function (e, t) {
                    var r = this._array,
                        n = r.length - 1,
                        i = 0;
                    return new R(function () {
                        return n < i ? {
                            value: void 0,
                            done: !0
                        } : P(e, i, r[t ? n - i++ : i++])
                    })
                }, e(re, Z), re.prototype.get = function (e, t) {
                    return void 0 === t || this.has(e) ? this._object[e] : t
                }, re.prototype.has = function (e) {
                    return this._object.hasOwnProperty(e)
                }, re.prototype.__iterate = function (e, t) {
                    for (var r = this._object, n = this._keys, i = n.length - 1, s = 0; s <= i; s++) {
                        var o = n[t ? i - s : s];
                        if (!1 === e(r[o], o, this)) return s + 1
                    }
                    return s
                }, re.prototype.__iterator = function (t, r) {
                    var n = this._object,
                        i = this._keys,
                        s = i.length - 1,
                        o = 0;
                    return new R(function () {
                        var e = i[r ? s - o : o];
                        return o++ > s ? {
                            value: void 0,
                            done: !0
                        } : P(t, e, n[e])
                    })
                }, re.prototype[o] = !0, e(ne, J), ne.prototype.__iterateUncached = function (e, t) {
                    if (t) return this.cacheResult().__iterate(e, t);
                    var r = H(this._iterable),
                        n = 0;
                    if (K(r))
                        for (var i; !(i = r.next()).done && !1 !== e(i.value, n++, this););
                    return n
                }, ne.prototype.__iteratorUncached = function (t, e) {
                    if (e) return this.cacheResult().__iterator(t, e);
                    var r = H(this._iterable);
                    if (!K(r)) return new R(N);
                    var n = 0;
                    return new R(function () {
                        var e = r.next();
                        return e.done ? e : P(t, n++, e.value)
                    })
                }, e(ie, J), ie.prototype.__iterateUncached = function (e, t) {
                    if (t) return this.cacheResult().__iterate(e, t);
                    for (var r, n = this._iterator, i = this._iteratorCache, s = 0; s < i.length;)
                        if (!1 === e(i[s], s++, this)) return s;
                    for (; !(r = n.next()).done;) {
                        var o = r.value;
                        if (!1 === e(i[s] = o, s++, this)) break
                    }
                    return s
                }, ie.prototype.__iteratorUncached = function (t, e) {
                    if (e) return this.cacheResult().__iterator(t, e);
                    var r = this._iterator,
                        n = this._iteratorCache,
                        i = 0;
                    return new R(function () {
                        if (i >= n.length) {
                            var e = r.next();
                            if (e.done) return e;
                            n[i] = e.value
                        }
                        return P(t, i, n[i++])
                    })
                }, e(me, J), me.prototype.toString = function () {
                    return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]"
                }, me.prototype.get = function (e, t) {
                    return this.has(e) ? this._value : t
                }, me.prototype.includes = function (e) {
                    return _e(this._value, e)
                }, me.prototype.slice = function (e, t) {
                    var r = this.size;
                    return T(e, t, r) ? this : new me(this._value, A(t, r) - I(e, r))
                }, me.prototype.reverse = function () {
                    return this
                }, me.prototype.indexOf = function (e) {
                    return _e(this._value, e) ? 0 : -1
                }, me.prototype.lastIndexOf = function (e) {
                    return _e(this._value, e) ? this.size : -1
                }, me.prototype.__iterate = function (e, t) {
                    for (var r = 0; r < this.size; r++)
                        if (!1 === e(this._value, r, this)) return r + 1;
                    return r
                }, me.prototype.__iterator = function (e, t) {
                    var r = this,
                        n = 0;
                    return new R(function () {
                        return n < r.size ? P(e, n++, r._value) : {
                            value: void 0,
                            done: !0
                        }
                    })
                }, me.prototype.equals = function (e) {
                    return e instanceof me ? _e(this._value, e._value) : be(e)
                }, e(ve, J), ve.prototype.toString = function () {
                    return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]"
                }, ve.prototype.get = function (e, t) {
                    return this.has(e) ? this._start + S(this, e) * this._step : t
                }, ve.prototype.includes = function (e) {
                    var t = (e - this._start) / this._step;
                    return 0 <= t && t < this.size && t === Math.floor(t)
                }, ve.prototype.slice = function (e, t) {
                    return T(e, t, this.size) ? this : (e = I(e, this.size), (t = A(t, this.size)) <= e ? new ve(0, 0) : new ve(this.get(e, this._end), this.get(t, this._end), this._step))
                }, ve.prototype.indexOf = function (e) {
                    var t = e - this._start;
                    if (t % this._step == 0) {
                        var r = t / this._step;
                        if (0 <= r && r < this.size) return r
                    }
                    return -1
                }, ve.prototype.lastIndexOf = function (e) {
                    return this.indexOf(e)
                }, ve.prototype.__iterate = function (e, t) {
                    for (var r = this.size - 1, n = this._step, i = t ? this._start + r * n : this._start, s = 0; s <= r; s++) {
                        if (!1 === e(i, s, this)) return s + 1;
                        i += t ? -n : n
                    }
                    return s
                }, ve.prototype.__iterator = function (t, r) {
                    var n = this.size - 1,
                        i = this._step,
                        s = r ? this._start + n * i : this._start,
                        o = 0;
                    return new R(function () {
                        var e = s;
                        return s += r ? -i : i, n < o ? {
                            value: void 0,
                            done: !0
                        } : P(t, o++, e)
                    })
                }, ve.prototype.equals = function (e) {
                    return e instanceof ve ? this._start === e._start && this._end === e._end && this._step === e._step : be(this, e)
                }, e(ge, u), e(we, ge), e(xe, ge), e(ke, ge), ge.Keyed = we, ge.Indexed = xe, ge.Set = ke;
                var je = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function (e, t) {
                    var r = 65535 & (e |= 0),
                        n = 65535 & (t |= 0);
                    return r * n + ((e >>> 16) * n + r * (t >>> 16) << 16 >>> 0) | 0
                };

                function Ee(e) {
                    return e >>> 1 & 1073741824 | 3221225471 & e
                }

                function ze(e) {
                    if (!1 === e || null == e) return 0;
                    if ("function" == typeof e.valueOf && (!1 === (e = e.valueOf()) || null == e)) return 0;
                    if (!0 === e) return 1;
                    var t = typeof e;
                    if ("number" === t) {
                        if (e != e || e === 1 / 0) return 0;
                        var r = 0 | e;
                        for (r !== e && (r ^= 4294967295 * e); 4294967295 < e;) r ^= e /= 4294967295;
                        return Ee(r)
                    }
                    if ("string" === t) return e.length > Me ? function (e) {
                        var t = De[e];
                        void 0 === t && (t = Se(e), qe === Le && (qe = 0, De = {}), qe++, De[e] = t);
                        return t
                    }(e) : Se(e);
                    if ("function" == typeof e.hashCode) return e.hashCode();
                    if ("object" === t) return function (e) {
                        var t;
                        if (Ae && void 0 !== (t = Ie.get(e))) return t;
                        if (void 0 !== (t = e[Ce])) return t;
                        if (!Te) {
                            if (void 0 !== (t = e.propertyIsEnumerable && e.propertyIsEnumerable[Ce])) return t;
                            if (void 0 !== (t = function (e) {
                                    if (e && 0 < e.nodeType) switch (e.nodeType) {
                                        case 1:
                                            return e.uniqueID;
                                        case 9:
                                            return e.documentElement && e.documentElement.uniqueID
                                    }
                                }(e))) return t
                        }
                        t = ++Oe, 1073741824 & Oe && (Oe = 0);
                        if (Ae) Ie.set(e, t);
                        else {
                            if (void 0 !== Be && !1 === Be(e)) throw new Error("Non-extensible objects are not allowed as keys.");
                            if (Te) Object.defineProperty(e, Ce, {
                                enumerable: !1,
                                configurable: !1,
                                writable: !1,
                                value: t
                            });
                            else if (void 0 !== e.propertyIsEnumerable && e.propertyIsEnumerable === e.constructor.prototype.propertyIsEnumerable) e.propertyIsEnumerable = function () {
                                return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments)
                            }, e.propertyIsEnumerable[Ce] = t;
                            else {
                                if (void 0 === e.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
                                e[Ce] = t
                            }
                        }
                        return t
                    }(e);
                    if ("function" == typeof e.toString) return Se(e.toString());
                    throw new Error("Value type " + t + " cannot be hashed.")
                }

                function Se(e) {
                    for (var t = 0, r = 0; r < e.length; r++) t = 31 * t + e.charCodeAt(r) | 0;
                    return Ee(t)
                }
                var Be = Object.isExtensible,
                    Te = function () {
                        try {
                            return Object.defineProperty({}, "@", {}), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                var Ie, Ae = "function" == typeof WeakMap;
                Ae && (Ie = new WeakMap);
                var Oe = 0,
                    Ce = "__immutablehash__";
                "function" == typeof Symbol && (Ce = Symbol(Ce));
                var Me = 16,
                    Le = 255,
                    qe = 0,
                    De = {};

                function Ue(e) {
                    ye(e !== 1 / 0, "Cannot perform this action with an infinite size.")
                }

                function Re(t) {
                    return null == t ? Qe() : Pe(t) && !p(t) ? t : Qe().withMutations(function (r) {
                        var e = a(t);
                        Ue(e.size), e.forEach(function (e, t) {
                            return r.set(t, e)
                        })
                    })
                }

                function Pe(e) {
                    return !(!e || !e[Fe])
                }
                e(Re, we), Re.of = function () {
                    var r = n.call(arguments, 0);
                    return Qe().withMutations(function (e) {
                        for (var t = 0; t < r.length; t += 2) {
                            if (t + 1 >= r.length) throw new Error("Missing value for key: " + r[t]);
                            e.set(r[t], r[t + 1])
                        }
                    })
                }, Re.prototype.toString = function () {
                    return this.__toString("Map {", "}")
                }, Re.prototype.get = function (e, t) {
                    return this._root ? this._root.get(0, void 0, e, t) : t
                }, Re.prototype.set = function (e, t) {
                    return et(this, e, t)
                }, Re.prototype.setIn = function (e, t) {
                    return this.updateIn(e, w, function () {
                        return t
                    })
                }, Re.prototype.remove = function (e) {
                    return et(this, e, w)
                }, Re.prototype.deleteIn = function (e) {
                    return this.updateIn(e, function () {
                        return w
                    })
                }, Re.prototype.update = function (e, t, r) {
                    return 1 === arguments.length ? e(this) : this.updateIn([e], t, r)
                }, Re.prototype.updateIn = function (e, t, r) {
                    r || (r = t, t = void 0);
                    var n = function e(t, r, n, i) {
                        var s = t === w;
                        var o = r.next();
                        if (o.done) {
                            var a = s ? n : t,
                                u = i(a);
                            return u === a ? t : u
                        }
                        ye(s || t && t.set, "invalid keyPath");
                        var f = o.value;
                        var c = s ? w : t.get(f, w);
                        var h = e(c, r, n, i);
                        return h === c ? t : h === w ? t.remove(f) : (s ? Qe() : t).set(f, h)
                    }(this, nr(e), t, r);
                    return n === w ? void 0 : n
                }, Re.prototype.clear = function () {
                    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : Qe()
                }, Re.prototype.merge = function () {
                    return it(this, void 0, arguments)
                }, Re.prototype.mergeWith = function (e) {
                    return it(this, e, n.call(arguments, 1))
                }, Re.prototype.mergeIn = function (e) {
                    var t = n.call(arguments, 1);
                    return this.updateIn(e, Qe(), function (e) {
                        return "function" == typeof e.merge ? e.merge.apply(e, t) : t[t.length - 1]
                    })
                }, Re.prototype.mergeDeep = function () {
                    return it(this, st, arguments)
                }, Re.prototype.mergeDeepWith = function (e) {
                    var t = n.call(arguments, 1);
                    return it(this, ot(e), t)
                }, Re.prototype.mergeDeepIn = function (e) {
                    var t = n.call(arguments, 1);
                    return this.updateIn(e, Qe(), function (e) {
                        return "function" == typeof e.mergeDeep ? e.mergeDeep.apply(e, t) : t[t.length - 1]
                    })
                }, Re.prototype.sort = function (e) {
                    return It(Wt(this, e))
                }, Re.prototype.sortBy = function (e, t) {
                    return It(Wt(this, t, e))
                }, Re.prototype.withMutations = function (e) {
                    var t = this.asMutable();
                    return e(t), t.wasAltered() ? t.__ensureOwner(this.__ownerID) : this
                }, Re.prototype.asMutable = function () {
                    return this.__ownerID ? this : this.__ensureOwner(new j)
                }, Re.prototype.asImmutable = function () {
                    return this.__ensureOwner()
                }, Re.prototype.wasAltered = function () {
                    return this.__altered
                }, Re.prototype.__iterator = function (e, t) {
                    return new Je(this, e, t)
                }, Re.prototype.__iterate = function (t, e) {
                    var r = this,
                        n = 0;
                    return this._root && this._root.iterate(function (e) {
                        return n++, t(e[1], e[0], r)
                    }, e), n
                }, Re.prototype.__ensureOwner = function (e) {
                    return e === this.__ownerID ? this : e ? Xe(this.size, this._root, e, this.__hash) : (this.__ownerID = e, this.__altered = !1, this)
                }, Re.isMap = Pe;
                var Ne, Fe = "@@__IMMUTABLE_MAP__@@",
                    Ke = Re.prototype;

                function He(e, t) {
                    this.ownerID = e, this.entries = t
                }

                function Ve(e, t, r) {
                    this.ownerID = e, this.bitmap = t, this.nodes = r
                }

                function We(e, t, r) {
                    this.ownerID = e, this.count = t, this.nodes = r
                }

                function Ge(e, t, r) {
                    this.ownerID = e, this.keyHash = t, this.entries = r
                }

                function Ze(e, t, r) {
                    this.ownerID = e, this.keyHash = t, this.entry = r
                }

                function Je(e, t, r) {
                    this._type = t, this._reverse = r, this._stack = e._root && Ye(e._root)
                }

                function $e(e, t) {
                    return P(e, t[0], t[1])
                }

                function Ye(e, t) {
                    return {
                        node: e,
                        index: 0,
                        __prev: t
                    }
                }

                function Xe(e, t, r, n) {
                    var i = Object.create(Ke);
                    return i.size = e, i._root = t, i.__ownerID = r, i.__hash = n, i.__altered = !1, i
                }

                function Qe() {
                    return Ne || (Ne = Xe(0))
                }

                function et(e, t, r) {
                    var n, i;
                    if (e._root) {
                        var s = x(b),
                            o = x(m);
                        if (n = tt(e._root, e.__ownerID, 0, void 0, t, r, s, o), !o.value) return e;
                        i = e.size + (s.value ? r === w ? -1 : 1 : 0)
                    } else {
                        if (r === w) return e;
                        i = 1, n = new He(e.__ownerID, [
                            [t, r]
                        ])
                    }
                    return e.__ownerID ? (e.size = i, e._root = n, e.__hash = void 0, e.__altered = !0, e) : n ? Xe(i, n) : Qe()
                }

                function tt(e, t, r, n, i, s, o, a) {
                    return e ? e.update(t, r, n, i, s, o, a) : s === w ? e : (k(a), k(o), new Ze(t, n, [i, s]))
                }

                function rt(e) {
                    return e.constructor === Ze || e.constructor === Ge
                }

                function nt(e, t, r, n, i) {
                    if (e.keyHash === n) return new Ge(t, n, [e.entry, i]);
                    var s, o = (0 === r ? e.keyHash : e.keyHash >>> r) & g,
                        a = (0 === r ? n : n >>> r) & g;
                    return new Ve(t, 1 << o | 1 << a, o === a ? [nt(e, t, r + v, n, i)] : (s = new Ze(t, n, i), o < a ? [e, s] : [s, e]))
                }

                function it(e, t, r) {
                    for (var n = [], i = 0; i < r.length; i++) {
                        var s = r[i],
                            o = a(s);
                        c(s) || (o = o.map(function (e) {
                            return le(e)
                        })), n.push(o)
                    }
                    return at(e, t, n)
                }

                function st(e, t, r) {
                    return e && e.mergeDeep && c(t) ? e.mergeDeep(t) : _e(e, t) ? e : t
                }

                function ot(i) {
                    return function (e, t, r) {
                        if (e && e.mergeDeepWith && c(t)) return e.mergeDeepWith(i, t);
                        var n = i(e, t, r);
                        return _e(e, n) ? e : n
                    }
                }

                function at(e, i, r) {
                    return 0 === (r = r.filter(function (e) {
                        return 0 !== e.size
                    })).length ? e : 0 !== e.size || e.__ownerID || 1 !== r.length ? e.withMutations(function (n) {
                        for (var e = i ? function (t, r) {
                                n.update(r, w, function (e) {
                                    return e === w ? t : i(e, t, r)
                                })
                            } : function (e, t) {
                                n.set(t, e)
                            }, t = 0; t < r.length; t++) r[t].forEach(e)
                    }) : e.constructor(r[0])
                }

                function ut(e) {
                    return e = (e = (858993459 & (e -= e >> 1 & 1431655765)) + (e >> 2 & 858993459)) + (e >> 4) & 252645135, e += e >> 8, 127 & (e += e >> 16)
                }

                function ft(e, t, r, n) {
                    var i = n ? e : E(e);
                    return i[t] = r, i
                }
                Ke[Fe] = !0, Ke[_] = Ke.remove, Ke.removeIn = Ke.deleteIn, He.prototype.get = function (e, t, r, n) {
                    for (var i = this.entries, s = 0, o = i.length; s < o; s++)
                        if (_e(r, i[s][0])) return i[s][1];
                    return n
                }, He.prototype.update = function (e, t, r, n, i, s, o) {
                    for (var a = i === w, u = this.entries, f = 0, c = u.length; f < c && !_e(n, u[f][0]); f++);
                    var h = f < c;
                    if (h ? u[f][1] === i : a) return this;
                    if (k(o), (a || !h) && k(s), !a || 1 !== u.length) {
                        if (!h && !a && u.length >= ct) return function (e, t, r, n) {
                            e || (e = new j);
                            for (var i = new Ze(e, ze(r), [r, n]), s = 0; s < t.length; s++) {
                                var o = t[s];
                                i = i.update(e, 0, void 0, o[0], o[1])
                            }
                            return i
                        }(e, u, n, i);
                        var l = e && e === this.ownerID,
                            d = l ? u : E(u);
                        return h ? a ? f === c - 1 ? d.pop() : d[f] = d.pop() : d[f] = [n, i] : d.push([n, i]), l ? (this.entries = d, this) : new He(e, d)
                    }
                }, Ve.prototype.get = function (e, t, r, n) {
                    void 0 === t && (t = ze(r));
                    var i = 1 << ((0 === e ? t : t >>> e) & g),
                        s = this.bitmap;
                    return 0 == (s & i) ? n : this.nodes[ut(s & i - 1)].get(e + v, t, r, n)
                }, Ve.prototype.update = function (e, t, r, n, i, s, o) {
                    void 0 === r && (r = ze(n));
                    var a = (0 === t ? r : r >>> t) & g,
                        u = 1 << a,
                        f = this.bitmap,
                        c = 0 != (f & u);
                    if (!c && i === w) return this;
                    var h = ut(f & u - 1),
                        l = this.nodes,
                        d = c ? l[h] : void 0,
                        p = tt(d, e, t + v, r, n, i, s, o);
                    if (p === d) return this;
                    if (!c && p && l.length >= ht) return function (e, t, r, n, i) {
                        for (var s = 0, o = new Array(y), a = 0; 0 !== r; a++, r >>>= 1) o[a] = 1 & r ? t[s++] : void 0;
                        return o[n] = i, new We(e, s + 1, o)
                    }(e, l, f, a, p);
                    if (c && !p && 2 === l.length && rt(l[1 ^ h])) return l[1 ^ h];
                    if (c && p && 1 === l.length && rt(p)) return p;
                    var _ = e && e === this.ownerID,
                        b = c ? p ? f : f ^ u : f | u,
                        m = c ? p ? ft(l, h, p, _) : function (e, t, r) {
                            var n = e.length - 1;
                            if (r && t === n) return e.pop(), e;
                            for (var i = new Array(n), s = 0, o = 0; o < n; o++) o === t && (s = 1), i[o] = e[o + s];
                            return i
                        }(l, h, _) : function (e, t, r, n) {
                            var i = e.length + 1;
                            if (n && t + 1 === i) return e[t] = r, e;
                            for (var s = new Array(i), o = 0, a = 0; a < i; a++) a === t ? (s[a] = r, o = -1) : s[a] = e[a + o];
                            return s
                        }(l, h, p, _);
                    return _ ? (this.bitmap = b, this.nodes = m, this) : new Ve(e, b, m)
                }, We.prototype.get = function (e, t, r, n) {
                    void 0 === t && (t = ze(r));
                    var i = (0 === e ? t : t >>> e) & g,
                        s = this.nodes[i];
                    return s ? s.get(e + v, t, r, n) : n
                }, We.prototype.update = function (e, t, r, n, i, s, o) {
                    void 0 === r && (r = ze(n));
                    var a = (0 === t ? r : r >>> t) & g,
                        u = i === w,
                        f = this.nodes,
                        c = f[a];
                    if (u && !c) return this;
                    var h = tt(c, e, t + v, r, n, i, s, o);
                    if (h === c) return this;
                    var l = this.count;
                    if (c) {
                        if (!h && --l < lt) return function (e, t, r, n) {
                            for (var i = 0, s = 0, o = new Array(r), a = 0, u = 1, f = t.length; a < f; a++, u <<= 1) {
                                var c = t[a];
                                void 0 !== c && a !== n && (i |= u, o[s++] = c)
                            }
                            return new Ve(e, i, o)
                        }(e, f, l, a)
                    } else l++;
                    var d = e && e === this.ownerID,
                        p = ft(f, a, h, d);
                    return d ? (this.count = l, this.nodes = p, this) : new We(e, l, p)
                }, Ge.prototype.get = function (e, t, r, n) {
                    for (var i = this.entries, s = 0, o = i.length; s < o; s++)
                        if (_e(r, i[s][0])) return i[s][1];
                    return n
                }, Ge.prototype.update = function (e, t, r, n, i, s, o) {
                    void 0 === r && (r = ze(n));
                    var a = i === w;
                    if (r !== this.keyHash) return a ? this : (k(o), k(s), nt(this, e, t, r, [n, i]));
                    for (var u = this.entries, f = 0, c = u.length; f < c && !_e(n, u[f][0]); f++);
                    var h = f < c;
                    if (h ? u[f][1] === i : a) return this;
                    if (k(o), (a || !h) && k(s), a && 2 === c) return new Ze(e, this.keyHash, u[1 ^ f]);
                    var l = e && e === this.ownerID,
                        d = l ? u : E(u);
                    return h ? a ? f === c - 1 ? d.pop() : d[f] = d.pop() : d[f] = [n, i] : d.push([n, i]), l ? (this.entries = d, this) : new Ge(e, this.keyHash, d)
                }, Ze.prototype.get = function (e, t, r, n) {
                    return _e(r, this.entry[0]) ? this.entry[1] : n
                }, Ze.prototype.update = function (e, t, r, n, i, s, o) {
                    var a = i === w,
                        u = _e(n, this.entry[0]);
                    return (u ? i === this.entry[1] : a) ? this : (k(o), a ? void k(s) : u ? e && e === this.ownerID ? (this.entry[1] = i, this) : new Ze(e, this.keyHash, [n, i]) : (k(s), nt(this, e, t, ze(n), [n, i])))
                }, He.prototype.iterate = Ge.prototype.iterate = function (e, t) {
                    for (var r = this.entries, n = 0, i = r.length - 1; n <= i; n++)
                        if (!1 === e(r[t ? i - n : n])) return !1
                }, Ve.prototype.iterate = We.prototype.iterate = function (e, t) {
                    for (var r = this.nodes, n = 0, i = r.length - 1; n <= i; n++) {
                        var s = r[t ? i - n : n];
                        if (s && !1 === s.iterate(e, t)) return !1
                    }
                }, Ze.prototype.iterate = function (e, t) {
                    return e(this.entry)
                }, e(Je, R), Je.prototype.next = function () {
                    for (var e = this._type, t = this._stack; t;) {
                        var r, n = t.node,
                            i = t.index++;
                        if (n.entry) {
                            if (0 === i) return $e(e, n.entry)
                        } else if (n.entries) {
                            if (i <= (r = n.entries.length - 1)) return $e(e, n.entries[this._reverse ? r - i : i])
                        } else if (i <= (r = n.nodes.length - 1)) {
                            var s = n.nodes[this._reverse ? r - i : i];
                            if (s) {
                                if (s.entry) return $e(e, s.entry);
                                t = this._stack = Ye(s, t)
                            }
                            continue
                        }
                        t = this._stack = this._stack.__prev
                    }
                    return {
                        value: void 0,
                        done: !0
                    }
                };
                var ct = y / 4,
                    ht = y / 2,
                    lt = y / 4;

                function dt(e) {
                    var t = kt();
                    if (null == e) return t;
                    if (pt(e)) return e;
                    var n = f(e),
                        i = n.size;
                    return 0 === i ? t : (Ue(i), 0 < i && i < y ? xt(0, i, v, null, new mt(n.toArray())) : t.withMutations(function (r) {
                        r.setSize(i), n.forEach(function (e, t) {
                            return r.set(t, e)
                        })
                    }))
                }

                function pt(e) {
                    return !(!e || !e[_t])
                }
                e(dt, xe), dt.of = function () {
                    return this(arguments)
                }, dt.prototype.toString = function () {
                    return this.__toString("List [", "]")
                }, dt.prototype.get = function (e, t) {
                    if (0 <= (e = S(this, e)) && e < this.size) {
                        var r = zt(this, e += this._origin);
                        return r && r.array[e & g]
                    }
                    return t
                }, dt.prototype.set = function (e, t) {
                    return function (e, t, r) {
                        if ((t = S(e, t)) != t) return e;
                        if (t >= e.size || t < 0) return e.withMutations(function (e) {
                            t < 0 ? St(e, t).set(0, r) : St(e, 0, t + 1).set(t, r)
                        });
                        t += e._origin;
                        var n = e._tail,
                            i = e._root,
                            s = x(m);
                        t >= Tt(e._capacity) ? n = jt(n, e.__ownerID, 0, t, r, s) : i = jt(i, e.__ownerID, e._level, t, r, s);
                        if (!s.value) return e;
                        if (e.__ownerID) return e._root = i, e._tail = n, e.__hash = void 0, e.__altered = !0, e;
                        return xt(e._origin, e._capacity, e._level, i, n)
                    }(this, e, t)
                }, dt.prototype.remove = function (e) {
                    return this.has(e) ? 0 === e ? this.shift() : e === this.size - 1 ? this.pop() : this.splice(e, 1) : this
                }, dt.prototype.insert = function (e, t) {
                    return this.splice(e, 0, t)
                }, dt.prototype.clear = function () {
                    return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = v, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : kt()
                }, dt.prototype.push = function () {
                    var r = arguments,
                        n = this.size;
                    return this.withMutations(function (e) {
                        St(e, 0, n + r.length);
                        for (var t = 0; t < r.length; t++) e.set(n + t, r[t])
                    })
                }, dt.prototype.pop = function () {
                    return St(this, 0, -1)
                }, dt.prototype.unshift = function () {
                    var r = arguments;
                    return this.withMutations(function (e) {
                        St(e, -r.length);
                        for (var t = 0; t < r.length; t++) e.set(t, r[t])
                    })
                }, dt.prototype.shift = function () {
                    return St(this, 1)
                }, dt.prototype.merge = function () {
                    return Bt(this, void 0, arguments)
                }, dt.prototype.mergeWith = function (e) {
                    return Bt(this, e, n.call(arguments, 1))
                }, dt.prototype.mergeDeep = function () {
                    return Bt(this, st, arguments)
                }, dt.prototype.mergeDeepWith = function (e) {
                    var t = n.call(arguments, 1);
                    return Bt(this, ot(e), t)
                }, dt.prototype.setSize = function (e) {
                    return St(this, 0, e)
                }, dt.prototype.slice = function (e, t) {
                    var r = this.size;
                    return T(e, t, r) ? this : St(this, I(e, r), A(t, r))
                }, dt.prototype.__iterator = function (t, e) {
                    var r = 0,
                        n = wt(this, e);
                    return new R(function () {
                        var e = n();
                        return e === gt ? {
                            value: void 0,
                            done: !0
                        } : P(t, r++, e)
                    })
                }, dt.prototype.__iterate = function (e, t) {
                    for (var r, n = 0, i = wt(this, t);
                        (r = i()) !== gt && !1 !== e(r, n++, this););
                    return n
                }, dt.prototype.__ensureOwner = function (e) {
                    return e === this.__ownerID ? this : e ? xt(this._origin, this._capacity, this._level, this._root, this._tail, e, this.__hash) : (this.__ownerID = e, this)
                }, dt.isList = pt;
                var _t = "@@__IMMUTABLE_LIST__@@",
                    bt = dt.prototype;

                function mt(e, t) {
                    this.array = e, this.ownerID = t
                }
                bt[_t] = !0, bt[_] = bt.remove, bt.setIn = Ke.setIn, bt.deleteIn = bt.removeIn = Ke.removeIn, bt.update = Ke.update, bt.updateIn = Ke.updateIn, bt.mergeIn = Ke.mergeIn, bt.mergeDeepIn = Ke.mergeDeepIn, bt.withMutations = Ke.withMutations, bt.asMutable = Ke.asMutable, bt.asImmutable = Ke.asImmutable, bt.wasAltered = Ke.wasAltered, mt.prototype.removeBefore = function (e, t, r) {
                    if (r === t ? 1 << t : 0 === this.array.length) return this;
                    var n = r >>> t & g;
                    if (n >= this.array.length) return new mt([], e);
                    var i, s = 0 === n;
                    if (0 < t) {
                        var o = this.array[n];
                        if ((i = o && o.removeBefore(e, t - v, r)) === o && s) return this
                    }
                    if (s && !i) return this;
                    var a = Et(this, e);
                    if (!s)
                        for (var u = 0; u < n; u++) a.array[u] = void 0;
                    return i && (a.array[n] = i), a
                }, mt.prototype.removeAfter = function (e, t, r) {
                    if (r === (t ? 1 << t : 0) || 0 === this.array.length) return this;
                    var n, i = r - 1 >>> t & g;
                    if (i >= this.array.length) return this;
                    if (0 < t) {
                        var s = this.array[i];
                        if ((n = s && s.removeAfter(e, t - v, r)) === s && i === this.array.length - 1) return this
                    }
                    var o = Et(this, e);
                    return o.array.splice(i + 1), n && (o.array[i] = n), o
                };
                var yt, vt, gt = {};

                function wt(e, u) {
                    var f = e._origin,
                        c = e._capacity,
                        s = Tt(c),
                        o = e._tail;
                    return h(e._root, e._level, 0);

                    function h(e, t, r) {
                        return 0 === t ? function (e, t) {
                            var r = t === s ? o && o.array : e && e.array,
                                n = f < t ? 0 : f - t,
                                i = c - t;
                            y < i && (i = y);
                            return function () {
                                if (n === i) return gt;
                                var e = u ? --i : n++;
                                return r && r[e]
                            }
                        }(e, r) : function (e, r, n) {
                            var i, s = e && e.array,
                                o = f < n ? 0 : f - n >> r,
                                a = 1 + (c - n >> r);
                            y < a && (a = y);
                            return function () {
                                for (;;) {
                                    if (i) {
                                        var e = i();
                                        if (e !== gt) return e;
                                        i = null
                                    }
                                    if (o === a) return gt;
                                    var t = u ? --a : o++;
                                    i = h(s && s[t], r - v, n + (t << r))
                                }
                            }
                        }(e, t, r)
                    }
                }

                function xt(e, t, r, n, i, s, o) {
                    var a = Object.create(bt);
                    return a.size = t - e, a._origin = e, a._capacity = t, a._level = r, a._root = n, a._tail = i, a.__ownerID = s, a.__hash = o, a.__altered = !1, a
                }

                function kt() {
                    return yt || (yt = xt(0, 0, v))
                }

                function jt(e, t, r, n, i, s) {
                    var o, a = n >>> r & g,
                        u = e && a < e.array.length;
                    if (!u && void 0 === i) return e;
                    if (0 < r) {
                        var f = e && e.array[a],
                            c = jt(f, t, r - v, n, i, s);
                        return c === f ? e : ((o = Et(e, t)).array[a] = c, o)
                    }
                    return u && e.array[a] === i ? e : (k(s), o = Et(e, t), void 0 === i && a === o.array.length - 1 ? o.array.pop() : o.array[a] = i, o)
                }

                function Et(e, t) {
                    return t && e && t === e.ownerID ? e : new mt(e ? e.array.slice() : [], t)
                }

                function zt(e, t) {
                    if (t >= Tt(e._capacity)) return e._tail;
                    if (t < 1 << e._level + v) {
                        for (var r = e._root, n = e._level; r && 0 < n;) r = r.array[t >>> n & g], n -= v;
                        return r
                    }
                }

                function St(e, t, r) {
                    void 0 !== t && (t |= 0), void 0 !== r && (r |= 0);
                    var n = e.__ownerID || new j,
                        i = e._origin,
                        s = e._capacity,
                        o = i + t,
                        a = void 0 === r ? s : r < 0 ? s + r : i + r;
                    if (o === i && a === s) return e;
                    if (a <= o) return e.clear();
                    for (var u = e._level, f = e._root, c = 0; o + c < 0;) f = new mt(f && f.array.length ? [void 0, f] : [], n), c += 1 << (u += v);
                    c && (o += c, i += c, a += c, s += c);
                    for (var h = Tt(s), l = Tt(a); 1 << u + v <= l;) f = new mt(f && f.array.length ? [f] : [], n), u += v;
                    var d = e._tail,
                        p = l < h ? zt(e, a - 1) : h < l ? new mt([], n) : d;
                    if (d && h < l && o < s && d.array.length) {
                        for (var _ = f = Et(f, n), b = u; v < b; b -= v) {
                            var m = h >>> b & g;
                            _ = _.array[m] = Et(_.array[m], n)
                        }
                        _.array[h >>> v & g] = d
                    }
                    if (a < s && (p = p && p.removeAfter(n, 0, a)), l <= o) o -= l, a -= l, u = v, f = null, p = p && p.removeBefore(n, 0, o);
                    else if (i < o || l < h) {
                        for (c = 0; f;) {
                            var y = o >>> u & g;
                            if (y !== l >>> u & g) break;
                            y && (c += (1 << u) * y), u -= v, f = f.array[y]
                        }
                        f && i < o && (f = f.removeBefore(n, u, o - c)), f && l < h && (f = f.removeAfter(n, u, l - c)), c && (o -= c, a -= c)
                    }
                    return e.__ownerID ? (e.size = a - o, e._origin = o, e._capacity = a, e._level = u, e._root = f, e._tail = p, e.__hash = void 0, e.__altered = !0, e) : xt(o, a, u, f, p)
                }

                function Bt(e, t, r) {
                    for (var n = [], i = 0, s = 0; s < r.length; s++) {
                        var o = r[s],
                            a = f(o);
                        a.size > i && (i = a.size), c(o) || (a = a.map(function (e) {
                            return le(e)
                        })), n.push(a)
                    }
                    return i > e.size && (e = e.setSize(i)), at(e, t, n)
                }

                function Tt(e) {
                    return e < y ? 0 : e - 1 >>> v << v
                }

                function It(t) {
                    return null == t ? Ct() : At(t) ? t : Ct().withMutations(function (r) {
                        var e = a(t);
                        Ue(e.size), e.forEach(function (e, t) {
                            return r.set(t, e)
                        })
                    })
                }

                function At(e) {
                    return Pe(e) && p(e)
                }

                function Ot(e, t, r, n) {
                    var i = Object.create(It.prototype);
                    return i.size = e ? e.size : 0, i._map = e, i._list = t, i.__ownerID = r, i.__hash = n, i
                }

                function Ct() {
                    return vt || (vt = Ot(Qe(), kt()))
                }

                function Mt(e, t, r) {
                    var n, i, s = e._map,
                        o = e._list,
                        a = s.get(t),
                        u = void 0 !== a;
                    if (r === w) {
                        if (!u) return e;
                        o.size >= y && o.size >= 2 * s.size ? (n = (i = o.filter(function (e, t) {
                            return void 0 !== e && a !== t
                        })).toKeyedSeq().map(function (e) {
                            return e[0]
                        }).flip().toMap(), e.__ownerID && (n.__ownerID = i.__ownerID = e.__ownerID)) : (n = s.remove(t), i = a === o.size - 1 ? o.pop() : o.set(a, void 0))
                    } else if (u) {
                        if (r === o.get(a)[1]) return e;
                        n = s, i = o.set(a, [t, r])
                    } else n = s.set(t, o.size), i = o.set(o.size, [t, r]);
                    return e.__ownerID ? (e.size = n.size, e._map = n, e._list = i, e.__hash = void 0, e) : Ot(n, i)
                }

                function Lt(e, t) {
                    this._iter = e, this._useKeys = t, this.size = e.size
                }

                function qt(e) {
                    this._iter = e, this.size = e.size
                }

                function Dt(e) {
                    this._iter = e, this.size = e.size
                }

                function Ut(e) {
                    this._iter = e, this.size = e.size
                }

                function Rt(i) {
                    var e = er(i);
                    return e._iter = i, e.size = i.size, e.flip = function () {
                        return i
                    }, e.reverse = function () {
                        var e = i.reverse.apply(this);
                        return e.flip = function () {
                            return i.reverse()
                        }, e
                    }, e.has = function (e) {
                        return i.includes(e)
                    }, e.includes = function (e) {
                        return i.has(e)
                    }, e.cacheResult = tr, e.__iterateUncached = function (r, e) {
                        var n = this;
                        return i.__iterate(function (e, t) {
                            return !1 !== r(t, e, n)
                        }, e)
                    }, e.__iteratorUncached = function (e, t) {
                        if (e !== L) return i.__iterator(e === M ? C : M, t);
                        var r = i.__iterator(e, t);
                        return new R(function () {
                            var e = r.next();
                            if (!e.done) {
                                var t = e.value[0];
                                e.value[0] = e.value[1], e.value[1] = t
                            }
                            return e
                        })
                    }, e
                }

                function Pt(s, o, a) {
                    var e = er(s);
                    return e.size = s.size, e.has = function (e) {
                        return s.has(e)
                    }, e.get = function (e, t) {
                        var r = s.get(e, w);
                        return r === w ? t : o.call(a, r, e, s)
                    }, e.__iterateUncached = function (n, e) {
                        var i = this;
                        return s.__iterate(function (e, t, r) {
                            return !1 !== n(o.call(a, e, t, r), t, i)
                        }, e)
                    }, e.__iteratorUncached = function (n, e) {
                        var i = s.__iterator(L, e);
                        return new R(function () {
                            var e = i.next();
                            if (e.done) return e;
                            var t = e.value,
                                r = t[0];
                            return P(n, r, o.call(a, t[1], r, s), e)
                        })
                    }, e
                }

                function Nt(i, r) {
                    var e = er(i);
                    return e._iter = i, e.size = i.size, e.reverse = function () {
                        return i
                    }, i.flip && (e.flip = function () {
                        var e = Rt(i);
                        return e.reverse = function () {
                            return i.flip()
                        }, e
                    }), e.get = function (e, t) {
                        return i.get(r ? e : -1 - e, t)
                    }, e.has = function (e) {
                        return i.has(r ? e : -1 - e)
                    }, e.includes = function (e) {
                        return i.includes(e)
                    }, e.cacheResult = tr, e.__iterate = function (r, e) {
                        var n = this;
                        return i.__iterate(function (e, t) {
                            return r(e, t, n)
                        }, !e)
                    }, e.__iterator = function (e, t) {
                        return i.__iterator(e, !t)
                    }, e
                }

                function Ft(a, u, f, c) {
                    var e = er(a);
                    return c && (e.has = function (e) {
                        var t = a.get(e, w);
                        return t !== w && !!u.call(f, t, e, a)
                    }, e.get = function (e, t) {
                        var r = a.get(e, w);
                        return r !== w && u.call(f, r, e, a) ? r : t
                    }), e.__iterateUncached = function (n, e) {
                        var i = this,
                            s = 0;
                        return a.__iterate(function (e, t, r) {
                            if (u.call(f, e, t, r)) return s++, n(e, c ? t : s - 1, i)
                        }, e), s
                    }, e.__iteratorUncached = function (i, e) {
                        var s = a.__iterator(L, e),
                            o = 0;
                        return new R(function () {
                            for (;;) {
                                var e = s.next();
                                if (e.done) return e;
                                var t = e.value,
                                    r = t[0],
                                    n = t[1];
                                if (u.call(f, n, r, a)) return P(i, c ? r : o++, n, e)
                            }
                        })
                    }, e
                }

                function Kt(a, e, t, u) {
                    var r = a.size;
                    if (void 0 !== e && (e |= 0), void 0 !== t && (t === 1 / 0 ? t = r : t |= 0), T(e, t, r)) return a;
                    var f = I(e, r),
                        n = A(t, r);
                    if (f != f || n != n) return Kt(a.toSeq().cacheResult(), e, t, u);
                    var c, i = n - f;
                    i == i && (c = i < 0 ? 0 : i);
                    var s = er(a);
                    return s.size = 0 === c ? c : a.size && c || void 0, !u && se(a) && 0 <= c && (s.get = function (e, t) {
                        return 0 <= (e = S(this, e)) && e < c ? a.get(e + f, t) : t
                    }), s.__iterateUncached = function (r, e) {
                        var n = this;
                        if (0 === c) return 0;
                        if (e) return this.cacheResult().__iterate(r, e);
                        var i = 0,
                            s = !0,
                            o = 0;
                        return a.__iterate(function (e, t) {
                            if (!s || !(s = i++ < f)) return o++, !1 !== r(e, u ? t : o - 1, n) && o !== c
                        }), o
                    }, s.__iteratorUncached = function (t, e) {
                        if (0 !== c && e) return this.cacheResult().__iterator(t, e);
                        var r = 0 !== c && a.__iterator(t, e),
                            n = 0,
                            i = 0;
                        return new R(function () {
                            for (; n++ < f;) r.next();
                            if (++i > c) return {
                                value: void 0,
                                done: !0
                            };
                            var e = r.next();
                            return u || t === M ? e : P(t, i - 1, t === C ? void 0 : e.value[1], e)
                        })
                    }, s
                }

                function Ht(t, f, c, h) {
                    var e = er(t);
                    return e.__iterateUncached = function (n, e) {
                        var i = this;
                        if (e) return this.cacheResult().__iterate(n, e);
                        var s = !0,
                            o = 0;
                        return t.__iterate(function (e, t, r) {
                            if (!s || !(s = f.call(c, e, t, r))) return o++, n(e, h ? t : o - 1, i)
                        }), o
                    }, e.__iteratorUncached = function (i, e) {
                        var s = this;
                        if (e) return this.cacheResult().__iterator(i, e);
                        var o = t.__iterator(L, e),
                            a = !0,
                            u = 0;
                        return new R(function () {
                            var e, t, r;
                            do {
                                if ((e = o.next()).done) return h || i === M ? e : P(i, u++, i === C ? void 0 : e.value[1], e);
                                var n = e.value;
                                t = n[0], r = n[1], a && (a = f.call(c, r, t, s))
                            } while (a);
                            return i === L ? e : P(i, t, r, e)
                        })
                    }, e
                }

                function Vt(e, u, f) {
                    var t = er(e);
                    return t.__iterateUncached = function (s, t) {
                        var o = 0,
                            a = !1;
                        return function r(e, n) {
                            var i = this;
                            e.__iterate(function (e, t) {
                                return (!u || n < u) && c(e) ? r(e, n + 1) : !1 === s(e, f ? t : o++, i) && (a = !0), !a
                            }, t)
                        }(e, 0), o
                    }, t.__iteratorUncached = function (r, n) {
                        var i = e.__iterator(r, n),
                            s = [],
                            o = 0;
                        return new R(function () {
                            for (; i;) {
                                var e = i.next();
                                if (!1 === e.done) {
                                    var t = e.value;
                                    if (r === L && (t = t[1]), u && !(s.length < u) || !c(t)) return f ? e : P(r, o++, t, e);
                                    s.push(i), i = t.__iterator(r, n)
                                } else i = s.pop()
                            }
                            return {
                                value: void 0,
                                done: !0
                            }
                        })
                    }, t
                }

                function Wt(r, n, i) {
                    n || (n = rr);
                    var e = h(r),
                        s = 0,
                        o = r.toSeq().map(function (e, t) {
                            return [t, e, s++, i ? i(e, t, r) : e]
                        }).toArray();
                    return o.sort(function (e, t) {
                        return n(e[3], t[3]) || e[2] - t[2]
                    }).forEach(e ? function (e, t) {
                        o[t].length = 2
                    } : function (e, t) {
                        o[t] = e[1]
                    }), e ? Z(o) : l(r) ? J(o) : $(o)
                }

                function Gt(r, n, i) {
                    if (n || (n = rr), i) {
                        var e = r.toSeq().map(function (e, t) {
                            return [e, i(e, t, r)]
                        }).reduce(function (e, t) {
                            return Zt(n, e[1], t[1]) ? t : e
                        });
                        return e && e[0]
                    }
                    return r.reduce(function (e, t) {
                        return Zt(n, e, t) ? t : e
                    })
                }

                function Zt(e, t, r) {
                    var n = e(r, t);
                    return 0 === n && r !== t && (null == r || r != r) || 0 < n
                }

                function Jt(e, o, a) {
                    var t = er(e);
                    return t.size = new te(a).map(function (e) {
                        return e.size
                    }).min(), t.__iterate = function (e, t) {
                        for (var r, n = this.__iterator(M, t), i = 0; !(r = n.next()).done && !1 !== e(r.value, i++, this););
                        return i
                    }, t.__iteratorUncached = function (t, r) {
                        var n = a.map(function (e) {
                                return e = u(e), H(r ? e.reverse() : e)
                            }),
                            i = 0,
                            s = !1;
                        return new R(function () {
                            var e;
                            return s || (e = n.map(function (e) {
                                return e.next()
                            }), s = e.some(function (e) {
                                return e.done
                            })), s ? {
                                value: void 0,
                                done: !0
                            } : P(t, i++, o.apply(null, e.map(function (e) {
                                return e.value
                            })))
                        })
                    }, t
                }

                function $t(e, t) {
                    return se(e) ? t : e.constructor(t)
                }

                function Yt(e) {
                    if (e !== Object(e)) throw new TypeError("Expected [K, V] tuple: " + e)
                }

                function Xt(e) {
                    return Ue(e.size), z(e)
                }

                function Qt(e) {
                    return h(e) ? a : l(e) ? f : i
                }

                function er(e) {
                    return Object.create((h(e) ? Z : l(e) ? J : $).prototype)
                }

                function tr() {
                    return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : G.prototype.cacheResult.call(this)
                }

                function rr(e, t) {
                    return t < e ? 1 : e < t ? -1 : 0
                }

                function nr(e) {
                    var t = H(e);
                    if (!t) {
                        if (!W(e)) throw new TypeError("Expected iterable or array-like: " + e);
                        t = H(u(e))
                    }
                    return t
                }

                function ir(r, n) {
                    var i, s = function (e) {
                            if (e instanceof s) return e;
                            if (!(this instanceof s)) return new s(e);
                            if (!i) {
                                i = !0;
                                var t = Object.keys(r);
                                ! function (e, t) {
                                    try {
                                        t.forEach(function (e, t) {
                                            Object.defineProperty(e, t, {
                                                get: function () {
                                                    return this.get(t)
                                                },
                                                set: function (e) {
                                                    ye(this.__ownerID, "Cannot set on an immutable record."), this.set(t, e)
                                                }
                                            })
                                        }.bind(void 0, e))
                                    } catch (e) {}
                                }(o, t), o.size = t.length, o._name = n, o._keys = t, o._defaultValues = r
                            }
                            this._map = Re(e)
                        },
                        o = s.prototype = Object.create(sr);
                    return o.constructor = s
                }
                e(It, Re), It.of = function () {
                    return this(arguments)
                }, It.prototype.toString = function () {
                    return this.__toString("OrderedMap {", "}")
                }, It.prototype.get = function (e, t) {
                    var r = this._map.get(e);
                    return void 0 !== r ? this._list.get(r)[1] : t
                }, It.prototype.clear = function () {
                    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : Ct()
                }, It.prototype.set = function (e, t) {
                    return Mt(this, e, t)
                }, It.prototype.remove = function (e) {
                    return Mt(this, e, w)
                }, It.prototype.wasAltered = function () {
                    return this._map.wasAltered() || this._list.wasAltered()
                }, It.prototype.__iterate = function (t, e) {
                    var r = this;
                    return this._list.__iterate(function (e) {
                        return e && t(e[1], e[0], r)
                    }, e)
                }, It.prototype.__iterator = function (e, t) {
                    return this._list.fromEntrySeq().__iterator(e, t)
                }, It.prototype.__ensureOwner = function (e) {
                    if (e === this.__ownerID) return this;
                    var t = this._map.__ensureOwner(e),
                        r = this._list.__ensureOwner(e);
                    return e ? Ot(t, r, e, this.__hash) : (this.__ownerID = e, this._map = t, this._list = r, this)
                }, It.isOrderedMap = At, It.prototype[o] = !0, It.prototype[_] = It.prototype.remove, e(Lt, Z), Lt.prototype.get = function (e, t) {
                    return this._iter.get(e, t)
                }, Lt.prototype.has = function (e) {
                    return this._iter.has(e)
                }, Lt.prototype.valueSeq = function () {
                    return this._iter.valueSeq()
                }, Lt.prototype.reverse = function () {
                    var e = this,
                        t = Nt(this, !0);
                    return this._useKeys || (t.valueSeq = function () {
                        return e._iter.toSeq().reverse()
                    }), t
                }, Lt.prototype.map = function (e, t) {
                    var r = this,
                        n = Pt(this, e, t);
                    return this._useKeys || (n.valueSeq = function () {
                        return r._iter.toSeq().map(e, t)
                    }), n
                }, Lt.prototype.__iterate = function (r, t) {
                    var n, i = this;
                    return this._iter.__iterate(this._useKeys ? function (e, t) {
                        return r(e, t, i)
                    } : (n = t ? Xt(this) : 0, function (e) {
                        return r(e, t ? --n : n++, i)
                    }), t)
                }, Lt.prototype.__iterator = function (t, r) {
                    if (this._useKeys) return this._iter.__iterator(t, r);
                    var n = this._iter.__iterator(M, r),
                        i = r ? Xt(this) : 0;
                    return new R(function () {
                        var e = n.next();
                        return e.done ? e : P(t, r ? --i : i++, e.value, e)
                    })
                }, Lt.prototype[o] = !0, e(qt, J), qt.prototype.includes = function (e) {
                    return this._iter.includes(e)
                }, qt.prototype.__iterate = function (t, e) {
                    var r = this,
                        n = 0;
                    return this._iter.__iterate(function (e) {
                        return t(e, n++, r)
                    }, e)
                }, qt.prototype.__iterator = function (t, e) {
                    var r = this._iter.__iterator(M, e),
                        n = 0;
                    return new R(function () {
                        var e = r.next();
                        return e.done ? e : P(t, n++, e.value, e)
                    })
                }, e(Dt, $), Dt.prototype.has = function (e) {
                    return this._iter.includes(e)
                }, Dt.prototype.__iterate = function (t, e) {
                    var r = this;
                    return this._iter.__iterate(function (e) {
                        return t(e, e, r)
                    }, e)
                }, Dt.prototype.__iterator = function (t, e) {
                    var r = this._iter.__iterator(M, e);
                    return new R(function () {
                        var e = r.next();
                        return e.done ? e : P(t, e.value, e.value, e)
                    })
                }, e(Ut, Z), Ut.prototype.entrySeq = function () {
                    return this._iter.toSeq()
                }, Ut.prototype.__iterate = function (r, e) {
                    var n = this;
                    return this._iter.__iterate(function (e) {
                        if (e) {
                            Yt(e);
                            var t = c(e);
                            return r(t ? e.get(1) : e[1], t ? e.get(0) : e[0], n)
                        }
                    }, e)
                }, Ut.prototype.__iterator = function (n, e) {
                    var i = this._iter.__iterator(M, e);
                    return new R(function () {
                        for (;;) {
                            var e = i.next();
                            if (e.done) return e;
                            var t = e.value;
                            if (t) {
                                Yt(t);
                                var r = c(t);
                                return P(n, r ? t.get(0) : t[0], r ? t.get(1) : t[1], e)
                            }
                        }
                    })
                }, qt.prototype.cacheResult = Lt.prototype.cacheResult = Dt.prototype.cacheResult = Ut.prototype.cacheResult = tr, e(ir, we), ir.prototype.toString = function () {
                    return this.__toString(ar(this) + " {", "}")
                }, ir.prototype.has = function (e) {
                    return this._defaultValues.hasOwnProperty(e)
                }, ir.prototype.get = function (e, t) {
                    if (!this.has(e)) return t;
                    var r = this._defaultValues[e];
                    return this._map ? this._map.get(e, r) : r
                }, ir.prototype.clear = function () {
                    if (this.__ownerID) return this._map && this._map.clear(), this;
                    var e = this.constructor;
                    return e._empty || (e._empty = or(this, Qe()))
                }, ir.prototype.set = function (e, t) {
                    if (!this.has(e)) throw new Error('Cannot set unknown key "' + e + '" on ' + ar(this));
                    if (this._map && !this._map.has(e) && t === this._defaultValues[e]) return this;
                    var r = this._map && this._map.set(e, t);
                    return this.__ownerID || r === this._map ? this : or(this, r)
                }, ir.prototype.remove = function (e) {
                    if (!this.has(e)) return this;
                    var t = this._map && this._map.remove(e);
                    return this.__ownerID || t === this._map ? this : or(this, t)
                }, ir.prototype.wasAltered = function () {
                    return this._map.wasAltered()
                }, ir.prototype.__iterator = function (e, t) {
                    var r = this;
                    return a(this._defaultValues).map(function (e, t) {
                        return r.get(t)
                    }).__iterator(e, t)
                }, ir.prototype.__iterate = function (e, t) {
                    var r = this;
                    return a(this._defaultValues).map(function (e, t) {
                        return r.get(t)
                    }).__iterate(e, t)
                }, ir.prototype.__ensureOwner = function (e) {
                    if (e === this.__ownerID) return this;
                    var t = this._map && this._map.__ensureOwner(e);
                    return e ? or(this, t, e) : (this.__ownerID = e, this._map = t, this)
                };
                var sr = ir.prototype;

                function or(e, t, r) {
                    var n = Object.create(Object.getPrototypeOf(e));
                    return n._map = t, n.__ownerID = r, n
                }

                function ar(e) {
                    return e._name || e.constructor.name || "Record"
                }

                function ur(r) {
                    return null == r ? _r() : fr(r) && !p(r) ? r : _r().withMutations(function (t) {
                        var e = i(r);
                        Ue(e.size), e.forEach(function (e) {
                            return t.add(e)
                        })
                    })
                }

                function fr(e) {
                    return !(!e || !e[hr])
                }
                sr[_] = sr.remove, sr.deleteIn = sr.removeIn = Ke.removeIn, sr.merge = Ke.merge, sr.mergeWith = Ke.mergeWith, sr.mergeIn = Ke.mergeIn, sr.mergeDeep = Ke.mergeDeep, sr.mergeDeepWith = Ke.mergeDeepWith, sr.mergeDeepIn = Ke.mergeDeepIn, sr.setIn = Ke.setIn, sr.update = Ke.update, sr.updateIn = Ke.updateIn, sr.withMutations = Ke.withMutations, sr.asMutable = Ke.asMutable, sr.asImmutable = Ke.asImmutable, e(ur, ke), ur.of = function () {
                    return this(arguments)
                }, ur.fromKeys = function (e) {
                    return this(a(e).keySeq())
                }, ur.prototype.toString = function () {
                    return this.__toString("Set {", "}")
                }, ur.prototype.has = function (e) {
                    return this._map.has(e)
                }, ur.prototype.add = function (e) {
                    return dr(this, this._map.set(e, !0))
                }, ur.prototype.remove = function (e) {
                    return dr(this, this._map.remove(e))
                }, ur.prototype.clear = function () {
                    return dr(this, this._map.clear())
                }, ur.prototype.union = function () {
                    var r = n.call(arguments, 0);
                    return 0 === (r = r.filter(function (e) {
                        return 0 !== e.size
                    })).length ? this : 0 !== this.size || this.__ownerID || 1 !== r.length ? this.withMutations(function (t) {
                        for (var e = 0; e < r.length; e++) i(r[e]).forEach(function (e) {
                            return t.add(e)
                        })
                    }) : this.constructor(r[0])
                }, ur.prototype.intersect = function () {
                    var r = n.call(arguments, 0);
                    if (0 === r.length) return this;
                    r = r.map(function (e) {
                        return i(e)
                    });
                    var t = this;
                    return this.withMutations(function (e) {
                        t.forEach(function (t) {
                            r.every(function (e) {
                                return e.includes(t)
                            }) || e.remove(t)
                        })
                    })
                }, ur.prototype.subtract = function () {
                    var r = n.call(arguments, 0);
                    if (0 === r.length) return this;
                    r = r.map(function (e) {
                        return i(e)
                    });
                    var t = this;
                    return this.withMutations(function (e) {
                        t.forEach(function (t) {
                            r.some(function (e) {
                                return e.includes(t)
                            }) && e.remove(t)
                        })
                    })
                }, ur.prototype.merge = function () {
                    return this.union.apply(this, arguments)
                }, ur.prototype.mergeWith = function (e) {
                    var t = n.call(arguments, 1);
                    return this.union.apply(this, t)
                }, ur.prototype.sort = function (e) {
                    return br(Wt(this, e))
                }, ur.prototype.sortBy = function (e, t) {
                    return br(Wt(this, t, e))
                }, ur.prototype.wasAltered = function () {
                    return this._map.wasAltered()
                }, ur.prototype.__iterate = function (r, e) {
                    var n = this;
                    return this._map.__iterate(function (e, t) {
                        return r(t, t, n)
                    }, e)
                }, ur.prototype.__iterator = function (e, t) {
                    return this._map.map(function (e, t) {
                        return t
                    }).__iterator(e, t)
                }, ur.prototype.__ensureOwner = function (e) {
                    if (e === this.__ownerID) return this;
                    var t = this._map.__ensureOwner(e);
                    return e ? this.__make(t, e) : (this.__ownerID = e, this._map = t, this)
                }, ur.isSet = fr;
                var cr, hr = "@@__IMMUTABLE_SET__@@",
                    lr = ur.prototype;

                function dr(e, t) {
                    return e.__ownerID ? (e.size = t.size, e._map = t, e) : t === e._map ? e : 0 === t.size ? e.__empty() : e.__make(t)
                }

                function pr(e, t) {
                    var r = Object.create(lr);
                    return r.size = e ? e.size : 0, r._map = e, r.__ownerID = t, r
                }

                function _r() {
                    return cr || (cr = pr(Qe()))
                }

                function br(r) {
                    return null == r ? wr() : mr(r) ? r : wr().withMutations(function (t) {
                        var e = i(r);
                        Ue(e.size), e.forEach(function (e) {
                            return t.add(e)
                        })
                    })
                }

                function mr(e) {
                    return fr(e) && p(e)
                }
                lr[hr] = !0, lr[_] = lr.remove, lr.mergeDeep = lr.merge, lr.mergeDeepWith = lr.mergeWith, lr.withMutations = Ke.withMutations, lr.asMutable = Ke.asMutable, lr.asImmutable = Ke.asImmutable, lr.__empty = _r, lr.__make = pr, e(br, ur), br.of = function () {
                    return this(arguments)
                }, br.fromKeys = function (e) {
                    return this(a(e).keySeq())
                }, br.prototype.toString = function () {
                    return this.__toString("OrderedSet {", "}")
                }, br.isOrderedSet = mr;
                var yr, vr = br.prototype;

                function gr(e, t) {
                    var r = Object.create(vr);
                    return r.size = e ? e.size : 0, r._map = e, r.__ownerID = t, r
                }

                function wr() {
                    return yr || (yr = gr(Ct()))
                }

                function xr(e) {
                    return null == e ? Br() : kr(e) ? e : Br().unshiftAll(e)
                }

                function kr(e) {
                    return !(!e || !e[Er])
                }
                vr[o] = !0, vr.__empty = wr, vr.__make = gr, e(xr, xe), xr.of = function () {
                    return this(arguments)
                }, xr.prototype.toString = function () {
                    return this.__toString("Stack [", "]")
                }, xr.prototype.get = function (e, t) {
                    var r = this._head;
                    for (e = S(this, e); r && e--;) r = r.next;
                    return r ? r.value : t
                }, xr.prototype.peek = function () {
                    return this._head && this._head.value
                }, xr.prototype.push = function () {
                    if (0 === arguments.length) return this;
                    for (var e = this.size + arguments.length, t = this._head, r = arguments.length - 1; 0 <= r; r--) t = {
                        value: arguments[r],
                        next: t
                    };
                    return this.__ownerID ? (this.size = e, this._head = t, this.__hash = void 0, this.__altered = !0, this) : Sr(e, t)
                }, xr.prototype.pushAll = function (e) {
                    if (0 === (e = f(e)).size) return this;
                    Ue(e.size);
                    var t = this.size,
                        r = this._head;
                    return e.reverse().forEach(function (e) {
                        t++, r = {
                            value: e,
                            next: r
                        }
                    }), this.__ownerID ? (this.size = t, this._head = r, this.__hash = void 0, this.__altered = !0, this) : Sr(t, r)
                }, xr.prototype.pop = function () {
                    return this.slice(1)
                }, xr.prototype.unshift = function () {
                    return this.push.apply(this, arguments)
                }, xr.prototype.unshiftAll = function (e) {
                    return this.pushAll(e)
                }, xr.prototype.shift = function () {
                    return this.pop.apply(this, arguments)
                }, xr.prototype.clear = function () {
                    return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : Br()
                }, xr.prototype.slice = function (e, t) {
                    if (T(e, t, this.size)) return this;
                    var r = I(e, this.size);
                    if (A(t, this.size) !== this.size) return xe.prototype.slice.call(this, e, t);
                    for (var n = this.size - r, i = this._head; r--;) i = i.next;
                    return this.__ownerID ? (this.size = n, this._head = i, this.__hash = void 0, this.__altered = !0, this) : Sr(n, i)
                }, xr.prototype.__ensureOwner = function (e) {
                    return e === this.__ownerID ? this : e ? Sr(this.size, this._head, e, this.__hash) : (this.__ownerID = e, this.__altered = !1, this)
                }, xr.prototype.__iterate = function (e, t) {
                    if (t) return this.reverse().__iterate(e);
                    for (var r = 0, n = this._head; n && !1 !== e(n.value, r++, this);) n = n.next;
                    return r
                }, xr.prototype.__iterator = function (t, e) {
                    if (e) return this.reverse().__iterator(t);
                    var r = 0,
                        n = this._head;
                    return new R(function () {
                        if (n) {
                            var e = n.value;
                            return n = n.next, P(t, r++, e)
                        }
                        return {
                            value: void 0,
                            done: !0
                        }
                    })
                }, xr.isStack = kr;
                var jr, Er = "@@__IMMUTABLE_STACK__@@",
                    zr = xr.prototype;

                function Sr(e, t, r, n) {
                    var i = Object.create(zr);
                    return i.size = e, i._head = t, i.__ownerID = r, i.__hash = n, i.__altered = !1, i
                }

                function Br() {
                    return jr || (jr = Sr(0))
                }

                function Tr(t, r) {
                    var e = function (e) {
                        t.prototype[e] = r[e]
                    };
                    return Object.keys(r).forEach(e), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(r).forEach(e), t
                }
                zr[Er] = !0, zr.withMutations = Ke.withMutations, zr.asMutable = Ke.asMutable, zr.asImmutable = Ke.asImmutable, zr.wasAltered = Ke.wasAltered, u.Iterator = R, Tr(u, {
                    toArray: function () {
                        Ue(this.size);
                        var r = new Array(this.size || 0);
                        return this.valueSeq().__iterate(function (e, t) {
                            r[t] = e
                        }), r
                    },
                    toIndexedSeq: function () {
                        return new qt(this)
                    },
                    toJS: function () {
                        return this.toSeq().map(function (e) {
                            return e && "function" == typeof e.toJS ? e.toJS() : e
                        }).__toJS()
                    },
                    toJSON: function () {
                        return this.toSeq().map(function (e) {
                            return e && "function" == typeof e.toJSON ? e.toJSON() : e
                        }).__toJS()
                    },
                    toKeyedSeq: function () {
                        return new Lt(this, !0)
                    },
                    toMap: function () {
                        return Re(this.toKeyedSeq())
                    },
                    toObject: function () {
                        Ue(this.size);
                        var r = {};
                        return this.__iterate(function (e, t) {
                            r[t] = e
                        }), r
                    },
                    toOrderedMap: function () {
                        return It(this.toKeyedSeq())
                    },
                    toOrderedSet: function () {
                        return br(h(this) ? this.valueSeq() : this)
                    },
                    toSet: function () {
                        return ur(h(this) ? this.valueSeq() : this)
                    },
                    toSetSeq: function () {
                        return new Dt(this)
                    },
                    toSeq: function () {
                        return l(this) ? this.toIndexedSeq() : h(this) ? this.toKeyedSeq() : this.toSetSeq()
                    },
                    toStack: function () {
                        return xr(h(this) ? this.valueSeq() : this)
                    },
                    toList: function () {
                        return dt(h(this) ? this.valueSeq() : this)
                    },
                    toString: function () {
                        return "[Iterable]"
                    },
                    __toString: function (e, t) {
                        return 0 === this.size ? e + t : e + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + t
                    },
                    concat: function () {
                        return $t(this, function (e, t) {
                            var r = h(e),
                                n = [e].concat(t).map(function (e) {
                                    return c(e) ? r && (e = a(e)) : e = r ? ae(e) : ue(Array.isArray(e) ? e : [e]), e
                                }).filter(function (e) {
                                    return 0 !== e.size
                                });
                            if (0 === n.length) return e;
                            if (1 === n.length) {
                                var i = n[0];
                                if (i === e || r && h(i) || l(e) && l(i)) return i
                            }
                            var s = new te(n);
                            return r ? s = s.toKeyedSeq() : l(e) || (s = s.toSetSeq()), (s = s.flatten(!0)).size = n.reduce(function (e, t) {
                                if (void 0 !== e) {
                                    var r = t.size;
                                    if (void 0 !== r) return e + r
                                }
                            }, 0), s
                        }(this, n.call(arguments, 0)))
                    },
                    includes: function (t) {
                        return this.some(function (e) {
                            return _e(e, t)
                        })
                    },
                    entries: function () {
                        return this.__iterator(L)
                    },
                    every: function (n, i) {
                        Ue(this.size);
                        var s = !0;
                        return this.__iterate(function (e, t, r) {
                            if (!n.call(i, e, t, r)) return s = !1
                        }), s
                    },
                    filter: function (e, t) {
                        return $t(this, Ft(this, e, t, !0))
                    },
                    find: function (e, t, r) {
                        var n = this.findEntry(e, t);
                        return n ? n[1] : r
                    },
                    forEach: function (e, t) {
                        return Ue(this.size), this.__iterate(t ? e.bind(t) : e)
                    },
                    join: function (t) {
                        Ue(this.size), t = void 0 !== t ? "" + t : ",";
                        var r = "",
                            n = !0;
                        return this.__iterate(function (e) {
                            n ? n = !1 : r += t, r += null != e ? e.toString() : ""
                        }), r
                    },
                    keys: function () {
                        return this.__iterator(C)
                    },
                    map: function (e, t) {
                        return $t(this, Pt(this, e, t))
                    },
                    reduce: function (n, e, i) {
                        var s, o;
                        return Ue(this.size), arguments.length < 2 ? o = !0 : s = e, this.__iterate(function (e, t, r) {
                            s = o ? (o = !1, e) : n.call(i, s, e, t, r)
                        }), s
                    },
                    reduceRight: function (e, t, r) {
                        var n = this.toKeyedSeq().reverse();
                        return n.reduce.apply(n, arguments)
                    },
                    reverse: function () {
                        return $t(this, Nt(this, !0))
                    },
                    slice: function (e, t) {
                        return $t(this, Kt(this, e, t, !0))
                    },
                    some: function (e, t) {
                        return !this.every(Mr(e), t)
                    },
                    sort: function (e) {
                        return $t(this, Wt(this, e))
                    },
                    values: function () {
                        return this.__iterator(M)
                    },
                    butLast: function () {
                        return this.slice(0, -1)
                    },
                    isEmpty: function () {
                        return void 0 !== this.size ? 0 === this.size : !this.some(function () {
                            return !0
                        })
                    },
                    count: function (e, t) {
                        return z(e ? this.toSeq().filter(e, t) : this)
                    },
                    countBy: function (e, t) {
                        return r = this, n = e, i = t, s = Re().asMutable(), r.__iterate(function (e, t) {
                            s.update(n.call(i, e, t, r), 0, function (e) {
                                return e + 1
                            })
                        }), s.asImmutable();
                        var r, n, i, s
                    },
                    equals: function (e) {
                        return be(this, e)
                    },
                    entrySeq: function () {
                        var e = this;
                        if (e._cache) return new te(e._cache);
                        var t = e.toSeq().map(Cr).toIndexedSeq();
                        return t.fromEntrySeq = function () {
                            return e.toSeq()
                        }, t
                    },
                    filterNot: function (e, t) {
                        return this.filter(Mr(e), t)
                    },
                    findEntry: function (n, i, e) {
                        var s = e;
                        return this.__iterate(function (e, t, r) {
                            if (n.call(i, e, t, r)) return !(s = [t, e])
                        }), s
                    },
                    findKey: function (e, t) {
                        var r = this.findEntry(e, t);
                        return r && r[0]
                    },
                    findLast: function (e, t, r) {
                        return this.toKeyedSeq().reverse().find(e, t, r)
                    },
                    findLastEntry: function (e, t, r) {
                        return this.toKeyedSeq().reverse().findEntry(e, t, r)
                    },
                    findLastKey: function (e, t) {
                        return this.toKeyedSeq().reverse().findKey(e, t)
                    },
                    first: function () {
                        return this.find(B)
                    },
                    flatMap: function (e, t) {
                        return $t(this, (n = e, i = t, s = Qt(r = this), r.toSeq().map(function (e, t) {
                            return s(n.call(i, e, t, r))
                        }).flatten(!0)));
                        var r, n, i, s
                    },
                    flatten: function (e) {
                        return $t(this, Vt(this, e, !0))
                    },
                    fromEntrySeq: function () {
                        return new Ut(this)
                    },
                    get: function (r, e) {
                        return this.find(function (e, t) {
                            return _e(t, r)
                        }, void 0, e)
                    },
                    getIn: function (e, t) {
                        for (var r, n = this, i = nr(e); !(r = i.next()).done;) {
                            var s = r.value;
                            if ((n = n && n.get ? n.get(s, w) : w) === w) return t
                        }
                        return n
                    },
                    groupBy: function (e, t) {
                        return function (n, e, i) {
                            var s = h(n),
                                o = (p(n) ? It() : Re()).asMutable();
                            n.__iterate(function (t, r) {
                                o.update(e.call(i, t, r, n), function (e) {
                                    return (e = e || []).push(s ? [r, t] : t), e
                                })
                            });
                            var t = Qt(n);
                            return o.map(function (e) {
                                return $t(n, t(e))
                            })
                        }(this, e, t)
                    },
                    has: function (e) {
                        return this.get(e, w) !== w
                    },
                    hasIn: function (e) {
                        return this.getIn(e, w) !== w
                    },
                    isSubset: function (t) {
                        return t = "function" == typeof t.includes ? t : u(t), this.every(function (e) {
                            return t.includes(e)
                        })
                    },
                    isSuperset: function (e) {
                        return (e = "function" == typeof e.isSubset ? e : u(e)).isSubset(this)
                    },
                    keyOf: function (t) {
                        return this.findKey(function (e) {
                            return _e(e, t)
                        })
                    },
                    keySeq: function () {
                        return this.toSeq().map(Or).toIndexedSeq()
                    },
                    last: function () {
                        return this.toSeq().reverse().first()
                    },
                    lastKeyOf: function (e) {
                        return this.toKeyedSeq().reverse().keyOf(e)
                    },
                    max: function (e) {
                        return Gt(this, e)
                    },
                    maxBy: function (e, t) {
                        return Gt(this, t, e)
                    },
                    min: function (e) {
                        return Gt(this, e ? Lr(e) : Ur)
                    },
                    minBy: function (e, t) {
                        return Gt(this, t ? Lr(t) : Ur, e)
                    },
                    rest: function () {
                        return this.slice(1)
                    },
                    skip: function (e) {
                        return this.slice(Math.max(0, e))
                    },
                    skipLast: function (e) {
                        return $t(this, this.toSeq().reverse().skip(e).reverse())
                    },
                    skipWhile: function (e, t) {
                        return $t(this, Ht(this, e, t, !0))
                    },
                    skipUntil: function (e, t) {
                        return this.skipWhile(Mr(e), t)
                    },
                    sortBy: function (e, t) {
                        return $t(this, Wt(this, t, e))
                    },
                    take: function (e) {
                        return this.slice(0, Math.max(0, e))
                    },
                    takeLast: function (e) {
                        return $t(this, this.toSeq().reverse().take(e).reverse())
                    },
                    takeWhile: function (e, t) {
                        return $t(this, (u = e, f = t, (n = er(r = this)).__iterateUncached = function (n, e) {
                            var i = this;
                            if (e) return this.cacheResult().__iterate(n, e);
                            var s = 0;
                            return r.__iterate(function (e, t, r) {
                                return u.call(f, e, t, r) && ++s && n(e, t, i)
                            }), s
                        }, n.__iteratorUncached = function (i, e) {
                            var s = this;
                            if (e) return this.cacheResult().__iterator(i, e);
                            var o = r.__iterator(L, e),
                                a = !0;
                            return new R(function () {
                                if (!a) return {
                                    value: void 0,
                                    done: !0
                                };
                                var e = o.next();
                                if (e.done) return e;
                                var t = e.value,
                                    r = t[0],
                                    n = t[1];
                                return u.call(f, n, r, s) ? i === L ? e : P(i, r, n, e) : {
                                    value: void 0,
                                    done: !(a = !1)
                                }
                            })
                        }, n));
                        var r, u, f, n
                    },
                    takeUntil: function (e, t) {
                        return this.takeWhile(Mr(e), t)
                    },
                    valueSeq: function () {
                        return this.toIndexedSeq()
                    },
                    hashCode: function () {
                        return this.__hash || (this.__hash = function (e) {
                            if (e.size === 1 / 0) return 0;
                            var t = p(e),
                                r = h(e),
                                n = t ? 1 : 0;
                            return i = e.__iterate(r ? t ? function (e, t) {
                                n = 31 * n + Rr(ze(e), ze(t)) | 0
                            } : function (e, t) {
                                n = n + Rr(ze(e), ze(t)) | 0
                            } : t ? function (e) {
                                n = 31 * n + ze(e) | 0
                            } : function (e) {
                                n = n + ze(e) | 0
                            }), s = n, s = je(s, 3432918353), s = je(s << 15 | s >>> -15, 461845907), s = je(s << 13 | s >>> -13, 5), s = je((s = (s + 3864292196 | 0) ^ i) ^ s >>> 16, 2246822507), s = Ee((s = je(s ^ s >>> 13, 3266489909)) ^ s >>> 16);
                            var i, s
                        }(this))
                    }
                });
                var Ir = u.prototype;
                Ir[t] = !0, Ir[U] = Ir.values, Ir.__toJS = Ir.toArray, Ir.__toStringMapper = qr, Ir.inspect = Ir.toSource = function () {
                    return this.toString()
                }, Ir.chain = Ir.flatMap, Ir.contains = Ir.includes, Tr(a, {
                    flip: function () {
                        return $t(this, Rt(this))
                    },
                    mapEntries: function (r, n) {
                        var i = this,
                            s = 0;
                        return $t(this, this.toSeq().map(function (e, t) {
                            return r.call(n, [t, e], s++, i)
                        }).fromEntrySeq())
                    },
                    mapKeys: function (r, n) {
                        var i = this;
                        return $t(this, this.toSeq().flip().map(function (e, t) {
                            return r.call(n, e, t, i)
                        }).flip())
                    }
                });
                var Ar = a.prototype;

                function Or(e, t) {
                    return t
                }

                function Cr(e, t) {
                    return [t, e]
                }

                function Mr(e) {
                    return function () {
                        return !e.apply(this, arguments)
                    }
                }

                function Lr(e) {
                    return function () {
                        return -e.apply(this, arguments)
                    }
                }

                function qr(e) {
                    return "string" == typeof e ? JSON.stringify(e) : String(e)
                }

                function Dr() {
                    return E(arguments)
                }

                function Ur(e, t) {
                    return e < t ? 1 : t < e ? -1 : 0
                }

                function Rr(e, t) {
                    return e ^ t + 2654435769 + (e << 6) + (e >> 2) | 0
                }
                return Ar[r] = !0, Ar[U] = Ir.entries, Ar.__toJS = Ir.toObject, Ar.__toStringMapper = function (e, t) {
                    return JSON.stringify(t) + ": " + qr(e)
                }, Tr(f, {
                    toKeyedSeq: function () {
                        return new Lt(this, !1)
                    },
                    filter: function (e, t) {
                        return $t(this, Ft(this, e, t, !1))
                    },
                    findIndex: function (e, t) {
                        var r = this.findEntry(e, t);
                        return r ? r[0] : -1
                    },
                    indexOf: function (e) {
                        var t = this.keyOf(e);
                        return void 0 === t ? -1 : t
                    },
                    lastIndexOf: function (e) {
                        var t = this.lastKeyOf(e);
                        return void 0 === t ? -1 : t
                    },
                    reverse: function () {
                        return $t(this, Nt(this, !1))
                    },
                    slice: function (e, t) {
                        return $t(this, Kt(this, e, t, !1))
                    },
                    splice: function (e, t) {
                        var r = arguments.length;
                        if (t = Math.max(0 | t, 0), 0 === r || 2 === r && !t) return this;
                        e = I(e, e < 0 ? this.count() : this.size);
                        var n = this.slice(0, e);
                        return $t(this, 1 === r ? n : n.concat(E(arguments, 2), this.slice(e + t)))
                    },
                    findLastIndex: function (e, t) {
                        var r = this.findLastEntry(e, t);
                        return r ? r[0] : -1
                    },
                    first: function () {
                        return this.get(0)
                    },
                    flatten: function (e) {
                        return $t(this, Vt(this, e, !1))
                    },
                    get: function (r, e) {
                        return (r = S(this, r)) < 0 || this.size === 1 / 0 || void 0 !== this.size && r > this.size ? e : this.find(function (e, t) {
                            return t === r
                        }, void 0, e)
                    },
                    has: function (e) {
                        return 0 <= (e = S(this, e)) && (void 0 !== this.size ? this.size === 1 / 0 || e < this.size : -1 !== this.indexOf(e))
                    },
                    interpose: function (e) {
                        return $t(this, (o = e, (t = er(s = this)).size = s.size && 2 * s.size - 1, t.__iterateUncached = function (r, e) {
                            var n = this,
                                i = 0;
                            return s.__iterate(function (e, t) {
                                return (!i || !1 !== r(o, i++, n)) && !1 !== r(e, i++, n)
                            }, e), i
                        }, t.__iteratorUncached = function (e, t) {
                            var r, n = s.__iterator(M, t),
                                i = 0;
                            return new R(function () {
                                return (!r || i % 2) && (r = n.next()).done ? r : i % 2 ? P(e, i++, o) : P(e, i++, r.value, r)
                            })
                        }, t));
                        var s, o, t
                    },
                    interleave: function () {
                        var e = [this].concat(E(arguments)),
                            t = Jt(this.toSeq(), J.of, e),
                            r = t.flatten(!0);
                        return t.size && (r.size = t.size * e.length), $t(this, r)
                    },
                    keySeq: function () {
                        return ve(0, this.size)
                    },
                    last: function () {
                        return this.get(-1)
                    },
                    skipWhile: function (e, t) {
                        return $t(this, Ht(this, e, t, !1))
                    },
                    zip: function () {
                        return $t(this, Jt(this, Dr, [this].concat(E(arguments))))
                    },
                    zipWith: function (e) {
                        var t = E(arguments);
                        return $t(t[0] = this, Jt(this, e, t))
                    }
                }), f.prototype[s] = !0, f.prototype[o] = !0, Tr(i, {
                    get: function (e, t) {
                        return this.has(e) ? e : t
                    },
                    includes: function (e) {
                        return this.has(e)
                    },
                    keySeq: function () {
                        return this.valueSeq()
                    }
                }), i.prototype.has = Ir.includes, i.prototype.contains = i.prototype.includes, Tr(Z, a.prototype), Tr(J, f.prototype), Tr($, i.prototype), Tr(we, a.prototype), Tr(xe, f.prototype), Tr(ke, i.prototype), {
                    Iterable: u,
                    Seq: G,
                    Collection: ge,
                    Map: Re,
                    OrderedMap: It,
                    List: dt,
                    Stack: xr,
                    Set: ur,
                    OrderedSet: br,
                    Record: ir,
                    Range: ve,
                    Repeat: me,
                    is: _e,
                    fromJS: le
                }
            }, "object" == typeof r && void 0 !== t ? t.exports = i() : n.Immutable = i()
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js": [function (e, t, r) {
            arguments[4]["/home/nozdrin/workspace/bitshares/btsdex/node_modules/assert/node_modules/inherits/inherits_browser.js"][0].apply(r, arguments)
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/is-buffer/index.js": [function (e, t, r) {
            function n(e) {
                return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
            t.exports = function (e) {
                return null != e && (n(e) || "function" == typeof (t = e).readFloatLE && "function" == typeof t.slice && n(t.slice(0, 0)) || !!e._isBuffer);
                var t
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/isarray/index.js": [function (e, t, r) {
            var n = {}.toString;
            t.exports = Array.isArray || function (e) {
                return "[object Array]" == n.call(e)
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/long/dist/long.js": [function (e, t, r) {
            var n, i;
            n = this, i = function () {
                "use strict";

                function n(e, t, r) {
                    this.low = 0 | e, this.high = 0 | t, this.unsigned = !!r
                }

                function d(e) {
                    return !0 === (e && e.__isLong__)
                }
                Object.defineProperty(n.prototype, "__isLong__", {
                    value: !0,
                    enumerable: !1,
                    configurable: !1
                }), n.isLong = d;
                var s = {},
                    o = {};

                function e(e, t) {
                    var r, n, i;
                    return t ? (i = 0 <= (e >>>= 0) && e < 256) && (n = o[e]) ? n : (r = _(e, (0 | e) < 0 ? -1 : 0, !0), i && (o[e] = r), r) : (i = -128 <= (e |= 0) && e < 128) && (n = s[e]) ? n : (r = _(e, e < 0 ? -1 : 0, !1), i && (s[e] = r), r)
                }

                function p(e, t) {
                    if (isNaN(e) || !isFinite(e)) return t ? u : y;
                    if (t) {
                        if (e < 0) return u;
                        if (i <= e) return w
                    } else {
                        if (e <= -a) return x;
                        if (a <= e + 1) return g
                    }
                    return e < 0 ? p(-e, t).neg() : _(e % r | 0, e / r | 0, t)
                }

                function _(e, t, r) {
                    return new n(e, t, r)
                }
                n.fromInt = e, n.fromNumber = p, n.fromBits = _;
                var c = Math.pow;

                function h(e, t, r) {
                    if (0 === e.length) throw Error("empty string");
                    if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return y;
                    if (t = "number" == typeof t ? (r = t, !1) : !!t, (r = r || 10) < 2 || 36 < r) throw RangeError("radix");
                    var n;
                    if (0 < (n = e.indexOf("-"))) throw Error("interior hyphen");
                    if (0 === n) return h(e.substring(1), t, r).neg();
                    for (var i = p(c(r, 8)), s = y, o = 0; o < e.length; o += 8) {
                        var a = Math.min(8, e.length - o),
                            u = parseInt(e.substring(o, o + a), r);
                        if (a < 8) {
                            var f = p(c(r, a));
                            s = s.mul(f).add(p(u))
                        } else s = (s = s.mul(i)).add(p(u))
                    }
                    return s.unsigned = t, s
                }

                function b(e) {
                    return e instanceof n ? e : "number" == typeof e ? p(e) : "string" == typeof e ? h(e) : _(e.low, e.high, e.unsigned)
                }
                n.fromString = h, n.fromValue = b;
                var r = 4294967296,
                    i = r * r,
                    a = i / 2,
                    m = e(1 << 24),
                    y = e(0);
                n.ZERO = y;
                var u = e(0, !0);
                n.UZERO = u;
                var f = e(1);
                n.ONE = f;
                var l = e(1, !0);
                n.UONE = l;
                var v = e(-1);
                n.NEG_ONE = v;
                var g = _(-1, 2147483647, !1);
                n.MAX_VALUE = g;
                var w = _(-1, -1, !0);
                n.MAX_UNSIGNED_VALUE = w;
                var x = _(0, -2147483648, !1);
                n.MIN_VALUE = x;
                var t = n.prototype;
                return t.toInt = function () {
                    return this.unsigned ? this.low >>> 0 : this.low
                }, t.toNumber = function () {
                    return this.unsigned ? (this.high >>> 0) * r + (this.low >>> 0) : this.high * r + (this.low >>> 0)
                }, t.toString = function (e) {
                    if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
                    if (this.isZero()) return "0";
                    if (this.isNegative()) {
                        if (this.eq(x)) {
                            var t = p(e),
                                r = this.div(t),
                                n = r.mul(t).sub(this);
                            return r.toString(e) + n.toInt().toString(e)
                        }
                        return "-" + this.neg().toString(e)
                    }
                    for (var i = p(c(e, 6), this.unsigned), s = this, o = "";;) {
                        var a = s.div(i),
                            u = (s.sub(a.mul(i)).toInt() >>> 0).toString(e);
                        if ((s = a).isZero()) return u + o;
                        for (; u.length < 6;) u = "0" + u;
                        o = "" + u + o
                    }
                }, t.getHighBits = function () {
                    return this.high
                }, t.getHighBitsUnsigned = function () {
                    return this.high >>> 0
                }, t.getLowBits = function () {
                    return this.low
                }, t.getLowBitsUnsigned = function () {
                    return this.low >>> 0
                }, t.getNumBitsAbs = function () {
                    if (this.isNegative()) return this.eq(x) ? 64 : this.neg().getNumBitsAbs();
                    for (var e = 0 != this.high ? this.high : this.low, t = 31; 0 < t && 0 == (e & 1 << t); t--);
                    return 0 != this.high ? t + 33 : t + 1
                }, t.isZero = function () {
                    return 0 === this.high && 0 === this.low
                }, t.isNegative = function () {
                    return !this.unsigned && this.high < 0
                }, t.isPositive = function () {
                    return this.unsigned || 0 <= this.high
                }, t.isOdd = function () {
                    return 1 == (1 & this.low)
                }, t.isEven = function () {
                    return 0 == (1 & this.low)
                }, t.equals = function (e) {
                    return d(e) || (e = b(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && (this.high === e.high && this.low === e.low)
                }, t.eq = t.equals, t.notEquals = function (e) {
                    return !this.eq(e)
                }, t.neq = t.notEquals, t.lessThan = function (e) {
                    return this.comp(e) < 0
                }, t.lt = t.lessThan, t.lessThanOrEqual = function (e) {
                    return this.comp(e) <= 0
                }, t.lte = t.lessThanOrEqual, t.greaterThan = function (e) {
                    return 0 < this.comp(e)
                }, t.gt = t.greaterThan, t.greaterThanOrEqual = function (e) {
                    return 0 <= this.comp(e)
                }, t.gte = t.greaterThanOrEqual, t.compare = function (e) {
                    if (d(e) || (e = b(e)), this.eq(e)) return 0;
                    var t = this.isNegative(),
                        r = e.isNegative();
                    return t && !r ? -1 : !t && r ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
                }, t.comp = t.compare, t.negate = function () {
                    return !this.unsigned && this.eq(x) ? x : this.not().add(f)
                }, t.neg = t.negate, t.add = function (e) {
                    d(e) || (e = b(e));
                    var t = this.high >>> 16,
                        r = 65535 & this.high,
                        n = this.low >>> 16,
                        i = 65535 & this.low,
                        s = e.high >>> 16,
                        o = 65535 & e.high,
                        a = e.low >>> 16,
                        u = 0,
                        f = 0,
                        c = 0,
                        h = 0;
                    return c += (h += i + (65535 & e.low)) >>> 16, f += (c += n + a) >>> 16, u += (f += r + o) >>> 16, u += t + s, _((c &= 65535) << 16 | (h &= 65535), (u &= 65535) << 16 | (f &= 65535), this.unsigned)
                }, t.subtract = function (e) {
                    return d(e) || (e = b(e)), this.add(e.neg())
                }, t.sub = t.subtract, t.multiply = function (e) {
                    if (this.isZero()) return y;
                    if (d(e) || (e = b(e)), e.isZero()) return y;
                    if (this.eq(x)) return e.isOdd() ? x : y;
                    if (e.eq(x)) return this.isOdd() ? x : y;
                    if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
                    if (e.isNegative()) return this.mul(e.neg()).neg();
                    if (this.lt(m) && e.lt(m)) return p(this.toNumber() * e.toNumber(), this.unsigned);
                    var t = this.high >>> 16,
                        r = 65535 & this.high,
                        n = this.low >>> 16,
                        i = 65535 & this.low,
                        s = e.high >>> 16,
                        o = 65535 & e.high,
                        a = e.low >>> 16,
                        u = 65535 & e.low,
                        f = 0,
                        c = 0,
                        h = 0,
                        l = 0;
                    return h += (l += i * u) >>> 16, c += (h += n * u) >>> 16, h &= 65535, c += (h += i * a) >>> 16, f += (c += r * u) >>> 16, c &= 65535, f += (c += n * a) >>> 16, c &= 65535, f += (c += i * o) >>> 16, f += t * u + r * a + n * o + i * s, _((h &= 65535) << 16 | (l &= 65535), (f &= 65535) << 16 | (c &= 65535), this.unsigned)
                }, t.mul = t.multiply, t.divide = function (e) {
                    if (d(e) || (e = b(e)), e.isZero()) throw Error("division by zero");
                    if (this.isZero()) return this.unsigned ? u : y;
                    var t, r, n;
                    if (this.unsigned) {
                        if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return u;
                        if (e.gt(this.shru(1))) return l;
                        n = u
                    } else {
                        if (this.eq(x)) return e.eq(f) || e.eq(v) ? x : e.eq(x) ? f : (t = this.shr(1).div(e).shl(1)).eq(y) ? e.isNegative() ? f : v : (r = this.sub(e.mul(t)), n = t.add(r.div(e)));
                        else if (e.eq(x)) return this.unsigned ? u : y;
                        if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
                        if (e.isNegative()) return this.div(e.neg()).neg();
                        n = y
                    }
                    for (r = this; r.gte(e);) {
                        t = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
                        for (var i = Math.ceil(Math.log(t) / Math.LN2), s = i <= 48 ? 1 : c(2, i - 48), o = p(t), a = o.mul(e); a.isNegative() || a.gt(r);) a = (o = p(t -= s, this.unsigned)).mul(e);
                        o.isZero() && (o = f), n = n.add(o), r = r.sub(a)
                    }
                    return n
                }, t.div = t.divide, t.modulo = function (e) {
                    return d(e) || (e = b(e)), this.sub(this.div(e).mul(e))
                }, t.mod = t.modulo, t.not = function () {
                    return _(~this.low, ~this.high, this.unsigned)
                }, t.and = function (e) {
                    return d(e) || (e = b(e)), _(this.low & e.low, this.high & e.high, this.unsigned)
                }, t.or = function (e) {
                    return d(e) || (e = b(e)), _(this.low | e.low, this.high | e.high, this.unsigned)
                }, t.xor = function (e) {
                    return d(e) || (e = b(e)), _(this.low ^ e.low, this.high ^ e.high, this.unsigned)
                }, t.shiftLeft = function (e) {
                    return d(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? _(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : _(0, this.low << e - 32, this.unsigned)
                }, t.shl = t.shiftLeft, t.shiftRight = function (e) {
                    return d(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? _(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : _(this.high >> e - 32, 0 <= this.high ? 0 : -1, this.unsigned)
                }, t.shr = t.shiftRight, t.shiftRightUnsigned = function (e) {
                    if (d(e) && (e = e.toInt()), 0 === (e &= 63)) return this;
                    var t = this.high;
                    return e < 32 ? _(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : _(32 === e ? t : t >>> e - 32, 0, this.unsigned)
                }, t.shru = t.shiftRightUnsigned, t.toSigned = function () {
                    return this.unsigned ? _(this.low, this.high, !1) : this
                }, t.toUnsigned = function () {
                    return this.unsigned ? this : _(this.low, this.high, !0)
                }, t.toBytes = function (e) {
                    return e ? this.toBytesLE() : this.toBytesBE()
                }, t.toBytesLE = function () {
                    var e = this.high,
                        t = this.low;
                    return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255]
                }, t.toBytesBE = function () {
                    var e = this.high,
                        t = this.low;
                    return [e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
                }, n
            }, "function" == typeof e && "object" == typeof t && t && t.exports ? t.exports = i() : (n.dcodeIO = n.dcodeIO || {}).Long = i()
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/lzma/src/lzma-d-min.js": [function (e, t, r) {
            (function (e) {
                var t = function () {
                    "use strict";

                    function p(e) {
                        var t = [];
                        return t[e - 1] = void 0, t
                    }

                    function _(e, t) {
                        return o(e[0] + t[0], e[1] + t[1])
                    }

                    function b(e, t) {
                        var r, n, i, s;
                        return e[0] == t[0] && e[1] == t[1] ? 0 : (r = e[1] < 0, n = t[1] < 0, r && !n ? -1 : !r && n ? 1 : (i = e, s = t, o(i[0] - s[0], i[1] - s[1]))[1] < 0 ? -1 : 1)
                    }

                    function o(e, t) {
                        var r, n;
                        for (e %= 0x10000000000000000, t = (t %= 0x10000000000000000) - (r = t % i) + (n = Math.floor(e / i) * i), e = e - n + r; e < 0;) e += i, t -= i;
                        for (; 4294967295 < e;) e -= i, t += i;
                        for (t %= 0x10000000000000000; 0x7fffffff00000000 < t;) t -= 0x10000000000000000;
                        for (; t < -0x8000000000000000;) t += 0x10000000000000000;
                        return [e, t]
                    }

                    function m(e) {
                        return 0 <= e ? [e, 0] : [e + i, -i]
                    }

                    function y(e) {
                        return 2147483648 <= e[0] ? ~~Math.max(Math.min(e[0] - i, 2147483647), -2147483648) : ~~Math.max(Math.min(e[0], 2147483647), -2147483648)
                    }

                    function v(e) {
                        return e.cb >= e.O ? -1 : 255 & e.ab[e.cb++]
                    }

                    function c(e) {
                        var t = e.ab;
                        return t.length = e.O, t
                    }

                    function s(e, t, r) {
                        var n, i, s, o, a, u, f, c, h, l = "",
                            d = [];
                        for (i = 0; i < 5; ++i) {
                            if (-1 == (s = v(t))) throw Error("truncated input");
                            d[i] = s << 24 >> 24
                        }
                        if (! function (e, t) {
                                var r, n, i, s, o, a, u;
                                if (t.length < 5) return 0;
                                for (u = 255 & t[0], i = u % 9, s = (a = ~~(u / 9)) % 5, o = ~~(a / 5), n = r = 0; n < 4; ++n) r += (255 & t[1 + n]) << 8 * n;
                                return 99999999 < r || ! function (e, t, r, n) {
                                    if (8 < t || 4 < r || 4 < n) return 0;
                                    ! function (e, t, r) {
                                        var n, i;
                                        if (null == e.F || e.g != r || e.y != t)
                                            for (e.y = t, e.Y = (1 << t) - 1, e.g = r, i = 1 << e.g + e.y, e.F = p(i), n = 0; n < i; ++n) e.F[n] = (s = {}, s.v = p(768), s);
                                        var s
                                    }(e.k, r, t);
                                    var i = 1 << n;
                                    return k(e.C, i), k(e.o, i), e.P = i - 1, 1
                                }(e, i, s, o) ? 0 : (f = e, c = r, c < 0 ? 0 : (f.z != c && (f.z = c, f.m = Math.max(f.z, 1), h = f.b, l = Math.max(f.m, 4096), (null == h.x || h.c != l) && (h.x = p(l)), h.c = l, h.D = 0, h.w = 0), 1));
                                var f, c, h, l
                            }(n = function (e) {
                                e.b = {}, e.a = {}, e.q = p(192), e.E = p(12), e.s = p(12), e.u = p(12), e.r = p(12), e.n = p(192), e.j = p(4), e.J = p(114), e.t = S({}, 4), e.C = E({}), e.o = E({}), e.k = {};
                                for (var t = 0; t < 4; ++t) e.j[t] = S({}, 6);
                                return e
                            }({}), d)) throw Error("corrupted input");
                        for (i = 0; i < 64; i += 8) {
                            if (-1 == (s = v(t))) throw Error("truncated input");
                            1 == (s = s.toString(16)).length && (s = "0" + s), l = s + "" + l
                        }
                        /^0+$|^f+$/i.test(l) ? e.N = C : (o = parseInt(l, 16), e.N = 4294967295 < o ? C : m(o)), e.Q = (a = n, u = t, f = r, c = e.N, a.a.K = u, x(a.b), a.b.V = f, function (e) {
                            e.b.w = 0, e.b.D = 0, I(e.q), I(e.n), I(e.E), I(e.s), I(e.u), I(e.r), I(e.J),
                                function (e) {
                                    var t, r;
                                    for (r = 1 << e.g + e.y, t = 0; t < r; ++t) I(e.F[t].v)
                                }(e.k);
                            for (var t = 0; t < 4; ++t) I(e.j[t].B);
                            z(e.C), z(e.o), I(e.t.B),
                                function (e) {
                                    e.p = 0, e.i = -1;
                                    for (var t = 0; t < 5; ++t) e.p = e.p << 8 | v(e.K)
                                }(e.a)
                        }(a), a.f = 0, a.l = 0, a.T = 0, a.R = 0, a._ = 0, a.U = c, a.d = M, a.I = 0, (h = {}).h = a, h.bb = null, h.X = 1, h)
                    }

                    function n(e, t) {
                        return e.S = ((i = {}).ab = p(32), i.O = 0, i), s(e, ((r = {}).ab = n = t, r.cb = 0, r.O = n.length, r), e.S), e;
                        var r, n, i
                    }

                    function g(e) {
                        var t, r, n, i, s = e.D - e.w;
                        s && (t = e.V, r = e.x, n = e.w, i = s, function (e, t, r, n, i) {
                            for (var s = 0; s < i; ++s) r[n + s] = e[t + s]
                        }(r, n, t.ab, t.O, i), t.O += i, e.D >= e.c && (e.D = 0), e.w = e.D)
                    }

                    function w(e, t) {
                        var r = e.D - t - 1;
                        return r < 0 && (r += e.c), e.x[r]
                    }

                    function x(e) {
                        g(e), e.V = null
                    }

                    function h(e) {
                        if (!e.X) throw Error("bad state");
                        if (e.bb) throw Error("No encoding");
                        return function (e) {
                            var t = function (e) {
                                var t, r, n, i, s, o;
                                if (o = y(e.d) & e.P, T(e.a, e.q, (e.f << 4) + o)) {
                                    if (T(e.a, e.E, e.f)) n = 0, T(e.a, e.s, e.f) ? (T(e.a, e.u, e.f) ? (T(e.a, e.r, e.f) ? (r = e._, e._ = e.R) : r = e.R, e.R = e.T) : r = e.T, e.T = e.l, e.l = r) : T(e.a, e.n, (e.f << 4) + o) || (e.f = e.f < 7 ? 9 : 11, n = 1), n || (n = j(e.o, e.a, o) + 2, e.f = e.f < 7 ? 8 : 11);
                                    else if (e._ = e.R, e.R = e.T, e.T = e.l, n = 2 + j(e.C, e.a, o), e.f = e.f < 7 ? 7 : 10, 4 <= (s = B(e.j[(d = n, (d -= 2) < 4 ? d : 3)], e.a))) {
                                        if (i = (s >> 1) - 1, e.l = (2 | 1 & s) << i, s < 14) e.l += function (e, t, r, n) {
                                            var i, s, o = 1,
                                                a = 0;
                                            for (s = 0; s < n; ++s) i = T(r, e, t + o), o <<= 1, o += i, a |= i << s;
                                            return a
                                        }(e.J, e.l - s - 1, e.a, i);
                                        else if (e.l += function (e, t) {
                                                var r, n, i = 0;
                                                for (r = t; 0 != r; --r) e.i >>>= 1, n = e.p - e.i >>> 31, e.p -= e.i & n - 1, i = i << 1 | 1 - n, -16777216 & e.i || (e.p = e.p << 8 | v(e.K), e.i <<= 8);
                                                return i
                                            }(e.a, i - 4) << 4, e.l += function (e, t) {
                                                var r, n, i = 1,
                                                    s = 0;
                                                for (n = 0; e.A > n; ++n) r = T(t, e.B, i), i <<= 1, i += r, s |= r << n;
                                                return s
                                            }(e.t, e.a), e.l < 0) return -1 == e.l ? 1 : -1
                                    } else e.l = s;
                                    if (0 <= b(m(e.l), e.d) || e.l >= e.m) return -1;
                                    (function (e, t, r) {
                                        var n = e.D - t - 1;
                                        for (n < 0 && (n += e.c); 0 != r; --r) n >= e.c && (n = 0), e.x[e.D++] = e.x[n++], e.D >= e.c && g(e)
                                    })(e.b, e.l, n), e.d = _(e.d, m(n)), e.I = w(e.b, 0)
                                } else c = e.k, h = y(e.d), l = e.I, t = c.F[((h & c.Y) << c.g) + ((255 & l) >>> 8 - c.g)], e.I = e.f < 7 ? function (e, t) {
                                    var r = 1;
                                    for (; r = r << 1 | T(t, e.v, r), r < 256;);
                                    return r << 24 >> 24
                                }(t, e.a) : function (e, t, r) {
                                    var n, i, s = 1;
                                    do {
                                        if (i = r >> 7 & 1, r <<= 1, n = T(t, e.v, (1 + i << 8) + s), s = s << 1 | n, i != n) {
                                            for (; s < 256;) s = s << 1 | T(t, e.v, s);
                                            break
                                        }
                                    } while (s < 256);
                                    return s << 24 >> 24
                                }(t, e.a, w(e.b, e.l)), u = e.b, f = e.I, u.x[u.D++] = f, u.D >= u.c && g(u), e.f = (a = e.f, a < 4 ? 0 : a < 10 ? a - 3 : a - 6), e.d = _(e.d, L);
                                var a;
                                var u, f;
                                var c, h, l;
                                var d;
                                return 0
                            }(e.h);
                            if (-1 == t) throw Error("corrupted input");
                            e.$ = C, e.Z = e.h.d, (t || 0 <= b(e.h.U, M) && 0 <= b(e.h.d, e.h.U)) && (g(e.h.b), x(e.h.b), e.h.a.K = null, e.X = 0)
                        }(e), e.X
                    }

                    function k(e, t) {
                        for (; t > e.e; ++e.e) e.G[e.e] = S({}, 3), e.H[e.e] = S({}, 3)
                    }

                    function j(e, t, r) {
                        return T(t, e.M, 0) ? 8 + (T(t, e.M, 1) ? 8 + B(e.L, t) : B(e.H[r], t)) : B(e.G[r], t)
                    }

                    function E(e) {
                        return e.M = p(2), e.G = p(16), e.H = p(16), e.L = S({}, 8), e.e = 0, e
                    }

                    function z(e) {
                        I(e.M);
                        for (var t = 0; e.e > t; ++t) I(e.G[t].B), I(e.H[t].B);
                        I(e.L.B)
                    }

                    function S(e, t) {
                        return e.A = t, e.B = p(1 << t), e
                    }

                    function B(e, t) {
                        var r, n = 1;
                        for (r = e.A; 0 != r; --r) n = (n << 1) + T(t, e.B, n);
                        return n - (1 << e.A)
                    }

                    function T(e, t, r) {
                        var n, i = t[r];
                        return (-2147483648 ^ (n = (e.i >>> 11) * i)) > (-2147483648 ^ e.p) ? (e.i = n, t[r] = i + (2048 - i >>> 5) << 16 >> 16, -16777216 & e.i || (e.p = e.p << 8 | v(e.K), e.i <<= 8), 0) : (e.i -= n, e.p -= n, t[r] = i - (i >>> 5) << 16 >> 16, -16777216 & e.i || (e.p = e.p << 8 | v(e.K), e.i <<= 8), 1)
                    }

                    function I(e) {
                        for (var t = e.length - 1; 0 <= t; --t) e[t] = 1024
                    }

                    function l(e) {
                        for (var t, r, n, i = 0, s = 0, o = e.length, a = [], u = []; i < o; ++i, ++s) {
                            if (128 & (t = 255 & e[i]))
                                if (192 == (224 & t)) {
                                    if (o <= i + 1) return e;
                                    if (128 != (192 & (r = 255 & e[++i]))) return e;
                                    u[s] = (31 & t) << 6 | 63 & r
                                } else {
                                    if (224 != (240 & t)) return e;
                                    if (o <= i + 2) return e;
                                    if (128 != (192 & (r = 255 & e[++i]))) return e;
                                    if (128 != (192 & (n = 255 & e[++i]))) return e;
                                    u[s] = (15 & t) << 12 | (63 & r) << 6 | 63 & n
                                }
                            else {
                                if (!t) return e;
                                u[s] = t
                            }
                            16383 == s && (a.push(String.fromCharCode.apply(String, u)), s = -1)
                        }
                        return 0 < s && (u.length = s, a.push(String.fromCharCode.apply(String, u))), a.join("")
                    }

                    function d(e) {
                        return e[1] + e[0]
                    }
                    var A = 3,
                        O = "function" == typeof e ? e : setTimeout,
                        i = 4294967296,
                        C = [4294967295, -i],
                        M = [0, 0],
                        L = [1, 0];
                    return "undefined" == typeof onmessage || "undefined" != typeof window && void 0 !== window.document || (onmessage = function (e) {
                        e && e.W && 2 == e.W.action && t.decompress(e.W.W, e.W.cbn)
                    }), {
                        decompress: function (e, i, s) {
                            var o, r, a, u, f = {},
                                t = void 0 === i && void 0 === s;
                            if ("function" != typeof i && (r = i, i = s = 0), s = s || function (e) {
                                    return void 0 !== r ? void postMessage({
                                        action: A,
                                        cbn: r,
                                        result: a ? e : -1
                                    }) : void 0
                                }, i = i || function (e, t) {
                                    return void 0 !== r ? postMessage({
                                        action: 2,
                                        cbn: r,
                                        result: e,
                                        error: t
                                    }) : void 0
                                }, t) {
                                for (f.d = n({}, e); h(f.d.Q););
                                return l(c(f.d.S))
                            }
                            try {
                                f.d = n({}, e), u = d(f.d.N), a = -1 < u, s(0)
                            } catch (e) {
                                return i(null, e)
                            }
                            O(function e() {
                                try {
                                    for (var t, r = 0, n = (new Date).getTime(); h(f.d.Q);)
                                        if (++r % 1e3 == 0 && 200 < (new Date).getTime() - n) return a && (o = d(f.d.Q.h.d) / u, s(o)), O(e, 0), 0;
                                    s(1), t = l(c(f.d.S)), O(i.bind(null, t), 0)
                                } catch (e) {
                                    i(null, e)
                                }
                            }, 0)
                        }
                    }
                }();
                this.LZMA = this.LZMA_WORKER = t
            }).call(this, e("timers").setImmediate)
        }, {
            timers: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/timers-browserify/main.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/md5.js/index.js": [function (e, t, r) {
            "use strict";
            var n = e("inherits"),
                i = e("hash-base"),
                s = e("safe-buffer").Buffer,
                o = new Array(16);

            function a() {
                i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
            }

            function u(e, t) {
                return e << t | e >>> 32 - t
            }

            function f(e, t, r, n, i, s, o) {
                return u(e + (t & r | ~t & n) + i + s | 0, o) + t | 0
            }

            function c(e, t, r, n, i, s, o) {
                return u(e + (t & n | r & ~n) + i + s | 0, o) + t | 0
            }

            function h(e, t, r, n, i, s, o) {
                return u(e + (t ^ r ^ n) + i + s | 0, o) + t | 0
            }

            function l(e, t, r, n, i, s, o) {
                return u(e + (r ^ (t | ~n)) + i + s | 0, o) + t | 0
            }
            n(a, i), a.prototype._update = function () {
                for (var e = o, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
                var r = this._a,
                    n = this._b,
                    i = this._c,
                    s = this._d;
                n = l(n = l(n = l(n = l(n = h(n = h(n = h(n = h(n = c(n = c(n = c(n = c(n = f(n = f(n = f(n = f(n, i = f(i, s = f(s, r = f(r, n, i, s, e[0], 3614090360, 7), n, i, e[1], 3905402710, 12), r, n, e[2], 606105819, 17), s, r, e[3], 3250441966, 22), i = f(i, s = f(s, r = f(r, n, i, s, e[4], 4118548399, 7), n, i, e[5], 1200080426, 12), r, n, e[6], 2821735955, 17), s, r, e[7], 4249261313, 22), i = f(i, s = f(s, r = f(r, n, i, s, e[8], 1770035416, 7), n, i, e[9], 2336552879, 12), r, n, e[10], 4294925233, 17), s, r, e[11], 2304563134, 22), i = f(i, s = f(s, r = f(r, n, i, s, e[12], 1804603682, 7), n, i, e[13], 4254626195, 12), r, n, e[14], 2792965006, 17), s, r, e[15], 1236535329, 22), i = c(i, s = c(s, r = c(r, n, i, s, e[1], 4129170786, 5), n, i, e[6], 3225465664, 9), r, n, e[11], 643717713, 14), s, r, e[0], 3921069994, 20), i = c(i, s = c(s, r = c(r, n, i, s, e[5], 3593408605, 5), n, i, e[10], 38016083, 9), r, n, e[15], 3634488961, 14), s, r, e[4], 3889429448, 20), i = c(i, s = c(s, r = c(r, n, i, s, e[9], 568446438, 5), n, i, e[14], 3275163606, 9), r, n, e[3], 4107603335, 14), s, r, e[8], 1163531501, 20), i = c(i, s = c(s, r = c(r, n, i, s, e[13], 2850285829, 5), n, i, e[2], 4243563512, 9), r, n, e[7], 1735328473, 14), s, r, e[12], 2368359562, 20), i = h(i, s = h(s, r = h(r, n, i, s, e[5], 4294588738, 4), n, i, e[8], 2272392833, 11), r, n, e[11], 1839030562, 16), s, r, e[14], 4259657740, 23), i = h(i, s = h(s, r = h(r, n, i, s, e[1], 2763975236, 4), n, i, e[4], 1272893353, 11), r, n, e[7], 4139469664, 16), s, r, e[10], 3200236656, 23), i = h(i, s = h(s, r = h(r, n, i, s, e[13], 681279174, 4), n, i, e[0], 3936430074, 11), r, n, e[3], 3572445317, 16), s, r, e[6], 76029189, 23), i = h(i, s = h(s, r = h(r, n, i, s, e[9], 3654602809, 4), n, i, e[12], 3873151461, 11), r, n, e[15], 530742520, 16), s, r, e[2], 3299628645, 23), i = l(i, s = l(s, r = l(r, n, i, s, e[0], 4096336452, 6), n, i, e[7], 1126891415, 10), r, n, e[14], 2878612391, 15), s, r, e[5], 4237533241, 21), i = l(i, s = l(s, r = l(r, n, i, s, e[12], 1700485571, 6), n, i, e[3], 2399980690, 10), r, n, e[10], 4293915773, 15), s, r, e[1], 2240044497, 21), i = l(i, s = l(s, r = l(r, n, i, s, e[8], 1873313359, 6), n, i, e[15], 4264355552, 10), r, n, e[6], 2734768916, 15), s, r, e[13], 1309151649, 21), i = l(i, s = l(s, r = l(r, n, i, s, e[4], 4149444226, 6), n, i, e[11], 3174756917, 10), r, n, e[2], 718787259, 15), s, r, e[9], 3951481745, 21), this._a = this._a + r | 0, this._b = this._b + n | 0, this._c = this._c + i | 0, this._d = this._d + s | 0
            }, a.prototype._digest = function () {
                this._block[this._blockOffset++] = 128, 56 < this._blockOffset && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                var e = s.allocUnsafe(16);
                return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e
            }, t.exports = a
        }, {
            "hash-base": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/hash-base/index.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process-nextick-args/index.js": [function (e, t, r) {
            (function (a) {
                "use strict";
                !a.version || 0 === a.version.indexOf("v0.") || 0 === a.version.indexOf("v1.") && 0 !== a.version.indexOf("v1.8.") ? t.exports = {
                    nextTick: function (e, t, r, n) {
                        if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
                        var i, s, o = arguments.length;
                        switch (o) {
                            case 0:
                            case 1:
                                return a.nextTick(e);
                            case 2:
                                return a.nextTick(function () {
                                    e.call(null, t)
                                });
                            case 3:
                                return a.nextTick(function () {
                                    e.call(null, t, r)
                                });
                            case 4:
                                return a.nextTick(function () {
                                    e.call(null, t, r, n)
                                });
                            default:
                                for (i = new Array(o - 1), s = 0; s < i.length;) i[s++] = arguments[s];
                                return a.nextTick(function () {
                                    e.apply(null, i)
                                })
                        }
                    }
                } : t.exports = a
            }).call(this, e("_process"))
        }, {
            _process: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process/browser.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process/browser.js": [function (e, t, r) {
            var n, i, s = t.exports = {};

            function o() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }

            function u(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
                try {
                    return n(t, 0)
                } catch (e) {
                    try {
                        return n.call(null, t, 0)
                    } catch (e) {
                        return n.call(this, t, 0)
                    }
                }
            }! function () {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : o
                } catch (e) {
                    n = o
                }
                try {
                    i = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (e) {
                    i = a
                }
            }();
            var f, c = [],
                h = !1,
                l = -1;

            function d() {
                h && f && (h = !1, f.length ? c = f.concat(c) : l = -1, c.length && p())
            }

            function p() {
                if (!h) {
                    var e = u(d);
                    h = !0;
                    for (var t = c.length; t;) {
                        for (f = c, c = []; ++l < t;) f && f[l].run();
                        l = -1, t = c.length
                    }
                    f = null, h = !1,
                        function (t) {
                            if (i === clearTimeout) return clearTimeout(t);
                            if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                            try {
                                i(t)
                            } catch (e) {
                                try {
                                    return i.call(null, t)
                                } catch (e) {
                                    return i.call(this, t)
                                }
                            }
                        }(e)
                }
            }

            function _(e, t) {
                this.fun = e, this.array = t
            }

            function b() {}
            s.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (1 < arguments.length)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                c.push(new _(e, t)), 1 !== c.length || h || u(p)
            }, _.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = b, s.addListener = b, s.once = b, s.off = b, s.removeListener = b, s.removeAllListeners = b, s.emit = b, s.prependListener = b, s.prependOnceListener = b, s.listeners = function (e) {
                return []
            }, s.binding = function (e) {
                throw new Error("process.binding is not supported")
            }, s.cwd = function () {
                return "/"
            }, s.chdir = function (e) {
                throw new Error("process.chdir is not supported")
            }, s.umask = function () {
                return 0
            }
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/duplex-browser.js": [function (e, t, r) {
            t.exports = e("./lib/_stream_duplex.js")
        }, {
            "./lib/_stream_duplex.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_duplex.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_duplex.js": [function (e, t, r) {
            "use strict";
            var n = e("process-nextick-args"),
                i = Object.keys || function (e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return t
                };
            t.exports = h;
            var s = e("core-util-is");
            s.inherits = e("inherits");
            var o = e("./_stream_readable"),
                a = e("./_stream_writable");
            s.inherits(h, o);
            for (var u = i(a.prototype), f = 0; f < u.length; f++) {
                var c = u[f];
                h.prototype[c] || (h.prototype[c] = a.prototype[c])
            }

            function h(e) {
                if (!(this instanceof h)) return new h(e);
                o.call(this, e), a.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", l)
            }

            function l() {
                this.allowHalfOpen || this._writableState.ended || n.nextTick(d, this)
            }

            function d(e) {
                e.end()
            }
            Object.defineProperty(h.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function () {
                    return this._writableState.highWaterMark
                }
            }), Object.defineProperty(h.prototype, "destroyed", {
                get: function () {
                    return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                },
                set: function (e) {
                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                }
            }), h.prototype._destroy = function (e, t) {
                this.push(null), this.end(), n.nextTick(t, e)
            }
        }, {
            "./_stream_readable": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_readable.js",
            "./_stream_writable": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_writable.js",
            "core-util-is": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/core-util-is/lib/util.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            "process-nextick-args": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process-nextick-args/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_passthrough.js": [function (e, t, r) {
            "use strict";
            t.exports = s;
            var n = e("./_stream_transform"),
                i = e("core-util-is");

            function s(e) {
                if (!(this instanceof s)) return new s(e);
                n.call(this, e)
            }
            i.inherits = e("inherits"), i.inherits(s, n), s.prototype._transform = function (e, t, r) {
                r(null, e)
            }
        }, {
            "./_stream_transform": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_transform.js",
            "core-util-is": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/core-util-is/lib/util.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_readable.js": [function (C, M, e) {
            (function (b, e) {
                "use strict";
                var m = C("process-nextick-args");
                M.exports = l;
                var o, y = C("isarray");
                l.ReadableState = s;
                C("events").EventEmitter;
                var v = function (e, t) {
                        return e.listeners(t).length
                    },
                    i = C("./internal/streams/stream"),
                    f = C("safe-buffer").Buffer,
                    c = e.Uint8Array || function () {};
                var t = C("core-util-is");
                t.inherits = C("inherits");
                var r = C("util"),
                    g = void 0;
                g = r && r.debuglog ? r.debuglog("stream") : function () {};
                var a, u = C("./internal/streams/BufferList"),
                    n = C("./internal/streams/destroy");
                t.inherits(l, i);
                var h = ["error", "close", "destroy", "pause", "resume"];

                function s(e, t) {
                    e = e || {};
                    var r = t instanceof(o = o || C("./_stream_duplex"));
                    this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.readableObjectMode);
                    var n = e.highWaterMark,
                        i = e.readableHighWaterMark,
                        s = this.objectMode ? 16 : 16384;
                    this.highWaterMark = n || 0 === n ? n : r && (i || 0 === i) ? i : s, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new u, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (a || (a = C("string_decoder/").StringDecoder), this.decoder = new a(e.encoding), this.encoding = e.encoding)
                }

                function l(e) {
                    if (o = o || C("./_stream_duplex"), !(this instanceof l)) return new l(e);
                    this._readableState = new s(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), i.call(this)
                }

                function d(e, t, r, n, i) {
                    var s, o, a, u = e._readableState;
                    null === t ? (u.reading = !1, function (e, t) {
                        if (t.ended) return;
                        if (t.decoder) {
                            var r = t.decoder.end();
                            r && r.length && (t.buffer.push(r), t.length += t.objectMode ? 1 : r.length)
                        }
                        t.ended = !0, x(e)
                    }(e, u)) : (i || (s = function (e, t) {
                        var r;
                        n = t, f.isBuffer(n) || n instanceof c || "string" == typeof t || void 0 === t || e.objectMode || (r = new TypeError("Invalid non-string/buffer chunk"));
                        var n;
                        return r
                    }(u, t)), s ? e.emit("error", s) : u.objectMode || t && 0 < t.length ? ("string" == typeof t || u.objectMode || Object.getPrototypeOf(t) === f.prototype || (o = t, t = f.from(o)), n ? u.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : p(e, u, t, !0) : u.ended ? e.emit("error", new Error("stream.push() after EOF")) : (u.reading = !1, u.decoder && !r ? (t = u.decoder.write(t), u.objectMode || 0 !== t.length ? p(e, u, t, !1) : j(e, u)) : p(e, u, t, !1))) : n || (u.reading = !1));
                    return !(a = u).ended && (a.needReadable || a.length < a.highWaterMark || 0 === a.length)
                }

                function p(e, t, r, n) {
                    t.flowing && 0 === t.length && !t.sync ? (e.emit("data", r), e.read(0)) : (t.length += t.objectMode ? 1 : r.length, n ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && x(e)), j(e, t)
                }
                Object.defineProperty(l.prototype, "destroyed", {
                    get: function () {
                        return void 0 !== this._readableState && this._readableState.destroyed
                    },
                    set: function (e) {
                        this._readableState && (this._readableState.destroyed = e)
                    }
                }), l.prototype.destroy = n.destroy, l.prototype._undestroy = n.undestroy, l.prototype._destroy = function (e, t) {
                    this.push(null), t(e)
                }, l.prototype.push = function (e, t) {
                    var r, n = this._readableState;
                    return n.objectMode ? r = !0 : "string" == typeof e && ((t = t || n.defaultEncoding) !== n.encoding && (e = f.from(e, t), t = ""), r = !0), d(this, e, t, !1, r)
                }, l.prototype.unshift = function (e) {
                    return d(this, e, null, !0, !1)
                }, l.prototype.isPaused = function () {
                    return !1 === this._readableState.flowing
                }, l.prototype.setEncoding = function (e) {
                    return a || (a = C("string_decoder/").StringDecoder), this._readableState.decoder = new a(e), this._readableState.encoding = e, this
                };
                var _ = 8388608;

                function w(e, t) {
                    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = (_ <= (r = e) ? r = _ : (r--, r |= r >>> 1, r |= r >>> 2, r |= r >>> 4, r |= r >>> 8, r |= r >>> 16, r++), r)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0));
                    var r
                }

                function x(e) {
                    var t = e._readableState;
                    t.needReadable = !1, t.emittedReadable || (g("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? m.nextTick(k, e) : k(e))
                }

                function k(e) {
                    g("emit readable"), e.emit("readable"), B(e)
                }

                function j(e, t) {
                    t.readingMore || (t.readingMore = !0, m.nextTick(E, e, t))
                }

                function E(e, t) {
                    for (var r = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (g("maybeReadMore read 0"), e.read(0), r !== t.length);) r = t.length;
                    t.readingMore = !1
                }

                function z(e) {
                    g("readable nexttick read 0"), e.read(0)
                }

                function S(e, t) {
                    t.reading || (g("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), B(e), t.flowing && !t.reading && e.read(0)
                }

                function B(e) {
                    var t = e._readableState;
                    for (g("flow", t.flowing); t.flowing && null !== e.read(););
                }

                function T(e, t) {
                    return 0 === t.length ? null : (t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : r = function (e, t, r) {
                        var n;
                        e < t.head.data.length ? (n = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : n = e === t.head.data.length ? t.shift() : r ? function (e, t) {
                            var r = t.head,
                                n = 1,
                                i = r.data;
                            e -= i.length;
                            for (; r = r.next;) {
                                var s = r.data,
                                    o = e > s.length ? s.length : e;
                                if (o === s.length ? i += s : i += s.slice(0, e), 0 === (e -= o)) {
                                    o === s.length ? (++n, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r).data = s.slice(o);
                                    break
                                }++n
                            }
                            return t.length -= n, i
                        }(e, t) : function (e, t) {
                            var r = f.allocUnsafe(e),
                                n = t.head,
                                i = 1;
                            n.data.copy(r), e -= n.data.length;
                            for (; n = n.next;) {
                                var s = n.data,
                                    o = e > s.length ? s.length : e;
                                if (s.copy(r, r.length - e, 0, o), 0 === (e -= o)) {
                                    o === s.length ? (++i, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n).data = s.slice(o);
                                    break
                                }++i
                            }
                            return t.length -= i, r
                        }(e, t);
                        return n
                    }(e, t.buffer, t.decoder), r);
                    var r
                }

                function I(e) {
                    var t = e._readableState;
                    if (0 < t.length) throw new Error('"endReadable()" called on non-empty stream');
                    t.endEmitted || (t.ended = !0, m.nextTick(A, t, e))
                }

                function A(e, t) {
                    e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"))
                }

                function O(e, t) {
                    for (var r = 0, n = e.length; r < n; r++)
                        if (e[r] === t) return r;
                    return -1
                }
                l.prototype.read = function (e) {
                    g("read", e), e = parseInt(e, 10);
                    var t = this._readableState,
                        r = e;
                    if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return g("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? I(this) : x(this), null;
                    if (0 === (e = w(e, t)) && t.ended) return 0 === t.length && I(this), null;
                    var n, i = t.needReadable;
                    return g("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && g("length less than watermark", i = !0), t.ended || t.reading ? g("reading or ended", i = !1) : i && (g("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = w(r, t))), null === (n = 0 < e ? T(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && I(this)), null !== n && this.emit("data", n), n
                }, l.prototype._read = function (e) {
                    this.emit("error", new Error("_read() is not implemented"))
                }, l.prototype.pipe = function (r, e) {
                    var n = this,
                        i = this._readableState;
                    switch (i.pipesCount) {
                        case 0:
                            i.pipes = r;
                            break;
                        case 1:
                            i.pipes = [i.pipes, r];
                            break;
                        default:
                            i.pipes.push(r)
                    }
                    i.pipesCount += 1, g("pipe count=%d opts=%j", i.pipesCount, e);
                    var t = (!e || !1 !== e.end) && r !== b.stdout && r !== b.stderr ? o : _;

                    function s(e, t) {
                        g("onunpipe"), e === n && t && !1 === t.hasUnpiped && (t.hasUnpiped = !0, g("cleanup"), r.removeListener("close", d), r.removeListener("finish", p), r.removeListener("drain", u), r.removeListener("error", l), r.removeListener("unpipe", s), n.removeListener("end", o), n.removeListener("end", _), n.removeListener("data", h), f = !0, !i.awaitDrain || r._writableState && !r._writableState.needDrain || u())
                    }

                    function o() {
                        g("onend"), r.end()
                    }
                    i.endEmitted ? m.nextTick(t) : n.once("end", t), r.on("unpipe", s);
                    var a, u = (a = n, function () {
                        var e = a._readableState;
                        g("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && v(a, "data") && (e.flowing = !0, B(a))
                    });
                    r.on("drain", u);
                    var f = !1;
                    var c = !1;

                    function h(e) {
                        g("ondata"), (c = !1) !== r.write(e) || c || ((1 === i.pipesCount && i.pipes === r || 1 < i.pipesCount && -1 !== O(i.pipes, r)) && !f && (g("false write response, pause", n._readableState.awaitDrain), n._readableState.awaitDrain++, c = !0), n.pause())
                    }

                    function l(e) {
                        g("onerror", e), _(), r.removeListener("error", l), 0 === v(r, "error") && r.emit("error", e)
                    }

                    function d() {
                        r.removeListener("finish", p), _()
                    }

                    function p() {
                        g("onfinish"), r.removeListener("close", d), _()
                    }

                    function _() {
                        g("unpipe"), n.unpipe(r)
                    }
                    return n.on("data", h),
                        function (e, t, r) {
                            if ("function" == typeof e.prependListener) return e.prependListener(t, r);
                            e._events && e._events[t] ? y(e._events[t]) ? e._events[t].unshift(r) : e._events[t] = [r, e._events[t]] : e.on(t, r)
                        }(r, "error", l), r.once("close", d), r.once("finish", p), r.emit("pipe", n), i.flowing || (g("pipe resume"), n.resume()), r
                }, l.prototype.unpipe = function (e) {
                    var t = this._readableState,
                        r = {
                            hasUnpiped: !1
                        };
                    if (0 === t.pipesCount) return this;
                    if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, r)), this;
                    if (!e) {
                        var n = t.pipes,
                            i = t.pipesCount;
                        t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                        for (var s = 0; s < i; s++) n[s].emit("unpipe", this, r);
                        return this
                    }
                    var o = O(t.pipes, e);
                    return -1 === o || (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, r)), this
                }, l.prototype.addListener = l.prototype.on = function (e, t) {
                    var r = i.prototype.on.call(this, e, t);
                    if ("data" === e) !1 !== this._readableState.flowing && this.resume();
                    else if ("readable" === e) {
                        var n = this._readableState;
                        n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && x(this) : m.nextTick(z, this))
                    }
                    return r
                }, l.prototype.resume = function () {
                    var e, t, r = this._readableState;
                    return r.flowing || (g("resume"), r.flowing = !0, e = this, (t = r).resumeScheduled || (t.resumeScheduled = !0, m.nextTick(S, e, t))), this
                }, l.prototype.pause = function () {
                    return g("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (g("pause"), this._readableState.flowing = !1, this.emit("pause")), this
                }, l.prototype.wrap = function (t) {
                    var r = this,
                        n = this._readableState,
                        i = !1;
                    for (var e in t.on("end", function () {
                            if (g("wrapped end"), n.decoder && !n.ended) {
                                var e = n.decoder.end();
                                e && e.length && r.push(e)
                            }
                            r.push(null)
                        }), t.on("data", function (e) {
                            (g("wrapped data"), n.decoder && (e = n.decoder.write(e)), n.objectMode && null == e) || (n.objectMode || e && e.length) && (r.push(e) || (i = !0, t.pause()))
                        }), t) void 0 === this[e] && "function" == typeof t[e] && (this[e] = function (e) {
                        return function () {
                            return t[e].apply(t, arguments)
                        }
                    }(e));
                    for (var s = 0; s < h.length; s++) t.on(h[s], this.emit.bind(this, h[s]));
                    return this._read = function (e) {
                        g("wrapped _read", e), i && (i = !1, t.resume())
                    }, this
                }, Object.defineProperty(l.prototype, "readableHighWaterMark", {
                    enumerable: !1,
                    get: function () {
                        return this._readableState.highWaterMark
                    }
                }), l._fromList = T
            }).call(this, C("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./_stream_duplex": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_duplex.js",
            "./internal/streams/BufferList": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/internal/streams/BufferList.js",
            "./internal/streams/destroy": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/internal/streams/destroy.js",
            "./internal/streams/stream": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/internal/streams/stream-browser.js",
            _process: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process/browser.js",
            "core-util-is": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/core-util-is/lib/util.js",
            events: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/events/events.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            isarray: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/isarray/index.js",
            "process-nextick-args": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process-nextick-args/index.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js",
            "string_decoder/": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/string_decoder/lib/string_decoder.js",
            util: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/browser-resolve/empty.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_transform.js": [function (e, t, r) {
            "use strict";
            t.exports = s;
            var n = e("./_stream_duplex"),
                i = e("core-util-is");

            function s(e) {
                if (!(this instanceof s)) return new s(e);
                n.call(this, e), this._transformState = {
                    afterTransform: function (e, t) {
                        var r = this._transformState;
                        r.transforming = !1;
                        var n = r.writecb;
                        if (!n) return this.emit("error", new Error("write callback called multiple times"));
                        r.writechunk = null, (r.writecb = null) != t && this.push(t), n(e);
                        var i = this._readableState;
                        i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                    }.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", o)
            }

            function o() {
                var r = this;
                "function" == typeof this._flush ? this._flush(function (e, t) {
                    a(r, e, t)
                }) : a(this, null, null)
            }

            function a(e, t, r) {
                if (t) return e.emit("error", t);
                if (null != r && e.push(r), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");
                if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");
                return e.push(null)
            }
            i.inherits = e("inherits"), i.inherits(s, n), s.prototype.push = function (e, t) {
                return this._transformState.needTransform = !1, n.prototype.push.call(this, e, t)
            }, s.prototype._transform = function (e, t, r) {
                throw new Error("_transform() is not implemented")
            }, s.prototype._write = function (e, t, r) {
                var n = this._transformState;
                if (n.writecb = r, n.writechunk = e, n.writeencoding = t, !n.transforming) {
                    var i = this._readableState;
                    (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                }
            }, s.prototype._read = function (e) {
                var t = this._transformState;
                null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
            }, s.prototype._destroy = function (e, t) {
                var r = this;
                n.prototype._destroy.call(this, e, function (e) {
                    t(e), r.emit("close")
                })
            }
        }, {
            "./_stream_duplex": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_duplex.js",
            "core-util-is": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/core-util-is/lib/util.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_writable.js": [function (k, j, e) {
            (function (e, t, r) {
                "use strict";
                var m = k("process-nextick-args");

                function h(e) {
                    var t = this;
                    this.next = null, this.entry = null, this.finish = function () {
                        ! function (e, t, r) {
                            var n = e.entry;
                            e.entry = null;
                            for (; n;) {
                                var i = n.callback;
                                t.pendingcb--, i(r), n = n.next
                            }
                            t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
                        }(t, e)
                    }
                }
                j.exports = c;
                var a, l = !e.browser && -1 < ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) ? r : m.nextTick;
                c.WritableState = f;
                var n = k("core-util-is");
                n.inherits = k("inherits");
                var i = {
                        deprecate: k("util-deprecate")
                    },
                    s = k("./internal/streams/stream"),
                    y = k("safe-buffer").Buffer,
                    v = t.Uint8Array || function () {};
                var o, u = k("./internal/streams/destroy");

                function g() {}

                function f(e, t) {
                    a = a || k("./_stream_duplex"), e = e || {};
                    var r = t instanceof a;
                    this.objectMode = !!e.objectMode, r && (this.objectMode = this.objectMode || !!e.writableObjectMode);
                    var n = e.highWaterMark,
                        i = e.writableHighWaterMark,
                        s = this.objectMode ? 16 : 16384;
                    this.highWaterMark = n || 0 === n ? n : r && (i || 0 === i) ? i : s, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
                    var o = (this.destroyed = !1) === e.decodeStrings;
                    this.decodeStrings = !o, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
                        ! function (e, t) {
                            var r = e._writableState,
                                n = r.sync,
                                i = r.writecb;
                            if (h = r, h.writing = !1, h.writecb = null, h.length -= h.writelen, h.writelen = 0, t) o = e, a = r, u = n, f = t, c = i, --a.pendingcb, u ? (m.nextTick(c, f), m.nextTick(x, o, a), o._writableState.errorEmitted = !0, o.emit("error", f)) : (c(f), o._writableState.errorEmitted = !0, o.emit("error", f), x(o, a));
                            else {
                                var s = _(r);
                                s || r.corked || r.bufferProcessing || !r.bufferedRequest || p(e, r), n ? l(d, e, r, s, i) : d(e, r, s, i)
                            }
                            var o, a, u, f, c;
                            var h
                        }(t, e)
                    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new h(this)
                }

                function c(e) {
                    if (a = a || k("./_stream_duplex"), !(o.call(c, this) || this instanceof a)) return new c(e);
                    this._writableState = new f(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), s.call(this)
                }

                function w(e, t, r, n, i, s, o) {
                    t.writelen = n, t.writecb = o, t.writing = !0, t.sync = !0, r ? e._writev(i, t.onwrite) : e._write(i, s, t.onwrite), t.sync = !1
                }

                function d(e, t, r, n) {
                    var i, s;
                    r || (i = e, 0 === (s = t).length && s.needDrain && (s.needDrain = !1, i.emit("drain"))), t.pendingcb--, n(), x(e, t)
                }

                function p(e, t) {
                    t.bufferProcessing = !0;
                    var r = t.bufferedRequest;
                    if (e._writev && r && r.next) {
                        var n = t.bufferedRequestCount,
                            i = new Array(n),
                            s = t.corkedRequestsFree;
                        s.entry = r;
                        for (var o = 0, a = !0; r;)(i[o] = r).isBuf || (a = !1), r = r.next, o += 1;
                        i.allBuffers = a, w(e, t, !0, t.length, i, "", s.finish), t.pendingcb++, t.lastBufferedRequest = null, s.next ? (t.corkedRequestsFree = s.next, s.next = null) : t.corkedRequestsFree = new h(t), t.bufferedRequestCount = 0
                    } else {
                        for (; r;) {
                            var u = r.chunk,
                                f = r.encoding,
                                c = r.callback;
                            if (w(e, t, !1, t.objectMode ? 1 : u.length, u, f, c), r = r.next, t.bufferedRequestCount--, t.writing) break
                        }
                        null === r && (t.lastBufferedRequest = null)
                    }
                    t.bufferedRequest = r, t.bufferProcessing = !1
                }

                function _(e) {
                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                }

                function b(t, r) {
                    t._final(function (e) {
                        r.pendingcb--, e && t.emit("error", e), r.prefinished = !0, t.emit("prefinish"), x(t, r)
                    })
                }

                function x(e, t) {
                    var r, n, i = _(t);
                    return i && (r = e, (n = t).prefinished || n.finalCalled || ("function" == typeof r._final ? (n.pendingcb++, n.finalCalled = !0, m.nextTick(b, r, n)) : (n.prefinished = !0, r.emit("prefinish"))), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), i
                }
                n.inherits(c, s), f.prototype.getBuffer = function () {
                        for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                        return t
                    },
                    function () {
                        try {
                            Object.defineProperty(f.prototype, "buffer", {
                                get: i.deprecate(function () {
                                    return this.getBuffer()
                                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                            })
                        } catch (e) {}
                    }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (o = Function.prototype[Symbol.hasInstance], Object.defineProperty(c, Symbol.hasInstance, {
                        value: function (e) {
                            return !!o.call(this, e) || this === c && (e && e._writableState instanceof f)
                        }
                    })) : o = function (e) {
                        return e instanceof this
                    }, c.prototype.pipe = function () {
                        this.emit("error", new Error("Cannot pipe, not readable"))
                    }, c.prototype.write = function (e, t, r) {
                        var n, i, s, o, a, u, f, c, h, l, d, p = this._writableState,
                            _ = !1,
                            b = !p.objectMode && (n = e, y.isBuffer(n) || n instanceof v);
                        return b && !y.isBuffer(e) && (i = e, e = y.from(i)), "function" == typeof t && (r = t, t = null), b ? t = "buffer" : t || (t = p.defaultEncoding), "function" != typeof r && (r = g), p.ended ? (h = this, l = r, d = new Error("write after end"), h.emit("error", d), m.nextTick(l, d)) : (b || (s = this, o = p, u = r, c = !(f = !0), null === (a = e) ? c = new TypeError("May not write null values to stream") : "string" == typeof a || void 0 === a || o.objectMode || (c = new TypeError("Invalid non-string/buffer chunk")), c && (s.emit("error", c), m.nextTick(u, c), f = !1), f)) && (p.pendingcb++, _ = function (e, t, r, n, i, s) {
                            if (!r) {
                                var o = function (e, t, r) {
                                    e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = y.from(t, r));
                                    return t
                                }(t, n, i);
                                n !== o && (r = !0, i = "buffer", n = o)
                            }
                            var a = t.objectMode ? 1 : n.length;
                            t.length += a;
                            var u = t.length < t.highWaterMark;
                            u || (t.needDrain = !0);
                            if (t.writing || t.corked) {
                                var f = t.lastBufferedRequest;
                                t.lastBufferedRequest = {
                                    chunk: n,
                                    encoding: i,
                                    isBuf: r,
                                    callback: s,
                                    next: null
                                }, f ? f.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                            } else w(e, t, !1, a, n, i, s);
                            return u
                        }(this, p, b, e, t, r)), _
                    }, c.prototype.cork = function () {
                        this._writableState.corked++
                    }, c.prototype.uncork = function () {
                        var e = this._writableState;
                        e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || p(this, e))
                    }, c.prototype.setDefaultEncoding = function (e) {
                        if ("string" == typeof e && (e = e.toLowerCase()), !(-1 < ["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()))) throw new TypeError("Unknown encoding: " + e);
                        return this._writableState.defaultEncoding = e, this
                    }, Object.defineProperty(c.prototype, "writableHighWaterMark", {
                        enumerable: !1,
                        get: function () {
                            return this._writableState.highWaterMark
                        }
                    }), c.prototype._write = function (e, t, r) {
                        r(new Error("_write() is not implemented"))
                    }, c.prototype._writev = null, c.prototype.end = function (e, t, r) {
                        var n = this._writableState;
                        "function" == typeof e ? (r = e, t = e = null) : "function" == typeof t && (r = t, t = null), null != e && this.write(e, t), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || function (e, t, r) {
                            t.ending = !0, x(e, t), r && (t.finished ? m.nextTick(r) : e.once("finish", r));
                            t.ended = !0, e.writable = !1
                        }(this, n, r)
                    }, Object.defineProperty(c.prototype, "destroyed", {
                        get: function () {
                            return void 0 !== this._writableState && this._writableState.destroyed
                        },
                        set: function (e) {
                            this._writableState && (this._writableState.destroyed = e)
                        }
                    }), c.prototype.destroy = u.destroy, c.prototype._undestroy = u.undestroy, c.prototype._destroy = function (e, t) {
                        this.end(), t(e)
                    }
            }).call(this, k("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, k("timers").setImmediate)
        }, {
            "./_stream_duplex": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_duplex.js",
            "./internal/streams/destroy": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/internal/streams/destroy.js",
            "./internal/streams/stream": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/internal/streams/stream-browser.js",
            _process: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process/browser.js",
            "core-util-is": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/core-util-is/lib/util.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            "process-nextick-args": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process-nextick-args/index.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js",
            timers: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/timers-browserify/main.js",
            "util-deprecate": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/util-deprecate/browser.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/internal/streams/BufferList.js": [function (e, t, r) {
            "use strict";
            var a = e("safe-buffer").Buffer,
                n = e("util");
            t.exports = function () {
                function e() {
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.head = null, this.tail = null, this.length = 0
                }
                return e.prototype.push = function (e) {
                    var t = {
                        data: e,
                        next: null
                    };
                    0 < this.length ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                }, e.prototype.unshift = function (e) {
                    var t = {
                        data: e,
                        next: this.head
                    };
                    0 === this.length && (this.tail = t), this.head = t, ++this.length
                }, e.prototype.shift = function () {
                    if (0 !== this.length) {
                        var e = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                    }
                }, e.prototype.clear = function () {
                    this.head = this.tail = null, this.length = 0
                }, e.prototype.join = function (e) {
                    if (0 === this.length) return "";
                    for (var t = this.head, r = "" + t.data; t = t.next;) r += e + t.data;
                    return r
                }, e.prototype.concat = function (e) {
                    if (0 === this.length) return a.alloc(0);
                    if (1 === this.length) return this.head.data;
                    for (var t, r, n, i = a.allocUnsafe(e >>> 0), s = this.head, o = 0; s;) t = s.data, r = i, n = o, t.copy(r, n), o += s.data.length, s = s.next;
                    return i
                }, e
            }(), n && n.inspect && n.inspect.custom && (t.exports.prototype[n.inspect.custom] = function () {
                var e = n.inspect({
                    length: this.length
                });
                return this.constructor.name + " " + e
            })
        }, {
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js",
            util: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/browser-resolve/empty.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/internal/streams/destroy.js": [function (e, t, r) {
            "use strict";
            var s = e("process-nextick-args");

            function o(e, t) {
                e.emit("error", t)
            }
            t.exports = {
                destroy: function (e, t) {
                    var r = this,
                        n = this._readableState && this._readableState.destroyed,
                        i = this._writableState && this._writableState.destroyed;
                    return n || i ? t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || s.nextTick(o, this, e) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function (e) {
                        !t && e ? (s.nextTick(o, r, e), r._writableState && (r._writableState.errorEmitted = !0)) : t && t(e)
                    })), this
                },
                undestroy: function () {
                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                }
            }
        }, {
            "process-nextick-args": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process-nextick-args/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/internal/streams/stream-browser.js": [function (e, t, r) {
            t.exports = e("events").EventEmitter
        }, {
            events: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/events/events.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/passthrough.js": [function (e, t, r) {
            t.exports = e("./readable").PassThrough
        }, {
            "./readable": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/readable-browser.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/readable-browser.js": [function (e, t, r) {
            (((r = t.exports = e("./lib/_stream_readable.js")).Stream = r).Readable = r).Writable = e("./lib/_stream_writable.js"), r.Duplex = e("./lib/_stream_duplex.js"), r.Transform = e("./lib/_stream_transform.js"), r.PassThrough = e("./lib/_stream_passthrough.js")
        }, {
            "./lib/_stream_duplex.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_duplex.js",
            "./lib/_stream_passthrough.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_passthrough.js",
            "./lib/_stream_readable.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_readable.js",
            "./lib/_stream_transform.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_transform.js",
            "./lib/_stream_writable.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_writable.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/transform.js": [function (e, t, r) {
            t.exports = e("./readable").Transform
        }, {
            "./readable": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/readable-browser.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/writable-browser.js": [function (e, t, r) {
            t.exports = e("./lib/_stream_writable.js")
        }, {
            "./lib/_stream_writable.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/lib/_stream_writable.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/regenerator-runtime/runtime-module.js": [function (e, t, r) {
            var n = function () {
                    return this || "object" == typeof self && self
                }() || Function("return this")(),
                i = n.regeneratorRuntime && 0 <= Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime"),
                s = i && n.regeneratorRuntime;
            if (n.regeneratorRuntime = void 0, t.exports = e("./runtime"), i) n.regeneratorRuntime = s;
            else try {
                delete n.regeneratorRuntime
            } catch (e) {
                n.regeneratorRuntime = void 0
            }
        }, {
            "./runtime": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/regenerator-runtime/runtime.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/regenerator-runtime/runtime.js": [function (e, O, t) {
            ! function (e) {
                "use strict";
                var u, t = Object.prototype,
                    f = t.hasOwnProperty,
                    r = "function" == typeof Symbol ? Symbol : {},
                    i = r.iterator || "@@iterator",
                    n = r.asyncIterator || "@@asyncIterator",
                    s = r.toStringTag || "@@toStringTag",
                    o = "object" == typeof O,
                    a = e.regeneratorRuntime;
                if (a) o && (O.exports = a);
                else {
                    (a = e.regeneratorRuntime = o ? O.exports : {}).wrap = v;
                    var h = "suspendedStart",
                        l = "suspendedYield",
                        d = "executing",
                        p = "completed",
                        _ = {},
                        c = {};
                    c[i] = function () {
                        return this
                    };
                    var b = Object.getPrototypeOf,
                        m = b && b(b(I([])));
                    m && m !== t && f.call(m, i) && (c = m);
                    var y = k.prototype = w.prototype = Object.create(c);
                    x.prototype = y.constructor = k, k.constructor = x, k[s] = x.displayName = "GeneratorFunction", a.isGeneratorFunction = function (e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === x || "GeneratorFunction" === (t.displayName || t.name))
                    }, a.mark = function (e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, k) : (e.__proto__ = k, s in e || (e[s] = "GeneratorFunction")), e.prototype = Object.create(y), e
                    }, a.awrap = function (e) {
                        return {
                            __await: e
                        }
                    }, j(E.prototype), E.prototype[n] = function () {
                        return this
                    }, a.AsyncIterator = E, a.async = function (e, t, r, n) {
                        var i = new E(v(e, t, r, n));
                        return a.isGeneratorFunction(t) ? i : i.next().then(function (e) {
                            return e.done ? e.value : i.next()
                        })
                    }, j(y), y[s] = "Generator", y[i] = function () {
                        return this
                    }, y.toString = function () {
                        return "[object Generator]"
                    }, a.keys = function (r) {
                        var n = [];
                        for (var e in r) n.push(e);
                        return n.reverse(),
                            function e() {
                                for (; n.length;) {
                                    var t = n.pop();
                                    if (t in r) return e.value = t, e.done = !1, e
                                }
                                return e.done = !0, e
                            }
                    }, a.values = I, T.prototype = {
                        constructor: T,
                        reset: function (e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = u, this.done = !1, this.delegate = null, this.method = "next", this.arg = u, this.tryEntries.forEach(B), !e)
                                for (var t in this) "t" === t.charAt(0) && f.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = u)
                        },
                        stop: function () {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function (r) {
                            if (this.done) throw r;
                            var n = this;

                            function e(e, t) {
                                return s.type = "throw", s.arg = r, n.next = e, t && (n.method = "next", n.arg = u), !!t
                            }
                            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                                var i = this.tryEntries[t],
                                    s = i.completion;
                                if ("root" === i.tryLoc) return e("end");
                                if (i.tryLoc <= this.prev) {
                                    var o = f.call(i, "catchLoc"),
                                        a = f.call(i, "finallyLoc");
                                    if (o && a) {
                                        if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                                    } else if (o) {
                                        if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
                                    } else {
                                        if (!a) throw new Error("try statement without catch or finally");
                                        if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function (e, t) {
                            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                                var n = this.tryEntries[r];
                                if (n.tryLoc <= this.prev && f.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                    var i = n;
                                    break
                                }
                            }
                            i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                            var s = i ? i.completion : {};
                            return s.type = e, s.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, _) : this.complete(s)
                        },
                        complete: function (e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), _
                        },
                        finish: function (e) {
                            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                                var r = this.tryEntries[t];
                                if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), B(r), _
                            }
                        },
                        catch: function (e) {
                            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                                var r = this.tryEntries[t];
                                if (r.tryLoc === e) {
                                    var n = r.completion;
                                    if ("throw" === n.type) {
                                        var i = n.arg;
                                        B(r)
                                    }
                                    return i
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function (e, t, r) {
                            return this.delegate = {
                                iterator: I(e),
                                resultName: t,
                                nextLoc: r
                            }, "next" === this.method && (this.arg = u), _
                        }
                    }
                }

                function v(e, t, r, n) {
                    var s, o, a, u, i = t && t.prototype instanceof w ? t : w,
                        f = Object.create(i.prototype),
                        c = new T(n || []);
                    return f._invoke = (s = e, o = r, a = c, u = h, function (e, t) {
                        if (u === d) throw new Error("Generator is already running");
                        if (u === p) {
                            if ("throw" === e) throw t;
                            return A()
                        }
                        for (a.method = e, a.arg = t;;) {
                            var r = a.delegate;
                            if (r) {
                                var n = z(r, a);
                                if (n) {
                                    if (n === _) continue;
                                    return n
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if (u === h) throw u = p, a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            u = d;
                            var i = g(s, o, a);
                            if ("normal" === i.type) {
                                if (u = a.done ? p : l, i.arg === _) continue;
                                return {
                                    value: i.arg,
                                    done: a.done
                                }
                            }
                            "throw" === i.type && (u = p, a.method = "throw", a.arg = i.arg)
                        }
                    }), f
                }

                function g(e, t, r) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, r)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }

                function w() {}

                function x() {}

                function k() {}

                function j(e) {
                    ["next", "throw", "return"].forEach(function (t) {
                        e[t] = function (e) {
                            return this._invoke(t, e)
                        }
                    })
                }

                function E(u) {
                    var t;
                    this._invoke = function (r, n) {
                        function e() {
                            return new Promise(function (e, t) {
                                ! function t(e, r, n, i) {
                                    var s = g(u[e], u, r);
                                    if ("throw" !== s.type) {
                                        var o = s.arg,
                                            a = o.value;
                                        return a && "object" == typeof a && f.call(a, "__await") ? Promise.resolve(a.__await).then(function (e) {
                                            t("next", e, n, i)
                                        }, function (e) {
                                            t("throw", e, n, i)
                                        }) : Promise.resolve(a).then(function (e) {
                                            o.value = e, n(o)
                                        }, function (e) {
                                            return t("throw", e, n, i)
                                        })
                                    }
                                    i(s.arg)
                                }(r, n, e, t)
                            })
                        }
                        return t = t ? t.then(e, e) : e()
                    }
                }

                function z(e, t) {
                    var r = e.iterator[t.method];
                    if (r === u) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = u, z(e, t), "throw" === t.method)) return _;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return _
                    }
                    var n = g(r, e.iterator, t.arg);
                    if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, _;
                    var i = n.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = u), t.delegate = null, _) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, _)
                }

                function S(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function B(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function T(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(S, this), this.reset(!0)
                }

                function I(t) {
                    if (t) {
                        var e = t[i];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var r = -1,
                                n = function e() {
                                    for (; ++r < t.length;)
                                        if (f.call(t, r)) return e.value = t[r], e.done = !1, e;
                                    return e.value = u, e.done = !0, e
                                };
                            return n.next = n
                        }
                    }
                    return {
                        next: A
                    }
                }

                function A() {
                    return {
                        value: u,
                        done: !0
                    }
                }
            }(function () {
                return this || "object" == typeof self && self
            }() || Function("return this")())
        }, {}],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/ripemd160/index.js": [function (e, t, r) {
            "use strict";
            var n = e("buffer").Buffer,
                i = e("inherits"),
                s = e("hash-base"),
                b = new Array(16),
                m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
                y = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
                v = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
                g = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
                w = [0, 1518500249, 1859775393, 2400959708, 2840853838],
                x = [1352829926, 1548603684, 1836072691, 2053994217, 0];

            function o() {
                s.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
            }

            function k(e, t) {
                return e << t | e >>> 32 - t
            }

            function j(e, t, r, n, i, s, o, a) {
                return k(e + (t ^ r ^ n) + s + o | 0, a) + i | 0
            }

            function E(e, t, r, n, i, s, o, a) {
                return k(e + (t & r | ~t & n) + s + o | 0, a) + i | 0
            }

            function z(e, t, r, n, i, s, o, a) {
                return k(e + ((t | ~r) ^ n) + s + o | 0, a) + i | 0
            }

            function S(e, t, r, n, i, s, o, a) {
                return k(e + (t & n | r & ~n) + s + o | 0, a) + i | 0
            }

            function B(e, t, r, n, i, s, o, a) {
                return k(e + (t ^ (r | ~n)) + s + o | 0, a) + i | 0
            }
            i(o, s), o.prototype._update = function () {
                for (var e = b, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
                for (var r = 0 | this._a, n = 0 | this._b, i = 0 | this._c, s = 0 | this._d, o = 0 | this._e, a = 0 | this._a, u = 0 | this._b, f = 0 | this._c, c = 0 | this._d, h = 0 | this._e, l = 0; l < 80; l += 1) {
                    var d, p;
                    p = l < 16 ? (d = j(r, n, i, s, o, e[m[l]], w[0], v[l]), B(a, u, f, c, h, e[y[l]], x[0], g[l])) : l < 32 ? (d = E(r, n, i, s, o, e[m[l]], w[1], v[l]), S(a, u, f, c, h, e[y[l]], x[1], g[l])) : l < 48 ? (d = z(r, n, i, s, o, e[m[l]], w[2], v[l]), z(a, u, f, c, h, e[y[l]], x[2], g[l])) : l < 64 ? (d = S(r, n, i, s, o, e[m[l]], w[3], v[l]), E(a, u, f, c, h, e[y[l]], x[3], g[l])) : (d = B(r, n, i, s, o, e[m[l]], w[4], v[l]), j(a, u, f, c, h, e[y[l]], x[4], g[l])), r = o, o = s, s = k(i, 10), i = n, n = d, a = h, h = c, c = k(f, 10), f = u, u = p
                }
                var _ = this._b + i + c | 0;
                this._b = this._c + s + h | 0, this._c = this._d + o + a | 0, this._d = this._e + r + u | 0, this._e = this._a + n + f | 0, this._a = _
            }, o.prototype._digest = function () {
                this._block[this._blockOffset++] = 128, 56 < this._blockOffset && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
                var e = n.alloc ? n.alloc(20) : new n(20);
                return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e.writeInt32LE(this._e, 16), e
            }, t.exports = o
        }, {
            buffer: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/buffer/index.js",
            "hash-base": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/hash-base/index.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js": [function (e, t, r) {
            var n = e("buffer"),
                i = n.Buffer;

            function s(e, t) {
                for (var r in e) t[r] = e[r]
            }

            function o(e, t, r) {
                return i(e, t, r)
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (s(n, r), r.Buffer = o), s(i, o), o.from = function (e, t, r) {
                if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                return i(e, t, r)
            }, o.alloc = function (e, t, r) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                var n = i(e);
                return void 0 !== t ? "string" == typeof r ? n.fill(t, r) : n.fill(t) : n.fill(0), n
            }, o.allocUnsafe = function (e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return i(e)
            }, o.allocUnsafeSlow = function (e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return n.SlowBuffer(e)
            }
        }, {
            buffer: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/secure-random/lib/secure-random.js": [function (s, i, e) {
            (function (r, n) {
                ! function (e) {
                    "use strict";

                    function t(e, t) {
                        if (t = t || {
                                type: "Array"
                            }, void 0 !== r && "number" == typeof r.pid) return function (e, t) {
                            var r = s("crypto").randomBytes(e);
                            switch (t.type) {
                                case "Array":
                                    return [].slice.call(r);
                                case "Buffer":
                                    return r;
                                case "Uint8Array":
                                    for (var n = new Uint8Array(e), i = 0; i < e; ++i) n[i] = r.readUInt8(i);
                                    return n;
                                default:
                                    throw new Error(t.type + " is unsupported.")
                            }
                        }(e, t);
                        if (!(window.crypto || window.msCrypto)) throw new Error("Your browser does not support window.crypto.");
                        return function (e, t) {
                            var r = new Uint8Array(e);
                            switch ((window.crypto || window.msCrypto).getRandomValues(r), t.type) {
                                case "Array":
                                    return [].slice.call(r);
                                case "Buffer":
                                    try {
                                        new n(1)
                                    } catch (e) {
                                        throw new Error("Buffer not supported in this environment. Use Node.js or Browserify for browser support.")
                                    }
                                    return new n(r);
                                case "Uint8Array":
                                    return r;
                                default:
                                    throw new Error(t.type + " is unsupported.")
                            }
                        }(e, t)
                    }
                    void 0 !== i && i.exports ? i.exports = t : e.secureRandom = t, t.randomArray = function (e) {
                        return t(e, {
                            type: "Array"
                        })
                    }, t.randomUint8Array = function (e) {
                        return t(e, {
                            type: "Uint8Array"
                        })
                    }, t.randomBuffer = function (e) {
                        return t(e, {
                            type: "Buffer"
                        })
                    }
                }(this)
            }).call(this, s("_process"), s("buffer").Buffer)
        }, {
            _process: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process/browser.js",
            buffer: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/buffer/index.js",
            crypto: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/browser-resolve/empty.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/hash.js": [function (e, t, r) {
            var c = e("safe-buffer").Buffer;

            function n(e, t) {
                this._block = c.alloc(e), this._finalSize = t, this._blockSize = e, this._len = 0
            }
            n.prototype.update = function (e, t) {
                "string" == typeof e && (t = t || "utf8", e = c.from(e, t));
                for (var r = this._block, n = this._blockSize, i = e.length, s = this._len, o = 0; o < i;) {
                    for (var a = s % n, u = Math.min(i - o, n - a), f = 0; f < u; f++) r[a + f] = e[o + f];
                    o += u, (s += u) % n == 0 && this._update(r)
                }
                return this._len += i, this
            }, n.prototype.digest = function (e) {
                var t = this._len % this._blockSize;
                this._block[t] = 128, this._block.fill(0, t + 1), t >= this._finalSize && (this._update(this._block), this._block.fill(0));
                var r = 8 * this._len;
                if (r <= 4294967295) this._block.writeUInt32BE(r, this._blockSize - 4);
                else {
                    var n = (4294967295 & r) >>> 0,
                        i = (r - n) / 4294967296;
                    this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4)
                }
                this._update(this._block);
                var s = this._hash();
                return e ? s.toString(e) : s
            }, n.prototype._update = function () {
                throw new Error("_update must be implemented by subclass")
            }, t.exports = n
        }, {
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/index.js": [function (e, t, r) {
            (r = t.exports = function (e) {
                e = e.toLowerCase();
                var t = r[e];
                if (!t) throw new Error(e + " is not supported (we accept pull requests)");
                return new t
            }).sha = e("./sha"), r.sha1 = e("./sha1"), r.sha224 = e("./sha224"), r.sha256 = e("./sha256"), r.sha384 = e("./sha384"), r.sha512 = e("./sha512")
        }, {
            "./sha": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/sha.js",
            "./sha1": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/sha1.js",
            "./sha224": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/sha224.js",
            "./sha256": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/sha256.js",
            "./sha384": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/sha384.js",
            "./sha512": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/sha512.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/sha.js": [function (e, t, r) {
            var n = e("inherits"),
                i = e("./hash"),
                s = e("safe-buffer").Buffer,
                m = [1518500249, 1859775393, -1894007588, -899497514],
                o = new Array(80);

            function a() {
                this.init(), this._w = o, i.call(this, 64, 56)
            }
            n(a, i), a.prototype.init = function () {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, a.prototype._update = function (e) {
                for (var t, r, n, i, s, o, a = this._w, u = 0 | this._a, f = 0 | this._b, c = 0 | this._c, h = 0 | this._d, l = 0 | this._e, d = 0; d < 16; ++d) a[d] = e.readInt32BE(4 * d);
                for (; d < 80; ++d) a[d] = a[d - 3] ^ a[d - 8] ^ a[d - 14] ^ a[d - 16];
                for (var p = 0; p < 80; ++p) {
                    var _ = ~~(p / 20),
                        b = 0 | ((o = u) << 5 | o >>> 27) + (n = f, i = c, s = h, 0 === (r = _) ? n & i | ~n & s : 2 === r ? n & i | n & s | i & s : n ^ i ^ s) + l + a[p] + m[_];
                    l = h, h = c, c = (t = f) << 30 | t >>> 2, f = u, u = b
                }
                this._a = u + this._a | 0, this._b = f + this._b | 0, this._c = c + this._c | 0, this._d = h + this._d | 0, this._e = l + this._e | 0
            }, a.prototype._hash = function () {
                var e = s.allocUnsafe(20);
                return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
            }, t.exports = a
        }, {
            "./hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/hash.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/sha1.js": [function (e, t, r) {
            var n = e("inherits"),
                i = e("./hash"),
                s = e("safe-buffer").Buffer,
                y = [1518500249, 1859775393, -1894007588, -899497514],
                o = new Array(80);

            function a() {
                this.init(), this._w = o, i.call(this, 64, 56)
            }
            n(a, i), a.prototype.init = function () {
                return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
            }, a.prototype._update = function (e) {
                for (var t, r, n, i, s, o, a, u = this._w, f = 0 | this._a, c = 0 | this._b, h = 0 | this._c, l = 0 | this._d, d = 0 | this._e, p = 0; p < 16; ++p) u[p] = e.readInt32BE(4 * p);
                for (; p < 80; ++p) u[p] = (t = u[p - 3] ^ u[p - 8] ^ u[p - 14] ^ u[p - 16]) << 1 | t >>> 31;
                for (var _ = 0; _ < 80; ++_) {
                    var b = ~~(_ / 20),
                        m = 0 | ((a = f) << 5 | a >>> 27) + (i = c, s = h, o = l, 0 === (n = b) ? i & s | ~i & o : 2 === n ? i & s | i & o | s & o : i ^ s ^ o) + d + u[_] + y[b];
                    d = l, l = h, h = (r = c) << 30 | r >>> 2, c = f, f = m
                }
                this._a = f + this._a | 0, this._b = c + this._b | 0, this._c = h + this._c | 0, this._d = l + this._d | 0, this._e = d + this._e | 0
            }, a.prototype._hash = function () {
                var e = s.allocUnsafe(20);
                return e.writeInt32BE(0 | this._a, 0), e.writeInt32BE(0 | this._b, 4), e.writeInt32BE(0 | this._c, 8), e.writeInt32BE(0 | this._d, 12), e.writeInt32BE(0 | this._e, 16), e
            }, t.exports = a
        }, {
            "./hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/hash.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/sha224.js": [function (e, t, r) {
            var n = e("inherits"),
                i = e("./sha256"),
                s = e("./hash"),
                o = e("safe-buffer").Buffer,
                a = new Array(64);

            function u() {
                this.init(), this._w = a, s.call(this, 64, 56)
            }
            n(u, i), u.prototype.init = function () {
                return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
            }, u.prototype._hash = function () {
                var e = o.allocUnsafe(28);
                return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
            }, t.exports = u
        }, {
            "./hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/hash.js",
            "./sha256": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/sha256.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/sha256.js": [function (e, t, r) {
            var n = e("inherits"),
                i = e("./hash"),
                s = e("safe-buffer").Buffer,
                w = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                o = new Array(64);

            function a() {
                this.init(), this._w = o, i.call(this, 64, 56)
            }
            n(a, i), a.prototype.init = function () {
                return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
            }, a.prototype._update = function (e) {
                for (var t, r, n, i, s, o, a, u = this._w, f = 0 | this._a, c = 0 | this._b, h = 0 | this._c, l = 0 | this._d, d = 0 | this._e, p = 0 | this._f, _ = 0 | this._g, b = 0 | this._h, m = 0; m < 16; ++m) u[m] = e.readInt32BE(4 * m);
                for (; m < 64; ++m) u[m] = 0 | (((r = u[m - 2]) >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10) + u[m - 7] + (((t = u[m - 15]) >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3) + u[m - 16];
                for (var y = 0; y < 64; ++y) {
                    var v = b + (((a = d) >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)) + ((o = _) ^ d & (p ^ o)) + w[y] + u[y] | 0,
                        g = 0 | (((s = f) >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + ((n = f) & (i = c) | h & (n | i));
                    b = _, _ = p, p = d, d = l + v | 0, l = h, h = c, c = f, f = v + g | 0
                }
                this._a = f + this._a | 0, this._b = c + this._b | 0, this._c = h + this._c | 0, this._d = l + this._d | 0, this._e = d + this._e | 0, this._f = p + this._f | 0, this._g = _ + this._g | 0, this._h = b + this._h | 0
            }, a.prototype._hash = function () {
                var e = s.allocUnsafe(32);
                return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
            }, t.exports = a
        }, {
            "./hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/hash.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/sha384.js": [function (e, t, r) {
            var n = e("inherits"),
                i = e("./sha512"),
                s = e("./hash"),
                o = e("safe-buffer").Buffer,
                a = new Array(160);

            function u() {
                this.init(), this._w = a, s.call(this, 128, 112)
            }
            n(u, i), u.prototype.init = function () {
                return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
            }, u.prototype._hash = function () {
                var n = o.allocUnsafe(48);

                function e(e, t, r) {
                    n.writeInt32BE(e, r), n.writeInt32BE(t, r + 4)
                }
                return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), n
            }, t.exports = u
        }, {
            "./hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/hash.js",
            "./sha512": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/sha512.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/sha512.js": [function (e, t, r) {
            var n = e("inherits"),
                i = e("./hash"),
                s = e("safe-buffer").Buffer,
                ee = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
                o = new Array(160);

            function a() {
                this.init(), this._w = o, i.call(this, 128, 112)
            }

            function te(e, t, r) {
                return r ^ e & (t ^ r)
            }

            function re(e, t, r) {
                return e & t | r & (e | t)
            }

            function ne(e, t) {
                return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
            }

            function ie(e, t) {
                return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
            }

            function se(e, t) {
                return e >>> 0 < t >>> 0 ? 1 : 0
            }
            n(a, i), a.prototype.init = function () {
                return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
            }, a.prototype._update = function (e) {
                for (var t, r, n, i, s, o, a, u, f = this._w, c = 0 | this._ah, h = 0 | this._bh, l = 0 | this._ch, d = 0 | this._dh, p = 0 | this._eh, _ = 0 | this._fh, b = 0 | this._gh, m = 0 | this._hh, y = 0 | this._al, v = 0 | this._bl, g = 0 | this._cl, w = 0 | this._dl, x = 0 | this._el, k = 0 | this._fl, j = 0 | this._gl, E = 0 | this._hl, z = 0; z < 32; z += 2) f[z] = e.readInt32BE(4 * z), f[z + 1] = e.readInt32BE(4 * z + 4);
                for (; z < 160; z += 2) {
                    var S = f[z - 30],
                        B = f[z - 30 + 1],
                        T = ((a = S) >>> 1 | (u = B) << 31) ^ (a >>> 8 | u << 24) ^ a >>> 7,
                        I = ((s = B) >>> 1 | (o = S) << 31) ^ (s >>> 8 | o << 24) ^ (s >>> 7 | o << 25);
                    S = f[z - 4], B = f[z - 4 + 1];
                    var A = ((n = S) >>> 19 | (i = B) << 13) ^ (i >>> 29 | n << 3) ^ n >>> 6,
                        O = ((t = B) >>> 19 | (r = S) << 13) ^ (r >>> 29 | t << 3) ^ (t >>> 6 | r << 26),
                        C = f[z - 14],
                        M = f[z - 14 + 1],
                        L = f[z - 32],
                        q = f[z - 32 + 1],
                        D = I + M | 0,
                        U = T + C + se(D, I) | 0;
                    U = (U = U + A + se(D = D + O | 0, O) | 0) + L + se(D = D + q | 0, q) | 0, f[z] = U, f[z + 1] = D
                }
                for (var R = 0; R < 160; R += 2) {
                    U = f[R], D = f[R + 1];
                    var P = re(c, h, l),
                        N = re(y, v, g),
                        F = ne(c, y),
                        K = ne(y, c),
                        H = ie(p, x),
                        V = ie(x, p),
                        W = ee[R],
                        G = ee[R + 1],
                        Z = te(p, _, b),
                        J = te(x, k, j),
                        $ = E + V | 0,
                        Y = m + H + se($, E) | 0;
                    Y = (Y = (Y = Y + Z + se($ = $ + J | 0, J) | 0) + W + se($ = $ + G | 0, G) | 0) + U + se($ = $ + D | 0, D) | 0;
                    var X = K + N | 0,
                        Q = F + P + se(X, K) | 0;
                    m = b, E = j, b = _, j = k, _ = p, k = x, p = d + Y + se(x = w + $ | 0, w) | 0, d = l, w = g, l = h, g = v, h = c, v = y, c = Y + Q + se(y = $ + X | 0, $) | 0
                }
                this._al = this._al + y | 0, this._bl = this._bl + v | 0, this._cl = this._cl + g | 0, this._dl = this._dl + w | 0, this._el = this._el + x | 0, this._fl = this._fl + k | 0, this._gl = this._gl + j | 0, this._hl = this._hl + E | 0, this._ah = this._ah + c + se(this._al, y) | 0, this._bh = this._bh + h + se(this._bl, v) | 0, this._ch = this._ch + l + se(this._cl, g) | 0, this._dh = this._dh + d + se(this._dl, w) | 0, this._eh = this._eh + p + se(this._el, x) | 0, this._fh = this._fh + _ + se(this._fl, k) | 0, this._gh = this._gh + b + se(this._gl, j) | 0, this._hh = this._hh + m + se(this._hl, E) | 0
            }, a.prototype._hash = function () {
                var n = s.allocUnsafe(64);

                function e(e, t, r) {
                    n.writeInt32BE(e, r), n.writeInt32BE(t, r + 4)
                }
                return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), n
            }, t.exports = a
        }, {
            "./hash": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/sha.js/hash.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/stream-browserify/index.js": [function (e, t, r) {
            t.exports = n;
            var c = e("events").EventEmitter;

            function n() {
                c.call(this)
            }
            e("inherits")(n, c), n.Readable = e("readable-stream/readable.js"), n.Writable = e("readable-stream/writable.js"), n.Duplex = e("readable-stream/duplex.js"), n.Transform = e("readable-stream/transform.js"), n.PassThrough = e("readable-stream/passthrough.js"), (n.Stream = n).prototype.pipe = function (t, e) {
                var r = this;

                function n(e) {
                    t.writable && !1 === t.write(e) && r.pause && r.pause()
                }

                function i() {
                    r.readable && r.resume && r.resume()
                }
                r.on("data", n), t.on("drain", i), t._isStdio || e && !1 === e.end || (r.on("end", o), r.on("close", a));
                var s = !1;

                function o() {
                    s || (s = !0, t.end())
                }

                function a() {
                    s || (s = !0, "function" == typeof t.destroy && t.destroy())
                }

                function u(e) {
                    if (f(), 0 === c.listenerCount(this, "error")) throw e
                }

                function f() {
                    r.removeListener("data", n), t.removeListener("drain", i), r.removeListener("end", o), r.removeListener("close", a), r.removeListener("error", u), t.removeListener("error", u), r.removeListener("end", f), r.removeListener("close", f), t.removeListener("close", f)
                }
                return r.on("error", u), t.on("error", u), r.on("end", f), r.on("close", f), t.on("close", f), t.emit("pipe", r), t
            }
        }, {
            events: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/events/events.js",
            inherits: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/inherits/inherits_browser.js",
            "readable-stream/duplex.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/duplex-browser.js",
            "readable-stream/passthrough.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/passthrough.js",
            "readable-stream/readable.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/readable-browser.js",
            "readable-stream/transform.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/transform.js",
            "readable-stream/writable.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/readable-stream/writable-browser.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/string_decoder/lib/string_decoder.js": [function (e, t, r) {
            "use strict";
            var n = e("safe-buffer").Buffer,
                i = n.isEncoding || function (e) {
                    switch ((e = "" + e) && e.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                            return !0;
                        default:
                            return !1
                    }
                };

            function s(e) {
                var t;
                switch (this.encoding = function (e) {
                    var t = function (e) {
                        if (!e) return "utf8";
                        for (var t;;) switch (e) {
                            case "utf8":
                            case "utf-8":
                                return "utf8";
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return "utf16le";
                            case "latin1":
                            case "binary":
                                return "latin1";
                            case "base64":
                            case "ascii":
                            case "hex":
                                return e;
                            default:
                                if (t) return;
                                e = ("" + e).toLowerCase(), t = !0
                        }
                    }(e);
                    if ("string" != typeof t && (n.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
                    return t || e
                }(e), this.encoding) {
                    case "utf16le":
                        this.text = u, this.end = f, t = 4;
                        break;
                    case "utf8":
                        this.fillLast = a, t = 4;
                        break;
                    case "base64":
                        this.text = c, this.end = h, t = 3;
                        break;
                    default:
                        return this.write = l, void(this.end = d)
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(t)
            }

            function o(e) {
                return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
            }

            function a(e) {
                var t = this.lastTotal - this.lastNeed,
                    r = function (e, t, r) {
                        if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
                        if (1 < e.lastNeed && 1 < t.length) {
                            if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                            if (2 < e.lastNeed && 2 < t.length && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
                        }
                    }(this, e);
                return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
            }

            function u(e, t) {
                if ((e.length - t) % 2 != 0) return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
                var r = e.toString("utf16le", t);
                if (r) {
                    var n = r.charCodeAt(r.length - 1);
                    if (55296 <= n && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
                }
                return r
            }

            function f(e) {
                var t = e && e.length ? this.write(e) : "";
                if (this.lastNeed) {
                    var r = this.lastTotal - this.lastNeed;
                    return t + this.lastChar.toString("utf16le", 0, r)
                }
                return t
            }

            function c(e, t) {
                var r = (e.length - t) % 3;
                return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
            }

            function h(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
            }

            function l(e) {
                return e.toString(this.encoding)
            }

            function d(e) {
                return e && e.length ? this.write(e) : ""
            }(r.StringDecoder = s).prototype.write = function (e) {
                if (0 === e.length) return "";
                var t, r;
                if (this.lastNeed) {
                    if (void 0 === (t = this.fillLast(e))) return "";
                    r = this.lastNeed, this.lastNeed = 0
                } else r = 0;
                return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
            }, s.prototype.end = function (e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + "�" : t
            }, s.prototype.text = function (e, t) {
                var r = function (e, t, r) {
                    var n = t.length - 1;
                    if (n < r) return 0;
                    var i = o(t[n]);
                    if (0 <= i) return 0 < i && (e.lastNeed = i - 1), i;
                    if (--n < r || -2 === i) return 0;
                    if (0 <= (i = o(t[n]))) return 0 < i && (e.lastNeed = i - 2), i;
                    if (--n < r || -2 === i) return 0;
                    if (0 <= (i = o(t[n]))) return 0 < i && (2 === i ? i = 0 : e.lastNeed = i - 3), i;
                    return 0
                }(this, e, t);
                if (!this.lastNeed) return e.toString("utf8", t);
                this.lastTotal = r;
                var n = e.length - (r - this.lastNeed);
                return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n)
            }, s.prototype.fillLast = function (e) {
                if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
            }
        }, {
            "safe-buffer": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/safe-buffer/index.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/timers-browserify/main.js": [function (u, e, f) {
            (function (e, t) {
                var n = u("process/browser.js").nextTick,
                    r = Function.prototype.apply,
                    i = Array.prototype.slice,
                    s = {},
                    o = 0;

                function a(e, t) {
                    this._id = e, this._clearFn = t
                }
                f.setTimeout = function () {
                    return new a(r.call(setTimeout, window, arguments), clearTimeout)
                }, f.setInterval = function () {
                    return new a(r.call(setInterval, window, arguments), clearInterval)
                }, f.clearTimeout = f.clearInterval = function (e) {
                    e.close()
                }, a.prototype.unref = a.prototype.ref = function () {}, a.prototype.close = function () {
                    this._clearFn.call(window, this._id)
                }, f.enroll = function (e, t) {
                    clearTimeout(e._idleTimeoutId), e._idleTimeout = t
                }, f.unenroll = function (e) {
                    clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
                }, f._unrefActive = f.active = function (e) {
                    clearTimeout(e._idleTimeoutId);
                    var t = e._idleTimeout;
                    0 <= t && (e._idleTimeoutId = setTimeout(function () {
                        e._onTimeout && e._onTimeout()
                    }, t))
                }, f.setImmediate = "function" == typeof e ? e : function (e) {
                    var t = o++,
                        r = !(arguments.length < 2) && i.call(arguments, 1);
                    return s[t] = !0, n(function () {
                        s[t] && (r ? e.apply(null, r) : e.call(null), f.clearImmediate(t))
                    }), t
                }, f.clearImmediate = "function" == typeof t ? t : function (e) {
                    delete s[e]
                }
            }).call(this, u("timers").setImmediate, u("timers").clearImmediate)
        }, {
            "process/browser.js": "/home/nozdrin/workspace/bitshares/btsdex/node_modules/process/browser.js",
            timers: "/home/nozdrin/workspace/bitshares/btsdex/node_modules/timers-browserify/main.js"
        }],
        "/home/nozdrin/workspace/bitshares/btsdex/node_modules/util-deprecate/browser.js": [function (e, t, r) {
            (function (r) {
                function n(e) {
                    try {
                        if (!r.localStorage) return !1
                    } catch (e) {
                        return !1
                    }
                    var t = r.localStorage[e];
                    return null != t && "true" === String(t).toLowerCase()
                }
                t.exports = function (e, t) {
                    if (n("noDeprecation")) return e;
                    var r = !1;
                    return function () {
                        if (!r) {
                            if (n("throwDeprecation")) throw new Error(t);
                            n("traceDeprecation") ? console.trace(t) : console.warn(t), r = !0
                        }
                        return e.apply(this, arguments)
                    }
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}]
    }, {}, ["/home/nozdrin/workspace/bitshares/btsdex/index.js"])("/home/nozdrin/workspace/bitshares/btsdex/index.js")
});