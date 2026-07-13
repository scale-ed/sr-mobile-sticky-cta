/* ==========================================================================
   SR Mobile Scroll Trigger Modal — shared behavior for all 5 test variants
   Behavior spec (per Ed, updated Jul 13):
     - Modal does not appear at all until the user first enters the #1
       Product section (i.e. that section intersects the viewport at least
       once).
     - After that first entry, the modal is permanently "revealed" (never
       fully hides again) and toggles between two states based on the #1
       Product section's relationship to the viewport:
         - EXPANDED  — whenever the #1 Product section is entirely outside
                       the viewport (above or below).
         - COLLAPSED — whenever any part of the #1 Product section is
                       inside the viewport. The top edge/header of the
                       modal remains visible in this state (per Figma).
     - Tapping the header still manually toggles collapsed/expanded; the
       next scroll event re-syncs it to the automatic rule above.
   ========================================================================== */

(function () {
  "use strict";

  function init() {
    var modal = document.getElementById("sr-modal");
    if (!modal) return;

    var sentinel = document.getElementById("no_one_product_anchor");
    var header = document.getElementById("sr-modal-header");
    var ctaButtons = modal.querySelectorAll("[data-sr-action]");

    var hasFirstEntered = false;

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
      // Collapsed whenever any part of the #1 Product section is in the
      // viewport; expanded whenever it's entirely out of view.
      modal.classList.toggle("is-collapsed", intersectsViewport);
      header && header.setAttribute("aria-expanded", String(!intersectsViewport));
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
        var collapsed = modal.classList.toggle("is-collapsed");
        header.setAttribute("aria-expanded", String(!collapsed));
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
