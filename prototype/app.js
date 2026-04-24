const storageKey = "pm-prototype-state";

const initialState = {
  user: null,
  isSidebarCollapsed: false,
  isProjectMenuExpanded: true,
  openTabs: ["项目概况"],
  activeTab: "项目概况",
  selectedTreeNodeId: "node-project-oa-v23",
  search: {
    name: "",
    version: "",
    manager: "",
    department: "",
  },
  filtersApplied: false,
  modals: {
    projectForm: { open: false, mode: "create", projectId: null, error: "" },
    confirmDeleteProject: { open: false, projectId: null },
    confirmDeleteDoc: { open: false, docId: null },
    preview: { open: false, docId: null },
    uploadHint: { open: false, scope: "doc" },
  },
  draftProject: null,
  projectDraftDocs: [],
  documents: [
    {
      id: "doc-1",
      name: "项目管理系统需求说明书V2.3.pdf",
      projectName: "项目管理系统",
      version: "V2.3",
      manager: "张婷",
      department: "产品中心",
      uploader: "系统管理员",
      updatedAt: "2026-04-23 14:20",
      format: "pdf",
      nodeId: "node-project-oa-v23",
      previewable: true,
      summary: "最新版需求说明书，涵盖项目概况与需求文档管理模块。",
    },
    {
      id: "doc-2",
      name: "高保真原型说明.pptx",
      projectName: "项目管理系统",
      version: "V2.3",
      manager: "张婷",
      department: "产品中心",
      uploader: "系统管理员",
      updatedAt: "2026-04-23 10:18",
      format: "ppt",
      nodeId: "node-project-oa-v23-prd",
      previewable: true,
      summary: "迭代二原型宣讲稿，可用于评审会预览。",
    },
    {
      id: "doc-3",
      name: "接口字段字典.xlsx",
      projectName: "项目管理系统",
      version: "V2.3",
      manager: "张婷",
      department: "产品中心",
      uploader: "陈飞",
      updatedAt: "2026-04-22 19:45",
      format: "excel",
      nodeId: "node-project-oa-v23-api",
      previewable: true,
      summary: "接口和数据字段定义，包含状态枚举。",
    },
    {
      id: "doc-4",
      name: "历史需求压缩包.zip",
      projectName: "项目管理系统",
      version: "V2.3",
      manager: "张婷",
      department: "产品中心",
      uploader: "陈飞",
      updatedAt: "2026-04-21 16:30",
      format: "zip",
      nodeId: "node-project-oa-v23-archive",
      previewable: false,
      summary: "",
    },
    {
      id: "doc-5",
      name: "CRM二期需求.docx",
      projectName: "CRM升级项目",
      version: "V1.8",
      manager: "李明",
      department: "销售支持部",
      uploader: "王可",
      updatedAt: "2026-04-20 11:05",
      format: "word",
      nodeId: "node-crm-v18",
      previewable: true,
      summary: "CRM 二期范围、流程改造点与验收标准。",
    },
    {
      id: "doc-6",
      name: "实施培训材料.html",
      projectName: "CRM升级项目",
      version: "V1.8",
      manager: "李明",
      department: "销售支持部",
      uploader: "王可",
      updatedAt: "2026-04-20 09:40",
      format: "html",
      nodeId: "node-crm-v18-training",
      previewable: true,
      summary: "HTML 培训手册，可直接在浏览器预览。",
    },
  ],
  projects: [
    {
      id: "project-1",
      name: "项目管理系统",
      version: "V2.3",
      manager: "张婷",
      department: "产品中心",
      description: "统一管理项目主数据、需求文档目录与文件资产，支持跨页跳转与目录定位。",
      docNodeId: "node-project-oa-v23",
      docIds: ["doc-1", "doc-2", "doc-3", "doc-4"],
    },
    {
      id: "project-2",
      name: "CRM升级项目",
      version: "V1.8",
      manager: "李明",
      department: "销售支持部",
      description: "升级客户生命周期管理流程，并规范销售支持资料沉淀。",
      docNodeId: "node-crm-v18",
      docIds: ["doc-5", "doc-6"],
    },
    {
      id: "project-3",
      name: "数据治理平台",
      version: "V3.0",
      manager: "周楠",
      department: "数据中台",
      description: "建立数据标准、治理规范及平台功能说明。",
      docNodeId: "node-data-v30",
      docIds: [],
    },
  ],
  tree: [
    {
      id: "node-project-oa",
      type: "project",
      label: "项目管理系统",
      parentId: null,
      expanded: true,
    },
    {
      id: "node-project-oa-v23",
      type: "version",
      label: "V2.3",
      parentId: "node-project-oa",
      expanded: true,
    },
    {
      id: "node-project-oa-v23-prd",
      type: "folder",
      label: "PRD文档",
      parentId: "node-project-oa-v23",
      expanded: true,
    },
    {
      id: "node-project-oa-v23-api",
      type: "folder",
      label: "接口资料",
      parentId: "node-project-oa-v23",
      expanded: true,
    },
    {
      id: "node-project-oa-v23-archive",
      type: "folder",
      label: "历史归档",
      parentId: "node-project-oa-v23",
      expanded: true,
    },
    {
      id: "node-crm",
      type: "project",
      label: "CRM升级项目",
      parentId: null,
      expanded: true,
    },
    {
      id: "node-crm-v18",
      type: "version",
      label: "V1.8",
      parentId: "node-crm",
      expanded: true,
    },
    {
      id: "node-crm-v18-training",
      type: "folder",
      label: "培训资料",
      parentId: "node-crm-v18",
      expanded: true,
    },
    {
      id: "node-data",
      type: "project",
      label: "数据治理平台",
      parentId: null,
      expanded: true,
    },
    {
      id: "node-data-v30",
      type: "version",
      label: "V3.0",
      parentId: "node-data",
      expanded: true,
    },
    {
      id: "node-data-v30-spec",
      type: "folder",
      label: "规范目录",
      parentId: "node-data-v30",
      expanded: true,
    },
  ],
};

let state = loadState();

function loadState() {
  const saved = window.localStorage.getItem(storageKey);
  if (!saved) return structuredClone(initialState);
  try {
    return { ...structuredClone(initialState), ...JSON.parse(saved) };
  } catch {
    return structuredClone(initialState);
  }
}

function saveState() {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
}

function resetDraftProject(mode = "create", projectId = null) {
  const project = state.projects.find((item) => item.id === projectId);
  if (project) {
    state.draftProject = {
      id: project.id,
      name: project.name,
      version: project.version,
      manager: project.manager,
      department: project.department,
      description: project.description,
      docNodeId: project.docNodeId,
    };
    state.projectDraftDocs = getDocsForProject(project).map((doc) => ({
      id: doc.id,
      name: doc.name,
      existing: true,
    }));
  } else {
    state.draftProject = {
      id: null,
      name: "",
      version: "",
      manager: "",
      department: "",
      description: "",
      docNodeId: "",
    };
    state.projectDraftDocs = [];
  }
  state.modals.projectForm = { open: true, mode, projectId, error: "" };
}

function render() {
  saveState();
  const app = document.getElementById("app");
  app.innerHTML = "";

  if (!state.user) {
    renderLogin(app);
  } else {
    renderShell(app);
  }
}

function renderLogin(app) {
  const template = document.getElementById("login-template");
  app.appendChild(template.content.cloneNode(true));

  document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const username = String(form.get("username") || "").trim();
    const password = String(form.get("password") || "").trim();
    const errorNode = document.getElementById("login-error");

    if (username === "admin" && password === "12345") {
      state.user = {
        username: "admin",
        nickname: "系统管理员",
        loginAt: Date.now(),
      };
      openTab("项目概况");
      state.activeTab = "项目概况";
      showToast("登录成功，进入系统首页");
      render();
      return;
    }

    errorNode.textContent = "账号或密码错误，请输入 admin / 12345 继续演示。";
    errorNode.classList.remove("hidden");
  });
}

function renderShell(app) {
  const template = document.getElementById("app-template");
  app.appendChild(template.content.cloneNode(true));

  const sidebar = document.getElementById("sidebar");
  if (state.isSidebarCollapsed) {
    sidebar.classList.add("collapsed");
  }
  const menuChildren = document.getElementById("menu-children");
  const menuToggleBtn = document.getElementById("menu-group-toggle");
  const sidebarRailToggle = document.getElementById("sidebar-rail-toggle");
  if (!state.isProjectMenuExpanded) {
    menuChildren.classList.add("collapsed");
    menuToggleBtn.textContent = "▸";
  } else {
    menuToggleBtn.textContent = "▾";
  }

  document.getElementById("toggle-sidebar").textContent = state.isSidebarCollapsed ? "展开侧栏" : "折叠侧栏";
  sidebarRailToggle.textContent = state.isSidebarCollapsed ? "▶" : "◀";

  document.getElementById("session-remaining").textContent = getSessionRemaining();
  document.getElementById("nickname-display").textContent = state.user.nickname;
  document.getElementById("avatar-letter").textContent = state.user.nickname.charAt(0);

  renderTabs();
  renderActiveView();
  bindGlobalEvents();
}

function renderTabs() {
  const tabs = document.getElementById("tabs");
  tabs.className = "tabs";
  tabs.innerHTML = state.openTabs
    .map(
      (tab) => `
        <button class="tab-chip ${state.activeTab === tab ? "active" : ""}" data-tab="${tab}" type="button">
          <span>${tab}</span>
          <span class="tab-close" data-close-tab="${tab}">×</span>
        </button>
      `
    )
    .join("");
}

function renderActiveView() {
  const container = document.getElementById("view-container");
  if (state.activeTab === "项目概况") {
    container.innerHTML = renderProjectOverviewView();
    bindProjectOverviewEvents();
  } else {
    container.innerHTML = renderDocumentManagementView();
    bindDocumentManagementEvents();
  }

  renderModalLayer();
}

function renderProjectOverviewView() {
  const rows = getFilteredProjects();

  return `
    <div class="view-page">
      <div class="page-header">
        <div>
          <div class="page-title">项目概况</div>
          <div class="page-subtitle">以分页列表形式管理项目主数据，并提供文档跳转入口</div>
        </div>
        <div class="header-actions">
          <button id="add-project-btn" class="primary-btn" type="button">新增项目</button>
        </div>
      </div>

      <div class="card search-card">
        <div class="search-grid">
          <label>
            <span>项目名称</span>
            <input id="search-name" value="${escapeHtml(state.search.name)}" placeholder="模糊搜索项目名称" />
          </label>
          <label>
            <span>项目经理</span>
            <input id="search-manager" value="${escapeHtml(state.search.manager)}" placeholder="模糊搜索项目经理" />
          </label>
          <label>
            <span>版本号</span>
            <input id="search-version" value="${escapeHtml(state.search.version)}" placeholder="模糊搜索版本号" />
          </label>
          <label>
            <span>需求部门</span>
            <input id="search-department" value="${escapeHtml(state.search.department)}" placeholder="模糊搜索需求部门" />
          </label>
        </div>
        <div class="search-actions">
          <button id="search-submit-btn" class="primary-btn" type="button">搜索</button>
          <button id="search-reset-btn" class="ghost-btn" type="button">重置</button>
        </div>
      </div>

      <div class="card">
        <div class="card-title-row">
          <h3>项目列表</h3>
          <span class="table-meta">共 ${rows.length} 条结果 · 演示分页 1 / 1</span>
        </div>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>项目名称</th>
                <th>版本号</th>
                <th>项目经理</th>
                <th>需求部门</th>
                <th>描述</th>
                <th>需求文档</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              ${
                rows.length
                  ? rows
                      .map((project) => {
                        const docCount = getDocsForProject(project).length;
                        return `
                          <tr>
                            <td>${escapeHtml(project.name)}</td>
                            <td>${escapeHtml(project.version)}</td>
                            <td>${escapeHtml(project.manager)}</td>
                            <td>${escapeHtml(project.department || "-")}</td>
                            <td class="cell-description">${escapeHtml(project.description)}</td>
                            <td>
                              <button class="link-btn" data-open-docs="${project.id}" type="button">查看文档（${docCount}）</button>
                            </td>
                            <td>
                              <div class="inline-actions">
                                <button class="mini-btn" data-edit-project="${project.id}" type="button">修改</button>
                                <button class="mini-btn danger" data-delete-project="${project.id}" type="button">删除</button>
                              </div>
                            </td>
                          </tr>
                        `;
                      })
                      .join("")
                  : `
                    <tr>
                      <td colspan="7">
                        <div class="empty-inline">
                          <strong>未查询到匹配项目</strong>
                          <span>可调整筛选条件后重新查询。</span>
                        </div>
                      </td>
                    </tr>
                  `
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function renderDocumentManagementView() {
  const treeHtml = renderTree(null, 0);
  const selectedNode = getTreeNode(state.selectedTreeNodeId);
  const docs = getDocsForNodeScope(state.selectedTreeNodeId);
  const nodePath = buildNodePath(state.selectedTreeNodeId).join(" / ");

  return `
    <div class="view-page">
      <div class="page-header">
        <div>
          <div class="page-title">需求文档管理</div>
          <div class="page-subtitle">左侧目录树导航，右侧展示当前选中目录及其子目录下的文件</div>
        </div>
        <div class="header-actions">
          <button id="trigger-upload-file" class="secondary-btn" type="button">上传文件</button>
          <button id="trigger-upload-folder" class="primary-btn" type="button">上传文件夹 / 大目录</button>
        </div>
      </div>

      <div class="doc-layout">
        <section class="card tree-panel">
          <div class="card-title-row">
            <h3>需求文档目录</h3>
            <span class="table-meta">树结构：项目名称 → 版本号 → 子目录/文件</span>
          </div>
          <div class="tree-container">${treeHtml}</div>
        </section>

        <section class="card doc-panel">
          <div class="card-title-row">
            <div>
              <h3>文档表单</h3>
              <div class="selection-hint">当前选中：${escapeHtml(nodePath || (selectedNode ? selectedNode.label : "未选择"))}</div>
            </div>
            <span class="table-meta">汇总文件数：${docs.length}</span>
          </div>
          ${
            docs.length
              ? `
                <div class="table-wrap">
                  <table class="data-table">
                    <thead>
                      <tr>
                        <th>文档名称</th>
                        <th>项目名称</th>
                        <th>版本号</th>
                        <th>项目经理</th>
                        <th>需求部门</th>
                        <th>上传人</th>
                        <th>更新时间</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${docs
                        .map(
                          (doc) => `
                            <tr>
                              <td>
                                <div class="doc-name-cell">
                                  <span class="format-pill">${escapeHtml(doc.format.toUpperCase())}</span>
                                  <div>
                                    <strong>${escapeHtml(doc.name)}</strong>
                                    <div class="doc-node-path">${escapeHtml(buildNodePath(doc.nodeId).join(" / "))}</div>
                                  </div>
                                </div>
                              </td>
                              <td>${escapeHtml(doc.projectName)}</td>
                              <td>${escapeHtml(doc.version)}</td>
                              <td>${escapeHtml(doc.manager)}</td>
                              <td>${escapeHtml(doc.department)}</td>
                              <td>${escapeHtml(doc.uploader)}</td>
                              <td>${escapeHtml(doc.updatedAt)}</td>
                              <td>
                                <div class="inline-actions stacked">
                                  <button class="mini-btn" data-preview-doc="${doc.id}" type="button">预览</button>
                                  <button class="mini-btn" data-download-doc="${doc.id}" type="button">下载</button>
                                  <button class="mini-btn" data-update-doc="${doc.id}" type="button">更新</button>
                                  <button class="mini-btn danger" data-delete-doc="${doc.id}" type="button">删除</button>
                                </div>
                              </td>
                            </tr>
                          `
                        )
                        .join("")}
                    </tbody>
                  </table>
                </div>
              `
              : `
                <div class="empty-state">
                  <div class="empty-illustration">📁</div>
                  <h3>当前目录下无需求文档</h3>
                  <p>当前选中目录及其子目录下均未发现文件，可立即上传文件、文件夹或大目录。</p>
                  <div class="empty-actions">
                    <button id="empty-upload-file" class="secondary-btn" type="button">上传文件</button>
                    <button id="empty-upload-folder" class="primary-btn" type="button">立即上传</button>
                  </div>
                  <p class="rule-hint">单次上传总文件数不超过 20 个，总大小不超过 100M；重名时自动追加“-副本”。</p>
                </div>
              `
          }
        </section>
      </div>
    </div>
  `;
}

function renderTree(parentId, depth) {
  const nodes = state.tree.filter((node) => node.parentId === parentId);
  if (!nodes.length) return "";

  return `
    <ul class="tree-list depth-${depth}">
      ${nodes
        .map((node) => {
          const children = state.tree.filter((item) => item.parentId === node.id);
          const hasChildren = Boolean(children.length);
          const isSelected = node.id === state.selectedTreeNodeId;
          return `
            <li>
              <div class="tree-node ${isSelected ? "selected" : ""}">
                <button class="tree-node-main" data-select-node="${node.id}" type="button">
                  <span class="tree-node-icon">${iconForType(node.type)}</span>
                  <span>${escapeHtml(node.label)}</span>
                </button>
                ${
                  hasChildren
                    ? `<button class="tree-toggle" data-toggle-node="${node.id}" type="button">${node.expanded ? "−" : "+"}</button>`
                    : ""
                }
              </div>
              ${hasChildren && node.expanded ? renderTree(node.id, depth + 1) : ""}
            </li>
          `;
        })
        .join("")}
    </ul>
  `;
}

function renderModalLayer() {
  const existing = document.getElementById("modal-layer");
  if (existing) existing.remove();

  const layer = document.createElement("div");
  layer.id = "modal-layer";
  document.body.appendChild(layer);

  const { projectForm, confirmDeleteProject, confirmDeleteDoc, preview } = state.modals;
  if (projectForm.open) {
    layer.innerHTML += renderProjectFormModal();
    bindProjectFormEvents();
  }
  if (confirmDeleteProject.open) {
    layer.innerHTML += renderProjectDeleteModal();
  }
  if (confirmDeleteDoc.open) {
    layer.innerHTML += renderDocDeleteModal();
  }
  if (preview.open) {
    layer.innerHTML += renderPreviewDrawer();
  }

  bindModalEvents();
}

function renderProjectFormModal() {
  const modal = state.modals.projectForm;
  const draft = state.draftProject || {};
  return `
    <div class="modal-mask">
      <div class="modal-card large">
        <div class="modal-header">
          <div>
            <h3>${modal.mode === "create" ? "新增项目" : "修改项目"}</h3>
            <p>必填项：项目名称、版本号、项目经理；支持文件、文件夹、大目录上传。</p>
          </div>
          <button class="icon-btn" data-close-modal="projectForm" type="button">×</button>
        </div>
        <div class="modal-body">
          <div class="form-grid">
            <label>
              <span>项目名称 <em>*</em></span>
              <input data-draft-field="name" value="${escapeHtml(draft.name || "")}" placeholder="请输入项目名称" />
            </label>
            <label>
              <span>版本号 <em>*</em></span>
              <input data-draft-field="version" value="${escapeHtml(draft.version || "")}" placeholder="如 V1.0" />
            </label>
            <label>
              <span>项目经理 <em>*</em></span>
              <input data-draft-field="manager" value="${escapeHtml(draft.manager || "")}" placeholder="请输入项目经理" />
            </label>
            <label>
              <span>需求部门</span>
              <input data-draft-field="department" value="${escapeHtml(draft.department || "")}" placeholder="请输入需求部门" />
            </label>
            <label class="col-span-2">
              <span>描述</span>
              <textarea data-draft-field="description" placeholder="请输入描述信息">${escapeHtml(draft.description || "")}</textarea>
            </label>
          </div>

          <div class="upload-rule-box">
            <div>
              <strong>需求文档</strong>
              <p>可上传文件、文件夹或大目录。单次总文件数不超过 20 个，总大小不超过 100M，重名自动追加“-副本”。</p>
            </div>
            <div class="header-actions">
              <button id="modal-upload-file-btn" class="secondary-btn" type="button">上传文件</button>
              <button id="modal-upload-folder-btn" class="primary-btn" type="button">上传文件夹 / 大目录</button>
            </div>
          </div>

          <div class="tag-board">
            ${
              state.projectDraftDocs.length
                ? state.projectDraftDocs
                    .map(
                      (doc) => `
                        <span class="doc-tag">
                          ${escapeHtml(doc.name)}
                          <button data-remove-draft-doc="${doc.id}" type="button">×</button>
                        </span>
                      `
                    )
                    .join("")
                : '<span class="empty-chip">尚未上传需求文档</span>'
            }
          </div>
          ${modal.error ? `<p class="form-error">${escapeHtml(modal.error)}</p>` : ""}
        </div>
        <div class="modal-footer">
          <button class="ghost-btn" data-close-modal="projectForm" type="button">取消</button>
          <button id="submit-project-form" class="primary-btn" type="button">确定</button>
        </div>
      </div>
    </div>
  `;
}

function renderProjectDeleteModal() {
  const project = state.projects.find((item) => item.id === state.modals.confirmDeleteProject.projectId);
  return `
    <div class="modal-mask">
      <div class="modal-card">
        <div class="modal-header">
          <h3>删除项目确认</h3>
          <button class="icon-btn" data-close-modal="confirmDeleteProject" type="button">×</button>
        </div>
        <div class="modal-body">
          <p>确定删除项目 <strong>${escapeHtml(project?.name || "")}</strong> / <strong>${escapeHtml(project?.version || "")}</strong> 吗？</p>
          <div class="warning-box">
            若当前项目下有关联版本目录或需求文档，确认后将同步级联删除关联目录及文件。该级联策略仅适用于“项目概况”的项目删除操作。
          </div>
        </div>
        <div class="modal-footer">
          <button class="ghost-btn" data-close-modal="confirmDeleteProject" type="button">取消</button>
          <button id="confirm-delete-project" class="danger-btn" type="button">确认删除</button>
        </div>
      </div>
    </div>
  `;
}

function renderDocDeleteModal() {
  const doc = state.documents.find((item) => item.id === state.modals.confirmDeleteDoc.docId);
  return `
    <div class="modal-mask">
      <div class="modal-card">
        <div class="modal-header">
          <h3>删除文档确认</h3>
          <button class="icon-btn" data-close-modal="confirmDeleteDoc" type="button">×</button>
        </div>
        <div class="modal-body">
          <p>确定删除文件 <strong>${escapeHtml(doc?.name || "")}</strong> 吗？删除后将从当前目录树和表格中移除。</p>
        </div>
        <div class="modal-footer">
          <button class="ghost-btn" data-close-modal="confirmDeleteDoc" type="button">取消</button>
          <button id="confirm-delete-doc" class="danger-btn" type="button">确认删除</button>
        </div>
      </div>
    </div>
  `;
}

function renderPreviewDrawer() {
  const doc = state.documents.find((item) => item.id === state.modals.preview.docId);
  if (!doc) return "";

  const content = doc.previewable
    ? `
      <div class="preview-supported">
        <div class="preview-meta-grid">
          <div><span>文档名称</span><strong>${escapeHtml(doc.name)}</strong></div>
          <div><span>所属项目</span><strong>${escapeHtml(doc.projectName)}</strong></div>
          <div><span>版本号</span><strong>${escapeHtml(doc.version)}</strong></div>
          <div><span>目录路径</span><strong>${escapeHtml(buildNodePath(doc.nodeId).join(" / "))}</strong></div>
        </div>
        <div class="preview-sheet">
          <div class="preview-sheet-toolbar">
            <span>${escapeHtml(doc.format.toUpperCase())} 预览</span>
            <span>演示稿件</span>
          </div>
          <div class="preview-sheet-content">
            <h4>${escapeHtml(doc.name)}</h4>
            <p>${escapeHtml(doc.summary || "这里展示文件预览内容区域，可接入 PDF、Office、HTML 等预览组件。")}</p>
            <ul>
              <li>当前为原型模式，展示预览容器和关键信息布局。</li>
              <li>支持格式：rp / Excel / Word / HTML / PPT / PDF / ZIP。</li>
              <li>后续接入真实文件服务后，可替换为实际预览组件。</li>
            </ul>
          </div>
        </div>
      </div>
    `
    : `
      <div class="preview-unsupported">
        <div class="preview-icon">!</div>
        <h4>不支持当前文件格式预览，请下载后在本地打开</h4>
        <p>当前文件：${escapeHtml(doc.name)}</p>
      </div>
    `;

  return `
    <div class="drawer-mask">
      <aside class="preview-drawer">
        <div class="drawer-header">
          <div>
            <h3>文件预览</h3>
            <p>右侧抽屉式预览区域</p>
          </div>
          <button class="icon-btn" data-close-modal="preview" type="button">×</button>
        </div>
        <div class="drawer-body">${content}</div>
      </aside>
    </div>
  `;
}

function bindGlobalEvents() {
  document.getElementById("toggle-sidebar").addEventListener("click", () => {
    state.isSidebarCollapsed = !state.isSidebarCollapsed;
    render();
  });

  document.getElementById("sidebar-rail-toggle").addEventListener("click", () => {
    state.isSidebarCollapsed = !state.isSidebarCollapsed;
    render();
  });

  document.getElementById("sidebar-expand-handle")?.addEventListener("click", () => {
    state.isSidebarCollapsed = false;
    render();
  });

  document.getElementById("menu-group-toggle").addEventListener("click", () => {
    state.isProjectMenuExpanded = !state.isProjectMenuExpanded;
    render();
  });

  document.querySelectorAll("[data-menu]").forEach((button) => {
    button.addEventListener("click", () => {
      openTab(button.dataset.menu);
      render();
    });
  });

  document.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", (event) => {
      if (event.target.dataset.closeTab) return;
      state.activeTab = button.dataset.tab;
      render();
    });
  });

  document.querySelectorAll("[data-close-tab]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      closeTab(button.dataset.closeTab);
      render();
    });
  });

  const trigger = document.getElementById("avatar-trigger");
  const dropdown = document.getElementById("avatar-dropdown");
  trigger.addEventListener("click", () => dropdown.classList.toggle("hidden"));

  document.getElementById("logout-btn").addEventListener("click", () => {
    state.user = null;
    showToast("已退出登录");
    render();
  });

  document.getElementById("project-upload-files").addEventListener("change", (event) => handleProjectUpload(event, "file"));
  document.getElementById("project-upload-folder").addEventListener("change", (event) => handleProjectUpload(event, "folder"));
  document.getElementById("doc-upload-files").addEventListener("change", (event) => handleDocUpload(event, "file"));
  document.getElementById("doc-upload-folder").addEventListener("change", (event) => handleDocUpload(event, "folder"));
  document.getElementById("doc-update-file").addEventListener("change", handleDocUpdate);
}

function bindProjectOverviewEvents() {
  ["name", "manager", "version", "department"].forEach((key) => {
    const input = document.getElementById(`search-${key}`);
    input?.addEventListener("input", (event) => {
      state.search[key] = event.target.value;
    });
  });

  document.getElementById("search-submit-btn").addEventListener("click", () => {
    state.filtersApplied = true;
    render();
  });

  document.getElementById("search-reset-btn").addEventListener("click", () => {
    state.search = { name: "", version: "", manager: "", department: "" };
    state.filtersApplied = false;
    render();
  });

  document.getElementById("add-project-btn").addEventListener("click", () => {
    resetDraftProject("create");
    render();
  });

  document.querySelectorAll("[data-edit-project]").forEach((button) => {
    button.addEventListener("click", () => {
      resetDraftProject("edit", button.dataset.editProject);
      render();
    });
  });

  document.querySelectorAll("[data-delete-project]").forEach((button) => {
    button.addEventListener("click", () => {
      state.modals.confirmDeleteProject = { open: true, projectId: button.dataset.deleteProject };
      render();
    });
  });

  document.querySelectorAll("[data-open-docs]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = state.projects.find((item) => item.id === button.dataset.openDocs);
      if (!project) return;
      state.selectedTreeNodeId = project.docNodeId;
      openTab("需求文档管理");
      state.activeTab = "需求文档管理";
      showToast(`已跳转至 ${project.name} / ${project.version} 的需求文档目录`);
      render();
    });
  });
}

function bindDocumentManagementEvents() {
  document.querySelectorAll("[data-select-node]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedTreeNodeId = button.dataset.selectNode;
      render();
    });
  });

  document.querySelectorAll("[data-toggle-node]").forEach((button) => {
    button.addEventListener("click", () => {
      const node = getTreeNode(button.dataset.toggleNode);
      node.expanded = !node.expanded;
      render();
    });
  });

  const fileButtons = ["trigger-upload-file", "empty-upload-file"];
  fileButtons.forEach((id) => {
    const button = document.getElementById(id);
    button?.addEventListener("click", () => document.getElementById("doc-upload-files").click());
  });

  const folderButtons = ["trigger-upload-folder", "empty-upload-folder"];
  folderButtons.forEach((id) => {
    const button = document.getElementById(id);
    button?.addEventListener("click", () => document.getElementById("doc-upload-folder").click());
  });

  document.querySelectorAll("[data-preview-doc]").forEach((button) => {
    button.addEventListener("click", () => {
      state.modals.preview = { open: true, docId: button.dataset.previewDoc };
      render();
    });
  });

  document.querySelectorAll("[data-delete-doc]").forEach((button) => {
    button.addEventListener("click", () => {
      state.modals.confirmDeleteDoc = { open: true, docId: button.dataset.deleteDoc };
      render();
    });
  });

  document.querySelectorAll("[data-download-doc]").forEach((button) => {
    button.addEventListener("click", () => {
      const doc = state.documents.find((item) => item.id === button.dataset.downloadDoc);
      showToast(`已触发下载：${doc?.name || "文件"}`);
    });
  });

  document.querySelectorAll("[data-update-doc]").forEach((button) => {
    button.addEventListener("click", () => {
      document.getElementById("doc-update-file").dataset.docId = button.dataset.updateDoc;
      document.getElementById("doc-update-file").click();
    });
  });
}

function bindProjectFormEvents() {
  document.querySelectorAll("[data-draft-field]").forEach((field) => {
    field.addEventListener("input", (event) => {
      state.draftProject[event.target.dataset.draftField] = event.target.value;
    });
  });

  document.getElementById("modal-upload-file-btn").addEventListener("click", () => {
    document.getElementById("project-upload-files").click();
  });

  document.getElementById("modal-upload-folder-btn").addEventListener("click", () => {
    document.getElementById("project-upload-folder").click();
  });

  document.querySelectorAll("[data-remove-draft-doc]").forEach((button) => {
    button.addEventListener("click", () => {
      state.projectDraftDocs = state.projectDraftDocs.filter((doc) => doc.id !== button.dataset.removeDraftDoc);
      render();
    });
  });

  document.getElementById("submit-project-form").addEventListener("click", submitProjectForm);
}

function bindModalEvents() {
  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.closeModal;
      state.modals[key].open = false;
      render();
    });
  });

  const deleteProjectBtn = document.getElementById("confirm-delete-project");
  deleteProjectBtn?.addEventListener("click", () => {
    const projectId = state.modals.confirmDeleteProject.projectId;
    const project = state.projects.find((item) => item.id === projectId);
    if (!project) return;

    const nodeIds = [project.docNodeId, ...getDescendantNodeIds(project.docNodeId)];
    state.documents = state.documents.filter((doc) => !nodeIds.includes(doc.nodeId));
    state.tree = state.tree.filter((node) => ![project.docNodeId, ...nodeIds].includes(node.id));
    state.projects = state.projects.filter((item) => item.id !== projectId);
    state.modals.confirmDeleteProject = { open: false, projectId: null };
    state.selectedTreeNodeId = state.tree.find((node) => node.type === "version")?.id || null;
    showToast(`已删除项目：${project.name} ${project.version}`);
    render();
  });

  const deleteDocBtn = document.getElementById("confirm-delete-doc");
  deleteDocBtn?.addEventListener("click", () => {
    const docId = state.modals.confirmDeleteDoc.docId;
    const doc = state.documents.find((item) => item.id === docId);
    state.documents = state.documents.filter((item) => item.id !== docId);
    state.projects = state.projects.map((project) => ({
      ...project,
      docIds: project.docIds.filter((id) => id !== docId),
    }));
    state.modals.confirmDeleteDoc = { open: false, docId: null };
    showToast(`已删除文档：${doc?.name || ""}`);
    render();
  });
}

function submitProjectForm() {
  const draft = state.draftProject;
  if (!draft.name.trim() || !draft.version.trim() || !draft.manager.trim()) {
    state.modals.projectForm.error = "请填写必填项：项目名称、版本号、项目经理。";
    render();
    return;
  }

  const duplicate = state.projects.find(
    (project) =>
      project.name === draft.name.trim() &&
      project.version === draft.version.trim() &&
      project.id !== state.modals.projectForm.projectId
  );

  if (duplicate) {
    state.modals.projectForm.error = "已存在相同项目名称与版本号的项目，请修改名称或版本号后重试。";
    render();
    return;
  }

  if (state.modals.projectForm.mode === "create") {
    const projectId = `project-${Date.now()}`;
    const projectNodeId = `node-${projectId}`;
    const versionNodeId = `${projectNodeId}-${sanitizeId(draft.version)}`;

    state.projects.unshift({
      id: projectId,
      name: draft.name.trim(),
      version: draft.version.trim(),
      manager: draft.manager.trim(),
      department: draft.department.trim(),
      description: draft.description.trim(),
      docNodeId: versionNodeId,
      docIds: [],
    });

    state.tree.push(
      { id: projectNodeId, type: "project", label: draft.name.trim(), parentId: null, expanded: true },
      { id: versionNodeId, type: "version", label: draft.version.trim(), parentId: projectNodeId, expanded: true }
    );

    attachDraftDocsToProject(projectId, draft, versionNodeId);
    showToast("新增项目成功");
  } else {
    const project = state.projects.find((item) => item.id === state.modals.projectForm.projectId);
    if (!project) return;
    project.name = draft.name.trim();
    project.version = draft.version.trim();
    project.manager = draft.manager.trim();
    project.department = draft.department.trim();
    project.description = draft.description.trim();

    const versionNode = getTreeNode(project.docNodeId);
    const projectNode = versionNode ? getTreeNode(versionNode.parentId) : null;
    if (versionNode) versionNode.label = project.version;
    if (projectNode) projectNode.label = project.name;

    state.documents = state.documents.map((doc) =>
      project.docIds.includes(doc.id)
        ? {
            ...doc,
            projectName: project.name,
            version: project.version,
            manager: project.manager,
            department: project.department,
          }
        : doc
    );

    attachDraftDocsToProject(project.id, draft, project.docNodeId);
    showToast("项目信息已更新");
  }

  state.modals.projectForm = { open: false, mode: "create", projectId: null, error: "" };
  render();
}

function attachDraftDocsToProject(projectId, draft, targetNodeId) {
  const project = state.projects.find((item) => item.id === projectId);
  if (!project) return;

  const existingIds = new Set(project.docIds);
  state.projectDraftDocs.forEach((draftDoc) => {
    if (draftDoc.existing) return;
    const newDocId = `doc-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    state.documents.unshift({
      id: newDocId,
      name: draftDoc.name,
      projectName: draft.name.trim(),
      version: draft.version.trim(),
      manager: draft.manager.trim(),
      department: draft.department.trim(),
      uploader: state.user.nickname,
      updatedAt: nowText(),
      format: guessFormat(draftDoc.name),
      nodeId: targetNodeId,
      previewable: isPreviewable(guessFormat(draftDoc.name)),
      summary: "新上传需求文档，原型模式下仅做交互演示。",
    });
    existingIds.add(newDocId);
  });

  project.docIds = Array.from(existingIds);
}

function handleProjectUpload(event, scope) {
  const files = Array.from(event.target.files || []);
  if (!files.length) return;
  const validation = validateUpload(files);
  if (!validation.valid) {
    state.modals.projectForm.error = validation.message;
    render();
    return;
  }

  const names = files.map((file) => file.name);
  names.forEach((name, index) => {
    state.projectDraftDocs.push({
      id: `draft-${Date.now()}-${index}`,
      name: makeUniqueName(name, state.projectDraftDocs.map((item) => item.name)),
      existing: false,
    });
  });
  event.target.value = "";
  state.modals.projectForm.error = "";
  showToast(scope === "folder" ? "已导入文件夹/大目录到项目弹窗" : "已导入文件到项目弹窗");
  render();
}

function handleDocUpload(event, scope) {
  const files = Array.from(event.target.files || []);
  if (!files.length || !state.selectedTreeNodeId) return;
  const validation = validateUpload(files);
  if (!validation.valid) {
    showToast(validation.message, true);
    event.target.value = "";
    return;
  }

  const selectedNode = getTreeNode(state.selectedTreeNodeId);
  const projectVersionInfo = getProjectVersionByNode(state.selectedTreeNodeId);
  if (!projectVersionInfo) return;

  files.forEach((file, index) => {
    const uniqueName = makeUniqueName(file.name, state.documents.map((doc) => doc.name));
    const newDocId = `doc-${Date.now()}-${index}`;
    state.documents.unshift({
      id: newDocId,
      name: uniqueName,
      projectName: projectVersionInfo.projectName,
      version: projectVersionInfo.version,
      manager: projectVersionInfo.manager,
      department: projectVersionInfo.department,
      uploader: state.user.nickname,
      updatedAt: nowText(),
      format: guessFormat(uniqueName),
      nodeId: selectedNode.type === "project" ? projectVersionInfo.versionNodeId : state.selectedTreeNodeId,
      previewable: isPreviewable(guessFormat(uniqueName)),
      summary: "通过立即上传或目录上传新增的文档。",
    });
    const project = state.projects.find((item) => item.id === projectVersionInfo.projectId);
    project?.docIds.unshift(newDocId);
  });
  event.target.value = "";
  showToast(scope === "folder" ? "上传成功，目录树和文档表单已刷新" : "文件上传成功");
  render();
}

function handleDocUpdate(event) {
  const docId = event.target.dataset.docId;
  const file = (event.target.files || [])[0];
  if (!docId || !file) return;
  const doc = state.documents.find((item) => item.id === docId);
  if (!doc) return;
  doc.name = file.name;
  doc.updatedAt = nowText();
  doc.format = guessFormat(file.name);
  doc.previewable = isPreviewable(doc.format);
  doc.summary = "文件已通过“更新”操作替换，列表自动刷新。";
  event.target.value = "";
  showToast(`已更新文档：${doc.name}`);
  render();
}

function getFilteredProjects() {
  const list = [...state.projects];
  return list.filter((project) => {
    return (
      includesText(project.name, state.search.name) &&
      includesText(project.version, state.search.version) &&
      includesText(project.manager, state.search.manager) &&
      includesText(project.department, state.search.department)
    );
  });
}

function getDocsForProject(project) {
  return state.documents.filter((doc) => doc.projectName === project.name && doc.version === project.version);
}

function getDocsForNodeScope(nodeId) {
  if (!nodeId) return [];
  const nodeIds = [nodeId, ...getDescendantNodeIds(nodeId)];
  return state.documents.filter((doc) => nodeIds.includes(doc.nodeId));
}

function getDescendantNodeIds(nodeId) {
  const children = state.tree.filter((node) => node.parentId === nodeId);
  return children.flatMap((child) => [child.id, ...getDescendantNodeIds(child.id)]);
}

function getTreeNode(nodeId) {
  return state.tree.find((node) => node.id === nodeId);
}

function buildNodePath(nodeId) {
  const path = [];
  let current = getTreeNode(nodeId);
  while (current) {
    path.unshift(current.label);
    current = current.parentId ? getTreeNode(current.parentId) : null;
  }
  return path;
}

function getProjectVersionByNode(nodeId) {
  const node = getTreeNode(nodeId);
  if (!node) return null;
  let versionNode = node;
  if (node.type === "project") {
    versionNode = state.tree.find((item) => item.parentId === node.id && item.type === "version");
  } else if (node.type === "folder") {
    let current = node;
    while (current && current.type !== "version") {
      current = getTreeNode(current.parentId);
    }
    versionNode = current;
  }

  if (!versionNode) return null;
  const projectNode = getTreeNode(versionNode.parentId);
  const project = state.projects.find((item) => item.docNodeId === versionNode.id);
  return {
    projectId: project?.id,
    projectName: projectNode?.label || project?.name || "",
    version: versionNode.label,
    manager: project?.manager || "",
    department: project?.department || "",
    versionNodeId: versionNode.id,
  };
}

function validateUpload(files) {
  const totalBytes = files.reduce((sum, file) => sum + (file.size || 1024 * 1024), 0);
  if (files.length > 20) {
    return { valid: false, message: "单次上传总文件数不可超过 20 个。" };
  }
  if (totalBytes > 100 * 1024 * 1024) {
    return { valid: false, message: "单次上传总大小不可超过 100M。" };
  }
  return { valid: true };
}

function openTab(tabName) {
  if (!state.openTabs.includes(tabName)) state.openTabs.push(tabName);
  state.activeTab = tabName;
}

function closeTab(tabName) {
  if (state.openTabs.length === 1) return;
  state.openTabs = state.openTabs.filter((item) => item !== tabName);
  if (state.activeTab === tabName) {
    state.activeTab = state.openTabs[state.openTabs.length - 1];
  }
}

function includesText(source, keyword) {
  if (!keyword.trim()) return true;
  return source.toLowerCase().includes(keyword.trim().toLowerCase());
}

function showToast(message, isError = false) {
  const root = document.getElementById("toast-root");
  if (!root) return;
  const toast = document.createElement("div");
  toast.className = `toast ${isError ? "error" : ""}`;
  toast.textContent = message;
  root.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("show");
  }, 20);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 200);
  }, 2600);
}

function getSessionRemaining() {
  if (!state.user?.loginAt) return "5h";
  const remaining = Math.max(0, 5 * 60 * 60 * 1000 - (Date.now() - state.user.loginAt));
  const hours = Math.floor(remaining / (60 * 60 * 1000));
  const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));
  return `${hours}h ${minutes}m`;
}

function iconForType(type) {
  return {
    project: "📦",
    version: "🧩",
    folder: "📁",
  }[type] || "•";
}

function sanitizeId(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function nowText() {
  const date = new Date();
  const pad = (num) => String(num).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function guessFormat(fileName) {
  const suffix = fileName.split(".").pop()?.toLowerCase() || "file";
  if (suffix === "xlsx" || suffix === "xls") return "excel";
  if (suffix === "doc" || suffix === "docx") return "word";
  if (suffix === "ppt" || suffix === "pptx") return "ppt";
  return suffix;
}

function isPreviewable(format) {
  return ["rp", "excel", "word", "html", "ppt", "pdf"].includes(format);
}

function makeUniqueName(name, existingNames) {
  if (!existingNames.includes(name)) return name;
  const dotIndex = name.lastIndexOf(".");
  const hasExt = dotIndex > 0;
  const base = hasExt ? name.slice(0, dotIndex) : name;
  const ext = hasExt ? name.slice(dotIndex) : "";
  let candidate = `${base}-副本${ext}`;
  let counter = 2;
  while (existingNames.includes(candidate)) {
    candidate = `${base}-副本${counter}${ext}`;
    counter += 1;
  }
  return candidate;
}

function escapeHtml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

render();
