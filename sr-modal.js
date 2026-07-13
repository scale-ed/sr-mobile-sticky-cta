/* ==========================================================================
   SR Mobile Scroll Trigger Modal — shared behavior for all 5 test variants
   Behavior spec (per Ed, updated Jul 13):
     - Modal does not appear at all until the user first enters the #1
       Product section (i.e. that section intersects the viewport at least
       once).
     - After that first entry, the modal is permanently "revealed" (never
       fully hides again) and toggles between two states based on the #1
       Product's "Check LiverMD® Stock!" CTA (#sr-product1-cta) relative to
       the viewport:
         - EXPANDED  — whenever that CTA is above the vertical center of
                       the viewport (i.e. the reader has scrolled past the
                       #1 listing).
         - COLLAPSED — otherwise. The top edge/header of the modal remains
                       visible in this state (per Figma).
     - Tapping the header still manually toggles collapsed/expanded. If a
       manual tap collapses it while it would otherwise be auto-expanded,
       that collapse sticks through continued scrolling in that direction
       — it only resumes following the automatic rule once the reader
       scrolls back past the #1 listing (CTA no longer above center),
       at which point the manual and automatic states agree again.
   ========================================================================== */

(function () {
  "use strict";

  function init() {
    var modal = document.getElementById("sr-modal");
    if (!modal) return;

    var sentinel = document.getElementById("no_one_product_anchor");
    var product1Cta = document.getElementById("sr-product1-cta");
    var header = document.getElementById("sr-modal-header");
    var ctaButtons = modal.querySelectorAll("[data-sr-action]");

    var hasFirstEntered = false;
    var suppressAutoExpand = false;

    function isProduct1CtaAboveCenter() {
      if (!product1Cta) return false;
      var rect = product1Cta.getBoundingClientRect();
      var viewportCenter = (window.innerHeight || document.documentElement.clientHeight) / 2;
      return rect.top + rect.height / 2 < viewportCenter;
    }

    function evaluateState() {
      if (!sentinel) return;
      var rect = sentinel.getBoundingClientRect();
      var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      var intersectsViewport = rect.top < viewportHeight && rect.bottom > 0;

      if (!hasFirstEntered && intersectsViewport) {
        hasFirstEntered = true;
      }

      if (!hasFirstEntered) {
        modal.classList.remove("is-revealed");
        return;
      }

      modal.classList.add("is-revealed");

      var shouldCollapse = !isProduct1CtaAboveCenter();

      if (suppressAutoExpand) {
        if (shouldCollapse) {
          // Automatic rule has caught back up to the manual override —
          // resume normal auto-tracking from here.
          suppressAutoExpand = false;
        } else {
          shouldCollapse = true;
        }
      }

      modal.classList.toggle("is-collapsed", shouldCollapse);
      header && header.setAttribute("aria-expanded", String(!shouldCollapse));
    }

    function onScrollOrResize() {
      window.requestAnimationFrame(evaluateState);
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    // Extra safety net for iOS/mobile Safari, where "scroll" can lag behind
    // an active touch drag until the momentum settles.
    window.addEventListener("touchmove", onScrollOrResize, { passive: true });
    evaluateState();

    if (header) {
      header.addEventListener("click", function () {
        var collapsedNow = modal.classList.toggle("is-collapsed");
        header.setAttribute("aria-expanded", String(!collapsedNow));
        suppressAutoExpand = collapsedNow;
      });
    }

    ctaButtons.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        var action = btn.getAttribute("data-sr-action");
        if (action === "scroll-to-product-1") {
          e.preventDefault();
          if (sentinel) {
            sentinel.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
        // action === "external-link" falls through to the anchor's normal
        // href/target behavior (navigates to the live affiliate page).
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
