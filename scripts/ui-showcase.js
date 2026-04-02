document.addEventListener("DOMContentLoaded", function () {
  // Quick Actions references
  const chips = document.querySelector(".ui-chips");
  const chipInput = chips ? chips.querySelector(".ui-chip-input-field") : null;
  const buttonGroup = document.querySelector(".ui-button-group");
  const loadingButton = document.querySelector(".ui-loading-btn");

  // Inputs and Forms references
  const rangeSlider = document.querySelector(".js-range-value");
  const rangeOutput = document.querySelector(".ui-range-output");
  const otpDigits = document.querySelectorAll(".ui-otp-digit");
  const otpToggle = document.querySelector(".js-toggle-otp");
  const searchInput = document.querySelector(".js-search-input");
  const searchButton = document.querySelector(".js-search-btn");
  const searchItems = document.querySelectorAll(".js-search-list li");
  const passwordInput = document.querySelector(".js-password-input");
  const passwordToggle = document.querySelector(".js-toggle-password");

  // Feedback and States references
  const alertBox = document.querySelector(".js-alert");
  const feedbackBlock = document.querySelector("#bloque-feedback-states");
  const closeAlertButton = document.querySelector(".js-close-alert");
  const resetAlertButton = document.querySelector(".js-reset-alert");
  const toast = document.querySelector(".js-toast");
  const showToastButton = document.querySelector(".js-show-toast");
  const closeToastButton = document.querySelector(".js-close-toast");
  const progressBar = document.querySelector(".js-progress");
  const progressFill = document.querySelector(".js-progress-fill");
  const progressControl = document.querySelector(".js-progress-control");
  const progressValue = document.querySelector(".js-progress-value");
  const progressDownButton = document.querySelector(".js-progress-down");
  const progressUpButton = document.querySelector(".js-progress-up");
  const loaderWrap = document.querySelector(".js-loader-wrap");
  const toggleLoaderButton = document.querySelector(".js-toggle-loader");
  const skeletonCard = document.querySelector(".js-skeleton");
  const loadedCard = document.querySelector(".js-loaded-card");
  const toggleSkeletonButton = document.querySelector(".js-toggle-skeleton");
  const emptyState = document.querySelector(".js-empty-state");
  const emptyList = document.querySelector(".js-empty-list");
  const toggleEmptyButton = document.querySelector(".js-toggle-empty");
  const stateCards = document.querySelectorAll(".js-state-toggle");

  // Navigation block references
  const tabButtons = document.querySelectorAll(".js-tab-btn");
  const tabPanels = document.querySelectorAll(".js-tab-panel");
  const pageButtons = document.querySelectorAll(".js-page-number");
  const pagePrev = document.querySelector(".js-page-prev");
  const pageNext = document.querySelector(".js-page-next");
  const menubarTriggers = document.querySelectorAll(".js-menubar-trigger");
  const menubarPopover = document.querySelector(".js-menubar-popover");
  const menubarTitle = document.querySelector(".js-menubar-title");
  const menubarItems = document.querySelector(".js-menubar-items");
  const menubarStatus = document.querySelector(".js-menubar-status");
  const navItems = document.querySelectorAll(".js-nav-item");
  const stepper = document.querySelector(".js-stepper");
  const stepPrev = document.querySelector(".js-step-prev");
  const stepNext = document.querySelector(".js-step-next");
  const mobileTriggers = document.querySelectorAll(".js-mobile-trigger");
  const floatingMobileTrigger = document.querySelector(".ui-floating-mobile-trigger");
  const mobileMenu = document.querySelector(".js-mobile-menu");
  const mobileClose = document.querySelector(".js-mobile-close");
  const mobileOverlay = document.querySelector(".js-mobile-overlay");
  const openBottomDrawerButtons = document.querySelectorAll(".js-open-bottom-drawer");
  const bottomDrawer = document.querySelector(".js-bottom-drawer");
  const bottomDrawerClose = document.querySelector(".js-bottom-drawer-close");
  const bottomDrawerOverlay = document.querySelector(".js-bottom-drawer-overlay");

  // Overlay block references
  const openModalButton = document.querySelector(".js-open-modal");
  const modalBackdrop = document.querySelector(".js-modal-backdrop");
  const closeModalButton = document.querySelector(".js-close-modal");
  const openSheetButton = document.querySelector(".js-open-sheet");
  const leftSheet = document.querySelector(".js-left-sheet");
  const closeSheetButton = document.querySelector(".js-close-sheet");
  const sheetBackdrop = document.querySelector(".js-sheet-backdrop");
  const openFullscreenOverlayButton = document.querySelector(".js-open-fullscreen-overlay");
  const fullscreenOverlay = document.querySelector(".js-fullscreen-overlay");
  const closeFullscreenOverlayButton = document.querySelector(".js-close-fullscreen-overlay");
  const openCommandPaletteButton = document.querySelector(".js-open-command-palette");
  const closeCommandPaletteButton = document.querySelector(".js-close-command-palette");
  const commandBackdrop = document.querySelector(".js-command-backdrop");
  const commandInput = document.querySelector(".js-command-input");
  const commandItems = document.querySelectorAll(".js-command-item");
  const commandFeedback = document.querySelector(".js-command-feedback");

  // Show and hide content block references
  const contentBlock = document.querySelector("#bloque-content");
  const accordionItems = document.querySelectorAll(".js-accordion-item");
  const collapsibleToggle = document.querySelector(".js-collapsible-toggle");
  const collapsiblePanel = document.querySelector(".js-collapsible-panel");
  const dropdown = document.querySelector(".js-dropdown");
  const dropdownTrigger = document.querySelector(".js-dropdown-trigger");
  const dropdownMenu = document.querySelector(".js-dropdown-menu");
  const dropdownOptions = document.querySelectorAll(".js-dropdown-option");
  const dropdownValue = document.querySelector(".js-dropdown-value");
  const popoverWrap = document.querySelector(".ui-popover-wrap");
  const popoverTrigger = document.querySelector(".js-popover-trigger");
  const popover = document.querySelector(".js-popover");
  const popoverClose = document.querySelector(".js-popover-close");
  const contextTarget = document.querySelector(".js-context-target");
  const contextMenu = document.querySelector(".js-context-menu");
  const contextActions = document.querySelectorAll(".js-context-action");
  const contextFeedback = document.querySelector(".js-context-feedback");

  // Content Display - Media preview references
  const mediaVideo = document.querySelector(".js-media-video");
  const mediaPlayButton = document.querySelector(".js-media-play");
  const mediaMuteButton = document.querySelector(".js-media-mute");
  const mediaRestartButton = document.querySelector(".js-media-restart");
  const mediaProgress = document.querySelector(".js-media-progress");
  const mediaVolume = document.querySelector(".js-media-volume");
  const mediaTime = document.querySelector(".js-media-time");
  const mediaFullscreenButton = document.querySelector(".js-media-fullscreen");

  // Utilities block references
  const utilsDateInput = document.querySelector("#ui-utils-date");
  const utilsDateOutput = document.querySelector(".js-utils-date-output");
  const utilsCalendarTitle = document.querySelector(".js-utils-calendar-title");
  const utilsCalendarDaysWrap = document.querySelector(".js-utils-calendar-days");
  const utilsCalendarPrev = document.querySelector(".js-utils-calendar-prev");
  const utilsCalendarNext = document.querySelector(".js-utils-calendar-next");
  const utilsCarouselTrack = document.querySelector(".js-utils-carousel-track");
  const utilsCarouselPrev = document.querySelector(".js-utils-carousel-prev");
  const utilsCarouselNext = document.querySelector(".js-utils-carousel-next");
  const utilsThemeCard = document.querySelector(".ui-utils-theme-toggle");
  const utilsCommandInput = document.querySelector(".js-utils-command-input");
  const utilsCommandList = document.querySelectorAll(".js-utils-command-list li");
  const utilsCommandFeedback = document.querySelector(".js-utils-command-feedback");
  const utilsCopyButton = document.querySelector(".js-utils-copy-btn");
  const utilsCopyText = document.querySelector(".js-utils-copy-text");
  const utilsCopyFeedback = document.querySelector(".js-utils-copy-feedback");
  const utilsThemeToggle = document.querySelector(".js-utils-theme-toggle");
  const utilsThemeLabel = document.querySelector(".js-utils-theme-label");
  const utilsBackTop = document.querySelector(".js-utils-back-top");
  const utilsBadgeDown = document.querySelector(".js-utils-badge-down");
  const utilsBadgeUp = document.querySelector(".js-utils-badge-up");
  const utilsBadgeValue = document.querySelector(".js-utils-badge-value");
  const utilsInboxButton = document.querySelector(".js-utils-inbox");
  const utilsDot = document.querySelector(".js-utils-dot");

  let toastTimeout;
  const defaultMenubarStatus = "Ningun archivo seleccionado.";
  let menubarStatusHistory = [defaultMenubarStatus];
  let menubarStatusIndex = 0;
  let currentZoomLevel = 1;
  let viewHistory = [{ zoom: 1, fullscreen: false }];
  let viewHistoryIndex = 0;

  // Shared helper to clamp a number to progress bounds.
  function clampProgress(value) {
    return Math.max(0, Math.min(100, value));
  }

  // Safe closest helper for delegated events.
  function hasClosestTarget(target, selector) {
    return target instanceof Element ? target.closest(selector) : null;
  }

  // Updates status text and optionally stores it in the Undo/Redo history.
  function setMenubarStatus(text, options) {
    if (!menubarStatus) {
      return;
    }

    const shouldTrack = !(options && options.track === false);
    menubarStatus.textContent = text;

    if (!shouldTrack) {
      return;
    }

    const trimmedHistory = menubarStatusHistory.slice(0, menubarStatusIndex + 1);
    trimmedHistory.push(text);
    menubarStatusHistory = trimmedHistory;
    menubarStatusIndex = menubarStatusHistory.length - 1;
  }

  // Applies zoom in supported browsers and falls back to a transform-based zoom.
  function applyZoomLevel() {
    const zoomPercent = Math.round(currentZoomLevel * 100);

    if ("zoom" in document.body.style) {
      document.body.style.zoom = zoomPercent + "%";
      return;
    }

    document.body.style.transformOrigin = "top left";
    document.body.style.transform = "scale(" + currentZoomLevel + ")";
    document.body.style.width = 100 / currentZoomLevel + "%";
  }

  function isFullScreenEnabled() {
    return Boolean(document.fullscreenElement);
  }

  function pushViewHistoryState() {
    const snapshot = {
      zoom: Number(currentZoomLevel.toFixed(2)),
      fullscreen: isFullScreenEnabled(),
    };
    const current = viewHistory[viewHistoryIndex];

    if (current && current.zoom === snapshot.zoom && current.fullscreen === snapshot.fullscreen) {
      return;
    }

    viewHistory = viewHistory.slice(0, viewHistoryIndex + 1);
    viewHistory.push(snapshot);
    viewHistoryIndex = viewHistory.length - 1;
  }

  async function applyViewHistoryState(snapshot) {
    currentZoomLevel = snapshot.zoom;
    applyZoomLevel();

    if (snapshot.fullscreen !== isFullScreenEnabled()) {
      if (snapshot.fullscreen) {
        await document.documentElement.requestFullscreen();
      } else if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    }
  }

  // Toggles full screen mode using the browser Fullscreen API.
  async function toggleFullScreenMode() {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
      return true;
    }

    await document.exitFullscreen();
    return false;
  }

  // System search cannot be triggered from standard browser JS for security reasons.
  function triggerSystemSearchAction() {
    setMenubarStatus("No es posible abrir la busqueda del sistema desde una pagina web.", { track: false });
  }

  if (menubarStatus && !menubarStatus.textContent.trim()) {
    menubarStatus.textContent = defaultMenubarStatus;
  }

  // Opens a directory chooser to simulate creating a new file inside a folder.
  async function handleNewFileAction() {
    if (typeof window.showOpenFilePicker === "function") {
      const pickedFiles = await window.showOpenFilePicker({ multiple: false });
      return pickedFiles[0] ? pickedFiles[0].name : "";
    }

    return new Promise(function (resolve) {
      const input = document.createElement("input");
      input.type = "file";
      input.style.display = "none";
      document.body.appendChild(input);

      input.addEventListener("change", function () {
        resolve(input.files && input.files[0] ? input.files[0].name : "");
        input.remove();
      });

      input.click();
    });
  }

  // Opens file chooser to simulate uploading/selecting content.
  async function handleOpenAction() {
    if (typeof window.showOpenFilePicker === "function") {
      const pickedFiles = await window.showOpenFilePicker({ multiple: false });
      return pickedFiles[0] ? pickedFiles[0].name : "";
    }

    return new Promise(function (resolve) {
      const input = document.createElement("input");
      input.type = "file";
      input.style.display = "none";
      document.body.appendChild(input);

      input.addEventListener("change", function () {
        resolve(input.files && input.files[0] ? input.files[0].name : "");
        input.remove();
      });

      input.click();
    });
  }

  // Opens save dialog and writes a basic demo content file.
  async function handleSaveAction() {
    const defaultContent = "Contenido guardado desde UI Showcase\n" + new Date().toISOString() + "\n";

    if (typeof window.showSaveFilePicker === "function") {
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: "ui-showcase.txt",
        types: [
          {
            description: "Text files",
            accept: { "text/plain": [".txt"] },
          },
        ],
      });

      const writable = await fileHandle.createWritable();
      await writable.write(defaultContent);
      await writable.close();
      return fileHandle.name;
    }

    const blob = new Blob([defaultContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ui-showcase.txt";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    return "ui-showcase.txt";
  }

  // Creates a new chip element with a removable close icon.
  function createChip(text) {
    const chip = document.createElement("p");
    chip.className = "ui-chip";

    const label = document.createTextNode(text + " ");
    const close = document.createElement("span");
    close.className = "ui-chip-close";
    close.setAttribute("aria-label", "Quitar estilo destacado");
    close.textContent = "\u00d7";

    chip.append(label, close);
    return chip;
  }

  // Chips interactions: highlight chip and create a new one from input.
  if (chips && chipInput) {
    chips.addEventListener("click", function (event) {
      const chip = event.target.closest(".ui-chip");

      if (!chip || !chips.contains(chip) || chip.classList.contains("ui-chip-input")) {
        return;
      }

      if (event.target.closest(".ui-chip-close")) {
        chip.classList.remove("ui-chip-active");
        event.stopPropagation();
        return;
      }

      chip.classList.add("ui-chip-active");
    });

    chipInput.addEventListener("keydown", function (event) {
      if (event.key !== "Enter") {
        return;
      }

      event.preventDefault();
      const value = chipInput.value.trim();

      if (!value) {
        return;
      }

      const newChip = createChip(value);
      const inputChip = chipInput.closest(".ui-chip-input");

      chips.insertBefore(newChip, inputChip);
      chipInput.value = "";
      chipInput.focus();
    });
  }

  // Button group interactions: only one active button at a time.
  if (buttonGroup) {
    buttonGroup.addEventListener("click", function (event) {
      const targetBtn = event.target.closest(".ui-group-btn");

      if (!targetBtn || !buttonGroup.contains(targetBtn)) {
        return;
      }

      buttonGroup.querySelectorAll(".ui-group-btn").forEach(function (btn) {
        btn.classList.remove("is-active");
      });

      targetBtn.classList.add("is-active");
    });
  }

  // Loading button interaction: temporary loading state and auto-reset.
  if (loadingButton) {
    const labelTextNode = Array.from(loadingButton.childNodes).find(function (node) {
      return node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0;
    });
    const defaultLabel = labelTextNode ? labelTextNode.textContent.trim() : "Loading...";

    loadingButton.addEventListener("click", function () {
      if (loadingButton.classList.contains("is-loading")) {
        return;
      }

      loadingButton.classList.add("is-loading");
      loadingButton.disabled = true;

      if (labelTextNode) {
        labelTextNode.textContent = " Loading...";
      }

      setTimeout(function () {
        loadingButton.classList.remove("is-loading");
        loadingButton.disabled = false;

        if (labelTextNode) {
          labelTextNode.textContent = " " + defaultLabel;
        }
      }, 1400);
    });
  }

  // Range Value interaction: sync numeric badge with slider value.
  if (rangeSlider && rangeOutput) {
    const updateRangeValue = function () {
      rangeOutput.textContent = rangeSlider.value;
    };

    rangeSlider.addEventListener("input", updateRangeValue);
    updateRangeValue();
  }

  // OTP interactions: numeric-only, auto-next and backspace-to-previous.
  if (otpDigits.length > 0) {
    otpDigits.forEach(function (digit, index) {
      digit.addEventListener("input", function () {
        digit.value = digit.value.replace(/\D/g, "").slice(0, 1);

        if (digit.value && index < otpDigits.length - 1) {
          otpDigits[index + 1].focus();
        }
      });

      digit.addEventListener("keydown", function (event) {
        if (event.key === "Backspace" && !digit.value && index > 0) {
          otpDigits[index - 1].focus();
        }
      });
    });
  }

  // OTP visibility toggle: show/hide all OTP boxes at once.
  if (otpToggle && otpDigits.length > 0) {
    otpToggle.addEventListener("click", function () {
      const shouldShow = otpDigits[0].type === "password";

      otpDigits.forEach(function (digit) {
        digit.type = shouldShow ? "text" : "password";
      });

      otpToggle.textContent = shouldShow ? "Ocultar OTP" : "Mostrar OTP";
    });
  }

  // Search input: live filter and optional button-triggered search.
  if (searchInput && searchItems.length > 0) {
    const runSearch = function () {
      const query = searchInput.value.trim().toLowerCase();

      searchItems.forEach(function (item) {
        const text = item.textContent.toLowerCase();
        item.hidden = Boolean(query) && !text.includes(query);
      });
    };

    searchInput.addEventListener("input", runSearch);

    if (searchButton) {
      searchButton.addEventListener("click", function () {
        runSearch();
        searchInput.focus();
      });
    }
  }

  // Password visibility toggle with eye icon swap.
  if (passwordInput && passwordToggle) {
    passwordToggle.addEventListener("click", function () {
      const isHidden = passwordInput.type === "password";
      const icon = passwordToggle.querySelector("i");

      passwordInput.type = isHidden ? "text" : "password";
      passwordToggle.setAttribute("aria-label", isHidden ? "Ocultar password" : "Mostrar password");

      if (icon) {
        icon.classList.toggle("fa-eye", !isHidden);
        icon.classList.toggle("fa-eye-slash", isHidden);
      }
    });
  }

  // Feedback controls (delegated): alert close/restore and toast show/close.
  if (feedbackBlock) {
    const hideToast = function () {
      if (!toast) {
        return;
      }

      toast.hidden = true;

      if (toastTimeout) {
        clearTimeout(toastTimeout);
      }
    };

    const showToast = function () {
      if (!toast) {
        return;
      }

      toast.hidden = false;

      if (toastTimeout) {
        clearTimeout(toastTimeout);
      }

      toastTimeout = setTimeout(hideToast, 2600);
    };

    // Direct listeners as reliable fallback for button clicks.
    if (closeAlertButton && alertBox) {
      closeAlertButton.addEventListener("click", function () {
        alertBox.hidden = true;
      });
    }

    if (resetAlertButton && alertBox) {
      resetAlertButton.addEventListener("click", function () {
        alertBox.hidden = false;
      });
    }

    if (showToastButton) {
      showToastButton.addEventListener("click", showToast);
    }

    if (closeToastButton) {
      closeToastButton.addEventListener("click", hideToast);
    }

    feedbackBlock.addEventListener("click", function (event) {
      if (hasClosestTarget(event.target, ".js-close-alert")) {
        if (alertBox) {
          alertBox.hidden = true;
        }
        return;
      }

      if (hasClosestTarget(event.target, ".js-reset-alert")) {
        if (alertBox) {
          alertBox.hidden = false;
        }
        return;
      }

      if (hasClosestTarget(event.target, ".js-show-toast")) {
        showToast();
        return;
      }

      if (hasClosestTarget(event.target, ".js-close-toast")) {
        hideToast();
      }
    });
  }

  // Progress interaction: slider and +/- buttons update width and aria value.
  if (progressBar && progressFill && progressControl && progressValue) {
    const applyProgress = function (value) {
      const nextValue = clampProgress(value);
      progressFill.style.width = nextValue + "%";
      progressControl.value = String(nextValue);
      progressValue.textContent = nextValue + "%";
      progressBar.setAttribute("aria-valuenow", String(nextValue));
    };

    progressControl.addEventListener("input", function () {
      applyProgress(Number(progressControl.value));
    });

    if (progressDownButton) {
      progressDownButton.addEventListener("click", function () {
        applyProgress(Number(progressControl.value) - 10);
      });
    }

    if (progressUpButton) {
      progressUpButton.addEventListener("click", function () {
        applyProgress(Number(progressControl.value) + 10);
      });
    }

    applyProgress(Number(progressControl.value));
  }

  // Loader interaction: pause/resume spinner and dot animations.
  if (loaderWrap && toggleLoaderButton) {
    toggleLoaderButton.addEventListener("click", function () {
      const isPaused = loaderWrap.classList.toggle("is-paused");
      toggleLoaderButton.textContent = isPaused ? "Reanudar loader" : "Pausar loader";
    });
  }

  // Skeleton interaction: switch between loading skeleton and loaded content card.
  if (skeletonCard && loadedCard && toggleSkeletonButton) {
    toggleSkeletonButton.addEventListener("click", function () {
      const shouldShowLoaded = loadedCard.hidden;
      loadedCard.hidden = !shouldShowLoaded;
      skeletonCard.hidden = shouldShowLoaded;
      toggleSkeletonButton.textContent = shouldShowLoaded ? "Ver skeleton" : "Cargar contenido";
    });
  }

  // Empty state interaction: toggle between empty illustration and sample list.
  if (emptyState && emptyList && toggleEmptyButton) {
    toggleEmptyButton.addEventListener("click", function () {
      const shouldShowList = emptyList.hidden;
      emptyList.hidden = !shouldShowList;
      emptyState.hidden = shouldShowList;
      toggleEmptyButton.textContent = shouldShowList ? "Vaciar lista" : "Agregar item";
    });
  }

  // State cards interaction: clickable and keyboard-accessible active highlight.
  if (stateCards.length > 0) {
    const activateStateCard = function (card) {
      stateCards.forEach(function (item) {
        const isActive = item === card;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    };

    stateCards.forEach(function (card) {
      card.addEventListener("click", function () {
        activateStateCard(card);
      });

      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          activateStateCard(card);
        }
      });
    });
  }

  // Tabs interaction: switch active tab button and its matching panel.
  if (tabButtons.length > 0 && tabPanels.length > 0) {
    tabButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const selected = button.dataset.tab;

        tabButtons.forEach(function (item) {
          const isActive = item === button;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-selected", isActive ? "true" : "false");
        });

        tabPanels.forEach(function (panel) {
          panel.hidden = panel.dataset.panel !== selected;
        });
      });
    });
  }

  // Pagination interaction: prev/next and direct page selection.
  if (pageButtons.length > 0) {
    const setPage = function (page) {
      const pageCount = pageButtons.length;
      const nextPage = Math.max(1, Math.min(pageCount, page));

      pageButtons.forEach(function (button) {
        const isActive = Number(button.dataset.page) === nextPage;
        button.classList.toggle("is-active", isActive);
      });

      if (pagePrev) {
        const isFirstPage = nextPage === 1;
        pagePrev.disabled = isFirstPage;
        pagePrev.setAttribute("aria-disabled", isFirstPage ? "true" : "false");
      }

      if (pageNext) {
        const isLastPage = nextPage === pageCount;
        pageNext.disabled = isLastPage;
        pageNext.setAttribute("aria-disabled", isLastPage ? "true" : "false");
      }
    };

    pageButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        setPage(Number(button.dataset.page));
      });
    });

    if (pagePrev) {
      pagePrev.addEventListener("click", function () {
        const current = document.querySelector(".js-page-number.is-active");
        setPage(Number(current ? current.dataset.page : 1) - 1);
      });
    }

    if (pageNext) {
      pageNext.addEventListener("click", function () {
        const current = document.querySelector(".js-page-number.is-active");
        setPage(Number(current ? current.dataset.page : 1) + 1);
      });
    }
  }

  // Menubar interaction: supports File/Edit/View popovers with outside-click close.
  if (menubarTriggers.length > 0 && menubarPopover && menubarTitle && menubarItems) {
    const menubarOptions = {
      file: ["New File", "Open...", "Save"],
      edit: ["Undo", "Redo", "Find"],
      view: ["Zoom In", "Zoom Out", "Full Screen"],
    };

    const closeMenubar = function () {
      menubarPopover.hidden = true;
      menubarTriggers.forEach(function (btn) {
        btn.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");
      });
    };

    const openMenubar = function (trigger) {
      const menuKey = (trigger.dataset.menu || "view").toLowerCase();
      const menuItems = menubarOptions[menuKey] || menubarOptions.view;

      menubarTitle.textContent = menuKey.charAt(0).toUpperCase() + menuKey.slice(1);
      menubarItems.innerHTML = "";

      menuItems.forEach(function (label) {
        const itemButton = document.createElement("button");
        itemButton.type = "button";
        itemButton.textContent = label;

        itemButton.addEventListener("click", async function () {
          try {
            if (menuKey === "file") {
              if (label === "New File") {
                const fileName = await handleNewFileAction();
                if (fileName && menubarStatus) {
                  setMenubarStatus(fileName + " seleccionado");
                }
              }

              if (label === "Open...") {
                const fileName = await handleOpenAction();
                if (fileName && menubarStatus) {
                  setMenubarStatus(fileName + " abierto");
                }
              }

              if (label === "Save") {
                const fileName = await handleSaveAction();
                if (fileName && menubarStatus) {
                  setMenubarStatus(fileName + " guardado");
                }
              }
            }

            if (menuKey === "edit") {
              if (label === "Undo") {
                if (viewHistoryIndex > 0) {
                  viewHistoryIndex -= 1;
                  await applyViewHistoryState(viewHistory[viewHistoryIndex]);
                  setMenubarStatus("Vista restaurada", { track: false });
                } else if (menubarStatus && menubarStatusIndex > 0) {
                  menubarStatusIndex -= 1;
                  setMenubarStatus(menubarStatusHistory[menubarStatusIndex], { track: false });
                }
              }

              if (label === "Redo") {
                if (viewHistoryIndex < viewHistory.length - 1) {
                  viewHistoryIndex += 1;
                  await applyViewHistoryState(viewHistory[viewHistoryIndex]);
                  setMenubarStatus("Vista reaplicada", { track: false });
                } else if (menubarStatus && menubarStatusIndex < menubarStatusHistory.length - 1) {
                  menubarStatusIndex += 1;
                  setMenubarStatus(menubarStatusHistory[menubarStatusIndex], { track: false });
                }
              }

              if (label === "Find") {
                triggerSystemSearchAction();
              }
            }

            if (menuKey === "view") {
              if (label === "Zoom In") {
                currentZoomLevel = Math.min(2, currentZoomLevel + 0.1);
                applyZoomLevel();
                pushViewHistoryState();
                setMenubarStatus("Zoom " + Math.round(currentZoomLevel * 100) + "%", { track: false });
              }

              if (label === "Zoom Out") {
                currentZoomLevel = Math.max(0.5, currentZoomLevel - 0.1);
                applyZoomLevel();
                pushViewHistoryState();
                setMenubarStatus("Zoom " + Math.round(currentZoomLevel * 100) + "%", { track: false });
              }

              if (label === "Full Screen") {
                const isFullScreenNow = await toggleFullScreenMode();
                pushViewHistoryState();
                setMenubarStatus(isFullScreenNow ? "Modo pantalla completa activado" : "Modo pantalla completa desactivado", {
                  track: false,
                });
              }
            }
          } catch (error) {
            // User cancellation is expected when dialog is closed.
          } finally {
            closeMenubar();
          }
        });

        menubarItems.appendChild(itemButton);
      });

      menubarPopover.hidden = false;

      menubarTriggers.forEach(function (btn) {
        const isActive = btn === trigger;
        btn.classList.toggle("is-open", isActive);
        btn.setAttribute("aria-expanded", isActive ? "true" : "false");
      });
    };

    menubarTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const isOpen = trigger.classList.contains("is-open") && !menubarPopover.hidden;

        if (isOpen) {
          closeMenubar();
          return;
        }

        openMenubar(trigger);
      });
    });

    document.addEventListener("click", function (event) {
      const clickInsideMenubar =
        hasClosestTarget(event.target, ".ui-menubar") || hasClosestTarget(event.target, ".js-menubar-popover");

      if (!clickInsideMenubar) {
        closeMenubar();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenubar();
      }
    });
  }

  // Navigation menu interaction: active item selection.
  if (navItems.length > 0) {
    navItems.forEach(function (item) {
      item.addEventListener("click", function () {
        navItems.forEach(function (other) {
          other.classList.toggle("is-active", other === item);
        });
      });
    });
  }

  // Stepper interaction: move between steps and mark completed ones.
  if (stepper) {
    const steps = Array.from(stepper.querySelectorAll(".ui-step"));

    const updateStepper = function (currentStep) {
      stepper.dataset.step = String(currentStep);

      steps.forEach(function (step, index) {
        const stepNumber = index + 1;
        step.classList.toggle("is-active", stepNumber === currentStep);
        step.classList.toggle("is-completed", stepNumber < currentStep);
      });
    };

    if (stepPrev) {
      stepPrev.addEventListener("click", function () {
        updateStepper(Math.max(1, Number(stepper.dataset.step || 1) - 1));
      });
    }

    if (stepNext) {
      stepNext.addEventListener("click", function () {
        updateStepper(Math.min(steps.length, Number(stepper.dataset.step || 1) + 1));
      });
    }

    updateStepper(Number(stepper.dataset.step || 1));
  }

  // Sidebar nav button interaction: open/close side navigation panel.
  if (mobileTriggers.length > 0 && mobileMenu) {
    const closeMobileMenu = function () {
      mobileTriggers.forEach(function (trigger) {
        trigger.setAttribute("aria-expanded", "false");
      });
      mobileMenu.hidden = true;

      if (floatingMobileTrigger) {
        floatingMobileTrigger.hidden = false;
      }

      if (mobileOverlay) {
        mobileOverlay.hidden = true;
      }
    };

    const openMobileMenu = function () {
      mobileTriggers.forEach(function (trigger) {
        trigger.setAttribute("aria-expanded", "true");
      });
      mobileMenu.hidden = false;

      if (floatingMobileTrigger) {
        floatingMobileTrigger.hidden = true;
      }

      if (mobileOverlay) {
        mobileOverlay.hidden = false;
      }
    };

    mobileTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        const isExpanded = mobileMenu.hidden === false;

        if (isExpanded) {
          closeMobileMenu();
          return;
        }

        openMobileMenu();
      });
    });

    if (mobileClose) {
      mobileClose.addEventListener("click", closeMobileMenu);
    }

    if (mobileOverlay) {
      mobileOverlay.addEventListener("click", closeMobileMenu);
    }

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMobileMenu);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 900) {
        closeMobileMenu();
      }
    });
  }

  // Bottom drawer interaction: open from any drawer trigger and close with x/overlay.
  if (openBottomDrawerButtons.length > 0 && bottomDrawer) {
    const closeBottomDrawer = function () {
      openBottomDrawerButtons.forEach(function (button) {
        button.setAttribute("aria-expanded", "false");
      });
      bottomDrawer.hidden = true;

      if (bottomDrawerOverlay) {
        bottomDrawerOverlay.hidden = true;
      }
    };

    const openBottomDrawer = function () {
      openBottomDrawerButtons.forEach(function (button) {
        button.setAttribute("aria-expanded", "true");
      });
      bottomDrawer.hidden = false;

      if (bottomDrawerOverlay) {
        bottomDrawerOverlay.hidden = false;
      }
    };

    openBottomDrawerButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const isExpanded = bottomDrawer.hidden === false;

        if (isExpanded) {
          closeBottomDrawer();
          return;
        }

        openBottomDrawer();
      });
    });

    if (bottomDrawerClose) {
      bottomDrawerClose.addEventListener("click", closeBottomDrawer);
    }

    if (bottomDrawerOverlay) {
      bottomDrawerOverlay.addEventListener("click", closeBottomDrawer);
    }
  }

  // Overlay demos interaction: modal, left sheet, fullscreen overlay and command palette.
  if (openModalButton && modalBackdrop) {
    const openModal = function () {
      openModalButton.setAttribute("aria-expanded", "true");
      modalBackdrop.hidden = false;
    };

    const closeModal = function () {
      openModalButton.setAttribute("aria-expanded", "false");
      modalBackdrop.hidden = true;
    };

    openModalButton.addEventListener("click", openModal);

    if (closeModalButton) {
      closeModalButton.addEventListener("click", closeModal);
    }

    modalBackdrop.addEventListener("click", function (event) {
      if (event.target === modalBackdrop) {
        closeModal();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !modalBackdrop.hidden) {
        closeModal();
      }
    });
  }

  if (openSheetButton && leftSheet && sheetBackdrop) {
    const openSheet = function () {
      openSheetButton.setAttribute("aria-expanded", "true");
      leftSheet.hidden = false;
      sheetBackdrop.hidden = false;
    };

    const closeSheet = function () {
      openSheetButton.setAttribute("aria-expanded", "false");
      leftSheet.hidden = true;
      sheetBackdrop.hidden = true;
    };

    openSheetButton.addEventListener("click", openSheet);

    if (closeSheetButton) {
      closeSheetButton.addEventListener("click", closeSheet);
    }

    sheetBackdrop.addEventListener("click", closeSheet);

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !leftSheet.hidden) {
        closeSheet();
      }
    });
  }

  if (openFullscreenOverlayButton && fullscreenOverlay) {
    const openFullscreenOverlay = function () {
      openFullscreenOverlayButton.setAttribute("aria-expanded", "true");
      fullscreenOverlay.hidden = false;
    };

    const closeFullscreenOverlay = function () {
      openFullscreenOverlayButton.setAttribute("aria-expanded", "false");
      fullscreenOverlay.hidden = true;
    };

    openFullscreenOverlayButton.addEventListener("click", openFullscreenOverlay);

    if (closeFullscreenOverlayButton) {
      closeFullscreenOverlayButton.addEventListener("click", closeFullscreenOverlay);
    }

    fullscreenOverlay.addEventListener("click", function (event) {
      if (event.target === fullscreenOverlay) {
        closeFullscreenOverlay();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !fullscreenOverlay.hidden) {
        closeFullscreenOverlay();
      }
    });
  }

  if (openCommandPaletteButton && commandBackdrop) {
    const closeCommandPalette = function () {
      openCommandPaletteButton.setAttribute("aria-expanded", "false");
      commandBackdrop.hidden = true;
    };

    const openCommandPalette = function () {
      openCommandPaletteButton.setAttribute("aria-expanded", "true");
      commandBackdrop.hidden = false;

      if (commandInput) {
        commandInput.value = "";
        commandInput.focus();
      }

      if (commandItems.length > 0) {
        commandItems.forEach(function (item) {
          item.hidden = false;
        });
      }
    };

    const runCommand = function (commandLabel) {
      if (commandFeedback) {
        commandFeedback.textContent = "Comando reciente: " + commandLabel + ".";
      }

      if (commandLabel === "Go to Quick actions") {
        const quickActionsBlock = document.querySelector("#bloque-acciones-rapidas");
        if (quickActionsBlock) {
          quickActionsBlock.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

      if (commandLabel === "Go to Navigation") {
        const navigationBlock = document.querySelector("#bloque-navegacion");
        if (navigationBlock) {
          navigationBlock.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

      if (commandLabel === "Open Drawer") {
        const drawerButton = document.querySelector(".js-open-bottom-drawer");
        if (drawerButton) {
          drawerButton.click();
        }
      }

      if (commandLabel === "Toggle Fullscreen Overlay") {
        if (fullscreenOverlay) {
          if (fullscreenOverlay.hidden) {
            if (openFullscreenOverlayButton) {
              openFullscreenOverlayButton.setAttribute("aria-expanded", "true");
            }
            fullscreenOverlay.hidden = false;
          } else {
            if (openFullscreenOverlayButton) {
              openFullscreenOverlayButton.setAttribute("aria-expanded", "false");
            }
            fullscreenOverlay.hidden = true;
          }
        }
      }

      closeCommandPalette();
    };

    openCommandPaletteButton.addEventListener("click", openCommandPalette);

    if (closeCommandPaletteButton) {
      closeCommandPaletteButton.addEventListener("click", closeCommandPalette);
    }

    commandBackdrop.addEventListener("click", function (event) {
      if (event.target === commandBackdrop) {
        closeCommandPalette();
      }
    });

    if (commandInput && commandItems.length > 0) {
      commandInput.addEventListener("input", function () {
        const query = commandInput.value.trim().toLowerCase();

        commandItems.forEach(function (item) {
          const commandLabel = (item.dataset.command || item.textContent || "").toLowerCase();
          item.hidden = Boolean(query) && !commandLabel.includes(query);
        });
      });
    }

    commandItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const commandLabel = item.dataset.command || item.textContent || "Comando";
        runCommand(commandLabel);
      });
    });

    document.addEventListener("keydown", function (event) {
      const isCommandShortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

      if (isCommandShortcut) {
        event.preventDefault();

        if (commandBackdrop.hidden) {
          openCommandPalette();
        } else {
          closeCommandPalette();
        }
        return;
      }

      if (event.key === "Escape" && !commandBackdrop.hidden) {
        closeCommandPalette();
      }
    });
  }

  // Show and hide content interactions.
  if (contentBlock) {
    if (accordionItems.length > 0) {
      accordionItems.forEach(function (item) {
        const toggle = item.querySelector(".js-accordion-toggle");
        const panel = item.querySelector(".js-accordion-panel");

        if (!toggle || !panel) {
          return;
        }

        toggle.addEventListener("click", function () {
          const shouldExpand = toggle.getAttribute("aria-expanded") !== "true";

          accordionItems.forEach(function (otherItem) {
            const otherToggle = otherItem.querySelector(".js-accordion-toggle");
            const otherPanel = otherItem.querySelector(".js-accordion-panel");

            if (!otherToggle || !otherPanel) {
              return;
            }

            otherToggle.setAttribute("aria-expanded", "false");
            otherPanel.hidden = true;
          });

          toggle.setAttribute("aria-expanded", shouldExpand ? "true" : "false");
          panel.hidden = !shouldExpand;
        });
      });
    }

    if (collapsibleToggle && collapsiblePanel) {
      collapsibleToggle.addEventListener("click", function () {
        const isExpanded = collapsibleToggle.getAttribute("aria-expanded") === "true";
        const nextExpanded = !isExpanded;

        collapsibleToggle.setAttribute("aria-expanded", nextExpanded ? "true" : "false");
        collapsibleToggle.textContent = nextExpanded ? "Ocultar panel" : "Mostrar panel";
        collapsiblePanel.hidden = !nextExpanded;
      });
    }

    if (dropdown && dropdownTrigger && dropdownMenu) {
      const closeDropdown = function () {
        dropdownTrigger.setAttribute("aria-expanded", "false");
        dropdownMenu.hidden = true;
      };

      dropdownTrigger.addEventListener("click", function () {
        const shouldOpen = dropdownMenu.hidden;
        dropdownTrigger.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
        dropdownMenu.hidden = !shouldOpen;
      });

      dropdownOptions.forEach(function (option) {
        option.addEventListener("click", function () {
          if (dropdownValue) {
            dropdownValue.textContent = "Seleccion actual: " + option.textContent + ".";
          }
          closeDropdown();
        });
      });

      document.addEventListener("click", function (event) {
        if (!hasClosestTarget(event.target, ".js-dropdown")) {
          closeDropdown();
        }
      });
    }

    if (popoverWrap && popoverTrigger && popover) {
      const closePopover = function () {
        popoverTrigger.setAttribute("aria-expanded", "false");
        popover.hidden = true;
      };

      const openPopover = function () {
        popoverTrigger.setAttribute("aria-expanded", "true");
        popover.hidden = false;
      };

      popoverTrigger.addEventListener("click", function () {
        if (popover.hidden) {
          openPopover();
          return;
        }

        closePopover();
      });

      if (popoverClose) {
        popoverClose.addEventListener("click", closePopover);
      }

      document.addEventListener("click", function (event) {
        if (!hasClosestTarget(event.target, ".ui-popover-wrap")) {
          closePopover();
        }
      });
    }

    if (contextTarget && contextMenu) {
      const closeContextMenu = function () {
        contextMenu.hidden = true;
      };

      const openContextMenuAt = function (x, y) {
        contextMenu.style.left = x + "px";
        contextMenu.style.top = y + "px";
        contextMenu.hidden = false;
      };

      contextTarget.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        openContextMenuAt(event.clientX, event.clientY);
      });

      contextTarget.addEventListener("keydown", function (event) {
        if (event.key === "ContextMenu" || (event.shiftKey && event.key === "F10")) {
          event.preventDefault();
          const rect = contextTarget.getBoundingClientRect();
          openContextMenuAt(rect.left + 20, rect.top + 20);
        }
      });

      contextActions.forEach(function (action) {
        action.addEventListener("click", function () {
          const label = action.dataset.action || action.textContent;

          if (contextFeedback) {
            contextFeedback.textContent = "Accion: " + label + ".";
          }

          closeContextMenu();
        });
      });

      document.addEventListener("click", function (event) {
        if (!hasClosestTarget(event.target, ".js-context-menu") && !hasClosestTarget(event.target, ".js-context-target")) {
          closeContextMenu();
        }
      });

      document.addEventListener("scroll", closeContextMenu, true);
      window.addEventListener("resize", closeContextMenu);
    }
  }

  // Data Display - Sortable Table
  const sortableTables = document.querySelectorAll(".js-sortable-table");
  sortableTables.forEach(table => {
    const headers = table.querySelectorAll(".js-sortable-col");
    headers.forEach(header => {
      header.addEventListener("click", () => {
        const index = parseInt(header.dataset.index);
        const tbody = table.querySelector("tbody");
        const rows = Array.from(tbody.querySelectorAll("tr"));
        
        const isNumeric = rows.every(row => {
          const cell = row.cells[index].textContent.trim();
          return !isNaN(cell.replace(/[$,]/g, ''));
        });

        rows.sort((a, b) => {
          const cellA = a.cells[index].textContent.trim();
          const cellB = b.cells[index].textContent.trim();
          
          if (isNumeric) {
            return parseFloat(cellA.replace(/[$,]/g, '')) - parseFloat(cellB.replace(/[$,]/g, ''));
          }
          return cellA.localeCompare(cellB);
        });

        rows.forEach(row => tbody.appendChild(row));
      });
    });
  });

  // Data Display - Status Badges
  const statusBadges = document.querySelectorAll(".js-status-badge");
  const statusCycle = { active: "pending", pending: "completed", completed: "active" };
  const statusLabels = { active: "Active", pending: "Pending", completed: "Completed" };

  statusBadges.forEach(badge => {
    badge.style.cursor = "pointer";
    badge.addEventListener("click", (e) => {
      e.stopPropagation();
      const currentStatus = badge.dataset.status;
      const nextStatus = statusCycle[currentStatus];
      
      badge.dataset.status = nextStatus;
      badge.textContent = statusLabels[nextStatus];
      
      badge.className = `ui-status-badge ui-status-${nextStatus} js-status-badge`;
    });
  });

  // Data Display - Progress Checklist
  const checklistItems = document.querySelectorAll(".js-progress-checklist .ui-checklist-item");
  checklistItems.forEach(item => {
    const checkbox = item.querySelector(".js-checklist-check");
    if (checkbox) {
      checkbox.disabled = false;
      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          item.classList.add("ui-checklist-done");
          item.classList.remove("ui-checklist-inprogress");
        } else {
          item.classList.remove("ui-checklist-done");
        }
      });
    }
  });

  // Chart legend button interaction and hover
  const chartButtons = document.querySelectorAll(".ui-chart-legend-btn");
  const chartBars = document.querySelectorAll(".ui-chart-bar");
  const monthOrder = ["Ene", "Feb", "Mar", "Abr", "May", "Jun"];
  const percentages = ["35", "62", "45", "85", "70", "55"];
  
  // Click interaction on legend buttons
  chartButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const month = btn.dataset.month;
      const percent = btn.dataset.percent;
      const monthIndex = monthOrder.indexOf(month);
      
      // Clear all values
      chartBars.forEach(bar => {
        bar.querySelector(".ui-chart-value").textContent = "";
      });
      
      // Show percentage on corresponding bar
      if (monthIndex !== -1 && chartBars[monthIndex]) {
        chartBars[monthIndex].querySelector(".ui-chart-value").textContent = percent + "%";
      }
    });
  });
  
  // Hover interaction on chart bars
  chartBars.forEach((bar, index) => {
    bar.addEventListener("mouseover", () => {
      bar.querySelector(".ui-chart-value").textContent = percentages[index] + "%";
    });
    
    bar.addEventListener("mouseout", () => {
      bar.querySelector(".ui-chart-value").textContent = "";
    });
  });

  // Layout Systems - Resizable Panels / Split View
  function setupHorizontalResize(container, leftPane, rightPane, divider) {
    if (!container || !leftPane || !rightPane || !divider) {
      return;
    }

    let isDragging = false;

    const onPointerMove = function (event) {
      if (!isDragging) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const dividerWidth = divider.offsetWidth;
      const minWidth = Math.min(120, rect.width * 0.2);
      let nextLeft = event.clientX - rect.left - dividerWidth / 2;
      nextLeft = Math.max(minWidth, Math.min(rect.width - minWidth - dividerWidth, nextLeft));

      const leftPercent = (nextLeft / rect.width) * 100;
      const rightPercent = 100 - leftPercent;

      leftPane.style.flex = "0 0 " + leftPercent.toFixed(2) + "%";
      rightPane.style.flex = "0 0 " + rightPercent.toFixed(2) + "%";
    };

    const stopDragging = function () {
      if (!isDragging) {
        return;
      }

      isDragging = false;
      container.classList.remove("ui-is-resizing");
      document.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("mouseup", stopDragging);
    };

    divider.addEventListener("mousedown", function (event) {
      event.preventDefault();
      isDragging = true;
      container.classList.add("ui-is-resizing");
      document.addEventListener("mousemove", onPointerMove);
      document.addEventListener("mouseup", stopDragging);
    });
  }

  setupHorizontalResize(
    document.querySelector(".js-resizable-panels"),
    document.querySelector(".js-resizable-left"),
    document.querySelector(".js-resizable-right"),
    document.querySelector(".js-resizable-divider")
  );

  // Layout Systems - Stacked cards drag and reorder
  const stackedCardsWrap = document.querySelector(".js-stacked-cards");
  const stackedCards = document.querySelectorAll(".js-stacked-card");
  let draggedCard = null;

  function getDropAfterElement(container, y) {
    const draggableCards = [...container.querySelectorAll(".js-stacked-card:not(.ui-is-dragging)")];

    return draggableCards.reduce(
      function (closest, card) {
        const box = card.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: card };
        }

        return closest;
      },
      { offset: Number.NEGATIVE_INFINITY, element: null }
    ).element;
  }

  if (stackedCardsWrap && stackedCards.length) {
    stackedCards.forEach(function (card) {
      card.addEventListener("dragstart", function () {
        draggedCard = card;
        card.classList.add("ui-is-dragging");
      });

      card.addEventListener("dragend", function () {
        card.classList.remove("ui-is-dragging");
        draggedCard = null;
        stackedCardsWrap.querySelectorAll(".ui-drop-target").forEach(function (target) {
          target.classList.remove("ui-drop-target");
        });
      });
    });

    stackedCardsWrap.addEventListener("dragover", function (event) {
      event.preventDefault();
      if (!draggedCard) {
        return;
      }

      stackedCardsWrap.querySelectorAll(".ui-drop-target").forEach(function (target) {
        target.classList.remove("ui-drop-target");
      });

      const afterElement = getDropAfterElement(stackedCardsWrap, event.clientY);

      if (afterElement) {
        afterElement.classList.add("ui-drop-target");
      }
    });

    stackedCardsWrap.addEventListener("drop", function (event) {
      event.preventDefault();
      if (!draggedCard) {
        return;
      }

      const afterElement = getDropAfterElement(stackedCardsWrap, event.clientY);
      stackedCardsWrap.querySelectorAll(".ui-drop-target").forEach(function (target) {
        target.classList.remove("ui-drop-target");
      });

      if (!afterElement) {
        stackedCardsWrap.appendChild(draggedCard);
      } else {
        stackedCardsWrap.insertBefore(draggedCard, afterElement);
      }
    });
  }

  // Content Display - Custom media controls
  if (mediaVideo && mediaPlayButton && mediaMuteButton && mediaRestartButton && mediaProgress && mediaVolume && mediaTime && mediaFullscreenButton) {
    const formatMediaTime = function (seconds) {
      if (!Number.isFinite(seconds) || seconds < 0) {
        return "00:00";
      }

      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return String(minutes).padStart(2, "0") + ":" + String(secs).padStart(2, "0");
    };

    const updateMediaButtons = function () {
      mediaPlayButton.innerHTML = mediaVideo.paused
        ? '<i class="fa-solid fa-play"></i> Play'
        : '<i class="fa-solid fa-pause"></i> Pausa';

      mediaMuteButton.innerHTML = mediaVideo.muted
        ? '<i class="fa-solid fa-volume-xmark"></i> Silencio'
        : '<i class="fa-solid fa-volume-high"></i> Sonido';

      mediaFullscreenButton.innerHTML = document.fullscreenElement
        ? '<i class="fa-solid fa-compress"></i> Exit'
        : '<i class="fa-solid fa-expand"></i> Full';
    };

    const updateMediaProgress = function () {
      const duration = Number.isFinite(mediaVideo.duration) && mediaVideo.duration > 0 ? mediaVideo.duration : 0;
      const current = Number.isFinite(mediaVideo.currentTime) ? mediaVideo.currentTime : 0;
      const percent = duration > 0 ? (current / duration) * 100 : 0;

      mediaProgress.value = String(percent);
      mediaTime.textContent = formatMediaTime(current) + " / " + formatMediaTime(duration);
    };

    mediaPlayButton.addEventListener("click", function () {
      if (mediaVideo.paused) {
        mediaVideo.play();
      } else {
        mediaVideo.pause();
      }
      updateMediaButtons();
    });

    mediaMuteButton.addEventListener("click", function () {
      mediaVideo.muted = !mediaVideo.muted;
      updateMediaButtons();
    });

    mediaVolume.addEventListener("input", function () {
      mediaVideo.volume = Number(mediaVolume.value);
      mediaVideo.muted = mediaVideo.volume === 0;
      updateMediaButtons();
    });

    mediaProgress.addEventListener("input", function () {
      const duration = Number.isFinite(mediaVideo.duration) ? mediaVideo.duration : 0;
      if (duration > 0) {
        mediaVideo.currentTime = (Number(mediaProgress.value) / 100) * duration;
      }
      updateMediaProgress();
    });

    mediaRestartButton.addEventListener("click", function () {
      mediaVideo.currentTime = 0;
      mediaVideo.play();
      updateMediaButtons();
      updateMediaProgress();
    });

    mediaFullscreenButton.addEventListener("click", async function () {
      const mediaContainer = mediaVideo.closest(".ui-media-preview");

      try {
        if (!document.fullscreenElement && mediaContainer) {
          await mediaContainer.requestFullscreen();
        } else if (document.fullscreenElement) {
          await document.exitFullscreen();
        }
      } catch (error) {
        // Ignore fullscreen errors in unsupported contexts.
      }

      updateMediaButtons();
    });

    mediaVideo.addEventListener("play", updateMediaButtons);
    mediaVideo.addEventListener("pause", updateMediaButtons);
    mediaVideo.addEventListener("volumechange", updateMediaButtons);
    mediaVideo.addEventListener("timeupdate", updateMediaProgress);
    mediaVideo.addEventListener("loadedmetadata", updateMediaProgress);
    mediaVideo.addEventListener("ended", updateMediaButtons);
    document.addEventListener("fullscreenchange", updateMediaButtons);

    mediaVolume.value = String(mediaVideo.volume);
    updateMediaButtons();
    updateMediaProgress();
  }

  // Utilities - Date picker visual + real calendar sync
  if (utilsDateInput && utilsDateOutput && utilsCalendarDaysWrap && utilsCalendarTitle && utilsCalendarPrev && utilsCalendarNext) {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    let selectedDate;

    const toIsoDate = function (dateObject) {
      const y = dateObject.getFullYear();
      const m = String(dateObject.getMonth() + 1).padStart(2, "0");
      const d = String(dateObject.getDate()).padStart(2, "0");
      return y + "-" + m + "-" + d;
    };

    const updateDatePickerUI = function () {
      const iso = toIsoDate(selectedDate);
      utilsDateInput.value = iso;
      utilsDateOutput.textContent = "Fecha elegida: " + iso;
    };

    const renderCalendar = function (year, month) {
      const firstWeekdaySundayZero = new Date(year, month, 1).getDay();
      const firstWeekdayMondayZero = (firstWeekdaySundayZero + 6) % 7;
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      const selectedDay = selectedDate && selectedDate.getFullYear() === year && selectedDate.getMonth() === month
        ? selectedDate.getDate()
        : -1;

      utilsCalendarTitle.textContent = monthNames[month] + " " + year;
      utilsCalendarDaysWrap.innerHTML = "";

      for (let i = 0; i < firstWeekdayMondayZero; i += 1) {
        const filler = document.createElement("span");
        filler.className = "ui-utils-calendar-empty";
        utilsCalendarDaysWrap.appendChild(filler);
      }

      for (let day = 1; day <= daysInMonth; day += 1) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "js-utils-calendar-day";
        button.dataset.day = String(day);
        button.dataset.month = String(month);
        button.dataset.year = String(year);
        button.textContent = String(day);

        const isToday = year === todayYear && month === todayMonth && day === todayDay;
        const isSelected = day === selectedDay;

        if (isToday) {
          button.classList.add("is-today");
        }
        if (isSelected) {
          button.classList.add("is-selected");
        }

        button.addEventListener("click", function () {
          const nextDate = year + "-" + String(month + 1).padStart(2, "0") + "-" + String(day).padStart(2, "0");
          selectedDate = new Date(nextDate + "T00:00:00");
          updateDatePickerUI();
          renderCalendar(year, month);
        });

        utilsCalendarDaysWrap.appendChild(button);
      }
    };

    const changeMonth = function (delta) {
      const currentYear = selectedDate.getFullYear();
      const currentMonth = selectedDate.getMonth();
      const currentDay = selectedDate.getDate();
      const targetMonthDate = new Date(currentYear, currentMonth + delta, 1);
      const targetYear = targetMonthDate.getFullYear();
      const targetMonth = targetMonthDate.getMonth();
      const daysInTargetMonth = new Date(targetYear, targetMonth + 1, 0).getDate();
      const nextDay = Math.min(currentDay, daysInTargetMonth);

      selectedDate = new Date(targetYear, targetMonth, nextDay);
      updateDatePickerUI();
      renderCalendar(targetYear, targetMonth);
    };

    const initialIsoDate = utilsDateInput.value || toIsoDate(today);
    selectedDate = new Date(initialIsoDate + "T00:00:00");
    updateDatePickerUI();
    renderCalendar(selectedDate.getFullYear(), selectedDate.getMonth());

    utilsDateInput.addEventListener("change", function () {
      if (!utilsDateInput.value) {
        return;
      }

      selectedDate = new Date(utilsDateInput.value + "T00:00:00");
      updateDatePickerUI();
      renderCalendar(selectedDate.getFullYear(), selectedDate.getMonth());
    });

    utilsCalendarPrev.addEventListener("click", function () {
      changeMonth(-1);
    });

    utilsCalendarNext.addEventListener("click", function () {
      changeMonth(1);
    });
  }

  // Utilities - Carousel
  if (utilsCarouselTrack && utilsCarouselPrev && utilsCarouselNext) {
    let carouselIndex = 0;
    const totalSlides = utilsCarouselTrack.children.length;

    const renderCarousel = function () {
      utilsCarouselTrack.style.transform = "translateX(" + carouselIndex * -100 + "%)";
    };

    utilsCarouselPrev.addEventListener("click", function () {
      carouselIndex = carouselIndex === 0 ? totalSlides - 1 : carouselIndex - 1;
      renderCarousel();
    });

    utilsCarouselNext.addEventListener("click", function () {
      carouselIndex = (carouselIndex + 1) % totalSlides;
      renderCarousel();
    });
  }

  // Utilities - Command search
  if (utilsCommandInput && utilsCommandList.length) {
    utilsCommandInput.addEventListener("input", function () {
      const query = utilsCommandInput.value.trim().toLowerCase();

      utilsCommandList.forEach(function (item) {
        const command = (item.dataset.command || item.textContent || "").toLowerCase();
        item.style.display = command.includes(query) ? "block" : "none";
      });
    });

    utilsCommandList.forEach(function (item) {
      item.addEventListener("click", function () {
        const command = item.dataset.command || item.textContent || "";

        if (command === "Open settings") {
          if (utilsCommandFeedback) {
            utilsCommandFeedback.textContent = "Settings abierto (demo).";
          }
          return;
        }

        if (command === "Create new file") {
          if (utilsCommandFeedback) {
            utilsCommandFeedback.textContent = "Nuevo archivo creado (demo).";
          }
          return;
        }

        if (command === "Toggle sidebar") {
          const sidebar = document.querySelector(".ui-sidebar-demo-aside");
          if (sidebar) {
            sidebar.hidden = !sidebar.hidden;
          }
          if (utilsCommandFeedback) {
            utilsCommandFeedback.textContent = "Sidebar " + (sidebar && sidebar.hidden ? "oculto" : "visible") + ".";
          }
          return;
        }

        if (command === "Deploy project") {
          if (utilsCommandFeedback) {
            utilsCommandFeedback.textContent = "Deploy iniciado (demo).";
          }
        }
      });
    });
  }

  // Utilities - Copy button
  if (utilsCopyButton && utilsCopyText && utilsCopyFeedback) {
    utilsCopyButton.addEventListener("click", async function () {
      const value = utilsCopyText.textContent || "";

      try {
        await navigator.clipboard.writeText(value);
        utilsCopyFeedback.textContent = "Copiado";
      } catch (error) {
        utilsCopyFeedback.textContent = "No se pudo copiar";
      }
    });
  }

  // Utilities - Theme toggle
  if (utilsThemeToggle && utilsThemeLabel && utilsThemeCard) {
    utilsThemeToggle.addEventListener("click", function () {
      utilsThemeCard.classList.toggle("ui-utils-theme-light");
      const isLight = utilsThemeCard.classList.contains("ui-utils-theme-light");
      utilsThemeLabel.textContent = "Tema actual: " + (isLight ? "claro" : "oscuro");
    });
  }

  // Utilities - Back to top
  if (utilsBackTop) {
    utilsBackTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Utilities - Count badges
  if (utilsBadgeValue && utilsBadgeDown && utilsBadgeUp) {
    let count = Number(utilsBadgeValue.textContent || "0");

    const renderCount = function () {
      utilsBadgeValue.textContent = String(count);
    };

    utilsBadgeDown.addEventListener("click", function () {
      count = Math.max(0, count - 1);
      renderCount();
    });

    utilsBadgeUp.addEventListener("click", function () {
      count += 1;
      renderCount();
    });
  }

  // Advanced - Animated chart
  const advBars = document.querySelectorAll(".js-adv-bar");
  const advChartAnimateButton = document.querySelector(".js-adv-chart-animate");

  if (advBars.length) {
    const renderAdvancedBars = function (randomize) {
      advBars.forEach(function (bar) {
        const base = Number(bar.dataset.base || "45");
        const next = randomize ? Math.max(16, Math.min(92, base + Math.round((Math.random() - 0.5) * 28))) : base;
        bar.style.height = next + "%";
      });
    };

    renderAdvancedBars(false);

    if (advChartAnimateButton) {
      advChartAnimateButton.addEventListener("click", function () {
        renderAdvancedBars(true);
      });
    }
  }

  // Advanced - Interactive carousel
  const advCarouselTrack = document.querySelector(".js-adv-carousel-track");
  const advCarouselPrev = document.querySelector(".js-adv-carousel-prev");
  const advCarouselNext = document.querySelector(".js-adv-carousel-next");
  const advCarouselDots = document.querySelector(".js-adv-carousel-dots");

  if (advCarouselTrack && advCarouselPrev && advCarouselNext && advCarouselDots) {
    let advIndex = 0;
    const slides = Array.from(advCarouselTrack.children);

    const renderAdvCarousel = function () {
      advCarouselTrack.style.transform = "translateX(" + advIndex * -100 + "%)";
      advCarouselDots.querySelectorAll("button").forEach(function (dot, index) {
        dot.classList.toggle("is-active", index === advIndex);
      });
    };

    slides.forEach(function (_, index) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.addEventListener("click", function () {
        advIndex = index;
        renderAdvCarousel();
      });
      advCarouselDots.appendChild(dot);
    });

    advCarouselPrev.addEventListener("click", function () {
      advIndex = advIndex === 0 ? slides.length - 1 : advIndex - 1;
      renderAdvCarousel();
    });

    advCarouselNext.addEventListener("click", function () {
      advIndex = (advIndex + 1) % slides.length;
      renderAdvCarousel();
    });

    renderAdvCarousel();
  }

  // Advanced - Range calendar
  const advRangeTitle = document.querySelector(".js-adv-range-title");
  const advRangePrev = document.querySelector(".js-adv-range-prev");
  const advRangeNext = document.querySelector(".js-adv-range-next");
  const advRangeLabel = document.querySelector(".js-adv-range-label");
  const advRangeDays = document.querySelector(".js-adv-range-days");

  if (advRangeTitle && advRangePrev && advRangeNext && advRangeLabel && advRangeDays) {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let viewYear = 2026;
    let viewMonth = 3;
    let rangeStartDate = new Date(2026, 3, 5);
    let rangeEndDate = new Date(2026, 3, 18);
    let dragAnchorDate = new Date(2026, 3, 5);
    let isSelecting = false;

    const normalizeRange = function (a, b) {
      return a <= b ? { start: a, end: b } : { start: b, end: a };
    };

    const formatDateShort = function (date) {
      return String(date.getDate()).padStart(2, "0") + "/" + String(date.getMonth() + 1).padStart(2, "0");
    };

    const applyRangeStyles = function () {
      const normalized = normalizeRange(rangeStartDate, rangeEndDate);
      advRangeLabel.textContent = "Rango: " + formatDateShort(normalized.start) + " - " + formatDateShort(normalized.end);

      advRangeDays.querySelectorAll(".ui-adv-range-day").forEach(function (badge) {
        const y = Number(badge.dataset.year || String(viewYear));
        const m = Number(badge.dataset.month || String(viewMonth));
        const d = Number(badge.dataset.day || "1");
        const badgeDate = new Date(y, m, d);
        const inRange = badgeDate >= normalized.start && badgeDate <= normalized.end;
        const isEdge = badgeDate.getTime() === normalized.start.getTime() || badgeDate.getTime() === normalized.end.getTime();
        badge.classList.toggle("is-in-range", inRange);
        badge.classList.toggle("is-edge", isEdge);
      });
    };

    const renderRangeCalendar = function () {
      advRangeTitle.textContent = monthNames[viewMonth] + " " + viewYear;
      advRangeDays.innerHTML = "";

      const firstWeekdaySundayZero = new Date(viewYear, viewMonth, 1).getDay();
      const firstWeekdayMondayZero = (firstWeekdaySundayZero + 6) % 7;
      const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

      for (let i = 0; i < firstWeekdayMondayZero; i += 1) {
        const empty = document.createElement("span");
        empty.className = "ui-adv-range-day-empty";
        advRangeDays.appendChild(empty);
      }

      for (let day = 1; day <= daysInMonth; day += 1) {
        const badge = document.createElement("button");
        badge.type = "button";
        badge.className = "ui-adv-range-day";
        badge.dataset.day = String(day);
        badge.dataset.month = String(viewMonth);
        badge.dataset.year = String(viewYear);
        badge.textContent = String(day);

        badge.addEventListener("pointerdown", function (event) {
          event.preventDefault();
          isSelecting = true;
          dragAnchorDate = new Date(viewYear, viewMonth, day);
          rangeStartDate = new Date(viewYear, viewMonth, day);
          rangeEndDate = new Date(viewYear, viewMonth, day);
          applyRangeStyles();
        });

        badge.addEventListener("pointerenter", function () {
          if (!isSelecting) {
            return;
          }
          rangeStartDate = new Date(dragAnchorDate);
          rangeEndDate = new Date(viewYear, viewMonth, day);
          applyRangeStyles();
        });

        badge.addEventListener("click", function () {
          if (isSelecting) {
            return;
          }
          rangeStartDate = new Date(viewYear, viewMonth, day);
          rangeEndDate = new Date(viewYear, viewMonth, day);
          dragAnchorDate = new Date(viewYear, viewMonth, day);
          applyRangeStyles();
        });

        advRangeDays.appendChild(badge);
      }

      applyRangeStyles();
    };

    document.addEventListener("pointerup", function () {
      isSelecting = false;
    });

    advRangeDays.addEventListener("pointermove", function (event) {
      if (!isSelecting) {
        return;
      }
      const target = document.elementFromPoint(event.clientX, event.clientY);
      const dayButton = target && target.closest ? target.closest(".ui-adv-range-day") : null;
      if (!dayButton) {
        return;
      }
      const day = Number(dayButton.dataset.day || "1");
      const month = Number(dayButton.dataset.month || String(viewMonth));
      const year = Number(dayButton.dataset.year || String(viewYear));
      rangeStartDate = new Date(dragAnchorDate);
      rangeEndDate = new Date(year, month, day);
      applyRangeStyles();
    });

    advRangePrev.addEventListener("click", function () {
      const prev = new Date(viewYear, viewMonth - 1, 1);
      viewYear = prev.getFullYear();
      viewMonth = prev.getMonth();
      renderRangeCalendar();
    });

    advRangeNext.addEventListener("click", function () {
      const next = new Date(viewYear, viewMonth + 1, 1);
      viewYear = next.getFullYear();
      viewMonth = next.getMonth();
      renderRangeCalendar();
    });

    renderRangeCalendar();
  }

  // Advanced - Drag and drop area
  const advDragChips = document.querySelectorAll(".js-adv-drag-items .ui-adv-drag-chip");
  const advDragItems = document.querySelector(".js-adv-drag-items");
  const advDropzone = document.querySelector(".js-adv-dropzone");
  const advDropHint = document.querySelector(".js-adv-drop-hint");
  let advDraggedChip = null;

  if (advDragChips.length && advDropzone && advDragItems) {
    advDragChips.forEach(function (chip) {
      chip.addEventListener("dragstart", function () {
        advDraggedChip = chip;
        chip.classList.add("is-dragging");
      });

      chip.addEventListener("dragend", function () {
        chip.classList.remove("is-dragging");
        advDraggedChip = null;
      });
    });

    const setupChipZone = function (zone, overClass) {
      zone.addEventListener("dragover", function (event) {
        event.preventDefault();
        if (overClass) {
          zone.classList.add(overClass);
        }
      });

      zone.addEventListener("dragleave", function () {
        if (overClass) {
          zone.classList.remove(overClass);
        }
      });

      zone.addEventListener("drop", function (event) {
        event.preventDefault();
        if (!advDraggedChip) {
          return;
        }

        zone.appendChild(advDraggedChip);
        if (overClass) {
          zone.classList.remove(overClass);
        }

        if (advDropHint && advDropzone.contains(advDraggedChip)) {
          advDropHint.remove();
        }
      });
    };

    setupChipZone(advDropzone, "is-over");
    setupChipZone(advDragItems, "");

    advDropzone.addEventListener("drop", function () {
      advDropzone.classList.remove("is-over");
    });

    advDropzone.addEventListener("dragover", function (event) {
      event.preventDefault();
      advDropzone.classList.add("is-over");
    });

    advDropzone.addEventListener("dragleave", function () {
      advDropzone.classList.remove("is-over");
    });
  }

  // Advanced - Reorder list
  const advReorderList = document.querySelector(".js-adv-reorder-list");
  let advDraggedItem = null;

  if (advReorderList) {
    const listItems = advReorderList.querySelectorAll(".ui-adv-reorder-item");

    listItems.forEach(function (item) {
      item.addEventListener("dragstart", function () {
        advDraggedItem = item;
        item.classList.add("is-dragging");
      });

      item.addEventListener("dragend", function () {
        item.classList.remove("is-dragging");
        advDraggedItem = null;
      });

      item.addEventListener("dragover", function (event) {
        event.preventDefault();
        if (!advDraggedItem || advDraggedItem === item) {
          return;
        }
        advReorderList.insertBefore(advDraggedItem, item);
      });
    });
  }

  // Advanced - Kanban mini board
  const advKanbanBoard = document.querySelector(".js-adv-kanban");
  if (advKanbanBoard) {
    let advKanbanDragged = null;
    const advKanbanCards = advKanbanBoard.querySelectorAll(".ui-adv-kanban-card");
    const advKanbanColumns = advKanbanBoard.querySelectorAll(".ui-adv-kanban-col");

    advKanbanCards.forEach(function (card) {
      card.addEventListener("dragstart", function () {
        advKanbanDragged = card;
      });
    });

    advKanbanColumns.forEach(function (col) {
      col.addEventListener("dragover", function (event) {
        event.preventDefault();
      });

      col.addEventListener("drop", function (event) {
        event.preventDefault();
        if (!advKanbanDragged) {
          return;
        }
        col.appendChild(advKanbanDragged);
        advKanbanDragged = null;
      });
    });
  }

  // Advanced - File upload zone
  const advUploadZone = document.querySelector(".js-adv-upload");
  const advUploadInput = document.querySelector(".js-adv-upload-input");
  const advUploadTrigger = document.querySelector(".js-adv-upload-trigger");
  const advUploadList = document.querySelector(".js-adv-upload-list");

  if (advUploadZone && advUploadInput && advUploadTrigger && advUploadList) {
    const renderUploadedFiles = function (files) {
      advUploadList.innerHTML = "";
      Array.from(files).forEach(function (file) {
        const item = document.createElement("li");
        item.textContent = file.name;
        advUploadList.appendChild(item);
      });
    };

    advUploadTrigger.addEventListener("click", function () {
      advUploadInput.click();
    });

    advUploadInput.addEventListener("change", function () {
      if (advUploadInput.files) {
        renderUploadedFiles(advUploadInput.files);
      }
    });

    advUploadZone.addEventListener("dragover", function (event) {
      event.preventDefault();
      advUploadZone.classList.add("is-over");
    });

    advUploadZone.addEventListener("dragleave", function () {
      advUploadZone.classList.remove("is-over");
    });

    advUploadZone.addEventListener("drop", function (event) {
      event.preventDefault();
      advUploadZone.classList.remove("is-over");
      if (event.dataTransfer && event.dataTransfer.files) {
        renderUploadedFiles(event.dataTransfer.files);
      }
    });
  }

  // Advanced - Microinteractions
  const advLikeButton = document.querySelector(".js-adv-like");
  const advLikeCount = document.querySelector(".js-adv-like-count");
  const advPulseButton = document.querySelector(".js-adv-pulse");
  const advSwitch = document.querySelector(".js-adv-switch");
  const advSwitchLabel = document.querySelector(".js-adv-switch-label");

  if (advLikeButton && advLikeCount) {
    let likes = Number(advLikeCount.textContent || "24");
    advLikeButton.addEventListener("click", function () {
      const isActive = advLikeButton.classList.toggle("is-active");
      likes += isActive ? 1 : -1;
      advLikeCount.textContent = String(likes);
    });
  }

  if (advPulseButton) {
    advPulseButton.addEventListener("click", function () {
      advPulseButton.classList.remove("is-pulsing");
      void advPulseButton.offsetWidth;
      advPulseButton.classList.add("is-pulsing");
    });
  }

  if (advSwitch && advSwitchLabel) {
    advSwitch.addEventListener("change", function () {
      advSwitchLabel.textContent = "Modo focus: " + (advSwitch.checked ? "on" : "off");
    });
  }

  // Utilities - Notification dot
  if (utilsInboxButton && utilsDot) {
    utilsInboxButton.addEventListener("click", function () {
      utilsDot.classList.add("is-hidden");
    });
  }
});
