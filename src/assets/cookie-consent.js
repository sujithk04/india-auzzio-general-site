var cookieconsent = (function (e) {
  var o = {};
  function t(n) {
    if (o[n]) return o[n].exports;
    var i = (o[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
  }
  return (
    (t.m = e),
    (t.c = o),
    (t.d = function (e, o, n) {
      t.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: n });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, o) {
      if ((1 & o && (e = t(e)), 8 & o)) return e;
      if (4 & o && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (t.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & o && "string" != typeof e)
      )
        for (var i in e)
          t.d(
            n,
            i,
            function (o) {
              return e[o];
            }.bind(null, i)
          );
      return n;
    }),
    (t.n = function (e) {
      var o =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(o, "a", o), o;
    }),
    (t.o = function (e, o) {
      return Object.prototype.hasOwnProperty.call(e, o);
    }),
    (t.p = ""),
    t((t.s = 28))
  );
})([
  function (e, o, t) {
    "use strict";
    e.exports = function (e) {
      var o = [];
      return (
        (o.toString = function () {
          return this.map(function (o) {
            var t = (function (e, o) {
              var t = e[1] || "",
                n = e[3];
              if (!n) return t;
              if (o && "function" == typeof btoa) {
                var i =
                    ((r = n),
                    "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                      " */"),
                  a = n.sources.map(function (e) {
                    return "/*# sourceURL=" + n.sourceRoot + e + " */";
                  });
                return [t].concat(a).concat([i]).join("\n");
              }
              var r;
              return [t].join("\n");
            })(o, e);
            return o[2] ? "@media " + o[2] + "{" + t + "}" : t;
          }).join("");
        }),
        (o.i = function (e, t) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var n = {}, i = 0; i < this.length; i++) {
            var a = this[i][0];
            null != a && (n[a] = !0);
          }
          for (i = 0; i < e.length; i++) {
            var r = e[i];
            (null != r[0] && n[r[0]]) ||
              (t && !r[2]
                ? (r[2] = t)
                : t && (r[2] = "(" + r[2] + ") and (" + t + ")"),
              o.push(r));
          }
        }),
        o
      );
    };
  },
  function (e, o, t) {
    var n,
      i,
      a = {},
      r =
        ((n = function () {
          return window && document && document.all && !window.atob;
        }),
        function () {
          return void 0 === i && (i = n.apply(this, arguments)), i;
        }),
      s = function (e, o) {
        return o ? o.querySelector(e) : document.querySelector(e);
      },
      c = (function (e) {
        var o = {};
        return function (e, t) {
          if ("function" == typeof e) return e();
          if (void 0 === o[e]) {
            var n = s.call(this, e, t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            o[e] = n;
          }
          return o[e];
        };
      })(),
      l = null,
      p = 0,
      d = [],
      u = t(21);
    function k(e, o) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t],
          i = a[n.id];
        if (i) {
          i.refs++;
          for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r]);
          for (; r < n.parts.length; r++) i.parts.push(h(n.parts[r], o));
        } else {
          var s = [];
          for (r = 0; r < n.parts.length; r++) s.push(h(n.parts[r], o));
          a[n.id] = { id: n.id, refs: 1, parts: s };
        }
      }
    }
    function f(e, o) {
      for (var t = [], n = {}, i = 0; i < e.length; i++) {
        var a = e[i],
          r = o.base ? a[0] + o.base : a[0],
          s = { css: a[1], media: a[2], sourceMap: a[3] };
        n[r] ? n[r].parts.push(s) : t.push((n[r] = { id: r, parts: [s] }));
      }
      return t;
    }
    function v(e, o) {
      var t = c(e.insertInto);
      if (!t)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var n = d[d.length - 1];
      if ("top" === e.insertAt)
        n
          ? n.nextSibling
            ? t.insertBefore(o, n.nextSibling)
            : t.appendChild(o)
          : t.insertBefore(o, t.firstChild),
          d.push(o);
      else if ("bottom" === e.insertAt) t.appendChild(o);
      else {
        if ("object" != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var i = c(e.insertAt.before, t);
        t.insertBefore(o, i);
      }
    }
    function m(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var o = d.indexOf(e);
      o >= 0 && d.splice(o, 1);
    }
    function g(e) {
      var o = document.createElement("style");
      if (
        (void 0 === e.attrs.type && (e.attrs.type = "text/css"),
        void 0 === e.attrs.nonce)
      ) {
        var n = (function () {
          0;
          return t.nc;
        })();
        n && (e.attrs.nonce = n);
      }
      return _(o, e.attrs), v(e, o), o;
    }
    function _(e, o) {
      Object.keys(o).forEach(function (t) {
        e.setAttribute(t, o[t]);
      });
    }
    function h(e, o) {
      var t, n, i, a;
      if (o.transform && e.css) {
        if (
          !(a =
            "function" == typeof o.transform
              ? o.transform(e.css)
              : o.transform.default(e.css))
        )
          return function () {};
        e.css = a;
      }
      if (o.singleton) {
        var r = p++;
        (t = l || (l = g(o))),
          (n = w.bind(null, t, r, !1)),
          (i = w.bind(null, t, r, !0));
      } else
        e.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((t = (function (e) {
              var o = document.createElement("link");
              return (
                void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                (e.attrs.rel = "stylesheet"),
                _(o, e.attrs),
                v(e, o),
                o
              );
            })(o)),
            (n = j.bind(null, t, o)),
            (i = function () {
              m(t), t.href && URL.revokeObjectURL(t.href);
            }))
          : ((t = g(o)),
            (n = z.bind(null, t)),
            (i = function () {
              m(t);
            }));
      return (
        n(e),
        function (o) {
          if (o) {
            if (
              o.css === e.css &&
              o.media === e.media &&
              o.sourceMap === e.sourceMap
            )
              return;
            n((e = o));
          } else i();
        }
      );
    }
    e.exports = function (e, o) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      ((o = o || {}).attrs = "object" == typeof o.attrs ? o.attrs : {}),
        o.singleton || "boolean" == typeof o.singleton || (o.singleton = r()),
        o.insertInto || (o.insertInto = "head"),
        o.insertAt || (o.insertAt = "bottom");
      var t = f(e, o);
      return (
        k(t, o),
        function (e) {
          for (var n = [], i = 0; i < t.length; i++) {
            var r = t[i];
            (s = a[r.id]).refs--, n.push(s);
          }
          e && k(f(e, o), o);
          for (i = 0; i < n.length; i++) {
            var s;
            if (0 === (s = n[i]).refs) {
              for (var c = 0; c < s.parts.length; c++) s.parts[c]();
              delete a[s.id];
            }
          }
        }
      );
    };
    var b,
      y =
        ((b = []),
        function (e, o) {
          return (b[e] = o), b.filter(Boolean).join("\n");
        });
    function w(e, o, t, n) {
      var i = t ? "" : n.css;
      if (e.styleSheet) e.styleSheet.cssText = y(o, i);
      else {
        var a = document.createTextNode(i),
          r = e.childNodes;
        r[o] && e.removeChild(r[o]),
          r.length ? e.insertBefore(a, r[o]) : e.appendChild(a);
      }
    }
    function z(e, o) {
      var t = o.css,
        n = o.media;
      if ((n && e.setAttribute("media", n), e.styleSheet))
        e.styleSheet.cssText = t;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(t));
      }
    }
    function j(e, o, t) {
      var n = t.css,
        i = t.sourceMap,
        a = void 0 === o.convertToAbsoluteUrls && i;
      (o.convertToAbsoluteUrls || a) && (n = u(n)),
        i &&
          (n +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
            " */");
      var r = new Blob([n], { type: "text/css" }),
        s = e.href;
      (e.href = URL.createObjectURL(r)), s && URL.revokeObjectURL(s);
    }
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Active","always_active":"Always active","change_settings":"Change my preferences","find_out_more":"<p>To find out more, please visit our <a href=\'%s\' target=\'_blank\'>Cookies Policy</a>.</p>","i_agree_text":"I agree","inactive":"Inactive","ok_text":"OK","text":"We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content and targeted ads, to analyze our website traffic, and to understand where our visitors are coming from. By browsing our website, you consent to our use of cookies and other tracking technologies.<br/>","title":"We use cookies"},"level_functionality":{"content":"<p>These cookies are used to provide you with a more personalized experience on our website and to remember choices you make when you use our website.</p><p>For example, we may use functionality cookies to remember your language preferences or remember your login details.</p>","title":"Functionality cookies"},"level_strictly_necessary":{"content":"<p>These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website.</p><p>Without these cookies, we cannot provide you certain services on our website.</p>","title":"Strictly necessary cookies"},"level_targeting":{"content":"<p>These cookies are used to show advertising that is likely to be of interest to you based on your browsing habits.</p><p>These cookies, as served by our content and/or advertising providers, may combine information they collected from our website with other information they have independently collected relating to your web browser\'s activities across their network of websites.</p><p>If you choose to remove or disable these targeting or advertising cookies, you will still see adverts but they may not be relevant to you.</p>","title":"Targeting and advertising cookies"},"level_tracking":{"content":"<p>These cookies are used to collect information to analyze the traffic to our website and how visitors are using our website.</p><p>For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website site for you.</p><p>The information collected through these tracking and performance cookies do not identify any individual visitor.</p>","title":"Tracking and performance cookies"},"preference_center":{"save":"Save my preferences","title":"Cookies Preferences Center"},"preference_center_menu_and_content":{"more_information_content":"<h1>More information</h1><p>For any queries in relation to our policy on cookies and your choices, please contact us.</p>","more_information_title":"More information","your_privacy_content":"<h1>Your privacy is important to us</h1>\\n<p>Cookies are very small text files that are stored on your computer when you visit a website. We use cookies for a variety of purposes and to enhance your online experience on our website (for example, to remember your account login details).</p><p>You can change your preferences and decline certain types of cookies to be stored on your computer while browsing our website. You can also remove any cookies already stored on your computer, but keep in mind that deleting cookies may prevent you from using parts of our website.</p>","your_privacy_title":"Your privacy"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Aktiv","always_active":"Immer aktiv","change_settings":"Einstellungen Ã¤ndern","find_out_more":"<p>Details finden Sie in unserer <a href=\'%s\' target=\'_blank\'>DatenschutzerklÃ¤rung</a>.</p>","i_agree_text":"Alle akzeptieren","inactive":"Inaktiv","ok_text":"OK","text":"Diese Website verwendet Cookies und Targeting Technologien um Ihnen ein besseres Internet-Erlebnis zu ermÃ¶glichen und die Werbung, die Sie sehen, besser an Ihre BedÃ¼rfnisse anzupassen. Diese Technologien nutzen wir auÃŸerdem um Ergebnisse zu messen, um zu verstehen, woher unsere Besucher kommen oder um unsere Website weiter zu entwickeln. Durch das Surfen auf unserer Website stimmen Sie der Verwendung von Cookies und anderen Tracking-Technologien zu.<br/>","title":"Ihre PrivatsphÃ¤re ist uns wichtig"},"level_functionality":{"content":"<p>Diese Cookies werden verwendet, um Ihnen ein persÃ¶nlicheres Erlebnis auf unserer Website zu ermÃ¶glichen und um sich an Ihre Entscheidungen zu erinnern, die Sie bei der Nutzung unserer Website getroffen haben.</p><p>Beispielsweise kÃ¶nnen wir Funktions-Cookies verwenden, um Ihre Spracheinstellungen oder Ihre Anmeldedaten zu speichern.</p>","title":"Funktions Cookies"},"level_strictly_necessary":{"content":"<p>Diese Cookies sind fÃ¼r die Bereitstellung von Diensten, die Ã¼ber unsere Website verfÃ¼gbar sind, und fÃ¼r die Verwendung bestimmter Funktionen unserer Website von wesentlicher Bedeutung.</p><p>Ohne diese Cookies kÃ¶nnen wir Ihnen bestimmte Dienste auf unserer Website nicht zur VerfÃ¼gung stellen.</p>","title":"Technisch notwendige Cookies"},"level_targeting":{"content":"<p>Diese Cookies werden genutzt, um Werbung anzuzeigen, die Sie aufgrund Ihrer Surfgewohnheiten wahrscheinlich interessieren wird.</p><p>Diese Cookies, die von unseren Inhalten und / oder Werbeanbietern bereitgestellt werden, kÃ¶nnen Informationen, die sie von unserer Website gesammelt haben, mit anderen Informationen kombinieren, welche sie durch AktivitÃ¤ten Ihres Webbrowsers in Ihrem Netzwerk von Websites gesammelt haben.</p><p>Wenn Sie diese Targeting- oder Werbe-Cookies entfernen oder deaktivieren, werden weiterhin Anzeigen angezeigt. Diese sind fÃ¼r Sie jedoch mÃ¶glicherweise nicht relevant.</p>","title":"Targeting und Werbung Cookies"},"level_tracking":{"content":"<p>Diese Cookies werden zum Sammeln von Informationen verwendet, um den Verkehr auf unserer Website und die Nutzung unserer Website durch Besucher zu analysieren.<p><p>Diese Cookies kÃ¶nnen beispielsweise nachverfolgen, wie lange Sie auf der Website verweilen oder welche Seiten Sie besuchen. So kÃ¶nnen wir verstehen, wie wir unsere Website fÃ¼r Sie verbessern kÃ¶nnen.</p><p>Die durch diese Tracking- und Performance-Cookies gesammelten Informationen identifizieren keinen einzelnen Besucher.</p>","title":"Tracking und Performance Cookies"},"preference_center":{"save":"Einstellungen speichern","title":"Cookie Einstellungen"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mehr Informationen</h1><p>Bei Fragen in Bezug auf unseren Umgang mit Cookies und Ihrer PrivatsphÃ¤re kontaktieren Sie uns bitte.</p>","more_information_title":"Mehr Informationen","your_privacy_content":"<h1>Ihre PrivatsphÃ¤re ist uns wichtig</h1>\\n<p>Cookies sind sehr kleine Textdateien, die auf Ihrem Rechner gespeichert werden, wenn Sie eine Website besuchen. Wir verwenden Cookies fÃ¼r eine Reihe von Auswertungen, um damit Ihren Besuch auf unserer Website kontinuierlich zu verbessern zu kÃ¶nnen (z. B. damit Ihnen Ihre Login-Daten erhalten bleiben).</p><p>Sie kÃ¶nnen Ihre Einstellungen Ã¤ndern und verschiedenen Arten von Cookies erlauben, auf Ihrem Rechner gespeichert zu werden, wÃ¤hrend Sie unsere Webseite besuchen. Sie kÃ¶nnen auf Ihrem Rechner gespeicherte Cookies ebenso weitgehend wieder entfernen. Bitte bedenken Sie aber, dass dadurch Teile unserer Website mÃ¶glicherweise nicht mehr in der gedachten Art und Weise nutzbar sind.</p>","your_privacy_title":"Ihre PrivatsphÃ¤re"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Actif","always_active":"Toujours activÃ©","change_settings":"Changer mes prÃ©fÃ©rences","find_out_more":"<p>Pour en savoir plus, merci de consulter notre <a href=\'%s\' target=\'_blank\'>Politique sur les cookies</a>.</p>","i_agree_text":"J\'accepte","inactive":"Inactif","ok_text":"OK","text":"Nous utilisons des cookies et d\'autres technologies de suivi pour amÃ©liorer votre expÃ©rience de navigation sur notre site, pour vous montrer un contenu personnalisÃ© et des publicitÃ©s ciblÃ©es, pour analyser le trafic de notre site et pour comprendre la provenance de nos visiteurs. En naviguant sur notre site Web, vous consentez Ã  notre utilisation de cookies et d\'autres technologies de suivi.<br/>","title":"Nous utilisons des cookies"},"level_functionality":{"content":"<p>Ces cookies servent Ã  vous offrir une expÃ©rience plus personnalisÃ©e sur notre site Web et Ã  mÃ©moriser les choix que vous faites lorsque vous utilisez notre site Web.</p><p>Par exemple, nous pouvons utiliser des cookies de fonctionnalitÃ© pour mÃ©moriser vos prÃ©fÃ©rences de langue ou vos identifiants de connexion.</p>","title":"Cookies de FonctionnalitÃ©"},"level_strictly_necessary":{"content":"<p>Ces cookies sont essentiels pour vous fournir les services disponibles sur notre site Web et vous permettre dâ€™utiliser certaines fonctionnalitÃ©s de notre site Web.</p><p>Sans ces cookies, nous ne pouvons pas vous fournir certains services sur notre site Web.</p>","title":"Cookies strictement nÃ©cessaires"},"level_targeting":{"content":"<p>Ces cookies sont utilisÃ©s pour afficher des publicitÃ©s susceptibles de vous intÃ©resser en fonction de vos habitudes de navigation.</p><p>Ces cookies, tels que servis par nos fournisseurs de contenu et / ou de publicitÃ©, peuvent associer des informations qu\'ils ont collectÃ©es sur notre site Web Ã  d\'autres informations qu\'ils ont collectÃ©es de maniÃ¨re indÃ©pendante et concernant les activitÃ©s du votre navigateur Web sur son rÃ©seau de sites Web.</p><p>Si vous choisissez de supprimer ou de dÃ©sactiver ces cookies de ciblage ou de publicitÃ©, vous verrez toujours des annonces, mais elles risquent de ne pas Ãªtre pertinentes.</p>","title":"Cookies de ciblage et de publicitÃ©"},"level_tracking":{"content":"<p>Ces cookies sont utilisÃ©s pour collecter des informations permettant d\'analyser le trafic sur notre site et la maniÃ¨re dont les visiteurs utilisent notre site.</p><p>Par exemple, ces cookies peuvent suivre des choses telles que le temps que vous passez sur le site Web ou les pages que vous visitez, ce qui nous aide Ã  comprendre comment nous pouvons amÃ©liorer notre site Web pour vous.</p><p>Les informations collectÃ©es via ces cookies de suivi et de performance n\' identifient aucun visiteur en particulier.</p>","title":"Cookies de suivi et de performance"},"preference_center":{"save":"Sauvegarder mes prÃ©fÃ©rences","title":"Espace de PrÃ©fÃ©rences des Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Plus d\'information</h1><p>Pour toute question relative Ã  notre politique en matiÃ¨re de cookies et Ã  vos choix, veuillez nous contacter.</p>","more_information_title":"Plus d\'information","your_privacy_content":"<h1>Votre confidentialitÃ© est importante pour nous</h1>\\n<p>Les cookies sont de trÃ¨s petits fichiers texte qui sont stockÃ©s sur votre ordinateur lorsque vous visitez un site Web. Nous utilisons des cookies Ã  diverses fins et pour amÃ©liorer votre expÃ©rience en ligne sur notre site Web (par exemple, pour mÃ©moriser les informations de connexion de votre compte).</p><p>Vous pouvez modifier vos prÃ©fÃ©rences et refuser l\'enregistrement de certains types de cookies sur votre ordinateur lors de la navigation sur notre site. Vous pouvez Ã©galement supprimer les cookies dÃ©jÃ  stockÃ©s sur votre ordinateur, mais gardez Ã  l\'esprit que leur suppression peut vous empÃªcher d\'utiliser des Ã©lÃ©ments de notre site Web.</p>","your_privacy_title":"Votre confidentialitÃ©"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Activo","always_active":"Siempre activo","change_settings":"Cambia mi preferencias","find_out_more":"<p>Para saber mÃ¡s, visita nuestra pÃ¡gina sobre la <a href=\'%s\' target=\'_blank\'>PolÃ­tica de Cookies</a>, por favor.</p>","i_agree_text":"Estoy de acuerdo","inactive":"Inactivo","ok_text":"OK","text":"Usamos cookies y otras tecnicas de rastreo para mejorar tu experiencia de navegaciÃ³n en nuestra web, para mostrarte contenidos personalizados y anuncios adecuados, para analizar el trÃ¡fico en nuestra web y para comprender de donde llegan nuestros visitantes. Navegando en nuestra web tu aceptas el uso de cookies y de otras tecnicas de rastreo.<br/>","title":"Utilizamos cookies"},"level_functionality":{"content":"<p>Estos cookies son utilizados para proveerte una mÃ¡s personalizada experiencia en nuestra web y para recordar tu elecciones en nuestro sitio web.</p><p>Por ejemplo, podemos utilizar cookies de funcionalidad para recordar tu preferencias de idioma o tus detalles de acceso.</p>","title":"Cookies de funcionalidad"},"level_strictly_necessary":{"content":"<p>Estos cookies son esenciales para proveerte los servicios disponibles en nuestra web y para permitirte de utilizar algunas caracterÃ­sticas de nuestra web.</p><p>Sin estos cookies, no podemos proveer algunos servicios de nuestro sitio web.</p>","title":"Cookies estrictamente necesarias"},"level_targeting":{"content":"<p>Estos cookies son utilizados para enseÃ±arte anuncios que pueden ser interesantes sobre la base de tus costumbres de navegaciÃ³n.</p><p>Estos cookies, como servidos por nuestros proveedores de contenido y/o de publicidad, puede combinar la informaciÃ³n que ellos recogieron de nuestro sitio web con otra informaciÃ³n recopilada por ellos en relaciÃ³n con las actividades de su navegador web a travÃ©s de su red de sitios web.</p><p>Si tu eliges de cancelar o inhabilitar los cookies de seguimiento y publicidad, seguirÃ¡s viendo anuncios pero estos podrÃ­an no ser de tu interÃ©s.</p>","title":"Cookies de seguimiento y publicidad"},"level_tracking":{"content":"<p>Estos cookies  son utilizados para recopilar informaciÃ³n para analizar el trÃ¡fico en nuestra web y la forma en que los usuarios utilizan nuestra web.</p><p>Por ejemplo, estos cookies pueden recopilar datos como cuanto tiempo llevas navegado en nuestro sitio web o que pÃ¡ginas visitas, cosa que nos ayuda a comprender cÃ³mo podemos mejorar nuestra web para ti.</p><p>La informaciÃ³n recopilada con estos cookies de rastreo y rendimiento no identifiquen a ningÃºn visitante individual.</p>","title":"Cookies de rastreo y rendimiento"},"preference_center":{"save":"Guardar mi preferencias","title":"Centro de Preferencias de Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>MÃ¡s informaciÃ³n</h1><p>Para cualquier pregunta en relaciÃ³n con nuestra polÃ­tica de cookies y tus preferencias, contacta con nosotros, por favor.</p>","more_information_title":"MÃ¡s informaciÃ³n","your_privacy_content":"<h1>Tu privacidad es importante para nosotros</h1>\\n<p>Los cookies son muy pequeÃ±os archivos de texto almacenados en tu ordenador cuando visitas nuestra web. Utilizamos cookies para diferentes objetivos y para mejorar tu experiencia en line en nuestro sitio web (por ejemplo, para recordar tu detalles de acceso).</p><p>Puedes cambiar tu preferencias y rechazar que algunos tipos de cookies sean almacenados en tu ordenador mientras estÃ¡s navegando en nuestra web. Puedes tambiÃ©n cancelar cualquier cookie ya almacenado en tu ordenador, pero recuerda que cancelar los cookies puede impedirte de utilizar algunas partes de nuestra web.</p>","your_privacy_title":"Tu privacidad"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Attivo","always_active":"Sempre attivo","change_settings":"Cambia le mie impostazioni","find_out_more":"<p>Per saperne di piÃ¹, visita per favore la nostra pagina sulla <a href=\'%s\' target=\'_blank\'>Politica dei Cookies</a>.</p>","i_agree_text":"Accetto","inactive":"Inattivo","ok_text":"OK","text":"Noi usiamo i cookies e altre tecniche di tracciamento per migliorare la tua esperienza di navigazione nel nostro sito, per mostrarti contenuti personalizzati e annunci mirati, per analizzare il traffico sul nostro sito, e per capire da dove arrivano i nostri visitatori. Navigando nel nostro sito web, tu accetti il nostro utilizzo dei cookies e di altre tecniche di tracciamento.<br/>","title":"Noi usiamo i cookies"},"level_functionality":{"content":"<p>Questi cookies sono utilizzati per offrirti unâ€™esperienza piÃ¹ personalizzata nel nostro sito e per ricordare le scelte che hai fatto mentre usavi il nostro sito.</p><p>Per esempio, possiamo usare cookies funzionali per memorizzare le tue preferenze sulla lingua o i tuoi dettagli di accesso.</p>","title":"Cookies funzionali"},"level_strictly_necessary":{"content":"<p>Questi cookies sono essenziali per fornirti i servizi disponibili nel nostro sito e per renderti disponibili alcune funzionalitÃ  del nostro sito web.</p><p>Senza questi cookies, non possiamo fornirti alcuni servizi del nostro sito.</p>","title":"Cookies strettamente necessari"},"level_targeting":{"content":"<p>Questi cookies sono usati per mostrare annunci pubblicitari che possano verosimilmente essere di tuo interesse in base alle tue abitudini di navigazione.</p><p>Questi cookies, cosÃ­ come forniti dai nostri fornitori di  contenuti o annunci pubblicitari, possono combinare le informazioni che raccolgono dal nostro sito web con quelle che hanno indipendentemente raccolto in relazione allâ€™attivitÃ  del tuo browser attraverso la loro rete di siti web.</p><p>Se scegli di rimuovere o disabilitare questo tipo di cookies di targeting e pubblicitÃ , vedrai ancora annunci pubblicitari ma potrebbero essere irrilevanti per te.</p>","title":"Cookies di targeting e pubblicitÃ "},"level_tracking":{"content":"<p>Questi cookies sono utilizzati per raccogliere informazioni per analizzare il traffico verso il nostro sito e il modo in cui i visitatori utilizzano il nostro sito.</p><p>Per esempio, questi cookies possono tracciare cose come quanto a lungo ti fermi nel nostro sito o le pagine che visiti, cosa che ci aiuta a capire come possiamo migliorare il nostro sito per te.</p><p>Le informazioni raccolte attraverso questi cookies di tracciamento e performance non identificano alcun visitatore individuale.</p>","title":"Cookies di tracciamento e prestazione"},"preference_center":{"save":"Salva le mie impostazioni","title":"Centro Preferenze sui Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>PiÃ¹ informazioni</h1><p>Per qualsiasi domanda relativa alla nostra politica sui cookies e le tue scelte, per favore contattaci.</p>","more_information_title":"PiÃ¹ informazioni","your_privacy_content":"<h1>La tua privacy Ã¨ importante per noi</h1>\\n<p>I cookies sono dei piccolissimi file di testo che vengono memorizzati nel tuo computer quando visiti un sito web. Noi usiamo i cookies per una varietÃ  di scopi e per migliorare la tua esperienza online nel nostro sito web (per esempio, per ricordare i tuoi dettagli di accesso).</p><p>Tu puoi cambiare le tue impostazioni e rifiutare che alcuni tipi di cookies vengano memorizzati sul tuo computer mentre stai navigando nel nostro sito web. Puoi anche rimuovere qualsiasi cookie giÃ  memorizzato nel tuo computer, ma ricorda che cancellare i cookies puÃ² impedirti di utilizzare alcune parti del nostro sito.</p>","your_privacy_title":"La tua privacy"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Actief","always_active":"Altijd actief","change_settings":"Wijzig mijn voorkeuren","find_out_more":"<p>Voor meer informatie, bezoek ons <a href=\'%s\' target=\'_blank\'>Cookie Beleid</a>.</p>","i_agree_text":"Ik ga akkoord","inactive":"Inactief","ok_text":"OK","text":"Wij maken gebruik van cookies en andere tracking-technologieÃ«n om uw surfervaring op onze website te verbeteren, om gepersonaliseerde inhoud en advertenties te tonen, om onze website trafiek te analyseren en om te begrijpen waar onze bezoekers vandaan komen. Door onze website te bezoeken, stemt u in met ons gebruik van cookies en andere trackingtechnologieÃ«n.<br/>","title":"Wij gebruiken cookies"},"level_functionality":{"content":"<p>Deze cookies worden gebruikt om u een persoonlijkere ervaring op onze website te bieden en om keuzes te onthouden die u maakt wanneer u onze website gebruikt.</p><p>Functionele cookies worden bijvoorbeeld gebruikt om uw taalvoorkeuren of inloggegevens te onthouden.</p>","title":"Functionele cookies"},"level_strictly_necessary":{"content":"<p>Deze cookies zijn essentieel om u de diensten aan te bieden die beschikbaar zijn via onze website en om u in staat te stellen bepaalde functies van onze website te gebruiken.</p><p>Zonder deze cookies kunnen we u bepaalde diensten op onze website niet aanbieden.</p>","title":"Strikt noodzakelijke cookies"},"level_targeting":{"content":"<p>Deze cookies worden gebruikt om advertenties weer te geven die u waarschijnlijk interesseren op basis van uw surfgedrag.</p><p>Deze cookies, zoals aangeboden op basis van de inhoud van onze site en/of reclame aanbieders, kunnen informatie die ze van onze website hebben verzameld combineren met andere informatie die ze onafhankelijk hebben verzameld met betrekking tot de activiteiten van uw webbrowser via hun netwerk van websites.</p><p>Als u ervoor kiest deze targeting- of advertentiecookies te verwijderen of uit te schakelen, ziet u nog steeds advertenties, maar deze zijn mogelijk niet relevant voor u.</p>","title":"Targeting- en advertentie cookies"},"level_tracking":{"content":"<p>Deze cookies worden gebruikt om informatie te verzamelen om het verkeer naar onze website te analyseren en hoe bezoekers onze website gebruiken.</p><p>Deze cookies kunnen gegevens zoals hoe lang u op de website doorbrengt of de pagina\'s die u bezoekt, bijhouden. Dit helpt ons te begrijpen hoe we onze website voor u kunnen verbeteren.</p><p>Individuele bezoekers kunnen niet geÃ¯dentificeerd worden aan hand van de informatie in deze cookies.</p>","title":"Tracking- en prestatie cookies"},"preference_center":{"save":"Sla mijn voorkeuren op","title":"Cookie instellingen"},"preference_center_menu_and_content":{"more_information_content":"<h1>Meer informatie</h1><p>Voor vragen in verband met ons cookiebeleid en uw keuzes kan u ons contacteren.</p>","more_information_title":"Meer informatie","your_privacy_content":"<h1>Uw privacy is belangrijk voor ons</h1>\\n<p>Cookies zijn kleine tekstbestanden die bij het bezoeken van een website op uw computer worden opgeslagen. We gebruiken cookies voor verschillende doeleinden en om uw online ervaring op onze website te verbeteren (bijvoorbeeld om de inloggegevens voor uw account te onthouden).</p><p>U kunt uw voorkeuren wijzigen en bepaalde soorten cookies weigeren die op uw computer worden opgeslagen tijdens het browsen op onze website. U kunt ook alle cookies verwijderen die al op uw computer zijn opgeslagen, maar houd er rekening mee dat het verwijderen van cookies ertoe kan leiden dat u delen van onze website niet kunt gebruiken.</p>","your_privacy_title":"Jouw privacy"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Ativo","always_active":"Sempre ativo","change_settings":"Alterar as minhas preferÃªncias","find_out_more":"<p>Para obter mais detalhes, por favor consulte a nossa<a href=\'%s\' target=\'_blank\'>PolÃ­tica de Cookies</a>.</p>","i_agree_text":"Concordo","inactive":"Inativo","ok_text":"OK","text":"Utilizamos cookies e outras tecnologias de mediÃ§Ã£o para melhorar a sua experiÃªncia de navegaÃ§Ã£o no nosso site, de forma a mostrar conteÃºdo personalizado, anÃºncios direcionados, analisar o trÃ¡fego do site e entender de onde vÃªm os visitantes. Ao navegar no nosso site, concorda com o uso de cookies e outras tecnologias de mediÃ§Ã£o.<br/>","title":"O nosso site usa cookies"},"level_functionality":{"content":"<p>Estes cookies sÃ£o usados â€‹â€‹para fornecer uma experiÃªncia mais personalizada no nosso site e para lembrar as escolhas que faz ao usar o nosso site.</p><p>Por exemplo, podemos usar cookies de funcionalidade para se lembrar das suas preferÃªncias de idioma e/ ou os seus detalhes de login.</p>","title":"Cookies de funcionalidade"},"level_strictly_necessary":{"content":"<p>Estes cookies sÃ£o essenciais para fornecer serviÃ§os disponÃ­veis no nosso site e permitir que possa usar determinados recursos no nosso site.</p><p>Sem estes cookies, nÃ£o podemos fornecer certos serviÃ§os no nosso site.</p>","title":"Cookies estritamente necessÃ¡rios"},"level_targeting":{"content":"<p>Estes cookies sÃ£o usados â€‹â€‹para mostrar publicidade que provavelmente lhe pode interessar com base nos seus hÃ¡bitos e comportamentos de navegaÃ§Ã£o.</p><p>Estes cookies, servidos pelo nosso conteÃºdo e/ ou fornecedores de publicidade, podem combinar as informaÃ§Ãµes coletadas no nosso site com outras informaÃ§Ãµes coletadas independentemente relacionadas com as atividades na rede de sites do seu navegador.</p><p>Se optar por remover ou desativar estes cookies de segmentaÃ§Ã£o ou publicidade, ainda verÃ¡ anÃºncios, mas estes poderÃ£o nÃ£o ser relevantes para si.</p>","title":"Cookies de segmentaÃ§Ã£o e publicidade"},"level_tracking":{"content":"<p>Estes cookies sÃ£o usados â€‹â€‹para coletar informaÃ§Ãµes para analisar o trÃ¡fego no nosso site e entender como Ã© que os visitantes estÃ£o a usar o nosso site.</p><p>Por exemplo, estes cookies podem medir fatores como o tempo despendido no site ou as pÃ¡ginas visitadas, isto vai permitir entender como podemos melhorar o nosso site para os utilizadores.</p><p>As informaÃ§Ãµes coletadas por meio destes cookies de mediÃ§Ã£o e desempenho nÃ£o identificam nenhum visitante individual.</p>","title":"Cookies de mediÃ§Ã£o e desempenho"},"preference_center":{"save":"Guardar as minhas preferÃªncias","title":"Centro de preferÃªncias de cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mais InformaÃ§Ãµes</h1><p>Para qualquer dÃºvida sobre a nossa polÃ­tica de cookies e as suas opÃ§Ãµes, entre em contato connosco.</p>","more_information_title":"Mais InformaÃ§Ãµes","your_privacy_content":"<h1>A sua privacidade Ã© importante para nÃ³s.</h1>\\n<p>Cookies sÃ£o pequenos arquivos de texto que sÃ£o armazenados no seu computador quando visita um site. Utilizamos cookies para diversos fins e para aprimorar sua experiÃªncia no nosso site (por exemplo, para se lembrar dos detalhes de login da sua conta).</p><p>Pode alterar as suas preferÃªncias e recusar o armazenamento de certos tipos de cookies no seu computador enquanto navega no nosso site. Pode tambÃ©m remover todos os cookies jÃ¡ armazenados no seu computador, mas lembre-se de que a exclusÃ£o de cookies pode impedir o uso de determinadas Ã¡reas no nosso site.</p>","your_privacy_title":"A sua privacidade"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"AktÃ­v","always_active":"Mindig aktÃ­v","change_settings":"BeÃ¡llÃ­tÃ¡sok megvÃ¡ltoztatÃ¡sa","find_out_more":"<p>Ha tÃ¶bbet szeretne megtudni, kÃ©rjÃ¼k, keresse fel a <a href=\'%s\' target=\'_blank\'>sÃ¼tikre vonatkozÃ³ irÃ¡nyelveinket</a>.</p>","i_agree_text":"Elfogadom","inactive":"InaktÃ­v","ok_text":"OK","text":"Az oldal sÃ¼tiket Ã©s egyÃ©b nyomkÃ¶vetÅ‘ technolÃ³giÃ¡kat alkalmaz, hogy javÃ­tsa a bÃ¶ngÃ©szÃ©si Ã©lmÃ©nyÃ©t, azzal hogy szemÃ©lyre szabott tartalmakat Ã©s cÃ©lzott hirdetÃ©seket jelenÃ­t meg, Ã©s elemzi a weboldalunk forgalmÃ¡t, hogy megtudjuk honnan Ã©rkeztek a lÃ¡togatÃ³ink. Weboldalunk bÃ¶ngÃ©szÃ©sÃ©vel hozzÃ¡jÃ¡rul a sÃ¼tik Ã©s mÃ¡s nyomkÃ¶vetÅ‘ technolÃ³giÃ¡k hasznÃ¡latÃ¡hoz.<br/>","title":"Az oldal sÃ¼tiket hasznÃ¡l"},"level_functionality":{"content":"<p>Ezeket a sÃ¼tiket arra hasznÃ¡ljuk, hogy szemÃ©lyre szabottabb Ã©lmÃ©nyt nyÃºjtsunk weboldalunkon, Ã©s hogy az oldal rÃ¶gzÃ­tse a webhelyÃ¼nk hasznÃ¡lata sorÃ¡n tett dÃ¶ntÃ©seket.</p><p>PÃ©ldÃ¡ul arra hasznÃ¡lhatunk funkcionÃ¡lis sÃ¼tiket, hogy emlÃ©kezzÃ¼nk a nyelvi beÃ¡llÃ­tÃ¡sokra, vagy a bejelentkezÃ©si adataira.</p>","title":"FunkcionÃ¡lis sÃ¼tik"},"level_strictly_necessary":{"content":"<p>Ezek a sÃ¼tik elengedhetetlenek a weboldalunkon elÃ©rhetÅ‘ szolgÃ¡ltatÃ¡sok nyÃºjtÃ¡sÃ¡hoz, valamint weboldalunk bizonyos funkciÃ³inak hasznÃ¡latÃ¡hoz.</p><p>A feltÃ©tlenÃ¼l szÃ¼ksÃ©ges sÃ¼tik hasznÃ¡lata nÃ©lkÃ¼l weboldalunkon nem tudunk bizonyos szolgÃ¡ltatÃ¡sokat nyÃºjtani Ã–nnek.</p>","title":"FeltÃ©tlenÃ¼l szÃ¼ksÃ©ges sÃ¼tik"},"level_targeting":{"content":"<p>Ezeket a sÃ¼tiket olyan hirdetÃ©sek megjelenÃ­tÃ©sÃ©re hasznÃ¡ljuk, amelyek valÃ³szÃ­nÅ±leg Ã©rdekli Ã–nt a bÃ¶ngÃ©szÃ©si szokÃ¡sai alapjÃ¡n.</p><p>Ezek a sÃ¼tik, amelyeket a tartalom Ã©s / vagy a reklÃ¡mszolgÃ¡ltatÃ³k szolgÃ¡ltatnak, egyesÃ­thetik a weboldalunktÃ³l gyÅ±jtÃ¶tt informÃ¡ciÃ³kat mÃ¡s informÃ¡ciÃ³kkal, amelyeket Ã¶nÃ¡llÃ³an Ã¶sszegyÅ±jtÃ¶ttek az Ã–n bÃ¶ngÃ©szÅ‘jÃ©nek tevÃ©kenysÃ©geivel kapcsolatban a webhely-hÃ¡lÃ³zaton keresztÃ¼l.</p><p>Ha Ã–n Ãºgy dÃ¶nt, hogy eltÃ¡volÃ­tja vagy letiltja ezeket a cÃ©lirÃ¡nyos vagy hirdetÃ©si sÃ¼tiket, akkor is lÃ¡tni fogja a hirdetÃ©seket, de lehet, hogy nem lesznek relevÃ¡nsak az Ã–n szÃ¡mÃ¡ra.</p>","title":"CÃ©lirÃ¡nyos Ã©s hirdetÃ©si sÃ¼tik"},"level_tracking":{"content":"<p>Ezeket a sÃ¼tiket arra hasznÃ¡ljuk, hogy informÃ¡ciÃ³kat gyÅ±jtsÃ¼nk weboldalunk forgalmÃ¡rÃ³l Ã©s lÃ¡togatÃ³irÃ³l, webhelyÃ¼nk hasznÃ¡latÃ¡nak elemzÃ©sÃ©hez.</p><p>PÃ©ldÃ¡ul ezek a sÃ¼tik nyomon kÃ¶vethetik a webhelyen tÃ¶ltÃ¶tt idÅ‘t vagy a meglÃ¡togatott oldalakat, amely segÃ­t megÃ©rteni, hogyan javÃ­thatjuk webhelyÃ¼nket az Ã–n nagyobb megelÃ©gedettsÃ©gÃ©re.</p><p>Ezekkel a nyomkÃ¶vetÅ‘ Ã©s teljesÃ­tmÃ©nnyel kapcsolatos sÃ¼tikkel Ã¶sszegyÅ±jtÃ¶tt informÃ¡ciÃ³k egyetlen szemÃ©lyt sem azonosÃ­tanak.</p>","title":"KÃ¶vetÃ©si Ã©s teljesÃ­tmÃ©nnyel kapcsolatos sÃ¼tik"},"preference_center":{"save":"BeÃ¡llÃ­tÃ¡sok mentÃ©se","title":"SÃ¼tikre beÃ¡llÃ­tÃ¡si kÃ¶zpont"},"preference_center_menu_and_content":{"more_information_content":"<h1>EgyÃ©b informÃ¡ciÃ³k</h1><p>A sÃ¼tikre vonatkozÃ³ irÃ¡nyelveinkkel Ã©s az Ã–n vÃ¡lasztÃ¡sÃ¡val kapcsolatosan felmerÃ¼lÅ‘ bÃ¡rmilyen kÃ©rdÃ©sÃ©vel keressen meg bennÃ¼nket.</p>","more_information_title":"EgyÃ©b informÃ¡ciÃ³k","your_privacy_content":"<h1>Az Ã¶n adatainak vÃ©delem fontos szÃ¡munkra</h1>\\n<p>A sÃ¼tik egÃ©szen kicsi szÃ¶veges fÃ¡jlok, amelyeket a szÃ¡mÃ­tÃ³gÃ©pÃ©n tÃ¡rolnak, amikor meglÃ¡togat egy weboldalt. SÃ¼tiket hasznÃ¡lunk kÃ¼lÃ¶nfÃ©le cÃ©lokra, Ã©s weboldalunkon az online Ã©lmÃ©ny fokozÃ¡sa Ã©rdekÃ©ben (pÃ©ldÃ¡ul a fiÃ³kjÃ¡nak bejelentkezÃ©si adatainak megjegyzÃ©sÃ©re).</p><p>WebhelyÃ¼nk bÃ¶ngÃ©szÃ©se kÃ¶zben megvÃ¡ltoztathatja a beÃ¡llÃ­tÃ¡sait, Ã©s elutasÃ­thatja a szÃ¡mÃ­tÃ³gÃ©pÃ©n tÃ¡rolni kÃ­vÃ¡nt bizonyos tÃ­pusÃº sÃ¼tik hasznÃ¡latÃ¡t. A szÃ¡mÃ­tÃ³gÃ©pen mÃ¡r tÃ¡rolt sÃ¼tiket eltÃ¡volÃ­thatja, de ne feledje, hogy a sÃ¼tik tÃ¶rlÃ©se megakadÃ¡lyozhatja weboldalunk egyes rÃ©szeinek hasznÃ¡latÃ¡t.</p>","your_privacy_title":"Az Ã¶n adatai vÃ©delme"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Aktivno","always_active":"Uvijek aktivno","change_settings":"Promjeni moje postavke","find_out_more":"<p>Da bi saznali viÅ¡e, posjetite naÅ¡a <a href=\'%s\' target=\'_blank\'>Pravila o kolaÄiÄ‡ima</a>.</p>","i_agree_text":"SlaÅ¾em se","inactive":"Neaktivno","ok_text":"OK","text":"Koristimo kolaÄiÄ‡e i druge tehnologije praÄ‡enja da bismo poboljÅ¡ali vaÅ¡e korisniÄko iskustvo na naÅ¡oj web stranici, kako bismo vam prikazali personalizirani sadrÅ¾aj i ciljane oglase, analizirali promet na naÅ¡oj web stranici i razumjeli odakle dolaze naÅ¡i posjetitelji. Pregledavanjem naÅ¡e web stranice pristajete na naÅ¡u upotrebu kolaÄiÄ‡a i drugih tehnologija praÄ‡enja.<br/>","title":"Mi koristimo kolaÄiÄ‡e"},"level_functionality":{"content":"<p>Ovi se kolaÄiÄ‡i koriste kako bi vam pruÅ¾ili personalizirano korisniÄko iskustvo na naÅ¡oj web stranici i za pamÄ‡enje izbora koje napravite kada koristite naÅ¡u web stranicu.</p><p>Na primjer, moÅ¾emo koristiti kolaÄiÄ‡e funkcionalnosti da bismo zapamtili vaÅ¡e jeziÄne postavke ili upamtili vaÅ¡e podatke za prijavu.</p>","title":"KolaÄiÄ‡i funkcionalnosti"},"level_strictly_necessary":{"content":"<p>Ovi su kolaÄiÄ‡i neophodni za pruÅ¾anje usluga dostupnih putem naÅ¡e web stranice i omoguÄ‡avanje koriÅ¡tenja odreÄ‘enih znaÄajki naÅ¡e web stranice.</p><p>Bez ovih kolaÄiÄ‡a ne moÅ¾emo vam pruÅ¾iti odreÄ‘ene usluge na naÅ¡oj web stranici.</p>","title":"Strogo potrebni kolaÄiÄ‡i"},"level_targeting":{"content":"<p>Ovi se kolaÄiÄ‡i koriste za prikazivanje oglasa koji bi vas mogli zanimati na temelju vaÅ¡ih navika pregledavanja web stranica.</p><p>Ovi kolaÄiÄ‡i, posluÅ¾eni od naÅ¡ih pruÅ¾atelja sadrÅ¾aja i / ili oglaÅ¡avanja, mogu kombinirati podatke koje su prikupili s naÅ¡e web stranice s drugim podacima koje su neovisno prikupili, a odnose se na aktivnosti vaÅ¡eg web preglednika kroz njihovu mreÅ¾u web stranica.</p><p>Ako odluÄite ukloniti ili onemoguÄ‡iti ove kolaÄiÄ‡e za ciljano oglaÅ¡avanje, i dalje Ä‡ete vidjeti oglase, ali oni moÅ¾da nisu relevantni za vas.</p>","title":"KolaÄiÄ‡i za ciljano oglaÅ¡avanje"},"level_tracking":{"content":"<p>Ovi se kolaÄiÄ‡i koriste za prikupljanje podataka za analizu prometa na naÅ¡oj web stranici i za informaciju kako posjetitelji koriste naÅ¡u web stranicu.</p><p>Na primjer, ti kolaÄiÄ‡i mogu pratiti stvari poput dugovanja na web stranici ili stranicama koje posjetite Å¡to nam pomaÅ¾e da shvatimo kako moÅ¾emo poboljÅ¡ati vaÅ¡e korisniÄko iskustvo na naÅ¡oj web stranici.</p><p>Informacije prikupljene ovim praÄ‡enjem i kolaÄiÄ‡i izvedbe ne identificiraju nijednog pojedinaÄnog posjetitelja.</p>","title":"KolaÄiÄ‡i za praÄ‡enje i performanse"},"preference_center":{"save":"Spremi moje postavke","title":"Centar za postavke kolaÄiÄ‡a"},"preference_center_menu_and_content":{"more_information_content":"<h1>ViÅ¡e informacija</h1><p>Za sve upite vezane uz naÅ¡a pravila o kolaÄiÄ‡ima i vaÅ¡im izborima, molimo da nas kontaktirate.</p>","more_information_title":"ViÅ¡e informacija","your_privacy_content":"<h1>VaÅ¡a privatnost nam je vaÅ¾na</h1>\\n<p>KolaÄiÄ‡i su vrlo male tekstualne datoteke koje se pohranjuju na vaÅ¡em raÄunalu kada posjetite web stranicu. Mi koristimo kolaÄiÄ‡e za razliÄite svrhe i za poboljÅ¡anje vaÅ¡eg mreÅ¾nog iskustva na naÅ¡oj web stranici (na primjer, za pamÄ‡enje podataka za prijavu na vaÅ¡ korisniÄki raÄun).</p><p>MoÅ¾ete promijeniti svoje postavke i odbiti odreÄ‘ene vrste kolaÄiÄ‡a koji Ä‡e se pohraniti na vaÅ¡em raÄunalu tijekom pregledavanja naÅ¡e web stranice. TakoÄ‘er moÅ¾ete ukloniti sve kolaÄiÄ‡e koji su veÄ‡ pohranjeni na vaÅ¡em raÄunalu, ali imajte na umu da vas brisanje kolaÄiÄ‡a moÅ¾e sprijeÄiti da koristite dijelove naÅ¡e web stranice.</p>","your_privacy_title":"VaÅ¡a privatnost"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Aktiv","always_active":"Altid aktiv","change_settings":"Skift indstillinger","find_out_more":"<p>For at finde ud af mere, sÃ¥ lÃ¦s venligst vores <a href=\'%s\' target=\'_blank\'>Cookie politik</a>.</p>","i_agree_text":"Jeg accepterer","inactive":"Inaktiv","ok_text":"OK","text":"Vi bruger cookies og andre tracking teknologier for at forbedre din oplevelse pÃ¥ vores website, til at vise personaliseret indhold, mÃ¥lrettede annoncer og til at forstÃ¥ hvor vores besÃ¸gende kommer fra. Du samtykker til brugen af vores cookies og andre tracking teknologier hvis du fortsÃ¦tter med at bruge vores website.\\n<br/>","title":"Vi bruger cookies"},"level_functionality":{"content":"<p>Disse cookies anvendes for at kunne give dig en personaliseret oplevelse af vores hjemmeside, og for at kunne huske valg du har truffet.</p><p>Eksempelvis kan vi bruge funktions cookies til at huske sprog-indstillinger eller dine login informationer.</p>","title":"Funktions cookies"},"level_strictly_necessary":{"content":"<p>Disse Cookies er essentielle for at du kan bruge vores hjemmeside.</p><p>Uden disse cookies kan vi ikke garantere vores hjemmeside virker ordentligt.</p>","title":"NÃ¸dvendige cookies"},"level_targeting":{"content":"<p>Disse cookies anvendes for at kunne vise annoncer, som sandsynligvis er interessante for dig, baseret pÃ¥ dine browser profil.</p><p>Disse cookies, som sÃ¦ttes af vores indhold og/eller annoncepartnere, kan kombinere information fra flere hjemmesider i hele det netvÃ¦rk som partnerne styrer.</p><p>Hvis du deaktiverer denne indstilling vil du fortsat se reklamer, men de vil ikke lÃ¦ngere vÃ¦re mÃ¥lrettet til dig.</p>","title":"MÃ¥lretning og annoncecookies"},"level_tracking":{"content":"<p>Disse cookies anvendes til at analysere besÃ¸g pÃ¥ vores hjemmeside, og hvordan du bruger vores hjemmeside.</p><p>Eksempelvis kan vi tracke hvor lang tid du bruger hjemmesiden, eller hvilke sider du kigger pÃ¥. Det hjÃ¦lper os til at forstÃ¥ hvordan vi kan forbedre hjemmesiden.</p><p>Informationerne kan ikke identificere dig som individ og er derfor anonyme.</p>","title":"Tracking og performance cookies"},"preference_center":{"save":"Gem mine indstillinger","title":"Cookie indstillinger"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mere information</h1><p>Har du spÃ¸rgsmÃ¥l vedr. vores cookiepolitik og dine valgmuligheder, sÃ¥ kontakt os venligst.</p>","more_information_title":"Mere information","your_privacy_content":"<h1>Dit privatliv er vigtigt for os</h1>\\n<p>Cookies er en lille tekstfil, som gemmes pÃ¥ din computer, nÃ¥r du besÃ¸ger et website. Vi bruger cookies til en rÃ¦kke formÃ¥l, og for at forbedre din oplevelse pÃ¥ vores website (eksempelvis for at huske dine login oplysninger).</p><p>Du kan Ã¦ndre dine indstillinger og afvise forskellige typer cookies, som gemmes pÃ¥ din computer, nÃ¥r du besÃ¸ger vores website. Du kan ogsÃ¥ fjerne cookies som allerede er gemt pÃ¥ din computer, men bemÃ¦rk venligst at sletning af cookies kan betyde der er dele af hjemmesiden som ikke virker.</p>","your_privacy_title":"Dit privatliv"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Active","always_active":"ÃŽntotdeauna active","change_settings":"Vreau sÄƒ schimb setÄƒrile","find_out_more":"<p>Pentru a afla mai multe, te rugÄƒm sÄƒ citeÈ™ti <a href=\'%s\' target=\'_blank\'>Politica noastrÄƒ de Cookie-uri</a>.</p>","i_agree_text":"Sunt de acord","inactive":"Inactive","ok_text":"OK","text":"Folosim cookie-uri È™i alte tehnologii de urmÄƒrire pentru a Ã®mbunÄƒtÄƒÈ›i experienÈ›a ta de navigare pe website-ul nostru, pentru afiÈ™a conÈ›inut È™i reclame personalizate, pentru a analiza traficul de pe website-ul nostru È™i pentru a Ã®nÈ›elege de unde vin vizitatorii noÈ™tri. NavigÃ¢nd pe website-ul nostru, eÈ™ti de acord cu utilizarea cookie-urilor, cÃ¢t È™i a altor metode de urmÄƒrire folosite.<br/>","title":"Folosim cookie-uri"},"level_functionality":{"content":"<p>Aceste cookie-uri sunt folosite pentru a-È›i asigura o experienÈ›Äƒ personalizatÄƒ pe website-ul nostru È™i pentru salvarea alegerilor pe care le faci cÃ¢nd foloseÈ™ti website-ul nostru.</p><p>De exemplu, putem folosi cookie-uri funcÈ›ionale pentru a salva preferinÈ›ele tale legate de limba website-ului nostru sau datele de logare.</p>","title":"Cookie-uri funcÈ›ionale"},"level_strictly_necessary":{"content":"<p>Aceste cookie-uri sunt esenÈ›iale pentru a putea beneficia de serviciile disponibile pe website-ul nostru.</p><p>FÄƒrÄƒ aceste cookie-uri nu poÈ›i folosi anumite funcÈ›ionalitÄƒÈ›i ale website-ului nostru.</p>","title":"Cookie-uri strict necesare"},"level_targeting":{"content":"<p>Aceste cookie-uri sunt folosite pentru a-È›i afiÈ™a reclame cÃ¢t mai pe interesul tÄƒu, Ã®n funcÈ›ie de obiceiurile tale de navigare.</p><p>Aceste cookie-uri, aÈ™a cum sunt afiÈ™ate de furnizori noÈ™tri de conÈ›inut È™i/sau publicitate, pot combina informaÈ›ii de pe website-ul nostru cu alte informaÈ›ii pe care furnizori noÈ™tri le-au colectat Ã®n mod independent cu privire la activitatea ta Ã®n reÈ›eaua lor de website-uri.</p><p>DacÄƒ alegi sÄƒ È™tergi sau sÄƒ dezactivezi aceste cookie-uri tot vei vedea reclame, dar se poate ca aceste reclame sÄƒ nu fie relevante pentru tine.</p>","title":"Cookie-uri pentru marketing È™i publicitate"},"level_tracking":{"content":"<p>Acest tip de cookie-uri sunt folosite pentru a colecta informaÈ›ii Ã®n vederea analizÄƒrii traficului pe website-ul nostru È™i modul Ã®n care vizitatorii noÈ™tri folosesc website-ul.</p><p>De exemplu, aceste cookie-uri pot urmÄƒri cÃ¢t timp petreci pe website sau paginile pe care le vizitezi, ceea ce ne ajutÄƒ sÄƒ Ã®nÈ›elegem cum putem Ã®mbunÄƒtÄƒÈ›i website-ul pentru tine.</p><p>InformaÈ›iile astfel colectate nu identificÄƒ individual vizitatorii.</p>","title":"Cookie-uri de analizÄƒ È™i performanÈ›Äƒ"},"preference_center":{"save":"SalveazÄƒ","title":"PreferinÈ›e pentru Cookie-uri"},"preference_center_menu_and_content":{"more_information_content":"<h1>Mai multe informaÈ›ii</h1><p>Pentru mai multe informaÈ›ii cu privire la politica noastrÄƒ de cookie-uri È™i preferinÈ›ele tale, te rugÄƒm sÄƒ ne contactezi.</p>","more_information_title":"Mai multe informaÈ›ii","your_privacy_content":"<h1>ConfidenÈ›ialitatea ta este importantÄƒ pentru noi</h1>\\n<p>Cookie-urile sunt fiÈ™iere text foarte mici ce sunt salvate Ã®n browser-ul tÄƒu atunci cÃ¢nd vizitezi un website. Folosim cookie-uri pentru mai multe scopuri, dar È™i pentru a Ã®È›i oferi cea mai bunÄƒ experienÈ›Äƒ de utilizare posibilÄƒ (de exemplu, sÄƒ reÈ›inem datele tale de logare Ã®n cont).</p><p>ÃŽÈ›i poÈ›i modifica preferinÈ›ele È™i poÈ›i refuza ca anumite tipuri de cookie-uri sÄƒ nu fie salvate Ã®n browser Ã®n timp ce navigezi pe website-ul nostru. Deasemenea poÈ›i È™terge cookie-urile salvate deja Ã®n browser, dar reÈ›ine cÄƒ este posibil sÄƒ nu poÈ›i folosi anumite pÄƒrÈ›i ale website-ul nostru Ã®n acest caz.</p>","your_privacy_title":"ConfidenÈ›ialitatea ta"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Aktivni","always_active":"Vedno aktivni","change_settings":"Spremeni moje nastavitve","find_out_more":"<p>Za veÄ informacij si prosim oglejte naÅ¡ <a href=\'%s\' target=\'_blank\'>Pravilnik o piÅ¡kotkih</a>.</p>","i_agree_text":"Se strinjam","inactive":"Neaktivni","ok_text":"V redu","text":"PiÅ¡kotke in druge sledilne tehnologije uporabljamo za izboljÅ¡anje vaÅ¡e uporabniÅ¡ke izkuÅ¡nje med brskanjem po naÅ¡i spletni strani, za  prikazovanje personaliziranih vsebin oz. targetiranih oglasov, za analizo obiskov naÅ¡e spletne strani in za vpogled v to, iz kje prihajajo naÅ¡i gostje. Z brskanjem po naÅ¡i spletni strani soglaÅ¡ate z naÅ¡o rabo piÅ¡kotkov in drugih sledilnih tehnologij.<br/>","title":"Uporabljamo piÅ¡kotke"},"level_functionality":{"content":"<p>Ti piÅ¡kotki se uporabljajo za zagotavljanje bolj personalizirane izkuÅ¡nje na naÅ¡i spletni strani in za shranjevanje vaÅ¡ih odloÄitev ob uporabi naÅ¡e spletne strani.</p><p>Funkcionalne piÅ¡kotke lahko, na primer, uporabljamo za to, da si zapomnimo vaÅ¡e jezikovne nastavitve oz. podatke za vpis v vaÅ¡ raÄun.</p>","title":"Funkcionalni piÅ¡kotki (ang. functionality cookies)"},"level_strictly_necessary":{"content":"<p>Ti piÅ¡kotki so kljuÄnega pomena pri zagotavljanju storitev, ki so na voljo na naÅ¡i spletni strani, in pri omogoÄanju doloÄenih funkcionalnosti naÅ¡e spletne strani.</p><p>Brez teh piÅ¡kotkov vam ne moremo zagotoviti doloÄenih storitev na naÅ¡i spletni strani.</p>","title":"Nujno potrebni piÅ¡kotki (ang. strictly necessary cookies)"},"level_targeting":{"content":"<p>Ti piÅ¡kotki se uporabljajo za prikazovanje spletnih oglasov, ki vas bodo na podlagi vaÅ¡ih navad pri brskanju verjetno zanimali.</p><p>Ti piÅ¡kotki, ki jih uporabljajo naÅ¡i oglaÅ¡evalski ponudniki oz. ponudniki vsebine, lahko zdruÅ¾ujejo podatke, ki so jih zbrali na naÅ¡i spletni strani, z drugimi podatki, ki so jih zbrali neodvisno v povezavi z dejavnostmi vaÅ¡ega spletnega brskalnika na njihovi mreÅ¾i spletnih mest.</p><p>ÄŒe se odloÄite izbrisati oz. onemogoÄiti te ciljne in oglaÅ¡evalske piÅ¡kotke, boste Å¡e vedno videvali oglase, vendar ti morda ne bodo relevantni za vas.</p>","title":"Ciljni in oglaÅ¡evalski piÅ¡kotki (ang. targeting and advertising cookies)"},"level_tracking":{"content":"<p>Ti piÅ¡kotki se uporabljajo za zbiranje podatkov za analizo obiskov naÅ¡e spletne strani in vpogled v to, kako gostje uporabljajo naÅ¡o spletno stran.</p><p>Ti piÅ¡kotki lahko, na primer, spremljajo stvari kot so to, koliko Äasa preÅ¾ivite na naÅ¡i spletni strani oz. katere strani obiÅ¡Äete, kar nam pomaga pri razumevanju, kako lahko za vas izboljÅ¡amo spletno stran.</p><p>Podatki, ki jih zbirajo ti piÅ¡kotki, ne identificirajo nobenega posameznega uporabnika.</p>","title":"Sledilni in izvedbeni piÅ¡kotki (ang. tracking and performance cookies)"},"preference_center":{"save":"Shrani moje nastavitve","title":"Nastavitve piÅ¡kotkov"},"preference_center_menu_and_content":{"more_information_content":"<h1>VeÄ informacij</h1><p>ÄŒe imate kakrÅ¡nakoli vpraÅ¡anja v zvezi z naÅ¡im pravilnikom o piÅ¡kotkih in vaÅ¡ih izbirah, nas prosim kontaktirajte.</p>","more_information_title":"VeÄ informacij","your_privacy_content":"<h1>Cenimo vaÅ¡o zasebnost</h1>\\n<p>PiÅ¡kotki so majhne besedilne datoteke, ki se shranijo na vaÅ¡o napravo ob obisku spletne strani. PiÅ¡kotke uporabljamo v veÄ namenov, predvsem pa za izboljÅ¡anje vaÅ¡e spletne izkuÅ¡nje na naÅ¡i strani (na primer za shranjevanje podatkov ob vpisu v vaÅ¡ raÄun).</p><p>VaÅ¡e nastavitve lahko spremenite in onemogoÄite doloÄenim vrstam piÅ¡kotkov, da bi se shranili na vaÅ¡o napravo med brskanjem po naÅ¡i spletni strani. Poleg tega lahko odstranite katerekoli piÅ¡kotke, ki so Å¾e shranjeni v vaÅ¡i napravi, a upoÅ¡tevajte, da vam bo po izbrisu piÅ¡kotkov morda onemogoÄeno uporabljati dele naÅ¡e spletne strani.</p>","your_privacy_title":"VaÅ¡a zasebnost"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Aktywne","always_active":"Zawsze aktywne","change_settings":"Zmiana ustawieÅ„","find_out_more":"<p>Aby dowiedzieÄ‡ siÄ™ wiÄ™cej, odwiedÅº naszÄ… <a href=\'%s\' target=\'_blank\'>PolitykÄ™ Cookie (PrywatnoÅ›ci)</a>.</p>","i_agree_text":"Zgoda","inactive":"Nieaktywne","ok_text":"OK","text":"UÅ¼ywamy plikÃ³w cookie i innych technologii Å›ledzenia, aby poprawiÄ‡ jakoÅ›Ä‡ przeglÄ…dania naszej witryny, wyÅ›wietlaÄ‡ spersonalizowane treÅ›ci i reklamy, analizowaÄ‡ ruch w naszej witrynie i wiedzieÄ‡, skÄ…d pochodzÄ… nasi uÅ¼ytkownicy. PrzeglÄ…dajÄ…c naszÄ… stronÄ™, wyraÅ¼asz zgodÄ™ na uÅ¼ywanie przez nas plikÃ³w cookie i innych technologii Å›ledzenia.<br/>","title":"UÅ¼ywamy pliki cookie"},"level_functionality":{"content":"<p>Te pliki cookie sÅ‚uÅ¼Ä… do bardziej spersonalizowanego korzystania z naszej strony internetowej i do zapamiÄ™tywania wyborÃ³w dokonywanych podczas korzystania z naszej strony internetowej.</p><p>Na przykÅ‚ad moÅ¼emy uÅ¼ywaÄ‡ funkcjonalnych plikÃ³w cookie do zapamiÄ™tywania preferencji jÄ™zykowych lub zapamiÄ™tywania danych logowania.</p>","title":"Funkcjonalne"},"level_strictly_necessary":{"content":"<p>Te pliki cookie sÄ… niezbÄ™dne do Å›wiadczenia usÅ‚ug dostÄ™pnych za poÅ›rednictwem naszej strony internetowej i umoÅ¼liwienia korzystania z niektÃ³rych funkcji naszej strony internetowej.</p><p>Bez tych plikÃ³w cookie nie moÅ¼emy zapewniÄ‡ usÅ‚ug na naszej stronie internetowej.</p>","title":"NiezbÄ™dne"},"level_targeting":{"content":"<p>Te pliki cookie sÅ‚uÅ¼Ä… do wyÅ›wietlania reklam, ktÃ³re mogÄ… CiÄ™ zainteresowaÄ‡ na podstawie Twoich zwyczajÃ³w przeglÄ…dania.</p><p>Pliki te tworzone przez naszych dostawcÃ³w treÅ›ci i/lub reklam, mogÄ… Å‚Ä…czyÄ‡ informacje zebrane z naszej strony z innymi informacjami, ktÃ³re gromadzili niezaleÅ¼nie w zwiÄ…zku z dziaÅ‚aniami przeglÄ…darki internetowej w ich sieci witryn.</p><p>JeÅ›li zdecydujesz siÄ™ usunÄ…Ä‡ lub wyÅ‚Ä…czyÄ‡ te pliki cookie, reklamy nadal bÄ™dÄ… wyÅ›wietlane, ale mogÄ… one nie byÄ‡ odpowiednie dla Ciebie.</p>","title":"Targeting i reklama"},"level_tracking":{"content":"<p>Te pliki cookie sÅ‚uÅ¼Ä… do zbierania informacji w celu analizy ruchu na naszej stronie internetowej i sposobu, w jaki uÅ¼ytkownicy korzystajÄ… z naszej strony internetowej.</p><p>Na przykÅ‚ad te pliki cookie mogÄ… Å›ledziÄ‡ takie rzeczy, jak czas spÄ™dzony na stronie lub odwiedzane strony, co pomaga nam zrozumieÄ‡, w jaki sposÃ³b moÅ¼emy ulepszyÄ‡ naszÄ… witrynÄ™ internetowÄ….</p><p>Informacje zebrane przez te pliki nie identyfikujÄ… Å¼adnego konkretnego uÅ¼ytkownika.</p>","title":"Åšledzenie i wydajnoÅ›Ä‡"},"preference_center":{"save":"Zapisz ustawienia","title":"Centrum ustawieÅ„ cookie"},"preference_center_menu_and_content":{"more_information_content":"<h1>WiÄ™cej informacji</h1><p>W przypadku jakichkolwiek pytaÅ„ dotyczÄ…cych naszej polityki dotyczÄ…cej plikÃ³w cookie i Twoich wyborÃ³w, skontaktuj siÄ™ z nami.</p>","more_information_title":"WiÄ™cej informacji","your_privacy_content":"<h1>Twoja prywatnoÅ›Ä‡ jest dla nas waÅ¼na.</h1>\\n<p>Pliki cookie to bardzo maÅ‚e pliki tekstowe, ktÃ³re sÄ… tworzone i przechowywane na komputerze uÅ¼ytkownika podczas odwiedzania strony internetowej. UÅ¼ywamy plikÃ³w cookie do rÃ³Å¼nych celÃ³w, w tym do ulepszania obsÅ‚ugi online na naszej stronie internetowej (na przykÅ‚ad, aby zapamiÄ™taÄ‡ dane logowania do konta).</p><p>MoÅ¼esz zmieniÄ‡ swoje ustawienia i odrzuciÄ‡ niektÃ³re rodzaje plikÃ³w cookie, ktÃ³re majÄ… byÄ‡ przechowywane na twoim komputerze podczas przeglÄ…dania naszej strony. MoÅ¼esz rÃ³wnieÅ¼ usunÄ…Ä‡ wszystkie pliki cookie juÅ¼ zapisane na komputerze, ale pamiÄ™taj, Å¼e usuniÄ™cie plikÃ³w cookie moÅ¼e uniemoÅ¼liwiÄ‡ korzystanie z czÄ™Å›ci naszej strony internetowej.</p>","your_privacy_title":"Twoja prywatnoÅ›Ä‡"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Aktivno","always_active":"Uvek aktivno","change_settings":"Promeni moja podeÅ¡avanja","find_out_more":"<p>Da saznate viÅ¡e, pogledajte naÅ¡u <a href=\'%s\' target=\'_blank\'>Politiku o KolaÄiÄ‡ima</a>.</p>","i_agree_text":"SlaÅ¾em se","inactive":"Neaktivno","ok_text":"OK","text":"Mi koristimo kolaÄiÄ‡e i ostale  tehnologije za praÄ‡enje kako bi unapredili vaÅ¡u pretragu na naÅ¡em veb sajtu, kako bi vam prikazali personalizovani sadrÅ¾aj i ciljane reklame, analizirali posete na naÅ¡em sajtu i razumeli odakle naÅ¡i posetioci sajta dolaze. Pregledanjem naÅ¡eg sajta, pristajete na koriÅ¡Ä‡enje kolaÄiÄ‡ i drugih tehnologija praÄ‡enja.<br/>","title":"Mi koristimo kolaÄiÄ‡e"},"level_functionality":{"content":"<p>Ovi kukiji koriste se za pruÅ¾anje personalizovanijeg iskustva na naÅ¡em veb sajtu i za pamÄ‡enje izbora koje koristite kada koristite naÅ¡u veb sajt.</p><p>Na primer, moÅ¾emo da koristimo kukije funkcionalnosti da bismo zapamtili vaÅ¡e jeziÄke postavke ili upamtili vaÅ¡e podatke za prijavu.</p>","title":"Funkcionalni kukiji"},"level_strictly_necessary":{"content":"<p>Ovi kukiji su neophodni za pruÅ¾anje usluga dostupnih putem naÅ¡eg veb sajta i za omoguÄ‡avanje koriÅ¡Ä‡enja odreÄ‘enih funkcija naÅ¡eg veb sajta.</p><p>Bez ovih kolaÄiÄ‡a ne moÅ¾emo vam pruÅ¾iti odreÄ‘ene usluge na naÅ¡em veb sajtu.</p>","title":"Obavezni kukiji"},"level_targeting":{"content":"<p>Ovi kukiji koriste se za prikazivanje reklama koje Ä‡e vas verovatno zanimati na osnovu vaÅ¡ih navika pregledavanja.</p><p>Ovi kukiji, opsluÅ¾eni od strane naÅ¡ih dobavljaÄa sadrÅ¾aja i / ili oglaÅ¡avanja, mogu kombinovati informacije koje su sakupili sa naÅ¡eg veb sajta sa drugim informacijama koje su nezavisno prikupili u vezi sa aktivnostima vaÅ¡eg veb pretraÅ¾ivaÄa kroz mreÅ¾u njihovih veb sajtova.</p><p>Ako odluÄite da uklonite ili onemoguÄ‡ite ove ciljane ili reklamne kukije i dalje Ä‡ete videti oglase, ali oni moÅ¾da neÄ‡e biti relevantni za vas.</p>","title":"Ciljanje i oglaÅ¡avanje kolaÄiÄ‡"},"level_tracking":{"content":"<p>Ovi kukiji koriste se za prikupljanje informacija za analizu saobraÄ‡aja na naÅ¡em veb sajtu i kako posetioci koriste naÅ¡ veb sajt.</p><p>Na primer, ovi kolaÄiÄ‡i mogu pratiti stvari poput vremena koliko provodite na veb lokaciji ili stranicama koje poseÄ‡ujete Å¡to nam pomaÅ¾e da shvatimo kako moÅ¾emo da poboljÅ¡amo naÅ¡ veb sajt.</p><p>Informacije prikupljene ovim kukijima za praÄ‡enje i performanse ne identifikuju nijednog pojedinaÄnog posetioca.</p>","title":"PraÄ‡enje i performanse kolaÄiÄ‡"},"preference_center":{"save":"SaÄuvaj moja podeÅ¡avanja","title":"Centar za podeÅ¡avanje kolaÄiÄ‡"},"preference_center_menu_and_content":{"more_information_content":"<h1>ViÅ¡e informacija</h1><p>Za bilo koje upite vezane za naÅ¡u politiku o kukijima i vaÅ¡im izbor, molimo vas kontaktirajte nas.</p>","more_information_title":"ViÅ¡e informacija","your_privacy_content":"<h1>VaÅ¡a privatnost je vaÅ¾na za nas</h1>\\n<p>Kukiji su veoma mali tekstualni fajlovi koji su saÄuvani na vaÅ¡em raÄunaru kada poseÄ‡ujete veb sajt. Mi koristimo kolaÄiÄ‡e za razliÄite namene i kako bi unapredili vaÅ¡e onlajn iskustvo na naÅ¡em veb sajtu (na primer, kako bi zapamtili vaÅ¡e pristupne podatke).</p><p>Vi moÅ¾ete promeniti vaÅ¡a podeÅ¡avanja i odbiti odreÄ‘enu vrstu kolaÄiÄ‡a koji Ä‡e biti saÄuvani na vaÅ¡em raÄunaru dok pregledate naÅ¡ veb sajt. TakoÄ‘e moÅ¾ete izbisati bilo koji kuki koji je veÄ‡ saÄuvan u vaÅ¡em raÄunaru, ali imajte na umu da brisanjem kolaÄiÄ‡ moÅ¾ete onemoguÄ‡iti pristup nekim delovima naÅ¡eg veb sajta.</p>","your_privacy_title":"VaÅ¡a privatnost"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Ð’ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ ÑÐ° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ","always_active":"Ð’Ð¸Ð½Ð°Ð³Ð¸ Ð² Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ ÑÐ° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ","change_settings":"ÐŸÑ€Ð¾Ð¼ÑÐ½Ð° Ð½Ð° Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð¸ÑÑ‚Ð° Ð¼Ð¸","find_out_more":"<p>Ð—Ð° Ð´Ð° Ð½Ð°ÑƒÑ‡Ð¸Ñ‚Ðµ Ð¿Ð¾Ð²ÐµÑ‡Ðµ, Ð¼Ð¾Ð»Ñ, Ð¿Ð¾ÑÐµÑ‚ÐµÑ‚Ðµ Ð½Ð°ÑˆÐ°Ñ‚Ð° <a href=\'%s\' target=\'_blank\'>ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð·Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸</a>.</p>","i_agree_text":"Ð¡ÑŠÐ³Ð»Ð°ÑÐµÐ½ ÑÑŠÐ¼","inactive":"ÐÐµÐ°ÐºÑ‚Ð¸Ð²Ð½Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸","ok_text":"Ð”Ð¾Ð±Ñ€Ðµ","text":"ÐÐ¸Ðµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð¸ Ð´Ñ€ÑƒÐ³Ð¸, Ð¿Ñ€Ð¾ÑÐ»ÐµÐ´ÑÐ²Ð°Ñ‰Ð¸, Ñ‚ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸Ð¸, Ð·Ð° Ð´Ð° Ð¿Ð¾Ð´Ð¾Ð±Ñ€Ð¸Ð¼ ÑÑŠÑ€Ñ„Ð¸Ñ€Ð°Ð½ÐµÑ‚Ð¾ Ð²Ð¸ Ð² Ð½Ð°ÑˆÐ¸Ñ ÑÐ°Ð¹Ñ‚, ÐºÐ°Ñ‚Ð¾ Ð²Ð¸ Ð¿Ð¾ÐºÐ°Ð¶ÐµÐ¼ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½Ð¾ ÑÑŠÐ´ÑŠÑ€Ð¶Ð°Ð½Ð¸Ðµ Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð¸, Ð´Ð° Ð°Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð¼Ðµ Ñ‚Ñ€Ð°Ñ„Ð¸ÐºÐ° Ð½Ð° Ð½Ð°ÑˆÐ¸Ñ ÑÐ°Ð¹Ñ‚ Ð¸ Ð´Ð° Ñ€Ð°Ð·Ð±ÐµÑ€ÐµÐ¼ Ð¾Ñ‚ÐºÑŠÐ´Ðµ Ð¸Ð´Ð²Ð°Ñ‚ Ð½Ð°ÑˆÐ¸Ñ‚Ðµ Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ»Ð¸. Ð Ð°Ð·Ð³Ð»ÐµÐ¶Ð´Ð°Ð¹ÐºÐ¸ Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚, Ð²Ð¸Ðµ ÑÐµ ÑÑŠÐ³Ð»Ð°ÑÑÐ²Ð°Ñ‚Ðµ Ñ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð½ÐµÑ‚Ð¾ Ð½Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð¸ Ð´Ñ€ÑƒÐ³Ð¸ Ñ‚ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸Ð¸ Ð·Ð° Ð¿Ñ€Ð¾ÑÐ»ÐµÐ´ÑÐ²Ð°Ð½Ðµ.<br/>","title":"ÐÐ¸Ðµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸"},"level_functionality":{"content":"<p>Ð¢ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ ÑÐµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚, Ð·Ð° Ð´Ð° Ð²Ð¸ Ð¾ÑÐ¸Ð³ÑƒÑ€ÑÑ‚ Ð¾Ñ‰Ðµ Ð¿Ð¾-Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð¸Ð·Ð¸Ñ€Ð°Ð½Ð¾ Ð¸Ð·Ð¶Ð¸Ð²ÑÐ²Ð°Ð½Ðµ Ð½Ð° Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚ Ð¸ Ð´Ð° Ð±ÑŠÐ´Ð°Ñ‚ Ð·Ð°Ð¿Ð¾Ð¼Ð½ÐµÐ½Ð¸ Ð¸Ð·Ð±Ð¾Ñ€Ð¸Ñ‚Ðµ, ÐºÐ¾Ð¸Ñ‚Ð¾ ÑÑ‚Ðµ Ð½Ð°Ð¿Ñ€Ð°Ð²Ð¸Ð»Ð¸, ÐºÐ¾Ð³Ð°Ñ‚Ð¾ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ…Ñ‚Ðµ Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚.</p><p>ÐÐ°Ð¿Ñ€Ð¸Ð¼ÐµÑ€: Ð¼Ð¾Ð¶Ðµ Ð´Ð° Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»Ð½Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸, Ð·Ð° Ð´Ð° Ð·Ð°Ð¿Ð¾Ð¼Ð½Ð¸Ð¼ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð¸Ñ Ð²Ð¸ ÐµÐ·Ð¸Ðº Ð¸Ð»Ð¸ Ð´Ð° Ð·Ð°Ð¿Ð¾Ð¼Ð½Ð¸Ð¼ Ð´ÐµÑ‚Ð°Ð¹Ð»Ð¸ Ð¿Ð¾ Ð²Ð»Ð¸Ð·Ð°Ð½ÐµÑ‚Ð¾ Ð²Ð¸ Ð² ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚Ð°.</p>","title":"Ð¤ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»Ð½Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸"},"level_strictly_necessary":{"content":"<p>Ð¢ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ ÑÐ° ÑÑŠÑ‰ÐµÑÑ‚Ð²ÐµÐ½ ÐµÐ»ÐµÐ¼ÐµÐ½Ñ‚, ÐºÐ¾Ð¹Ñ‚Ð¾ Ð¾ÑÐ¸Ð³ÑƒÑ€ÑÐ²Ð° ÑƒÑÐ»ÑƒÐ³Ð¸, Ð´Ð¾ÑÑ‚ÑŠÐ¿Ð½Ð¸ Ñ‡Ñ€ÐµÐ· Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚ Ð¸ Ð´Ð°Ð²Ð°Ñ‚ Ð²ÑŠÐ·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚ Ð·Ð° Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð½Ðµ Ð½Ð° Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð¸ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ Ð½Ð° Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚.</p><p>Ð‘ÐµÐ· Ñ‚ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÐ¼ Ð´Ð° Ð²Ð¸ Ð´Ð¾ÑÑ‚Ð°Ð²Ð¸Ð¼ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð¸ ÑƒÑÐ»ÑƒÐ³Ð¸ Ð½Ð° Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚.</p>","title":"Ð¡Ñ‚Ñ€Ð¾Ð³Ð¾ Ð·Ð°Ð´ÑŠÐ»Ð¶Ð¸Ñ‚ÐµÐ»Ð½Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸"},"level_targeting":{"content":"<p>Ð¢ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ ÑÐµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚ Ð·Ð° Ð¿Ð¾ÐºÐ°Ð·Ð²Ð°Ð½Ðµ Ð½Ð° Ñ€ÐµÐºÐ»Ð°Ð¼Ð°, ÐºÐ¾ÑÑ‚Ð¾ Ð²ÐµÑ€Ð¾ÑÑ‚Ð½Ð¾ Ñ‰Ðµ Ð²Ð¸ Ð·Ð°Ð¸Ð½Ñ‚ÐµÑ€ÐµÑÐ¾Ð²Ð° Ð²ÑŠÐ· Ð¾ÑÐ½Ð¾Ð²Ð° Ð½Ð° Ð½Ð°Ð²Ð¸Ñ†Ð¸Ñ‚Ðµ Ð²Ð¸ Ð·Ð° ÑÑŠÑ€Ñ„Ð¸Ñ€Ð°Ð½Ðµ.</p><p>Ð¢ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸, Ð¾Ð±ÑÐ»ÑƒÐ¶Ð²Ð°Ð½Ð¸ Ð¾Ñ‚ Ð½Ð°ÑˆÐ¸Ñ‚Ðµ Ð´Ð¾ÑÑ‚Ð°Ð²Ñ‡Ð¸Ñ†Ð¸ Ð½Ð° ÑÑŠÐ´ÑŠÑ€Ð¶Ð°Ð½Ð¸Ðµ Ð¸ / Ð¸Ð»Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð°, Ð¼Ð¾Ð³Ð°Ñ‚ Ð´Ð° ÐºÐ¾Ð¼Ð±Ð¸Ð½Ð¸Ñ€Ð°Ñ‚ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑÑ‚Ð°, ÐºÐ¾ÑÑ‚Ð¾ ÑÐ° ÑÑŠÐ±Ñ€Ð°Ð»Ð¸ Ð¾Ñ‚ Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚, Ñ Ð´Ñ€ÑƒÐ³Ð° Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ, ÐºÐ¾ÑÑ‚Ð¾ ÑÐ° ÑÑŠÐ±Ñ€Ð°Ð»Ð¸ Ð½ÐµÐ·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾, ÑÐ²ÑŠÑ€Ð·Ð°Ð½Ð° Ñ Ð´ÐµÐ¹Ð½Ð¾ÑÑ‚Ð¸Ñ‚Ðµ Ð½Ð° Ð²Ð°ÑˆÐ¸Ñ ÑƒÐµÐ± Ð±Ñ€Ð°ÑƒÐ·ÑŠÑ€ Ð² Ñ‚ÑÑ…Ð½Ð°Ñ‚Ð° Ð¼Ñ€ÐµÐ¶Ð° Ð¾Ñ‚ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚Ð¾Ð²Ðµ.</p><p>ÐÐºÐ¾ Ñ€ÐµÑˆÐ¸Ñ‚Ðµ Ð´Ð° Ð¿Ñ€ÐµÐ¼Ð°Ñ…Ð½ÐµÑ‚Ðµ Ð¸Ð»Ð¸ Ð´ÐµÐ°ÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð°Ñ‚Ðµ Ñ‚ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð·Ð° Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð¸ Ð¿Ð¾Ñ‚Ñ€ÐµÐ±Ð¸Ñ‚ÐµÐ»ÑÐºÐ¸ Ð³Ñ€ÑƒÐ¿Ð¸ Ð¸Ð»Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð°, Ð¿Ð°Ðº Ñ‰Ðµ Ð²Ð¸Ð´Ð¸Ñ‚Ðµ Ñ€ÐµÐºÐ»Ð°Ð¼Ð¸, Ð½Ð¾ Ñ‚Ðµ Ð¼Ð¾Ð¶Ðµ Ð´Ð° Ð½Ðµ ÑÐ° Ð¾Ñ‚ Ð¿Ð¾Ð´Ñ…Ð¾Ð´ÑÑ‰Ð¸ Ð·Ð° Ð²Ð°Ñ.</p>","title":"ÐÐ°ÑÐ¾Ñ‡Ð²Ð°Ð½Ðµ Ð¸ Ñ€ÐµÐºÐ»Ð°Ð¼Ð½Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸"},"level_tracking":{"content":"<p>Ð¢ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ ÑÐµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚ Ð·Ð° ÑÑŠÐ±Ð¸Ñ€Ð°Ð½Ðµ Ð½Ð° Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ Ð·Ð° Ð°Ð½Ð°Ð»Ð¸Ð· Ð½Ð° Ñ‚Ñ€Ð°Ñ„Ð¸ÐºÐ° ÐºÑŠÐ¼ Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚ Ð¸ ÐºÐ°Ðº Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ»Ð¸Ñ‚Ðµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚ Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚.</p><p>ÐÐ°Ð¿Ñ€Ð¸Ð¼ÐµÑ€, Ñ‚ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð¼Ð¾Ð³Ð°Ñ‚ Ð´Ð° Ð¿Ñ€Ð¾ÑÐ»ÐµÐ´ÑÐ²Ð°Ñ‚ Ð½ÐµÑ‰Ð° ÐºÐ°Ñ‚Ð¾ ÐºÐ¾Ð»ÐºÐ¾ Ð²Ñ€ÐµÐ¼Ðµ Ð¿Ñ€ÐµÐºÐ°Ñ€Ð²Ð°Ñ‚Ðµ Ð½Ð° ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚Ð° Ð¸Ð»Ð¸ Ð½Ð° Ð¿Ð¾ÑÐµÑ‰Ð°Ð²Ð°Ð½Ð¸Ñ‚Ðµ Ð¾Ñ‚ Ð²Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð¸, ÐºÐ¾ÐµÑ‚Ð¾ Ð½Ð¸ Ð¿Ð¾Ð¼Ð°Ð³Ð° Ð´Ð° Ñ€Ð°Ð·Ð±ÐµÑ€ÐµÐ¼ ÐºÐ°Ðº Ð¼Ð¾Ð¶ÐµÐ¼ Ð´Ð° Ð¿Ð¾Ð´Ð¾Ð±Ñ€Ð¸Ð¼ Ð½Ð°ÑˆÐ¸Ñ ÑÐ°Ð¹Ñ‚ Ð·Ð° Ð²Ð°Ñ.</p><p>Ð˜Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑÑ‚Ð°, ÑÑŠÐ±Ñ€Ð°Ð½Ð° Ñ‡Ñ€ÐµÐ· Ñ‚ÐµÐ·Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð·Ð° Ð¿Ñ€Ð¾ÑÐ»ÐµÐ´ÑÐ²Ð°Ð½Ðµ Ð¸ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚, Ð½Ðµ Ð¸Ð´ÐµÐ½Ñ‚Ð¸Ñ„Ð¸Ñ†Ð¸Ñ€Ð° Ð²ÑÐµÐºÐ¸ Ð¾Ñ‚Ð´ÐµÐ»ÐµÐ½ Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚ÐµÐ».</p>","title":"Ð‘Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð·Ð° Ð¿Ñ€Ð¾ÑÐ»ÐµÐ´ÑÐ²Ð°Ð½Ðµ Ð¸ Ð·Ð° Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚"},"preference_center":{"save":"Ð—Ð°Ð¿Ð°Ð·Ð¸ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð¸ÑÑ‚Ð° Ð¼Ð¸","title":"Ð¦ÐµÐ½Ñ‚ÑŠÑ€ Ð·Ð° Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ° Ð½Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸"},"preference_center_menu_and_content":{"more_information_content":"<h1>ÐžÑ‰Ðµ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ</h1><p>Ð—Ð° Ð²ÑÑÐºÐ°ÐºÐ²Ð¸ Ð²ÑŠÐ¿Ñ€Ð¾ÑÐ¸ Ð²ÑŠÐ² Ð²Ñ€ÑŠÐ·ÐºÐ° Ñ Ð½Ð°ÑˆÐ°Ñ‚Ð° Ð¿Ð¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° Ð·Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ Ð¸ Ð²Ð°ÑˆÐ¸Ñ‚Ðµ Ð¸Ð·Ð±Ð¾Ñ€Ð¸, Ð¼Ð¾Ð»Ñ, ÑÐ²ÑŠÑ€Ð¶ÐµÑ‚Ðµ ÑÐµ Ñ Ð½Ð°Ñ.</p>","more_information_title":"ÐžÑ‰Ðµ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ","your_privacy_content":"<h1>Ð’Ð°ÑˆÐ°Ñ‚Ð° Ð¿Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚ Ðµ Ð²Ð°Ð¶Ð½Ð° Ð·Ð° Ð½Ð°Ñ</h1>\\n<p>Ð‘Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸Ñ‚Ðµ ÑÐ° Ð¼Ð½Ð¾Ð³Ð¾ Ð¼Ð°Ð»ÐºÐ¸ Ñ‚ÐµÐºÑÑ‚Ð¾Ð²Ð¸ Ñ„Ð°Ð¹Ð»Ð¾Ð²Ðµ, ÐºÐ¾Ð¸Ñ‚Ð¾ ÑÐµ ÑÑŠÑ…Ñ€Ð°Ð½ÑÐ²Ð°Ñ‚ Ð½Ð° Ð²Ð°ÑˆÐ¸Ñ ÐºÐ¾Ð¼Ð¿ÑŽÑ‚ÑŠÑ€, ÐºÐ¾Ð³Ð°Ñ‚Ð¾ Ð¿Ð¾ÑÐµÑ‚Ð¸Ñ‚Ðµ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚. ÐÐ¸Ðµ Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ð¼Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð·Ð° Ð¼Ð½Ð¾Ð¶ÐµÑÑ‚Ð²Ð¾ Ð¾Ñ‚ Ñ†ÐµÐ»Ð¸ Ð¸ Ð´Ð° Ð¿Ð¾Ð´Ð¾Ð±Ñ€Ð¸Ð¼ ÑÑŠÑ€Ñ„Ð¸Ñ€Ð°Ð½ÐµÑ‚Ð¾ Ð²Ð¸ Ð¸Ð· Ð½Ð°ÑˆÐ¸Ñ ÑÐ°Ð¹Ñ‚ (Ð½Ð°Ð¿Ñ€Ð¸Ð¼ÐµÑ€: Ð·Ð° Ð´Ð° Ð·Ð°Ð¿Ð¾Ð¼Ð½Ð¸Ð¼ Ð´ÐµÑ‚Ð°Ð¹Ð»Ð¸Ñ‚Ðµ Ð½Ð° Ð²Ð°ÑˆÐ¸Ñ Ð°ÐºÐ°ÑƒÐ½Ñ‚ Ð·Ð° Ð²Ð»Ð¸Ð·Ð°Ð½Ðµ).</p><p>ÐœÐ¾Ð¶ÐµÑ‚Ðµ Ð´Ð° Ð¿Ñ€Ð¾Ð¼ÐµÐ½Ð¸Ñ‚Ðµ Ð¿Ñ€ÐµÐ´Ð¿Ð¾Ñ‡Ð¸Ñ‚Ð°Ð½Ð¸ÑÑ‚Ð° ÑÐ¸ Ð¸ Ð´Ð° Ð¾Ñ‚ÐºÐ°Ð¶ÐµÑ‚Ðµ Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð¸ Ð²Ð¸Ð´Ð¾Ð²Ðµ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð´Ð° ÑÐµ ÑÑŠÑ…Ñ€Ð°Ð½ÑÐ²Ð°Ñ‚ Ð½Ð° Ð²Ð°ÑˆÐ¸Ñ ÐºÐ¾Ð¼Ð¿ÑŽÑ‚ÑŠÑ€, Ð´Ð¾ÐºÐ°Ñ‚Ð¾ ÑÑŠÑ€Ñ„Ð¸Ñ€Ð°Ñ‚Ðµ Ð² Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚. ÐœÐ¾Ð¶ÐµÑ‚Ðµ ÑÑŠÑ‰Ð¾ Ð´Ð° Ð¿Ñ€ÐµÐ¼Ð°Ñ…Ð½ÐµÑ‚Ðµ Ð½ÑÐºÐ¾Ð¸ Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸, ÐºÐ¾Ð¸Ñ‚Ð¾ Ð²ÐµÑ‡Ðµ ÑÐ° Ð·Ð°Ð¿Ð°Ð·ÐµÐ½Ð¸ Ð½Ð° Ð²Ð°ÑˆÐ¸Ñ ÐºÐ¾Ð¼Ð¿ÑŽÑ‚ÑŠÑ€, Ð½Ð¾ Ð¸Ð¼Ð°Ð¹Ñ‚Ðµ Ð¿Ñ€ÐµÐ´Ð²Ð¸Ð´, Ñ‡Ðµ Ð¸Ð·Ñ‚Ñ€Ð¸Ð²Ð°Ð½ÐµÑ‚Ð¾ Ð½Ð° Ð±Ð¸ÑÐºÐ²Ð¸Ñ‚ÐºÐ¸ Ð¼Ð¾Ð¶Ðµ Ð´Ð° Ð²Ð¸ Ð¿Ð¾Ð¿Ñ€ÐµÑ‡Ð¸ Ð´Ð° Ð¸Ð·Ð¿Ð¾Ð»Ð·Ð²Ð°Ñ‚Ðµ Ñ‡Ð°ÑÑ‚Ð¸ Ð¾Ñ‚ Ð½Ð°ÑˆÐ¸Ñ ÑƒÐµÐ±ÑÐ°Ð¹Ñ‚.</p>","your_privacy_title":"Ð’Ð°ÑˆÐ°Ñ‚Ð° Ð¿Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÐµÐ»Ð½Ð¾ÑÑ‚"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Î•Î½ÎµÏÎ³ÏŒ","always_active":"Î Î¬Î½Ï„Î± ÎµÎ½ÎµÏÎ³ÏŒ","change_settings":"Î‘Î»Î»Î±Î³Î® Ï„Ï‰Î½ Ï€ÏÎ¿Ï„Î¹Î¼Î®ÏƒÎµÏŽÎ½ Î¼Î¿Ï…","find_out_more":"<p>Î“Î¹Î± Î½Î± Î¼Î¬Î¸ÎµÏ„Îµ Ï€ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎ±, Ï€Î±ÏÎ±ÎºÎ±Î»Î¿ÏÎ¼Îµ ÎµÏ€Î¹ÏƒÎºÎµÏ†Î¸ÎµÎ¯Ï„Îµ Ï„Î·Î½ ÏƒÎµÎ»Î¯Î´Î± Ï€ÎµÏÎ¯ <a href=\'%s\' target=\'_blank\'>Ï€Î¿Î»Î¹Ï„Î¹ÎºÎ®Ï‚ cookies</a>.</p>","i_agree_text":"Î£Ï…Î¼Ï†Ï‰Î½ÏŽ","inactive":"Î‘Î½ÎµÎ½ÎµÏÎ³ÏŒ","ok_text":"OK","text":"Î§ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ¼Îµ cookies ÎºÎ±Î¹ Î¬Î»Î»ÎµÏ‚ Ï„ÎµÏ‡Î½Î¿Î»Î¿Î³Î¯ÎµÏ‚ ÎµÎ½Ï„Î¿Ï€Î¹ÏƒÎ¼Î¿Ï Î³Î¹Î± Ï„Î·Î½ Î²ÎµÎ»Ï„Î¯Ï‰ÏƒÎ· Ï„Î·Ï‚ ÎµÎ¼Ï€ÎµÎ¹ÏÎ¯Î±Ï‚ Ï€ÎµÏÎ¹Î®Î³Î·ÏƒÎ·Ï‚ ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚, Î³Î¹Î± Ï„Î·Î½ ÎµÎ¾Î±Ï„Î¿Î¼Î¯ÎºÎµÏ…ÏƒÎ· Ï€ÎµÏÎ¹ÎµÏ‡Î¿Î¼Î­Î½Î¿Ï… ÎºÎ±Î¹ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÏ‰Î½, Ï„Î·Î½ Ï€Î±ÏÎ¿Ï‡Î® Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÏŽÎ½ ÎºÎ¿Î¹Î½Ï‰Î½Î¹ÎºÏŽÎ½ Î¼Î­ÏƒÏ‰Î½ ÎºÎ±Î¹ Ï„Î·Î½ Î±Î½Î¬Î»Ï…ÏƒÎ· Ï„Î·Ï‚ ÎµÏ€Î¹ÏƒÎºÎµÏˆÎ¹Î¼ÏŒÏ„Î·Ï„Î¬Ï‚ Î¼Î±Ï‚. Î‘Î½ ÏƒÏ…Î½ÎµÏ‡Î¯ÏƒÎµÏ„Îµ Î½Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹ÎµÎ¯Ï„Îµ Ï„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚, ÏƒÏ…Î½Î±Î¹Î½ÎµÎ¯Ï„Îµ ÏƒÏ„Î· Ï‡ÏÎ®ÏƒÎ· Ï„Ï‰Î½ cookies Î¼Î±Ï‚.<br/>","title":"Î‘Ï…Ï„Î® Î· Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹ÎµÎ¯ cookies"},"level_functionality":{"content":"<p>Î‘Ï…Ï„Î¬ Ï„Î± cookies Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ½Ï„Î±Î¹ Î³Î¹Î± Î½Î± ÏƒÎ±Ï‚ Ï€Î±ÏÎ­Ï‡Î¿Ï…Î½ Î¼Î¯Î± Ï€Î¹Î¿ Ï€ÏÎ¿ÏƒÏ‰Ï€Î¿Ï€Î¿Î¹Î·Î¼Î­Î½Î· ÎµÎ¼Ï€ÎµÎ¹ÏÎ¯Î± ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚ ÎºÎ±Î¹ Î³Î¹Î± Î½Î± Î¸Ï…Î¼Î¿ÏÎ½Ï„Î±Î¹ ÎµÏ€Î¹Î»Î¿Î³Î­Ï‚ Ï€Î¿Ï… ÎºÎ¬Î½ÎµÏ„Îµ ÏŒÏ„Î±Î½ Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹ÎµÎ¯Ï„Îµ Ï„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚.</p><p>Î“Î¹Î± Ï€Î±ÏÎ¬Î´ÎµÎ¹Î³Î¼Î±, Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÎ¿Ï…Î¼Îµ cookies Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÎºÏŒÏ„Î·Ï„Î±Ï‚ Î³Î¹Î± Î½Î± Î¸Ï…Î¼ÏŒÎ¼Î±ÏƒÏ„Îµ Ï„Î·Î½ ÎµÏ€Î¹Î»Î¿Î³Î® Î³Î»ÏŽÏƒÏƒÎ±Ï‚ Î® Ï„Î± ÏƒÏ„Î¿Î¹Ï‡ÎµÎ¯Î± ÎµÎ¹ÏƒÏŒÎ´Î¿Ï… ÏƒÎ±Ï‚.</p>","title":"Cookies Î›ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¹ÎºÏŒÏ„Î·Ï„Î±Ï‚"},"level_strictly_necessary":{"content":"<p>Î¤Î± Î±Ï€Î±ÏÎ±Î¯Ï„Î·Ï„Î± cookies Î²Î¿Î·Î¸Î¿ÏÎ½ ÏƒÏ„Î¿ Î½Î± Î³Î¯Î½ÎµÎ¹ Ï‡ÏÎ·ÏƒÏ„Î¹ÎºÎ® Î¼Î¯Î± Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±, ÎµÏ€Î¹Ï„ÏÎ­Ï€Î¿Î½Ï„Î±Ï‚ Î²Î±ÏƒÎ¹ÎºÎ­Ï‚ Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î¯ÎµÏ‚ ÏŒÏ€Ï‰Ï‚ Ï„Î·Î½ Ï€Î»Î¿Î®Î³Î·ÏƒÎ· ÎºÎ±Î¹ Ï„Î·Î½ Ï€ÏÏŒÏƒÎ²Î±ÏƒÎ· ÏƒÎµ Î±ÏƒÏ†Î±Î»ÎµÎ¯Ï‚ Ï€ÎµÏÎ¹Î¿Ï‡Î­Ï‚ Ï„Î·Ï‚ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±Ï‚.</p><p>Î— Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î´ÎµÎ½ Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± Î»ÎµÎ¹Ï„Î¿Ï…ÏÎ³Î®ÏƒÎµÎ¹ ÏƒÏ‰ÏƒÏ„Î¬ Ï‡Ï‰ÏÎ¯Ï‚ Î±Ï…Ï„Î¬ Ï„Î± cookies.</p>","title":"Î†ÎºÏÏ‰Ï‚ Î±Ï€Î±ÏÎ±Î¯Ï„Î·Ï„Î± cookies"},"level_targeting":{"content":"<p>Î‘Ï…Ï„Î¬ Ï„Î± cookies Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ½Ï„Î±Î¹ Î³Î¹Î± Î½Î± Î´ÎµÎ¯Ï‡Î½Î¿Ï…Î½ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÎ¹Ï‚ Ï€Î¿Ï… Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± ÏƒÎ±Ï‚ ÎµÎ½Î´Î¹Î±Ï†Î­ÏÎ¿Ï…Î½ Î¼Îµ Î²Î¬ÏƒÎ· Ï„Î¹Ï‚ ÏƒÏ…Î½Î®Î¸ÎµÎ¹ÎµÏ‚ Ï€ÎµÏÎ¹Î®Î³Î·ÏƒÎ®Ï‚ ÏƒÎ±Ï‚ ÏƒÏ„Î¿ Î”Î¹Î±Î´Î¯ÎºÏ„Ï…Î¿.</p><p>Î‘Ï…Ï„Î¬ Ï„Î± cookies, Ï€Î±ÏÎ­Ï‡Î¿Î½Ï„Î±Î¹ Î±Ï€ÏŒ Ï„Î¿Ï…Ï‚ Ï€Î±ÏÏŒÏ‡Î¿Ï…Ï‚ Ï€ÎµÏÎ¹ÎµÏ‡Î¿Î¼Î­Î½Î¿Ï… Î®/ÎºÎ±Î¹ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÏ‰Î½, Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± ÏƒÏ…Î½Î´Ï…Î¬Î¶Î¿Ï…Î½ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚ Ï€Î¿Ï… ÏƒÏ…Î»Î»Î­Î³Î¿Ï…Î½ Î±Ï€ÏŒ Ï„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚ Î¼Îµ Î¬Î»Î»ÎµÏ‚ Ï€Î¿Ï… Î­Ï‡Î¿Ï…Î½ Î±Î½ÎµÎ¾Î¬ÏÏ„Î·Ï„Î± ÏƒÏ…Î»Î»Î­Î¾ÎµÎ¹ Î±Ï€ÏŒ Î¬Î»Î»Î± Î´Î¯ÎºÏ„Ï…Î± Î® Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´ÎµÏ‚ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ¬ Î¼Îµ Ï„Î¹Ï‚ Î´ÏÎ±ÏƒÏ„Î·ÏÎ¹ÏŒÏ„Î·Ï„Î­Ï‚ ÏƒÎ±Ï‚ ÏƒÏ„Î¿Î½ Ï†Ï…Î»Î»Î¿Î¼ÎµÏ„ÏÎ·Ï„Î® ÏƒÎ±Ï‚.</p><p>Î•Î¬Î½ ÎµÏ€Î¹Î»Î­Î¾ÎµÏ„Îµ Î½Î± Î±Ï†Î±Î¹ÏÎ­ÏƒÎµÏ„Îµ Î® Î½Î± Î±Ï€ÎµÎ½ÎµÏÎ³Î¿Ï€Î¿Î¹Î®ÏƒÎµÏ„Îµ Î±Ï…Ï„Î¬ Ï„Î± cookies, Î¸Î± ÏƒÏ…Î½ÎµÏ‡Î¯ÏƒÎµÏ„Îµ Î½Î± Î²Î»Î­Ï€ÎµÏ„Îµ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÎ¹Ï‚, Î±Î»Î»Î¬ Î±Ï…Ï„Î­Ï‚ Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± Î¼Î·Î½ ÎµÎ¯Î½Î±Î¹ Ï€Î»Î­Î¿Î½ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ­Ï‚ Î¼Îµ Ï„Î± ÎµÎ½Î´Î¹Î±Ï†Î­ÏÎ¿Î½Ï„Î¬ ÏƒÎ±Ï‚.</p>","title":"Cookies ÎµÎ¾Î±Ï„Î¿Î¼Î¹ÎºÎµÏ…Î¼Î­Î½Î¿Ï… Ï€ÎµÏÎ¹ÎµÏ‡Î¿Î¼Î­Î½Î¿Ï… ÎºÎ±Î¹ Î´Î¹Î±Ï†Î·Î¼Î¯ÏƒÎµÏ‰Î½"},"level_tracking":{"content":"<p>Î‘Ï…Ï„Î¬ Ï„Î± cookies Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ½Ï„Î±Î¹ Î³Î¹Î± Î½Î± ÏƒÏ…Î»Î»Î­Î³Î¿Ï…Î½ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ­Ï‚ Î¼Îµ Ï„Î·Î½ Î±Î½Î¬Î»Ï…ÏƒÎ· Ï„Î·Ï‚ ÎµÏ€Î¹ÏƒÎºÎµÏˆÎ¹Î¼ÏŒÏ„Î·Ï„Î±Ï‚ Ï„Î·Ï‚ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±Ï‚ Î¼Î±Ï‚ ÎºÎ±Î¹ Î¼Îµ Ï„Î¿ Ï€ÏŽÏ‚ Î¿Î¹ Ï‡ÏÎ®ÏƒÏ„ÎµÏ‚ Ï„Î·Î½ Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ½.</p><p>Î“Î¹Î± Ï€Î±ÏÎ¬Î´ÎµÎ¹Î³Î¼Î±, Î±Ï…Ï„Î¬ Ï„Î± cookies Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± ÎµÎ½Ï„Î¿Ï€Î¯ÏƒÎ¿Ï…Î½ Ï€ÏŒÏƒÎ¿ Ï‡ÏÏŒÎ½Î¿ Î±Ï†Î¹ÎµÏÏŽÎ½ÎµÏ„Îµ ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚ Î® Ï€Î¿Î¹ÎµÏ‚ ÏƒÎµÎ»Î¯Î´ÎµÏ‚ Ï„Î·Ï‚ ÎµÏ€Î¹ÏƒÎºÎ­Ï€Ï„ÎµÏƒÏ„Îµ, Ï€ÏÎ¬Î³Î¼Î± Ï€Î¿Ï… Î¼Î±Ï‚ Î²Î¿Î·Î¸Î¬ÎµÎ¹ Î½Î± ÎºÎ±Ï„Î±Î»Î¬Î²Î¿Ï…Î¼Îµ Ï€ÏŽÏ‚ Î½Î± Î²ÎµÎ»Ï„Î¹ÏŽÏƒÎ¿Ï…Î¼Îµ Ï„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚.</p><p>ÎŸÎ¹ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚ Ï€Î¿Ï… ÏƒÏ…Î»Î»Î­Î³Î¿Î½Ï„Î±Î¹ Î¼Î­ÏƒÏ‰ Î±Ï…Ï„ÏŽÎ½ Ï„Ï‰Î½ cookies Î´ÎµÎ½ Î±Î½Î±Î³Î½Ï‰ÏÎ¯Î¶Î¿Ï…Î½ Î¼ÎµÎ¼Î¿Î½Ï‰Î¼Î­Î½Î¿Ï…Ï‚ Ï‡ÏÎ®ÏƒÏ„ÎµÏ‚.</p>","title":"Cookies ÎµÎ½Ï„Î¿Ï€Î¹ÏƒÎ¼Î¿Ï ÎºÎ±Î¹ Î±Ï€Î¿Î´Î¿Ï„Î¹ÎºÏŒÏ„Î·Ï„Î±Ï‚"},"preference_center":{"save":"Î‘Ï€Î¿Î¸Î®ÎºÎµÏ…ÏƒÎ· Ï„Ï‰Î½ Ï€ÏÎ¿Ï„Î¹Î¼Î®ÏƒÎµÏŽÎ½ Î¼Î¿Ï…","title":"ÎšÎ­Î½Ï„ÏÎ¿ Î ÏÎ¿Ï„Î¹Î¼Î®ÏƒÎµÏ‰Î½ Cookies"},"preference_center_menu_and_content":{"more_information_content":"<h1>Î ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎµÏ‚ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚.</h1><p>Î“Î¹Î± Î¿Ï€Î¿Î¹Î±Î´Î®Ï€Î¿Ï„Îµ Î±Ï€Î¿ÏÎ¯Î± ÏƒÎµ ÏƒÏ‡Î­ÏƒÎ· Î¼Îµ Ï„Î·Î½ Ï€Î¿Î»Î¹Ï„Î¹ÎºÎ® Î¼Î±Ï‚ ÏƒÏ‡ÎµÏ„Î¹ÎºÎ¬ Î¼Îµ Ï„Î± cookies ÎºÎ±Î¹ Ï„Î¹Ï‚ ÎµÏ€Î¹Î»Î¿Î³Î­Ï‚ ÏƒÎ±Ï‚, Ï€Î±ÏÎ±ÎºÎ±Î»Î¿ÏÎ¼Îµ Î½Î± Î­ÏÎ¸ÎµÏ„Îµ ÏƒÎµ ÎµÏ€Î±Ï†Î® Î¼Î±Î¶Î¯ Î¼Î±Ï‚.</p>","more_information_title":"Î ÎµÏÎ¹ÏƒÏƒÏŒÏ„ÎµÏÎµÏ‚ Ï€Î»Î·ÏÎ¿Ï†Î¿ÏÎ¯ÎµÏ‚","your_privacy_content":"<h1>Î— Î¹Î´Î¹Ï‰Ï„Î¹ÎºÏŒÏ„Î·Ï„Î¬ ÏƒÎ±Ï‚ ÎµÎ¯Î½Î±Î¹ ÏƒÎ·Î¼Î±Î½Ï„Î¹ÎºÎ® Î³Î¹Î± ÎµÎ¼Î¬Ï‚.</h1>\\n<p>Î¤Î± cookies ÎµÎ¯Î½Î±Î¹ Ï€Î¿Î»Ï Î¼Î¹ÎºÏÎ¬ Î±ÏÏ‡ÎµÎ¯Î± ÎºÎµÎ¹Î¼Î­Î½Î¿Ï… Ï€Î¿Ï… Î±Ï€Î¿Î¸Î·ÎºÎµÏÎ¿Î½Ï„Î±Î¹ ÏƒÏ„Î¿Î½ Ï…Ï€Î¿Î»Î¿Î³Î¹ÏƒÏ„Î® ÏƒÎ±Ï‚ ÏŒÏ„Î±Î½ ÎµÏ€Î¹ÏƒÎºÎ­Ï€Ï„ÎµÏƒÏ„Îµ Î¼Î¹Î± Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±. Î§ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î¿ÏÎ¼Îµ cookies Î³Î¹Î± Î´Î¹Î¬Ï†Î¿ÏÎ¿Ï…Ï‚ Î»ÏŒÎ³Î¿Ï…Ï‚ ÎºÎ±Î¹ Î³Î¹Î± Î½Î± Î²ÎµÎ»Ï„Î¹ÏŽÏƒÎ¿Ï…Î¼Îµ Ï„Î·Î½ Î´Î¹Î±Î´Î¹ÎºÏ„Ï…Î±ÎºÎ® ÏƒÎ±Ï‚ ÎµÎ¼Ï€ÎµÎ¹ÏÎ¯Î± ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚ (Ï€.Ï‡., Î³Î¹Î± Ï…Ï€ÎµÎ½Î¸ÏÎ¼Î¹ÏƒÎ· Ï„Ï‰Î½ ÏƒÏ„Î¿Î¹Ï‡ÎµÎ¯Ï‰Î½ Ï€ÏÏŒÏƒÎ²Î±ÏƒÎ®Ï‚ ÏƒÎ±Ï‚ ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±).</p><p>ÎœÏ€Î¿ÏÎµÎ¯Ï„Îµ Î½Î± Î±Î»Î»Î¬Î¾ÎµÏ„Îµ Ï„Î¹Ï‚ Ï€ÏÎ¿Ï„Î¹Î¼Î®ÏƒÎµÎ¹Ï‚ ÏƒÎ±Ï‚ ÎºÎ±Î¹ Î½Î± Î¼Î·Î½ ÎµÏ€Î¹Ï„ÏÎ­ÏˆÎµÏ„Îµ ÏƒÎµ ÎºÎ¬Ï€Î¿Î¹Î¿Ï…Ï‚ Ï„ÏÏ€Î¿Ï…Ï‚ cookies Î½Î± Î±Ï€Î¿Î¸Î·ÎºÎµÏ…Ï„Î¿ÏÎ½ ÏƒÏ„Î¿Î½ Ï…Ï€Î¿Î»Î¿Î³Î¹ÏƒÏ„Î® ÏƒÎ±Ï‚ ÏŒÏƒÎ¿ Ï€ÎµÏÎ¹Î·Î³ÎµÎ¯ÏƒÏ„Îµ ÏƒÏ„Î·Î½ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î± Î¼Î±Ï‚. ÎœÏ€Î¿ÏÎµÎ¯Ï„Îµ ÎµÏ€Î¯ÏƒÎ·Ï‚ Î½Î± Î´Î¹Î±Î³ÏÎ¬ÏˆÎµÏ„Îµ Î¿Ï€Î¿Î¹Î±Î´Î®Ï€Î¿Ï„Îµ cookies ÎµÎ¯Î½Î±Î¹ Î®Î´Î· Î±Ï€Î¿Î¸Î·ÎºÎµÏ…Î¼Î­Î½Î± ÏƒÏ„Î¿Î½ Ï…Ï€Î¿Î»Î¿Î³Î¹ÏƒÏ„Î® ÏƒÎ±Ï‚, Î±Î»Î»Î¬ Î½Î± Î­Ï‡ÎµÏ„Îµ Ï…Ï€ÏŒÏˆÎ¹Î½ ÏŒÏ„Î¹ Î´Î¹Î±Î³ÏÎ¬Ï†Î¿Î½Ï„Î±Ï‚ cookies Î¼Ï€Î¿ÏÎµÎ¯ Î½Î± ÏƒÎ±Ï‚ Î±Ï€Î¿Ï„ÏÎ­ÏˆÎµÎ¹ Î±Ï€ÏŒ Ï„Î¿ Î½Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î®ÏƒÎµÏ„Îµ Î¼Î­ÏÎ· Ï„Î·Ï‚ Î¹ÏƒÏ„Î¿ÏƒÎµÎ»Î¯Î´Î±Ï‚ Î¼Î±Ï‚.</p>","your_privacy_title":"Î— Î¹Î´Î¹Ï‰Ï„Î¹ÎºÏŒÏ„Î·Ï„Î¬ ÏƒÎ±Ï‚"}}'
    );
  },
  function (e) {
    e.exports = JSON.parse(
      '{"dialog":{"active":"Gweithredol","always_active":"Yn weithredol bob tro","change_settings":"Newid fy newisiadau","find_out_more":"<p>I ganfod mwy, ewch at ein <a href=\'%s\' target=\'_blank\'>Polisi Cwcis</a>.</p>","i_agree_text":"Rwy\'n cytuno","inactive":"Anweithredol","ok_text":"Iawn","text":"Rydym yn defnyddio cwcis a thechnolegau tracio eraill i wella eich profiad o bori ar ein gwefan, i ddangos cynnwys wedi ei bersonoli a hysbysebion wedi\'u targedu, i ddadansoddi traffig ar ein gwefan ac i ddeall o ble daw ein hymwelwyr. Trwy bori ar ei gwefan, rydych yn cytuno y cawn ddefnyddio cwcis a thechnolegau tracio eraill.<br/>","title":"Rydym yn defnyddio cwcis"},"level_functionality":{"content":"<p>Mae\'r cwcis yma yn cael eu defnyddio i ddarparu profiad mwy personol ichi ar ein gwefan, ac i gofio dewisiadau a wnewch wrth ddefnyddio ein gwefan.</p><p>Er enghraifft, gallem ddefnyddio cwcis swyddogaeth i gofio\'ch dewis iaith neu gofio\'ch manylion mewngofnodi.</p>","title":"Cwcis swyddogaeth"},"level_strictly_necessary":{"content":"<p>Mae\'r cwcis yma yn hanfodol er mwyn ichi dderbyn gwasanaethau drwy ein gwefan a\'ch galluogi i ddefnyddio nodweddion penodol ar ein gwefan.</p><p>Heb y cwcis yma, ni fedrwn ddarparu rhai gwasanaethau penodol ichi ar ein gwefan.</p>","title":"Cwcis hollol hanfodol"},"level_targeting":{"content":"<p>Mae\'r cwcis yma yn cael eu defnyddio i ddangos hysbysebion sydd yn debygol o fod o ddiddordeb i chi yn seiliedig ar eich arferion pori.</p><p>Gall y cwcis yma, fel y\'u gweinyddir gan ein darparwyr cynnwys a/neu hysbysebion, gyfuno gwybodaeth a gasglwyd ganddynt o\'n gwefan gyda gwybodaeth arall maent wedi ei chasglu\'n annibynnol yn seiliedig ar eich gweithgareddau pori ar y rhyngrwyd ar draws eu rhwydweithiau o wefannau.</p><p>Os byddwch yn dewis tynnu neu atal y cwcis targedu neu hysbysebu yma, byddwch yn parhau i weld hysbysebion ond mae\'n bosib na fyddant yn berthnasol i chi. </p>","title":"Cwcis targedu a hysbysebu"},"level_tracking":{"content":"<p>Mae\'r cwcis yma yn cael eu defnyddio i gasglu gwybodaeth a dadansoddi traffig i\'n gwefan a sut mae ymwelwyr yn defnyddio\'n gwefan.</p><p>Er enghraifft, gall y cwcis yma dracio faint o amser rydych yn ei dreulio ar y wefan neu\'r tudalennau rydych yn ymweld Ã¢ hwy a\'n cynorthwyo i ddeall sut y gallwn wella ein gwefan ar eich cyfer.<p>Nid yw\'r wybodaeth a gesglir drwy\'r cwcis tracio a pherfformiad yn adnabod unrhyw ymwelydd unigol.</p>","title":"Cwcis tracio a pherfformiad"},"preference_center":{"save":"Cadw fy newisiadau","title":"Canolfan Dewisiadau Cwcis"},"preference_center_menu_and_content":{"more_information_content":"<h1>Rhagor o wybodaeth.</h1><p>Os oes gennych chi unrhyw ymholiadau yn ymwneud Ã¢\'n polisi cwcis a\'ch dewisiadau, a wnewch chi gysylltu Ã¢ ni.</p>","more_information_title":"Rhagor o wybodaeth","your_privacy_content":"<h1>Mae eich preifatrwydd yn bwysig i ni.</h1>\\n<p>Ffeiliau testun bach eu maint yw cwcis sydd yn cael eu storio ar eich cyfrifiadur wrth ichi ymweld Ã¢ gwefan. Rydym yn defnyddio cwcis i sawl diben ac i wella eich profiad ar-lein ar ein gwefan (er enghraifft, cofio eich manylion mewngofnodi i\'ch cyfrif).</p><p>Gallwch newid eich dewisiadau ac atal rhai mathau o gwcis rhag cael eu storio ar eich cyfrifiadur. Gallwch hefyd dynnu unrhyw gwcis sydd eisoes wedi eu storio ar eich cyfrifiadur, ond cofiwch y gall.</p>","your_privacy_title":"Eich preifatrwydd"}}'
    );
  },
  function (e, o, t) {
    var n = t(20);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(1)(n, i);
    n.locals && (e.exports = n.locals);
  },
  function (e, o, t) {
    (e.exports = t(0)(!1)).push([
      e.i,
      '.cc_css_reboot{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent;margin:0;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}.cc_css_reboot *,.cc_css_reboot *::before,.cc_css_reboot *::after{box-sizing:border-box}.cc_css_reboot a,.cc_css_reboot li,.cc_css_reboot p,.cc_css_reboot h1,.cc_css_reboot h2,.cc_css_reboot h3,.cc_css_reboot h4,.cc_css_reboot h5,.cc_css_reboot h6,.cc_css_reboot input,.cc_css_reboot button,.cc_css_reboot select{border-style:none;box-shadow:none;margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;outline:none}@-ms-viewport{.cc_css_reboot{width:device-width}}.cc_css_reboot article,.cc_css_reboot aside,.cc_css_reboot figcaption,.cc_css_reboot figure,.cc_css_reboot footer,.cc_css_reboot header,.cc_css_reboot hgroup,.cc_css_reboot main,.cc_css_reboot nav,.cc_css_reboot section{display:block}.cc_css_reboot [tabindex="-1"]:focus{outline:0 !important}.cc_css_reboot hr{box-sizing:content-box;height:0;overflow:visible}.cc_css_reboot h1,.cc_css_reboot h2,.cc_css_reboot h3,.cc_css_reboot h4,.cc_css_reboot h5,.cc_css_reboot h6{margin-top:0;margin-bottom:0.5rem;color:#000}.cc_css_reboot p{margin-top:0;margin-bottom:1rem}.cc_css_reboot abbr[title],.cc_css_reboot abbr[data-original-title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0}.cc_css_reboot address{margin-bottom:1rem;font-style:normal;line-height:inherit}.cc_css_reboot div{display:block}.cc_css_reboot ol,.cc_css_reboot ul,.cc_css_reboot dl{margin-top:0;margin-bottom:1rem}.cc_css_reboot ol ol,.cc_css_reboot ul ul,.cc_css_reboot ol ul,.cc_css_reboot ul ol{margin-bottom:0}.cc_css_reboot b,.cc_css_reboot strong{font-weight:bolder}.cc_css_reboot small{font-size:80%}.cc_css_reboot sub,.cc_css_reboot sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}.cc_css_reboot sub{bottom:-.25em}.cc_css_reboot sup{top:-.5em}.cc_css_reboot a{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}.cc_css_reboot a:hover{color:#0056b3;text-decoration:underline}.cc_css_reboot a:not([href]):not([tabindex]){color:inherit;text-decoration:none}.cc_css_reboot a:not([href]):not([tabindex]):hover,.cc_css_reboot a:not([href]):not([tabindex]):focus{color:inherit;text-decoration:none}.cc_css_reboot a:not([href]):not([tabindex]):focus{outline:0}.cc_css_reboot img{vertical-align:middle;border-style:none}.cc_css_reboot svg:not(:root){overflow:hidden}.cc_css_reboot table{border-collapse:collapse}.cc_css_reboot caption{padding-top:0.75rem;padding-bottom:0.75rem;color:#6c757d;text-align:left;caption-side:bottom}.cc_css_reboot th{text-align:inherit}.cc_css_reboot label{display:inline-block;margin-bottom:0.5rem}.cc_css_reboot button{border-radius:2px;padding:.5rem 1rem;outline:none;background:#dcdae5;color:#111;cursor:pointer;border:none;transition:all ease .3s}.cc_css_reboot button:focus{outline:none}.cc_css_reboot select{border-style:none}.cc_css_reboot input,.cc_css_reboot button,.cc_css_reboot select,.cc_css_reboot optgroup,.cc_css_reboot textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}.cc_css_reboot button,.cc_css_reboot input{overflow:visible}.cc_css_reboot button,.cc_css_reboot select{text-transform:none}.cc_css_reboot button,.cc_css_reboot html [type="button"],.cc_css_reboot [type="reset"],.cc_css_reboot [type="submit"]{-webkit-appearance:button}.cc_css_reboot button::-moz-focus-inner,.cc_css_reboot [type="button"]::-moz-focus-inner,.cc_css_reboot [type="reset"]::-moz-focus-inner,.cc_css_reboot [type="submit"]::-moz-focus-inner{padding:0;border-style:none}.cc_css_reboot input[type="radio"],.cc_css_reboot input[type="checkbox"]{box-sizing:border-box;padding:0}.cc_css_reboot input[type="date"],.cc_css_reboot input[type="time"],.cc_css_reboot input[type="datetime-local"],.cc_css_reboot input[type="month"]{-webkit-appearance:listbox}.cc_css_reboot textarea{overflow:auto;resize:vertical}.cc_css_reboot fieldset{min-width:0;padding:0;margin:0;border:0}.cc_css_reboot legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}.cc_css_reboot progress{vertical-align:baseline}.cc_css_reboot [type="number"]::-webkit-inner-spin-button,.cc_css_reboot [type="number"]::-webkit-outer-spin-button{height:auto}.cc_css_reboot [type="search"]{outline-offset:-2px;-webkit-appearance:none}.cc_css_reboot [type="search"]::-webkit-search-cancel-button,.cc_css_reboot [type="search"]::-webkit-search-decoration{-webkit-appearance:none}.cc_css_reboot ::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}.cc_css_reboot [hidden]{display:none !important}\n',
      "",
    ]);
  },
  function (e, o) {
    e.exports = function (e) {
      var o = "undefined" != typeof window && window.location;
      if (!o) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var t = o.protocol + "//" + o.host,
        n = t + o.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function (e, o) {
          var i,
            a = o
              .trim()
              .replace(/^"(.*)"$/, function (e, o) {
                return o;
              })
              .replace(/^'(.*)'$/, function (e, o) {
                return o;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)
            ? e
            : ((i =
                0 === a.indexOf("//")
                  ? a
                  : 0 === a.indexOf("/")
                  ? t + a
                  : n + a.replace(/^\.\//, "")),
              "url(" + JSON.stringify(i) + ")");
        }
      );
    };
  },
  function (e, o, t) {
    var n = t(23);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(1)(n, i);
    n.locals && (e.exports = n.locals);
  },
  function (e, o, t) {
    (e.exports = t(0)(!1)).push([
      e.i,
      '.cc_overlay_lock{position:fixed;top:0;left:0;height:100%;width:100%;background:rgba(0,0,0,0.8);z-index:9999999999}.cc_overlay_lock.hidden{display:none}.cc_dialog{background-color:#f2f2f2;color:#111;z-index:99999999999;font-size:16px;padding:3rem}.cc_dialog.hidden{display:none}.cc_dialog.headline{right:0;top:auto;bottom:0;left:0;max-width:100%;position:fixed}.cc_dialog.simple{right:0;top:auto;bottom:0;left:auto;max-width:50%;position:fixed}.cc_dialog.interstitial{right:3vw;top:3vh;left:3vw;max-width:100%;position:fixed}.cc_dialog.standalone{position:fixed;top:0;left:0;height:100%;width:100%}.cc_dialog .cc_dialog_headline{font-size:24px;font-weight:600}.cc_dialog .cc_dialog_text{font-size:16px}.cc_dialog button{font-weight:bold;font-size:14px}.cc_dialog button.cc_b_ok{background-color:green;color:#fff}.cc_dialog button.cc_b_ok:active{background:#136d13}.cc_dialog button.cc_b_cp{background-color:#eaeaea;color:#111;margin-left:0.25rem !important}.cc_dialog button.cc_b_cp:active{background:#f2f2f2}.cookie-consent-preferences-overlay{width:100%;height:100%;position:fixed;background:rgba(0,0,0,0.5);z-index:999999999999;top:0;left:0;display:none}.cookie-consent-preferences-overlay.visible{display:block}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog{position:absolute;margin:30px auto;width:750px;max-width:90%;height:auto;left:0;right:0}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container{width:100%;display:flex;background:#fff;flex-direction:column}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container>div{width:100%}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{background:#fff;color:#111;display:flex;flex-direction:row;justify-content:space-between}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title{display:flex;padding-left:15px;flex-direction:column;justify-content:center;align-items:baseline}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title h2,.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title p{margin:0}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title p{font-size:16px;line-height:1.5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title h2{font-size:20px;font-weight:600}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector{display:flex;align-items:center;padding-right:15px;min-height:80px;justify-content:center}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{display:flex;flex-direction:row;align-items:stretch;background:#292929;color:#f5f5f5;border-bottom:none}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{font-family:Arial, sans-serif !important;width:150px;margin:0;padding:0;background:#e6e6e6;min-width:150px}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{margin:0;padding:0;float:left;display:block;width:100%;color:#666;background:#e6e6e6;border-bottom:1px solid #ccc;border-right:1px solid #ccc;transition:all ease .1s;box-sizing:content-box}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true]{background:#292929;color:#f5f5f5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a{text-decoration:none;color:#666;display:block;padding:10px 5px 10px 10px;font-weight:700;font-size:12px;line-height:19px}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content{background:#292929 !important;color:#f5f5f5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry{width:100%;display:none;padding:25px;box-sizing:border-box}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry[active=true]{display:block}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry h1{font-size:24px;font-weight:600}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content .cc_cp_m_content_entry p{font-size:16px;line-height:1.5}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer{background:#f2f2f2;display:flex;flex-direction:row;align-items:center;border-top:1px solid #ccc;justify-content:space-between}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by{padding:20px 10px;font-size:14px;color:#333;display:block !important}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by a{color:#999}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button{margin-right:10px;opacity:.9;transition:all ease .3s;font-size:14px;font-weight:bold;height:auto}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button:hover{opacity:1}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent{position:absolute;margin:2px 0 0 16px;cursor:pointer}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label{position:relative;padding:4px 0 0 50px;line-height:2.0em;cursor:pointer;display:inline;font-size:14px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label:before{content:"";position:absolute;display:block;left:0;top:0;width:40px;height:24px;border-radius:16px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label:after{content:"";position:absolute;display:block;left:0px;top:0px;width:24px;height:24px;border-radius:16px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent+label:hover:after{box-shadow:0 0 5px rgba(0,0,0,0.3)}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent:checked+label:after{margin-left:16px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent:checked+label:before{background:#55D069}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm{position:absolute;margin:5px 0 0 10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label{position:relative;padding:0 0 0 32px;line-height:1.3em}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label:before{content:"";position:absolute;display:block;left:0;top:0;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s;width:25px;height:15px;border-radius:10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label:after{content:"";position:absolute;display:block;left:0px;top:0px;background:#fff;border:1px solid #d9d9d9;-webkit-transition:all 0.3s;transition:all 0.3s;width:15px;height:15px;border-radius:10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm+label:hover:after{box-shadow:0 0 3px rgba(0,0,0,0.3)}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm:checked+label:after{margin-left:10px}.cookie-consent-preferences-overlay input[type="checkbox"].checkbox_cookie_consent-sm:checked+label:before{background:#55D069}@media screen and (max-width: 600px){.cookie-consent-preferences-overlay{overflow-y:scroll}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{flex-direction:column}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_title{align-items:center;padding:15px 0 0 0}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector{padding:15px 0;min-height:20px}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{flex-direction:column}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{width:100%}.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{border-right:0}}\n',
      "",
    ]);
  },
  function (e, o, t) {
    var n = t(25);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(1)(n, i);
    n.locals && (e.exports = n.locals);
  },
  function (e, o, t) {
    (e.exports = t(0)(!1)).push([
      e.i,
      ".dark.cc_dialog{background-color:#111;color:#fff}.dark.cc_dialog .cc_dialog_headline{color:#fff}.dark.cc_dialog .cc_dialog_text{color:#fff}.dark.cc_dialog button.cc_b_ok{color:#000;background-color:#ff0}.dark.cc_dialog button.cc_b_cp{background-color:#eaeaea;color:#111}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container{background:#212121}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{background:#212121;color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head h2{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head p{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector select{color:#212121}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{background:#292929 !important;color:#f5f5f5}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{color:#666;background:#e6e6e6}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{border-right-color:#ccc;border-bottom-color:#ccc}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true]{background:#292929 !important}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true] a{color:#f5f5f5 !important}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a{color:#666}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content{background:#292929 !important;color:#f5f5f5}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content h1{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content p{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content a{color:#cce5ff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer{background:#212121;border-top-color:#111}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by{color:#fff}.dark.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button{background:#ff0;color:#000}\n",
      "",
    ]);
  },
  function (e, o, t) {
    var n = t(27);
    "string" == typeof n && (n = [[e.i, n, ""]]);
    var i = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(1)(n, i);
    n.locals && (e.exports = n.locals);
  },
  function (e, o, t) {
    (e.exports = t(0)(!1)).push([
      e.i,
      ".light.cc_dialog{background-color:#f2f2f2;color:#111}.light.cc_dialog .cc_dialog_headline{color:#111}.light.cc_dialog .cc_dialog_text{color:#111}.light.cc_dialog button.cc_b_ok{color:#fff;background-color:green}.light.cc_dialog button.cc_b_cp{background-color:#eaeaea;color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container{background:#fff}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head{background:#fff;color:#111;border-bottom:1px solid #ccc}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head h2{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head p{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_head .cc_cp_head_lang_selector select{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content{background:#fbfbfb !important;color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu{color:#666;background:#e6e6e6}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li{border-right-color:#ccc;border-bottom-color:#ccc}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true]{background:#fbfbfb !important}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li[active=true] a{color:#111 !important}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_menu li a{color:#666}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content{background:#fbfbfb !important;color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content h1{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content p{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_content .cc_cp_m_content a{color:#007bff}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer{background:#f2f2f2;border-top-color:#ccc}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_powered_by{color:#111}.light.cookie-consent-preferences-overlay .cookie-consent-preferences-dialog .cc_cp_container .cc_cp_footer .cc_cp_f_save button{background:green;color:#fff}\n",
      "",
    ]);
  },
  function (e, o, t) {
    "use strict";
    t.r(o),
      t.d(o, "run", function () {
        return V;
      }),
      t.d(o, "consentDebugger", function () {
        return i;
      });
    t(19), t(22), t(24), t(26);
    var n,
      i,
      a = (function () {
        function e() {}
        return (
          (e.insertCss = function (e) {
            var o = document.querySelector("head"),
              t = document.createElement("link");
            t.setAttribute("href", e),
              t.setAttribute("rel", "stylesheet"),
              t.setAttribute("type", "text/css"),
              o.appendChild(t);
          }),
          (e.appendChild = function (e, o, t) {
            var n, i;
            return (
              void 0 === t && (t = null),
              (n = "string" == typeof e ? document.querySelector(e) : e),
              (i = "string" == typeof o ? document.querySelector(o) : o),
              "afterbegin" === t
                ? n.insertAdjacentElement("afterbegin", i)
                : n.insertAdjacentElement("beforeend", i),
              !0
            );
          }),
          (e.setCookie = function (e, o, t) {
            void 0 === t && (t = 62);
            var n = new Date();
            n.setTime(n.getTime() + 24 * t * 60 * 60 * 1e3);
            var i = "; expires=" + n.toUTCString();
            return (document.cookie = e + "=" + (o || "") + i + "; path=/"), !0;
          }),
          (e.getCookie = function (e) {
            for (
              var o = e + "=", t = document.cookie.split(";"), n = 0;
              n < t.length;
              n++
            ) {
              for (var i = t[n]; " " === i.charAt(0); )
                i = i.substring(1, i.length);
              if (0 === i.indexOf(o)) return i.substring(o.length, i.length);
            }
            return null;
          }),
          (e.removeCookie = function (e) {
            document.cookie = e + "=; Max-Age=-99999999;";
          }),
          (e.registerEvent = function (e) {
            var o = document.createEvent("Event");
            return o.initEvent(e, !0, !0), o;
          }),
          (e.searchObjectsArray = function (e, o, t) {
            for (var n in e) {
              if (e[n][o] === t) return !0;
            }
            return !1;
          }),
          (e.magicTransform = function (e) {
            return decodeURIComponent(
              atob(e)
                .split("")
                .map(function (e) {
                  return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
            );
          }),
          (e.isValidUrl = function (e) {
            return new RegExp(
              "^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
              "i"
            ).test(e);
          }),
          e
        );
      })(),
      r = t(2),
      s = t(3),
      c = t(4),
      l = t(5),
      p = t(6),
      d = t(7),
      u = t(8),
      k = t(9),
      f = t(10),
      v = t(11),
      m = t(12),
      g = t(13),
      _ = t(14),
      h = t(15),
      b = t(16),
      y = t(17),
      w = t(18),
      z = (function () {
        function e(e) {
          (this.cookieConsent = e),
            (this.userLang = "en"),
            this.initAvailableLanguages(),
            this.initDefaultTranslations(),
            this.detectUserLanguage();
        }
        return (
          (e.prototype.detectUserLanguage = function () {
            var e = "en";
            if (
              void 0 !==
              (e =
                void 0 !== navigator.languages
                  ? navigator.languages[0]
                  : navigator.language)
            ) {
              if (e.indexOf("-") > 0) {
                var o = e.split("-");
                e = o[0];
              }
              this.cookieConsent.log(
                "[i18n] Detected user default language: " + e,
                "info"
              );
            } else e = this.cookieConsent.ownerSiteLanguage;
            var t = e.toLowerCase.toString();
            this.availableTranslations[t]
              ? (this.userLang = t)
              : this.availableTranslations[this.cookieConsent.ownerSiteLanguage]
              ? (this.userLang = this.cookieConsent.ownerSiteLanguage)
              : (this.userLang = "en");
          }),
          (e.prototype.initDefaultTranslations = function () {
            (this.availableTranslations = {
              en: r,
              de: s,
              fr: c,
              es: l,
              it: p,
              nl: d,
              pt: u,
              hu: k,
              hr: f,
              da: v,
              ro: m,
              sl: g,
              pl: _,
              sr: h,
              bg: b,
              el: y,
              cy: w,
            }),
              this.cookieConsent.log(
                "[i18n] Default translations initialized",
                "info"
              );
          }),
          (e.prototype.initAvailableLanguages = function () {
            (this.availableLanguages = [
              { value: "en", title: "English" },
              { value: "de", title: "German" },
              { value: "fr", title: "French" },
              { value: "es", title: "Spanish" },
              { value: "it", title: "Italian" },
              { value: "nl", title: "Dutch" },
              { value: "pt", title: "Portugese" },
              { value: "hu", title: "Hungarian" },
              { value: "hr", title: "Croatian" },
              { value: "da", title: "Danish" },
              { value: "ro", title: "Romanian" },
              { value: "sl", title: "Slovenian" },
              { value: "pl", title: "Polish" },
              { value: "sr", title: "Serbian" },
              { value: "bg", title: "Bulgarian" },
              { value: "el", title: "Greek" },
              { value: "cy", title: "Welsh" },
            ]),
              this.cookieConsent.log(
                "[i18n] Default languages initialized",
                "info"
              );
          }),
          (e.prototype.$t = function (e, o, t) {
            void 0 === t && (t = null);
            var n = this.availableTranslations[this.userLang][e][o];
            return (
              "string" == typeof t
                ? (n = n.replace("%s", t))
                : Array.isArray(t) &&
                  t.map(function (e, o) {
                    var i = t[o];
                    n = n.replace("%s", i);
                  }),
              n || ""
            );
          }),
          e
        );
      })(),
      j =
        ((n = function (e, o) {
          return (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, o) {
                e.__proto__ = o;
              }) ||
            function (e, o) {
              for (var t in o) o.hasOwnProperty(t) && (e[t] = o[t]);
            })(e, o);
        }),
        function (e, o) {
          function t() {
            this.constructor = e;
          }
          n(e, o),
            (e.prototype =
              null === o
                ? Object.create(o)
                : ((t.prototype = o.prototype), new t()));
        }),
      C = (function () {
        function e(e) {
          (this.scripts = {}),
            (this.cookieConsent = e),
            this.cookieConsent.log("Javascript items initialized.", "info"),
            this.readScripts();
        }
        return (
          (e.prototype.readScripts = function () {
            var e = document.querySelectorAll('script[type="text/plain"]');
            for (var o in e) {
              var t = e[o];
              "object" == typeof t && this._noticeScriptIfValid(t);
            }
          }),
          (e.prototype._noticeScriptIfValid = function (e) {
            var o = e.getAttribute("cookie-consent");
            !0 ===
            a.searchObjectsArray(
              this.cookieConsent.cookieLevels.cookieLevels,
              "id",
              o
            )
              ? (this.cookieConsent.log(
                  "Javascript with valid cookie consent found",
                  "info"
                ),
                this.cookieConsent.log(e, "info"),
                void 0 === this.scripts[o] && (this.scripts[o] = []),
                this.scripts[o].push(e))
              : this.cookieConsent.log(
                  "Invalid cookie consent level for javascript sript: " + o,
                  "warning"
                );
          }),
          (e.prototype.enableScriptsByLevel = function (e) {
            for (var o in this.scripts[e])
              try {
                var t = this.scripts[e][o],
                  n = document.createElement("script");
                n.setAttribute("type", "text/javascript"),
                  n.setAttribute(
                    "initial-cookie-consent",
                    t.getAttribute("cookie-consent")
                  ),
                  null !== t.getAttribute("src") &&
                    n.setAttribute("src", t.getAttribute("src")),
                  (n.text = t.innerHTML),
                  a.appendChild("head", n),
                  t.parentNode.removeChild(t),
                  delete this.scripts[e][o];
              } catch (e) {
                this.cookieConsent.log(
                  "Got an error while trying to activate a script template, message: " +
                    e.message.toString(),
                  "log"
                );
              }
          }),
          e
        );
      })(),
      x = (function () {
        function e(e) {
          (this.acceptedLevels = {}),
            (this.userAccepted = !1),
            (this.consentLevelCookieName = "cookie_consent_level"),
            (this.consentAcceptedCookieName = "cookie_consent_user_accepted"),
            (this.loadCookiesUntilAndInclude = "strictly-necessary"),
            (this.cookieConsent = e),
            this.cookieConsent.log("UserConsent initialized.", "info"),
            this.checkIfUserAccepted(),
            this.getUserLevels();
        }
        return (
          (e.prototype.checkIfUserAccepted = function () {
            "true" === a.getCookie(this.consentAcceptedCookieName) &&
              (this.userAccepted = !0);
          }),
          (e.prototype.markUserAccepted = function () {
            (this.userAccepted = !0),
              !1 === this.cookieConsent.isDemo &&
                a.setCookie(this.consentAcceptedCookieName, "true");
          }),
          (e.prototype.getUserLevels = function () {
            var e = a.getCookie(this.consentLevelCookieName),
              o = {};
            try {
              o = JSON.parse(decodeURIComponent(e));
            } catch (e) {
              o = null;
            }
            if (null === o)
              document.dispatchEvent(this.cookieConsent.events.cc_freshUser),
                (this.acceptedLevels["strictly-necessary"] = !0),
                (this.acceptedLevels.functionality = !1),
                (this.acceptedLevels.tracking = !1),
                (this.acceptedLevels.targeting = !1);
            else {
              for (var t in this.cookieConsent.cookieLevels.cookieLevels) {
                var n = this.cookieConsent.cookieLevels.cookieLevels[t].id;
                !0 === o[n]
                  ? (this.acceptedLevels[n] = !0)
                  : (this.acceptedLevels[n] = !1),
                  this.saveCookie();
              }
              this.cookieConsent.log(this.acceptedLevels, "info", "table");
            }
          }),
          (e.prototype.enableAllCookies = function () {
            for (var e in this.cookieConsent.cookieLevels.cookieLevels) {
              var o = this.cookieConsent.cookieLevels.cookieLevels[e].id;
              this.acceptLevel(o);
            }
          }),
          (e.prototype.loadCookiesUntilMaxLevel = function () {
            var e = !1;
            for (var o in this.cookieConsent.cookieLevels.cookieLevels) {
              if (e) break;
              var t = this.cookieConsent.cookieLevels.cookieLevels[o].id;
              t === this.loadCookiesUntilAndInclude && (e = !0),
                !1 !== this.acceptedLevels[t] &&
                  this.cookieConsent.javascriptItems.enableScriptsByLevel(t);
            }
          }),
          (e.prototype.loadAcceptedCookies = function () {
            for (var e in this.cookieConsent.cookieLevels.cookieLevels) {
              var o = this.cookieConsent.cookieLevels.cookieLevels[e].id;
              !1 !== this.acceptedLevels[o] &&
                this.cookieConsent.javascriptItems.enableScriptsByLevel(o);
            }
          }),
          (e.prototype.checkIsAccepted = function (e) {
            var o = !1;
            return (
              e in this.acceptedLevels &&
                !0 === this.acceptedLevels[e] &&
                (o = !0),
              o
            );
          }),
          (e.prototype.acceptLevel = function (e) {
            return (
              this.cookieConsent.log("Accepted cookie level: " + e, "info"),
              (this.acceptedLevels[e] = !0),
              this.saveCookie()
            );
          }),
          (e.prototype.rejectLevel = function (e) {
            return (
              this.cookieConsent.log("Rejected cookie level: " + e, "info"),
              (this.acceptedLevels[e] = !1),
              this.saveCookie()
            );
          }),
          (e.prototype.saveCookie = function () {
            var e = encodeURIComponent(JSON.stringify(this.acceptedLevels));
            return (
              a.setCookie(this.consentLevelCookieName, e),
              this.cookieConsent.log(
                "Saved cookies containing the user consent level",
                "info"
              ),
              !0
            );
          }),
          e
        );
      })(),
      L = function () {
        (this.cc_dialogShown = a.registerEvent("cc_dialogShown")),
          (this.cc_dialogOkPressed = a.registerEvent("cc_dialogOkPressed")),
          (this.cc_dialogPreferencesPressed = a.registerEvent(
            "cc_dialogPreferencesPressed"
          )),
          (this.cc_userLanguageChanged = a.registerEvent(
            "cc_userLanguageChanged"
          )),
          (this.cc_preferencesSavePressed = a.registerEvent(
            "cc_preferencesSavePressed"
          )),
          (this.cc_freshUser = a.registerEvent("cc_freshUser")),
          (this.cc_userChangedConsent = a.registerEvent(
            "cc_userChangedConsent"
          ));
      },
      S = (function () {
        function e(e) {
          (this.cookieConsent = e),
            this.cc_dialogShown(),
            this.cc_dialogOkPressed(),
            this.cc_dialogPreferencesPressed(),
            this.cc_userLanguageChanged(),
            this.cc_preferencesSavePressed(),
            this.cc_freshUser(),
            this.cc_userChangedConsent();
        }
        return (
          (e.prototype.cc_dialogShown = function () {
            var e = this;
            window.addEventListener("cc_dialogShown", function () {
              e.cookieConsent.log("cc_dialogShown triggered", "event");
            });
          }),
          (e.prototype.cc_dialogOkPressed = function () {
            var e = this;
            document.addEventListener("cc_dialogOkPressed", function () {
              e.cookieConsent.log("cc_dialogOkPressed triggered", "event"),
                e.cookieConsent.consentType instanceof N
                  ? (e.cookieConsent.userConsent.enableAllCookies(),
                    e.cookieConsent.userConsent.markUserAccepted(),
                    e.cookieConsent.userConsent.loadAcceptedCookies())
                  : e.cookieConsent.userConsent.markUserAccepted(),
                e.cookieConsent.consentBanner.hideDialog();
            });
          }),
          (e.prototype.cc_dialogPreferencesPressed = function () {
            var e = this;
            window.addEventListener("cc_dialogPreferencesPressed", function () {
              e.cookieConsent.log(
                "cc_dialogPreferencesPressed triggered",
                "event"
              ),
                e.cookieConsent.consentPreferences.showPreferences();
            });
          }),
          (e.prototype.cc_userLanguageChanged = function () {
            var e = this;
            window.addEventListener("cc_userLanguageChanged", function () {
              e.cookieConsent.log("cc_userLanguageChanged triggered", "event");
            });
          }),
          (e.prototype.cc_preferencesSavePressed = function () {
            var e = this;
            window.addEventListener("cc_preferencesSavePressed", function () {
              e.cookieConsent.log(
                "cc_preferencesSavePressed triggered",
                "event"
              ),
                e.cookieConsent.userConsent.markUserAccepted(),
                e.cookieConsent.userConsent.loadAcceptedCookies(),
                e.cookieConsent.consentPreferences.hidePreferences(),
                e.cookieConsent.consentBanner.hideDialog();
            });
          }),
          (e.prototype.cc_freshUser = function () {
            var e = this;
            window.addEventListener("cc_freshUser", function () {
              e.cookieConsent.log("cc_freshUser triggered", "event");
            });
          }),
          (e.prototype.cc_userChangedConsent = function () {
            var e = this;
            window.addEventListener("cc_userChangedConsent", function () {
              e.cookieConsent.log("cc_userChangedConsent triggered", "event");
            });
          }),
          e
        );
      })(),
      A = (function () {
        function e(e) {
          (this.cookieConsent = e),
            this.initDefaultLevels(),
            this.initPreferenceItems();
        }
        return (
          (e.prototype.languageChanged = function () {
            this.initDefaultLevels(), this.initPreferenceItems();
          }),
          (e.prototype.initDefaultLevels = function () {
            this.cookieLevels = [
              {
                id: "strictly-necessary",
                title: this.cookieConsent.i18n.$t(
                  "level_strictly_necessary",
                  "title"
                ),
                content: this.cookieConsent.i18n.$t(
                  "level_strictly_necessary",
                  "content"
                ),
              },
              {
                id: "functionality",
                title: this.cookieConsent.i18n.$t(
                  "level_functionality",
                  "title"
                ),
                content: this.cookieConsent.i18n.$t(
                  "level_functionality",
                  "content"
                ),
              },
              {
                id: "tracking",
                title: this.cookieConsent.i18n.$t("level_tracking", "title"),
                content: this.cookieConsent.i18n.$t(
                  "level_tracking",
                  "content"
                ),
              },
              {
                id: "targeting",
                title: this.cookieConsent.i18n.$t("level_targeting", "title"),
                content: this.cookieConsent.i18n.$t(
                  "level_targeting",
                  "content"
                ),
              },
            ];
          }),
          (e.prototype.initPreferenceItems = function () {
            this.preferenceItems = [
              {
                title: this.cookieConsent.i18n.$t(
                  "preference_center_menu_and_content",
                  "your_privacy_title"
                ),
                content_container: "content_your_privacy",
                content: this.cookieConsent.i18n.$t(
                  "preference_center_menu_and_content",
                  "your_privacy_content"
                ),
              },
            ];
            for (var e = 0, o = this.cookieLevels; e < o.length; e++) {
              var t = o[e];
              this.preferenceItems.push({
                id: t.id,
                title: t.title,
                content_container: "content_" + t.id,
                content:
                  "\n<h1>" + t.title + "</h1>\n<p>" + t.content + "</p>\n",
              });
            }
            this.preferenceItems.push({
              title: this.cookieConsent.i18n.$t(
                "preference_center_menu_and_content",
                "more_information_title"
              ),
              content_container: "content_more_information",
              content: this.cookieConsent.i18n.$t(
                "preference_center_menu_and_content",
                "more_information_content"
              ),
            }),
              null !== this.cookieConsent.cookiesPolicyUrl &&
                a.isValidUrl(this.cookieConsent.cookiesPolicyUrl) &&
                (this.preferenceItems[this.preferenceItems.length - 1].content =
                  this.preferenceItems[this.preferenceItems.length - 1]
                    .content +
                  this.cookieConsent.i18n.$t(
                    "dialog",
                    "find_out_more",
                    this.cookieConsent.cookiesPolicyUrl
                  ));
          }),
          e
        );
      })(),
      P = (function () {
        function e(e) {
          (this.cpOverlay = null), (this.cookieConsent = e);
        }
        return (
          (e.prototype.listenToUserButtonToOpenPreferences = function (e) {
            var o = this,
              t = document.querySelector(e);
            t &&
              t.addEventListener("click", function () {
                document.dispatchEvent(
                  o.cookieConsent.events.cc_dialogPreferencesPressed
                ),
                  o.showPreferences();
              });
          }),
          (e.prototype.showPreferences = function () {
            null === this.cpOverlay &&
              ((this.cpOverlay = this.createPreferencesOverlayAndDialog()),
              a.appendChild("body", this.cpOverlay)),
              this.cpOverlay.classList.add("visible"),
              this.cookieConsent.log(
                "Cookie preferences dialog was shown",
                "info"
              );
          }),
          (e.prototype.hidePreferences = function () {
            this.cpOverlay.classList.remove("visible"),
              this.cookieConsent.log(
                "Cookie preferences dialog was hidden",
                "info"
              );
          }),
          (e.prototype.refreshPreferences = function () {
            if (null !== this.cpOverlay)
              return (
                this.cpOverlay.parentNode.removeChild(this.cpOverlay),
                (this.cpOverlay = null),
                this.showPreferences()
              );
          }),
          (e.prototype.createPreferencesOverlayAndDialog = function () {
            var e = document.createElement("div");
            e.classList.add("cookie-consent-preferences-overlay"),
              e.classList.add(this.cookieConsent.colorPalette.getClass()),
              e.classList.add("cc_css_reboot");
            var o = document.createElement("div");
            o.classList.add("cookie-consent-preferences-dialog");
            var t = document.createElement("div");
            t.classList.add("cc_cp_container");
            var n = document.createElement("div");
            n.classList.add("cc_cp_head");
            var i = document.createElement("div");
            if (
              (i.classList.add("cc_cp_head_title"),
              this.cookieConsent.ownerWebsiteName.length > 2)
            ) {
              var r = document.createElement("p");
              (r.innerText = this.cookieConsent.ownerWebsiteName),
                a.appendChild(i, r);
            }
            var s = document.createElement("h2");
            (s.innerHTML = this.cookieConsent.i18n.$t(
              "preference_center",
              "title"
            )),
              a.appendChild(i, s);
            var c = document.createElement("div");
            c.classList.add("cc_cp_head_lang_selector");
            var l = this.obtainLanguageSelector();
            a.appendChild(c, l), a.appendChild(n, i), a.appendChild(n, c);
            var p = document.createElement("div");
            p.classList.add("cc_cp_content");
            var d = this.getMenuContainer(),
              u = this.getContentContainer();
            a.appendChild(p, d), a.appendChild(p, u);
            var k = this.getFooterContainer();
            return (
              a.appendChild(t, n),
              a.appendChild(t, p),
              a.appendChild(t, k),
              a.appendChild(o, t),
              a.appendChild(e, o),
              e
            );
          }),
          (e.prototype.obtainLanguageSelector = function () {
            var e = this,
              o = document.createElement("select");
            return (
              [].forEach.call(
                e.cookieConsent.i18n.availableLanguages,
                function (t) {
                  var n = document.createElement("option");
                  (n.text = t.title),
                    (n.value = t.value),
                    e.cookieConsent.i18n.userLang === n.value &&
                      n.setAttribute("selected", "selected"),
                    o.add(n);
                }
              ),
              o.addEventListener("change", function () {
                (e.cookieConsent.i18n.userLang = o.value),
                  e.cookieConsent.cookieLevels.languageChanged(),
                  e.refreshPreferences(),
                  document.dispatchEvent(
                    e.cookieConsent.events.cc_userLanguageChanged
                  );
              }),
              o
            );
          }),
          (e.prototype.getContentContainer = function () {
            var e = this,
              o = document.createElement("div");
            o.classList.add("cc_cp_m_content");
            var t = 0;
            return (
              e.cookieConsent.cookieLevels.preferenceItems.forEach(function (
                n
              ) {
                var i = document.createElement("div");
                if (
                  (i.classList.add("cc_cp_m_content_entry"),
                  i.setAttribute("content_layout", n.content_container),
                  i.setAttribute("active", "false"),
                  (i.innerHTML = n.content),
                  0 === t && i.setAttribute("active", "true"),
                  t++,
                  n.id)
                ) {
                  var r = e._getLevelCheckbox(n);
                  a.appendChild(i, r);
                }
                a.appendChild(o, i);
              }),
              o
            );
          }),
          (e.prototype.getMenuContainer = function () {
            var e = this,
              o = document.createElement("ul");
            o.classList.add("cc_cp_m_menu");
            var t = 0;
            return (
              e.cookieConsent.cookieLevels.preferenceItems.forEach(function (
                n
              ) {
                var i = document.createElement("li"),
                  r = document.createElement("a");
                r.setAttribute("href", "#"),
                  r.setAttribute("t", n.content_container),
                  (r.innerHTML = n.title),
                  0 === t && i.setAttribute("active", "true"),
                  t++,
                  r.addEventListener("click", function (o) {
                    o.preventDefault(),
                      e.cookieConsent.log(
                        "Preferences menu item clicked: " + n.title,
                        "info"
                      );
                    var t = document.querySelectorAll('li[active="true"]');
                    [].forEach.call(t, function (e) {
                      e.setAttribute("active", "false");
                    }),
                      i.setAttribute("active", "true");
                    try {
                      var a = document.querySelectorAll("div[content_layout]");
                      [].forEach.call(a, function (e) {
                        e.setAttribute("active", "false");
                      }),
                        document
                          .querySelector(
                            'div[content_layout="' + n.content_container + '"]'
                          )
                          .setAttribute("active", "true");
                    } catch (o) {}
                  }),
                  a.appendChild(i, r),
                  a.appendChild(o, i);
              }),
              o
            );
          }),
          (e.prototype.getFooterContainer = function () {
            var e = this,
              o = document.createElement("div");
            o.classList.add("cc_cp_footer");
            var t = document.createElement("div");
            t.classList.add("cc_cp_f_powered_by"),
              (t.innerHTML = a.magicTransform(
                "Q29va2llIENvbnNlbnQgYnkgPGEgaHJlZj0iaHR0cHM6Ly93d3cuZnJlZXByaXZhY3lwb2xpY3kuY29tL2ZyZWUtY29va2llLWNvbnNlbnQvIiB0YXJnZXQ9Il9ibGFuayI+RnJlZVByaXZhY3lQb2xpY3kuY29tPC9hPg=="
              ));
            var n = document.createElement("div");
            n.classList.add("cc_cp_f_save");
            var i = document.createElement("button");
            return (
              (i.innerHTML = e.cookieConsent.i18n.$t(
                "preference_center",
                "save"
              )),
              i.addEventListener("click", function () {
                document.dispatchEvent(
                  e.cookieConsent.events.cc_preferencesSavePressed
                );
              }),
              a.appendChild(n, i),
              a.appendChild(o, t),
              a.appendChild(o, n),
              o
            );
          }),
          (e.prototype._getLevelCheckbox = function (e) {
            var o = this,
              t = document.createElement("div");
            if ("strictly-necessary" !== e.id) {
              var n = o.cookieConsent.userConsent.acceptedLevels,
                i = document.createElement("input");
              i.setAttribute("cookie_consent_toggler", "true"),
                i.setAttribute("type", "checkbox"),
                i.setAttribute("class", "checkbox_cookie_consent"),
                i.setAttribute("id", e.id),
                i.setAttribute("name", e.id),
                (r = document.createElement("label")).setAttribute("for", e.id),
                n[e.id]
                  ? (i.setAttribute("checked", "checked"),
                    r.setAttribute("class", "is-active"),
                    (r.innerHTML = o.cookieConsent.i18n.$t("dialog", "active")))
                  : (r.setAttribute("class", "is-inactive"),
                    (r.innerHTML = o.cookieConsent.i18n.$t(
                      "dialog",
                      "inactive"
                    ))),
                i.addEventListener("change", function () {
                  var t = i.checked,
                    n = e.id,
                    a = document.querySelector('label[for="' + n + '"]');
                  o.cookieConsent.log(
                    "User changed toggle for cookie level [" +
                      n +
                      "], new status: " +
                      t,
                    "info"
                  ),
                    document.dispatchEvent(
                      o.cookieConsent.events.cc_userChangedConsent
                    ),
                    !0 === t
                      ? (o.cookieConsent.userConsent.acceptLevel(n),
                        (a.innerHTML = o.cookieConsent.i18n.$t(
                          "dialog",
                          "active"
                        )))
                      : (o.cookieConsent.userConsent.rejectLevel(n),
                        (a.innerHTML = o.cookieConsent.i18n.$t(
                          "dialog",
                          "inactive"
                        )));
                }),
                a.appendChild(t, i),
                a.appendChild(t, r);
            } else {
              var r,
                s = document.createElement("input");
              s.setAttribute("cookie_consent_toggler", "true"),
                s.setAttribute("type", "checkbox"),
                s.setAttribute("checked", "checked"),
                s.setAttribute("disabled", "disabled"),
                s.setAttribute("class", "checkbox_cookie_consent"),
                s.setAttribute("id", e.id),
                s.setAttribute("name", e.id),
                (r = document.createElement("label")).setAttribute("for", e.id),
                (r.innerHTML = o.cookieConsent.i18n.$t(
                  "dialog",
                  "always_active"
                )),
                a.appendChild(t, s),
                a.appendChild(t, r);
            }
            return t;
          }),
          e
        );
      })(),
      E = (function () {
        function e(e) {
          (this.dialog = null),
            (this.dialogOverlay = null),
            (this.dialogExtraCss = []),
            (this.cookieConsent = e),
            this.dialogExtraCss.push(e.colorPalette.getClass());
        }
        return (
          (e.prototype.initDialog = function () {
            return (
              null === this.dialog && (this.dialog = this.createDialog()),
              a.appendChild("body", this.dialog, "afterbegin"),
              this.cookieConsent.log("Consent dialog shown", "info"),
              document.dispatchEvent(this.cookieConsent.events.cc_dialogShown),
              !0
            );
          }),
          (e.prototype.hideDialog = function () {
            try {
              this.dialog.classList.add("hidden"),
                this.cookieConsent.log("Consent dialog hidden", "info");
            } catch (e) {}
          }),
          (e.prototype.createDialog = function () {
            var e = document.createElement("div");
            if (
              (e.classList.add("cc_css_reboot"),
              e.classList.add("cc_dialog"),
              this.dialogExtraCss.length)
            )
              for (var o = 0, t = this.dialogExtraCss; o < t.length; o++) {
                var n = t[o];
                e.classList.add(n);
              }
            if (
              (a.appendChild(e, this.createDialogContent()),
              "interstitial" === this.cookieConsent.userNoticeType)
            ) {
              var i = document.createElement("div");
              return i.classList.add("cc_overlay_lock"), a.appendChild(i, e), i;
            }
            return e;
          }),
          (e.prototype.createDialogContent = function () {
            var e = this,
              o = document.createElement("div"),
              t = document.createElement("h1");
            t.classList.add("cc_dialog_headline"),
              (t.innerText = e.cookieConsent.i18n.$t("dialog", "title"));
            var n = document.createElement("div"),
              i = document.createElement("p");
            i.classList.add("cc_dialog_text"),
              (i.innerHTML = e.cookieConsent.i18n.$t("dialog", "text")),
              a.appendChild(n, i);
            var r = document.createElement("button");
            r.classList.add("cc_b_ok"),
              "express" == e.cookieConsent.userConsentType
                ? (r.innerHTML = e.cookieConsent.i18n.$t(
                    "dialog",
                    "i_agree_text"
                  ))
                : (r.innerHTML = e.cookieConsent.i18n.$t("dialog", "ok_text")),
              r.addEventListener("click", function () {
                document.dispatchEvent(
                  e.cookieConsent.events.cc_dialogOkPressed
                );
              });
            var s = document.createElement("button");
            s.classList.add("cc_b_cp"),
              (s.innerHTML = e.cookieConsent.i18n.$t(
                "dialog",
                "change_settings"
              )),
              s.addEventListener("click", function () {
                document.dispatchEvent(
                  e.cookieConsent.events.cc_dialogPreferencesPressed
                );
              });
            var c = document.createElement("div");
            return (
              a.appendChild(c, r),
              a.appendChild(c, s),
              a.appendChild(o, t),
              a.appendChild(o, n),
              a.appendChild(o, c),
              o
            );
          }),
          e
        );
      })(),
      I = (function (e) {
        function o(o) {
          var t = e.call(this, o) || this;
          return t.dialogExtraCss.push("simple"), t;
        }
        return j(o, e), o;
      })(E),
      T = (function (e) {
        function o(o) {
          var t = e.call(this, o) || this;
          return t.dialogExtraCss.push("headline"), t;
        }
        return j(o, e), o;
      })(E),
      O = (function (e) {
        function o(o) {
          var t = e.call(this, o) || this;
          return t.dialogExtraCss.push("interstitial"), t;
        }
        return j(o, e), o;
      })(E),
      U = (function (e) {
        function o(o) {
          var t = e.call(this, o) || this;
          return t.dialogExtraCss.push("standalone"), t;
        }
        return j(o, e), o;
      })(E),
      D = (function () {
        function e(e) {
          e.log("ConsentType main class initialized", "info");
        }
        return (e.prototype.loadInitialCookies = function () {}), e;
      })(),
      N = (function (e) {
        function o(o) {
          var t = e.call(this, o) || this;
          return (t.cookieConsent = o), t;
        }
        return (
          j(o, e),
          (o.prototype.loadInitialCookies = function () {
            var e = this.cookieConsent.cookieLevels.cookieLevels[0].id;
            (this.cookieConsent.userConsent.loadCookiesUntilAndInclude = e.toString()),
              this.cookieConsent.userConsent.loadCookiesUntilMaxLevel();
          }),
          o
        );
      })(D),
      M = (function (e) {
        function o(o) {
          var t = e.call(this, o) || this;
          return (t.cookieConsent = o), t;
        }
        return (
          j(o, e),
          (o.prototype.loadInitialCookies = function () {
            var e = this.cookieConsent.cookieLevels.cookieLevels.length,
              o = this.cookieConsent.cookieLevels.cookieLevels[e - 1].id;
            (this.cookieConsent.userConsent.loadCookiesUntilAndInclude = o.toString()),
              this.cookieConsent.userConsent.loadCookiesUntilMaxLevel();
          }),
          o
        );
      })(D),
      q = (function () {
        function e(e) {
          this.cookieConsent = e;
        }
        return (
          (e.prototype.getClass = function () {
            return "light";
          }),
          e
        );
      })(),
      W = (function (e) {
        function o(o) {
          var t = e.call(this, o) || this;
          return (t.cookieConsent = o), t;
        }
        return (
          j(o, e),
          (o.prototype.getClass = function () {
            return "dark";
          }),
          o
        );
      })(q),
      B = (function (e) {
        function o(o) {
          var t = e.call(this, o) || this;
          return (t.cookieConsent = o), t;
        }
        return (
          j(o, e),
          (o.prototype.getClass = function () {
            return "light";
          }),
          o
        );
      })(q),
      R = (function () {
        function e(e) {
          switch (
            ((this.debug = !1),
            (this.ownerWebsiteName = e.website_name || ""),
            (this.cookiesPolicyUrl = e.cookies_policy_url || null),
            (this.userConsentType = e.consent_type || "express"),
            (this.userNoticeType = e.notice_banner_type || "headline"),
            (this.userColorPalette = e.palette || "light"),
            (this.ownerSiteLanguage = e.language || "en"),
            (this.userLanguageStrings = e.language_overwrite || {}),
            (this.changePreferencesSelector =
              e.change_preferences_selector || null),
            (this.isDemo = "true" == e.demo),
            (this.debug = "true" == e.debug),
            this.userConsentType)
          ) {
            default:
            case "express":
              this.consentType = new N(this);
              break;
            case "implied":
              this.consentType = new M(this);
          }
          switch (this.userColorPalette) {
            default:
            case "dark":
              this.colorPalette = new W(this);
              break;
            case "light":
              this.colorPalette = new B(this);
          }
          switch (this.userNoticeType) {
            default:
            case "simple":
              this.consentBanner = new I(this);
              break;
            case "headline":
              this.consentBanner = new T(this);
              break;
            case "interstitial":
              this.consentBanner = new O(this);
              break;
            case "standalone":
              this.consentBanner = new U(this);
          }
          (this.events = new L()),
            (this.eventsListeners = new S(this)),
            (this.i18n = new z(this)),
            (this.cookieLevels = new A(this)),
            (this.userConsent = new x(this)),
            (this.javascriptItems = new C(this)),
            (this.consentPreferences = new P(this)),
            null !== this.changePreferencesSelector &&
              this.consentPreferences.listenToUserButtonToOpenPreferences(
                this.changePreferencesSelector
              ),
            !0 === this.userConsent.userAccepted
              ? (this.userConsent.loadAcceptedCookies(),
                !0 === this.isDemo && this.consentBanner.initDialog())
              : (this.consentBanner.initDialog(),
                this.consentType.loadInitialCookies());
        }
        return (
          (e.prototype.log = function (e, o, t) {
            void 0 === t && (t = "log"),
              !0 === this.debug &&
                ("log" === t || "table" === t) &&
                console.log("[" + o + "]", e);
          }),
          e
        );
      })(),
      V = function (e) {
        return (i = new R(e));
      };
  },
]);
