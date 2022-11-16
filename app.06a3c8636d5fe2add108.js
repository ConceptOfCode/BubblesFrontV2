(() => {
    "use strict";
    var e, t = {
        499: (e, t, n) => {
            var r = n(893),
                i = n(745);
            class s { }
            s.version = 29, s.appName = "Crypto Bubbles", s.usernameTwitter = "CryptoBubbles", s.usernameInstagram = "cryptobubbles", s.emailAddress = "contact@cryptobubbles.net", s.imageLogo = "/images/logo64.png", s.binanceReferralCode = "BRM28YZ5", s.binanceReferralLink = `https://www.binance.com/en/register?ref=${s.binanceReferralCode}`, s.kucoinReferralCode = "P8Neuc", s.kucoinReferralLink = `https://www.kucoin.com/r/${s.kucoinReferralCode}`, s.gateIoReferralCode = "7393347", s.gateIoReferralLink = `https://www.gate.io/signup/${s.gateIoReferralCode}`, s.bubbleCanvasPadding = Math.round(2 * window.devicePixelRatio), s.bubbleBorderWidth = Math.round(2 * window.devicePixelRatio), s.bubbleExtraHitbox = Math.round(4 * window.devicePixelRatio);
            class a {
                static get(e, t) {

                    return fetch(e , {
                        method: "GET",
                    })
                        .then((e => e.json()))
                }                
                static post(e, t) {

                }
            }
            const o = "abcdefghjiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            class c {
                static start(e) {
                    const t = navigator.userAgent.toLowerCase(),
                        n = -1 !== t.indexOf("android"),
                        r = -1 !== t.indexOf("iphone") || -1 !== t.indexOf("ipad");
                    this.env = e, this.isWeb = "web" === e, this.isMobile = n || r, this.isDesktop = !this.isMobile, this.isMissingAndroidApp = this.isWeb && n, this.isMissingIosApp = this.isWeb && r;
                    for (let e = 0; e < 6; e++) this.id += o[Math.floor(Math.random() * o.length)];
                    window.onCryptoBubblesBack = () => this.closeWindow(), window.addEventListener("error", (e => this.handleError(e))), window.addEventListener("keydown", (e => {
                        "Escape" === e.key && this.closeWindow()
                    }))
                }
                static postAccess(e) {
                    const t = new FormData;
                    t.append("session", this.id), t.append("isMobile", this.isMobile ? "1" : "0"), t.append("translation", e.translation.id), t.append("basecurrency", e.baseCurrency.id), document.referrer && t.append("referer", document.referrer), t.append("env", `${this.env}-${s.version}`), a.post("access.php", t)
                }
                static closeWindow() {
                    return !this.closeListener || (this.closeListener(), this.closeListener = null, !1)
                }
                static handleError(e) {
                    if (this.errorsLeft > 0) {
                        const {
                            filename: t,
                            lineno: n,
                            colno: r,
                            message: i
                        } = e;
                        this.errorsLeft--, this.logAction("ERROR", `${t}:${n}:${r} ${i}`)
                    }
                }
                static logAction(e, t = null) {
                    const n = new FormData;
                    n.append("session", this.id), n.append("type", e), null !== t && n.append("extra", t), a.post("action.php", n)
                }
                static registerCloseListener(e) {
                    this.closeListener && this.closeListener !== e && this.closeListener(), this.closeListener = e
                }
                static unregisterCloseListener(e) {
                    this.closeListener === e && (this.closeListener = null)
                }
            }
            c.errorsLeft = 3, c.id = "", c.closeListener = null;
            var l = n(294);
            const d = "settings";
            let u = "";
            class h {
                static save(e) {
                    const t = [];
                    for (const n in e.favorites) e.favorites[n] && t.push(n);
                    const n = {};
                    for (const t of e.settings) n[t.id] = t.pinned;
                    const r = {
                        baseCurrency: e.baseCurrency.id,
                        translation: e.translation.id,
                        configurations: e.configurations,
                        selectedConfiguration: e.configurationId,
                        favoritesCMC: t,
                        currencyFilter: e.filter,
                        settings: n,
                        colors: e.colors
                    },
                        i = JSON.stringify(r);
                    if (u !== i) try {
                        localStorage.setItem(d, i), u = i
                    } catch (e) { }
                }
                static load() {
                    try {
                        const e = localStorage.getItem(d);
                        if (e) {
                            const t = JSON.parse(e);
                            if (t) {
                                if (t.configurations) {
                                    let e = !0;
                                    for (const n of t.configurations)
                                        if (!n.name.startsWith("Chart #")) {
                                            e = !1;
                                            break
                                        }
                                    e && (t.configurations = void 0)
                                }
                                return t
                            }
                        }
                    } catch (e) { }
                    return null
                }
            }
            const p = {
                id: "en",
                flag: "🇺🇸",
                name: "English",
                loading: "Content is loading...",
                currencyName: "Name",
                settings: "Settings",
                filter: "Filter",
                currency: "Currency",
                language: "Language",
                colors: "Colors",
                pin: "Pin",
                red_green: "Red + Green",
                yellow_blue: "Yellow + Blue",
                rank: "Rank",
                marketcap: "Market Cap",
                volume: "24h Volume",
                price: "Price",
                dominance: "Dominance",
                performance: "Performance",
                neutral: "Neutral",
                period_hour: "Hour",
                period_day: "Day",
                period_week: "Week",
                period_month: "Month",
                period_year: "Year",
                favorites: "Favorites",
                add_favorite: "Add to favorites",
                remove_favorite: "Remove from favorites",
                search_crypto: "Search cryptocurrency",
                bubble_size: "Bubble size",
                bubble_content: "Bubble content",
                bubble_color: "Bubble color",
                period: "Period",
                description: "Interactive bubble chart for the TOP 1000 cryptocurrencies",
                support_my_work: "Support my work",
                window_close: "Close window",
                window_toggleExpand: "Toggle expansion",
                configuration_add: "Add chart",
                configuration_edit: "Edit chart",
                configuration_delete: "Delete chart",
                copy: "Copy",
                not_found: "Not found in the TOP 1000",
                no_favorites: "No Favorites added",
                scroll_toast: "Search + List",
                links: "Links",
                favorite_exchange: "Favorite Exchange",
                exchanges: "Exchanges",
                pages: "Pages"
            },
                g = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3],
                b = e => {
                    const {
                        selections: t,
                        dispatch: n
                    } = e, {
                        filter: i,
                        translation: s
                    } = t;
                    return (0, r.jsxs)("select", Object.assign({
                        value: i,
                        onChange: function (e) {
                            const {
                                value: t
                            } = e.target;
                            t && n({
                                type: 10,
                                filter: t
                            })
                        }
                    }, {
                        children: [(0, r.jsxs)("option", Object.assign({
                            value: "favorites"
                        }, {
                            children: ["★ ", s.favorites]
                        })), (0, r.jsx)("optgroup", Object.assign({
                            label: s.pages
                        }, {
                            children: g.map((e => (0, r.jsxs)("option", Object.assign({
                                value: `top-${e}`
                            }, {
                                children: ["TOP ", e]
                            }), e)))
                        })), (0, r.jsx)("optgroup", Object.assign({
                            label: s.exchanges
                        }, {
                            children: _.exchanges.map((e => (0, r.jsx)("option", Object.assign({
                                value: `on-${e.id}`
                            }, {
                                children: e.name
                            }), e.id)))
                        }))]
                    }))
                },
                m = [{
                    value: "red-green",
                    label: e => e.red_green
                }, {
                    value: "yellow-blue",
                    label: e => e.yellow_blue
                }],
                f = e => (0, r.jsxs)("svg", Object.assign({
                    viewBox: "0 0 2500 2500",
                    width: 24,
                    height: 24
                }, e, {
                    children: [(0, r.jsx)("path", {
                        d: "M764.48,1050.52,1250,565l485.75,485.73,282.5-282.5L1250,0,482,768l282.49,282.5M0,1250,282.51,967.45,565,1249.94,282.49,1532.45Zm764.48,199.51L1250,1935l485.74-485.72,282.65,282.35-.14.15L1250,2500,482,1732l-.4-.4,282.91-282.12M1935,1250.12l282.51-282.51L2500,1250.1,2217.5,1532.61Z"
                    }), (0, r.jsx)("path", {
                        d: "M1536.52,1249.85h.12L1250,963.19,1038.13,1175h0l-24.34,24.35-50.2,50.21-.4.39.4.41L1250,1536.81l286.66-286.66.14-.16-.26-.14"
                    })]
                })),
                v = e => {
                    const {
                        href: t,
                        title: n,
                        className: i,
                        name: s,
                        children: a,
                        onClick: o
                    } = e;
                    return (0, r.jsx)("a", Object.assign({
                        href: t,
                        title: n,
                        className: i,
                        target: "_blank",
                        rel: "noopener",
                        onClick: function () {
                            c.logAction("CLICK_LINK", s), o && o()
                        }
                    }, {
                        children: a
                    }))
                },
                j = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "m7.9 12 7.1 6.5 4.5-4.1a2 1.9 0 1 1 2.9 2.6l-5.9 5.4a2.1 1.9 0 0 1-2.9 0l-8.5-7.8v4.7a2 1.9 0 1 1-4.1 0v-15a2 1.9 0 1 1 4.1 0v4.7l8.5-7.8a2.1 1.9 0 0 1 2.9 0l5.9 5.4a2 1.9 0 1 1-2.9 2.6l-4.5-4.1zm7.1-1.9a2 1.9 0 1 0 2 1.9 2 1.9 0 0 0-2-1.9z"
                    })
                })),
                y = e => (0, r.jsxs)("svg", Object.assign({
                    viewBox: "0 0 229 229",
                    width: 24,
                    height: 24
                }, e, {
                    children: [(0, r.jsx)("path", {
                        d: "M114.475154,177.475321 C79.7034538,177.475321 51.5151256,149.282841 51.5151256,114.500713 C51.5151256,79.7209602 79.7034538,51.5237291 114.475154,51.5237291 L114.475154,-0.000950201555 C51.2515057,-0.000950201555 -1.68750626e-14,51.2624237 -1.68750626e-14,114.500713 C-1.68750626e-14,177.736626 51.2515057,229 114.475154,229 C177.696428,229 228.950308,177.736626 228.950308,114.500713 L177.435183,114.500713 C177.435183,149.282841 149.246855,177.475321 114.475154,177.475321"
                    }), (0, r.jsx)("polygon", {
                        fill: "#17E6A1",
                        points: "114.474679 114.499287 177.434708 114.499287 177.434708 51.5246793 114.474679 51.5246793"
                    })]
                })),
                x = e => (0, r.jsxs)("svg", Object.assign({
                    width: 24,
                    height: 24
                }, e, {
                    children: [(0, r.jsx)("rect", {
                        x: 8,
                        y: 3.5,
                        width: 15,
                        height: 5,
                        fill: "#00A2C7"
                    }), (0, r.jsx)("rect", {
                        x: 2,
                        y: 9.5,
                        width: 5,
                        height: 5,
                        fill: "#3EC7E3"
                    }), (0, r.jsx)("rect", {
                        x: 8,
                        y: 9.5,
                        width: 10,
                        height: 5,
                        fill: "#3EC7E3"
                    }), (0, r.jsx)("rect", {
                        x: 8,
                        y: 15.5,
                        width: 5,
                        height: 5,
                        fill: "#7CE8FE"
                    })]
                })),
                w = e => (0, r.jsx)("svg", Object.assign({
                    viewBox: "62 62 900 900",
                    width: 24,
                    height: 24
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M512.147 692C412.697 692 332.146 611.45 332.146 512C332.146 412.55 412.697 332 512.147 332C601.247 332 675.197 396.95 689.447 482H870.797C855.497 297.2 700.846 152 512.147 152C313.396 152 152.146 313.25 152.146 512C152.146 710.75 313.396 872 512.147 872C700.846 872 855.497 726.8 870.797 542H689.297C675.047 627.05 601.247 692 512.147 692Z",
                        fill: "#fff"
                    })
                }));
            class _ { }
            _.baseCurrencyUSD = {
                id: "usd",
                symbol: "$",
                code: "USD"
            }, _.baseCurrencies = [_.baseCurrencyUSD, {
                id: "eur",
                symbol: "€",
                code: "EUR"
            }, {
                id: "rub",
                symbol: "₽",
                code: "RUB"
            }, {
                id: "brl",
                symbol: "R$",
                code: "BRL"
            }, {
                id: "gbp",
                symbol: "£",
                code: "GBP"
            }, {
                id: "inr",
                symbol: "₹",
                code: "INR"
            }, {
                id: "aud",
                symbol: "$",
                code: "AUD"
            }, {
                id: "cad",
                symbol: "$",
                code: "CAD"
            }, {
                id: "pln",
                symbol: "Zł",
                code: "PLN"
            }, {
                id: "try",
                symbol: "₺",
                code: "TRY"
            }, {
                id: "btc",
                symbol: "₿",
                code: "BTC"
            }, {
                id: "eth",
                symbol: "Ξ",
                code: "ETH"
            }], _.translations = [p, {
                id: "ru",
                flag: "🇷🇺",
                name: "Русский",
                loading: "Содержание загружается...",
                currencyName: "Имя",
                settings: "Настройки",
                filter: "Фильтр",
                currency: "Валюта",
                language: "Язык",
                colors: "Цвета",
                pin: "Закрепление",
                red_green: "Красный + Зеленый",
                yellow_blue: "Желтый + синий",
                rank: "Рейтинг",
                marketcap: "Объём рынка",
                volume: "24ч Объём",
                price: "Цена",
                dominance: "Доминирование",
                performance: "Производительность",
                neutral: "Нейтральный",
                period_hour: "час",
                period_day: "день",
                period_week: "неделя",
                period_month: "месяц",
                period_year: "год",
                favorites: "Избранное",
                add_favorite: "Добавить в избранное",
                remove_favorite: "Удалить из избранное",
                search_crypto: "Поиск криптовалюты",
                bubble_size: "размер пузыря",
                bubble_content: "контент пузыря",
                bubble_color: "Цвет пузыря",
                period: "Период",
                description: "Интерактивный график пузырей для ТОП-1000 криптовалют",
                support_my_work: "Поддержите мою работу",
                window_close: "Закрыть окно",
                window_toggleExpand: "Переключение расширения",
                configuration_add: "Добавить графика",
                configuration_edit: "Редактирование графика",
                configuration_delete: "Удалить графика",
                copy: "Копировать",
                not_found: "Не найдено в ТОП-1000",
                no_favorites: "Избранное не добавлено",
                scroll_toast: "Поиск + Список",
                links: "Ссылки",
                favorite_exchange: "Любимая биржа",
                exchanges: "Биржи",
                pages: "Страницы"
            }, {
                    id: "pt",
                    flag: "🇵🇹",
                    name: "Portugues",
                    loading: "O conteúdo está carregando...",
                    currencyName: "Nome",
                    settings: "Configurações",
                    filter: "Filtro",
                    currency: "Moeda",
                    language: "Idioma",
                    colors: "Cores",
                    pin: "Alfinete",
                    red_green: "Vermelho + Verde",
                    yellow_blue: "Amarelo + Azul",
                    rank: "Posição",
                    marketcap: "Cap de Mercado",
                    volume: "Volume em 24h",
                    price: "Valor",
                    dominance: "Dominação",
                    performance: "Desempenho",
                    neutral: "Neutra",
                    period_hour: "Hora",
                    period_day: "Dia",
                    period_week: "Semana",
                    period_month: "Mês",
                    period_year: "Ano",
                    favorites: "Favoritos",
                    add_favorite: "Adicionar aos Favoritos",
                    remove_favorite: "Remover dos Favoritos",
                    search_crypto: "Pesquisar Criptomoeda",
                    bubble_size: "Tamanho da bolha",
                    bubble_content: "Conteúdo de bolha",
                    bubble_color: "Cor da bolha",
                    period: "Período",
                    description: "Gráfico interativo para as 1000 principais criptomoedas",
                    support_my_work: "Apóie meu trabalho",
                    window_close: "Fechar a janela",
                    window_toggleExpand: "Alternar expansão",
                    configuration_add: "Adicionar gráfico",
                    configuration_edit: "Editar gráfico",
                    configuration_delete: "Apagar gráfico",
                    copy: "Cópiar",
                    not_found: "Não encontrado no TOP 1000",
                    no_favorites: "Sem favoritos adicionados",
                    scroll_toast: "Pesquisa + Lista",
                    links: "Ligações",
                    favorite_exchange: "Bolsa preferida",
                    exchanges: "Bolsas",
                    pages: "Páginas"
                }, {
                    id: "fr",
                    flag: "🇫🇷",
                    name: "Français",
                    loading: "Le contenu est en cours de chargement...",
                    currencyName: "Nom",
                    settings: "Paramètres",
                    filter: "Filtre",
                    currency: "Monnaie",
                    language: "Langue",
                    colors: "Couleurs",
                    pin: "Broche",
                    red_green: "Rouge + Vert",
                    yellow_blue: "Jaune + Bleu",
                    rank: "Rank",
                    marketcap: "Capitalisation",
                    volume: "24h Volume",
                    price: "Prix",
                    dominance: "Dominance",
                    performance: "Performance",
                    neutral: "Neutre",
                    period_hour: "Heure",
                    period_day: "Jour",
                    period_week: "Semaine",
                    period_month: "Mois",
                    period_year: "Année",
                    favorites: "Favoris",
                    add_favorite: "Ajouter aux favoris",
                    remove_favorite: "Retirer des favoris",
                    search_crypto: "Rechercher crypto-monnaie",
                    bubble_size: "Taille de la bulle",
                    bubble_content: "Contenu de bulle",
                    bubble_color: "Couleur de la bulle",
                    period: "Periode",
                    description: "Graphique à bulles interactif pour le TOP 1000 des crypto-monnaies",
                    support_my_work: "Soutenez mon travail",
                    window_close: "Fermer la fenêtre",
                    window_toggleExpand: "Basculer l'expansion",
                    configuration_add: "Ajouter un graphique",
                    configuration_edit: "Modifier le graphique",
                    configuration_delete: "Annuler le graphique",
                    copy: "Copier",
                    not_found: "Non trouvé dans le TOP 1000",
                    no_favorites: "Aucun favori ajouté",
                    scroll_toast: "Recherche + Liste",
                    links: "Liens",
                    favorite_exchange: "Bourse préférée",
                    exchanges: "Bourses",
                    pages: "Pages"
                }, {
                    id: "es",
                    flag: "🇪🇸",
                    name: "Español",
                    loading: "Contenido está cargando...",
                    currencyName: "Nombre",
                    settings: "Configuración",
                    filter: "Filtro",
                    currency: "Moneda",
                    language: "Idioma",
                    colors: "Colores",
                    pin: "Fijación",
                    red_green: "Rojo + Verde",
                    yellow_blue: "Amarillo + Azul",
                    rank: "Rango",
                    marketcap: "Cap de Mercado",
                    volume: "Volumen en 24h",
                    price: "Valor",
                    dominance: "Dominación",
                    performance: "Rendimiento",
                    neutral: "Neutral",
                    period_hour: "Hora",
                    period_day: "Día",
                    period_week: "Semana",
                    period_month: "Mes",
                    period_year: "Año",
                    favorites: "Favoritos",
                    add_favorite: "Agregar a favoritos",
                    remove_favorite: "Retirar de favoritos",
                    search_crypto: "Busque Criptomoneda",
                    bubble_size: "Tamaño de Burbuja",
                    bubble_content: "Contenido de Burbuja",
                    bubble_color: "Color de Burbuja",
                    period: "Período",
                    description: "Gráfico interactivo para las principales 1000 criptomonedas",
                    support_my_work: "Apoya mi trabajo",
                    window_close: "Cerrar ventana",
                    window_toggleExpand: "Alternar Expansión",
                    configuration_add: "Agregar gráfico",
                    configuration_edit: "Editar gráfico",
                    configuration_delete: "Eliminar gráfico",
                    copy: "Copiar",
                    not_found: "No se encuentra en el TOP 1000",
                    no_favorites: "No se han añadido favoritos",
                    scroll_toast: "Búsqueda + Lista",
                    links: "Enlaces",
                    favorite_exchange: "Bolsa favorita",
                    exchanges: "Bolsa",
                    pages: "Páginas"
                }, {
                    id: "fa",
                    flag: "🇮🇷",
                    name: "فارسی",
                    loading: "...در حال بارگیری محتوا",
                    currencyName: "رمزارز",
                    settings: "تنظیمات",
                    filter: "فیلتر",
                    currency: "واحد پول",
                    language: "زبان",
                    colors: "رنگها",
                    pin: "برای سنجاق کردن",
                    red_green: "قرمز + سبز",
                    yellow_blue: "زرد + آبی",
                    rank: "رتبه بندی",
                    marketcap: "سرمایه بازار",
                    volume: "حجم روزانه",
                    price: "قیمت",
                    dominance: "تسلط",
                    performance: "پرفورمنس",
                    neutral: "خنثی",
                    period_hour: "ساعت",
                    period_day: "روز",
                    period_week: "هفته",
                    period_month: "ماه",
                    period_year: "سال",
                    favorites: "علاقه مندی ها",
                    add_favorite: "افزودن به علاقه مندی ها",
                    remove_favorite: "از علاقه مندی ها حذف شود",
                    search_crypto: "رمز ارز را جستجو کنید",
                    bubble_size: "اندازه حباب",
                    bubble_content: "محتوای حباب",
                    bubble_color: "رنگ حباب",
                    period: "بازه زمانی",
                    description: "نمودار حبابی تعاملی برای ۵۰۰ رمز ارزهای برتر",
                    support_my_work: "از پروژه من حمایت کنید",
                    window_close: "بستن پنجره",
                    window_toggleExpand: "پنجره را باز / بسته کنید",
                    configuration_add: "نمودار اضافه کنید",
                    configuration_edit: "نمودار را ویرایش کنید",
                    configuration_delete: "حذف نمودار",
                    copy: "کپی",
                    not_found: "در TOP 1000 یافت نشد",
                    no_favorites: "موارد دلخواه اضافه نشده است",
                    scroll_toast: "جستجو + لیست",
                    links: "پیوندها",
                    favorite_exchange: "صرافی مورد علاقه",
                    exchanges: "مبادلات",
                    pages: "صفحات"
                }, {
                    id: "de",
                    flag: "🇩🇪",
                    name: "Deutsch",
                    loading: "Inhalte werden geladen...",
                    currencyName: "Name",
                    settings: "Einstellungen",
                    filter: "Filter",
                    currency: "Währung",
                    language: "Sprache",
                    colors: "Farben",
                    pin: "Anpinnen",
                    red_green: "Rot + Grün",
                    yellow_blue: "Gelb + Blau",
                    rank: "Rang",
                    marketcap: "Marktkap.",
                    volume: "Tagesvolumen",
                    price: "Kurs",
                    dominance: "Dominanz",
                    performance: "Performance",
                    neutral: "Neutral",
                    period_hour: "Stunde",
                    period_day: "Tag",
                    period_week: "Woche",
                    period_month: "Monat",
                    period_year: "Jahr",
                    favorites: "Favoriten",
                    add_favorite: "Zu Favoriten hinzufügen",
                    remove_favorite: "Von Favoriten entfernen",
                    search_crypto: "Kryptowährung suchen",
                    bubble_size: "Bubble Größe",
                    bubble_content: "Bubble Inhalt",
                    bubble_color: "Bubble Farbe",
                    period: "Zeitraum",
                    description: "Interaktiver Bubblechart für die TOP 1000 Kryptowährungen",
                    support_my_work: "Unterstütze mein Projekt",
                    window_close: "Dialog schließen",
                    window_toggleExpand: "Dialog auf/zuklappen",
                    configuration_add: "Chart hinzufügen",
                    configuration_edit: "Chart bearbeiten",
                    configuration_delete: "Chart löschen",
                    copy: "Kopieren",
                    not_found: "Nicht in den TOP 1000 gefunden",
                    no_favorites: "Keine Favoriten hinzugefügt",
                    scroll_toast: "Suche + Liste",
                    links: "Links",
                    favorite_exchange: "Lieblings-Börse",
                    exchanges: "Börsen",
                    pages: "Seiten"
                }, {
                    id: "pl",
                    flag: "🇵🇱",
                    name: "Polski",
                    loading: "Zawartość ładuje się...",
                    currencyName: "Nazwa",
                    settings: "Ustawienia",
                    filter: "Filtr",
                    currency: "Waluta",
                    language: "Języki",
                    colors: "Kolory",
                    pin: "Przypinanie",
                    red_green: "Czerwony + Zielony",
                    yellow_blue: "Żółty + Niebieski",
                    rank: "Miejsce",
                    marketcap: "Kapitalizacja",
                    volume: "Wolumen",
                    price: "Cena",
                    dominance: "Udział w rynku",
                    performance: "Wydajność",
                    neutral: "Neutralny",
                    period_hour: "Godzina",
                    period_day: "Dzień",
                    period_week: "Tydzień",
                    period_month: "Miesiąc",
                    period_year: "Rok",
                    favorites: "Ulubione",
                    add_favorite: "Dodaj do ulubionych",
                    remove_favorite: "Usuń z ulubionych",
                    search_crypto: "Szukaj kryptowalut",
                    bubble_size: "Rozmiar bąbelka",
                    bubble_content: "Zawartość bąbelka",
                    bubble_color: "Kolor bąbelka",
                    period: "Okres",
                    description: "Interaktywny wykres bąbelkowy dla TOP 1000 kryptowalut",
                    support_my_work: "Wesprzyj moją pracę",
                    window_close: "Zamknij okno",
                    window_toggleExpand: "Rozszerzenie Toogle",
                    configuration_add: "Dodaj wykres",
                    configuration_edit: "Edytuj wykres",
                    configuration_delete: "Usuń wykres",
                    copy: "Kopia",
                    not_found: "Nie znalazł się w TOP 1000",
                    no_favorites: "Nie dodano ulubionych",
                    scroll_toast: "Szukaj + Lista",
                    links: "Linki",
                    favorite_exchange: "Ulubiona giełda",
                    exchanges: "Giełdy",
                    pages: "Strony"
                }, {
                    id: "ar",
                    flag: "🇸🇦",
                    name: "العربية",
                    loading: "جاري تحميل المحتوى...",
                    currencyName: "أسم",
                    settings: "الإعدادات",
                    filter: "الفلتر",
                    currency: "عملة",
                    language: "لغة",
                    colors: "الألوان",
                    pin: "تثبيت",
                    red_green: "أحمر + أخضر",
                    yellow_blue: "أصفر + أزرق",
                    rank: "الرتبة",
                    marketcap: "القيمة السوقية",
                    volume: "الحجم س24",
                    price: "السعر",
                    dominance: "الهيمنة",
                    performance: "الاداء",
                    neutral: "طبيعي",
                    period_hour: "ساعة",
                    period_day: "يوم",
                    period_week: "أسبوع",
                    period_month: "شهر",
                    period_year: "سنة",
                    favorites: "المفضلة",
                    add_favorite: "إضافة إلى المفضلة",
                    remove_favorite: "حذف من المفضلة",
                    search_crypto: "البحث عن العملة الرقمية",
                    bubble_size: "حجم الفقاعة",
                    bubble_content: "محتوى الفقاعة",
                    bubble_color: "لون الفقاعة",
                    period: "الوقت",
                    description: "أكثر 1000 فقاعة نشطة",
                    support_my_work: "لدعم المشروع",
                    window_close: "لون النافذة",
                    window_toggleExpand: "تقليص التوسع",
                    configuration_add: "إضافة السلة",
                    configuration_edit: "تعديل السلة",
                    configuration_delete: "حذف السلة",
                    copy: "نسخ",
                    not_found: "ليس موجود في افضل 1000 عملة",
                    no_favorites: "لا يوجد مفضلة",
                    scroll_toast: "البحث + قائمة",
                    links: "الروابط",
                    favorite_exchange: "الصرف المفضل",
                    exchanges: "التبادلات",
                    pages: "الصفحات"
                }, {
                    id: "it",
                    flag: "🇮🇹",
                    name: "Italian",
                    loading: "Caricamento in corso...",
                    currencyName: "Nome",
                    settings: "Impostazioni",
                    filter: "Filtro",
                    currency: "Valuta",
                    language: "Lingua",
                    colors: "Colori",
                    pin: "Appuntare",
                    red_green: "Rosso + Verde",
                    yellow_blue: "Giallo + Blu",
                    rank: "Rank",
                    marketcap: "Cap di mercato",
                    volume: "Volume 24h",
                    price: "Prezzo",
                    dominance: "Dominance",
                    performance: "Rendimento",
                    neutral: "Neutrale",
                    period_hour: "Ora",
                    period_day: "Giorno",
                    period_week: "Settimana",
                    period_month: "Mese",
                    period_year: "Anno",
                    favorites: "Preferiti",
                    add_favorite: "Aggiungi ai preferiti",
                    remove_favorite: "Rimuovi dai preferiti",
                    search_crypto: "Cerca criptovalute",
                    bubble_size: "Grandezza bolla",
                    bubble_content: "Contenuto bolla",
                    bubble_color: "Colore bolla",
                    period: "Periodo",
                    description: "Grafico interattivo a bolle per le TOP 1000 criptovalute",
                    support_my_work: "Supporta il mio lavoro",
                    window_close: "Chiudi finestra",
                    window_toggleExpand: "Espansione Toggle",
                    configuration_add: "Aggiungi grafico",
                    configuration_edit: "Modifica grafico",
                    configuration_delete: "Rimuovi grafico",
                    copy: "Copia",
                    not_found: "Non si trova nella TOP 1000",
                    no_favorites: "Nessun favorito aggiunto",
                    scroll_toast: "Ricerca + Elenco",
                    links: "Link",
                    favorite_exchange: "Borsa preferita",
                    exchanges: "Borse",
                    pages: "Pagine"
                }, {
                    id: "nl",
                    flag: "🇳🇱",
                    name: "Nederlands",
                    loading: "Inhoud wordt geladen...",
                    currencyName: "Naam",
                    settings: "Instellingen",
                    filter: "Filter",
                    currency: "Valuta",
                    language: "Taal",
                    colors: "Kleuren",
                    pin: "Vastzetten",
                    red_green: "Rood + Groen",
                    yellow_blue: "Geel + Blauw",
                    rank: "Rang",
                    marketcap: "Marktkapitalisatie",
                    volume: "24h Volume",
                    price: "Prijs",
                    dominance: "Dominantie",
                    performance: "Prestatie",
                    neutral: "Neutraal",
                    period_hour: "Uur",
                    period_day: "Dag",
                    period_week: "Week",
                    period_month: "Maand",
                    period_year: "Jaar",
                    favorites: "Favorieten",
                    add_favorite: "Toevoegen aan favorieten",
                    remove_favorite: "Verwijderen uit favorieten",
                    search_crypto: "Zoek cryptocurrencies",
                    bubble_size: "Bubble grote",
                    bubble_content: "Bubble inhoud",
                    bubble_color: "Bubble kleur",
                    period: "Periode",
                    description: "Interactieve bubble chart TOP 1000 cryptocurrencies",
                    support_my_work: "Ondersteun mijn werk",
                    window_close: "Sluit venster",
                    window_toggleExpand: "Meer/minder informatie",
                    configuration_add: "Overzicht toevoegen",
                    configuration_edit: "Overzicht bewerken",
                    configuration_delete: "Overzicht verwijderen",
                    copy: "Kopiëren",
                    not_found: "Niet gevonden in de TOP 1000",
                    no_favorites: "Geen favorieten toegevoegd",
                    scroll_toast: "Zoeken + Lijst",
                    links: "Links",
                    favorite_exchange: "Favoriete beurs",
                    exchanges: "Beurzen",
                    pages: "Pages"
                }, {
                    id: "tr",
                    flag: "🇹🇷",
                    name: "Türkçe",
                    loading: "İçerik yükleniyor...",
                    currencyName: "İsim",
                    settings: "Ayarlar",
                    filter: "Filtre",
                    currency: "Para birimi",
                    language: "Dil",
                    colors: "Renkler",
                    pin: "Sabitlemek için",
                    red_green: "Kırmızı + Yeşil",
                    yellow_blue: "Sarı + Mavi",
                    rank: "Sıralama",
                    marketcap: "Piyasa Değeri",
                    volume: "24s Hacim",
                    price: "Değer",
                    dominance: "Pazar Hakimiyeti",
                    performance: "Performans",
                    neutral: "Nötr",
                    period_hour: "Saat",
                    period_day: "Gün",
                    period_week: "Hafta",
                    period_month: "Ay",
                    period_year: "Yıl",
                    favorites: "Favoriler",
                    add_favorite: "Favorilere ekle",
                    remove_favorite: "Favorilerden çıkar",
                    search_crypto: "Kriptopara ara",
                    bubble_size: "Baloncuk boyutu",
                    bubble_content: "Baloncuk içeriği",
                    bubble_color: "Baloncuk rengi",
                    period: "Dönem",
                    description: "İLK 1000 kripto para birimi için etkileşimli balon grafiği",
                    support_my_work: "Çalışmalarımızı destekleyin",
                    window_close: "Pencereyi kapat",
                    window_toggleExpand: "Geçiş genişlet",
                    configuration_add: "Grafik ekle",
                    configuration_edit: "Grafik düzenle",
                    configuration_delete: "Grafik sil",
                    copy: "Kopya",
                    not_found: "İlk 1000'de bulunamadı",
                    no_favorites: "Favori eklenmedi",
                    scroll_toast: "Arama + Liste",
                    links: "Bağlantılar",
                    favorite_exchange: "Favori değişim",
                    exchanges: "Takaslar",
                    pages: "Sayfalar"
                }, {
                    id: "cn",
                    flag: "🇨🇳",
                    name: "简体中文",
                    loading: "内容正在加载...",
                    currencyName: "货币名称",
                    settings: "设置",
                    filter: "过滤器",
                    currency: "货币",
                    language: "语言",
                    colors: "颜色",
                    pin: "销",
                    red_green: "红+绿",
                    yellow_blue: "黄色+蓝色",
                    rank: "排名",
                    marketcap: "市值",
                    volume: "24小时成交量",
                    price: "价格",
                    dominance: "支配地位",
                    performance: "性能",
                    neutral: "中性",
                    period_hour: "小时",
                    period_day: "天",
                    period_week: "周",
                    period_month: "月",
                    period_year: "年",
                    favorites: "收藏夹",
                    add_favorite: "添加到收藏夹",
                    remove_favorite: "从收藏中删除",
                    search_crypto: "搜索加密货币",
                    bubble_size: "气泡大小",
                    bubble_content: "气泡内容",
                    bubble_color: "气泡颜色",
                    period: "期间",
                    description: "TOP1000加密货币的交互式气泡图",
                    support_my_work: "支持我的工作",
                    window_close: "关闭窗口",
                    window_toggleExpand: "切换扩展",
                    configuration_add: "添加图表",
                    configuration_edit: "编辑图表",
                    configuration_delete: "删除图表",
                    copy: "复制",
                    not_found: "在 TOP 1000 中找不到",
                    no_favorites: "没有添加收藏",
                    scroll_toast: "搜索+列表",
                    links: "链接",
                    favorite_exchange: "最喜欢的交易所",
                    exchanges: "交流",
                    pages: "页面"
                }, {
                    id: "ja",
                    flag: "🇯🇵",
                    name: "日本語",
                    loading: "コンテンツをロード中…",
                    currencyName: "名前",
                    settings: "設定",
                    filter: "フィルター",
                    currency: "通貨",
                    language: "言語",
                    colors: "カラー",
                    pin: "ピン",
                    red_green: "赤＋緑",
                    yellow_blue: "黄＋青",
                    rank: "順位",
                    marketcap: "時価総額",
                    volume: "24h 取引高",
                    price: "値段",
                    dominance: "占有率",
                    performance: "変動率",
                    neutral: "無彩色",
                    period_hour: "時間",
                    period_day: "日",
                    period_week: "週間",
                    period_month: "ヶ月",
                    period_year: "年",
                    favorites: "お気に入り",
                    add_favorite: "お気に入りに加える",
                    remove_favorite: "お気に入りから除く",
                    search_crypto: "暗号通貨を探す",
                    bubble_size: "バブル サイズ",
                    bubble_content: "バブル コンテンツ",
                    bubble_color: "バブル カラー",
                    period: "期間",
                    description: "トップ1000位の暗号通貨に関するインタラクティブバブルチャート",
                    support_my_work: "私の仕事を支援する",
                    window_close: "ウィンドウを閉じる",
                    window_toggleExpand: "トグル 拡張",
                    configuration_add: "チャートに加える",
                    configuration_edit: "チャートを編集する",
                    configuration_delete: "チャートを削除する",
                    copy: "コピー",
                    not_found: "TOP1000に入っていない",
                    no_favorites: "お気に入りの追加なし",
                    scroll_toast: "検索＋リスト",
                    links: "リンク",
                    favorite_exchange: "好きな取引所",
                    exchanges: "証券取引所",
                    pages: "ページ"
                }], _.periods = ["min5", "min15", "hour", "day", "week", "month", "year"], _.settings = [{
                    id: "filter",
                    pinned: !0,
                    label: e => e.filter,
                    component: b
                }, {
                    id: "basecurrency",
                    pinned: !0,
                    label: e => e.currency,
                    component: e => {
                        const {
                            selections: t,
                            dispatch: n
                        } = e;
                        return (0, r.jsx)("select", Object.assign({
                            value: t.baseCurrency.id,
                            onChange: function (e) {
                                const t = e.target.value;
                                n({
                                    type: 2,
                                    baseCurrencyId: t
                                })
                            }
                        }, {
                            children: _.baseCurrencies.map((e => (0, r.jsx)("option", Object.assign({
                                value: e.id
                            }, {
                                children: `${e.symbol} ${e.code}`
                            }), e.id)))
                        }))
                    }
                }, {
                    id: "translation",
                    pinned: !1,
                    label: e => e.language,
                    component: e => {
                        const {
                            selections: t,
                            dispatch: n
                        } = e;
                        return (0, r.jsx)("select", Object.assign({
                            value: t.translation.id,
                            onChange: function (e) {
                                const t = e.target.value;
                                n({
                                    type: 1,
                                    translationId: t
                                })
                            }
                        }, {
                            children: _.translations.map((e => (0, r.jsx)("option", Object.assign({
                                value: e.id
                            }, {
                                children: `${e.flag} ${e.name}`
                            }), e.id)))
                        }))
                    }
                }, {
                    id: "colors",
                    pinned: !1,
                    label: e => e.colors,
                    component: e => {
                        const {
                            selections: t,
                            dispatch: n
                        } = e;
                        return (0, r.jsx)("select", Object.assign({
                            value: t.colors,
                            onChange: function (e) {
                                const t = e.target.value;
                                n({
                                    type: 12,
                                    colors: t
                                })
                            }
                        }, {
                            children: m.map((e => (0, r.jsx)("option", Object.assign({
                                value: e.value
                            }, {
                                children: e.label(t.translation)
                            }), e.value)))
                        }))
                    }
                }], _.exchanges = [{
                    id: "binance",
                    name: "Binance",
                    linkComponent: e => {
                        const {
                            symbol: t,
                            currency: n,
                            translation: i
                        } = e, a = function (e) {
                            switch (e.id) {
                                case "pt":
                                    return "pt-BR";
                                case "nl":
                                case "fa":
                                case "de":
                                    return "en";
                                default:
                                    return e.id
                            }
                        }(i), o = `https://www.binance.com/${a}/trade/${t}?layout=pro&ref=${s.binanceReferralCode}&type=spot`, c = `Trade ${n.name} on Binance`;
                        return (0, r.jsx)(v, Object.assign({
                            href: o,
                            title: c,
                            name: "Binance_Trade",
                            className: "icon-button link-binance"
                        }, {
                            children: (0, r.jsx)(f, {})
                        }))
                    }
                }, {
                    id: "kucoin",
                    name: "Kucoin",
                    linkComponent: e => {
                        const {
                            symbol: t,
                            currency: n
                        } = e, i = `https://www.kucoin.com/trade/${t}?rcode=${s.kucoinReferralCode}`, a = `Trade ${n.name} on Kucoin`;
                        return (0, r.jsx)(v, Object.assign({
                            href: i,
                            title: a,
                            name: "Kucoin_Trade",
                            className: "icon-button link-kucoin"
                        }, {
                            children: (0, r.jsx)(j, {})
                        }))
                    }
                }, {
                    id: "gateio",
                    name: "Gate.io",
                    linkComponent: e => {
                        const {
                            symbol: t,
                            currency: n
                        } = e, i = `https://www.gate.io/trade/${t}?ref=${s.gateIoReferralCode}`, a = `Trade ${n.name} on Gate.io`;
                        return (0, r.jsx)(v, Object.assign({
                            href: i,
                            title: a,
                            name: "GateIo_Trade",
                            className: "icon-button link-gateio"
                        }, {
                            children: (0, r.jsx)(y, {})
                        }))
                    }
                }, {
                    id: "ftx",
                    name: "FTX",
                    linkComponent: e => {
                        const {
                            symbol: t,
                            currency: n
                        } = e, i = `https://ftx.com/trade/${t}#a=cryptobubbles`, s = `Trade ${n.name} on FTX`;
                        return (0, r.jsx)(v, Object.assign({
                            href: i,
                            title: s,
                            name: "Ftx_Trade",
                            className: "icon-button"
                        }, {
                            children: (0, r.jsx)(x, {})
                        }))
                    }
                }, {
                    id: "coinbase",
                    name: "Coinbase",
                    linkComponent: e => {
                        const {
                            symbol: t,
                            currency: n
                        } = e, i = `https://www.coinbase.com/advanced-trade/${t}`, s = `Trade ${n.name} on Coinbase`;
                        return (0, r.jsx)(v, Object.assign({
                            href: i,
                            title: s,
                            name: "Coinbase_Trade",
                            className: "icon-button"
                        }, {
                            children: (0, r.jsx)(w, {})
                        }))
                    }
                }];
            let C = Date.now();

            function k(e, t) {
                return {
                    id: "" + C++,
                    name: "",
                    color: "performance",
                    content: "performance",
                    size: t,
                    period: e
                }
            }

            function O(e, t) {
                switch (t.type) {
                    case 0:
                        {
                            const {
                                currencies: n
                            } = t;
                            for (const t of n) {
                                //console.log(t.image);
                                t.nameUpper = t.name.toUpperCase(),
                                t.isFavorite = Boolean(e.favorites[t.id]);
                            }
                            let r = e.priceChartKey;
                            return null !== e.currencyId && r++,
                                Object.assign(Object.assign({}, e), {
                                    updateFailed: !1,
                                    currencies: n,
                                    priceChartKey: r
                                })
                        }
                    case 1:
                        {
                            const {
                                translationId: n
                            } = t,
                                r = _.translations.find((e => e.id === n));
                            if (r) return Object.assign(Object.assign({}, e), {
                                translation: r
                            });
                            break
                        }
                    case 2:
                        {
                            const {
                                baseCurrencyId: n
                            } = t,
                                r = _.baseCurrencies.find((e => e.id === n));
                            if (r) return Object.assign(Object.assign({}, e), {
                                baseCurrency: r
                            });
                            break
                        }
                    case 3:
                        {
                            const {
                                currencyId: n
                            } = t,
                                r = e.favorites[n];
                            return Object.assign(Object.assign({}, e), {
                                currencies: e.currencies ? e.currencies.map((e => e.id !== n ? e : Object.assign(Object.assign({}, e), {
                                    isFavorite: !e.isFavorite
                                }))) : null,
                                favorites: Object.assign(Object.assign({}, e.favorites), {
                                    [n]: !r
                                })
                            })
                        }
                    case 4:
                        {
                            const {
                                currencyId: n
                            } = t;
                            let r = e.priceChartKey;
                            return e.currencyId !== n && null !== n && r++,
                                Object.assign(Object.assign({}, e), {
                                    currencyId: e.currencyId !== n ? n : null,
                                    priceChartKey: r
                                })
                        }
                    case 5:
                        {
                            const t = k("week", "performance");
                            return Object.assign(Object.assign({}, e), {
                                configurations: [...e.configurations, t],
                                configurationId: t.id
                            })
                        }
                    case 6:
                        {
                            const {
                                configuration: n
                            } = t;
                            return Object.assign(Object.assign({}, e), {
                                configurations: e.configurations.map((e => e.id === n.id ? n : e))
                            })
                        }
                    case 7:
                        {
                            const {
                                configurationId: n
                            } = t;
                            if (e.configurations.length >= 2) {
                                let t = null,
                                    r = !1;
                                const i = [];
                                for (const s of e.configurations) s.id !== n ? (i.push(s), r || (t = s.id)) : r = !0;
                                return Object.assign(Object.assign({}, e), {
                                    configurations: i,
                                    configurationId: r && null !== t ? t : e.configurationId
                                })
                            }
                        }
                    case 8:
                        {
                            const {
                                configurationId: n
                            } = t;
                            return Object.assign(Object.assign({}, e), {
                                configurationId: n
                            })
                        }
                    case 9:
                        return Object.assign(Object.assign({}, e), {
                            page: t.page
                        });
                    case 10:
                        {
                            const {
                                filter: n
                            } = t;
                            return Object.assign(Object.assign({}, e), {
                                filter: n
                            })
                        }
                    case 11:
                        {
                            const {
                                settingId: n
                            } = t;
                            return Object.assign(Object.assign({}, e), {
                                settings: e.settings.map((e => e.id !== n ? e : Object.assign(Object.assign({}, e), {
                                    pinned: !e.pinned
                                })))
                            })
                        }
                    case 12:
                        {
                            const {
                                colors: n
                            } = t;
                            return Object.assign(Object.assign({}, e), {
                                colors: n
                            })
                        }
                    case 14:
                        return Object.assign(Object.assign({}, e), {
                            updateFailed: !1
                        });
                    case 15:
                        return Object.assign(Object.assign({}, e), {
                            updateFailed: !0
                        });
                    case 13:
                        {
                            const {
                                fromId: n,
                                toId: r
                            } = t,
                                {
                                    configurations: i
                                } = e,
                                s = i.find((e => e.id === n)),
                                a = i.find((e => e.id === r));
                            return s && a ? Object.assign(Object.assign({}, e), {
                                configurations: i.map((e => e === s ? a : e === a ? s : e))
                            }) : e
                        }
                }
                return e
            }
            const N = e => (0, r.jsx)("svg", Object.assign({
                width: 24,
                height: 24
            }, e, {
                children: (0, r.jsx)("path", {
                    d: "M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                })
            })),
                L = () => {
                    const e = "Download App";
                    return (0, r.jsxs)(v, Object.assign({
                        className: "banner",
                        href: "https://play.google.com/store/apps/details?id=net.cryptobubbles",
                        title: e,
                        name: "GooglePlay_Banner"
                    }, {
                        children: [(0, r.jsx)("span", Object.assign({
                            className: "banner-title"
                        }, {
                            children: e
                        })), (0, r.jsx)(N, {
                            className: "banner-icon"
                        })]
                    }))
                },
                B = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24,
                    viewBox: "4 4 42 42"
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 14 5.9902344 L 36 5.9902344 C 40.430666 5.9902344 44 9.5595687 44 13.990234 L 44 35.990234 C 44 40.4209 40.430666 43.990234 36 43.990234 L 14 43.990234 C 9.5693339 43.990234 6 40.4209 6 35.990234 L 6 13.990234 C 6 9.5595687 9.5693339 5.9902344 14 5.9902344 z M 22.572266 11.892578 C 22.187855 11.867986 21.790969 11.952859 21.433594 12.162109 C 20.480594 12.721109 20.161703 13.947391 20.720703 14.900391 L 22.53125 17.990234 L 16.666016 28 L 12 28 C 10.896 28 10 28.896 10 30 C 10 31.104 10.896 32 12 32 L 27.412109 32 C 27.569109 31.237 27.473203 30.409531 27.033203 29.644531 L 27.029297 29.640625 C 26.642297 28.966625 26.105469 28.416 25.480469 28 L 21.302734 28 L 28.978516 14.898438 C 29.536516 13.945438 29.216672 12.720109 28.263672 12.162109 C 27.309672 11.604109 26.085344 11.923953 25.527344 12.876953 L 24.849609 14.033203 L 24.171875 12.876953 C 23.8225 12.281328 23.212949 11.933564 22.572266 11.892578 z M 28.310547 19.941406 L 27.484375 21.314453 C 26.572375 22.830453 26.542953 24.706859 27.376953 26.255859 L 33.673828 37.001953 C 34.045828 37.637953 34.713391 37.990234 35.400391 37.990234 C 35.743391 37.990234 36.092156 37.902797 36.410156 37.716797 C 37.363156 37.158797 37.682047 35.933469 37.123047 34.980469 L 35.376953 32 L 38 32 C 39.104 32 40 31.104 40 30 C 40 28.896 39.104 28 38 28 L 33.033203 28 L 28.310547 19.941406 z M 14.625 34.003906 C 14.068 33.987906 13.526719 34.074328 13.011719 34.236328 L 12.566406 34.994141 C 12.007406 35.946141 12.32825 37.172469 13.28125 37.730469 C 13.59925 37.917469 13.946063 38.005859 14.289062 38.005859 C 14.976062 38.005859 15.644578 37.650625 16.017578 37.015625 L 17.09375 35.179688 C 16.50875 34.496688 15.653859 34.033906 14.630859 34.003906 L 14.625 34.003906 z"
                    })
                })),
                M = () => {
                    const e = "Download App";
                    return (0, r.jsxs)(v, Object.assign({
                        className: "banner",
                        href: "https://apps.apple.com/app/id1599892658",
                        title: e,
                        name: "AppStore_Banner"
                    }, {
                        children: [(0, r.jsx)("span", Object.assign({
                            className: "banner-title"
                        }, {
                            children: e
                        })), (0, r.jsx)(B, {
                            className: "banner-icon"
                        })]
                    }))
                },
                P = {
                    cpm: 2,
                    creativeId: "268626a7d259dacf536",
                    advertiserDomain: "binance.com",
                    ad: {
                        title: "Most popular Exchange with low fees",
                        img: "/images/binance.png",
                        thumbnail: "/images/binance.png",
                        description: "Register and Trade on Binance with low fees",
                        description_short: "Register and Trade on Binance with low fees",
                        cta_button: "",
                        website: "Binance.com",
                        name: "Binance",
                        url: s.binanceReferralLink,
                        impressionUrl: ""
                    },
                    currency: "EUR"
                },
                S = () => {
                    const e = function () {
                        const [e, t] = (0, l.useState)(null);
                        return (0, l.useEffect)((() => {
                            fetch("https://request-global.czilladx.com/serve/native.php?z=731608d8efc3f1e3998").then((e => {
                                200 === e.status ? e.json().then((e => {
                                    t(e), fetch(e.ad.impressionUrl)
                                })) : t(P)
                            })).catch((() => {
                                t(P)
                            }))
                        }), []), e
                    }();
                    if (!e) return (0, r.jsxs)("a", Object.assign({
                        className: "native-ad-banner"
                    }, {
                        children: [(0, r.jsx)("span", {
                            className: "grow"
                        }), (0, r.jsx)("span", {
                            children: "AD"
                        })]
                    }));
                    const {
                        title: t,
                        thumbnail: n,
                        url: i,
                        description_short: s,
                        name: a
                    } = e.ad;
                    return (0, r.jsxs)("a", Object.assign({
                        className: "native-ad-banner",
                        target: "_blank",
                        rel: "nofollow",
                        href: i,
                        title: s,
                        onClick: function () {
                            c.logAction("CLICK_LINK", `NativeAd-${a}`)
                        }
                    }, {
                        children: [(0, r.jsx)("img", {
                            src: n,
                            alt: a
                        }), (0, r.jsx)("span", Object.assign({
                            className: "grow"
                        }, {
                            children: t
                        })), (0, r.jsx)("span", {
                            children: "AD"
                        })]
                    }))
                },
                z = (0, l.memo)((() => c.isMissingAndroidApp ? (0, r.jsx)(L, {}) : c.isMissingIosApp ? (0, r.jsx)(M, {}) : (0, r.jsx)(S, {})));

            function F(...e) {
                let t = "";
                for (const n of e) n && (0 !== t.length && (t += " "), t += n);
                return "" === t ? void 0 : t
            }
            const T = e => (0, r.jsxs)("svg", Object.assign({
                width: 24,
                height: 24
            }, e, {
                children: [(0, r.jsx)("circle", {
                    cx: "7.2",
                    cy: "14.4",
                    r: "3.2"
                }), (0, r.jsx)("circle", {
                    cx: "14.8",
                    cy: "18",
                    r: "2"
                }), (0, r.jsx)("circle", {
                    cx: "15.2",
                    cy: "8.8",
                    r: "4.8"
                })]
            })),
                E = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24,
                    viewBox: "2 2 20 20"
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M7,9H2V7h5V9z M7,12H2v2h5V12z M20.59,19l-3.83-3.83C15.96,15.69,15.02,16,14,16c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5 c0,1.02-0.31,1.96-0.83,2.75L22,17.59L20.59,19z M17,11c0-1.65-1.35-3-3-3s-3,1.35-3,3s1.35,3,3,3S17,12.65,17,11z M2,19h10v-2H2 V19z"
                    })
                })),
                A = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
                    })
                })),
                R = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"
                    })
                })),
                D = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    })
                })),
                I = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                    })
                }));

            function $(e, t = !0) {
                (0, l.useEffect)((() => {
                    if (t) return c.registerCloseListener(e), () => c.unregisterCloseListener(e)
                }), [e, t])
            }

            function V(e, t) {
                const {
                    openValue: n,
                    translation: i,
                    onClose: s
                } = t, [a, o] = (0, l.useState)(!0), c = Boolean(n);
                return $(s, c), (0, l.useEffect)((() => {
                    n && o(!0)
                }), [n]), {
                    expandButton: (0, r.jsx)("button", Object.assign({
                        className: "icon-button",
                        onClick: () => o(!a),
                        title: i.window_toggleExpand
                    }, {
                        children: (0, r.jsx)(I, {
                            className: "expand-icon"
                        })
                    })),
                    closeButton: (0, r.jsx)("button", Object.assign({
                        className: "icon-button",
                        onClick: s,
                        title: i.window_close
                    }, {
                        children: (0, r.jsx)(D, {})
                    })),
                    windowClassName: F("window", e, c && "open", a && "expanded")
                }
            }
            const X = (0, l.memo)((e => {
                const {
                    open: t,
                    settings: n,
                    selections: i,
                    translation: s,
                    dispatch: a,
                    onClose: o
                } = e, {
                    expandButton: l,
                    closeButton: d,
                    windowClassName: u
                } = V("settings-window", {
                    translation: s,
                    onClose: o,
                    openValue: t
                });
                return (0, r.jsxs)("section", Object.assign({
                    className: u
                }, {
                    children: [(0, r.jsxs)("header", {
                        children: [l, (0, r.jsx)(A, {}), (0, r.jsx)("span", Object.assign({
                            className: "settings-window-title"
                        }, {
                            children: s.settings
                        })), d]
                    }), (0, r.jsx)("div", Object.assign({
                        className: "window-content"
                    }, {
                        children: (0, r.jsx)("ul", {
                            children: n.map((e => (0, r.jsxs)("li", {
                                children: [c.isDesktop && (0, r.jsx)("button", Object.assign({
                                    className: F("icon-button", e.pinned && "active"),
                                    onClick: () => function (e) {
                                        a({
                                            type: 11,
                                            settingId: e.id
                                        })
                                    }(e),
                                    title: s.pin
                                }, {
                                    children: (0, r.jsx)(R, {})
                                })), (0, r.jsx)("span", {
                                    children: e.label(s)
                                }), (0, r.jsx)(e.component, {
                                    dispatch: a,
                                    selections: i
                                })]
                            }, e.id)))
                        })
                    }))]
                }))
            })),
                W = (0, l.memo)((e => {
                    const {
                        page: t,
                        settings: n,
                        selections: i,
                        updateCurrencies: a,
                        dispatch: o
                    } = e, {
                        translation: d
                    } = i, [u, h] = (0, l.useState)(!1), p = (0, l.useRef)(0), g = (0, l.useCallback)((() => {
                        window.clearTimeout(p.current), p.current = window.setTimeout((() => window.requestAnimationFrame(g)), 12e4), a()
                    }), [a]);
                    return (0, l.useEffect)((() => (g(), () => window.clearTimeout(p.current))), [g]), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("header", Object.assign({
                            className: "header"
                        }, {
                            children: [(0, r.jsx)("img", {
                                src: s.imageLogo,
                                className: "logo",
                                alt: s.appName,
                                title: `Logo of ${s.appName}`
                            }), (0, r.jsx)("h1", {
                                children: s.appName
                            }), (0, r.jsx)("div", {
                                className: "grow"
                            }), c.isMobile ? (0, r.jsx)("button", Object.assign({
                                className: "icon-button button-page",
                                onClick: () => o({
                                    type: 9,
                                    page: "bubbles" === t ? "list" : "bubbles"
                                }),
                                title: d.search_crypto
                            }, {
                                children: "bubbles" === t ? (0, r.jsx)(E, {}) : (0, r.jsx)(T, {})
                            })) : (0, r.jsx)("div", Object.assign({
                                className: "header-settings"
                            }, {
                                children: n.map((e => e.pinned && (0, r.jsx)(e.component, {
                                    dispatch: o,
                                    selections: i
                                }, e.id)))
                            })), (0, r.jsx)("button", Object.assign({
                                className: F("icon-button", "button-settings", u && "active"),
                                onClick: () => h(!u),
                                title: d.settings
                            }, {
                                children: (0, r.jsx)(A, {})
                            })), (0, r.jsx)("div", {
                                className: "currency-updater",
                                onAnimationIteration: g
                            })]
                        })), (0, r.jsx)(X, {
                            open: u,
                            translation: d,
                            settings: n,
                            selections: i,
                            dispatch: o,
                            onClose: () => h(!1)
                        })]
                    })
                }));

            function H(e, t, n) {
                return e < t ? t : e > n ? n : e
            }

            function U() {
                return 2 * Math.random() - 1
            }
            class Y {
                constructor(e, t = 400) {
                    this.duration = t, this.startValue = 0, this.endValue = e, this.startTime = null
                }
                get() {
                    if (null === this.startTime) return this.endValue; {
                        const e = Date.now() - this.startTime;
                        if (e >= this.duration) return this.startTime = null, this.endValue;
                        const t = e / this.duration;
                        return function (e, t, n) {
                            return e + (t - e) * n
                        }(this.startValue, this.endValue, t)
                    }
                }
                set(e, t = !1) {
                    t ? this.startTime = null : (this.startValue = this.get(), this.startTime = Date.now()), this.endValue = e
                }
                isDone() {
                    return null === this.startTime || Date.now() >= this.startTime + this.duration && (this.startTime = null, !0)
                }
            }
            const K = 2 * Math.PI;
            class G {
                constructor(e) {
                    this.lastFingerprint = "", this.image = null, this.radiusTween = new Y(0, 1e3), this.color = "", this.transition = null, this.imageBitmap = null, this.posX = 0, this.posY = 0, this.speedX = 0, this.speedY = 0, this.size = 0, this.radius = 0, this.content = "", this.visible = !1, this.latestPush = 0, this.renderFavoriteBorder = !0, this.currency = e, this.canvas = document.createElement("canvas"), this.canvasContext = this.canvas.getContext("2d");
                    const t = document.createElement("img");
                    //debugger;
                    //var logoSrc = 'http://localhost:8008/backend/data/logos/';
                    var imageParts = e.image.split('/');
                    var imageName = imageParts[imageParts.length - 1];
                    t.src = AppConfig.bubblesLogo + imageName, t.addEventListener("load", (() => {
                        this.image = t
                    }))
                }
                applyForce(e, t) {
                    this.speedX += e, this.speedY += t
                }
                setRadius(e, t) {
                    this.radiusTween.set(e, t), t || (this.transition = {
                        rerendered: !1,
                        radius: Math.max(e, this.radius)
                    })
                }
                setColor(e) {
                    const {
                        red: t,
                        green: n,
                        blue: r
                    } = e;
                    this.color = `${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}`
                }
                setContent(e) {
                    this.content = e
                }
                update() {
                    this.radius = this.radiusTween.get(), this.visible = this.radius > 0
                }
                rerender(e) {
                    const {
                        currency: t,
                        color: n,
                        content: r,
                        image: i
                    } = this, a = .5 * Math.round(2 * e), o = this.renderFavoriteBorder && t.isFavorite, c = `${n} ${a} ${r} ${Boolean(i)} ${o}`;
                    if (c !== this.lastFingerprint) {
                        this.lastFingerprint = c;
                        const {
                            canvas: e,
                            canvasContext: l
                        } = this, d = a + s.bubbleCanvasPadding, u = 2 * d;
                        e.width = u, e.height = u;
                        const h = l.createRadialGradient(d, d, 0, d, d, a);
                        h.addColorStop(0, `rgba(${n}, 0.05)`), h.addColorStop(.8, `rgba(${n}, 0.1)`), h.addColorStop(.9, `rgba(${n}, 0.4)`), h.addColorStop(1, `rgb(${n})`), l.beginPath(), l.arc(d, d, a, 0, K), l.closePath(), l.fillStyle = h, l.fill(), o && (l.beginPath(), l.arc(d, d, a, 0, K), l.closePath(), l.lineWidth = s.bubbleBorderWidth, l.strokeStyle = "yellow", l.stroke());
                        const p = a > 30,
                            g = a * (p ? .55 : 1.2),
                            b = g * (i ? i.width / i.height : 1),
                            m = .5 * (u - b),
                            f = (u - g) * (p ? .14 : .5);
                        if (i) l.drawImage(i, m, f, b, g);
                        else {
                            l.beginPath();
                            const e = .5 * g;
                            l.arc(m + e, f + e, e, 0, 2 * Math.PI), l.closePath(), l.fillStyle = "#bbb", l.fill()
                        }
                        if (p) {
                            l.textAlign = "center", l.fillStyle = "white";
                            const e = t.symbol.length < 5 ? .55 : .35,
                                n = Math.ceil(a * e);
                            l.font = `${n}px Arial`, l.fillText(t.symbol, d, d + .25 * a);
                            const i = r.length > 8,
                                s = Math.ceil(a * (i ? .24 : .3));
                            l.font = `${s}px Arial`, l.fillText(r, d, d + .65 * a)
                        }
                        this.imageBitmap = null;
                        try {
                            createImageBitmap(e).then((e => this.imageBitmap = e)).catch((() => { }))
                        } catch (e) { }
                    }
                }
                render(e) {
                    const {
                        canvas: t,
                        posX: n,
                        posY: r,
                        radius: i,
                        radiusTween: a,
                        transition: o
                    } = this, c = i + s.bubbleCanvasPadding, l = n - c, d = r - c;
                    if (o) {
                        o.rerendered || (o.rerendered = !0, this.rerender(o.radius));
                        const n = 2 * c;
                        e.drawImage(this.imageBitmap || t, l, d, n, n), a.isDone() && (this.transition = null)
                    } else this.rerender(i), e.drawImage(this.imageBitmap || t, l, d)
                }
            }
            class q {
                constructor() {
                    this.listeners = []
                }
                register(e) {
                    this.listeners.push(e)
                }
                fire(e) {
                    for (const t of this.listeners) t(e)
                }
            }
            class Z {
                constructor(e) {
                    this.frameHandle = null, this.lastTime = null, this.elementWidth = 0, this.elementHeight = 0, this.nextContainerFill = 0, this.width = 0, this.height = 0, this.eventResize = new q, this.eventFrame = new q, this.canvas = e, this.container = e.parentElement, this.context = e.getContext("2d"), this.frame = this.frame.bind(this), this.fillContainer = this.fillContainer.bind(this)
                }
                start() {
                    window.addEventListener("resize", this.fillContainer), this.fillContainer(), this.requestFrame()
                }
                stop() {
                    window.removeEventListener("resize", this.fillContainer), null !== this.frameHandle && cancelAnimationFrame(this.frameHandle)
                }
                frame(e) {
                    this.frameHandle = null;
                    let t = 0;
                    null !== this.lastTime && (t = Math.min(.001 * (e - this.lastTime), .1)), this.lastTime = e, this.nextContainerFill < Date.now() && this.fillContainer(), this.eventFrame.fire(t)
                }
                fillContainer() {
                    this.nextContainerFill = Date.now() + 1e3;
                    const e = this.container.clientWidth,
                        t = this.container.clientHeight,
                        n = e * window.devicePixelRatio,
                        r = t * window.devicePixelRatio;
                    this.elementWidth === e && this.elementHeight === t || (this.canvas.style.width = `${e}px`, this.canvas.style.height = `${t}px`, this.elementWidth = e, this.elementHeight = t), this.width === n && this.height === r || (this.canvas.width = n, this.canvas.height = r, this.width = n, this.height = r, this.eventResize.fire())
                }
                clear() {
                    const {
                        context: e,
                        width: t,
                        height: n
                    } = this;
                    e.clearRect(0, 0, t, n)
                }
                requestFrame() {
                    null === this.frameHandle && (this.frameHandle = requestAnimationFrame(this.frame))
                }
            }
            class J extends Z {
                constructor(e, t) {
                    super(e), this.needsRecalculation = !1, this.recalculationCount = 0, this.latestPush = 0, this.bubbles = [], this.bubblesDict = {}, this.pointerX = -1, this.pointerY = -1, this.hoveredBubble = null, this.draggedBubble = null, this.possibleSelectedBubble = null, this.timePointerDown = 0, this.timeLastWakeUp = Date.now(), this.selectedCurrencyId = null, this.renderFavoriteBorder = !0, this.eventSelect = new q, this.eventResize.register((() => {
                        this.needsRecalculation = !0, this.requestFrame()
                    })), this.eventFrame.register((e => {
                        this.needsRecalculation && (this.needsRecalculation = !1, this.recalculcate()), this.update(e), this.render();
                        const t = Date.now() - this.timeLastWakeUp,
                            n = H(Math.round(t / 150 - 20), 0, 80);
                        n > 0 ? window.setTimeout((() => this.requestFrame()), n) : this.requestFrame()
                    })), this.propertiesSource = t, e.addEventListener("pointerdown", (e => this.handlePointerDown(e)), {
                        passive: !1
                    }), e.addEventListener("pointermove", (e => this.handlePointerMove(e))), e.addEventListener("touchmove", (e => this.handleTouchMove(e)), {
                        passive: !1
                    }), e.addEventListener("pointerup", (e => this.handlePointerUp(e))), e.addEventListener("pointercancel", (() => this.handlePointerCancel()))
                }
                updatePointerPosition(e) {
                    this.pointerX = e.offsetX * window.devicePixelRatio, this.pointerY = e.offsetY * window.devicePixelRatio
                }
                wakeUp() {
                    this.timeLastWakeUp = Date.now()
                }
                getFocusedBubble() {
                    for (let e = this.bubbles.length - 1; e >= 0; e--) {
                        const t = this.bubbles[e];
                        if (t.visible) {
                            const e = t.posX - this.pointerX,
                                n = t.posY - this.pointerY,
                                r = e * e + n * n,
                                i = t.radius + s.bubbleExtraHitbox;
                            if (i * i >= r) return t
                        }
                    }
                    return null
                }
                handlePointerDown(e) {
                    e.isPrimary && (this.timePointerDown = Date.now(), this.canvas.setPointerCapture(e.pointerId), "mouse" === e.pointerType ? this.draggedBubble = this.hoveredBubble : (this.updatePointerPosition(e), this.draggedBubble = this.getFocusedBubble()), this.draggedBubble ? this.possibleSelectedBubble = this.draggedBubble : c.closeWindow() && this.launchExplosion(), e.preventDefault())
                }
                handlePointerMove(e) {
                    if (!e.isPrimary) return;
                    this.updatePointerPosition(e);
                    const t = this.getFocusedBubble();
                    if ("mouse" === e.pointerType) {
                        this.hoveredBubble = t;
                        const e = this.draggedBubble || this.hoveredBubble;
                        this.canvas.style.cursor = e ? "pointer" : "auto"
                    }
                    this.possibleSelectedBubble !== t && (this.possibleSelectedBubble = null)
                }
                handleTouchMove(e) {
                    this.draggedBubble && e.preventDefault()
                }
                handlePointerUp(e) {
                    if (e.isPrimary) {
                        if (this.possibleSelectedBubble && Date.now() - this.timePointerDown < 1e3) {
                            const {
                                currency: e
                            } = this.possibleSelectedBubble;
                            this.possibleSelectedBubble = null, this.eventSelect.fire(e.id)
                        }
                        this.draggedBubble = null
                    }
                }
                handlePointerCancel() {
                    this.hoveredBubble = null, this.draggedBubble = null
                }
                launchExplosion() {
                    for (const e of this.bubbles) {
                        const t = e.posX - this.pointerX,
                            n = e.posY - this.pointerY,
                            r = Math.max(1, Math.sqrt(t * t + n * n)),
                            i = 5e3 / r / r;
                        e.applyForce(t * i, n * i)
                    }
                    this.wakeUp()
                }
                update(e) {
                    const t = Math.pow(.5, e),
                        n = .001 * Math.min(this.width, this.height);
                    for (const e of this.bubbles) e.update();
                    for (let e = 0; e < this.bubbles.length; e++) {
                        const t = this.bubbles[e];
                        if (t.visible) {
                            for (let n = e + 1; n < this.bubbles.length; n++) {
                                const e = this.bubbles[n];
                                if (!e.visible) continue;
                                const r = t.posX - e.posX,
                                    i = t.posY - e.posY,
                                    s = Math.max(1, Math.sqrt(r * r + i * i)),
                                    a = t.radius + e.radius;
                                if (s < a) {
                                    const n = 6 / s,
                                        o = r * n,
                                        c = i * n,
                                        l = 1 - t.radius / a,
                                        d = e.radius / a - 1;
                                    t.applyForce(o * l, c * l), e.applyForce(o * d, c * d)
                                }
                            }
                            t.applyForce(U() * n, U() * n)
                        }
                    }
                    if (this.draggedBubble) {
                        const e = this.pointerX - this.draggedBubble.posX,
                            t = this.pointerY - this.draggedBubble.posY,
                            n = 5 / Math.max(1, Math.sqrt(e * e + t * t));
                        this.draggedBubble.applyForce(e * n, t * n), this.wakeUp()
                    }
                    for (const n of this.bubbles) n.speedX *= t, n.speedY *= t, n.posX += n.speedX * e, n.posY += n.speedY * e, n.posX < n.radius && (n.posX = n.radius, n.speedX *= -.7), n.posY < n.radius && (n.posY = n.radius, n.speedY *= -.7), n.posX > this.width - n.radius && (n.posX = this.width - n.radius, n.speedX *= -.7), n.posY > this.height - n.radius && (n.posY = this.height - n.radius, n.speedY *= -.7)
                }
                renderBubbleBorder(e, t, n = 1) {
                    this.context.beginPath(), this.context.arc(e.posX, e.posY, e.radius, 0, 2 * Math.PI), this.context.closePath(), this.context.lineWidth = s.bubbleBorderWidth * n, this.context.strokeStyle = t, this.context.stroke()
                }
                render() {
                    this.clear();
                    let e = null;
                    for (const t of this.bubbles)
                        if (t.renderFavoriteBorder = this.renderFavoriteBorder, t.visible) {
                            if (t.currency.id === this.selectedCurrencyId) {
                                e = t;
                                continue
                            }
                            if (this.draggedBubble === t) continue;
                            t.render(this.context)
                        }
                    if (this.draggedBubble ? this.draggedBubble !== e && (this.draggedBubble.render(this.context), this.renderBubbleBorder(this.draggedBubble, "white")) : this.hoveredBubble && this.renderBubbleBorder(this.hoveredBubble, "white"), e) {
                        e.render(this.context);
                        const t = .5 * Math.sin(.008 * Date.now()) + .5,
                            n = t + 2,
                            r = `rgb(${Math.floor(255 * t)}, ${Math.floor(160 * t) + 95}, 255)`;
                        this.renderBubbleBorder(e, r, n)
                    }
                }
                recalculcate() {
                    if (0 === this.bubbles.length) return;
                    const e = 0 === this.recalculationCount;
                    let t = 0,
                        n = 0;
                    for (const e of this.bubbles) {
                        const r = e.latestPush === this.latestPush;
                        if (e.size = r ? this.propertiesSource.getSize(e) : 0, e.size > 0) {
                            t += e.size;
                            const r = e.currency.performance[this.propertiesSource.configuration.period];
                            r && r > n && (n = r)
                        }
                    }
                    n = Math.min(20, n);
                    const r = this.width * this.height,
                        i = 0 === t ? 0 : r / t * .6;
                    for (const t of this.bubbles) {
                        const r = Math.sqrt(t.size * i / Math.PI);
                        t.setRadius(r, e), t.setColor(this.propertiesSource.getColor(t, n)), t.setContent(this.propertiesSource.getContent(t)), t.posX = H(t.posX, r, this.width - r), t.posY = H(t.posY, r, this.height - r)
                    }
                    this.recalculationCount++, this.wakeUp()
                }
                setPropertiesSource(e) {
                    this.propertiesSource = e, this.needsRecalculation = !0
                }
                pushCurrencies(e) {
                    this.latestPush++;
                    for (const t of e) {
                        const {
                            id: e
                        } = t;
                        let n = this.bubblesDict[e];
                        n ? n.currency = t : (n = new G(t), n.posX = Math.random() * this.width, n.posY = Math.random() * this.height, this.bubbles.push(n), this.bubblesDict[e] = n), n.latestPush = this.latestPush
                    }
                    this.needsRecalculation = !0
                }
            }

            function Q(e, t, n) {
                if (0 !== e) return e > 0 ? "yellow-blue" === t ? n ? "#16d" : "#4af" : n ? "#282" : "#3f3" : "yellow-blue" === t ? n ? "#d91" : "#fb1" : n ? "#b44" : "#f66"
            }

            function ee(e, t, n, r) {
                if (null === e) return {
                    text: "-"
                };
                e *= .01;
                const i = Math.abs(e);
                i < 5e-4 && (e = 0);
                const s = {
                    style: "percent",
                    signDisplay: n || 0 === e ? "never" : "always",
                    maximumFractionDigits: i >= 1 ? 0 : 1
                };
                return {
                    text: e.toLocaleString(void 0, s).replace(/\u00a0/, ""),
                    color: Q(e, t, r)
                }
            }

            function te(e, t) {
                e < 0 && (e = 0);
                let n = 0 === e ? 2 : 3 - Math.ceil(Math.log10(e));
                n < 0 && (n = 0), n > 10 && (n = 10), 1 === n && (n = 2), e > 1e6 && (n = 2);
                const r = {
                    style: "currency",
                    currency: t.code,
                    currencyDisplay: "narrowSymbol",
                    minimumFractionDigits: n,
                    maximumFractionDigits: n
                };
                e > 1e6 && (r.notation = "compact");
                try {
                    return e.toLocaleString(void 0, r)
                } catch (t) {
                    return r.currencyDisplay = "symbol", e.toLocaleString(void 0, r)
                }
            }
            const ne = {
                red: 127,
                green: 127,
                blue: 127
            };
            class re {
                constructor(e, t, n) {
                    this.configuration = e, this.baseCurrency = t, this.colors = n
                }
                getSize(e) {
                    const {
                        size: t,
                        period: n
                    } = this.configuration;
                    switch (t) {
                        case "marketcap":
                            return e.currency.marketcap;
                        case "volume":
                            return e.currency.volume;
                        case "performance":
                            {
                                const t = Math.abs(e.currency.performance[n] || 0);
                                return Math.min(5e3, t)
                            }
                    }
                }
                getColor(e, t) {
                    const {
                        color: n,
                        period: r
                    } = this.configuration;
                    switch (n) {
                        case "neutral":
                            return ne;
                        case "performance":
                            {
                                const n = e.currency.performance[r];
                                if (null === n) return ne;
                                const i = 0 === t ? 1 : Math.abs(n) / t,
                                    s = Math.min(1, Math.max(.2, i)),
                                    a = Math.floor(127 * (1 - s)),
                                    o = Math.floor(155 + 100 * s);
                                return n > 0 ? "yellow-blue" === this.colors ? {
                                    red: a,
                                    green: a + 70,
                                    blue: o
                                } : {
                                    red: a,
                                    green: o,
                                    blue: a
                                } : "yellow-blue" === this.colors ? {
                                    red: o,
                                    green: o,
                                    blue: a
                                } : {
                                    red: o,
                                    green: a,
                                    blue: a
                                }
                            }
                    }
                }
                getContent(e) {
                    const {
                        content: t,
                        period: n
                    } = this.configuration;
                    switch (t) {
                        case "name":
                            return e.currency.name;
                        case "price":
                            return te(e.currency.price, this.baseCurrency);
                        case "marketcap":
                            return te(e.currency.marketcap, this.baseCurrency);
                        case "volume":
                            return te(e.currency.volume, this.baseCurrency);
                        case "performance":
                            return ee(e.currency.performance[n], "red-green").text;
                        case "rank":
                            return e.currency.rank.toString();
                        case "dominance":
                            return `${(100 * e.currency.dominance).toFixed(2)}%`
                    }
                }
            }
            const ie = e => (0, r.jsx)("svg", Object.assign({
                width: 64,
                height: 64,
                viewBox: "0 0 24 24"
            }, e, {
                children: (0, r.jsx)("path", {
                    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                })
            })),
                se = e => {
                    const {
                        updateFailed: t,
                        translation: n,
                        updateCurrencies: i
                    } = e;
                    return t ? (0, r.jsxs)("div", Object.assign({
                        className: "loading",
                        onClick: i
                    }, {
                        children: [(0, r.jsx)(ie, {}), (0, r.jsx)("p", {
                            children: "No internet connection"
                        })]
                    })) : (0, r.jsxs)("div", Object.assign({
                        className: "loading"
                    }, {
                        children: [(0, r.jsx)("img", {
                            src: s.imageLogo,
                            className: "logo",
                            alt: s.appName,
                            title: `Logo of ${s.appName}`,
                            width: "64",
                            height: "64"
                        }), (0, r.jsx)("p", {
                            children: n.loading
                        })]
                    }))
                },
                ae = (0, l.memo)((e => {
                    const {
                        configuration: t,
                        filteredCurrencies: n,
                        selections: i,
                        currencyId: s,
                        updateFailed: a,
                        dispatch: o,
                        updateCurrencies: c
                    } = e, {
                        baseCurrency: d,
                        colors: u,
                        filter: h,
                        translation: p
                    } = i, g = (0, l.useRef)(null), b = (0, l.useRef)(null), m = (0, l.useRef)(null), f = (0, l.useMemo)((() => new re(t, d, u)), [t, d, u]), v = "favorites" !== h;
                    (0, l.useEffect)((() => {
                        const {
                            current: e
                        } = b;
                        if (e) {
                            const t = new J(e, f);
                            m.current = t, t.eventSelect.register((e => o({
                                type: 4,
                                currencyId: e
                            }))), t.start();
                            const n = () => t.wakeUp();
                            return window.addEventListener("focus", n), () => {
                                t.stop(), window.removeEventListener("focus", n)
                            }
                        }
                    }), [o]), (0, l.useEffect)((() => {
                        const {
                            current: e
                        } = m;
                        e && n && e.pushCurrencies(n)
                    }), [n]), (0, l.useEffect)((() => {
                        const {
                            current: e
                        } = m;
                        e && e.setPropertiesSource(f)
                    }), [f]), (0, l.useEffect)((() => {
                        const {
                            current: e
                        } = m;
                        e && (e.selectedCurrencyId = s, e.renderFavoriteBorder = v)
                    }), [s, v]), (0, l.useLayoutEffect)((() => {
                        const {
                            current: e
                        } = g;
                        if (e) {
                            const t = () => {
                                const t = Math.floor(document.documentElement.clientHeight - e.offsetTop);
                                e.style.height = `${t}px`
                            };
                            t();
                            const n = window.setInterval(t, 1e3);
                            return () => window.clearInterval(n)
                        }
                    }), []);
                    const j = "favorites" === h && n && 0 === n.length;
                    return (0, r.jsxs)("div", Object.assign({
                        className: "bubble-chart",
                        ref: g
                    }, {
                        children: [(0, r.jsx)("canvas", {
                            ref: b
                        }), (0, r.jsx)("p", Object.assign({
                            className: F("toast", j && "open")
                        }, {
                            children: p.no_favorites
                        })), !n && (0, r.jsx)(se, {
                            updateFailed: a,
                            translation: p,
                            updateCurrencies: c
                        })]
                    }))
                })),
                oe = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                    })
                })),
                ce = e => {
                    const {
                        value: t,
                        type: n,
                        className: i,
                        placeholder: s,
                        onChange: a
                    } = e;
                    return (0, r.jsx)("input", {
                        value: t,
                        type: n,
                        placeholder: s,
                        className: F("text-input", i),
                        onChange: function (e) {
                            const {
                                value: t
                            } = e.target;
                            a(t)
                        }
                    })
                };

            function le(e, t) {
                switch (e) {
                    case "hour":
                        return t.period_hour;
                    case "day":
                        return t.period_day;
                    case "month":
                        return t.period_month;
                    case "year":
                        return t.period_year;
                    case "min15":
                        return "15 min";
                    case "min5":
                        return "5 min";
                    default:
                        return t.period_week
                }
            }

            function de(e, t) {
                const n = function (e, t) {
                    switch (e.size) {
                        case "marketcap":
                            return t.marketcap;
                        case "volume":
                            return t.volume;
                        default:
                            return le(e.period, t)
                    }
                }(e, t),
                    r = function (e, t) {
                        switch (e.content) {
                            case "dominance":
                                return t.dominance;
                            case "marketcap":
                                return t.marketcap;
                            case "volume":
                                return t.volume;
                            case "name":
                                return t.currencyName;
                            case "price":
                                return t.price;
                            case "rank":
                                return t.rank;
                            default:
                                return le(e.period, t)
                        }
                    }(e, t);
                return n === r ? n : `${n} + ${r}`
            }

            function ue(e, t) {
                return e.name && e.name.trim().length > 0 ? e.name : de(e, t)
            }

            function he(e) {
                const t = (0, l.useRef)(null);
                return e && (t.current = e), t.current
            }

            function pe(e) {
                const {
                    title: t,
                    value: n,
                    children: i,
                    onChange: s
                } = e;
                return (0, r.jsxs)("fieldset", {
                    children: [(0, r.jsx)("legend", {
                        children: t
                    }), i.map((e => (0, r.jsx)("button", Object.assign({
                        className: F("solid-button", e.value === n && "active"),
                        onClick: () => s(e.value)
                    }, {
                        children: e.label
                    }), e.value)))]
                })
            }
            const ge = (0, l.memo)((e => {
                const {
                    translation: t,
                    configuration: n,
                    canDelete: i,
                    onClose: s,
                    dispatch: a
                } = e, {
                    expandButton: o,
                    closeButton: c,
                    windowClassName: l
                } = V("configuration-window", {
                    translation: t,
                    onClose: s,
                    openValue: null == n ? void 0 : n.id
                }), d = he(n);
                if (!d) return (0, r.jsx)("section", {
                    className: "window configuration-window"
                });
                const u = de(d, t);
                return (0, r.jsxs)("section", Object.assign({
                    className: l
                }, {
                    children: [(0, r.jsxs)("header", {
                        children: [o, (0, r.jsx)(ce, {
                            value: d.name,
                            className: "grow",
                            placeholder: u,
                            onChange: function (e) {
                                n && a({
                                    type: 6,
                                    configuration: Object.assign(Object.assign({}, n), {
                                        name: e
                                    })
                                })
                            }
                        }), i && (0, r.jsx)("button", Object.assign({
                            className: "icon-button",
                            onClick: function () {
                                n && (a({
                                    type: 7,
                                    configurationId: n.id
                                }), s())
                            },
                            title: t.configuration_delete
                        }, {
                            children: (0, r.jsx)(oe, {})
                        })), c]
                    }), (0, r.jsxs)("div", Object.assign({
                        className: "window-content"
                    }, {
                        children: [(0, r.jsx)(pe, Object.assign({
                            title: t.period,
                            value: d.period,
                            onChange: function (e) {
                                n && a({
                                    type: 6,
                                    configuration: Object.assign(Object.assign({}, n), {
                                        period: e
                                    })
                                })
                            }
                        }, {
                            children: _.periods.map((e => ({
                                value: e,
                                label: le(e, t)
                            })))
                        })), (0, r.jsx)(pe, Object.assign({
                            title: t.bubble_size,
                            value: d.size,
                            onChange: function (e) {
                                n && a({
                                    type: 6,
                                    configuration: Object.assign(Object.assign({}, n), {
                                        size: e
                                    })
                                })
                            }
                        }, {
                            children: [{
                                value: "performance",
                                label: t.performance
                            }, {
                                value: "marketcap",
                                label: t.marketcap
                            }, {
                                value: "volume",
                                label: t.volume
                            }]
                        })), (0, r.jsx)(pe, Object.assign({
                            title: t.bubble_content,
                            value: d.content,
                            onChange: function (e) {
                                n && a({
                                    type: 6,
                                    configuration: Object.assign(Object.assign({}, n), {
                                        content: e
                                    })
                                })
                            }
                        }, {
                            children: [{
                                value: "performance",
                                label: t.performance
                            }, {
                                value: "marketcap",
                                label: t.marketcap
                            }, {
                                value: "volume",
                                label: t.volume
                            }, {
                                value: "price",
                                label: t.price
                            }, {
                                value: "rank",
                                label: t.rank
                            }, {
                                value: "name",
                                label: t.currencyName
                            }, {
                                value: "dominance",
                                label: t.dominance
                            }]
                        })), (0, r.jsx)(pe, Object.assign({
                            title: t.bubble_color,
                            value: d.color,
                            onChange: function (e) {
                                n && a({
                                    type: 6,
                                    configuration: Object.assign(Object.assign({}, n), {
                                        color: e
                                    })
                                })
                            }
                        }, {
                            children: [{
                                value: "performance",
                                label: t.performance
                            }, {
                                value: "neutral",
                                label: t.neutral
                            }]
                        }))]
                    }))]
                }))
            })),
                be = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                    })
                })),
                me = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                    })
                })),
                fe = (0, l.memo)((e => {
                    const {
                        translation: t,
                        filteredCurrencies: n,
                        colors: i,
                        configurations: s,
                        configuration: a,
                        dispatch: o
                    } = e, c = (0, l.useRef)(null), d = (0, l.useRef)(null), [u, h] = (0, l.useState)(!1), p = (0, l.useCallback)((() => h(!1)), [h]), g = s.length >= 2, b = u ? a : null;
                    return (0, l.useEffect)((() => {
                        const {
                            current: e
                        } = c, {
                            current: t
                        } = d;
                        t && e && function (e, t, n) {
                            const r = {
                                left: t,
                                top: 0,
                                behavior: "smooth"
                            };
                            try {
                                e.scrollTo(r)
                            } catch (n) {
                                try {
                                    e.scrollTo(t, 0)
                                } catch (n) {
                                    try {
                                        e.scroll(r)
                                    } catch (n) {
                                        try {
                                            e.scroll(t, 0)
                                        } catch (e) { }
                                    }
                                }
                            }
                        }(t, e.offsetLeft - 64)
                    }), [a.id]), (0, r.jsxs)("div", Object.assign({
                        className: "bubble-chart-header"
                    }, {
                        children: [(0, r.jsx)("div", Object.assign({
                            className: "configuration-tabs scroll-container",
                            ref: d
                        }, {
                            children: s.map((e => {
                                const s = a === e;
                                let l = 0;
                                if (n && "neutral" !== e.color)
                                    for (const t of n) {
                                        const n = t.performance[e.period];
                                        l += Math.sign(n || 0)
                                    }
                                const d = Q(l, i);
                                return (0, r.jsx)("button", Object.assign({
                                    draggable: !0,
                                    className: F("tab", s && "selected"),
                                    ref: s ? c : void 0,
                                    onClick: s ? () => h(!u) : () => {
                                        return t = e.id, void o({
                                            type: 8,
                                            configurationId: t
                                        });
                                        var t
                                    },
                                    onDragStart: function (t) {
                                        t.dataTransfer.setData("text/plain", e.id), t.currentTarget.classList.add("drag")
                                    },
                                    onDragEnd: function (e) {
                                        e.currentTarget.classList.remove("drag")
                                    },
                                    onDragOver: e => e.preventDefault(),
                                    onDragEnter: function (e) {
                                        e.currentTarget.classList.add("drop")
                                    },
                                    onDragLeave: function (e) {
                                        e.currentTarget.classList.remove("drop")
                                    },
                                    onDrop: function (t) {
                                        t.preventDefault(), t.currentTarget.classList.remove("drop");
                                        const n = t.dataTransfer.getData("text/plain");
                                        o({
                                            type: 13,
                                            fromId: n,
                                            toId: e.id
                                        })
                                    },
                                    style: {
                                        borderColor: d
                                    }
                                }, {
                                    children: ue(e, t)
                                }), e.id)
                            }))
                        })), (0, r.jsx)("button", Object.assign({
                            className: F("icon-button", "border", u && "active"),
                            onClick: () => h(!u),
                            title: t.configuration_edit
                        }, {
                            children: (0, r.jsx)(me, {})
                        })), (0, r.jsx)("button", Object.assign({
                            className: "icon-button border",
                            onClick: function () {
                                o({
                                    type: 5
                                }), h(!0)
                            },
                            title: t.configuration_add
                        }, {
                            children: (0, r.jsx)(be, {})
                        })), (0, r.jsx)(ge, {
                            configuration: b,
                            canDelete: g,
                            translation: t,
                            onClose: p,
                            dispatch: o
                        })]
                    }))
                })),
                ve = e => {
                    const [t, n] = (0, l.useState)(!1);
                    return (0, l.useEffect)((() => {
                        const e = setTimeout((() => n(!0)));
                        return () => clearTimeout(e)
                    }), []), t ? e.children : e.fallback
                },
                je = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                    })
                })),
                ye = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                    })
                })),
                xe = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                    })
                })),
                we = e => {
                    const {
                        name: t,
                        onClick: n
                    } = e, i = "Register on Binance";
                    return (0, r.jsxs)(v, Object.assign({
                        className: "link-button support-link-binance",
                        href: s.binanceReferralLink,
                        title: i,
                        name: t || "Binance",
                        onClick: n
                    }, {
                        children: [(0, r.jsx)(f, {}), i]
                    }))
                },
                _e = () => {
                    const e = "Register on Kucoin";
                    return (0, r.jsxs)(v, Object.assign({
                        className: "link-button support-link-kucoin",
                        href: s.kucoinReferralLink,
                        title: e,
                        name: "Kucoin"
                    }, {
                        children: [(0, r.jsx)(j, {}), e]
                    }))
                },
                Ce = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                    })
                })),
                ke = [{
                    name: "BTC",
                    address: "bc1q8pep7zf7txjcjrslse7crqlgr0f36fwuxnzad0"
                }, {
                    name: "ETH",
                    address: "0x1e365DA3123718E703ffA316775e7f982EB1EfF3"
                }, {
                    name: "BSC",
                    address: "0x1e365DA3123718E703ffA316775e7f982EB1EfF3"
                }, {
                    name: "SOL",
                    address: "7bWCETt2r6bM7CitSahqiujAM9UR2o14QMyw3xB4QDox"
                }, {
                    name: "XRP",
                    address: "rpeeapKyDQE9JhRPkRZA3WtzmiYCxZ3jCL"
                }, {
                    name: "LTC",
                    address: "LX7Bzbn2aEEt64DZZzW653tkSvYBQ7cs6q"
                }, {
                    name: "XLM",
                    address: "GALMTBOTY4FQ4GBZW5X4XH3673SWEAYB3CPMEVGTX67NNXNV6DV77BWN"
                }, {
                    name: "XMR",
                    address: "4ARo28zbpru9PqFqd1XGSyPipH83PG38eKj9uSinwPgKMfAYKehgR5SFyrQDEN9A7VdBcUQMPnfcZARm5yNWfxXdGNeZfj6"
                }],
                Oe = e => {
                    const {
                        translation: t
                    } = e, [n, i] = (0, l.useState)(null), s = (0, l.useRef)(null), [a, o] = (0, l.useState)(!1);

                    function c() {
                        const {
                            current: e
                        } = s;
                        if (e) try {
                            e.select()
                        } catch (e) { }
                    }

                    function d() {
                        document.execCommand("copy") && o(!0)
                    }
                    return (0, r.jsxs)("div", Object.assign({
                        className: "support-crypto"
                    }, {
                        children: [(0, r.jsx)("ul", Object.assign({
                            onClick: () => o(!1)
                        }, {
                            children: ke.map((e => n === e ? (0, r.jsx)("li", Object.assign({
                                onClick: () => i(null),
                                className: "selected"
                            }, {
                                children: e.name
                            }), e.name) : (0, r.jsx)("li", Object.assign({
                                onClick: () => i(e)
                            }, {
                                children: e.name
                            }), e.name)))
                        })), (0, r.jsxs)("div", Object.assign({
                            className: F("support-crypto-address", !n && "hidden")
                        }, {
                            children: [(0, r.jsx)("input", {
                                className: "text-input",
                                ref: s,
                                readOnly: !0,
                                value: (null == n ? void 0 : n.address) || "",
                                onClick: c
                            }), (0, r.jsx)("button", Object.assign({
                                className: F("icon-button", "border", a && "active"),
                                title: t.copy,
                                onClick: function () {
                                    if (n) {
                                        c();
                                        try {
                                            navigator.clipboard.writeText(n.address).then((() => o(!0))).catch(d)
                                        } catch (e) {
                                            d()
                                        }
                                    }
                                }
                            }, {
                                children: (0, r.jsx)(Ce, {})
                            }))]
                        }))]
                    }))
                },
                Ne = (0, l.memo)((e => {
                    const {
                        translation: t
                    } = e;
                    return (0, r.jsxs)("footer", {
                        children: [(0, r.jsxs)("section", {
                            children: [(0, r.jsxs)("p", Object.assign({
                                className: "footer-header"
                            }, {
                                children: [(0, r.jsx)("img", {
                                    src: s.imageLogo,
                                    className: "footer-logo",
                                    alt: s.appName,
                                    title: `Logo of ${s.appName}`,
                                    width: "32",
                                    height: "32"
                                }), (0, r.jsx)("span", {
                                    children: s.appName
                                })]
                            })), (0, r.jsx)("h2", {
                                children: t.description
                            }), (0, r.jsx)("p", {
                                children: "Crypto Bubbles is available as website at cryptobubbles.net, Android App on the Play Store and iOS App on the App Store."
                            }), (0, r.jsx)("p", {
                                children: "No financial advice. Do your own research!"
                            }), (0, r.jsxs)("p", {
                                children: ["Ulrich Stark, 92637 Weiden, Germany", (0, r.jsx)("br", {}), s.emailAddress]
                            }), (0, r.jsxs)("nav", {
                                children: [c.isWeb && (0, r.jsx)(v, Object.assign({
                                    className: "icon-button",
                                    href: "https://play.google.com/store/apps/details?id=net.cryptobubbles",
                                    title: "Play Store",
                                    name: "PlayStore"
                                }, {
                                    children: (0, r.jsx)(N, {})
                                })), c.isWeb && (0, r.jsx)(v, Object.assign({
                                    className: "icon-button",
                                    href: "https://apps.apple.com/app/id1599892658",
                                    title: "App Store",
                                    name: "AppStore"
                                }, {
                                    children: (0, r.jsx)(B, {})
                                })), (0, r.jsx)(v, Object.assign({
                                    className: "icon-button",
                                    href: `mailto:${s.emailAddress}`,
                                    title: s.emailAddress,
                                    name: "Mail"
                                }, {
                                    children: (0, r.jsx)(ye, {})
                                })), (0, r.jsx)(v, Object.assign({
                                    className: "icon-button",
                                    href: `https://instagram.com/${s.usernameInstagram}`,
                                    title: `@${s.usernameInstagram}`,
                                    name: "Instagram"
                                }, {
                                    children: (0, r.jsx)(je, {})
                                })), (0, r.jsx)(v, Object.assign({
                                    className: "icon-button",
                                    href: `https://twitter.com/${s.usernameTwitter}`,
                                    title: `@${s.usernameTwitter}`,
                                    name: "Twitter"
                                }, {
                                    children: (0, r.jsx)(xe, {})
                                }))]
                            })]
                        }), (0, r.jsxs)("section", Object.assign({
                            className: "support-my-work"
                        }, {
                            children: [(0, r.jsx)("h2", {
                                children: t.support_my_work
                            }), (0, r.jsxs)("nav", Object.assign({
                                className: "support-links"
                            }, {
                                children: [(0, r.jsx)(we, {}), (0, r.jsx)(_e, {})]
                            })), (0, r.jsx)(Oe, {
                                translation: t
                            })]
                        }))]
                    })
                }));

            function Le() {
                try {
                    window.scrollBy({
                        top: 400,
                        behavior: "smooth"
                    })
                } catch (e) {
                    window.scrollBy(0, 400)
                }
            }
            const Be = e => (0, r.jsx)("svg", Object.assign({
                width: 24,
                height: 24
            }, e, {
                children: (0, r.jsx)("path", {
                    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
                })
            })),
                Me = (0, l.memo)((e => {
                    const {
                        translation: t
                    } = e, [n, i] = function (e) {
                        const [t, n] = (0, l.useState)(function (e) {
                            try {
                                const t = localStorage.getItem(e);
                                return Boolean(t)
                            } catch (e) { }
                            return !1
                        }(e));
                        return [t, (0, l.useCallback)((() => {
                            n(!0),
                                function (e) {
                                    try {
                                        localStorage.setItem(e, "1")
                                    } catch (e) { }
                                }(e)
                        }), [e])]
                    }("1631714779047"), [s, a] = (0, l.useState)(!0);
                    return (0, l.useEffect)((() => {
                        if (!n) {
                            const e = () => {
                                i(), a(!0)
                            };
                            window.addEventListener("scroll", e);
                            const t = window.setTimeout((() => a(!1)), 1e4);
                            return () => {
                                window.clearTimeout(t), window.removeEventListener("scroll", e)
                            }
                        }
                    }), [n]), (0, r.jsxs)("p", Object.assign({
                        className: F("toast", "scroll-toast", s && "closed"),
                        onClick: Le
                    }, {
                        children: [(0, r.jsx)(Be, {}), (0, r.jsx)("span", {
                            children: t.scroll_toast
                        }), (0, r.jsx)(Be, {})]
                    }))
                }));

            function Pe(e, t) {
                return e[`${t}Symbol`]
            }
            const Se = e => (0, r.jsx)("svg", Object.assign({
                width: 24,
                height: 24
            }, e, {
                children: (0, r.jsx)("path", {
                    d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                })
            })),
                ze = e => {
                    const {
                        on: t,
                        translation: n,
                        onClick: i
                    } = e, s = t ? n.remove_favorite : n.add_favorite;
                    return (0, r.jsx)("button", Object.assign({
                        className: F("icon-button", "button-favorite", t && "on"),
                        title: s,
                        onClick: i
                    }, {
                        children: (0, r.jsx)(Se, {})
                    }))
                },
                Fe = e => {
                    const {
                        currency: t,
                        onClick: n
                    } = e, {
                        image: i,
                        name: s
                    } = t;

                    var i_imageParts = i.split('/');
                    var i_imageName = i_imageParts[i_imageParts.length - 1];

                    return (0, r.jsxs)("div", Object.assign({
                        className: "currency-header",
                        onClick: n
                    }, {
                        children: [(0, r.jsx)("img", {
                            src: AppConfig.currencyTableLogo + i_imageName,
                            alt: s,
                            title: `Logo of ${s}`
                        }), (0, r.jsx)("span", {
                            children: s
                        })]
                    }))
                },
                Te = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24,
                    viewBox: "0 0 41 41"
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "m35.124 24.5c-0.715 0.452-1.557 0.508-2.197 0.147-0.813-0.459-1.26-1.534-1.26-3.029v-4.473c0-2.16-0.854-3.697-2.282-4.112-2.42-0.705-4.24 2.256-4.924 3.368l-4.268 6.92v-8.458c-0.048-1.946-0.68-3.11-1.88-3.461-0.794-0.232-1.982-0.139-3.136 1.627l-9.562 15.354c-1.2801-2.4302-1.9475-5.1363-1.944-7.883 0-9.249 7.412-16.773 16.522-16.773s16.521 7.524 16.521 16.773c0 0.016 4e-3 0.03 5e-3 0.045 0 0.016-3e-3 0.03-2e-3 0.046 0.086 1.791-0.494 3.216-1.593 3.91zm5.261-3.999v-0.047l-1e-3 -0.046c-0.051-11.264-9.088-20.408-20.192-20.408-11.133 0-20.192 9.196-20.192 20.5 0 11.303 9.059 20.5 20.193 20.5 5.109 0 9.985-1.942 13.728-5.467 0.744-0.7 0.788-1.879 0.098-2.633-0.68394-0.7542-1.854-0.79931-2.594-0.1-3.0339 2.873-7.0536 4.4738-11.232 4.473-4.878 0-9.267-2.159-12.294-5.583l8.623-13.846v6.383c0 3.066 1.189 4.057 2.186 4.347 0.998 0.29 2.523 0.092 4.124-2.508l4.743-7.689c0.152-0.248 0.292-0.462 0.42-0.647v3.888c0 2.866 1.148 5.158 3.149 6.287 1.804 1.018 4.072 0.926 5.92-0.24 2.24-1.415 3.447-4.022 3.321-7.164z",
                        fill: "#fff"
                    })
                })),
                Ee = e => {
                    const {
                        currency: t,
                        translation: n
                    } = e, i = `https://coinmarketcap.com/${function (e) { switch (e.id) { case "pt": return "pt-br"; case "fa": case "ar": return "en"; default: return e.id } }(n)}/currencies/${t.slug}`, s = `View ${t.name} on CoinMarketCap`;
                    return (0, r.jsx)(v, Object.assign({
                        href: i,
                        title: s,
                        name: "CMC",
                        className: "icon-button"
                    }, {
                        children: (0, r.jsx)(Te, {})
                    }))
                },
                Ae = (0, l.memo)((e => {
                    const {
                        currency: t,
                        baseCurrency: n,
                        translation: i,
                        colors: s,
                        dispatch: a
                    } = e, {
                        isFavorite: o,
                        rank: c,
                        price: l,
                        marketcap: d,
                        volume: u,
                        performance: h
                    } = t;

                    function p(e) {
                        const {
                            text: t,
                            color: n
                        } = ee(e, s, !1, !0);
                        return (0, r.jsx)("td", Object.assign({
                            className: "center",
                            style: {
                                backgroundColor: n
                            }
                        }, {
                            children: t
                        }))
                    }
                    return (0, r.jsxs)("tr", {
                        children: [(0, r.jsx)("td", Object.assign({
                            className: "right"
                        }, {
                            children: c
                        })), (0, r.jsx)("td", {
                            children: (0, r.jsxs)("div", Object.assign({
                                className: "name-cell"
                            }, {
                                children: [(0, r.jsx)(ze, {
                                    on: o,
                                    onClick: function () {
                                        a({
                                            type: 3,
                                            currencyId: t.id
                                        })
                                    },
                                    translation: i
                                }), (0, r.jsx)(Fe, {
                                    currency: t,
                                    onClick: function () {
                                        a({
                                            type: 4,
                                            currencyId: t.id
                                        })
                                    }
                                })]
                            }))
                        }), (0, r.jsx)("td", Object.assign({
                            className: "right"
                        }, {
                            children: te(l, n)
                        })), (0, r.jsx)("td", Object.assign({
                            className: "right"
                        }, {
                            children: te(d, n)
                        })), (0, r.jsx)("td", Object.assign({
                            className: "right volume"
                        }, {
                            children: te(u, n)
                        })), p(h.hour), p(h.day), p(h.week), p(h.month), p(h.year), (0, r.jsxs)("td", {
                            children: [(0, r.jsx)(Ee, {
                                currency: t,
                                translation: i
                            }), _.exchanges.map((e => {
                                const n = Pe(t, e.id);
                                return n ? (0, r.jsx)(e.linkComponent, {
                                    symbol: n,
                                    currency: t,
                                    translation: i
                                }, e.id) : (0, r.jsx)("span", {
                                    className: "icon-button-dummy"
                                }, e.id)
                            }))]
                        })]
                    })
                })),
                Re = (0, l.memo)((e => {
                    const {
                        translation: t,
                        sorting: n,
                        onSort: i
                    } = e;

                    function s(e, t) {
                        const s = (null == n ? void 0 : n.field) === e ? `sorted sorted-${n.direction}` : void 0;
                        return (0, r.jsx)("th", Object.assign({
                            className: F("sortable", s),
                            onClick: () => i(e)
                        }, {
                            children: (0, r.jsxs)("div", {
                                children: [(0, r.jsx)(Be, {}), (0, r.jsx)("span", {
                                    children: t
                                })]
                            })
                        }))
                    }
                    return (0, r.jsx)("thead", {
                        children: (0, r.jsxs)("tr", {
                            children: [s("rank", "#"), s("name", t.currencyName), s("price", t.price), s("marketcap", t.marketcap), s("volume", t.volume), s("performance-hour", t.period_hour), s("performance-day", t.period_day), s("performance-week", t.period_week), s("performance-month", t.period_month), s("performance-year", t.period_year), (0, r.jsx)("th", {
                                children: t.links
                            })]
                        })
                    })
                })),
                De = e => (0, r.jsx)("svg", Object.assign({
                    width: 24,
                    height: 24
                }, e, {
                    children: (0, r.jsx)("path", {
                        d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    })
                })),
                Ie = (0, l.memo)((e => {
                    const {
                        value: t,
                        placeholder: n,
                        onChange: i
                    } = e;
                    return (0, r.jsxs)("div", Object.assign({
                        className: "search-input-container"
                    }, {
                        children: [(0, r.jsx)("input", {
                            value: t,
                            placeholder: n,
                            className: "search-input",
                            onChange: function (e) {
                                const {
                                    value: t
                                } = e.target;
                                i(t)
                            }
                        }), (0, r.jsx)(De, {
                            className: "search-input-icon"
                        }), t.length > 0 && (0, r.jsx)("button", Object.assign({
                            className: "icon-button search-input-clear",
                            onClick: () => i("")
                        }, {
                            children: (0, r.jsx)(D, {})
                        }))]
                    }))
                })),
                $e = (0, l.memo)((e => {
                    const {
                        filteredCurrencies: t,
                        currencies: n,
                        selections: i,
                        sorting: s,
                        onSort: a,
                        dispatch: o
                    } = e, {
                        translation: c,
                        filter: d,
                        baseCurrency: u,
                        colors: h
                    } = i, [p, g] = (0, l.useState)(""), b = (0, l.useDeferredValue)(p).trim().toUpperCase(), m = (0, l.useMemo)((() => {
                        let e = t;
                        if (n && b.length > 0 && (e = n.filter((e => e.nameUpper.includes(b) || e.symbol.includes(b)))), e && s) {
                            const t = function (e) {
                                switch (e) {
                                    case "rank":
                                        return (e, t) => t.rank - e.rank;
                                    case "price":
                                        return (e, t) => t.price - e.price;
                                    case "marketcap":
                                        return (e, t) => t.marketcap - e.marketcap;
                                    case "volume":
                                        return (e, t) => t.volume - e.volume;
                                    case "name":
                                        return (e, t) => t.name.localeCompare(e.name);
                                    case "performance-hour":
                                        return (e, t) => {
                                            var n, r;
                                            return (null !== (n = t.performance.hour) && void 0 !== n ? n : 0) - (null !== (r = e.performance.hour) && void 0 !== r ? r : 0)
                                        };
                                    case "performance-day":
                                        return (e, t) => {
                                            var n, r;
                                            return (null !== (n = t.performance.day) && void 0 !== n ? n : 0) - (null !== (r = e.performance.day) && void 0 !== r ? r : 0)
                                        };
                                    case "performance-week":
                                        return (e, t) => {
                                            var n, r;
                                            return (null !== (n = t.performance.week) && void 0 !== n ? n : 0) - (null !== (r = e.performance.week) && void 0 !== r ? r : 0)
                                        };
                                    case "performance-month":
                                        return (e, t) => {
                                            var n, r;
                                            return (null !== (n = t.performance.month) && void 0 !== n ? n : 0) - (null !== (r = e.performance.month) && void 0 !== r ? r : 0)
                                        };
                                    case "performance-year":
                                        return (e, t) => {
                                            var n, r;
                                            return (null !== (n = t.performance.year) && void 0 !== n ? n : 0) - (null !== (r = e.performance.year) && void 0 !== r ? r : 0)
                                        }
                                }
                            }(s.field);
                            return [...e].sort("asc" === s.direction ? (e, n) => t(n, e) : t)
                        }
                        return e
                    }), [n, t, b, s]);
                    return m ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(Ie, {
                            value: p,
                            placeholder: c.search_crypto,
                            onChange: g
                        }), 0 === m.length ? (0, r.jsx)("div", Object.assign({
                            className: "center-container"
                        }, {
                            children: (0, r.jsx)("p", {
                                children: "favorites" === d && 0 === b.length ? c.no_favorites : c.not_found
                            })
                        })) : (0, r.jsx)("div", Object.assign({
                            className: "scroll-container"
                        }, {
                            children: (0, r.jsxs)("table", Object.assign({
                                className: "currency-table"
                            }, {
                                children: [(0, r.jsx)(Re, {
                                    translation: c,
                                    sorting: s,
                                    onSort: a
                                }), (0, r.jsx)("tbody", {
                                    children: m.map((e => (0, r.jsx)(Ae, {
                                        currency: e,
                                        baseCurrency: u,
                                        translation: c,
                                        colors: h,
                                        dispatch: o
                                    }, e.id)))
                                })]
                            }))
                        }))]
                    }) : null
                })),
                Ve = (0, l.memo)((e => {
                    const {
                        configurations: t,
                        configuration: n,
                        currencies: i,
                        page: s,
                        currencyId: a,
                        selections: o,
                        updateFailed: d,
                        dispatch: u,
                        updateCurrencies: h
                    } = e, {
                        translation: p,
                        filter: g,
                        colors: m
                    } = o, f = (0, l.useCallback)((() => u({
                        type: 9,
                        page: "bubbles"
                    })), []), v = function (e, t) {
                        return (0, l.useMemo)((() => {
                            if (null === e) return null;
                            switch (t) {
                                case "top-200":
                                    return e.filter((e => e.rank > 100 && e.rank <= 200));
                                case "top-300":
                                    return e.filter((e => e.rank > 200 && e.rank <= 300));
                                case "top-400":
                                    return e.filter((e => e.rank > 300 && e.rank <= 400));
                                case "top-500":
                                    return e.filter((e => e.rank > 400 && e.rank <= 500));
                                case "top-600":
                                    return e.filter((e => e.rank > 500 && e.rank <= 600));
                                case "top-700":
                                    return e.filter((e => e.rank > 600 && e.rank <= 700));
                                case "top-800":
                                    return e.filter((e => e.rank > 700 && e.rank <= 800));
                                case "top-900":
                                    return e.filter((e => e.rank > 800 && e.rank <= 900));
                                case "top-1000":
                                    return e.filter((e => e.rank > 900 && e.rank <= 1e3));
                                case "favorites":
                                    return e.filter((e => e.isFavorite));
                                case "on-binance":
                                    return e.filter((e => null !== e.binanceSymbol));
                                case "on-kucoin":
                                    return e.filter((e => null !== e.kucoinSymbol));
                                case "on-gateio":
                                    return e.filter((e => null !== e.gateioSymbol));
                                case "on-ftx":
                                    return e.filter((e => null !== e.ftxSymbol));
                                case "on-coinbase":
                                    return e.filter((e => null !== e.coinbaseSymbol));
                                default:
                                    return e.filter((e => e.rank > 0 && e.rank <= 100))
                            }
                        }), [e, t])
                    }(i, g), [j, y] = (0, l.useState)(null), x = (0, l.useCallback)((e => {
                        y((t => t && t.field === e ? "asc" === t.direction ? null : Object.assign(Object.assign({}, t), {
                            direction: "asc"
                        }) : {
                            field: e,
                            direction: "desc"
                        }))
                    }), [y]);
                    $(f, c.isMobile && "list" === s);
                    const w = (0, r.jsx)(fe, {
                        translation: p,
                        filteredCurrencies: v,
                        colors: m,
                        configurations: t,
                        configuration: n,
                        dispatch: u
                    }),
                        _ = (0, r.jsx)(ae, {
                            configuration: n,
                            filteredCurrencies: v,
                            currencyId: a,
                            selections: o,
                            updateFailed: d,
                            updateCurrencies: h,
                            dispatch: u
                        }),
                        C = (0, r.jsx)($e, {
                            filteredCurrencies: v,
                            currencies: i,
                            selections: o,
                            sorting: j,
                            onSort: x,
                            dispatch: u
                        });
                    return c.isDesktop ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("main", {
                            children: [w, _, (0, r.jsx)(Me, {
                                translation: p
                            }), C]
                        }), (0, r.jsx)(Ne, {
                            translation: p
                        })]
                    }) : "bubbles" === s ? (0, r.jsxs)("main", {
                        children: [w, _]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)("main", {
                            children: [(0, r.jsx)("div", Object.assign({
                                className: "center-container"
                            }, {
                                children: (0, r.jsx)(b, {
                                    selections: o,
                                    dispatch: u
                                })
                            })), (0, r.jsx)(ve, Object.assign({
                                fallback: (0, r.jsx)(se, {
                                    updateFailed: d,
                                    translation: p,
                                    updateCurrencies: h
                                })
                            }, {
                                children: C
                            }), g)]
                        }), (0, r.jsx)(Ne, {
                            translation: p
                        })]
                    })
                })),
                Xe = e => {
                    const {
                        colors: t,
                        baseCurrency: n,
                        children: i
                    } = e, [s, a] = (0, l.useState)(i), [o, c] = (0, l.useState)(i), d = (0, l.useMemo)((() => new Y(i)), []);
                    (0, l.useEffect)((() => {
                        s !== i && (a(i), d.set(i))
                    }), [i]), (0, l.useEffect)((() => {
                        if (!d.isDone()) {
                            const e = requestAnimationFrame((() => c(d.get())));
                            return () => cancelAnimationFrame(e)
                        }
                        c(s)
                    }));
                    const u = Q(s - o, t);
                    return (0, r.jsx)("strong", Object.assign({
                        className: "number",
                        style: {
                            color: u
                        }
                    }, {
                        children: te(o, n)
                    }))
                };
            class We extends Z {
                constructor(e) {
                    super(e), this.quotes = null, this.baseCurrency = null, this.period = null, this.colors = "red-green", this.pointerX = null, this.eventFrame.register((() => this.render())), this.eventResize.register((() => this.render())), this.canvas.addEventListener("pointermove", (e => this.handlePointerUpdate(e))), this.canvas.addEventListener("pointerdown", (e => this.handlePointerUpdate(e))), this.canvas.addEventListener("pointerout", (e => this.handlePointerOut(e)))
                }
                handlePointerUpdate(e) {
                    if (e.isPrimary) {
                        const t = Math.round(e.offsetX * window.devicePixelRatio);
                        t !== this.pointerX && (this.pointerX = t, this.render())
                    }
                }
                handlePointerOut(e) {
                    e.isPrimary && null !== this.pointerX && (this.pointerX = null, this.render())
                }
                drawPointOnChart(e, t, n, r) {
                    const {
                        context: i,
                        width: s,
                        height: a
                    } = this, {
                        x: o,
                        y: c
                    } = t, l = window.devicePixelRatio, d = .5 * s, u = .5 * a, h = te(e, n);
                    i.beginPath(), i.arc(o, c, 5 * l, 0, 2 * Math.PI), i.fillStyle = r, i.fill(), i.textAlign = o < d ? "left" : "right", i.fillText(h, o + (o < d ? 8 : -8) * l, c + (c < u ? -10 : 10) * l)
                }
                render() {
                    const {
                        quotes: e,
                        baseCurrency: t,
                        period: n,
                        context: r,
                        width: i,
                        height: s,
                        pointerX: a
                    } = this, o = window.devicePixelRatio;
                    if (this.clear(), null === t || null === n || null === e || 0 === e.length) return;
                    const c = i / (e.length - 1);
                    let l = e[0].p,
                        d = e[0].p;
                    for (const t of e) t.p > d && (d = t.p), t.p < l && (l = t.p);
                    const u = d - l;
                    let h = 0,
                        p = {
                            x: 0,
                            y: 0
                        },
                        g = {
                            x: 0,
                            y: 0
                        },
                        b = null,
                        m = null;
                    r.beginPath();
                    for (const t of e) {
                        const e = t.p,
                            n = (.8 - (e - l) / u * .7) * s;
                        e === l && (p.x = h, p.y = n), e === d && (g.x = h, g.y = n), a && !b && a < h + c / 2 && (b = {
                            x: h,
                            y: n
                        }, m = t), 0 === h ? r.moveTo(h, n + 1) : r.lineTo(h, n + 1), h += c
                    }
                    r.lineWidth = 2 * o, r.strokeStyle = "white", r.lineJoin = "round", r.stroke(), r.lineTo(h, s), r.lineTo(0, s), r.closePath();
                    const f = r.createLinearGradient(0, 0, 0, s);
                    f.addColorStop(0, "rgba(0, 100, 255, 1)"), f.addColorStop(1, "rgba(0, 100, 255, 0)"), r.fillStyle = f, r.fill();
                    const v = Math.round(20 * o);
                    r.font = `${v}px Arial`, r.textBaseline = "middle";
                    const j = Q(1, this.colors) || "#3f3",
                        y = Q(-1, this.colors) || "#f55";
                    if (this.drawPointOnChart(l, p, t, y), this.drawPointOnChart(d, g, t, j), b && m) {
                        const {
                            p: e,
                            t: a
                        } = m, c = te(e, t);
                        let l = 0;
                        try {
                            l = r.measureText(c).width
                        } catch (e) { }
                        l = l || 150;
                        const d = 6 * o,
                            u = 4 * o,
                            h = l + 2 * d,
                            p = v + 2 * u,
                            g = H(b.x - h / 2, 0, i - h),
                            f = 0;
                        r.strokeStyle = "#666", r.beginPath(), r.moveTo(b.x, 0), r.lineTo(b.x, s), r.closePath(), r.stroke(), r.fillStyle = "white", r.beginPath(), r.arc(b.x, b.y, 5 * o, 0, 2 * Math.PI), r.closePath(), r.fill(), r.fillStyle = "#666", r.fillRect(g, f, h, p), r.textAlign = "left", r.textBaseline = "top", r.fillStyle = "white", r.fillText(c, g + d, f + u);
                        const j = new Date(1e3 * a);
                        j.setSeconds(0), "week" !== n && "month" !== n || j.setMinutes(0);
                        let y = j.toLocaleString();
                        if ("year" === n) y = j.toLocaleDateString();
                        else try {
                            y = j.toLocaleString(void 0, {
                                dateStyle: "medium",
                                timeStyle: "short"
                            })
                        } catch (e) { }
                        r.textAlign = "right", r.textBaseline = "bottom", r.fillStyle = "#ccc", r.fillText(y, i - 6 * o, s - 6 * o)
                    }
                }
            }
            const He = (0, l.memo)((e => {
                const {
                    fetchKey: t,
                    period: n,
                    currency: i,
                    selections: s
                } = e, {
                    translation: o,
                    colors: c,
                    baseCurrency: d
                } = s, u = (0, l.useRef)(null), h = (0, l.useRef)(null), [p, g] = (0, l.useState)(null);
                return (0, l.useEffect)((() => {
                    const {
                        current: e
                    } = u;
                    if (e) {
                        const t = new We(e);
                        return h.current = t, t.start(), () => t.stop()
                    }
                }), []), (0, l.useEffect)((() => g(null)), [i.id, n, d.id]), (0, l.useEffect)((() => {
                    let e;
                    try {
                        e = new AbortController
                    } catch (e) { }
                    const t = AppConfig.bubbleCharts +`${n}/${i.id}/${d.id.toUpperCase()}.json`;
                    return a.get(t, {
                        signal: null == e ? void 0 : e.signal
                    }).then(g), () => null == e ? void 0 : e.abort()
                }), [i.id, n, d.id, t]), (0, l.useEffect)((() => {
                    const {
                        current: e
                    } = h;
                    e && (e.quotes = p, e.colors = c, e.baseCurrency = d, e.period = n, e.requestFrame())
                }), [p, c, d, n]), (0, r.jsxs)("div", Object.assign({
                    className: F("price-chart", p && "loaded")
                }, {
                    children: [(0, r.jsx)("canvas", {
                        ref: u
                    }), (0, r.jsx)("img", {
                        src: AppConfig.bubblesChartLogos + (i.image.split('/'))[i.image.split('/').length - 1],
                        alt: i.name
                    }), (0, r.jsx)("p", {
                        children: le(n, o)
                    })]
                }))
            })),
                Ue = e => {
                    const {
                        currency: t,
                        colors: n,
                        baseCurrency: i
                    } = e, [s, a] = (0, l.useState)("1");
                    let o = function (e, t) {
                        try {
                            const t = Number.parseFloat(e);
                            if (Number.isFinite(t) && !Number.isNaN(t)) return t
                        } catch (e) { }
                        return 1
                    }(s);
                    return o < 0 && (o = 1), (0, l.useEffect)((() => {
                        a("1")
                    }), [t.id]), (0, r.jsxs)("p", Object.assign({
                        className: "bubble-window-price"
                    }, {
                        children: [(0, r.jsx)(ce, {
                            value: s,
                            placeholder: "1",
                            type: "number",
                            onChange: a
                        }), (0, r.jsx)("span", {
                            children: ` ${t.symbol} = `
                        }), (0, r.jsx)(Xe, Object.assign({
                            baseCurrency: i,
                            colors: n
                        }, {
                            children: t.price * o
                        }))]
                    }))
                },
                Ye = (0, l.memo)((e => {
                    const {
                        configurationPeriod: t,
                        priceChartKey: n,
                        currencies: i,
                        currencyId: s,
                        selections: a,
                        dispatch: o
                    } = e, {
                        translation: c,
                        colors: d,
                        baseCurrency: u
                    } = a, [h, p] = (0, l.useState)("week"), g = (0, l.useCallback)((() => o({
                        type: 4,
                        currencyId: null
                    })), []), {
                        expandButton: b,
                        closeButton: m,
                        windowClassName: f
                    } = V("bubble-window", {
                        translation: c,
                        onClose: g,
                        openValue: s
                    }), v = (0, l.useMemo)((() => i && s && i.find((e => e.id === s)) || null), [i, s]), j = he(v);
                    if ((0, l.useEffect)((() => {
                        p("min15" === t || "min5" === t ? "hour" : t)
                    }), [t]), !j) return (0, r.jsx)("section", {
                        className: "window bubble-window"
                    });
                    const y = [];
                    for (const e of _.exchanges) {
                        const t = Pe(j, e.id);
                        t && y.push((0, r.jsx)(e.linkComponent, {
                            symbol: t,
                            currency: j,
                            translation: c
                        }, e.id))
                    }
                    const x = (e, t) => {
                        const n = j.performance[e],
                            {
                                text: i,
                                color: s
                            } = ee(n, d, !0),
                            a = e === h;
                        return (0, r.jsxs)("p", Object.assign({
                            onClick: () => p(e),
                            className: F(a && "selected")
                        }, {
                            children: [(0, r.jsx)("span", {
                                children: t
                            }), (0, r.jsx)("span", Object.assign({
                                style: {
                                    color: s
                                }
                            }, {
                                children: i
                            }))]
                        }))
                    };
                    return (0, r.jsxs)("section", Object.assign({
                        className: f
                    }, {
                        children: [(0, r.jsxs)("header", {
                            children: [b, (0, r.jsx)(Fe, {
                                currency: j
                            }), (0, r.jsx)("div", {
                                className: "grow"
                            }), (0, r.jsx)(ze, {
                                on: j.isFavorite,
                                onClick: () => o({
                                    type: 3,
                                    currencyId: j.id
                                }),
                                translation: c
                            }), m]
                        }), (0, r.jsxs)("div", Object.assign({
                            className: "window-content"
                        }, {
                            children: [(0, r.jsxs)("p", Object.assign({
                                className: "bubble-window-links"
                            }, {
                                children: [(0, r.jsx)(Ee, {
                                    currency: j,
                                    translation: c
                                }), y.length > 0 && (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("span", {
                                        children: "| Trade"
                                    }), (0, r.jsx)("span", {
                                        children: y
                                    })]
                                })]
                            })), (0, r.jsx)(Ue, {
                                currency: j,
                                baseCurrency: u,
                                colors: d
                            }, j.id), (0, r.jsxs)("div", Object.assign({
                                className: "bubble-window-details"
                            }, {
                                children: [(0, r.jsxs)("p", {
                                    children: [(0, r.jsx)("span", {
                                        children: c.rank
                                    }), (0, r.jsx)("strong", {
                                        children: j.rank
                                    })]
                                }), (0, r.jsxs)("p", {
                                    children: [(0, r.jsx)("span", {
                                        children: c.marketcap
                                    }), (0, r.jsx)(Xe, Object.assign({
                                        baseCurrency: u,
                                        colors: d
                                    }, {
                                        children: j.marketcap
                                    }), j.id)]
                                }), (0, r.jsxs)("p", {
                                    children: [(0, r.jsx)("span", {
                                        children: c.volume
                                    }), (0, r.jsx)(Xe, Object.assign({
                                        baseCurrency: u,
                                        colors: d
                                    }, {
                                        children: j.volume
                                    }), j.id)]
                                })]
                            })), (0, r.jsx)(He, {
                                fetchKey: n,
                                period: h,
                                currency: j,
                                selections: a
                            }), (0, r.jsxs)("div", Object.assign({
                                className: "bubble-window-performance"
                            }, {
                                children: [x("hour", c.period_hour), x("day", c.period_day), x("week", c.period_week), x("month", c.period_month), x("year", c.period_year)]
                            }))]
                        }))]
                    }))
                })),
                Ke = e => {
                    const {
                        initialState: t
                    } = e, [n, i] = (0, l.useReducer)(O, t), {
                        translation: s,
                        page: o,
                        settings: c,
                        configurations: d,
                        configurationId: u,
                        currencies: p,
                        currencyId: g,
                        baseCurrency: b,
                        colors: m,
                        filter: f,
                        priceChartKey: v,
                        updateFailed: j
                    } = n, y = (0, l.useMemo)((() => ({
                        filter: f,
                        baseCurrency: b,
                        translation: s,
                        colors: m
                    })), [f, b, s, m]), x = (0, l.useCallback)((() => {
                        i({
                            type: 14
                        });
                        //const e = AppConfig.bubblesData +  `bubbles1000.${b.id}.json`;
                        const e = AppConfig.bubblesData;
                        a.get(e).then((e => i({
                            type: 0,
                            currencies: e
                        }))).catch((() => i({
                            type: 15
                        })))
                    }), [i, b.id]), w = d.find((e => e.id === u)) || d[0];
                    return (0, l.useEffect)((() => h.save(n)), [n]), (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(z, {}), (0, r.jsx)(W, {
                            page: o,
                            settings: c,
                            selections: y,
                            updateCurrencies: x,
                            dispatch: i
                        }), (0, r.jsx)(Ve, {
                            configurations: d,
                            configuration: w,
                            currencies: p,
                            page: o,
                            currencyId: g,
                            selections: y,
                            updateFailed: j,
                            updateCurrencies: x,
                            dispatch: i
                        }), (0, r.jsx)(Ye, {
                            configurationPeriod: w.period,
                            priceChartKey: v,
                            currencies: p,
                            currencyId: g,
                            selections: y,
                            dispatch: i
                        })]
                    })
                };

            function Ge(e) {
                return (null == e ? void 0 : e.favoritesCMC) ? function (e) {
                    const t = {};
                    for (const n of e) t[n] = !0;
                    return t
                }(e.favoritesCMC) : {}
            }

            function qe(e) {
                return e && e.currencyFilter ? e.currencyFilter : "top-100"
            }

            function Ze(e) {
                return _.baseCurrencies.find((t => t.id === (null == e ? void 0 : e.baseCurrency))) || _.baseCurrencyUSD
            }

            function Je(e, t) {
                return e && e.selectedConfiguration ? e.selectedConfiguration : t[0].id
            }

            function Qe(e) {
                const t = _.translations.find((t => t.id === (null == e ? void 0 : e.translation)));
                if (t) return t;
                if (navigator.language) {
                    const e = navigator.language.toLowerCase();
                    for (const t of _.translations)
                        if (e.startsWith(t.id.toLowerCase())) return t
                }
                return p
            }

            function et(e) {
                if (e && e.settings)
                    for (const t of _.settings) {
                        const n = e.settings[t.id];
                        void 0 !== n && (t.pinned = Boolean(n))
                    }
                return _.settings
            }

            function tt(e) {
                return e && e.colors ? e.colors : "red-green"
            }
            const nt = document.getElementById("app"),
                rt = (0, i.s)(nt),
                it = nt.className;
            c.start(it);
            const st = function (e) {
                const t = function (e) {
                    return e && e.configurations && e.configurations.length > 0 ? e.configurations : [k("week", "performance"), k("week", "marketcap")]
                }(e);
                return {
                    translation: Qe(e),
                    baseCurrency: Ze(e),
                    currencyId: null,
                    currencies: null,
                    favorites: Ge(e),
                    configurations: t,
                    configurationId: Je(e, t),
                    filter: qe(e),
                    page: "bubbles",
                    settings: et(e),
                    colors: tt(e),
                    priceChartKey: 0,
                    updateFailed: !1
                }
            }(h.load());
            c.postAccess(st), window.addEventListener("load", (() => {
                c.isWeb && "serviceWorker" in navigator && navigator.serviceWorker.register("http://localhost:8008/backend/service-worker.js"), rt.render((0, r.jsx)(Ke, {
                    initialState: st
                }))
            }))
        }
    },
        n = {};

    function r(e) {
        var i = n[e];
        if (void 0 !== i) return i.exports;
        var s = n[e] = {
            exports: {}
        };
        return t[e](s, s.exports, r), s.exports
    }
    r.m = t, e = [], r.O = (t, n, i, s) => {
        if (!n) {
            var a = 1 / 0;
            for (d = 0; d < e.length; d++) {
                for (var [n, i, s] = e[d], o = !0, c = 0; c < n.length; c++)(!1 & s || a >= s) && Object.keys(r.O).every((e => r.O[e](n[c]))) ? n.splice(c--, 1) : (o = !1, s < a && (a = s));
                if (o) {
                    e.splice(d--, 1);
                    var l = i();
                    void 0 !== l && (t = l)
                }
            }
            return t
        }
        s = s || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > s; d--) e[d] = e[d - 1];
        e[d] = [n, i, s]
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {
            143: 0
        };
        r.O.j = t => 0 === e[t];
        var t = (t, n) => {
            var i, s, [a, o, c] = n,
                l = 0;
            if (a.some((t => 0 !== e[t]))) {
                for (i in o) r.o(o, i) && (r.m[i] = o[i]);
                if (c) var d = c(r)
            }
            for (t && t(n); l < a.length; l++) s = a[l], r.o(e, s) && e[s] && e[s][0](), e[s] = 0;
            return r.O(d)
        },
            n = self.webpackChunkcryptobubbles = self.webpackChunkcryptobubbles || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var i = r.O(void 0, [67], (() => r(499)));
    i = r.O(i)
})();