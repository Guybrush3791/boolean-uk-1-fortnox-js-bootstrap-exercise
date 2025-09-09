// js/demo.js
// Assumes Bootstrap bundle is loaded (global `bootstrap` available). [15]
document.addEventListener('DOMContentLoaded', () => {
  // Tooltips and Popovers (opt-in) [1][22]
  [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].forEach(el => bootstrap.Tooltip.getOrCreateInstance(el));
  [...document.querySelectorAll('[data-bs-toggle="popover"]')].forEach(el => bootstrap.Popover.getOrCreateInstance(el));

  // Dropdowns (ensure instances for keyboard/ARIA) [15]
  [...document.querySelectorAll('[data-bs-toggle="dropdown"]')].forEach(el => bootstrap.Dropdown.getOrCreateInstance(el));

  // Toast (programmatic) [6]
  const toastEl = document.getElementById('demoToast');
  const toast = toastEl ? bootstrap.Toast.getOrCreateInstance(toastEl, { autohide: true, delay: 2500 }) : null;

  // Collapse (programmatic toggle) [23]
  const collapseEl = document.getElementById('demoCollapse');
  const collapse = collapseEl ? bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false }) : null;

  // Tabs (programmatic .show()) [15]
  const tabButtons = [...document.querySelectorAll('[data-bs-toggle="tab"]')];

  // Modal (programmatic + events) [24][10]
  const modalEl = document.getElementById('demoModal');
  const modal = modalEl ? bootstrap.Modal.getOrCreateInstance(modalEl) : null;
  if (modalEl) {
    modalEl.addEventListener('show.bs.modal', () => console.log('Modal show')); // before shown [25]
    modalEl.addEventListener('shown.bs.modal', () => console.log('Modal shown')); // after transition [25]
    modalEl.addEventListener('hide.bs.modal', () => console.log('Modal hide')); // before hide [25]
    modalEl.addEventListener('hidden.bs.modal', () => console.log('Modal hidden')); // after hide [25]
  }

  // Offcanvas (programmatic + events) [9]
  const offEl = document.getElementById('demoOffcanvas');
  const offcanvas = offEl ? bootstrap.Offcanvas.getOrCreateInstance(offEl) : null;
  if (offEl) {
    offEl.addEventListener('show.bs.offcanvas', () => console.log('Offcanvas show')); // before show [9]
    offEl.addEventListener('shown.bs.offcanvas', () => console.log('Offcanvas shown')); // after transition [9]
    offEl.addEventListener('hide.bs.offcanvas', () => console.log('Offcanvas hide')); // before hide [9]
    offEl.addEventListener('hidden.bs.offcanvas', () => console.log('Offcanvas hidden')); // after hide [9]
  }

  // Wire buttons
  const byId = id => document.getElementById(id);

  byId('btnModal')?.addEventListener('click', () => modal?.show()); // open modal [24]
  byId('btnToast')?.addEventListener('click', () => toast?.show()); // show toast [6]
  byId('btnOffcanvas')?.addEventListener('click', () => offcanvas?.toggle()); // toggle offcanvas [9]
  byId('btnCollapse')?.addEventListener('click', () => collapse?.toggle()); // toggle collapse [23]
  byId('btnTab')?.addEventListener('click', () => {
    if (tabButtons[26]) bootstrap.Tab.getOrCreateInstance(tabButtons[26]).show(); // switch to Profile [15]
  });

  // Alert event example [15]
  document.querySelectorAll('.alert').forEach(el => {
    el.addEventListener('close.bs.alert', () => console.log('Alert close')); // before closed [15]
    el.addEventListener('closed.bs.alert', () => console.log('Alert closed')); // after transition [15]
  });
});
