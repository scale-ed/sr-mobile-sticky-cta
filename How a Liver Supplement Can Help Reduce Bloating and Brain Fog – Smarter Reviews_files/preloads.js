
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.C7jITNoQ.js","/cdn/shopifycloud/checkout-web/assets/c1/app.BL7Gay9D.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.aCkN6wpe.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.DF_hezzB.js","/cdn/shopifycloud/checkout-web/assets/c1/UnauthenticatedErrorModalPayload.-lJQVRUh.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer.Bi-pYUX9.js","/cdn/shopifycloud/checkout-web/assets/c1/payment-methods-filterAvailableMethods.BD40hW2m.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery.BwTY2T_v.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-shopId.HvD0xsmG.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-getCommonShopPayExternalTelemetryAttributes.BKxv2hGg.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-UserPrivacySettingsSetMutation.uKHazRiF.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc.EsCoWs4K.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.DAF0gAcv.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.CE6qaGB_.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion.BiCiEjAl.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.BGP2GSPR.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.BG3S8xkw.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.CzfgWpdN.js","/cdn/shopifycloud/checkout-web/assets/c1/Monorail-monorailMetric-wallets.Dxnm_Vio.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks.C6chuTE2.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.D7Uv6prq.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useHasOrdersFromMultipleShops.IuL5L2LI.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed.CYG6L8MW.js","/cdn/shopifycloud/checkout-web/assets/c1/NoAddressLocationFullDetour.qXlk6TPw.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer.D4zwLwFB.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCheckoutProtocolDarkTheme.ByDJLtVU.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.Df4l9tVB.js","/cdn/shopifycloud/checkout-web/assets/c1/BaseSandbox.BOvs4UTB.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox.CuPvULpY.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.c9DreOde.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.CmSx5O0X.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon.C_eXYJRt.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.vqxkH0eH.js","/cdn/shopifycloud/checkout-web/assets/c1/CompactChoiceList.nDwfGzKG.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice.BGrQ54Vq.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.DcsIWHpk.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.BW3Hg0Uo.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.D8gZRRBI.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index.CyzOj49T.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.DnEYhvqc.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.B7D5OSQv.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.DSSyNHvg.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod.CFhvp7vv.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.DRj6fNol.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.Bvy9hONR.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.DpVRpuxX.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.Cf5XeXun.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.C1mnzJTC.js","/cdn/shopifycloud/checkout-web/assets/c1/billing-address-hooks.DbKvk3Mb.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletLogo.DfqBJMJH.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.BHrBR3Uz.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.-iKoN6Gf.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.p2vwz3Uj.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.caSaEjsm.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner.TSAAbvxw.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-pay-alternative-payment-flow.DZgJjeb9.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopCashCheckoutEligibility.BKCqG8r2.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscount.BvQg0QWv.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.DFf1g1p2.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.CLS8xRwZ.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.Djj2KFhM.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.dua6o7dS.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.s_0QM4Zg.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options.Cn1FOcYD.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.N5KCxNz_.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.CuMoaBOI.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-promise-helpers.tET1-Boy.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.DYbcbPfZ.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.BEB7Oyq-.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.BzBZ1uXN.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePaypalRowEffects.C49bfT_B.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.DnSp5Hrr.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.Cy5r-nCs.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine.BfZCeKVK.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.BH5DA5WV.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-publishMessage.fYD3pgrW.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CMvjny27.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/UnauthenticatedErrorModalPayload.PQOzdEj1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/index.D9OdBaZj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CQM_ODoE.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SplitDeliveryMerchandiseContainer.ICFE7j6g.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalizationExtensionField.DugS7mXw.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.CqVkJv9Z.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.CtCAWdWo.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/WalletLogo.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.D-V2RVyM.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ChangeCompanyLocationLink.uqpm88mq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/CompactChoiceList.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.7870thps.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.CLVwzp6i.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.Dq_6Ius6.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.Dj0n4Opx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.DN6CUyst.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.CGkrPwWj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PayPalOverCaptureInfoBanner.CuS5ve3d.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/usePostPurchase.uv-X4L1-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NoAddressLocationFullDetour.CpFaJIpx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/WalletSandbox.CnR7qNLY.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  