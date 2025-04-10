/**
 * Jeeliz Face Filter - https://github.com/jeeliz/jeelizFaceFilter
 *
 * Copyright 2020 WebAR.rocks ( https://webar.rocks )
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

var JEELIZFACEFILTER = (function() {
    window.JEELIZFACEFILTERGEN = function() {
        function Fb(a) {
            var c = null
              , d = null
              , e = null
              , g = 0;
            this.o = function(m) {
                this.Ff(m.pb);
                e.we({
                    pc: m.pc,
                    mc: m.mc
                })
            }
            ;
            this.Se = function(m) {
                return c[m]
            }
            ;
            this.Ff = function(m) {
                var t = null;
                g = m.length;
                c = m.map(function(p, q) {
                    p = Object.assign({}, p, {
                        index: q,
                        parent: this,
                        vb: t,
                        ef: q === g - 1
                    });
                    return t = q = 0 === q ? Gb.instance(p) : Hb.instance(p)
                });
                d = c[0];
                e = c[g - 1];
                c.forEach(function(p, q) {
                    0 !== q && p.vf()
                })
            }
            ;
            this.T = function(m) {
                m.g(0);
                var t = m;
                c.forEach(function(p) {
                    t = p.T(t, !1)
                });
                return t
            }
            ;
            this.Re = function() {
                return d.F()
            }
            ;
            this.Vb = function() {
                return e.Ue()
            }
            ;
            this.gd = function() {
                return e.gd()
            }
            ;
            this.m = function() {
                c && (c.forEach(function(m) {
                    m.m()
                }),
                e = d = c = null,
                g = 0)
            }
            ;
            "undefined" !== typeof a && this.o(a)
        }
        function eb(a, c) {
            var d = c % 8;
            return a[(c - d) / 8] >> 7 - d & 1
        }
        function Ib(a) {
            var c = JSON.parse(a);
            a = c.ne;
            var d = c.nf
              , e = c.n;
            var g = "undefined" === typeof btoa ? Buffer.from(c.data, "base64").toString("latin1") : atob(c.data);
            var m = g.length;
            c = new Uint8Array(m);
            for (var t = 0; t < m; ++t)
                c[t] = g.charCodeAt(t);
            g = new Float32Array(e);
            m = new Float32Array(d);
            t = a + d + 1;
            for (var p = 0; p < e; ++p) {
                for (var q = t * p, u = 0 === eb(c, q) ? 1 : -1, r = q + 1, A = 1, v = 0, n = r + a - 1; n >= r; --n)
                    v += A * eb(c, n),
                    A *= 2;
                r = v;
                q = q + 1 + a;
                A = m.length;
                v = 0;
                for (n = q; n < q + A; ++n)
                    m[v] = eb(c, n, !0),
                    ++v;
                for (A = q = 0; A < d; ++A)
                    q += m[A] * Math.pow(2, -A - 1);
                g[p] = 0 === q && 0 === r ? 0 : u * (1 + q) * Math.pow(2, 1 + r - Math.pow(2, a - 1))
            }
            return g
        }
        function Ya() {
            return -1 !== [ia.ready, ia.play, ia.pause].indexOf(na)
        }
        function fb() {
            if (na === ia.play)
                return !1;
            na = ia.play;
            Na.stop();
            rb(0)
        }
        function sb() {
            if (na !== ia.play)
                return !1;
            qa.stop();
            Na.stop();
            na = ia.pause;
            return !0
        }
        function Ea(a, c, d, e, g) {
            a = 4 * (3 * c + a) + d;
            return e + (U.buffer[a] / 255 + U.buffer[a + 12] / 65025) * (g - e)
        }
        function gb() {
            b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1);
            Ha.Ye()
        }
        function Jb() {
            var a = da.na();
            va.O();
            b.viewport(0, 0, 3, 2 * a);
            D.set("s53");
            U.ta.g(0);
            T.l(!1, !1);
            return aa.xb(0, 0, 3, 2 * a, U.buffer, tb)
        }
        function rb() {
            na !== ia.pause && (ba.isCleanGLStateAtEachIteration && (D.Wc(),
            T.reset(),
            T.va(),
            b.disable(b.DEPTH_TEST),
            b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1),
            D.Ca()),
            qa.qc(Kb, Jb, Lb, tb, Mb, ba.animateProcessOrder))
        }
        function Kb() {
            va.ca();
            if (!G.kb)
                if (G.jb)
                    G.element.needsUpdate && (G.K.Sd(G.element.videoWidth, G.element.videoHeight),
                    G.K.Db(G.element.arrayBuffer),
                    G.element.needsUpdate = !1);
                else {
                    var a = G.element.currentTime
                      , c = a - G.wb;
                    0 > c && (G.wb = a,
                    c = 0);
                    1E3 * c < ea.Xf || (G.wb += c,
                    G.K.refresh())
                }
            a = qa.Te();
            da.update(a, Fa);
            for (c = 0; c < a; ++c) {
                da.Bb(c);
                D.set("s55");
                var d = Fa[da.hd()];
                D.G("u43", 1 + Oa.rc * (Math.cos(d.ry) - 1));
                Q.wa && D.G("u42", d.rz);
                da.Yd("u41");
                Z.Oa.$();
                G.K.g(0);
                U.ta.g(1);
                T.l(!1, !1);
                Pa.T(Z.Oa)
            }
            qa.Bb()
        }
        function tb() {
            va.Uf();
            ba.isCleanGLStateAtEachIteration && (va.reset(),
            X.reset(),
            b.enable(b.DEPTH_TEST));
            Q.Gb && Q.Gb(da.yd() ? Fa : Fa[0]);
            ba.isCleanGLStateAtEachIteration && (b.disable(b.BLEND),
            T.reset(),
            T.va())
        }
        function Lb() {
            for (var a = 0; a < da.na(); ++a)
                if (da.jf(a)) {
                    var c = a
                      , d = Sa[c]
                      , e = [c]
                      , g = Fa[c]
                      , m = hb[c]
                      , t = 2 * c;
                    d.Xa = Ea(1, t, 3, 0, 1);
                    g.detected = wa.X(g.detected, d.Xa, ea.ee);
                    d.x = Ea(0, t, 1, -1, 1);
                    d.y = Ea(0, t, 2, -1, 1);
                    d.ja = Ea(0, t, 3, 0, 1);
                    if (d.Xa < ba.multiDetectionThresholdFactors[0] * ba.threshold)
                        d.qa = Math.floor(d.qa / 2),
                        Q.wa && (g.rz = 0,
                        g.ry = 0);
                    else {
                        var p = U.Qa;
                        d.rx = Ea(1, t, 0, -p[0], p[0]);
                        d.ry = Ea(1, t, 1, -p[1], p[1]);
                        d.Ra = Ea(1, t, 2, -p[2], p[2]);
                        for (p = 0; p < U.Y; ++p)
                            d.cd[p] = U.Na[p](Ea(2, t, p, 0, 1));
                        t = d.ja * U.Nd;
                        e.dx = d.x - g.xRaw;
                        e.dy = d.y - g.yRaw;
                        e.Pb = t - g.sRaw;
                        e.Mb = d.rx - g.rx;
                        e.Nb = d.ry - g.ry;
                        e.Ob = Q.wa ? d.Ra : d.Ra - g.rz;
                        p = qa.Me();
                        e = (1 - Za.qb(ra.translationFactorRange[0], ra.translationFactorRange[1], Math.sqrt(e.dx * e.dx + e.dy * e.dy + e.Pb * e.Pb) / p)) * (1 - Za.qb(ra.rotationFactorRange[0], ra.rotationFactorRange[1], Math.sqrt(e.Mb * e.Mb + e.Nb * e.Nb + e.Ob * e.Ob) / p)) * Za.qb(ra.qualityFactorRange[0], ra.qualityFactorRange[1], d.Xa);
                        c = m[++ib[c] % m.length] = e;
                        for (p = 0; p < m.length; ++p)
                            c = Math.min(c, m[p]);
                        c = Math.max(.5, c);
                        e = Math.min(c, e);
                        m = wa.X(ra.alphaRange[1], ra.alphaRange[0], Math.pow(e, ea.ge));
                        g.xRaw = wa.X(g.xRaw, d.x, m);
                        g.yRaw = wa.X(g.yRaw, d.y, m);
                        g.sRaw = wa.X(g.sRaw, t, m);
                        g.rx = wa.X(g.rx, d.rx, m);
                        g.ry = wa.X(g.ry, d.ry, m);
                        g.rz = Q.wa ? g.rz + ra.followZRotAlphaFactor * m * d.Ra : wa.X(g.rz, d.Ra, m);
                        c = g.sRaw * Oa.Lb * Math.sin(g.ry);
                        t = Math.sin(g.rz) * c / Qa;
                        g.x = g.xRaw + Math.cos(g.rz) * c;
                        g.y = g.yRaw + t;
                        g.s = g.sRaw;
                        m = Math.max(m, ea.fe);
                        for (c = 0; c < U.Y; ++c)
                            g.expressions[c] = wa.X(g.expressions[c], d.cd[c], m);
                        ++d.qa
                    }
                }
        }
        function Mb() {
            na === ia.play && Na.qc(rb)
        }
        function ub() {
            Z.Oa = X.instance({
                isPot: !0,
                isFloat: !1,
                width: Pa.Re()
            });
            var a = {
                width: ea.Vd,
                height: da.na(),
                isFloat: !0,
                isPot: !1,
                array: da.Ce(new Float32Array([0, .5, .5, 0, 0, 0, 0, 0, 0, 0, 0, 0]))
            };
            U.ta = Nb.instance(a)
        }
        function jb() {
            D.S("s55", [{
                type: "1i",
                name: "u1",
                value: 0
            }, {
                type: "1i",
                name: "u39",
                value: 1
            }, {
                type: "2f",
                name: "u40",
                value: Z.D
            }, {
                type: "1f",
                name: "u41",
                value: .5
            }, {
                type: "1f",
                name: "u42",
                value: 0
            }]);
            D.S("s56", [{
                type: "1i",
                name: "u44",
                value: 0
            }, {
                type: "1i",
                name: "u39",
                value: 1
            }, {
                type: "1f",
                name: "u47",
                value: ea.Sf
            }, {
                type: "1f",
                name: "u48",
                value: ba.threshold
            }, {
                type: "3f",
                name: "u46",
                value: [U.N[0] * Z.D[0], U.N[1] * Z.D[1], U.N[2]]
            }, {
                type: "1f",
                name: "u41",
                value: .5
            }, {
                type: "1f",
                name: "u49",
                value: 1
            }, {
                type: "1f",
                name: "u42",
                value: 0
            }]);
            var a = [{
                type: "1i",
                name: "u44",
                value: 0
            }];
            D.S("s57", a);
            D.S("s58", a);
            D.S("s53", [{
                type: "1i",
                name: "u39",
                value: 0
            }, {
                type: "1f",
                name: "u52",
                value: Z.D[0]
            }, {
                type: "2f",
                name: "u51",
                value: [0, .5 / da.na()]
            }])
        }
        function kb() {
            Z.D[0] = 1;
            Z.D[1] = Z.C / Z.L;
            vb.o({
                ub: ba.overlapFactors,
                Ed: ba.nScaleLevels,
                C: Z.C,
                L: Z.L,
                Md: ba.scale0Factor,
                N: U.N,
                Od: ba.scanCenterFirst
            })
        }
        function Ob(a) {
            if (Q.Fa)
                wb("string" === typeof Q.Fa ? JSON.parse(Q.Fa) : Q.Fa, a);
            else {
                var c = Q.Gc;
                "JSON" !== c.toUpperCase().split(".").pop() && (c += ea.neuralNetworkPath);
                $a.get(c, function(d) {
                    d = JSON.parse(d);
                    wb(d, a)
                })
            }
        }
        function wb(a, c) {
            if (a.exportData) {
                var d = a.exportData;
                d.rotationEulerAnglesFactors && (U.Qa = d.rotationEulerAnglesFactors);
                if (d.translationScalingFactors) {
                    var e = d.translationScalingFactors
                      , g = ba.translationScalingFactors;
                    U.N[0] = e[0] * g[0];
                    U.N[1] = e[1] * g[1];
                    U.N[2] = e[2] * g[2]
                }
                "undefined" !== typeof d.nExpressions && (U.Y = d.nExpressions);
                U.Nd = d.dsMean ? 1 + d.dsMean : 1;
                Oa.rc = .4;
                Oa.Lb = .7;
                "undefined" !== typeof d.fgScaleXFactor && (Oa.rc = d.fgScaleXFactor);
                "undefined" !== typeof d.fgDisplaceXFactor && (Oa.Lb = d.fgDisplaceXFactor)
            }
            U.Y || (U.Y = ea.Dd);
            if (!U.Na)
                for (U.Na = [],
                d = 0; d < U.Y; ++d)
                    U.Na.push(ea.Ge);
            c(a)
        }
        function Pb() {
            if (Ha.o({
                Wa: Q.da,
                width: Z.C,
                height: Z.L,
                debug: !1,
                lc: function() {
                    Ia("GLCONTEXT_LOST")
                },
                antialias: Q.antialias,
                premultipliedAlpha: !0
            }))
                return !0;
            Ia("GL_INCOMPATIBLE");
            return !1
        }
        function Qb() {
            var a = da.hd()
              , c = Fa[a];
            U.ta.Df(1);
            b.viewport(0, a, 1, 1);
            D.set("s56");
            Q.wa && D.G("u42", c.rz);
            da.Yd("u41");
            var d = 1
              , e = da.Nf(Sa, Z.C / Z.L);
            da.yd() && (e && (d = 0,
            Sa[a].qa = 0,
            c.isDetected = !1,
            c.detected = 0),
            D.G("u49", d));
            D.Jf("u45", vb.get(a));
            T.l(!1, !1);
            if (da.xd() || e)
                b.viewport(1, a, 1, 1),
                D.set("s57"),
                D.G("u49", d),
                T.l(!1, !1);
            da.xd() && (b.viewport(2, a, 1, 1),
            D.set("s58"),
            T.l(!1, !1));
            U.ta.sync()
        }
        function xb() {
            G.K && G.K.remove();
            G.jb = G.element.isFakeVideo ? !0 : !1;
            if (G.jb) {
                var a = yb();
                a = {
                    isFlipY: !1,
                    array: G.element.arrayBuffer,
                    width: a.w,
                    height: a.ya,
                    isKeepArray: !0
                }
            } else
                a = {
                    H: G.element
                };
            G.vc = X.instance(Object.assign({
                isPot: !1,
                isLinear: !0,
                isFloat: !1
            }, a));
            G.K = G.vc
        }
        function Ja() {
            var a = [{
                type: "mat2",
                name: "u38",
                value: G.v
            }];
            D.S("s54", [{
                type: "1i",
                name: "u1",
                value: 0
            }].concat(a));
            D.S("s55", a)
        }
        function Ka() {
            var a = [.5, .5]
              , c = G.D[1] / G.D[0];
            Qa = Ha.U() / Ha.F();
            90 === Math.abs(pa.rotate) && (c = 1 / c);
            c > Qa ? a[1] *= Qa / c : a[0] *= c / Qa;
            D.S("s56", [{
                name: "u50",
                type: "1f",
                value: Qa
            }]);
            G.v[0] = 0;
            G.v[1] = 0;
            G.v[2] = 0;
            G.v[3] = 0;
            switch (pa.rotate) {
            case 0:
                G.v[0] = a[0];
                G.v[3] = a[1];
                break;
            case 180:
                G.v[0] = -a[0];
                G.v[3] = -a[1];
                break;
            case 90:
                G.v[1] = a[0];
                G.v[2] = -a[1];
                break;
            case -90:
                G.v[1] = -a[0],
                G.v[2] = a[1]
            }
            pa.flipX && (G.v[0] *= -1,
            G.v[2] *= -1);
            G.kb || (G.v[1] *= -1,
            G.v[3] *= -1)
        }
        function yb() {
            var a = {
                w: G.element.videoWidth || G.element.width,
                ya: G.element.videoHeight || G.element.height
            };
            if (!a.w || !a.ya || 4 > a.w || 4 > a.ya)
                throw Error("INVALID VIDEO DIMENSIONS - width = " + a.w + " height = " + a.ya);
            return a
        }
        function lb() {
            var a = yb()
              , c = G.D[0] !== a.w || G.D[1] !== a.ya;
            c && (G.D[0] = a.w,
            G.D[1] = a.ya);
            return c
        }
        function ab(a, c) {
            if (na === ia.error)
                return !1;
            G.element = a;
            lb();
            c && c();
            return !0
        }
        function zb(a, c, d) {
            a && a();
            G.Ka = {
                video: {
                    facingMode: {
                        exact: pa.facingMode
                    },
                    width: {
                        min: pa.minWidth,
                        max: pa.maxWidth,
                        ideal: pa.idealWidth
                    },
                    height: {
                        min: pa.minHeight,
                        max: pa.maxHeight,
                        ideal: pa.idealHeight
                    }
                },
                audio: !1
            };
            V.Ic(G.Ka, pa.deviceId);
            V.get(G.element ? G.element : V.ld(), function(e) {
                c && c(e);
                d(e)
            }, function() {
                Ia("WEBCAM_UNAVAILABLE")
            }, G.Ka)
        }
        function Ia(a) {
            na !== ia.error && (na = ia.error,
            Q.Ja && Q.Ja(a))
        }
        var wa = {
            Wg: function(a) {
                return Math.ceil(Math.log2(a))
            },
            sh: function(a) {
                return Math.log2(a)
            },
            oh: function(a) {
                return 0 === Math.log2(a) % 1
            },
            hg: function(a) {
                var c = [0, 0, 0, 0];
                a.forEach(function(d) {
                    c[0] += d[0];
                    c[1] += d[1];
                    c[2] += d[2];
                    c[3] += d[3]
                });
                return c
            },
            ig: function(a, c, d) {
                return Math.min(Math.max(a, c), d)
            },
            lg: function(a) {
                return a * Math.PI / 180
            },
            yh: function(a, c) {
                c = Math.pow(10, c);
                return Math.round(a * c) / c
            },
            zh: function(a) {
                return Math.round(1E6 * a) / 1E6
            },
            Xg: function(a, c) {
                return (100 * a / c).toFixed(3)
            },
            X: function(a, c, d) {
                return a * (1 - d) + c * d
            },
            th: function(a, c) {
                return a[0] * (1 - c) + a[1] * c
            },
            Ae: function(a, c) {
                return wa.se(a - c)
            },
            se: function(a) {
                for (; a > Math.PI; )
                    a -= 2 * Math.PI;
                for (; a <= -Math.PI; )
                    a += 2 * Math.PI;
                return a
            },
            qg: function(a, c) {
                return Math.abs(wa.Ae(a, c))
            },
            Yf: function(a, c) {
                return Math.atan2(Math.sin(a) + Math.sin(c), Math.cos(a) + Math.cos(c))
            }
        }
          , $a = {
            get: function(a, c, d) {
                var e = new XMLHttpRequest;
                e.open("GET", a, !0);
                e.withCredentials = !1;
                e.onreadystatechange = function() {
                    4 === e.readyState && (200 === e.status || 0 === e.status ? c(e.responseText) : "undefined" !== typeof d && d(e.status))
                }
                ;
                e.send()
            },
            Ve: function(a) {
                return new Promise(function(c, d) {
                    $a.get(a, c, d)
                }
                )
            },
            Tg: function(a, c, d) {
                a += d ? "?" + $a.Ee(d) : "";
                $a.get(a, function(e) {
                    c(JSON.parse(e))
                })
            },
            vh: function(a, c, d) {
                var e = new XMLHttpRequest;
                e.open("POST", a, !0);
                e.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                e.onreadystatechange = function() {
                    4 !== e.readyState || 200 !== e.status && 0 !== e.status || d(e.responseText)
                }
                ;
                e.send(c)
            },
            Ee: function(a) {
                return "string" === typeof a ? a : Object.keys(a).map(function(c) {
                    return encodeURIComponent(c) + "=" + encodeURIComponent(a[c])
                }).join("&")
            },
            Hg: function(a, c) {
                var d = new XMLHttpRequest;
                d.open("POST", a, !0);
                d.responseType = "arraybuffer";
                d.onload = function() {
                    c(d.response)
                }
                ;
                d.send()
            }
        }
          , Rb = {
            create: function(a, c) {
                for (var d = Array(c), e = 0; e < c; ++e)
                    d[e] = a;
                return d
            },
            mg: function(a, c) {
                for (var d = 0; d < a.length; ++d)
                    c[d] = a[d]
            },
            clone: function(a) {
                for (var c = Array(a.length), d = 0; d < a.length; ++d)
                    c[d] = a[d];
                return c
            },
            Ch: function(a, c, d) {
                a.forEach(function(e, g) {
                    c[g] = e * d
                })
            },
            Lh: function(a) {
                for (var c = a.length - 1; 0 < c; --c) {
                    var d = Math.floor(Math.random() * (c + 1))
                      , e = a[c];
                    a[c] = a[d];
                    a[d] = e
                }
            },
            Nh: function(a) {
                return a.sort(function(c, d) {
                    return c - d
                })
            },
            Rf: function(a) {
                return Array.isArray(a) || a.constructor === Float32Array || a.constructor === Uint8Array
            }
        }
          , mb = {
            Jb: function(a, c) {
                if (0 === c || "object" !== typeof a)
                    return a;
                a = Object.assign({}, a);
                c = void 0 === c || -1 === c ? -1 : c - 1;
                for (var d in a)
                    a[d] = mb.Jb(a[d], c);
                return a
            },
            pg: function(a) {
                return JSON.parse(JSON.stringify(a))
            }
        }
          , Za = {
            Mh: function(a, c, d) {
                a = Math.min(Math.max((d - a) / (c - a), 0), 1);
                return a * a * (3 - 2 * a)
            },
            qb: function(a, c, d) {
                return Math.min(Math.max((d - a) / (c - a), 0), 1)
            },
            Bg: function(a, c, d, e) {
                return Math.pow(Math.min(Math.max((e - a) / (c - a), 0), 1), d)
            },
            Rh: function() {
                return 0
            },
            uh: function() {
                return 1
            },
            rh: function(a) {
                return a
            },
            yg: function(a) {
                return a * a
            },
            Dg: function(a) {
                return a * (2 - a)
            },
            vg: function(a) {
                return .5 > a ? 2 * a * a : -1 + (4 - 2 * a) * a
            },
            tg: function(a) {
                return a * a * a
            },
            Cg: function(a) {
                return --a * a * a + 1
            },
            ug: function(a) {
                return .5 > a ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1
            },
            zg: function(a) {
                return a * a * a * a
            },
            Eg: function(a) {
                return 1 - --a * a * a * a
            },
            wg: function(a) {
                return .5 > a ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a
            },
            Ag: function(a) {
                return a * a * a * a * a
            },
            Fg: function(a) {
                return 1 + --a * a * a * a * a
            },
            xg: function(a) {
                return .5 > a ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a
            }
        }
          , Sb = {
            Ie: function(a, c, d) {
                switch (a) {
                case "relu":
                    return d + "=max(vec4(0.,0.,0.,0.)," + c + ");";
                case "elu":
                    return d + "=mix(exp(-abs(" + c + "))-vec4(1.,1.,1.,1.)," + c + ",step(0.," + c + "));";
                case "elu01":
                    return d + "=mix(0.1*exp(-abs(" + c + "))-vec4(0.1,0.1,0.1,0.1)," + c + ",step(0.," + c + "));";
                case "arctan":
                    return d + "=atan(3.14159265359*texture2D(u0,vUV))/3.14159265359;";
                case "copy":
                    return "";
                default:
                    return !1
                }
            }
        }
          , D = function() {
            function a(x, f, z) {
                f = x.createShader(f);
                x.shaderSource(f, z);
                x.compileShader(f);
                return x.getShaderParameter(f, x.COMPILE_STATUS) ? f : !1
            }
            function c(x, f, z) {
                f = a(x, x.VERTEX_SHADER, f);
                z = a(x, x.FRAGMENT_SHADER, z);
                x === b && p.push(f, z);
                var I = x.createProgram();
                x.attachShader(I, f);
                x.attachShader(I, z);
                x.linkProgram(I);
                return I
            }
            function d(x) {
                return ["float", "sampler2D", "int"].map(function(f) {
                    return "precision " + x + " " + f + ";\n"
                }).join("")
            }
            function e(x, f) {
                f.B = f.B ? !0 : !1;
                if (!f.B) {
                    f.ua = f.ua || "precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5,.5);}";
                    f.Va = f.Va || ["a0"];
                    f.Ha = f.Ha || [2];
                    f.precision = f.precision || v;
                    f.id = r++;
                    void 0 !== f.Qd && (f.Qd.forEach(function(h, C) {
                        f.h = f.h.replace(h, f.yb[C])
                    }),
                    f.Qd.splice(0));
                    f.Cc = 0;
                    f.Ha.forEach(function(h) {
                        f.Cc += 4 * h
                    });
                    var z = d(f.precision);
                    f.ra = c(x, z + f.ua, z + f.h);
                    f.A = {};
                    f.i.forEach(function(h) {
                        f.A[h] = x.getUniformLocation(f.ra, h)
                    });
                    f.attributes = {};
                    f.Ia = [];
                    f.Va.forEach(function(h) {
                        var C = x.getAttribLocation(f.ra, h);
                        f.attributes[h] = C;
                        f.Ia.push(C)
                    });
                    if (f.j) {
                        x.useProgram(f.ra);
                        u = f;
                        q = f.id;
                        for (var I in f.j)
                            x.uniform1i(f.A[I], f.j[I])
                    }
                    f.pa = !0
                }
            }
            function g(x) {
                xa.If(N);
                q !== x.id && (N.P(),
                q = x.id,
                u = x,
                b.useProgram(x.ra),
                x.Ia.forEach(function(f) {
                    0 !== f && b.enableVertexAttribArray(f)
                }))
            }
            function m(x, f, z) {
                e(x, f, z);
                x.useProgram(f.ra);
                x.enableVertexAttribArray(f.attributes.a0);
                q = -1;
                return u = f
            }
            function t() {
                return {
                    h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                    i: ["u1"],
                    j: {
                        u1: 0
                    }
                }
            }
            var p = []
              , q = -1
              , u = null
              , r = 0
              , A = !1
              , v = "highp"
              , n = ["u1"]
              , y = ["u0"]
              , E = {
                u1: 0
            }
              , k = {
                u0: 0
            }
              , M = {
                u1: 0,
                u2: 1
            }
              , H = {
                u3: 0
            }
              , l = {
                s0: t(),
                s1: {
                    h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                    i: n,
                    j: E,
                    precision: "lowp"
                },
                s2: {
                    h: "uniform sampler2D u1,u2;varying vec2 vv0;void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a*b;}",
                    i: ["u1", "u2"],
                    j: M
                },
                s3: {
                    h: "uniform sampler2D u1;uniform vec2 u4,u5;varying vec2 vv0;void main(){vec2 a=vv0*u4+u5;gl_FragColor=texture2D(u1,a);}",
                    i: ["u1", "u4", "u5"],
                    j: E,
                    B: !0
                },
                s4: {
                    h: "uniform sampler2D u1;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a.r*f;}",
                    i: n,
                    j: E
                },
                s5: {
                    h: "uniform sampler2D u1,u2;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a.a*b.r*f;}",
                    i: ["u1", "u2"],
                    j: M
                },
                s6: {
                    h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(1.-vv0.x,vv0.y));}",
                    i: n,
                    j: E
                },
                s7: {
                    h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(vv0.x,1.-vv0.y));}",
                    i: n,
                    j: E
                },
                s8: {
                    h: "uniform sampler2D u0;uniform float u4;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*u4;}",
                    i: ["u0", "u4"],
                    j: k
                },
                s9: {
                    h: "uniform sampler2D u0;uniform float u4;varying vec2 vv0;const vec4 f=vec4(.25,.25,.25,.25),g=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);float b=dot(a*u4,f);gl_FragColor=b*g;}",
                    i: ["u0", "u4"],
                    j: k
                },
                s10: {
                    h: "uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u1,vv0));gl_FragColor=a*e;}",
                    i: n,
                    j: E
                },
                s11: {
                    h: "uniform sampler2D u1,u6;uniform float u7;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u6,vv0);gl_FragColor=mix(b,a,u7*f);}",
                    i: ["u1", "u6", "u7"],
                    j: {
                        u1: 0,
                        u6: 1
                    }
                },
                s12: {
                    h: "uniform sampler2D u1;uniform vec2 u8;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u1,vv0+u8)+texture2D(u1,vv0+u8*vec2(1.,-1.))+texture2D(u1,vv0+u8*vec2(-1.,-1.))+texture2D(u1,vv0+u8*vec2(-1.,1.)));}",
                    i: ["u1", "u8"],
                    j: E
                },
                s13: {
                    h: "uniform sampler2D u1;uniform vec4 u9;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 j(float a){if(a==0.)return vec4(0.,0.,0.,0.);float k=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),l=c+127.,b=(a/exp2(c)-1.)*8388608.,d=l/2.,m=fract(d)*2.,n=floor(d),o=e(b,0.,8.),p=e(b,8.,16.),q=m*128.+e(b,16.,23.),r=k+n;return vec4(o,p,q,r)/255.;}void main(){float a=dot(texture2D(u1,vv0),u9);gl_FragColor=j(a);}",
                    i: ["u1", "u9"],
                    j: E
                },
                s14: {
                    h: "uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=e/(e+exp(-a));gl_FragColor=b;}",
                    i: y,
                    j: k,
                    B: !0
                },
                s15: {
                    h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(0.,0.,0.,0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=max(f,a);}",
                    i: y,
                    j: k
                },
                s16: {
                    h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=mix(exp(-abs(a))-f,a,step(0.,a));}",
                    i: y,
                    j: k
                },
                s17: {
                    h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=exp(-abs(a))-f;gl_FragColor=mix(.1*b,a,step(0.,a));}",
                    i: y,
                    j: k
                },
                s18: {
                    h: "uniform sampler2D u0,u7,u10;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),c=texture2D(u7,vv0),d=texture2D(u10,vv0),b=a/d;gl_FragColor=c*mix(exp(-abs(b))-f,b,step(0.,a));}",
                    i: ["u0", "u7", "u10"],
                    j: {
                        u0: 0,
                        u7: 1,
                        u10: 2
                    },
                    B: !0
                },
                s19: {
                    h: "uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=atan(e*texture2D(u0,vv0))/e;}",
                    i: y,
                    j: k
                },
                s20: {
                    h: "uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=log(f+a);gl_FragColor=b;}",
                    i: y,
                    j: k,
                    B: !0
                },
                s21: {
                    h: "uniform sampler2D u0,u11;uniform float u12;const vec2 e=vec2(.5,.5);const float f=1e-5;const vec4 g=vec4(1.,1.,1.,1.),i=vec4(0.,0.,0.,0.);varying vec2 vv0;void main(){vec4 a=texture2D(u11,e);float b=u12*u12;vec4 c=max(b*a,f*g);gl_FragColor=texture2D(u0,vv0)/c;}",
                    i: ["u0", "u11", "u12"],
                    j: {
                        u0: 0,
                        u11: 1
                    },
                    B: !0
                },
                s22: {
                    h: "uniform sampler2D u1;uniform vec2 u13;varying vec2 vv0;void main(){float a=u13.x*u13.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u13.y),f=floor(u13.x*fract(b*u13.y)),g=(f*u13.y+d)/a;gl_FragColor=texture2D(u1,g+c/a);}",
                    i: ["u1", "u13"],
                    j: E
                },
                s23: {
                    h: "uniform sampler2D u14,u15,u16;varying vec2 vv0;void main(){vec4 a=texture2D(u16,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u14,b),f=texture2D(u15,c);gl_FragColor=d*f;}",
                    i: ["u14", "u15", "u16"],
                    j: {
                        u15: 0,
                        u14: 1,
                        u16: 2
                    },
                    B: !0
                },
                s24: {
                    h: "uniform float u17;uniform sampler2D u14,u15;varying vec2 vv0;void main(){vec2 a=fract(vv0*u17);vec4 b=texture2D(u14,vv0),c=texture2D(u15,a);gl_FragColor=b*c;}",
                    i: ["u15", "u14", "u17"],
                    j: {
                        u15: 0,
                        u14: 1
                    }
                },
                s25: {
                    h: "uniform float u17;uniform sampler2D u14,u15,u18,u19,u20,u21;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 h=vv0*u17,l=floor(h),c=h-l;vec4 m=texture2D(u14,vv0),d=texture2D(u15,c),a=texture2D(u21,vv0);a=a*255.;vec4 n=texture2D(u18,c),o=texture2D(u19,c),p=texture2D(u20,c),i=step(-g,-a),b=e-i,j=b*step(-e-g,-a);b*=e-j;vec4 k=b*step(-2.*e-g,-a);b*=e-k;vec4 q=b;d=i*d+j*n+k*o+q*p,gl_FragColor=m*d;}",
                    i: "u14 u15 u17 u21 u18 u19 u20".split(" "),
                    j: {
                        u15: 0,
                        u14: 1,
                        u21: 3,
                        u18: 4,
                        u19: 5,
                        u20: 6
                    },
                    B: !0
                },
                s26: {
                    h: "uniform sampler2D u14,u15,u22;uniform float u17,u23,u24,u25;varying vec2 vv0;const vec2 j=vec2(1.,1.),k=vec2(0.,0.);void main(){vec2 b=floor(u23*vv0),c=u23*vv0-b;float d=u17/u23;vec2 f=floor(c*d),g=c*d-f,h=(b+g)/u23;float l=u23*u25/u17;vec2 m=l*f,a=(m+g*u24)/u25;a+=.25/u25;vec2 i=step(a,j)*step(k,a);vec4 n=texture2D(u14,h),o=texture2D(u15,a),p=n*o,q=texture2D(u22,h);gl_FragColor=(p*u24*u24+q)*i.x*i.y;}",
                    i: "u14 u15 u17 u23 u24 u25 u22".split(" "),
                    j: {
                        u15: 0,
                        u14: 1,
                        u22: 2
                    }
                },
                s27: {
                    h: "uniform sampler2D u14,u15;varying vec2 vv0;void main(){vec4 a=texture2D(u14,vv0),b=texture2D(u15,vv0);gl_FragColor=a*b;}",
                    i: ["u14", "u15"],
                    j: {
                        u15: 0,
                        u14: 1
                    },
                    B: !0
                },
                s28: {
                    h: "uniform sampler2D u1,u22;uniform float u26;varying vec2 vv0;void main(){gl_FragColor=texture2D(u22,vv0)+u26*texture2D(u1,vv0);}",
                    i: ["u1", "u22", "u26"],
                    j: {
                        u1: 0,
                        u22: 1
                    }
                },
                s29: {
                    h: "varying vec2 vv0;uniform sampler2D u1;const vec4 f=vec4(1.,1.,1.,1.),g=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=dot(a,g)*f;}",
                    i: n,
                    j: E,
                    precision: "lowp"
                },
                s30: {
                    h: "varying vec2 vv0;uniform sampler2D u1;uniform float u27;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u27)).rgb,c=texture2D(u1,vv0+vec2(u27,u27)).rgb,d=texture2D(u1,vv0+vec2(u27,0.)).rgb;gl_FragColor=vec4(dot(a,f),dot(b,f),dot(c,f),dot(d,f));}",
                    i: ["u1", "u27"],
                    j: E,
                    precision: "lowp"
                },
                s31: {
                    h: "varying vec2 vv0;uniform sampler2D u1;uniform float u27;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u27)).rgb,c=texture2D(u1,vv0+vec2(u27,u27)).rgb,d=texture2D(u1,vv0+vec2(u27,0.)).rgb;gl_FragColor=vec4(a.r,b.g,c.b,dot(d,f));}",
                    i: ["u1", "u27"],
                    j: E,
                    precision: "lowp"
                },
                s32: {
                    h: "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u28;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=vec4(0.);a-=texture2D(u1,vec2(vv0.x-u28,vv0.y-u28))*1.,a-=texture2D(u1,vec2(vv0.x-u28,vv0.y))*2.,a-=texture2D(u1,vec2(vv0.x-u28,vv0.y+u28))*1.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y-u28))*1.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y))*2.,a+=texture2D(u1,vec2(vv0.x+u28,vv0.y+u28))*1.;vec4 b=vec4(0.);b-=texture2D(u1,vec2(vv0.x-u28,vv0.y-u28))*1.,b-=texture2D(u1,vec2(vv0.x,vv0.y-u28))*2.,b-=texture2D(u1,vec2(vv0.x+u28,vv0.y-u28))*1.,b+=texture2D(u1,vec2(vv0.x-u28,vv0.y+u28))*1.,b+=texture2D(u1,vec2(vv0.x,vv0.y+u28))*2.,b+=texture2D(u1,vec2(vv0.x+u28,vv0.y+u28))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u1,vv0).a),g=texture2D(u2,vv0);gl_FragColor=g.a*e.r*f;}",
                    i: ["u1", "u2", "u28"],
                    j: M,
                    B: !0
                },
                s33: {
                    h: "varying vec2 vv0;uniform sampler2D u1,u2;uniform float u28;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float h=0.;vec2 l=k*u28,a,b;float c,d,i=0.;for(float e=-4.;e<=4.;e+=1.)for(float f=-4.;f<=4.;f+=1.)a=vec2(e,f),c=length(a)/2.,d=exp(-c*c),b=vv0+l*a,h+=d*texture2D(u1,b).r,i+=d;vec4 m=texture2D(u2,vv0);gl_FragColor=m.a*(texture2D(u1,b).r-h/i)*j;}",
                    i: ["u1", "u2", "u28"],
                    j: M,
                    B: !0
                },
                s34: {
                    h: "uniform sampler2D u3;uniform vec2 u8;varying vec2 vv0;vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}const vec2 g=vec2(.5,.5),h=vec2(1.,0.),i=vec2(0.,1.);void main(){vec2 a=vv0-u8*g;vec4 b=texture2D(u3,a),c=texture2D(u3,a+u8*h),d=texture2D(u3,a+u8*i),j=texture2D(u3,a+u8),k=e(b,c),l=e(d,j);gl_FragColor=e(k,l);}",
                    i: ["u3", "u8"],
                    j: H
                },
                s35: {
                    h: "uniform sampler2D u3;uniform vec2 u8;varying vec2 vv0;const vec2 k=vec2(1.,0.),l=vec2(0.,1.),m=vec2(2.,0.),n=vec2(0.,2.);vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}vec4 f(vec2 a){vec4 b=texture2D(u3,a),c=texture2D(u3,a+u8*k),d=texture2D(u3,a+u8*l),g=texture2D(u3,a+u8),h=e(b,c),i=e(d,g);return e(h,i);}void main(){vec2 a=vv0+u8*vec2(-.55,-1.05);vec4 b=f(a),c=f(a+u8*m),d=f(a+u8*2.),g=f(a+u8*n),h=e(b,c),i=e(d,g);gl_FragColor=e(h,i);}",
                    i: ["u3", "u8"],
                    j: H,
                    B: !0
                },
                s36: {
                    h: "uniform sampler2D u1;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a*a;}",
                    i: ["u1"],
                    j: E,
                    precision: "lowp",
                    B: !0
                },
                s37: {
                    h: "uniform sampler2D u1;uniform vec2 u8;varying vec2 vv0;const float e=15444.;void main(){vec4 a=1001./e*texture2D(u1,vv0-3.*u8)+2002./e*texture2D(u1,vv0-2.*u8)+3003./e*texture2D(u1,vv0-u8)+3432./e*texture2D(u1,vv0)+3003./e*texture2D(u1,vv0+u8)+2002./e*texture2D(u1,vv0+2.*u8)+1001./e*texture2D(u1,vv0+3.*u8);gl_FragColor=a;}",
                    i: ["u8", "u1"],
                    j: E,
                    precision: "lowp",
                    B: !0
                },
                s38: {
                    h: "uniform sampler2D u1,u11,u29;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);const float g=.1;void main(){vec4 a=texture2D(u11,vv0),b=texture2D(u29,vv0),c=texture2D(u1,vv0),d=max(f*g,b-a*a),h=sqrt(d);gl_FragColor=(c-a)/h;}",
                    i: ["u1", "u11", "u29"],
                    j: {
                        u1: 0,
                        u11: 1,
                        u29: 2
                    },
                    B: !0
                }
            }
              , J = {
                s39: {
                    h: "uniform float u17,u30;uniform sampler2D u14,u15,u22;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-5,1e-5);void main(){vec4 sum=texture2D(u22,vv0);float toSparsity=1.1111;vec2 uvFrom,uvWeight,xyPatch=ZERO2,eps2=EPS2/u17,xyTo=floor(vv0*u17+eps2);float weightSize=toSparsity*u17;vec2 halfFromSparsity=ONE2*(toSparsity-1.)/2.;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.)xyPatch.y=patch_y,uvFrom=(xyTo+HALF2+u30*(xyPatch-halfFromSparsity))/u17,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),uvWeight=(xyTo*toSparsity+xyPatch+HALF2)/weightSize,sum+=texture2D(u14,uvWeight)*texture2D(u15,uvFrom);}gl_FragColor=sum,gl_FragColor*=2.2222;}",
                    i: ["u17", "u14", "u15", "u22", "u30"],
                    yb: ["1.1111", "gl_FragColor\\*=2.2222;"]
                },
                s40: {
                    h: "uniform float u17,u30,u25;uniform sampler2D u14,u15,u22;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-4,1e-4);void main(){vec4 sum=texture2D(u22,vv0);float fromSparsity=1.1111,shrinkFactor=3.3333;vec2 uvFrom,uvWeight,xyFrom,xyPatchTo,xyPatch=ZERO2,xyShrink=ZERO2,eps2=EPS2/u25,xyTo=floor(vv0*u17+eps2);float weightSize=fromSparsity*u25;vec2 halfFromSparsity=ONE2*(fromSparsity-1.)/2.;float toSparsity=weightSize/u17;vec2 xyFrom0=xyTo*shrinkFactor;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.){xyPatch.y=patch_y;for(float shrink_x=0.;shrink_x<3.3333;shrink_x+=1.){xyShrink.x=shrink_x;for(float shrink_y=0.;shrink_y<3.3333;shrink_y+=1.)xyShrink.y=shrink_y,xyFrom=xyFrom0+xyShrink+shrinkFactor*u30*(xyPatch-halfFromSparsity),uvFrom=(xyFrom+HALF2)/u25,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),xyPatchTo=xyPatch*shrinkFactor+xyShrink,uvWeight=(xyTo*toSparsity+xyPatchTo+HALF2)/weightSize,sum+=texture2D(u14,uvWeight)*texture2D(u15,uvFrom);}}}gl_FragColor=sum,gl_FragColor*=2.2222;}",
                    i: "u17 u25 u14 u15 u22 u30".split(" "),
                    yb: ["1.1111", "gl_FragColor\\*=2.2222;", "3.3333"]
                }
            }
              , w = null
              , L = null
              , N = {
                nb: function() {
                    return A
                },
                o: function() {
                    if (!A) {
                        w = mb.Jb(l, 2);
                        L = mb.Jb(J, 2);
                        v = "highp";
                        b.getShaderPrecisionFormat && (b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.MEDIUM_FLOAT),
                        b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.LOW_FLOAT));
                        for (var x in w)
                            e(b, w[x], x);
                        D.set("s0");
                        b.enableVertexAttribArray(0);
                        A = !0
                    }
                },
                Kc: function(x) {
                    x.forEach(function(f) {
                        N.Jc(f)
                    })
                },
                Jc: function(x) {
                    w[x.id] = x;
                    e(b, x, x.id)
                },
                nd: function(x, f, z) {
                    f || (f = x);
                    w[f] = Object.create(L[x]);
                    w[f].df = !0;
                    L[x].yb && L[x].yb.forEach(function(I, h) {
                        w[f].h = w[f].h.replace(new RegExp(I,"g"), z[h])
                    });
                    e(b, w[f], f)
                },
                set: function(x) {
                    var f = w[x];
                    f.B && (f.B = !1,
                    e(b, f, x));
                    g(f)
                },
                Sa: function(x) {
                    return m(x, t(), "s41")
                },
                tc: function(x) {
                    return m(x, {
                        h: "void main(){gl_FragColor=vec4(.5,.5,.5,.5);}",
                        i: [],
                        precision: v
                    }, "s42")
                },
                Fe: function(x) {
                    return "undefined" === typeof w[x] ? !1 : w[x].pa
                },
                P: function() {
                    -1 !== q && (q = -1,
                    u.Ia.forEach(function(x) {
                        0 !== x && b.disableVertexAttribArray(x)
                    }))
                },
                uc: function() {
                    var x = 0;
                    u.Ia.forEach(function(f, z) {
                        z = u.Ha[z];
                        b.vertexAttribPointer(f, z, b.FLOAT, !1, u.Cc, x);
                        x += 4 * z
                    })
                },
                Wc: function() {
                    b.enableVertexAttribArray(0)
                },
                Ca: function() {
                    N.zb(b)
                },
                zb: function(x) {
                    x.vertexAttribPointer(u.Ia[0], 2, x.FLOAT, !1, 8, 0)
                },
                Fh: function(x, f) {
                    b.uniform1i(u.A[x], f)
                },
                G: function(x, f) {
                    b.uniform1f(u.A[x], f)
                },
                sa: function(x, f, z) {
                    b.uniform2f(u.A[x], f, z)
                },
                Gh: function(x, f) {
                    b.uniform2fv(u.A[x], f)
                },
                Jf: function(x, f) {
                    b.uniform3fv(u.A[x], f)
                },
                Hh: function(x, f, z, I) {
                    b.uniform3f(u.A[x], f, z, I)
                },
                Kf: function(x, f, z, I, h) {
                    b.uniform4f(u.A[x], f, z, I, h)
                },
                Td: function(x, f) {
                    b.uniform4fv(u.A[x], f)
                },
                Ih: function(x, f) {
                    b.uniformMatrix2fv(u.A[x], !1, f)
                },
                Jh: function(x, f) {
                    b.uniformMatrix3fv(u.A[x], !1, f)
                },
                Kh: function(x, f) {
                    b.uniformMatrix4fv(u.A[x], !1, f)
                },
                S: function(x, f) {
                    N.set(x);
                    f.forEach(function(z) {
                        switch (z.type) {
                        case "4f":
                            b.uniform4fv(u.A[z.name], z.value);
                            break;
                        case "3f":
                            b.uniform3fv(u.A[z.name], z.value);
                            break;
                        case "2f":
                            b.uniform2fv(u.A[z.name], z.value);
                            break;
                        case "1f":
                            b.uniform1f(u.A[z.name], z.value);
                            break;
                        case "1i":
                            b.uniform1i(u.A[z.name], z.value);
                            break;
                        case "mat2":
                            b.uniformMatrix2fv(u.A[z.name], !1, z.value);
                            break;
                        case "mat3":
                            b.uniformMatrix3fv(u.A[z.name], !1, z.value);
                            break;
                        case "mat4":
                            b.uniformMatrix4fv(u.A[z.name], !1, z.value)
                        }
                    })
                },
                Vg: function() {
                    return "lowp"
                },
                m: function() {
                    N.P();
                    b.disableVertexAttribArray(0);
                    for (var x in w) {
                        var f = w[x];
                        f.pa && (f.pa = !1,
                        b.deleteProgram(f.ra));
                        f.df && delete w[x]
                    }
                    p.forEach(function(z) {
                        b.deleteShader(z)
                    });
                    p.splice(0);
                    r = 0;
                    A = !1;
                    u = null;
                    q = -1
                }
            };
            return N
        }()
          , b = null
          , Ha = function() {
            function a(n) {
                console.log("ERROR in ContextFF: ", n);
                return !1
            }
            function c() {
                return navigator.userAgent && -1 !== navigator.userAgent.indexOf("forceWebGL1")
            }
            function d(n) {
                function y() {
                    Ba.m();
                    aa.reset();
                    k.getExtension("WEBGL_lose_context").loseContext()
                }
                if (c())
                    return !1;
                var E = document.createElement("canvas");
                E.setAttribute("width", 5);
                E.setAttribute("height", 5);
                var k = null;
                try {
                    k = E.getContext("webgl2", n)
                } catch (M) {
                    return !1
                }
                if (!k)
                    return !1;
                e(k);
                aa.Xc(k);
                n = aa.Kb(k);
                if (!n.fa && !n.ha)
                    return y(),
                    !1;
                n = Ba.Nc(k, n);
                y();
                return n ? !0 : !1
            }
            function e(n) {
                n.clearColor(0, 0, 0, 0);
                n.disable(n.DEPTH_TEST);
                n.disable(n.BLEND);
                n.disable(n.DITHER);
                n.disable(n.STENCIL_TEST);
                n.disable(n.CULL_FACE);
                n.GENERATE_MIPMAP_HINT && n.hint(n.GENERATE_MIPMAP_HINT, n.FASTEST);
                n.disable(n.SAMPLE_ALPHA_TO_COVERAGE);
                n.disable(n.SAMPLE_COVERAGE);
                n.depthFunc(n.LEQUAL);
                n.clearDepth(1)
            }
            var g = null
              , m = null
              , t = null
              , p = null
              , q = !0
              , u = null
              , r = null
              , A = []
              , v = {
                F: function() {
                    return g.width
                },
                U: function() {
                    return g.height
                },
                Mg: function() {
                    return g
                },
                Kg: function() {
                    return b
                },
                ia: function() {
                    return q
                },
                flush: function() {
                    b.flush()
                },
                Ye: function() {
                    va.ca();
                    X.reset();
                    T.reset();
                    D.P();
                    D.Wc();
                    b.disable(b.DEPTH_TEST);
                    b.disable(b.BLEND);
                    T.va();
                    D.Ca()
                },
                Le: function() {
                    u || (u = new Uint8Array(g.width * g.height * 4));
                    b.readPixels(0, 0, g.width, g.height, b.RGBA, b.UNSIGNED_BYTE, u);
                    return u
                },
                Og: function() {
                    return g.toDataURL("image/jpeg")
                },
                Pg: function() {
                    va.O();
                    m || (m = document.createElement("canvas"),
                    t = m.getContext("2d"));
                    m.width = g.width;
                    m.height = g.height;
                    for (var n = v.Le(), y = t.createImageData(m.width, m.height), E = m.width, k = m.height, M = y.data, H = 0; H < k; ++H)
                        for (var l = k - H - 1, J = 0; J < E; ++J) {
                            var w = 4 * (H * E + J)
                              , L = 4 * (l * E + J);
                            M[w] = n[L];
                            M[w + 1] = n[L + 1];
                            M[w + 2] = n[L + 2];
                            M[w + 3] = n[L + 3]
                        }
                    t.putImageData(y, 0, 0);
                    return m.toDataURL("image/png")
                },
                Ng: function(n) {
                    !m && n && (m = document.createElement("canvas"),
                    t = m.getContext("2d"));
                    var y = n ? m : document.createElement("canvas");
                    y.width = g.width;
                    y.height = g.height;
                    (n ? t : y.getContext("2d")).drawImage(g, 0, 0);
                    return y
                },
                o: function(n) {
                    n = Object.assign({
                        ga: null,
                        lc: null,
                        Wa: null,
                        Tc: null,
                        width: 512,
                        height: 512,
                        premultipliedAlpha: !1,
                        bf: !0,
                        antialias: !1,
                        debug: !1,
                        og: !1
                    }, n);
                    n.ga ? (b = n.ga,
                    g = n.ga.canvas) : n.Tc && !n.Wa ? g = document.getElementById(n.Tc) : n.Wa && (g = n.Wa);
                    g || (g = document.createElement("canvas"));
                    g.width = n.width;
                    g.height = n.height;
					
                    if (b)
                        q = b instanceof WebGL2RenderingContext;
                    else {
                        q = !0;
                        var y = {
                            antialias: n.antialias,
                            alpha: !0,
                            preserveDrawingBuffer: !0,
                            premultipliedAlpha: n.premultipliedAlpha,
                            stencil: !1,
                            depth: n.bf,
                            failIfMajorPerformanceCaveat: !0,
                            powerPreference: "high-performance"
                        };
						var E = document.createElement("canvas");
						                    E.setAttribute("width", 500);
						                    E.setAttribute("height", 500);
						                    /* var k = null;
						                    try {
						                        k = E.getContext("webgl2", n)
						                    } catch (M) {
						                        return !1
						                    } */
											console.log(E,g)
											
											console.log(n)
											console.log(E.getContext("webgl", n))
											console.log(n)
											console.log(g.getContext("webgl", y))
											console.log(g.getContext("webgl2", y))
											console.log(g.getContext("experimental-webgl", y))
                        navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("noAntialiasing") && (y.antialias = !1);
                        var E = d(y);
						//console.log(g)
                        E || !y.antialias || c() || (y.antialias = !1,
                        E = d(y));
                        E && (b = g.getContext("webgl2", y));
                        b ? q = !0 : ((b = g.getContext("webgl", y)) || (b = g.getContext("experimental-webgl", y)),
                        q = !1)
						
                    }
                    if (!b)
                        return a("WebGL1 and 2 are not enabled");
                    n.lc && g.addEventListener && (p = b.getExtension("WEBGL_lose_context")) && (r = n.lc,
                    g.addEventListener("webglcontextlost", r, !1));
                    if (!aa.o())
                        return a("Not enough GL capabilities");
                    e(b);
                    D.o();
                    T.o();
                    Ba.Nc(b, aa.Ke());
                    A.forEach(function(k) {
                        k(b)
                    });
                    A.splice(0);
                    return !0
                },
                dg: function() {
                    return new Promise(function(n) {
                        b ? n(b) : A.push(n)
                    }
                    )
                },
                m: function() {
                    b && (aa.m(),
                    D.m(),
                    Ba.m());
                    p && r && (g.removeEventListener("webglcontextlost", r, !1),
                    p = r = null);
                    b = u = t = m = g = null;
                    A.splice(0)
                }
            };
            return v
        }()
          , xa = function() {
            function a() {
                null === c && ("undefined" !== typeof D ? c = D : "undefined" !== typeof JEShaders && (c = JEShaders))
            }
            var c = null;
            return {
                reset: function() {
                    c = null
                },
                If: function(d) {
                    c !== d && (c && c.P(),
                    c = d)
                },
                nb: function() {
                    return c.nb()
                },
                Ca: function() {
                    return c.Ca()
                },
                zb: function(d) {
                    return c.zb(d)
                },
                uc: function() {
                    return c.uc()
                },
                P: function() {
                    return c.P()
                },
                set: function(d) {
                    a();
                    return c.set(d)
                },
                Sa: function(d) {
                    a();
                    return c.Sa(d)
                },
                tc: function(d) {
                    a();
                    return c.tc(d)
                }
            }
        }()
          , Aa = function() {
            function a(h) {
                b.bindTexture(b.TEXTURE_2D, h)
            }
            function c(h) {
                x[0] = h;
                h = f[0];
                var C = h >> 16 & 32768
                  , K = h >> 12 & 2047
                  , O = h >> 23 & 255;
                return 103 > O ? C : 142 < O ? C | 31744 | ((255 == O ? 0 : 1) && h & 8388607) : 113 > O ? (K |= 2048,
                C | (K >> 114 - O) + (K >> 113 - O & 1)) : C = (C | O - 112 << 10 | K >> 1) + (K & 1)
            }
            function d(h) {
                var C = new Uint16Array(h.length);
                h.forEach(function(K, O) {
                    C[O] = c(K)
                });
                return C
            }
            function e() {
                if (null !== z.Xb)
                    return z.Xb;
                var h = m(d([.5, .5, .5, .5]), !0);
                return null === h ? !0 : z.Xb = h
            }
            function g() {
                if (null !== z.Yb)
                    return z.Yb;
                var h = m(new Uint8Array([127, 127, 127, 127]), !1);
                return null === h ? !0 : z.Yb = h
            }
            function m(h, C) {
                if (!xa.nb() || !E)
                    return null;
                var K = null
                  , O = Math.sqrt(h.length / 4);
                try {
                    var Y = b.getError();
                    if ("FUCKING_BIG_ERROR" === Y)
                        return !1;
                    K = I.instance({
                        isFloat: !1,
                        R: C,
                        array: h,
                        width: O
                    });
                    Y = b.getError();
                    if (Y !== b.NO_ERROR)
                        return !1
                } catch (oa) {
                    return !1
                }
                la.O();
                b.viewport(0, 0, O, O);
                b.clearColor(0, 0, 0, 0);
                b.clear(b.COLOR_BUFFER_BIT);
                xa.set("s0");
                K.Lc(0);
                ma.l(!0, !0);
                h = 4 * O * O;
                C = new Uint8Array(h);
                b.readPixels(0, 0, O, O, b.RGBA, b.UNSIGNED_BYTE, C);
                O = !0;
                for (Y = 0; Y < h; ++Y)
                    O = O && 3 > Math.abs(C[Y] - 127);
                K.remove();
                la.ca();
                return O
            }
            var t = 0
              , p = null
              , q = 0
              , u = null
              , r = null
              , A = null
              , v = null
              , n = null
              , y = null
              , E = !1
              , k = []
              , M = {
                isFloat: !1,
                isPot: !0,
                isLinear: !1,
                isMipmap: !1,
                isAnisotropicFiltering: !1,
                isMirrorX: !1,
                isMirrorY: !1,
                isSrgb: !1,
                isKeepArray: !1,
                isFlipY: null,
                width: 0,
                height: 0,
                url: null,
                array: null,
                data: null,
                H: null,
                Wb: null,
                cf: !1,
                R: !1,
                ma: null,
                sb: 4,
                ec: 0
            }
              , H = !1
              , l = null
              , J = null
              , w = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
              , L = !1
              , N = !1
              , x = new Float32Array(1)
              , f = new Int32Array(x.buffer)
              , z = {
                Xb: null,
                Yb: null
            }
              , I = {
                o: function() {
                    E || (n = [b.RGBA, null, b.RGBA, b.RGBA],
                    y = [b.RGBA, null, b.RGBA, b.RGBA],
                    p = [b.TEXTURE0, b.TEXTURE1, b.TEXTURE2, b.TEXTURE3, b.TEXTURE4, b.TEXTURE5, b.TEXTURE6, b.TEXTURE7],
                    L = "undefined" !== typeof JEContext,
                    N = "undefined" !== typeof aa,
                    L && JEContext.ph() && p.push(b.TEXTURE8, b.TEXTURE9),
                    u = [-1, -1, -1, -1, -1, -1, -1, -1],
                    v = [b.UNSIGNED_BYTE, b.FLOAT, b.FLOAT],
                    E = !0)
                },
                Ze: function() {
                    if (!r) {
                        for (var h = new Float32Array(16384), C = 0; 16384 > C; ++C)
                            h[C] = 2 * Math.random() - 1;
                        r = {
                            random: I.instance({
                                isFloat: !0,
                                isPot: !0,
                                array: h,
                                width: 64
                            }),
                            ae: I.instance({
                                isFloat: !1,
                                isPot: !0,
                                width: 1,
                                array: new Uint8Array([0, 0, 0, 0])
                            })
                        }
                    }
                    I.Wf()
                },
                eh: function() {
                    return r.ae
                },
                Wf: function() {
                    v[1] = aa.Tb(b)
                },
                Gf: function() {
                    y = n = [b.RGBA, b.RGBA, b.RGBA, b.RGBA]
                },
                Ld: function(h) {
                    D.set("s1");
                    la.O();
                    var C = h.F()
                      , K = h.U();
                    b.viewport(0, 0, C, K);
                    h.g(0);
                    ma.l(!1, !1)
                },
                wh: function(h, C) {
                    I.Ld(h);
                    b.readPixels(0, 0, h.F(), h.U(), b.RGBA, b.UNSIGNED_BYTE, C)
                },
                xh: function(h, C) {
                    I.Ld(h);
                    return aa.xb(0, 0, h.F(), h.U(), C)
                },
                ed: function(h, C, K, O, Y, oa, sa) {
                    h.activeTexture(h.TEXTURE0);
                    var Ca = h.createTexture();
                    h.bindTexture(h.TEXTURE_2D, Ca);
                    Y = Y instanceof Float32Array ? Y : new Float32Array(Y);
                    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE);
                    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE);
                    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.NEAREST);
                    h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.NEAREST);
                    h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, oa);
                    h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, K, O, 0, h.RGBA, h.FLOAT, Y);
                    h.bindTexture(h.TEXTURE_2D, null);
                    h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL, !1);
                    sa && (la.ca(),
                    D.Sa(h));
                    h.viewport(0, 0, K, O);
                    h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, C, 0);
                    h.bindTexture(h.TEXTURE_2D, Ca);
                    sa ? ma.l(!0, !0) : T.bb(h);
                    h.deleteTexture(Ca);
                    E && (u[0] = -1,
                    A = null,
                    t = 0)
                },
                Fb: function(h) {
                    h !== t && (b.activeTexture(p[h]),
                    t = h)
                },
                instance: function(h) {
                    var C;
                    function K() {
                        R = void 0 !== B.H.videoWidth ? B.H.videoWidth : B.H.width;
                        S = void 0 !== B.H.videoHeight ? B.H.videoHeight : B.H.height
                    }
                    function O(F) {
                        var P = b.getError();
                        if ("FUCKING_BIG_ERROR" === P)
                            return !1;
                        b.texImage2D(b.TEXTURE_2D, 0, ja, fa, ha, F);
                        P = b.getError();
                        P !== b.NO_ERROR && fa !== b.RGBA && (fa = b.RGBA,
                        b.texImage2D(b.TEXTURE_2D, 0, ja, fa, ha, F));
                        return !0
                    }
                    function Y() {
                        if (!Ab) {
                            a(ta);
                            za && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, za);
                            B.isPot ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, B.isMirrorX ? b.MIRRORED_REPEAT : b.REPEAT),
                            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, B.isMirrorY ? b.MIRRORED_REPEAT : b.REPEAT)) : (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE),
                            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE));
                            B.isAnisotropicFiltering && "undefined" !== typeof JESETTINGS && b.texParameterf(b.TEXTURE_2D, JEContext.Qg().TEXTURE_MAX_ANISOTROPY_EXT, JESETTINGS.$f);
                            b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, B.isLinear ? b.LINEAR : b.NEAREST);
                            B.isLinear ? b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, B.isMipmap && !La ? b.NEAREST_MIPMAP_LINEAR : b.LINEAR) : b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, B.isMipmap && !La ? b.NEAREST_MIPMAP_NEAREST : b.NEAREST);
                            fa = n[B.sb - 1];
                            ja = y[B.sb - 1];
                            ha = v[nb];
                            if (aa.ia()) {
                                var F = aa.Ne();
                                fa === b.RGBA && ha === b.FLOAT ? B.isMipmap || B.isLinear ? ja = Ba.Pe(b) : aa.Oc() ? F && (ja = F) : ja = b.RGBA16F || b.RGBA : fa === b.RGB && ha === b.FLOAT && F && (ja = F,
                                fa = b.RGBA)
                            }
                            if (B.R && !B.isFloat || B.isFloat && B.isMipmap && Ba.hf())
                                ja = aa.Oe(),
                                ha = aa.Tb(b);
                            B.ec && (bb = B.ec);
                            B.isSrgb && 4 === B.sb && (fa = JEContext.bh());
                            if (B.H)
                                O(B.H);
                            else if (B.url)
                                O(Ga);
                            else if (ua) {
                                F = ua;
                                try {
                                    "FUCKING_BIG_ERROR" !== b.getError() && (b.texImage2D(b.TEXTURE_2D, 0, ja, R, S, 0, fa, ha, F),
                                    b.getError() !== b.NO_ERROR && (b.texImage2D(b.TEXTURE_2D, 0, ja, R, S, 0, fa, ha, null),
                                    b.getError() !== b.NO_ERROR && b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, R, S, 0, b.RGBA, b.UNSIGNED_BYTE, null)))
                                } catch (ec) {
                                    b.texImage2D(b.TEXTURE_2D, 0, ja, R, S, 0, fa, ha, null)
                                }
                                B.isKeepArray || (ua = null)
                            } else
                                F = b.getError(),
                                "FUCKING_BIG_ERROR" !== F && (b.texImage2D(b.TEXTURE_2D, 0, ja, R, S, 0, fa, ha, null),
                                F = b.getError(),
                                F !== b.NO_ERROR && (fa = b.RGBA,
                                B.R && ha !== b.FLOAT && (ha = b.FLOAT,
                                b.texImage2D(b.TEXTURE_2D, 0, ja, R, S, 0, fa, ha, null))));
                            if (B.isMipmap)
                                if (!La && ca)
                                    ca.Sb(),
                                    cb = !0;
                                else if (La) {
                                    F = Math.log2(Math.min(R, S));
                                    Ra = Array(1 + F);
                                    Ra[0] = ta;
                                    for (var P = 1; P <= F; ++P) {
                                        var ka = Math.pow(2, P)
                                          , W = R / ka;
                                        ka = S / ka;
                                        var Ma = b.createTexture();
                                        a(Ma);
                                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
                                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
                                        b.texImage2D(b.TEXTURE_2D, 0, ja, W, ka, 0, fa, ha, null);
                                        a(null);
                                        Ra[P] = Ma
                                    }
                                    cb = !0
                                }
                            a(null);
                            u[t] = -1;
                            za && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1);
                            Ta = !0;
                            B.ma && ca && (B.ma(ca),
                            B.ma = null)
                        }
                    }
                    function oa() {
                        for (var F = R * S, P = 2 * F, ka = 3 * F, W = 0; W < F; ++W)
                            ya[0][W] = Ua[W],
                            ya[1][W] = Ua[W + F],
                            ya[2][W] = Ua[W + P],
                            ya[3][W] = Ua[W + ka]
                    }
                    function sa() {
                        var F = R * S * 4;
                        Da = [new Uint8Array(F), new Uint8Array(F), new Uint8Array(F), new Uint8Array(F)];
                        ya = [new Float32Array(Da[0].buffer), new Float32Array(Da[1].buffer), new Float32Array(Da[2].buffer), new Float32Array(Da[3].buffer)];
                        db = new Uint8Array(4 * F);
                        Ua = new Float32Array(db.buffer);
                        Va = !0
                    }
                    function Ca() {
                        C = new Uint8Array(R * S * 4);
                        Bb = new Float32Array(C.buffer);
                        ob = !0
                    }
                    var B = Object.assign({}, M, h)
                      , Wa = q++;
                    null === B.isFlipY && (B.isFlipY = B.url ? !0 : !1);
                    B.data && (B.array = "string" === typeof B.data ? Ib(B.data) : B.isFloat ? new Float32Array(B.data) : new Uint8Array(B.data),
                    B.isFlipY = !1);
                    var nb = 0
                      , Cb = B.H ? !0 : !1
                      , Xa = null
                      , pb = null
                      , Db = !1;
                    B.R = B.R || B.isFloat;
                    B.R && (nb = 1);
                    !B.cf && B.isFloat && N && !aa.Oc() && (B.isFloat = !1);
                    B.isFloat && (nb = 2);
                    B.isAnisotropicFiltering && L && !JEContext.ih() && (B.isAnisotropicFiltering = !1);
                    var ta = B.Wb || b.createTexture()
                      , Ga = null
                      , ua = !1
                      , R = 0
                      , S = 0
                      , Ta = !1
                      , Ab = !1
                      , Va = !1
                      , ya = null
                      , Da = null
                      , db = null
                      , Ua = null
                      , ja = null
                      , fa = null
                      , ha = null
                      , za = B.isFlipY
                      , Tb = (h = B.R && B.isMipmap) && Ba.me()
                      , La = h && Tb ? !0 : !1
                      , Ra = null
                      , bb = -1
                      , cb = !1;
                    var ob = !1;
                    var Bb = C = null;
                    B.width && (R = B.width,
                    S = B.height ? B.height : R);
                    var ca = {
                        get: function() {
                            return ta
                        },
                        F: function() {
                            return R
                        },
                        U: function() {
                            return S
                        },
                        fh: function() {
                            return B.url
                        },
                        jh: function() {
                            return B.isFloat
                        },
                        lh: function() {
                            return B.R
                        },
                        mh: function() {
                            return B.isLinear
                        },
                        Sb: function() {
                            b.generateMipmap(b.TEXTURE_2D)
                        },
                        ke: function(F, P) {
                            La ? (F || (F = ca.jd()),
                            I.Fb(P),
                            a(Ra[F]),
                            u[P] = -1) : ca.g(P)
                        },
                        jd: function() {
                            -1 === bb && (bb = Math.log(R) / Math.log(2));
                            return bb
                        },
                        He: function(F) {
                            if (La) {
                                F || (F = ca.jd());
                                D.set("s12");
                                I.Fb(0);
                                for (var P = R, ka = S, W = 1; W <= F; ++W)
                                    P /= 2,
                                    ka /= 2,
                                    D.sa("u8", .25 / P, .25 / ka),
                                    b.viewport(0, 0, P, ka),
                                    a(Ra[W - 1]),
                                    b.framebufferTexture2D(la.fb(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, Ra[W], 0),
                                    ma.l(!1, 1 === W);
                                u[0] = -1
                            } else
                                ca.Sb()
                        },
                        Eh: function(F) {
                            (Cb = !Rb.Rf(F)) ? (ua = null,
                            B.H = F,
                            K()) : ua = F
                        },
                        g: function(F) {
                            if (!Ta)
                                return !1;
                            I.Fb(F);
                            if (u[F] === Wa)
                                return !1;
                            a(ta);
                            u[F] = Wa;
                            return !0
                        },
                        Lc: function(F) {
                            b.activeTexture(p[F]);
                            t = F;
                            a(ta);
                            u[F] = Wa
                        },
                        u: function() {
                            A = ca;
                            b.framebufferTexture2D(la.fb(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, ta, 0)
                        },
                        $: function() {
                            A = ca;
                            b.viewport(0, 0, R, S);
                            b.framebufferTexture2D(la.fb(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, ta, 0)
                        },
                        Ac: I.Ac,
                        Sd: function(F, P) {
                            R = F;
                            S = P
                        },
                        resize: function(F, P) {
                            ca.Sd(F, P);
                            Y()
                        },
                        clone: function(F) {
                            F = I.instance({
                                width: R,
                                height: S,
                                R: B.R,
                                isFloat: B.isFloat,
                                isLinear: B.isLinear,
                                isMirrorY: B.isMirrorY,
                                isFlipY: F ? !za : za,
                                isPot: B.isPot
                            });
                            xa.set("s0");
                            la.ca();
                            F.u();
                            b.viewport(0, 0, R, S);
                            ca.g(0);
                            ma.l(!0, !0);
                            return F
                        },
                        Lf: function() {
                            b.viewport(0, 0, R, S)
                        },
                        remove: function() {
                            b.deleteTexture(ta);
                            Ab = !0;
                            k.splice(k.indexOf(ca), 1);
                            ca = null
                        },
                        refresh: function() {
                            ca.Lc(0);
                            za && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !0);
                            Cb ? b.texImage2D(b.TEXTURE_2D, 0, ja, fa, ha, B.H) : b.texImage2D(b.TEXTURE_2D, 0, ja, R, S, 0, fa, ha, ua);
                            za && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1)
                        },
                        Kd: function() {
                            Va || sa();
                            b.readPixels(0, 0, R, 4 * S, b.RGBA, b.UNSIGNED_BYTE, db);
                            oa();
                            return ya
                        },
                        yf: function() {
                            Va || sa();
                            return aa.xb(0, 0, R, 4 * S, db).then(function() {
                                oa();
                                return ya
                            })
                        },
                        Af: function() {
                            ob || Ca();
                            b.readPixels(0, 0, R, S, b.RGBA, b.UNSIGNED_BYTE, C);
                            return Bb
                        },
                        zf: function() {
                            ob || Ca();
                            return aa.xb(0, 0, R, S, C)
                        },
                        Uc: function(F) {
                            la.O();
                            D.set("s13");
                            ca.g(0);
                            if (F)
                                b.viewport(0, 0, R, S),
                                D.Kf("u9", .25, .25, .25, .25),
                                ma.l(!1, !0);
                            else
                                for (F = 0; 4 > F; ++F)
                                    b.viewport(0, S * F, R, S),
                                    D.Td("u9", w[F]),
                                    ma.l(!1, 0 === F)
                        },
                        Db: function(F) {
                            var P = ha === v[0] && !g();
                            a(ta);
                            za && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !0);
                            P ? (Db || (Xa = document.createElement("canvas"),
                            Xa.width = R,
                            Xa.height = S,
                            pb = Xa.getContext("2d"),
                            pb.createImageData(R, S),
                            Db = !0),
                            null.data.set(F),
                            pb.putImageData(null, 0, 0),
                            b.texImage2D(b.TEXTURE_2D, 0, ja, fa, ha, Xa)) : b.texImage2D(b.TEXTURE_2D, 0, ja, R, S, 0, fa, ha, F);
                            u[t] = Wa;
                            za && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1)
                        },
                        Qh: function(F, P) {
                            a(ta);
                            P && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !0);
                            b.texImage2D(b.TEXTURE_2D, 0, ja, fa, ha, F);
                            u[t] = Wa;
                            P && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1)
                        },
                        Dh: function(F, P) {
                            var ka = R * S
                              , W = 4 * ka;
                            F = B.R ? F ? "RGBE" : "JSON" : "RGBA";
                            P && (F = P);
                            P = aa.ia() && !1;
                            var Ma = null;
                            switch (F) {
                            case "RGBE":
                                Ma = "s43";
                                break;
                            case "JSON":
                                Ma = P ? "s0" : "s13";
                                break;
                            case "RGBA":
                            case "RGBAARRAY":
                                Ma = "s7"
                            }
                            Va || ("RGBA" === F || "RGBE" === F || "RGBAARRAY" === F ? (Da = new Uint8Array(W),
                            Va = !0) : "JSON" !== F || P || sa());
                            la.O();
                            D.set(Ma);
                            ca.g(0);
                            W = null;
                            if ("RGBA" === F || "RGBE" === F || "RGBAARRAY" === F) {
                                b.viewport(0, 0, R, S);
                                ma.l(!0, !0);
                                b.readPixels(0, 0, R, S, b.RGBA, b.UNSIGNED_BYTE, Da);
                                if ("RGBAARRAY" === F)
                                    return {
                                        data: Da
                                    };
                                H || (l = document.createElement("canvas"),
                                J = l.getContext("2d"),
                                H = !0);
                                l.width = R;
                                l.height = S;
                                ka = J.createImageData(R, S);
                                ka.data.set(Da);
                                J.putImageData(ka, 0, 0);
                                W = l.toDataURL("image/png")
                            } else if ("JSON" === F)
                                if (P)
                                    W = new Float32Array(ka),
                                    b.viewport(0, 0, R, S),
                                    ma.l(!0, !0),
                                    b.readPixels(0, 0, R, S, b.RGBA, b.FLOAT, W);
                                else {
                                    for (W = 0; 4 > W; ++W)
                                        b.viewport(0, S * W, R, S),
                                        D.Td("u9", w[W]),
                                        ma.l(!W, !W);
                                    ca.Kd();
                                    W = Array(ka);
                                    for (P = 0; P < ka; ++P)
                                        W[4 * P] = ya[0][P],
                                        W[4 * P + 1] = ya[1][P],
                                        W[4 * P + 2] = ya[2][P],
                                        W[4 * P + 3] = ya[3][P]
                                }
                            return {
                                format: F,
                                data: W,
                                width: R,
                                height: S,
                                isMirrorY: B.isMirrorY,
                                isFlipY: "RGBA" === F ? B.isFlipY : !B.isFlipY
                            }
                        }
                    };
                    B.isMipmap && !La && Ta && !cb && (ca.Sb(),
                    cb = !0);
                    if (B.url)
                        a(ta),
                        b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, 1, 1, 0, b.RGBA, b.UNSIGNED_BYTE, null),
                        Ga = new Image,
                        Ga.ng = "Anonymous",
                        Ga.crossOrigin = "Anonymous",
                        Ga.src = B.url,
                        Ga.onload = function() {
                            R = Ga.width;
                            S = Ga.height;
                            Y()
                        }
                        ;
                    else if (B.H) {
                        var Eb = function() {
                            K();
                            R ? Y() : setTimeout(Eb, 1)
                        };
                        Eb()
                    } else
                        B.array ? (B.R && !B.isFloat ? B.array instanceof Uint16Array ? (ua = B.array,
                        Y()) : e() ? (ua = d(B.array),
                        Y()) : (Y(),
                        I.ed(b, ta, ca.F(), ca.U(), B.array, za, !0)) : (ua = B.isFloat ? B.array instanceof Float32Array ? B.array : new Float32Array(B.array) : B.array instanceof Uint8Array ? B.array : new Uint8Array(B.array),
                        Y()),
                        B.isKeepArray || (ua && ua !== B.array && (ua = null),
                        delete B.array)) : B.Wb ? Ta = !0 : Y();
                    ca.$g = ca.F;
                    B.ma && Ta && (B.ma(ca),
                    B.ma = null);
                    k.push(ca);
                    return ca
                },
                O: function(h) {
                    h !== t && (b.activeTexture(p[h]),
                    t = h);
                    u[h] = -1;
                    a(null)
                },
                cg: function(h) {
                    r.random.g(h)
                },
                Ac: function() {
                    A = null;
                    b.framebufferTexture2D(la.fb(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0)
                },
                reset: function() {
                    0 !== t && b.activeTexture(p[0]);
                    for (var h = 0; h < p.length; ++h)
                        u[h] = -1;
                    t = -1
                },
                Ah: function() {
                    t = -1
                },
                Tf: function() {
                    for (var h = 0; h < p.length; ++h)
                        I.O(h)
                },
                fd: function() {
                    r && (r.random.remove(),
                    r.ae.remove())
                },
                Ph: function(h, C) {
                    if ("RGBA" === h.format || "RGBE" === h.format) {
                        var K = new Image;
                        K.src = h.data;
                        K.onload = function() {
                            I.instance({
                                isMirrorY: h.isMirrorY,
                                isFlipY: h.isFlipY,
                                isFloat: !1,
                                H: K,
                                ma: function(O) {
                                    if ("RGBA" === h.format)
                                        C(O);
                                    else {
                                        var Y = h.width
                                          , oa = h.height
                                          , sa = I.instance({
                                            isMirrorY: h.isMirrorY,
                                            isFloat: !0,
                                            width: Y,
                                            height: oa,
                                            isFlipY: h.isFlipY
                                        });
                                        la.ca();
                                        b.viewport(0, 0, Y, oa);
                                        D.set("s44");
                                        sa.u();
                                        O.g(0);
                                        ma.l(!0, !0);
                                        I.O(0);
                                        C(sa);
                                        aa.flush();
                                        setTimeout(O.remove, 50)
                                    }
                                }
                            })
                        }
                    } else
                        "JSON" === h.format ? C(I.instance({
                            isFloat: !0,
                            isFlipY: h.isFlipY,
                            width: h.width,
                            height: h.height,
                            array: new Float32Array(h.data)
                        })) : C(!1)
                },
                te: d,
                m: function() {
                    A && (va.ca(),
                    I.Ac(),
                    va.O());
                    I.Tf();
                    k.slice(0).forEach(function(h) {
                        h.remove()
                    });
                    k.splice(0);
                    E = !1;
                    q = 0;
                    "undefined" !== typeof Ba && Ba.m();
                    r = null
                }
            };
            return I
        }()
          , Nb = function() {
            return {
                instance: function(a) {
                    var c = [Aa.instance(a), Aa.instance(a)]
                      , d = [c[1], c[0]]
                      , e = d
                      , g = {
                        Df: function(m) {
                            e[1].u();
                            e[0].g(m);
                            g.Wd()
                        },
                        Ef: function(m) {
                            e[1].$();
                            e[0].g(m);
                            g.Wd()
                        },
                        Wd: function() {
                            e = e === c ? d : c
                        },
                        refresh: function() {
                            e[0].refresh();
                            e[1].refresh()
                        },
                        g: function(m) {
                            e[0].g(m)
                        },
                        bg: function(m) {
                            e[1].g(m)
                        },
                        Ug: function() {
                            return e[0]
                        },
                        Yg: function() {
                            return e[1]
                        },
                        Db: function(m) {
                            e[0].Db(m);
                            e[1].Db(m)
                        },
                        remove: function() {
                            e[0].remove();
                            e[1].remove();
                            e = null
                        },
                        sync: function() {
                            g.Ef(0);
                            D.set("s0");
                            T.l(!1, !1)
                        }
                    };
                    return g
                }
            }
        }()
          , ma = function() {
            function a(q) {
                var u = {
                    aa: null,
                    J: null
                };
                u.aa = q.createBuffer();
                q.bindBuffer(q.ARRAY_BUFFER, u.aa);
                q.bufferData(q.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), q.STATIC_DRAW);
                u.J = q.createBuffer();
                q.bindBuffer(q.ELEMENT_ARRAY_BUFFER, u.J);
                q.bufferData(q.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), q.STATIC_DRAW);
                return u
            }
            var c = null
              , d = 0
              , e = !1
              , g = []
              , m = -2
              , t = -2
              , p = {
                reset: function() {
                    t = m = -2
                },
                o: function() {
                    e || (c = a(b),
                    p.va(),
                    e = !0)
                },
                instance: function(q) {
                    var u = d++
                      , r = q.J ? q.J.length : 0
                      , A = "undefined" === typeof q.mode ? b.STATIC_DRAW : q.mode
                      , v = b.createBuffer();
                    b.bindBuffer(b.ARRAY_BUFFER, v);
                    b.bufferData(b.ARRAY_BUFFER, q.aa instanceof Float32Array ? q.aa : new Float32Array(q.aa), A);
                    m = u;
                    var n = null
                      , y = null
                      , E = null;
                    if (q.J) {
                        n = b.createBuffer();
                        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, n);
                        var k = null;
                        65536 > q.J.length ? (k = Uint16Array,
                        y = b.UNSIGNED_SHORT,
                        E = 2) : (k = Uint32Array,
                        y = b.UNSIGNED_INT,
                        E = 4);
                        k = q.J instanceof k ? q.J : new k(q.J);
                        b.bufferData(b.ELEMENT_ARRAY_BUFFER, k, A);
                        t = u
                    }
                    var M = {
                        le: function(H) {
                            m !== u && (b.bindBuffer(b.ARRAY_BUFFER, v),
                            m = u);
                            H && xa.uc()
                        },
                        ie: function() {
                            t !== u && (b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, n),
                            t = u)
                        },
                        bind: function(H) {
                            M.le(H);
                            M.ie()
                        },
                        rg: function() {
                            b.drawElements(b.TRIANGLES, r, y, 0)
                        },
                        sg: function(H, l) {
                            b.drawElements(b.TRIANGLES, H, y, l * E)
                        },
                        remove: function() {
                            b.deleteBuffer(v);
                            q.J && b.deleteBuffer(n);
                            M = null
                        }
                    };
                    g.push(M);
                    return M
                },
                va: function() {
                    -1 !== m && (b.bindBuffer(b.ARRAY_BUFFER, c.aa),
                    m = -1);
                    -1 !== t && (b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, c.J),
                    t = -1)
                },
                l: function(q, u) {
                    q && ma.va();
                    u && xa.Ca();
                    b.drawElements(b.TRIANGLES, 3, b.UNSIGNED_SHORT, 0)
                },
                bb: function(q) {
                    q = q || b;
                    var u = a(q);
                    q.bindBuffer(q.ARRAY_BUFFER, u.aa);
                    q.bindBuffer(q.ELEMENT_ARRAY_BUFFER, u.J);
                    xa.zb(q);
                    q.clear(q.COLOR_BUFFER_BIT);
                    q.drawElements(q.TRIANGLES, 3, q.UNSIGNED_SHORT, 0);
                    q.flush();
                    q.bindBuffer(q.ARRAY_BUFFER, null);
                    q.bindBuffer(q.ELEMENT_ARRAY_BUFFER, null);
                    q.deleteBuffer(u.aa);
                    q.deleteBuffer(u.J);
                    p.reset();
                    e && (p.va(),
                    xa.Ca())
                },
                fd: function() {
                    var q = b
                      , u = c;
                    q.deleteBuffer(u.aa);
                    q.deleteBuffer(u.J)
                },
                m: function() {
                    p.fd();
                    g.forEach(function(q) {
                        q.remove()
                    });
                    b.bindBuffer(b.ARRAY_BUFFER, null);
                    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, null);
                    p.reset();
                    e = !1;
                    g.splice(0);
                    d = 0
                }
            };
            return p
        }()
          , la = function() {
            var a = null
              , c = null
              , d = null
              , e = !1
              , g = []
              , m = {
                I: -2,
                dd: 1
            }
              , t = {
                nb: function() {
                    return e
                },
                o: function() {
                    if (!e) {
                        a = b.createFramebuffer();
                        var p = aa.ia();
                        c = p && b.DRAW_FRAMEBUFFER ? b.DRAW_FRAMEBUFFER : b.FRAMEBUFFER;
                        d = p && b.READ_FRAMEBUFFER ? b.READ_FRAMEBUFFER : b.FRAMEBUFFER;
                        e = !0
                    }
                },
                Rg: function() {
                    return c
                },
                Qe: function() {
                    return d
                },
                fb: function() {
                    return b.FRAMEBUFFER
                },
                Zg: function() {
                    return m
                },
                Jg: function() {
                    return a
                },
                instance: function(p) {
                    void 0 === p.qd && (p.qd = !1);
                    var q = p.K ? p.K : null
                      , u = p.width
                      , r = void 0 !== p.height ? p.height : p.width
                      , A = a
                      , v = null
                      , n = !1
                      , y = !1
                      , E = 0;
                    q && (u = u ? u : q.F(),
                    r = r ? r : q.U());
                    var k = {
                        Rd: function() {
                            n || (A = b.createFramebuffer(),
                            n = !0,
                            E = m.dd++)
                        },
                        de: function() {
                            k.Rd();
                            k.u();
                            v = b.createRenderbuffer();
                            b.bindRenderbuffer(b.RENDERBUFFER, v);
                            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, u, r);
                            b.framebufferRenderbuffer(c, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, v);
                            b.clearDepth(1)
                        },
                        bind: function(M, H) {
                            E !== m.I && (b.bindFramebuffer(c, A),
                            m.I = E);
                            q && q.u();
                            H && b.viewport(0, 0, u, r);
                            M && b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT)
                        },
                        ag: function() {
                            E !== m.I && (b.bindFramebuffer(c, A),
                            m.I = E)
                        },
                        clear: function() {
                            b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT)
                        },
                        jg: function() {
                            b.clear(b.COLOR_BUFFER_BIT)
                        },
                        kg: function() {
                            b.clear(b.DEPTH_BUFFER_BIT)
                        },
                        Lf: function() {
                            b.viewport(0, 0, u, r)
                        },
                        u: function() {
                            E !== m.I && (b.bindFramebuffer(c, A),
                            m.I = E)
                        },
                        rtt: function(M) {
                            q = M;
                            m.I !== E && (b.bindFramebuffer(b.FRAMEBUFFER, A),
                            m.I = E);
                            M.u()
                        },
                        O: function() {
                            b.bindFramebuffer(c, null);
                            m.I = -1
                        },
                        resize: function(M, H) {
                            u = M;
                            r = H;
                            v && (b.bindRenderbuffer(b.RENDERBUFFER, v),
                            b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, u, r))
                        },
                        remove: function() {
                            A === a || y || (b.bindFramebuffer(c, A),
                            b.framebufferTexture2D(c, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0),
                            v && b.framebufferRenderbuffer(c, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, null),
                            b.bindFramebuffer(c, null),
                            b.deleteFramebuffer(A),
                            v && b.deleteRenderbuffer(v));
                            y = !0
                        }
                    };
                    p.qd && k.de();
                    g.push(k);
                    return k
                },
                O: function() {
                    b.bindFramebuffer(c, null);
                    m.I = -1
                },
                Uf: function() {
                    b.bindFramebuffer(c, null);
                    b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
                    aa.Ud();
                    m.I = -1
                },
                reset: function() {
                    m.I = -2
                },
                ca: function() {
                    0 !== m.I && (b.bindFramebuffer(c, a),
                    m.I = 0)
                },
                clear: function() {
                    aa.Ud();
                    b.clear(b.COLOR_BUFFER_BIT)
                },
                m: function() {
                    t.O();
                    g.forEach(function(p) {
                        p.remove()
                    });
                    null !== a && (b.deleteFramebuffer(a),
                    a = null);
                    t.reset();
                    e = !1;
                    g.splice(0);
                    m.dd = 1
                }
            };
            return t
        }()
          , aa = function() {
            function a() {
                p = "undefined" === typeof Ha ? JEContext : Ha;
                q = !0
            }
            function c(l, J) {
                for (var w = 0; w < l.length; ++w) {
                    var L = J.getExtension(l[w]);
                    if (L)
                        return L
                }
                return null
            }
            function d() {
                null !== k.Cb && (clearInterval(k.Cb),
                k.Cb = null);
                k.za = !1
            }
            function e(l) {
                if (0 === k.oa.length) {
                    k.V = b.PIXEL_PACK_BUFFER;
                    k.oa.splice(0);
                    k.gb.splice(0);
                    for (var J = 0; J < k.La; ++J)
                        k.oa.push(b.createBuffer()),
                        k.gb.push(-1);
                    k.ea = 0;
                    k.jc = 0
                }
                b.bindBuffer(k.V, k.oa[k.ea]);
                l.byteLength !== k.gb[k.ea] && (b.bufferData(k.V, l.byteLength, b.STREAM_READ),
                k.gb[k.ea] = l.byteLength);
                k.gh = !0
            }
            function g() {
                b.bindBuffer(k.V, null)
            }
            function m() {
                k.xa.forEach(function(l) {
                    b.deleteSync(l)
                });
                k.xa.splice(0)
            }
            function t() {
                k.ea = (k.ea + 1) % k.La;
                ++k.jc
            }
            var p = null
              , q = !1
              , u = {
                sd: !1,
                wc: null,
                xc: null,
                vd: !1,
                gf: !1,
                yc: null,
                wd: !1,
                zc: null,
                td: !1,
                Hb: null,
                $e: !1,
                Ib: null,
                af: !1
            }
              , r = null
              , A = {
                fa: !0,
                ha: !0,
                Rb: !0,
                Jd: !1
            }
              , v = null
              , n = !0
              , y = null
              , E = null
              , k = {
                ue: 1,
                La: -1,
                ea: 0,
                jc: 0,
                za: !1,
                oa: [],
                xa: [],
                gb: [],
                V: null,
                Cb: null
            }
              , M = "undefined" === typeof window ? {} : window
              , H = {
                o: function() {
                    if (q)
                        return !0;
                    H.reset();
                    q || a();
                    var l = b;
                    if (!r.sd) {
                        r.wc = H.$c(l);
                        M.GL_EXT_FLOAT = r.wc;
                        r.vd = r.wc ? !0 : !1;
                        if (r.vd || H.ia())
                            r.xc = H.ad(l),
                            r.gf = r.xc ? !0 : !1,
                            M.GL_EXT_FLOATLINEAR = r.xc;
                        r.sd = !0
                    }
                    if (!r.td) {
                        r.yc = H.$a(l);
                        r.yc && (r.wd = !0,
                        M.GL_EXT_HALFFLOAT = r.yc);
                        if (r.wd || H.ia())
                            r.zc = H.bd(l),
                            M.GL_EXT_HALFFLOATLINEAR = r.zc;
                        r.hh = r.zc ? !0 : !1;
                        r.td = !0
                    }
                    r.Hb = H.Yc(l);
                    r.$e = r.Hb ? !0 : !1;
                    M.GL_EXT_COLORBUFFERFLOAT = r.Hb;
                    r.Ib = H.Zc(l);
                    r.af = r.Ib ? !0 : !1;
                    M.GL_EXT_COLORBUFFERHALFFLOAT = r.Ib;
                    la.o();
                    Aa.o();
                    if (!H.xe())
                        return !1;
                    ma.o();
                    Aa.Ze();
                    return !0
                },
                reset: function() {
                    r = Object.assign({}, u);
                    v = Object.assign({}, A)
                },
                F: function() {
                    q || a();
                    return p.F()
                },
                U: function() {
                    q || a();
                    return p.U()
                },
                ia: function() {
                    q || a();
                    return p.ia()
                },
                Xc: function(l) {
                    H.Yc(l);
                    H.Zc(l);
                    H.$c(l);
                    H.ad(l);
                    H.$a(l);
                    H.bd(l)
                },
                Yc: c.bind(null, ["EXT_color_buffer_float", "WEBGL_color_buffer_float", "OES_color_buffer_float"]),
                Zc: c.bind(null, ["EXT_color_buffer_half_float", "WEBGL_color_buffer_half_float", "OES_color_buffer_half_float"]),
                $c: c.bind(null, ["OES_texture_float", "MOZ_OES_texture_float", "WEBKIT_OES_texture_float"]),
                ad: c.bind(null, ["OES_texture_float_linear", "MOZ_OES_texture_float_linear", "WEBKIT_OES_texture_float_linear"]),
                $a: c.bind(null, ["OES_texture_half_float", "MOZ_OES_texture_half_float", "WEBKIT_OES_texture_half_float"]),
                bd: c.bind(null, ["OES_texture_half_float_linear", "MOZ_OES_texture_half_float_linear", "WEBKIT_OES_texture_half_float_linear"]),
                Tb: function(l) {
                    var J = H.$a(l);
                    return J && J.HALF_FLOAT_OES ? J.HALF_FLOAT_OES : l.HALF_FLOAT || l.FLOAT
                },
                Ne: function() {
                    return E || b.RGBA32F || b.RGBA
                },
                Oe: function() {
                    return y || b.RGBA16F || b.RGBA
                },
                Ke: function() {
                    return v
                },
                Oc: function() {
                    return v.fa
                },
                fg: function() {
                    return v.ha
                },
                eg: function() {
                    return v.Rb
                },
                oe: function() {
                    return v.Jd && n
                },
                Zd: function(l) {
                    n = l;
                    !l && k.za && (m(),
                    b.bindBuffer(k.V, null),
                    k.za = !1)
                },
                nh: function() {
                    return k.za
                },
                Ab: function(l, J, w) {
                    function L() {
                        l.bindTexture(l.TEXTURE_2D, null);
                        l.bindFramebuffer(N, null);
                        l.deleteTexture(z);
                        l.deleteFramebuffer(f)
                    }
                    var N = l.FRAMEBUFFER
                      , x = l.NEAREST
                      , f = l.createFramebuffer();
                    l.bindFramebuffer(N, f);
                    var z = l.createTexture();
                    l.activeTexture(l.TEXTURE0);
                    l.bindTexture(l.TEXTURE_2D, z);
                    l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL, !1);
                    l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE);
                    l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE);
                    l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, x);
                    l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, x);
                    l.texImage2D(l.TEXTURE_2D, 0, J, 3, 3, 0, l.RGBA, w, null);
                    l.framebufferTexture2D(l.FRAMEBUFFER, l.COLOR_ATTACHMENT0, l.TEXTURE_2D, z, 0);
                    if (l.checkFramebufferStatus(l.READ_FRAMEBUFFER || l.FRAMEBUFFER) !== l.FRAMEBUFFER_COMPLETE)
                        return L(),
                        !1;
                    xa.tc(l);
                    l.clearColor(0, 0, 0, 0);
                    l.viewport(0, 0, 3, 3);
                    l.disable(l.DEPTH_TEST);
                    l.clear(l.COLOR_BUFFER_BIT);
                    ma.bb(l);
                    l.bindFramebuffer(N, null);
                    xa.Sa(l);
                    l.activeTexture(l.TEXTURE0);
                    l.bindTexture(l.TEXTURE_2D, z);
                    ma.bb(l);
                    J = new Uint8Array(36);
                    l.readPixels(0, 0, 3, 3, l.RGBA, l.UNSIGNED_BYTE, J);
                    L();
                    for (w = 0; 36 > w; ++w)
                        if (3 !== w % 4 && 3 < Math.abs(J[w] - 127))
                            return !1;
                    return !0
                },
                Kb: function(l) {
                    var J = {
                        fa: !1,
                        ha: !1
                    };
                    l.disable(l.BLEND);
                    l.clearColor(0, 0, 0, 0);
                    l.clear(l.COLOR_BUFFER_BIT);
                    l.RGBA32F && H.Ab(l, l.RGBA32F, l.FLOAT) && (J.fa = !0,
                    E = l.RGBA32F);
                    !J.fa && H.Ab(l, l.RGBA, l.FLOAT) && (J.fa = !0,
                    E = l.RGBA);
                    var w = H.Tb(l);
                    y = null;
                    l.RGBA16F && H.Ab(l, l.RGBA16F, w) && (J.ha = !0,
                    y = l.RGBA16F);
                    !J.ha && H.Ab(l, l.RGBA, w) && (J.ha = !0,
                    y = l.RGBA);
                    return J
                },
                ye: function() {
                    var l = la.instance({
                        width: 2
                    });
                    l.Rd();
                    var J = Aa.instance({
                        width: 2,
                        isFloat: !0,
                        sb: 3
                    });
                    l.u();
                    J.u();
                    H.flush();
                    b.checkFramebufferStatus(la.Qe()) !== b.FRAMEBUFFER_COMPLETE ? (Aa.Gf(),
                    v.Rb = !1) : v.Rb = !0;
                    l.remove();
                    J.remove()
                },
                ze: function() {
                    var l = !1;
                    H.ia() && (l = "PIXEL_PACK_BUFFER STREAM_READ SYNC_GPU_COMMANDS_COMPLETE WAIT_FAILED fenceSync deleteSync createBuffer".split(" ").every(function(J) {
                        return "undefined" !== typeof b[J]
                    }));
                    v.Jd = l
                },
                xe: function() {
                    var l = H.Kb(b);
                    Object.assign(v, l);
                    if (!v.fa && !v.ha)
                        return !1;
                    H.ye();
                    H.ze();
                    return !0
                },
                Bf: function(l, J, w, L, N) {
                    b.readPixels(l, J, w, L, b.RGBA, b.UNSIGNED_BYTE, N);
                    return Promise.resolve(N, !1)
                },
                xb: function(l, J, w, L, N, x, f) {
                    if (!H.oe())
                        return H.Bf(l, J, w, L, N);
                    k.La = f || k.ue;
                    e(N);
                    b.readPixels(l, J, w, L, b.RGBA, b.UNSIGNED_BYTE, 0);
                    k.xa[k.ea] = b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE, 0);
                    H.flush();
                    var z = !1;
                    return new Promise(function(I, h) {
                        function C() {
                            if (!k.za)
                                return d(),
                                g(),
                                t(),
                                h(),
                                !1;
                            var K = (k.ea + 1) % k.La;
                            switch (b.clientWaitSync(k.xa[K], 0, 0)) {
                            case b.TIMEOUT_EXPIRED:
                            case b.WAIT_FAILED:
                                return !1;
                            default:
                                return d(),
                                b.deleteSync(k.xa[K]),
                                k.xa[K] = null,
                                b.bindBuffer(k.V, k.oa[K]),
                                b.getBufferSubData(k.V, 0, N),
                                g(),
                                t(),
                                I(N, z),
                                !0
                            }
                        }
                        d();
                        k.jc + 1 < k.La ? (g(),
                        t(),
                        I(N, !1)) : (k.za = !0,
                        C() || (x && !z && (z = !0,
                        x()),
                        k.Cb = setInterval(C, 0)))
                    }
                    )
                },
                Ud: function() {
                    b.viewport(0, 0, H.F(), H.U())
                },
                flush: function() {
                    b.flush()
                },
                m: function() {
                    d();
                    m();
                    Aa.m();
                    la.m();
                    ma.m();
                    k.oa.forEach(function(l) {
                        b.deleteBuffer(l)
                    });
                    k.oa.splice(0);
                    xa.reset();
                    q = !1
                }
            };
            return H
        }()
          , T = ma
          , va = la
          , X = Aa
          , Ba = function() {
            function a(w, L, N, x) {
                k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, x ? k.NEAREST_MIPMAP_NEAREST : k.LINEAR);
                var f = null;
                if (null !== N)
                    try {
                        f = k.getError();
                        if ("FUCKING_BIG_ERROR" === f)
                            return !1;
                        k.texImage2D(k.TEXTURE_2D, 0, w, 4, 4, 0, k.RGBA, L, N);
                        f = k.getError();
                        if (f !== k.NO_ERROR)
                            return !1
                    } catch (z) {
                        return !1
                    }
                x && k.generateMipmap(k.TEXTURE_2D);
                k.clear(k.COLOR_BUFFER_BIT);
                T.bb(k);
                f = k.getError();
                if ("FUCKING_BIG_ERROR" === f)
                    return !1;
                k.readPixels(0, 0, 2, 2, k.RGBA, k.UNSIGNED_BYTE, r);
                f = k.getError();
                f === k.INVALID_OPERATION && "undefined" !== typeof k.PIXEL_PACK_BUFFER && (k.bindBuffer(k.PIXEL_PACK_BUFFER, null),
                k.readPixels(0, 0, 2, 2, k.RGBA, k.UNSIGNED_BYTE, r),
                f = k.getError());
                if (f !== k.NO_ERROR)
                    return !1;
                N = !0;
                for (x = 0; 16 > x; ++x)
                    N = N && 4 > Math.abs(r[x] - 127);
                N && (q.Gd = L,
                q.pd = w);
                return N
            }
            function c(w, L) {
                return M.fa && a(w, k.FLOAT, new Float32Array(A), L) ? (p = t.Hc,
                !0) : !1
            }
            function d(w, L, N) {
                if (!M.ha)
                    return !1;
                var x = Aa.te(A)
                  , f = aa.$a(k);
                if (f && f.HALF_FLOAT_OES && a(w, f.HALF_FLOAT_OES, x, L) || k.HALF_FLOAT && a(w, k.HALF_FLOAT, x, L))
                    return p = t.Ga,
                    !0;
                x = new Float32Array(A);
                if (a(w, k.FLOAT, x, L))
                    return p = t.Ga,
                    !0;
                k.bindTexture(k.TEXTURE_2D, N);
                k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, 2, 2, 0, k.RGBA, k.UNSIGNED_BYTE, null);
                k.bindFramebuffer(q.Ya, J);
                Aa.ed(k, N, 2, 2, x, !1, !1);
                k.bindFramebuffer(q.Ya, null);
                k.bindTexture(k.TEXTURE_2D, N);
                return a(w, null, null, L) ? (p = t.Ga,
                !0) : !1
            }
            function e(w, L, N) {
                u = !0;
                if (d(w, !0, N) || c(L, !0))
                    return !0;
                u = !1;
                return d(w, !1, N) || c(L, !1) ? !0 : !1
            }
            function g(w) {
                if (p === t.P) {
                    k = w || b;
                    p = t.RGBA8;
                    u = !0;
                    aa.Xc(k);
                    M || (M = aa.Kb(k));
                    va.reset();
                    J = k.createFramebuffer();
                    q.Ya = k.DRAW_FRAMEBUFFER || k.FRAMEBUFFER;
                    k.bindFramebuffer(q.Ya, null);
                    k.clearColor(0, 0, 0, 0);
                    k.viewport(0, 0, 2, 2);
                    D.P();
                    H = D.Sa(k);
                    w = k.createTexture();
                    k.activeTexture(k.TEXTURE0);
                    k.bindTexture(k.TEXTURE_2D, w);
                    k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.REPEAT);
                    k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.REPEAT);
                    k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, k.NEAREST);
                    l = w;
                    var L = w = k.RGBA
                      , N = k.RGBA16F
                      , x = k.RGBA32F;
                    x && (w = x);
                    N && (L = N);
                    if ((N || x) && e(L, w, l))
                        return m(),
                        !0;
                    w = L = k.RGBA;
                    if (e(L, w, l))
                        return m(),
                        !0;
                    p = t.RGBA8;
                    m();
                    return !1
                }
            }
            function m() {
                k.deleteProgram(H.ra);
                k.deleteTexture(l);
                l = H = null
            }
            for (var t = {
                P: -1,
                Hc: 3,
                Ga: 2,
                RGBA8: 0
            }, p = t.P, q = {
                Gd: null,
                pd: null,
                Ya: null
            }, u = !0, r = new Uint8Array(16), A = Array(64), v = 0; 4 > v; ++v)
                for (var n = 0; 4 > n; ++n) {
                    var y = 0 === (n + v) % 2 ? 1 : 0
                      , E = 4 * v + n;
                    A[4 * E] = y;
                    A[4 * E + 1] = y;
                    A[4 * E + 2] = y;
                    A[4 * E + 3] = y
                }
            var k = null
              , M = null
              , H = null
              , l = null
              , J = null;
            return {
                me: function(w) {
                    g(w);
                    return u
                },
                Nc: function(w, L) {
                    p === t.P && (typeof ("undefined" !== L) && (M = L),
                    g(w));
                    return p !== t.RGBA8
                },
                kh: function(w) {
                    g(w);
                    return p === t.Hc
                },
                hf: function(w) {
                    g(w);
                    return p === t.Ga
                },
                Sg: function(w) {
                    g(w);
                    return q.Gd
                },
                Pe: function(w) {
                    g(w);
                    return q.pd
                },
                m: function() {
                    k = null;
                    u = !0;
                    p = t.P;
                    M = null
                }
            }
        }()
          , Ub = function() {
            return {
                instance: function(a) {
                    var c = X.instance(a.alpha)
                      , d = X.instance(a.beta);
                    return {
                        Be: function() {
                            c.g(1);
                            d.g(2)
                        }
                    }
                }
            }
        }()
          , Gb = function() {
            return {
                instance: function(a) {
                    var c = null
                      , d = !1
                      , e = !1
                      , g = null
                      , m = !1
                      , t = !1
                      , p = null
                      , q = "undefined" === typeof a.preprocessing ? !1 : a.preprocessing
                      , u = "undefined" === typeof a.preprocessingSize ? a.size : a.preprocessingSize;
                    a.mask && (d = !0,
                    ea && void 0 !== ea.he && (a.mask = ea.he + a.mask),
                    c = X.instance({
                        isFloat: !1,
                        url: a.mask
                    }));
                    var r = !1;
                    a.customInputShader && (r = "s45",
                    D.Jc({
                        name: "_",
                        id: r,
                        h: a.customInputShader,
                        Oh: ["uSource"],
                        precision: "lowp"
                    }),
                    D.S(r, [{
                        type: "1i",
                        name: "_",
                        value: 0
                    }]));
                    switch (q) {
                    case "sobel":
                        p = "s32";
                        m = !0;
                        break;
                    case "meanNormalization":
                        p = "s33";
                        m = !0;
                        break;
                    case "grayScale":
                        p = "s29";
                        m = !1;
                        break;
                    case "grayScaleTilt":
                        p = "s30";
                        t = !0;
                        m = !1;
                        break;
                    case "rgbGrayTilt":
                        p = "s31";
                        t = !0;
                        m = !1;
                        break;
                    case "copy":
                        p = r ? r : "s0";
                        break;
                    case "inputLightRegulation":
                        p = r ? r : "s29";
                        g = Vb.instance({
                            od: u,
                            Fd: a.size,
                            Cd: a.nBlurPass,
                            mb: !1
                        });
                        e = !0;
                        break;
                    case "inputMix0":
                        p = "none";
                        g = Wb.instance({
                            C: u,
                            be: a.varianceMin,
                            Mc: a.blurKernelSizePx,
                            mb: !1
                        });
                        e = !0;
                        break;
                    case "direct":
                    case "none":
                        p = "abort";
                        break;
                    default:
                        p = "s4"
                    }
                    t && D.S(p, [{
                        name: "u27",
                        type: "1f",
                        value: a.tilt
                    }]);
                    d && (p += "Mask");
                    var A = X.instance({
                        isFloat: !1,
                        isPot: !1,
                        width: a.size
                    })
                      , v = {
                        F: function() {
                            return u
                        },
                        Ub: function() {
                            return v.F()
                        },
                        Ue: function() {
                            return e ? g.Vb() : A
                        },
                        T: function(n) {
                            va.ca();
                            "abort" !== p && ("none" !== p && (D.set(p),
                            m && D.G("u28", 1 / a.size),
                            A.$(),
                            d && c.g(1),
                            T.l(!1, !1),
                            A.g(0),
                            n = A),
                            e && g.process(n))
                        },
                        m: function() {
                            A.remove();
                            d && c.remove()
                        }
                    };
                    return v
                }
            }
        }()
          , Hb = function() {
            return {
                instance: function(a) {
                    function c(h) {
                        g.forEach(function(C, K) {
                            m[K][0] = h[0][C];
                            m[K][1] = h[1][C];
                            m[K][2] = h[2][C];
                            m[K][3] = h[3][C]
                        });
                        return m
                    }
                    a.normalize = a.normalize || !1;
                    var d = {
                        input: null,
                        bias: null,
                        Zb: null,
                        Z: null,
                        tb: null,
                        nc: null,
                        oc: null
                    }
                      , e = null
                      , g = []
                      , m = []
                      , t = !1
                      , p = null
                      , q = !0
                      , u = -1
                      , r = a.isReorganize ? a.isReorganize : !1
                      , A = a.kernelsCount ? !0 : !1
                      , v = a.dynPelu ? Ub.instance(a.dynPelu) : !1
                      , n = v ? !0 : !1
                      , y = {
                        isEnabled: !1
                    };
                    a.ef ? (a.sparsity = "undefined" !== typeof a.sparsity ? a.sparsity : a.vb.Ub(),
                    q = !1) : "full" === a.connectivityUp && (a.sparsity = a.vb.Ub());
                    var E = {
                        elu: "s16",
                        elu01: "s17",
                        relu: "s15",
                        arctan: "s19",
                        sigmoid: "s14",
                        copy: "s0",
                        softplus: "s20",
                        dynPelu: "s18"
                    }[a.activation]
                      , k = a.sparsity * a.sparsity
                      , M = !1
                      , H = a.size
                      , l = "";
                    if (a.maxPooling) {
                        switch (a.maxPooling.size) {
                        case 2:
                            l = "s34";
                            break;
                        case 4:
                            l = "s35"
                        }
                        M = !0;
                        H /= a.maxPooling.size;
                        d.nc = X.instance({
                            isFloat: !0,
                            isPot: !1,
                            width: H
                        })
                    }
                    var J = a.normalization ? !0 : !1
                      , w = null
                      , L = null
                      , N = null;
                    if (J) {
                        w = "s46" + a.index.toString();
                        D.nd("s46", w, [((a.normalization.n - 1) / 2).toFixed(1)]);
                        D.S(w, [{
                            type: "1i",
                            name: "u1",
                            value: 0
                        }, {
                            type: "2f",
                            name: "u8",
                            value: [1 / a.size, 1 / a.size]
                        }, {
                            type: "1f",
                            name: "u7",
                            value: a.normalization.alpha
                        }, {
                            type: "1f",
                            name: "u10",
                            value: a.normalization.beta
                        }, {
                            type: "1f",
                            name: "u31",
                            value: a.normalization.k
                        }]);
                        var x = {
                            isFloat: !0,
                            isPot: !0,
                            width: a.size
                        };
                        L = X.instance(x);
                        N = X.instance(x)
                    }
                    var f = -1
                      , z = null;
                    q && (d.Z = X.instance({
                        isFloat: !0,
                        isPot: !1,
                        width: a.size
                    }));
                    d.bias = X.instance(a.bias);
                    var I = {
                        F: function() {
                            return a.size
                        },
                        Ub: function() {
                            return H
                        },
                        gd: function() {
                            return a.classesCount
                        },
                        je: function(h) {
                            e.g(h)
                        },
                        vf: function() {
                            a.remap && a.remap.isEnabled && (y = {
                                isEnabled: !0,
                                lf: X.instance({
                                    isFloat: !1,
                                    isFlipY: !1,
                                    array: new Uint8Array(a.remap.maskTexture.data),
                                    width: a.remap.maskTexture.width,
                                    isPot: !1
                                }),
                                pb: a.remap.layers.map(function(h) {
                                    return a.parent.Se(h)
                                }),
                                depth: a.remap.depth
                            })
                        },
                        Hf: function() {
                            switch (a.connectivityUp) {
                            case "direct":
                                z = Xb.instance(a.connectivity);
                                break;
                            case "square":
                                z = Yb.instance(a.connectivity);
                                break;
                            case "squareFast":
                                z = Zb.instance(a.connectivity, a.activation);
                                break;
                            case "full":
                                z = $b.instance(a.connectivity);
                                break;
                            case "conv":
                                u = a.kernelsCount,
                                z = ac.instance(a.connectivity),
                                r && (d.tb = X.instance({
                                    width: H,
                                    isFloat: !0,
                                    isFlipY: !1,
                                    isPot: !1
                                }))
                            }
                            if (z.Da) {
                                var h = a.size * a.sparsity;
                                f = Math.log(h / a.size) / Math.log(2);
                                d.input = X.instance({
                                    isMipmap: !0,
                                    isFloat: !0,
                                    isPot: !0,
                                    width: h,
                                    ec: f
                                });
                                d.Zb = X.instance({
                                    isFloat: !0,
                                    isPot: !0,
                                    width: a.size
                                })
                            }
                        },
                        T: function(h, C) {
                            e = h;
                            z.Da ? (d.input.$(),
                            A && d.bias.g(2),
                            z.T(y),
                            d.input.g(0),
                            d.input.He(f),
                            d.Zb.$(),
                            A ? D.set("s0") : (D.set("s28"),
                            D.G("u26", k),
                            d.bias.g(1)),
                            d.input.ke(f, 0),
                            T.l(!1, !1),
                            D.set(E),
                            J ? L.u() : d.Z.u(),
                            d.Zb.g(0),
                            n && v.Be(),
                            T.l(!1, !1)) : (d.Z.$(),
                            d.bias.g(1),
                            z.T());
                            J && (D.set(w),
                            N.u(),
                            L.g(0),
                            T.l(!1, !1),
                            D.set("s47"),
                            D.G("u7", 1),
                            d.Z.u(),
                            N.g(1),
                            T.l(!1, !1));
                            if (q)
                                return M ? (d.nc.$(),
                                d.Z.g(0),
                                D.set(l),
                                D.sa("u8", 1 / a.size, 1 / a.size),
                                T.l(!1, !1),
                                C = d.nc) : C = d.Z,
                                C.g(0),
                                r && (d.tb.u(),
                                D.set("s22"),
                                D.sa("u13", u, H / u),
                                T.l(!1, !1),
                                C = d.tb,
                                d.tb.g(0)),
                                C;
                            var K = d.Z;
                            a.normalize && (D.set("gpuRawAvg" === t ? "s9" : "s8"),
                            D.G("u4", 1 / a.size),
                            d.oc.$(),
                            d.Z.g(0),
                            T.l(!1, !1),
                            K = d.oc);
                            h = null;
                            switch (t) {
                            case "cpuRGBA2Float":
                                K.Uc(!1);
                                C ? h = I.wf(K).then(p) : (K = I.xf(K),
                                p(K));
                                break;
                            case "cpuMeanFloat":
                                K.Uc(!0);
                                if (C)
                                    h = K.zf().then(p);
                                else {
                                    K = K.Af();
                                    for (var O = 0; O < K.length; ++O)
                                        ;
                                    p(K)
                                }
                                break;
                            case "gpuRawAvg":
                            case "gpuRaw":
                                K.g(0);
                            case "none":
                                null !== p && p(K)
                            }
                            C && null === h && (h = Promise.resolve());
                            return h
                        },
                        we: function(h) {
                            h && (t = h.pc || "none",
                            p = h.mc || null);
                            d.Z = X.instance({
                                isFloat: !0,
                                isPot: !0,
                                isMipmap: !1,
                                width: a.size
                            });
                            h = "undefined" !== typeof a.classesCount && a.classesCount ? a.classesCount : a.size * a.size;
                            for (var C = 0, K = 0, O = 0; C < h; ++C)
                                g.push(K + (a.size - 1 - O) * a.size),
                                m.push([-1, -1, -1, -1]),
                                ++K,
                                K === a.size && (K = 0,
                                ++O);
                            a.normalize && (d.oc = X.instance({
                                isFloat: !0,
                                isPot: !0,
                                width: a.size
                            }))
                        },
                        wf: function(h) {
                            return h.yf().then(c)
                        },
                        xf: function(h) {
                            h = h.Kd();
                            c(h);
                            return m
                        },
                        m: function() {
                            for (var h in d) {
                                var C = d[h];
                                C && C.remove()
                            }
                            z && (z.m(),
                            z = null)
                        }
                    };
                    a.vb && I.Hf(a.vb);
                    return I
                }
            }
        }()
          , Xb = function() {
            return {
                instance: function(a) {
                    var c = X.instance(a.weights);
                    return {
                        Da: !0,
                        eb: function() {
                            return 1
                        },
                        m: function() {
                            c.remove()
                        },
                        Xe: function() {
                            return c
                        },
                        T: function() {
                            D.set("s27");
                            c.g(1);
                            T.l(!1, !1)
                        }
                    }
                }
            }
        }()
          , $b = function() {
            return {
                instance: function(a) {
                    var c = a.fromLayerSize
                      , d = X.instance(a.weights);
                    return {
                        Da: !0,
                        eb: function() {
                            return c
                        },
                        m: function() {
                            d.remove()
                        },
                        T: function(e) {
                            if (e.isEnabled) {
                                D.set("s25");
                                e.lf.g(3);
                                var g, m = Math.min(e.pb.length, e.depth);
                                for (g = 0; g < m; ++g)
                                    e.pb[g].je(4 + g)
                            } else
                                D.set("s24");
                            D.G("u17", a.toLayerSize);
                            d.g(1);
                            T.l(!1, !1)
                        }
                    }
                }
            }
        }()
          , Yb = function() {
            return {
                instance: function(a) {
                    for (var c = a.fromLayerSize, d = a.toLayerSize, e = a.toSparsity, g = e * d, m = g / c, t = c / d, p = 0, q = 0, u = 0, r = Array(e * d * e * d * 4), A = Array(e * d * e * d * 4), v = Array(c * c), n = 0; n < v.length; ++n)
                        v[n] = 0;
                    n = Math.floor(e / 2);
                    for (var y = .5 / d, E = .5 / c, k = .5 / g, M = 0; M < d; ++M)
                        for (var H = Math.round(M * t), l = 0; l < d; ++l) {
                            var J = Math.round(l * t)
                              , w = M / d
                              , L = l / d;
                            w += y;
                            L += y;
                            for (var N = 0; N < e; ++N) {
                                var x = H + N - n;
                                0 > x && (x += c);
                                x >= c && (x -= c);
                                for (var f = 0; f < e; ++f) {
                                    var z = p / g
                                      , I = q / g
                                      , h = J + f - n;
                                    0 > h && (h += c);
                                    h >= c && (h -= c);
                                    var C = x / c
                                      , K = h / c;
                                    I = 1 - I - 1 / g;
                                    C += E;
                                    K += E;
                                    z += k;
                                    I += k;
                                    var O = M * e + N
                                      , Y = l * e + f;
                                    Y = d * e - Y - 1;
                                    O = Y * d * e + O;
                                    r[4 * O] = z;
                                    r[4 * O + 1] = I;
                                    r[4 * O + 2] = C;
                                    r[4 * O + 3] = K;
                                    K = v[h * c + x]++;
                                    O = K % m;
                                    C = x * m + O;
                                    h = h * m + (K - O) / m;
                                    h = c * m - 1 - h;
                                    h = h * c * m + C;
                                    A[4 * h] = z;
                                    A[4 * h + 1] = I;
                                    A[4 * h + 2] = w;
                                    A[4 * h + 3] = L;
                                    ++p >= g && (p = 0,
                                    ++q);
                                    ++u
                                }
                            }
                        }
                    v = null;
                    var oa = X.instance(a.weights);
                    delete a.weights.data;
                    var sa = X.instance({
                        width: g,
                        isFloat: !0,
                        array: new Float32Array(A),
                        isPot: !0
                    });
                    A = null;
                    var Ca = X.instance({
                        width: g,
                        isFloat: !0,
                        array: new Float32Array(r),
                        isPot: !0
                    });
                    r = null;
                    return {
                        Da: !0,
                        eb: function() {
                            return m
                        },
                        m: function() {
                            sa.remove();
                            Ca.remove();
                            oa.remove()
                        },
                        T: function() {
                            D.set("s23");
                            oa.g(1);
                            Ca.g(2);
                            T.l(!1, !1)
                        }
                    }
                }
            }
        }()
          , ac = function() {
            return {
                instance: function(a) {
                    var c = a.kernelsCount
                      , d = a.toSparsity
                      , e = d * a.toLayerSize / a.fromLayerSize
                      , g = X.instance(a.weights);
                    return {
                        Da: !0,
                        eb: function() {
                            return e
                        },
                        dh: function() {
                            return d
                        },
                        Xe: function() {
                            return g
                        },
                        m: function() {
                            g.remove()
                        },
                        T: function() {
                            D.set("s26");
                            D.G("u23", c);
                            D.G("u24", d);
                            D.G("u17", a.toLayerSize);
                            D.G("u25", a.fromLayerSize);
                            g.g(1);
                            T.l(!1, !1)
                        }
                    }
                }
            }
        }()
          , Zb = function() {
            return {
                instance: function(a, c) {
                    var d = a.fromLayerSize
                      , e = a.toLayerSize
                      , g = a.toSparsity
                      , m = a.stride ? a.stride : 1
                      , t = g * e / d
                      , p = e < d
                      , q = d / e
                      , u = X.instance(a.weights)
                      , r = "s48" + [d.toString(), e.toString(), g.toString(), m.toString(), c].join("_");
                    D.Fe(r) || (a = Sb.Ie(c, "gl_FragColor", "gl_FragColor"),
                    e = [{
                        type: "1f",
                        name: "u17",
                        value: e
                    }, {
                        type: "1f",
                        name: "u30",
                        value: m
                    }],
                    p && e.push({
                        type: "1f",
                        name: "u25",
                        value: d
                    }),
                    d = [(p ? t : g).toFixed(1), a],
                    p && d.push(q.toFixed(1)),
                    D.nd(p ? "s40" : "s39", r, d),
                    D.S(r, e.concat([{
                        type: "1i",
                        name: "u15",
                        value: 0
                    }, {
                        type: "1i",
                        name: "u22",
                        value: 1
                    }, {
                        type: "1i",
                        name: "u14",
                        value: 3
                    }])));
                    return {
                        Da: !1,
                        eb: function() {
                            return t
                        },
                        m: function() {
                            u.remove()
                        },
                        T: function() {
                            D.set(r);
                            u.g(3);
                            T.l(!1, !1)
                        }
                    }
                }
            }
        }()
          , Vb = function() {
            return {
                instance: function(a) {
                    var c = a.Cd ? a.Cd : 3
                      , d = a.od ? a.od : 64
                      , e = a.Fd ? a.Fd : 64
                      , g = a.mb ? !0 : !1;
                    a = {
                        isFloat: !1,
                        width: d,
                        isPot: !1,
                        isFlipY: !1
                    };
                    var m = X.instance(a)
                      , t = X.instance(a)
                      , p = X.instance(a)
                      , q = X.instance(a)
                      , u = X.instance({
                        isFloat: !0,
                        width: e,
                        isPot: !1,
                        isFlipY: !1
                    })
                      , r = 1 / d;
                    return {
                        process: function(A) {
                            D.set("s36");
                            q.u();
                            T.l(g, !1);
                            D.set("s37");
                            for (var v = 0; v < c; ++v)
                                m.u(),
                                D.sa("u8", r, 0),
                                T.l(g, !1),
                                p.u(),
                                q.g(0),
                                T.l(g, !1),
                                t.u(),
                                m.g(0),
                                D.sa("u8", 0, r),
                                T.l(g, !1),
                                q.u(),
                                p.g(0),
                                T.l(g, !1),
                                v !== c - 1 && t.g(0);
                            D.set("s38");
                            u.u();
                            A.g(0);
                            t.g(1);
                            q.g(2);
                            T.l(g, !1);
                            u.g(0)
                        },
                        Vb: function() {
                            return u
                        }
                    }
                }
            }
        }()
          , Wb = function() {
            return {
                instance: function(a) {
                    function c(u) {
                        return X.instance({
                            isFloat: u,
                            width: d.C,
                            isPot: !1,
                            isFlipY: !1
                        })
                    }
                    var d = Object.assign({
                        be: .1,
                        Mc: 9,
                        C: 128,
                        mb: !1
                    }, a)
                      , e = c(!1)
                      , g = [c(!1), c(!1), c(!1)]
                      , m = [c(!1), c(!1), c(!1)]
                      , t = c(!0)
                      , p = [e, m[0], m[1]];
                    a = "uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u32;varying vec2 vv0;void main(){float b=0.,c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u32*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j).r,c+=f;}b/=c,gl_FragColor=vec4(b,0.,0.,1.);}".replace("1.1111", Math.round((d.Mc - 1) / 2).toFixed(2)).replace("2.2222", (1 / d.C).toFixed(6));
                    var q = {
                        u1: 0
                    };
                    D.Kc([{
                        id: "s50",
                        name: "_",
                        h: "uniform sampler2D u1;varying vec2 vv0;const vec3 f=vec3(.2126,.7152,.0722),g=vec3(1.,1.,1.);void main(){vec3 b=texture2D(u1,vv0).rgb;float a=dot(b,f);gl_FragColor=vec4(a,a,a,a);}",
                        j: q,
                        i: ["u1"],
                        precision: "lowp"
                    }, {
                        id: "s51",
                        name: "_",
                        h: a,
                        j: q,
                        i: ["u1", "u32"],
                        precision: "lowp"
                    }, {
                        id: "s52",
                        name: "_",
                        h: "uniform sampler2D u33,u34,u35,u36;const float f=1.1111;const vec3 g=vec3(1.,1.,1.);varying vec2 vv0;void main(){vec3 a=texture2D(u33,vv0).rgb;float c=texture2D(u34,vv0).r,d=texture2D(u35,vv0).r,h=texture2D(u36,vv0).r,i=a.r*a.r;vec3 b=vec3(c,d,h),j=max(g*f,abs(i-b*b)),k=sqrt(j);gl_FragColor=vec4(a.r,(a-b)/k);}".replace("1.1111", d.be.toFixed(4)),
                        j: {
                            u33: 0,
                            u34: 1,
                            u35: 2,
                            u36: 3
                        },
                        i: ["u33", "u34", "u35", "u36"],
                        precision: "highp"
                    }]);
                    return {
                        process: function() {
                            D.set("s50");
                            e.$();
                            T.l(d.mb, !1);
                            D.set("s51");
                            for (var u = 0; 3 > u; ++u)
                                D.sa("u32", 1, 0),
                                g[u].u(),
                                p[u].g(0),
                                T.l(!1, !1),
                                D.sa("u32", 0, 1),
                                m[u].u(),
                                g[u].g(0),
                                T.l(!1, !1);
                            D.set("s52");
                            t.u();
                            e.g(0);
                            m[0].g(1);
                            m[1].g(2);
                            m[2].g(3);
                            T.l(!1, !1);
                            t.g(0)
                        },
                        Vb: function() {
                            return t
                        }
                    }
                }
            }
        }()
          , V = {
            ld: function() {
                return V.Sc() ? document.createElement("video") : !1
            },
            Ma: function(a, c) {
                a[c] = !0;
                a.setAttribute(c, "true")
            },
            re: function() {
                var a = !1
                  , c = navigator.userAgent || navigator.vendor || window.opera;
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(c) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(c.substr(0, 4)))
                    a = !0;
                return a
            },
            Pc: function() {
                return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
            },
            Je: function() {
                var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                return a && a.length && 2 < a.length ? [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3] || 0, 10)] : [0, 0, 0]
            },
            zd: function() {
                try {
                    return window.matchMedia("(orientation: portrait)").matches ? !0 : !1
                } catch (a) {
                    return window.innerHeight > window.innerWidth
                }
            },
            qe: function() {
                return V.Qc() || V.Pc()
            },
            Qc: function() {
                var a = navigator.userAgent.toLowerCase();
                return -1 !== a.indexOf("safari") && -1 === a.indexOf("chrome") ? !0 : !1
            },
            Gg: function() {
                return V.re() ? V.zd() ? window.innerHeight / window.innerWidth * 45 : 45 : 45
            },
            Sc: function() {
                return navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? !0 : !1
            },
            pause: function(a) {
                a.pause()
            },
            Bh: function(a) {
                a.play()
            },
            release: function(a) {
                a.pause();
                a.videoStream && a.videoStream.stop();
                a.videoStream = null
            },
            Rc: function(a) {
                if (!a)
                    return a;
                var c = null;
                if (a.video) {
                    var d = function(e) {
                        return e && "object" === typeof e ? Object.assign({}, e) : e
                    };
                    c = {};
                    "undefined" !== typeof a.video.width && (c.width = d(a.video.width));
                    "undefined" !== typeof a.video.height && (c.height = d(a.video.height));
                    "undefined" !== typeof a.video.facingMode && (c.facingMode = d(a.video.facingMode))
                }
                c = {
                    audio: a.audio,
                    video: c
                };
                "undefined" !== typeof a.deviceId && V.Ic(c, a.deviceId);
                return c
            },
            Ic: function(a, c) {
                c && (a.video = a.video || {},
                a.video.deviceId = {
                    exact: c
                },
                a.video.facingMode && delete a.video.facingMode)
            },
            Xd: function(a) {
                var c = a.video.width;
                a.video.width = a.video.height;
                a.video.height = c;
                return a
            },
            ve: function(a) {
                function c(v) {
                    return [480, 576, 640, 648, 720, 768, 800, 960, 1080, 1152, 1280, 1366, 1920].sort(function(n, y) {
                        return Math.abs(n - v) - Math.abs(y - v)
                    })
                }
                function d(v) {
                    var n = V.Rc(a);
                    v = v(n);
                    g.push(v);
                    e(v)
                }
                function e(v) {
                    if (v.video && v.video.facingMode && v.video.facingMode.exact) {
                        var n = v.video.facingMode.exact;
                        v = V.Rc(v);
                        delete v.video.facingMode.exact;
                        v.video.facingMode.ideal = n;
                        g.push(v)
                    }
                }
                var g = [];
                if (!a || !a.video)
                    return g;
                e(a);
                if (a.video.width && a.video.height) {
                    if (a.video.width.ideal && a.video.height.ideal) {
                        var m = c(a.video.width.ideal).slice(0, 3)
                          , t = c(a.video.height.ideal).slice(0, 3)
                          , p = {}
                          , q = 0;
                        for (p.la = void 0; q < m.length; p = {
                            la: p.la
                        },
                        ++q) {
                            p.la = m[q];
                            var u = {}
                              , r = 0;
                            for (u.ka = void 0; r < t.length; u = {
                                ka: u.ka
                            },
                            ++r)
                                if (u.ka = t[r],
                                p.la !== a.video.width.ideal || u.ka !== a.video.height.ideal) {
                                    var A = Math.max(p.la, u.ka) / Math.min(p.la, u.ka);
                                    A < 4 / 3 - .1 || A > 16 / 9 + .1 || d(function(v, n) {
                                        return function(y) {
                                            y.video.width.ideal = v.la;
                                            y.video.height.ideal = n.ka;
                                            return y
                                        }
                                    }(p, u))
                                }
                        }
                    }
                    d(function(v) {
                        return V.Xd(v)
                    })
                }
                a.video.width && a.video.height && (a.video.width.ideal && a.video.height.ideal && d(function(v) {
                    delete v.video.width.ideal;
                    delete v.video.height.ideal;
                    return v
                }),
                d(function(v) {
                    delete v.video.width;
                    delete v.video.height;
                    return v
                }));
                a.video.facingMode && (d(function(v) {
                    delete v.video.facingMode;
                    return v
                }),
                a.video.width && a.video.height && d(function(v) {
                    V.Xd(v);
                    delete v.video.facingMode;
                    return v
                }));
                g.push({
                    audio: a.audio,
                    video: !0
                });
                return g
            },
            Qf: function(a) {
                if (V.zd()) {
                    if (!a || !a.video)
                        return !1;
                    var c = a.video.width
                      , d = a.video.height;
                    if (!c || !d)
                        return !1;
                    if (c.ideal && d.ideal && c.ideal > d.ideal)
                        return a.video.height = c,
                        a.video.width = d,
                        !0
                }
                return !1
            },
            rb: function(a) {
                a.volume = 0;
                V.Ma(a, "muted");
                if (V.Qc()) {
                    if (1 === a.volume) {
                        var c = function() {
                            a.volume = 0;
                            window.removeEventListener("mousemove", c, !1);
                            window.removeEventListener("touchstart", c, !1)
                        };
                        window.addEventListener("mousemove", c, !1);
                        window.addEventListener("touchstart", c, !1)
                    }
                    setTimeout(function() {
                        a.volume = 0;
                        V.Ma(a, "muted")
                    }, 5)
                }
            },
            $d: function(a, c, d) {
                return null === a ? Promise.resolve() : new Promise(function(e, g) {
                    if (a.srcObject && a.srcObject.getVideoTracks) {
                        var m = a.srcObject.getVideoTracks();
                        1 !== m.length ? g("INVALID_TRACKNUMBER") : (m = m[0],
                        c ? V.get(a, e, g, d) : (m.stop(),
                        e()))
                    } else
                        g("BAD_IMPLEMENTATION")
                }
                )
            },
            kd: function(a, c, d, e) {
                function g(t) {
                    m || (m = !0,
                    d(t))
                }
                var m = !1;
                return navigator.mediaDevices.getUserMedia(e).then(function(t) {
                    function p() {
                        setTimeout(function() {
                            if (a.currentTime) {
                                var u = a.videoWidth
                                  , r = a.videoHeight;
                                if (0 === u || 0 === r)
                                    g("VIDEO_NULLSIZE");
                                else {
                                    u && (a.style.width = u.toString() + "px");
                                    r && (a.style.height = r.toString() + "px");
                                    var A = {
                                        pe: null,
                                        Mf: null,
                                        mf: null
                                    };
                                    try {
                                        var v = t.getVideoTracks()[0];
                                        v && (A.mf = v,
                                        A.pe = v.getCapabilities(),
                                        A.Mf = v.getSettings())
                                    } catch (n) {}
                                    V.qe() ? a.parentNode && null !== a.parentNode ? (m || c(a, t, A),
                                    setTimeout(function() {
                                        a.play()
                                    }, 100)) : (document.body.appendChild(a),
                                    V.rb(a),
                                    setTimeout(function() {
                                        a.style.transform = "scale(0.0001,0.0001)";
                                        a.style.position = "fixed";
                                        a.style.bottom = "0px";
                                        a.style.right = "0px";
                                        V.rb(a);
                                        setTimeout(function() {
                                            a.play();
                                            m || c(a, t, A)
                                        }, 100)
                                    }, 80)) : m || c(a, t, A)
                                }
                            } else
                                g("VIDEO_NOTSTARTED")
                        }, 700)
                    }
                    function q() {
                        a.removeEventListener("loadeddata", q, !1);
                        var u = a.play();
                        V.rb(a);
                        "undefined" === typeof u ? p() : u.then(function() {
                            p()
                        }).catch(function() {
                            g("VIDEO_PLAYPROMISEREJECTED")
                        })
                    }
                    "undefined" !== typeof a.srcObject ? a.srcObject = t : (a.src = window.URL.createObjectURL(t),
                    a.videoStream = t);
                    V.rb(a);
                    a.addEventListener("loadeddata", q, !1)
                }).catch(function(t) {
                    g(t)
                })
            },
            Ve: function(a, c) {
                var d = c || V.ld();
                return new Promise(function(e, g) {
                    V.get(d, e, g, a)
                }
                )
            },
            get: function(a, c, d, e) {
                if (!a)
                    return d && d("VIDEO_NOTPROVIDED"),
                    !1;
                if (!V.Sc())
                    return d && d("MEDIASTREAMAPI_NOTFOUND"),
                    !1;
                if (e && e.video) {
                    if (V.Pc()) {
                        var g = V.Je();
                        0 !== g[0] && (12 > g[0] || 12 === g[0] && 2 > g[1]) && V.Qf(e)
                    }
                    e.video.width && e.video.width.ideal && (a.style.width = e.video.width.ideal + "px");
                    e.video.height && e.video.height.ideal && (a.style.height = e.video.height.ideal + "px")
                }
                V.Ma(a, "autoplay");
                V.Ma(a, "playsinline");
                e && e.audio ? a.volume = 0 : V.Ma(a, "muted");
                V.kd(a, c, function() {
                    function m(p) {
                        if (0 === p.length)
                            d("INVALID_FALLBACKCONSTRAINTS");
                        else {
                            var q = p.shift();
                            V.kd(a, c, function() {
                                m(p)
                            }, q)
                        }
                    }
                    var t = V.ve(e);
                    m(t)
                }, e)
            },
            We: function(a) {
                if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices)
                    return a(!1, "NOTSUPPORTED"),
                    !1;
                navigator.mediaDevices.enumerateDevices().then(function(c) {
                    (c = c.filter(function(d) {
                        return d.kind && -1 !== d.kind.toLowerCase().indexOf("video") && d.label && d.deviceId
                    })) && c.length && 0 < c.length ? a(c, !1) : a(!1, "NODEVICESFOUND")
                }).catch(function() {
                    a(!1, "PROMISEREJECTED")
                })
            },
            gg: function(a, c, d) {
                var e = {};
                e[c] = d;
                c = [];
                c.push(e);
                a.applyConstraints({
                    advanced: c
                }).catch(function() {})
            }
        }
          , qa = function() {
            function a(y, E, k, M, H, l, J) {
                if (!v)
                    if (J === l.length)
                        H();
                    else {
                        switch (l[J]) {
                        case "A":
                            k();
                            break;
                        case "D":
                            y();
                            break;
                        case "S":
                            E().then(function(w, L) {
                                n.Bb();
                                a(y, E, k, L ? null : M, H, l, ++J)
                            }).catch(function() {
                                H()
                            });
                            return;
                        case "R":
                            M && M()
                        }
                        a(y, E, k, M, H, l, ++J)
                    }
            }
            var c = {
                n: 5,
                ic: 1,
                Bd: 0,
                cb: [35, 49],
                Za: [2, 200],
                k: .7,
                Vf: 200,
                uf: .05
            }
              , d = -1
              , e = null
              , g = -1
              , m = -1
              , t = 0
              , p = -1
              , q = -1
              , u = 0
              , r = 0
              , A = c.Za[1]
              , v = !0
              , n = {
                Te: function() {
                    switch (d) {
                    case -1:
                        return -1;
                    case 0:
                        return q + e.Bd;
                    case 1:
                        return u
                    }
                },
                Lg: function(y) {
                    return Math.pow(Math.min(Math.max(p, 0), e.n - 1) / (e.n - 1), y || 1)
                },
                o: function(y) {
                    e = Object.assign({}, c, y);
                    p = q = e.ic;
                    d = 0;
                    n.reset()
                },
                Bb: function(y) {
                    y = ("undefined" === typeof y ? Date.now() : y) || 0;
                    var E = Math.min(Math.max(y - r, e.Za[0]), e.Za[1]);
                    A = E;
                    r = y;
                    var k = -1 === g ? 0 : e.k;
                    g = Math.min(Math.max(1E3 / E, 5), 120) * (1 - k) + g * k;
                    y - m > e.Vf && 5 < ++t && (E = e.k,
                    p = p * (1 - E) + (g < e.cb[0] ? q - 1 : g > e.cb[1] ? q + 1 : q) * E,
                    Math.abs(p - q) > 1 - e.uf && (E = Math.min(Math.max(Math.round(p), 0), e.n - 1),
                    E !== q && (p = q = E,
                    g = (e.cb[1] - e.cb[0]) / 2)),
                    m = y)
                },
                qc: function(y, E, k, M, H, l) {
                    v = !1;
                    a(y, E, k, M, H, l, 0)
                },
                stop: function() {
                    v = !0
                },
                sc: function(y) {
                    u = y;
                    d = 1
                },
                Bc: function() {
                    d = 0;
                    n.reset()
                },
                reset: function() {
                    A = c.Za[1];
                    m = g = -1;
                    t = 0
                },
                Me: function() {
                    return A
                }
            };
            return n
        }()
          , Na = function() {
            function a() {
                d(E + n.hc);
                k.port.postMessage("DONE")
            }
            function c() {
                J.Ua = 0 === n.Ta ? H(d) : H(e)
            }
            function d(f) {
                l.Aa && null !== y && (f -= E,
                f = Math.min(Math.max(f, n.Vc[0]), n.Vc[1]),
                E += f,
                m(),
                w.isEnabled && w.Pa && l.W && E - w.cc > n.Fc && (u(),
                w.cc = E),
                y(E))
            }
            function e(f) {
                l.Aa && (J.timeout = setTimeout(d.bind(null, f), n.Ta))
            }
            function g() {
                y = null;
                l.Aa = !1;
                m()
            }
            function m() {
                J.Ua && (window.cancelAnimationFrame(J.Ua),
                J.Ua = null);
                J.timeout && (window.clearTimeout(J.timeout),
                J.timeout = null)
            }
            function t(f) {
                f && !l.W ? (l.W = !0,
                M && qa.Bc(),
                k.port.postMessage("STOP"),
                aa.Zd(!0),
                c()) : !f && l.W && (l.W = !1,
                M && qa.sc(1),
                aa.Zd(!1),
                k.port.postMessage("START"))
            }
            function p(f) {
                f.target.hidden ? N() : L()
            }
            function q(f, z, I) {
                z = f.createShader(z);
                f.shaderSource(z, I);
                f.compileShader(z);
                return z
            }
            function u() {
                w.Pa = !1;
                var f = w.ga
                  , z = w.hb
                  , I = w.ib
                  , h = w.V;
                f.uniform1f(w.md, Math.random());
                w.Ba ? z.beginQueryEXT(h, I) : f.beginQuery(h, I);
                f.drawElements(f.POINTS, 1, f.UNSIGNED_SHORT, 0);
                w.Ba ? z.endQueryEXT(h) : f.endQuery(h);
                aa.flush();
                A().then(function(C) {
                    C = n.ce * n.Ec * 1E3 / C;
                    w.Eb = (w.Eb + 1) % n.Ea;
                    w.dc[w.Eb] = C;
                    ++w.Ad > n.Ea && (w.ob.set(w.dc),
                    w.ob.sort(function(K, O) {
                        return K - O
                    }),
                    C = w.ob[Math.floor(n.Ea / 2)],
                    w.ab = Math.max(w.ab, C),
                    n.Dc(C / w.ab));
                    w.Pa = !0
                }).catch(function() {
                    w.Pa = !0
                })
            }
            function r(f) {
                var z = w.ga
                  , I = w.hb
                  , h = w.ib;
                h = w.Ba ? I.Ig(h, I.QUERY_RESULT_AVAILABLE_EXT) : z.getQueryParameter(h, z.QUERY_RESULT_AVAILABLE);
                z = z.getParameter(I.GPU_DISJOINT_EXT);
                h ? f(!z) : setTimeout(r.bind(null, f), .1)
            }
            function A() {
                return new Promise(function(f, z) {
                    r(function(I) {
                        if (I) {
                            I = w.ga;
                            var h = w.hb
                              , C = w.ib;
                            I = w.Ba ? h.getQueryObjectEXT(C, h.QUERY_RESULT_EXT) : I.getQueryParameter(C, I.QUERY_RESULT);
                            f(I)
                        } else
                            z()
                    })
                }
                )
            }
            var v = {
                ud: !0,
                Vc: [1, 200],
                hc: 20,
                Ta: 0,
                Ec: 50,
                ce: 240,
                Fc: 3E3,
                Ea: 3,
                Dc: null
            }
              , n = null
              , y = null
              , E = 0
              , k = null
              , M = !1
              , H = null
              , l = {
                pa: !1,
                W: !0,
                bc: !1,
                ac: !1,
                $b: !1,
                Aa: !1
            }
              , J = {
                Ua: null,
                timeout: null
            }
              , w = {
                isEnabled: !1,
                Pa: !1,
                ga: null,
                hb: null,
                ib: null,
                V: null,
                md: null,
                Ba: !0,
                cc: 0,
                Ad: 0,
                dc: null,
                ob: null,
                Eb: 0,
                ab: 0
            }
              , L = t.bind(null, !0)
              , N = t.bind(null, !1)
              , x = {
                o: function(f) {
                    n = Object.assign(v, f);
                    Object.assign(l, {
                        W: !0,
                        pa: !0,
                        Aa: !1
                    });
                    H = window.requestPostAnimationFrame || window.requestAnimationFrame;
                    if (null !== n.Dc) {
                        f = document.createElement("canvas");
                        f.setAttribute("width", "1");
                        f.setAttribute("height", "1");
                        var z = {
                            antialias: !1
                        };
                        f = f.getContext("webgl2", z) || f.getContext("webgl", z);
                        if (z = f.getExtension("EXT_disjoint_timer_query") || f.getExtension("EXT_disjoint_timer_query_webgl2")) {
                            w.ga = f;
                            w.hb = z;
                            w.isEnabled = !0;
                            w.Ba = z.beginQueryEXT ? !0 : !1;
                            var I = q(f, f.VERTEX_SHADER, "attribute vec4 a0;void main(){gl_Position=a0;}")
                              , h = q(f, f.FRAGMENT_SHADER, "precision lowp float;uniform float u37;void main(){vec4 a=u37*vec4(1.,2.,3.,4.);for(int b=0;b<666;b+=1)a=cos(a);gl_FragColor=a;}".replace("666", n.Ec.toString()))
                              , C = f.createProgram();
                            f.attachShader(C, I);
                            f.attachShader(C, h);
                            f.linkProgram(C);
                            I = f.getAttribLocation(C, "a0");
                            w.md = f.getUniformLocation(C, "u37");
                            f.useProgram(C);
                            f.enableVertexAttribArray(I);
                            C = f.createBuffer();
                            f.bindBuffer(f.ARRAY_BUFFER, C);
                            f.bufferData(f.ARRAY_BUFFER, new Float32Array([.5, .5, 0, 1]), f.STATIC_DRAW);
                            f.vertexAttribPointer(I, 4, f.FLOAT, !1, 16, 0);
                            C = f.createBuffer();
                            f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, C);
                            f.bufferData(f.ELEMENT_ARRAY_BUFFER, new Uint16Array([0]), f.STATIC_DRAW);
                            f.disable(f.DEPTH_TEST);
                            f.disable(f.DITHER);
                            f.disable(f.STENCIL_TEST);
                            f.viewport(0, 0, 1, 1);
                            C = w.Ba ? z.createQueryEXT() : f.createQuery();
                            w.ib = C;
                            w.V = z.TIME_ELAPSED_EXT || f.TIME_ELAPSED;
                            w.cc = -n.Fc;
                            w.dc = new Float32Array(n.Ea);
                            w.ob = new Float32Array(n.Ea);
                            w.ab = 0;
                            w.Eb = 0;
                            w.Ad = 0;
                            w.Pa = !0
                        }
                    }
                    if (n.ud) {
                        f = !1;
                        try {
                            if ("undefined" === typeof SharedWorker) {
                                var K = URL.createObjectURL(new Blob(["let handler = null;\n      self.addEventListener('message', function(e){\n        if (handler !== null){\n          clearTimeout(handler);\n          handler = null;\n        }\n        switch (e.data) {\n          case 'START':\n          case 'DONE':\n            handler = setTimeout(function(){\n              self.postMessage('TICK');\n            }, " + n.hc.toString() + ");\n            break;\n          case 'STOP':\n            break;\n        };\n      }, false);"],{
                                    type: "text/javascript"
                                }))
                                  , O = new Worker(K);
                                O.addEventListener("message", a);
                                k = {
                                    Id: O,
                                    port: O
                                };
                                l.bc = !0
                            } else {
                                var Y = URL.createObjectURL(new Blob(["let handler = null;\n      onconnect = function(e) {\n        const port = e.ports[0];\n        port.addEventListener('message', function(e) {\n          \n          if (handler !== null){\n            clearTimeout(handler);\n            handler = null;\n          }\n          switch (e.data) {\n            case 'START':\n            case 'DONE':\n              handler = setTimeout(function(){\n                port.postMessage('TICK');\n              }, " + n.hc.toString() + ");\n              break;\n            case 'STOP':\n              break;\n          };\n          \n        });\n        \n        port.start();\n      } // end onconnect()"],{
                                    type: "text/javascript"
                                }))
                                  , oa = new SharedWorker(Y);
                                oa.port.start();
                                oa.port.addEventListener("message", a);
                                k = {
                                    Id: oa,
                                    port: oa.port
                                };
                                l.ac = !0
                            }
                            f = !0
                        } catch (sa) {}
                        f && ("onvisibilitychange"in document ? document.addEventListener("visibilitychange", p) : (window.addEventListener("blur", N),
                        window.addEventListener("focus", L)),
                        l.$b = !0)
                    }
                    M = "undefined" !== typeof qa
                },
                m: function() {
                    g();
                    l.$b && ("onvisibilitychange"in document ? document.removeEventListener("visibilitychange", p) : (window.removeEventListener("blur", N),
                    window.removeEventListener("focus", L)),
                    l.$b = !1);
                    l.ac ? (k.port.close(),
                    l.ac = !1) : l.bc && (k.Id.terminate(),
                    l.bc = !1);
                    Object.assign(l, {
                        W: !0,
                        pa: !1,
                        Aa: !1
                    });
                    y = null
                },
                qh: function() {
                    return l.W
                },
                update: function(f) {
                    Object.assign(n, f)
                },
                qc: function(f) {
                    l.pa || x.o({});
                    m();
                    l.Aa = !0;
                    y = f;
                    l.W && c()
                },
                stop: g
            };
            return x
        }()
          , vb = function() {
            var a = {
                Ed: 4,
                ub: [1.5, 1.5, 2],
                N: [.1, .1, .1],
                Md: 1,
                C: -1,
                L: -1,
                Pf: 2,
                tf: 1,
                Od: !0,
                De: .8
            }
              , c = null
              , d = []
              , e = [0]
              , g = [.5, .5, 1];
            return {
                o: function(m) {
                    c = Object.assign({}, a, m);
                    d.splice(0);
                    m = c.ub[0] * c.N[0];
                    var t = c.ub[1] * c.N[1]
                      , p = 1 / (1 + c.ub[2] * c.N[2])
                      , q = c.Md * Math.min(c.C, c.L)
                      , u = q / c.C;
                    q /= c.L;
                    var r = .5 * c.De;
                    r *= r;
                    for (var A = 0; A < c.Ed; ++A) {
                        var v = Math.pow(p, A)
                          , n = u * v
                          , y = q * v;
                        v = n * c.tf;
                        var E = n * m
                          , k = y * t;
                        n /= 2;
                        y /= 2;
                        for (var M = 1 + (1 - n - n) / E, H = 1 + (1 - y - y) / k, l = 0; l < H; ++l)
                            for (var J = y + l * k, w = J - .5, L = 0; L < M; ++L) {
                                var N = n + L * E
                                  , x = N - .5;
                                x * x + w * w > r || d.push([N, J, v])
                            }
                    }
                    c.Od && d.sort(function(f, z) {
                        var I = f[0] - .5;
                        f = f[1] - .5;
                        var h = z[0] - .5;
                        z = z[1] - .5;
                        return I * I + f * f - (h * h + z * z)
                    })
                },
                get: function(m) {
                    var t = d.length;
                    if (0 === t)
                        return g;
                    for (; m >= e.length; )
                        e.push(0);
                    e[m] >= t && (e[m] = 0);
                    var p = d[Math.floor(e[m])];
                    e[m] = (e[m] + 1 / c.Pf) % t;
                    return p
                },
                reset: function() {
                    for (var m = d.length / e.length, t = 0; t < e.length; ++t)
                        e[t] = Math.floor(t * m)
                }
            }
        }()
          , da = function() {
            function a(r, A, v, n) {
                return v > r ? Math.max(0, r + A / 2 - (v - n / 2)) : Math.max(0, v + n / 2 - (r - A / 2))
            }
            function c(r) {
                return !g.rd(r)
            }
            function d(r, A, v) {
                return r.some(function(n, y) {
                    if (y === A)
                        return !1;
                    y = r[A];
                    return y.qa > n.qa || 3 > n.qa || a(y.x, y.ja, n.x, n.ja) < g.fc * y.ja ? !1 : a(y.y, y.ja * v, n.y, n.ja * v) > g.fc * y.ja * v
                })
            }
            var e = {
                M: 1,
                fc: .3,
                Pd: .3,
                rd: null,
                ff: !0
            }
              , g = null
              , m = 0
              , t = null
              , p = !1
              , q = 0
              , u = 0;
            return {
                o: function(r) {
                    g = Object.assign({}, e, r);
                    t = [0]
                },
                yd: function() {
                    return 1 !== g.M
                },
                hd: function() {
                    return m
                },
                xd: function() {
                    return p
                },
                na: function() {
                    return g.M
                },
                ah: function() {
                    return t
                },
                jf: function(r) {
                    return t.includes(r)
                },
                update: function(r, A) {
                    var v = t;
                    if (v.length > r)
                        v.splice(0, v.length - r);
                    else
                        for (; v.length < r; )
                            v.push(0);
                    if (1 !== g.M)
                        if (A.every(c)) {
                            A = q;
                            for (var n = 0; n < r; ++n)
                                v[n] = A,
                                A = (A + 1) % g.M;
                            q = A
                        } else {
                            n = Math.round(g.Pd * r);
                            n = Math.max(1, n);
                            for (var y = q, E = 0, k = 0; E < r; ++E) {
                                if (c(A[y]) && ++k > n) {
                                    do
                                        ++y === g.M && (y = 0);
                                    while (c(A[y]))
                                }
                                v[E] = y;
                                y = (y + 1) % g.M
                            }
                            q = y
                        }
                },
                Bb: function(r) {
                    m = t[r];
                    u = (.5 + m) / g.M;
                    p = t.lastIndexOf(m) === r;
                    return m
                },
                Nf: function(r, A) {
                    return 1 === g.M ? !1 : d(r, m, A)
                },
                Yd: function(r) {
                    g.ff && 1 === g.M || D.G(r, u)
                },
                Ce: function(r) {
                    for (var A = new Float32Array(r.length * g.M), v = 0, n; v < g.M; ++v)
                        for (n = 0; n < r.length; ++n)
                            A[v * r.length + n] = r[n];
                    return A
                },
                Qb: function(r) {
                    for (var A = [], v = 0; v < g.M; ++v)
                        A.push(JSON.parse(JSON.stringify(r)));
                    return A
                }
            }
        }()
          , ea = {
            neuralNetworkPath: "NN_DEFAULT.json",
            ba: 0,
            Cf: {
                threshold: 1.2,
                nScaleLevels: 2,
                scale0Factor: .8,
                nDetectsPerLoopRange: [2, 12],
                overlapFactors: [2, 2, 3],
                scanCenterFirst: !0,
                nDetectsPerLoop: -1,
                multiDetectionThresholdFactors: [.5, .6],
                translationScalingFactors: [.3, .3, 1],
                isCleanGLStateAtEachIteration: !0,
                animateProcessOrder: "DSAR"
            },
            Sf: 50,
            qf: .4,
            pf: 8,
            rf: .3,
            Of: {
                translationFactorRange: [.002, .005],
                rotationFactorRange: [.015, .1],
                qualityFactorRange: [.9, .98],
                alphaRange: [.05, 1],
                followZRotAlphaFactor: .8
            },
            Qa: [.65, 1, .262],
            ee: .2,
            ge: 2,
            fe: .1,
            sf: 8,
            Dd: 1,
            Ge: Za.qb.bind(null, .3, .7),
            Xf: 20,
            Vd: 3
        }
          , pa = {
            facingMode: "user",
            idealWidth: 800,
            idealHeight: 600,
            minWidth: 480,
            maxWidth: 1920,
            minHeight: 480,
            maxHeight: 1920,
            rotate: 0,
            flipX: !1
        }
          , ia = {
            kc: -3,
            kf: -1,
            error: -2,
            ready: 1,
            play: 2,
            pause: 3
        }
          , na = ia.kc
          , G = null
          , bc = {
            kb: !1,
            vc: null,
            element: null,
            K: null,
            D: [0, 0],
            v: [.5, 0, 0, .5],
            wb: 0,
            Ka: null,
            jb: !1
        }
          , Q = null
          , cc = {
            Ja: null,
            Gb: null,
            antialias: !0,
            Gc: "./",
            Fa: null,
            da: null,
            ba: ea.ba,
            Hd: ea.ba,
            lb: !1,
            wa: !0
        }
          , Pa = null
          , ba = null
          , ra = null
          , Qa = 1
          , Oa = {
            rc: -1,
            Lb: -1
        }
          , Z = null
          , dc = {
            C: 0,
            L: 0,
            D: [0, 0],
            Oa: null
        }
          , U = {
            ta: null,
            buffer: null,
            N: null,
            Qa: null,
            Y: ea.Dd,
            Nd: 1,
            Na: null
        }
          , Sa = null
          , Fa = null
          , hb = []
          , ib = []
          , qb = {
            VERSION: "3.1.1",
            init: function(a) {
                function c() {
                    na !== ia.error && 2 === ++e && (Ka(),
                    xb(),
                    Ja(),
                    Q.Ja && (na = ia.ready,
                    Q.Ja(!1, {
                        GL: b,
                        canvasElement: Q.da,
                        videoTexture: G.K.get(),
                        videoTransformMat2: G.v,
                        maxFacesDetected: da.na(),
                        videoElement: G.element
                    }),
                    gb()),
                    fb())
                }
                if (na !== ia.kc)
                    return a.callbackReady && a.callbackReady("ALREADY_INITIALIZED"),
                    !1;
                na = ia.kf;
                G = Object.assign({}, bc);
                Q = Object.assign({}, cc);
                Z = Object.assign({}, dc);
                U.Qa = ea.Qa.slice(0);
                "undefined" !== typeof a.antialias && (Q.antialias = a.antialias);
                a.callbackReady && (Q.Ja = a.callbackReady);
                a.callbackTrack && (Q.Gb = a.callbackTrack);
                a.nExpressions && (U.Y = a.nExpressions);
                a.expressionsEasings && (U.Na = a.expressionsEasings);
                "undefined" !== typeof a.animateDelay && (Q.ba = a.animateDelay);
                "undefined" !== typeof a.NNCPath && (Q.Gc = a.NNCPath);
                "undefined" !== typeof a.NNC && (Q.Fa = a.NNC);
                "undefined" !== typeof a.followZRot && (Q.wa = a.followZRot ? !0 : !1);
                if (!a.canvasId && !a.canvas)
                    return Ia("NO_CANVASID"),
                    !1;
                Q.da = a.canvas ? a.canvas : document.getElementById(a.canvasId);
                if (!Q.da)
                    return Ia("INVALID_CANVASID"),
                    !1;
                Z.C = Q.da.width;
                Z.L = Q.da.height;
                if (!Z.C || !Z.L)
                    return Ia("INVALID_CANVASDIMENSIONS"),
                    !1;
                ba = Object.create(ea.Cf);
                a.scanSettings && Object.assign(ba, a.scanSettings);
                var d = 1;
                "undefined" !== typeof a.maxFacesDetected && (d = Math.max(1, a.maxFacesDetected));
                if (d > ea.pf)
                    return Ia("MAXFACES_TOOHIGH"),
                    !1;
                da.o({
                    M: d,
                    fc: ea.qf,
                    Pd: ea.rf,
                    rd: function(g) {
                        return g.detected > ba.multiDetectionThresholdFactors[1] * ba.threshold
                    }
                });
                for (d = 0; d < da.na(); ++d)
                    hb.push(new Float32Array(ea.sf)),
                    ib.push(0);
                Na.o({
                    ud: a.isKeepRunningOnWinFocusLost || !1,
                    Ta: Q.ba
                });
                qa.o({
                    ic: 0,
                    n: ba.nDetectsPerLoopRange[1] - ba.nDetectsPerLoopRange[0] + 1,
                    Bd: ba.nDetectsPerLoopRange[0]
                });
                -1 !== ba.nDetectsPerLoop ? qa.sc(ba.nDetectsPerLoop) : qa.Bc();
                U.N = ba.translationScalingFactors.slice(0);
                ra = Object.create(ea.Of);
                a.stabilizationSettings && Object.assign(ra, a.stabilizationSettings);
                var e = 0;
                a.videoSettings && a.videoSettings.videoElement ? ab(a.videoSettings.videoElement, c) : (a.videoSettings && Object.assign(pa, a.videoSettings),
                zb(a.onWebcamAsk, a.onWebcamGet, function(g) {
                    ab(g, c)
                }));
                Ob(function(g) {
                    if (!Pb())
                        return !1;
                    Pa = new Fb({
                        pb: g.layers,
                        pc: "gpuRawAvg",
                        mc: Qb
                    });
                    D.Kc([{
                        id: "s54",
                        name: "_",
                        ua: "attribute vec2 a0;uniform mat2 u38;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=vec2(.5,.5)+u38*a0;}",
                        Va: ["a0"],
                        Ha: [2],
                        h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                        i: ["u1", "u38"],
                        precision: "lowp"
                    }, {
                        id: "s55",
                        name: "_",
                        h: "uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}",
                        ua: "attribute vec2 a0;uniform sampler2D u39;uniform mat2 u38;uniform vec2 u40;uniform float u41,u42,u43;varying vec2 vv0;void main(){vec4 a=texture2D(u39,vec2(.17,u41));vec2 f=a.gb,g=a.a*u40,b=a0;b.x*=u43;float c=cos(u42),d=sin(u42);vec2 h=mat2(c,d,-d,c)*b,i=f+h*.5*g,j=i-.5;vv0=vec2(.5,.5)+2.*u38*j,gl_Position=vec4(a0,0.,1.);}",
                        Va: ["a0"],
                        Ha: [2],
                        i: "u1 u39 u40 u41 u42 u43 u38".split(" "),
                        precision: "lowp"
                    }, {
                        id: "s56",
                        name: "_",
                        h: "uniform sampler2D u44,u39;uniform vec3 u45,u46;uniform float u47,u48,u41,u49,u42,u50;const vec4 e=vec4(.25,.25,.25,.25);void main(){vec4 d=texture2D(u44,vec2(.625,.625)),f=texture2D(u44,vec2(.875,.625)),a=texture2D(u39,vec2(.17,u41));float g=dot(d-f,e);bool h=g>u48;a.r<-.5?a.r+=1.:h?a.r=2.:a.r>u47?a.r=0.:a.r>1.9?a.r+=1.:0.,a.r=mix(-2.,a.r,u49);if(a.r<.9)a=vec4(1.,u45);else{a.r*=step(1.9,a.r);float i=dot(e,texture2D(u44,vec2(.875,.875))),j=dot(e,texture2D(u44,vec2(.125,.625))),k=dot(e,texture2D(u44,vec2(.375,.625))),b=cos(u42),c=sin(u42);vec2 l=mat2(b,c*u50,-c/u50,b)*vec2(i,j);a.gba+=vec3(l,k)*u46*a.a;}gl_FragColor=a;}",
                        ua: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                        i: "u44 u39 u45 u47 u46 u49 u42 u50 u48 u41".split(" ")
                    }, {
                        id: "s57",
                        name: "_",
                        ua: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                        h: "uniform sampler2D u44;uniform float u49;const vec4 e=vec4(.25,.25,.25,.25);const vec3 f=vec3(.5,.5,.5);void main(){float a=dot(e,texture2D(u44,vec2(.125,.875))),b=dot(e,texture2D(u44,vec2(.375,.875))),c=dot(e,texture2D(u44,vec2(.625,.875))),d=dot(e,texture2D(u44,vec2(.625,.625)));vec3 g=vec3(a,b,c)*.5+f;gl_FragColor=vec4(g,d*u49);}",
                        i: ["u44", "u49"]
                    }, {
                        id: "s58",
                        name: "_",
                        ua: "attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}",
                        h: "uniform sampler2D u44;const vec4 e=vec4(.25,.25,.25,.25);void main(){float a=dot(e,texture2D(u44,vec2(.375,.375))),b=dot(e,texture2D(u44,vec2(.625,.375))),c=dot(e,texture2D(u44,vec2(.875,.375))),d=dot(e,texture2D(u44,vec2(.125,.125)));gl_FragColor=vec4(a,b,c,d);}",
                        i: ["u44"]
                    }, {
                        id: "s53",
                        name: "_",
                        h: "uniform sampler2D u39;uniform vec2 u51;uniform float u52;varying vec2 vv0;void main(){float f=step(.5,mod(gl_FragCoord.y+1.5,2.)),c=step(.33,vv0.x);vec4 a=texture2D(u39,vv0+u51);a.a=mix(a.a*u52,a.a,c);vec4 d=floor(255.*a),g=255.*(255.*a-d),b=mix(d,g,f)/255.;b.x=mix(step(a.x,1.5),b.x,c),gl_FragColor=b;}",
                        i: ["u39", "u52", "u51"]
                    }]);
                    ub();
                    U.buffer = new Uint8Array(8 * ea.Vd * da.na());
                    Sa = da.Qb({
                        Xa: 0,
                        x: 0,
                        y: 0,
                        ja: 1,
                        rx: 0,
                        ry: 0,
                        Ra: 0,
                        cd: new Float32Array(U.Y),
                        qa: 0
                    });
                    Fa = da.Qb({
                        detected: 0,
                        x: 0,
                        y: 0,
                        s: 1,
                        xRaw: 0,
                        yRaw: 0,
                        sRaw: 1,
                        rx: 0,
                        ry: 0,
                        rz: 0,
                        expressions: new Float32Array(U.Y)
                    });
                    da.Qb({
                        dx: 0,
                        dy: 0,
                        Pb: 0,
                        Mb: 0,
                        Nb: 0,
                        Ob: 0
                    });
                    kb();
                    jb();
                    c()
                });
                return !0
            },
            destroy: function() {
                Na.m();
                return new Promise(function(a) {
                    qb.toggle_pause(!0, !0).finally(function() {
                        Pa && Pa.m();
                        Ha.m();
                        Pa = Fa = Sa = null;
                        hb.splice(0);
                        ib.splice(0);
                        Z.Oa = null;
                        U.ta = null;
                        G.K = null;
                        na = ia.kc;
                        a()
                    }).catch(function() {})
                }
                )
            },
            toggle_videoStream: function(a) {
                return G.jb || !G.element ? Promise.resolve() : V.$d(G.element, a, G.Ka)
            },
            toggle_pause: function(a, c) {
                if (!Ya())
                    return Promise.reject("NOT_READY");
                c = c ? qb.toggle_videoStream(!a) : Promise.resolve();
                a ? sb() : c.then(function() {
                    fb()
                });
                return c
            },
            update_videoSettings: function(a) {
                sb();
                return new Promise(function(c, d) {
                    V.$d(G.element, !1, G.Ka).then(function() {
                        Object.assign(pa, a);
                        zb(null, null, function(e) {
                            ab(e, function() {
                                Ka();
                                Ja();
                                fb();
                                c()
                            })
                        })
                    }).catch(d)
                }
                )
            },
            toggle_slow: function(a) {
                Ya() && na === ia.play && (a && !Q.lb ? (Q.Hd = Q.ba,
                ba.nDetectsPerLoop = 1,
                this.set_animateDelay(ea.Zf),
                Q.lb = !0) : !a && Q.lb && (ba.nDetectsPerLoop = -1,
                this.set_animateDelay(Q.Hd),
                Q.lb = !1))
            },
            set_animateDelay: function(a) {
                Q.ba = a;
                Na.update({
                    Ta: Q.ba
                })
            },
            resize: function() {
                if (!Ya())
                    return !1;
                var a = Q.da.width
                  , c = Q.da.height;
                if (!lb() && a === Z.C && c === Z.L)
                    return !1;
                Z.C = a;
                Z.L = c;
                D.P();
                kb();
                jb();
                Ka();
                Ja();
                return !0
            },
            set_inputTexture: function(a, c, d) {
                G.D[0] = c;
                G.D[1] = d;
                G.K = X.instance({
                    width: c,
                    height: d,
                    Wb: a
                });
                G.kb = !0;
                Ka();
                gb();
                Ja()
            },
            reset_GLState: function() {
                gb();
                Z.Oa.remove();
                U.ta.remove();
                ub()
            },
            render_video: function() {
                va.O();
                D.set("s54");
                b.viewport(0, 0, Z.C, Z.L);
                G.K.g(0);
                T.l(!0, !0)
            },
            reset_inputTexture: function() {
                G.kb = !1;
                G.K = G.vc;
                lb();
                Ka();
                Ja()
            },
            get_videoDevices: function(a) {
                return V.We(a)
            },
            set_scanSettings: function(a) {
                Object.assign(ba, a);
                -1 !== ba.nDetectsPerLoop ? qa.sc(ba.nDetectsPerLoop) : qa.Bc();
                kb();
                jb()
            },
            set_stabilizationSettings: function(a) {
                Object.assign(ra, a)
            },
            set_videoOrientation: function(a, c) {
                Ya() && (pa.flipX = c,
                pa.rotate = a,
                Ka(),
                Ja())
            },
            update_videoElement: function(a, c) {
                ab(a ? a : G.element, function() {
                    xb();
                    Ka();
                    Ja();
                    c && c()
                })
            },
            create_new: function() {
                return window.JEELIZFACEFILTERGEN()
            }
        };
        return qb
    }
    ;
    window.JEELIZFACEFILTER = window.JEELIZFACEFILTERGEN();
    ;return JEELIZFACEFILTER || window.JEELIZFACEFILTER;
}
)();
