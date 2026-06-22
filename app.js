/* Elon's Opinions — Finder-style (Miller columns) browser */
(function () {
  "use strict";

  var columnsEl = document.getElementById("columns");
  var searchEl = document.getElementById("search");

  var isLeaf = function (node) { return Array.isArray(node.opinions) && node.opinions.length; };

  // Render one column listing the children of `node`.
  function buildColumn(node, depth, headLabel) {
    var col = document.createElement("div");
    col.className = "column";
    col.dataset.depth = depth;

    var head = document.createElement("div");
    head.className = "col-head";
    head.textContent = headLabel || (depth === 0 ? "Categories" : "Topics");
    col.appendChild(head);

    node.children.forEach(function (child) {
      var row = document.createElement("div");
      row.className = "row";
      row.dataset.id = child.id;

      var label = document.createElement("span");
      label.textContent = child.name;
      row.appendChild(label);

      var chev = document.createElement("span");
      chev.className = "chev";
      chev.textContent = isLeaf(child) ? "•" : "›";
      row.appendChild(chev);

      row.addEventListener("click", function () {
        selectRow(col, row);
        // Remove any columns to the right of this one.
        pruneAfter(depth);
        if (child.children && child.children.length) {
          var next = buildColumn(child, depth + 1);
          columnsEl.appendChild(next);
        } else if (isLeaf(child)) {
          columnsEl.appendChild(buildOpinionPanel(child, depth + 1));
        }
        scrollRight();
      });

      col.appendChild(row);
    });

    return col;
  }

  function buildOpinionPanel(node, depth) {
    var panel = document.createElement("div");
    panel.className = "opinion-col";
    panel.dataset.depth = depth;

    var title = document.createElement("h2");
    title.className = "topic-title";
    title.textContent = node.name;
    panel.appendChild(title);

    var path = document.createElement("p");
    path.className = "topic-path";
    path.innerHTML = "Elon Musk's opinion on <span>" + escapeHtml(node.name) + "</span>";
    panel.appendChild(path);

    node.opinions.forEach(function (op) {
      panel.appendChild(quoteCard(op));
    });

    return panel;
  }

  function quoteCard(op) {
    var card = document.createElement("div");
    card.className = "quote-card";

    var q = document.createElement("p");
    q.className = "quote-text";
    q.textContent = op.quote;
    card.appendChild(q);

    var meta = document.createElement("div");
    meta.className = "quote-meta";

    if (op.context) {
      var ctx = document.createElement("span");
      ctx.className = "quote-context";
      ctx.textContent = op.context;
      meta.appendChild(ctx);
    }

    var attr = document.createElement("div");
    attr.className = "quote-attr";
    if (op.year && op.year !== "—") {
      var pill = document.createElement("span");
      pill.className = "year-pill";
      pill.textContent = op.year;
      attr.appendChild(pill);
    }
    var src = document.createElement("a");
    src.className = "source-link";
    src.href = op.url;
    src.target = "_blank";
    src.rel = "noopener noreferrer";
    src.textContent = "Source: " + op.source + " ↗";
    attr.appendChild(src);
    meta.appendChild(attr);

    card.appendChild(meta);
    return card;
  }

  function placeholder() {
    var p = document.createElement("div");
    p.className = "opinion-col";
    p.dataset.depth = 1; // so it gets pruned when a top-level category is clicked
    p.innerHTML =
      '<div class="placeholder">' +
      '<div class="big">🗂️</div>' +
      "<p>Pick a category on the left, then keep drilling to the right until you reach his actual quote.</p>" +
      "</div>";
    return p;
  }

  // ---- helpers ----
  function selectRow(col, row) {
    Array.prototype.forEach.call(col.querySelectorAll(".row"), function (r) {
      r.classList.remove("active");
    });
    row.classList.add("active");
  }

  function pruneAfter(depth) {
    Array.prototype.slice.call(columnsEl.children).forEach(function (c) {
      if (parseInt(c.dataset.depth, 10) > depth) c.remove();
    });
  }

  function scrollRight() {
    requestAnimationFrame(function () {
      columnsEl.scrollLeft = columnsEl.scrollWidth;
    });
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ---- search ----
  function flattenLeaves(node, trail, out) {
    (node.children || []).forEach(function (child) {
      var t = trail.concat(child.name);
      if (isLeaf(child)) {
        child.opinions.forEach(function (op) {
          out.push({ name: child.name, trail: t, op: op });
        });
      }
      if (child.children) flattenLeaves(child, t, out);
    });
    return out;
  }
  var ALL = flattenLeaves(window.DATA, [], []);

  function runSearch(term) {
    pruneAfter(-1); // clear everything
    term = term.trim().toLowerCase();
    var col = document.createElement("div");
    col.className = "opinion-col";
    col.dataset.depth = 0;

    var matches = ALL.filter(function (m) {
      return (
        m.name.toLowerCase().indexOf(term) > -1 ||
        m.trail.join(" ").toLowerCase().indexOf(term) > -1 ||
        m.op.quote.toLowerCase().indexOf(term) > -1
      );
    });

    var h = document.createElement("h2");
    h.className = "topic-title";
    h.textContent = matches.length + (matches.length === 1 ? " result" : " results") + ' for "' + term + '"';
    col.appendChild(h);

    if (!matches.length) {
      var none = document.createElement("p");
      none.className = "search-empty";
      none.textContent = "No matching opinions. Try a broader term.";
      col.appendChild(none);
    }

    matches.forEach(function (m) {
      var p = document.createElement("p");
      p.className = "topic-path";
      p.innerHTML = m.trail.map(escapeHtml).join(" › ");
      col.appendChild(p);
      col.appendChild(quoteCard(m.op));
    });

    columnsEl.appendChild(col);
  }

  var searchTimer;
  searchEl.addEventListener("input", function () {
    clearTimeout(searchTimer);
    var v = searchEl.value;
    searchTimer = setTimeout(function () {
      if (v.trim()) {
        runSearch(v);
      } else {
        reset();
      }
    }, 120);
  });

  // ---- init ----
  function reset() {
    columnsEl.innerHTML = "";
    columnsEl.appendChild(buildColumn(window.DATA, 0));
    columnsEl.appendChild(placeholder());
  }

  reset();
})();
