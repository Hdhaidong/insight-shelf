# FactoryToShelf 从工厂到货架

**独立主页**：https://factorytoshelf.hdhaidong.workers.dev

美国渠道公司获客站：帮中国工厂与品牌把产品铺进美国主流零售货架（深圳运营中心 + 美国海外仓双基地）。

## 结构

```
├── index.js         # Cloudflare Worker：Shelf AI 智能客服 + API 路由
├── site/            # 静态站点（全部页面与资产）
├── schema.sql       # D1 数据库表结构（registrations / sample_requests / chat_logs）
└── wrangler.jsonc   # 部署配置（Workers AI + D1 + 静态资产）
```

## Worker 能力（index.js）

- **Shelf AI 智能客服**：中文对话，内置平台知识库（渠道网络、合作模式、服务套餐、FAQ），模型链 `glm-4.7-flash → qwen3-30b-a3b-fp8 → gpt-oss-20b`（Workers AI）
- **Agent 工具调用**：searchSuppliers / channelInfo / requestSample / analyzeProduct / getStats
- **API 路由**：
  - `GET  /api/health` — 健康检查（AI / DB 绑定状态）
  - `GET  /api/channels` — 渠道信息（支持 ?id= 过滤）
  - `POST /api/chat` — AI 对话（含工具调用）
  - `POST /api/analyze` — 产品选品分析
  - `POST /api/register` — 工厂/买家注册（role: supplier | buyer）
  - `POST /api/sample-request` — 买家索样登记
- 非匹配路径回退 `env.ASSETS.fetch()` 由静态资产接管

## 部署

```bash
npx wrangler deploy
```

首次部署前需初始化 D1：

```bash
npx wrangler d1 execute factorytoshelf-db --remote --file=schema.sql
```

## 隶属关系

本仓为独立仓，隶属合并总仓 [`insight-shelf`](https://github.com/Hdhaidong/insight-shelf)（factorytoshelf + insightmarketplac 两项目合并视图）。两个站点各自保持独立 Worker 主页，互不影响。

## 来源说明

源码于 2026-09-06 从线上恢复：Worker 脚本取自 Cloudflare API 脚本下载端点；静态站点通过服务绑定方式从线上抓取回源（站点 100+ 页面 + 资产 + sitemap 全量）。与线上部署内容一致。
