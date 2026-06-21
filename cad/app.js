'use strict';

// ═══════════════════════════════════════════════
// BLOCK DEFINITIONS
// ═══════════════════════════════════════════════
const BLOCK_DEFS = {
  SEL3B: {
    label: 'SEL3.B',
    width: 120, height: 140,
    category: 'logic',
    color: '#2563eb', textColor: '#fff',
    ports: {
      inputs: [
        { id: 'BI1', label: 'BI1', y: 0.15 },
        { id: 'BI2', label: 'BI2', y: 0.30 },
        { id: 'BI3', label: 'BI3', y: 0.45 },
        { id: 'IN1V3', label: 'IN1V3', y: 0.60 },
        { id: 'IN2V3', label: 'IN2V3', y: 0.72 },
        { id: 'IN3V3', label: 'IN3V3', y: 0.84 },
        { id: 'INM', label: 'INM', y: 0.95 },
      ],
      outputs: [
        { id: 'OUT', label: '', y: 0.5 },
      ]
    },
    params: { T: '1.0' },
    renderFn: 'renderSEL3B'
  },
  AND2: {
    label: '&',
    width: 60, height: 60,
    category: 'logic',
    color: '#0891b2', textColor: '#fff',
    ports: {
      inputs: [
        { id: 'IN1', label: '', y: 0.33 },
        { id: 'IN2', label: '', y: 0.67 },
      ],
      outputs: [{ id: 'OUT', label: '', y: 0.5 }]
    },
    params: {},
    renderFn: 'renderAND'
  },
  AND3: {
    label: '&',
    width: 60, height: 80,
    category: 'logic',
    color: '#0891b2', textColor: '#fff',
    ports: {
      inputs: [
        { id: 'IN1', label: '', y: 0.2 },
        { id: 'IN2', label: '', y: 0.5 },
        { id: 'IN3', label: '', y: 0.8 },
      ],
      outputs: [{ id: 'OUT', label: '', y: 0.5 }]
    },
    params: {},
    renderFn: 'renderAND'
  },
  OR2: {
    label: '≥1',
    width: 60, height: 60,
    category: 'logic',
    color: '#7c3aed', textColor: '#fff',
    ports: {
      inputs: [
        { id: 'IN1', label: '', y: 0.33 },
        { id: 'IN2', label: '', y: 0.67 },
      ],
      outputs: [{ id: 'OUT', label: '', y: 0.5 }]
    },
    params: {},
    renderFn: 'renderAND'
  },
  NOT: {
    label: '1',
    width: 50, height: 50,
    category: 'logic',
    color: '#7c3aed', textColor: '#fff',
    ports: {
      inputs: [{ id: 'IN', label: '', y: 0.5 }],
      outputs: [{ id: 'OUT', label: '', y: 0.5 }]
    },
    params: {},
    renderFn: 'renderNOT'
  },
  // Signal inputs
  XH03: { label: 'XH03', width: 150, height: 50, category: 'signal-in', color: '#059669', textColor: '#fff', ports: { inputs: [], outputs: [{ id: 'OUT', label: '', y: 0.5 }] }, params: { tag: '', description: '', threshold: '' }, renderFn: 'renderSignalIn' },
  XH05: { label: 'XH05', width: 150, height: 50, category: 'signal-in', color: '#059669', textColor: '#fff', ports: { inputs: [], outputs: [{ id: 'OUT', label: '', y: 0.5 }] }, params: { tag: '', description: '', threshold: '' }, renderFn: 'renderSignalIn' },
  XH53: { label: 'XH53', width: 150, height: 50, category: 'signal-in', color: '#0284c7', textColor: '#fff', ports: { inputs: [], outputs: [{ id: 'OUT', label: '', y: 0.5 }] }, params: { tag: '', description: '', threshold: '' }, renderFn: 'renderSignalIn' },
  XM26: { label: 'XM26', width: 150, height: 50, category: 'signal-in', color: '#d97706', textColor: '#fff', ports: { inputs: [], outputs: [{ id: 'OUT', label: '', y: 0.5 }] }, params: { tag: '', description: '' }, renderFn: 'renderSignalIn' },
  XQ01: { label: 'XQ01', width: 150, height: 50, category: 'signal-in', color: '#475569', textColor: '#fff', ports: { inputs: [], outputs: [{ id: 'OUT', label: '', y: 0.5 }] }, params: { tag: '', description: '' }, renderFn: 'renderSignalIn' },
  // Signal outputs
  XK13: { label: 'XK13', width: 150, height: 50, category: 'signal-out', color: '#dc2626', textColor: '#fff', ports: { inputs: [{ id: 'IN', label: '', y: 0.5 }], outputs: [] }, params: { tag: '', description: 'СРАБ 1 ИЗ 3' }, renderFn: 'renderSignalOut' },
  XK18: { label: 'XK18', width: 150, height: 50, category: 'signal-out', color: '#dc2626', textColor: '#fff', ports: { inputs: [{ id: 'IN', label: '', y: 0.5 }], outputs: [] }, params: { tag: '', description: 'ДЕГР 1 РОДА' }, renderFn: 'renderSignalOut' },
  XK19: { label: 'XK19', width: 150, height: 50, category: 'signal-out', color: '#dc2626', textColor: '#fff', ports: { inputs: [{ id: 'IN', label: '', y: 0.5 }], outputs: [] }, params: { tag: '', description: 'ДЕГР 2 РОДА' }, renderFn: 'renderSignalOut' },
  XK90: { label: 'XK90', width: 150, height: 50, category: 'signal-out', color: '#7f1d1d', textColor: '#fff', ports: { inputs: [{ id: 'IN', label: '', y: 0.5 }], outputs: [] }, params: { tag: '', description: 'ОТКАЗ' }, renderFn: 'renderSignalOut' },
  XK95: { label: 'XK95', width: 150, height: 50, category: 'signal-out', color: '#dc2626', textColor: '#fff', ports: { inputs: [{ id: 'IN', label: '', y: 0.5 }], outputs: [] }, params: { tag: '', description: 'СРАБ' }, renderFn: 'renderSignalOut' },
  VU_SA: {
    label: 'ВУ СА',
    width: 100, height: 50,
    category: 'vu',
    color: '#475569', textColor: '#fff',
    ports: { inputs: [{ id: 'IN', label: '', y: 0.5 }], outputs: [{ id: 'OUT', label: '', y: 0.5 }] },
    params: { sa: '', yp: '' },
    renderFn: 'renderVU'
  },
  COMMENT: {
    label: 'Текст',
    width: 140, height: 40,
    category: 'comment',
    color: '#f8fafc', textColor: '#334155',
    ports: { inputs: [], outputs: [] },
    params: { text: 'Комментарий' },
    renderFn: 'renderComment'
  }
};

// ═══════════════════════════════════════════════
// RENDER FUNCTIONS
// ═══════════════════════════════════════════════
const SVG_NS = 'http://www.w3.org/2000/svg';

function svgEl(tag, attrs = {}) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

function renderSEL3B(block) {
  const g = svgEl('g');
  const def = block.def;
  const w = def.width, h = def.height;
  // Body
  const rect = svgEl('rect', { class: 'block-body', x: 0, y: 0, width: w, height: h, rx: 3, fill: '#fff', stroke: '#2563eb', 'stroke-width': 1.5 });
  g.appendChild(rect);
  // Header
  const header = svgEl('rect', { x: 0, y: 0, width: w, height: 22, rx: 3, fill: '#2563eb' });
  g.appendChild(header);
  const title = svgEl('text', { x: w / 2, y: 15, 'text-anchor': 'middle', fill: '#fff', 'font-size': 10, 'font-weight': 'bold', 'font-family': 'monospace' });
  title.textContent = 'SEL3.B';
  g.appendChild(title);
  // T parameter
  const tLabel = svgEl('text', { x: w / 2, y: h - 5, 'text-anchor': 'middle', fill: '#2563eb', 'font-size': 9, 'font-weight': 'bold' });
  tLabel.textContent = `T: ${block.params.T || '1.0'}`;
  g.appendChild(tLabel);
  // Divider
  g.appendChild(svgEl('line', { x1: 0, y1: h - 16, x2: w, y2: h - 16, stroke: '#dbeafe', 'stroke-width': 1 }));
  return g;
}

function renderAND(block) {
  const g = svgEl('g');
  const def = block.def;
  const w = def.width, h = def.height;
  g.appendChild(svgEl('rect', { class: 'block-body', x: 0, y: 0, width: w, height: h, rx: 3, fill: def.color, stroke: def.color, 'stroke-width': 1.5 }));
  const lbl = svgEl('text', { x: w / 2, y: h / 2 + 5, 'text-anchor': 'middle', fill: def.textColor, 'font-size': 14, 'font-weight': 'bold' });
  lbl.textContent = def.label;
  g.appendChild(lbl);
  return g;
}

function renderNOT(block) {
  const g = svgEl('g');
  const def = block.def;
  const w = def.width, h = def.height;
  g.appendChild(svgEl('rect', { class: 'block-body', x: 0, y: 0, width: w - 8, height: h, rx: 3, fill: def.color, stroke: def.color, 'stroke-width': 1.5 }));
  g.appendChild(svgEl('circle', { cx: w - 4, cy: h / 2, r: 5, fill: '#fff', stroke: def.color, 'stroke-width': 1.5 }));
  const lbl = svgEl('text', { x: (w - 8) / 2, y: h / 2 + 5, 'text-anchor': 'middle', fill: def.textColor, 'font-size': 14, 'font-weight': 'bold' });
  lbl.textContent = '1';
  g.appendChild(lbl);
  return g;
}

function renderSignalIn(block) {
  const g = svgEl('g');
  const def = block.def;
  const w = def.width, h = def.height;
  g.appendChild(svgEl('rect', { class: 'block-body', x: 0, y: 0, width: w, height: h, rx: 3, fill: '#fff', stroke: def.color, 'stroke-width': 1.5 }));
  const header = svgEl('rect', { x: 0, y: 0, width: w, height: 18, rx: 3, fill: def.color });
  g.appendChild(header);
  const typeLabel = svgEl('text', { x: 6, y: 13, fill: '#fff', 'font-size': 9, 'font-weight': 'bold', 'font-family': 'monospace' });
  typeLabel.textContent = def.label;
  g.appendChild(typeLabel);
  // tag
  const tag = block.params.tag || '<тег>';
  const tagEl = svgEl('text', { x: 6, y: 31, fill: '#1e293b', 'font-size': 9, 'font-family': 'monospace', 'font-weight': 'bold' });
  tagEl.textContent = tag.length > 18 ? tag.slice(0, 17) + '…' : tag;
  g.appendChild(tagEl);
  // description
  const desc = block.params.description || '';
  const descEl = svgEl('text', { x: 6, y: 43, fill: '#475569', 'font-size': 8 });
  descEl.textContent = desc.length > 20 ? desc.slice(0, 19) + '…' : desc;
  g.appendChild(descEl);
  // threshold badge
  if (block.params.threshold) {
    const th = svgEl('text', { x: w - 4, y: 13, fill: '#fff', 'font-size': 8, 'text-anchor': 'end', 'font-family': 'monospace' });
    th.textContent = block.params.threshold;
    g.appendChild(th);
  }
  return g;
}

function renderSignalOut(block) {
  const g = svgEl('g');
  const def = block.def;
  const w = def.width, h = def.height;
  g.appendChild(svgEl('rect', { class: 'block-body', x: 0, y: 0, width: w, height: h, rx: 3, fill: '#fff', stroke: def.color, 'stroke-width': 1.5 }));
  const header = svgEl('rect', { x: 0, y: 0, width: w, height: 18, rx: 3, fill: def.color });
  g.appendChild(header);
  const typeLabel = svgEl('text', { x: 6, y: 13, fill: '#fff', 'font-size': 9, 'font-weight': 'bold', 'font-family': 'monospace' });
  typeLabel.textContent = `ОТКЛ ${def.label}`;
  g.appendChild(typeLabel);
  const tag = block.params.tag || '';
  if (tag) {
    const tagEl = svgEl('text', { x: 6, y: 31, fill: '#1e293b', 'font-size': 9, 'font-family': 'monospace', 'font-weight': 'bold' });
    tagEl.textContent = tag.length > 18 ? tag.slice(0, 17) + '…' : tag;
    g.appendChild(tagEl);
  }
  const desc = block.params.description || '';
  const descEl = svgEl('text', { x: 6, y: tag ? 43 : 34, fill: '#475569', 'font-size': 8 });
  descEl.textContent = desc;
  g.appendChild(descEl);
  return g;
}

function renderVU(block) {
  const g = svgEl('g');
  const def = block.def;
  const w = def.width, h = def.height;
  g.appendChild(svgEl('rect', { class: 'block-body', x: 0, y: 0, width: w, height: h, rx: 3, fill: '#fff', stroke: '#475569', 'stroke-width': 1.5 }));
  const header = svgEl('rect', { x: 0, y: 0, width: w, height: 18, rx: 3, fill: '#475569' });
  g.appendChild(header);
  const lbl = svgEl('text', { x: w / 2, y: 13, 'text-anchor': 'middle', fill: '#fff', 'font-size': 9, 'font-weight': 'bold' });
  lbl.textContent = 'ВУ СА';
  g.appendChild(lbl);
  const sa = svgEl('text', { x: 6, y: 31, fill: '#1e293b', 'font-size': 8, 'font-family': 'monospace' });
  sa.textContent = block.params.sa || '';
  g.appendChild(sa);
  const yp = svgEl('text', { x: 6, y: 43, fill: '#475569', 'font-size': 8, 'font-family': 'monospace' });
  yp.textContent = block.params.yp ? `СВБУ ${block.params.yp}` : '';
  g.appendChild(yp);
  return g;
}

function renderComment(block) {
  const g = svgEl('g');
  const def = block.def;
  const w = def.width, h = def.height;
  g.appendChild(svgEl('rect', { class: 'block-body', x: 0, y: 0, width: w, height: h, rx: 3, fill: '#fffbeb', stroke: '#fbbf24', 'stroke-width': 1, 'stroke-dasharray': '4,2' }));
  const txt = svgEl('text', { x: 6, y: h / 2 + 4, fill: '#92400e', 'font-size': 11, 'font-style': 'italic' });
  txt.textContent = block.params.text || '';
  g.appendChild(txt);
  return g;
}

const RENDER_FNS = { renderSEL3B, renderAND, renderNOT, renderSignalIn, renderSignalOut, renderVU, renderComment };

// ═══════════════════════════════════════════════
// CAD APPLICATION
// ═══════════════════════════════════════════════
class FimaticCAD {
  constructor() {
    this.blocks = new Map();   // id -> block
    this.connections = new Map(); // id -> connection
    this.selected = new Set(); // selected block ids
    this.mode = 'select';      // select | connect | delete
    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
    this.history = [];
    this.historyIndex = -1;
    this.idCounter = 1;

    // drag state
    this.dragging = null;
    this.dragOffX = 0;
    this.dragOffY = 0;
    this.isPanning = false;
    this.panStartX = 0;
    this.panStartY = 0;

    // connect state
    this.connectStart = null; // { blockId, portId, portType, x, y }

    this.initDOM();
    this.bindEvents();
    this.render();
  }

  // ── Init ──
  initDOM() {
    this.svg = document.getElementById('canvas');
    this.blocksLayer = document.getElementById('blocks-layer');
    this.connectionsLayer = document.getElementById('connections-layer');
    this.tempWire = document.getElementById('temp-wire');
    this.gridBg = document.getElementById('grid-bg');
    this.propsContent = document.getElementById('props-content');
    this.statusMode = document.getElementById('status-mode');
    this.statusPos = document.getElementById('status-pos');
    this.statusZoom = document.getElementById('status-zoom');
    this.statusBlocks = document.getElementById('status-blocks');
    this.contextMenu = document.getElementById('context-menu');
  }

  // ── Events ──
  bindEvents() {
    // Toolbar buttons
    document.getElementById('btn-new').onclick = () => this.newDocument();
    document.getElementById('btn-save').onclick = () => this.save();
    document.getElementById('btn-open').onclick = () => document.getElementById('file-input').click();
    document.getElementById('file-input').onchange = (e) => this.open(e.target.files[0]);
    document.getElementById('btn-export-svg').onclick = () => this.exportSVG();
    document.getElementById('btn-export-pdf').onclick = () => this.exportPDF();
    document.getElementById('btn-undo').onclick = () => this.undo();
    document.getElementById('btn-redo').onclick = () => this.redo();
    document.getElementById('btn-zoom-in').onclick = () => this.setZoom(this.zoom * 1.2);
    document.getElementById('btn-zoom-out').onclick = () => this.setZoom(this.zoom / 1.2);
    document.getElementById('btn-zoom-fit').onclick = () => this.zoomFit();
    document.getElementById('btn-select').onclick = () => this.setMode('select');
    document.getElementById('btn-connect').onclick = () => this.setMode('connect');
    document.getElementById('btn-delete').onclick = () => this.setMode('delete');

    // Context menu
    document.getElementById('cm-properties').onclick = () => this.hideContextMenu();
    document.getElementById('cm-duplicate').onclick = () => { this.duplicateSelected(); this.hideContextMenu(); };
    document.getElementById('cm-delete').onclick = () => { this.deleteSelected(); this.hideContextMenu(); };

    // Canvas events
    this.svg.addEventListener('mousedown', (e) => this.onCanvasMouseDown(e));
    this.svg.addEventListener('mousemove', (e) => this.onCanvasMouseMove(e));
    this.svg.addEventListener('mouseup', (e) => this.onCanvasMouseUp(e));
    this.svg.addEventListener('wheel', (e) => this.onWheel(e), { passive: false });
    this.svg.addEventListener('contextmenu', (e) => this.onContextMenu(e));
    document.addEventListener('click', () => this.hideContextMenu());

    // Palette drag
    document.querySelectorAll('.palette-block').forEach(el => {
      el.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('blockType', el.dataset.type);
      });
    });
    this.svg.addEventListener('dragover', (e) => e.preventDefault());
    this.svg.addEventListener('drop', (e) => this.onDrop(e));

    // Keyboard
    document.addEventListener('keydown', (e) => this.onKeyDown(e));

    // Window resize
    window.addEventListener('resize', () => this.updateGridPattern());
  }

  // ── Coordinate transforms ──
  svgPoint(e) {
    const rect = this.svg.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left - this.panX) / this.zoom,
      y: (e.clientY - rect.top - this.panY) / this.zoom
    };
  }

  clientToSVG(cx, cy) {
    const rect = this.svg.getBoundingClientRect();
    return {
      x: (cx - rect.left - this.panX) / this.zoom,
      y: (cy - rect.top - this.panY) / this.zoom
    };
  }

  snapToGrid(v, size = 10) { return Math.round(v / size) * size; }

  // ── Mode ──
  setMode(m) {
    this.mode = m;
    ['select', 'connect', 'delete'].forEach(mode => {
      document.getElementById(`btn-${mode}`).classList.toggle('active', mode === m);
    });
    this.svg.className.baseVal = m === 'connect' ? 'mode-connect' : m === 'delete' ? 'mode-delete' : '';
    this.statusMode.textContent = `Режим: ${{ select: 'Выбор', connect: 'Соединение', delete: 'Удаление' }[m]}`;
    if (m !== 'connect') {
      this.connectStart = null;
      this.tempWire.setAttribute('display', 'none');
    }
  }

  // ── Canvas mouse events ──
  onCanvasMouseDown(e) {
    if (e.button === 1 || (e.button === 0 && e.altKey)) {
      // Pan
      this.isPanning = true;
      this.panStartX = e.clientX - this.panX;
      this.panStartY = e.clientY - this.panY;
      e.preventDefault();
      return;
    }
    if (e.button !== 0) return;

    const pt = this.svgPoint(e);
    const hit = this.hitTest(pt.x, pt.y);

    if (this.mode === 'delete') {
      if (hit) {
        this.removeBlock(hit.blockId);
        this.pushHistory();
      }
      return;
    }

    if (this.mode === 'connect') {
      if (hit && hit.port) {
        this.startConnect(hit, pt);
      }
      return;
    }

    // select mode
    if (hit) {
      if (hit.port) {
        // start connect from select mode too
        this.startConnect(hit, pt);
        return;
      }
      // select block
      if (!e.shiftKey && !this.selected.has(hit.blockId)) {
        this.selected.clear();
      }
      this.selected.add(hit.blockId);
      this.dragging = hit.blockId;
      const block = this.blocks.get(hit.blockId);
      this.dragOffX = pt.x - block.x;
      this.dragOffY = pt.y - block.y;
      this.updateSelection();
      this.showProperties(hit.blockId);
    } else {
      // click on canvas — deselect
      this.selected.clear();
      this.updateSelection();
      this.showProperties(null);
      // start panning
      this.isPanning = true;
      this.panStartX = e.clientX - this.panX;
      this.panStartY = e.clientY - this.panY;
    }
  }

  startConnect(hit, pt) {
    if (!this.connectStart) {
      this.connectStart = { blockId: hit.blockId, portId: hit.port.id, portType: hit.port.type };
      const pos = this.getPortPos(hit.blockId, hit.port.id, hit.port.type);
      this.tempWire.setAttribute('x1', pos.x);
      this.tempWire.setAttribute('y1', pos.y);
      this.tempWire.setAttribute('x2', pos.x);
      this.tempWire.setAttribute('y2', pos.y);
      this.tempWire.setAttribute('display', '');
    } else {
      // finish connection
      if (hit.blockId !== this.connectStart.blockId) {
        const from = this.connectStart.portType === 'output' ? this.connectStart : hit;
        const to = this.connectStart.portType === 'output' ? hit : this.connectStart;
        if (from.portType === 'output' && to.portType === 'input') {
          this.addConnection(from.blockId, from.portId, to.blockId, to.portId);
          this.pushHistory();
        }
      }
      this.connectStart = null;
      this.tempWire.setAttribute('display', 'none');
    }
  }

  onCanvasMouseMove(e) {
    const pt = this.svgPoint(e);
    this.statusPos.textContent = `X: ${Math.round(pt.x)}, Y: ${Math.round(pt.y)}`;

    if (this.isPanning) {
      this.panX = e.clientX - this.panStartX;
      this.panY = e.clientY - this.panStartY;
      this.applyTransform();
      return;
    }

    if (this.dragging) {
      const block = this.blocks.get(this.dragging);
      block.x = this.snapToGrid(pt.x - this.dragOffX);
      block.y = this.snapToGrid(pt.y - this.dragOffY);
      this.updateBlockElement(this.dragging);
      this.updateConnectionsForBlock(this.dragging);
      return;
    }

    if (this.connectStart) {
      this.tempWire.setAttribute('x2', pt.x);
      this.tempWire.setAttribute('y2', pt.y);
    }
  }

  onCanvasMouseUp(e) {
    if (this.isPanning) {
      this.isPanning = false;
      return;
    }
    if (this.dragging) {
      this.pushHistory();
      this.dragging = null;
    }
  }

  onWheel(e) {
    e.preventDefault();
    const rect = this.svg.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const delta = e.deltaY < 0 ? 1.1 : 0.9;
    const newZoom = Math.min(4, Math.max(0.1, this.zoom * delta));
    this.panX = mouseX - (mouseX - this.panX) * (newZoom / this.zoom);
    this.panY = mouseY - (mouseY - this.panY) * (newZoom / this.zoom);
    this.zoom = newZoom;
    this.applyTransform();
    this.statusZoom.textContent = `Масштаб: ${Math.round(this.zoom * 100)}%`;
  }

  onContextMenu(e) {
    e.preventDefault();
    const pt = this.svgPoint(e);
    const hit = this.hitTest(pt.x, pt.y);
    if (hit) {
      this.selected.add(hit.blockId);
      this.updateSelection();
      this.contextMenu.style.left = e.clientX + 'px';
      this.contextMenu.style.top = e.clientY + 'px';
      this.contextMenu.classList.remove('hidden');
    }
  }

  hideContextMenu() { this.contextMenu.classList.add('hidden'); }

  onDrop(e) {
    e.preventDefault();
    const type = e.dataTransfer.getData('blockType');
    if (!type || !BLOCK_DEFS[type]) return;
    const pt = this.clientToSVG(e.clientX, e.clientY);
    this.addBlock(type, this.snapToGrid(pt.x - BLOCK_DEFS[type].width / 2), this.snapToGrid(pt.y - BLOCK_DEFS[type].height / 2));
    this.pushHistory();
  }

  onKeyDown(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'Delete' || e.key === 'Backspace') { this.deleteSelected(); this.pushHistory(); }
    if (e.key === 'v' || e.key === 'V') this.setMode('select');
    if (e.key === 'c' || e.key === 'C') this.setMode('connect');
    if (e.key === 'Escape') { this.connectStart = null; this.tempWire.setAttribute('display', 'none'); this.setMode('select'); }
    if (e.ctrlKey && e.key === 'z') { e.preventDefault(); this.undo(); }
    if (e.ctrlKey && e.key === 'y') { e.preventDefault(); this.redo(); }
    if (e.ctrlKey && e.key === 's') { e.preventDefault(); this.save(); }
    if (e.key === 'f' || e.key === 'F') this.zoomFit();
    if (e.key === '+' || e.key === '=') this.setZoom(this.zoom * 1.2);
    if (e.key === '-') this.setZoom(this.zoom / 1.2);
    if (e.ctrlKey && e.key === 'd') { e.preventDefault(); this.duplicateSelected(); }
  }

  // ── Hit testing ──
  hitTest(x, y) {
    // Test ports first
    for (const [id, block] of this.blocks) {
      const def = block.def;
      for (const p of def.ports.outputs) {
        const pos = this.getPortPos(id, p.id, 'output');
        if (Math.hypot(x - pos.x, y - pos.y) < 8) return { blockId: id, port: { id: p.id, type: 'output' } };
      }
      for (const p of def.ports.inputs) {
        const pos = this.getPortPos(id, p.id, 'input');
        if (Math.hypot(x - pos.x, y - pos.y) < 8) return { blockId: id, port: { id: p.id, type: 'input' } };
      }
    }
    // Test blocks
    for (const [id, block] of [...this.blocks].reverse()) {
      if (x >= block.x && x <= block.x + block.def.width && y >= block.y && y <= block.y + block.def.height) {
        return { blockId: id };
      }
    }
    return null;
  }

  getPortPos(blockId, portId, portType) {
    const block = this.blocks.get(blockId);
    const def = block.def;
    const ports = portType === 'output' ? def.ports.outputs : def.ports.inputs;
    const port = ports.find(p => p.id === portId);
    if (!port) return { x: block.x, y: block.y };
    const py = port.y !== undefined ? block.y + port.y * def.height : block.y + def.height / 2;
    const px = portType === 'output' ? block.x + def.width : block.x;
    return { x: px, y: py };
  }

  // ── Block management ──
  addBlock(type, x = 100, y = 100) {
    const id = `b${this.idCounter++}`;
    const def = BLOCK_DEFS[type];
    const block = {
      id, type, x, y, def,
      params: JSON.parse(JSON.stringify(def.params || {}))
    };
    this.blocks.set(id, block);
    this.renderBlock(id);
    this.statusBlocks.textContent = `Блоков: ${this.blocks.size}`;
    return id;
  }

  removeBlock(id) {
    // Remove connected wires
    for (const [cid, conn] of [...this.connections]) {
      if (conn.fromBlock === id || conn.toBlock === id) {
        this.connections.delete(cid);
        document.getElementById(`conn-${cid}`)?.remove();
      }
    }
    document.getElementById(`block-${id}`)?.remove();
    this.blocks.delete(id);
    this.selected.delete(id);
    this.statusBlocks.textContent = `Блоков: ${this.blocks.size}`;
  }

  deleteSelected() {
    for (const id of this.selected) this.removeBlock(id);
    this.selected.clear();
    this.showProperties(null);
  }

  duplicateSelected() {
    const newSelected = new Set();
    for (const id of this.selected) {
      const block = this.blocks.get(id);
      const newId = this.addBlock(block.type, block.x + 20, block.y + 20);
      const newBlock = this.blocks.get(newId);
      newBlock.params = JSON.parse(JSON.stringify(block.params));
      this.updateBlockElement(newId);
      newSelected.add(newId);
    }
    this.selected = newSelected;
    this.updateSelection();
    this.pushHistory();
  }

  // ── Connection management ──
  addConnection(fromBlock, fromPort, toBlock, toPort) {
    // check duplicate
    for (const conn of this.connections.values()) {
      if (conn.fromBlock === fromBlock && conn.fromPort === fromPort &&
          conn.toBlock === toBlock && conn.toPort === toPort) return;
    }
    const id = `c${this.idCounter++}`;
    const conn = { id, fromBlock, fromPort, toBlock, toPort };
    this.connections.set(id, conn);
    this.renderConnection(id);
    return id;
  }

  removeConnection(id) {
    this.connections.delete(id);
    document.getElementById(`conn-${id}`)?.remove();
  }

  // ── Rendering ──
  renderBlock(id) {
    const block = this.blocks.get(id);
    const def = block.def;

    const g = svgEl('g', { id: `block-${id}`, class: 'block-group', transform: `translate(${block.x},${block.y})` });
    g.dataset.id = id;

    // render body
    const bodyFn = RENDER_FNS[def.renderFn];
    const body = bodyFn(block);
    g.appendChild(body);

    // render port labels & dots
    const portDotR = 4;
    const allPorts = [
      ...def.ports.inputs.map(p => ({ ...p, type: 'input' })),
      ...def.ports.outputs.map(p => ({ ...p, type: 'output' }))
    ];
    for (const port of allPorts) {
      const py = port.y * def.height;
      const px = port.type === 'output' ? def.width : 0;
      const dot = svgEl('circle', {
        class: 'block-port-dot',
        cx: px, cy: py, r: portDotR,
        fill: '#fff', stroke: '#64748b', 'stroke-width': 1.5,
        'data-port': port.id, 'data-port-type': port.type
      });
      g.appendChild(dot);
      if (port.label) {
        const lx = port.type === 'output' ? px - 5 : px + 5;
        const anchor = port.type === 'output' ? 'end' : 'start';
        const lbl = svgEl('text', { x: lx, y: py + 4, 'text-anchor': anchor, fill: '#374151', 'font-size': 8, 'font-family': 'monospace', 'pointer-events': 'none' });
        lbl.textContent = port.label;
        g.appendChild(lbl);
      }
    }

    // click to select
    g.addEventListener('mousedown', (e) => { e.stopPropagation(); });
    this.blocksLayer.appendChild(g);
  }

  updateBlockElement(id) {
    const el = document.getElementById(`block-${id}`);
    if (!el) return;
    const block = this.blocks.get(id);
    el.setAttribute('transform', `translate(${block.x},${block.y})`);

    // re-render internals for param changes
    const oldBody = el.querySelector(':not(.block-port-dot):not(text[data-port-label])');
  }

  reRenderBlock(id) {
    const el = document.getElementById(`block-${id}`);
    if (el) el.remove();
    this.renderBlock(id);
    if (this.selected.has(id)) {
      document.getElementById(`block-${id}`)?.classList.add('selected');
    }
  }

  renderConnection(id) {
    const conn = this.connections.get(id);
    const from = this.getPortPos(conn.fromBlock, conn.fromPort, 'output');
    const to = this.getPortPos(conn.toBlock, conn.toPort, 'input');
    const path = this.connectionPath(from, to);

    const el = svgEl('path', {
      id: `conn-${id}`,
      d: path,
      fill: 'none',
      stroke: '#2563eb',
      'stroke-width': 1.5,
      'marker-end': 'url(#arrow-end)',
      'data-conn': id
    });
    el.addEventListener('click', (e) => {
      if (this.mode === 'delete') {
        this.removeConnection(id);
        this.pushHistory();
        e.stopPropagation();
      }
    });
    el.style.cursor = 'pointer';
    this.connectionsLayer.appendChild(el);
  }

  connectionPath(from, to) {
    const dx = Math.abs(to.x - from.x);
    const cpOffset = Math.max(dx * 0.5, 40);
    return `M ${from.x} ${from.y} C ${from.x + cpOffset} ${from.y}, ${to.x - cpOffset} ${to.y}, ${to.x} ${to.y}`;
  }

  updateConnectionsForBlock(blockId) {
    for (const [id, conn] of this.connections) {
      if (conn.fromBlock === blockId || conn.toBlock === blockId) {
        const el = document.getElementById(`conn-${id}`);
        if (el) {
          const from = this.getPortPos(conn.fromBlock, conn.fromPort, 'output');
          const to = this.getPortPos(conn.toBlock, conn.toPort, 'input');
          el.setAttribute('d', this.connectionPath(from, to));
        }
      }
    }
  }

  updateSelection() {
    document.querySelectorAll('.block-group').forEach(el => {
      el.classList.toggle('selected', this.selected.has(el.dataset.id));
    });
  }

  // ── Properties panel ──
  showProperties(blockId) {
    if (!blockId) {
      this.propsContent.innerHTML = '<div class="props-hint">Выберите блок для редактирования свойств</div>';
      return;
    }
    const block = this.blocks.get(blockId);
    if (!block) return;
    const def = block.def;

    let html = `<div class="prop-section">${def.label}</div>`;
    html += `<div class="prop-group"><div class="prop-label">Тип</div><div style="font-size:11px;color:#64748b">${block.type}</div></div>`;
    html += `<div class="prop-row"><div class="prop-group"><div class="prop-label">X</div><input class="prop-input" id="prop-x" type="number" value="${block.x}"></div><div class="prop-group"><div class="prop-label">Y</div><input class="prop-input" id="prop-y" type="number" value="${block.y}"></div></div>`;

    // Dynamic params
    for (const [key, val] of Object.entries(block.params)) {
      const isTextarea = key === 'description' || key === 'text';
      html += `<div class="prop-group"><div class="prop-label">${key.toUpperCase()}</div>`;
      if (isTextarea) {
        html += `<textarea class="prop-textarea prop-param" data-key="${key}">${val}</textarea>`;
      } else {
        html += `<input class="prop-input prop-param" data-key="${key}" value="${val}">`;
      }
      html += `</div>`;
    }
    html += `<button class="prop-btn danger" id="prop-delete">Удалить блок</button>`;

    this.propsContent.innerHTML = html;

    // bind
    document.getElementById('prop-x').onchange = (e) => { block.x = +e.target.value; this.updateBlockElement(blockId); this.updateConnectionsForBlock(blockId); };
    document.getElementById('prop-y').onchange = (e) => { block.y = +e.target.value; this.updateBlockElement(blockId); this.updateConnectionsForBlock(blockId); };
    document.querySelectorAll('.prop-param').forEach(el => {
      el.addEventListener('input', () => {
        block.params[el.dataset.key] = el.value;
        this.reRenderBlock(blockId);
        this.updateConnectionsForBlock(blockId);
        this.pushHistory();
      });
    });
    document.getElementById('prop-delete').onclick = () => { this.removeBlock(blockId); this.showProperties(null); this.pushHistory(); };
  }

  // ── Transform ──
  applyTransform() {
    this.blocksLayer.setAttribute('transform', `translate(${this.panX},${this.panY}) scale(${this.zoom})`);
    this.connectionsLayer.setAttribute('transform', `translate(${this.panX},${this.panY}) scale(${this.zoom})`);
    this.tempWire.setAttribute('transform', `translate(${this.panX},${this.panY}) scale(${this.zoom})`);
    this.updateGridPattern();
  }

  updateGridPattern() {
    const gridSize = 20 * this.zoom;
    const pattern = document.getElementById('grid');
    pattern.setAttribute('width', gridSize);
    pattern.setAttribute('height', gridSize);
    pattern.setAttribute('x', this.panX % gridSize);
    pattern.setAttribute('y', this.panY % gridSize);
  }

  setZoom(z) {
    const rect = this.svg.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const newZoom = Math.min(4, Math.max(0.1, z));
    this.panX = cx - (cx - this.panX) * (newZoom / this.zoom);
    this.panY = cy - (cy - this.panY) * (newZoom / this.zoom);
    this.zoom = newZoom;
    this.applyTransform();
    this.statusZoom.textContent = `Масштаб: ${Math.round(this.zoom * 100)}%`;
  }

  zoomFit() {
    if (this.blocks.size === 0) return;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const block of this.blocks.values()) {
      minX = Math.min(minX, block.x);
      minY = Math.min(minY, block.y);
      maxX = Math.max(maxX, block.x + block.def.width);
      maxY = Math.max(maxY, block.y + block.def.height);
    }
    const rect = this.svg.getBoundingClientRect();
    const pad = 40;
    const zx = (rect.width - pad * 2) / (maxX - minX);
    const zy = (rect.height - pad * 2) / (maxY - minY);
    this.zoom = Math.min(4, Math.max(0.1, Math.min(zx, zy)));
    this.panX = pad - minX * this.zoom;
    this.panY = pad - minY * this.zoom;
    this.applyTransform();
    this.statusZoom.textContent = `Масштаб: ${Math.round(this.zoom * 100)}%`;
  }

  // ── History ──
  serialize() {
    return JSON.stringify({
      blocks: [...this.blocks.entries()].map(([id, b]) => ({ id, type: b.type, x: b.x, y: b.y, params: b.params })),
      connections: [...this.connections.entries()].map(([id, c]) => ({ ...c })),
      idCounter: this.idCounter
    });
  }

  deserialize(json) {
    const data = typeof json === 'string' ? JSON.parse(json) : json;
    this.blocksLayer.innerHTML = '';
    this.connectionsLayer.innerHTML = '';
    this.blocks.clear();
    this.connections.clear();
    this.selected.clear();
    this.idCounter = data.idCounter || 1;

    for (const b of data.blocks) {
      const def = BLOCK_DEFS[b.type];
      if (!def) continue;
      const block = { id: b.id, type: b.type, x: b.x, y: b.y, def, params: b.params };
      this.blocks.set(b.id, block);
      this.renderBlock(b.id);
    }
    for (const c of data.connections) {
      this.connections.set(c.id, c);
      this.renderConnection(c.id);
    }
    this.statusBlocks.textContent = `Блоков: ${this.blocks.size}`;
  }

  pushHistory() {
    const state = this.serialize();
    this.history = this.history.slice(0, this.historyIndex + 1);
    this.history.push(state);
    if (this.history.length > 100) this.history.shift();
    this.historyIndex = this.history.length - 1;
  }

  undo() {
    if (this.historyIndex <= 0) return;
    this.historyIndex--;
    this.deserialize(this.history[this.historyIndex]);
  }

  redo() {
    if (this.historyIndex >= this.history.length - 1) return;
    this.historyIndex++;
    this.deserialize(this.history[this.historyIndex]);
  }

  // ── Document ops ──
  newDocument() {
    if (!confirm('Создать новый документ? Несохранённые изменения будут потеряны.')) return;
    this.blocksLayer.innerHTML = '';
    this.connectionsLayer.innerHTML = '';
    this.blocks.clear();
    this.connections.clear();
    this.selected.clear();
    this.idCounter = 1;
    this.history = [];
    this.historyIndex = -1;
    this.statusBlocks.textContent = 'Блоков: 0';
    this.showProperties(null);
    this.pushHistory();
  }

  save() {
    const data = this.serialize();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'scheme.fcd';
    a.click();
    URL.revokeObjectURL(url);
  }

  open(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        this.deserialize(e.target.result);
        this.pushHistory();
        this.zoomFit();
      } catch (err) {
        alert('Ошибка открытия файла: ' + err.message);
      }
    };
    reader.readAsText(file);
  }

  exportSVG() {
    const svgEl2 = this.svg.cloneNode(true);
    svgEl2.removeAttribute('id');
    // embed styles
    const style = document.createElement('style');
    style.textContent = `
      .block-group.selected .block-body { stroke: #2563eb; stroke-width: 2; }
      text { font-family: 'Segoe UI', system-ui, sans-serif; }
    `;
    svgEl2.insertBefore(style, svgEl2.firstChild);
    const blob = new Blob([svgEl2.outerHTML], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'scheme.svg';
    a.click();
    URL.revokeObjectURL(url);
  }

  exportPDF() {
    window.print();
  }

  render() {
    this.pushHistory();
    this.applyTransform();
    this.updateGridPattern();
  }
}

// ── Bootstrap ──
window.addEventListener('DOMContentLoaded', () => {
  window.cad = new FimaticCAD();
});
