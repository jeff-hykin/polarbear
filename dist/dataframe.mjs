var dfjs = function(t) {
    "use strict";
    var n = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function e(t, n) {
        return t(n = {
            exports: {}
        }, n.exports), n.exports
    }

    function r(t) {
        return t && t.Math == Math && t
    }

    function d(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }

    function g(t, n) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: n
        }
    }

    function o(t) {
        return j.call(t).slice(8, -1)
    }

    function l(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }

    function f(t) {
        return A(l(t))
    }

    function m(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }

    function s(t, n) {
        if (!m(t)) return t;
        var e, r;
        if (n && "function" == typeof(e = t.toString) && !m(r = e.call(t))) return r;
        if ("function" == typeof(e = t.valueOf) && !m(r = e.call(t))) return r;
        if (!n && "function" == typeof(e = t.toString) && !m(r = e.call(t))) return r;
        throw TypeError("Can't convert object to primitive value")
    }

    function h(t, n) {
        return I.call(t, n)
    }

    function i(t) {
        return N ? T.createElement(t) : {}
    }

    function k(t) {
        if (!m(t)) throw TypeError(String(t) + " is not an object");
        return t
    }

    function v(n, e) {
        try {
            D(b, n, e)
        } catch (t) {
            b[n] = e
        }
        return e
    }

    function a(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++U + z).toString(36)
    }

    function u(t) {
        return q[t] || (q[t] = a(t))
    }
    var c, p, y, w = "object",
        b = r(typeof globalThis == w && globalThis) || r(typeof window == w && window) || r(typeof self == w && self) || r(typeof n == w && n) || Function("return this")(),
        S = !d(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        O = {}.propertyIsEnumerable,
        _ = Object.getOwnPropertyDescriptor,
        x = {
            f: _ && !O.call({
                1: 2
            }, 1) ? function(t) {
                var n = _(this, t);
                return !!n && n.enumerable
            } : O
        },
        j = {}.toString,
        E = "".split,
        A = d(function() {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function(t) {
            return "String" == o(t) ? E.call(t, "") : Object(t)
        } : Object,
        I = {}.hasOwnProperty,
        T = b.document,
        N = m(T) && m(T.createElement),
        R = !S && !d(function() {
            return 7 != Object.defineProperty(i("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }),
        C = Object.getOwnPropertyDescriptor,
        P = {
            f: S ? C : function(t, n) {
                if (t = f(t), n = s(n, !0), R) try {
                    return C(t, n)
                } catch (t) {}
                if (h(t, n)) return g(!x.f.call(t, n), t[n])
            }
        },
        L = Object.defineProperty,
        F = {
            f: S ? L : function(t, n, e) {
                if (k(t), n = s(n, !0), k(e), R) try {
                    return L(t, n, e)
                } catch (t) {}
                if ("get" in e || "set" in e) throw TypeError("Accessors not supported");
                return "value" in e && (t[n] = e.value), t
            }
        },
        D = S ? function(t, n, e) {
            return F.f(t, n, g(1, e))
        } : function(t, n, e) {
            return t[n] = e, t
        },
        M = e(function(t) {
            var n = "__core-js_shared__",
                e = b[n] || v(n, {});
            (t.exports = function(t, n) {
                return e[t] || (e[t] = void 0 !== n ? n : {})
            })("versions", []).push({
                version: "3.1.3",
                mode: "global",
                copyright: "?? 2019 Denis Pushkarev (zloirock.ru)"
            })
        }),
        J = M("native-function-to-string", Function.toString),
        V = b.WeakMap,
        G = "function" == typeof V && /native code/.test(J.call(V)),
        U = 0,
        z = Math.random(),
        q = M("keys"),
        B = {},
        H = b.WeakMap;
    if (G) {
        var Y = new H,
            $ = Y.get,
            W = Y.has,
            K = Y.set;
        c = function(t, n) {
            return K.call(Y, t, n), n
        }, p = function(t) {
            return $.call(Y, t) || {}
        }, y = function(t) {
            return W.call(Y, t)
        }
    } else {
        var Q = u("state");
        B[Q] = !0, c = function(t, n) {
            return D(t, Q, n), n
        }, p = function(t) {
            return h(t, Q) ? t[Q] : {}
        }, y = function(t) {
            return h(t, Q)
        }
    }

    function X(t) {
        return "function" == typeof t ? t : void 0
    }

    function Z(t, n) {
        return arguments.length < 2 ? X(ht[t]) || X(b[t]) : ht[t] && ht[t][n] || b[t] && b[t][n]
    }

    function tt(t) {
        return isNaN(t = +t) ? 0 : (0 < t ? pt : vt)(t)
    }

    function nt(t) {
        return 0 < t ? yt(tt(t), 9007199254740991) : 0
    }

    function et(t, n) {
        var e = tt(t);
        return e < 0 ? dt(e + n, 0) : gt(e, n)
    }

    function rt(a) {
        return function(t, n, e) {
            var r, o = f(t),
                i = nt(o.length),
                u = et(e, i);
            if (a && n != n) {
                for (; u < i;)
                    if ((r = o[u++]) != r) return !0
            } else
                for (; u < i; u++)
                    if ((a || u in o) && o[u] === n) return a || u || 0;
            return !a && -1
        }
    }

    function ot(t, n) {
        var e, r = f(t),
            o = 0,
            i = [];
        for (e in r) !h(B, e) && h(r, e) && i.push(e);
        for (; n.length > o;) h(r, e = n[o++]) && (~wt(i, e) || i.push(e));
        return i
    }

    function it(t, n) {
        for (var e = kt(n), r = F.f, o = P.f, i = 0; i < e.length; i++) {
            var u = e[i];
            h(t, u) || r(t, u, o(n, u))
        }
    }

    function ut(t, n) {
        var e = Et[jt(t)];
        return e == It || e != At && ("function" == typeof n ? d(n) : !!n)
    }

    function at(t, n) {
        var e, r, o, i, u, a = t.target,
            c = t.global,
            f = t.stat;
        if (e = c ? b : f ? b[a] || v(a, {}) : (b[a] || {}).prototype)
            for (r in n) {
                if (i = n[r], o = t.noTargetGet ? (u = Nt(e, r)) && u.value : e[r], !Tt(c ? r : a + (f ? "." : "#") + r, t.forced) && void 0 !== o) {
                    if (typeof i == typeof o) continue;
                    it(i, o)
                }(t.sham || o && o.sham) && D(i, "sham", !0), lt(e, r, i, t)
            }
    }

    function ct(t) {
        return Object(l(t))
    }

    function ft() {}
    var st = {
            set: c,
            get: p,
            has: y,
            enforce: function(t) {
                return y(t) ? p(t) : c(t, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!m(t) || (n = p(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        },
        lt = e(function(t) {
            var n = st.get,
                a = st.enforce,
                c = String(J).split("toString");
            M("inspectSource", function(t) {
                return J.call(t)
            }), (t.exports = function(t, n, e, r) {
                var o = !!r && !!r.unsafe,
                    i = !!r && !!r.enumerable,
                    u = !!r && !!r.noTargetGet;
                "function" == typeof e && ("string" != typeof n || h(e, "name") || D(e, "name", n), a(e).source = c.join("string" == typeof n ? n : "")), t !== b ? (o ? !u && t[n] && (i = !0) : delete t[n], i ? t[n] = e : D(t, n, e)) : i ? t[n] = e : v(n, e)
            })(Function.prototype, "toString", function() {
                return "function" == typeof this && n(this).source || J.call(this)
            })
        }),
        ht = b,
        vt = Math.ceil,
        pt = Math.floor,
        yt = Math.min,
        dt = Math.max,
        gt = Math.min,
        mt = {
            includes: rt(!0),
            indexOf: rt(!1)
        },
        wt = mt.indexOf,
        bt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        St = bt.concat("length", "prototype"),
        Ot = {
            f: Object.getOwnPropertyNames || function(t) {
                return ot(t, St)
            }
        },
        _t = {
            f: Object.getOwnPropertySymbols
        },
        kt = Z("Reflect", "ownKeys") || function(t) {
            var n = Ot.f(k(t)),
                e = _t.f;
            return e ? n.concat(e(t)) : n
        },
        xt = /#|\.prototype\./,
        jt = ut.normalize = function(t) {
            return String(t).replace(xt, ".").toLowerCase()
        },
        Et = ut.data = {},
        At = ut.NATIVE = "N",
        It = ut.POLYFILL = "P",
        Tt = ut,
        Nt = P.f,
        Rt = !!Object.getOwnPropertySymbols && !d(function() {
            return !String(Symbol())
        }),
        Ct = Array.isArray || function(t) {
            return "Array" == o(t)
        },
        Pt = Object.keys || function(t) {
            return ot(t, bt)
        },
        Lt = S ? Object.defineProperties : function(t, n) {
            k(t);
            for (var e, r = Pt(n), o = r.length, i = 0; i < o;) F.f(t, e = r[i++], n[e]);
            return t
        },
        Ft = Z("document", "documentElement"),
        Dt = u("IE_PROTO"),
        Mt = "prototype",
        Jt = function() {
            var t, n = i("iframe"),
                e = bt.length,
                r = "script";
            for (n.style.display = "none", Ft.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write("<script>document.F=Object</" + r + ">"), t.close(), Jt = t.F; e--;) delete Jt[Mt][bt[e]];
            return Jt()
        },
        Vt = Object.create || function(t, n) {
            var e;
            return null !== t ? (ft[Mt] = k(t), e = new ft, ft[Mt] = null, e[Dt] = t) : e = Jt(), void 0 === n ? e : Lt(e, n)
        };
    B[Dt] = !0;

    function Gt(t) {
        return rn[t] || (rn[t] = Rt && en[t] || (Rt ? en : a)("Symbol." + t))
    }

    function Ut(t) {
        var n = ht.Symbol || (ht.Symbol = {});
        h(n, t) || un(n, t, {
            value: on.f(t)
        })
    }

    function zt(t, n, e) {
        t && !h(t = e ? t : t.prototype, cn) && an(t, cn, {
            configurable: !0,
            value: n
        })
    }

    function qt(t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t
    }

    function Bt(r, o, t) {
        if (qt(r), void 0 === o) return r;
        switch (t) {
            case 0:
                return function() {
                    return r.call(o)
                };
            case 1:
                return function(t) {
                    return r.call(o, t)
                };
            case 2:
                return function(t, n) {
                    return r.call(o, t, n)
                };
            case 3:
                return function(t, n, e) {
                    return r.call(o, t, n, e)
                }
        }
        return function() {
            return r.apply(o, arguments)
        }
    }

    function Ht(t, n) {
        var e;
        return Ct(t) && ("function" != typeof(e = t.constructor) || e !== Array && !Ct(e.prototype) ? m(e) && null === (e = e[fn]) && (e = void 0) : e = void 0), new(void 0 === e ? Array : e)(0 === n ? 0 : n)
    }

    function Yt(v) {
        var p = 1 == v,
            y = 2 == v,
            d = 3 == v,
            g = 4 == v,
            m = 6 == v,
            w = 5 == v || m;
        return function(t, n, e, r) {
            for (var o, i, u = ct(t), a = A(u), c = Bt(n, e, 3), f = nt(a.length), s = 0, l = r || Ht, h = p ? l(t, f) : y ? l(t, 0) : void 0; s < f; s++)
                if ((w || s in a) && (i = c(o = a[s], s, u), v))
                    if (p) h[s] = i;
                    else if (i) switch (v) {
                case 3:
                    return !0;
                case 5:
                    return o;
                case 6:
                    return s;
                case 2:
                    sn.call(h, o)
            } else if (g) return !1;
            return m ? -1 : d || g ? g : h
        }
    }

    function $t(t, n) {
        var e = En[t] = Vt(bn[yn]);
        return gn(e, {
            type: pn,
            tag: t,
            description: n
        }), S || (e.description = n), e
    }

    function Wt(n, t) {
        k(n);
        var e = f(t),
            r = Pt(e).concat(Mn(e));
        return hn(r, function(t) {
            S && !Dn.call(e, t) || Fn(n, t, e[t])
        }), n
    }

    function Kt(t, n) {
        var e = f(t),
            r = s(n, !0);
        if (e !== wn || !h(En, r) || h(An, r)) {
            var o = _n(e, r);
            return !o || !h(En, r) || h(e, vn) && e[vn][r] || (o.enumerable = !0), o
        }
    }

    function Qt(t) {
        var n = xn(f(t)),
            e = [];
        return hn(n, function(t) {
            h(En, t) || h(B, t) || e.push(t)
        }), e
    }
    var Xt = Ot.f,
        Zt = {}.toString,
        tn = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        nn = {
            f: function(t) {
                return tn && "[object Window]" == Zt.call(t) ? function(t) {
                    try {
                        return Xt(t)
                    } catch (t) {
                        return tn.slice()
                    }
                }(t) : Xt(f(t))
            }
        },
        en = b.Symbol,
        rn = M("wks"),
        on = {
            f: Gt
        },
        un = F.f,
        an = F.f,
        cn = Gt("toStringTag"),
        fn = Gt("species"),
        sn = [].push,
        ln = {
            forEach: Yt(0),
            map: Yt(1),
            filter: Yt(2),
            some: Yt(3),
            every: Yt(4),
            find: Yt(5),
            findIndex: Yt(6)
        },
        hn = ln.forEach,
        vn = u("hidden"),
        pn = "Symbol",
        yn = "prototype",
        dn = Gt("toPrimitive"),
        gn = st.set,
        mn = st.getterFor(pn),
        wn = Object[yn],
        bn = b.Symbol,
        Sn = b.JSON,
        On = Sn && Sn.stringify,
        _n = P.f,
        kn = F.f,
        xn = nn.f,
        jn = x.f,
        En = M("symbols"),
        An = M("op-symbols"),
        In = M("string-to-symbol-registry"),
        Tn = M("symbol-to-string-registry"),
        Nn = M("wks"),
        Rn = b.QObject,
        Cn = !Rn || !Rn[yn] || !Rn[yn].findChild,
        Pn = S && d(function() {
            return 7 != Vt(kn({}, "a", {
                get: function() {
                    return kn(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        }) ? function(t, n, e) {
            var r = _n(wn, n);
            r && delete wn[n], kn(t, n, e), r && t !== wn && kn(wn, n, r)
        } : kn,
        Ln = Rt && "symbol" == typeof bn.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return Object(t) instanceof bn
        },
        Fn = function(t, n, e) {
            t === wn && Fn(An, n, e), k(t);
            var r = s(n, !0);
            return k(e), h(En, r) ? (e.enumerable ? (h(t, vn) && t[vn][r] && (t[vn][r] = !1), e = Vt(e, {
                enumerable: g(0, !1)
            })) : (h(t, vn) || kn(t, vn, g(1, {})), t[vn][r] = !0), Pn(t, r, e)) : kn(t, r, e)
        },
        Dn = function(t) {
            var n = s(t, !0),
                e = jn.call(this, n);
            return !(this === wn && h(En, n) && !h(An, n)) && (!(e || !h(this, n) || !h(En, n) || h(this, vn) && this[vn][n]) || e)
        },
        Mn = function(t) {
            var n = t === wn,
                e = xn(n ? An : f(t)),
                r = [];
            return hn(e, function(t) {
                !h(En, t) || n && !h(wn, t) || r.push(En[t])
            }), r
        };
    Rt || (lt((bn = function(t) {
        if (this instanceof bn) throw TypeError("Symbol is not a constructor");
        var n = arguments.length && void 0 !== t ? String(t) : void 0,
            e = a(n),
            r = function(t) {
                this === wn && r.call(An, t), h(this, vn) && h(this[vn], e) && (this[vn][e] = !1), Pn(this, e, g(1, t))
            };
        return S && Cn && Pn(wn, e, {
            configurable: !0,
            set: r
        }), $t(e, n)
    })[yn], "toString", function() {
        return mn(this).tag
    }), x.f = Dn, F.f = Fn, P.f = Kt, Ot.f = nn.f = Qt, _t.f = Mn, S && (kn(bn[yn], "description", {
        configurable: !0,
        get: function() {
            return mn(this).description
        }
    }), lt(wn, "propertyIsEnumerable", Dn, {
        unsafe: !0
    })), on.f = function(t) {
        return $t(Gt(t), t)
    }), at({
        global: !0,
        wrap: !0,
        forced: !Rt,
        sham: !Rt
    }, {
        Symbol: bn
    }), hn(Pt(Nn), function(t) {
        Ut(t)
    }), at({
        target: pn,
        stat: !0,
        forced: !Rt
    }, {
        for: function(t) {
            var n = String(t);
            if (h(In, n)) return In[n];
            var e = bn(n);
            return In[n] = e, Tn[e] = n, e
        },
        keyFor: function(t) {
            if (!Ln(t)) throw TypeError(t + " is not a symbol");
            if (h(Tn, t)) return Tn[t]
        },
        useSetter: function() {
            Cn = !0
        },
        useSimple: function() {
            Cn = !1
        }
    }), at({
        target: "Object",
        stat: !0,
        forced: !Rt,
        sham: !S
    }, {
        create: function(t, n) {
            return void 0 === n ? Vt(t) : Wt(Vt(t), n)
        },
        defineProperty: Fn,
        defineProperties: Wt,
        getOwnPropertyDescriptor: Kt
    }), at({
        target: "Object",
        stat: !0,
        forced: !Rt
    }, {
        getOwnPropertyNames: Qt,
        getOwnPropertySymbols: Mn
    }), at({
        target: "Object",
        stat: !0,
        forced: d(function() {
            _t.f(1)
        })
    }, {
        getOwnPropertySymbols: function(t) {
            return _t.f(ct(t))
        }
    }), Sn && at({
        target: "JSON",
        stat: !0,
        forced: !Rt || d(function() {
            var t = bn();
            return "[null]" != On([t]) || "{}" != On({
                a: t
            }) || "{}" != On(Object(t))
        })
    }, {
        stringify: function(t) {
            for (var n, e, r = [t], o = 1; o < arguments.length;) r.push(arguments[o++]);
            if (e = n = r[1], (m(n) || void 0 !== t) && !Ln(t)) return Ct(n) || (n = function(t, n) {
                if ("function" == typeof e && (n = e.call(this, t, n)), !Ln(n)) return n
            }), r[1] = n, On.apply(Sn, r)
        }
    }), bn[yn][dn] || D(bn[yn], dn, bn[yn].valueOf), zt(bn, pn), B[vn] = !0;
    var Jn = F.f,
        Vn = b.Symbol;
    if (!(!S || "function" != typeof Vn || "description" in Vn.prototype && void 0 === Vn().description)) {
        var Gn = {},
            Un = function(t) {
                var n = arguments.length < 1 || void 0 === t ? void 0 : String(t),
                    e = this instanceof Un ? new Vn(n) : void 0 === n ? Vn() : Vn(n);
                return "" === n && (Gn[e] = !0), e
            };
        it(Un, Vn);
        var zn = Un.prototype = Vn.prototype;
        zn.constructor = Un;
        var qn = zn.toString,
            Bn = "Symbol(test)" == String(Vn("test")),
            Hn = /^Symbol\((.*)\)[^)]+$/;
        Jn(zn, "description", {
            configurable: !0,
            get: function() {
                var t = m(this) ? this.valueOf() : this,
                    n = qn.call(t);
                if (h(Gn, t)) return "";
                var e = Bn ? n.slice(7, -1) : n.replace(Hn, "$1");
                return "" === e ? void 0 : e
            }
        }), at({
            global: !0,
            forced: !0
        }, {
            Symbol: Un
        })
    }
    Ut("iterator");

    function Yn(t, n, e) {
        var r = s(n);
        r in t ? F.f(t, r, g(0, e)) : t[r] = e
    }

    function $n(n) {
        return !d(function() {
            var t = [];
            return (t.constructor = {})[Kn] = function() {
                return {
                    foo: 1
                }
            }, 1 !== t[n](Boolean).foo
        })
    }

    function Wn(t) {
        if (!m(t)) return !1;
        var n = t[Qn];
        return void 0 !== n ? !!n : Ct(t)
    }
    var Kn = Gt("species"),
        Qn = Gt("isConcatSpreadable"),
        Xn = 9007199254740991,
        Zn = "Maximum allowed index exceeded",
        te = !d(function() {
            var t = [];
            return t[Qn] = !1, t.concat()[0] !== t
        }),
        ne = $n("concat");
    at({
        target: "Array",
        proto: !0,
        forced: !te || !ne
    }, {
        concat: function(t) {
            var n, e, r, o, i, u = ct(this),
                a = Ht(u, 0),
                c = 0;
            for (n = -1, r = arguments.length; n < r; n++)
                if (Wn(i = -1 === n ? u : arguments[n])) {
                    if (o = nt(i.length), Xn < c + o) throw TypeError(Zn);
                    for (e = 0; e < o; e++, c++) e in i && Yn(a, c, i[e])
                } else {
                    if (Xn <= c) throw TypeError(Zn);
                    Yn(a, c++, i)
                } return a.length = c, a
        }
    });
    var ee = ln.filter;
    at({
        target: "Array",
        proto: !0,
        forced: !$n("filter")
    }, {
        filter: function(t, n) {
            return ee(this, t, 1 < arguments.length ? n : void 0)
        }
    });

    function re(t, n) {
        var e = [][t];
        return !e || !d(function() {
            e.call(null, n || function() {
                throw 1
            }, 1)
        })
    }
    var oe = ln.forEach,
        ie = re("forEach") ? function(t, n) {
            return oe(this, t, 1 < arguments.length ? n : void 0)
        } : [].forEach;
    at({
        target: "Array",
        proto: !0,
        forced: [].forEach != ie
    }, {
        forEach: ie
    });

    function ue(n, t, e, r) {
        try {
            return r ? t(k(e)[0], e[1]) : t(e)
        } catch (t) {
            var o = n.return;
            throw void 0 !== o && k(o.call(n)), t
        }
    }

    function ae(t) {
        return void 0 !== t && (se.Array === t || he[le] === t)
    }

    function ce(t) {
        var n, e, r;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, n) {
            try {
                return t[n]
            } catch (t) {}
        }(n = Object(t), ve)) ? e : pe ? o(n) : "Object" == (r = o(n)) && "function" == typeof n.callee ? "Arguments" : r
    }

    function fe(t) {
        if (null != t) return t[ye] || t["@@iterator"] || se[ce(t)]
    }
    var se = {},
        le = Gt("iterator"),
        he = Array.prototype,
        ve = Gt("toStringTag"),
        pe = "Arguments" == o(function() {
            return arguments
        }()),
        ye = Gt("iterator"),
        de = Gt("iterator"),
        ge = !1;
    try {
        var me = 0;
        ({
            next: function() {
                return {
                    done: !!me++
                }
            },
            return: function() {
                ge = !0
            }
        })[de] = function() {
            return this
        }
    } catch (t) {}

    function we(t, n) {
        if (!n && !ge) return !1;
        var e = !1;
        try {
            var r = {};
            r[de] = function() {
                return {
                    next: function() {
                        return {
                            done: e = !0
                        }
                    }
                }
            }, t(r)
        } catch (t) {}
        return e
    }
    var be = !we(function(t) {});
    at({
        target: "Array",
        stat: !0,
        forced: be
    }, {
        from: function(t, n, e) {
            var r, o, i, u, a = ct(t),
                c = "function" == typeof this ? this : Array,
                f = arguments.length,
                s = 1 < f ? n : void 0,
                l = void 0 !== s,
                h = 0,
                v = fe(a);
            if (l && (s = Bt(s, 2 < f ? e : void 0, 2)), null == v || c == Array && ae(v))
                for (o = new c(r = nt(a.length)); h < r; h++) Yn(o, h, l ? s(a[h], h) : a[h]);
            else
                for (u = v.call(a), o = new c; !(i = u.next()).done; h++) Yn(o, h, l ? ue(u, s, [i.value, h], !0) : i.value);
            return o.length = h, o
        }
    });
    var Se = Gt("unscopables"),
        Oe = Array.prototype;
    null == Oe[Se] && D(Oe, Se, Vt(null));

    function _e(t) {
        Oe[Se][t] = !0
    }
    var ke = mt.includes;
    at({
        target: "Array",
        proto: !0
    }, {
        includes: function(t, n) {
            return ke(this, t, 1 < arguments.length ? n : void 0)
        }
    }), _e("includes");
    var xe, je, Ee, Ae = !d(function() {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        }),
        Ie = u("IE_PROTO"),
        Te = Object.prototype,
        Ne = Ae ? Object.getPrototypeOf : function(t) {
            return t = ct(t), h(t, Ie) ? t[Ie] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Te : null
        },
        Re = Gt("iterator"),
        Ce = !1;
    [].keys && ("next" in (Ee = [].keys()) ? (je = Ne(Ne(Ee))) !== Object.prototype && (xe = je) : Ce = !0), null == xe && (xe = {}), h(xe, Re) || D(xe, Re, function() {
        return this
    });

    function Pe() {
        return this
    }

    function Le() {
        return this
    }

    function Fe(t, n, e, r, o, i, u) {
        function a(t) {
            if (t === o && y) return y;
            if (!Ge && t in v) return v[t];
            switch (t) {
                case "keys":
                case ze:
                case qe:
                    return function() {
                        return new e(this, t)
                    }
            }
            return function() {
                return new e(this)
            }
        }! function(t, n, e) {
            var r = n + " Iterator";
            t.prototype = Vt(Me, {
                next: g(1, e)
            }), zt(t, r, !1), se[r] = Pe
        }(e, n, r);
        var c, f, s, l = n + " Iterator",
            h = !1,
            v = t.prototype,
            p = v[Ue] || v["@@iterator"] || o && v[o],
            y = !Ge && p || a(o),
            d = "Array" == n && v.entries || p;
        if (d && (c = Ne(d.call(new t)), Ve !== Object.prototype && c.next && (Ne(c) !== Ve && (Je ? Je(c, Ve) : "function" != typeof c[Ue] && D(c, Ue, Le)), zt(c, l, !0))), o == ze && p && p.name !== ze && (h = !0, y = function() {
                return p.call(this)
            }), v[Ue] !== y && D(v, Ue, y), se[n] = y, o)
            if (f = {
                    values: a(ze),
                    keys: i ? y : a("keys"),
                    entries: a(qe)
                }, u)
                for (s in f) !Ge && !h && s in v || lt(v, s, f[s]);
            else at({
                target: n,
                proto: !0,
                forced: Ge || h
            }, f);
        return f
    }
    var De = {
            IteratorPrototype: xe,
            BUGGY_SAFARI_ITERATORS: Ce
        },
        Me = De.IteratorPrototype,
        Je = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e, r = !1,
                t = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []), r = t instanceof Array
            } catch (t) {}
            return function(t, n) {
                return k(t),
                    function(t) {
                        if (!m(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
                    }(n), r ? e.call(t, n) : t.__proto__ = n, t
            }
        }() : void 0),
        Ve = De.IteratorPrototype,
        Ge = De.BUGGY_SAFARI_ITERATORS,
        Ue = Gt("iterator"),
        ze = "values",
        qe = "entries",
        Be = "Array Iterator",
        He = st.set,
        Ye = st.getterFor(Be),
        $e = Fe(Array, "Array", function(t, n) {
            He(this, {
                type: Be,
                target: f(t),
                index: 0,
                kind: n
            })
        }, function() {
            var t = Ye(this),
                n = t.target,
                e = t.kind,
                r = t.index++;
            return !n || r >= n.length ? {
                value: t.target = void 0,
                done: !0
            } : "keys" == e ? {
                value: r,
                done: !1
            } : "values" == e ? {
                value: n[r],
                done: !1
            } : {
                value: [r, n[r]],
                done: !1
            }
        }, "values");
    se.Arguments = se.Array, _e("keys"), _e("values"), _e("entries");
    var We = [].join,
        Ke = A != Object,
        Qe = re("join", ",");
    at({
        target: "Array",
        proto: !0,
        forced: Ke || Qe
    }, {
        join: function(t) {
            return We.call(f(this), void 0 === t ? "," : t)
        }
    });
    var Xe = ln.map;
    at({
        target: "Array",
        proto: !0,
        forced: !$n("map")
    }, {
        map: function(t, n) {
            return Xe(this, t, 1 < arguments.length ? n : void 0)
        }
    });

    function Ze(f) {
        return function(t, n, e, r) {
            qt(n);
            var o = ct(t),
                i = A(o),
                u = nt(o.length),
                a = f ? u - 1 : 0,
                c = f ? -1 : 1;
            if (e < 2)
                for (;;) {
                    if (a in i) {
                        r = i[a], a += c;
                        break
                    }
                    if (a += c, f ? a < 0 : u <= a) throw TypeError("Reduce of empty array with no initial value")
                }
            for (; f ? 0 <= a : a < u; a += c) a in i && (r = n(r, i[a], a, o));
            return r
        }
    }
    var tr = {
            left: Ze(!1),
            right: Ze(!0)
        },
        nr = tr.left;
    at({
        target: "Array",
        proto: !0,
        forced: re("reduce")
    }, {
        reduce: function(t, n) {
            return nr(this, t, arguments.length, 1 < arguments.length ? n : void 0)
        }
    });
    var er = tr.right;
    at({
        target: "Array",
        proto: !0,
        forced: re("reduceRight")
    }, {
        reduceRight: function(t, n) {
            return er(this, t, arguments.length, 1 < arguments.length ? n : void 0)
        }
    });
    var rr = Gt("species"),
        or = [].slice,
        ir = Math.max;
    at({
        target: "Array",
        proto: !0,
        forced: !$n("slice")
    }, {
        slice: function(t, n) {
            var e, r, o, i = f(this),
                u = nt(i.length),
                a = et(t, u),
                c = et(void 0 === n ? u : n, u);
            if (Ct(i) && ("function" != typeof(e = i.constructor) || e !== Array && !Ct(e.prototype) ? m(e) && null === (e = e[rr]) && (e = void 0) : e = void 0, e === Array || void 0 === e)) return or.call(i, a, c);
            for (r = new(void 0 === e ? Array : e)(ir(c - a, 0)), o = 0; a < c; a++, o++) a in i && Yn(r, o, i[a]);
            return r.length = o, r
        }
    });
    var ur = [].sort,
        ar = [1, 2, 3],
        cr = d(function() {
            ar.sort(void 0)
        }),
        fr = d(function() {
            ar.sort(null)
        }),
        sr = re("sort");
    at({
        target: "Array",
        proto: !0,
        forced: cr || !fr || sr
    }, {
        sort: function(t) {
            return void 0 === t ? ur.call(ct(this)) : ur.call(ct(this), qt(t))
        }
    });
    var lr = d(function() {
        return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
            toISOString: function() {
                return 1
            }
        })
    });
    at({
        target: "Date",
        proto: !0,
        forced: lr
    }, {
        toJSON: function(t) {
            var n = ct(this),
                e = s(n);
            return "number" != typeof e || isFinite(e) ? n.toISOString() : null
        }
    });
    var hr = F.f,
        vr = Function.prototype,
        pr = vr.toString,
        yr = /^\s*function ([^ (]*)/;
    !S || "name" in vr || hr(vr, "name", {
        configurable: !0,
        get: function() {
            try {
                return pr.call(this).match(yr)[1]
            } catch (t) {
                return ""
            }
        }
    });
    var dr = Object.assign,
        gr = !dr || d(function() {
            var t = {},
                n = {},
                e = Symbol(),
                r = "abcdefghijklmnopqrst";
            return t[e] = 7, r.split("").forEach(function(t) {
                n[t] = t
            }), 7 != dr({}, t)[e] || Pt(dr({}, n)).join("") != r
        }) ? function(t, n) {
            for (var e = ct(t), r = arguments.length, o = 1, i = _t.f, u = x.f; o < r;)
                for (var a, c = A(arguments[o++]), f = i ? Pt(c).concat(i(c)) : Pt(c), s = f.length, l = 0; l < s;) a = f[l++], S && !u.call(c, a) || (e[a] = c[a]);
            return e
        } : dr;
    at({
        target: "Object",
        stat: !0,
        forced: Object.assign !== gr
    }, {
        assign: gr
    });

    function mr(a) {
        return function(t) {
            for (var n, e = f(t), r = Pt(e), o = r.length, i = 0, u = []; i < o;) n = r[i++], S && !wr.call(e, n) || u.push(a ? [n, e[n]] : e[n]);
            return u
        }
    }
    var wr = x.f,
        br = {
            entries: mr(!0),
            values: mr(!1)
        },
        Sr = br.entries;
    at({
        target: "Object",
        stat: !0
    }, {
        entries: function(t) {
            return Sr(t)
        }
    });
    var Or = Object.is || function(t, n) {
        return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n
    };
    at({
        target: "Object",
        stat: !0
    }, {
        is: Or
    });
    var _r = d(function() {
        Pt(1)
    });
    at({
        target: "Object",
        stat: !0,
        forced: _r
    }, {
        keys: function(t) {
            return Pt(ct(t))
        }
    });
    var kr = {};
    kr[Gt("toStringTag")] = "z";
    var xr = "[object z]" !== String(kr) ? function() {
            return "[object " + ce(this) + "]"
        } : kr.toString,
        jr = Object.prototype;
    xr !== jr.toString && lt(jr, "toString", xr, {
        unsafe: !0
    });
    var Er = br.values;
    at({
        target: "Object",
        stat: !0
    }, {
        values: function(t) {
            return Er(t)
        }
    });

    function Ar() {
        var t = k(this),
            n = "";
        return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.dotAll && (n += "s"), t.unicode && (n += "u"), t.sticky && (n += "y"), n
    }
    var Ir, Tr, Nr = RegExp.prototype.exec,
        Rr = String.prototype.replace,
        Cr = Nr,
        Pr = (Ir = /a/, Tr = /b*/g, Nr.call(Ir, "a"), Nr.call(Tr, "a"), 0 !== Ir.lastIndex || 0 !== Tr.lastIndex),
        Lr = void 0 !== /()??/.exec("")[1];
    (Pr || Lr) && (Cr = function(t) {
        var n, e, r, o, i = this;
        return Lr && (e = new RegExp("^" + i.source + "$(?!\\s)", Ar.call(i))), Pr && (n = i.lastIndex), r = Nr.call(i, t), Pr && r && (i.lastIndex = i.global ? r.index + r[0].length : n), Lr && r && 1 < r.length && Rr.call(r[0], e, function() {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
        }), r
    });
    var Fr = Cr;
    at({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Fr
    }, {
        exec: Fr
    });

    function Dr(t, n, e) {
        if (!(t instanceof n)) throw TypeError("Incorrect " + (e ? e + " " : "") + "invocation");
        return t
    }

    function Mr(t, n, e) {
        var r, o;
        return Je && "function" == typeof(r = n.constructor) && r !== e && m(o = r.prototype) && o !== e.prototype && Je(t, o), t
    }

    function Jr(t, n, e) {
        for (var r in n) lt(t, r, n[r], e);
        return t
    }

    function Vr(t) {
        var n = Z(t),
            e = F.f;
        S && n && !n[Br] && e(n, Br, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }

    function Gr(t) {
        var n;
        return m(t) && (void 0 !== (n = t[Kr]) ? !!n : "RegExp" == o(t))
    }
    var Ur = !d(function() {
            return Object.isExtensible(Object.preventExtensions({}))
        }),
        zr = e(function(t) {
            function e(t) {
                n(t, r, {
                    value: {
                        objectID: "O" + ++o,
                        weakData: {}
                    }
                })
            }
            var n = F.f,
                r = a("meta"),
                o = 0,
                i = Object.isExtensible || function() {
                    return !0
                },
                u = t.exports = {
                    REQUIRED: !1,
                    fastKey: function(t, n) {
                        if (!m(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!h(t, r)) {
                            if (!i(t)) return "F";
                            if (!n) return "E";
                            e(t)
                        }
                        return t[r].objectID
                    },
                    getWeakData: function(t, n) {
                        if (!h(t, r)) {
                            if (!i(t)) return !0;
                            if (!n) return !1;
                            e(t)
                        }
                        return t[r].weakData
                    },
                    onFreeze: function(t) {
                        return Ur && u.REQUIRED && i(t) && !h(t, r) && e(t), t
                    }
                };
            B[r] = !0
        }),
        qr = (zr.REQUIRED, zr.fastKey, zr.getWeakData, zr.onFreeze, e(function(t) {
            function h(t, n) {
                this.stopped = t, this.result = n
            }(t.exports = function(t, n, e, r, o) {
                var i, u, a, c, f, s, l = Bt(n, e, r ? 2 : 1);
                if (o) i = t;
                else {
                    if ("function" != typeof(u = fe(t))) throw TypeError("Target is not iterable");
                    if (ae(u)) {
                        for (a = 0, c = nt(t.length); a < c; a++)
                            if ((f = r ? l(k(s = t[a])[0], s[1]) : l(t[a])) && f instanceof h) return f;
                        return new h(!1)
                    }
                    i = u.call(t)
                }
                for (; !(s = i.next()).done;)
                    if ((f = ue(i, l, s.value, r)) && f instanceof h) return f;
                return new h(!1)
            }).stop = function(t) {
                return new h(!0, t)
            }
        })),
        Br = Gt("species"),
        Hr = F.f,
        Yr = zr.fastKey,
        $r = st.set,
        Wr = st.getterFor,
        Kr = (function(r, t, n, o, i) {
            function e(t) {
                var e = a[t];
                lt(a, t, "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t), this
                } : "delete" == t ? function(t) {
                    return !(i && !m(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function(t) {
                    return i && !m(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                } : "has" == t ? function(t) {
                    return !(i && !m(t)) && e.call(this, 0 === t ? 0 : t)
                } : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this
                })
            }
            var u = b[r],
                a = u && u.prototype,
                c = u,
                f = o ? "set" : "add",
                s = {};
            if (Tt(r, "function" != typeof u || !(i || a.forEach && !d(function() {
                    (new u).entries().next()
                })))) c = n.getConstructor(t, r, o, f), zr.REQUIRED = !0;
            else if (Tt(r, !0)) {
                var l = new c,
                    h = l[f](i ? {} : -0, 1) != l,
                    v = d(function() {
                        l.has(1)
                    }),
                    p = we(function(t) {
                        new u(t)
                    }),
                    y = !i && d(function() {
                        for (var t = new u, n = 5; n--;) t[f](n, n);
                        return !t.has(-0)
                    });
                p || (((c = t(function(t, n) {
                    Dr(t, c, r);
                    var e = Mr(new u, t, c);
                    return null != n && qr(n, e[f], e, o), e
                })).prototype = a).constructor = c), (v || y) && (e("delete"), e("has"), o && e("get")), (y || h) && e(f), i && a.clear && delete a.clear
            }
            s[r] = c, at({
                global: !0,
                forced: c != u
            }, s), zt(c, r), i || n.setStrong(c, r, o)
        }("Set", function(n) {
            return function(t) {
                return n(this, arguments.length ? t : void 0)
            }
        }, {
            getConstructor: function(t, e, r, o) {
                function i(t, n, e) {
                    var r, o, i = a(t),
                        u = c(t, n);
                    return u ? u.value = e : (i.last = u = {
                        index: o = Yr(n, !0),
                        key: n,
                        value: e,
                        previous: r = i.last,
                        next: void 0,
                        removed: !1
                    }, i.first || (i.first = u), r && (r.next = u), S ? i.size++ : t.size++, "F" !== o && (i.index[o] = u)), t
                }
                var u = t(function(t, n) {
                        Dr(t, u, e), $r(t, {
                            type: e,
                            index: Vt(null),
                            first: void 0,
                            last: void 0,
                            size: 0
                        }), S || (t.size = 0), null != n && qr(n, t[o], t, r)
                    }),
                    a = Wr(e),
                    c = function(t, n) {
                        var e, r = a(t),
                            o = Yr(n);
                        if ("F" !== o) return r.index[o];
                        for (e = r.first; e; e = e.next)
                            if (e.key == n) return e
                    };
                return Jr(u.prototype, {
                    clear: function() {
                        for (var t = a(this), n = t.index, e = t.first; e;) e.removed = !0, e.previous && (e.previous = e.previous.next = void 0), delete n[e.index], e = e.next;
                        t.first = t.last = void 0, S ? t.size = 0 : this.size = 0
                    },
                    delete: function(t) {
                        var n = a(this),
                            e = c(this, t);
                        if (e) {
                            var r = e.next,
                                o = e.previous;
                            delete n.index[e.index], e.removed = !0, o && (o.next = r), r && (r.previous = o), n.first == e && (n.first = r), n.last == e && (n.last = o), S ? n.size-- : this.size--
                        }
                        return !!e
                    },
                    forEach: function(t, n) {
                        for (var e, r = a(this), o = Bt(t, 1 < arguments.length ? n : void 0, 3); e = e ? e.next : r.first;)
                            for (o(e.value, e.key, this); e && e.removed;) e = e.previous
                    },
                    has: function(t) {
                        return !!c(this, t)
                    }
                }), Jr(u.prototype, r ? {
                    get: function(t) {
                        var n = c(this, t);
                        return n && n.value
                    },
                    set: function(t, n) {
                        return i(this, 0 === t ? 0 : t, n)
                    }
                } : {
                    add: function(t) {
                        return i(this, t = 0 === t ? 0 : t, t)
                    }
                }), S && Hr(u.prototype, "size", {
                    get: function() {
                        return a(this).size
                    }
                }), u
            },
            setStrong: function(t, n, e) {
                var r = n + " Iterator",
                    o = Wr(n),
                    i = Wr(r);
                Fe(t, n, function(t, n) {
                    $r(this, {
                        type: r,
                        target: t,
                        state: o(t),
                        kind: n,
                        last: void 0
                    })
                }, function() {
                    for (var t = i(this), n = t.kind, e = t.last; e && e.removed;) e = e.previous;
                    return t.target && (t.last = e = e ? e.next : t.state.first) ? "keys" == n ? {
                        value: e.key,
                        done: !1
                    } : "values" == n ? {
                        value: e.value,
                        done: !1
                    } : {
                        value: [e.key, e.value],
                        done: !1
                    } : {
                        value: t.target = void 0,
                        done: !0
                    }
                }, e ? "entries" : "values", !e, !0), Vr(n)
            }
        }), Gt("match")),
        Qr = Gt("match");
    at({
        target: "String",
        proto: !0,
        forced: ! function(n) {
            var e = /./;
            try {
                "/./" [n](e)
            } catch (t) {
                try {
                    return e[Qr] = !1, "/./" [n](e)
                } catch (t) {}
            }
            return !1
        }("includes")
    }, {
        includes: function(t, n) {
            return !!~String(l(this)).indexOf(function(t) {
                if (Gr(t)) throw TypeError("The method doesn't accept regular expressions");
                return t
            }(t), 1 < arguments.length ? n : void 0)
        }
    });

    function Xr(a) {
        return function(t, n) {
            var e, r, o = String(l(t)),
                i = tt(n),
                u = o.length;
            return i < 0 || u <= i ? a ? "" : void 0 : (e = o.charCodeAt(i)) < 55296 || 56319 < e || i + 1 === u || (r = o.charCodeAt(i + 1)) < 56320 || 57343 < r ? a ? o.charAt(i) : e : a ? o.slice(i, i + 2) : r - 56320 + (e - 55296 << 10) + 65536
        }
    }
    var Zr = {
            codeAt: Xr(!1),
            charAt: Xr(!0)
        },
        to = Zr.charAt,
        no = "String Iterator",
        eo = st.set,
        ro = st.getterFor(no);
    Fe(String, "String", function(t) {
        eo(this, {
            type: no,
            string: String(t),
            index: 0
        })
    }, function() {
        var t, n = ro(this),
            e = n.string,
            r = n.index;
        return r >= e.length ? {
            value: void 0,
            done: !0
        } : (t = to(e, r), n.index += t.length, {
            value: t,
            done: !1
        })
    });

    function oo(e, t, n, r) {
        var o = Gt(e),
            i = !d(function() {
                var t = {};
                return t[o] = function() {
                    return 7
                }, 7 != "" [e](t)
            }),
            u = i && !d(function() {
                var t = !1,
                    n = /a/;
                return n.exec = function() {
                    return t = !0, null
                }, "split" === e && (n.constructor = {}, n.constructor[ao] = function() {
                    return n
                }), n[o](""), !t
            });
        if (!i || !u || "replace" === e && !co || "split" === e && !fo) {
            var a = /./ [o],
                c = n(o, "" [e], function(t, n, e, r, o) {
                    return n.exec === Fr ? i && !o ? {
                        done: !0,
                        value: a.call(n, e, r)
                    } : {
                        done: !0,
                        value: t.call(e, n, r)
                    } : {
                        done: !1
                    }
                }),
                f = c[0],
                s = c[1];
            lt(String.prototype, e, f), lt(RegExp.prototype, o, 2 == t ? function(t, n) {
                return s.call(t, this, n)
            } : function(t) {
                return s.call(t, this)
            }), r && D(RegExp.prototype[o], "sham", !0)
        }
    }

    function io(t, n, e) {
        return n + (e ? so(t, n).length : 1)
    }

    function uo(t, n) {
        var e = t.exec;
        if ("function" == typeof e) {
            var r = e.call(t, n);
            if ("object" != typeof r) throw TypeError("RegExp exec method returned something other than an Object or null");
            return r
        }
        if ("RegExp" !== o(t)) throw TypeError("RegExp#exec called on incompatible receiver");
        return Fr.call(t, n)
    }
    var ao = Gt("species"),
        co = !d(function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        }),
        fo = !d(function() {
            var t = /(?:)/,
                n = t.exec;
            t.exec = function() {
                return n.apply(this, arguments)
            };
            var e = "ab".split(t);
            return 2 !== e.length || "a" !== e[0] || "b" !== e[1]
        }),
        so = Zr.charAt,
        lo = Math.max,
        ho = Math.min,
        vo = Math.floor,
        po = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        yo = /\$([$&'`]|\d\d?)/g;
    oo("replace", 2, function(o, S, O) {
        return [function(t, n) {
            var e = l(this),
                r = null == t ? void 0 : t[o];
            return void 0 !== r ? r.call(t, e, n) : S.call(String(e), t, n)
        }, function(t, n) {
            var e = O(S, t, this, n);
            if (e.done) return e.value;
            var r = k(t),
                o = String(this),
                i = "function" == typeof n;
            i || (n = String(n));
            var u = r.global;
            if (u) {
                var a = r.unicode;
                r.lastIndex = 0
            }
            for (var c = [];;) {
                var f = uo(r, o);
                if (null === f) break;
                if (c.push(f), !u) break;
                "" === String(f[0]) && (r.lastIndex = io(o, nt(r.lastIndex), a))
            }
            for (var s, l = "", h = 0, v = 0; v < c.length; v++) {
                f = c[v];
                for (var p = String(f[0]), y = lo(ho(tt(f.index), o.length), 0), d = [], g = 1; g < f.length; g++) d.push(void 0 === (s = f[g]) ? s : String(s));
                var m = f.groups;
                if (i) {
                    var w = [p].concat(d, y, o);
                    void 0 !== m && w.push(m);
                    var b = String(n.apply(void 0, w))
                } else b = _(p, o, y, d, m, n);
                h <= y && (l += o.slice(h, y) + b, h = y + p.length)
            }
            return l + o.slice(h)
        }];

        function _(i, u, a, c, f, t) {
            var s = a + i.length,
                l = c.length,
                n = yo;
            return void 0 !== f && (f = ct(f), n = po), S.call(t, n, function(t, n) {
                var e;
                switch (n.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return i;
                    case "`":
                        return u.slice(0, a);
                    case "'":
                        return u.slice(s);
                    case "<":
                        e = f[n.slice(1, -1)];
                        break;
                    default:
                        var r = +n;
                        if (0 == r) return t;
                        if (l < r) {
                            var o = vo(r / 10);
                            return 0 === o ? t : o <= l ? void 0 === c[o - 1] ? n.charAt(1) : c[o - 1] + n.charAt(1) : t
                        }
                        e = c[r - 1]
                }
                return void 0 === e ? "" : e
            })
        }
    });
    at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        addAll: function() {
            return function() {
                for (var t = k(this), n = qt(t.add), e = 0, r = arguments.length; e < r; e++) n.call(t, arguments[e]);
                return t
            }.apply(this, arguments)
        }
    });
    at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        deleteAll: function() {
            return function() {
                for (var t = k(this), n = qt(t.delete), e = !0, r = 0, o = arguments.length; r < o; r++) e = e && n.call(t, arguments[r]);
                return !!e
            }.apply(this, arguments)
        }
    });

    function go(t, n) {
        var e, r = k(t).constructor;
        return void 0 === r || null == (e = k(r)[mo]) ? n : qt(e)
    }
    var mo = Gt("species");
    at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        difference: function(t) {
            var n = k(this),
                e = new(go(n, Z("Set")))(n),
                r = qt(e.delete);
            return qr(t, function(t) {
                r.call(e, t)
            }), e
        }
    });

    function wo(t) {
        return Set.prototype.values.call(t)
    }
    at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        every: function(t, n) {
            var e = k(this),
                r = wo(e),
                o = Bt(t, 1 < arguments.length ? n : void 0, 3);
            return !qr(r, function(t) {
                if (!o(t, t, e)) return qr.stop()
            }, void 0, !1, !0).stopped
        }
    }), at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        filter: function(t, n) {
            var e = k(this),
                r = wo(e),
                o = Bt(t, 1 < arguments.length ? n : void 0, 3),
                i = new(go(e, Z("Set"))),
                u = qt(i.add);
            return qr(r, function(t) {
                o(t, t, e) && u.call(i, t)
            }, void 0, !1, !0), i
        }
    }), at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        find: function(t, n) {
            var e = k(this),
                r = wo(e),
                o = Bt(t, 1 < arguments.length ? n : void 0, 3);
            return qr(r, function(t) {
                if (o(t, t, e)) return qr.stop(t)
            }, void 0, !1, !0).result
        }
    }), at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        intersection: function(t) {
            var n = k(this),
                e = new(go(n, Z("Set"))),
                r = qt(n.has),
                o = qt(e.add);
            return qr(t, function(t) {
                r.call(n, t) && o.call(e, t)
            }), e
        }
    }), at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        isDisjointFrom: function(t) {
            var n = k(this),
                e = qt(n.has);
            return !qr(t, function(t) {
                if (!0 === e.call(n, t)) return qr.stop()
            }).stopped
        }
    }), at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        isSubsetOf: function(t) {
            var n = function(t) {
                    var n = fe(t);
                    if ("function" != typeof n) throw TypeError(String(t) + " is not iterable");
                    return k(n.call(t))
                }(this),
                e = k(t),
                r = e.has;
            return "function" != typeof r && (e = new(Z("Set"))(t), r = qt(e.has)), !qr(n, function(t) {
                if (!1 === r.call(e, t)) return qr.stop()
            }, void 0, !1, !0).stopped
        }
    }), at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        isSupersetOf: function(t) {
            var n = k(this),
                e = qt(n.has);
            return !qr(t, function(t) {
                if (!1 === e.call(n, t)) return qr.stop()
            }).stopped
        }
    }), at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        join: function(t) {
            var n = k(this),
                e = wo(n),
                r = void 0 === t ? "," : String(t),
                o = [];
            return qr(e, o.push, o, !1, !0), o.join(r)
        }
    }), at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        map: function(t, n) {
            var e = k(this),
                r = wo(e),
                o = Bt(t, 1 < arguments.length ? n : void 0, 3),
                i = new(go(e, Z("Set"))),
                u = qt(i.add);
            return qr(r, function(t) {
                u.call(i, o(t, t, e))
            }, void 0, !1, !0), i
        }
    }), at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        reduce: function(n, t) {
            var e, r, o = k(this),
                i = wo(o);
            if (qt(n), 1 < arguments.length) e = t;
            else {
                if ((r = i.next()).done) throw TypeError("Reduce of empty set with no initial value");
                e = r.value
            }
            return qr(i, function(t) {
                e = n(e, t, t, o)
            }, void 0, !1, !0), e
        }
    }), at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        some: function(t, n) {
            var e = k(this),
                r = wo(e),
                o = Bt(t, 1 < arguments.length ? n : void 0, 3);
            return qr(r, function(t) {
                if (o(t, t, e)) return qr.stop()
            }, void 0, !1, !0).stopped
        }
    }), at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        symmetricDifference: function(t) {
            var n = k(this),
                e = new(go(n, Z("Set")))(n),
                r = qt(e.delete),
                o = qt(e.add);
            return qr(t, function(t) {
                r.call(e, t) || o.call(e, t)
            }), e
        }
    }), at({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !1
    }, {
        union: function(t) {
            var n = k(this),
                e = new(go(n, Z("Set")))(n);
            return qr(t, qt(e.add), e), e
        }
    });
    var bo = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var So in bo) {
        var Oo = b[So],
            _o = Oo && Oo.prototype;
        if (_o && _o.forEach !== ie) try {
            D(_o, "forEach", ie)
        } catch (t) {
            _o.forEach = ie
        }
    }
    var ko = Gt("iterator"),
        xo = Gt("toStringTag"),
        jo = $e.values;
    for (var Eo in bo) {
        var Ao = b[Eo],
            Io = Ao && Ao.prototype;
        if (Io) {
            if (Io[ko] !== jo) try {
                D(Io, ko, jo)
            } catch (t) {
                Io[ko] = jo
            }
            if (Io[xo] || D(Io, xo, Eo), bo[Eo])
                for (var To in $e)
                    if (Io[To] !== $e[To]) try {
                        D(Io, To, $e[To])
                    } catch (t) {
                        Io[To] = $e[To]
                    }
        }
    }

    function No(t) {
        return (No = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Ro(t, n) {
        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function Co(t, n) {
        for (var e = 0; e < n.length; e++) {
            var r = n[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Po(t, n, e) {
        return n && Co(t.prototype, n), e && Co(t, e), t
    }

    function Lo(t, n, e) {
        return n in t ? Object.defineProperty(t, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[n] = e, t
    }

    function Fo(n, t) {
        var e = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(n);
            t && (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            })), e.push.apply(e, r)
        }
        return e
    }

    function Do(n) {
        for (var t = 1; t < arguments.length; t++) {
            var e = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Fo(e, !0).forEach(function(t) {
                Lo(n, t, e[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Fo(e).forEach(function(t) {
                Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
            })
        }
        return n
    }

    function Mo(t, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), n && Vo(t, n)
    }

    function Jo(t) {
        return (Jo = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Vo(t, n) {
        return (Vo = Object.setPrototypeOf || function(t, n) {
            return t.__proto__ = n, t
        })(t, n)
    }

    function Go(t, n, e) {
        return (Go = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
            } catch (t) {
                return !1
            }
        }() ? Reflect.construct : function(t, n, e) {
            var r = [null];
            r.push.apply(r, n);
            var o = new(Function.bind.apply(t, r));
            return e && Vo(o, e.prototype), o
        }).apply(null, arguments)
    }

    function Uo(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return (Uo = function(t) {
            if (null === t || ! function(t) {
                    return -1 !== Function.toString.call(t).indexOf("[native code]")
                }(t)) return t;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, n)
            }

            function n() {
                return Go(t, arguments, Jo(this).constructor)
            }
            return n.prototype = Object.create(t.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), Vo(n, t)
        })(t)
    }

    function zo(t, n) {
        if (null == t) return {};
        var e, r, o = function(t, n) {
            if (null == t) return {};
            var e, r, o = {},
                i = Object.keys(t);
            for (r = 0; r < i.length; r++) e = i[r], 0 <= n.indexOf(e) || (o[e] = t[e]);
            return o
        }(t, n);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            for (r = 0; r < i.length; r++) e = i[r], 0 <= n.indexOf(e) || Object.prototype.propertyIsEnumerable.call(t, e) && (o[e] = t[e])
        }
        return o
    }

    function qo(t, n) {
        return !n || "object" != typeof n && "function" != typeof n ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : n
    }

    function Bo(t, n) {
        return function(t) {
            if (Array.isArray(t)) return t
        }(t) || function(t, n) {
            var e = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var u, a = t[Symbol.iterator](); !(r = (u = a.next()).done) && (e.push(u.value), !n || e.length !== n); r = !0);
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    r || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return e
        }(t, n) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Ho(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for (var n = 0, e = new Array(t.length); n < t.length; n++) e[n] = t[n];
                return e
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    at({
        target: "URL",
        proto: !0,
        enumerable: !0
    }, {
        toJSON: function() {
            return URL.prototype.toString.call(this)
        }
    });
    e(function(t) {
        var n = function(i) {
            var c, t = Object.prototype,
                f = t.hasOwnProperty,
                n = "function" == typeof Symbol ? Symbol : {},
                o = n.iterator || "@@iterator",
                e = n.asyncIterator || "@@asyncIterator",
                r = n.toStringTag || "@@toStringTag";

            function u(t, n, e, r) {
                var o = n && n.prototype instanceof a ? n : a,
                    i = Object.create(o.prototype),
                    u = new E(r || []);
                return i._invoke = function(i, u, a) {
                    var c = l;
                    return function(t, n) {
                        if (c === v) throw new Error("Generator is already running");
                        if (c === p) {
                            if ("throw" === t) throw n;
                            return I()
                        }
                        for (a.method = t, a.arg = n;;) {
                            var e = a.delegate;
                            if (e) {
                                var r = k(e, a);
                                if (r) {
                                    if (r === y) continue;
                                    return r
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if (c === l) throw c = p, a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            c = v;
                            var o = s(i, u, a);
                            if ("normal" === o.type) {
                                if (c = a.done ? p : h, o.arg === y) continue;
                                return {
                                    value: o.arg,
                                    done: a.done
                                }
                            }
                            "throw" === o.type && (c = p, a.method = "throw", a.arg = o.arg)
                        }
                    }
                }(t, e, u), i
            }

            function s(t, n, e) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(n, e)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            i.wrap = u;
            var l = "suspendedStart",
                h = "suspendedYield",
                v = "executing",
                p = "completed",
                y = {};

            function a() {}

            function d() {}

            function g() {}
            var m = {};
            m[o] = function() {
                return this
            };
            var w = Object.getPrototypeOf,
                b = w && w(w(A([])));
            b && b !== t && f.call(b, o) && (m = b);
            var S = g.prototype = a.prototype = Object.create(m);

            function O(t) {
                ["next", "throw", "return"].forEach(function(n) {
                    t[n] = function(t) {
                        return this._invoke(n, t)
                    }
                })
            }

            function _(c) {
                var n;
                this._invoke = function(e, r) {
                    function t() {
                        return new Promise(function(t, n) {
                            ! function n(t, e, r, o) {
                                var i = s(c[t], c, e);
                                if ("throw" !== i.type) {
                                    var u = i.arg,
                                        a = u.value;
                                    return a && "object" == typeof a && f.call(a, "__await") ? Promise.resolve(a.__await).then(function(t) {
                                        n("next", t, r, o)
                                    }, function(t) {
                                        n("throw", t, r, o)
                                    }) : Promise.resolve(a).then(function(t) {
                                        u.value = t, r(u)
                                    }, function(t) {
                                        return n("throw", t, r, o)
                                    })
                                }
                                o(i.arg)
                            }(e, r, t, n)
                        })
                    }
                    return n = n ? n.then(t, t) : t()
                }
            }

            function k(t, n) {
                var e = t.iterator[n.method];
                if (e === c) {
                    if (n.delegate = null, "throw" === n.method) {
                        if (t.iterator.return && (n.method = "return", n.arg = c, k(t, n), "throw" === n.method)) return y;
                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return y
                }
                var r = s(e, t.iterator, n.arg);
                if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, y;
                var o = r.arg;
                return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = c), n.delegate = null, y) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
            }

            function x(t) {
                var n = {
                    tryLoc: t[0]
                };
                1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n)
            }

            function j(t) {
                var n = t.completion || {};
                n.type = "normal", delete n.arg, t.completion = n
            }

            function E(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(x, this), this.reset(!0)
            }

            function A(n) {
                if (n) {
                    var t = n[o];
                    if (t) return t.call(n);
                    if ("function" == typeof n.next) return n;
                    if (!isNaN(n.length)) {
                        var e = -1,
                            r = function t() {
                                for (; ++e < n.length;)
                                    if (f.call(n, e)) return t.value = n[e], t.done = !1, t;
                                return t.value = c, t.done = !0, t
                            };
                        return r.next = r
                    }
                }
                return {
                    next: I
                }
            }

            function I() {
                return {
                    value: c,
                    done: !0
                }
            }
            return d.prototype = S.constructor = g, g.constructor = d, g[r] = d.displayName = "GeneratorFunction", i.isGeneratorFunction = function(t) {
                var n = "function" == typeof t && t.constructor;
                return !!n && (n === d || "GeneratorFunction" === (n.displayName || n.name))
            }, i.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, r in t || (t[r] = "GeneratorFunction")), t.prototype = Object.create(S), t
            }, i.awrap = function(t) {
                return {
                    __await: t
                }
            }, O(_.prototype), _.prototype[e] = function() {
                return this
            }, i.AsyncIterator = _, i.async = function(t, n, e, r) {
                var o = new _(u(t, n, e, r));
                return i.isGeneratorFunction(n) ? o : o.next().then(function(t) {
                    return t.done ? t.value : o.next()
                })
            }, O(S), S[r] = "Generator", S[o] = function() {
                return this
            }, S.toString = function() {
                return "[object Generator]"
            }, i.keys = function(e) {
                var r = [];
                for (var t in e) r.push(t);
                return r.reverse(),
                    function t() {
                        for (; r.length;) {
                            var n = r.pop();
                            if (n in e) return t.value = n, t.done = !1, t
                        }
                        return t.done = !0, t
                    }
            }, i.values = A, E.prototype = {
                constructor: E,
                reset: function(t) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(j), !t)
                        for (var n in this) "t" === n.charAt(0) && f.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = c)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var r = this;

                    function t(t, n) {
                        return i.type = "throw", i.arg = e, r.next = t, n && (r.method = "next", r.arg = c), !!n
                    }
                    for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var o = this.tryEntries[n],
                            i = o.completion;
                        if ("root" === o.tryLoc) return t("end");
                        if (o.tryLoc <= this.prev) {
                            var u = f.call(o, "catchLoc"),
                                a = f.call(o, "finallyLoc");
                            if (u && a) {
                                if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                            } else if (u) {
                                if (this.prev < o.catchLoc) return t(o.catchLoc, !0)
                            } else {
                                if (!a) throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc) return t(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, n) {
                    for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc <= this.prev && f.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                            var o = r;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= n && n <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return i.type = t, i.arg = n, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(i)
                },
                complete: function(t, n) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && n && (this.next = n), y
                },
                finish: function(t) {
                    for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var e = this.tryEntries[n];
                        if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), y
                    }
                },
                catch: function(t) {
                    for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                        var e = this.tryEntries[n];
                        if (e.tryLoc === t) {
                            var r = e.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                j(e)
                            }
                            return o
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, n, e) {
                    return this.delegate = {
                        iterator: A(t),
                        resultName: n,
                        nextLoc: e
                    }, "next" === this.method && (this.arg = c), y
                }
            }, i
        }(t.exports);
        try {
            regeneratorRuntime = n
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(n)
        }
    });

    function Yo(e) {
        return function(t) {
            var n = String(l(t));
            return 1 & e && (n = n.replace(Ko, "")), 2 & e && (n = n.replace(Qo, "")), n
        }
    }
    var $o = "\t\n\v\f\r ???????????????????????????????????????????????\u2028\u2029\ufeff",
        Wo = "[" + $o + "]",
        Ko = RegExp("^" + Wo + Wo + "*"),
        Qo = RegExp(Wo + Wo + "*$"),
        Xo = {
            start: Yo(1),
            end: Yo(2),
            trim: Yo(3)
        },
        Zo = Xo.trim,
        ti = b.parseFloat,
        ni = 1 / ti($o + "-0") != -1 / 0 ? function(t) {
            var n = Zo(String(t)),
                e = ti(n);
            return 0 === e && "-" == n.charAt(0) ? -0 : e
        } : ti;
    at({
        global: !0,
        forced: parseFloat != ni
    }, {
        parseFloat: ni
    });
    var ei = [].push,
        ri = Math.min,
        oi = 4294967295,
        ii = !d(function() {
            return !RegExp(oi, "y")
        });
    oo("split", 2, function(o, d, g) {
        var m;
        return m = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || 1 < ".".split(/()()/).length || "".split(/.?/).length ? function(t, n) {
            var e = String(l(this)),
                r = void 0 === n ? oi : n >>> 0;
            if (0 == r) return [];
            if (void 0 === t) return [e];
            if (!Gr(t)) return d.call(e, t, r);
            for (var o, i, u, a = [], c = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, s = new RegExp(t.source, c + "g");
                (o = Fr.call(s, e)) && !(f < (i = s.lastIndex) && (a.push(e.slice(f, o.index)), 1 < o.length && o.index < e.length && ei.apply(a, o.slice(1)), u = o[0].length, f = i, a.length >= r));) s.lastIndex === o.index && s.lastIndex++;
            return f === e.length ? !u && s.test("") || a.push("") : a.push(e.slice(f)), a.length > r ? a.slice(0, r) : a
        } : "0".split(void 0, 0).length ? function(t, n) {
            return void 0 === t && 0 === n ? [] : d.call(this, t, n)
        } : d, [function(t, n) {
            var e = l(this),
                r = null == t ? void 0 : t[o];
            return void 0 !== r ? r.call(t, e, n) : m.call(String(e), t, n)
        }, function(t, n) {
            var e = g(m, t, this, n, m !== d);
            if (e.done) return e.value;
            var r = k(t),
                o = String(this),
                i = go(r, RegExp),
                u = r.unicode,
                a = (r.ignoreCase ? "i" : "") + (r.multiline ? "m" : "") + (r.unicode ? "u" : "") + (ii ? "y" : "g"),
                c = new i(ii ? r : "^(?:" + r.source + ")", a),
                f = void 0 === n ? oi : n >>> 0;
            if (0 == f) return [];
            if (0 === o.length) return null === uo(c, o) ? [o] : [];
            for (var s = 0, l = 0, h = []; l < o.length;) {
                c.lastIndex = ii ? l : 0;
                var v, p = uo(c, ii ? o : o.slice(l));
                if (null === p || (v = ri(nt(c.lastIndex + (ii ? 0 : l)), o.length)) === s) l = io(o, l, u);
                else {
                    if (h.push(o.slice(s, l)), h.length === f) return h;
                    for (var y = 1; y <= p.length - 1; y++)
                        if (h.push(p[y]), h.length === f) return h;
                    l = s = v
                }
            }
            return h.push(o.slice(s)), h
        }]
    }, !ii);
    var ui = regeneratorRuntime.mark(li),
        ai = regeneratorRuntime.mark(hi);

    function ci(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }

    function fi(n, e, t) {
        return 2 < arguments.length && void 0 !== t && t ? Object.keys(n).map(function(t) {
            return n[t] === e[t]
        }).reduce(function(t, n) {
            return t ? n : t
        }, !0) : 0 === Ho(new Set(n.filter(function(t) {
            return !new Set(e).has(t)
        }))).length
    }

    function si(t) {
        var n = t.map(function(t) {
            return t.length
        }).reduce(function(t, n) {
            return Math.max(t, n)
        }, 0);
        return Ho(Array(n).keys()).map(function(n) {
            return t.map(function(t) {
                return t[n]
            })
        })
    }

    function li(n) {
        return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    return t.delegateYield(n, "t0", 1);
                case 1:
                case "end":
                    return t.stop()
            }
        }, ui)
    }

    function hi(n, e) {
        var r, o, i, u, a, c, f, s, l, h = arguments;
        return regeneratorRuntime.wrap(function(t) {
            for (;;) switch (t.prev = t.next) {
                case 0:
                    r = 2 < h.length && void 0 !== h[2] ? h[2] : function() {
                        return !1
                    }, u = !(i = !(o = 0)), a = void 0, t.prev = 5, c = n[Symbol.iterator]();
                case 7:
                    if (i = (f = c.next()).done) {
                        t.next = 18;
                        break
                    }
                    if (s = f.value, r()) return t.abrupt("return");
                    t.next = 11;
                    break;
                case 11:
                    if (l = e(s, o++)) return t.next = 15, l;
                    t.next = 15;
                    break;
                case 15:
                    i = !0, t.next = 7;
                    break;
                case 18:
                    t.next = 24;
                    break;
                case 20:
                    t.prev = 20, t.t0 = t.catch(5), u = !0, a = t.t0;
                case 24:
                    t.prev = 24, t.prev = 25, i || null == c.return || c.return();
                case 27:
                    if (t.prev = 27, u) throw a;
                    t.next = 30;
                    break;
                case 30:
                    return t.finish(27);
                case 31:
                    return t.finish(24);
                case 32:
                case "end":
                    return t.stop()
            }
        }, ai, null, [
            [5, 20, 24, 32],
            [25, , 27, 31]
        ])
    }

    function vi(t, n, e) {
        var r = 2 < arguments.length && void 0 !== e ? e : function() {
            return !1
        };
        return Array.from(hi(t, n, r))
    }

    function pi(t) {
        for (var n = arguments.length, e = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r];
        return e.reduce(function(t, n) {
            return t.split(n[0]).join(n[1])
        }, t)
    }

    function yi(n) {
        for (var t = arguments.length, e = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) e[r - 1] = arguments[r];
        return e.filter(function(t) {
            return n.includes(t)
        })
    }
    var di = function() {
            function e(t) {
                var n;
                return Ro(this, e), (n = qo(this, Jo(e).call(this, Error))).message = "".concat(t, " not found. You maybe use a wrong path or url. Be sure you use absolute path, relative one being not supported."), n.name = "FileNotFoundError", n
            }
            return Mo(e, Uo(Error)), e
        }(),
        gi = function() {
            function o() {
                var t;
                Ro(this, o), t = qo(this, Jo(o).call(this, TypeError));
                for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                return t.message = "can't work with multiple variable types: [".concat(e.join(","), "]."), t.name = "MixedTypeError", t
            }
            return Mo(o, Uo(TypeError)), o
        }(),
        mi = function() {
            function r(t, n) {
                var e;
                return Ro(this, r), (e = qo(this, Jo(r).call(this, Error))).message = "".concat(t, " not found in [").concat(n.join(", "), "]."), e.name = "NoSuchColumnError", e
            }
            return Mo(r, Uo(Error)), r
        }(),
        wi = function() {
            function r(t, n) {
                var e;
                return Ro(this, r), (e = qo(this, Jo(r).call(this, Error))).message = "[".concat(t.join(", "), "] while expecting [").concat(n.join(", "), "]."), e.name = "WrongSchemaError", e
            }
            return Mo(r, Uo(Error)), r
        }(),
        bi = function() {
            function r(t, n) {
                var e;
                return Ro(this, r), (e = qo(this, Jo(r).call(this, TypeError))).message = "".concat(t && t.constructor ? t.constructor.name : No(t), " while expecting ").concat(n, "."), e.name = "ArgumentTypeError", e
            }
            return Mo(r, Uo(TypeError)), r
        }(),
        Si = function() {
            function e(t) {
                var n;
                return Ro(this, e), (n = qo(this, Jo(e).call(this, Error))).message = "".concat(t, "."), n.name = "SQLParseError", n
            }
            return Mo(e, Uo(Error)), e
        }(),
        Oi = function() {
            function e(t) {
                var n;
                return Ro(this, e), (n = qo(this, Jo(e).call(this, Error))).message = "The SQL temporary table ".concat(t, " already exits. Use overwrite = true to overwrite it."), n.name = "TableAlreadyExistsError", n
            }
            return Mo(e, Uo(Error)), e
        }(),
        _i = function() {
            function e(t) {
                var n;
                return Ro(this, e), (n = qo(this, Jo(e).call(this, Error))).message = "The SQL temporary table ".concat(t, " is not allowed. Avoid to use Spaces, quotes, tabs...."), n.name = "WrongTableNameError", n
            }
            return Mo(e, Uo(Error)), e
        }(),
        ki = Object.freeze({
            FileNotFoundError: di,
            MixedTypeError: gi,
            NoSuchColumnError: mi,
            WrongSchemaError: wi,
            ArgumentTypeError: bi,
            SQLParseError: Si,
            TableAlreadyExistsError: Oi,
            WrongTableNameError: _i
        }),
        xi = zr.onFreeze,
        ji = Object.freeze,
        Ei = d(function() {
            ji(1)
        });
    at({
        target: "Object",
        stat: !0,
        forced: Ei,
        sham: !Ur
    }, {
        freeze: function(t) {
            return ji && m(t) ? ji(xi(t)) : t
        }
    });
    var Ai = d(function() {
        Ne(1)
    });
    at({
        target: "Object",
        stat: !0,
        forced: Ai,
        sham: !Ae
    }, {
        getPrototypeOf: function(t) {
            return Ne(ct(t))
        }
    });
    var Ii = Symbol("columns"),
        Ti = Symbol("values"),
        Ni = function() {
            function r(t, n) {
                if (Ro(this, r), !t) throw new bi(t, "Row | Array | Object");
                this[Ii] = n || Object.keys(t), this[Ti] = Object.freeze(this._build(t))
            }
            return Po(r, [{
                key: Symbol.iterator,
                value: regeneratorRuntime.mark(function() {
                    var n, e, r;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                n = 0, e = Object.values(this[Ti]);
                            case 1:
                                if (n < e.length) return r = e[n], t.next = 5, r;
                                t.next = 8;
                                break;
                            case 5:
                                n++, t.next = 1;
                                break;
                            case 8:
                            case "end":
                                return t.stop()
                        }
                    }, r, this)
                })
            }, {
                key: "__newInstance__",
                value: function(t, n) {
                    var e;
                    return fi(this[Ii], n) ? Object.assign(Object.create(Object.getPrototypeOf(this)), this, (Lo(e = {}, Ti, t), Lo(e, Ii, Ho(n)), e)) : new r(t, n)
                }
            }, {
                key: "_build",
                value: function(t) {
                    if (t instanceof Array) return this._fromArray(t);
                    if (t instanceof r) return this._fromObject(t[Ti]);
                    if (t instanceof Object && null !== t) return this._fromObject(t);
                    throw new bi(t, "Row | Array | Object")
                }
            }, {
                key: "_fromObject",
                value: function(n) {
                    return Object.assign.apply(Object, [{}].concat(Ho(this[Ii].map(function(t) {
                        return Lo({}, t, n[t])
                    }))))
                }
            }, {
                key: "_fromArray",
                value: function(n) {
                    return Object.assign.apply(Object, [{}].concat(Ho(Object.entries(this[Ii]).map(function(t) {
                        return Lo({}, t[1], n[t[0]])
                    }))))
                }
            }, {
                key: "toDict",
                value: function() {
                    return Object.assign({}, this[Ti])
                }
            }, {
                key: "toArray",
                value: function() {
                    return Ho(this)
                }
            }, {
                key: "size",
                value: function() {
                    return this[Ii].length
                }
            }, {
                key: "hash",
                value: function() {
                    return function(t) {
                        var n = 0;
                        if (0 === t.length) return n;
                        for (var e = 0; e < t.length; e++) n = (n << 5) - n + t.charCodeAt(e), n &= n;
                        return n
                    }(JSON.stringify(this[Ti]))
                }
            }, {
                key: "has",
                value: function(t) {
                    return this[Ii].includes(t)
                }
            }, {
                key: "select",
                value: function() {
                    for (var n = this, t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    return this.__newInstance__(Object.assign.apply(Object, [{}].concat(Ho(e.map(function(t) {
                        return Lo({}, t, n.get(t))
                    })))), e)
                }
            }, {
                key: "get",
                value: function(t) {
                    if (!this.has(t)) throw new mi(t, this[Ii]);
                    return this[Ti][t]
                }
            }, {
                key: "set",
                value: function(t, n) {
                    var e = Object.assign({}, this[Ti], Lo({}, t, n));
                    return this.__newInstance__(e, Object.keys(e))
                }
            }, {
                key: "delete",
                value: function(n) {
                    if (!this.has(n)) throw new mi(n, this[Ii]);
                    return this.select.apply(this, Ho(this[Ii].filter(function(t) {
                        return t !== n
                    })))
                }
            }]), r
        }(),
        Ri = Symbol("columns"),
        Ci = Symbol("rows"),
        Pi = Symbol("groups"),
        Li = Symbol("hashes"),
        Fi = function() {
            function o(t, n, e, r) {
                Ro(this, o), this[Pi] = e, this[Li] = r, this.df = t, this.on = 0 < n.length ? n : t.listColumns()
            }
            return Po(o, [{
                key: Symbol.iterator,
                value: regeneratorRuntime.mark(function t() {
                    var n, e, r, o, i, u;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                e = !(n = !0), r = void 0, t.prev = 3, o = this[Li][Symbol.iterator]();
                            case 5:
                                if (n = (i = o.next()).done) {
                                    t.next = 12;
                                    break
                                }
                                return u = i.value, t.next = 9, this[Pi][u];
                            case 9:
                                n = !0, t.next = 5;
                                break;
                            case 12:
                                t.next = 18;
                                break;
                            case 14:
                                t.prev = 14, t.t0 = t.catch(3), e = !0, r = t.t0;
                            case 18:
                                t.prev = 18, t.prev = 19, n || null == o.return || o.return();
                            case 21:
                                if (t.prev = 21, e) throw r;
                                t.next = 24;
                                break;
                            case 24:
                                return t.finish(21);
                            case 25:
                                return t.finish(18);
                            case 26:
                            case "end":
                                return t.stop()
                        }
                    }, t, this, [
                        [3, 14, 18, 26],
                        [19, , 21, 25]
                    ])
                })
            }, {
                key: "get",
                value: function(t) {
                    return this[Pi][t]
                }
            }, {
                key: "toCollection",
                value: function() {
                    return Ho(this)
                }
            }, {
                key: "show",
                value: function(t) {
                    var o = 0 < arguments.length && void 0 !== t && t;
                    return Ho(this).map(function(t) {
                        var n = t.group,
                            e = t.groupKey,
                            r = "--\n[".concat(JSON.stringify(e), "]\n--");
                        return o || console.log(r), r + "\n" + n.show(10, o)
                    }).reduce(function(t, n) {
                        return t + "\n" + n
                    })
                }
            }, {
                key: "listGroups",
                value: function() {
                    return Ho(this).map(function(t) {
                        return t.groupKey
                    })
                }
            }, {
                key: "listHashs",
                value: function() {
                    return this[Li]
                }
            }, {
                key: "map",
                value: function(n) {
                    var t, e = Ho(this).map(function(t) {
                        return t.group.map(n)
                    });
                    return this.df.__newInstance__((t = []).concat.apply(t, Ho(e.map(function(t) {
                        return t.toCollection()
                    }))), e[0].listColumns())
                }
            }, {
                key: "filter",
                value: function(n) {
                    var t, e = Ho(this).map(function(t) {
                        return t.group.filter(n)
                    }).filter(function(t) {
                        return 0 < t.listColumns().length
                    });
                    return 0 === e.length ? this.df.__newInstance__([], this.df.listColumns()) : this.df.__newInstance__((t = []).concat.apply(t, Ho(e.map(function(t) {
                        return t.toCollection()
                    }))), this.df.listColumns())
                }
            }, {
                key: "chain",
                value: function() {
                    for (var t, n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                    var o = Ho(this).map(function(t) {
                        var n = t.group;
                        return n.chain.apply(n, e)
                    });
                    return this.df.__newInstance__((t = []).concat.apply(t, Ho(o.map(function(t) {
                        return t.toCollection()
                    }))), o[0].listColumns())
                }
            }, {
                key: "aggregate",
                value: function(r, t) {
                    var o = 1 < arguments.length && void 0 !== t ? t : "aggregation";
                    return this.df.__newInstance__(Ho(this).map(function(t) {
                        var n = t.group,
                            e = t.groupKey;
                        return Do({}, e, Lo({}, o, r(n, e)))
                    }), [].concat(Ho(this.on), [o]))
                }
            }, {
                key: "pivot",
                value: function(e, t) {
                    var r = 1 < arguments.length && void 0 !== t ? t : function(t) {
                            return t.count()
                        },
                        n = [].concat(Ho(this.on), Ho(this.df.distinct(e).toArray(e)));
                    return this.df.__newInstance__(this.aggregate(function(t) {
                        return t.groupBy(e).aggregate(function(t, n) {
                            return Lo({}, n[e], r(t, n))
                        }).toArray("aggregation").reduce(function(t, n) {
                            return Do({}, t, {}, n)
                        }, {})
                    }).toCollection().map(function(t) {
                        var n = t.aggregation;
                        return Do({}, zo(t, ["aggregation"]), {}, n)
                    }), n)
                }
            }, {
                key: "melt",
                value: function(t, n) {
                    var i = this,
                        u = 0 < arguments.length && void 0 !== t ? t : "variable",
                        a = 1 < arguments.length && void 0 !== n ? n : "value",
                        e = [].concat(Ho(this.on), [u, a]);
                    return this.df.__newInstance__(this.aggregate(function(t) {
                        return Object.entries(t.toDict()).reduce(function(t, n) {
                            var e = Bo(n, 2),
                                r = e[0],
                                o = e[1];
                            return [].concat(Ho(t), Ho(o.reduce(function(t, n) {
                                var e;
                                return i.on.includes(r) ? t : [].concat(Ho(t), [(e = {}, Lo(e, u, r), Lo(e, a, n), e)])
                            }, [])))
                        }, [])
                    }).toCollection().reduce(function(t, n) {
                        var e = n.aggregation,
                            r = zo(n, ["aggregation"]);
                        return [].concat(Ho(t), Ho(e.map(function(t) {
                            return Do({}, r, {}, t)
                        })))
                    }, []), e)
                }
            }]), o
        }();

    function Di(t) {
        if (Qi.hasOwnProperty(t)) {
            var n = Qi[t];
            delete Qi[t], n()
        }
    }

    function Mi(t) {
        return function() {
            Di(t)
        }
    }

    function Ji(t) {
        Di(t.data)
    }

    function Vi(t) {
        b.postMessage(t + "", qi.protocol + "//" + qi.host)
    }
    var Gi, Ui, zi, qi = b.location,
        Bi = b.setImmediate,
        Hi = b.clearImmediate,
        Yi = b.process,
        $i = b.MessageChannel,
        Wi = b.Dispatch,
        Ki = 0,
        Qi = {},
        Xi = "onreadystatechange";
    Bi && Hi || (Bi = function(t) {
        for (var n = [], e = 1; e < arguments.length;) n.push(arguments[e++]);
        return Qi[++Ki] = function() {
            ("function" == typeof t ? t : Function(t)).apply(void 0, n)
        }, Gi(Ki), Ki
    }, Hi = function(t) {
        delete Qi[t]
    }, "process" == o(Yi) ? Gi = function(t) {
        Yi.nextTick(Mi(t))
    } : Wi && Wi.now ? Gi = function(t) {
        Wi.now(Mi(t))
    } : $i ? (zi = (Ui = new $i).port2, Ui.port1.onmessage = Ji, Gi = Bt(zi.postMessage, zi, 1)) : !b.addEventListener || "function" != typeof postMessage || b.importScripts || d(Vi) ? Gi = Xi in i("script") ? function(t) {
        Ft.appendChild(i("script"))[Xi] = function() {
            Ft.removeChild(this), Di(t)
        }
    } : function(t) {
        setTimeout(Mi(t), 0)
    } : (Gi = Vi, b.addEventListener("message", Ji, !1)));
    var Zi, tu, nu, eu, ru, ou, iu, uu = {
            set: Bi,
            clear: Hi
        },
        au = Z("navigator", "userAgent") || "",
        cu = P.f,
        fu = uu.set,
        su = b.MutationObserver || b.WebKitMutationObserver,
        lu = b.process,
        hu = b.Promise,
        vu = "process" == o(lu),
        pu = cu(b, "queueMicrotask"),
        yu = pu && pu.value;
    yu || (Zi = function() {
        var t, n;
        for (vu && (t = lu.domain) && t.exit(); tu;) {
            n = tu.fn, tu = tu.next;
            try {
                n()
            } catch (t) {
                throw tu ? eu() : nu = void 0, t
            }
        }
        nu = void 0, t && t.enter()
    }, eu = vu ? function() {
        lu.nextTick(Zi)
    } : su && !/(iphone|ipod|ipad).*applewebkit/i.test(au) ? (ru = !0, ou = document.createTextNode(""), new su(Zi).observe(ou, {
        characterData: !0
    }), function() {
        ou.data = ru = !ru
    }) : hu && hu.resolve ? (iu = hu.resolve(void 0), function() {
        iu.then(Zi)
    }) : function() {
        fu.call(b, Zi)
    });

    function du(t) {
        var e, r;
        this.promise = new t(function(t, n) {
            if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
            e = t, r = n
        }), this.resolve = qt(e), this.reject = qt(r)
    }

    function gu(t, n) {
        if (k(t), m(n) && n.constructor === t) return n;
        var e = Au.f(t);
        return (0, e.resolve)(n), e.promise
    }

    function mu(t) {
        try {
            return {
                error: !1,
                value: t()
            }
        } catch (t) {
            return {
                error: !0,
                value: t
            }
        }
    }

    function wu(t) {
        var n;
        return !(!m(t) || "function" != typeof(n = t.then)) && n
    }

    function bu(l, h, v) {
        if (!h.notified) {
            h.notified = !0;
            var p = h.reactions;
            Eu(function() {
                for (var t = h.value, n = 1 == h.state, e = 0; p.length > e;) {
                    var r, o, i, u = p[e++],
                        a = n ? u.ok : u.fail,
                        c = u.resolve,
                        f = u.reject,
                        s = u.domain;
                    try {
                        a ? (n || (2 === h.rejection && Qu(l, h), h.rejection = 1), !0 === a ? r = t : (s && s.enter(), r = a(t), s && (s.exit(), i = !0)), r === u.promise ? f(Fu("Promise-chain cycle")) : (o = wu(r)) ? o.call(r, c, f) : c(r)) : f(t)
                    } catch (t) {
                        s && !i && s.exit(), f(t)
                    }
                }
                h.reactions = [], h.notified = !1, v && !h.rejection && Wu(l, h)
            })
        }
    }

    function Su(t, n, e) {
        var r, o;
        Bu ? ((r = Du.createEvent("Event")).promise = n, r.reason = e, r.initEvent(t, !1, !0), b.dispatchEvent(r)) : r = {
            promise: n,
            reason: e
        }, (o = b["on" + t]) ? o(r) : t === Hu && function(t, n) {
            var e = b.console;
            e && e.error && (1 === arguments.length ? e.error(t) : e.error(t, n))
        }("Unhandled promise rejection", e)
    }

    function Ou(n, e, r, o) {
        return function(t) {
            n(e, r, t, o)
        }
    }

    function _u(t, n, e, r) {
        n.done || (n.done = !0, r && (n = r), n.value = e, n.state = 2, bu(t, n, !0))
    }
    var ku, xu, ju, Eu = yu || function(t) {
            var n = {
                fn: t,
                next: void 0
            };
            nu && (nu.next = n), tu || (tu = n, eu()), nu = n
        },
        Au = {
            f: function(t) {
                return new du(t)
            }
        },
        Iu = uu.set,
        Tu = Gt("species"),
        Nu = "Promise",
        Ru = st.get,
        Cu = st.set,
        Pu = st.getterFor(Nu),
        Lu = b[Nu],
        Fu = b.TypeError,
        Du = b.document,
        Mu = b.process,
        Ju = b.fetch,
        Vu = Mu && Mu.versions,
        Gu = Vu && Vu.v8 || "",
        Uu = Au.f,
        zu = Uu,
        qu = "process" == o(Mu),
        Bu = !!(Du && Du.createEvent && b.dispatchEvent),
        Hu = "unhandledrejection",
        Yu = Tt(Nu, function() {
            function n() {}
            var t = Lu.resolve(1),
                e = (t.constructor = {})[Tu] = function(t) {
                    t(n, n)
                };
            return !((qu || "function" == typeof PromiseRejectionEvent) && t.then(n) instanceof e && 0 !== Gu.indexOf("6.6") && -1 === au.indexOf("Chrome/66"))
        }),
        $u = Yu || !we(function(t) {
            Lu.all(t).catch(function() {})
        }),
        Wu = function(e, r) {
            Iu.call(b, function() {
                var t, n = r.value;
                if (Ku(r) && (t = mu(function() {
                        qu ? Mu.emit("unhandledRejection", n, e) : Su(Hu, e, n)
                    }), r.rejection = qu || Ku(r) ? 2 : 1, t.error)) throw t.value
            })
        },
        Ku = function(t) {
            return 1 !== t.rejection && !t.parent
        },
        Qu = function(t, n) {
            Iu.call(b, function() {
                qu ? Mu.emit("rejectionHandled", t) : Su("rejectionhandled", t, n.value)
            })
        },
        Xu = function(e, r, t, n) {
            if (!r.done) {
                r.done = !0, n && (r = n);
                try {
                    if (e === t) throw Fu("Promise can't be resolved itself");
                    var o = wu(t);
                    o ? Eu(function() {
                        var n = {
                            done: !1
                        };
                        try {
                            o.call(t, Ou(Xu, e, n, r), Ou(_u, e, n, r))
                        } catch (t) {
                            _u(e, n, t, r)
                        }
                    }) : (r.value = t, r.state = 1, bu(e, r, !1))
                } catch (t) {
                    _u(e, {
                        done: !1
                    }, t, r)
                }
            }
        };
    Yu && (Lu = function(t) {
        Dr(this, Lu, Nu), qt(t), ku.call(this);
        var n = Ru(this);
        try {
            t(Ou(Xu, this, n), Ou(_u, this, n))
        } catch (t) {
            _u(this, n, t)
        }
    }, (ku = function(t) {
        Cu(this, {
            type: Nu,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = Jr(Lu.prototype, {
        then: function(t, n) {
            var e = Pu(this),
                r = Uu(go(this, Lu));
            return r.ok = "function" != typeof t || t, r.fail = "function" == typeof n && n, r.domain = qu ? Mu.domain : void 0, e.parent = !0, e.reactions.push(r), 0 != e.state && bu(this, e, !1), r.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), xu = function() {
        var t = new ku,
            n = Ru(t);
        this.promise = t, this.resolve = Ou(Xu, t, n), this.reject = Ou(_u, t, n)
    }, Au.f = Uu = function(t) {
        return t === Lu || t === ju ? new xu(t) : zu(t)
    }, "function" == typeof Ju && at({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(t) {
            return gu(Lu, Ju.apply(b, arguments))
        }
    })), at({
        global: !0,
        wrap: !0,
        forced: Yu
    }, {
        Promise: Lu
    }), zt(Lu, Nu, !1), Vr(Nu), ju = ht[Nu], at({
        target: Nu,
        stat: !0,
        forced: Yu
    }, {
        reject: function(t) {
            var n = Uu(this);
            return n.reject.call(void 0, t), n.promise
        }
    }), at({
        target: Nu,
        stat: !0,
        forced: Yu
    }, {
        resolve: function(t) {
            return gu(this, t)
        }
    }), at({
        target: Nu,
        stat: !0,
        forced: $u
    }, {
        all: function(t) {
            var a = this,
                n = Uu(a),
                c = n.resolve,
                f = n.reject,
                e = mu(function() {
                    var r = qt(a.resolve),
                        o = [],
                        i = 0,
                        u = 1;
                    qr(t, function(t) {
                        var n = i++,
                            e = !1;
                        o.push(void 0), u++, r.call(a, t).then(function(t) {
                            e || (e = !0, o[n] = t, --u || c(o))
                        }, f)
                    }), --u || c(o)
                });
            return e.error && f(e.value), n.promise
        },
        race: function(t) {
            var e = this,
                r = Uu(e),
                o = r.reject,
                n = mu(function() {
                    var n = qt(e.resolve);
                    qr(t, function(t) {
                        n.call(e, t).then(r.resolve, o)
                    })
                });
            return n.error && o(n.value), r.promise
        }
    }), oo("match", 1, function(r, f, s) {
        return [function(t) {
            var n = l(this),
                e = null == t ? void 0 : t[r];
            return void 0 !== e ? e.call(t, n) : new RegExp(t)[r](String(n))
        }, function(t) {
            var n = s(f, t, this);
            if (n.done) return n.value;
            var e = k(t),
                r = String(this);
            if (!e.global) return uo(e, r);
            for (var o, i = e.unicode, u = [], a = e.lastIndex = 0; null !== (o = uo(e, r));) {
                var c = String(o[0]);
                "" === (u[a] = c) && (e.lastIndex = io(r, nt(e.lastIndex), i)), a++
            }
            return 0 === a ? null : u
        }]
    });
    var Zu = "$";

    function ta() {}

    function na(t, n) {
        var e = new ta;
        if (t instanceof ta) t.each(function(t, n) {
            e.set(n, t)
        });
        else if (Array.isArray(t)) {
            var r, o = -1,
                i = t.length;
            if (null == n)
                for (; ++o < i;) e.set(o, t[o]);
            else
                for (; ++o < i;) e.set(n(r = t[o], o, t), r)
        } else if (t)
            for (var u in t) e.set(u, t[u]);
        return e
    }

    function ea() {}
    ta.prototype = na.prototype = {
        constructor: ta,
        has: function(t) {
            return Zu + t in this
        },
        get: function(t) {
            return this[Zu + t]
        },
        set: function(t, n) {
            return this[Zu + t] = n, this
        },
        remove: function(t) {
            var n = Zu + t;
            return n in this && delete this[n]
        },
        clear: function() {
            for (var t in this) t[0] === Zu && delete this[t]
        },
        keys: function() {
            var t = [];
            for (var n in this) n[0] === Zu && t.push(n.slice(1));
            return t
        },
        values: function() {
            var t = [];
            for (var n in this) n[0] === Zu && t.push(this[n]);
            return t
        },
        entries: function() {
            var t = [];
            for (var n in this) n[0] === Zu && t.push({
                key: n.slice(1),
                value: this[n]
            });
            return t
        },
        size: function() {
            var t = 0;
            for (var n in this) n[0] === Zu && ++t;
            return t
        },
        empty: function() {
            for (var t in this)
                if (t[0] === Zu) return !1;
            return !0
        },
        each: function(t) {
            for (var n in this) n[0] === Zu && t(this[n], n.slice(1), this)
        }
    };
    var ra = na.prototype;
    ea.prototype = function(t, n) {
        var e = new ea;
        if (t instanceof ea) t.each(function(t) {
            e.add(t)
        });
        else if (t) {
            var r = -1,
                o = t.length;
            if (null == n)
                for (; ++r < o;) e.add(t[r]);
            else
                for (; ++r < o;) e.add(n(t[r], r, t))
        }
        return e
    }.prototype = {
        constructor: ea,
        has: ra.has,
        add: function(t) {
            return this[Zu + (t += "")] = t, this
        },
        remove: ra.remove,
        clear: ra.clear,
        values: ra.keys,
        size: ra.size,
        empty: ra.empty,
        each: ra.each
    };
    var oa = {
        value: function() {}
    };

    function ia() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
            if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new ua(r)
    }

    function ua(t) {
        this._ = t
    }

    function aa(t, n) {
        for (var e, r = 0, o = t.length; r < o; ++r)
            if ((e = t[r]).name === n) return e.value
    }

    function ca(t, n, e) {
        for (var r = 0, o = t.length; r < o; ++r)
            if (t[r].name === n) {
                t[r] = oa, t = t.slice(0, r).concat(t.slice(r + 1));
                break
            } return null != e && t.push({
            name: n,
            value: e
        }), t
    }

    function fa(r, o) {
        return function(t, n) {
            var e = function(r, t) {
                var o, i, u, a, c = ia("beforesend", "progress", "load", "error"),
                    f = na(),
                    s = new XMLHttpRequest,
                    l = null,
                    h = null,
                    v = 0;

                function n(t) {
                    var n, e = s.status;
                    if (!e && function(t) {
                            var n = t.responseType;
                            return n && "text" !== n ? t.response : t.responseText
                        }(s) || 200 <= e && e < 300 || 304 === e) {
                        if (u) try {
                            n = u.call(o, s)
                        } catch (t) {
                            return void c.call("error", o, t)
                        } else n = s;
                        c.call("load", o, n)
                    } else c.call("error", o, t)
                }
                if ("undefined" == typeof XDomainRequest || "withCredentials" in s || !/^(http(s)?:)?\/\//.test(r) || (s = new XDomainRequest), "onload" in s ? s.onload = s.onerror = s.ontimeout = n : s.onreadystatechange = function(t) {
                        3 < s.readyState && n(t)
                    }, s.onprogress = function(t) {
                        c.call("progress", o, t)
                    }, o = {
                        header: function(t, n) {
                            return t = (t + "").toLowerCase(), arguments.length < 2 ? f.get(t) : (null == n ? f.remove(t) : f.set(t, n + ""), o)
                        },
                        mimeType: function(t) {
                            return arguments.length ? (i = null == t ? null : t + "", o) : i
                        },
                        responseType: function(t) {
                            return arguments.length ? (a = t, o) : a
                        },
                        timeout: function(t) {
                            return arguments.length ? (v = +t, o) : v
                        },
                        user: function(t) {
                            return arguments.length < 1 ? l : (l = null == t ? null : t + "", o)
                        },
                        password: function(t) {
                            return arguments.length < 1 ? h : (h = null == t ? null : t + "", o)
                        },
                        response: function(t) {
                            return u = t, o
                        },
                        get: function(t, n) {
                            return o.send("GET", t, n)
                        },
                        post: function(t, n) {
                            return o.send("POST", t, n)
                        },
                        send: function(t, n, e) {
                            return s.open(t, r, !0, l, h), null == i || f.has("accept") || f.set("accept", i + ",*/*"), s.setRequestHeader && f.each(function(t, n) {
                                s.setRequestHeader(n, t)
                            }), null != i && s.overrideMimeType && s.overrideMimeType(i), null != a && (s.responseType = a), 0 < v && (s.timeout = v), null == e && "function" == typeof n && (e = n, n = null), null != e && 1 === e.length && (e = function(e) {
                                return function(t, n) {
                                    e(null == t ? n : null)
                                }
                            }(e)), null != e && o.on("error", e).on("load", function(t) {
                                e(null, t)
                            }), c.call("beforesend", o, s), s.send(null == n ? null : n), o
                        },
                        abort: function() {
                            return s.abort(), o
                        },
                        on: function() {
                            var t = c.on.apply(c, arguments);
                            return t === c ? o : t
                        }
                    }, null == t) return o;
                if ("function" != typeof t) throw new Error("invalid callback: " + t);
                return o.get(t)
            }(t).mimeType(r).response(o);
            if (null == n) return e;
            if ("function" != typeof n) throw new Error("invalid callback: " + n);
            return e.get(n)
        }
    }
    ua.prototype = ia.prototype = {
        constructor: ua,
        on: function(t, n) {
            var e, r = this._,
                o = function(t, r) {
                    return t.trim().split(/^|\s+/).map(function(t) {
                        var n = "",
                            e = t.indexOf(".");
                        if (0 <= e && (n = t.slice(e + 1), t = t.slice(0, e)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                        return {
                            type: t,
                            name: n
                        }
                    })
                }(t + "", r),
                i = -1,
                u = o.length;
            if (!(arguments.length < 2)) {
                if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                for (; ++i < u;)
                    if (e = (t = o[i]).type) r[e] = ca(r[e], t.name, n);
                    else if (null == n)
                    for (e in r) r[e] = ca(r[e], t.name, null);
                return this
            }
            for (; ++i < u;)
                if ((e = (t = o[i]).type) && (e = aa(r[e], t.name))) return e
        },
        copy: function() {
            var t = {},
                n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new ua(t)
        },
        call: function(t, n) {
            if (0 < (e = arguments.length - 2))
                for (var e, r, o = new Array(e), i = 0; i < e; ++i) o[i] = arguments[i + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (i = 0, e = (r = this._[t]).length; i < e; ++i) r[i].value.apply(n, o)
        },
        apply: function(t, n, e) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var r = this._[t], o = 0, i = r.length; o < i; ++o) r[o].value.apply(n, e)
        }
    };
    var sa = fa("application/json", function(t) {
            return JSON.parse(t.responseText)
        }),
        la = fa("text/plain", function(t) {
            return t.responseText
        }),
        ha = {},
        va = {},
        pa = 34,
        ya = 10,
        da = 13;

    function ga(t) {
        return new Function("d", "return {" + t.map(function(t, n) {
            return JSON.stringify(t) + ": d[" + n + "]"
        }).join(",") + "}")
    }

    function ma(r) {
        var n = new RegExp('["' + r + "\n\r]"),
            l = r.charCodeAt(0);

        function i(r, t) {
            var n, e = [],
                o = r.length,
                i = 0,
                u = 0,
                a = o <= 0,
                c = !1;

            function f() {
                if (a) return va;
                if (c) return c = !1, ha;
                var t, n, e = i;
                if (r.charCodeAt(e) === pa) {
                    for (; i++ < o && r.charCodeAt(i) !== pa || r.charCodeAt(++i) === pa;);
                    return (t = i) >= o ? a = !0 : (n = r.charCodeAt(i++)) === ya ? c = !0 : n === da && (c = !0, r.charCodeAt(i) === ya && ++i), r.slice(e + 1, t - 1).replace(/""/g, '"')
                }
                for (; i < o;) {
                    if ((n = r.charCodeAt(t = i++)) === ya) c = !0;
                    else if (n === da) c = !0, r.charCodeAt(i) === ya && ++i;
                    else if (n !== l) continue;
                    return r.slice(e, t)
                }
                return a = !0, r.slice(e, o)
            }
            for (r.charCodeAt(o - 1) === ya && --o, r.charCodeAt(o - 1) === da && --o;
                (n = f()) !== va;) {
                for (var s = []; n !== ha && n !== va;) s.push(n), n = f();
                t && null == (s = t(s, u++)) || e.push(s)
            }
            return e
        }

        function e(t) {
            return t.map(o).join(r)
        }

        function o(t) {
            return null == t ? "" : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
        }
        return {
            parse: function(t, e) {
                var r, o, n = i(t, function(t, n) {
                    if (r) return r(t, n - 1);
                    o = t, r = e ? function(e, r) {
                        var o = ga(e);
                        return function(t, n) {
                            return r(o(t), n, e)
                        }
                    }(t, e) : ga(t)
                });
                return n.columns = o || [], n
            },
            parseRows: i,
            format: function(t, e) {
                return null == e && (e = function(t) {
                    var e = Object.create(null),
                        r = [];
                    return t.forEach(function(t) {
                        for (var n in t) n in e || r.push(e[n] = n)
                    }), r
                }(t)), [e.map(o).join(r)].concat(t.map(function(n) {
                    return e.map(function(t) {
                        return o(n[t])
                    }).join(r)
                })).join("\n")
            },
            formatRows: function(t) {
                return t.map(e).join("\n")
            }
        }
    }
    ma(","), ma("\t");
    var wa = /^(?:[/]|[./]|(?:[a-zA-z]:\/)).*$/;

    function ba(t, n) {
        try {
            require("fs").writeFileSync(t, n)
        } catch (t) {
            console.warn("File system module is not available.")
        }
    }

    function Sa(t, n) {
        if (FileReader && File) {
            var e = new FileReader;
            e.onload = function(t) {
                return n(t.target.result)
            }, e.readAsText(t)
        }
    }

    function Oa(t) {
        return String(t).match(wa) ? "file://".concat(t) : t
    }

    function _a(t) {
        var n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
            e = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : void 0,
            r = ma(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ";"),
            o = n ? r.format(t.toCollection(), t[Ri]) : r.formatRows(t.toArray());
        return e && ba(t._cleanSavePath(e), o), o
    }

    function ka(t) {
        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ";",
            e = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
            r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : void 0;
        return t.toDSV(n, e, r)
    }

    function xa(t) {
        var n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
            e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0;
        return t.toDSV(",", n, e)
    }

    function ja(t) {
        var n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
            e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0;
        return t.toDSV("\t", n, e)
    }

    function Ea(t) {
        var n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
            e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0;
        return t.toDSV("|", n, e)
    }

    function Aa(t) {
        var n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
            r = JSON.stringify(n ? t.toCollection() : t.toDict());
        return e && ba(t._cleanSavePath(e), r), r
    }

    function Ia(n) {
        var r = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
            o = ma(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ";");
        return new Promise(function(e) {
            function t(t) {
                if (t.includes("Error: ENOENT")) return e(null);
                var n = r ? o.parse(t) : o.parseRows(t);
                return e(n)
            }
            return "string" == typeof n ? la(Oa(n), t) : Sa(n, t)
        }).then(function(t) {
            if (null === t) throw new di(n);
            return t
        })
    }

    function Ta(t) {
        return Ia(t, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ";", !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2])
    }

    function Na(t) {
        return Ia(t, ",", !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1])
    }

    function Ra(t) {
        return Ia(t, "\t", !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1])
    }

    function Ca(t) {
        return Ia(t, "|", !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1])
    }

    function Pa(e) {
        return new Promise(function(n) {
            return "string" == typeof e ? sa(Oa(e), n) : Sa(e, function(t) {
                return n(JSON.parse(t))
            })
        }).then(function(t) {
            if (null === t) throw new di(e);
            return t
        })
    }
    var La = Object.freeze({
            toDSV: _a,
            toCSV: xa,
            toTSV: ja,
            toPSV: Ea,
            toText: ka,
            toJSON: Aa,
            fromDSV: Ia,
            fromCSV: Na,
            fromTSV: Ra,
            fromPSV: Ca,
            fromText: Ta,
            fromJSON: Pa
        }),
        Fa = function() {
            function a(t, n) {
                var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                Ro(this, a);
                var r = Bo(this._build(t, n), 2);
                this[Ci] = r[0], this[Ri] = r[1], this.options = e, this.options.modules = [].concat(Ho(a.defaultModules), Ho(this.options.modules || [])), Object.assign.apply(Object, [this].concat(Ho(this.__instanciateModules__(this.options.modules))))
            }
            return Po(a, null, [{
                key: "setDefaultModules",
                value: function() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    a.defaultModules = n
                }
            }, {
                key: "fromDSV",
                value: function() {
                    return Ia.apply(La, arguments).then(function(t) {
                        return new a(t)
                    })
                }
            }, {
                key: "fromText",
                value: function() {
                    return Ta.apply(La, arguments).then(function(t) {
                        return new a(t)
                    })
                }
            }, {
                key: "fromCSV",
                value: function() {
                    return Na.apply(La, arguments).then(function(t) {
                        return new a(t)
                    })
                }
            }, {
                key: "fromTSV",
                value: function() {
                    return Ra.apply(La, arguments).then(function(t) {
                        return new a(t)
                    })
                }
            }, {
                key: "fromPSV",
                value: function() {
                    return Ca.apply(La, arguments).then(function(t) {
                        return new a(t)
                    })
                }
            }, {
                key: "fromJSON",
                value: function() {
                    return Pa.apply(La, arguments).then(function(t) {
                        return new a(t)
                    })
                }
            }]), Po(a, [{
                key: Symbol.iterator,
                value: regeneratorRuntime.mark(function t() {
                    var n, e, r, o, i, u;
                    return regeneratorRuntime.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                e = !(n = !0), r = void 0, t.prev = 3, o = this[Ci][Symbol.iterator]();
                            case 5:
                                if (n = (i = o.next()).done) {
                                    t.next = 12;
                                    break
                                }
                                return u = i.value, t.next = 9, u;
                            case 9:
                                n = !0, t.next = 5;
                                break;
                            case 12:
                                t.next = 18;
                                break;
                            case 14:
                                t.prev = 14, t.t0 = t.catch(3), e = !0, r = t.t0;
                            case 18:
                                t.prev = 18, t.prev = 19, n || null == o.return || o.return();
                            case 21:
                                if (t.prev = 21, e) throw r;
                                t.next = 24;
                                break;
                            case 24:
                                return t.finish(21);
                            case 25:
                                return t.finish(18);
                            case 26:
                            case "end":
                                return t.stop()
                        }
                    }, t, this, [
                        [3, 14, 18, 26],
                        [19, , 21, 25]
                    ])
                })
            }, {
                key: "_columnsAreEquals",
                value: function(t, n) {
                    for (var e = 1 < arguments.length && void 0 !== n ? n : this[Ri], r = 0, o = Object.keys(t); r < o.length; r++) {
                        var i = o[r];
                        if (t[i] !== e[i]) return !1
                    }
                    return !0
                }
            }, {
                key: "__newInstance__",
                value: function(t, n) {
                    if (!(this._columnsAreEquals(n) && t[0] instanceof Ni)) return new a(t, n, this.options);
                    var e = Object.keys(t[0].toDict());
                    if (!fi(e, this[Ri], !0)) return new a(t, e, this.options);
                    var r = new a([], [], this.options);
                    return r[Ci] = Ho(t), r[Ri] = Ho(n), r
                }
            }, {
                key: "__instanciateModules__",
                value: function(t, n) {
                    var e = this,
                        r = 1 < arguments.length && void 0 !== n ? n : void 0;
                    return t.map(function(t) {
                        var n = new t(r || e);
                        return Lo({}, n.name, n)
                    })
                }
            }, {
                key: "_build",
                value: function(t, n) {
                    if (t instanceof a) return this._fromArray(Array.from(t[Ci]), n || t[Ri]);
                    if (t instanceof Array && 0 < t.length) return this._fromArray(t, n || Array.from(new Set(t.slice(0, 10).concat(t.slice(-10, -1)).map(function(t) {
                        return Object.keys(t)
                    }).reduce(function(t, n) {
                        return t.concat(n)
                    }))));
                    if (t instanceof Array && 0 === t.length) return this._fromArray(t, n || []);
                    if (t instanceof Object) return this._fromDict(t, n || Object.keys(t));
                    throw new bi(t, "DataFrame | Array | Object")
                }
            }, {
                key: "_fromDict",
                value: function(t, n) {
                    return [si(Object.values(t)).map(function(t) {
                        return new Ni(t, n)
                    }), n]
                }
            }, {
                key: "_fromArray",
                value: function(t, n) {
                    return [t.map(function(t) {
                        return new Ni(t, n)
                    }), n]
                }
            }, {
                key: "_joinByType",
                value: function(t, c, f, s) {
                    var l = this,
                        h = c.listHashs();
                    return t.toCollection().map(function(t) {
                        var n = t.group,
                            e = t.hash,
                            r = h.includes(e),
                            o = n;
                        if (c.get(e)) {
                            var i = c.get(e).group.toCollection(),
                                u = n.toCollection().map(function(n) {
                                    return i.map(function(t) {
                                        return Object.assign({}, t, n)
                                    })
                                }).reduce(function(t, n) {
                                    return [].concat(Ho(t), Ho(n))
                                }, []);
                            o = l.__newInstance__(u, s)
                        }

                        function a(t) {
                            return !!t && o
                        }
                        return "full" === f ? o : a("out" === f ? !r : r)
                    }).filter(function(t) {
                        return t
                    })
                }
            }, {
                key: "_join",
                value: function(t, n, e) {
                    if (!(t instanceof a)) throw new bi(t, "DataFrame");
                    var r = Ho(new Set([].concat(Ho(this.listColumns()), Ho(t.listColumns())))),
                        o = Array.isArray(n) ? n : [n],
                        i = this.groupBy.apply(this, Ho(o)),
                        u = t.groupBy.apply(t, Ho(o));
                    return [this.__newInstance__([], r)].concat(Ho(vi([].concat(Ho(e[0] ? this._joinByType(i, u, e[0], r) : []), Ho(e[1] ? this._joinByType(u, i, e[1], r) : [])), function(t) {
                        return t.restructure(r)
                    }))).reduce(function(t, n) {
                        return t.union(n)
                    }).dropDuplicates()
                }
            }, {
                key: "_cleanSavePath",
                value: function(t) {
                    return t.replace("file://", "/")
                }
            }, {
                key: "toDSV",
                value: function() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    return _a.apply(La, [this].concat(n))
                }
            }, {
                key: "toCSV",
                value: function() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    return xa.apply(La, [this].concat(n))
                }
            }, {
                key: "toTSV",
                value: function() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    return ja.apply(La, [this].concat(n))
                }
            }, {
                key: "toPSV",
                value: function() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    return Ea.apply(La, [this].concat(n))
                }
            }, {
                key: "toText",
                value: function() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    return ka.apply(La, [this].concat(n))
                }
            }, {
                key: "toJSON",
                value: function() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    return Aa.apply(La, [this].concat(n))
                }
            }, {
                key: "toDict",
                value: function() {
                    var o = this;
                    return Object.assign.apply(Object, [{}].concat(Ho(Object.entries(this.transpose().toArray()).map(function(t) {
                        var n = Bo(t, 2),
                            e = n[0],
                            r = n[1];
                        return Lo({}, o[Ri][e], r)
                    }))))
                }
            }, {
                key: "toArray",
                value: function(n) {
                    return n ? Array.from(this).map(function(t) {
                        return t.get(n)
                    }) : Array.from(this).map(function(t) {
                        return t.toArray()
                    })
                }
            }, {
                key: "toCollection",
                value: function(t) {
                    return t ? Array.from(this) : Array.from(this).map(function(t) {
                        return t.toDict()
                    })
                }
            }, {
                key: "show",
                value: function(t, n) {
                    function e(t) {
                        return "| ".concat(t.map(function(t) {
                            var n = String(t);
                            return 9 < n.length ? n.substring(0, 6) + "..." : n + Array(10 - n.length).join(" ")
                        }).join(" | "), " |")
                    }
                    var r = 0 < arguments.length && void 0 !== t ? t : 10,
                        o = 1 < arguments.length && void 0 !== n && n,
                        i = e(this[Ri]),
                        u = 0,
                        a = [i, Array(i.length).join("-")].concat(Ho(vi(this[Ci], function(t) {
                            return u++, e(t.toArray())
                        }, function() {
                            return r <= u
                        }))).join("\n");
                    return o || console.log(a), a
                }
            }, {
                key: "dim",
                value: function() {
                    return [this.count(), this[Ri].length]
                }
            }, {
                key: "transpose",
                value: function(t) {
                    var n = [].concat(Ho(t ? ["rowNames"] : []), Ho(Ho(Array(this.count()).keys()).reverse())),
                        e = si((t ? this.push(this[Ri]) : this).toArray());
                    return this.__newInstance__(e, n.reverse()).restructure(n)
                }
            }, {
                key: "count",
                value: function() {
                    return this[Ci].length
                }
            }, {
                key: "countValue",
                value: function(n, t) {
                    var e = 1 < arguments.length && void 0 !== t ? t : this[Ri][0];
                    return this.filter(function(t) {
                        return t.get(e) === n
                    }).count()
                }
            }, {
                key: "push",
                value: function() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    return this.union(new a(n, this[Ri]))
                }
            }, {
                key: "replace",
                value: function(t, e, n) {
                    var r = this,
                        o = n && 0 < n.length ? n : this[Ri],
                        i = Array.isArray(t) ? t : [t];
                    return this.map(function(t) {
                        return (0 < o.length ? o : r[Ri]).reduce(function(t, n) {
                            return i.includes(t.get(n)) ? t.set(n, e) : t
                        }, t)
                    })
                }
            }, {
                key: "distinct",
                value: function(t) {
                    return this.__newInstance__(Lo({}, t, Ho(new Set(this.toArray(t)))), [t])
                }
            }, {
                key: "unique",
                value: function(t) {
                    return this.distinct(t)
                }
            }, {
                key: "listColumns",
                value: function() {
                    return Ho(this[Ri])
                }
            }, {
                key: "select",
                value: function() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    return this.__newInstance__(this[Ci].map(function(t) {
                        return t.select.apply(t, n)
                    }), n)
                }
            }, {
                key: "withColumn",
                value: function(e, t) {
                    var r = 1 < arguments.length && void 0 !== t ? t : function() {};
                    return this.__newInstance__(this[Ci].map(function(t, n) {
                        return t.set(e, r(t, n))
                    }), this[Ri].includes(e) ? this[Ri] : [].concat(Ho(this[Ri]), [e]))
                }
            }, {
                key: "restructure",
                value: function(t) {
                    return this.__newInstance__(this[Ci], t)
                }
            }, {
                key: "renameAll",
                value: function(t) {
                    if (t.length !== this[Ri].length) throw new wi(t, this[Ri]);
                    return this.__newInstance__(this.toArray(), t)
                }
            }, {
                key: "rename",
                value: function(n, e) {
                    var t = this[Ri].map(function(t) {
                        return t === n ? e : t
                    });
                    return this.renameAll(t)
                }
            }, {
                key: "castAll",
                value: function(e) {
                    var n = this;
                    if (e.length !== this[Ri].length) throw new wi(e, this[Ri]);
                    return this.map(function(t) {
                        return new Ni(t.toArray().map(function(t, n) {
                            return e[n](t)
                        }), n[Ri])
                    })
                }
            }, {
                key: "cast",
                value: function(n, e) {
                    return this.withColumn(n, function(t) {
                        return e(t.get(n))
                    })
                }
            }, {
                key: "drop",
                value: function(n) {
                    return this.__newInstance__(this[Ci].map(function(t) {
                        return t.delete(n)
                    }), this[Ri].filter(function(t) {
                        return t !== n
                    }))
                }
            }, {
                key: "chain",
                value: function() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    return this.__newInstance__(Ho(function(t) {
                        for (var n = arguments.length, e = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r];
                        return Array.from(vi(t, e.reduce(function(o, i) {
                            return function(t, n) {
                                var e = o(t, n),
                                    r = !!e && i(e, n);
                                return !0 === r ? e : r
                            }
                        }, function(t) {
                            return t
                        })))
                    }.apply(void 0, [this[Ci]].concat(n))), this[Ri])
                }
            }, {
                key: "filter",
                value: function(t) {
                    var e = "object" === No(t) ? function(o) {
                            return Object.entries(t).map(function(t) {
                                var n = Bo(t, 2),
                                    e = n[0],
                                    r = n[1];
                                return Object.is(o.get(e), r)
                            }).reduce(function(t, n) {
                                return t && n
                            })
                        } : t,
                        n = vi(this[Ci], function(t, n) {
                            return !!e(t, n) && t
                        });
                    return this.__newInstance__(n, this[Ri])
                }
            }, {
                key: "where",
                value: function(t) {
                    return this.filter(t)
                }
            }, {
                key: "find",
                value: function(t) {
                    return this.filter(t)[Ci][0]
                }
            }, {
                key: "map",
                value: function(e) {
                    return this.__newInstance__(vi(this[Ci], function(t, n) {
                        return e(t, n)
                    }), this[Ri])
                }
            }, {
                key: "reduce",
                value: function(e, t) {
                    return void 0 === t ? this[Ci].reduce(function(t, n) {
                        return e(t, n)
                    }) : this[Ci].reduce(function(t, n) {
                        return e(t, n)
                    }, t)
                }
            }, {
                key: "reduceRight",
                value: function(e, t) {
                    return void 0 === t ? this[Ci].reduceRight(function(t, n) {
                        return e(t, n)
                    }) : this[Ci].reduceRight(function(t, n) {
                        return e(t, n)
                    }, t)
                }
            }, {
                key: "dropDuplicates",
                value: function() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    var r = n && 0 < n.length ? n : this[Ri];
                    return this.groupBy.apply(this, Ho(r)).filter(function(t, n) {
                        return 0 === n
                    })
                }
            }, {
                key: "dropMissingValues",
                value: function(t) {
                    var a = t && 0 < t.length ? t : this[Ri];
                    return this.filter(function(t) {
                        var n = !0,
                            e = !1,
                            r = void 0;
                        try {
                            for (var o, i = a[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                                var u = o.value;
                                if ([NaN, void 0, null].includes(t.get(u))) return !1
                            }
                        } catch (t) {
                            e = !0, r = t
                        } finally {
                            try {
                                n || null == i.return || i.return()
                            } finally {
                                if (e) throw r
                            }
                        }
                        return !0
                    })
                }
            }, {
                key: "fillMissingValues",
                value: function(t, n) {
                    return this.replace([NaN, void 0, null], t, n)
                }
            }, {
                key: "shuffle",
                value: function() {
                    return this.count() < 2 ? this : this.__newInstance__(this.reduce(function(t, n) {
                        var e = Math.floor(Math.random() * (t.length - 1) + 1);
                        return Array.isArray(t) ? [].concat(Ho(t.slice(e, t.length + 1)), [n], Ho(t.slice(0, e))) : [t, n]
                    }), this[Ri])
                }
            }, {
                key: "sample",
                value: function(t) {
                    var n = this.count() * t,
                        e = 0;
                    return this.__newInstance__(vi(this.shuffle()[Ci], function(t) {
                        return e++, t
                    }, function() {
                        return n <= e
                    }), this[Ri])
                }
            }, {
                key: "bisect",
                value: function(t) {
                    var n = this.count() * t,
                        e = 0,
                        r = [];
                    return [this.__newInstance__(vi(this.shuffle()[Ci], function(t) {
                        if (e < n) return e++, t;
                        r.push(t)
                    }), this[Ri]), this.__newInstance__(r, this[Ri])]
                }
            }, {
                key: "groupBy",
                value: function() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    return function(r, o) {
                        var i = {},
                            t = [],
                            n = !0,
                            e = !1,
                            u = void 0;
                        try {
                            for (var a, c = r.toCollection(!0)[Symbol.iterator](); !(n = (a = c.next()).done); n = !0) {
                                var f = a.value,
                                    s = f.select.apply(f, Ho(o)).hash();
                                i[s] || (t.push(s), i[s] = []), i[s].push(f)
                            }
                        } catch (t) {
                            e = !0, u = t
                        } finally {
                            try {
                                n || null == c.return || c.return()
                            } finally {
                                if (e) throw u
                            }
                        }
                        var l = t.reduce(function(t, n) {
                            var e;
                            return t[n] = {
                                groupKey: (e = i[n][0]).select.apply(e, Ho(o)).toDict(),
                                hash: n,
                                group: new r.constructor(i[n], r.listColumns())
                            }, t
                        }, {});
                        return new Fi(r, o, l, t)
                    }(this, n)
                }
            }, {
                key: "sortBy",
                value: function(t, n, e) {
                    var u = 1 < arguments.length && void 0 !== n && n,
                        r = 2 < arguments.length && void 0 !== e ? e : "first";
                    Array.isArray(t) || (t = [t]);

                    function a(t) {
                        return [NaN, null, void 0].includes(t)
                    }
                    var c = t,
                        f = ["first", "last"].includes(r) ? r : "first",
                        o = this[Ci].sort(function(o, i) {
                            return c.map(function(t) {
                                var n = [o.get(t), i.get(t)],
                                    e = n[0],
                                    r = n[1];
                                if (a(e)) return "last" === f ? 1 : -1;
                                if (a(r)) return "last" === f ? -1 : 1;
                                if (No(e) !== No(r)) throw new gi([No(e), No(r)]);
                                return r < e ? u ? -1 : 1 : e < r ? u ? 1 : -1 : 0
                            }).reduce(function(t, n) {
                                return t || n
                            })
                        });
                    if (1 < c.length) {
                        var s = [],
                            l = [];
                        return o.forEach(function(t) {
                            var n = !0,
                                e = !1,
                                r = void 0;
                            try {
                                for (var o, i = c[Symbol.iterator](); !(n = (o = i.next()).done); n = !0) {
                                    var u = o.value;
                                    if (a(t.get(u))) return void s.push(t)
                                }
                            } catch (t) {
                                e = !0, r = t
                            } finally {
                                try {
                                    n || null == i.return || i.return()
                                } finally {
                                    if (e) throw r
                                }
                            }
                            l.push(t)
                        }), this.__newInstance__("last" === r ? l.concat(s) : s.concat(l), this[Ri])
                    }
                    return this.__newInstance__(o, this[Ri])
                }
            }, {
                key: "union",
                value: function(t) {
                    if (!(t instanceof a)) throw new bi(t, "DataFrame");
                    if (!fi(this[Ri], t[Ri])) throw new wi(t[Ri], this[Ri]);
                    return this.__newInstance__([].concat(Ho(this), Ho(t.restructure(this[Ri]))), this[Ri])
                }
            }, {
                key: "join",
                value: function(t, n, e) {
                    var r = this;
                    return {
                        inner: function() {
                            return r.innerJoin(t, n)
                        },
                        full: function() {
                            return r.fullJoin(t, n)
                        },
                        outer: function() {
                            return r.outerJoin(t, n)
                        },
                        left: function() {
                            return r.leftJoin(t, n)
                        },
                        right: function() {
                            return r.rightJoin(t, n)
                        }
                    } [2 < arguments.length && void 0 !== e ? e : "inner"]()
                }
            }, {
                key: "innerJoin",
                value: function(t, n) {
                    return this._join(t, n, ["in"])
                }
            }, {
                key: "fullJoin",
                value: function(t, n) {
                    return this._join(t, n, ["full", "full"])
                }
            }, {
                key: "outerJoin",
                value: function(t, n) {
                    return this.fullJoin(t, n)
                }
            }, {
                key: "leftJoin",
                value: function(t, n) {
                    return this._join(t, n, ["full", "in"])
                }
            }, {
                key: "rightJoin",
                value: function(t, n) {
                    return this._join(t, n, ["in", "full"])
                }
            }, {
                key: "diff",
                value: function(t, n) {
                    return this._join(t, n, ["out", "out"])
                }
            }, {
                key: "head",
                value: function(t) {
                    var n = 0 < arguments.length && void 0 !== t ? t : 10;
                    return this.slice(0, n)
                }
            }, {
                key: "tail",
                value: function(t) {
                    var n = 0 < arguments.length && void 0 !== t ? t : 10;
                    return this.slice(-n)
                }
            }, {
                key: "slice",
                value: function(t, n) {
                    return this.__newInstance__(this[Ci].slice(t || void 0, n || void 0), this[Ri])
                }
            }, {
                key: "getRow",
                value: function(t) {
                    return this[Ci][t]
                }
            }, {
                key: "setRow",
                value: function(t, n) {
                    var e = 1 < arguments.length && void 0 !== n ? n : function(t) {
                            return t
                        },
                        r = Array.from(this[Ci]);
                    return r[t] = e(r[t]), this.__newInstance__(r, this[Ri])
                }
            }]), a
        }();
    Fa.defaultModules = [];

    function Da(t) {
        var n, e, r, o, i, u, a, c, f = s(t, !1);
        if ("string" == typeof f && 2 < f.length)
            if (43 === (n = (f = Ga(f)).charCodeAt(0)) || 45 === n) {
                if (88 === (e = f.charCodeAt(2)) || 120 === e) return NaN
            } else if (48 === n) {
            switch (f.charCodeAt(1)) {
                case 66:
                case 98:
                    r = 2, o = 49;
                    break;
                case 79:
                case 111:
                    r = 8, o = 55;
                    break;
                default:
                    return +f
            }
            for (u = (i = f.slice(2)).length, a = 0; a < u; a++)
                if ((c = i.charCodeAt(a)) < 48 || o < c) return NaN;
            return parseInt(i, r)
        }
        return +f
    }
    var Ma = Ot.f,
        Ja = P.f,
        Va = F.f,
        Ga = Xo.trim,
        Ua = "Number",
        za = b[Ua],
        qa = za.prototype,
        Ba = o(Vt(qa)) == Ua;
    if (Tt(Ua, !za(" 0o1") || !za("0b1") || za("+0x1"))) {
        for (var Ha, Ya = function(t) {
                var n = arguments.length < 1 ? 0 : t,
                    e = this;
                return e instanceof Ya && (Ba ? d(function() {
                    qa.valueOf.call(e)
                }) : o(e) != Ua) ? Mr(new za(Da(n)), e, Ya) : Da(n)
            }, $a = S ? Ma(za) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), Wa = 0; $a.length > Wa; Wa++) h(za, Ha = $a[Wa]) && !h(Ya, Ha) && Va(Ya, Ha, Ja(za, Ha));
        (Ya.prototype = qa).constructor = Ya, lt(b, Ua, Ya)
    }
    at({
        target: "Number",
        stat: !0
    }, {
        isNaN: function(t) {
            return t != t
        }
    });
    var Ka = function() {
            function n(t) {
                Ro(this, n), this.df = t, this.name = "stat"
            }
            return Po(n, [{
                key: "_castAsNumber",
                value: function(n) {
                    return this.df.withColumn(n, function(t) {
                        return Number(t.get(n))
                    }).filter(function(t) {
                        return !Number.isNaN(t.get(n))
                    })
                }
            }, {
                key: "sum",
                value: function(e) {
                    return Number(this.df.reduce(function(t, n) {
                        return ci(n.get(e)) ? t + Number(n.get(e)) : t
                    }, 0))
                }
            }, {
                key: "max",
                value: function(e) {
                    return this._castAsNumber(e).reduce(function(t, n) {
                        return n.get(e) > t.get(e) ? n : t
                    }).get(e)
                }
            }, {
                key: "min",
                value: function(e) {
                    return this._castAsNumber(e).reduce(function(t, n) {
                        return t.get(e) > n.get(e) ? n : t
                    }).get(e)
                }
            }, {
                key: "mean",
                value: function(e) {
                    var t = this.df.filter(function(t) {
                        return ci(t.get(e))
                    });
                    return Number(t.reduce(function(t, n) {
                        return ci(n.get(e)) ? t + Number(n.get(e)) : t
                    }, 0)) / t.count()
                }
            }, {
                key: "average",
                value: function(t) {
                    return this.mean(t)
                }
            }, {
                key: "var",
                value: function(e, t) {
                    var n = 1 < arguments.length && void 0 !== t && t,
                        r = this.df.filter(function(t) {
                            return ci(t.get(e))
                        }),
                        o = this.mean(e);
                    return Number(r.reduce(function(t, n) {
                        return t + Math.pow(n.get(e) - o, 2)
                    }, 0)) / (r.count() - (n ? 0 : 1))
                }
            }, {
                key: "sd",
                value: function(t, n) {
                    var e = 1 < arguments.length && void 0 !== n && n;
                    return Math.sqrt(this.var(t, e))
                }
            }, {
                key: "stats",
                value: function(t) {
                    return {
                        sum: this.sum(t),
                        mean: this.mean(t),
                        min: this.min(t),
                        max: this.max(t),
                        var: this.var(t),
                        varpop: this.var(t, !0),
                        sd: this.sd(t),
                        sdpop: this.sd(t, !0)
                    }
                }
            }]), n
        }(),
        Qa = function() {
            function n(t) {
                Ro(this, n), this.df = t, this.name = "matrix"
            }
            return Po(n, [{
                key: "isCommutative",
                value: function(t, n) {
                    var e = 1 < arguments.length && void 0 !== n && n;
                    if (!(t instanceof Fa)) throw new bi(t, "DataFrame");
                    return fi(this.df.dim(), e ? t.dim().reverse() : t.dim(), !0)
                }
            }, {
                key: "add",
                value: function(r) {
                    var o = this;
                    if (!this.isCommutative(r)) throw new wi(this.df.dim(), r.dim());
                    var i = Ho(Array(this.df.dim()[1]).keys());
                    return this.df.__newInstance__(Ho(vi(Object.keys(Ho(this.df)), function(t) {
                        var n = Ho(o.df)[t].toArray(),
                            e = Ho(r)[t].toArray();
                        return i.map(function(t) {
                            return n[t] + e[t]
                        })
                    })), this.df.listColumns())
                }
            }, {
                key: "product",
                value: function(n) {
                    if ("number" != typeof n) throw new bi(n, "Number");
                    return this.df.map(function(t) {
                        return t.toArray().map(function(t) {
                            return t * n
                        })
                    })
                }
            }, {
                key: "dot",
                value: function(n) {
                    var e = this;
                    if (!this.isCommutative(n, !0)) throw new wi(this.df.dim(), n.dim().reverse());
                    var o = Ho(Array(this.df.dim()[0]).keys());
                    return this.df.__newInstance__(Ho(vi(Object.keys(Ho(this.df)), function(t) {
                        var r = Ho(e.df)[t].toArray();
                        return Ho(vi(o, function(t) {
                            var e = Ho(n.transpose())[t].toArray();
                            return Object.keys(e).reduce(function(t, n) {
                                return t + e[n] * r[n]
                            }, 0)
                        }))
                    })), o)
                }
            }]), n
        }(),
        Xa = F.f,
        Za = Ot.f,
        tc = Gt("match"),
        nc = b.RegExp,
        ec = nc.prototype,
        rc = /a/g,
        oc = /a/g,
        ic = new nc(rc) !== rc;
    if (S && Tt("RegExp", !ic || d(function() {
            return oc[tc] = !1, nc(rc) != rc || nc(oc) == oc || "/a/i" != nc(rc, "i")
        }))) {
        for (var uc = function(t, n) {
                var e = this instanceof uc,
                    r = Gr(t),
                    o = void 0 === n;
                return !e && r && t.constructor === uc && o ? t : Mr(ic ? new nc(r && !o ? t.source : t, n) : nc((r = t instanceof uc) ? t.source : t, r && o ? Ar.call(t) : n), e ? this : ec, uc)
            }, ac = function(n) {
                n in uc || Xa(uc, n, {
                    configurable: !0,
                    get: function() {
                        return nc[n]
                    },
                    set: function(t) {
                        nc[n] = t
                    }
                })
            }, cc = Za(nc), fc = 0; cc.length > fc;) ac(cc[fc++]);
        (ec.constructor = uc).prototype = ec, lt(b, "RegExp", uc)
    }
    Vr("RegExp");
    var sc = "toString",
        lc = RegExp.prototype,
        hc = lc[sc],
        vc = d(function() {
            return "/a/b" != hc.call({
                source: "a",
                flags: "b"
            })
        }),
        pc = hc.name != sc;
    (vc || pc) && lt(RegExp.prototype, sc, function() {
        var t = k(this),
            n = String(t.source),
            e = t.flags;
        return "/" + n + "/" + String(void 0 === e && t instanceof RegExp && !("flags" in lc) ? Ar.call(t) : e)
    }, {
        unsafe: !0
    });
    var yc = ln.find,
        dc = "find",
        gc = !0;
    dc in [] && Array(1)[dc](function() {
        gc = !1
    }), at({
        target: "Array",
        proto: !0,
        forced: gc
    }, {
        find: function(t, n) {
            return yc(this, t, 1 < arguments.length ? n : void 0)
        }
    }), _e(dc);
    var mc = ln.findIndex,
        wc = "findIndex",
        bc = !0;
    wc in [] && Array(1)[wc](function() {
        bc = !1
    }), at({
        target: "Array",
        proto: !0,
        forced: bc
    }, {
        findIndex: function(t, n) {
            return mc(this, t, 1 < arguments.length ? n : void 0)
        }
    }), _e(wc);
    var Sc, Oc = Xo.trim;
    at({
        target: "String",
        proto: !0,
        forced: (Sc = "trim", d(function() {
            return !!$o[Sc]() || "????????" != "????????" [Sc]() || $o[Sc].name !== Sc
        }))
    }, {
        trim: function() {
            return Oc(this)
        }
    });
    var _c = [
            ["INNER JOIN", "INNERJOIN"],
            ["LEFT JOIN", "LEFTJOIN"],
            ["RIGHT JOIN", "RIGHTJOIN"],
            ["FULL JOIN", "FULLJOIN"],
            ["GROUP BY", "GROUPBY"]
        ],
        kc = {
            IN: function(t, n) {
                return n.includes(t)
            },
            LIKE: function(t, n) {
                return n.includes(t) || t.includes(n)
            },
            ">=": function(t, n) {
                return n <= t
            },
            "<=": function(t, n) {
                return t <= n
            },
            "!=": function(t, n) {
                return t !== n
            },
            "<": function(t, n) {
                return t < n
            },
            ">": function(t, n) {
                return n < t
            },
            "=": function(t, n) {
                return t === n
            },
            AND: function(t, n) {
                return t && n
            },
            OR: function(t, n) {
                return t || n
            }
        },
        xc = {
            COUNT: function(t) {
                return t.count()
            },
            SUM: function(t, n) {
                return t.stat.sum(n)
            },
            MAX: function(t, n) {
                return t.stat.max(n)
            },
            MIN: function(t, n) {
                return t.stat.min(n)
            },
            AVG: function(t, n) {
                return t.stat.mean(n)
            }
        };

    function jc(t) {
        return pi(t.join(" "), [" ", ""]).split(",")
    }

    function Ec(n, e, r) {
        var o = n.findIndex(function(t) {
            return "ON" === t.toUpperCase()
        }) + 1;
        return function(t) {
            return t.join(e[n[0]], jc(n.filter(function(t, n) {
                return o <= n
            })), r)
        }
    }
    var Ac = {
        WHERE: function(n) {
            var r = function(t) {
                for (var n = arguments.length, e = new Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) e[r - 1] = arguments[r];
                return e.reduce(function(t, n) {
                    return t.map(function(t) {
                        return t.split(n)
                    }).reduce(function(t, n) {
                        return [].concat(Ho(t), Ho(n))
                    }, [])
                }, [t])
            }(n.join(" "), " AND ", " OR ");
            return function(t) {
                return t.filter(function(o) {
                    var e = n.filter(function(t) {
                        return ["AND", "OR"].includes(t.toUpperCase())
                    });
                    return r.map(function(t) {
                        var n = yi.apply(void 0, [t].concat(Ho(Object.keys(kc))))[0],
                            e = t.split(n).map(function(t) {
                                return t.trim()
                            });
                        if (!o.has(e[0]) && o.has(e[1])) return kc[n](pi(e[0].trim(), ['"', ""], ["'", ""], ["`", ""]), String(o.get(e[1])));
                        var r = Number(e[1]);
                        return kc[n](String(o.get(e[0])), Number.isNaN(r) ? pi(e[1].trim(), ['"', ""], ["'", ""], ["`", ""]) : r)
                    }).reduce(function(t, n) {
                        return kc[e.shift()](t, n)
                    })
                })
            }
        },
        JOIN: function(t, n) {
            return Ec(t, n, "inner")
        },
        INNERJOIN: function(t, n) {
            return Ec(t, n, "inner")
        },
        LEFTJOIN: function(t, n) {
            return Ec(t, n, "left")
        },
        RIGHTJOIN: function(t, n) {
            return Ec(t, n, "right")
        },
        FULLJOIN: function(t, n) {
            return Ec(t, n, "full")
        },
        UNION: function(n, e) {
            return function(t) {
                return t.union(n[0].toUpperCase().includes("SELECT") ? Nc(n.join(" "), e) : e[n[0]])
            }
        },
        GROUPBY: function(n) {
            return function(t) {
                return t.groupBy.apply(t, Ho(jc(n)))
            }
        }
    };

    function Ic(t) {
        var n = function(t) {
                var o = t;
                return _c.forEach(function(t) {
                    var n = Bo(t, 2),
                        e = n[0],
                        r = n[1];
                    o = o.replace(e, r).replace(e.toLowerCase(), r)
                }), o
            }(t).split(" "),
            e = n.findIndex(function(t) {
                return "FROM" === t.toUpperCase()
            });
        if (-1 === e) throw new Si("Your query should contains FROM keyword");
        return {
            selections: n.slice(0, e),
            table: n[e + 1],
            operations: n.slice(e + 2, n.length)
        }
    }

    function Tc(t) {
        if ("SELECT" !== t[0].toUpperCase()) throw new Si("Your query should begin with SELECT keyword");
        return t.shift(),
            function(e) {
                for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                var o = li(n);
                return function t(n) {
                    return n[0](e) ? n[1](e) : t(o.next().value)
                }(o.next().value)
            }(t.join(" ").split(",").map(function(t) {
                return t.trim()
            }), [function(t) {
                return "*" === pi(t[0], [" ", ""])
            }, function() {
                return function(t) {
                    return t
                }
            }], [function(t) {
                return t[0].toUpperCase().includes("DISTINCT")
            }, function(n) {
                var e = pi(n[0].split(" AS ")[0], ["DISTINCT", ""], ["distinct", ""], [" ", ""]);
                return function(t) {
                    return t.distinct(e).rename(e, n[0].includes("AS") ? n[0].split("AS")[1].replace(" ", "") : e)
                }
            }], [function(t) {
                return yi.apply(void 0, [t[0].toUpperCase()].concat(Ho(Object.keys(xc))))[0]
            }, function(r) {
                return function(t) {
                    function n(t) {
                        return xc[e](t, pi(r[0], ["".concat(e.toLowerCase(), "("), ""], ["".concat(e, "("), ""], ["(", ""], [")", ""]))
                    }
                    var e = Object.keys(xc).find(function(t) {
                        return r[0].toUpperCase().includes(t)
                    });
                    return t.on && t.df ? t.aggregate(n) : n(t)
                }
            }], [function() {
                return !0
            }, function(n) {
                return function(t) {
                    return t.select.apply(t, Ho(n.map(function(t) {
                        return t.split(" AS ")[0].replace(" ", "")
                    }))).renameAll(n.map(function(t) {
                        return t.includes("AS") ? t.split("AS")[1].replace(" ", "") : t
                    }))
                }
            }])
    }

    function Nc(t, n) {
        var e = Ic(t),
            r = e.selections,
            o = e.table,
            i = e.operations;
        if (!o || !Object.keys(n).includes(o)) throw new Si("Wrong table name in your query: ".concat(o));
        var u = function(e, r) {
            var o = e.map(function(t, n) {
                return Object.keys(Ac).includes(t.toUpperCase()) ? n : void 0
            }).filter(function(t) {
                return void 0 !== t
            });
            return o.map(function(t, n) {
                return Ac[e[t].toUpperCase()](e.slice(t + 1, o[n + 1] ? o[n + 1] : e.length), r)
            }).reduce(function(n, e) {
                return function(t) {
                    return e(n(t))
                }
            }, function(t) {
                return t
            })
        }(i, n);
        return Tc(r)(u(n[o]))
    }
    var Rc = function() {
        function o(t) {
            Ro(this, o), this.df = t, this.name = "sql"
        }
        return Po(o, null, [{
            key: "request",
            value: function(t) {
                if ("string" != typeof t) throw new bi(t, "Stri g");
                return Nc(t, o.tables)
            }
        }, {
            key: "dropTables",
            value: function() {
                o.tables = {}
            }
        }, {
            key: "dropTable",
            value: function(t) {
                delete o.tables[t]
            }
        }, {
            key: "renameTable",
            value: function(t, n, e) {
                var r = 2 < arguments.length && void 0 !== e && e;
                o.registerTable(o.tables[t], n, r), o.dropTable(t)
            }
        }, {
            key: "listTables",
            value: function() {
                return Object.keys(o.tables)
            }
        }, {
            key: "registerTable",
            value: function(t, n, e) {
                var r = 2 < arguments.length && void 0 !== e && e;
                if (!(t instanceof Fa)) throw new bi(t, "DataFrame");
                if (!new RegExp("^[a-zA-Z_][a-zA-Z0-9_]*$").test(n)) throw new _i(n);
                if (o.listTables().includes(n) && !r) throw new Oi(n);
                o.tables[n] = t
            }
        }]), Po(o, [{
            key: "register",
            value: function(t, n) {
                var e = 1 < arguments.length && void 0 !== n && n;
                return o.registerTable(this.df, t, e), this.df
            }
        }]), o
    }();
    return Rc.tables = {}, Fa.setDefaultModules(Ka, Qa, Rc), Fa.sql = Rc, t.DataFrame = Fa, t.Row = Ni, t.Errors = ki, t.default = Fa, t
}({});

export default dfjs